import { ReactNode } from 'react';

export interface Route {
	path: string;
	key: string;
	isExact: boolean;
	component: any;
	name: string;
	breadcrumbTitle: string;
	children?: Route[];
}
