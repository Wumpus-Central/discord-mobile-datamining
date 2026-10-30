// discord_app/modules/conjure/device_permissions/useConjureDevicePermissions.tsx
import conjureDevicePermissions from "conjureDevicePermissions.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "../publish/ConjurePublishStatusStore.tsx";
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissions.tsx");

export default function useConjureDevicePermissions(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore, ConjurePublishStatusStore, ConjureDevicePermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(
    items,
    () => {
      if (null == prop) {
        return [];
      } else {
        let result = ConjureProjectStore.findProjectByApplicationId(tmp);
        let tmp2;
        if (null != result) {
          if (result.preview_application_id === tmp) {
            publishStatus = publishStatus.getPublishStatus(result.id);
            prop = undefined;
            if (publishStatus != null) {
              prop = publishStatus.previewDevicePermissions;
            }
            tmp2 = prop;
          }
        }
        prop = tmp2;
        const prop1 = closure_0(dependencyMap[4]).CONJURE_DEVICE_PERMISSION_NAMES;
        return prop1.filter((item) => {
          let result = conjureDevicePermissions.isConjureDevicePermissionSupported(item);
          if (result) {
            let tmp5 = null != ConjureDevicePermissionStore.getDecision(closure_0, item);
            if (!tmp5) {
              let flag;
              if (prop != null) {
                flag = prop.includes(item);
              }
              if (flag == null) {
                flag = false;
              }
              tmp5 = flag;
            }
            result = tmp5;
          }
          return result;
        });
      }
    },
    items1,
  );
}
