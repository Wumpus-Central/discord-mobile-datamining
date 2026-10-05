// discord_app/hooks/useDebounce.tsx
import react2 from "../../_runtime/00576_react.js";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import react from "../../_runtime/00019_react.js";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const obj = react2;
      const cResult = obj.c(4);
      let closure_2 = _slicedToArray(react.useState(arg0), 2)[1];
      _slicedToArray(react.useState(arg0), 2);
      if (cResult[0] === arg1) {
        let tmp4;
        let tmp5;
        if (cResult[1] === arg0) {
          tmp4 = cResult[2];
          tmp5 = cResult[3];
        }
        const effect = react.useEffect(tmp4, tmp5);
        return tmp3;
      }
      const fn = function s() {
        const timeout = setTimeout(() => {
          closure_1_2(closure_0);
        }, closure_1);
        return () => {
          clearTimeout(closure_0);
        };
      };
      const items = [arg0, arg1];
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items;
      tmp5 = items;
      tmp4 = fn;
    }
  : (arg0, arg1) => {
      let closure_2;
      let first;
      let closure_0 = arg0;
      let closure_1 = arg1;
      [first, closure_2] = react.useState(arg0);
      const items = [arg0, arg1];
      const effect = react.useEffect(() => {
        const timeout = setTimeout(() => {
          closure_1_2(closure_0);
        }, closure_1);
        return () => {
          clearTimeout(closure_0);
        };
      }, items);
      return first;
    };
const result = size.fileFinishedImporting("hooks/useDebounce.tsx");

export default tmp2;
