// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import {lazy, LazyExoticComponent} from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string;
}


// LazyLoad

const LazyLayout =  lazy(() => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))
// const Lazy1 =  lazy(() => import( /* webpackChunkName: Lazy1 */ '../01-lazyload/pages/LazyPage1'))
// const Lazy2 =  lazy(() => import( /* webpackChunkName: Lazy2 */ '../01-lazyload/pages/LazyPage2'))
// const Lazy3 =  lazy(() => import( /* webpackChunkName: Lazy3 */ '../01-lazyload/pages/LazyPage3'))

export const routes:Route[] = [
    {
        path:'/lazyLoad/*',
        to:'/lazyLoad/',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name: 'no-lazy'
    },
    // {
    //     to:'/lazy2',
    //     path:'lazy2',
    //     Component: Lazy2,
    //     name: 'Lazy-2'
    // },
    // {
    //     to:'/lazy3',
    //     path:'lazy3',
    //     Component: Lazy3,
    //     name: 'Lazy-3'
    // },
]