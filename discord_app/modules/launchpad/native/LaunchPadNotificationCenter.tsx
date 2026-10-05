// discord_app/modules/launchpad/native/LaunchPadNotificationCenter.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import notifications_NotificationsDefault from "../../main_tabs_v2/native/tabs/notifications/Notifications.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ wrapper: { height: "100%" } });
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp4;
        const obj = react2;
        const cResult = obj.c(2);
        const tmp3 = closure_4();
        if (cResult[0] !== tmp3.wrapper) {
          const tmp7 = jsx(notifications_NotificationsDefault, { style: tmp3.wrapper, nestedInLaunchPad: true });
          cResult[0] = tmp3.wrapper;
          cResult[1] = tmp7;
          tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : () => jsx(notifications_NotificationsDefault, { style: closure_4().wrapper, nestedInLaunchPad: true }),
);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;
