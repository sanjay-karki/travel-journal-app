export default function Hero(props) {
    return (
        <div className="hero__container">
            <img src={props.item.imageUrl} className="hero__img" alt="" />

            <div className="hero__alltext">
                <div className="hero__line">
                    <div><i class="fas fa-map-marker-alt"></i><span className="countrybsdk">{props.item.location}</span></div>
                    <a href={props.item.googleMapsUrl} className="hero__maplink" target="_blank" rel="noreferrer" >View on Google Maps</a>
                </div>
                <span className="hero__title">{props.item.title}</span>
                <span className="hero__duration">{props.item.startDate} - {props.item.endDate}</span>
                <span className="hero__description">{props.item.description}</span>
            </div>
        </div>
    )
}