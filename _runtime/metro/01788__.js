// _runtime/metro/01788__.js
import _mod1646 from "01646__.js";
import ReanimatedError from "../01654_ReanimatedError.js";
import LayoutAnimationType from "../01668_LayoutAnimationType.js";
import _mod1673 from "01673__.js";
import _mod1789 from "01789__.js";
import react from "../00019_react.js";

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);

export const useHandler = function useHandler(memoizedGestureCallbacks, items10) {
  let context;
  let isWebResult;
  let obj;
  let savedDependencies;
  const tmp = _false(null);
  let closure_0 = tmp;
  if (null === tmp.current) {
    const obj2 = { context: obj.makeShareable({}), savedDependencies: [] };
    tmp.current = obj2;
    obj = _mod1673;
  }
  React2(
    () => () => {
      closure_1_0.current = null;
    },
    [],
  );
  ({ context, savedDependencies } = tmp.current);
  for (const key10024 in memoizedGestureCallbacks) {
    let obj8 = LayoutAnimationType;
    if (obj8.isWorkletFunction(memoizedGestureCallbacks[key10024])) {
      continue;
    } else {
      let self = this;
      let str = "Passed a function that is not a worklet. Please provide a worklet function.";
      let self2 = this;
      let reanimatedError = new ReanimatedError.ReanimatedError(
        "Passed a function that is not a worklet. Please provide a worklet function.",
      );
      throw reanimatedError;
    }
  }
  const obj3 = _mod1789;
  const dependencies = obj3.buildDependencies(items10, memoizedGestureCallbacks);
  tmp.current.savedDependencies = dependencies;
  const obj4 = _mod1789;
  const obj5 = {
    context,
    doDependenciesDiffer: !obj4.areDependenciesEqual(dependencies, savedDependencies),
    useWeb: isWebResult,
  };
  const obj6 = _mod1646;
  isWebResult = obj6.isWeb();
  if (!isWebResult) {
    const tmp7Result = _mod1646;
    isWebResult = tmp7Result.isJest();
  }
  return obj5;
};
