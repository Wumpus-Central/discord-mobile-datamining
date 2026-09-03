// === Module 9277: useSegmentedControlState ===

// Module 9277 (useSegmentedControlState)
import closure_3 from "noop" /* 19 */;

const require = arg1;
let closure_4 = { code: "function SegmentedControlStateNativeTsx1(index,dimensions){const{itemDimensions,itemCount}=this.__closure;itemDimensions.get()[index]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));}" };
let result = require("set").fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlState.native.tsx");

export const useSegmentedControlState = function useSegmentedControlState(items) {
  items = items.items;
  const pageWidth = items.pageWidth;
  let num = items.defaultIndex;
  if (num === undefined) {
    num = 0;
  }
  let PX_24 = items.itemSpacing;
  if (PX_24 === undefined) {
    PX_24 = pageWidth(PX_24[1]).space.PX_24;
  }
  const onPageChange = items.onPageChange;
  const onPageChangeStart = items.onPageChangeStart;
  const onSetActiveIndex = items.onSetActiveIndex;
  let enabled;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let animatedRef;
  let sharedValue6;
  closure_15 = undefined;
  let callback;
  let length;
  let callback1;
  enabled = onPageChange.useContext(items(PX_24[2]).AccessibilityPreferencesContext).reducedMotion.enabled;
  sharedValue = items(PX_24[3]).useSharedValue([]);
  let obj = items(PX_24[3]);
  sharedValue1 = items(PX_24[3]).useSharedValue(-1);
  const obj2 = items(PX_24[3]);
  sharedValue2 = items(PX_24[3]).useSharedValue(0);
  let obj3 = items(PX_24[3]);
  sharedValue3 = items(PX_24[3]).useSharedValue(0);
  const obj4 = items(PX_24[3]);
  sharedValue4 = items(PX_24[3]).useSharedValue(num);
  const obj5 = items(PX_24[3]);
  const items1 = [num, num];
  sharedValue5 = items(PX_24[3]).useSharedValue(items1);
  const obj6 = items(PX_24[3]);
  animatedRef = items(PX_24[3]).useAnimatedRef();
  const obj7 = items(PX_24[3]);
  sharedValue6 = items(PX_24[3]).useSharedValue(-1);
  closure_15 = onPageChange.useRef(onPageChange);
  const items2 = [onPageChange];
  const layoutEffect = onPageChange.useLayoutEffect(() => {
    closure_15.current = onPageChange;
  }, items2);
  const items3 = [sharedValue4, onPageChangeStart, pageWidth, sharedValue1, animatedRef, enabled, onSetActiveIndex];
  callback = onPageChange.useCallback((arg0) => {
    closure_0 = arg0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    let flag2 = arg2;
    if (arg2 === undefined) {
      flag2 = false;
    }
    if (flag) {
      flag = sharedValue4.get() !== arg0;
    }
    if (flag) {
      let obj = items(PX_24[4]);
      let result = obj.triggerHapticFeedback(items(PX_24[4]).HapticFeedbackTypes.IMPACT_MEDIUM);
    }
    if (arg0 !== sharedValue4.get()) {
      if (null != onPageChangeStart) {
        tmp14(arg0, () => {
          const result = closure_1_11.set(closure_0);
          const result1 = closure_0 * flag2;
          const result2 = closure_1_8.set(result1);
          let tmp5 = !flag2;
          if (!flag2) {
            tmp5 = !closure_1_6;
          }
          if (tmp5) {
            let obj = items(PX_24[5]);
            tmp5 = !obj.getIsScreenReaderEnabled();
          }
          if (closure_1_13 != null) {
            const current = closure_1_13.current;
            if (current != null) {
              obj = { x: null, animated: null };
              obj[0] = result1;
              obj[1] = tmp5;
              current.scrollTo(obj);
            }
          }
          if (closure_1_5 != null) {
            tmp10(closure_0);
          }
        });
      } else {
        let result1 = sharedValue4.set(arg0);
        let result2 = arg0 * flag2;
        const result3 = sharedValue1.set(result2);
        let tmp8 = !flag2;
        if (!flag2) {
          tmp8 = !enabled;
        }
        if (tmp8) {
          tmp8 = !items(PX_24[5]).getIsScreenReaderEnabled();
          const obj3 = items(PX_24[5]);
        }
        if (animatedRef != null) {
          let current = animatedRef.current;
          if (current != null) {
            obj = { x: null, animated: null };
            obj[0] = result2;
            obj[1] = tmp8;
            current.scrollTo(obj);
          }
        }
        if (onSetActiveIndex != null) {
          onSetActiveIndex(arg0);
        }
      }
    }
  }, items3);
  length = items.length;
  class M {
    constructor(arg0, arg1) {
      closure_7.get()[items] = arg1;
      items = [...closure_7.get()];
      result = closure_7.set(items.slice(0, length));
      return;
    }
  }
  M.__closure = { itemDimensions: sharedValue, itemCount: length };
  M.__workletHash = 9501406272062;
  M.__initData = onPageChangeStart;
  const items4 = [sharedValue, length];
  callback1 = onPageChange.useCallback(M, items4);
  const items5 = [sharedValue4, sharedValue5, animatedRef, sharedValue1, sharedValue2, sharedValue3, items, sharedValue, PX_24, pageWidth, sharedValue6, callback, callback1, enabled];
  return onPageChange.useMemo(() => ({ activeIndex: sharedValue4, visiblePageRange: sharedValue5, pagerRef: animatedRef, scrollTarget: sharedValue1, scrollOverflow: sharedValue2, scrollOffset: sharedValue3, items, itemDimensions: sharedValue, itemSpacing: PX_24, pageWidth, pressedIndex: sharedValue6, onPageChangeRef: closure_15, setActiveIndex: callback, setItemDimensions: callback1, useReducedMotion: enabled }), items5);
};