import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'

import '../css/footer.css';

export default class Footer extends Component {
  render () {
    return(
      <Segment inverted vertical pad-move-down id="footer-theme">
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Partners</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Data</List.Item>
                  <List.Item as='a'>Visualizations</List.Item>
                  <List.Item as='a'>Training</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  The Delmarva Index
                </Header>
                <p>
                  Making information available to everyone.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
