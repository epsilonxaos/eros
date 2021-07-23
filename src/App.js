import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './web/components/Header';
import Home from './web/Home';

function App() {
	return (
		<Router>
			<div>
				<Header />

				<Switch>
					<Route path="/" exact >
						<Home />
					</Route>
				</Switch>

				{/* Aqui va el Footer */}
			</div>
		</Router>
	);
}

export default App;