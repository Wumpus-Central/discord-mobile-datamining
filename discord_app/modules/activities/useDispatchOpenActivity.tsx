// discord_app/modules/activities/useDispatchOpenActivity.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import noop from "../../../_runtime/metro/00019__.js";

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
}
