import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const res = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const data = await res.json()
    this.setState({cryptoList: data, isLoading: false})
  }

  render() {
    const {isLoading, cryptoList} = this.state
    console.log(cryptoList)
    return (
      <div className="react-app">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" width={80} height={80} color="#ffffff" />
          </div>
        ) : (
          <div className="crypto-container">
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-image"
            />
            <CryptocurrenciesList list={cryptoList} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
