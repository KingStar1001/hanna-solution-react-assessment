import { useSelector } from "react-redux";

import NewPlanSubButton from "./NewPlanSubButton";
import PlanCard from "./PlanCard";

export default function FinancialPlan({ handleShowModal }) {
  const globalInfo = useSelector((state) => state.globalInfo);
  const { cards } = globalInfo;

  const cardsList = cards.map((card, index) => {
    return <PlanCard cardInfo={card} key={index} />;
  });
  return (
    <div>
      <div className="financial-plan-title">Financial plan</div>
      <div className="is-flex plan-container">
        <NewPlanSubButton onClick={handleShowModal} />
        {cardsList}
      </div>
    </div>
  );
}
