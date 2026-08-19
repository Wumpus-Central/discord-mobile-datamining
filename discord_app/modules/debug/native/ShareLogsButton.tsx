// discord_app/modules/debug/native/ShareLogsButton.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import ShareIcon from "../../../design/components/Icon/native/redesign/generated/ShareIcon.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";

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