import {Component} from 'react'

import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeHeading,
  HomeDescription,
  Image,
  RegisterButton,
  Container,
  ViewHeading,
  ViewDescription,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {name, topic, condition} = value
          return (
            <>
              <Header />
              {condition ? (
                <Container>
                  <HomeHeading>Welcome to Meetup</HomeHeading>
                  <HomeDescription>
                    Please register for the topic
                  </HomeDescription>
                  <Link to="/register">
                    <RegisterButton type="button">Register</RegisterButton>
                  </Link>

                  <br />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </Container>
              ) : (
                <Container>
                  <ViewHeading>{`Hello ${name}`}</ViewHeading>
                  <ViewDescription>{`Welcome to ${topic}`}</ViewDescription>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </Container>
              )}
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}
export default Home
