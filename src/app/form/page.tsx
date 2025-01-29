import { Input } from '../_lib/components/Input';

export default async function Form() {
	const handleSubmit = async (data: FormData) => {
		'use server';
		console.log('data ===', data);
	};

	return (
		<div className='w-[500px] mx-auto border border-gray-300 p-8 rounded-md bg-slate-100'>
			<form
				action={handleSubmit}
				className='flex flex-col gap-4'>
				<Input
					name='username'
					placeholder='Username'
					type='text'
				/>
				<Input
					name='comment'
					placeholder='Comment'
					type='comment'
				/>
				<Input
					type='file'
					name='file'
				/>
				<button
					type='submit'
					className='border border-orange-500 py-2 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white transition-colors'>
					Submit form
				</button>
			</form>
		</div>
	);
}
