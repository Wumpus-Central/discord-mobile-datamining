// === Module 15783: ShareLogsButton ===

// Module 15783 (ShareLogsButton)
import LogAggregator from "LogAggregator" /* 7 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Pressables from "Pressables" /* 6191 */;
import showShareActionSheet from "showShareActionSheet" /* 8465 */;
import ShareIcon from "ShareIcon" /* 13000 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ShareLogsButton() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { accessibilityLabel: null, onPress: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["Aw+09z"]);
    obj2.onPress = function onPress() {
      const obj2 = { message: null };
      const obj = showShareActionSheet;
      obj2.message = LogAggregator.stringify();
      return obj.showShareActionSheet(obj2, "Debug Logs");
    };
    obj2.children = jsx(ShareIcon.ShareIcon, {});
    const tmp6 = jsx(Pressables.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ShareLogsButton() {
  let obj = { accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["Aw+09z"]);
  obj.onPress = function onPress() {
    const obj2 = { message: null };
    const obj = showShareActionSheet;
    obj2.message = LogAggregator.stringify();
    return obj.showShareActionSheet(obj2, "Debug Logs");
  };
  obj.children = jsx(ShareIcon.ShareIcon, {});
  return jsx(Pressables.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
}));