// discord_app/modules/debug/native/ShareLogsButton.tsx
import LogAggregator from "../LogAggregator.tsx";
import util from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
import ShareIcon from "../../../design/components/Icon/native/redesign/generated/ShareIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
