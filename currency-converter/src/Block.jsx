import React, {useState} from 'react';

const Block = ({value, currency, onChangeValue, onChangeCurrency, currencyes}) => {debugger

    const [btnStatus, changeBtnStatus] = useState(false);
    const [defaultCurrencies,changeDefaultCurrencies]=useState(['RUB', 'USD', 'EUR', 'GBP'])

    const changeCur = (curName) => {
        changeDefaultCurrencies(['RUB', 'USD', 'EUR',curName])
        onChangeCurrency(curName)
        changeBtnStatus(false)
    };

    const otherCur = Object.keys(currencyes).map((name) => <p onClick={()=>changeCur(name)}>{name}</p>);

    return (
        <div className="block">
            <ul className="currencies">
                {defaultCurrencies.map((cur) => (
                    <li
                        onClick={() => onChangeCurrency(cur)}
                        className={currency === cur && 'active'}
                        key={cur}
                    >
                        {cur}
                    </li>
                ))}
                <li onClick={() => changeBtnStatus(!btnStatus)}>
                    <svg height="50px" viewBox="0 0 50 50" width="50px">
                        <rect fill="none" height="50" width="50"/>
                        <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 "/>
                    </svg>
                </li>
            </ul>
            <input
                onChange={(e) => onChangeValue(e.target.value )}
                value={value}
                type="number"
            />
            {btnStatus && <div className="otherCur">{otherCur}</div>}
        </div>
    );
};

export default Block;
