// === Module 12328: useIsPreviewlessProject ===

// Module 12328 (useIsPreviewlessProject)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6980 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useIsPreviewlessProject.tsx");

export default function useIsPreviewlessProject(arg0) {
  _require = arg0;
  items = [ConjureProjectStore];
  return require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let isPreviewlessProjectResult = null != project;
    if (isPreviewlessProjectResult) {
      isPreviewlessProjectResult = ConjureProjectTypes.isPreviewlessProject(project);
    }
    return isPreviewlessProjectResult;
  });
};