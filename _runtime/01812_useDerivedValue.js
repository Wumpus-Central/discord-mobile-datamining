// === Module 1812: useDerivedValue ===

// Module 1812 (useDerivedValue)
import noop from "noop" /* 19 */;

({ useEffect: obj1, useRef: c3 } = noop);
let closure_4 = { code: "function pnpm_useDerivedValueTs1(){const{sharedValue,updater}=this.__closure;sharedValue.value=updater();}" };

export const useDerivedValue = function useDerivedValue(fn, items) {
  const _require = fn;
  const tmp = callback(null);
  let __closure = fn.__closure;
  if (__closure == null) {
    __closure = {};
  }
  let values = Object.values(__closure);
  let arr2 = values;
  let tmp4 = _require(arr2[1]).shouldBeUseWeb() && !values.length;
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
    let tmp2Result = tmp2(tmp3[2]);
    tmp2Result = tmp2(tmp3[3]);
    tmp.current = tmp2Result.makeMutable(tmp2Result.initialUpdaterRun(fn));
  }
  const current = tmp.current;
  current(() => {
    fn = function t() {
      closure_2.value = callback();
    };
    fn.__closure = { sharedValue: current, updater: callback };
    fn.__workletHash = 1316501239615;
    fn.__initData = closure_1_4;
    const items = [current];
    callback = callback(arr2[2]).startMapper(fn, arr2, items);
    return () => {
      callback(arr2[2]).stopMapper(callback);
    };
  }, arr2);
  return current;
};