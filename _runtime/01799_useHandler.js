// === Module 1799: useHandler ===

// Module 1799 (useHandler)
import noop from "noop" /* 19 */;

({ useEffect: obj1, useRef: c3 } = noop);

export const useHandler = function useHandler(memoizedGestureCallbacks, items10) {
  const tmp = callback2(null);
  const _require = tmp;
  if (null === tmp.current) {
    let obj = _require(1684);
    obj = { context: null, savedDependencies: null };
    obj[0] = obj.makeShareable({});
    obj[1] = [];
    tmp.current = obj;
  }
  callback(() => () => {
    closure_0.current = null;
  }, []);
  ({ context, savedDependencies } = tmp.current);
  for (const key10024 in arg0) {
    let tmp13 = key10024;
    let tmp14 = _require;
    let tmp15 = dependencyMap;
    let obj8 = _require(1679);
    if (obj8.isWorkletFunction(arg0[key10024])) {
      continue;
    } else {
      let tmp5 = new.target;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let tmp6 = new.target;
      let reanimatedError = new tmp14(1665).ReanimatedError("Passed a function that is not a worklet. Please provide a worklet function.");
      let tmp8 = reanimatedError;
      throw reanimatedError;
    }
  }
  const dependencies = _require(1800).buildDependencies(items10, memoizedGestureCallbacks);
  const obj3 = _require(1800);
  const tmp9 = _require;
  tmp.current.savedDependencies = dependencies;
  obj = { context, doDependenciesDiffer: !_require(1800).areDependenciesEqual(dependencies, savedDependencies), useWeb: null };
  const obj4 = _require(1800);
  let isWebResult = _require(1657).isWeb();
  if (!isWebResult) {
    isWebResult = tmp9(1657).isJest();
    const tmp9Result = tmp9(1657);
  }
  obj[2] = isWebResult;
  return obj;
};