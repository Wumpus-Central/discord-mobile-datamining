// === Module 12268: useOwnedConjureProject ===

// Module 12268 (useOwnedConjureProject)
import useIsOwnedConjureApplicationDefault from "useIsOwnedConjureApplication" /* 8698 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8699 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  const tmp4 = useIsOwnedConjureApplicationDefault(arg0, arg1);
  importDefault = tmp4;
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    if (cResult[2] === tmp4) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === tmp4) {
      let tmp10;
      if (cResult[6] === stateFromStores) {
        tmp10 = cResult[7];
      }
      return tmp10;
    }
    const obj2 = { isOwned: tmp4, project: stateFromStores };
    cResult[5] = tmp4;
    cResult[6] = stateFromStores;
    cResult[7] = obj2;
    tmp10 = obj2;
  }
  const fn = function l() {
    let result = null;
    if (true === closure_1) {
      result = null;
      if (null != closure_0) {
        result = ConjureProjectStore.findProjectByApplicationId(tmp2);
      }
    }
    return result;
  };
  const items1 = [tmp4, arg0];
  cResult[1] = arg0;
  cResult[2] = tmp4;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  const tmp = useIsOwnedConjureApplicationDefault(arg0, arg1);
  importDefault = tmp;
  const items = [ConjureProjectStore];
  const items1 = [tmp, arg0];
  const obj = require("get initialized");
  const obj2 = {
    isOwned: tmp,
    project: obj.useStateFromStores(items, () => {
      let result = null;
      if (true === closure_1) {
        result = null;
        if (null != closure_0) {
          result = ConjureProjectStore.findProjectByApplicationId(tmp2);
        }
      }
      return result;
    }, items1)
  };
  return obj2;
});
let result = size.fileFinishedImporting("modules/conjure/projects/useOwnedConjureProject.tsx");

export default tmp2;