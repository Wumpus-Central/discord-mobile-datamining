// === Module 13726: FormDropdown ===

// Module 13726 (FormDropdown)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9455 */;
import AssetRegistryDefault from "AssetRegistry" /* 9615 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13727 */;
import FormStylesDefault from "FormStyles" /* 13728 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles_mod from "TextStyles" /* 5922 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const Fonts = Constants.Fonts;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: obj2, text: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj3 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
const styles = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault2 };
    const Icon = native.Icon;
    const tmp7 = _false(Icon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault2 };
  const Icon = native.Icon;
  return _false(Icon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let obj3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: obj3, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault };
    obj3 = { transform: items };
    items = [{ rotate: "90deg" }];
    const Icon = native.Icon;
    const tmp7 = _false(Icon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let items;
  let obj2;
  const obj = { style: obj2, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault };
  obj2 = { transform: items };
  items = [{ rotate: "90deg" }];
  const Icon = native.Icon;
  return _false(Icon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let disabled;
  let items;
  let label;
  let leading;
  let onPress;
  let placeholder;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(18);
  ({ disabled, label, leading } = arg0);
  ({ onPress, placeholder } = arg0);
  const tmp4 = styles();
  const tmp6 = FormStylesDefault();
  if (cResult[0] !== disabled) {
    const tmp8 = _false(disabled ? closure_6 : closure_7, {});
    cResult[0] = disabled;
    cResult[1] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp6.dropdownInput) {
    let tmp9;
    if (cResult[3] === tmp4.container) {
      tmp9 = cResult[4];
    }
    const tmp12 = null != label ? tmp4.text : tmp4.placeholder;
    if (cResult[5] === tmp4.content) {
      let tmp13;
      if (cResult[6] === tmp12) {
        tmp13 = cResult[7];
      }
      if (label == null) {
        label = placeholder;
      }
      if (cResult[8] === tmp13) {
        let tmp14;
        if (cResult[9] === label) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === disabled) {
          if (cResult[12] === tmp7) {
            if (cResult[13] === leading) {
              if (cResult[14] === tmp9) {
                if (cResult[15] === onPress) {
                  let tmp17;
                  if (cResult[16] === tmp14) {
                    tmp17 = cResult[17];
                  }
                  return tmp17;
                }
              }
            }
          }
        }
        const obj2 = { style: tmp9, accessibilityRole: "spinbutton", disabled, onPress, children: items };
        items = [leading, tmp14, tmp7];
        const tmp19 = React3(TouchableHitBoxDefault, obj2);
        cResult[11] = disabled;
        cResult[12] = tmp7;
        cResult[13] = leading;
        cResult[14] = tmp9;
        cResult[15] = onPress;
        cResult[16] = tmp14;
        cResult[17] = tmp19;
        tmp17 = tmp19;
      }
      const obj3 = { style: tmp13, children: label };
      const tmp16 = _false(native.LegacyText, obj3);
      cResult[8] = tmp13;
      cResult[9] = label;
      cResult[10] = tmp16;
      tmp14 = tmp16;
    }
    const items1 = [tmp4.content, tmp12];
    cResult[5] = tmp4.content;
    cResult[6] = tmp12;
    cResult[7] = items1;
    tmp13 = items1;
  }
  const items2 = [tmp4.container, tmp6.dropdownInput];
  cResult[2] = tmp6.dropdownInput;
  cResult[3] = tmp4.container;
  cResult[4] = items2;
  tmp9 = items2;
}) : ((arg0) => {
  let disabled;
  let items;
  let items1;
  let label;
  let leading;
  let onPress;
  let placeholder;
  let tmp9;
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const tmp = styles();
  const obj = { style: items, accessibilityRole: "spinbutton", disabled, onPress: tmp9, children: items1 };
  items = [tmp.container, FormStylesDefault().dropdownInput];
  tmp9 = undefined;
  const tmp4 = FormStylesDefault();
  const tmp5Result = _false(disabled ? closure_6 : closure_7, {});
  const tmp2Result = TouchableHitBoxDefault;
  if (!disabled) {
    tmp9 = onPress;
  }
  items1 = [leading, , ];
  const items2 = [tmp.content, ];
  const obj2 = { style: items2, children: label };
  items2[1] = null != label ? tmp.text : tmp.placeholder;
  const LegacyText = native.LegacyText;
  if (label == null) {
    label = placeholder;
  }
  items1[1] = _false(LegacyText, obj2);
  items1[2] = tmp5Result;
  return React3(tmp2Result, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default tmp10;
export const useFormDropdownStyles = styles;