import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './index.module.sass';
const cx = classNames.bind(styles);

const Button = ({ label, color, isActive }) => {
	const cssClasses = cx({
		'button': true,
		'button--color-red': (color === 'primary'),
		'button--active': isActive,
	});
	return (
		<button className={cssClasses}>
			{label}
		</button>
	);
};
Button.propTypes = {
	label: PropTypes.string,
	color: PropTypes.string,
	isActive: PropTypes.bool,
};
export default Button;