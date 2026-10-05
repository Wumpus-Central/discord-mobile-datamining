// === Module 1801: ? ===

// Module 1801
import startMapper from "startMapper" /* 1687 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
let closure_4 = { code: "function pnpm_useDerivedValueTs1(){const{sharedValue,updater}=this.__closure;sharedValue.value=updater();}" };

export const useDerivedValue = function useDerivedValue(fn, items) {
  _require = fn;
  const tmp2 = closure_3(null);
  let __closure = fn.__closure;
  const _Object = Object;
  if (__closure == null) {
    __closure = {};
  }
  let values2 = values(__closure);
  let obj2 = require("module_1646");
  let tmp5 = obj2.shouldBeUseWeb() && !values2.length;
  let arr2 = items;
  if (tmp5) {
    let length;
    if (arr2 != null) {
      length = arr2.length;
    }
    tmp5 = length;
  }
  if (tmp5) {
    values2 = arr2;
  }
  if (undefined === arr2) {
    items = [];
    items[HermesBuiltin.arraySpread(items, values2, 0)] = fn.__workletHash;
    arr2 = items;
  } else {
    arr2.push(fn.__workletHash);
  }
  if (null === tmp2.current) {
    const makeMutable = require("startMapper").makeMutable;
    require("startMapper");
    const tmp3Result2 = require("module_1715");
    tmp2.current = makeMutable(tmp3Result2.initialUpdaterRun(fn));
  }
  const current = tmp2.current;
  current(() => {
    let closure_0;
    const fn = function t() {
      current.value = closure_0();
    };
    let obj = { sharedValue: current, updater };
    fn.__closure = obj;
    fn.__workletHash = 1316501239615;
    fn.__initData = __initData;
    const items = [current];
    const obj2 = updater(values2[2]);
    updater = obj2.startMapper(fn, values2, items);
    return () => {
      const obj = startMapper;
      obj.stopMapper(closure_0);
    };
  }, arr2);
  return current;
};