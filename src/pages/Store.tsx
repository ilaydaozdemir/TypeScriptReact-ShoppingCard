import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {storeItems.map((item, key) => (
          <Col key={key}>{JSON.stringify(item)}</Col>
        ))}
      </Row>
    </>
  );
}
