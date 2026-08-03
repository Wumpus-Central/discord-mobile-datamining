// === Module 15954: renderActivityOrPIP ===

// Module 15954 (renderActivityOrPIP)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 15955;
  } else {
    tmp4 = 15959;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
const result = require("module_15955").fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const callback = React.useCallback(() => callback2(callback(table[4]), {}), []);
  const items = [callback];
  return React.useMemo(() => {
    const obj = { renderActivityOrPIP: outer1_5, context: null, renderActivityPanelSystemUIManager: null };
    obj[1] = outer1_1(outer1_2[6]);
    obj[2] = callback;
    return outer1_4(callback(outer1_2[5]).BaseActivityPanelUI, obj);
  }, items);
};