import React from 'react'
import './main.css'

function Navbar(props) {
    const {p} = props
    const getCls = (base) => { return p.getCls('navbar-' + base) }
    return (
        <div className={getCls('wrapper')}>
            <div className={getCls('RQVEcD')}>
                <h1>Navbar</h1>
            </div>
        </div>
    )
}

export default Navbar

