// discord_app/modules/launchpad/native/LaunchPadNotificationCenter.tsx
import c from "../../../../_runtime/00576_c.js";
import notifications_NotificationsDefault from "../../main_tabs_v2/native/tabs/notifications/Notifications.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_4 = createStyles.createStyles({ wrapper: { height: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        const tmp3 = closure_4();
        if (cResult[0] !== tmp3.wrapper) {
          const obj2 = { style: tmp3.wrapper, nestedInLaunchPad: true };
          const tmp7 = jsx(notifications_NotificationsDefault, { style: tmp3.wrapper, nestedInLaunchPad: true });
          cResult[0] = tmp3.wrapper;
          cResult[1] = tmp7;
          let tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : () => {
        const tmp = closure_4();
        return jsx(notifications_NotificationsDefault, { style: closure_4().wrapper, nestedInLaunchPad: true });
      },
);
