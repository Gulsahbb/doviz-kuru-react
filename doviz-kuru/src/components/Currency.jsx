import React, { useState } from 'react'
import '../css/currency.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_Al9rY0C9O3qRt2s4jwWArogNPOvUtMw1XbxzROQv";

function Currency() {
    // State tanımlama
    // Girilen Değer : Numerik
    const [amount, setAmount] = useState();

    // Döndürülen Değer
    const [fromCurrency, setFromCurrency] = useState('USD');

    // Dönen Değer
    const [toCurrency, setToCurrency] = useState('TRY');

    // Çıkan Değer : Numerik
    const [result, setResult] = useState();

    // Çevir butonuna tıklanıldığı anda apia istek göndermesi lazım.
    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        // İçerisindeki istediğimiz veriyi (TL) alacağız.
        // Noktadan sonra iki basamak göstermek istiyorum. Bu yüzden toFixed kullanabiliriz.
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }


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
                    <option>TRY</option>
                </select>
                <FaArrowRightArrowLeft style={{ fontSize: "10px", marginRight: "10px" }} />
                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
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