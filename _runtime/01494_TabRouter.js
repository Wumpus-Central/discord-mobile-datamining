// _runtime/01494_TabRouter.js
import getRouteHistory from "01495_getRouteHistory.js";

require = arg1;
const dependencyMap = arg6;
let obj = {
  jumpTo(name, params) {
    const payload = { name, params };
    return { type: "JUMP_TO", payload };
  },
};
arg5.TabActions = obj;
arg5.TabRouter = function TabRouter(merged) {
  obj = getRouteHistory;
  const SwitchRouterResult = obj.SwitchRouter(merged);
  require = SwitchRouterResult;
  obj = {};
  merged = Object.assign(SwitchRouterResult);
  obj.type = "tab";
  obj.getInitialState = function getInitialState(arg0) {
    const initialState = SwitchRouterResult.getInitialState(arg0);
    obj = {};
    const merged = Object.assign(initialState);
    obj.type = "tab";
    obj.key = "tab-" + initialState.key;
    return obj;
  };
  obj.getRehydratedState = function getRehydratedState(stale) {
    if (false === stale.stale) {
      return stale;
    } else {
      const rehydratedState = SwitchRouterResult.getRehydratedState(stale, arg1);
      obj = {};
      const merged = Object.assign(rehydratedState);
      obj.type = "tab";
      const _HermesInternal = HermesInternal;
      obj.key = "tab-" + rehydratedState.key;
      return obj;
    }
  };
  obj.actionCreators = obj;
  return obj;
};
