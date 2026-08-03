import _slicedToArray from "_slicedToArray";
import v1 from "v1";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const error = new require("jsxProd")("useTooltip.native");
const tmp2 = new require("jsxProd")("useTooltip.native");
const result = require("noop").fileFinishedImporting("design/components/Tooltip/native/useTooltip.native.tsx");

export const useTooltip = function useTooltip(ref, memo) {
  ref = context1.useRef(ref(callback[5]).v4());
  ref = memo;
  let importDefault;
  const context = context1.useContext(ref(callback[6]).LayerContext);
  importDefault = context;
  if (null == context) {
    callback1.warn("Tooltip called with no layer context. It will not show without a LayerScope.");
  }
  let items = [context, memo];
  callback = obj.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
    const obj = {};
    const merged = Object.assign(ref);
    obj.targetMeasurements = targetMeasurements;
    obj.surfaceMeasurements = surfaceMeasurements;
    set.add(arg0, ref2(ref(callback[7]).AnimatedTooltip, obj));
  }, items);
  importDefault = ref;
  let c3;
  let v1;
  context1 = undefined;
  let closure_6;
  callback1 = undefined;
  const tmp8 = importDefault(callback[8])();
  c3 = tmp8;
  v1 = obj.useRef(tmp8);
  context1 = obj.useContext(ref(tmp2[6]).LayerContext);
  closure_6 = obj.useRef(null);
  const items1 = [context1, ref];
  const effect = obj.useEffect(() => {
    current = current.current;
    return () => {
      if (null != current) {
        outer1_5.remove(tmp);
      }
      current.current = null;
    };
  }, items1);
  const items2 = [context1.surfaceRef, ref, ref, callback];
  callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    function _measureHelper() {
      const self = this;
      const tmp = callback((arg0) => {
        let closure_0 = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (function*(arg0) {
          if (ref2 === 2) {
            ref2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              ref2 = 2;
              if (0 === surfaceRef) {
                if (arg0 === 1) {
                  ref2 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  ref2 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let dependencyMap = tmp3;
                  let closure_1 = tmp7;
                  closure_1 = undefined;
                  dependencyMap = undefined;
                  let _slicedToArray;
                  let c4;
                  c4 = 1;
                  const measurements = outer2_0(outer2_2[9]).getMeasurements(surfaceRef.surfaceRef, ref);
                  const obj5 = outer2_0(outer2_2[9]);
                  const items = [measurements, outer2_0(outer2_2[9]).getMeasurements(outer1_1, ref)];
                  surfaceRef = 2;
                  ref2 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = Promise.all(items);
                  return obj1;
                }
              } else {
                if (1 === tmp7) {
                  c4 = 0;
                  ref2 = 3;
                } else if (arg0 === 1) {
                  ref2 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  closure_1 = arg1;
                  dependencyMap = outer2_3(closure_1, 2);
                  _slicedToArray = 32;
                  c4 = 5;
                  let tmp12 = null != ref.current;
                  if (tmp12) {
                    tmp12 = ref2.current === outer2_0;
                  }
                  if (tmp12) {
                    outer1_2(ref.current, c4, outer1_3);
                  }
                  c4 = 0;
                }
                c4 = 0;
                ref2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
            } catch (tmp21) {
              _slicedToArray = tmp21;
              if (tmp4 === c4) {
                ref2 = tmp2;
                throw tmp21;
              } else {
                surfaceRef = tmp;
              }
            }
          }
        })();
      });
      const _measureHelper = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    ref2.current = ref(callback[5]).v4();
    return (function measureHelper(current) {
      const self = this;
      const apply = _measureHelper.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(ref2.current);
  }, items2);
  const items3 = [context1, tmp8, callback1, ref];
  const effect1 = obj.useEffect(() => {
    if (ref.current !== c3) {
      if (null != ref.current) {
        context1.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    callback1(ref.current !== c3);
  }, items3);
  return callback1;
};
export const useTooltipHelper = function useTooltipHelper(ref, targetRef, callback) {
  const _require = ref;
  const importDefault = targetRef;
  const dependencyMap = callback;
  const tmp = importDefault(1474)();
  let _slicedToArray = tmp;
  let v1 = context.useRef(tmp);
  context = context.useContext(_require(5570).LayerContext);
  let closure_6 = context.useRef(null);
  const items = [context, ref];
  const effect = context.useEffect(() => {
    current = current.current;
    return () => {
      if (null != current) {
        outer1_5.remove(tmp);
      }
      current.current = null;
    };
  }, items);
  const items1 = [context.surfaceRef, targetRef, ref, callback];
  callback = context.useCallback((arg0) => {
    let closure_0 = arg0;
    function _measureHelper() {
      const self = this;
      const tmp = callback((arg0) => {
        let closure_0 = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (function*(arg0) {
          if (ref2 === 2) {
            ref2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              ref2 = 2;
              if (0 === surfaceRef) {
                if (arg0 === 1) {
                  ref2 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  ref2 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let dependencyMap = tmp3;
                  let closure_1 = tmp7;
                  closure_1 = undefined;
                  dependencyMap = undefined;
                  let _slicedToArray;
                  let c4;
                  c4 = 1;
                  const measurements = outer2_0(outer2_2[9]).getMeasurements(surfaceRef.surfaceRef, ref);
                  const obj5 = outer2_0(outer2_2[9]);
                  const items = [measurements, outer2_0(outer2_2[9]).getMeasurements(outer1_1, ref)];
                  surfaceRef = 2;
                  ref2 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = Promise.all(items);
                  return obj1;
                }
              } else {
                if (1 === tmp7) {
                  c4 = 0;
                  ref2 = 3;
                } else if (arg0 === 1) {
                  ref2 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  closure_1 = arg1;
                  dependencyMap = outer2_3(closure_1, 2);
                  _slicedToArray = 32;
                  c4 = 5;
                  let tmp12 = null != ref.current;
                  if (tmp12) {
                    tmp12 = ref2.current === outer2_0;
                  }
                  if (tmp12) {
                    outer1_2(ref.current, c4, outer1_3);
                  }
                  c4 = 0;
                }
                c4 = 0;
                ref2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
            } catch (tmp21) {
              _slicedToArray = tmp21;
              if (tmp4 === c4) {
                ref2 = tmp2;
                throw tmp21;
              } else {
                surfaceRef = tmp;
              }
            }
          }
        })();
      });
      const _measureHelper = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    ref2.current = ref(callback[5]).v4();
    return (function measureHelper(current) {
      const self = this;
      const apply = _measureHelper.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(ref2.current);
  }, items1);
  const items2 = [context, tmp, callback, ref];
  const effect1 = context.useEffect(() => {
    if (ref.current !== c3) {
      if (null != ref.current) {
        context1.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    callback1(ref.current !== c3);
  }, items2);
  return callback;
};