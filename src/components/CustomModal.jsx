import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const CustomModal = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onRequestClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: "80%",
          maxWidth: 500,
          bgcolor: "white",
          borderRadius: 2
        }}
      >
        <h2 className="text-lg font-semibold mb-4" id="modal-modal-title">
          {title}
        </h2>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
