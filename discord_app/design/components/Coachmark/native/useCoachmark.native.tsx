// discord_app/design/components/Coachmark/native/useCoachmark.native.tsx
import AnimatedCoachmark from "AnimatedCoachmark.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Coachmark/native/useCoachmark.native.tsx");

export const useCoachmark = function useCoachmark(targetRef, memo) {
  _require = memo;
  let context;
  let obj = require("v1");
  context = noop.useContext(require("LayerContext").LayerContext);
  const items = [context, memo];
  const callback = noop.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
    const obj = {};
    const merged = Object.assign(closure_0);
    obj.targetMeasurements = targetMeasurements;
    obj.surfaceMeasurements = surfaceMeasurements;
    context.add(arg0, jsx(AnimatedCoachmark.AnimatedCoachmark, {}));
  }, items);
  const ref = noop.useRef(require("v1").v4());
  return require("useTooltip").useTooltipHelper(ref, targetRef, callback);
};
