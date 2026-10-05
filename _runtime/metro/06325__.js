// _runtime/metro/06325__.js
import Fragment from "../react/00021_Fragment.js";
import _mod1643 from "01643__.js";
import GESTURE_SOURCE from "../06113_GESTURE_SOURCE.js";
import _mod6117 from "06117__.js";
import react2 from "../06124_react.js";
import react3 from "../06326_react.js";
import ScrollableContainer2 from "../06327_ScrollableContainer.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import react_mod from "../00019_react.js";

let overScrollMode;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
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
let react = react_mod;
({
  forwardRef: closure_4,
  useContext: hasOwnProperty,
  useImperativeHandle: metroRequire,
  useMemo: metroImportDefault,
} = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_9 = {
  code: "function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}",
};

export const createBottomSheetScrollableComponent = function createBottomSheetScrollableComponent(
  SCROLLVIEW,
  animatedComponent,
) {
  let closure_0 = SCROLLVIEW;
  const ScrollableComponent = animatedComponent;
  return closure_4((overScrollMode, View) => {
    let closure_129_2;
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
    const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
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
    const tmp2 = undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator;
    let closure_0 = tmp2;
    ({ onRefresh, preserveScrollMomentum } = overScrollMode);
    ({ onScroll, onContentSizeChange: closure_129_2 } = overScrollMode);
    ({
      contentContainerStyle,
      refreshing,
      progressViewOffset,
      refreshControl,
      onScrollBeginDrag,
      onScrollEndDrag,
      lockableScrollableContentOffsetY,
    } = overScrollMode);
    const tmp3 = _objectWithoutProperties(overScrollMode, closure_2);
    let tmp6 = hasOwnProperty(react2.BottomSheetDraggableContext);
    let closure_3 = tmp6;
    let obj = _mod6117;
    const scrollHandler1 = obj.useScrollHandler(
      scrollEventsHandlersHook,
      onScroll,
      onScrollBeginDrag,
      onScrollEndDrag,
      lockableScrollableContentOffsetY,
    );
    const scrollableRef = scrollHandler1.scrollableRef;
    ({ scrollableContentOffsetY, scrollHandler } = scrollHandler1);
    let obj2 = _mod6117;
    const bottomSheetInternal = obj2.useBottomSheetInternal();
    const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
    const enableContentPanningGesture = bottomSheetInternal.enableContentPanningGesture;
    const obj3 = react3;
    const setContentSize = obj3.useBottomSheetContentSizeSetter().setContentSize;
    if (!tmp6) {
      if (enableContentPanningGesture) {
        throw "'Scrollable' cannot be used out of the BottomSheet!";
      }
    }
    const tmp4Result = _mod1643;
    class J {
      constructor() {
        let obj;
        let tmp6;
        if (preserveScrollMomentum) {
          obj = {};
        } else {
          obj = {
            decelerationRate: SCROLLVIEW(ScrollableComponent[7]).SCROLLABLE_DECELERATION_RATE_MAPPER[
              animatedScrollableState.value
            ],
          };
        }
        const obj2 = { showsVerticalScrollIndicator: tmp6 };
        const merged = Object.assign(obj);
        tmp6 =
          closure_0 && animatedScrollableState.value === SCROLLVIEW(ScrollableComponent[7]).SCROLLABLE_STATE.UNLOCKED;
        return obj2;
      }
    }
    J.__closure = {
      preserveScrollMomentum,
      SCROLLABLE_DECELERATION_RATE_MAPPER: GESTURE_SOURCE.SCROLLABLE_DECELERATION_RATE_MAPPER,
      animatedScrollableState,
      showsVerticalScrollIndicator: tmp2,
      SCROLLABLE_STATE: GESTURE_SOURCE.SCROLLABLE_STATE,
    };
    J.__workletHash = 1780437272380;
    J.__initData = __initData;
    const items = [animatedScrollableState, tmp2, preserveScrollMomentum];
    const items1 = [tmp6];
    ({
      preserveScrollMomentum,
      SCROLLABLE_DECELERATION_RATE_MAPPER: GESTURE_SOURCE.SCROLLABLE_DECELERATION_RATE_MAPPER,
      animatedScrollableState,
      showsVerticalScrollIndicator: tmp2,
      SCROLLABLE_STATE: GESTURE_SOURCE.SCROLLABLE_STATE,
    });
    const animatedProps = tmp4Result.useAnimatedProps(J, items);
    const tmp10 = metroImportDefault(() => {
      let result1;
      if (closure_3) {
        const Gesture = SCROLLVIEW(ScrollableComponent[8]).Gesture;
        const NativeResult = Gesture.Native();
        const result = NativeResult.simultaneousWithExternalGesture(tmp);
        result1 = result.shouldCancelWhenOutside(false);
      }
      return result1;
    }, items1);
    const tmp4Result4 = _mod6117;
    const stableCallback = tmp4Result4.useStableCallback((arg0, arg1) => {
      setContentSize(arg1);
      if (closure_1_2) {
        tmp2(arg0, arg1);
      }
    });
    const tmp4Result5 = _mod6117;
    const bottomSheetContentContainerStyle = tmp4Result5.useBottomSheetContentContainerStyle(
      tmp,
      contentContainerStyle,
    );
    metroRequire(View, () => scrollableRef.current);
    const tmp4Result6 = _mod6117;
    const scrollableSetter = tmp4Result6.useScrollableSetter(
      scrollableRef,
      closure_0,
      scrollableContentOffsetY,
      undefined !== onRefresh,
      focusHook,
    );
    const ScrollableContainer = ScrollableContainer2.ScrollableContainer;
    let merged = Object.assign(tmp3);
    return (
      <ScrollableContainer
        ref={scrollableRef}
        nativeGesture={tmp10}
        animatedProps={animatedProps}
        overScrollMode={str}
        keyboardDismissMode={str2}
        refreshing={refreshing}
        scrollEventThrottle={16}
        progressViewOffset={progressViewOffset}
        contentContainerStyle={bottomSheetContentContainerStyle}
        onRefresh={onRefresh}
        onScroll={scrollHandler}
        onContentSizeChange={stableCallback}
        setContentSize={setContentSize}
        ScrollableComponent={ScrollableComponent}
        refreshControl={refreshControl}
      />
    );
  });
};
