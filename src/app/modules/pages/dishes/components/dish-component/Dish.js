import React, {Component, Fragment} from "react";
import Difficulty from './../difficulty-component/Difficulty';

class Dish extends Component {
    title = 'Plato';

    showDifficulty() {
        return (
            <Difficulty dish={this.props.dish} />
        )
    }

    render() {
        return (
              
            <Fragment>
                {/* Fragment se usa como un contenedor "invisible" en el html, ya que no representa ningún elemento */}

                <h2 className="dish-title-style">{this.title}</h2>
                <p>{this.props.dish.name}</p>

                {this.showDifficulty()}

            </Fragment>
        )
    }
}

export default Dish;