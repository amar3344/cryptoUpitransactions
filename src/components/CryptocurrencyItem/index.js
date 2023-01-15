import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  return (
    <li className="each-crypto-item">
      <div>
        <img
          src={details.currency_logo}
          alt={details.currency_name}
          className="crypto-logo"
        />
        <p className="currency-name">{details.currency_name}</p>
      </div>

      <div>
        <p className="value">{details.usd_value}</p>
        <p className="value">{details.euro_value}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
