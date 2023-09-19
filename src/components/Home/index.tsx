import styles from './Home.module.scss'

import Header from '../Header';
import Sliders from './Sliders';


export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Sliders />
        </div>
    )
}
