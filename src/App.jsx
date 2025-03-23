import { useState } from 'react'
import styles from './App.module.css'
import { Displayer } from './components/Displayer/Displayer'
import { Form } from './components/Form/Form'

function App() {
	const [api, setApi] = useState([])

	return (
		<>
			<Form
				propClick={res => {
					setApi(res)
				}}
			/>
			<div className={styles.main}>
				{api.results && api.results.map((recipe, index) => <Displayer key={index} recipe={recipe} />)}
			</div>
		</>
	)
}

export default App
