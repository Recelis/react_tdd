import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
  // want to export bare component for test

  componentDidMount(){
      this.props.fetchBitcoin();
  }
  computeBitcoin(){
    const { bitcoin } = this.props; // destructuring syntax, gets bitcoin out of this.props and makes it equal to local copy
    if (Object.keys(bitcoin).length === 0) return '';
    console.log(bitcoin.bpi.USD.rate);
    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''),10); // replace string function!
    }
  render() {
    return <h3>Bitcoin Balance: {this.computeBitcoin()}</h3>;
  }
}

export default connect(
  state => state,
  { fetchBitcoin }
)(Loot);
