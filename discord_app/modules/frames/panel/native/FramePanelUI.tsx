// discord_app/modules/frames/panel/native/FramePanelUI.tsx
import contextDefault from "FramePanelStateContext.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 16262;
  } else {
    tmp4 = 16266;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
const result = require("obj132").fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const callback = React.useCallback(() => callback2(callback(table[4]), {}), []);
  const items = [callback];
  return React.useMemo(() => jsx(callback(dependencyMap[5]).BaseActivityPanelUI, { renderActivityOrPIP, context: contextDefault, renderActivityPanelSystemUIManager: callback }), items);
};