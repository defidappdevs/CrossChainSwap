import React from 'react';
import styled from 'styled-components';
import { Button, Flex, Text } from '@pantherswap-libs/uikit'



const Headerwrapper = styled.div`
height:160px;
padding: 0px;
width:100%;
background:#058665;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

  `

const NavContainer = () => {
  return (
    <>
      <Headerwrapper>
        <Text style={{ fontSize: "24px", textAlign: "center", fontWeight: "bold" }}>Stack LP Tokens to Earn Crosschain</Text>
      </Headerwrapper>
    </>
  )
}

export default NavContainer;