// === Module 9770: GIFPickerResultsList ===

// Module 9770 (GIFPickerResultsList)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { list: null };
createCacheKey = { marginHorizontal: -require("transformFavoriteGifUrl").GIF_PICKER_GUTTER_SPACING / 2 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { length: 20 };
let arr = Array.from(obj1);
let closure_7 = arr.map(() => {

});
arr = Array.from(obj1);
let closure_8 = arr.map(() => ({ width: 100, height: Math.floor(91 * Math.random()) + 90 }));
const result = require("jsxProd").fileFinishedImporting("modules/gif_picker/native/GIFPickerResultsList.tsx");

export default function GIFPickerResultsList(columnWidth) {
  let ListFooterComponent;
  let c0;
  let columns;
  let inActionSheet;
  let keyboardDismissMode;
  let loading;
  let onPressGIF;
  let resultItems;
  let selectedGifSrc;
  let tmp6;
  columnWidth = columnWidth.columnWidth;
  let _require = columnWidth;
  ({ resultItems, onPressGIF } = columnWidth);
  ({ inActionSheet, selectedGifSrc } = columnWidth);
  let callback;
  let React;
  ({ columns, ListFooterComponent, loading, keyboardDismissMode } = columnWidth);
  if (loading) {
    resultItems = closure_7;
  }
  const items = [columnWidth];
  callback = React.useCallback((arg0, arg1) => ({ height: c0 / (arg0 / arg1) }), items);
  _require = undefined;
  const callback1 = React.useCallback((src) => {
    src = undefined;
    if (src != null) {
      src = src.src;
    }
    if (src == null) {
      src = arg1.toString();
    }
    return src;
  }, []);
  const tmp = createCacheKey();
  [tmp6, c0] = callback(React.useState(() => new Set()), 2);
  React = tmp6;
  const items1 = [tmp6, selectedGifSrc];
  const callback2 = React.useCallback((changed) => {
    changed = changed.changed;
    changed((items) => {
      const set = new Set(items);
      const item = set.forEach((index) => {
        index = index.index;
        if (tmp) {
          set.add(index);
        }
      });
      return set;
    });
  }, []);
  const items2 = [onPressGIF, callback];
  const memo = React.useMemo(() => ({ viewedItemIndexes: c4, selectedGifSrc }), items1);
  const callback3 = React.useCallback((arg0) => {
    let extraData;
    let index;
    let item;
    ({ item, index, extraData } = arg0);
    if (null == item) {
      const size = outer1_8[index];
      let obj = { height: null };
      obj[0] = callback(size.width, size.height).height;
      return outer1_5(_undefined(selectedGifSrc[6]).GIFPickerItemPlaceholder, obj);
    } else {
      const height = callback(item.width, item.height).height;
      const viewedItemIndexes = extraData.viewedItemIndexes;
      if (viewedItemIndexes.has(index)) {
        obj = { height: null, index: null, item: null, onPressGIF: null, selected: null };
        obj[0] = height;
        obj[1] = index;
        obj[2] = item;
        obj[3] = onPressGIF;
        let tmp8;
        if (null != extraData.selectedGifSrc) {
          tmp8 = item.src === extraData.selectedGifSrc;
        }
        obj[4] = tmp8;
        let tmp15Result = tmp15(onPressGIF(selectedGifSrc[6]), obj);
        const tmp6 = onPressGIF(selectedGifSrc[6]);
      } else {
        obj = { height: null };
        obj[0] = height;
        tmp15Result = tmp15(_undefined(selectedGifSrc[6]).GIFPickerItemPlaceholder, obj);
      }
      return tmp15Result;
    }
  }, items2);
  const tmp11 = _require(selectedGifSrc[7]);
  if (inActionSheet) {
    let MasonryFlashList = tmp11.BottomSheetMasonryFlashList;
    let tmp12 = tmp10;
  } else {
    MasonryFlashList = tmp11.MasonryFlashList;
    tmp12 = tmp10;
  }
  const tmp5 = callback(React.useState(() => new Set()), 2);
  let obj = { contentContainerStyle: { paddingBottom: onPressGIF(selectedGifSrc[5])({ hasCategories: false }).safeAreaBottomKeyboardAware }, data: resultItems, drawDistance: null, extraData: null, keyExtractor: null, keyboardDismissMode: null, keyboardShouldPersistTaps: "always", maintainVisibleContentPosition: null, numColumns: null, ListFooterComponent: null, optimizeItemArrangement: true, onViewableItemsChanged: null, preventNativeModalDismiss: null, renderItem: null, style: null };
  const isPortalKeyboardInModal = tmp12(selectedGifSrc[8]).useIsPortalKeyboardInModal();
  obj[2] = tmp12(selectedGifSrc[4]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  obj[3] = memo;
  obj[4] = callback1;
  obj[5] = keyboardDismissMode;
  obj[7] = { disabled: true };
  obj[8] = columns;
  obj[9] = ListFooterComponent;
  obj[11] = callback2;
  if (inActionSheet) {
    inActionSheet = isPortalKeyboardInModal;
  }
  obj[12] = inActionSheet;
  obj[13] = callback3;
  obj[14] = tmp.list;
  return <MasonryFlashList contentContainerStyle={{ paddingBottom: onPressGIF(selectedGifSrc[5])({ hasCategories: false }).safeAreaBottomKeyboardAware }} data={resultItems} drawDistance={null} extraData={null} keyExtractor={null} keyboardDismissMode={null} keyboardShouldPersistTaps="always" maintainVisibleContentPosition={null} numColumns={null} ListFooterComponent={null} optimizeItemArrangement onViewableItemsChanged={null} preventNativeModalDismiss={null} renderItem={null} style={null} />;
};