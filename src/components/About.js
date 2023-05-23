import React from 'react';
import AboutImg from '../assets/about-img.png';

const About = () => {
  return (
    <section className='px-5 py-20 border-t-2 border-amber-500' id='about'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='about-info'>
          <h2 className='text-accent text-4xl font-bold mb-1 w-[180px]'>
            About Me
          </h2>
          <div className='w-[168px] rounded h-1 bg-accent mb-20 duration-300 cursor-pointer'></div>

          <p className='pb-5'>
            Hello, I'm{' '}
            <span className='text-accent font-semibold'>Liem Hoang Dinh</span>,
            everyone calls me Gink. I am a{' '}
            <span className='text-accent font-semibold'>
              Frontend Developer
            </span>
            . <br />I build beautiful websites with{' '}
            <span className='text-accent font-semibold'>ReactJS</span>,{' '}
            <span className='text-accent font-semibold'>Angular</span>,{' '}
            <span className='text-accent font-semibold'>VueJs</span>, many
            frameworks like{' '}
            <span className='text-accent font-semibold'>Tailwind CSS</span>,{' '}
            <span className='text-accent font-semibold'>Material</span>,{' '}
            <span className='text-accent font-semibold'>Bootstrap</span> and
            especially I specialize in{' '}
            <span className='text-accent font-semibold'>Scss</span>.
          </p>
          <p className='pb-5'>
            I am proficient in Frontend skills like{' '}
            <span className='text-accent font-semibold'>React.js</span>,{' '}
            <span className='text-accent font-semibold'>Angular</span>,{' '}
            <span className='text-accent font-semibold'>Vue.js</span>,{' '}
            <span className='text-accent font-semibold'>Redux</span>,{' '}
            <span className='text-accent font-semibold'>Redux Tool Kit</span>,{' '}
            <span className='text-accent font-semibold'>Axios</span>,{' '}
            <span className='text-accent font-semibold'>Tailwind CSS</span>,{' '}
            <span className='text-accent font-semibold'>Scss</span>,{' '}
            <span className='text-accent font-semibold'>API</span> skills.
          </p>

          <p className='pb-5'>
            In the backend, I know <span className='text-accent font-semibold'>Node.js</span>, <span className='text-accent font-semibold'>Express.js</span>, <span className='text-accent font-semibold'>MongoDB</span>.
          </p>

          <p>
            In my spare time, I read books about technology software and blog on
            my Blog. I am a creative person, I travel a lot to learn from many
            different places and cultures.
          </p>
        </div>

        <div className='about-img'>
          <img
            src={AboutImg}
            alt='coding illustration'
            className='lgw-[80%] md:ml-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
