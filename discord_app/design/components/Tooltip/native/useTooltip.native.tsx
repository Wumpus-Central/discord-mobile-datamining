// === Module 9307: useTooltip ===

// Module 9307 (useTooltip)
import timestampDefault from "timestamp" /* 3 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_7 = new timestampDefault("useTooltip.native");
const tmp2 = new timestampDefault("useTooltip.native");
const result = require("set").fileFinishedImporting("design/components/Tooltip/native/useTooltip.native.tsx");

export const useTooltip = function useTooltip(ref, memo) {
  ref = context1.useRef(ref(callback[5]).v4());
  ref = memo;
  importDefault = undefined;
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
  closure_3 = undefined;
  closure_4 = undefined;
  context1 = undefined;
  closure_6 = undefined;
  callback1 = undefined;
  const tmp8 = importDefault(callback[8])();
  closure_3 = tmp8;
  closure_4 = obj.useRef(tmp8);
  context1 = obj.useContext(ref(tmp2[6]).LayerContext);
  closure_6 = obj.useRef(null);
  const items1 = [context1, ref];
  const effect = obj.useEffect(() => {
    current = current.current;
    return () => {
      if (null != current) {
        closure_1_5.remove(tmp);
      }
      current.current = null;
    };
  }, items1);
  const items2 = [context1.surfaceRef, ref, ref, callback];
  callback1 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    function _measureHelper() {
      const self = this;
      const tmp = callback((arg0) => {
        closure_0 = arg0;
        c5 = 0;
        c6 = 0;
        c4 = 0;
        return (function*(arg0) {
          dependencyMap = tmp3;
          c4 = 1;
          const measurements = closure_2_0(closure_2_2[9]).getMeasurements(surfaceRef.surfaceRef, ref);
          const obj5 = closure_2_0(closure_2_2[9]);
          const items = [measurements, closure_2_0(closure_2_2[9]).getMeasurements(closure_1_1, ref)];
          yield Promise.all(items);
          if (1 === tmp7) {
            c4 = 0;
            let ref2 = 3;
          } else if (arg0 === 1) {
            ref2 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_1 = arg1;
            dependencyMap = closure_2_3(closure_1, 2);
            closure_3 = 32;
            c4 = 5;
            let tmp12 = null != ref.current;
            if (tmp12) {
              tmp12 = ref2.current === closure_2_0;
            }
            if (tmp12) {
              closure_1_2(ref.current, c4, closure_1_3);
            }
            c4 = 0;
          }
          c4 = 0;
          return arg1;
        })();
      });
      closure_1 = tmp;
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
    if (ref.current !== closure_3) {
      if (null != ref.current) {
        context1.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    callback1(ref.current !== closure_3);
  }, items3);
  return callback1;
};
export const useTooltipHelper = function useTooltipHelper(ref, targetRef, callback) {
  const _require = ref;
  importDefault = targetRef;
  dependencyMap = callback;
  const tmp = useWindowDimensionsDefault();
  closure_3 = tmp;
  closure_4 = context.useRef(tmp);
  context = context.useContext(_require(7166).LayerContext);
  closure_6 = context.useRef(null);
  const items = [context, ref];
  const effect = context.useEffect(() => {
    current = current.current;
    return () => {
      if (null != current) {
        closure_1_5.remove(tmp);
      }
      current.current = null;
    };
  }, items);
  const items1 = [context.surfaceRef, targetRef, ref, callback];
  callback = context.useCallback((arg0) => {
    closure_0 = arg0;
    function _measureHelper() {
      const self = this;
      const tmp = callback((arg0) => {
        closure_0 = arg0;
        c5 = 0;
        c6 = 0;
        c4 = 0;
        return (function*(arg0) {
          dependencyMap = tmp3;
          c4 = 1;
          const measurements = closure_2_0(closure_2_2[9]).getMeasurements(surfaceRef.surfaceRef, ref);
          const obj5 = closure_2_0(closure_2_2[9]);
          const items = [measurements, closure_2_0(closure_2_2[9]).getMeasurements(closure_1_1, ref)];
          yield Promise.all(items);
          if (1 === tmp7) {
            c4 = 0;
            let ref2 = 3;
          } else if (arg0 === 1) {
            ref2 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_1 = arg1;
            dependencyMap = closure_2_3(closure_1, 2);
            closure_3 = 32;
            c4 = 5;
            let tmp12 = null != ref.current;
            if (tmp12) {
              tmp12 = ref2.current === closure_2_0;
            }
            if (tmp12) {
              closure_1_2(ref.current, c4, closure_1_3);
            }
            c4 = 0;
          }
          c4 = 0;
          return arg1;
        })();
      });
      closure_1 = tmp;
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
    if (ref.current !== closure_3) {
      if (null != ref.current) {
        context1.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    callback1(ref.current !== closure_3);
  }, items2);
  return callback;
};