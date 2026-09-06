// === Module 8604: FormSelect ===

// Module 8604 (FormSelect)
import nativeDefault from "native" /* 576 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import noop from "module_19" /* 19 */;

require = fn;
function OptionButton(item) {
  item = item.item;
  ({ selected, onPress } = item);
  const tmp = closure_7();
  let obj = useA11yRolesNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  const items = [item, onPress];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const callback = noop.useCallback(() => {
    if (onPress != null) {
      tmp(item);
    }
  }, items);
  obj = { accessibilityRole, accessibilityState, accessibilityLabel: null, style: null, onPress: null, children: null };
  let label = item.descriptiveLabel;
  if (label == null) {
    label = item.label;
  }
  obj.accessibilityLabel = label;
  const items1 = [tmp.button, ];
  let buttonSelected = null;
  if (selected) {
    buttonSelected = tmp.buttonSelected;
  }
  items1[1] = buttonSelected;
  obj.style = items1;
  obj.onPress = callback;
  obj = { variant: "text-sm/semibold", style: selected ? tmp.labelSelected : tmp.label, children: item.label.toUpperCase() };
  obj.children = hasOwnProperty(Text_Text.Text, obj);
  return hasOwnProperty(Pressables.PressableOpacity, obj);
}
function extractKey(value) {
  return "" + value.value;
}
get_ActivityIndicator = fn(17);
({ View: c3, FlatList: closure_4, StyleSheet } = get_ActivityIndicator);
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { button: null, buttonSelected: null, label: null, labelSelected: null };
createStyles = { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: StyleSheet.hairlineWidth, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.button = createStyles;
createStyles.buttonSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
const obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
createStyles.labelSelected = { color: nativeDefault.unsafe_rawColors.BRAND_100 };
let closure_7 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
const obj4 = { row: { paddingVertical: 12, paddingHorizontal: 16 }, label: null, optionsWrapper: null, optionsContainer: null };
const obj3 = { color: nativeDefault.unsafe_rawColors.BRAND_100 };
obj4.label = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_MUTED };
obj4.optionsWrapper = { marginHorizontal: -16, paddingTop: 20, marginTop: -20, paddingBottom: 8, marginBottom: -8 };
obj4.optionsContainer = { paddingHorizontal: 12 };
let closure_9 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSelect.tsx");

export default function FormSelect(onChange) {
  ({ label, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  ({ options, onScrollBeginDrag } = onChange);
  let tmp = closure_9();
  let obj = { style: tmp.row, children: null };
  let tmp4 = null != label;
  if (tmp4) {
    obj = { style: tmp.label, variant: "heading-md/medium", accessibilityRole: "header", children: label.toUpperCase() };
    tmp4 = closure_5(require("Text/Text").Text, obj);
  }
  const items = [tmp4, ];
  obj = {
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
  };
  items[1] = closure_5(closure_4, obj);
  obj.children = items;
  return closure_6(closure_3, obj);
};