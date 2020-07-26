import App from './App.svelte';
import dataset from '../js/constants.json';
const app = new App({
	target: document.body,
	props: {
		dataset: dataset
	}
});

export default app;
