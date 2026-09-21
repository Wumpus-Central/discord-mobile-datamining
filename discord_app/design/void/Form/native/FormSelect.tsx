// === Module 8882: FormSelect ===

// Module 8882 (FormSelect)
import nativeDefault from "native" /* 576 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4474 */;
import Text_Text from "Text/Text" /* 4752 */;
import Pressables from "Pressables" /* 5339 */;
import noop from "module_19" /* 19 */;

require = fn;
function OptionButton(item) {
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
}
function extractKey(value) {
  return "" + value.value;
}
get_ActivityIndicator = fn(17);
({ View: c3, FlatList: closure_4, StyleSheet } = get_ActivityIndicator);
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(4756);
let obj2 = { button: { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: StyleSheet.hairlineWidth, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, buttonSelected: null, label: null, labelSelected: null };
let obj3 = { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: StyleSheet.hairlineWidth, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.buttonSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
const obj5 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
obj2.labelSelected = { color: nativeDefault.unsafe_rawColors.BRAND_100 };
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(4756);
const obj8 = { row: { paddingVertical: 12, paddingHorizontal: 16 }, label: null, optionsWrapper: null, optionsContainer: null };
const obj6 = { color: nativeDefault.unsafe_rawColors.BRAND_100 };
obj8.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_MUTED };
obj8.optionsWrapper = { marginHorizontal: -16, paddingTop: 20, marginTop: -20, paddingBottom: 8, marginBottom: -8 };
obj8.optionsContainer = { paddingHorizontal: 12 };
let closure_9 = createStyles.createStyles(obj8);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSelect.tsx");

export default function FormSelect(onChange) {
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
        return hasOwnProperty(OptionButton, {
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
};