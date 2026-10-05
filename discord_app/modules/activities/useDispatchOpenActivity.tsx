// discord_app/modules/activities/useDispatchOpenActivity.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let connectedEmbeddedActivity;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (connectedEmbeddedActivity) => {
      let obj = connectedEmbeddedActivity(576);
      const cResult = obj.c(4);
      connectedEmbeddedActivity = connectedEmbeddedActivity.connectedEmbeddedActivity;
      let applicationId;
      if (connectedEmbeddedActivity != null) {
        applicationId = connectedEmbeddedActivity.applicationId;
      }
      if (cResult[0] === applicationId) {
        let tmp3;
        let tmp4;
        if (cResult[1] === connectedEmbeddedActivity) {
          tmp3 = cResult[2];
          tmp4 = cResult[3];
        }
        const effect = react.useEffect(tmp3, tmp4);
      }
      const fn = function n() {
        const tmp2 = null != connectedEmbeddedActivity && null != applicationId;
        if (tmp2) {
          const obj2 = { type: "EMBEDDED_ACTIVITY_OPEN", location: connectedEmbeddedActivity.location, applicationId };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
        }
      };
      const items = [applicationId, connectedEmbeddedActivity];
      cResult[0] = applicationId;
      cResult[1] = connectedEmbeddedActivity;
      cResult[2] = fn;
      cResult[3] = items;
      tmp4 = items;
      tmp3 = fn;
    }
  : (connectedEmbeddedActivity) => {
      connectedEmbeddedActivity = connectedEmbeddedActivity.connectedEmbeddedActivity;
      let applicationId;
      if (connectedEmbeddedActivity != null) {
        applicationId = connectedEmbeddedActivity.applicationId;
      }
      const items = [applicationId, connectedEmbeddedActivity];
      const effect = react.useEffect(() => {
        const tmp2 = null != connectedEmbeddedActivity && null != applicationId;
        if (tmp2) {
          const obj2 = { type: "EMBEDDED_ACTIVITY_OPEN", location: connectedEmbeddedActivity.location, applicationId };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/activities/useDispatchOpenActivity.tsx");

export default tmp2;
