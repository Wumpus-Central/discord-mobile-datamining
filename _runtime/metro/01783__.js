// === Module 1783: ? ===

// Module 1783
import _mod1641 from "module_1641" /* 1641 */;
import _mod1649 from "module_1649" /* 1649 */;
import _mod1663 from "module_1663" /* 1663 */;
import freezeObjectInDev from "freezeObjectInDev" /* 1668 */;
import _mod1784 from "module_1784" /* 1784 */;
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
    let obj8 = _mod1663;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new _mod1649.ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      throw reanimatedError;
    }
  }
  const dependencies = _mod1784.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj5 = { context, doDependenciesDiffer: !_mod1784.areDependenciesEqual(dependencies, savedDependencies), useWeb: null };
  let isWebResult = _mod1641.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1641.isJest();
    const tmp9Result = _mod1641;
  }
  obj5.useWeb = isWebResult;
  return obj5;
};