// === Module 13360: useCanInstallApplication ===

// Module 13360 (useCanInstallApplication)
import ApplicationInstallUtils from "ApplicationInstallUtils" /* 12605 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/useCanInstallApplication.tsx");

export default function useCanInstallApplication(arg0) {
  _require = arg0;
  items = [ApplicationStore, ConjureProjectStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let result = null != closure_0;
    if (result) {
      result = ApplicationInstallUtils.canInstallApplication(tmp);
    }
    return result;
  }, items1);
};