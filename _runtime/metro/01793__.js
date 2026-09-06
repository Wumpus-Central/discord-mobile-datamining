// === Module 1793: ? ===

// Module 1793
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}" };

export const useComposedEventHandler = function useComposedEventHandler(tmp8Result) {
  let obj = {};
  const set = new Set();
  obj = {};
  const found = tmp8Result.filter((item) => null !== item);
  let item = found.forEach((workletEventHandler) => {
    workletEventHandler = workletEventHandler.workletEventHandler;
    if (workletEventHandler instanceof obj(set[0]).WorkletEventHandler) {
      const eventNames = workletEventHandler.eventNames;
      const item = eventNames.forEach((item) => {
        set.add(item);
        if (obj[item]) {
          tmp2[item].push(workletEventHandler.worklet);
          let tmp3 = workletEventHandler;
        } else {
          tmp3 = workletEventHandler;
          const items = [workletEventHandler.worklet];
          tmp2[item] = items;
        }
        obj[item + "" + obj[item].length] = tmp3.worklet;
      });
    }
  });
  const obj3 = obj(set[1]);
  const fn = function v(arg0) {
    closure_0 = arg0;
    if (obj[arg0.eventName]) {
      const item = tmp[arg0.eventName].forEach((fn) => fn(closure_0));
    }
  };
  fn.__closure = { workletsMap: obj };
  fn.__workletHash = 14960316830945;
  fn.__initData = obj;
  return obj(set[2]).useEvent(fn, Array.from(set), obj3.useHandler(obj).doDependenciesDiffer);
};