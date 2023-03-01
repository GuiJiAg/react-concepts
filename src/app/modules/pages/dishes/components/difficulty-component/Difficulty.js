import React, {Component, Fragment} from "react";

class Difficulty extends Component {
    title = 'Dificultad';

    render() {
        return (
            <Fragment>
                {
                    /* Código nativo de React */
                    React.createElement(
                        'h4', 
                        {className: 'difficulty-title-style'},
                        this.title
                    )
                }
                {
                    React.createElement(
                        'p', 
                        {},
                        this.props.dish.difficulty
                    )
                }
            </Fragment>
        )
    }
}

export default Difficulty;