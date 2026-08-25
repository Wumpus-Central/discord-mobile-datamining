// === Module 10594: error ===

// Module 10594 (error)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4376 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5434 */;
import registerAssetDefault from "registerAsset" /* 10595 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, inner: null, text: null, image: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { marginTop: 24, textAlign: "center" };
createCacheKey[3] = { tintColor: ThemesDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { tintColor: ThemesDefault.colors.TEXT_FEEDBACK_WARNING };
const result = require("set").fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = callback2();
  let obj = { bottom: true, style: tmp.container, children: null };
  obj = { style: tmp.inner, children: null };
  obj = { source: registerAssetDefault, style: tmp.image };
  const items = [callback(closure_3, obj), ];
  obj1 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (error == null) {
    const intl = tmp3(1236).intl;
    error = intl.string(tmp3(1236).t.mqn873);
  }
  obj1[2] = error;
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  const items1 = [closure_6(closure_4, obj), ];
  let tmp6Result = null;
  if (!error.hideFooter) {
    const obj2 = { size: "lg", text: null, onPress: null };
    const intl2 = tmp3(1236).intl;
    obj2[1] = intl2.string(tmp3(1236).t.cpT0Cq);
    obj2[2] = function onPress() {
      return callback(table[10]).pop();
    };
    tmp6Result = tmp6(tmp3(4815).Button, obj2);
  }
  items1[1] = tmp6Result;
  obj[2] = items1;
  return closure_6(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};