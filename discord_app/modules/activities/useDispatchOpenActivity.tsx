// === Module 10957: useDispatchOpenActivity ===

// Module 10957 (useDispatchOpenActivity)
import DispatcherDefault from "Dispatcher" /* 584 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useDispatchOpenActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useDispatchOpenActivity(connectedEmbeddedActivity) {
  const cResult = connectedEmbeddedActivity(576).c(4);
  connectedEmbeddedActivity = connectedEmbeddedActivity.connectedEmbeddedActivity;
  let applicationId;
  if (connectedEmbeddedActivity != null) {
    applicationId = connectedEmbeddedActivity.applicationId;
  }
  if (cResult[0] === applicationId) {
    if (cResult[1] === connectedEmbeddedActivity) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
  }
  const fn = function n() {
    let tmp2 = null != connectedEmbeddedActivity;
    if (tmp2) {
      tmp2 = null != applicationId;
    }
    if (tmp2) {
      const obj2 = { type: "EMBEDDED_ACTIVITY_OPEN", location: connectedEmbeddedActivity.location, applicationId };
      DispatcherDefault.dispatch(obj2);
    }
  };
  const items = [applicationId, connectedEmbeddedActivity];
  cResult[0] = applicationId;
  cResult[1] = connectedEmbeddedActivity;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
  let obj = connectedEmbeddedActivity(576);
}) : (function useDispatchOpenActivity(connectedEmbeddedActivity) {
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
      const obj2 = { type: "EMBEDDED_ACTIVITY_OPEN", location: connectedEmbeddedActivity.location, applicationId };
      DispatcherDefault.dispatch(obj2);
    }
  }, items);
});