// === Module 10007: _calculateScrollOffset ===

// Module 10007 (_calculateScrollOffset)
import getKeyboardDuration from "getKeyboardDuration";
import noop from "noop";

const require = arg1;
function _calculateScrollOffset() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c4 = 0;
              let getKeyboardDuration = tmp2;
              let styles;
              getKeyboardDuration = undefined;
              if (null == lib) {
                c6 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = lib2(outer1_2[3]).space.PX_16;
                return obj1;
              } else {
                const type = iter.type;
                if ("toRef" === type) {
                  let obj3 = lib(outer1_2[4]);
                  c5 = 1;
                  c6 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = obj3.measureViewRefInWindow(iter.ref);
                  return obj2;
                } else if ("toValue" === type) {
                  c6 = 3;
                  obj3 = { value: null, done: true };
                  obj3[0] = iter.value;
                  return obj3;
                } else if ("toBottom" === type) {
                  const _Number = Number;
                  c6 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = Number.MAX_SAFE_INTEGER;
                  return obj4;
                } else {
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            styles = arg1;
            const extraOffset = lib.extraOffset;
            styles = extraOffset;
            if (extraOffset == null) {
              styles = 0;
            }
            getKeyboardDuration = styles;
            if (null == styles) {
              const sum = lib2(styles[3]).space.PX_16 + getKeyboardDuration;
            } else {
              const sum1 = styles.y - (lib2.y + lib2.height) + styles.height + getKeyboardDuration;
            }
            c6 = 3;
          }
        } catch (tmp27) {
          c6 = tmp;
          throw tmp27;
        }
      }
    })();
  });
  const _calculateScrollOffset = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("useWindowDimensions").fileFinishedImporting("modules/safe_area/useSafeAreaAvoidingInputs.native.tsx");

export default function useSafeAreaAvoidingInputs(insets) {
  insets = insets.insets;
  const inputs = insets.inputs;
  const scrollViewRef = insets.scrollViewRef;
  let callback;
  let onFocus;
  callback = onFocus.useRef(inputs);
  const items = [inputs];
  const effect = onFocus.useEffect(() => {
    getKeyboardDuration.current = inputs;
  }, items);
  const items1 = [insets, scrollViewRef];
  onFocus = onFocus.useCallback(callback(function*() {
    if (ref2 === 2) {
      ref2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        ref2 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            ref2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            ref2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let found = tmp5;
            let current2 = tmp2;
            current2 = undefined;
            found = undefined;
            ref = undefined;
            ref2 = undefined;
            let noop;
            let closure_5;
            let closure_6;
            current2 = ref.current;
            let current = ref2.current;
            found = current.find((ref) => {
              const current = ref.ref.current;
              let isFocusedResult;
              if (current != null) {
                isFocusedResult = current.isFocused();
              }
              return isFocusedResult;
            });
            if (null != found) {
              if (null != current2) {
                ref = 1;
                ref2 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_0(ref[4]).measureViewRefInWindow(found.ref);
                return obj1;
              }
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            ref2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            ref2 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            ref = arg1;
            let obj6 = outer1_0(ref[4]);
            ref = 2;
            ref2 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = obj6.measureViewRefInView(outer1_1.ref, outer1_0);
            return obj3;
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              ref2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              ref2 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              ref2 = arg1;
              if (null != ref) {
                if (null != ref2) {
                  ref = 3;
                  ref2 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = outer1_0(ref[4]).measureViewInWindow(outer1_0);
                  return obj5;
                }
              }
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              ref2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              ref2 = 3;
              obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              noop = arg1;
              ref = 4;
              ref2 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = (function calculateScrollOffset(offset, c2) {
                const self = this;
                const apply = closure_5.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(found.offset, ref);
              return obj7;
            }
          } else if (arg0 === 1) {
            ref2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            ref2 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            closure_5 = arg1;
            const _Number = Number;
            if (closure_5 === Number.MAX_SAFE_INTEGER) {
              current = ref.current;
              if (current != null) {
                current.scrollToEnd({ animated: true });
              }
            }
          }
          obj = { insets: null, inputInScrollView: null, inputInWindow: null, scrollOffset: null, scrollView: null };
          obj[0] = current2;
          obj[1] = ref2;
          obj[2] = ref;
          obj[3] = closure_5;
          obj[4] = noop;
          closure_6 = (function calculateTargetScrollY(scrollView) {
            const sum = scrollView.scrollView.y + scrollView.scrollView.height;
            const diff = current2(table[2]).getWindowDimensions({ ignoreKeyboard: true }).height - scrollView.insets.bottom;
            if (scrollView.inputInWindow.y + scrollView.inputInWindow.height + scrollView.scrollOffset > diff) {
              const _Math = Math;
              const diff1 = scrollView.scrollView.height - Math.max(0, sum - diff);
              const sum1 = scrollView.inputInScrollView.y + scrollView.inputInScrollView.height + scrollView.scrollOffset;
              if (sum1 > diff1) {
                return sum1 - diff1;
              }
            }
          })(obj);
          if (null != closure_6) {
            (function scrollToTargetY(c2, closure_6) {
              const current = c2.current;
              let scrollToResult;
              if (current != null) {
                const scrollTo = current.scrollTo;
                if (scrollTo != null) {
                  let obj = { x: 0, y: null, animated: true };
                  obj[1] = closure_6;
                  scrollToResult = scrollTo(obj);
                }
              }
              if (scrollToResult == null) {
                const current2 = c2.current;
                if (current2 != null) {
                  const scrollToOffset = current2.scrollToOffset;
                  if (scrollToOffset != null) {
                    obj = { offset: null, animated: true };
                    obj[0] = closure_6;
                    scrollToOffset(obj);
                  }
                }
              }
            })(ref, closure_6);
          }
        }
        ref2 = 3;
      } catch (tmp32) {
        ref2 = tmp;
        throw tmp32;
      }
    }
  }), items1);
  const items2 = [onFocus];
  const effect1 = onFocus.useEffect(() => {
    const timeout = setTimeout(onFocus, insets(scrollViewRef[5]).getKeyboardDuration());
    return () => clearTimeout(closure_0);
  }, items2);
  return { onFocus };
};