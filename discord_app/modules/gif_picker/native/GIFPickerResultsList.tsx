// === Module 10115: GIFPickerResultsList ===

// Module 10115 (GIFPickerResultsList)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 10106 */;
import GIFPickerItemView from "GIFPickerItemView" /* 10116 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GIFPickerItemViewDefault = GIFPickerItemView;
let obj1, set, src, tmp11, tmp12, tmp13, tmp14, tmp15, tmp7;

let obj2;
const jsx = Fragment.jsx;
let obj = { list: obj2 };
obj2 = { marginHorizontal: -gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING / 2 };
let closure_6 = createStyles.createStyles(obj);
const obj3 = { length: 20 };
const arr = Array.from(obj3);
let closure_7 = arr.map(() => {

});
const arr2 = Array.from(obj3);
let closure_8 = arr2.map(() => {
  size = { width: 100, height: Math.floor(91 * Math.random()) + 90 };
  return size;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_129_0;
  let first;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      set = new Set();
      return set;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [tmp4, closure_129_0] = react.useState(first);
  _slicedToArray(react.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(changed) {
      changed = changed.changed;
      let tmp = closure_1_0((items) => {
        set = new Set(items);
        const item = changed.forEach((item) => {
          const index = item.index;
          const tmp = null !== index && item.isViewable;
          if (tmp) {
            set.add(index);
          }
        });
        return set;
      });
    };
    cResult[1] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { viewedItemIndexes: tmp4, onViewableItemsChanged: tmp5 };
    cResult[2] = tmp4;
    cResult[3] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (() => {
  let tmp = _slicedToArray(react.useState(() => {
    set = new Set();
    return set;
  }), 2);
  let closure_0 = tmp[1];
  const obj = {
    viewedItemIndexes: tmp[0],
    onViewableItemsChanged: react.useCallback((changed) => {
      changed = changed.changed;
      let tmp = closure_0((items) => {
        set = new Set(items);
        const item = changed.forEach((item) => {
          const index = item.index;
          const tmp = null !== index && item.isViewable;
          if (tmp) {
            set.add(index);
          }
        });
        return set;
      });
    }, [])
  };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((loading) => {
  let ListFooterComponent;
  let columnWidth;
  let columns;
  let first;
  let inActionSheet;
  let keyboardDismissMode;
  let onPressGIF;
  let onViewableItemsChanged;
  let resultItems;
  let selectedGifSrc;
  let tmp6;
  let viewedItemIndexes;
  const obj = columnWidth(P[6]);
  const cResult = obj.c(25);
  ({ columns, columnWidth } = loading);
  ({ resultItems, onPressGIF } = loading);
  ({ inActionSheet, ListFooterComponent, selectedGifSrc, keyboardDismissMode } = loading);
  loading = loading.loading;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { hasCategories: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const safeAreaBottomKeyboardAware = onPressGIF(tmp2[7])(first).safeAreaBottomKeyboardAware;
  if (loading) {
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
    tmp6 = P;
  } else {
    class P {
      constructor(arg0, arg1) {
        obj = { height: columnWidth / (loading / arg1) };
        return obj;
      }
    }
  }
  P = tmp6;
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
  let tmp8 = closure_9();
  ({ viewedItemIndexes, onViewableItemsChanged } = tmp8);
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
    if (cResult[7] === tmp6) {
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
      columnWidth(P[9]);
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
      const tmpResult2 = columnWidth(P[10]);
      const isPortalKeyboardInModal = tmpResult2.useIsPortalKeyboardInModal();
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
      const tmp20 = <tmp12 contentContainerStyle={tmp15} data={resultItems} drawDistance={columnWidth(P[4]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT} extraData={tmp9} keyExtractor={M} keyboardDismissMode={keyboardDismissMode} keyboardShouldPersistTaps="always" maintainVisibleContentPosition={tmp17} numColumns={columns} ListFooterComponent={ListFooterComponent} optimizeItemArrangement onViewableItemsChanged={onViewableItemsChanged} preventNativeModalDismiss={inActionSheet} renderItem={V} style={tmp4.list} />;
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
    cResult[7] = tmp6;
    cResult[8] = onPressGIF;
    cResult[9] = V;
  }
  const obj4 = { viewedItemIndexes, selectedGifSrc };
  cResult[4] = selectedGifSrc;
  cResult[5] = viewedItemIndexes;
  cResult[6] = obj4;
}) : ((columnWidth) => {
  let ListFooterComponent;
  let columns;
  let inActionSheet;
  let keyboardDismissMode;
  let loading;
  let onPressGIF;
  let resultItems;
  let selectedGifSrc;
  let tmp10;
  columnWidth = columnWidth.columnWidth;
  ({ resultItems, onPressGIF } = columnWidth);
  ({ inActionSheet, selectedGifSrc } = columnWidth);
  let callback;
  let viewedItemIndexes;
  ({ columns, ListFooterComponent, loading, keyboardDismissMode } = columnWidth);
  const tmp = closure_6();
  const safeAreaBottomKeyboardAware = onPressGIF(selectedGifSrc[7])({ hasCategories: false }).safeAreaBottomKeyboardAware;
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
  const onViewableItemsChanged = tmp5.onViewableItemsChanged;
  const items2 = [onPressGIF, callback];
  const memo = viewedItemIndexes.useMemo(() => ({ viewedItemIndexes, selectedGifSrc }), items1);
  let tmp8 = columnWidth;
  const callback2 = viewedItemIndexes.useCallback((arg0) => {
    let extraData;
    let index;
    let item;
    ({ item, index, extraData } = arg0);
    if (null == item) {
      size = closure_8[index];
      return jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height: callback(size.width, size.height).height });
    } else {
      let tmp15Result;
      const height = callback(item.width, item.height).height;
      viewedItemIndexes = extraData.viewedItemIndexes;
      if (viewedItemIndexes.has(index)) {
        let tmp8;
        GIFPickerItemViewDefault;
        if (null != extraData.selectedGifSrc) {
          tmp8 = item.src === extraData.selectedGifSrc;
        }
        tmp15Result = <tmp6 height={height} index={index} item={item} onPressGIF={onPressGIF} selected={tmp8} />;
      } else {
        tmp15Result = jsx(GIFPickerItemView.GIFPickerItemPlaceholder, { height });
      }
      return tmp15Result;
    }
  }, items2);
  const tmp9 = columnWidth(selectedGifSrc[9]);
  if (inActionSheet) {
    let MasonryFlashList = tmp9.BottomSheetMasonryFlashList;
    tmp10 = tmp8;
  } else {
    MasonryFlashList = tmp9.MasonryFlashList;
    tmp10 = tmp8;
  }
  const tmp10Result = tmp10(selectedGifSrc[10]);
  const isPortalKeyboardInModal = tmp10Result.useIsPortalKeyboardInModal();
  if (inActionSheet) {
    inActionSheet = isPortalKeyboardInModal;
  }
  return <MasonryFlashList contentContainerStyle={{ paddingBottom: safeAreaBottomKeyboardAware }} data={resultItems} drawDistance={tmp10(selectedGifSrc[4]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT} extraData={memo} keyExtractor={callback1} keyboardDismissMode={keyboardDismissMode} keyboardShouldPersistTaps="always" maintainVisibleContentPosition={{ disabled: true }} numColumns={columns} ListFooterComponent={ListFooterComponent} optimizeItemArrangement onViewableItemsChanged={onViewableItemsChanged} preventNativeModalDismiss={inActionSheet} renderItem={callback2} style={tmp.list} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerResultsList.tsx");

export default tmp2;