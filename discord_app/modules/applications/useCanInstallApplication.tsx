// === Module 12879: useCanInstallApplication ===

// Module 12879 (useCanInstallApplication)
import ApplicationInstallUtils from "ApplicationInstallUtils" /* 10564 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;

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