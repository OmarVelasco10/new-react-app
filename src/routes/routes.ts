import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        component: LazyLayout,
        name: 'Lazy-Layout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy'
    },
]