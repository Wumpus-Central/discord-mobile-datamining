// discord_app/design/void/Form/native/FormSelect.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { Fonts } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

let require = fn;
function OptionButton(item) {
  item = item.item;
  ({ selected, onPress } = item);
  const tmp = callback2();
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
  obj = { variant: "text-sm/semibold", style: selected ? tmp.labelSelected : tmp.label, children: str.toUpperCase() };
  obj[5] = callback(item(onPress[8]).Text, obj);
  return callback(item(onPress[7]).PressableOpacity, obj);
}
function extractKey(value) {
  return "" + value.value;
}
({ View: c3, FlatList: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let createCacheKey = { minWidth: 95, height: 36, margin: 4, borderRadius: 3, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderWidth: StyleSheet.hairlineWidth, shadowColor: ThemesDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[2] = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[3] = { color: ThemesDefault.unsafe_rawColors.BRAND_100 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj4 = { row: { paddingVertical: 12, paddingHorizontal: 16 }, label: null, optionsWrapper: null, optionsContainer: null };
obj4[1] = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: ThemesDefault.colors.TEXT_MUTED };
obj4[2] = { marginHorizontal: -16, paddingTop: 20, marginTop: -20, paddingBottom: 8, marginBottom: -8 };
obj4[3] = { paddingHorizontal: 12 };
let closure_9 = createCacheKey.createStyles(obj4);
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormSelect.tsx");

export default function FormSelect(onChange) {
  ({ label, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  ({ options, onScrollBeginDrag } = onChange);
  let tmp = callback3();
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
      return closure_1_5(OptionButton, {
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
  return callback2(closure_3, obj);
};