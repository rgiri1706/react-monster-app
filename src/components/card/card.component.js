import './card.styles.css';

export const Card =(props)=>(
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.index}?set=set2&size=150x150`} />
        <h2 key={props.index}>{props.name}</h2>
        <p>{props.email}</p>
    </div>
);