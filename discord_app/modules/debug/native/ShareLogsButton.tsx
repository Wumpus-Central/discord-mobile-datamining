// discord_app/modules/debug/native/ShareLogsButton.tsx
import LogAggregator from "../LogAggregator.tsx";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
import ShareIcon from "../../../design/components/Icon/native/redesign/generated/ShareIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ShareLogsButton() {
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
      }
    : function ShareLogsButton() {
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
      },
);
