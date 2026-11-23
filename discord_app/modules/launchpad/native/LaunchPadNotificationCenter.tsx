// === Module 19145: LaunchPadNotificationCenter ===

// Module 19145 (LaunchPadNotificationCenter)
import notifications_NotificationsDefault from "notifications/Notifications" /* 18042 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4913);
let closure_3 = createStyles.createStyles({ wrapper: { height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default noop.memo(function NotificationsContent() {
  const tmp = closure_3();
  return jsx(notifications_NotificationsDefault, { style: closure_3().wrapper, nestedInLaunchPad: true });
});