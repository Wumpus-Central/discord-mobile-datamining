// discord_app/modules/frames/panel/native/FramePanelContainer.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import FramePanelControllerDefault from "FramePanelController.tsx";
import renderActivityOrPIPDefault from "FramePanelUI.tsx";
import closure_3 from "../../FramesStore.tsx";
import { isLaunched } from "../../FramesConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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
