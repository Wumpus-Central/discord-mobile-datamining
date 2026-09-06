// discord_app/design/components/Tooltip/native/useTooltip.native.tsx
import LoggerDefault from "../../../../modules/debug/Logger.tsx";
import useWindowDimensionsDefault from "../../../../modules/screen/useWindowDimensions.native.tsx";
import AnimatedTooltip from "AnimatedTooltip.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const logger = new LoggerDefault("useTooltip.native");
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltip.native.tsx");

export const useTooltip = function useTooltip(ref, memo) {
  ref = noop.useRef(require("v1").v4());
  _require = memo;
  const context = noop.useContext(require("LayerContext").LayerContext);
  if (null == context) {
    logger.warn("Tooltip called with no layer context. It will not show without a LayerScope.");
  }
  let items = [context, memo];
  const callback = noop.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
    const obj = {};
    const merged = Object.assign(closure_0);
    obj.targetMeasurements = targetMeasurements;
    obj.surfaceMeasurements = surfaceMeasurements;
    context.add(arg0, jsx(AnimatedTooltip.AnimatedTooltip, {}));
  }, items);
  closure_129_0 = ref;
  closure_129_1 = ref;
  closure_129_2 = callback;
  const tmp8 = context(1477)();
  closure_129_3 = tmp8;
  closure_129_4 = noop.useRef(tmp8);
  const context1 = noop.useContext(require("LayerContext").LayerContext);
  closure_129_5 = context1;
  closure_129_6 = noop.useRef(null);
  const items1 = [context1, ref];
  const effect = noop.useEffect(() => {
    current = current.current;
    return () => {
      if (null != current) {
        noop.remove(tmp);
      }
      closure_0.current = null;
    };
  }, items1);
  const items2 = [context1.surfaceRef, ref, ref, callback];
  const callback1 = noop.useCallback((arg0) => {
    memo = arg0;
    closure_1 = async function _measureHelper(arg0) {
      closure_129_0 = ref;
      const measurements = memo(11133).getMeasurements(surfaceRef.surfaceRef, memo);
      const items = [measurements, memo(11133).getMeasurements(closure_1, memo)];
      await Promise.all(items);
      if (1 === tmp7) {
        c4 = 0;
        ref2 = 3;
      } else if (arg0 === 1) {
        ref2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_1 = value;
        closure_129_2 = _slicedToArray(closure_129_1, 2);
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
    ref2.current = memo(dependencyMap[5]).v4();
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
  }, items2);
  closure_129_7 = callback1;
  const items3 = [context1, tmp8, callback1, ref];
  const effect1 = noop.useEffect(() => {
    if (ref.current !== _slicedToArray) {
      if (null != memo.current) {
        noop.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    logger(ref.current !== _slicedToArray);
  }, items3);
  return callback1;
};
export const useTooltipHelper = function useTooltipHelper(ref, targetRef, callback) {
  _require = ref;
  importDefault = targetRef;
  dependencyMap = callback;
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
        noop.remove(tmp);
      }
      closure_0.current = null;
    };
  }, items);
  const items1 = [context.surfaceRef, targetRef, ref, callback];
  callback = context.useCallback((arg0) => {
    memo = arg0;
    closure_1 = async function _measureHelper(arg0) {
      closure_129_0 = ref;
      const measurements = memo(11133).getMeasurements(surfaceRef.surfaceRef, memo);
      const items = [measurements, memo(11133).getMeasurements(closure_1, memo)];
      await Promise.all(items);
      if (1 === tmp7) {
        c4 = 0;
        ref2 = 3;
      } else if (arg0 === 1) {
        ref2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_1 = value;
        closure_129_2 = _slicedToArray(closure_129_1, 2);
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
    ref2.current = memo(dependencyMap[5]).v4();
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
    if (ref.current !== _slicedToArray) {
      if (null != memo.current) {
        noop.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    logger(ref.current !== _slicedToArray);
  }, items2);
  return callback;
};
