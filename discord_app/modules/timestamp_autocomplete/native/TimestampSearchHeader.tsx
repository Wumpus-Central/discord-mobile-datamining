// discord_app/modules/timestamp_autocomplete/native/TimestampSearchHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "text-sm/semibold";
let c7 = "text-sm/medium";
const createStyles = fn(4638);
let obj = {
  container: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND },
  headerRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 },
  icon: { marginRight: 12 },
  description: { paddingHorizontal: 16, paddingBottom: 12 },
  divider: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.divider = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_8 = createStyles.createStyles(obj);
const obj4 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/timestamp_autocomplete/native/TimestampSearchHeader.tsx");

export default noop.memo(function TimestampSearchHeader() {
  const tmp = closure_8();
  const obj = { style: tmp.container, children: null };
  const obj2 = { accessible: true, accessibilityRole: "header", children: null };
  const obj3 = { style: tmp.headerRow, children: null };
  const items = [
    React4(ClockIcon.ClockIcon, { size: "sm", style: tmp.icon }),
    React4(Text_Text.Text, { variant, color: "mobile-text-heading-primary", children: "@time" }),
  ];
  obj3.children = items;
  const items1 = [hasOwnProperty(React3, obj3)];
  const obj6 = { style: tmp.description, variant: variant2, color: "text-muted", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.V6L3TV);
  items1[1] = React4(Text_Text.Text, obj6);
  obj2.children = items1;
  const items2 = [hasOwnProperty(React3, obj2), React4(Form.FormDivider, { style: tmp.divider })];
  obj.children = items2;
  return hasOwnProperty(React3, obj);
});
export const useTimestampSearchHeaderHeight = function useTimestampSearchHeaderHeight() {
  const sum = 24 + useScaledTextLineHeight.useScaledTextLineHeight(c6);
  return sum + useScaledTextLineHeight.useScaledTextLineHeight(c7) + 12 + hairlineWidth.hairlineWidth;
};
