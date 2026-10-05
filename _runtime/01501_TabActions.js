// _runtime/01501_TabActions.js
import SwitchRouter from "01502_SwitchRouter.js";

let obj;

const TabActions = {
  jumpTo(name, params) {
    let payload;
    const action = { type: "JUMP_TO", payload };
    payload = { name, params };
    return action;
  },
};

export { TabActions };
export const TabRouter = function TabRouter(merged) {
  const actionCreators = SwitchRouter;
  const SwitchRouterResult = actionCreators.SwitchRouter(merged);
  const obj2 = {
    type: "tab",
    getInitialState(arg0) {
      const initialState = SwitchRouterResult.getInitialState(arg0);
      obj = { type: "tab", key: "tab-" + initialState.key };
      const merged = Object.assign(initialState);
      return obj;
    },
    getRehydratedState(stale, arg1) {
      if (false === stale.stale) {
        return stale;
      } else {
        const rehydratedState = SwitchRouterResult.getRehydratedState(stale, arg1);
        obj = { type: "tab", key: "tab-" + rehydratedState.key };
        const merged = Object.assign(rehydratedState);
        const _HermesInternal = HermesInternal;
        return obj;
      }
    },
    actionCreators,
  };
  merged = Object.assign(SwitchRouterResult);
  return obj2;
};
