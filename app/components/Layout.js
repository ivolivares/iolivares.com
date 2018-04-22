import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Head from 'next/head'
import Header from './Header'
import ServiceWorker from './ServiceWorker'

import '../styles/main.css'

class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: true
    }
    this.updateLoaded()
  }

  updateLoaded() {
    Router.onRouteChangeStart = (url) => {
      console.log(`Loading: ${url}`)
      this.setState({ loaded: false })
      console.log(this.state)
    }
    Router.onRouteChangeComplete = () => this.setState({ loaded: true })
    Router.onRouteChangeError = () => this.setState({ loaded: true })
  }

  render() {
    const { children, title = 'Iván Olivares Rojas | Front-end software developer' } = this.props

    return (
      <div>
        <Head>
          <title>{ title }</title>
        </Head>
        <Header />
        <div className="io" style={{ display: this.state.loaded ? 'block' : 'none' }}>
          <main>{ children }</main>
        </div>
        <ServiceWorker />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout