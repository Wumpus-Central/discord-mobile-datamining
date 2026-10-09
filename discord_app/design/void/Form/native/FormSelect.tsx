// === Module 8572: FormSelect ===

// Module 8572 (FormSelect)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4793 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import noop from "module_19" /* 19 */;

require = fn;
function extractKey(value) {
  return "" + value.value;
}
get_ActivityIndicator = fn(17);
({ View: c3, FlatList: closure_4, StyleSheet } = get_ActivityIndicator);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(5091);
let obj2 = { button: { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: StyleSheet.hairlineWidth, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, buttonSelected: null, label: null, labelSelected: null };
let obj3 = { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: StyleSheet.hairlineWidth, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.buttonSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
const obj5 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
obj2.labelSelected = { color: nativeDefault.unsafe_rawColors.BRAND_100 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function OptionButton(item) {
  const cResult = c.c(20);
  item = item.item;
  ({ selected, onPress } = item);
  const tmp4 = closure_7();
  if (cResult[0] !== selected) {
    const obj2 = { selected };
    cResult[0] = selected;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (cResult[2] === item) {
    if (cResult[3] === onPress) {
      let tmp7 = cResult[4];
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
      if (cResult[6] === buttonSelected) {
        let tmp10 = cResult[7];
      }
      const tmp11 = selected ? tmp4.labelSelected : tmp4.label;
      if (cResult[8] !== item.label) {
        const formatted = item.label.toUpperCase();
        cResult[8] = item.label;
        cResult[9] = formatted;
        let tmp12 = formatted;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp11) {
        if (cResult[11] === tmp12) {
          let tmp14 = cResult[12];
        }
        if (cResult[13] === accessibilityRole) {
          if (cResult[14] === accessibilityState) {
            if (cResult[15] === tmp7) {
              if (cResult[16] === label) {
                if (cResult[17] === tmp10) {
                  if (cResult[18] === tmp14) {
                    let tmp17 = cResult[19];
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
  const tmpResult = useA11yRolesNative;
}) : (function OptionButton(item) {
  item = item.item;
  ({ selected, onPress } = item);
  const tmp = closure_7();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  const items = [item, onPress];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const callback = noop.useCallback(() => {
    if (onPress != null) {
      tmp(item);
    }
  }, items);
  const obj2 = { accessibilityRole, accessibilityState, accessibilityLabel: null, style: null, onPress: null, children: null };
  let label = item.descriptiveLabel;
  if (label == null) {
    label = item.label;
  }
  obj2.accessibilityLabel = label;
  const items1 = [tmp.button, ];
  let buttonSelected = null;
  if (selected) {
    buttonSelected = tmp.buttonSelected;
  }
  items1[1] = buttonSelected;
  obj2.style = items1;
  obj2.onPress = callback;
  const obj3 = { variant: "text-sm/semibold", style: selected ? tmp.labelSelected : tmp.label, children: item.label.toUpperCase() };
  obj2.children = hasOwnProperty(Text_Text.Text, obj3);
  return hasOwnProperty(Pressables.PressableOpacity, obj2);
});
createStyles = fn(5091);
const obj9 = { row: { paddingVertical: 12, paddingHorizontal: 16 }, label: null, optionsWrapper: null, optionsContainer: null };
const obj6 = { color: nativeDefault.unsafe_rawColors.BRAND_100 };
obj9.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_MUTED };
obj9.optionsWrapper = { marginHorizontal: -16, paddingTop: 20, marginTop: -20, paddingBottom: 8, marginBottom: -8 };
obj9.optionsContainer = { paddingHorizontal: 12 };
let closure_9 = createStyles.createStyles(obj9);
ReactCompilerGating = fn(558);
const obj10 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_MUTED };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSelect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormSelect(onChange) {
  const cResult = require("c").c(17);
  ({ label, options, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  const onScrollBeginDrag = onChange.onScrollBeginDrag;
  const tmp5 = closure_9();
  if (cResult[0] === onChange) {
    if (cResult[1] === value) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === label) {
      if (cResult[4] === tmp5.label) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === options) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp5.optionsContainer) {
              if (cResult[10] === tmp5.optionsWrapper) {
                if (cResult[11] === value) {
                  let tmp11 = cResult[12];
                }
                if (cResult[13] === tmp5.row) {
                  if (cResult[14] === tmp7) {
                    if (cResult[15] === tmp11) {
                      let tmp16 = cResult[16];
                    }
                    return tmp16;
                  }
                }
                const obj2 = { style: tmp5.row, children: null };
                const items = [tmp7, tmp11];
                obj2.children = items;
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
      const obj4 = { style: null, contentContainerStyle: null, data: null, extraData: null, keyExtractor: null, renderItem: null, showsHorizontalScrollIndicator: false, horizontal: true, onScrollBeginDrag: null };
      ({ optionsWrapper: obj3.style, optionsContainer: obj3.contentContainerStyle } = tmp5);
      obj4.data = options;
      obj4.extraData = value;
      obj4.keyExtractor = extractKey;
      obj4.renderItem = tmp6;
      obj4.onScrollBeginDrag = tmp4;
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
      tmp9 = closure_5(tmp(tmp2[9]).Text, obj7);
    }
    cResult[3] = label;
    cResult[4] = tmp5.label;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  function renderItem(item) {
    return hasOwnProperty(closure_8, {
      item: item.item,
      selected: item.item.value === value,
      onPress(value) {
        let tmp;
        if (onChange != null) {
          tmp = onChange(value.value);
        }
        return tmp;
      }
    });
  }
  cResult[0] = onChange;
  cResult[1] = value;
  cResult[2] = renderItem;
  tmp6 = renderItem;
  const obj = require("c");
  tmp = require;
  tmp2 = onChange;
}) : (function FormSelect(onChange) {
  ({ label, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  ({ options, onScrollBeginDrag } = onChange);
  let tmp = closure_9();
  const obj = { style: tmp.row, children: null };
  let tmp4 = null != label;
  if (tmp4) {
    const obj2 = { style: tmp.label, variant: "heading-md/medium", accessibilityRole: "header", children: label.toUpperCase() };
    tmp4 = closure_5(require("Text/Text").Text, obj2);
  }
  const items = [
    tmp4,
    closure_5(closure_4, {
      style: tmp.optionsWrapper,
      contentContainerStyle: tmp.optionsContainer,
      data: options,
      extraData: value,
      keyExtractor: extractKey,
      renderItem(item) {
        return hasOwnProperty(closure_8, {
          item: item.item,
          selected: item.item.value === value,
          onPress(value) {
            let tmp;
            if (onChange != null) {
              tmp = onChange(value.value);
            }
            return tmp;
          }
        });
      },
      showsHorizontalScrollIndicator: false,
      horizontal: true,
      onScrollBeginDrag
    })
  ];
  obj.children = items;
  return closure_6(closure_3, obj);
});