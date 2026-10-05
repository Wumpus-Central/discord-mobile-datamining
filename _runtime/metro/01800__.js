// === Module 1800: ? ===

// Module 1800
let set, workletEventHandler;

let closure_2 = { code: "function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}" };

export const useComposedEventHandler = function useComposedEventHandler(tmp8Result4) {
  const obj = {};
  set = new Set();
  const obj2 = {};
  const found = tmp8Result4.filter((item) => null !== item);
  let item = found.forEach((workletEventHandler) => {
    workletEventHandler = workletEventHandler.workletEventHandler;
    if (workletEventHandler instanceof obj(set[0]).WorkletEventHandler) {
      const eventNames = workletEventHandler.eventNames;
      const item = eventNames.forEach((item) => {
        let tmp3;
        set.add(item);
        if (obj2[item]) {
          const arr2 = obj2[item];
          arr2.push(workletEventHandler.worklet);
          tmp3 = workletEventHandler;
        } else {
          tmp3 = workletEventHandler;
          const items = [workletEventHandler.worklet];
          obj2[item] = items;
        }
        obj[item + "" + obj2[item].length] = tmp3.worklet;
      });
    }
  });
  const obj3 = obj(set[1]);
  const doDependenciesDiffer = obj3.useHandler(obj).doDependenciesDiffer;
  const fn = function v(arg0) {
    let closure_0 = arg0;
    if (obj2[arg0.eventName]) {
      const arr = tmp[arg0.eventName];
      const item = arr.forEach((fn) => fn(closure_0));
    }
  };
  fn.__closure = { workletsMap: obj2 };
  fn.__workletHash = 14960316830945;
  fn.__initData = obj2;
  const obj4 = obj(set[2]);
  return obj4.useEvent(fn, Array.from(set), doDependenciesDiffer);
};