// discord_app/modules/polls/native/PollCreationInputError.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flexDirection: "row", alignItems: "center", marginTop: -10 }, icon: null };
createCacheKey = { alignSelf: "center", marginRight: 5, color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default function PollCreationInputError(message) {
  message = message.message;
  const tmp = createCacheKey();
  const items = [message];
  const effect = React.useEffect(() => {
    let tmp2 = null != message;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = message(outer1_1[5]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp);
    }
  }, items);
  let obj = { style: tmp.container, children: null };
  obj = { width: 16, height: 16, style: tmp.icon };
  const items1 = [callback(message(1297).WarningCircle, obj), callback(message(4340).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: message })];
  obj[1] = items1;
  return callback2(View, obj);
};