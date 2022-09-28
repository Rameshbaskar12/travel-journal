import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card-img"/>
            <div className="card-details-1">
                <img src="../images/location-logo.png" className="location-logo"/>
                <h3 className="location-state">{props.item.location}</h3>
                <a href={props.item.googleMapsUrl} className="location-map">View on Google Maps</a>
            </div>
            <h1 className="card-title">{props.item.title}</h1>
            <h2 className="card-date">{props.item.startDate} - {props.item.endDate}</h2>
            <p className="class-description">{props.item.description}</p>
        </div>
    )
}