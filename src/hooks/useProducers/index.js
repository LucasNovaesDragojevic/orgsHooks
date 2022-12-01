import { useEffect, useState } from "react"
import { loadProducers } from "../../services/loadData"

export default function useProducers() {

    const [title, setTitle] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        const producersLoaded = loadProducers()
        producersLoaded.producers.sort((a, b) => a.distance - b.distance)
        setTitle(producersLoaded.title)
        setList(producersLoaded.producers)
    }, [])

    return [title, list]
}