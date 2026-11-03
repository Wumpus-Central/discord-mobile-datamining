// === Module 5611: createBottomSheetScrollableComponent ===

// Module 5611 (createBottomSheetScrollableComponent)
import _mod1652 from "module_1652" /* 1652 */;
import value2 from "value2" /* 5399 */;
import _mod5403 from "module_5403" /* 5403 */;
import _mod5410 from "module_5410" /* 5410 */;
import _mod5612 from "module_5612" /* 5612 */;
import ScrollableContainer from "ScrollableContainer" /* 5613 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment", "overScrollMode", "keyboardDismissMode", "showsVerticalScrollIndicator", "contentContainerStyle", "refreshing", "onRefresh", "progressViewOffset", "refreshControl", "preserveScrollMomentum", "onScroll", "onScrollBeginDrag", "onScrollEndDrag", "lockableScrollableContentOffsetY", "onContentSizeChange"];
let noop = fn(19);
({ forwardRef: closure_4, useContext: hasOwnProperty, useImperativeHandle: metroRequire, useMemo: closure_7 } = noop);
let noop = noop_mod;
const jsx = fn(21).jsx;
let closure_9 = { code: "(function pnpm_createBottomSheetScrollableComponentTsx1(){let[preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE]=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};})" };

export function createBottomSheetScrollableComponent(SCROLLVIEW, animatedComponent) {
  closure_0 = SCROLLVIEW;
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
    ({ onRefresh, preserveScrollMomentum, onScroll, onContentSizeChange: c0 } = overScrollMode);
    ({ contentContainerStyle, refreshing, progressViewOffset, refreshControl, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY } = overScrollMode);
    const tmp6 = hasOwnProperty(_mod5410.BottomSheetDraggableContext);
    c1 = tmp6;
    const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
    const tmp3 = _objectWithoutProperties(overScrollMode, _undefined3);
    const scrollHandler1 = _mod5403.useScrollHandler(scrollEventsHandlersHook, onScroll, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY);
    const scrollableRef = scrollHandler1.scrollableRef;
    c2 = scrollableRef;
    ({ scrollableContentOffsetY, scrollHandler } = scrollHandler1);
    const bottomSheetInternal = _mod5403.useBottomSheetInternal();
    ({ animatedScrollableState, enableContentPanningGesture } = bottomSheetInternal);
    const setContentSize = _mod5612.useBottomSheetContentSizeSetter().setContentSize;
    c3 = setContentSize;
    if (!tmp6) {
      if (enableContentPanningGesture) {
        throw "'Scrollable' cannot be used out of the BottomSheet!";
      }
    }
    items = [closure_9, preserveScrollMomentum, value2.SCROLLABLE_DECELERATION_RATE_MAPPER, animatedScrollableState, undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator, value2.SCROLLABLE_STATE];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
    function pnpm_createBottomSheetScrollableComponentTsx1() {
      if (c0) {
        let obj = {};
      } else {
        obj = { decelerationRate: _undefined2[_undefined3.value] };
      }
      const obj2 = {};
      const merged = Object.assign(obj);
      let tmp4 = c3;
      if (c3) {
        tmp4 = _undefined3.value === _undefined5.UNLOCKED;
      }
      obj2.showsVerticalScrollIndicator = tmp4;
      return obj2;
    }
    const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14];
    pnpm_createBottomSheetScrollableComponentTsx1.__closure = items1;
    pnpm_createBottomSheetScrollableComponentTsx1.__workletHash = 6870930480613;
    pnpm_createBottomSheetScrollableComponentTsx1.__initData = tmp9;
    const items2 = [animatedScrollableState, undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator, preserveScrollMomentum];
    const items3 = [tmp6];
    const animatedProps = _mod1652.useAnimatedProps(pnpm_createBottomSheetScrollableComponentTsx1, items2);
    const tmp4Result = _mod1652;
    const tmp16 = React5(() => {
      let result1;
      if (c1) {
        const Gesture = _undefined(_undefined2[8]).Gesture;
        const result = Gesture.Native().simultaneousWithExternalGesture(tmp);
        result1 = result.shouldCancelWhenOutside(false);
        const NativeResult = Gesture.Native();
      }
      return result1;
    }, items3);
    const tmp4Result4 = _mod5403;
    const stableCallback = _mod5403.useStableCallback((arg0, arg1) => {
      _undefined4(arg1);
      if (c0) {
        tmp2(arg0, arg1);
      }
    });
    const bottomSheetContentContainerStyle = _mod5403.useBottomSheetContentContainerStyle(tmp, contentContainerStyle);
    timestampProducer(arg1, () => _undefined3.current);
    const tmp4Result5 = _mod5403;
    const scrollableSetter = _mod5403.useScrollableSetter(scrollableRef, _undefined, scrollableContentOffsetY, undefined !== onRefresh, focusHook);
    let merged = Object.assign(tmp3);
    return jsx(ScrollableContainer.ScrollableContainer, { ref: scrollableRef, nativeGesture: tmp16, animatedProps, overScrollMode: str, keyboardDismissMode: str2, refreshing, scrollEventThrottle: 16, progressViewOffset, contentContainerStyle: bottomSheetContentContainerStyle, onRefresh, onScroll: scrollHandler, onContentSizeChange: stableCallback, setContentSize, ScrollableComponent, refreshControl });
  });
}