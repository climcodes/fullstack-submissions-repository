import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Tittle = ({ text }) => {
    return (
        <h1>{text}</h1>
    )
}

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const AnecdoteMostVoted = ({ anecdotes, points }) => {
    let mostvoted = points.indexOf(Math.max(...points))
    console.log(mostvoted)
    return (
        <div>
            {anecdotes[mostvoted]}
        </div>
    )
}

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(6).fill(0))
    console.log(points)

    function numeroAleatorio(max) {
        return Math.floor(Math.random() * max)
    }

    const nextAnecdote = () => {
        let max = anecdotes.length
        setSelected(numeroAleatorio(max))
    }

    const voteAnecdote = () => {
        const votos = [...points]
        votos[selected] += 1
        setPoints(votos)
    }

    return (
        <div>
            <Tittle text='Anecdote of the day' />
            {anecdotes[selected]}<br />
            has {points[selected]} votes<br />
            <Button handleClick={voteAnecdote} text='vote' />
            <Button handleClick={nextAnecdote} text='next anecdote' />

            <Tittle text='Anecdote with the most votes' />
            <AnecdoteMostVoted anecdotes={anecdotes} points={points} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)