// discord_app/modules/voice_panel/native/controls/useControlsLock.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(6);
      const generateStateLocker = react.useContext(VoicePanelStateContextDefault).generateStateLocker;
      if (cResult[0] === generateStateLocker) {
        let tmp2;
        let tmp5;
        let tmp4;
        if (cResult[1] === arg0) {
          tmp2 = cResult[2];
        }
        const first = react.useState(tmp2)[0];
        if (cResult[3] !== first) {
          const fn2 = function s() {
            return () => first.unlock();
          };
          const items = [first];
          cResult[3] = first;
          cResult[4] = fn2;
          cResult[5] = items;
          tmp5 = items;
          tmp4 = fn2;
        } else {
          tmp4 = cResult[4];
          tmp5 = cResult[5];
        }
        const layoutEffect = react.useLayoutEffect(tmp4, tmp5);
        return first;
      }
      const fn = function o() {
        return generateStateLocker(closure_0);
      };
      cResult[0] = generateStateLocker;
      cResult[1] = arg0;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const generateStateLocker = react.useContext(VoicePanelStateContextDefault).generateStateLocker;
      const first = react.useState(() => generateStateLocker(closure_0))[0];
      const items = [first];
      const layoutEffect = react.useLayoutEffect(() => () => first.unlock(), items);
      return first;
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsLock.tsx");

export default tmp2;
