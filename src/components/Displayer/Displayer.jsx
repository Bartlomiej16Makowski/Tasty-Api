import styles from './Displayer.module.scss'

export function Displayer({ recipe }) {
	return (
		<div className={styles.container}>
			<h2>{recipe.name}</h2>
			<p>czas przygotowania: {recipe.prep_time_minutes}</p>
			<div className={styles.box}>
				<p>kalorie: {recipe.nutrition.calories}</p>
				<p>węglowodany: {recipe.nutrition.carbohydrates}</p>
				<p>tłuszcz: {recipe.nutrition.fat}</p>
				<p>białko: {recipe.nutrition.protein}</p>
				<p>przepis: {recipe.description}</p>
			</div>

			<img className={styles.picture} src={recipe.thumbnail_url} alt="zdjęcie posiłku" />
		</div>
	)
}
