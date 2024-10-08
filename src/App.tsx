import { useModalContext } from "./components/Modal/context";
import { Modal } from "./components/Modal/Modal";

function App() {
  const { setState } = useModalContext();

  const openModal = () => {
    setState(true);
  };

  return (
    <>
      <Modal>
        <h3>Modal genérico hecho con Portals</h3>
      </Modal>
      <button onClick={openModal}>Abir</button>
    </>
  );
}

export default App;
