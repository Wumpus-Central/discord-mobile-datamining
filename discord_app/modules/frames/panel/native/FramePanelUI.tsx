// === Module 19527: FramePanelUI ===

// Module 19527 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 19503 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19526 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 19532 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(key, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 19528;
  } else {
    tmp4 = 19529;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, key);
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const renderActivityPanelSystemUIManager = noop.useCallback(() => jsx(FramePanelSystemUIManagerDefault, {}), []);
  items = [renderActivityPanelSystemUIManager];
  return noop.useMemo(() => jsx(ActivityPanelUI.BaseActivityPanelUI, { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager }), items);
};