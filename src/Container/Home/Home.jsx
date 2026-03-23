import React from 'react';
// import circul from '../../assets/images/image.png'
import HomeImg from '../../assets/images/home.png'
// import Background from '../../assets/images/background.png'
import html from '../../assets/images/html.webp';
import css from '../../assets/images/css.jpg';
import js from '../../assets/images/js.png';
import reactImg from '../../assets/images/react.png';
import node from '../../assets/images/node.png';
import mongo from '../../assets/images/mongo.png';
import express from '../../assets/images/express.png';
import redux from '../../assets/images/redux.png';

const Skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React.js", icon: reactImg },
    { name: "Node.js", icon: node },
    { name: "MongoDB", icon: mongo },
    { name: "Redux Toolkit", icon: redux },
    { name: "Express", icon: express }
];

function Home(props) {
    return (
        <main>
            <section>
                <div className="container mx-auto grid grid-cols-12">

                    <div className="col-span-6 mt-21">
                        <button className='inline-block px-6 py-2 text-red-600  border  border-gray-500  rounded-4xl'>
                            Unique One
                        </button>
                        <h1 className='text-7xl font-semibold mt-7  dark:text-white'>
                            <span className='text-red-600'>Design & </span>
                            Devlopment
                        </h1>
                        <p className='text-lg text-gray-400 mt-10 pb-10'>Curae porttitor enim a neque nostra posuere nec eu. Primis nibh penatibus dictum cras iaculis dolor lacinia torquent. Tristique accumsan porta sociosqu cubilia metus velit placerat. Purus diam sit condimentum augue.</p>
                        <button className='inline-block px-9 py-4 text-white text-base  bg-red-600  rounded-4xl hover:bg-black dark:hover:bg-white dark:hover:text-black  duration-300 '>
                            Explore Project
                        </button>
                    </div>

                    <div className="col-start-8 col-end-12  ">
                        <div className='w-[600px] h-[500px] mt-18'>
                            <img
                                src={HomeImg} alt="" className='w-full h-full object-cover rounded-2xl'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto mt-28">
                    <h2 className='text-3xl sm:text-4xl md:text-5xl text-center font-semibold dark:text-white gap-3'>
                        My Work
                        <span className='text-red-600'>Skills</span>
                    </h2>
                    <p className='text-center text-base sm:text-lg text-gray-400 mt-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                        amet consectetur adipisicing elit. Quaerat, soluta
                    </p>
                    <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 px-6">
                        {
                            Skills.map((v, i) => (
                                <div className="bg-gray-200 dark:bg-red-900 p-6 rounded-xl flex flex-col items-center hover:scale-105 transition duration-300">
                                    <img
                                        src={v.icon}
                                        className="w-16 h-16 mb-4 object-cover"
                                    />
                                    <h3 className="text-xl font-semibold dark:text-white">
                                        {v.name}
                                    </h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;