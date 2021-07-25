import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Suspense, lazy} from 'react';

import Header from './web/components/Header';
import Footer from './web/components/Footer';

const Home = lazy(() => {
	return Promise.all([
		import("./web/Home"),
		new Promise(resolve => setTimeout(resolve, 300))
	])
	.then(([moduleExports]) => moduleExports);
});

function App() {
	return (
		<Router>
			<div>

				<Switch>
					<Route path="/" exact >
						<Suspense fallback={<h2 className="text-center" style={{color: 'white'}}>Cargando ...</h2>}>
							<Header />
							<Home />
							<Footer />
						</Suspense>
					</Route>
				</Switch>

			</div>
		</Router>
	);
}

export default App;