// _runtime/metro/01801__.js
import _mod1659 from "01659__.js";
import _mod1667 from "01667__.js";
import _mod1681 from "01681__.js";
import freezeObjectInDev from "../01686_freezeObjectInDev.js";
import _mod1802 from "01802__.js";
import noop from "00019__.js";

({ useEffect: c2, useRef: c3 } = noop);

export const useHandler = function useHandler(memoizedGestureCallbacks, items10) {
  const tmp = React3(null);
  closure_0 = tmp;
  if (null === tmp.current) {
    const obj2 = { context: freezeObjectInDev.makeShareable({}), savedDependencies: [] };
    tmp.current = obj2;
  }
  React2(
    () => () => {
      closure_1_0.current = null;
    },
    [],
  );
  ({ context, savedDependencies } = tmp.current);
  for (const key10024 in arg0) {
    let obj8 = _mod1681;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new _mod1667.ReanimatedError(
        "Passed a function that is not a worklet. Please provide a worklet function.",
      );
      throw reanimatedError;
    }
  }
  const dependencies = _mod1802.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj5 = {
    context,
    doDependenciesDiffer: !_mod1802.areDependenciesEqual(dependencies, savedDependencies),
    useWeb: null,
  };
  let isWebResult = _mod1659.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1659.isJest();
    const tmp9Result = _mod1659;
  }
  obj5.useWeb = isWebResult;
  return obj5;
};
