import React from 'react'
import '../css/currency.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
function Currency() {
    return (
        // Arayüzü burada tasarlıyoruz.
        <div className='currency-div'>
            <div style={{ fontFamily: "Arial", backgroundColor: "black", color: "white", width: "100%", textAlign: "center" }}>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div style={{ marginTop: "30px" }}>
                <input type="number" className='amount' />

                <select className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>
                <FaArrowRightArrowLeft style={{ fontSize: "10px", marginRight: "10px" }} />
                <select className='to-currency-option'>
                    <option>TL</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input type="number" className='result' />

            </div>

            <div>
                <button className='exchange-button'>ÇEVİR</button>
            </div>

        </div>
    )
}

export default Currency