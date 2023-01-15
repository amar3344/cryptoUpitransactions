import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {list} = props

  return (
    <ul className="crypto-list">
      <div className="heading-container">
        <p>Coin Type</p>
        <div>
          <p>USD</p>
          <p>EURO</p>
        </div>
      </div>
      {list.map(item => (
        <CryptocurrencyItem key={item.id} details={item} />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList
