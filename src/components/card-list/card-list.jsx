import { Component }    from "react";

class CardList extends Component {

    render() {
        const {listOfMonsters} = this.props

        return (
            <div>
                {listOfMonsters.map((monster) => {
                    const {name, email, id} = monster;
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
                })}
            </div>
        );
    }
}

export default CardList;