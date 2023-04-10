import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function PlanCard({ cardInfo }) {
  const dispatch = useDispatch();
  const handleRemoveCard = () => {
    dispatch({ type: "remove-card", id: cardInfo.id });
  };

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = cardInfo.created_at.toLocaleDateString(
    "en-US",
    options
  );

  return (
    <div className="plan-card">
      <div className="label-3">{cardInfo.fileName}</div>
      <div className="label-4" style={{ marginTop: "4px" }}>
        {cardInfo.legalForm}
      </div>
      <div className="is-flex">
        <div className="label-4">VAT:</div>
        &nbsp;
        <div className="label-5">{cardInfo.vat}</div>
      </div>
      <div className="label-4 plan-card-created-at">
        Created {formattedDate}
      </div>
      <div className="card-delete" onClick={handleRemoveCard}>
        <FontAwesomeIcon icon={faTrash} size="sm" />
      </div>
    </div>
  );
}
