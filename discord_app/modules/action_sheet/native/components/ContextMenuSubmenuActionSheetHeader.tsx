// === Module 11359: ContextMenuSubmenuActionSheetHeader ===

// Module 11359 (ContextMenuSubmenuActionSheetHeader)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ActionSheetHeaderPressableText from "ActionSheetHeaderPressableText" /* 9191 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ headerContainer: { paddingVertical: 12, paddingHorizontal: 16, alignItems: "flex-start" } });
const result = require("set").fileFinishedImporting("modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx");

export default function ContextMenuSubmenuActionSheetHeader(onBack) {
  let fn = onBack.onBack;
  let obj = { style: callback().headerContainer, children: null };
  obj = { label: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["13/7kX"]);
  if (fn == null) {
    fn = () => {

    };
  }
  obj[1] = fn;
  obj[1] = jsx(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, { label: null, onPress: null });
  return <View label={null} onPress={null} />;
};