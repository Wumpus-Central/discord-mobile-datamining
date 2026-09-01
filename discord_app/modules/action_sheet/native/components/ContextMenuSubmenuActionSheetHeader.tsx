// discord_app/modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ActionSheetHeaderPressableText from "../../../../design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({
  headerContainer: { paddingVertical: 12, paddingHorizontal: 16, alignItems: "flex-start" },
});
const result = require("set").fileFinishedImporting(
  "modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx",
);

export default function ContextMenuSubmenuActionSheetHeader(onBack) {
  let fn = onBack.onBack;
  let obj = { style: callback().headerContainer, children: null };
  obj = { label: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["13/7kX"]);
  if (fn == null) {
    fn = () => {};
  }
  obj[1] = fn;
  obj[1] = jsx(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, { label: null, onPress: null });
  return <View label={null} onPress={null} />;
}
