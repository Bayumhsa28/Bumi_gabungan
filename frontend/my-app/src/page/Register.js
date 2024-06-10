import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../App.css';

function Register() {
  return (
    <div className="App-daftarlogin">
      <div className='containerss'>
        <h1 className='judulbumiku'>Bumiku.com</h1>
        <form>
          <label>
            Email: <br />
            <input
              className='inputlogin'
              type="text"
              name="email"
              placeholder='Enter Email'
              
            />
          </label>
          <br />
          <label>
            Nama: <br />
            <input
              className='inputlogin'
              type="text"
              name="name"
              placeholder='Enter Name'
              
            />
          </label>
          <br />
          <label>
            Kata Sandi: <br />
            <input
              className='inputlogin'
              type="password"
              name="password"
              placeholder='Enter Password'
              
            />
          </label>
          <br />
          <label>
            Konfirmasi Kata Sandi: <br />
            <input
              className='inputlogin'
              type="password"
              placeholder='Enter Password'
            />
          </label>
          <p>Sudah memiliki akun? <a className='masuk' href=''>Masuk</a></p>
          <button className='button' type="submit">Daftar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
