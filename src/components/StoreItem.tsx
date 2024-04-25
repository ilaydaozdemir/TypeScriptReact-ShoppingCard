import { Button, Card, CardBody } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCard } from "../context/ShoppingCardContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItem, increaseCart, decreaseCart, removeFromCart } =
    useShoppingCard();
  const quantity = getItem(id);
  return (
    <Card className="h-100 shadow-lg p-3 mb-5 bg-body rounded">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <CardBody className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100"> + Add To Card</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button variant="outline-primary" size="sm">
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span>in cart
                </div>
                <Button variant="outline-primary" size="sm">
                  +
                </Button>
              </div>
              <div>
                <Button variant="outline-danger" size="sm">
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
