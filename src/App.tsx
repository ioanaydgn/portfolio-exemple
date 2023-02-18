import React, { useEffect } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

import Header from './components/Header';
import Footer from './components/Footer';
import ImageList from './components/ImageList';

import animoji from './images/top/animoji.png';
import design from './images/top/design.png';
import code from './images/top/code.png';
import consult from './images/top/consulting.png';


import './darkMode.css';
import './App.css';

function App() {

  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      console.log('dark');
    } else {
      setTheme('light');
      console.log('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="{`App ${theme}`}">
      <Header/>
      <main>
        <section>
          <nav className="py-10 mb-12 flex justify-between dark:text-white w-5/6 ml-40 mt-50">
            <h1 className='font-burtons text-xl ml-2'>0x22</h1>
            <ul className='flex items-center'>
              <li>
                <button className='cursor-pointer text-2xl' onClick={toggleTheme}><BsFillMoonStarsFill/></button>
              </li>
              <li>
                <button className='bg-blue-200 text-white px-4 py-2 border-none rounded0md ml-8'>CV</button>

              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-rose-500 font-medium dark:text-rose-400 md:text-6xl'>Mert Aydogan</h2>
            <h3 className='text-2xl text-gray-500 dark:text-gray-400'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>Freelance providing services for programming and desing content needs. Join me down below and let&apos;s get cracking!</p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
              <a href='https://www.twitter.com/aydgn_me'><AiFillTwitterCircle/></a>
              <a href='https://www.twitter.com/aydgn_me'><AiFillLinkedin/></a>
              <a href='https://www.twitter.com/aydgn_me'><AiFillInstagram/></a>
            </div>
            <div className='display: flex justify-content: center align-items: center'>
              <div className='relative mx-auto bg-gradient-to-b from-blue-200 rounded-full w-80 h-80 mt-20 overflow-hidden'>
                <img src={animoji} className='layout-fill object-cover' alt='animoji'/>
              </div>
            </div>
          </div>
        </section>
        <section className='ml-40 mr-40'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
            <p className='text-x text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>Since the beginning og my journey as a freelance desinger and developer, I&apos;ve done remote work for
              <span className='text-rose-500'>  agencies </span>consulted for <span className='text-rose-500'> startups </span>and collaborated with talanted people to create digital products
              for both business and consumer use.</p>
            <p className='text-x text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>I offer from a wide range of services, including brand design,
              programming and teaching.</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
              <img alt="desing" src={design} width={100} height={100} className='ml-auto mr-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>Creating elegant designs suited for your needs following core
                design theory.</p>
                <h4 className='py-4 text-rose-500'>Design Tools I Use</h4>
            <p className='text-gray-800 py-1 dark:text-gray-200'>Photoshop</p>
            <p className='text-gray-800 py-1 dark:text-gray-200'>Illustrator</p>
            <p className='text-gray-800 py-1 dark:text-gray-200'>Figma</p>
            <p className='text-gray-800 py-1 dark:text-gray-200'>Procreate</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
              <img alt="code" src={code} width={100} height={100} className='ml-auto mr-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>
              Code your dream project
              </h3>
              <p className='py-2'>Do you have an idea for your next great website? Let&apos;s make it a
                reality.</p>
                <h4 className='py-4 text-rose-500'>Design Tools I Use</h4>
                <p className='text-gray-800 py-1 dark:text-gray-200'>React.js</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>TypeScript</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Django</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
              <img alt="consult" src={consult} width={100} height={100} className='ml-auto mr-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>
              Skills
              </h3>
              <p className='py-2'></p>
            <p className='text-gray-800 py-1 dark:text-gray-200'>Project Management</p>
            </div>
          </div>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>My Work</h3>
            <p className='text-x text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>Here are some of my recent projects. I&apos;ve worked with a wide range of clients from
            </p>

          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <ImageList/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
