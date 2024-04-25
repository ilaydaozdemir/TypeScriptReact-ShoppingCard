import { Offcanvas } from "react-bootstrap";
import { useShoppingCard } from "../context/ShoppingCardContext";

type ShoppingCartProps = {
  isOpen: boolean;
};
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCard();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
