
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Main from '../Main/Main';
import loader from "../../assets/image_processing20191002-6429-tbqgfv.gif"
const Navbar = () => {
    const [data,setData]=useState();
    const [isLoading,setIsLoading]=useState(false);
    const handleUsers=async()=>{
       setIsLoading(true)
        await axios.get("https://reqres.in/api/users?page=1").then(result=>{
           setTimeout(()=>{
            setData(result.data?.data)
            setIsLoading(false);
           },1500)
        })
        
    }
    return (
        <div>
            <Container>
           <div className='logo'>
             <h1>Clothings</h1>
           </div>
           <div className='nav-bar'>
            <span>Users</span>
             <button onClick={handleUsers} className='btn'>Get Users</button>
            </div>
            </Container>
         {  isLoading?
           <Image> <img src={loader} alt="" /></Image>
             :
             <Body >
             {
                    data?.map(data=><Main
                    data={data}
                    key={data.id}
                    ></Main>)
             }
              </Body> 
         }
        </div>
    );
};
const Container= styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding:10px 40px;
background:#4747c8;
.logo{
  h1 {
    font-weight:bold;
    font-family: 'Anton', sans-serif;
    color:white;
  }
}
.nav-bar {
    display:flex;
    justify-content:space-between;
    align-items:center;
    span{
        font-weight:bold;
        margin-right:20px;
        font-size:20px;
    }
    .btn {
        cursor:pointer;
        padding:10px 15px;
        font-size:20px;
        background:white;
         border:none;
         border-radius: 20px;
         font-weight:bold;
         background: #cecee2;
         transition:0.2s ease-in-out;
         &:hover{
            box-shadow: 0 0 20px 0 white;


         }
    }
  }
`
const Body=styled.div`
display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  padding:40px 50px;
  img{
    width:30%;
    text-align:center;
  }

`

const Image=styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   height:50%;
   margin-top:100px;
img {
  width:20%;
  text-align:center;
}
`
export default Navbar;