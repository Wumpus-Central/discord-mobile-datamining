// === Module 7654: useStoreConnectionErrorAlert ===

// Module 7654 (useStoreConnectionErrorAlert)
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5108 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7477 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  const items = [IAPStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => IAPStore.hasConnectionError());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t["U+H+kd"]);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.Q9OYlM);
      AlertActionCreatorsDefault.show(obj2);
    }
  }, items1);
};