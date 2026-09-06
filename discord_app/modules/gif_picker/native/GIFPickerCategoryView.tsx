// === Module 10383: GIFPickerCategoryView ===

// Module 10383 (GIFPickerCategoryView)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import useAccessibilityPressDefault from "useAccessibilityPress" /* 9759 */;
import StarIcon from "StarIcon" /* 10235 */;
import AnalyticsIcon from "AnalyticsIcon" /* 10384 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
fn(1074).GIFPickerResultTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, gifImage: null, gifOverlay: null, categoryName: null, categoryNameIcon: null };
createStyles = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 };
createStyles.container = createStyles;
createStyles.gifImage = { borderRadius: nativeDefault.radii.xs, flex: 1 };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundColor = nativeDefault.unsafe_rawColors.BLACK;
obj2.borderRadius = nativeDefault.radii.xs;
obj2.opacity = 0.6;
createStyles.gifOverlay = obj2;
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.margin = nativeDefault.space.PX_8;
obj3.justifyContent = "center";
obj3.flexDirection = "row";
obj3.alignItems = "center";
createStyles.categoryName = obj3;
const obj1 = { borderRadius: nativeDefault.radii.xs, flex: 1 };
createStyles.categoryNameIcon = { marginRight: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(createStyles);
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
  let obj = { categoryName: item.name };
  const formatToPlainStringResult = intl.formatToPlainString(util.t["j+63pw"], obj);
  obj = { style: tmp.container, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult };
  const merged = Object.assign(useAccessibilityPressDefault(callback, formatToPlainStringResult));
  obj = { style: tmp.gifImage, source: { uri: item.src } };
  const items1 = [React5(FastImageDefault, obj), React5(React4, { style: tmp.gifOverlay }), ];
  const obj2 = { style: tmp.categoryName, accessible: false, children: null };
  if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
    const obj3 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
    let tmp10Result = React5(AnalyticsIcon.AnalyticsIcon, obj3);
  } else {
    tmp10Result = null;
    if (item.type === tmp12.FAVORITES) {
      const obj4 = { size: "sm", style: tmp.categoryNameIcon, color: nativeDefault.colors.WHITE };
      tmp10Result = React5(StarIcon.StarIcon, obj4);
    }
  }
  const items2 = [tmp10Result, React5(Text_Text.Text, { variant: "text-sm/semibold", color: "text-overlay-light", maxFontSizeMultiplier: 2, accessible: false, children: item.name })];
  obj2.children = items2;
  items1[2] = React6(React4, obj2);
  obj.children = items1;
  return React6(hasOwnProperty, obj);
};