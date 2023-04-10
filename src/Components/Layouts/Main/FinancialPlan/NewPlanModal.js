import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function NewPlanModal({ showModal, closeModal }) {
  const [fileName, setFileName] = useState("");
  const [selectedLegal, setSelectedLegal] = useState("Company");
  const [vat, setVAT] = useState("Yes");
  const [id, setID] = useState(1);

  const dispatch = useDispatch();

  const handleOnSave = () => {
    setID(id + 1);
    dispatch({
      type: "add-card",
      cardInfo: {
        id: id,
        fileName: fileName,
        legalForm: selectedLegal,
        vat: vat,
        created_at: new Date(),
      },
    });
    closeModal();
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleLegalChange = (event) => {
    setSelectedLegal(event.target.value);
  };

  const handleVATChange = (event) => {
    setVAT(event.target.value);
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>File name</Form.Label>
        <Form.Control
          type="email"
          placeholder=""
          value={fileName}
          onChange={handleFileNameChange}
        />

        <div key={`legal-form`} className="mt-3">
          <Form.Label>Legal form:</Form.Label>
          &nbsp;&nbsp;
          <Form.Check
            inline
            label="Company"
            name="group1"
            type="radio"
            value="Company"
            checked={selectedLegal === "Company"}
            onChange={handleLegalChange}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Freelance"
            name="group1"
            type="radio"
            value="Freelance"
            checked={selectedLegal === "Freelance"}
            onChange={handleLegalChange}
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="ASBL"
            name="group1"
            type="radio"
            value="ASBL"
            checked={selectedLegal === "ASBL"}
            onChange={handleLegalChange}
            id={`inline-radio-3`}
          />
        </div>

        <div key={`vat`} className="mt-3">
          <Form.Label>VAT:</Form.Label>
          &nbsp;&nbsp;
          <Form.Check
            inline
            label="Yes"
            name="vat"
            type="radio"
            value="Yes"
            checked={vat === "Yes"}
            onChange={handleVATChange}
            id={`inline-vat-yes`}
          />
          <Form.Check
            inline
            label="No"
            name="vat"
            type="radio"
            value="No"
            checked={vat === "No"}
            onChange={handleVATChange}
            id={`inline-vat-no`}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleOnSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
