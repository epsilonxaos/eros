import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './web/Home';

function App() {
	return (
		<Router>
			<div>
				{/* Aqui va el header */}

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