import React from 'react'
import './index.css'

// import Axios
import Axios from 'axios'

function Index(props) {
    const { p } = props
    const getCls = (base) => { return p.getCls('home-' + base) }


    // user status function get axios
    const status = () => {
        const url = p.apiBase + '/user/api/status'
        Axios.get(url).then((d) => {
            console.log(d.data);
        })
    }

    // post axios request user login function
    const login = () => {
        const url = p.apiBase + '/user/api/login'
        const data = { email: "m@gmail.com", password: "random" }
        Axios.post(url, data).then((d) => {
            p.setUserToken(d.data.token)
            console.log(d.data)
        })
    }

    // get axios with headers : 
    const statusHeader = () => {
        const url = p.apiBase + '/user/api/protected'
        Axios.get(url, { headers: { 'token': p.token } }).then((d) => {
            console.log(d);
        })
    }

    return (
        <div className={getCls('wrapper')}>
            {/* json requests with axios */}
            <div className={getCls('wrapper0')}>
                {/* get user status with out headers */}
                <div onClick={status} className={'btn1 ' + getCls('btn')}>
                    status
            </div>
                {/* login post request  */}
                <div onClick={login} className={'btn1 ' + getCls('btn')}>
                    login
            </div>
                {/* status headers post request  */}
                <div onClick={statusHeader} className={'btn1 ' + getCls('btn')}>
                    status with headers
                </div>
            </div>
        </div>
    )
}

export default Index

