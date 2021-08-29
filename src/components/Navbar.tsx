import { Link,Switch,Route } from 'react-router-dom'
import About from './About';
import Currentprice from './Currentprice';
import HistorySel from './HistorySel';
import HistoryRes from './HistoryRes';

const Navbar = () => {
	return (
		<div className='my-5'>
			<p className='text-center text-3xl italic my-5'>Minimal Bitcoin App</p>
			<div className='flex justify-center text-md space-x-5'>
				<p><Link to="/current">Current price</Link></p>
				<p>|</p>
				<p><Link to="/history/select">Historical price</Link></p>
				<p>|</p>
				<p><Link to="/about">About me</Link></p>
			</div>
			<Switch>

				<Route path="/current">

					<Currentprice></Currentprice>

				</Route>

				<Route path="/history/select">

					<HistorySel></HistorySel>

				</Route>

				<Route path="/history/result">

					<HistoryRes></HistoryRes>

				</Route>

				<Route path="/about">
					<About></About>
				</Route>

			</Switch>
		</div>
	)
}

export default Navbar;