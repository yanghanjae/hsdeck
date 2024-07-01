import { Avatar, List } from 'antd'
import React from 'react'
import ClasslogoFunc from './ClasslogoFunc'
import { Link } from 'react-router-dom'



const DeckList = ({ title, data }) => {
  return (
    <div style={{ width: '300px', display: 'inline-block', margin: '0 50px' }}>
      <div
        style={{
          backgroundColor: '#0059AC',
          color: '#fff',
          height: '50px',
          textAlign: 'center',
          fontSize: '34px'
        }}>
        {title}
      </div>
      <List dataSource={data}
        bordered
        size='small'
        renderItem={(item) => (
          <List.Item >
            <List.Item.Meta
              avatar={<Avatar src={ClasslogoFunc(item.class)} />}
              style={{ position: 'absolute' }}

            />
            <span style={{ fontSize: '16px', textAlign: 'center', width: '300px' }}>
              <Link to={`/deck/${item.id}`} style={{ color: '#000' }}> {item.title}</Link>
            </span>

          </List.Item>

        )}>
      </List>
    </div>

  )
}

export default DeckList