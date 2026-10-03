// discord_app/modules/safe_area/useSafeAreaAvoidingInputs.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensions from "../screen/useWindowDimensions.native.tsx";
import useKeyboardDuration from "../keyboard/native/useKeyboardDuration.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function calculateTargetScrollY(scrollView) {
  const sum = scrollView.scrollView.y + scrollView.scrollView.height;
  const diff = useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }).height - scrollView.insets.bottom;
  if (scrollView.inputInWindow.y + scrollView.inputInWindow.height + scrollView.scrollOffset > diff) {
    const _Math = Math;
    const diff1 = scrollView.scrollView.height - Math.max(0, sum - diff);
    const sum1 = scrollView.inputInScrollView.y + scrollView.inputInScrollView.height + scrollView.scrollOffset;
    if (sum1 > diff1) {
      return sum1 - diff1;
    }
  }
}
function calculateScrollOffset() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _calculateScrollOffset(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c4 = 0;
          closure_3 = tmp2;
          closure_131_0 = _require;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          if (null == _require) {
            c6 = 3;
            const obj5 = { value: nativeDefault.space.PX_16, done: true };
            return obj5;
          } else {
            const type = _require.type;
            if ("toRef" === type) {
              c5 = 1;
              c6 = 1;
              const obj6 = { value: require("ViewMeasureUtils").measureViewRefInWindow(_require.ref), done: false };
              return obj6;
            } else if ("toValue" === type) {
              c6 = 3;
              const obj7 = { value: _require.value, done: true };
              return obj7;
            } else if ("toBottom" === type) {
              const _Number = Number;
              c6 = 3;
              const obj8 = { value: Number.MAX_SAFE_INTEGER, done: true };
              return obj8;
            } else {
              c6 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj = { value, done: true };
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
function scrollToTargetY(current, y) {
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
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaAvoidingInputs.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (insets) => {
      const cResult = require("c").c(11);
      insets = insets.insets;
      _require = insets;
      const inputs = insets.inputs;
      scrollViewRef = insets.scrollViewRef;
      asyncGeneratorStep = noop.useRef(inputs);
      if (cResult[0] !== inputs) {
        const fn = function u() {
          closure_3.current = inputs;
        };
        const items = [inputs];
        cResult[0] = inputs;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp3 = items;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = obj2.useEffect(tmp2, tmp3);
      if (cResult[3] === insets) {
        if (cResult[4] === scrollViewRef) {
          let tmp5 = cResult[5];
        }
        noop = tmp5;
        if (cResult[6] !== tmp5) {
          const fn3 = function y() {
            const timeout = setTimeout(closure_4, useKeyboardDuration.getKeyboardDuration());
            return () => clearTimeout(closure_0);
          };
          const items1 = [tmp5];
          cResult[6] = tmp5;
          cResult[7] = fn3;
          cResult[8] = items1;
          let tmp7 = items1;
          let tmp6 = fn3;
        } else {
          tmp6 = cResult[7];
          tmp7 = cResult[8];
        }
        const effect1 = obj2.useEffect(tmp6, tmp7);
        if (cResult[9] !== tmp5) {
          let obj3 = { onFocus: tmp5 };
          cResult[9] = tmp5;
          cResult[10] = obj3;
          let tmp9 = obj3;
        } else {
          tmp9 = cResult[10];
        }
        return tmp9;
      }
      _require = asyncGeneratorStep(async () => {
        if (ref2 === 2) {
          ref2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp5 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            ref2 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                ref2 = 3;
                throw value;
              } else if (arg0 === 2) {
                ref2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp2;
                const insets = tmp3;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                closure_128_2 = undefined;
                closure_128_3 = undefined;
                closure_128_4 = undefined;
                closure_128_5 = undefined;
                closure_128_6 = undefined;
                const current2 = ref.current;
                closure_128_0 = current2;
                const current1 = ref2.current;
                const found = current1.find((ref) => {
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
                    ref = 1;
                    ref2 = 1;
                    const obj4 = { value: insets(scrollViewRef[4]).measureViewRefInWindow(found.ref), done: false };
                    return obj4;
                  }
                }
              }
            } else if (1 === tmp6) {
              if (arg0 === 1) {
                ref2 = 3;
                throw value;
              } else if (arg0 === 2) {
                ref2 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_128_2 = value;
                ref = 2;
                ref2 = 1;
                const obj6 = {
                  value: insets(scrollViewRef[4]).measureViewRefInView(closure_128_1.ref, closure_128_0),
                  done: false,
                };
                return obj6;
              }
            } else {
              if (2 === tmp6) {
                if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  ref2 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  closure_128_3 = value;
                  if (null != closure_128_2) {
                    if (null != closure_128_3) {
                      ref = 3;
                      ref2 = 1;
                      const obj9 = { value: insets(scrollViewRef[4]).measureViewInWindow(closure_128_0), done: false };
                      return obj9;
                    }
                  }
                }
              } else if (3 === tmp6) {
                if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  ref2 = 3;
                  const obj11 = { value, done: true };
                  return obj11;
                } else {
                  closure_128_4 = value;
                  ref = 4;
                  ref2 = 1;
                  const obj12 = { value: calculateScrollOffset(closure_128_1.offset, closure_128_2), done: false };
                  return obj12;
                }
              } else if (arg0 === 1) {
                ref2 = 3;
                throw value;
              } else if (arg0 === 2) {
                ref2 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                closure_128_5 = value;
                const _Number = Number;
                if (closure_128_5 === Number.MAX_SAFE_INTEGER) {
                  let current = ref.current;
                  if (current != null) {
                    current.scrollToEnd({ animated: true });
                  }
                }
              }
              const obj = {
                insets,
                inputInScrollView: closure_128_3,
                inputInWindow: closure_128_2,
                scrollOffset: closure_128_5,
                scrollView: closure_128_4,
              };
              closure_128_6 = calculateTargetScrollY(obj);
              if (null != closure_128_6) {
                scrollToTargetY(ref, closure_128_6);
              }
            }
            ref2 = 3;
          } catch (tmp36) {
            ref2 = tmp;
            throw tmp36;
          }
        }
      });
      const fn2 = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      cResult[3] = insets;
      cResult[4] = scrollViewRef;
      cResult[5] = fn2;
      tmp5 = fn2;
    }
  : (insets) => {
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
          } else if (tmp5 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
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
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp2;
                  closure_128_0 = undefined;
                  closure_128_1 = undefined;
                  closure_128_2 = undefined;
                  closure_128_3 = undefined;
                  closure_128_4 = undefined;
                  closure_128_5 = undefined;
                  closure_128_6 = undefined;
                  const current2 = scrollViewRef.current;
                  closure_128_0 = current2;
                  const current1 = ref.current;
                  const found = current1.find((ref) => {
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
                      const obj4 = { value: tmp3(10837).measureViewRefInWindow(found.ref), done: false };
                      return obj4;
                    }
                  }
                }
              } else if (1 === tmp6) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_128_2 = value;
                  dependencyMap = 2;
                  c3 = 1;
                  const obj6 = {
                    value: tmp3(10837).measureViewRefInView(closure_128_1.ref, closure_128_0),
                    done: false,
                  };
                  return obj6;
                }
              } else {
                if (2 === tmp6) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  } else {
                    closure_128_3 = value;
                    if (null != closure_128_2) {
                      if (null != closure_128_3) {
                        dependencyMap = 3;
                        c3 = 1;
                        const obj9 = { value: tmp3(10837).measureViewInWindow(closure_128_0), done: false };
                        return obj9;
                      }
                    }
                  }
                } else if (3 === tmp6) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj11 = { value, done: true };
                    return obj11;
                  } else {
                    closure_128_4 = value;
                    dependencyMap = 4;
                    c3 = 1;
                    const obj12 = { value: calculateScrollOffset(closure_128_1.offset, closure_128_2), done: false };
                    return obj12;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj13 = { value, done: true };
                  return obj13;
                } else {
                  closure_128_5 = value;
                  const _Number = Number;
                  if (closure_128_5 === Number.MAX_SAFE_INTEGER) {
                    let current = closure_129_2.current;
                    if (current != null) {
                      current.scrollToEnd({ animated: true });
                    }
                  }
                }
                const obj = {
                  insets: closure_129_0,
                  inputInScrollView: closure_128_3,
                  inputInWindow: closure_128_2,
                  scrollOffset: closure_128_5,
                  scrollView: closure_128_4,
                };
                closure_128_6 = calculateTargetScrollY(obj);
                if (null != closure_128_6) {
                  scrollToTargetY(closure_129_2, closure_128_6);
                }
              }
              c3 = 3;
            } catch (tmp36) {
              c3 = tmp;
              throw tmp36;
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
    };
