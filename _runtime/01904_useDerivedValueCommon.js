// _runtime/01904_useDerivedValueCommon.js
import _mod1827 from "metro/01827__.js";
import noop from "metro/00019__.js";

const require = globalThis.__r;

({ useEffect: c2, useRef: c3 } = noop);
let closure_4 = {
  code: "(function pnpm_useDerivedValueCommonTs1(){let[sharedValue,updater]=this.__closure;sharedValue.value=updater();})",
};

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
    const obj = require("metro/01827__.js");
    tmp.current = obj.makeMutable(require("metro/01839__.js").initialUpdaterRun(__workletHash));
    const obj2 = require("metro/01839__.js");
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
