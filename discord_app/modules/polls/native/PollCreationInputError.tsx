// discord_app/modules/polls/native/PollCreationInputError.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { alignSelf: "center", marginRight: 5, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default function PollCreationInputError(message) {
  message = message.message;
  const tmp = callback3();
  const items = [message];
  const effect = React.useEffect(() => {
    let tmp2 = null != message;
    if (tmp2) {
      tmp2 = "" !== message;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = message(dependencyMap[5]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(message);
    }
  }, items);
  const obj = { width: 16, height: 16, style: tmp.icon };
  const items1 = [callback(message(1297).WarningCircle, obj), callback(message(4734).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: message })];
  obj[1] = items1;
  return callback2(View, obj);
};