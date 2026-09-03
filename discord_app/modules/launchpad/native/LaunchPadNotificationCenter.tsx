// === Module 16832: ? ===

// Module 16832
import goBackDefault from "goBack" /* 16239 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

let closure_3 = createCacheKey.createStyles({ wrapper: { height: "100%" } });
const memoResult = importAllResult.memo(function NotificationsContent() {
  const tmp = callback();
  return jsx(goBackDefault, { style: callback().wrapper, nestedInLaunchPad: true });
});
const result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;