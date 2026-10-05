// discord_app/modules/frames/panel/native/FramePanelUI.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import ActivityPanelUI from "../../../activities/panel/native/ActivityPanelUI.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function renderActivityOrPIP(id, arg1, transitionState, transitionCleanUp) {
  let tmp4;
  if ("pip" === arg1) {
    tmp4 = 17196;
  } else {
    tmp4 = 17197;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, id);
}
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          return jsx(FramePanelSystemUIManagerDefault, {});
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const BaseActivityPanelUI = ActivityPanelUI.BaseActivityPanelUI;
        const tmp9 = (
          <BaseActivityPanelUI
            renderActivityOrPIP={renderActivityOrPIP}
            context={FramePanelStateContextDefault}
            renderActivityPanelSystemUIManager={first}
          />
        );
        cResult[1] = tmp9;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const renderActivityPanelSystemUIManager = react.useCallback(() => jsx(FramePanelSystemUIManagerDefault, {}), []);
      const items = [renderActivityPanelSystemUIManager];
      return react.useMemo(() => {
        const BaseActivityPanelUI = ActivityPanelUI.BaseActivityPanelUI;
        return (
          <BaseActivityPanelUI
            renderActivityOrPIP={renderActivityOrPIP}
            context={FramePanelStateContextDefault}
            renderActivityPanelSystemUIManager={renderActivityPanelSystemUIManager}
          />
        );
      }, items);
    };
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default tmp2;
