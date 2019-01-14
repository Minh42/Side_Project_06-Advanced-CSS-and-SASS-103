import React, { Component } from 'react';
import url from './assets/img/sprite.svg';
import story1 from './assets/img/story-1.jpeg';
import story2 from './assets/img/story-2.jpeg';
import house1 from './assets/img/house-1.jpeg';
import house2 from './assets/img/house-2.jpeg';
import house3 from './assets/img/house-3.jpeg';
import house4 from './assets/img/house-4.jpeg';
import house5 from './assets/img/house-5.jpeg';
import house6 from './assets/img/house-6.jpeg';
import gallery1 from './assets/img/gal-1.jpeg';
import gallery2 from './assets/img/gal-2.jpeg';
import gallery3 from './assets/img/gal-3.jpeg';
import gallery4 from './assets/img/gal-4.jpeg';
import gallery5 from './assets/img/gal-5.jpeg';
import gallery6 from './assets/img/gal-6.jpeg';
import gallery7 from './assets/img/gal-7.jpeg';
import gallery8 from './assets/img/gal-8.jpeg';
import gallery9 from './assets/img/gal-9.jpeg';
import gallery10 from './assets/img/gal-10.jpeg';
import gallery11 from './assets/img/gal-11.jpeg';
import gallery12 from './assets/img/gal-12.jpeg';
import gallery13 from './assets/img/gal-13.jpeg';
import gallery14 from './assets/img/gal-14.jpeg';
import logo from './assets/img/logo.png';
import seen1 from './assets/img/logo-bbc.png';
import seen2 from './assets/img/logo-forbes.png';
import seen3 from './assets/img/logo-techcrunch.png';
import seen4 from './assets/img/logo-bi.png';
import realtor1 from './assets/img/realtor-1.jpeg';
import realtor2 from './assets/img/realtor-2.jpeg';
import realtor3 from './assets/img/realtor-3.jpeg';

class App extends Component {
  render() {
    return (
      <body className="container">
        <div className="sidebar">
          <button className="nav-btn"></button>
        </div>
        <header className="header">
          <img src={logo} alt="Nexter" className="header__logo"/>
          <h3 className="heading-3">Your own home:</h3>
          <h1 className="heading-1">The ultimate personal freedom</h1>
          <button className="btn header__btn">View our properties</button>
          <div className="header__seenon-text">As seen on</div>
          <div className="header__seenon-logos">
            <img src={seen1} alt="Seen on logo 1"/>
            <img src={seen2} alt="Seen on logo 2"/>
            <img src={seen3} alt="Seen on logo 3"/>
            <img src={seen4} alt="Seen on logo 4"/>
          </div>
        </header>
        <div className="realtors">
          <h3 className="heading-3">Top 3 realtors</h3>
          <div className="realtors__list">
            <img src={realtor1} alt="Realtor1" className="realtors__img"/>
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">Adam Ondura</h4>
              <p className="realtors__sold">245 houses sold</p>
            </div>
            <img src={realtor2} alt="Realtor1" className="realtors__img"/>
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">Kim Brown</h4>
              <p className="realtors__sold">212 houses sold</p>
            </div>
            <img src={realtor3} alt="Realtor1" className="realtors__img"/>
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">Evan Smith</h4>
              <p className="realtors__sold">199 houses sold</p>
            </div>
          </div>
        </div>
        <section className="features">
          <div className="feature">
            <svg viewBox='0 0 32 32' className="feature__icon">
              <use xlinkHref={`${url}#icon-global`} />
            </svg>
            <h4 className="heading-4 heading-4-dark">World's best luxury homes</h4>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat doloribus molestias repellat, iste cum consequatur cupiditate! Beatae adipisci voluptate reiciendis excepturi quae, quod sequi eos nulla laborum earum, molestias harum!
            </p>
          </div>
          <div className="feature">
            <svg viewBox='0 0 32 32' className="feature__icon">
              <use xlinkHref={`${url}#icon-trophy`} />
            </svg>
            <h4 className="heading-4 heading-4-dark">Only the best properties</h4>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat doloribus molestias repellat, iste cum consequatur cupiditate! Beatae adipisci voluptate reiciendis excepturi quae, quod sequi eos nulla laborum earum, molestias harum!
            </p>
          </div>
          <div className="feature">
            <svg viewBox='0 0 32 32' className="feature__icon">
              <use xlinkHref={`${url}#icon-map-pin`} />
            </svg>
            <h4 className="heading-4 heading-4-dark">All homes in top locations</h4>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat doloribus molestias repellat, iste cum consequatur cupiditate! Beatae adipisci voluptate reiciendis excepturi quae, quod sequi eos nulla laborum earum, molestias harum!
            </p>
          </div>
          <div className="feature">
            <svg viewBox='0 0 32 32' className="feature__icon">
              <use xlinkHref={`${url}#icon-key`} />
            </svg>
            <h4 className="heading-4 heading-4-dark">New home in one week</h4>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat doloribus molestias repellat, iste cum consequatur cupiditate! Beatae adipisci voluptate reiciendis excepturi quae, quod sequi eos nulla laborum earum, molestias harum!
            </p>
          </div>
          <div className="feature">
            <svg viewBox='0 0 32 32' className="feature__icon">
              <use xlinkHref={`${url}#icon-presentation`} />
            </svg>
            <h4 className="heading-4 heading-4-dark">Top 1% realtors</h4>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat doloribus molestias repellat, iste cum consequatur cupiditate! Beatae adipisci voluptate reiciendis excepturi quae, quod sequi eos nulla laborum earum, molestias harum!
            </p>
          </div>
          <div className="feature">
            <svg viewBox='0 0 32 32' className="feature__icon">
              <use xlinkHref={`${url}#icon-lock`} />
            </svg>
            <h4 className="heading-4 heading-4-dark">Secure payments on Nexter</h4>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat doloribus molestias repellat, iste cum consequatur cupiditate! Beatae adipisci voluptate reiciendis excepturi quae, quod sequi eos nulla laborum earum, molestias harum!
            </p>
          </div>
        </section>
        <div className="story__pictures">
          <img src={story1} alt="Couple with new house" className="story__img--1"/>
          <img src={story2} alt="New house" className="story__img--2"/>
        </div>
        <div className="story__content">
          <h3 className="heading-3 mb-sm">Happy Customers</h3>
          <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&ldquo;</h2>
          <p className="story__text ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat doloribus molestias repellat, iste cum consequatur cupiditate! Beatae adipisci voluptate reiciendis excepturi quae, quod sequi eos nulla laborum earum, molestias harum!
          </p>
          <button className="btn">Find your own home</button>
        </div>
        <section className="homes">
        <div class="home">
        <img src={house1} alt="House 1" class="home__img"/>
        <svg class="home__like">
          <use xlinkHref={`${url}#icon-heart-full`} />
        </svg>
        <h5 class="home__name">Beautiful Familiy House</h5>
        <div class="home__location">
            <svg>
              <use xlinkHref={`${url}#icon-map-pin`} />
            </svg>
            <p>USA</p>
        </div>
        <div class="home__rooms">
            <svg>
              <use xlinkHref={`${url}#icon-profile-male`} />
            </svg>
            <p>5 rooms</p>
        </div>
        <div class="home__area">
            <svg>
              <use xlinkHref={`${url}#icon-expand`} />
            </svg>
            <p>325 m<sup>2</sup></p>
        </div>
        <div class="home__price">
            <svg>
              <use xlinkHref={`${url}#icon-key`} />
            </svg>
            <p>$1,200,000</p>
        </div>
        <button class="btn home__btn">Contact realtor</button>
    </div>

          <div class="home">
            <img src={house2} alt="House 2" class="home__img"/>
              <svg class="home__like">
                <use xlinkHref={`${url}#icon-heart-full`} />
              </svg>
              <h5 class="home__name">Modern Glass Villa</h5>
              <div class="home__location">
                <svg>
                  <use xlinkHref={`${url}#icon-map-pin`} />
                </svg>
                <p>Canada</p>
              </div>
              <div class="home__rooms">
                <svg>
                  <use xlinkHref={`${url}#icon-profile-male`} />
                </svg>
                <p>6 rooms</p>
              </div>
              <div class="home__area">
                <svg>
                  <use xlinkHref={`${url}#icon-expand`} />
                </svg>
                <p>450 m<sup>2</sup></p>
              </div>
              <div class="home__price">
                <svg>
                  <use xlinkHref={`${url}#icon-key`} />
                </svg>
                <p>$2,750,000</p>
              </div>
              <button class="btn home__btn">Contact realtor</button>
            </div>

            <div class="home">
                <img src={house3} alt="House 3" class="home__img"/>
                <svg class="home__like">
                  <use xlinkHref={`${url}#icon-heart-full`} />
                </svg>
                <h5 class="home__name">Cozy Country House</h5>
                <div class="home__location">
                    <svg>
                      <use xlinkHref={`${url}#icon-map-pin`} />
                    </svg>
                    <p>UK</p>
                </div>
                <div class="home__rooms">
                    <svg>
                      <use xlinkHref={`${url}#icon-profile-male`} />
                    </svg>
                    <p>4 rooms</p>
                </div>
                <div class="home__area">
                    <svg>
                      <use xlinkHref={`${url}#icon-expand`} />
                    </svg>
                    <p>250 m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <svg>
                      <use xlinkHref={`${url}#icon-key`} />
                    </svg>
                    <p>$850,000</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div>

            <div class="home">
                <img src={house4} alt="House 4" class="home__img"/>
                <svg class="home__like">
                  <use xlinkHref={`${url}#icon-heart-full`} />
                </svg>
                <h5 class="home__name">Large Rustical Villa</h5>
                <div class="home__location">
                    <svg>
                      <use xlinkHref={`${url}#icon-map-pin`} />
                    </svg>
                    <p>Portugal</p>
                </div>
                <div class="home__rooms">
                    <svg>
                      <use xlinkHref={`${url}#icon-profile-male`} />
                    </svg>
                    <p>6 rooms</p>
                </div>
                <div class="home__area">
                    <svg>
                      <use xlinkHref={`${url}#icon-expand`} />
                    </svg>
                    <p>480 m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <svg>
                      <use xlinkHref={`${url}#icon-key`} />
                    </svg>
                    <p>$1,950,000</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div>

            <div class="home">
                <img src={house5} alt="House 5" class="home__img"/>
                <svg class="home__like">
                  <use xlinkHref={`${url}#icon-heart-full`} />
                </svg>
                <h5 class="home__name">Majestic Palace House</h5>
                <div class="home__location">
                    <svg>
                      <use xlinkHref={`${url}#icon-map-pin`} />
                    </svg>
                    <p>Germany</p>
                </div>
                <div class="home__rooms">
                    <svg>
                      <use xlinkHref={`${url}#icon-profile-male`} />
                    </svg>
                    <p>18 rooms</p>
                </div>
                <div class="home__area">
                    <svg>
                      <use xlinkHref={`${url}#icon-expand`} />
                    </svg>
                    <p>4230 m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <svg>
                      <use xlinkHref={`${url}#icon-key`} />
                    </svg>
                    <p>$9,500,000</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div>

            <div class="home">
                <img src={house6} alt="House 6" class="home__img"/>
                <svg class="home__like">
                  <use xlinkHref={`${url}#icon-heart-full`} />
                </svg>
                <h5 class="home__name">Modern Familiy Apartment</h5>
                <div class="home__location">
                    <svg>
                      <use xlinkHref={`${url}#icon-map-pin`} />
                    </svg>
                    <p>Italy</p>
                </div>
                <div class="home__rooms">
                    <svg>
                      <use xlinkHref={`${url}#icon-profile-male`} />
                    </svg>
                    <p>3 rooms</p>
                </div>
                <div class="home__area">
                    <svg>
                      <use xlinkHref={`${url}#icon-expand`} />
                    </svg>
                    <p>180 m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <svg>
                      <use xlinkHref={`${url}#icon-key`} />
                    </svg>
                    <p>$600,000</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div>

        </section>
        <section className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src={gallery1} alt="Gallery Image 1" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={gallery2} alt="Gallery Image 2" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={gallery3} alt="Gallery Image 3" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={gallery4} alt="Gallery Image 4" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src={gallery5} alt="Gallery Image 5" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src={gallery6} alt="Gallery Image 6" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img src={gallery7} alt="Gallery Image 7" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img src={gallery8} alt="Gallery Image 8" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img src={gallery9} alt="Gallery Image 9" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--10">
            <img src={gallery10} alt="Gallery Image 10" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--11">
            <img src={gallery11} alt="Gallery Image 11" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--12">
            <img src={gallery12} alt="Gallery Image 12" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--13">
            <img src={gallery13} alt="Gallery Image 13" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--14">
            <img src={gallery14} alt="Gallery Image 14" className="gallery__img"/>
          </figure>
        </section>
        <footer className="footer">
          <ul className="nav">
            <li className="nav__item">
              <a href="#" className="nav__link">Find your dream home</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Request proposal</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Download home planner</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Contact us</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Submit your property</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Come work with us</a>
            </li>
          </ul>
          <p className="copyright">
            &copy; Copyright 2019
          </p>
        </footer>
      </body>
    );
  }
}

export default App;
