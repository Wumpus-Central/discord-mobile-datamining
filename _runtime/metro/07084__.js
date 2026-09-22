// _runtime/metro/07084__.js
import cancelAnimation from "../01637_cancelAnimation.js";
import value2 from "../06872_value2.js";
import _mod6876 from "06876__.js";
import _mod6883 from "06883__.js";
import _mod7085 from "07085__.js";
import ScrollableContainer from "../07086_ScrollableContainer.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop_mod from "00019__.js";

require = fn;
let closure_2 = [
  "focusHook",
  "scrollEventsHandlersHook",
  "enableFooterMarginAdjustment",
  "overScrollMode",
  "keyboardDismissMode",
  "showsVerticalScrollIndicator",
  "contentContainerStyle",
  "refreshing",
  "onRefresh",
  "progressViewOffset",
  "refreshControl",
  "preserveScrollMomentum",
  "onScroll",
  "onScrollBeginDrag",
  "onScrollEndDrag",
  "lockableScrollableContentOffsetY",
  "onContentSizeChange",
];
let noop = fn(19);
({ forwardRef: closure_4, useContext: hasOwnProperty, useImperativeHandle: metroRequire, useMemo: closure_7 } = noop);
let noop = noop_mod;
const jsx = fn(21).jsx;
let closure_9 = {
  code: "function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}",
};

export const createBottomSheetScrollableComponent = function createBottomSheetScrollableComponent(
  SCROLLVIEW,
  animatedComponent,
) {
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
    ({
      contentContainerStyle,
      refreshing,
      progressViewOffset,
      refreshControl,
      onScrollBeginDrag,
      onScrollEndDrag,
      lockableScrollableContentOffsetY,
    } = overScrollMode);
    const tmp6 = hasOwnProperty(_mod6883.BottomSheetDraggableContext);
    closure_3 = tmp6;
    const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
    const tmp3 = _objectWithoutProperties(overScrollMode, closure_2);
    const scrollHandler1 = _mod6876.useScrollHandler(
      scrollEventsHandlersHook,
      onScroll,
      onScrollBeginDrag,
      onScrollEndDrag,
      lockableScrollableContentOffsetY,
    );
    const scrollableRef = scrollHandler1.scrollableRef;
    ({ scrollableContentOffsetY, scrollHandler } = scrollHandler1);
    const bottomSheetInternal = _mod6876.useBottomSheetInternal();
    const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
    const setContentSize = _mod7085.useBottomSheetContentSizeSetter().setContentSize;
    if (!tmp6) {
      if (bottomSheetInternal.enableContentPanningGesture) {
        throw "'Scrollable' cannot be used out of the BottomSheet!";
      }
    }
    class J {
      constructor() {
        if (preserveScrollMomentum) {
          obj = {};
        } else {
          obj = { decelerationRate: null };
          tmp = closure_0;
          tmp2 = closure_1;
          tmp3 = animatedScrollableState;
          obj.decelerationRate = closure_0(closure_1[7]).SCROLLABLE_DECELERATION_RATE_MAPPER[
            animatedScrollableState.value
          ];
        }
        obj1 = {};
        merged = Object.assign(obj);
        tmp5 = closure_0;
        if (closure_0) {
          tmp6 = animatedScrollableState;
          tmp7 = closure_0;
          tmp8 = closure_1;
          tmp5 = animatedScrollableState.value === closure_0(closure_1[7]).SCROLLABLE_STATE.UNLOCKED;
        }
        obj1.showsVerticalScrollIndicator = tmp5;
        return obj1;
      }
    }
    const tmp4Result = cancelAnimation;
    J.__closure = {
      preserveScrollMomentum,
      SCROLLABLE_DECELERATION_RATE_MAPPER: value2.SCROLLABLE_DECELERATION_RATE_MAPPER,
      animatedScrollableState,
      showsVerticalScrollIndicator: undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator,
      SCROLLABLE_STATE: value2.SCROLLABLE_STATE,
    };
    J.__workletHash = 1780437272380;
    J.__initData = __initData;
    const items = [
      animatedScrollableState,
      undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator,
      preserveScrollMomentum,
    ];
    const items1 = [tmp6];
    const animatedProps = tmp4Result.useAnimatedProps(J, items);
    const obj4 = {
      preserveScrollMomentum,
      SCROLLABLE_DECELERATION_RATE_MAPPER: value2.SCROLLABLE_DECELERATION_RATE_MAPPER,
      animatedScrollableState,
      showsVerticalScrollIndicator: undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator,
      SCROLLABLE_STATE: value2.SCROLLABLE_STATE,
    };
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
    const tmp4Result4 = _mod6876;
    const stableCallback = _mod6876.useStableCallback((arg0, arg1) => {
      setContentSize(arg1);
      if (closure_1_2) {
        tmp2(arg0, arg1);
      }
    });
    const bottomSheetContentContainerStyle = _mod6876.useBottomSheetContentContainerStyle(tmp, contentContainerStyle);
    timestampProducer(arg1, () => scrollableRef.current);
    const tmp4Result5 = _mod6876;
    const scrollableSetter = _mod6876.useScrollableSetter(
      scrollableRef,
      SCROLLVIEW,
      scrollableContentOffsetY,
      undefined !== onRefresh,
      focusHook,
    );
    let merged = Object.assign(tmp3);
    return jsx(ScrollableContainer.ScrollableContainer, {
      ref: scrollableRef,
      nativeGesture: tmp10,
      animatedProps,
      overScrollMode: str,
      keyboardDismissMode: str2,
      refreshing,
      scrollEventThrottle: 16,
      progressViewOffset,
      contentContainerStyle: bottomSheetContentContainerStyle,
      onRefresh,
      onScroll: scrollHandler,
      onContentSizeChange: stableCallback,
      setContentSize,
      ScrollableComponent,
      refreshControl,
    });
  });
};
