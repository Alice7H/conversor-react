import React, { Component } from 'react'
import './Conversor.css'


export default class Conversor extends Component {
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: '',
            moedaB_valor: 0
        }
        this.converter = this.Converter.bind(this);
    }

    Converter() {
        let to_for = `${this.props.moedaA}_${this.props.moedaB}`;
        const key = process.env.REACT_APP_API_KEY;
        let url = `https://free.currconv.com/api/v7/convert?q=${to_for}&compact=ultra&apiKey=${key} `

        fetch(url).then(res =>{
             return res.json()
            })
            .then(json=> {
                let cotacao = json[to_for];
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
                this.setState({moedaB_valor});
            })
    }

    render() {
        return (
            <div className="conversor">
                <h3>{this.props.moedaA} para {this.props.moedaB}</h3>
                <input type="text" onChange={(event) => { this.setState({moedaA_valor: event.target.value})}}></input>
                <button type="button" onClick={this.converter}> Converter</button>
                <h2>{this.props.moedaB} : {this.state.moedaB_valor}</h2>
            </div>        
        )
    }
}

