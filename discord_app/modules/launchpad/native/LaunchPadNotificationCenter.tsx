// discord_app/modules/launchpad/native/LaunchPadNotificationCenter.tsx
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_3 = createCacheKey.createStyles({ wrapper: { height: "100%" } });
const memoResult = require("noop").memo(function NotificationsContent() {
  const tmp = callback();
  return jsx(require("../../main_tabs_v2/native/tabs/notifications/Notifications.tsx"), { style: callback().wrapper, nestedInLaunchPad: true });
});
const result = require("createCacheKey").fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;