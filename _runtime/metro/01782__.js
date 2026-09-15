// _runtime/metro/01782__.js
import _mod1640 from "01640__.js";
import _mod1648 from "01648__.js";
import _mod1662 from "01662__.js";
import freezeObjectInDev from "../01667_freezeObjectInDev.js";
import _mod1783 from "01783__.js";
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
    let obj8 = _mod1662;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new _mod1648.ReanimatedError(
        "Passed a function that is not a worklet. Please provide a worklet function.",
      );
      throw reanimatedError;
    }
  }
  const dependencies = _mod1783.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj5 = {
    context,
    doDependenciesDiffer: !_mod1783.areDependenciesEqual(dependencies, savedDependencies),
    useWeb: null,
  };
  let isWebResult = _mod1640.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1640.isJest();
    const tmp9Result = _mod1640;
  }
  obj5.useWeb = isWebResult;
  return obj5;
};
