// discord_app/modules/debug/native/ShareLogsButton.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function ShareLogsButton() {
  let obj = { accessibilityLabel: null, onPress: null, children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["Aw+09z"]);
  obj[1] = function onPress() {
    let obj = callback(8845);
    obj = { message: null };
    obj[0] = callback(7).stringify();
    return obj.showShareActionSheet(obj, "Debug Logs");
  };
  obj[2] = jsx(require("../../../design/components/Icon/native/redesign/generated/ShareIcon.tsx") /* ShareIcon */.ShareIcon, {});
  return jsx(require("../../../design/void/Pressables/native/Pressables.tsx") /* PressableBase */.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
});
const result = require("PressableBase").fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;