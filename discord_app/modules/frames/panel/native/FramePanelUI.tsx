// === Module 18773: FramePanelUI ===

// Module 18773 (FramePanelUI)
import c from "c" /* 576 */;
import ActivityPanelUI from "ActivityPanelUI" /* 18749 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 18772 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 18778 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(id, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 18774;
  } else {
    tmp4 = 18775;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, id);
}
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FramePanelUI() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return jsx(FramePanelSystemUIManagerDefault, {});
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager: first };
    const tmp9 = jsx(ActivityPanelUI.BaseActivityPanelUI, { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager: first });
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function FramePanelUI() {
  const renderActivityPanelSystemUIManager = noop.useCallback(() => jsx(FramePanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return noop.useMemo(() => jsx(ActivityPanelUI.BaseActivityPanelUI, { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager }), items);
});