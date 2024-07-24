import React, { useState } from 'react'
import '../css/currency.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
function Currency() {
    // State tanımlama
    // Girilen Değer : Numerik
    const [amount, setAmount] = useState(0);

    // Döndürülen Değer
    const [fromCurrency, setFromCurrency] = useState('');

    // Dönen Değer
    const [toCurrency, setToCurrency] = useState('');

    // Çıkan Değer : Numberik
    const [result, setResult] = useState(0);

    const exchange = () => {
        console.log(amount);
        console.log(fromCurrency);
        console.log(toCurrency);
    };


    return (
        // Arayüzü burada tasarlıyoruz.
        <div className='currency-div'>
            <div style={{ fontFamily: "Arial", backgroundColor: "black", color: "white", width: "100%", textAlign: "center" }}>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div style={{ marginTop: "30px" }}>
                {/*Yukarıda tanımlanan amount burada inputun value su olarak yazdık. Buraya bir değer girildiğinde bu değer setAmounta setledik.*/}
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />

                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>
                <FaArrowRightArrowLeft style={{ fontSize: "10px", marginRight: "10px" }} />
                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TL</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />

            </div>

            <div>
                <button onClick={exchange} className='exchange-button'>ÇEVİR</button>
            </div>

        </div >
    )
}

export default Currency