// discord_app/modules/frames/panel/native/FramePanelSystemUIManager.tsx
import c from "../../../../../_runtime/00576_c.js";
import ActivityPanelSystemUIManager from "../../../activities/panel/native/ActivityPanelSystemUIManager.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function FramePanelSystemUIManager() {
        const cResult = c.c(3);
        const context = noop.useContext(FramePanelStateContextDefault);
        ({ mode, wrapperDimensions } = context);
        if (cResult[0] === mode) {
          if (cResult[1] === wrapperDimensions.isWindowLandscape) {
            let tmp5 = cResult[2];
          }
          return tmp5;
        }
        const tmp6 = jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, {
          mode,
          isWindowLandscape: wrapperDimensions.isWindowLandscape,
        });
        cResult[0] = mode;
        cResult[1] = wrapperDimensions.isWindowLandscape;
        cResult[2] = tmp6;
        tmp5 = tmp6;
        const obj2 = { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape };
      }
    : function FramePanelSystemUIManager() {
        const context = noop.useContext(FramePanelStateContextDefault);
        ({ mode, wrapperDimensions } = context);
        return jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, {
          mode,
          isWindowLandscape: wrapperDimensions.isWindowLandscape,
        });
      },
);
