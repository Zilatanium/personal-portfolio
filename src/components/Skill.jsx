import webdev from "../assets/img/webdev.svg";
import reactsvg from "../assets/img/reactsvg.svg";
import gitsvg from "../assets/img/gitsvg.svg";
import hosting from "../assets/img/hosting.svg";
import collab from "../assets/img/collab.svg";
import friendly from "../assets/img/friendly.svg";
import Carousel from 'react-multi-carousel';
import designer from "../assets/img/designer.svg";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"


export const Skill = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skill">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>This carousel displays what I have learned over the years through school, work, and self-education. <br/> I've also placed my personality in and out of the workplace!</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <h5>Web Development</h5>
                                    <img src={webdev} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>React Framework</h5>
                                    <img src={reactsvg} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>Cloud Hosting</h5>
                                    <img src={hosting} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>Github/Git</h5>
                                    <img src={gitsvg} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>Collaborative/Open-Minded</h5>
                                    <img src={collab} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>Friendly</h5>
                                    <img src={friendly} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>UX/UI Designer</h5>
                                    <img src={designer} alt="Image" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}