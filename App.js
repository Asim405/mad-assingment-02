import { useEffect } from 'react'
import { Text, View } from 'react-native'
export default function App(){ useEffect(()=>{fetch('http://YOUR_IP:3000').then(r=>r.text()).then(d=>console.log(d))},[])
return(<View><Text>Check console</Text></View>) }