// _runtime/05673_createBottomSheetScrollableComponent.js
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import "noop";
import { jsx } from "jsxProd";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment", "overScrollMode", "keyboardDismissMode", "showsVerticalScrollIndicator", "contentContainerStyle", "refreshing", "onRefresh", "progressViewOffset", "refreshControl", "preserveScrollMomentum", "onScroll", "onScrollBeginDrag", "onScrollEndDrag", "lockableScrollableContentOffsetY", "onContentSizeChange"];
({ forwardRef: c4, useContext: c5, useImperativeHandle: closure_6, useMemo: error } = noop);
let closure_9 = { code: "function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}" };

export const createBottomSheetScrollableComponent = function createBottomSheetScrollableComponent(SCROLLVIEW, animatedComponent) {
  let closure_0 = SCROLLVIEW;
  let closure_1 = animatedComponent;
  return callback((overScrollMode) => {
    let closure_2;
    let contentContainerStyle;
    let enableFooterMarginAdjustment;
    let focusHook;
    let lockableScrollableContentOffsetY;
    let onRefresh;
    let onScroll;
    let onScrollBeginDrag;
    let onScrollEndDrag;
    let preserveScrollMomentum;
    let progressViewOffset;
    let refreshControl;
    let refreshing;
    let scrollEventsHandlersHook;
    let scrollHandler;
    let scrollableContentOffsetY;
    ({ focusHook, scrollEventsHandlersHook, enableFooterMarginAdjustment } = overScrollMode);
    overScrollMode = overScrollMode.overScrollMode;
    let str = "never";
    if (undefined !== overScrollMode) {
      str = overScrollMode;
    }
    const keyboardDismissMode = overScrollMode.keyboardDismissMode;
    let str2 = "interactive";
    if (undefined !== keyboardDismissMode) {
      str2 = keyboardDismissMode;
    }
    const showsVerticalScrollIndicator = overScrollMode.showsVerticalScrollIndicator;
    const SCROLLVIEW = tmp2;
    ({ onRefresh, preserveScrollMomentum } = overScrollMode);
    ({ onScroll, onContentSizeChange: closure_2 } = overScrollMode);
    ({ contentContainerStyle, refreshing, progressViewOffset, refreshControl, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY } = overScrollMode);
    const tmp6 = outer1_5(SCROLLVIEW(animatedComponent[3]).BottomSheetDraggableContext);
    let _objectWithoutProperties = tmp6;
    let obj = SCROLLVIEW(animatedComponent[4]);
    scrollHandler = obj.useScrollHandler(scrollEventsHandlersHook, onScroll, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY);
    const scrollableRef = scrollHandler.scrollableRef;
    ({ scrollableContentOffsetY, scrollHandler } = scrollHandler);
    const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
    const tmp3 = outer1_3(overScrollMode, outer1_2);
    const bottomSheetInternal = SCROLLVIEW(animatedComponent[4]).useBottomSheetInternal();
    const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
    const obj2 = SCROLLVIEW(animatedComponent[4]);
    const setContentSize = SCROLLVIEW(animatedComponent[5]).useBottomSheetContentSizeSetter().setContentSize;
    if (!tmp6) {
      if (bottomSheetInternal.enableContentPanningGesture) {
        throw "'Scrollable' cannot be used out of the BottomSheet!";
      }
    }
    let tmp4Result = tmp4(tmp5[6]);
    class J {
      constructor() {
        if (preserveScrollMomentum) {
          obj = {};
        } else {
          obj = { decelerationRate: null };
          tmp = outer1_0;
          tmp2 = preserveScrollMomentum;
          tmp3 = animatedScrollableState;
          obj[0] = outer1_0(preserveScrollMomentum[7]).SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value];
        }
        obj = {};
        merged = Object.assign(obj);
        tmp5 = closure_0;
        if (closure_0) {
          tmp6 = animatedScrollableState;
          tmp7 = outer1_0;
          tmp8 = preserveScrollMomentum;
          tmp5 = animatedScrollableState.value === outer1_0(preserveScrollMomentum[7]).SCROLLABLE_STATE.UNLOCKED;
        }
        obj.showsVerticalScrollIndicator = tmp5;
        return obj;
      }
    }
    obj = { preserveScrollMomentum, SCROLLABLE_DECELERATION_RATE_MAPPER: tmp4(tmp5[7]).SCROLLABLE_DECELERATION_RATE_MAPPER, animatedScrollableState, showsVerticalScrollIndicator: tmp2, SCROLLABLE_STATE: tmp4(tmp5[7]).SCROLLABLE_STATE };
    J.__closure = obj;
    J.__workletHash = 1780437272380;
    J.__initData = outer1_9;
    const items = [animatedScrollableState, undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator, preserveScrollMomentum];
    const items1 = [tmp6];
    const animatedProps = tmp4Result.useAnimatedProps(J, items);
    const obj3 = SCROLLVIEW(animatedComponent[5]);
    tmp4Result = tmp4(tmp5[4]);
    const tmp10 = outer1_7(() => {
      let result1;
      if (_objectWithoutProperties) {
        const Gesture = tmp2(preserveScrollMomentum[8]).Gesture;
        const result = Gesture.Native().simultaneousWithExternalGesture(tmp);
        result1 = result.shouldCancelWhenOutside(false);
        const NativeResult = Gesture.Native();
      }
      return result1;
    }, items1);
    const stableCallback = tmp4Result.useStableCallback((arg0, arg1) => {
      setContentSize(arg1);
      if (closure_2) {
        tmp2(arg0, arg1);
      }
    });
    const bottomSheetContentContainerStyle = SCROLLVIEW(animatedComponent[4]).useBottomSheetContentContainerStyle(tmp, contentContainerStyle);
    outer1_6(arg1, () => scrollableRef.current);
    const tmp4Result1 = SCROLLVIEW(animatedComponent[4]);
    const scrollableSetter = SCROLLVIEW(animatedComponent[4]).useScrollableSetter(scrollableRef, SCROLLVIEW, scrollableContentOffsetY, undefined !== onRefresh, focusHook);
    obj = { ref: scrollableRef, nativeGesture: tmp10, animatedProps, overScrollMode: str, keyboardDismissMode: str2, refreshing, scrollEventThrottle: 16, progressViewOffset, contentContainerStyle: bottomSheetContentContainerStyle, onRefresh, onScroll: scrollHandler, onContentSizeChange: stableCallback, setContentSize, ScrollableComponent: preserveScrollMomentum, refreshControl };
    let merged = Object.assign(tmp3);
    return outer1_8(SCROLLVIEW(animatedComponent[9]).ScrollableContainer, obj);
  });
};