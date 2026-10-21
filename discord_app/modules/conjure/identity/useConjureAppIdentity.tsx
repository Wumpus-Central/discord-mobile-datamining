// === Module 11732: useConjureAppIdentity ===

// Module 11732 (useConjureAppIdentity)
import ConjureProjectStore from "ConjureProjectStore" /* 6752 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppIdentity(arg0) {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      const project = ConjureProjectStore.getProject(closure_0);
      let prop;
      if (project != null) {
        prop = project.preview_application_id;
      }
      return prop;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmpResult = require("initialize");
  const data = require("ApplicationActionCreators").useApplication(stateFromStores).data;
  if (cResult[4] !== data) {
    let iconURL;
    if (data != null) {
      iconURL = data.getIconURL(160);
    }
    if (iconURL == null) {
      iconURL = null;
    }
    cResult[4] = data;
    cResult[5] = iconURL;
    let tmp9 = iconURL;
  } else {
    tmp9 = cResult[5];
  }
  let str;
  if (data != null) {
    str = data.description;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[6] === tmp9) {
    if (cResult[7] === str) {
      let tmp12 = cResult[8];
    }
    return tmp12;
  }
  const obj2 = { iconURL: tmp9, description: str };
  cResult[6] = tmp9;
  cResult[7] = str;
  cResult[8] = obj2;
  tmp12 = obj2;
  const tmpResult2 = require("ApplicationActionCreators");
}) : (function useConjureAppIdentity(arg0) {
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
});
export const MAX_CONJURE_APP_ICON_BYTES = 2097152;
export const CONJURE_APP_ICON_EXTENSIONS = ["png", "jpg", "jpeg", "gif", "webp"];