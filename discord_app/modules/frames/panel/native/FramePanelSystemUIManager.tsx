// === Module 17176: FramePanelSystemUIManager ===

// Module 17176 (FramePanelSystemUIManager)
import c from "c" /* 576 */;
import ActivityPanelSystemUIManager from "ActivityPanelSystemUIManager" /* 17167 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17170 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const context = noop.useContext(FramePanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  if (cResult[0] === mode) {
    if (cResult[1] === wrapperDimensions.isWindowLandscape) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
  cResult[0] = mode;
  cResult[1] = wrapperDimensions.isWindowLandscape;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape };
}) : (() => {
  const context = noop.useContext(FramePanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
}));