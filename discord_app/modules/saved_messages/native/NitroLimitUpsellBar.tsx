// discord_app/modules/saved_messages/native/NitroLimitUpsellBar.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import WarningIcon from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import _modDef10027 from "../../../../_runtime/metro/10027__.js";
import NitroUpsellButtonDefault from "../../premium/components/native/NitroUpsellButton.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = {
  container: {
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.md,
    flexDirection: "row",
    gap: nativeDefault.space.PX_8,
    marginBottom: nativeDefault.space.PX_16,
    marginHorizontal: nativeDefault.space.PX_16,
    padding: nativeDefault.space.PX_12,
  },
  icon: { height: 20, width: 20 },
  text: { flex: 1 },
};
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/NitroLimitUpsellBar.tsx");

export default function NitroLimitUpsellBar(isAtLimit) {
  isAtLimit = isAtLimit.isAtLimit;
  ({ text, onPress, loading } = isAtLimit);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  if (isAtLimit) {
    const obj2 = { color: "text-feedback-warning", style: tmp.icon };
    let tmp4Result = React4(WarningIcon.WarningIcon, obj2);
    let tmp9 = React4;
  } else {
    const obj3 = { source: _modDef10027, style: tmp.icon };
    tmp4Result = React4(FastImageDefault, obj3);
    tmp9 = React4;
  }
  const items = [tmp4Result, ,];
  const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: null };
  const obj5 = { variant: "text-xs/bold", color: "text-brand", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.oW0eUd).toUpperCase();
  const items1 = [tmp9(Text_Text.Text, obj5), " \u00B7 ", text];
  obj4.children = items1;
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  if (isAtLimit) {
    let Button = NitroUpsellButtonDefault;
  } else {
    Button = components_Button_Button.Button;
  }
  const obj6 = { size: "sm", text: null, onPress: null, loading: null };
  const intl2 = util.intl;
  obj6.text = intl2.string(util.t["8x0jKT"]);
  obj6.onPress = onPress;
  obj6.loading = loading;
  items[2] = tmp9(Button, obj6);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
