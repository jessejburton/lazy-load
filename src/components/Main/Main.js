import React from 'react';
import LazyLoad from 'react-lazy-load';
import ImageLoader from './ImageLoader';

export default () => {
  return (
    <div>
      <header className='header'>
        <h1>Testing Lazy Load Images</h1>
      </header>
      <section className='section section--1'>
        <h2>Section 1 Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          dolorem possimus animi rerum perferendis magnam numquam velit!
          Provident minima ratione molestias ex. Voluptas quo assumenda sapiente
          mollitia. Temporibus, non eius? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. A ullam dolor enim dolore sit ut numquam deleniti.
          Nemo voluptatem voluptas eaque fugit quisquam ea aliquid, facere dicta
          doloremque adipisci dolorem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam autem blanditiis beatae quae nisi qui in
          saepe. Similique officia aliquid veritatis provident ducimus quasi
          consectetur sapiente fuga tempora? Assumenda, aperiam? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Repellat, dolore! Vitae
          voluptatibus quam, qui veniam, consectetur magni alias voluptates
          voluptatem provident labore omnis excepturi inventore quis dicta rem
          dolorum odit.
        </p>
      </section>
      <section className='section section--2'>
        <h2>Section 2 Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          dolorem possimus animi rerum perferendis magnam numquam velit!
          Provident minima ratione molestias ex. Voluptas quo assumenda sapiente
          mollitia. Temporibus, non eius? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. A ullam dolor enim dolore sit ut numquam deleniti.
          Nemo voluptatem voluptas eaque fugit quisquam ea aliquid, facere dicta
          doloremque adipisci dolorem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam autem blanditiis beatae quae nisi qui in
          saepe. Similique officia aliquid veritatis provident ducimus quasi
          consectetur sapiente fuga tempora? Assumenda, aperiam? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Repellat, dolore! Vitae
          voluptatibus quam, qui veniam, consectetur magni alias voluptates
          voluptatem provident labore omnis excepturi inventore quis dicta rem
          dolorum odit.
        </p>
      </section>
      <section className='section section-3'>
        <h2>Section 3 Content (With Image)</h2>
        <p className='text-centered'>
          <LazyLoad height={400} debounce={false} offsetVertical={500}>
            <ImageLoader src='images/image.jpg' className='image image--1' />
          </LazyLoad>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde
          fuga labore eveniet dolorum dolor in, mollitia esse aperiam non
          facilis accusantium similique cum, voluptatum molestias praesentium
          cupiditate. Quod, voluptatibus.
        </p>
      </section>
    </div>
  );
};
