// _runtime/metro/01794__.js
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}",
};

export const useComposedEventHandler = function useComposedEventHandler(tmp8Result4) {
  const obj = {};
  const set = new Set();
  const obj2 = {};
  const found = tmp8Result4.filter((item) => null !== item);
  let item = found.forEach((workletEventHandler) => {
    workletEventHandler = workletEventHandler.workletEventHandler;
    if (workletEventHandler instanceof obj(set[0]).WorkletEventHandler) {
      const eventNames = workletEventHandler.eventNames;
      const item = eventNames.forEach((item) => {
        set.add(item);
        if (obj2[item]) {
          obj2[item].push(workletEventHandler.worklet);
          let tmp3 = workletEventHandler;
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
  const fn = function v(arg0) {
    closure_0 = arg0;
    if (obj2[arg0.eventName]) {
      const item = tmp[arg0.eventName].forEach((fn) => fn(closure_0));
    }
  };
  fn.__closure = { workletsMap: obj2 };
  fn.__workletHash = 14960316830945;
  fn.__initData = obj2;
  return obj(set[2]).useEvent(fn, Array.from(set), obj3.useHandler(obj).doDependenciesDiffer);
};
