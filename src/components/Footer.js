import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContent'>
        <div className='footerSection'>
          <h4>About Me</h4>
          <p>I am a passionate Software Developer with experience in full-stack development. I love creating web applications that solve real-world problems.</p>
        </div>
        <div className='footerSection'>
          <h4>Contact Information</h4>
          <p>Email: balasaikshirsagar@gmail.com</p>
          <p>Phone: 8688228440</p>
        </div>
        <div className='footerSection'>
          <h4>Follow Me</h4>
          <div className='socialIcons'>
            <a href='https://github.com/balasaikshirsagar' target='_blank' rel='noopener noreferrer'>
              <img src='https://cdn-icons-png.flaticon.com/128/25/25231.png' alt='GitHub' className='socialIcon' />
            </a>
            <a href='https://www.linkedin.com/in/kshirsagar-balasai-655a1219a/' target='_blank' rel='noopener noreferrer'>
              <img src='https://cdn-icons-png.flaticon.com/128/174/174857.png' alt='LinkedIn' className='socialIcon' />
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </div>
      <div className='footerBottom'>
        <p>&copy; {new Date().getFullYear()} KSHIRSAGAR BALASAI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
