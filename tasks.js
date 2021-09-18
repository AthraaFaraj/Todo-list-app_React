// import React from 'react';
import React,{useState,useContext,useEffect} from 'react';
import { styled } from './global_style';
import logo from './logo.svg';



export default function task(){
    return (
        <div style={styled.container}>
            <button style={styled.button}>task</button>
            <img src={logo} width={100} height={100}/>
            <subTask />
        </div>
    );
};
export function subTask(){
    return <div>subTask</div>
}