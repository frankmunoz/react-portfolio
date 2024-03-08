    // Portfolio.js

    import React, { useEffect, useRef, useState } from 'react';
        import Isotope from 'isotope-layout';

    const Portfolio = () => {
        const portfolioContainer = useRef(null);
        const iso = useRef(null);
        const [filter, setFilter] = useState('*');

        useEffect(() => {
            iso.current = new Isotope(portfolioContainer.current, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });
            console.log('iso.current=>',iso.current);
        }, []);

        const handleFilterClick = (newFilter) => {
            setFilter(newFilter);
            iso.current.arrange({ filter: newFilter });
            console.log('iso.current=>',iso.current);
            console.log('newFilter=>',newFilter);
        };

    return (
        <section className="section bg-custom-gray" id="portfolio">
        <div className="container">
            <h1 className="mb-5"><span className="text-danger">My</span> Portfolio</h1>
            <div className="portfolio">
            <div className="filters">
                <a onClick={() => handleFilterClick('.new')} data-filter=".new">New</a>
                <a onClick={() => handleFilterClick('.advertising')} data-filter=".advertising">Advertising</a>
                <a onClick={() => handleFilterClick('.branding')} data-filter=".branding">Branding</a>
                <a onClick={() => handleFilterClick('.web')} data-filter=".web">Web</a>


            </div>
            <div ref={portfolioContainer} className="portfolio-container">
                <div className="col-md-6 col-lg-4 web new">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/web-1.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/web-1.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">WEB</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 advertising new">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/advertising-2.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>                         
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/advertising-2.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">ADVERSTISING</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>    
                    </div>              
                </div> 
                <div className="col-md-6 col-lg-4 web">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/web-4.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/web-4.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">WEB</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>                                                     
                </div>

                <div className="col-md-6 col-lg-4 advertising"> 
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/advertising-1.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>                               
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/advertising-1.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">ADVERSITING</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>                                                       
                </div> 
                <div className="col-md-6 col-lg-4 web new">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/web-3.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>  
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/web-3.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">WEB</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>                                                     
                </div>
                <div className="col-md-6 col-lg-4 advertising new">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/advertising-3.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>       
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/advertising-3.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">ADVERSITING</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>                                                       
                </div> 
                <div className="col-md-6 col-lg-4 advertising new"> 
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/advertising-4.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>            
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/advertising-4.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">ADVERTISING</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>
                            
                </div> 
                <div className="col-md-6 col-lg-4 branding new">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/branding-1.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>                        
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/branding-1.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">BRANDING</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div> 
                    </div>
                </div> 
                <div className="col-md-6 col-lg-4 branding">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/branding-2.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>  
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/branding-2.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">BRANDING</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>                                                     
                </div> 
                <div className="col-md-6 col-lg-4 branding new">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/branding-3.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>   
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/branding-3.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">BRANDING</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>                                                    
                </div> 
                <div className="col-md-6 col-lg-4 branding">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/branding-4.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>                      
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/branding-4.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">BRANDING</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>                                                      
                </div> 
                <div className="col-md-6 col-lg-4 branding">
                    <div className="portfolio-item">
                        <img src={process.env.PUBLIC_URL + '/imgs/branding-5.jpg'} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>          
                        <div className="content-holder">
                            <a className="img-popup" href={process.env.PUBLIC_URL + '/imgs/branding-5.jpg'}></a>
                            <div className="text-holder">
                                <h6 className="title">BRANDING</h6>
                                <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                            </div>
                        </div>
                    </div>                                                   
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default Portfolio;
