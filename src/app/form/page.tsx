import { Input } from '../_lib/components/Input';

export default async function Form() {
	const handleSubmit = async (data: FormData) => {
		'use server';
		console.log('data ===', data);
	};

	return (
		<div className='w-[500px] mx-auto'>
			<h1>Form</h1>
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
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}
