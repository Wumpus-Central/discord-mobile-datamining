// discord_app/modules/saved_messages/native/NitroLimitUpsellBar.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import WarningIcon from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import _modDef9963 from "../../../../_runtime/metro/09963__.js";
import NitroUpsellButtonDefault from "../../premium/components/native/NitroUpsellButton.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ Image: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: null, icon: null, text: null };
obj = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.md,
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_16,
  marginHorizontal: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_12,
};
obj.container = obj;
obj.icon = { height: 20, width: 20 };
obj.text = { flex: 1 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/NitroLimitUpsellBar.tsx");

export default function NitroLimitUpsellBar(isAtLimit) {
  isAtLimit = isAtLimit.isAtLimit;
  ({ text, onPress, loading } = isAtLimit);
  const tmp = closure_7();
  let obj = { style: tmp.container, children: null };
  if (isAtLimit) {
    obj = { color: "text-feedback-warning", style: tmp.icon };
    let tmp4Result = tmp4(WarningIcon.WarningIcon, obj);
    let tmp9 = tmp4;
  } else {
    obj = { source: _modDef9963, style: tmp.icon };
    tmp4Result = tmp4(React3, obj);
    tmp9 = tmp4;
  }
  const items = [tmp4Result, ,];
  const obj1 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: null };
  const obj2 = { variant: "text-xs/bold", color: "text-brand", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.oW0eUd).toUpperCase();
  const items1 = [tmp9(Text_Text.Text, obj2), " \u00B7 ", text];
  obj1.children = items1;
  items[1] = timestampProducer(Text_Text.Text, obj1);
  if (isAtLimit) {
    let Button = NitroUpsellButtonDefault;
  } else {
    Button = tmp12(4975).Button;
  }
  const obj3 = { size: "sm", text: null, onPress: null, loading: null };
  const intl2 = tmp12(1114).intl;
  obj3.text = intl2.string(util.t["8x0jKT"]);
  obj3.onPress = onPress;
  obj3.loading = loading;
  items[2] = tmp9(Button, obj3);
  obj.children = items;
  return timestampProducer(React4, obj);
}
