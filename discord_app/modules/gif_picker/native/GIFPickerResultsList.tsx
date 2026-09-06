// discord_app/modules/gif_picker/native/GIFPickerResultsList.tsx
import GIFPickerItemView from "GIFPickerItemView.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const GIFPickerItemViewDefault = GIFPickerItemView;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { list: null };
createStyles = { marginHorizontal: -fn(10369).GIF_PICKER_GUTTER_SPACING / 2 };
createStyles.list = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const obj1 = { length: 20 };
let arr = Array.from(obj1);
let closure_7 = arr.map(() => {});
arr = Array.from(obj1);
let closure_8 = arr.map(() => {
  const size = { width: 100, height: Math.floor(91 * Math.random()) + 90 };
  return size;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerResultsList.tsx");

export default function GIFPickerResultsList(columnWidth) {
  columnWidth = columnWidth.columnWidth;
  _require = columnWidth;
  ({ resultItems, onPressGIF } = columnWidth);
  ({ inActionSheet, selectedGifSrc } = columnWidth);
  let callback;
  noop = undefined;
  ({ columns, ListFooterComponent, loading, keyboardDismissMode } = columnWidth);
  if (loading) {
    resultItems = closure_7;
  }
  const items = [columnWidth];
  callback = noop.useCallback((arg0, arg1) => ({ height: c0 / (arg0 / arg1) }), items);
  _require = undefined;
  const callback1 = noop.useCallback((src, arg1) => {
    src = undefined;
    if (src != null) {
      src = src.src;
    }
    if (src == null) {
      src = arg1.toString();
    }
    return src;
  }, []);
  const tmp = closure_6();
  [tmp6, c0] = callback(
    noop.useState(() => new Set()),
    2,
  );
  noop = tmp6;
  const items1 = [tmp6, selectedGifSrc];
  const callback2 = noop.useCallback((changed) => {
    changed = changed.changed;
    _undefined((items) => {
      const set = new Set(items);
      const item = changed.forEach((item) => {
        const index = item.index;
        if (tmp) {
          set.add(index);
        }
      });
      return set;
    });
  }, []);
  const items2 = [onPressGIF, callback];
  const memo = noop.useMemo(() => ({ viewedItemIndexes, selectedGifSrc }), items1);
  const callback3 = noop.useCallback((arg0) => {
    ({ item, index, extraData } = arg0);
    if (null == item) {
      const size = closure_8[index];
      let obj = { height: callback(size.width, size.height).height };
      return jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height: callback(size.width, size.height).height });
    } else {
      const height = callback(item.width, item.height).height;
      viewedItemIndexes = extraData.viewedItemIndexes;
      if (viewedItemIndexes.has(index)) {
        obj = { height, index, item, onPressGIF, selected: null };
        let tmp8;
        if (null != extraData.selectedGifSrc) {
          tmp8 = item.src === extraData.selectedGifSrc;
        }
        obj.selected = tmp8;
        let tmp15Result = tmp15(GIFPickerItemViewDefault, obj);
      } else {
        obj = { height };
        tmp15Result = tmp15(GIFPickerItemView.GIFPickerItemPlaceholder, obj);
      }
      return tmp15Result;
    }
  }, items2);
  const tmp11 = require("../../../../discord_common/js/packages/flash-list/index.js");
  if (inActionSheet) {
    let MasonryFlashList = tmp11.BottomSheetMasonryFlashList;
    let tmp12 = tmp10;
  } else {
    MasonryFlashList = tmp11.MasonryFlashList;
    tmp12 = tmp10;
  }
  const tmp5 = callback(
    noop.useState(() => new Set()),
    2,
  );
  let obj = {
    contentContainerStyle: {
      paddingBottom: onPressGIF(selectedGifSrc[5])({ hasCategories: false }).safeAreaBottomKeyboardAware,
    },
    data: resultItems,
    drawDistance: null,
    extraData: null,
    keyExtractor: null,
    keyboardDismissMode: null,
    keyboardShouldPersistTaps: "always",
    maintainVisibleContentPosition: null,
    numColumns: null,
    ListFooterComponent: null,
    optimizeItemArrangement: true,
    onViewableItemsChanged: null,
    preventNativeModalDismiss: null,
    renderItem: null,
    style: null,
  };
  const isPortalKeyboardInModal = tmp12(selectedGifSrc[8]).useIsPortalKeyboardInModal();
  obj.drawDistance = tmp12(selectedGifSrc[4]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  obj.extraData = memo;
  obj.keyExtractor = callback1;
  obj.keyboardDismissMode = keyboardDismissMode;
  obj.maintainVisibleContentPosition = { disabled: true };
  obj.numColumns = columns;
  obj.ListFooterComponent = ListFooterComponent;
  obj.onViewableItemsChanged = callback2;
  if (inActionSheet) {
    inActionSheet = isPortalKeyboardInModal;
  }
  obj.preventNativeModalDismiss = inActionSheet;
  obj.renderItem = callback3;
  obj.style = tmp.list;
  return (
    <MasonryFlashList
      contentContainerStyle={{
        paddingBottom: onPressGIF(selectedGifSrc[5])({ hasCategories: false }).safeAreaBottomKeyboardAware,
      }}
      data={resultItems}
      drawDistance={null}
      extraData={null}
      keyExtractor={null}
      keyboardDismissMode={null}
      keyboardShouldPersistTaps="always"
      maintainVisibleContentPosition={null}
      numColumns={null}
      ListFooterComponent={null}
      optimizeItemArrangement
      onViewableItemsChanged={null}
      preventNativeModalDismiss={null}
      renderItem={null}
      style={null}
    />
  );
}
