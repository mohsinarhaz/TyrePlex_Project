import { Container, Carousel } from 'react-bootstrap';

const Hero = () => {
    return (
        <Container fluid className="p-0">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/image/tyre5.jpg  "
                        alt="First slide"
                        width={100} height={580} />
                    <Carousel.Caption>
                        <h3>Durable and Reliable Grip Tyres</h3>
                        <p>Best tyres for your vehicle.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/image/tyre6.jpg"
                        alt="Second slide"
                        width={100} height={580} />
                    <Carousel.Caption>
                        <h3>Excellent and Durable Grip Tyres</h3>
                        <p>Top quality at affordable prices.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/image/tyre4.jpg  "
                        alt="First slide"
                        width={100} height={580} />
                    <Carousel.Caption>
                        <h3> MRF Limited has recently released the Perfinza</h3>
                        <p>Range of luxury and premium tyres.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Hero;
