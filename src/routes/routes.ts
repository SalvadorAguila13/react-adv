import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazy-load/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazy-load/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    name: string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent
}

const LazyLayout = lazy(() => import('../01-lazy-load/layout/LazyLayout'))
// const Lazy1 = lazy(() => import('../01-lazy-load/pages/LazyPage1'))
// const Lazy2 = lazy(() => import('../01-lazy-load/pages/LazyPage2'))
// const Lazy3 = lazy(() => import('../01-lazy-load/pages/LazyPage3'))

export const routes:Route[] = [
    {
        to: '/nolazy',
        path: 'nolazy',
        name: 'nolazy',
        Component: NoLazy
    },
    {
        path: '/lazylayout/*',
        to: '/lazylayout/',
        name: 'Lazylayout',
        Component: LazyLayout
    },
    // {
    //     to: '/lazy1',
    //     path: 'lazy1',
    //     name: 'Lazy1',
    //     Component: Lazy1
    // },
    // {
    //     to: '/lazy2',
    //     path: 'lazy2',
    //     name: 'Lazy2',
    //     Component: Lazy2
    // },
    // {
    //     to: '/lazy3',
    //     path: 'lazy3',
    //     name: 'Lazy3',
    //     Component: Lazy3
    // }
]

