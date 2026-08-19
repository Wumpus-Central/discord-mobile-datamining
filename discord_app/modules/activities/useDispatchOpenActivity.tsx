// === Module 12470: useDispatchOpenActivity ===

// Module 12470 (useDispatchOpenActivity)
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("modules/activities/useDispatchOpenActivity.tsx");

export default function useDispatchOpenActivity(connectedEmbeddedActivity) {
  connectedEmbeddedActivity = connectedEmbeddedActivity.connectedEmbeddedActivity;
  let applicationId;
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
      connectedEmbeddedActivity(applicationId[1]);
      const obj = { type: "EMBEDDED_ACTIVITY_OPEN", location: null, applicationId: null };
      obj[1] = connectedEmbeddedActivity.location;
      obj[2] = applicationId;
      obj.dispatch(obj);
    }
  }, items);
};