// discord_app/modules/oauth2/native/ErrorResult.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import SafeAreaPaddingView from "../../../components_native/common/SafeAreaView.tsx";
import registerAssetDefault from "../../../../_runtime/09250_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, inner: null, text: null, image: null };
createCacheKey = {
  flex: 1,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER,
  gap: 16,
  paddingHorizontal: 16,
  justifyContent: "center",
  flexDirection: "column",
};
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
  const items = [callback(closure_3, obj)];
  obj1 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (error == null) {
    const intl = tmp3(1114).intl;
    error = intl.string(tmp3(1114).t.mqn873);
  }
  obj1[2] = error;
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  const items1 = [closure_6(closure_4, obj)];
  let tmp6Result = null;
  if (!error.hideFooter) {
    const obj2 = { size: "lg", text: null, onPress: null };
    const intl2 = tmp3(1114).intl;
    obj2[1] = intl2.string(tmp3(1114).t.cpT0Cq);
    obj2[2] = function onPress() {
      return callback(table[10]).pop();
    };
    tmp6Result = tmp6(tmp3(4975).Button, obj2);
  }
  items1[1] = tmp6Result;
  obj[2] = items1;
  return closure_6(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
