// === Module 18281: useCanShareConjureProject ===

// Module 18281 (useCanShareConjureProject)
import ConjurePublishTypes from "ConjurePublishTypes" /* 12319 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;

const require = globalThis.__r;

require = fn;
const isProjectOwner = fn(6621).isProjectOwner;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/useCanShareConjureProject.tsx");

export default function useCanShareConjureProject(arg0) {
  _require = arg0;
  items = [ConjureProjectStore, ConjurePublishStatusStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
    let publishState;
    if (publishStatus != null) {
      publishState = publishStatus.publishState;
    }
    let tmp4 = null != project;
    if (tmp4) {
      tmp4 = isProjectOwner(project);
    }
    if (!(null != project && null != publishState)) {
      const obj2 = { canShare: tmp6 };
      return obj2;
    } else if (tmp4) {
      let isConjureLiveResult = "nothing_built" !== publishState;
    } else {
      isConjureLiveResult = ConjurePublishTypes.isConjureLive(publishState);
    }
  }, items1);
};