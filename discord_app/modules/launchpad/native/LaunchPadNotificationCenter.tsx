// === Module 16996: LaunchPadNotificationCenter ===

// Module 16996 (LaunchPadNotificationCenter)
import notifications_NotificationsDefault from "notifications/Notifications" /* 16401 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ wrapper: { height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default noop.memo(function NotificationsContent() {
  const tmp = closure_3();
  return jsx(notifications_NotificationsDefault, { style: closure_3().wrapper, nestedInLaunchPad: true });
});