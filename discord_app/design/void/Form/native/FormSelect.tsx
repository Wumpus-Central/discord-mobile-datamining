// === Module 8933: FormSelect ===

// Module 8933 (FormSelect)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import react_native from "react-native" /* 4600 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onChange;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj7;
function extractKey(value) {
  return "" + value.value;
}
({ View: c3, FlatList: closure_4, StyleSheet } = react_native2);
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: obj2, buttonSelected: obj3, label: obj4, labelSelected: { color: nativeDefault.unsafe_rawColors.BRAND_100 } };
obj2 = { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: StyleSheet.hairlineWidth, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
({ color: nativeDefault.unsafe_rawColors.BRAND_100 });
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  let accessibilityRole;
  let accessibilityState;
  let onPress;
  let selected;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(20);
  item = item.item;
  ({ selected, onPress } = item);
  const tmp4 = closure_7();
  if (cResult[0] !== selected) {
    const obj2 = { selected };
    cResult[0] = selected;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = react_native;
  const radioA11yNative = tmpResult.useRadioA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (cResult[2] === item) {
    let tmp7;
    if (cResult[3] === onPress) {
      tmp7 = cResult[4];
    }
    let label = item.descriptiveLabel;
    if (label == null) {
      label = item.label;
    }
    let buttonSelected = null;
    if (selected) {
      buttonSelected = tmp4.buttonSelected;
    }
    if (cResult[5] === tmp4.button) {
      let tmp10;
      let tmp12;
      if (cResult[6] === buttonSelected) {
        tmp10 = cResult[7];
      }
      const tmp11 = selected ? tmp4.labelSelected : tmp4.label;
      if (cResult[8] !== item.label) {
        const str = item.label;
        const formatted = str.toUpperCase();
        cResult[8] = item.label;
        cResult[9] = formatted;
        tmp12 = formatted;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp11) {
        let tmp14;
        if (cResult[11] === tmp12) {
          tmp14 = cResult[12];
        }
        if (cResult[13] === accessibilityRole) {
          if (cResult[14] === accessibilityState) {
            if (cResult[15] === tmp7) {
              if (cResult[16] === label) {
                if (cResult[17] === tmp10) {
                  let tmp17;
                  if (cResult[18] === tmp14) {
                    tmp17 = cResult[19];
                  }
                  return tmp17;
                }
              }
            }
          }
        }
        const obj3 = { accessibilityRole, accessibilityState, accessibilityLabel: label, style: tmp10, onPress: tmp7, children: tmp14 };
        const tmp19 = hasOwnProperty(Pressables.PressableOpacity, obj3);
        cResult[13] = accessibilityRole;
        cResult[14] = accessibilityState;
        cResult[15] = tmp7;
        cResult[16] = label;
        cResult[17] = tmp10;
        cResult[18] = tmp14;
        cResult[19] = tmp19;
        tmp17 = tmp19;
      }
      const obj4 = { variant: "text-sm/semibold", style: tmp11, children: tmp12 };
      const tmp16 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[10] = tmp11;
      cResult[11] = tmp12;
      cResult[12] = tmp16;
      tmp14 = tmp16;
    }
    const items = [tmp4.button, buttonSelected];
    cResult[5] = tmp4.button;
    cResult[6] = buttonSelected;
    cResult[7] = items;
    tmp10 = items;
  }
  const fn = function p() {
    if (onPress != null) {
      tmp(item);
    }
  };
  cResult[2] = item;
  cResult[3] = onPress;
  cResult[4] = fn;
  tmp7 = fn;
}) : ((item) => {
  let Text;
  let accessibilityRole;
  let accessibilityState;
  let items1;
  let label;
  let obj3;
  let onPress;
  let selected;
  let str;
  item = item.item;
  ({ selected, onPress } = item);
  const tmp = closure_7();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  const items = [item, onPress];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const callback = react.useCallback(() => {
    if (onPress != null) {
      tmp(item);
    }
  }, items);
  const obj2 = { accessibilityRole, accessibilityState, accessibilityLabel: label, style: items1, onPress: callback, children: hasOwnProperty(Text, obj3) };
  label = item.descriptiveLabel;
  const PressableOpacity = Pressables.PressableOpacity;
  if (label == null) {
    label = item.label;
  }
  items1 = [tmp.button, ];
  let buttonSelected = null;
  if (selected) {
    buttonSelected = tmp.buttonSelected;
  }
  items1[1] = buttonSelected;
  obj3 = { variant: "text-sm/semibold", style: selected ? tmp.labelSelected : tmp.label, children: str.toUpperCase() };
  str = item.label;
  Text = Text_Text.Text;
  return hasOwnProperty(PressableOpacity, obj2);
});
createStyles = createStyles_mod;
const obj6 = { row: { paddingVertical: 12, paddingHorizontal: 16 }, label: obj7, optionsWrapper: { marginHorizontal: -16, paddingTop: 20, marginTop: -20, paddingBottom: 8, marginBottom: -8 }, optionsContainer: { paddingHorizontal: 12 } };
obj7 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_MUTED };
let closure_9 = createStyles.createStyles(obj6);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onChange) => {
  let items;
  let label;
  let options;
  let value;
  let tmp = require;
  let obj = require("react");
  const cResult = obj.c(17);
  ({ label, options, value } = onChange);
  require = value;
  const tmp2 = onChange;
  onChange = onChange.onChange;
  const onScrollBeginDrag = onChange.onScrollBeginDrag;
  const tmp5 = closure_9();
  if (cResult[0] === onChange) {
    let tmp6;
    if (cResult[1] === value) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === label) {
      let tmp7;
      if (cResult[4] === tmp5.label) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === options) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp5.optionsContainer) {
              if (cResult[10] === tmp5.optionsWrapper) {
                let tmp11;
                if (cResult[11] === value) {
                  tmp11 = cResult[12];
                }
                if (cResult[13] === tmp5.row) {
                  if (cResult[14] === tmp7) {
                    let tmp16;
                    if (cResult[15] === tmp11) {
                      tmp16 = cResult[16];
                    }
                    return tmp16;
                  }
                }
                const obj2 = { style: tmp5.row, children: items };
                items = [tmp7, tmp11];
                const tmp19 = closure_6(closure_3, obj2);
                cResult[13] = tmp5.row;
                cResult[14] = tmp7;
                cResult[15] = tmp11;
                cResult[16] = tmp19;
                tmp16 = tmp19;
              }
            }
          }
        }
      }
      const obj4 = { style: null, contentContainerStyle: null, data: options, extraData: value, keyExtractor: extractKey, renderItem: tmp6, showsHorizontalScrollIndicator: false, horizontal: true, onScrollBeginDrag: tmp4 };
      ({ optionsWrapper: obj3.style, optionsContainer: obj3.contentContainerStyle } = tmp5);
      const tmp15 = closure_5(closure_4, obj4);
      cResult[6] = tmp4;
      cResult[7] = options;
      cResult[8] = tmp6;
      cResult[9] = tmp5.optionsContainer;
      cResult[10] = tmp5.optionsWrapper;
      cResult[11] = value;
      cResult[12] = tmp15;
      tmp11 = tmp15;
    }
    let tmp9 = null != label;
    if (tmp9) {
      const obj7 = { style: tmp5.label, variant: "heading-md/medium", accessibilityRole: "header", children: label.toUpperCase() };
      const Text = tmp(tmp2[9]).Text;
      tmp9 = closure_5(Text, obj7);
    }
    cResult[3] = label;
    cResult[4] = tmp5.label;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const fn = function l(item) {
    const obj = {
      item: item.item,
      selected: item.item.value === require,
      onPress(value) {
        let tmp;
        if (onChange != null) {
          tmp = onChange(value.value);
        }
        return tmp;
      }
    };
    return hasOwnProperty(closure_8, obj);
  };
  cResult[0] = onChange;
  cResult[1] = value;
  cResult[2] = fn;
  tmp6 = fn;
}) : ((onChange) => {
  let items;
  let label;
  let onScrollBeginDrag;
  let options;
  let value;
  ({ label, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  ({ options, onScrollBeginDrag } = onChange);
  let tmp = closure_9();
  let obj = { style: tmp.row, children: items };
  let tmp4 = null != label;
  if (tmp4) {
    const obj2 = { style: tmp.label, variant: "heading-md/medium", accessibilityRole: "header", children: label.toUpperCase() };
    const Text = require("Text/Text").Text;
    tmp4 = closure_5(Text, obj2);
  }
  items = [tmp4, ];
  const obj3 = {
    style: tmp.optionsWrapper,
    contentContainerStyle: tmp.optionsContainer,
    data: options,
    extraData: value,
    keyExtractor: extractKey,
    renderItem(item) {
      const obj = {
        item: item.item,
        selected: item.item.value === require,
        onPress(value) {
          let tmp;
          if (onChange != null) {
            tmp = onChange(value.value);
          }
          return tmp;
        }
      };
      return hasOwnProperty(closure_8, obj);
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    onScrollBeginDrag
  };
  items[1] = closure_5(closure_4, obj3);
  return closure_6(closure_3, obj);
});
const result = size.fileFinishedImporting("design/void/Form/native/FormSelect.tsx");

export default tmp5;