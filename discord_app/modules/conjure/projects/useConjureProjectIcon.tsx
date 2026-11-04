// === Module 11531: useConjureProjectIcon ===

// Module 11531 (useConjureProjectIcon)
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import prefetchConjureApplicationDefault from "prefetchConjureApplication" /* 11532 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2167 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectIcon.tsx");

export default function useConjureProjectIcon(preview_application_id, size) {
  application_id = preview_application_id.preview_application_id;
  if (application_id == null) {
    application_id = preview_application_id.application_id;
  }
  items = [ApplicationStore];
  const stateFromStores = application_id(504).useStateFromStores(items, () => {
    const application = ApplicationStore.getApplication(application_id);
    let icon;
    if (application != null) {
      icon = application.icon;
    }
    return icon;
  });
  const items1 = [application_id];
  const effect = noop.useEffect(() => prefetchConjureApplicationDefault(application_id), items1);
  let applicationIconURL;
  if (null != stateFromStores) {
    const obj3 = { id: application_id, icon: stateFromStores, size };
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj3);
  }
  const obj = application_id(504);
  const obj4 = { url: applicationIconURL };
  const merged = Object.assign({ glyphSize: Math.round(0.6 * size), radius: size / 4 });
  return obj4;
};
export function conjureProjectIconMetrics(size) {
  return { glyphSize: Math.round(0.6 * size), radius: size / 4 };
}