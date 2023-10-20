import { useEffect } from 'react'
import molehill from  '../Components/molehill.png'

let EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <>
        <div>
            <img style={{'width': '15vw'}} src={molehill} />
        </div>
        </>
    )
}

export default EmptySlot