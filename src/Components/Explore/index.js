import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function ExploreMore() {
    return (
        <Container className="my-5">
            <h3 className="mb-4">Explore More</h3>
            <Row>
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Img variant="top" src="/image/mrf.jpg" alt="Advantages of Tubeless tyres" width={30} height={160} />
                        <Card.Body>
                            <Card.Title>The Advantages of Tubeless tyres over Tubetype Tyres.</Card.Title>
                            <Button variant="link">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Img variant="top" src="/image/extratyre.jpg" alt="Is it Worth buying used car tyres?" width={30} height={160} />
                        <Card.Body>
                            <Card.Title>Is it Worth buying used car tyres?</Card.Title>
                            <Button variant="link">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Img variant="top" src="/image/tyre2.jpg" alt="Bridgestone Reviews on Tyre Seeker link-secondary" width={30} height={160} />
                        <Card.Body>
                            <Card.Title>Bridgestone Reviews on Tyre Seeker</Card.Title>
                            <Button variant="link">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}
