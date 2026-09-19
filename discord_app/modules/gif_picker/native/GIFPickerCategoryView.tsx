// discord_app/modules/gif_picker/native/GIFPickerCategoryView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useAccessibilityPressDefault from "../../a11y/native/useAccessibilityPress.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import AnalyticsIcon from "../../../design/components/Icon/native/redesign/generated/AnalyticsIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
fn(1074).GIFPickerResultTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 },
  gifImage: null,
  gifOverlay: null,
  categoryName: null,
  categoryNameIcon: null,
};
const obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 };
obj2.gifImage = { borderRadius: nativeDefault.radii.xs, flex: 1 };
let obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.backgroundColor = nativeDefault.unsafe_rawColors.BLACK;
obj5.borderRadius = nativeDefault.radii.xs;
obj5.opacity = 0.6;
obj2.gifOverlay = obj5;
let obj6 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6.margin = nativeDefault.space.PX_8;
obj6.justifyContent = "center";
obj6.flexDirection = "row";
obj6.alignItems = "center";
obj2.categoryName = obj6;
const obj4 = { borderRadius: nativeDefault.radii.xs, flex: 1 };
obj2.categoryNameIcon = { marginRight: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoryView.tsx");

export default function GIFPickerCategoryView(onSelectCategory) {
  onSelectCategory = onSelectCategory.onSelectCategory;
  const item = onSelectCategory.item;
  const tmp = closure_9();
  const items = [onSelectCategory, item];
  const callback = noop.useCallback(() => {
    onSelectCategory(item.type, item.name);
  }, items);
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t["j+63pw"], { categoryName: item.name });
  const obj2 = {
    style: tmp.container,
    onPress: callback,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: formatToPlainStringResult,
  };
  const merged = Object.assign(useAccessibilityPressDefault(callback, formatToPlainStringResult));
  const items1 = [
    React5(FastImageDefault, { style: tmp.gifImage, source: { uri: item.src } }),
    React5(React4, { style: tmp.gifOverlay }),
  ];
  const obj5 = { style: tmp.categoryName, accessible: false, children: null };
  if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
    const obj6 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
    let tmp10Result = React5(AnalyticsIcon.AnalyticsIcon, obj6);
  } else {
    tmp10Result = null;
    if (item.type === tmp12.FAVORITES) {
      const obj7 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
      tmp10Result = React5(StarIcon.StarIcon, obj7);
    }
  }
  const items2 = [
    tmp10Result,
    React5(Text_Text.Text, {
      variant: "text-sm/semibold",
      color: "text-overlay-light",
      maxFontSizeMultiplier: 2,
      accessible: false,
      children: item.name,
    }),
  ];
  obj5.children = items2;
  items1[2] = React6(React4, obj5);
  obj2.children = items1;
  return React6(hasOwnProperty, obj2);
}
