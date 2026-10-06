// === Module 12047: TimestampSearchHeader ===

// Module 12047 (TimestampSearchHeader)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import ClockIcon from "ClockIcon" /* 4855 */;
import Text_Text from "Text/Text" /* 4892 */;
import Form from "Form" /* 8924 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10736 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
({ StyleSheet: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "text-sm/semibold";
let c7 = "text-sm/medium";
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let createStyles = createStyles_mod;
let obj = { container: obj2, headerRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 }, icon: { marginRight: 12 }, description: { paddingHorizontal: 16, paddingBottom: 12 }, divider: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_8 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => {
  const obj = useScaledTextLineHeight;
  const sum = 24 + obj.useScaledTextLineHeight(c6);
  const obj2 = useScaledTextLineHeight;
  return sum + obj2.useScaledTextLineHeight(c7) + 12 + hairlineWidth.hairlineWidth;
};
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let items1;
  let items2;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(18);
  const tmp4 = closure_8();
  const container = tmp4.container;
  if (cResult[0] !== tmp4.icon) {
    const obj2 = { size: "sm", style: tmp4.icon };
    const tmp7 = React3(ClockIcon.ClockIcon, obj2);
    cResult[0] = tmp4.icon;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant, color: "mobile-text-heading-primary", children: "@time" };
    const tmp11 = React3(Text_Text.Text, obj3);
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.headerRow) {
    let tmp12;
    let tmp14;
    let tmp16;
    if (cResult[4] === tmp5) {
      tmp12 = cResult[5];
    }
    const _Symbol = Symbol;
    const description = tmp4.description;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t.V6L3TV);
      cResult[6] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== tmp4.description) {
      const obj4 = { style: description, variant: variant2, color: "text-muted", children: tmp14 };
      const tmp19 = React3(Text_Text.Text, obj4);
      cResult[7] = tmp4.description;
      cResult[8] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp12) {
      let tmp20;
      let tmp24;
      if (cResult[10] === tmp16) {
        tmp20 = cResult[11];
      }
      if (cResult[12] !== tmp4.divider) {
        const obj5 = { style: tmp4.divider };
        const tmp26 = React3(Form.FormDivider, obj5);
        cResult[12] = tmp4.divider;
        cResult[13] = tmp26;
        tmp24 = tmp26;
      } else {
        tmp24 = cResult[13];
      }
      if (cResult[14] === tmp4.container) {
        if (cResult[15] === tmp20) {
          let tmp27;
          if (cResult[16] === tmp24) {
            tmp27 = cResult[17];
          }
          return tmp27;
        }
      }
      const obj6 = { style: container, children: items };
      items = [tmp20, tmp24];
      const tmp30 = hasOwnProperty(_false, obj6);
      cResult[14] = tmp4.container;
      cResult[15] = tmp20;
      cResult[16] = tmp24;
      cResult[17] = tmp30;
      tmp27 = tmp30;
    }
    const obj7 = { accessible: true, accessibilityRole: "header", children: items1 };
    items1 = [tmp12, tmp16];
    const tmp23 = hasOwnProperty(_false, obj7);
    cResult[9] = tmp12;
    cResult[10] = tmp16;
    cResult[11] = tmp23;
    tmp20 = tmp23;
  }
  const obj8 = { style: tmp4.headerRow, children: items2 };
  items2 = [tmp5, tmp8];
  const tmp13 = hasOwnProperty(_false, obj8);
  cResult[3] = tmp4.headerRow;
  cResult[4] = tmp5;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (() => {
  let intl;
  let items;
  let items1;
  let items2;
  const tmp = closure_8();
  const obj3 = { style: tmp.headerRow, children: items };
  items = [, ];
  const obj = { style: tmp.container, children: items2 };
  const obj2 = { accessible: true, accessibilityRole: "header", children: items1 };
  const obj4 = { size: "sm", style: tmp.icon };
  items[0] = React3(ClockIcon.ClockIcon, obj4);
  const obj5 = { variant, color: "mobile-text-heading-primary", children: "@time" };
  items[1] = React3(Text_Text.Text, obj5);
  items1 = [hasOwnProperty(_false, obj3), ];
  const obj6 = { style: tmp.description, variant: variant2, color: "text-muted", children: intl.string(intl2.t.V6L3TV) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = React3(Text, obj6);
  items2 = [hasOwnProperty(_false, obj2), ];
  const obj7 = { style: tmp.divider };
  items2[1] = React3(Form.FormDivider, obj7);
  return hasOwnProperty(_false, obj);
}));
const result1 = size.fileFinishedImporting("modules/timestamp_autocomplete/native/TimestampSearchHeader.tsx");

export default memoResult;
export const useTimestampSearchHeaderHeight = fn;