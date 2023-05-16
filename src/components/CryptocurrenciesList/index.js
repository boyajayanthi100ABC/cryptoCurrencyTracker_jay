// Write your JS code here

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptosHeader = () => (
    <div className="header-lst">
      <p className="list-heading"> Coin Type </p>
      <div className="usd-container">
        <p className="coin-heading">USD</p>
        <p className="coin-heading">EURO </p>
      </div>
    </div>
  )

  renderCryptoView = () => {
    const {cryptoCurrencyData} = this.props

    return (
      <div className="crypto-container" data-testid="loader">
        {this.renderCryptosHeader()}
        <ul className="crypto-list">
          {cryptoCurrencyData.map(each => (
            <CryptocurrencyItem cryptoDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="currencies-container" data-testid="loader">
        <h1 className="main-heading"> Cryptocurrency Tracker </h1>
        <img
          className="crypto-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptoView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
