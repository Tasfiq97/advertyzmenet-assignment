import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import loader from "../../assets/Curve-Loading.gif"
const Main = ({data}) => {
  
    const {first_name,last_name,email,avatar}=data ||{}


    return (
        
        <MainBody>
    {
        data===undefined? <></>
    :
              <div className='users'>
              <img className='img' src={avatar} alt=" " />
            <h4> First Name: <span> {first_name}</span></h4>
            <h4> Last Name: <span> { last_name}</span></h4>
            <h4>email:  <span> { email}</span></h4> 
            
            </div>
            
    }
        
        </MainBody>
    );
};

const MainBody=styled.div`

    .users{
        text-align:center;
   padding:20px 30px;
   margin:20px;
   border: 1px solid black;
   border-radius: 20px;
   h4{
    margin:0px;
    padding:5px 0px;
   }
   h5{
    padding:5px 0px;
    margin:0px;
   }
   .img {
    width:50%
   }
    span{
        color:blue;
        font-weight:bold;
    }
    transition:0.2s ease-in-out;
    &:hover{
        box-shadow:0 0 10px 0 #4747c8;


     }
    }
`

export default Main;