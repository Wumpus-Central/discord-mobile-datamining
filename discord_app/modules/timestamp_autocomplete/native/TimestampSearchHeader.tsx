// === Module 12389: TimestampSearchHeader ===

// Module 12389 (TimestampSearchHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ClockIcon from "ClockIcon" /* 4523 */;
import Text_Text from "Text/Text" /* 4556 */;
import Form from "Form" /* 8593 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10119 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "text-sm/semibold";
let c7 = "text-sm/medium";
fn(4560);
let obj = { container: null, headerRow: null, icon: null, description: null, divider: null };
obj = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.container = obj;
obj.headerRow = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 };
obj.icon = { marginRight: 12 };
obj.description = { paddingHorizontal: 16, paddingBottom: 12 };
const createStyles = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
obj.divider = createStyles;
let closure_8 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/timestamp_autocomplete/native/TimestampSearchHeader.tsx");

export default noop.memo(function TimestampSearchHeader() {
  const tmp = closure_8();
  let obj = { style: tmp.container, children: null };
  obj = { accessible: true, accessibilityRole: "header", children: null };
  obj = { style: tmp.headerRow, children: null };
  const items = [React4(ClockIcon.ClockIcon, { size: "sm", style: tmp.icon }), React4(Text_Text.Text, { variant, color: "mobile-text-heading-primary", children: "@time" })];
  obj.children = items;
  const items1 = [hasOwnProperty(React3, obj), ];
  const obj3 = { style: tmp.description, variant: variant2, color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.V6L3TV);
  items1[1] = React4(Text_Text.Text, obj3);
  obj.children = items1;
  const items2 = [hasOwnProperty(React3, obj), React4(Form.FormDivider, { style: tmp.divider })];
  obj.children = items2;
  return hasOwnProperty(React3, obj);
});
export const useTimestampSearchHeaderHeight = function useTimestampSearchHeaderHeight() {
  const sum = 24 + useScaledTextLineHeight.useScaledTextLineHeight(c6);
  return sum + useScaledTextLineHeight.useScaledTextLineHeight(c7) + 12 + hairlineWidth.hairlineWidth;
};