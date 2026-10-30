// === Module 1796: ? ===

// Module 1796
import _mod1654 from "module_1654" /* 1654 */;
import _mod1662 from "module_1662" /* 1662 */;
import _mod1676 from "module_1676" /* 1676 */;
import freezeObjectInDev from "freezeObjectInDev" /* 1681 */;
import _mod1797 from "module_1797" /* 1797 */;
import noop from "module_19" /* 19 */;

({ useEffect: c2, useRef: c3 } = noop);

export function useHandler(memoizedGestureCallbacks, items10) {
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
    let obj8 = _mod1676;
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new _mod1662.ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      throw reanimatedError;
    }
  }
  const dependencies = _mod1797.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj5 = { context, doDependenciesDiffer: !_mod1797.areDependenciesEqual(dependencies, savedDependencies), useWeb: null };
  let isWebResult = _mod1654.isWeb();
  if (!isWebResult) {
    isWebResult = _mod1654.isJest();
    const tmp9Result = _mod1654;
  }
  obj5.useWeb = isWebResult;
  return obj5;
}