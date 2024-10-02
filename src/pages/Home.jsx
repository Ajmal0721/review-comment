import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>
                <div className="btn-group">
                    <Link to="/table"><button style={{ padding: '12px 35px' }}>Table</button></Link>
                    <Link to="/card"><button style={{ padding: '12px 35px' }}>Cards</button></Link>
                </div>
            </div >
            <Form />
        </>
    )
}

export default Home
