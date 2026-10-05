// === Module 11850: NitroLimitUpsellBar ===

// Module 11850 (NitroLimitUpsellBar)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import WarningIcon from "WarningIcon" /* 4803 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import AssetRegistryDefault from "AssetRegistry" /* 9642 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9648 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, icon: { height: 20, width: 20 }, text: { flex: 1 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md, flexDirection: "row", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let intl2;
  let isAtLimit;
  let items;
  let items1;
  let loading;
  let onPress;
  let str2;
  let text;
  let tmp6Result;
  const obj = react;
  const cResult = obj.c(16);
  ({ text, isAtLimit, onPress, loading } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === isAtLimit) {
    let tmp5;
    let tmp11;
    if (cResult[1] === tmp4.icon) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-xs/bold", color: "text-brand", children: str2.toUpperCase() };
      const Text = Text_Text.Text;
      const intl = intl3.intl;
      str2 = intl.string(intl3.t.oW0eUd);
      const tmp13 = hasOwnProperty(Text, obj2);
      cResult[3] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[3];
    }
    if (cResult[4] === tmp4.text) {
      let tmp14;
      let Button;
      if (cResult[5] === text) {
        tmp14 = cResult[6];
      }
      if (cResult[7] === isAtLimit) {
        if (cResult[8] === loading) {
          let tmp17;
          if (cResult[9] === onPress) {
            tmp17 = cResult[10];
          }
          if (cResult[11] === tmp4.container) {
            if (cResult[12] === tmp5) {
              if (cResult[13] === tmp14) {
                let tmp21;
                if (cResult[14] === tmp17) {
                  tmp21 = cResult[15];
                }
                return tmp21;
              }
            }
          }
          const obj3 = { style: tmp4.container, children: items };
          items = [tmp5, tmp14, tmp17];
          const tmp24 = metroRequire(React3, obj3);
          cResult[11] = tmp4.container;
          cResult[12] = tmp5;
          cResult[13] = tmp14;
          cResult[14] = tmp17;
          cResult[15] = tmp24;
          tmp21 = tmp24;
        }
      }
      if (isAtLimit) {
        Button = NitroUpsellButtonDefault;
      } else {
        Button = components_Button_Button.Button;
      }
      const obj4 = { size: "sm", text: intl2.string(intl3.t["8x0jKT"]), onPress, loading };
      intl2 = intl3.intl;
      const tmp18Result = hasOwnProperty(Button, obj4);
      cResult[7] = isAtLimit;
      cResult[8] = loading;
      cResult[9] = onPress;
      cResult[10] = tmp18Result;
      tmp17 = tmp18Result;
    }
    const obj5 = { variant: "text-xs/medium", color: "text-default", style: tmp4.text, children: items1 };
    items1 = [tmp11, " \u00B7 ", text];
    const tmp16 = metroRequire(Text_Text.Text, obj5);
    cResult[4] = tmp4.text;
    cResult[5] = text;
    cResult[6] = tmp16;
    tmp14 = tmp16;
  }
  if (isAtLimit) {
    const obj6 = { color: "text-feedback-warning", style: tmp4.icon };
    tmp6Result = hasOwnProperty(WarningIcon.WarningIcon, obj6);
  } else {
    const obj7 = { source: AssetRegistryDefault, style: tmp4.icon };
    tmp6Result = hasOwnProperty(_false, obj7);
  }
  cResult[0] = isAtLimit;
  cResult[1] = tmp4.icon;
  cResult[2] = tmp6Result;
  tmp5 = tmp6Result;
}) : ((isAtLimit) => {
  let Button;
  let intl2;
  let items;
  let items1;
  let loading;
  let onPress;
  let str;
  let text;
  let tmp4Result;
  let tmp9;
  isAtLimit = isAtLimit.isAtLimit;
  ({ text, onPress, loading } = isAtLimit);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  if (isAtLimit) {
    const obj2 = { color: "text-feedback-warning", style: tmp.icon };
    tmp4Result = hasOwnProperty(WarningIcon.WarningIcon, obj2);
    tmp9 = hasOwnProperty;
  } else {
    const obj3 = { source: AssetRegistryDefault, style: tmp.icon };
    tmp4Result = hasOwnProperty(_false, obj3);
    tmp9 = hasOwnProperty;
  }
  items = [tmp4Result, , ];
  const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: items1 };
  const Text = Text_Text.Text;
  const obj5 = { variant: "text-xs/bold", color: "text-brand", children: str.toUpperCase() };
  const Text2 = Text_Text.Text;
  const intl = intl3.intl;
  str = intl.string(intl3.t.oW0eUd);
  items1 = [tmp9(Text2, obj5), " \u00B7 ", text];
  items[1] = metroRequire(Text, obj4);
  if (isAtLimit) {
    Button = NitroUpsellButtonDefault;
  } else {
    Button = components_Button_Button.Button;
  }
  const obj6 = { size: "sm", text: intl2.string(intl3.t["8x0jKT"]), onPress, loading };
  intl2 = intl3.intl;
  items[2] = tmp9(Button, obj6);
  return metroRequire(React3, obj);
});
const result = size.fileFinishedImporting("modules/saved_messages/native/NitroLimitUpsellBar.tsx");

export default tmp4;