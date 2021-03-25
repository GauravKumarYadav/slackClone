import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useAuthValue } from './Auth/AuthProvider';
import Home from './pages/Home';
import Login from './pages/Login';

import './styles/App.css';

function App() {
	// const [user , setUser] = useState(null);

	const [{user}, dispatch] = useAuthValue();
	return (
		<div className="App">
			<Router>
				{
					!user ? (
						<Login />

					) : (
						<Home/>
					)
				}
				{/** Header */}
			</Router>
		</div>
	);
}

export default App;
