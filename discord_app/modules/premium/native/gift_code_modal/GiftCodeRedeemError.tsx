// === Module 12855: GiftCodeRedeemError ===

// Module 12855 (GiftCodeRedeemError)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1500 */;
import Text from "Text" /* 4474 */;
import Button from "Button" /* 4928 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5553 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ Image: c3, View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, body: null, header: null, message: null, footer: null };
createCacheKey = { flex: 1, justifyContent: "space-between", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 };
createCacheKey[2] = { marginTop: 32, textAlign: "center" };
createCacheKey[3] = { marginTop: 8, textAlign: "center" };
createCacheKey[4] = { paddingHorizontal: 24 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(children) {
  const tmp = callback();
  let obj = createStandardNavigationFactories;
  const theme = obj.useTheme();
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (theme.dark) {
    let tmp9Result = tmp9(11368);
  } else {
    tmp9Result = tmp9(11370);
  }
  const items = [closure_6(closure_3, { source: tmp9Result }), , ];
  obj1 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = tmp2(1236).intl;
  obj1[2] = intl.formatToMarkdownString(getSystemLocale.t.JUvC0s, {});
  items[1] = closure_6(Text.Text, obj1);
  items[2] = closure_6(Text.Text, { variant: "text-lg/medium", style: tmp.message, children: children.message });
  obj[2] = items;
  const items1 = [closure_7(closure_5, obj), ];
  const obj3 = { style: tmp.footer, children: null };
  const obj4 = { text: null, size: "md", onPress: null };
  const intl2 = tmp2(1236).intl;
  obj4[0] = intl2.string(getSystemLocale.t.cpT0Cq);
  obj4[2] = function onPress() {
    return callback(table[12]).pop();
  };
  obj3[1] = closure_6(Button.Button, obj4);
  items1[1] = closure_6(closure_4, obj3);
  obj[2] = items1;
  return closure_7(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};