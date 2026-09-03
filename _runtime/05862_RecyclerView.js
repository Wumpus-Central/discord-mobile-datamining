// _runtime/05862_RecyclerView.js
import noopDefault from "00019_noop.js";
import closure_3 from "metro/05863__slicedToArray.js";
import closure_4 from "metro/05869__objectWithoutProperties.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

const require = arg1;
let closure_2 = [
  "horizontal",
  "renderItem",
  "data",
  "extraData",
  "onLoad",
  "CellRendererComponent",
  "overrideProps",
  "refreshing",
  "onRefresh",
  "progressViewOffset",
  "ListEmptyComponent",
  "ListHeaderComponent",
  "ListHeaderComponentStyle",
  "ListFooterComponent",
  "ListFooterComponentStyle",
  "ItemSeparatorComponent",
  "renderScrollComponent",
  "style",
  "stickyHeaderIndices",
  "maintainVisibleContentPosition",
  "onCommitLayoutEffect",
  "onChangeStickyIndex",
  "stickyHeaderConfig",
  "inverted",
];
({
  useCallback: c5,
  useLayoutEffect: closure_6,
  useMemo: error,
  useRef: closure_8,
  useState: c9,
  useId: c10,
  forwardRef,
} = noop);
({ Animated: unpackModuleId, I18nManager: closure_12 } = get_ActivityIndicator);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
class RecyclerViewComponent {
  constructor(arg0, arg1) {
    horizontal = global.horizontal;
    renderItem = global.renderItem;
    data = global.data;
    extraData = global.extraData;
    ({
      overrideProps,
      refreshing,
      onRefresh,
      progressViewOffset,
      ListEmptyComponent,
      ListHeaderComponent,
      ListHeaderComponentStyle,
      ListFooterComponent,
      ListFooterComponentStyle,
      renderScrollComponent,
      stickyHeaderIndices,
    } = global);
    maintainVisibleContentPosition = global.maintainVisibleContentPosition;
    closure_5 = maintainVisibleContentPosition;
    ({ onCommitLayoutEffect, onChangeStickyIndex } = global);
    ({ stickyHeaderConfig, inverted } = global);
    ({ onLoad, CellRendererComponent, ItemSeparatorComponent, style } = global);
    tmp = stickyHeaderIndices(global, data);
    tmp2 = closure_9;
    tmp3 = extraData;
    first = extraData(
      closure_9(() => {
        const renderTimeTracker = new horizontal(renderItem[5]).RenderTimeTracker();
        return renderTimeTracker;
      }),
      1,
    )[0];
    closure_9 = first;
    startTrackingResult = first.startTracking();
    num = undefined;
    if (stickyHeaderConfig != null) {
      num = stickyHeaderConfig.offset;
    }
    if (num == null) {
      num = 0;
    }
    c10 = num;
    flag = undefined;
    if (stickyHeaderConfig != null) {
      flag = stickyHeaderConfig.useNativeDriver;
    }
    if (flag == null) {
      flag = true;
    }
    c11 = flag;
    flag2 = undefined;
    if (stickyHeaderConfig != null) {
      flag2 = stickyHeaderConfig.hideRelatedCell;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    c12 = flag2;
    num2 = undefined;
    if (stickyHeaderConfig != null) {
      num2 = stickyHeaderConfig.zIndex;
    }
    if (num2 == null) {
      num2 = 2;
    }
    c13 = num2;
    invertedTransformStyle = undefined;
    if (inverted) {
      tmp6 = horizontal;
      tmp7 = renderItem;
      obj2 = require("getInvertedTransformStyle");
      invertedTransformStyle = obj2.getInvertedTransformStyle(horizontal);
    }
    tmp8 = inverted(null);
    closure_14 = tmp8;
    tmp9 = inverted(null);
    closure_15 = tmp9;
    closure_16 = inverted(null);
    closure_17 = inverted(undefined);
    set = new Set();
    current = inverted(set).current;
    value = new c11.Value(0);
    current2 = inverted(value).current;
    current = current2;
    closure_20 = inverted(null);
    tmp12 = inverted(null);
    closure_21 = tmp12;
    tmp13 = horizontal;
    tmp14 = renderItem;
    obj3 = require("useLayoutState");
    tmp3Result = tmp3(require("../discord_app/index.native.tsx"), 2);
    [r10087, tmp16] = tmp3Result;
    closure_22 = tmp16;
    tmp3Result1 = tmp3(require("../discord_app/index.native.tsx"), 2);
    [r10091, closure_23] = tmp3Result1;
    tmp3Result2 = tmp3(require("module_4294967295"), 2);
    first1 = tmp3Result2[0];
    closure_24 = first1;
    closure_25 = tmp3Result2[1];
    tmp20 = onChangeStickyIndex;
    tmp21 = onChangeStickyIndex(() => new Map(), []);
    closure_26 = tmp21;
    obj4 = require("useRecyclerViewManager");
    recyclerViewManager = obj4.useRecyclerViewManager(global);
    recyclerViewManager = recyclerViewManager.recyclerViewManager;
    velocityTracker = recyclerViewManager.velocityTracker;
    obj5 = require("useRecyclerViewController");
    recyclerViewController = obj5.useRecyclerViewController(recyclerViewManager, arg1, tmp8, tmp12);
    ({ applyOffsetCorrection, computeFirstVisibleIndexForOffsetCorrection } = recyclerViewController);
    closure_30 = computeFirstVisibleIndexForOffsetCorrection;
    ({ applyInitialScrollIndex, handlerMethods } = recyclerViewController);
    tmp24 = inverted(null);
    closure_33 = tmp24;
    obj6 = require("useOnLoad");
    onListLoad = obj6.useOnListLoad(recyclerViewManager, onLoad);
    obj7 = require("useBoundDetection");
    checkBounds = obj7.useBoundDetection(recyclerViewManager, tmp8).checkBounds;
    tmp26 = c12.isRTL && horizontal;
    horizontal = tmp26;
    tmp27 = onCommitLayoutEffect(() => {
      if (ref.current) {
        if (ref2.current) {
          let obj = horizontal(renderItem[12]);
          const size = obj.measureParentSize(tmp.current);
          const size2 = horizontal(renderItem[12]).measureFirstChildLayout(tmp2.current, tmp.current);
          closure_17.current = size;
          const tmp7 = horizontal ? size2.x : size2.y;
          obj = { width: null, height: null };
          obj[0] = horizontal ? size.width : size2.width;
          obj[1] = horizontal ? size2.height : size.height;
          let diff = tmp7;
          if (closure_35) {
            diff = tmp7;
            if (obj3.hasLayout()) {
              diff = tmp7 - obj3.getChildContainerDimensions().width;
            }
          }
          recyclerViewManager.updateLayoutParams(obj, diff);
          const obj2 = horizontal(renderItem[12]);
        }
      }
    });
    tmp28 = onCommitLayoutEffect(() => {
      if (current.size <= 0) {
        const _Array = Array;
        const result = first.hasExceededMaxRendersWithoutCommit();
        if (result) {
          const _console = console;
          console.warn(horizontal(renderItem[13]).WarningMessages.exceededMaxRendersWithoutCommit);
        }
        num = undefined;
        if (data != null) {
          num = data.length;
        }
        if (num == null) {
          num = 0;
        }
        if (recyclerViewManager.modifyChildrenLayout(arr, num)) {
          if (!result) {
            callback2((arg0) => arg0 + 1);
          }
          let hasLayoutResult = horizontal;
          if (horizontal) {
            hasLayoutResult = obj.hasLayout();
          }
          if (hasLayoutResult) {
            hasLayoutResult = obj.getWindowSize().height > 0;
          }
          if (hasLayoutResult) {
            if (recyclerViewContext != null) {
              result1 = obj2.unmarkChildLayoutAsPending(closure_38);
            }
            obj2 = recyclerViewContext;
          }
        }
        current = ref5.current;
        if (current != null) {
          current.commitLayout();
        }
        callback3();
        arr = Array.from(closure_26, (arg0) => {
          [tmp, tmp2] = arg0;
          const obj = {
            index: tmp,
            dimensions: closure_1_0(closure_1_1[12]).measureItemLayout(tmp2.current, closure_27.tryGetLayout(tmp)),
          };
          return obj;
        });
      }
    });
    items = [, , , , ,];
    items[0] = checkBounds;
    items[1] = computeFirstVisibleIndexForOffsetCorrection;
    items[2] = horizontal;
    items[3] = tmp26;
    items[4] = recyclerViewManager;
    items[5] = velocityTracker;
    tmp29 = closure_5((nativeEvent) => {
      if (!recyclerViewManager.ignoreScrollEvents) {
        const contentOffset = nativeEvent.nativeEvent.contentOffset;
        const tmp3 = horizontal ? contentOffset.x : contentOffset.y;
        horizontal = tmp3;
        let tmp5 = tmp3;
        if (closure_35) {
          const adjustOffsetForRTLResult = horizontal(renderItem[14]).adjustOffsetForRTL(
            tmp3,
            nativeEvent.nativeEvent.contentSize.width,
            nativeEvent.nativeEvent.layoutMeasurement.width,
          );
          horizontal = adjustOffsetForRTLResult;
          tmp5 = adjustOffsetForRTLResult;
          const obj2 = horizontal(renderItem[14]);
        }
        const _Boolean = Boolean;
        const absoluteLastScrollOffset = obj.getAbsoluteLastScrollOffset();
        const velocity = velocityTracker.computeVelocity(
          tmp5,
          absoluteLastScrollOffset,
          Boolean(horizontal),
          (arg0, arg1) => {
            if (!closure_1_27.ignoreScrollEvents) {
              if (arg1) {
                closure_1_30();
                if (obj.isOffsetProjectionEnabled) {
                  obj.resetVelocityCompute();
                }
              }
              if (obj.updateScrollOffset(closure_0, arg0)) {
                closure_1_23((arg0) => arg0 + 1);
              }
            }
          },
        );
        current = ref4.current;
        if (current != null) {
          current.reportScrollEvent(nativeEvent.nativeEvent);
        }
        checkBounds();
        if (obj.isInitialScrollComplete) {
          obj.recordInteraction();
        }
        const itemViewability = obj.computeItemViewability();
        const props = obj.props;
        const onScroll = props.onScroll;
        if (onScroll != null) {
          onScroll(nativeEvent);
        }
        const tmp2 = horizontal;
      }
    }, items);
    closure_36 = tmp29;
    tmp13Result = require("context");
    recyclerViewContext = tmp13Result.useRecyclerViewContext();
    closure_37 = recyclerViewContext;
    tmp30 = c10();
    closure_38 = tmp30;
    items1 = [, , , ,];
    items1[0] = handlerMethods;
    items1[1] = recyclerViewContext;
    items1[2] = current;
    items1[3] = recyclerViewManager.isDisposed;
    items1[4] = tmp16;
    tmp20Result = tmp20(
      () => ({
        layout() {
          callback((arg0) => arg0 + 1);
        },
        getRef() {
          let tmp = null;
          if (!isDisposed.isDisposed) {
            tmp = closure_32;
          }
          return tmp;
        },
        getParentRef() {
          let ref;
          if (closure_37 != null) {
            ref = closure_37.getRef();
          }
          if (ref == null) {
            ref = null;
          }
          return ref;
        },
        getParentScrollViewRef() {
          let scrollViewRef;
          if (closure_37 != null) {
            scrollViewRef = closure_37.getScrollViewRef();
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
            closure_39.layout();
          }
        },
      }),
      items1,
    );
    closure_39 = tmp20Result;
    items2 = [,];
    items2[0] = tmp20Result;
    items2[1] = recyclerViewManager;
    tmp32 = closure_5((arg0, width) => {
      const size = recyclerViewManager.getLayout(arg0);
      num = size.maxWidth;
      if (num == null) {
        num = Infinity;
      }
      num2 = size.minWidth;
      const bound = Math.min(size.width, num);
      if (num2 == null) {
        num2 = 0;
      }
      let num3 = size.maxHeight;
      const bound1 = Math.max(bound, num2);
      if (num3 == null) {
        num3 = Infinity;
      }
      let num4 = size.minHeight;
      const bound2 = Math.min(size.height, num3);
      if (num4 == null) {
        num4 = 0;
      }
      const bound3 = Math.max(bound2, num4);
      let result = horizontal(renderItem[12]).areDimensionsNotEqual(bound1, width.width);
      if (!result) {
        result = horizontal(renderItem[12]).areDimensionsNotEqual(bound3, width.height);
        const tmp5Result = horizontal(renderItem[12]);
      }
      if (result) {
        closure_39.layout();
      }
    }, items2);
    tmp13Result1 = require("useSecondaryProps");
    secondaryProps = tmp13Result1.useSecondaryProps(global);
    ({ refreshControl, renderHeader, renderFooter, renderEmpty, CompatScrollView, renderStickyHeaderBackdrop } =
      secondaryProps);
    isFirstLayoutComplete = recyclerViewManager.getIsFirstLayoutComplete();
    tmp35 = !isFirstLayoutComplete;
    if (!isFirstLayoutComplete) {
      tmp35 = recyclerViewManager.getDataLength() > 0;
    }
    if (tmp35) {
      if (recyclerViewContext != null) {
        result = recyclerViewContext.markChildLayoutAsPending(tmp30);
      }
    }
    items3 = [, , , , , , , , , , , ,];
    items3[0] = data;
    items3[1] = stickyHeaderIndices;
    items3[2] = num;
    items3[3] = renderItem;
    items3[4] = current2;
    items3[5] = horizontal;
    items3[6] = recyclerViewManager;
    items3[7] = extraData;
    items3[8] = first1;
    items3[9] = onChangeStickyIndex;
    items3[10] = flag2;
    items3[11] = num2;
    items3[12] = inverted;
    tmp20Result1 = tmp20(() => {
      if (data) {
        if (arr.length > 0) {
          if (stickyHeaderIndices) {
            if (arr2.length > 0) {
              if (horizontal) {
                const _Error = Error;
                error = new Error(horizontal(renderItem[17]).ErrorMessages.stickyHeadersNotSupportedForHorizontal);
                throw error;
              } else {
                const obj = {
                  stickyHeaderIndices: null,
                  stickyHeaderOffset: null,
                  data: null,
                  renderItem: null,
                  scrollY: null,
                  stickyHeaderRef: null,
                  stickyHeaderZIndex: null,
                  recyclerViewManager: null,
                  extraData: null,
                  inverted: null,
                  onChangeStickyIndex: null,
                };
                obj[0] = arr2;
                obj[1] = num;
                obj[2] = arr;
                obj[3] = renderItem;
                obj[4] = current2;
                obj[5] = closure_20;
                obj[6] = num2;
                obj[7] = recyclerViewManager;
                obj[8] = extraData;
                obj[9] = inverted;
                obj[10] = function onChangeStickyIndex(arg0, items1) {
                  if (closure_12) {
                    callback(arg0);
                  }
                  if (closure_7 != null) {
                    tmp3(arg0, closure_24);
                  }
                };
                return num2(horizontal(renderItem[18]).StickyHeaders, obj);
              }
            }
          }
        }
      }
      return null;
    }, items3);
    closure_40 = tmp20Result1;
    items4 = [, , ,];
    items4[0] = tmp29;
    items4[1] = current2;
    items4[2] = tmp20Result1;
    items4[3] = flag;
    tmp20Result2 = tmp20(() => {
      if (closure_40) {
        let obj = { nativeEvent: null };
        obj = { contentOffset: null };
        obj = { y: null };
        obj[0] = current2;
        obj[0] = obj;
        obj[0] = obj;
        const items = [obj];
        obj1 = { useNativeDriver: null, listener: null };
        obj1[0] = flag;
        obj1[1] = closure_36;
        let eventResult = flag.event(items, obj1);
      } else {
        eventResult = closure_36;
      }
      return eventResult;
    }, items4);
    result1 = recyclerViewManager.shouldMaintainVisibleContentPosition();
    closure_41 = result1;
    items5 = [,];
    items5[0] = maintainVisibleContentPosition;
    items5[1] = result1;
    tmp20Result3 = tmp20(() => {
      if (result1) {
        const obj = {};
        const merged = Object.assign(maintainVisibleContentPosition);
        obj.minIndexForVisible = 0;
        return obj;
      }
    }, items5);
    tmp41 = recyclerViewManager.getDataLength() > 0;
    if (tmp41) {
      flag3 = undefined;
      if (maintainVisibleContentPosition != null) {
        flag3 = maintainVisibleContentPosition.startRenderingFromBottom;
      }
      if (flag3 == null) {
        flag3 = false;
      }
      tmp41 = flag3;
    }
    c42 = tmp41;
    items6 = [,];
    items6[0] = horizontal;
    items6[1] = num;
    tmp20Result4 = tmp20(() => {
      let tmp3;
      if (!horizontal) {
        tmp3 = num;
      }
      let obj = { marginTop: tmp3, height: 0, width: null };
      num2 = undefined;
      if (horizontal) {
        num2 = 0;
      }
      obj = { style: obj, ref: closure_16 };
      obj[2] = num2;
      return num2(horizontal(renderItem[19]).CompatView, obj);
    }, items6);
    items7 = [,];
    items7[0] = horizontal;
    items7[1] = result1;
    tmp44 = c13;
    tmp20Result5 = tmp20(() => {
      let tmp = null;
      if (result1) {
        const obj = { horizontal: null, scrollAnchorRef: null };
        const _Boolean = Boolean;
        obj[0] = Boolean(horizontal);
        obj[1] = closure_21;
        tmp = num2(horizontal(renderItem[20]).ScrollAnchor, obj);
      }
      return tmp;
    }, items7);
    obj = { value: tmp20Result, children: null };
    tmp45 = closure_14;
    num3 = 1;
    obj1 = {
      style: items8,
      ref: tmp9,
      collapsable: false,
      onLayout(nativeEvent) {
        current = ref3.current;
        num = undefined;
        if (current != null) {
          num = current.width;
        }
        if (num == null) {
          num = 0;
        }
        let result = horizontal(renderItem[12]).areDimensionsNotEqual(nativeEvent.nativeEvent.layout.width, num);
        if (!result) {
          current2 = ref3.current;
          num2 = undefined;
          if (current2 != null) {
            num2 = current2.height;
          }
          if (num2 == null) {
            num2 = 0;
          }
          result = horizontal(renderItem[12]).areDimensionsNotEqual(nativeEvent.nativeEvent.layout.height, num2);
          const tmpResult = horizontal(renderItem[12]);
        }
        if (result) {
          closure_39.layout();
        }
      },
      children: null,
    };
    items8 = [, ,];
    items8[0] = { flex: num3, overflow: "hidden" };
    items8[1] = style;
    items8[2] = invertedTransformStyle;
    obj2 = {};
    merged = Object.assign(tmp);
    obj2.horizontal = horizontal;
    obj2.ref = tmp8;
    obj2.onScroll = tmp20Result2;
    obj2.maintainVisibleContentPosition = tmp20Result3;
    obj2.removeClippedSubviews = false;
    obj2.refreshControl = refreshControl;
    merged1 = Object.assign(overrideProps);
    items9 = [, , , , , ,];
    items9[0] = tmp20Result5;
    tmp48 = tmp26;
    if (tmp26) {
      tmp48 = tmp20Result4;
    }
    items9[1] = tmp48;
    items9[2] = renderHeader;
    tmp49 = !tmp26;
    if (!tmp26) {
      tmp49 = tmp20Result4;
    }
    items9[3] = tmp49;
    obj3 = {
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
            const size = obj.getWindowSize();
            const size2 = obj.getChildContainerDimensions();
            const _Math = Math;
            return Math.max(
              0,
              (horizontal ? size.width : size.height) - (horizontal ? size2.width : size2.height) - obj.firstItemOffset,
            );
          }
        }
        return 0;
      },
      refHolder: tmp21,
      onSizeChanged: tmp32,
      renderItem,
      extraData,
      onCommitLayoutEffect(arg0) {
        callback4();
        if (recyclerViewContext != null) {
          const result = recyclerViewContext.unmarkChildLayoutAsPending(closure_38);
        }
        if (callback != null) {
          callback();
        }
      },
      onCommitEffect() {
        first.markRenderComplete();
        const result = recyclerViewManager.updateAverageRenderTime(first.getAverageRenderTime());
        callback4();
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
      inverted,
    };
    items9[4] = tmp44(require("ViewHolderCollection").ViewHolderCollection, obj3);
    items9[5] = renderEmpty;
    items9[6] = renderFooter;
    obj2.children = items9;
    items10 = [, ,];
    items10[0] = tmp45(CompatScrollView, obj2);
    tmp50 = null;
    if (stickyHeaderIndices) {
      tmp50 = null;
      if (stickyHeaderIndices.length > 0) {
        tmp50 = renderStickyHeaderBackdrop;
      }
    }
    items10[1] = tmp50;
    items10[2] = tmp20Result1;
    obj1[4] = items10;
    obj[1] = tmp45(require("CompatView").CompatView, obj1);
    return tmp44(require("context").RecyclerViewContextProvider, obj);
  }
}
RecyclerViewComponent.displayName = "FlashList";

export const RecyclerView = noopDefault.memo(forwardRef(RecyclerViewComponent));
