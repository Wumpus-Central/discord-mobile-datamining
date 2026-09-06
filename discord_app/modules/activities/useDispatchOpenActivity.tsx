// === Module 9641: useDispatchOpenActivity ===

// Module 9641 (useDispatchOpenActivity)
import DispatcherDefault from "Dispatcher" /* 573 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useDispatchOpenActivity.tsx");

export default function useDispatchOpenActivity(connectedEmbeddedActivity) {
  connectedEmbeddedActivity = connectedEmbeddedActivity.connectedEmbeddedActivity;
  let applicationId;
  if (connectedEmbeddedActivity != null) {
    applicationId = connectedEmbeddedActivity.applicationId;
  }
  const items = [applicationId, connectedEmbeddedActivity];
  const effect = noop.useEffect(() => {
    let tmp2 = null != connectedEmbeddedActivity;
    if (tmp2) {
      tmp2 = null != applicationId;
    }
    if (tmp2) {
      const obj = { type: "EMBEDDED_ACTIVITY_OPEN", location: connectedEmbeddedActivity.location, applicationId };
      obj.dispatch(obj);
    }
  }, items);
};