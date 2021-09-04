import React from 'react'

export default function card(props) {
    return (
        <div>
            <a href = {props.link} style = {{padding:"6vh"}}><img style = {{width:"5vmax"}} src = {props.img}></img></a>
        </div>
    )
}
