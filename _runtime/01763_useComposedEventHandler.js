// === Module 1763: useComposedEventHandler ===

// Module 1763 (useComposedEventHandler)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}" };
arg5.useComposedEventHandler = function useComposedEventHandler(arr) {
  let obj = {};
  const set = new Set();
  obj = {};
  const found = arr.filter((arg0) => null !== arg0);
  let item = found.forEach((workletEventHandler) => {
    workletEventHandler = workletEventHandler.workletEventHandler;
    if (workletEventHandler instanceof obj(set[0]).WorkletEventHandler) {
      const eventNames = workletEventHandler.eventNames;
      const item = eventNames.forEach((arg0) => {
        outer1_1.add(arg0);
        if (outer1_2[arg0]) {
          tmp2[arg0].push(workletEventHandler.worklet);
          let tmp3 = workletEventHandler;
          const arr2 = tmp2[arg0];
        } else {
          tmp3 = workletEventHandler;
          const items = [workletEventHandler.worklet];
          tmp2[arg0] = items;
        }
        workletEventHandler[arg0 + "" + outer1_2[arg0].length] = tmp3.worklet;
      });
    }
  });
  const obj3 = obj(set[1]);
  const fn = function v(arg0) {
    let closure_0 = arg0;
    if (obj[arg0.eventName]) {
      const item = tmp[arg0.eventName].forEach((arg0) => arg0(closure_0));
      const arr = tmp[arg0.eventName];
    }
  };
  fn.__closure = { workletsMap: obj };
  fn.__workletHash = 14960316830945;
  fn.__initData = obj;
  return obj(set[2]).useEvent(fn, Array.from(set), obj3.useHandler(obj).doDependenciesDiffer);
};