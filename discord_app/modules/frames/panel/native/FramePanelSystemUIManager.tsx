// discord_app/modules/frames/panel/native/FramePanelSystemUIManager.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import { BaseActivityPanelSystemUIManager } from "../../../activities/panel/native/ActivityPanelSystemUIManager.tsx";
import { context } from "FramePanelStateContext.tsx";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  let mode;
  let wrapperDimensions;
  const context = importAllResult.useContext(context);
  ({ mode, wrapperDimensions } = context);
  return jsx(BaseActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("context").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;