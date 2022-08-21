import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250 - Math.random() * 100);
    const toRotate = ["Web Developer", "Software Engineer", "Support Engineer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1000);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);

            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        } 
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm Joseph Delgado! `}</h1>
                                    <h1>{`< `}<span className="wrap">{text} {` >`}</span></h1>
                                    <p> How are you? I'm currently a senior at Southern Connecticut State University majoring in Computer Science,
                                        Information Systems. I'm very passionate about all computer related topics, especially programming! Feel free to browse
                                        the site!
                                    </p>
                                    <a href="#connect"><button>Let's connect!<ArrowRightCircle size={25} /></button></a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img" />
                            </div>}
                    </TrackVisibility>
                </Row>
            </Container>
        </section>
    )
}