// === Module 16589: useVibegrationsPublishedAppName ===

// Module 16589 (useVibegrationsPublishedAppName)
import ApplicationStore from "ApplicationStore" /* 5093 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8694 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPublishedAppName.tsx");

export default function useVibegrationsPublishedAppName(arg0) {
  _require = arg0;
  const items = [VibegrationsProjectStore, ApplicationStore];
  return require("initialize").useStateFromStores(items, () => {
    const project = VibegrationsProjectStore.getProject(closure_0);
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