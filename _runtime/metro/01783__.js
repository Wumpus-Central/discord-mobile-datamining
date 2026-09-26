// _runtime/metro/01783__.js
import _mod1641 from "01641__.js";
import _mod1649 from "01649__.js";
import _mod1663 from "01663__.js";
import freezeObjectInDev from "../01668_freezeObjectInDev.js";
import _mod1784 from "01784__.js";
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
    let obj8 = _mod1663;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new _mod1649.ReanimatedError(
        "Passed a function that is not a worklet. Please provide a worklet function.",
      );
      throw reanimatedError;
    }
  }
  const dependencies = _mod1784.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj5 = {
    context,
    doDependenciesDiffer: !_mod1784.areDependenciesEqual(dependencies, savedDependencies),
    useWeb: null,
  };
  let isWebResult = _mod1641.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1641.isJest();
    const tmp9Result = _mod1641;
  }
  obj5.useWeb = isWebResult;
  return obj5;
};
