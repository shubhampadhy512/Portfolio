import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css';

const CurrencyConvertor = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [result, setResult] = useState(null);
    const [currencies, setCurrencies] = useState([]); // To store the list of currency codes

    // Fetch the list of available currencies once on mount
    useEffect(() => {
        fetch('https://api.frankfurter.app/currencies')
            .then(res => res.json())
            .then(data => setCurrencies(Object.keys(data)))
            .catch(err => console.error("Error fetching currencies:", err));
    });

    // Fetch the conversion rate whenever amount or currencies change
    useEffect(() => {
        const convertCurrency = async () => {
            if (fromCurrency === toCurrency) {
                setResult(amount);
                return;
            }
            try {
                const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
                const data = await res.json();
                setResult(data.rates[toCurrency]);
            } catch (e) {
                console.log("Conversion error:", e);
            }
        };

        convertCurrency();
    }, [fromCurrency, toCurrency, amount]);

    return (
        <div className="converter-card">
            <h2 className="converter-title">Currency Converter</h2>

            <div className="input-container">
                <label className="input-label">Amount</label>
                <input
                    className="amount-input"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value<1?1:e.target.value)}
                />
            </div>

            <div className="select-group">
                <div className="select-container">
                    <label className="input-label">From</label>
                    <select
                        className="currency-select"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="select-container">
                    <label className="input-label">To</label>
                    <select
                        className="currency-select"
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                    >
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="result-container">
                <p className="result-text">
                    Result: <span className="result-value">{result ? result.toFixed(2) : '...'} {toCurrency}</span>
                </p>
            </div>
        </div>
    );
};

export default CurrencyConvertor;