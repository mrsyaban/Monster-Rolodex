import { Component } from "react";
import './card-container.styles.css'

class CardContainer extends Component{
    render() {
        const {name, email, id} = this.props;
        return (
            <div className="monster-card" key={id}>
                <img 
                alt={`monster ${name}`} 
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2> {name}</h2>
                <h3> {email}</h3>
            </div>
        );
    }
}

export default CardContainer;