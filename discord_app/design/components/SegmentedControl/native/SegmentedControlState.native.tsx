// === Module 9282: SegmentedControlState ===

// Module 9282 (SegmentedControlState)
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5770 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4 = { code: "function SegmentedControlStateNativeTsx1(index_1,dimensions){const{itemDimensions,itemCount}=this.__closure;itemDimensions.get()[index_1]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));}" };
let closure_5 = { code: "function SegmentedControlStateNativeTsx2(index_1,dimensions){const{itemDimensions,itemCount}=this.__closure;itemDimensions.get()[index_1]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPageChangeStart) => {
  let defaultIndex;
  let itemSpacing;
  let items;
  let onPageChange;
  let pageWidth;
  let tmp14;
  let tmp15;
  const tmp = pageWidth;
  let tmp2 = onPageChangeStart;
  let obj = pageWidth(onPageChangeStart[2]);
  const cResult = obj.c(29);
  ({ items, pageWidth } = onPageChangeStart);
  ({ defaultIndex, itemSpacing, onPageChange } = onPageChangeStart);
  onPageChangeStart = onPageChangeStart.onPageChangeStart;
  const onSetActiveIndex = onPageChangeStart.onSetActiveIndex;
  let num = 0;
  if (undefined !== defaultIndex) {
    num = defaultIndex;
  }
  if (undefined === itemSpacing) {
    itemSpacing = onPageChange(tmp2[3]).space.PX_24;
  }
  let obj2 = onSetActiveIndex;
  const enabled = onSetActiveIndex.useContext(tmp(tmp2[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmpResult = tmp(tmp2[5]);
  const sharedValue = tmpResult.useSharedValue([]);
  const tmpResult8 = tmp(tmp2[5]);
  const sharedValue1 = tmpResult8.useSharedValue(-1);
  const tmpResult9 = tmp(tmp2[5]);
  const sharedValue2 = tmpResult9.useSharedValue(0);
  const tmpResult10 = tmp(tmp2[5]);
  const sharedValue3 = tmpResult10.useSharedValue(0);
  const tmpResult11 = tmp(tmp2[5]);
  const sharedValue4 = tmpResult11.useSharedValue(num);
  const items1 = [num, num];
  const tmpResult12 = tmp(tmp2[5]);
  const sharedValue5 = tmpResult12.useSharedValue(items1);
  const tmpResult13 = tmp(tmp2[5]);
  const animatedRef = tmpResult13.useAnimatedRef();
  const tmpResult14 = tmp(tmp2[5]);
  const sharedValue6 = tmpResult14.useSharedValue(-1);
  const ref = onSetActiveIndex.useRef(onPageChange);
  if (cResult[0] !== onPageChange) {
    const fn = function o() {
      ref.current = onPageChange;
    };
    const items2 = [onPageChange];
    cResult[0] = onPageChange;
    cResult[1] = fn;
    cResult[2] = items2;
    tmp15 = items2;
    tmp14 = fn;
  } else {
    tmp14 = cResult[1];
    tmp15 = cResult[2];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp14, tmp15);
  if (cResult[3] === sharedValue4) {
    if (cResult[4] === onPageChangeStart) {
      if (cResult[5] === onSetActiveIndex) {
        if (cResult[6] === pageWidth) {
          if (cResult[7] === animatedRef) {
            if (cResult[8] === sharedValue1) {
              let tmp17;
              if (cResult[9] === enabled) {
                tmp17 = cResult[10];
              }
              const length = items.length;
              if (cResult[11] === length) {
                let tmp18;
                if (cResult[12] === sharedValue) {
                  tmp18 = cResult[13];
                }
                if (cResult[14] === sharedValue4) {
                  if (cResult[15] === sharedValue) {
                    if (cResult[16] === itemSpacing) {
                      if (cResult[17] === items) {
                        if (cResult[18] === pageWidth) {
                          if (cResult[19] === animatedRef) {
                            if (cResult[20] === sharedValue6) {
                              if (cResult[21] === sharedValue3) {
                                if (cResult[22] === sharedValue2) {
                                  if (cResult[23] === sharedValue1) {
                                    if (cResult[24] === tmp17) {
                                      if (cResult[25] === tmp18) {
                                        if (cResult[26] === enabled) {
                                          let tmp20;
                                          if (cResult[27] === sharedValue5) {
                                            tmp20 = cResult[28];
                                          }
                                          return tmp20;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                let obj3 = { activeIndex: sharedValue4, visiblePageRange: null, pagerRef: animatedRef, scrollTarget: sharedValue1, scrollOverflow: sharedValue2, scrollOffset: sharedValue3, items, itemDimensions: sharedValue, itemSpacing, pageWidth, pressedIndex: sharedValue6, onPageChangeRef: ref, setActiveIndex: tmp17, setItemDimensions: tmp18, useReducedMotion: enabled };
                class H {
                  constructor(arg0, arg1) {
                    sharedValue.get()[arg0] = arg1;
                    const items = [...sharedValue.get()];
                    const result = sharedValue.set(items.slice(0, length));
                  }
                }
                cResult[14] = sharedValue4;
                cResult[15] = sharedValue;
                cResult[16] = itemSpacing;
                cResult[17] = items;
                cResult[18] = pageWidth;
                cResult[19] = animatedRef;
                cResult[20] = sharedValue6;
                cResult[21] = sharedValue3;
                cResult[22] = sharedValue2;
                cResult[23] = sharedValue1;
                cResult[24] = tmp17;
                cResult[25] = tmp18;
                cResult[26] = enabled;
                cResult[27] = sharedValue5;
                cResult[28] = obj3;
                tmp20 = obj3;
              }
              class H {
                constructor(arg0, arg1) {
                  sharedValue.get()[arg0] = arg1;
                  const items = [...sharedValue.get()];
                  const result = sharedValue.set(items.slice(0, length));
                }
              }
              let obj4 = { itemDimensions: sharedValue, itemCount: length };
              H.__closure = obj4;
              H.__workletHash = 9099516569342;
              H.__initData = enabled;
              cResult[11] = length;
              cResult[12] = sharedValue;
              cResult[13] = H;
              tmp18 = H;
            }
          }
        }
      }
    }
  }
  const fn2 = function c(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = tmp;
    const tmp2 = (undefined === arg1 || arg1) && sharedValue4.get() !== arg0;
    if (tmp2) {
      let obj = pageWidth(onPageChangeStart[6]);
      let result = obj.triggerHapticFeedback(pageWidth(onPageChangeStart[6]).HapticFeedbackTypes.IMPACT_MEDIUM);
    }
    if (arg0 !== sharedValue4.get()) {
      function updateIndex(arg0) {

      }
      if (null != updateIndex) {
        tmp16(arg0, () => {
          if (typeof updateIndex === "function") {
            const result = sharedValue4.set(closure_0);
            const result1 = closure_0 * pageWidth;
            const result2 = sharedValue1.set(result1);
            let tmp9 = !closure_1 && !enabled;
            if (tmp9) {
              const obj = useIsScreenReaderEnabled;
              tmp9 = !obj.getIsScreenReaderEnabled();
            }
            if (animatedRef != null) {
              const current = animatedRef.current;
              if (current != null) {
                const obj2 = { x: result1, animated: tmp9 };
                current.scrollTo(obj2);
              }
            }
            if (onSetActiveIndex != null) {
              tmp15(closure_0);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
      } else {
        let result1 = sharedValue4.set(arg0);
        let result2 = arg0 * closure_0;
        const result3 = sharedValue1.set(result2);
        let tmp10 = !tmp && !enabled;
        if (tmp10) {
          const obj3 = pageWidth(onPageChangeStart[7]);
          tmp10 = !obj3.getIsScreenReaderEnabled();
        }
        if (animatedRef != null) {
          let current = animatedRef.current;
          if (current != null) {
            const obj4 = { x: result2, animated: tmp10 };
            current.scrollTo(obj4);
          }
        }
        if (onSetActiveIndex != null) {
          onSetActiveIndex(arg0);
        }
      }
    }
  };
  cResult[3] = sharedValue4;
  cResult[4] = onPageChangeStart;
  cResult[5] = onSetActiveIndex;
  cResult[6] = pageWidth;
  cResult[7] = animatedRef;
  cResult[8] = sharedValue1;
  cResult[9] = enabled;
  cResult[10] = fn2;
  tmp17 = fn2;
}) : ((pageWidth) => {
  let items = pageWidth.items;
  pageWidth = pageWidth.pageWidth;
  let num = pageWidth.defaultIndex;
  if (num === undefined) {
    num = 0;
  }
  let PX_24 = pageWidth.itemSpacing;
  if (PX_24 === undefined) {
    PX_24 = pageWidth(PX_24[3]).space.PX_24;
  }
  const onPageChange = pageWidth.onPageChange;
  const onPageChangeStart = pageWidth.onPageChangeStart;
  const onSetActiveIndex = pageWidth.onSetActiveIndex;
  let callback1;
  const enabled = onPageChange.useContext(items(PX_24[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj = items(PX_24[5]);
  const sharedValue = obj.useSharedValue([]);
  let obj2 = items(PX_24[5]);
  const sharedValue1 = obj2.useSharedValue(-1);
  let obj3 = items(PX_24[5]);
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = items(PX_24[5]);
  const sharedValue3 = obj4.useSharedValue(0);
  const obj5 = items(PX_24[5]);
  const sharedValue4 = obj5.useSharedValue(num);
  const items1 = [num, num];
  const obj6 = items(PX_24[5]);
  const sharedValue5 = obj6.useSharedValue(items1);
  const obj7 = items(PX_24[5]);
  const animatedRef = obj7.useAnimatedRef();
  const obj8 = items(PX_24[5]);
  const sharedValue6 = obj8.useSharedValue(-1);
  const onPageChangeRef = onPageChange.useRef(onPageChange);
  const items2 = [onPageChange];
  const layoutEffect = onPageChange.useLayoutEffect(() => {
    onPageChangeRef.current = onPageChange;
  }, items2);
  const items3 = [sharedValue4, onPageChangeStart, pageWidth, sharedValue1, animatedRef, enabled, onSetActiveIndex];
  const setActiveIndex = onPageChange.useCallback((arg0) => {
    let closure_0 = arg0;
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
      let obj = items(PX_24[6]);
      let result = obj.triggerHapticFeedback(items(PX_24[6]).HapticFeedbackTypes.IMPACT_MEDIUM);
    }
    if (arg0 !== sharedValue4.get()) {
      if (null != onPageChangeStart) {
        tmp14(arg0, () => {
          const result = sharedValue4.set(closure_0);
          const result1 = closure_0 * pageWidth;
          const result2 = sharedValue1.set(result1);
          let tmp5 = !flag2 && !enabled;
          if (tmp5) {
            const obj = useIsScreenReaderEnabled;
            tmp5 = !obj.getIsScreenReaderEnabled();
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
        let tmp8 = !flag2 && !enabled;
        if (tmp8) {
          const obj3 = items(PX_24[7]);
          tmp8 = !obj3.getIsScreenReaderEnabled();
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
  const length = items.length;
  class R {
    constructor(arg0, arg1) {
      sharedValue.get()[arg0] = arg1;
      items = [...sharedValue.get()];
      const result = sharedValue.set(items.slice(0, length));
    }
  }
  R.__closure = { itemDimensions: sharedValue, itemCount: length };
  R.__workletHash = 5915322770461;
  R.__initData = onSetActiveIndex;
  const items4 = [sharedValue, length];
  callback1 = onPageChange.useCallback(R, items4);
  const items5 = [sharedValue4, sharedValue5, animatedRef, sharedValue1, sharedValue2, sharedValue3, items, sharedValue, PX_24, pageWidth, sharedValue6, setActiveIndex, callback1, enabled];
  return onPageChange.useMemo(() => ({ activeIndex: sharedValue4, visiblePageRange: sharedValue5, pagerRef: animatedRef, scrollTarget: sharedValue1, scrollOverflow: sharedValue2, scrollOffset: sharedValue3, items, itemDimensions: sharedValue, itemSpacing: PX_24, pageWidth, pressedIndex: sharedValue6, onPageChangeRef, setActiveIndex, setItemDimensions: callback1, useReducedMotion: enabled }), items5);
});
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlState.native.tsx");

export const useSegmentedControlState = tmp2;