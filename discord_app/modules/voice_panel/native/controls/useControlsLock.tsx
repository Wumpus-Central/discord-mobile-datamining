// === Module 17232: useControlsLock ===

// Module 17232 (useControlsLock)
import c from "c" /* 576 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11915 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsLock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  const cResult = c.c(6);
  const generateStateLocker = noop.useContext(VoicePanelStateContextDefault).generateStateLocker;
  if (cResult[0] === generateStateLocker) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
    }
    const first = noop.useState(tmp2)[0];
    if (cResult[3] !== first) {
      const fn2 = function s() {
        return () => first.unlock();
      };
      const items = [first];
      cResult[3] = first;
      cResult[4] = fn2;
      cResult[5] = items;
      let tmp5 = items;
      let tmp4 = fn2;
    } else {
      tmp4 = cResult[4];
      tmp5 = cResult[5];
    }
    const layoutEffect = noop.useLayoutEffect(tmp4, tmp5);
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
  closure_0 = arg0;
  const generateStateLocker = noop.useContext(VoicePanelStateContextDefault).generateStateLocker;
  const first = noop.useState(() => generateStateLocker(closure_0))[0];
  const items = [first];
  const layoutEffect = noop.useLayoutEffect(() => () => first.unlock(), items);
  return first;
});