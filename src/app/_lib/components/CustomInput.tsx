import React from 'react';

type Props = {
	label?: string;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const CustomInput = ({ label, inputProps }: Props) => {
	return (
		<div>
			<label htmlFor={inputProps?.name}>
				{label}
				<input {...inputProps} />
			</label>
		</div>
	);
};

export default CustomInput;
