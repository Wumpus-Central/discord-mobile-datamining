// === Module 9376: useTooltip ===

// Module 9376 (useTooltip)
import LoggerDefault from "Logger" /* 3 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import AnimatedTooltip from "AnimatedTooltip" /* 9377 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const logger = new LoggerDefault("useTooltip.native");
fn(558);
let tmp2 = new LoggerDefault("useTooltip.native");
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAddTooltip(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  const context = noop.useContext(require("LayerContext").LayerContext);
  if (null == context) {
    logger.warn("Tooltip called with no layer context. It will not show without a LayerScope.");
  }
  if (cResult[0] === context) {
    if (cResult[1] === arg0) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const fn = function n(arg0, targetMeasurements, surfaceMeasurements) {
    const obj = {};
    const merged = Object.assign(closure_0);
    obj.targetMeasurements = targetMeasurements;
    obj.surfaceMeasurements = surfaceMeasurements;
    context.add(arg0, jsx(AnimatedTooltip.AnimatedTooltip, {}));
  };
  cResult[0] = context;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp5 = fn;
  let obj = require("c");
}) : (function useAddTooltip(arg0) {
  _require = arg0;
  const context = noop.useContext(require("LayerContext").LayerContext);
  if (null == context) {
    logger.warn("Tooltip called with no layer context. It will not show without a LayerScope.");
  }
  const items = [context, arg0];
  return noop.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
    const obj = {};
    const merged = Object.assign(closure_0);
    obj.targetMeasurements = targetMeasurements;
    obj.surfaceMeasurements = surfaceMeasurements;
    context.add(arg0, jsx(AnimatedTooltip.AnimatedTooltip, {}));
  }, items);
});
function useTooltipHelper(ref, arg1, arg2) {
  _require = ref;
  importDefault = arg1;
  dependencyMap = arg2;
  const tmp = useWindowDimensionsDefault();
  closure_3 = tmp;
  closure_4 = context.useRef(tmp);
  context = context.useContext(require("LayerContext").LayerContext);
  closure_6 = context.useRef(null);
  const items = [context, ref];
  const effect = context.useEffect(() => {
    current = current.current;
    return () => {
      if (null != current) {
        context.remove(tmp);
      }
      ref.current = null;
    };
  }, items);
  const items1 = [context.surfaceRef, arg1, ref, arg2];
  const callback = context.useCallback((arg0) => {
    closure_0 = arg0;
    closure_1 = async function _measureHelper(arg0) {
      closure_129_0 = ref;
      const measurements = closure_2_0(9382).getMeasurements(surfaceRef.surfaceRef, closure_2_0);
      const items = [measurements, closure_2_0(9382).getMeasurements(closure_1, closure_2_0)];
      await Promise.all(items);
      if (1 === tmp7) {
        c4 = 0;
        ref2 = 3;
      } else if (arg0 === 1) {
        ref2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_1 = value;
        closure_129_2 = closure_2_3(closure_129_1, 2);
        closure_129_3 = closure_129_2[0];
        closure_129_4 = closure_129_2[1];
        let tmp12 = null != ref.current;
        if (tmp12) {
          tmp12 = ref2.current === closure_129_0;
        }
        if (tmp12) {
          tmp3(ref.current, closure_129_4, closure_129_3);
        }
        c4 = 0;
      }
      return value;
    };
    ref2.current = ref(closure_2[7]).v4();
    return (function measureHelper(current) {
      const self = this;
      const apply = closure_1.apply;
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
        context.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    callback(ref.current !== closure_3);
  }, items2);
  return callback;
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltip.native.tsx");

export const useTooltip = ReactCompilerGating.isReactCompilerEnabled() ? (function useTooltip(arg0, arg1) {
  const cResult = ref(576).c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const v4Result = tmp(1278).v4();
    cResult[0] = v4Result;
    let first = v4Result;
    const tmpResult = tmp(1278);
  } else {
    first = cResult[0];
  }
  ref = context.useRef(first);
  const tmp7 = closure_8(arg1);
  importDefault = arg0;
  dependencyMap = tmp7;
  context = undefined;
  const tmp8 = useWindowDimensionsDefault();
  closure_3 = tmp8;
  closure_4 = context.useRef(tmp8);
  context = context.useContext(tmp(6836).LayerContext);
  closure_6 = context.useRef(null);
  const items = [context, ref];
  const effect = context.useEffect(() => {
    current = current.current;
    return () => {
      if (null != current) {
        context.remove(tmp);
      }
      ref.current = null;
    };
  }, items);
  const items1 = [context.surfaceRef, arg0, ref, tmp7];
  const callback = context.useCallback((arg0) => {
    closure_0 = arg0;
    closure_1 = async function _measureHelper(arg0) {
      closure_129_0 = ref;
      const measurements = closure_2_0(9382).getMeasurements(surfaceRef.surfaceRef, closure_2_0);
      const items = [measurements, closure_2_0(9382).getMeasurements(closure_1, closure_2_0)];
      await Promise.all(items);
      if (1 === tmp7) {
        c4 = 0;
        ref2 = 3;
      } else if (arg0 === 1) {
        ref2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_1 = value;
        closure_129_2 = closure_2_3(closure_129_1, 2);
        closure_129_3 = closure_129_2[0];
        closure_129_4 = closure_129_2[1];
        let tmp12 = null != ref.current;
        if (tmp12) {
          tmp12 = ref2.current === closure_129_0;
        }
        if (tmp12) {
          tmp3(ref.current, closure_129_4, closure_129_3);
        }
        c4 = 0;
      }
      return value;
    };
    ref2.current = ref(closure_2[7]).v4();
    return (function measureHelper(current) {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(ref2.current);
  }, items1);
  const items2 = [context, tmp8, callback, ref];
  const effect1 = context.useEffect(() => {
    if (ref.current !== closure_3) {
      if (null != ref.current) {
        context.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    callback(ref.current !== closure_3);
  }, items2);
  return callback;
}) : (function useTooltip(arg0, arg1) {
  context.useRef(ref(1278).v4());
  const tmp2 = closure_8(arg1);
  importDefault = arg0;
  dependencyMap = tmp2;
  context = undefined;
  const tmp3 = useWindowDimensionsDefault();
  closure_3 = tmp3;
  ref = context.useRef(tmp3);
  context = context.useContext(ref(6836).LayerContext);
  context.useRef(null);
  let items = [context, ref];
  const effect = context.useEffect(() => {
    current = current.current;
    return () => {
      if (null != current) {
        context.remove(tmp);
      }
      ref.current = null;
    };
  }, items);
  const items1 = [context.surfaceRef, arg0, ref, tmp2];
  const callback = context.useCallback((arg0) => {
    closure_0 = arg0;
    closure_1 = async function _measureHelper(arg0) {
      closure_129_0 = ref;
      const measurements = closure_2_0(9382).getMeasurements(surfaceRef.surfaceRef, closure_2_0);
      const items = [measurements, closure_2_0(9382).getMeasurements(closure_1, closure_2_0)];
      await Promise.all(items);
      if (1 === tmp7) {
        c4 = 0;
        ref2 = 3;
      } else if (arg0 === 1) {
        ref2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_1 = value;
        closure_129_2 = closure_2_3(closure_129_1, 2);
        closure_129_3 = closure_129_2[0];
        closure_129_4 = closure_129_2[1];
        let tmp12 = null != ref.current;
        if (tmp12) {
          tmp12 = ref2.current === closure_129_0;
        }
        if (tmp12) {
          tmp3(ref.current, closure_129_4, closure_129_3);
        }
        c4 = 0;
      }
      return value;
    };
    ref2.current = ref(closure_2[7]).v4();
    return (function measureHelper(current) {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(ref2.current);
  }, items1);
  const items2 = [context, tmp3, callback, ref];
  const effect1 = context.useEffect(() => {
    if (ref.current !== closure_3) {
      if (null != ref.current) {
        context.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    callback(ref.current !== closure_3);
  }, items2);
  return callback;
});
export { useTooltipHelper };