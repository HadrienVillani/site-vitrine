import React, { useEffect, useState } from 'react';
import carouselFlowerOne from '../assets/fleurs1.jpg';
import carouselFlowerTwo from '../assets/fleurs2.jpg';
import carouselFlowerThree from '../assets/fleurs3.jpg';
import { Link } from 'react-router-dom';
function Carousel() {
  const [count, setCount] = useState(0);
  if (count > 2) {
    setCount(0);
  } else if (count < 0) {
    setCount(2);
  }
  console.log(count);
  useEffect(() => {
    const pictures = document.querySelectorAll('.containerCarouselPicture');
    pictures.forEach((e) => {
      e.classList.remove('activePicture');
      e.classList.add('not-active');
    });
    pictures[count].classList.add('activePicture');
    pictures[count].classList.remove('not-active');
    pictures[count].style.opacity = '100%';
  });

  return (
    <div className='carrouselContainer'>
      <div className='containerCarouselPicture not-active'>
        <img src={carouselFlowerOne} className='carouselPicture' alt='' />
        <div className='containerCarouselText'>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            vitae voluptatibus earum, aliquid vero, architecto ducimus
            laudantium ea quia quasi iure? Nisi alias ipsum temporibus accusamus
            beatae tempora quo cumque?
          </p>
          <Link to={'/Galery'}>
            <button className=''>Voir plus</button>
          </Link>
        </div>
      </div>
      <div className='containerCarouselPicture not-active'>
        <img src={carouselFlowerTwo} className='carouselPicture' alt='' />
        <div className='containerCarouselText'>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            vitae voluptatibus earum, aliquid vero, architecto ducimus
            laudantium ea quia quasi iure? Nisi alias ipsum temporibus accusamus
            beatae tempora quo cumque?
          </p>
          <Link to={'/Galery'}>
            <button className=''>Voir plus</button>
          </Link>
        </div>
      </div>
      <div className='containerCarouselPicture not-active'>
        <img src={carouselFlowerThree} className='carouselPicture' alt='' />
        <div className='containerCarouselText'>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            vitae voluptatibus earum, aliquid vero, architecto ducimus
            laudantium ea quia quasi iure? Nisi alias ipsum temporibus accusamus
            beatae tempora quo cumque?
          </p>
          <Link to={'/Galery'}>
            <button className=''>Voir plus</button>
          </Link>
        </div>
      </div>
      <div className='containerButton'>
        <p className='carrouselButton' onClick={() => setCount(count + 1)}>
          Left
        </p>
        <p className='carrouselButton' onClick={() => setCount(count - 1)}>
          Right
        </p>
      </div>
    </div>
  );
}

export default Carousel;
