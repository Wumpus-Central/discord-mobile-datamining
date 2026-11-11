// discord_app/modules/applications/useCanInstallApplication.tsx
import ApplicationInstallUtils from "utils/ApplicationInstallUtils.tsx";
import ConjureProjectStore from "../conjure/projects/ConjureProjectStore.tsx";
import ApplicationStore from "ApplicationStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/useCanInstallApplication.tsx");

export default function useCanInstallApplication(arg0) {
  _require = arg0;
  items = [ApplicationStore, ConjureProjectStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let result = null != closure_0;
      if (result) {
        result = ApplicationInstallUtils.canInstallApplication(tmp);
      }
      return result;
    },
    items1,
  );
}
