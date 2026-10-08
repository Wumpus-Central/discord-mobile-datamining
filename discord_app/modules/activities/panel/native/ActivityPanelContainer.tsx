// discord_app/modules/activities/panel/native/ActivityPanelContainer.tsx
import c from "../../../../../_runtime/00576_c.js";
import ActivityPanelUtils from "utils/ActivityPanelUtils.tsx";
import ActivityPanelControllerDefault from "ActivityPanelController.tsx";
import ActivityPanelUIDefault from "ActivityPanelUI.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ActivityPanelContainer() {
        const cResult = c.c(2);
        const isConnectedToActivityInText = ActivityPanelUtils.useIsConnectedToActivityInText();
        if (cResult[0] !== isConnectedToActivityInText) {
          let tmp5 = null;
          if (isConnectedToActivityInText) {
            const obj3 = { children: jsx(ActivityPanelUIDefault, {}) };
            tmp5 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
          }
          cResult[0] = isConnectedToActivityInText;
          cResult[1] = tmp5;
          let tmp4 = tmp5;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : function ActivityPanelContainer() {
        let tmp2 = null;
        if (obj.useIsConnectedToActivityInText()) {
          const obj2 = { children: jsx(ActivityPanelUIDefault, {}) };
          tmp2 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
        }
        return tmp2;
      },
);
