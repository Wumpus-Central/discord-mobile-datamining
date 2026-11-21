// === Module 13001: useCanInstallApplication ===

// Module 13001 (useCanInstallApplication)
import ApplicationInstallUtils from "ApplicationInstallUtils" /* 10684 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;

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