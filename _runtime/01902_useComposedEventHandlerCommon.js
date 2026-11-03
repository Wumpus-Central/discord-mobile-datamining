// _runtime/01902_useComposedEventHandlerCommon.js
const require = globalThis.__r;

const require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "(function pnpm_useComposedEventHandlerCommonTs1(event){let[workletsMap]=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}})",
};

export function useComposedEventHandlerBase(arr, items26) {
  const obj = {};
  _require = obj;
  const set = new Set();
  const obj2 = {};
  const found = arr.filter((item) => null !== item);
  let item = found.forEach((workletEventHandler) => {
    workletEventHandler = workletEventHandler.workletEventHandler;
    if (workletEventHandler instanceof _undefined(set[0]).WorkletEventHandler) {
      const eventNames = workletEventHandler.eventNames;
      const item = eventNames.forEach((item) => {
        set.add(item);
        if (obj2[item]) {
          obj2[item].push(workletEventHandler.worklet);
          let tmp3 = workletEventHandler;
        } else {
          tmp3 = workletEventHandler;
          items = [workletEventHandler.worklet];
          obj2[item] = items;
        }
        c0[item + "" + obj2[item].length] = tmp3.worklet;
      });
    }
  });
  const obj3 = require("metro/01897__.js");
  items = [obj2, obj2];
  _require = undefined;
  [tmp3, tmp4] = items;
  function pnpm_useComposedEventHandlerCommonTs1(arg0) {
    closure_0 = arg0;
    if (_undefined[arg0.eventName]) {
      const item = tmp[arg0.eventName].forEach((fn) => fn(closure_0));
    }
  }
  const items1 = [tmp4];
  pnpm_useComposedEventHandlerCommonTs1.__closure = items1;
  pnpm_useComposedEventHandlerCommonTs1.__workletHash = 3763357161525;
  pnpm_useComposedEventHandlerCommonTs1.__initData = tmp3;
  return require("metro/01899__.js").useEvent(
    pnpm_useComposedEventHandlerCommonTs1,
    Array.from(set),
    obj3.useHandler(obj, items26).doDependenciesDiffer,
  );
}
