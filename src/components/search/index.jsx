import React, { useState } from 'react';
import axios from 'axios';
import { AddressKey } from '../addressKey'
import './styles.css';

import './styles.css'

const Search = () => {
    const [cep, setCep] = useState('')
    const [address, setAddress] = useState([])
    
    const handleSearch = () => {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
            setAddress(response.data)
        }
        )
    }
    return (
        <div>
            <input value={cep} onChange={e => setCep(e.target.value)} placeholder=" Digite o CEP" />
            <button onClick={handleSearch}>Consultar</button>
            <AddressKey address={address}></AddressKey>

        </div>
    );
}

export default Search;