import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import TrackVisibility from 'react-on-screen';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
        console.log("onload");
    };

    useEffect(() => {

        if (token)
            console.log(`hCaptcha Token: ${token}`);

    }, [token]);

    // script();
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility once>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : "animate__animated animate__zoomOut"} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility once>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__zoomOut"}>
                                    <h2>Get In Touch</h2>
                                    <form action="https://api.web3forms.com/submit" method="POST">
                                        <Row>
                                            <input type="hidden" name="access_key" value="80990dd4-5519-4001-bdc1-cd7cdc3fb2eb" />
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="firstName" placeholder="First Name" required />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="lastName" placeholder="Last Name" required />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" name="email" placeholder="Email" required />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="phone" name="phone" placeholder="Phone Number" required />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" name="message" placeholder="A message you want to send!"></textarea>
                                                <HCaptcha
                                                    sitekey="30698c86-b388-4e35-a985-f52d76217934"
                                                    onLoad={onLoad}
                                                    onVerify={setToken}
                                                    theme="dark"
                                                    ref={captchaRef}
                                                />
                                                {token ? <button type="submit"><span>Send</span></button>: null}
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}