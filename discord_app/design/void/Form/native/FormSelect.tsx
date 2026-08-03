// === Module 7654: OptionButton ===

// Module 7654 (OptionButton)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c3;
let c4;
let c5;
let closure_6;
let require = arg1;
function OptionButton(item) {
  let accessibilityRole;
  let accessibilityState;
  let onPress;
  let selected;
  item = item.item;
  ({ selected, onPress } = item);
  const tmp = createCacheKey();
  let obj = item(onPress[6]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  const items = [item, onPress];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const callback = React.useCallback(() => {
    if (onPress != null) {
      tmp(item);
    }
  }, items);
  obj = { accessibilityRole, accessibilityState, accessibilityLabel: null, style: null, onPress: null, children: null };
  let label = item.descriptiveLabel;
  if (label == null) {
    label = item.label;
  }
  obj[2] = label;
  const items1 = [tmp.button, ];
  let buttonSelected = null;
  if (selected) {
    buttonSelected = tmp.buttonSelected;
  }
  items1[1] = buttonSelected;
  obj[3] = items1;
  obj[4] = callback;
  obj = { variant: "text-sm/semibold", style: selected ? tmp.labelSelected : tmp.label, children: null };
  obj[2] = item.label.toUpperCase();
  obj[5] = closure_5(item(onPress[8]).Text, obj);
  return closure_5(item(onPress[7]).PressableOpacity, obj);
}
function extractKey(value) {
  return "" + value.value;
}
({ View: c3, FlatList: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { button: null, buttonSelected: null, label: null, labelSelected: null };
createCacheKey = { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: StyleSheet.hairlineWidth, shadowColor: require("Themes").colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
const obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[2] = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: require("Themes").colors.TEXT_MUTED };
const obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: require("Themes").colors.TEXT_MUTED };
createCacheKey[3] = { color: require("Themes").unsafe_rawColors.BRAND_100 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { row: { paddingVertical: 12, paddingHorizontal: 16 }, label: null, optionsWrapper: null, optionsContainer: null };
const obj3 = { color: require("Themes").unsafe_rawColors.BRAND_100 };
obj4[1] = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: require("Themes").colors.TEXT_MUTED };
obj4[2] = { marginHorizontal: -16, paddingTop: 20, marginTop: -20, paddingBottom: 8, marginBottom: -8 };
obj4[3] = { paddingHorizontal: 12 };
let closure_9 = createCacheKey.createStyles(obj4);
const obj5 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: require("Themes").colors.TEXT_MUTED };
const result = require("ME").fileFinishedImporting("design/void/Form/native/FormSelect.tsx");

export default function FormSelect(onChange) {
  let label;
  let onScrollBeginDrag;
  let options;
  let value;
  ({ label, value } = onChange);
  const require = value;
  onChange = onChange.onChange;
  ({ options, onScrollBeginDrag } = onChange);
  let tmp = callback2();
  let obj = { style: tmp.row, children: null };
  let tmp4 = null != label;
  if (tmp4) {
    obj = { style: null, variant: "heading-md/medium", accessibilityRole: "header", children: null };
    obj[0] = tmp.label;
    obj[3] = label.toUpperCase();
    tmp4 = callback(require(onChange[8]).Text, obj);
  }
  const items = [tmp4, ];
  obj = {
    style: tmp.optionsWrapper,
    contentContainerStyle: tmp.optionsContainer,
    data: options,
    extraData: value,
    keyExtractor: extractKey,
    renderItem(item) {
      return outer1_5(outer1_8, {
        item: item.item,
        selected: item.item.value === closure_0,
        onPress(value) {
          let tmp;
          if (callback != null) {
            tmp = callback(value.value);
          }
          return tmp;
        }
      });
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    onScrollBeginDrag
  };
  items[1] = callback(closure_4, obj);
  obj[1] = items;
  return closure_6(closure_3, obj);
};