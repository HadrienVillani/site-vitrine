import React, { useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import pictureOne from '../assets/roses.jpg';
import Carousel from './Carousel';
import Contact from './Contact';
import { Link, useLocation } from 'react-router-dom';

const Home = (props) => {
  const location = useLocation();
  window.scrollTo(0, 0);
  useEffect(() => {
    const scrolledElement = document.querySelectorAll('.scrolledElement');
    const headerScroll = document.querySelector('header');
    const carousel = document.querySelector('.carrouselContainer');

    const elementInView = (el, off) => {
      const element = el.getBoundingClientRect().top;
      return element <= window.innerHeight - off;
    };
    const handleScrollAnimation = () => {
      scrolledElement.forEach((e) => {
        if (elementInView(e, 350)) {
          e.classList.add('animation');
        }
      });
    };
    if (location.pathname === '/Home') {
      headerScroll.classList.add('header') ||
        headerScroll.classList.remove('headerPink');
    }
    window.addEventListener('scroll', () => {
      handleScrollAnimation();
      headerScroll.classList.add('headerScrolled');
      headerScroll.classList.remove('header');
      if (carousel.getBoundingClientRect().top >= 0) {
        headerScroll.classList.add('header');
        headerScroll.classList.remove('headerScrolled');
      } else {
        headerScroll.classList.add('headerScrolled');
        headerScroll.classList.remove('header');
      }
    });
  });

  return (
    <Fragment>
      <Carousel />
      <section className='introduction scrolledElement'>
        <div>
          <h5>Lorem ipsum</h5>
          <h1>Lorem ipsum</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            odio illo, sint libero ipsum, repellat deserunt quibusdam dolore
            quas assumenda dolores. Accusamus omnis odit modi, impedit sequi ut
            fugit minus.
          </p>
          <Link to={'/Galery'}>
            <button>Voir plus</button>
          </Link>
        </div>
      </section>
      <section className='firstPart scrolledElement'>
        <img src={pictureOne} alt='' />
        <div>
          <h2>First Part</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            odio illo, sint libero ipsum, repellat deserunt quibusdam dolore
            quas assumenda dolores. Accusamus omnis odit modi, impedit sequi ut
            fugit minus.Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Provident odio illo, sint libero ipsum, repellat deserunt
            quibusdam dolore quas assumenda dolores. Accusamus omnis odit modi,
            impedit sequi ut fugit minus.
          </p>
        </div>
      </section>
      <section className='secondPart scrolledElement'>
        <div>
          <h2>Second Part</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            tempora? Obcaecati nesciunt, numquam, neque vitae distinctio
            voluptates officiis nostrum eius quibusdam similique natus dolorem
            reiciendis porro mollitia officia. Odit, at?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            tempora? Obcaecati nesciunt, numquam, neque vitae distinctio
            voluptates officiis nostrum eius quibusdam similique natus dolorem
            reiciendis porro mollitia officia. Odit, at?
          </p>
        </div>
      </section>
      <section className='thirdPart scrolledElement'>
        <h2>Third Part</h2>
        <aside>
          <div>
            <h4>Lorem Ipsum</h4>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
              nisi cum vero atque iste voluptate consectetur amet tenetur, ad
              perspiciatis et vitae aliquam quis soluta eligendi veniam quisquam
              saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae quas nisi cum vero atque iste voluptate consectetur amet
              tenetur, ad perspiciatis et vitae aliquam quis soluta eligendi
              veniam quisquam saepe!
            </p>
          </div>
          <div>
            <h4>Lorem Ipsum</h4>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
              nisi cum vero atque iste voluptate consectetur amet tenetur, ad
              perspiciatis et vitae aliquam quis soluta eligendi veniam quisquam
              saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae quas nisi cum vero atque iste voluptate consectetur amet
              tenetur, ad perspiciatis et vitae aliquam quis soluta eligendi
              veniam quisquam saepe!
            </p>
          </div>
          <div>
            <h4>Lorem Ipsum</h4>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
              nisi cum vero atque iste voluptate consectetur amet tenetur, ad
              perspiciatis et vitae aliquam quis soluta eligendi veniam quisquam
              saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae quas nisi cum vero atque iste voluptate consectetur amet
              tenetur, ad perspiciatis et vitae aliquam quis soluta eligendi
              veniam quisquam saepe!
            </p>
          </div>
        </aside>
      </section>
      <Contact />
    </Fragment>
  );
};

export default Home;
