// discord_app/design/components/Coachmark/native/useCoachmark.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import v1 from "../../../../../_runtime/01266_v1.js";
import useTooltip from "../../Tooltip/native/useTooltip.native.tsx";
import AnimatedCoachmark2 from "AnimatedCoachmark.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = v1;
        const v4Result = tmpResult.v4();
        cResult[0] = v4Result;
        first = v4Result;
      } else {
        first = cResult[0];
      }
      const ref = react.useRef(first);
      const tmp7 = closure_4(arg1);
      const tmpResult2 = useTooltip;
      return tmpResult2.useTooltipHelper(ref, arg0, tmp7);
    }
  : (arg0, arg1) => {
      const useRef = react.useRef;
      const obj = v1;
      const ref = useRef(obj.v4());
      const tmp2 = closure_4(arg1);
      const obj2 = useTooltip;
      return obj2.useTooltipHelper(ref, arg0, tmp2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let context;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      context = react.useContext(require("LayerContext").LayerContext);
      if (cResult[0] === arg0) {
        let tmp3;
        if (cResult[1] === context) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      const fn = function o(arg0, targetMeasurements, surfaceMeasurements) {
        const AnimatedCoachmark = AnimatedCoachmark2.AnimatedCoachmark;
        const merged = Object.assign(closure_0);
        context.add(
          arg0,
          <AnimatedCoachmark targetMeasurements={targetMeasurements} surfaceMeasurements={surfaceMeasurements} />,
        );
      };
      cResult[0] = arg0;
      cResult[1] = context;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : (arg0) => {
      let closure_0;
      let context;
      _require = arg0;
      context = react.useContext(require("LayerContext").LayerContext);
      const items = [context, arg0];
      return react.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
        const AnimatedCoachmark = AnimatedCoachmark2.AnimatedCoachmark;
        const merged = Object.assign(closure_0);
        context.add(
          arg0,
          <AnimatedCoachmark targetMeasurements={targetMeasurements} surfaceMeasurements={surfaceMeasurements} />,
        );
      }, items);
    };
const result = size.fileFinishedImporting("design/components/Coachmark/native/useCoachmark.native.tsx");

export const useCoachmark = tmp2;
