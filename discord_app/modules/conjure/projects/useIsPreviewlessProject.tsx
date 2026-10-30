// === Module 12437: useIsPreviewlessProject ===

// Module 12437 (useIsPreviewlessProject)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6839 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useIsPreviewlessProject.tsx");

export default function useIsPreviewlessProject(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore];
  return require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let isPreviewlessProjectResult = null != project;
    if (isPreviewlessProjectResult) {
      isPreviewlessProjectResult = ConjureProjectTypes.isPreviewlessProject(project);
    }
    return isPreviewlessProjectResult;
  });
};