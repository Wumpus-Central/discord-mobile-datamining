import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("v1").fileFinishedImporting("design/components/Coachmark/native/useCoachmark.native.tsx");

export const useCoachmark = function useCoachmark(targetRef, memo) {
  const _require = memo;
  let context;
  let obj = _require(context[2]);
  context = React.useContext(_require(context[4]).LayerContext);
  const items = [context, memo];
  const callback = React.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
    const obj = {};
    const merged = Object.assign(memo);
    obj.targetMeasurements = targetMeasurements;
    obj.surfaceMeasurements = surfaceMeasurements;
    context.add(arg0, outer1_3(memo(context[5]).AnimatedCoachmark, obj));
  }, items);
  const ref = React.useRef(_require(context[2]).v4());
  return _require(context[3]).useTooltipHelper(ref, targetRef, callback);
};