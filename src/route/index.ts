import Home from '../pages/HOME';
import Ra from '../pages/RA';
import Fib from '../pages/FIB';
import RaItem from '../pages/RA/item';

import { Route } from 'Typings/route';

const routes: Route[] = [
	{
		path: '/',
		component: Home,
		isExact: true,
		key: 'home',
		name: 'home',
		breadcrumbTitle: 'Home',
	},
	{
		path: '/ra',
		component: Ra,
		isExact: true,
		key: 'ra',
		name: 'ra',
		breadcrumbTitle: 'Ra',
	},
	{
		path: '/fib',
		component: Fib,
		isExact: true,
		key: 'fib',
		name: 'fib',
		breadcrumbTitle: 'Fib',
	},
	{
		path: '/ra/:id',
		component: RaItem,
		isExact: true,
		key: 'raitem',
		name: 'ra item',
		breadcrumbTitle: 'ra item',
	},
];

export default routes;
