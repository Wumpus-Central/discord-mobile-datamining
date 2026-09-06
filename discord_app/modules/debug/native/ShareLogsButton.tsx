// === Module 15566: ShareLogsButton ===

// Module 15566 (ShareLogsButton)
import LogAggregator from "LogAggregator" /* 7 */;
import util from "util" /* 1114 */;
import Pressables from "Pressables" /* 5123 */;
import showShareActionSheet from "showShareActionSheet" /* 8361 */;
import ShareIcon from "ShareIcon" /* 9053 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default noop.memo(function ShareLogsButton() {
  let obj = { accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["Aw+09z"]);
  obj.onPress = function onPress() {
    const obj = { message: LogAggregator.stringify() };
    return obj.showShareActionSheet(obj, "Debug Logs");
  };
  obj.children = jsx(ShareIcon.ShareIcon, {});
  return jsx(Pressables.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
});