// === Module 10382: ? ===

// Module 10382
import ThemesDefault from "Themes" /* 576 */;
import transformFavoriteGifUrl from "transformFavoriteGifUrl" /* 10369 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "getFormatFromUrl" /* 10365 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
let c3 = importAllResult;
let closure_7 = createCacheKey.createStyles((height) => {
  let obj = { item: null, placeholder: null };
  obj = { height, flexDirection: "row", gap: transformFavoriteGifUrl.GIF_PICKER_GUTTER_SPACING, paddingBottom: transformFavoriteGifUrl.GIF_PICKER_GUTTER_SPACING };
  obj[0] = obj;
  obj = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: height - transformFavoriteGifUrl.GIF_PICKER_GUTTER_SPACING, borderRadius: ThemesDefault.radii.xs, flex: 1 };
  obj[1] = obj;
  return obj;
});
const memoResult = importAllResult.memo(function GIFPickerCategoriesPage(columns) {
  columns = columns.columns;
  const favoritesCategory = columns.favoritesCategory;
  const onSelectCategory = columns.onSelectCategory;
  let GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  closure_4 = undefined;
  let trendingCategories;
  let data;
  if (columns > 2) {
    GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
    let tmp3 = columns;
    let tmp2 = onSelectCategory;
  } else {
    tmp2 = onSelectCategory;
    GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT / 2;
    tmp3 = columns;
  }
  let tmp6 = callback(GIF_PICKER_ITEM_ESIMTATED_HEIGHT);
  closure_4 = tmp6;
  let tmp3Result = tmp3(tmp2[8]);
  let items = [trendingCategories];
  trendingCategories = tmp3Result.useStateFromStoresObject(items, () => ({ trendingCategories: trendingCategories.getTrendingCategories() })).trendingCategories;
  let items1 = [columns, favoritesCategory, trendingCategories];
  const memo = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
    let bound;
    const items = [...trendingCategories];
    if (null != favoritesCategory) {
      items.unshift(tmp);
    }
    data = [];
    let num = 0;
    if (0 < Math.max(items.length, columns(onSelectCategory[5]).DEFAULT_CATEGORY_ROWS)) {
      do {
        let tmp3 = columns;
        let arr = data.push(items.slice(num, num + columns));
        num = num + columns;
        let _Math = Math;
        let tmp5 = columns;
        let tmp6 = onSelectCategory;
        bound = Math.max(items.length, columns(onSelectCategory[5]).DEFAULT_CATEGORY_ROWS);
      } while (num < bound);
    }
    const sections = [data.length];
    return { data, sections };
  }, items1);
  data = memo.data;
  const items2 = [trendingCategories];
  const effect = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useEffect(() => {
    if (0 === trendingCategories.length) {
      const trending = columns(onSelectCategory[9]).fetchTrending();
      const obj = columns(onSelectCategory[9]);
    }
  }, items2);
  const items3 = [columns, data, onSelectCategory, tmp6];
  callback = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useCallback((arg0, arg1) => {
    const items = [];
    let num = 0;
    if (0 < columns) {
      do {
        let tmp2 = tmp[num];
        let tmp3 = num;
        if (null != tmp2) {
          let tmp8 = data;
          let tmp9 = favoritesCategory;
          let tmp10 = onSelectCategory;
          let obj = { item: null, onSelectCategory: null };
          obj[0] = tmp2;
          let tmp11 = onSelectCategory;
          obj[1] = onSelectCategory;
          let tmp7 = data(favoritesCategory(onSelectCategory[10]), obj, num);
        } else {
          let tmp4 = data;
          let tmp5 = closure_4;
          obj = { style: null };
          let tmp6 = closure_4;
          let items1 = [, ];
          ({ item: arr2[0], placeholder: arr2[1] } = closure_4);
          obj[0] = items1;
          tmp7 = data(closure_4, obj, num);
        }
        let arr = items.push(tmp7);
        num = num + 1;
        let tmp13 = columns;
      } while (num < columns);
    }
    obj = { style: closure_4.item, collapsable: false, children: items };
    return data(closure_4, obj);
  }, items3);
  tmp3Result = tmp3(tmp2[11]);
  const items4 = [GIF_PICKER_ITEM_ESIMTATED_HEIGHT, columns, tmp6];
  const isPortalKeyboardInModal = tmp3Result.useIsPortalKeyboardInModal();
  const memo1 = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
    let obj = { sectionItem: null };
    obj = { type: columns(onSelectCategory[12]).FastestListPropsPlaceholderType.SHAPE, shape: "rect", shapeCount: columns, spaceGap: columns(onSelectCategory[5]).GIF_PICKER_GUTTER_SPACING, borderRadius: closure_4.placeholder.borderRadius, colorHex: closure_4.placeholder.backgroundColor, height: GIF_PICKER_ITEM_ESIMTATED_HEIGHT - columns(onSelectCategory[5]).GIF_PICKER_GUTTER_SPACING, verticalAlignment: "top" };
    obj[0] = obj;
    return obj;
  }, items4);
  let obj = { estimatedListSize: null, inActionSheet: null, preventNativeModalDismiss: null, insetEnd: null, itemSize: null, sections: null, placeholderConfig: null, renderItem: null, accessibilityLabel: null };
  const tmp12 = favoritesCategory(tmp2[13]);
  obj[0] = tmp3(tmp2[14]).getCustomKeyboardHeight();
  obj[1] = columns.inActionSheet;
  obj[2] = isPortalKeyboardInModal;
  obj[3] = favoritesCategory(tmp2[7])({ hasCategories: false }).safeAreaBottomKeyboardAware;
  obj[4] = GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  obj[5] = memo.sections;
  obj[6] = memo1;
  obj[7] = callback;
  const intl = tmp3(tmp2[15]).intl;
  obj[8] = intl.string(tmp3(tmp2[15]).t.ffgJrs);
  return data(tmp12, obj);
});
const result = require("set").fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoriesPage.tsx");

export default memoResult;