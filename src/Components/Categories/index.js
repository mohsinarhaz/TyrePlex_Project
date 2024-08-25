import { Container, Row, Col, Card } from 'react-bootstrap';

const Categories = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/image/tyre6.jpg" width={100} height={250} />
                        <Card.Body>
                            <Card.Title>MRF Tyres</Card.Title>
                            <Card.Text>
                                MRF Tyres produces a wide range of Car, Bike, Truck and Tractor tyres. At TyreDekho, we have 46 MRF Car Tyres models, 48 Bike Tyres models, 39 Truck Tyres models and 5 Tractor Tyres models.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/image/ceat.jpg" width={100} height={250} />
                        <Card.Body>
                            <Card.Title>CEAT Tyres</Card.Title>
                            <Card.Text>
                                CEAT Tyres produces a wide range of Car, Bike, Truck and Tractor tyres. At TyreDekho, we have 18 CEAT Car Tyres models, 29 Bike Tyres models, 27 Truck Tyres models and 6 Tractor Tyres models.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/image/appolo.jpg" width={100} height={250} />
                        <Card.Body>
                            <Card.Title>Apollo Tyres</Card.Title>
                            <Card.Text>
                                The product features nine compounding ingredients in different components of the tire, including rubber, sustainable carbon black recycled from end-of-life tires, bio-based oil.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Categories;
