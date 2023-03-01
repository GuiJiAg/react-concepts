import React, { Component } from "react";
import AddIcon from '@material-ui/icons/Add';
import { TextField, Fab } from '@material-ui/core';

import Dish from './../components/dish-component/Dish';

class Dishes extends Component {
    dishes = [
        {
            name: 'Carbonara',
            difficulty: 2
        },
        {
            name: 'Teriyaki',
            difficulty: 5
        },
        {
            name: 'Curry',
            difficulty: 3
        }
    ];

    /* Variables referencia para almacenar datos de objetos html como inputs */
    newDishName = React.createRef();
    newDishDifficulty = React.createRef();

    constructor() {
        super();

        /* En la siguiente línea, se "bindea" los datos de la propia clase a una función invocada dentro del render,
            para que de esta forma se mantenga el contexto de la clase dentro de sus funciones.
            Para evitar tener que hacer este bindeo de todas las funciones internas a la clase que vayamos a usar
            donde necesitemos que el "this" tenga contexto, podemos crear dicha función como una función de flecha callback,
            es decir, en una función anónima de formato "() => {}" (ejemplo más abajo)
        */
        this.addDish = this.addDish.bind(this);
    }

    addDish(event) {
        /* "event.preventDefault()" tiene como funcionalidad evitar el refresco de la página al ejecutarse
            un evento como "submit"
        */
        event.preventDefault();

        let newDish = {
            name: this.newDishName.value,
            difficulty: parseInt(this.newDishDifficulty.value)
        }

        this.dishes.unshift(newDish);

        console.log(this.dishes);
    }

    /* La función anterior como función de flecha .
    Esta función no es necesaria bindearle el contexto "this" ya que, de esta forma, ya pertenece al contexto
    de su clase
    */
    addDishArrow = (event) => {
        event.preventDefault();

        let newDish = {
            name: this.newDishName.value,
            difficulty: parseInt(this.newDishDifficulty.value)
        }

        this.dishes.unshift(newDish);

        console.log(this.dishes);
    }

    /* JSX */

    showForm() {
        return (
            <form
            autoComplete='off'
            onSubmit={this.addDish}
            >

            {/* Para elementos de Material UI, se puede hacer referencia a una variable mediante función de flecha "inputRef", 
                cuyo evento parametrizado hará que la referencia definida con anterioridad aloje el valor actual a la 
                activación del evento.
                Si se usara un input normal, se usaría el atributo "ref" y sería directamente la variable referencia, cuya composición
                de objeto es diferente
            */}
            <TextField
                label="Plato..."
                type="text"
                margin="normal"
                variant='outlined'
                inputRef={(event) => (this.newDishName = event)}
            />

            <TextField
                label="Dificultad..."
                type="text"
                margin="normal"
                variant='outlined'
                inputRef={(event) => (this.newDishDifficulty = event)}
            />

            {/* Para que la función dentro del evento se aplique únicamente al lanzarse el evento,
                la función debe ser invocada sin sus paréntesis
            */}
            <Fab
                color="secondary"
                size="medium"
                onClick={this.addDishArrow}
            >
                <AddIcon></AddIcon>
            </Fab>

            </form>
        )
    }

    showDishes() {
        return (
            this.dishes.map( (dish, index) => (
                /* Siempre se debe informar del "key={index}" en el elemento contenedor devuelto por las funciones iteradoras como map() */
                <Dish 
                    key={index}
                    dish={dish} 
                />
            ))
        )
    }

    render() {
        return (
            <div className="App-header">
                <h1>Platos Típicos</h1>
                {this.showForm()}
                {this.showDishes()}
            </div>
        )
    }
}

export default Dishes