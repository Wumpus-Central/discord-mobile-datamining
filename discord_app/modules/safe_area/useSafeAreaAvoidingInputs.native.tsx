// discord_app/modules/safe_area/useSafeAreaAvoidingInputs.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useKeyboardDuration from "../keyboard/native/useKeyboardDuration.tsx";
import ViewMeasureUtils from "../view_measure/ViewMeasureUtils.native.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let closure_5 = async function _calculateScrollOffset(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          closure_3 = tmp2;
          closure_131_0 = _require;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          if (null == _require) {
            c6 = 3;
            const obj1 = { value: nativeDefault.space.PX_16, done: true };
            return obj1;
          } else {
            const type = _require.type;
            if ("toRef" === type) {
              let obj3 = ViewMeasureUtils;
              c5 = 1;
              c6 = 1;
              const obj2 = { value: obj3.measureViewRefInWindow(_require.ref), done: false };
              return obj2;
            } else if ("toValue" === type) {
              c6 = 3;
              obj3 = { value: _require.value, done: true };
              return obj3;
            } else if ("toBottom" === type) {
              const _Number = Number;
              c6 = 3;
              const obj4 = { value: Number.MAX_SAFE_INTEGER, done: true };
              return obj4;
            } else {
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_131_2 = value;
        const extraOffset = closure_131_0.extraOffset;
        c2 = extraOffset;
        if (extraOffset == null) {
          c2 = 0;
        }
        closure_131_3 = c2;
        if (null == closure_131_2) {
          const sum = closure_132_1(closure_132_2[3]).space.PX_16 + closure_131_3;
        } else {
          const sum1 =
            closure_131_2.y - (closure_131_1.y + closure_131_1.height) + closure_131_2.height + closure_131_3;
        }
        c6 = 3;
      }
    } catch (tmp27) {
      c6 = tmp;
      throw tmp27;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaAvoidingInputs.native.tsx");

export default function useSafeAreaAvoidingInputs(insets) {
  insets = insets.insets;
  const inputs = insets.inputs;
  const scrollViewRef = insets.scrollViewRef;
  let onFocus;
  asyncGeneratorStep = onFocus.useRef(inputs);
  const items = [inputs];
  const effect = onFocus.useEffect(() => {
    closure_3.current = inputs;
  }, items);
  const items1 = [insets, scrollViewRef];
  onFocus = onFocus.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              closure_128_4 = undefined;
              closure_128_5 = undefined;
              closure_128_6 = undefined;
              let current2 = scrollViewRef.current;
              closure_128_0 = current2;
              let current = ref.current;
              const found = current.find((ref) => {
                const current = ref.ref.current;
                let isFocusedResult;
                if (current != null) {
                  isFocusedResult = current.isFocused();
                }
                return isFocusedResult;
              });
              closure_128_1 = found;
              if (null != found) {
                if (null != current2) {
                  dependencyMap = 1;
                  c3 = 1;
                  const obj1 = { value: tmp2(11147).measureViewRefInWindow(found.ref), done: false };
                  return obj1;
                }
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_128_2 = value;
              let obj6 = tmp2(11147);
              dependencyMap = 2;
              c3 = 1;
              const obj3 = { value: obj6.measureViewRefInView(closure_128_1.ref, closure_128_0), done: false };
              return obj3;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_128_3 = value;
                if (null != closure_128_2) {
                  if (null != closure_128_3) {
                    dependencyMap = 3;
                    c3 = 1;
                    const obj5 = { value: tmp2(11147).measureViewInWindow(closure_128_0), done: false };
                    return obj5;
                  }
                }
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj6 = { value, done: true };
                return obj6;
              } else {
                closure_128_4 = value;
                dependencyMap = 4;
                c3 = 1;
                const obj7 = {
                  value: (function calculateScrollOffset() {
                    const self = this;
                    const apply = closure_1_5.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(closure_128_1.offset, closure_128_2),
                  done: false,
                };
                return obj7;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_128_5 = value;
              const _Number = Number;
              if (closure_128_5 === Number.MAX_SAFE_INTEGER) {
                current = closure_129_2.current;
                if (current != null) {
                  current.scrollToEnd({ animated: true });
                }
              }
            }
            obj = {
              insets: closure_129_0,
              inputInScrollView: closure_128_3,
              inputInWindow: closure_128_2,
              scrollOffset: closure_128_5,
              scrollView: closure_128_4,
            };
            closure_128_6 = (function calculateTargetScrollY(scrollView) {
              const sum = scrollView.scrollView.y + scrollView.scrollView.height;
              const diff =
                closure_1_0(dependencyMap[2]).getWindowDimensions({ ignoreKeyboard: true }).height -
                scrollView.insets.bottom;
              if (scrollView.inputInWindow.y + scrollView.inputInWindow.height + scrollView.scrollOffset > diff) {
                const _Math = Math;
                const diff1 = scrollView.scrollView.height - Math.max(0, sum - diff);
                const sum1 =
                  scrollView.inputInScrollView.y + scrollView.inputInScrollView.height + scrollView.scrollOffset;
                if (sum1 > diff1) {
                  return sum1 - diff1;
                }
              }
            })(obj);
            if (null != closure_128_6) {
              (function scrollToTargetY(current, y) {
                current = current.current;
                let scrollToResult;
                if (current != null) {
                  const scrollTo = current.scrollTo;
                  if (scrollTo != null) {
                    const point = { x: 0, y, animated: true };
                    scrollToResult = scrollTo(point);
                  }
                }
                if (scrollToResult == null) {
                  const current2 = current.current;
                  if (current2 != null) {
                    const scrollToOffset = current2.scrollToOffset;
                    if (scrollToOffset != null) {
                      const obj = { offset: y, animated: true };
                      scrollToOffset(obj);
                    }
                  }
                }
              })(closure_129_2, closure_128_6);
            }
          }
          c3 = 3;
        } catch (tmp32) {
          c3 = tmp;
          throw tmp32;
        }
      }
    }),
    items1,
  );
  const items2 = [onFocus];
  const effect1 = onFocus.useEffect(() => {
    const timeout = setTimeout(onFocus, useKeyboardDuration.getKeyboardDuration());
    return () => clearTimeout(closure_0);
  }, items2);
  return { onFocus };
}
