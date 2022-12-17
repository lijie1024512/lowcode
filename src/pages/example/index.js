import React from 'react'
import { useDispatch, useSelector } from 'umi';
import {a } from '../../utils/test'
export default function index(props) {
  console.log('props',props);
  const dispatch=useDispatch() 
  const dva=useSelector(state=>state)
  console.log('dva,dva',dva);
  console.log('env',process.env.UMI_ENV)
  console.log('a',JSON.stringify(a) )
  console.log('asas',process.env.name)
  return (<>
    <div>index</div>
    <div>{dva.state}</div>
  </>
  )
}
