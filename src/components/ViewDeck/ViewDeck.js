import React, { useState } from 'react'
import Deck from '../common/Deck'
import { Breadcrumb, Button } from "antd";
import { useParams, Link } from 'react-router-dom';
import allData from '../../data/allData.json'
import { AiFillLike } from "react-icons/ai";
import Comment from '../common/Comment';


const ViewDeck = () => {

  const { deckId } = useParams()
  const deckIdx = allData.findIndex((deck) => deck.id == deckId);
  const importCode = allData[deckIdx].deckcode;
  const importName = allData[deckIdx].title;
  const importLike = allData[deckIdx].like;

  const [like, setLike] = useState(importLike);
  const [toggle, setToggle] = useState(false);

  function toggleButton() {
    setToggle(!toggle)
    if (!toggle)
      setLike(like + 1);
    else
      setLike(like - 1);
  }

  return (
    <div style={{ width: '800px', margin: '50px auto' }}>
      <Breadcrumb
        items={[
          {
            title: <Link to='/'>Home </Link>
          },

          {
            title: `${importName}`,
          },
        ]}
      />
      <Deck deckcode={importCode} />
      <div style={{ margin: '100px 0 30px ' }}>
        <Button type={toggle ? 'primary' : 'dashed'}
          onClick={toggleButton}>
          <AiFillLike /> {like}
        </Button>

      </div>
      <Comment />
    </div>

  )
}

export default ViewDeck