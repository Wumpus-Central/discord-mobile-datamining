// discord_app/modules/threads/native/components/redesign/ThreadListEmpty.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Button from "../../../../../design/void/native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../../_runtime/12238_registerAsset.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = {
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  iconWrapper: null,
  title: null,
  subtext: null,
};
obj = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: ThemesDefault.radii.round,
  padding: 12,
};
obj[1] = obj;
obj[2] = { textAlign: "center", marginTop: 16, marginHorizontal: 16 };
obj[3] = { textAlign: "center", marginTop: 4, marginHorizontal: 16, marginBottom: 16 };
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((onCreateThreadPress) => {
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.iconWrapper, children: null };
  obj = { source: registerAssetDefault, size: Button.Icon.Sizes.MEDIUM };
  obj[1] = callback(Button.Icon, obj);
  const items = [callback(View, obj), , ,];
  obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    maxFontSizeMultiplier: 2,
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj1[5] = intl.string(getSystemLocale.t.HgTQ8p);
  items[1] = callback(Text.Text, obj1);
  const obj2 = {
    style: tmp.subtext,
    maxFontSizeMultiplier: 2,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  const intl2 = getSystemLocale.intl;
  obj2[4] = intl2.string(getSystemLocale.t.jmq9GC);
  items[2] = callback(Text.Text, obj2);
  let tmp4Result = null != onCreateThreadPress;
  if (tmp4Result) {
    const obj3 = { onPress: null, text: null };
    obj3[0] = onCreateThreadPress;
    const intl3 = tmp5(1114).intl;
    obj3[1] = intl3.string(tmp5(1114).t.rBIGBL);
    tmp4Result = callback(tmp5(4975).Button, obj3);
  }
  items[3] = tmp4Result;
  obj[1] = items;
  return closure_5(View, obj);
});
const result = require("set").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default memoResult;
