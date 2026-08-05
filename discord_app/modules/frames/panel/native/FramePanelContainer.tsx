import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { FramePanelController } from "FramePanelController.tsx";
import { renderActivityOrPIP } from "FramePanelUI.tsx";
// discord_app/modules/frames/panel/native/FramePanelContainer.tsx
import map from "map";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function FramePanelContainer() {
  let obj = initialize /* initialize */;
  const items = [map];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => null != connectedFrame.getConnectedFrame())) {
    obj = { children: null };
    obj[0] = jsx(renderActivityOrPIP, {});
    tmp2 = jsx(FramePanelController, { children: null });
    const tmp5 = FramePanelController;
  }
  return tmp2;
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;