// === Module 1904: useDerivedValueCommon ===

// Module 1904 (useDerivedValueCommon)
import _mod1827 from "module_1827" /* 1827 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useEffect: c2, useRef: c3 } = noop);
let closure_4 = { code: "(function pnpm_useDerivedValueCommonTs1(){let[sharedValue,updater]=this.__closure;sharedValue.value=updater();})" };

export function useDerivedValueBase(__workletHash, arg1, __closure) {
  _require = __workletHash;
  dependencyMap = __closure;
  const tmp = closure_3(null);
  if (undefined === arg1) {
    items = [];
    items[HermesBuiltin.arraySpread(__closure, 0)] = __workletHash.__workletHash;
    let items1 = items;
  } else {
    items1 = [];
    items1[HermesBuiltin.arraySpread(arg1, 0)] = __workletHash.__workletHash;
  }
  if (null === tmp.current) {
    const obj = require("module_1827");
    tmp.current = obj.makeMutable(require("module_1839").initialUpdaterRun(__workletHash));
    const obj2 = require("module_1839");
  }
  const current = tmp.current;
  current(() => {
    items = [closure_4, current, closure_0];
    [tmp2, tmp3, tmp4] = items;
    function pnpm_useDerivedValueCommonTs1() {
      closure_0.value = dependencyMap();
    }
    const items1 = [tmp3, tmp4];
    pnpm_useDerivedValueCommonTs1.__closure = items1;
    pnpm_useDerivedValueCommonTs1.__workletHash = 17204305388875;
    pnpm_useDerivedValueCommonTs1.__initData = tmp2;
    const items2 = [current];
    closure_0 = _mod1827.startMapper(pnpm_useDerivedValueCommonTs1, dependencyMap, items2);
    return () => {
      closure_0(1827).stopMapper(closure_0);
    };
  }, items1);
  return current;
}