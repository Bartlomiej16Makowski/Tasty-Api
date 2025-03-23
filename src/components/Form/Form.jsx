import {useState } from "react"

// WRZUCIĆ TU GDZIES JESZCZE COŚ TAKIEGO ZEBY PO ZAŁAFOWANIU STROUN AUTOMATYCZNIE WCZYTYWALY SIE JAKIES PRZEPISU I UŻYĆ PRZY TYM useEffect ZEBY POKAZAĆ ZE SIE ZNA useEffect

// WRZUĆ TO ZE SIE ŁĄDUJE STRONA

export function Form({ propClick }) {


	const [input, setInput] = useState('')

    const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${input}`
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'db87915fe7msh5c2565240fead7ep17e3b0jsn4dc8e5922b5a',
		'x-rapidapi-host': 'tasty.p.rapidapi.com',
	},
}

console.log(input);
	function clickhandler() {
		fetch(url, options)
			.then(res => res.json())
			.then(res => {
				propClick(res)
			})
	}

	return (
		<div>
		<input value={input} type="text" name="time" id="time" onChange={(e) => {let val = e.target.value
			setInput(val)
		}}
	 />
			<button onClick={clickhandler}>klik</button>
		</div>
	)
}
