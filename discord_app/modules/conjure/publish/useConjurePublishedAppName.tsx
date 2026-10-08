// === Module 16996: useConjurePublishedAppName ===

// Module 16996 (useConjurePublishedAppName)
import ApplicationStore from "ApplicationStore" /* 5436 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedAppName.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishedAppName(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const project = ConjureProjectStore.getProject(closure_0);
      let str = "";
      if (null != project) {
        const application = ApplicationStore.getApplication(project.application_id);
        let name;
        if (application != null) {
          name = application.name;
        }
        if (name == null) {
          name = project.name;
        }
        str = name;
      }
      return str;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : (function useConjurePublishedAppName(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore, ApplicationStore];
  return require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let str = "";
    if (null != project) {
      const application = ApplicationStore.getApplication(project.application_id);
      let name;
      if (application != null) {
        name = application.name;
      }
      if (name == null) {
        name = project.name;
      }
      str = name;
    }
    return str;
  });
});