import loaderImage from '/src/assets/loader.svg'
import styles from './Loader.module.scss'
export function Loader() {
	return (
		<div className={styles.loader}>
			<img src={loaderImage} alt="loader" />
		</div>
	)
}
