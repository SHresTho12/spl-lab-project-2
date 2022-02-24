import React from 'react'
import '../Css/Description.css'
import gameImage from '../images/game-image.jpg'
import cartoonImage from '../images/cartoon-image.jpg'
import quizImage from '../images/quiz-image.jpg'
function Description() {
  return (
    <section class="section-about">
    <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Exciting Learning Opportunity For Special Children</h2>
    </div>
    <div class="row">
        <div class="col-1-of-2">

            <h3 class="heading-tertiary u-margin-small">You are going to fall in love with the Games</h3>
            <p class="paragraph">We have different types of games just for you . You are going to love them .
                They are easy to play and fun. Not only you are going have fun you are going to learn a lot with
                them.</p>


            <h3 class="heading-tertiary u-margin-small">Quizzes Of different kind just for you Child</h3>
            <p class="paragraph">Different children different learn in different ways. Some like voice , some
                like animation , Some like to play games we have different kind of testing system for every kind
                of children.Every child will feel special with us</p>

            <a href="#" class="btn-text">
                Learm More &rarr;
            </a>
        </div>
        <div class="col-1-of-2">
            <div class="composition">
                <img src={gameImage} alt="photo 1" class="composition-photo composition-photo-p1"/>
                <img src={cartoonImage} alt="photo 2"class="composition-photo composition-photo-p2"/>
                <img src={quizImage} alt="photo 3" class="composition-photo composition-photo-p3"/>
            </div>
        </div>
</div>
</section>
  )
}

export default Description