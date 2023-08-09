import React from 'react'

const Show = ( props ) => {

const fruit = props.fruit

return (
    <div>
    <h1>Show Page</h1>
    <h3>The {fruit.name} is {fruit.color} </h3>
    <p> { fruit.readyToEat ? "The fruit ready to eat!" : "The fruit is not ready to eat!" } </p>
    </div>
    )
}

export default Show