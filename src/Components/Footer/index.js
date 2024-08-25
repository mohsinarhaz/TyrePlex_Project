import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    {/* About Section */}
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            We provide high-quality tyres at affordable prices. Contact us for more information.
                        </p>
                    </Col>

                    {/* Links Section */}
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link href="/" passHref>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/" passHref>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/" passHref>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/" passHref>

                                </Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Contact Section */}
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>
                            <strong>Email:</strong> info@tyreshop.com
                        </p>
                        <p>
                            <strong>Phone:</strong> +123 456 7890
                        </p>
                    </Col>
                </Row>

                <hr className="my-4" />

                {/* Social Media Section */}
                <Row>
                    <Col className="text-center">
                        <p>Follow Us</p>
                        <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center mt-3">
                        <p>&copy; {new Date().getFullYear()} TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
