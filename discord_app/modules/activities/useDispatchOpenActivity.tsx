// === Module 9610: useDispatchOpenActivity ===

// Module 9610 (useDispatchOpenActivity)
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/activities/useDispatchOpenActivity.tsx");

export default function useDispatchOpenActivity(connectedEmbeddedActivity) {
  connectedEmbeddedActivity = connectedEmbeddedActivity.connectedEmbeddedActivity;
  let applicationId;
  applicationId = undefined;
  if (connectedEmbeddedActivity != null) {
    applicationId = connectedEmbeddedActivity.applicationId;
  }
  const items = [applicationId, connectedEmbeddedActivity];
  const effect = React.useEffect(() => {
    let tmp2 = null != connectedEmbeddedActivity;
    if (tmp2) {
      tmp2 = null != applicationId;
    }
    if (tmp2) {
      let obj = connectedEmbeddedActivity(applicationId[1]);
      obj = { type: "EMBEDDED_ACTIVITY_OPEN", location: null, applicationId: null };
      obj[1] = connectedEmbeddedActivity.location;
      obj[2] = applicationId;
      obj.dispatch(obj);
    }
  }, items);
};