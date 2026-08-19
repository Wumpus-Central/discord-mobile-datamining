// === Module 9776: error ===

// Module 9776 (error)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 6803 */;
import registerAssetDefault from "registerAsset" /* 9777 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { marginTop: 24, textAlign: "center" };
createCacheKey[3] = { tintColor: ThemesDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = callback2();
  const obj = { source: registerAssetDefault, style: tmp.image };
  const items = [callback(closure_3, obj), ];
  obj1 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (error == null) {
    const intl = getSystemLocale.intl;
    error = intl.string(getSystemLocale.t.mqn873);
  }
  obj1[2] = error;
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  const items1 = [callback(closure_4, obj), ];
  let tmp6Result = null;
  if (!error.hideFooter) {
    const obj2 = { size: "lg", text: null, onPress: null };
    const intl2 = getSystemLocale.intl;
    obj2[1] = intl2.string(getSystemLocale.t.cpT0Cq);
    obj2[2] = function onPress() {
      return callback(table[10]).pop();
    };
    tmp6Result = callback(Button.Button, obj2);
  }
  items1[1] = tmp6Result;
  obj[2] = items1;
  return callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};