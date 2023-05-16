// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https:/apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCrypto()
  }

  getCrypto = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()

    this.setState({
      cryptoCurrencyData: fetchedData.map(each => ({
        id: each.id,
        currencyName: each.currency_name,
        usdValue: each.usd_value,
        currencyLogo: each.currency_logo,
        euroValue: each.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptoCurrencyList = () => {
    const {cryptoCurrencyData} = this.state

    return <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" width={50} height={50} />
        ) : (
          this.renderCryptoCurrencyList()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
