// discord_app/modules/conjure/device_permissions/useConjureDevicePermissionsAppName.tsx
import isConjureApplicationDefault from "../shared/isConjureApplication.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissionsAppName.tsx");

export default function useConjureDevicePermissionsAppName(arg0) {
  _require = arg0;
  const items = [ApplicationStore, ConjureProjectStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let tmp2 = null;
      if (null != closure_0) {
        tmp2 = null;
        if (isConjureApplicationDefault(closure_0)) {
          const application = ApplicationStore.getApplication(closure_0);
          let name;
          if (application != null) {
            name = application.name;
          }
          if (name == null) {
            const result = ConjureProjectStore.findProjectByApplicationId(closure_0);
            let name1;
            if (result != null) {
              name1 = result.name;
            }
            name = name1;
          }
          if (name == null) {
            name = null;
          }
          tmp2 = name;
        }
      }
      return tmp2;
    },
    items1,
  );
}
