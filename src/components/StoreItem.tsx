import { Button, Card, CardBody } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCard } from "../context/ShoppingCardContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  author: string;
  textContent: string;
  imgUrl: string;
};

export function StoreItem({
  id,
  name,
  price,
  author,
  textContent,
  imgUrl,
}: StoreItemProps) {
  const { getItem, increaseCart, decreaseCart, removeFromCart } =
    useShoppingCard();
  const quantity = getItem(id);
  return (
    <Card className="h-100 shadow-lg p-3 mb-5 bg-body rounded">
      <Card.Img
        className="rounded"
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <CardBody className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-4">{name}</span>
          <div className="ms-2 text-muted">{formatCurrency(price)}</div>
        </Card.Title>
        <span className=" fs-6 ">{author}</span>{" "}
        <div className="text-muted fs-6 mt-4" style={{ height: "100%" }}>
          {textContent}
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100 "
              variant="light"
              onClick={() => increaseCart(id)}
            >
              {" "}
              + Add To Card
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  onClick={() => decreaseCart(id)}
                  variant="outline-success"
                  size="sm"
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span>in cart
                </div>
                <Button
                  onClick={() => increaseCart(id)}
                  variant="outline-info"
                  size="sm"
                >
                  +
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => removeFromCart(id)}
                  variant="outline-danger"
                  size="sm"
                >
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
