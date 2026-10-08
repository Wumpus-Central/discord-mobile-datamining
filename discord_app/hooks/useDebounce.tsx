// discord_app/hooks/useDebounce.tsx
import c from "../../_runtime/00576_c.js";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useDebounce.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useDebounce(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const cResult = c.c(4);
      closure_2 = _slicedToArray(noop.useState(arg0), 2)[1];
      if (cResult[0] === arg1) {
        if (cResult[1] === arg0) {
          let tmp4 = cResult[2];
          let tmp5 = cResult[3];
        }
        const effect = noop.useEffect(tmp4, tmp5);
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
      const tmp2 = _slicedToArray(noop.useState(arg0), 2);
    }
  : function useDebounce(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const tmp = _slicedToArray(noop.useState(arg0), 2);
      closure_2 = tmp[1];
      const items = [arg0, arg1];
      const effect = noop.useEffect(() => {
        const timeout = setTimeout(() => {
          closure_1_2(closure_0);
        }, closure_1);
        return () => {
          clearTimeout(closure_0);
        };
      }, items);
      return tmp[0];
    };
