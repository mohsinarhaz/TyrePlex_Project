import { Container, Row, Col, Image } from 'react-bootstrap';

export default function About() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <h1>About Us</h1>
                    <p>
                        TyrePlex is a Tech and Product company that is on a mission to digitize the tyre industry in India.

                        Founded in 2020, TyrePlex has launched a number of products that are revolutionizing the tyre industry.

                        TyrePlex.Com

                        TyrePlex Core Team
                        From Left: Nikhil Kalra (Chief Product Officer), Jiveshwar Sharma (CTO), Rupendra Pratap Singh (COO), Puneet Bhaskar (CEO)
                        Tyreplex.com is India’s No. 1 website for tyres.
                    </p>
                    <p>
                        We are building a unique blend of online and offline business; aggregating demand online via www.tyreplex.com and servicing the customers through a vast network of partner stores within 24 hours...                    </p>
                </Col>
                <Col md={6}>
                    <Image
                        src="/image/tyreplex-leadership.jpg"
                        alt="Tyre Shop"
                        fluid
                        width={600}
                    />
                </Col>
            </Row>
        </Container>
    );
}
