import React from 'react';
import circul from '../../assets/images/image.png'

function Home(props) {
    return (
        <main>
            <section>
                <div className="container mx-auto grid grid-cols-12">
                    <div className="col-span-5">
                        <h1 className='text-7xl mt-7 dark:text-white'>
                            Creating bold visual
                            narratives that inspire and engage.
                        </h1>
                    </div>
                    <div className="col-span-7 col-start-9">
                        <div className='w-[400px] h-[400px] mt-7'>
                            <video loop autoPlay muted className='w-full h-full object-cover rounded-4xl'>
                                <source src="https://html.aqlova.com/videos/bfolio/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                <div className='container mx-auto w-50 h-50 relative'>
                    <img src={circul} alt="" className='w-full h-full animation'/>
                </div>
            </section>
        </main>
    );
}

export default Home;