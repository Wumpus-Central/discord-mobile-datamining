// discord_app/design/components/Coachmark/native/useCoachmark.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import v1 from "../../../../../_runtime/01266_v1.js";
import useTooltip from "../../Tooltip/native/useTooltip.native.tsx";
import AnimatedCoachmark from "AnimatedCoachmark.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      context = noop.useContext(require("LayerContext").LayerContext);
      if (cResult[0] === arg0) {
        if (cResult[1] === context) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const fn = function o(arg0, targetMeasurements, surfaceMeasurements) {
        const obj = {};
        const merged = Object.assign(closure_0);
        obj.targetMeasurements = targetMeasurements;
        obj.surfaceMeasurements = surfaceMeasurements;
        context.add(arg0, jsx(AnimatedCoachmark.AnimatedCoachmark, {}));
      };
      cResult[0] = arg0;
      cResult[1] = context;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : (arg0) => {
      _require = arg0;
      context = noop.useContext(require("LayerContext").LayerContext);
      const items = [context, arg0];
      return noop.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
        const obj = {};
        const merged = Object.assign(closure_0);
        obj.targetMeasurements = targetMeasurements;
        obj.surfaceMeasurements = surfaceMeasurements;
        context.add(arg0, jsx(AnimatedCoachmark.AnimatedCoachmark, {}));
      }, items);
    };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Coachmark/native/useCoachmark.native.tsx");

export const useCoachmark = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const v4Result = v1.v4();
        cResult[0] = v4Result;
        let first = v4Result;
        const tmpResult = v1;
      } else {
        first = cResult[0];
      }
      const ref = noop.useRef(first);
      const tmp7 = closure_4(arg1);
      return useTooltip.useTooltipHelper(ref, arg0, tmp7);
    }
  : (arg0, arg1) => {
      const ref = noop.useRef(v1.v4());
      const tmp2 = closure_4(arg1);
      return useTooltip.useTooltipHelper(ref, arg0, tmp2);
    };
