// === Module 17946: LaunchPadNotificationCenter ===

// Module 17946 (LaunchPadNotificationCenter)
import c from "c" /* 576 */;
import notifications_NotificationsDefault from "notifications/Notifications" /* 16838 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({ wrapper: { height: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationsContent() {
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
}) : (function NotificationsContent() {
  const tmp = closure_4();
  return jsx(notifications_NotificationsDefault, { style: closure_4().wrapper, nestedInLaunchPad: true });
}));