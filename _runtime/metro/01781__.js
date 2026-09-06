// === Module 1781: ? ===

// Module 1781
import _mod1639 from "module_1639" /* 1639 */;
import _mod1661 from "module_1661" /* 1661 */;
import freezeObjectInDev from "freezeObjectInDev" /* 1666 */;
import _mod1782 from "module_1782" /* 1782 */;
import noop from "module_19" /* 19 */;

({ useEffect: c2, useRef: c3 } = noop);

export const useHandler = function useHandler(memoizedGestureCallbacks, items10) {
  const tmp = React3(null);
  closure_0 = tmp;
  if (null === tmp.current) {
    let obj = { context: null, savedDependencies: null };
    obj.context = obj.makeShareable({});
    obj.savedDependencies = [];
    tmp.current = obj;
  }
  React2(() => () => {
    closure_1_0.current = null;
  }, []);
  ({ context, savedDependencies } = tmp.current);
  for (const key10024 in arg0) {
    let tmp14 = require;
    let obj8 = _mod1661;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new tmp14(1647).ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      throw reanimatedError;
    }
  }
  const dependencies = _mod1782.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  obj = { context, doDependenciesDiffer: !_mod1782.areDependenciesEqual(dependencies, savedDependencies), useWeb: null };
  let isWebResult = _mod1639.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1639.isJest();
    const tmp9Result = _mod1639;
  }
  obj.useWeb = isWebResult;
  return obj;
};