// discord_app/modules/frames/panel/native/FramePanelSystemUIManager.tsx
import BaseActivityPanelSystemUIManager from "../../../activities/panel/native/ActivityPanelSystemUIManager.tsx";
import contextDefault from "FramePanelStateContext.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const context = importAllResult.useContext(contextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(BaseActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("obj132").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;