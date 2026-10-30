// === Module 12417: useConjureAppIdentity ===

// Module 12417 (useConjureAppIdentity)
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentity.tsx");

export default function useConjureAppIdentity(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    return prop;
  }, items1);
  const obj = require("initialize");
  const data = require("ApplicationActionCreators").useApplication(stateFromStores).data;
  let iconURL;
  if (data != null) {
    iconURL = data.getIconURL(160);
  }
  if (iconURL == null) {
    iconURL = null;
  }
  const obj3 = { iconURL, description: null };
  let str;
  if (data != null) {
    str = data.description;
  }
  if (str == null) {
    str = "";
  }
  obj3.description = str;
  return obj3;
};
export const MAX_CONJURE_APP_ICON_BYTES = 2097152;
export const CONJURE_APP_ICON_EXTENSIONS = ["png", "jpg", "jpeg", "gif", "webp"];