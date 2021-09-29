import React from 'react'

function Album(props) {
    return (
        <div className="album">
            <div className="album-details">
                <img className="album-image" src={props.albumCover} alt= "album-images"></img>
                <p>{props.album}</p>
                <p>{props.artist}</p>
            </div>
        </div>
    )
}

export default Album
