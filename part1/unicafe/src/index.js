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

const StatisticLine = ({ value, text }) => {
    return (
        <tr>
            <td>{text}</td><td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    if (all == 0) {
        return (
            <p>No feedback given</p>
        )
    }
    else {
        return (
            <>
                <table>
                    <tbody>
                        <StatisticLine value={good} text='good' />
                        <StatisticLine value={neutral} text='neutral' />
                        <StatisticLine value={bad} text='bad' />
                        <StatisticLine value={all} text='all' />
                        <StatisticLine value={average} text='average' />
                        <StatisticLine value={positive} text='positive' />
                    </tbody>
                </table>
            </>
        )
    }
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        setAll(all + 1)
        console.log(good)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setAll(all + 1)
    }

    const calcAverage = () => {
        return ((good - bad) / all)
    }
    const calcPositive = () => {
        return ((good * 100) / all)
    }

    return (
        <div>
            <Tittle text='give feedback' />
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
            <Tittle text='statics' />
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={calcAverage()} positive={calcPositive()} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)