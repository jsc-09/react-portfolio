import React from 'react'
import '../styles/foundation.css'

export default function About() {
    return (
        <div >
            
            <div className="grid-x grid-padding-x">
                
                <div className="cell medium-4 large-4"><img src='./public/images/joanna-avatar.png' /></div>

                <div className="cell medium-8 large-8">
                <h4>About Joanna</h4>
                    <p>Based in San Diego, Joanna has over 15 years of experience in marketing and public relations. She is currently transitioning her career path to something she has always been passionate about—web development</p>

                    <p>Over the last two decades, she has managed and designed multiple websites, led organizations through rebranding projects, and helped them transition to responsive websites as smart phones came into play. She is currently taking classes to become a fullstack developer.</p>

                    <p><a href="mailto:joanna.s.christian@gmail.com">CONTACT HER</a> for UX/UI, web development, marketing, and social media & PR strategies.</p></div>
            </div>
        </div>


    )
}
