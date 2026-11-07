// === Module 12291: useCanShareConjureProject ===

// Module 12291 (useCanShareConjureProject)
import ConjurePublishTypes from "ConjurePublishTypes" /* 10994 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10987 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/useCanShareConjureProject.tsx");

export default function useCanShareConjureProject(arg0) {
  _require = arg0;
  items = [ConjurePublishStatusStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
    let publishState;
    if (publishStatus != null) {
      publishState = publishStatus.publishState;
    }
    let isConjureLiveResult = null != publishState;
    if (isConjureLiveResult) {
      isConjureLiveResult = ConjurePublishTypes.isConjureLive(publishState);
    }
    return isConjureLiveResult;
  }, items1);
};