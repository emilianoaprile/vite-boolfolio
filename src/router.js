import { createRouter, createWebHistory } from 'vue-router'

import Homepage from './pages/Homepage.vue'
import Contact from './pages/Contact.vue'
import ProjectIndex from './pages/projects/Index.vue'
import ProjectShow from './pages/projects/ProjectShow.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Homepage,
		},
		{
			path: '/portfolio',
			name: 'projects.index',
			component: ProjectIndex,
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: Contact,
		},
		{
			path: '/project/:slug',
			name: 'project.show',
			props: true,
			component: ProjectShow,
		}
	],
})

export { router }