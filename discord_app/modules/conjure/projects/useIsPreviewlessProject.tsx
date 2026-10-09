// === Module 16996: useIsPreviewlessProject ===

// Module 16996 (useIsPreviewlessProject)
import ConjureTypes from "ConjureTypes" /* 6940 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useIsPreviewlessProject.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPreviewlessProject(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const project = ConjureProjectStore.getProject(closure_0);
      let isPreviewlessProjectResult = null != project;
      if (isPreviewlessProjectResult) {
        isPreviewlessProjectResult = ConjureTypes.isPreviewlessProject(project);
      }
      return isPreviewlessProjectResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useIsPreviewlessProject(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore];
  return require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let isPreviewlessProjectResult = null != project;
    if (isPreviewlessProjectResult) {
      isPreviewlessProjectResult = ConjureTypes.isPreviewlessProject(project);
    }
    return isPreviewlessProjectResult;
  });
});