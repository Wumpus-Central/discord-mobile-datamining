// discord_app/modules/timestamp_autocomplete/native/TimestampSearchHeader.tsx
import c from "../../../../_runtime/00576_c.js";
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
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
const createStyles = fn(5090);
let obj = {
  container: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND },
  headerRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 },
  icon: { marginRight: 12 },
  description: { paddingHorizontal: 16, paddingBottom: 12 },
  divider: null,
};
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.divider = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_8 = createStyles.createStyles(obj);
ReactCompilerGating = fn(558);
function useTimestampSearchHeaderHeight() {
  const sum = 24 + useScaledTextLineHeight.useScaledTextLineHeight(c6);
  return sum + useScaledTextLineHeight.useScaledTextLineHeight(c7) + 12 + hairlineWidth.hairlineWidth;
}
let obj5 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/timestamp_autocomplete/native/TimestampSearchHeader.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function TimestampSearchHeader() {
        const cResult = c.c(18);
        const tmp4 = closure_8();
        if (cResult[0] !== tmp4.icon) {
          const obj2 = { size: "sm", style: tmp4.icon };
          const tmp7 = React4(ClockIcon.ClockIcon, obj2);
          cResult[0] = tmp4.icon;
          cResult[1] = tmp7;
          let tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant, color: "mobile-text-heading-primary", children: "@time" };
          const tmp11 = React4(Text_Text.Text, obj3);
          cResult[2] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] === tmp4.headerRow) {
          if (cResult[4] === tmp5) {
            let tmp12 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.V6L3TV);
            cResult[6] = stringResult;
            let tmp14 = stringResult;
          } else {
            tmp14 = cResult[6];
          }
          if (cResult[7] !== tmp4.description) {
            const obj4 = { style: tmp4.description, variant: variant2, color: "text-muted", children: tmp14 };
            const tmp19 = React4(Text_Text.Text, obj4);
            cResult[7] = tmp4.description;
            cResult[8] = tmp19;
            let tmp16 = tmp19;
          } else {
            tmp16 = cResult[8];
          }
          if (cResult[9] === tmp12) {
            if (cResult[10] === tmp16) {
              let tmp20 = cResult[11];
            }
            if (cResult[12] !== tmp4.divider) {
              const obj5 = { style: tmp4.divider };
              const tmp26 = React4(Form.FormDivider, obj5);
              cResult[12] = tmp4.divider;
              cResult[13] = tmp26;
              let tmp24 = tmp26;
            } else {
              tmp24 = cResult[13];
            }
            if (cResult[14] === tmp4.container) {
              if (cResult[15] === tmp20) {
                if (cResult[16] === tmp24) {
                  let tmp27 = cResult[17];
                }
                return tmp27;
              }
            }
            const obj6 = { style: tmp4.container, children: null };
            const items = [tmp20, tmp24];
            obj6.children = items;
            const tmp30 = hasOwnProperty(React3, obj6);
            cResult[14] = tmp4.container;
            cResult[15] = tmp20;
            cResult[16] = tmp24;
            cResult[17] = tmp30;
            tmp27 = tmp30;
          }
          const obj7 = { accessible: true, accessibilityRole: "header", children: null };
          const items1 = [tmp12, tmp16];
          obj7.children = items1;
          const tmp23 = hasOwnProperty(React3, obj7);
          cResult[9] = tmp12;
          cResult[10] = tmp16;
          cResult[11] = tmp23;
          tmp20 = tmp23;
        }
        const obj8 = { style: tmp4.headerRow, children: null };
        const items2 = [tmp5, tmp8];
        obj8.children = items2;
        const tmp13 = hasOwnProperty(React3, obj8);
        cResult[3] = tmp4.headerRow;
        cResult[4] = tmp5;
        cResult[5] = tmp13;
        tmp12 = tmp13;
      }
    : function TimestampSearchHeader() {
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
      },
);
export { useTimestampSearchHeaderHeight };
