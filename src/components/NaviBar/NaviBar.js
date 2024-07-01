import React from 'react';
import { Button, Divider } from 'antd'
import logo from '../img/hsdecklogo.png'
import { Link } from 'react-router-dom'

const buttonstyle = {
  backgroundColor: '#0059AC',
  color: '#fff',
  fontSize: '22px',
  display: 'inline-block',
  height: '6rem',
  width: '150px',
  margin: '0 30px'
}

const dividerstyle = {
  height: '6rem',
  border: 'solid, gray'
}

const NaviBar = () => {

  return (
    <div style={{
      minHeight: '50px',
      width: '1200px',
      margin: '0 auto '
    }}>
      <Link to='/'
        style={{
          fontSize: '32px',
          textDecoration: 'none',
          position: 'relative',
          top: 0,
          left: 0,
          margin: '0 30px 0 0',
          color: '#000',
          fontWeight: 'bolder',
          width: '15%'
        }}>
        <img src={logo} alt='logo'
          style={{ width: '40px' }}></img>
        하스덱
      </Link>
      <Divider type='vertical'
        style={dividerstyle} />
      <span
        style={{ left: 'center', textAlign: 'center' }}>
        <Button style={buttonstyle}> 랭커 덱 </Button>
        <Divider type='vertical' style={dividerstyle} />
        <Button style={buttonstyle}> 메타 덱 </Button>
        <Divider type='vertical' style={dividerstyle} />
        <Button style={buttonstyle}> 유저 덱 </Button>
        <Divider type='vertical' style={dividerstyle} />
        <Button style={buttonstyle}> 덱 업로드 </Button>
      </span>


      <Button style={{
        position: 'relative',
        left: '10px',
        top: '30px',
        backgroundColor: '#CCC'
      }}> 로그인 </Button>
      <hr style={{
        border: 'solid gray',
        width: '1200px'
      }} />
    </div>

  );
};
export default NaviBar;