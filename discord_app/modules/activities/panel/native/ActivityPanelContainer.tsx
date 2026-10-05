// discord_app/modules/activities/panel/native/ActivityPanelContainer.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import ActivityPanelUtils from "utils/ActivityPanelUtils.tsx";
import ActivityPanelControllerDefault from "ActivityPanelController.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp4;
        const obj = react2;
        const cResult = obj.c(2);
        const obj2 = ActivityPanelUtils;
        const isConnectedToActivityInText = obj2.useIsConnectedToActivityInText();
        if (cResult[0] !== isConnectedToActivityInText) {
          let tmp5 = null;
          if (isConnectedToActivityInText) {
            ActivityPanelControllerDefault;
            tmp5 = <tmp8>{null}</tmp8>;
          }
          cResult[0] = isConnectedToActivityInText;
          cResult[1] = tmp5;
          tmp4 = tmp5;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : () => {
        let tmp2 = null;
        const obj = ActivityPanelUtils;
        if (obj.useIsConnectedToActivityInText()) {
          ActivityPanelControllerDefault;
          tmp2 = <tmp5>{null}</tmp5>;
        }
        return tmp2;
      },
);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;
