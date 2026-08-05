// discord_app/modules/frames/panel/native/FramePanelSystemUIManager.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  let mode;
  let wrapperDimensions;
  const context = importAllResult.useContext(require("FramePanelStateContext.tsx"));
  ({ mode, wrapperDimensions } = context);
  return jsx(require("../../../activities/panel/native/ActivityPanelSystemUIManager.tsx") /* BaseActivityPanelSystemUIManager */.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("context").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;