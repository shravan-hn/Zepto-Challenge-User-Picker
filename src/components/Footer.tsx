import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Shravan H N| 
        <a href="mailto:shravannrpura@gmail.com">shravannrpura@gmail.com</a> | 
        <a href="https://www.linkedin.com/in/shravan-h-n" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;
