import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='section'>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem sit amet tortor facilisis pretium elementum vel nisi. Quisque nec sem sem. Nunc hendrerit luctus tortor, commodo maximus ligula. Aliquam vel enim varius, euismod diam et, auctor urna. In cursus nisi lectus, nec dapibus tellus lobortis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus odio nibh, sagittis sed volutpat eu, bibendum vitae nulla. Vestibulum ultrices, augue ut aliquam aliquam, elit tortor efficitur augue, vitae iaculis leo justo eget lectus. Donec erat elit, posuere et dignissim ac, accumsan eu mi. Fusce efficitur mauris id est congue varius. Pellentesque feugiat augue elit, eget posuere orci molestie non. Nullam eu ullamcorper nibh. Morbi at lacus ac ligula hendrerit iaculis a in libero. Nulla consectetur ante ut tellus ullamcorper tincidunt. Quisque elit dui, mattis ut tincidunt vel, consectetur eget libero 
            </p>
        <Link to='/' className='btn'>Go Back Home</Link>
        
    </div>
  )
}

export default About