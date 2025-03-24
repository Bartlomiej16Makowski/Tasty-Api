import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import { Displayer } from './components/Displayer/Displayer'
import { Form } from './components/Form/Form'
import { Loader } from './components/Loader/Loader'

function App() {
	const [api, setApi] = useState([])
	const [loader, setLoader] = useState(false)

	const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes'
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'db87915fe7msh5c2565240fead7ep17e3b0jsn4dc8e5922b5a',
			'x-rapidapi-host': 'tasty.p.rapidapi.com',
		},
	}

	function handleLoadApi() {
		fetch(url, options)
			.then(res => res.json())
			.then(res => {
				setApi(res)
			})
	}
	useEffect(() => {
		handleLoadApi()
	}, [])

	// DODAĆ PAGINACJE - JEST ZA DUZO TEGO NA JEDNEJ STRONIE A MAM GRADIENT NA GÓRZE NIEBIESKI NA DOLE ZÓŁTY TO NAWET NIE WIDAĆ NA PIERWSZY RZUT OKA - ZAKOMENDTOWANY W APP.MODULE.SCSS BACGROUND-IMAGE

	// DODAĆ NAPIS NIE ZNALEZIONO JESLI SIE NIC NIE ZNAJDZIE

	return (
		<>
			<Form
				takeState={setLoader}
				propClick={res => {
					setApi(res)
				}}
			/>
			{loader && <Loader />}
			<div className={styles.main}>
				{api.results && api.results.map((recipe, index) => <Displayer key={index} recipe={recipe} />)}
			</div>
		</>
	)
}

export default App
