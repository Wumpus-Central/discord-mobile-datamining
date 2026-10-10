// === Module 7133: useStoreConnectionErrorAlert ===

// Module 7133 (useStoreConnectionErrorAlert)
import util from "util" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7131 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useStoreConnectionErrorAlert() {
  const cResult = stateFromStores(576).c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    const fn = function s() {
      return IAPStore.hasConnectionError();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function c() {
      if (stateFromStores) {
        const obj2 = { title: null, body: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t["U+H+kd"]);
        const intl2 = util.intl;
        obj2.body = intl2.string(util.t.Q9OYlM);
        AlertActionCreatorsDefault.show(obj2);
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  const tmpResult = stateFromStores(504);
}) : (function useStoreConnectionErrorAlert() {
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
});