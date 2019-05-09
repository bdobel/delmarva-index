// import React, { Component } from 'react';

// import '../css/header.css';

// export default class Card extends Component {
//   render() {
//     return (
//       <div className="row">
//         myCard
//       </div>
//     );
//   }
// }


import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

import thumbnail from '../img/stephen-dawson-670638-unsplash.jpg'

import '../css/card.css';

const CardExampleImageCard = () => (
  <Card>
    {/* <Image src='../img/stephen-dawson-670638-unsplash.jpg' wrapped ui={false} /> */}
    <Image src={thumbnail} wrapped ui={false} />
    <Card.Content>
      <Card.Header id="card-title">Delmarva Dashboard</Card.Header>
      <Card.Description className="card-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam, vulputate eu pharetra nec, mattis ac neque. Duis...
      </Card.Description>
      <Button id="button-green">Launch Dashboard</Button>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard
