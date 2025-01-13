import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'

const RoutesDef: React.FC = () => {
    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Shop' element={<Shop />} />
            </Routes>
    )
}

export default RoutesDef