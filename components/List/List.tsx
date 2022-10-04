import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

const List: NextPage = () => {
  return (
    <ListContainer>
      List
    </ListContainer>
  )
}

const ListContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  justify-content: center;
  flex-direction: column;
  width: 50rem;
  height: 30rem;
`

export default List