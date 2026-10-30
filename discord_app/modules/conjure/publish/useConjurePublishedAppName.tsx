// === Module 12615: useConjurePublishedAppName ===

// Module 12615 (useConjurePublishedAppName)
import ApplicationStore from "ApplicationStore" /* 2040 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedAppName.tsx");

export default function useConjurePublishedAppName(arg0) {
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
};