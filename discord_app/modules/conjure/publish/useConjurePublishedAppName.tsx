// === Module 12789: useConjurePublishedAppName ===

// Module 12789 (useConjurePublishedAppName)
import ApplicationStore from "ApplicationStore" /* 2167 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedAppName.tsx");

export default function useConjurePublishedAppName(arg0) {
  _require = arg0;
  items = [ConjureProjectStore, ApplicationStore];
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