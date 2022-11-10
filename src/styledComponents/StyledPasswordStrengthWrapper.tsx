import React, { ReactNode } from 'react';
import styles from '../styles/default.mod.css';

const StyledPasswordStrengthWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className={styles['styled-password-strength-wrapper']}>{children}</div>
  );
};

export default StyledPasswordStrengthWrapper;
