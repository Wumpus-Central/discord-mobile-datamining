// discord_app/modules/frames/panel/native/FramePanelSystemUIManager.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import ActivityPanelSystemUIManager from "../../../activities/panel/native/ActivityPanelSystemUIManager.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let mode;
        let wrapperDimensions;
        const obj = react2;
        const cResult = obj.c(3);
        const context = react.useContext(FramePanelStateContextDefault);
        ({ mode, wrapperDimensions } = context);
        if (cResult[0] === mode) {
          let tmp5;
          if (cResult[1] === wrapperDimensions.isWindowLandscape) {
            tmp5 = cResult[2];
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
      }
    : () => {
        let mode;
        let wrapperDimensions;
        const context = react.useContext(FramePanelStateContextDefault);
        ({ mode, wrapperDimensions } = context);
        return jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, {
          mode,
          isWindowLandscape: wrapperDimensions.isWindowLandscape,
        });
      },
);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;
