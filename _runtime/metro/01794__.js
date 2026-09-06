// === Module 1794: ? ===

// Module 1794
import runOnRuntime from "runOnRuntime" /* 1680 */;
import noop from "module_19" /* 19 */;

({ useEffect: c2, useRef: c3 } = noop);
let closure_4 = { code: "function pnpm_useDerivedValueTs1(){const{sharedValue,updater}=this.__closure;sharedValue.value=updater();}" };

export const useDerivedValue = function useDerivedValue(fn, items) {
  _require = fn;
  const tmp = closure_3(null);
  let __closure = fn.__closure;
  if (__closure == null) {
    __closure = {};
  }
  let values = Object.values(__closure);
  let arr2 = values;
  let tmp4 = require("module_1639").shouldBeUseWeb() && !values.length;
  arr2 = items;
  if (tmp4) {
    let length;
    if (arr2 != null) {
      length = arr2.length;
    }
    tmp4 = length;
  }
  if (tmp4) {
    values = arr2;
  }
  if (undefined === arr2) {
    items = [];
    items[HermesBuiltin.arraySpread(values, 0)] = fn.__workletHash;
    arr2 = items;
  } else {
    arr2.push(fn.__workletHash);
  }
  if (null === tmp.current) {
    tmp2(tmp3[2]);
    const tmp2Result = tmp2(tmp3[3]);
    tmp.current = tmp2Result.makeMutable(tmp2Result.initialUpdaterRun(fn));
  }
  const current = tmp.current;
  current(() => {
    const fn = function t() {
      current.value = closure_0();
    };
    fn.__closure = { sharedValue: current, updater };
    fn.__workletHash = 1316501239615;
    fn.__initData = __initData;
    const items = [current];
    updater = updater(arr2[2]).startMapper(fn, arr2, items);
    return () => {
      runOnRuntime.stopMapper(closure_0);
    };
  }, arr2);
  return current;
};