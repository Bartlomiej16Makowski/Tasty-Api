import styles from './Form.module.scss'
import { useState } from 'react'

export function Form({ propClick, takeState }) {
	const [input, setInput] = useState(' tu wpisz danie lub produkt')

	const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${input}`
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'db87915fe7msh5c2565240fead7ep17e3b0jsn4dc8e5922b5a',
			'x-rapidapi-host': 'tasty.p.rapidapi.com',
		},
	}

	function clickhandler() {
		takeState(true)
		fetch(url, options)
			.then(res => res.json())
			.then(res => {
				propClick(res)
				setInput('')
			})
			.finally(() => {
				takeState(false)
			})
	}

	return (
		<div className={styles.container}>
			<input
				value={input}
				type="text"
				name="text"
				id="text"
				onChange={e => {
					let val = e.target.value
					setInput(val)
				}}
			/>
			<button onClick={clickhandler}>search</button>
		</div>
	)
}
