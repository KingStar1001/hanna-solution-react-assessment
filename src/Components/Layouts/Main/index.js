import { useState } from "react";

import NewPlanButton from "./NewPlanButton";
import Profile from "./Profile";
import FinancialPlan from "./FinancialPlan";
import NewPlanModal from "./FinancialPlan/NewPlanModal";

export default function Main() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main">
      <div>
        <NewPlanButton onClick={handleShowModal} />
      </div>
      <Profile />
      <FinancialPlan handleShowModal={handleShowModal} />
      <NewPlanModal showModal={showModal} closeModal={handleCloseModal} />
    </div>
  );
}
