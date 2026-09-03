// discord_app/modules/saved_messages/native/NitroLimitUpsellBar.tsx
import set from "../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import WarningIcon from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import _modDef8988 from "../../premium/components/native/NitroUpsellButton.tsx";
import registerAssetDefault from "../../../../_runtime/09186_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null, icon: null, text: null };
obj = {
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: ThemesDefault.radii.md,
  flexDirection: "row",
  gap: ThemesDefault.space.PX_8,
  marginBottom: ThemesDefault.space.PX_16,
  marginHorizontal: ThemesDefault.space.PX_16,
  padding: ThemesDefault.space.PX_12,
};
obj[0] = obj;
obj[1] = { height: 20, width: 20 };
obj[2] = { flex: 1 };
let closure_7 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/saved_messages/native/NitroLimitUpsellBar.tsx");

export default function NitroLimitUpsellBar(isAtLimit) {
  isAtLimit = isAtLimit.isAtLimit;
  ({ text, onPress, loading } = isAtLimit);
  const tmp = callback();
  let obj = { style: tmp.container, children: null };
  if (isAtLimit) {
    obj = { color: "text-feedback-warning", style: null };
    obj[1] = tmp.icon;
    let tmp4Result = tmp4(WarningIcon.WarningIcon, obj);
    let tmp9 = tmp4;
  } else {
    obj = { source: null, style: null };
    obj[0] = registerAssetDefault;
    obj[1] = tmp.icon;
    tmp4Result = tmp4(closure_3, obj);
    tmp9 = tmp4;
  }
  const items = [tmp4Result, ,];
  obj1 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: null };
  const obj2 = { variant: "text-xs/bold", color: "text-brand", children: null };
  const intl = getSystemLocale.intl;
  obj2[2] = intl.string(getSystemLocale.t.oW0eUd).toUpperCase();
  const items1 = [tmp9(Text.Text, obj2), " \u00B7 ", text];
  obj1[3] = items1;
  items[1] = closure_6(Text.Text, obj1);
  if (isAtLimit) {
    let Button = _modDef8988;
  } else {
    Button = tmp12(4929).Button;
  }
  const obj3 = { size: "sm", text: null, onPress: null, loading: null };
  const intl2 = tmp12(1233).intl;
  obj3[1] = intl2.string(getSystemLocale.t["8x0jKT"]);
  obj3[2] = onPress;
  obj3[3] = loading;
  items[2] = tmp9(Button, obj3);
  obj[1] = items;
  return closure_6(closure_4, obj);
}
