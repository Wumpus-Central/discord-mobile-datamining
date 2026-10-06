// === Module 9896: useTooltip ===

// Module 9896 (useTooltip)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import AnimatedTooltip2 from "AnimatedTooltip" /* 9897 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, surfaceRef;

const jsx = Fragment.jsx;
let tmp2 = new LoggerDefault("useTooltip.native");
const logger = tmp2;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_1;
  let closure_2;
  let context;
  let first;
  let ref;
  const obj = ref(576);
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = ref(1266);
    const v4Result = tmpResult.v4();
    cResult[0] = v4Result;
    first = v4Result;
  } else {
    first = cResult[0];
  }
  ref = context.useRef(first);
  const tmp7 = closure_8(arg1);
  importDefault = arg0;
  dependencyMap = tmp7;
  context = undefined;
  const tmp8 = useWindowDimensionsDefault();
  let closure_3 = tmp8;
  let closure_4 = context.useRef(tmp8);
  context = context.useContext(tmp(6659).LayerContext);
  let closure_6 = context.useRef(null);
  const items = [context, ref];
  const effect = context.useEffect(() => {
    let current;
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
    function measureHelper(current) {
      return obj(...arguments);
    }
    let closure_0 = arg0;
    let obj = function _measureHelper() {
      obj = _asyncToGenerator(async (arg0) => {
        ref = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (async (arg0) => {
          if (ref2 === 2) {
            ref2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let closure_4;
              ref2 = 2;
              if (0 === surfaceRef) {
                if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = undefined;
                  closure_2 = undefined;
                  closure_3 = undefined;
                  closure_4 = undefined;
                  c4 = 1;
                  const obj5 = closure_2_0(closure_2_2[11]);
                  const measurements = obj5.getMeasurements(surfaceRef.surfaceRef, closure_2_0);
                  const items = [measurements, ];
                  const obj6 = closure_2_0(closure_2_2[11]);
                  items[1] = obj6.getMeasurements(closure_1, closure_2_0);
                  surfaceRef = 2;
                  ref2 = 1;
                  const obj4 = { value: Promise.all(items), done: false };
                  return obj4;
                }
              } else {
                if (1 === surfaceRef) {
                  c4 = 0;
                } else if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = value;
                  closure_2 = closure_2_3(closure_1, 2);
                  closure_3 = closure_2[0];
                  closure_4 = closure_2[1];
                  const tmp9 = null != ref.current && ref2.current === ref;
                  if (tmp9) {
                    closure_2(ref.current, closure_4, closure_3);
                  }
                  c4 = 0;
                }
                ref2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp18) {
              closure_3 = tmp18;
              if (0 === c4) {
                ref2 = 3;
                throw tmp18;
              } else {
                surfaceRef = 1;
              }
            }
          }
        })();
      });
      return obj(...arguments);
    };
    obj = ref(closure_2[7]);
    ref2.current = obj.v4();
    return measureHelper(ref2.current);
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
}) : ((arg0, arg1) => {
  let context;
  let ref;
  const useRef = context.useRef;
  let obj = ref(1266);
  useRef(obj.v4());
  const tmp2 = closure_8(arg1);
  importDefault = arg0;
  dependencyMap = tmp2;
  context = undefined;
  const tmp3 = useWindowDimensionsDefault();
  let closure_3 = tmp3;
  ref = context.useRef(tmp3);
  context = context.useContext(ref(6659).LayerContext);
  let ref2 = context.useRef(null);
  let items = [context, ref];
  const effect = context.useEffect(() => {
    let current;
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
    function measureHelper(current) {
      return obj(...arguments);
    }
    let closure_0 = arg0;
    let obj = function _measureHelper() {
      obj = _asyncToGenerator(async (arg0) => {
        ref = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (async (arg0) => {
          if (ref2 === 2) {
            ref2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let closure_4;
              ref2 = 2;
              if (0 === surfaceRef) {
                if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = undefined;
                  closure_2 = undefined;
                  closure_3 = undefined;
                  closure_4 = undefined;
                  c4 = 1;
                  const obj5 = closure_2_0(closure_2_2[11]);
                  const measurements = obj5.getMeasurements(surfaceRef.surfaceRef, closure_2_0);
                  const items = [measurements, ];
                  const obj6 = closure_2_0(closure_2_2[11]);
                  items[1] = obj6.getMeasurements(closure_1, closure_2_0);
                  surfaceRef = 2;
                  ref2 = 1;
                  const obj4 = { value: Promise.all(items), done: false };
                  return obj4;
                }
              } else {
                if (1 === surfaceRef) {
                  c4 = 0;
                } else if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = value;
                  closure_2 = closure_2_3(closure_1, 2);
                  closure_3 = closure_2[0];
                  closure_4 = closure_2[1];
                  const tmp9 = null != ref.current && ref2.current === ref;
                  if (tmp9) {
                    closure_2(ref.current, closure_4, closure_3);
                  }
                  c4 = 0;
                }
                ref2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp18) {
              closure_3 = tmp18;
              if (0 === c4) {
                ref2 = 3;
                throw tmp18;
              } else {
                surfaceRef = 1;
              }
            }
          }
        })();
      });
      return obj(...arguments);
    };
    obj = ref(closure_2[7]);
    ref2.current = obj.v4();
    return measureHelper(ref2.current);
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const context = react.useContext(require("LayerContext").LayerContext);
  if (null == context) {
    logger.warn("Tooltip called with no layer context. It will not show without a LayerScope.");
  }
  if (cResult[0] === context) {
    let tmp5;
    if (cResult[1] === arg0) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const fn = function n(arg0, targetMeasurements, surfaceMeasurements) {
    const AnimatedTooltip = AnimatedTooltip2.AnimatedTooltip;
    const merged = Object.assign(closure_0);
    context.add(arg0, <AnimatedTooltip targetMeasurements={targetMeasurements} surfaceMeasurements={surfaceMeasurements} />);
  };
  cResult[0] = context;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const context = react.useContext(require("LayerContext").LayerContext);
  if (null == context) {
    logger.warn("Tooltip called with no layer context. It will not show without a LayerScope.");
  }
  const items = [context, arg0];
  return react.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
    const AnimatedTooltip = AnimatedTooltip2.AnimatedTooltip;
    const merged = Object.assign(closure_0);
    context.add(arg0, <AnimatedTooltip targetMeasurements={targetMeasurements} surfaceMeasurements={surfaceMeasurements} />);
  }, items);
});
function useTooltipHelper(ref, arg1, arg2) {
  let closure_1;
  let closure_2;
  let context;
  _require = ref;
  importDefault = arg1;
  dependencyMap = arg2;
  const tmp = useWindowDimensionsDefault();
  let closure_3 = tmp;
  let closure_4 = context.useRef(tmp);
  context = context.useContext(require("LayerContext").LayerContext);
  let closure_6 = context.useRef(null);
  const items = [context, ref];
  const effect = context.useEffect(() => {
    let current;
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
    function measureHelper(current) {
      return obj(...arguments);
    }
    let closure_0 = arg0;
    let obj = function _measureHelper() {
      obj = _asyncToGenerator(async (arg0) => {
        ref = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (async (arg0) => {
          if (ref2 === 2) {
            ref2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let closure_4;
              ref2 = 2;
              if (0 === surfaceRef) {
                if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = undefined;
                  closure_2 = undefined;
                  closure_3 = undefined;
                  closure_4 = undefined;
                  c4 = 1;
                  const obj5 = closure_2_0(closure_2_2[11]);
                  const measurements = obj5.getMeasurements(surfaceRef.surfaceRef, closure_2_0);
                  const items = [measurements, ];
                  const obj6 = closure_2_0(closure_2_2[11]);
                  items[1] = obj6.getMeasurements(closure_1, closure_2_0);
                  surfaceRef = 2;
                  ref2 = 1;
                  const obj4 = { value: Promise.all(items), done: false };
                  return obj4;
                }
              } else {
                if (1 === surfaceRef) {
                  c4 = 0;
                } else if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = value;
                  closure_2 = closure_2_3(closure_1, 2);
                  closure_3 = closure_2[0];
                  closure_4 = closure_2[1];
                  const tmp9 = null != ref.current && ref2.current === ref;
                  if (tmp9) {
                    closure_2(ref.current, closure_4, closure_3);
                  }
                  c4 = 0;
                }
                ref2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp18) {
              closure_3 = tmp18;
              if (0 === c4) {
                ref2 = 3;
                throw tmp18;
              } else {
                surfaceRef = 1;
              }
            }
          }
        })();
      });
      return obj(...arguments);
    };
    obj = ref(closure_2[7]);
    ref2.current = obj.v4();
    return measureHelper(ref2.current);
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
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltip.native.tsx");

export const useTooltip = tmp3;
export { useTooltipHelper };