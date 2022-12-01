import React from "react"
import Appbar from './component/Appbar'
import Producers from "./component/Producers"

export default function Home() {
    return <Producers appbar={Appbar}/>
}