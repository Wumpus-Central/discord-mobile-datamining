// === Module 9792: SegmentedControlState ===

// Module 9792 (SegmentedControlState)
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 4962 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function SegmentedControlStateNativeTsx1(index,dimensions){const{itemDimensions,itemCount}=this.__closure;itemDimensions.get()[index]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));}" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlState.native.tsx");

export const useSegmentedControlState = function useSegmentedControlState(pageWidth) {
  let items = pageWidth.items;
  pageWidth = pageWidth.pageWidth;
  let num = pageWidth.defaultIndex;
  if (num === undefined) {
    num = 0;
  }
  let PX_24 = pageWidth.itemSpacing;
  if (PX_24 === undefined) {
    PX_24 = pageWidth(PX_24[1]).space.PX_24;
  }
  const onPageChange = pageWidth.onPageChange;
  const onPageChangeStart = pageWidth.onPageChangeStart;
  const onSetActiveIndex = pageWidth.onSetActiveIndex;
  let callback1;
  const enabled = onPageChange.useContext(items(PX_24[2]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const sharedValue = items(PX_24[3]).useSharedValue([]);
  let obj = items(PX_24[3]);
  const sharedValue1 = items(PX_24[3]).useSharedValue(-1);
  const obj2 = items(PX_24[3]);
  const sharedValue2 = items(PX_24[3]).useSharedValue(0);
  let obj3 = items(PX_24[3]);
  const sharedValue3 = items(PX_24[3]).useSharedValue(0);
  const obj4 = items(PX_24[3]);
  const sharedValue4 = items(PX_24[3]).useSharedValue(num);
  const obj5 = items(PX_24[3]);
  const items1 = [num, num];
  const sharedValue5 = items(PX_24[3]).useSharedValue(items1);
  const obj6 = items(PX_24[3]);
  const animatedRef = items(PX_24[3]).useAnimatedRef();
  const obj7 = items(PX_24[3]);
  const sharedValue6 = items(PX_24[3]).useSharedValue(-1);
  const onPageChangeRef = onPageChange.useRef(onPageChange);
  const items2 = [onPageChange];
  const layoutEffect = onPageChange.useLayoutEffect(() => {
    closure_15.current = onPageChange;
  }, items2);
  const items3 = [sharedValue4, onPageChangeStart, pageWidth, sharedValue1, animatedRef, enabled, onSetActiveIndex];
  const setActiveIndex = onPageChange.useCallback((arg0) => {
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
          const result = sharedValue4.set(closure_0);
          const result1 = closure_0 * pageWidth;
          const result2 = sharedValue1.set(result1);
          let tmp5 = !flag2;
          if (!flag2) {
            tmp5 = !enabled;
          }
          if (tmp5) {
            let obj = useIsScreenReaderEnabled;
            tmp5 = !obj.getIsScreenReaderEnabled();
          }
          if (animatedRef != null) {
            const current = animatedRef.current;
            if (current != null) {
              obj = { x: result1, animated: tmp5 };
              current.scrollTo(obj);
            }
          }
          if (onSetActiveIndex != null) {
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
            obj = { x: result2, animated: tmp8 };
            current.scrollTo(obj);
          }
        }
        if (onSetActiveIndex != null) {
          onSetActiveIndex(arg0);
        }
      }
    }
  }, items3);
  const length = items.length;
  class M {
    constructor(arg0, arg1) {
      closure_7.get()[pageWidth] = arg1;
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
  const items5 = [sharedValue4, sharedValue5, animatedRef, sharedValue1, sharedValue2, sharedValue3, items, sharedValue, PX_24, pageWidth, sharedValue6, setActiveIndex, callback1, enabled];
  return onPageChange.useMemo(() => ({ activeIndex: sharedValue4, visiblePageRange: sharedValue5, pagerRef: animatedRef, scrollTarget: sharedValue1, scrollOverflow: sharedValue2, scrollOffset: sharedValue3, items, itemDimensions: sharedValue, itemSpacing: PX_24, pageWidth, pressedIndex: sharedValue6, onPageChangeRef, setActiveIndex, setItemDimensions: callback1, useReducedMotion: enabled }), items5);
};