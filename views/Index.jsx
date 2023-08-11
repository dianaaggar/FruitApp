import React from 'react'

const Index = ( props ) => {

    const fruits = props.fruits
    console.log('PROPS',props)

return (
    <div>
        <h1>index page</h1>
    { fruits.map((fruit, i) => {
        return (
            <a href={`/fruits/${i}`}>
                <h2>{fruit.name}</h2>
            </a>
        )
    }) }
    </div>
    )
}

export default Index

