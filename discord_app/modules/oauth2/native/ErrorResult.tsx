// discord_app/modules/oauth2/native/ErrorResult.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/10521_registerAsset.js";
import { SafeAreaPaddingView } from "../../../components_native/common/SafeAreaView.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, inner: null, text: null, image: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { marginTop: 24, textAlign: "center" };
createCacheKey[3] = { tintColor: require("Themes").colors.TEXT_FEEDBACK_WARNING };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { tintColor: require("Themes").colors.TEXT_FEEDBACK_WARNING };
const result = require("jsxProd").fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = createCacheKey();
  let obj = { bottom: true, style: tmp.container, children: null };
  obj = { style: tmp.inner, children: null };
  obj = { source: null, style: null };
  obj[0] = registerAsset;
  obj[1] = tmp.image;
  const items = [callback(closure_3, obj), ];
  const obj1 = { style: tmp.text, variant: "text-md/medium", children: null };
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
    tmp6Result = tmp6(tmp3(4714).Button, obj2);
  }
  items1[1] = tmp6Result;
  obj[2] = items1;
  return closure_6(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};