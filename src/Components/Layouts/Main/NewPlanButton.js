export default function NewPlanButton({ onClick }) {
  return (
    <div className="new-plan-button" onClick={onClick}>
      <div style={{ fontSize: "24px" }}>+</div>
      <div style={{ fontSize: "14px", paddingLeft: "5px" }}>New plan</div>
    </div>
  );
}
