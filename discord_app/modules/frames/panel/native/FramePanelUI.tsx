// === Module 19996: FramePanelUI ===

// Module 19996 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 19973 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19995 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 20002 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(key, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 19997;
  } else {
    tmp4 = 19998;
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