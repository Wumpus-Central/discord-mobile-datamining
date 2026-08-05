import { ActionSheetHeaderPressableText } from "../../../../design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
// discord_app/modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ headerContainer: { paddingVertical: 12, paddingHorizontal: 16, alignItems: "flex-start" } });
const result = require("jsxProd").fileFinishedImporting("modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx");

export default function ContextMenuSubmenuActionSheetHeader(onBack) {
  let fn = onBack.onBack;
  let obj = { style: callback().headerContainer, children: null };
  obj = { label: null, onPress: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["13/7kX"]);
  if (fn == null) {
    fn = () => {

    };
  }
  obj[1] = fn;
  obj[1] = jsx(ActionSheetHeaderPressableText /* ActionSheetHeaderPressableText */.ActionSheetHeaderPressableText, { label: null, onPress: null });
  return <View label={null} onPress={null} />;
};