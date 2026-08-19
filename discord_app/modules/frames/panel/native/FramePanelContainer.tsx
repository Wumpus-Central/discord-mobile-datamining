// discord_app/modules/frames/panel/native/FramePanelContainer.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import FramePanelControllerDefault from "FramePanelController.tsx";
import renderActivityOrPIPDefault from "FramePanelUI.tsx";
import map from "../../FramesStore.tsx";
import { isLaunched } from "../../FramesConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = fn;
const memoResult = importAllResult.memo(function FramePanelContainer() {
  let obj = initialize;
  const items = [closure_3];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => callback(mainFrame.getMainFrame()))) {
    obj = { children: null };
    obj[0] = jsx(renderActivityOrPIPDefault, {});
    tmp2 = jsx(FramePanelControllerDefault, { children: null });
  }
  return tmp2;
});
const result = require("obj132").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;