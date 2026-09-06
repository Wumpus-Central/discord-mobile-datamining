// discord_app/modules/launchpad/native/LaunchPadNotificationCenter.tsx
import notifications_NotificationsDefault from "../../main_tabs_v2/native/tabs/notifications/Notifications.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ wrapper: { height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default noop.memo(function NotificationsContent() {
  const tmp = closure_3();
  return jsx(notifications_NotificationsDefault, { style: closure_3().wrapper, nestedInLaunchPad: true });
});
