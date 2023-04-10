import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const globalInfo = useSelector((state) => state.globalInfo);
  const { userInfo } = globalInfo;
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = userInfo.created_at.toLocaleDateString(
    "en-US",
    options
  );
  return (
    <div className="profile-container">
      <div style={{ width: "50%" }}>
        <div className="is-flex is-align-center">
          <div className="label-1">Name:</div>
          &nbsp;&nbsp;
          <div className="label-2">{userInfo.name}</div>
        </div>
        <div className="is-flex is-align-center" style={{ marginTop: "20px" }}>
          <div className="label-1">Email:</div>
          &nbsp;&nbsp;
          <div className="label-2">{userInfo.email}</div>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <div className="is-flex is-align-center">
          <div className="label-1">Country:</div>
          &nbsp;&nbsp;
          <div className="label-2">{userInfo.country}</div>
        </div>
        <div className="is-flex is-align-center" style={{ marginTop: "20px" }}>
          <div className="label-1">Created:</div>
          &nbsp;&nbsp;
          <div className="label-2">{formattedDate}</div>
        </div>
      </div>
      <div className="edit-profile-button">
        <FontAwesomeIcon icon={faPen} size="sm" color="#1d4259" />
      </div>
    </div>
  );
}
