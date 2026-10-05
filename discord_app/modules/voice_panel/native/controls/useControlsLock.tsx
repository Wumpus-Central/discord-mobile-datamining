// === Module 17203: useControlsLock ===

// Module 17203 (useControlsLock)
import react2 from "react" /* 576 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11901 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
  let closure_0 = arg0;
  const generateStateLocker = react.useContext(VoicePanelStateContextDefault).generateStateLocker;
  const first = react.useState(() => generateStateLocker(closure_0))[0];
  const items = [first];
  const layoutEffect = react.useLayoutEffect(() => () => first.unlock(), items);
  return first;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsLock.tsx");

export default tmp2;