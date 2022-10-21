import toast from 'react-hot-toast';

export default function Home() {
	return (
		<main>
			<button onClick={() => toast.success('ello there')}>click</button>
		</main>
	);
}
