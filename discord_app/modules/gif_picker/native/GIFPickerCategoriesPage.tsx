// discord_app/modules/gif_picker/native/GIFPickerCategoriesPage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastestListPropsPlaceholder from "../../fastest_list/props/FastestListPropsPlaceholder.tsx";
import GIFPickerActionCreators from "../../../actions/GIFPickerActionCreators.tsx";
import gif_picker_GIFPickerUtils from "GIFPickerUtils.tsx";
import GIFPickerCategoryViewDefault from "GIFPickerCategoryView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GIFPickerViewStore from "../../../stores/views/GIFPickerViewStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((height) => {
  let obj = { item: null, placeholder: null };
  obj = {
    height,
    flexDirection: "row",
    gap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
    paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
  };
  obj.item = obj;
  obj = {
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    height: height - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
    borderRadius: nativeDefault.radii.xs,
    flex: 1,
  };
  obj.placeholder = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoriesPage.tsx");

export default noop.memo(function GIFPickerCategoriesPage(columns) {
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
  let tmp6 = closure_7(GIF_PICKER_ITEM_ESIMTATED_HEIGHT);
  closure_4 = tmp6;
  let tmp3Result = tmp3(tmp2[8]);
  let items = [trendingCategories];
  trendingCategories = tmp3Result.useStateFromStoresObject(items, () => ({
    trendingCategories: trendingCategories.getTrendingCategories(),
  })).trendingCategories;
  let items1 = [columns, favoritesCategory, trendingCategories];
  const memo = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
    let bound;
    const items = [...trendingCategories];
    if (null != favoritesCategory) {
      items.unshift(tmp);
    }
    const items1 = [];
    let num = 0;
    if (0 < Math.max(items.length, gif_picker_GIFPickerUtils.DEFAULT_CATEGORY_ROWS)) {
      do {
        let arr = items1.push(items.slice(num, num + columns));
        num = num + columns;
        let _Math = Math;
        bound = Math.max(items.length, gif_picker_GIFPickerUtils.DEFAULT_CATEGORY_ROWS);
      } while (num < bound);
    }
    const obj = { data: items1, sections: null };
    const items2 = [items1.length];
    obj.sections = items2;
    return obj;
  }, items1);
  data = memo.data;
  let items2 = [trendingCategories];
  const effect = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useEffect(() => {
    if (0 === trendingCategories.length) {
      const trending = GIFPickerActionCreators.fetchTrending();
    }
  }, items2);
  const items3 = [columns, data, onSelectCategory, tmp6];
  const callback = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useCallback((arg0, arg1) => {
    const items = [];
    let num = 0;
    if (0 < columns) {
      do {
        let tmp2 = tmp[num];
        if (null != tmp2) {
          let obj = { item: tmp2, onSelectCategory: null };
          obj.onSelectCategory = onSelectCategory;
          let tmp7 = jsx(GIFPickerCategoryViewDefault, { item: tmp2, onSelectCategory: null }, num);
        } else {
          obj = { style: null };
          let items1 = [,];
          ({ item: arr2[0], placeholder: arr2[1] } = closure_4);
          obj.style = items1;
          tmp7 = <View key={num} style={null} />;
        }
        let arr = items.push(tmp7);
        num = num + 1;
      } while (num < columns);
    }
    obj = { style: closure_4.item, collapsable: false, children: items };
    return (
      <View style={closure_4.item} collapsable={false}>
        {items}
      </View>
    );
  }, items3);
  tmp3Result = tmp3(tmp2[11]);
  const items4 = [GIF_PICKER_ITEM_ESIMTATED_HEIGHT, columns, tmp6];
  const isPortalKeyboardInModal = tmp3Result.useIsPortalKeyboardInModal();
  const memo1 = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
    let obj = { sectionItem: null };
    obj = {
      type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
      shape: "rect",
      shapeCount: columns,
      spaceGap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
      borderRadius: closure_4.placeholder.borderRadius,
      colorHex: closure_4.placeholder.backgroundColor,
      height: GIF_PICKER_ITEM_ESIMTATED_HEIGHT - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
      verticalAlignment: "top",
    };
    obj.sectionItem = obj;
    return obj;
  }, items4);
  let obj = {
    estimatedListSize: null,
    inActionSheet: null,
    preventNativeModalDismiss: null,
    insetEnd: null,
    itemSize: null,
    sections: null,
    placeholderConfig: null,
    renderItem: null,
    accessibilityLabel: null,
  };
  const tmp12 = favoritesCategory(tmp2[13]);
  obj.estimatedListSize = tmp3(tmp2[14]).getCustomKeyboardHeight();
  obj.inActionSheet = columns.inActionSheet;
  obj.preventNativeModalDismiss = isPortalKeyboardInModal;
  obj.insetEnd = favoritesCategory(tmp2[7])({ hasCategories: false }).safeAreaBottomKeyboardAware;
  obj.itemSize = GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  obj.sections = memo.sections;
  obj.placeholderConfig = memo1;
  obj.renderItem = callback;
  const intl = tmp3(tmp2[15]).intl;
  obj.accessibilityLabel = intl.string(tmp3(tmp2[15]).t.ffgJrs);
  return data(tmp12, obj);
});
