// === Module 17047: FramePanelSystemUIManager ===

// Module 17047 (FramePanelSystemUIManager)
import ActivityPanelSystemUIManager from "ActivityPanelSystemUIManager" /* 17038 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17041 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default noop.memo(() => {
  const context = noop.useContext(FramePanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});