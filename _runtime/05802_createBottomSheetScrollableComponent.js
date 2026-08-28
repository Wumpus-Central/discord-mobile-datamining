// === Module 5802: createBottomSheetScrollableComponent ===

// Module 5802 (createBottomSheetScrollableComponent)
import noopDefault from "noop" /* 19 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment", "overScrollMode", "keyboardDismissMode", "showsVerticalScrollIndicator", "contentContainerStyle", "refreshing", "onRefresh", "progressViewOffset", "refreshControl", "preserveScrollMomentum", "onScroll", "onScrollBeginDrag", "onScrollEndDrag", "lockableScrollableContentOffsetY", "onContentSizeChange"];
({ forwardRef: c4, useContext: c5, useImperativeHandle: closure_6, useMemo: error } = noop);
noopDefault;
let closure_9 = { code: "function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}" };

export const createBottomSheetScrollableComponent = function createBottomSheetScrollableComponent(SCROLLVIEW, animatedComponent) {
  closure_0 = SCROLLVIEW;
  closure_1 = animatedComponent;
  return callback((overScrollMode) => {
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
    SCROLLVIEW = tmp2;
    ({ onRefresh, preserveScrollMomentum } = overScrollMode);
    ({ onScroll, onContentSizeChange: closure_2 } = overScrollMode);
    ({ contentContainerStyle, refreshing, progressViewOffset, refreshControl, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY } = overScrollMode);
    const tmp6 = closure_1_5(SCROLLVIEW(animatedComponent[3]).BottomSheetDraggableContext);
    closure_3 = tmp6;
    let obj = SCROLLVIEW(animatedComponent[4]);
    scrollHandler = obj.useScrollHandler(scrollEventsHandlersHook, onScroll, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY);
    const scrollableRef = scrollHandler.scrollableRef;
    ({ scrollableContentOffsetY, scrollHandler } = scrollHandler);
    const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
    const tmp3 = closure_1_3(overScrollMode, closure_1_2);
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
          tmp = closure_0;
          tmp2 = preserveScrollMomentum;
          tmp3 = animatedScrollableState;
          obj[0] = closure_0(preserveScrollMomentum[7]).SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value];
        }
        obj = {};
        merged = Object.assign(obj);
        tmp5 = closure_0;
        if (closure_0) {
          tmp6 = animatedScrollableState;
          tmp7 = closure_0;
          tmp8 = preserveScrollMomentum;
          tmp5 = animatedScrollableState.value === closure_0(preserveScrollMomentum[7]).SCROLLABLE_STATE.UNLOCKED;
        }
        obj.showsVerticalScrollIndicator = tmp5;
        return obj;
      }
    }
    obj = { preserveScrollMomentum, SCROLLABLE_DECELERATION_RATE_MAPPER: tmp4(tmp5[7]).SCROLLABLE_DECELERATION_RATE_MAPPER, animatedScrollableState, showsVerticalScrollIndicator: tmp2, SCROLLABLE_STATE: tmp4(tmp5[7]).SCROLLABLE_STATE };
    J.__closure = obj;
    J.__workletHash = 1780437272380;
    J.__initData = closure_1_9;
    const items = [animatedScrollableState, undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator, preserveScrollMomentum];
    const items1 = [tmp6];
    const animatedProps = tmp4Result.useAnimatedProps(J, items);
    const obj3 = SCROLLVIEW(animatedComponent[5]);
    tmp4Result = tmp4(tmp5[4]);
    const tmp10 = closure_1_7(() => {
      let result1;
      if (closure_3) {
        const Gesture = callback(preserveScrollMomentum[8]).Gesture;
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
    closure_1_6(arg1, () => scrollableRef.current);
    const tmp4Result1 = SCROLLVIEW(animatedComponent[4]);
    const scrollableSetter = SCROLLVIEW(animatedComponent[4]).useScrollableSetter(scrollableRef, SCROLLVIEW, scrollableContentOffsetY, undefined !== onRefresh, focusHook);
    obj = { ref: scrollableRef, nativeGesture: tmp10, animatedProps, overScrollMode: str, keyboardDismissMode: str2, refreshing, scrollEventThrottle: 16, progressViewOffset, contentContainerStyle: bottomSheetContentContainerStyle, onRefresh, onScroll: scrollHandler, onContentSizeChange: stableCallback, setContentSize, ScrollableComponent: preserveScrollMomentum, refreshControl };
    let merged = Object.assign(tmp3);
    return closure_1_8(SCROLLVIEW(animatedComponent[9]).ScrollableContainer, obj);
  });
};