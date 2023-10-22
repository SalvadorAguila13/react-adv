import {Suspense} from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import {routes} from './routes'


const Navigation = () => {
  return (
    <Suspense fallback={null}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {
                            routes.map(route => (
                                <li key={route.name}>
                                    <NavLink className={({isActive}) => isActive ? 'nav-active' : ''} to={route.to}>
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(route => (
                            <Route key={route.name} path={route.path} element={<route.Component/>}/>
                        ))
                    }
                    <Route path='/*' element={<Navigate to={routes[0].to} replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}

export default Navigation