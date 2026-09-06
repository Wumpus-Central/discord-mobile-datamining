// === Module 17042: FramePanelUI ===

// Module 17042 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17016 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17041 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17047 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(key, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17043;
  } else {
    tmp4 = 17044;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, key);
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const renderActivityPanelSystemUIManager = noop.useCallback(() => jsx(FramePanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return noop.useMemo(() => jsx(ActivityPanelUI.BaseActivityPanelUI, { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager }), items);
};