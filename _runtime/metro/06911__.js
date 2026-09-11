// === Module 6911: ? ===

// Module 6911
import cancelAnimation from "cancelAnimation" /* 1636 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6699 */;
import _mod6703 from "module_6703" /* 6703 */;
import _mod6710 from "module_6710" /* 6710 */;
import _mod6912 from "module_6912" /* 6912 */;
import ScrollableContainer from "ScrollableContainer" /* 6913 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment", "overScrollMode", "keyboardDismissMode", "showsVerticalScrollIndicator", "contentContainerStyle", "refreshing", "onRefresh", "progressViewOffset", "refreshControl", "preserveScrollMomentum", "onScroll", "onScrollBeginDrag", "onScrollEndDrag", "lockableScrollableContentOffsetY", "onContentSizeChange"];
let noop = fn(19);
({ forwardRef: closure_4, useContext: hasOwnProperty, useImperativeHandle: metroRequire, useMemo: closure_7 } = noop);
const jsx = fn(21).jsx;
let closure_9 = { code: "function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}" };

export const createBottomSheetScrollableComponent = function createBottomSheetScrollableComponent(SCROLLVIEW, animatedComponent) {
  const ScrollableComponent = animatedComponent;
  return closure_4((overScrollMode, arg1) => {
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
    const tmp6 = hasOwnProperty(_mod6710.BottomSheetDraggableContext);
    closure_3 = tmp6;
    let obj = _mod6703;
    scrollHandler = obj.useScrollHandler(scrollEventsHandlersHook, onScroll, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY);
    const scrollableRef = scrollHandler.scrollableRef;
    ({ scrollableContentOffsetY, scrollHandler } = scrollHandler);
    const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
    const tmp3 = _objectWithoutProperties(overScrollMode, closure_2);
    const bottomSheetInternal = _mod6703.useBottomSheetInternal();
    const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
    const setContentSize = _mod6912.useBottomSheetContentSizeSetter().setContentSize;
    if (!tmp6) {
      if (bottomSheetInternal.enableContentPanningGesture) {
        throw "'Scrollable' cannot be used out of the BottomSheet!";
      }
    }
    let tmp4Result = cancelAnimation;
    class J {
      constructor() {
        if (preserveScrollMomentum) {
          obj = {};
        } else {
          obj = { decelerationRate: null };
          tmp = closure_0;
          tmp2 = closure_1;
          tmp3 = animatedScrollableState;
          obj.decelerationRate = closure_0(closure_1[7]).SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value];
        }
        obj = {};
        merged = Object.assign(obj);
        tmp5 = closure_0;
        if (closure_0) {
          tmp6 = animatedScrollableState;
          tmp7 = closure_0;
          tmp8 = closure_1;
          tmp5 = animatedScrollableState.value === closure_0(closure_1[7]).SCROLLABLE_STATE.UNLOCKED;
        }
        obj.showsVerticalScrollIndicator = tmp5;
        return obj;
      }
    }
    obj = { preserveScrollMomentum, SCROLLABLE_DECELERATION_RATE_MAPPER: GESTURE_SOURCE.SCROLLABLE_DECELERATION_RATE_MAPPER, animatedScrollableState, showsVerticalScrollIndicator: tmp2, SCROLLABLE_STATE: GESTURE_SOURCE.SCROLLABLE_STATE };
    J.__closure = obj;
    J.__workletHash = 1780437272380;
    J.__initData = __initData;
    const items = [animatedScrollableState, undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator, preserveScrollMomentum];
    const items1 = [tmp6];
    const animatedProps = tmp4Result.useAnimatedProps(J, items);
    tmp4Result = _mod6703;
    const tmp10 = React5(() => {
      let result1;
      if (closure_3) {
        const Gesture = closure_0(preserveScrollMomentum[8]).Gesture;
        const result = Gesture.Native().simultaneousWithExternalGesture(tmp);
        result1 = result.shouldCancelWhenOutside(false);
        const NativeResult = Gesture.Native();
      }
      return result1;
    }, items1);
    const stableCallback = tmp4Result.useStableCallback((arg0, arg1) => {
      setContentSize(arg1);
      if (closure_1_2) {
        tmp2(arg0, arg1);
      }
    });
    const bottomSheetContentContainerStyle = _mod6703.useBottomSheetContentContainerStyle(tmp, contentContainerStyle);
    timestampProducer(arg1, () => scrollableRef.current);
    const tmp4Result1 = _mod6703;
    const scrollableSetter = _mod6703.useScrollableSetter(scrollableRef, SCROLLVIEW, scrollableContentOffsetY, undefined !== onRefresh, focusHook);
    obj = { ref: scrollableRef, nativeGesture: tmp10, animatedProps, overScrollMode: str, keyboardDismissMode: str2, refreshing, scrollEventThrottle: 16, progressViewOffset, contentContainerStyle: bottomSheetContentContainerStyle, onRefresh, onScroll: scrollHandler, onContentSizeChange: stableCallback, setContentSize, ScrollableComponent, refreshControl };
    let merged = Object.assign(tmp3);
    return jsx(ScrollableContainer.ScrollableContainer, { ref: scrollableRef, nativeGesture: tmp10, animatedProps, overScrollMode: str, keyboardDismissMode: str2, refreshing, scrollEventThrottle: 16, progressViewOffset, contentContainerStyle: bottomSheetContentContainerStyle, onRefresh, onScroll: scrollHandler, onContentSizeChange: stableCallback, setContentSize, ScrollableComponent, refreshControl });
  });
};