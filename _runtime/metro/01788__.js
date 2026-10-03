// === Module 1788: ? ===

// Module 1788
import _mod1646 from "module_1646" /* 1646 */;
import _mod1654 from "module_1654" /* 1654 */;
import _mod1668 from "module_1668" /* 1668 */;
import freezeObjectInDev from "freezeObjectInDev" /* 1673 */;
import _mod1789 from "module_1789" /* 1789 */;
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
    let obj8 = _mod1668;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new _mod1654.ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      throw reanimatedError;
    }
  }
  const dependencies = _mod1789.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj5 = { context, doDependenciesDiffer: !_mod1789.areDependenciesEqual(dependencies, savedDependencies), useWeb: null };
  let isWebResult = _mod1646.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1646.isJest();
    const tmp9Result = _mod1646;
  }
  obj5.useWeb = isWebResult;
  return obj5;
};