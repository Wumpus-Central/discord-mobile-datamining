// === Module 17039: ? ===

// Module 17039
import initialize from "initialize" /* 504 */;
import FramePanelControllerDefault from "FramePanelController" /* 17040 */;
import renderActivityOrPIPDefault from "renderActivityOrPIP" /* 17042 */;
import closure_3 from "map" /* 9510 */;
import { isLaunched } from "FrameLayoutModes" /* 9511 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function FramePanelContainer() {
  let obj = initialize;
  const items = [closure_3];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => callback(mainFrame.getMainFrame()))) {
    obj = { children: null };
    obj[0] = jsx(renderActivityOrPIPDefault, {});
    tmp2 = jsx(FramePanelControllerDefault, { children: null });
    const tmp5 = FramePanelControllerDefault;
  }
  return tmp2;
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;