import React from 'react'

function Index(props) {
    const { p } = props
    const getCls = (base) => { return p.getCls('home-' + base) }

    return (
        <div className={getCls('wrapper')}>
            
        </div>
    )
}

export default Index

