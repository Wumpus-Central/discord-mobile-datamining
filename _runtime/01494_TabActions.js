// _runtime/01494_TabActions.js
import SwitchRouter from "01495_SwitchRouter.js";

require = arg1;
const dependencyMap = arg6;
const TabActions = {
  jumpTo(name, params) {
    const action = { type: "JUMP_TO", payload: null };
    const payload = { name, params };
    action.payload = payload;
    return action;
  },
};

export { TabActions };
export const TabRouter = function TabRouter(merged) {
  let actionCreators = SwitchRouter;
  const SwitchRouterResult = actionCreators.SwitchRouter(merged);
  require = SwitchRouterResult;
  actionCreators = {};
  merged = Object.assign(SwitchRouterResult);
  actionCreators.type = "tab";
  actionCreators.getInitialState = function getInitialState(arg0) {
    const initialState = SwitchRouterResult.getInitialState(arg0);
    obj = {};
    const merged = Object.assign(initialState);
    obj.type = "tab";
    obj.key = "tab-" + initialState.key;
    return obj;
  };
  actionCreators.getRehydratedState = function getRehydratedState(stale, arg1) {
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
  actionCreators.actionCreators = actionCreators;
  return actionCreators;
};
