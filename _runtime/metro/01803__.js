// _runtime/metro/01803__.js
import _mod1661 from "01661__.js";
import _mod1669 from "01669__.js";
import _mod1683 from "01683__.js";
import freezeObjectInDev from "../01688_freezeObjectInDev.js";
import _mod1804 from "01804__.js";
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
    let obj8 = _mod1683;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new _mod1669.ReanimatedError(
        "Passed a function that is not a worklet. Please provide a worklet function.",
      );
      throw reanimatedError;
    }
  }
  const dependencies = _mod1804.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj5 = {
    context,
    doDependenciesDiffer: !_mod1804.areDependenciesEqual(dependencies, savedDependencies),
    useWeb: null,
  };
  let isWebResult = _mod1661.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1661.isJest();
    const tmp9Result = _mod1661;
  }
  obj5.useWeb = isWebResult;
  return obj5;
};
