// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import createStandardNavigationFactories from "../../../../../_runtime/01501_createStandardNavigationFactories.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import registerAssetDefault from "../../../../../_runtime/10661_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/10662_registerAsset.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ Image: c3, View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { flex: 1, justifyContent: "space-between", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 };
createCacheKey[2] = { marginTop: 32, textAlign: "center" };
createCacheKey[3] = { marginTop: 8, textAlign: "center" };
createCacheKey[4] = { paddingHorizontal: 24 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(children) {
  const tmp = callback();
  let obj = createStandardNavigationFactories;
  const theme = obj.useTheme();
  obj = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (theme.dark) {
    let tmp9Result = registerAssetDefault;
  } else {
    tmp9Result = registerAssetDefault2;
  }
  const items = [callback(closure_3, { source: tmp9Result }), , ];
  obj1 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = getSystemLocale.intl;
  obj1[2] = intl.formatToMarkdownString(getSystemLocale.t.JUvC0s, {});
  items[1] = callback(Text.Text, obj1);
  items[2] = callback(Text.Text, { variant: "text-lg/medium", style: tmp.message, children: children.message });
  obj[2] = items;
  const items1 = [callback2(closure_5, obj), ];
  const obj3 = { style: tmp.footer, children: null };
  const obj4 = { text: null, size: "md", onPress: null };
  const intl2 = getSystemLocale.intl;
  obj4[0] = intl2.string(getSystemLocale.t.cpT0Cq);
  obj4[2] = function onPress() {
    return callback(table[12]).pop();
  };
  obj3[1] = callback(Button.Button, obj4);
  items1[1] = callback(closure_4, obj3);
  obj[2] = items1;
  return callback2(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};