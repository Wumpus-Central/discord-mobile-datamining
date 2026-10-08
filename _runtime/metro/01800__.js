// === Module 1800: ? ===

// Module 1800
import _mod1658 from "module_1658" /* 1658 */;
import _mod1666 from "module_1666" /* 1666 */;
import _mod1680 from "module_1680" /* 1680 */;
import freezeObjectInDev from "freezeObjectInDev" /* 1685 */;
import _mod1801 from "module_1801" /* 1801 */;
import noop from "module_19" /* 19 */;

({ useEffect: c2, useRef: c3 } = noop);

export const useHandler = function useHandler(memoizedGestureCallbacks, items10) {
  const tmp = React3(null);
  closure_0 = tmp;
  if (null === tmp.current) {
    const obj2 = { context: freezeObjectInDev.makeShareable({}), savedDependencies: [] };
    tmp.current = obj2;
  }
  React2(() => () => {
    closure_1_0.current = null;
  }, []);
  ({ context, savedDependencies } = tmp.current);
  for (const key10024 in arg0) {
    let obj8 = _mod1680;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new _mod1666.ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      throw reanimatedError;
    }
  }
  const dependencies = _mod1801.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj5 = { context, doDependenciesDiffer: !_mod1801.areDependenciesEqual(dependencies, savedDependencies), useWeb: null };
  let isWebResult = _mod1658.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1658.isJest();
    const tmp9Result = _mod1658;
  }
  obj5.useWeb = isWebResult;
  return obj5;
};