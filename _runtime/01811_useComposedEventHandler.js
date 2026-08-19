// _runtime/01811_useComposedEventHandler.js
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}" };
arg5.useComposedEventHandler = function useComposedEventHandler(tmp8Result) {
  const set = new Set();
  const obj = {};
  const found = tmp8Result.filter((item, index) => null !== item);
  let item = found.forEach((item, index) => {
    const workletEventHandler = item.workletEventHandler;
    if (workletEventHandler instanceof obj(set[0]).WorkletEventHandler) {
      const eventNames = workletEventHandler.eventNames;
      item = eventNames.forEach((item, index) => {
        set.add(item);
        if (obj[item]) {
          obj[item].push(workletEventHandler.worklet);
          let tmp3 = workletEventHandler;
        } else {
          tmp3 = workletEventHandler;
          const items = [workletEventHandler.worklet];
          obj[item] = items;
        }
        workletEventHandler[item + "" + obj[item].length] = tmp3.worklet;
      });
    }
  });
  const obj3 = obj(set[1]);
  const fn = function v(arg0) {
    closure_0 = arg0;
    if (obj[arg0.eventName]) {
      const item = tmp[arg0.eventName].forEach((item, index) => item(closure_0));
    }
  };
  fn.__closure = { workletsMap: obj };
  fn.__workletHash = 14960316830945;
  fn.__initData = obj;
  return obj(set[2]).useEvent(fn, Array.from(set), obj3.useHandler(obj).doDependenciesDiffer);
};