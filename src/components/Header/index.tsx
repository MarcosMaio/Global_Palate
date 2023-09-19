import React, { useState } from 'react'
import styles from './Header.module.scss'
import { ReactComponent as Logo} from '../../assets/Logo.svg'
import classNames from 'classnames'
import NavBar from './NavBar/Index';

export default function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className={styles.container}>
                <nav className={styles.division}>
                    <div>
                        <Logo className={styles.logo} />
                    </div>
                    <div>
                        <button className={styles.nav__btn}  onClick={() => setModalIsOpen(true)}  aria-label='open menu' data-nav-toggle>
                            <span className={classNames(styles.line, styles.line_1)}></span>
                            <span className={classNames(styles.line, styles.line_2)}></span>
                            <span className={classNames(styles.line, styles.line_3)}></span>
                        </button>
                    </div>
                </nav>
                {modalIsOpen && (
                        <NavBar setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
                    )}
        </div>
    )
}
