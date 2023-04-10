export default function NewPlanSubButton({ onClick }) {
  return (
    <div className="new-plan-sub-button" onClick={onClick}>
      <div style={{ fontSize: "30px", lineHeight: "20px" }}>+</div>
      <div style={{ fontSize: "13px", color: "gray" }}>New plan</div>
    </div>
  );
}
