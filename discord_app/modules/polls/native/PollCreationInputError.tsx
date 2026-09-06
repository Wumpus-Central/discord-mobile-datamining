// === Module 12230: PollCreationInputError ===

// Module 12230 (PollCreationInputError)
import ThemesDefault from "Themes" /* 576 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flexDirection: "row", alignItems: "center", marginTop: -10 }, icon: null };
createCacheKey = { alignSelf: "center", marginRight: 5, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default function PollCreationInputError(message) {
  message = message.message;
  const tmp = callback3();
  const items = [message];
  const effect = React.useEffect(() => {
    let tmp2 = null != message;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = message(closure_1_1[5]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp);
    }
  }, items);
  let obj = { style: tmp.container, children: null };
  obj = { width: 16, height: 16, style: tmp.icon };
  const items1 = [callback(message(1178).WarningCircle, obj), callback(message(4556).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: message })];
  obj[1] = items1;
  return callback2(View, obj);
};