// === Module 6341: RecyclerView ===

// Module 6341 (RecyclerView)
import ErrorMessages from "ErrorMessages" /* 6339 */;
import react_native from "react-native" /* 6379 */;
import WarningMessages from "WarningMessages" /* 6382 */;
import react_native2 from "react-native" /* 6392 */;
import StickyHeaders from "StickyHeaders" /* 6395 */;
import ScrollAnchor2 from "ScrollAnchor" /* 6397 */;
import _slicedToArray from "_slicedToArray" /* 6342 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 6348 */;
import react_mod from "react" /* 19 */;
import react_native3 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let map, set, size;

let c10;
let c9;
let closure_12;
let closure_14;
let forwardRef;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let closure_2 = ["horizontal", "renderItem", "data", "extraData", "onLoad", "CellRendererComponent", "overrideProps", "refreshing", "onRefresh", "progressViewOffset", "ListEmptyComponent", "ListHeaderComponent", "ListHeaderComponentStyle", "ListFooterComponent", "ListFooterComponentStyle", "ItemSeparatorComponent", "renderScrollComponent", "style", "stickyHeaderIndices", "maintainVisibleContentPosition", "onCommitLayoutEffect", "onChangeStickyIndex", "stickyHeaderConfig", "inverted"];
let react = react_mod;
({ useCallback: hasOwnProperty, useLayoutEffect: metroRequire, useMemo: metroImportDefault, useRef: metroImportAll, useState: c9, useId: c10, forwardRef } = react);
react = react_mod;
({ Animated: unpackModuleId, I18nManager: closure_12 } = react_native3);
({ jsx: map1, jsxs: closure_14 } = Fragment);
class RecyclerViewComponent {
  constructor(horizontal, arg1) {
    let CellRendererComponent;
    let CompatScrollView;
    let CompatView;
    let ItemSeparatorComponent;
    let ListEmptyComponent;
    let ListFooterComponent;
    let ListFooterComponentStyle;
    let ListHeaderComponent;
    let ListHeaderComponentStyle;
    let closure_23;
    let closure_29;
    let closure_31;
    let closure_6;
    let computeFirstVisibleIndexForOffsetCorrection;
    let first;
    let handlerMethods;
    let inverted;
    let items10;
    let items8;
    let items9;
    let obj8;
    let onChangeStickyIndex;
    let onLoad;
    let onRefresh;
    let overrideProps;
    let progressViewOffset;
    let refreshControl;
    let refreshing;
    let renderEmpty;
    let renderFooter;
    let renderHeader;
    let renderScrollComponent;
    let renderStickyHeaderBackdrop;
    let stickyHeaderConfig;
    let stickyHeaderIndices;
    let style;
    let tmp16;
    horizontal = horizontal.horizontal;
    const renderItem = horizontal.renderItem;
    const data = horizontal.data;
    const extraData = horizontal.extraData;
    ({ overrideProps, refreshing, onRefresh, progressViewOffset, ListEmptyComponent, ListHeaderComponent, ListHeaderComponentStyle, ListFooterComponent, ListFooterComponentStyle, renderScrollComponent, stickyHeaderIndices } = horizontal);
    const maintainVisibleContentPosition = horizontal.maintainVisibleContentPosition;
    ({ onCommitLayoutEffect: closure_6, onChangeStickyIndex } = horizontal);
    ({ stickyHeaderConfig, inverted } = horizontal);
    ({ onLoad, CellRendererComponent, ItemSeparatorComponent, style } = horizontal);
    let tmp = stickyHeaderIndices(horizontal, data);
    let tmp2 = first;
    let tmp3 = extraData;
    first = extraData(first(() => {
      const renderTimeTracker = new horizontal(renderItem[5]).RenderTimeTracker();
      return renderTimeTracker;
    }), 1)[0];
    first.startTracking();
    let num;
    if (stickyHeaderConfig != null) {
      num = stickyHeaderConfig.offset;
    }
    if (num == null) {
      num = 0;
    }
    let flag;
    if (stickyHeaderConfig != null) {
      flag = stickyHeaderConfig.useNativeDriver;
    }
    if (flag == null) {
      flag = true;
    }
    let flag2;
    if (stickyHeaderConfig != null) {
      flag2 = stickyHeaderConfig.hideRelatedCell;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    let num2;
    if (stickyHeaderConfig != null) {
      num2 = stickyHeaderConfig.zIndex;
    }
    if (num2 == null) {
      num2 = 2;
    }
    let invertedTransformStyle;
    if (inverted) {
      let tmp7 = renderItem;
      let obj2 = horizontal(renderItem[6]);
      invertedTransformStyle = obj2.getInvertedTransformStyle(horizontal);
    }
    const tmp8 = inverted(null);
    let closure_14 = tmp8;
    const tmp9 = inverted(null);
    let ref = tmp9;
    const ref2 = inverted(null);
    const ref3 = inverted(undefined);
    set = new Set();
    let current = inverted(set).current;
    const value = new flag.Value(0);
    let current2 = inverted(value).current;
    const stickyHeaderRef = inverted(null);
    const tmp12 = inverted(null);
    const scrollAnchorRef = tmp12;
    let obj3 = horizontal(renderItem[7]);
    [r10087, tmp16] = tmp3(obj3.useLayoutState(0), 2);
    let closure_22 = tmp16;
    tmp3(obj3.useLayoutState(0), 2);
    [r10091, closure_23] = tmp3(tmp2(0), 2);
    tmp3(tmp2(0), 2);
    const tmp3Result4 = tmp3(tmp2(-1), 2);
    const first1 = tmp3Result4[0];
    let closure_25 = tmp3Result4[1];
    const tmp21 = onChangeStickyIndex(() => {
      map = new Map();
      return map;
    }, []);
    let closure_26 = tmp21;
    let obj4 = horizontal(renderItem[8]);
    const recyclerViewManager1 = obj4.useRecyclerViewManager(horizontal);
    const recyclerViewManager = recyclerViewManager1.recyclerViewManager;
    const velocityTracker = recyclerViewManager1.velocityTracker;
    const obj5 = horizontal(renderItem[9]);
    const recyclerViewController = obj5.useRecyclerViewController(recyclerViewManager, arg1, tmp8, tmp12);
    ({ applyOffsetCorrection: closure_29, computeFirstVisibleIndexForOffsetCorrection } = recyclerViewController);
    ({ applyInitialScrollIndex: closure_31, handlerMethods } = recyclerViewController);
    const tmp24 = inverted(null);
    const ref4 = tmp24;
    const obj6 = horizontal(renderItem[10]);
    const onListLoad = obj6.useOnListLoad(recyclerViewManager, onLoad);
    const obj7 = horizontal(renderItem[11]);
    const checkBounds = obj7.useBoundDetection(recyclerViewManager, tmp8).checkBounds;
    let closure_35 = tmp26;
    closure_6(() => {
      if (ref.current) {
        if (ref2.current) {
          const obj = react_native;
          size = obj.measureParentSize(ref.current);
          const obj2 = react_native;
          const size2 = obj2.measureFirstChildLayout(tmp2.current, ref.current);
          ref3.current = size;
          const tmp7 = horizontal ? size2.x : size2.y;
          const size1 = { width: horizontal ? size.width : size2.width, height: horizontal ? size2.height : size.height };
          let diff = tmp7;
          const updateLayoutParams = recyclerViewManager.updateLayoutParams;
          if (closure_35) {
            diff = tmp7;
            if (recyclerViewManager.hasLayout()) {
              diff = tmp7 - recyclerViewManager.getChildContainerDimensions().width;
            }
          }
          updateLayoutParams(size1, diff);
        }
      }
    });
    closure_6(() => {
      if (current.size <= 0) {
        const _Array = Array;
        const arr = Array.from(closure_26, (arg0) => {
          let obj2;
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          const obj = { index: tmp, dimensions: obj2.measureItemLayout(tmp2.current, recyclerViewManager.tryGetLayout(tmp)) };
          obj2 = horizontal(renderItem[12]);
          return obj;
        });
        const result = first.hasExceededMaxRendersWithoutCommit();
        if (result) {
          const _console = console;
          console.warn(WarningMessages.WarningMessages.exceededMaxRendersWithoutCommit);
        }
        num = undefined;
        const modifyChildrenLayout = recyclerViewManager.modifyChildrenLayout;
        if (data != null) {
          num = data.length;
        }
        if (num == null) {
          num = 0;
        }
        if (modifyChildrenLayout(arr, num)) {
          if (!result) {
            closure_23((arg0) => arg0 + 1);
          }
          const tmp11 = horizontal && recyclerViewManager.hasLayout() && recyclerViewManager.getWindowSize().height > 0;
          if (tmp11) {
            if (recyclerViewContext != null) {
              result1 = recyclerViewContext.unmarkChildLayoutAsPending(closure_38);
            }
          }
        }
        current = ref4.current;
        if (current != null) {
          current.commitLayout();
        }
        closure_29();
      }
    });
    let items = [checkBounds, computeFirstVisibleIndexForOffsetCorrection, horizontal, flag2.isRTL && horizontal, recyclerViewManager, velocityTracker];
    const tmp29 = maintainVisibleContentPosition((nativeEvent) => {
      if (!recyclerViewManager.ignoreScrollEvents) {
        let tmp = nativeEvent;
        const contentOffset = nativeEvent.nativeEvent.contentOffset;
        const tmp3 = horizontal ? contentOffset.x : contentOffset.y;
        horizontal = tmp3;
        let tmp5 = tmp3;
        const tmp2 = horizontal;
        if (closure_35) {
          const obj2 = horizontal(renderItem[14]);
          const adjustOffsetForRTLResult = obj2.adjustOffsetForRTL(tmp3, nativeEvent.nativeEvent.contentSize.width, nativeEvent.nativeEvent.layoutMeasurement.width);
          horizontal = adjustOffsetForRTLResult;
          tmp5 = adjustOffsetForRTLResult;
        }
        const computeVelocity = velocityTracker.computeVelocity;
        const _Boolean = Boolean;
        const absoluteLastScrollOffset = recyclerViewManager.getAbsoluteLastScrollOffset();
        const velocity = computeVelocity(tmp5, absoluteLastScrollOffset, Boolean(tmp2), (arg0, arg1) => {
          if (!recyclerViewManager.ignoreScrollEvents) {
            const tmp = arg1;
            if (tmp) {
              computeFirstVisibleIndexForOffsetCorrection();
              if (recyclerViewManager.isOffsetProjectionEnabled) {
                recyclerViewManager.resetVelocityCompute();
              }
            }
            if (recyclerViewManager.updateScrollOffset(horizontal, arg0)) {
              closure_23((arg0) => arg0 + 1);
            }
          }
        });
        current = stickyHeaderRef.current;
        if (current != null) {
          current.reportScrollEvent(nativeEvent.nativeEvent);
        }
        checkBounds();
        if (recyclerViewManager.isInitialScrollComplete) {
          recyclerViewManager.recordInteraction();
        }
        const itemViewability = recyclerViewManager.computeItemViewability();
        const props = recyclerViewManager.props;
        const onScroll = props.onScroll;
        if (onScroll != null) {
          onScroll(nativeEvent);
        }
      }
    }, items);
    const listener = tmp29;
    const tmp13Result = horizontal(renderItem[15]);
    const recyclerViewContext = tmp13Result.useRecyclerViewContext();
    const tmp30 = num();
    let closure_38 = tmp30;
    const items1 = [handlerMethods, recyclerViewContext, current, recyclerViewManager.isDisposed, tmp16];
    const tmp20Result = onChangeStickyIndex(() => {
      let isDisposed;
      return {
        layout() {
          closure_1_22((arg0) => arg0 + 1);
        },
        getRef() {
          let tmp = null;
          if (!isDisposed.isDisposed) {
            tmp = handlerMethods;
          }
          return tmp;
        },
        getParentRef() {
          ref = undefined;
          if (recyclerViewContext != null) {
            ref = recyclerViewContext.getRef();
          }
          if (ref == null) {
            ref = null;
          }
          return ref;
        },
        getParentScrollViewRef() {
          let scrollViewRef;
          if (recyclerViewContext != null) {
            scrollViewRef = recyclerViewContext.getScrollViewRef();
          }
          if (scrollViewRef == null) {
            scrollViewRef = null;
          }
          return scrollViewRef;
        },
        getScrollViewRef() {
          return ref.current;
        },
        markChildLayoutAsPending(arg0) {
          set.add(arg0);
        },
        unmarkChildLayoutAsPending(arg0) {
          if (set.has(arg0)) {
            set.delete(arg0);
            closure_1_39.layout();
          }
        }
      };
    }, items1);
    let closure_39 = tmp20Result;
    const items2 = [tmp20Result, recyclerViewManager];
    const tmp32 = maintainVisibleContentPosition((arg0, width) => {
      size = recyclerViewManager.getLayout(arg0);
      num = size.maxWidth;
      const _Math = Math;
      const _Math2 = Math;
      width = size.width;
      if (num == null) {
        num = Infinity;
      }
      num2 = size.minWidth;
      const minResult = min(width, num);
      if (num2 == null) {
        num2 = 0;
      }
      let num3 = size.maxHeight;
      const _Math3 = Math;
      const max2 = Math.max;
      const _Math4 = Math;
      const min2 = Math.min;
      const height = size.height;
      const maxResult = max(minResult, num2);
      if (num3 == null) {
        num3 = Infinity;
      }
      let num4 = size.minHeight;
      const min2Result = min2(height, num3);
      if (num4 == null) {
        num4 = 0;
      }
      const max2Result = max2(min2Result, num4);
      const obj = react_native;
      let result = obj.areDimensionsNotEqual(maxResult, width.width);
      if (!result) {
        const tmp5Result = react_native;
        result = tmp5Result.areDimensionsNotEqual(max2Result, width.height);
      }
      if (result) {
        closure_39.layout();
      }
    }, items2);
    const tmp13Result2 = horizontal(renderItem[16]);
    const secondaryProps = tmp13Result2.useSecondaryProps(horizontal);
    ({ refreshControl, renderHeader, renderFooter, renderEmpty, CompatScrollView, renderStickyHeaderBackdrop } = secondaryProps);
    const isFirstLayoutComplete = recyclerViewManager.getIsFirstLayoutComplete();
    const tmp35 = !isFirstLayoutComplete && recyclerViewManager.getDataLength() > 0;
    if (tmp35) {
      if (recyclerViewContext != null) {
        let result = recyclerViewContext.markChildLayoutAsPending(tmp30);
      }
    }
    const items3 = [data, stickyHeaderIndices, num, renderItem, current2, horizontal, recyclerViewManager, extraData, first1, onChangeStickyIndex, flag2, num2, inverted];
    const tmp20Result6 = onChangeStickyIndex(function() {
      if (data) {
        if (data.length > 0) {
          if (stickyHeaderIndices) {
            if (stickyHeaderIndices.length > 0) {
              if (horizontal) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error(ErrorMessages.ErrorMessages.stickyHeadersNotSupportedForHorizontal);
                throw error;
              } else {
                const obj = {
                  stickyHeaderIndices,
                  stickyHeaderOffset: 0,
                  data,
                  renderItem,
                  scrollY: current2,
                  stickyHeaderRef,
                  stickyHeaderZIndex: num2,
                  recyclerViewManager,
                  extraData,
                  inverted,
                  onChangeStickyIndex(arg0) {
                              if (flag2) {
                                closure_1_25(arg0);
                              }
                              if (onChangeStickyIndex != null) {
                                tmp4(arg0, first1);
                              }
                            }
                };
                return map1(StickyHeaders.StickyHeaders, obj);
              }
            }
          }
        }
      }
      return null;
    }, items3);
    let closure_40 = tmp20Result6;
    const items4 = [tmp29, current2, tmp20Result6, flag];
    const tmp20Result7 = onChangeStickyIndex(() => {
      let eventResult;
      let obj2;
      let obj3;
      if (closure_40) {
        const obj = { nativeEvent: obj2 };
        obj2 = { contentOffset: obj3 };
        const items = [obj];
        obj3 = { y: current2 };
        const obj4 = { useNativeDriver: flag, listener };
        eventResult = unpackModuleId.event(items, obj4);
      } else {
        eventResult = listener;
      }
      return eventResult;
    }, items4);
    let result1 = recyclerViewManager.shouldMaintainVisibleContentPosition();
    const items5 = [maintainVisibleContentPosition, result1];
    const tmp20Result8 = onChangeStickyIndex(() => {
      if (result1) {
        const obj = { minIndexForVisible: 0 };
        const merged = Object.assign(maintainVisibleContentPosition);
        return obj;
      }
    }, items5);
    let tmp41 = recyclerViewManager.getDataLength() > 0;
    if (tmp41) {
      let flag3;
      if (maintainVisibleContentPosition != null) {
        flag3 = maintainVisibleContentPosition.startRenderingFromBottom;
      }
      if (flag3 == null) {
        flag3 = false;
      }
      tmp41 = flag3;
    }
    flag3 = tmp41;
    const items6 = [horizontal, num];
    const tmp20Result9 = onChangeStickyIndex(() => {
      let tmp3;
      const CompatView = react_native2.CompatView;
      if (!horizontal) {
        tmp3 = num;
      }
      size = { marginTop: tmp3, height: 0, width: num2 };
      num2 = undefined;
      if (horizontal) {
        num2 = 0;
      }
      const obj = { style: size, ref: ref2 };
      return map1(CompatView, obj);
    }, items6);
    const items7 = [horizontal, result1];
    let obj = { value: tmp20Result, children: closure_14(CompatView, obj8) };
    const tmp20Result10 = onChangeStickyIndex(() => {
      let tmp = null;
      if (result1) {
        const _Boolean = Boolean;
        const obj = { horizontal: Boolean(horizontal), scrollAnchorRef };
        const ScrollAnchor = ScrollAnchor2.ScrollAnchor;
        tmp = map1(ScrollAnchor, obj);
      }
      return tmp;
    }, items7);
    const RecyclerViewContextProvider = tmp13(tmp14[15]).RecyclerViewContextProvider;
    let num3 = 1;
    CompatView = tmp13(tmp14[19]).CompatView;
    obj8 = {
      style: items8,
      ref: tmp9,
      collapsable: false,
      onLayout(nativeEvent) {
        current = ref3.current;
        num = undefined;
        const areDimensionsNotEqual = react_native.areDimensionsNotEqual;
        const width = nativeEvent.nativeEvent.layout.width;
        react_native;
        if (current != null) {
          num = current.width;
        }
        if (num == null) {
          num = 0;
        }
        let result = areDimensionsNotEqual(width, num);
        if (!result) {
          current2 = ref3.current;
          num2 = undefined;
          const areDimensionsNotEqual2 = react_native.areDimensionsNotEqual;
          const height = nativeEvent.nativeEvent.layout.height;
          react_native;
          if (current2 != null) {
            num2 = current2.height;
          }
          if (num2 == null) {
            num2 = 0;
          }
          result = areDimensionsNotEqual2(height, num2);
        }
        if (result) {
          closure_39.layout();
        }
      },
      children: items10
    };
    items8 = [{ flex: num3, overflow: "hidden" }, style, invertedTransformStyle];
    const obj9 = { horizontal, ref: tmp8, onScroll: tmp20Result7, maintainVisibleContentPosition: tmp20Result8, removeClippedSubviews: false, refreshControl, children: items9 };
    let merged = Object.assign(tmp);
    const merged1 = Object.assign(overrideProps);
    items9 = [tmp20Result10, flag2.isRTL && horizontal && tmp20Result9, renderHeader, !(flag2.isRTL && horizontal) && tmp20Result9, , , ];
    const obj10 = {
      viewHolderCollectionRef: tmp24,
      data,
      horizontal,
      renderStack: recyclerViewManager.getRenderStack(),
      getLayout(arg0) {
        return recyclerViewManager.getLayout(arg0);
      },
      getAdjustmentMargin() {
        if (flag3) {
          if (recyclerViewManager.hasLayout()) {
            size = recyclerViewManager.getWindowSize();
            const tmp3 = horizontal ? size.width : size.height;
            const size2 = recyclerViewManager.getChildContainerDimensions();
            const _Math = Math;
            return Math.max(0, tmp3 - (horizontal ? size2.width : size2.height) - recyclerViewManager.firstItemOffset);
          }
        }
        return 0;
      },
      refHolder: tmp21,
      onSizeChanged: tmp32,
      renderItem,
      extraData,
      onCommitLayoutEffect() {
        closure_31();
        if (recyclerViewContext != null) {
          const result = recyclerViewContext.unmarkChildLayoutAsPending(closure_38);
        }
        if (closure_6 != null) {
          closure_6();
        }
      },
      onCommitEffect() {
        first.markRenderComplete();
        const result = recyclerViewManager.updateAverageRenderTime(first.getAverageRenderTime());
        closure_31();
        checkBounds();
        const itemViewability = recyclerViewManager.computeItemViewability();
        recyclerViewManager.animationOptimizationsEnabled = false;
      },
      CellRendererComponent,
      ItemSeparatorComponent,
      isInLastRow(arg0) {
        return recyclerViewManager.isInLastRow(arg0);
      },
      getChildContainerLayout() {
        let childContainerDimensions;
        if (recyclerViewManager.hasLayout()) {
          childContainerDimensions = recyclerViewManager.getChildContainerDimensions();
        }
        return childContainerDimensions;
      },
      currentStickyIndex: first1,
      hideStickyHeaderRelatedCell: flag2,
      inverted
    };
    const ViewHolderCollection = tmp13(tmp14[21]).ViewHolderCollection;
    items9[4] = num2(ViewHolderCollection, obj10);
    items9[5] = renderEmpty;
    items9[6] = renderFooter;
    items10 = [closure_14(CompatScrollView, obj9), , ];
    let tmp48 = null;
    if (stickyHeaderIndices) {
      tmp48 = null;
      if (stickyHeaderIndices.length > 0) {
        tmp48 = renderStickyHeaderBackdrop;
      }
    }
    items10[1] = tmp48;
    items10[2] = tmp20Result6;
    return num2(RecyclerViewContextProvider, obj);
  }
}
RecyclerViewComponent.displayName = "FlashList";

export const RecyclerView = react.memo(forwardRef(RecyclerViewComponent));