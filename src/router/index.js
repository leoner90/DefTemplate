import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home.jsx'
import About from '../views/About.jsx'


const Router = () => (
    <Routes basename={'/asd'}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
    </Routes>
)

export { Router };