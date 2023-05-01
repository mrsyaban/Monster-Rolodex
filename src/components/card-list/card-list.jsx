import { Component }    from "react";

import CardContainer from "../card-container/card-container";
import './card-list.styles.css'


class CardList extends Component {

    render() {
        const {listOfMonsters} = this.props

        return (
            <div className="card-list">
                {listOfMonsters.map((monster) => {
                    const {name, email, id} = monster;
                    return (
                        <CardContainer name={name} email={email} id={id}/>
                    )
                })}
            </div>
        );
    }
}

export default CardList;