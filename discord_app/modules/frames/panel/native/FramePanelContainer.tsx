// discord_app/modules/frames/panel/native/FramePanelContainer.tsx
import map from "map";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function FramePanelContainer() {
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [map];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => null != connectedFrame.getConnectedFrame())) {
    obj = { children: null };
    obj[0] = jsx(require("FramePanelUI.tsx"), {});
    tmp2 = jsx(require("FramePanelController.tsx"), { children: null });
    const tmp5 = require("FramePanelController.tsx");
  }
  return tmp2;
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;