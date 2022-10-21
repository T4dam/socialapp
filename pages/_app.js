import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../libs/context';
import { useUserData } from '../libs/hooks';

function MyApp({ Component, pageProps }) {
	const userData = useUserData();
	console.log(userData);
	return (
		<UserContext.Provider value={{ userData }}>
			<Navbar />
			<Component {...pageProps} />
			<Toaster />
		</UserContext.Provider>
	);
}

export default MyApp;
