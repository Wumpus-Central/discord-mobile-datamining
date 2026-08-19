// === Module 14874: ? ===

// Module 14874
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PressableBase from "PressableBase" /* 5433 */;
import ShareIcon from "ShareIcon" /* 12047 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
const memoResult = importAllResult.memo(function ShareLogsButton() {
  let obj = { accessibilityLabel: null, onPress: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["Aw+09z"]);
  obj[1] = function onPress() {
    callback(9067);
    const obj = { message: callback(7).stringify() };
    return obj.showShareActionSheet(obj, "Debug Logs");
  };
  obj[2] = jsx(ShareIcon.ShareIcon, {});
  return jsx(PressableBase.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
});
const result = require("obj132").fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;