// discord_app/modules/gif_picker/native/GIFPickerCategoryView.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ StyleSheet, View: c4, TouchableOpacity: c5 } = get_ActivityIndicator);
require("ME").GIFPickerResultTypes;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, gifImage: null, gifOverlay: null, categoryName: null, categoryNameIcon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.xs, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.radii.xs, flex: 1 };
const obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundColor = ThemesDefault.unsafe_rawColors.BLACK;
obj2.borderRadius = ThemesDefault.radii.xs;
obj2.opacity = 0.6;
createCacheKey[2] = obj2;
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.margin = ThemesDefault.space.PX_8;
obj3.justifyContent = "center";
obj3.flexDirection = "row";
obj3.alignItems = "center";
createCacheKey[3] = obj3;
const obj1 = { borderRadius: ThemesDefault.radii.xs, flex: 1 };
createCacheKey[4] = { marginRight: ThemesDefault.space.PX_4 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginRight: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoryView.tsx");

export default function GIFPickerCategoryView(onSelectCategory) {
  onSelectCategory = onSelectCategory.onSelectCategory;
  const item = onSelectCategory.item;
  const tmp = callback2();
  const items = [onSelectCategory, item];
  const callback = React.useCallback(() => {
    onSelectCategory(item.type, item.name);
  }, items);
  const intl = onSelectCategory(1236).intl;
  let obj = { categoryName: item.name };
  const formatToPlainStringResult = intl.formatToPlainString(onSelectCategory(1236).t["j+63pw"], obj);
  obj = { style: tmp.container, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult };
  const merged = Object.assign(item(9659)(callback, formatToPlainStringResult));
  obj = { style: tmp.gifImage, source: obj1 };
  const items1 = [callback(item(5458), obj), callback(closure_4, { style: tmp.gifOverlay }), ];
  const obj3 = { style: tmp.categoryName, accessible: false, children: null };
  if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
    const obj4 = { size: "sm", style: null, color: null };
    obj4[1] = tmp.categoryNameIcon;
    obj4[2] = tmp6(712).colors.WHITE;
    let tmp10Result = tmp10(tmp3(10313).AnalyticsIcon, obj4);
  } else {
    tmp10Result = null;
    if (item.type === tmp12.FAVORITES) {
      const obj5 = { size: "sm", style: null, color: null };
      obj5[1] = tmp.categoryNameIcon;
      obj5[2] = tmp6(712).colors.WHITE;
      tmp10Result = tmp10(tmp3(9119).StarIcon, obj5);
    }
  }
  const items2 = [tmp10Result, callback(onSelectCategory(4442).Text, { variant: "text-sm/semibold", color: "text-overlay-light", maxFontSizeMultiplier: 2, accessible: false, children: item.name })];
  obj3[2] = items2;
  items1[2] = closure_8(closure_4, obj3);
  obj.children = items1;
  return closure_8(closure_5, obj);
};