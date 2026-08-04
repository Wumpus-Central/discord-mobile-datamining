import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  let mode;
  let wrapperDimensions;
  const context = importAllResult.useContext(importDefault(15985));
  ({ mode, wrapperDimensions } = context);
  return jsx(require(15982) /* BaseActivityPanelSystemUIManager */.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("context").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;