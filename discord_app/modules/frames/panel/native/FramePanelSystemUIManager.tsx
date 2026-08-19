// === Module 16269: ? ===

// Module 16269
import BaseActivityPanelSystemUIManager from "BaseActivityPanelSystemUIManager" /* 16257 */;
import contextDefault from "context" /* 16260 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const context = importAllResult.useContext(contextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(BaseActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("obj132").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;