import React, { useState } from 'react'
import { decode } from "deckstrings";
import cardData from '../../data/cardData.json'




const Deck = ({deckcode}) => {
  const [Hovering, setHovering] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const decoded = decode(`${deckcode}`);


  return (
    <div style={{ width: '300px', position: 'relative', margin: '0 auto' }} >
      <ul style={{ listStyle: 'none' }}>

        {decoded.cards.map((props, index) => {
          const cardIdx = cardData.findIndex((card) => card.dbfId === props[0])

          return (
            <li key={index}

              style={{
                border: '1px solid ',
                background: ` url(https://art.hearthstonejson.com/v1/tiles/${cardData[cardIdx].id}.png) no-repeat center`,
                height: '55px', fontWeight: 'bolder', backgroundSize: '512px 108px '
              }} >
              <div style={{
                color: '#fff', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                lineHeight: '55px'
              }
              }
                onMouseEnter={() => { setHovering(true); setHoverIndex(index) }}
                onMouseLeave={() => { setHovering(false); setHoverIndex(-1) }}
              >

                {cardData[cardIdx].name}
                <span style={{ position: 'absolute', right: 0 }}> x {props[1]}  </span>
                <span style={{ position: 'absolute', zIndex: '1' }}>{(hoverIndex === index) ? (Hovering ? <img src={`https://art.hearthstonejson.com/v1/render/latest/koKR/256x/${cardData[cardIdx].id}.png`} /> : null) : null}</span>
              </div>


            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Deck