// === Module 9102: useStoreConnectionErrorAlert ===

// Module 9102 (useStoreConnectionErrorAlert)
import util from "util" /* 1112 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5860 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 8851 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  items = [IAPStore];
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