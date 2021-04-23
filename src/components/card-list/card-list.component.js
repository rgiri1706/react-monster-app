import './card-list.styles.css';
import { Card } from '../card/card.component.js';

export const CardList=(props)=>(
    <div className="card-list">
        {
            props.monster.map((ele, index)=> <Card index={index} name={ele.name} email={ele.email}/>)
        }
    </div>
);