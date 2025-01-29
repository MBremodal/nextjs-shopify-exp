import Link from 'next/link';

const NavBar = () => {
	const linkClassname = 'text-blue-500 hover:text-blue-700 font-semibold';

	return (
		<nav className='w-full h-[60px] flex items-center gap-4 px-3 py-2'>
			<Link
				href='/'
				className={linkClassname}>
				Home
			</Link>
			<Link
				href='/form'
				className={linkClassname}>
				Form
			</Link>
		</nav>
	);
};

export default NavBar;
