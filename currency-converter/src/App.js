import React, {useEffect, useRef, useState} from 'react';
import Block from './Block';
import './index.scss';
import axios from 'axios';

function App() {

    const [fromCurrency, setFromCurrency] = useState('USD');
    const [fromInpValue, setFromInpValue] = useState(0);

    const [toCurrency, setToCurrency] = useState('RUB');
    const [toInpValue, setToInpValue] = useState(0);

    const currencyesREF = useRef({})


    useEffect(() => {
        axios
            .get('https://cdn.cur.su/api/latest.json')
            .then(res => {
                currencyesREF.current = res.data.rates;
                changeFromPrice(1)
            })
            .catch(err => console.log(err));

    }, []);

    const changeFromPrice = (value) => {

        const price = value / currencyesREF.current[fromCurrency];
        const res = price * currencyesREF.current[toCurrency];

        setFromInpValue(value);
        setToInpValue(res.toFixed(2));
    };

    const changeToPrice = (value) => {debugger

        const res = (currencyesREF.current[fromCurrency] / currencyesREF.current[toCurrency]) * value;
        setFromInpValue(res.toFixed(2));
        setToInpValue(value);

    };

    useEffect(() => {
        changeToPrice(toInpValue);
    }, [fromCurrency]);

    useEffect(() => {
        changeFromPrice(fromInpValue);
    }, [toCurrency])



    return (
        <div className="App">
            <Block value={fromInpValue}
                   currency={fromCurrency}
                   onChangeCurrency={setFromCurrency}
                   onChangeValue={changeFromPrice}
                   currencyes={currencyesREF.current}
            />

            <Block value={toInpValue}
                   currency={toCurrency}
                   onChangeCurrency={setToCurrency}
                   onChangeValue={changeToPrice}
                   currencyes={currencyesREF.current}
            />
        </div>
    );
}

export default App;
