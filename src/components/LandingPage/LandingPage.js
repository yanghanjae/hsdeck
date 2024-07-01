import React from 'react'
import DeckList from '../common/DeckList'

import metaData from '../../data/metaData.json'
import rankerData from '../../data/rankerData.json'



const LandingPage = () => {
  return (
    <div style={{ width: '800px', margin: '50px auto'}}>
      <DeckList title='최근 메타 덱' data={metaData} />
      <DeckList title='최근 랭커 덱' data={rankerData} />
      {/* <DeckList /> */}
    </div>
  )
}

export default LandingPage