// === Module 9077: SegmentedControlState ===

// Module 9077 (SegmentedControlState)
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5420 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_4 = { code: "(function SegmentedControlStateNativeTsx1(index,dimensions){let[itemDimensions,itemCount]=this.__closure;itemDimensions.get()[index]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlState.native.tsx");

export function useSegmentedControlState(pageWidth) {
  items = pageWidth.items;
  _require = items;
  pageWidth = pageWidth.pageWidth;
  importDefault = pageWidth;
  let num = pageWidth.defaultIndex;
  if (num === undefined) {
    num = 0;
  }
  let PX_24 = pageWidth.itemSpacing;
  if (PX_24 === undefined) {
    PX_24 = require("native").space.PX_24;
  }
  const onPageChange = pageWidth.onPageChange;
  const onPageChangeStart = pageWidth.onPageChangeStart;
  const onSetActiveIndex = pageWidth.onSetActiveIndex;
  let callback1;
  const enabled = onPageChange.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext).reducedMotion.enabled;
  const sharedValue = require("module_1652").useSharedValue([]);
  let obj = onPageChange;
  let obj2 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(-1);
  let obj3 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  let obj4 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(0);
  const obj5 = require("module_1652");
  const sharedValue4 = require("module_1652").useSharedValue(num);
  const obj6 = require("module_1652");
  const items1 = [num, num];
  const sharedValue5 = require("module_1652").useSharedValue(items1);
  const obj7 = require("module_1652");
  const animatedRef = require("module_1652").useAnimatedRef();
  const obj8 = require("module_1652");
  const sharedValue6 = require("module_1652").useSharedValue(-1);
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
      let result = items(PX_24[4]).triggerHapticFeedback(items(PX_24[4]).HapticFeedbackTypes.IMPACT_MEDIUM);
      let obj = items(PX_24[4]);
    }
    if (arg0 !== sharedValue4.get()) {
      if (null != onPageChangeStart) {
        tmp14(arg0, () => {
          const result = sharedValue4.set(closure_0);
          const result1 = closure_0 * c1;
          const result2 = sharedValue1.set(result1);
          let tmp5 = !flag2;
          if (!flag2) {
            tmp5 = !enabled;
          }
          if (tmp5) {
            tmp5 = !useIsScreenReaderEnabled.getIsScreenReaderEnabled();
          }
          if (animatedRef != null) {
            const current = animatedRef.current;
            if (current != null) {
              const obj2 = { x: result1, animated: tmp5 };
              current.scrollTo(obj2);
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
            const obj4 = { x: result2, animated: tmp8 };
            current.scrollTo(obj4);
          }
        }
        if (onSetActiveIndex != null) {
          onSetActiveIndex(arg0);
        }
      }
    }
  }, items3);
  const items4 = [onPageChangeStart, sharedValue, items.length];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items4;
  class SegmentedControlStateNativeTsx1 {
    constructor(arg0, arg1) {
      closure_0.get()[pageWidth] = arg1;
      items = [...closure_0.get()];
      result = closure_0.set(items.slice(0, closure_1));
      return;
    }
  }
  const items5 = [tmp14, tmp15];
  SegmentedControlStateNativeTsx1.__closure = items5;
  SegmentedControlStateNativeTsx1.__workletHash = 572134650279;
  SegmentedControlStateNativeTsx1.__initData = tmp13;
  const items6 = [sharedValue, items.length];
  callback1 = onPageChange.useCallback(SegmentedControlStateNativeTsx1, items6);
  const items7 = [sharedValue4, sharedValue5, animatedRef, sharedValue1, sharedValue2, sharedValue3, items, sharedValue, PX_24, pageWidth, sharedValue6, setActiveIndex, callback1, enabled];
  return obj.useMemo(() => ({ activeIndex: sharedValue4, visiblePageRange: sharedValue5, pagerRef: animatedRef, scrollTarget: sharedValue1, scrollOverflow: sharedValue2, scrollOffset: sharedValue3, items, itemDimensions: sharedValue, itemSpacing: PX_24, pageWidth, pressedIndex: sharedValue6, onPageChangeRef, setActiveIndex, setItemDimensions: callback1, useReducedMotion: enabled }), items7);
}