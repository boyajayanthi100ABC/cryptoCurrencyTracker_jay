// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} = cryptoDetails

  return (
    <li className="item-crypto">
      <div className="container-logo-title" data-testid="loader">
        <img
          className="logo-currency"
          src={currencyLogoUrl}
          alt={currencyName}
        />
        <p className="name-currency"> {currencyName} </p>
      </div>
      <div className="ud-euro-container">
        <p className="value-currency"> {usdValue} </p>
        <p className="value-currency"> {euroValue} </p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
