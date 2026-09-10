// === Module 7466: useStoreConnectionErrorAlert ===

// Module 7466 (useStoreConnectionErrorAlert)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4949 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7289 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  const items = [IAPStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => IAPStore.hasConnectionError());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      const obj = { title: null, body: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["U+H+kd"]);
      const intl2 = util.intl;
      obj.body = intl2.string(util.t.Q9OYlM);
      obj.show(obj);
    }
  }, items1);
};