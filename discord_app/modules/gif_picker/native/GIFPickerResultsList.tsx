// === Module 10102: GIFPickerResultsList ===

// Module 10102 (GIFPickerResultsList)
import c from "c" /* 576 */;
import GIFPickerItemView from "GIFPickerItemView" /* 10103 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const GIFPickerItemViewDefault = GIFPickerItemView;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { list: { marginHorizontal: -fn(10093).GIF_PICKER_GUTTER_SPACING / 2 } };
let closure_6 = createStyles.createStyles(obj2);
let obj4 = { length: 20 };
let obj3 = { marginHorizontal: -fn(10093).GIF_PICKER_GUTTER_SPACING / 2 };
let closure_7 = Array.from(obj4).map(() => {

});
const arr = Array.from(obj4);
const dependencyMap2 = Array.from(obj4).map(() => {
  const size = { width: 100, height: Math.floor(91 * Math.random()) + 90 };
  return size;
});
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return new Set();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  [tmp4, require] = noop.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(changed) {
      changed = changed.changed;
      _require((items) => {
        const set = new Set(items);
        const item = changed.forEach((item) => {
          const index = item.index;
          if (tmp) {
            set.add(index);
          }
          tmp = null !== index && item.isViewable;
        });
        return set;
      });
    };
    cResult[1] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { viewedItemIndexes: tmp4, onViewableItemsChanged: tmp5 };
    cResult[2] = tmp4;
    cResult[3] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (() => {
  let tmp = _slicedToArray(noop.useState(() => new Set()), 2);
  closure_0 = tmp[1];
  return {
    viewedItemIndexes: tmp[0],
    onViewableItemsChanged: noop.useCallback((changed) => {
      changed = changed.changed;
      closure_0((items) => {
        const set = new Set(items);
        const item = changed.forEach((item) => {
          const index = item.index;
          if (tmp) {
            set.add(index);
          }
          tmp = null !== index && item.isViewable;
        });
        return set;
      });
    }, [])
  };
});
ReactCompilerGating = fn(558);
const arr2 = Array.from(obj4);
let size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerResultsList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((loading) => {
  const cResult = columnWidth(576).c(25);
  ({ columns, columnWidth } = loading);
  ({ resultItems, onPressGIF } = loading);
  ({ inActionSheet, ListFooterComponent, selectedGifSrc, keyboardDismissMode } = loading);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { hasCategories: false };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const safeAreaBottomKeyboardAware = onPressGIF(10086)(first).safeAreaBottomKeyboardAware;
  if (loading.loading) {
    resultItems = closure_7;
  }
  if (cResult[1] !== columnWidth) {
    class P {
      constructor(arg0, arg1) {
        obj = { height: columnWidth / (loading / arg1) };
        return obj;
      }
    }
    cResult[1] = columnWidth;
    cResult[2] = P;
  } else {
    class P {
      constructor(arg0, arg1) {
        obj = { height: columnWidth / (loading / arg1) };
        return obj;
      }
    }
  }
  dependencyMap = P;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0, arg1) {
        src = undefined;
        if (loading != null) {
          src = loading.src;
        }
        if (src == null) {
          tmp2 = arg1;
          src = arg1.toString();
        }
        return src;
      }
    }
    cResult[3] = M;
  } else {
    class M {
      constructor(arg0, arg1) {
        src = undefined;
        if (loading != null) {
          src = loading.src;
        }
        if (src == null) {
          tmp2 = arg1;
          src = arg1.toString();
        }
        return src;
      }
    }
  }
  let obj = columnWidth(576);
  ({ viewedItemIndexes, onViewableItemsChanged } = closure_9());
  if (cResult[4] === selectedGifSrc) {
    class M {
      constructor(arg0, arg1) {
        src = undefined;
        if (loading != null) {
          src = loading.src;
        }
        if (src == null) {
          tmp2 = arg1;
          src = arg1.toString();
        }
        return src;
      }
    }
    if (cResult[7] === P) {
      class M {
        constructor(arg0, arg1) {
          src = undefined;
          if (loading != null) {
            src = loading.src;
          }
          if (src == null) {
            tmp2 = arg1;
            src = arg1.toString();
          }
          return src;
        }
      }
      columnWidth(8371);
      class V {
        constructor(arg0) {
          ({ item, index, extraData } = loading);
          if (null == item) {
            tmp9 = closure_8;
            size = closure_8[index];
            tmp10 = closure_2;
            tmp11 = jsx;
            tmp12 = closure_0;
            tmp13 = closure_2;
            obj1 = { height: null };
            obj1.height = closure_2(size.width, size.height).height;
            return jsx(closure_0(closure_2[8]).GIFPickerItemPlaceholder, obj1);
          } else {
            tmp14 = closure_2;
            height = closure_2(item.width, item.height).height;
            viewedItemIndexes = extraData.viewedItemIndexes;
            tmp15 = jsx;
            if (viewedItemIndexes.has(index)) {
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj4 = { height: null, index: null, item: null, onPressGIF: null, selected: null };
              obj4.height = height;
              obj4.index = index;
              obj4.item = item;
              tmp7 = onPressGIF;
              obj4.onPressGIF = onPressGIF;
              tmp8 = undefined;
              tmp6 = closure_1(closure_2[8]);
              if (null != extraData.selectedGifSrc) {
                tmp8 = item.src === extraData.selectedGifSrc;
              }
              obj4.selected = tmp8;
              tmp15Result = tmp15(tmp6, obj4);
            } else {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = { height: null };
              obj.height = height;
              tmp15Result = tmp15(closure_0(closure_2[8]).GIFPickerItemPlaceholder, obj);
            }
            return tmp15Result;
          }
        }
      }
      const isPortalKeyboardInModal = columnWidth(9926).useIsPortalKeyboardInModal();
      if (cResult[10] !== safeAreaBottomKeyboardAware) {
        class M {
          constructor(arg0, arg1) {
            src = undefined;
            if (loading != null) {
              src = loading.src;
            }
            if (src == null) {
              tmp2 = arg1;
              src = arg1.toString();
            }
            return src;
          }
        }
        tmp15[0] = safeAreaBottomKeyboardAware;
        class V {
          constructor(arg0) {
            ({ item, index, extraData } = loading);
            if (null == item) {
              tmp9 = closure_8;
              size = closure_8[index];
              tmp10 = closure_2;
              tmp11 = jsx;
              tmp12 = closure_0;
              tmp13 = closure_2;
              obj1 = { height: null };
              obj1.height = closure_2(size.width, size.height).height;
              return jsx(closure_0(closure_2[8]).GIFPickerItemPlaceholder, obj1);
            } else {
              tmp14 = closure_2;
              height = closure_2(item.width, item.height).height;
              viewedItemIndexes = extraData.viewedItemIndexes;
              tmp15 = jsx;
              if (viewedItemIndexes.has(index)) {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj4 = { height: null, index: null, item: null, onPressGIF: null, selected: null };
                obj4.height = height;
                obj4.index = index;
                obj4.item = item;
                tmp7 = onPressGIF;
                obj4.onPressGIF = onPressGIF;
                tmp8 = undefined;
                tmp6 = closure_1(closure_2[8]);
                if (null != extraData.selectedGifSrc) {
                  tmp8 = item.src === extraData.selectedGifSrc;
                }
                obj4.selected = tmp8;
                tmp15Result = tmp15(tmp6, obj4);
              } else {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = { height: null };
                obj.height = height;
                tmp15Result = tmp15(closure_0(closure_2[8]).GIFPickerItemPlaceholder, obj);
              }
              return tmp15Result;
            }
          }
        }
        cResult[10] = safeAreaBottomKeyboardAware;
        cResult[11] = tmp15;
      } else {
        class M {
          constructor(arg0, arg1) {
            src = undefined;
            if (loading != null) {
              src = loading.src;
            }
            if (src == null) {
              tmp2 = arg1;
              src = arg1.toString();
            }
            return src;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0, arg1) {
            src = undefined;
            if (loading != null) {
              src = loading.src;
            }
            if (src == null) {
              tmp2 = arg1;
              src = arg1.toString();
            }
            return src;
          }
        }
        class V {
          constructor(arg0) {
            ({ item, index, extraData } = loading);
            if (null == item) {
              tmp9 = closure_8;
              size = closure_8[index];
              tmp10 = closure_2;
              tmp11 = jsx;
              tmp12 = closure_0;
              tmp13 = closure_2;
              obj1 = { height: null };
              obj1.height = closure_2(size.width, size.height).height;
              return jsx(closure_0(closure_2[8]).GIFPickerItemPlaceholder, obj1);
            } else {
              tmp14 = closure_2;
              height = closure_2(item.width, item.height).height;
              viewedItemIndexes = extraData.viewedItemIndexes;
              tmp15 = jsx;
              if (viewedItemIndexes.has(index)) {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj4 = { height: null, index: null, item: null, onPressGIF: null, selected: null };
                obj4.height = height;
                obj4.index = index;
                obj4.item = item;
                tmp7 = onPressGIF;
                obj4.onPressGIF = onPressGIF;
                tmp8 = undefined;
                tmp6 = closure_1(closure_2[8]);
                if (null != extraData.selectedGifSrc) {
                  tmp8 = item.src === extraData.selectedGifSrc;
                }
                obj4.selected = tmp8;
                tmp15Result = tmp15(tmp6, obj4);
              } else {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = { height: null };
                obj.height = height;
                tmp15Result = tmp15(closure_0(closure_2[8]).GIFPickerItemPlaceholder, obj);
              }
              return tmp15Result;
            }
          }
        }
      } else {
        class M {
          constructor(arg0, arg1) {
            src = undefined;
            if (loading != null) {
              src = loading.src;
            }
            if (src == null) {
              tmp2 = arg1;
              src = arg1.toString();
            }
            return src;
          }
        }
      }
      if (inActionSheet) {
        class M {
          constructor(arg0, arg1) {
            src = undefined;
            if (loading != null) {
              src = loading.src;
            }
            if (src == null) {
              tmp2 = arg1;
              src = arg1.toString();
            }
            return src;
          }
        }
      }
      if (cResult[13] === tmp12) {
        class M {
          constructor(arg0, arg1) {
            src = undefined;
            if (loading != null) {
              src = loading.src;
            }
            if (src == null) {
              tmp2 = arg1;
              src = arg1.toString();
            }
            return src;
          }
        }
      }
      let obj3 = { contentContainerStyle: tmp15, data: resultItems, drawDistance: columnWidth(10093).GIF_PICKER_ITEM_ESIMTATED_HEIGHT, extraData: tmp9, keyExtractor: M, keyboardDismissMode, keyboardShouldPersistTaps: "always", maintainVisibleContentPosition: tmp17, numColumns: columns, ListFooterComponent, optimizeItemArrangement: true, onViewableItemsChanged, preventNativeModalDismiss: inActionSheet, renderItem: V, style: tmp4.list };
      const tmp20 = <tmp12 contentContainerStyle={tmp15} data={resultItems} drawDistance={columnWidth(10093).GIF_PICKER_ITEM_ESIMTATED_HEIGHT} extraData={tmp9} keyExtractor={M} keyboardDismissMode={keyboardDismissMode} keyboardShouldPersistTaps="always" maintainVisibleContentPosition={tmp17} numColumns={columns} ListFooterComponent={ListFooterComponent} optimizeItemArrangement onViewableItemsChanged={onViewableItemsChanged} preventNativeModalDismiss={inActionSheet} renderItem={V} style={tmp4.list} />;
      cResult[13] = tmp12;
      cResult[14] = ListFooterComponent;
      cResult[15] = columns;
      cResult[16] = resultItems;
      cResult[17] = tmp9;
      cResult[18] = keyboardDismissMode;
      cResult[19] = onViewableItemsChanged;
      cResult[20] = V;
      cResult[21] = tmp4.list;
      cResult[22] = tmp15;
      cResult[23] = inActionSheet;
      cResult[24] = tmp20;
      const tmpResult2 = columnWidth(9926);
    }
    class V {
      constructor(arg0) {
        ({ item, index, extraData } = loading);
        if (null == item) {
          tmp9 = closure_8;
          size = closure_8[index];
          tmp10 = closure_2;
          tmp11 = jsx;
          tmp12 = closure_0;
          tmp13 = closure_2;
          obj1 = { height: null };
          obj1.height = closure_2(size.width, size.height).height;
          return jsx(closure_0(closure_2[8]).GIFPickerItemPlaceholder, obj1);
        } else {
          tmp14 = closure_2;
          height = closure_2(item.width, item.height).height;
          viewedItemIndexes = extraData.viewedItemIndexes;
          tmp15 = jsx;
          if (viewedItemIndexes.has(index)) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj4 = { height: null, index: null, item: null, onPressGIF: null, selected: null };
            obj4.height = height;
            obj4.index = index;
            obj4.item = item;
            tmp7 = onPressGIF;
            obj4.onPressGIF = onPressGIF;
            tmp8 = undefined;
            tmp6 = closure_1(closure_2[8]);
            if (null != extraData.selectedGifSrc) {
              tmp8 = item.src === extraData.selectedGifSrc;
            }
            obj4.selected = tmp8;
            tmp15Result = tmp15(tmp6, obj4);
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = { height: null };
            obj.height = height;
            tmp15Result = tmp15(closure_0(closure_2[8]).GIFPickerItemPlaceholder, obj);
          }
          return tmp15Result;
        }
      }
    }
    cResult[7] = P;
    cResult[8] = onPressGIF;
    cResult[9] = V;
  }
  const obj4 = { viewedItemIndexes, selectedGifSrc };
  cResult[4] = selectedGifSrc;
  cResult[5] = viewedItemIndexes;
  cResult[6] = obj4;
  let tmp8 = closure_9();
}) : ((columnWidth) => {
  columnWidth = columnWidth.columnWidth;
  ({ resultItems, onPressGIF } = columnWidth);
  ({ inActionSheet, selectedGifSrc } = columnWidth);
  let callback;
  let viewedItemIndexes;
  ({ columns, ListFooterComponent, loading, keyboardDismissMode } = columnWidth);
  if (loading) {
    resultItems = closure_7;
  }
  const items = [columnWidth];
  callback = viewedItemIndexes.useCallback((arg0, arg1) => ({ height: columnWidth / (arg0 / arg1) }), items);
  const callback1 = viewedItemIndexes.useCallback((src, arg1) => {
    src = undefined;
    if (src != null) {
      src = src.src;
    }
    if (src == null) {
      src = arg1.toString();
    }
    return src;
  }, []);
  const tmp5 = closure_9();
  viewedItemIndexes = tmp5.viewedItemIndexes;
  const items1 = [viewedItemIndexes, selectedGifSrc];
  const items2 = [onPressGIF, callback];
  const memo = viewedItemIndexes.useMemo(() => ({ viewedItemIndexes, selectedGifSrc }), items1);
  const callback2 = viewedItemIndexes.useCallback((arg0) => {
    ({ item, index, extraData } = arg0);
    if (null == item) {
      const size = closure_8[index];
      const obj2 = { height: callback(size.width, size.height).height };
      return jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height: callback(size.width, size.height).height });
    } else {
      const height = callback(item.width, item.height).height;
      viewedItemIndexes = extraData.viewedItemIndexes;
      if (viewedItemIndexes.has(index)) {
        const obj3 = { height, index, item, onPressGIF, selected: null };
        let tmp8;
        if (null != extraData.selectedGifSrc) {
          tmp8 = item.src === extraData.selectedGifSrc;
        }
        obj3.selected = tmp8;
        let tmp15Result = jsx(GIFPickerItemViewDefault, { height, index, item, onPressGIF, selected: null });
      } else {
        const obj = { height };
        tmp15Result = jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height });
      }
      return tmp15Result;
    }
  }, items2);
  const tmp9 = columnWidth(selectedGifSrc[9]);
  if (inActionSheet) {
    let MasonryFlashList = tmp9.BottomSheetMasonryFlashList;
    let tmp10 = tmp8;
  } else {
    MasonryFlashList = tmp9.MasonryFlashList;
    tmp10 = tmp8;
  }
  const tmp = closure_6();
  let obj = { contentContainerStyle: { paddingBottom: onPressGIF(selectedGifSrc[7])({ hasCategories: false }).safeAreaBottomKeyboardAware }, data: resultItems, drawDistance: null, extraData: null, keyExtractor: null, keyboardDismissMode: null, keyboardShouldPersistTaps: "always", maintainVisibleContentPosition: null, numColumns: null, ListFooterComponent: null, optimizeItemArrangement: true, onViewableItemsChanged: null, preventNativeModalDismiss: null, renderItem: null, style: null };
  const isPortalKeyboardInModal = tmp10(selectedGifSrc[10]).useIsPortalKeyboardInModal();
  obj.drawDistance = tmp10(selectedGifSrc[4]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  obj.extraData = memo;
  obj.keyExtractor = callback1;
  obj.keyboardDismissMode = keyboardDismissMode;
  obj.maintainVisibleContentPosition = { disabled: true };
  obj.numColumns = columns;
  obj.ListFooterComponent = ListFooterComponent;
  obj.onViewableItemsChanged = tmp5.onViewableItemsChanged;
  if (inActionSheet) {
    inActionSheet = isPortalKeyboardInModal;
  }
  obj.preventNativeModalDismiss = inActionSheet;
  obj.renderItem = callback2;
  obj.style = tmp.list;
  return <MasonryFlashList contentContainerStyle={{ paddingBottom: onPressGIF(selectedGifSrc[7])({ hasCategories: false }).safeAreaBottomKeyboardAware }} data={resultItems} drawDistance={null} extraData={null} keyExtractor={null} keyboardDismissMode={null} keyboardShouldPersistTaps="always" maintainVisibleContentPosition={null} numColumns={null} ListFooterComponent={null} optimizeItemArrangement onViewableItemsChanged={null} preventNativeModalDismiss={null} renderItem={null} style={null} />;
});