import React from "react"
import Appbar from './component/Appbar'
import Producer from './component/Producer'

export default function Home() {
    return <Producer appbar={Appbar}/>
}