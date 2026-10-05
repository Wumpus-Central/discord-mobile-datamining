// discord_app/modules/safe_area/useSafeAreaAvoidingInputs.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensions from "../screen/useWindowDimensions.native.tsx";
import useKeyboardDuration from "../keyboard/native/useKeyboardDuration.tsx";
import ViewMeasureUtils from "../view_measure/ViewMeasureUtils.native.tsx";
import _asyncToGenerator_mod from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react_mod from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3, c4, insets, styles2;

function calculateTargetScrollY(scrollView) {
  const sum = scrollView.scrollView.y + scrollView.scrollView.height;
  obj = useWindowDimensions;
  const diff = obj.getWindowDimensions({ ignoreKeyboard: true }).height - scrollView.insets.bottom;
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
  return obj(...arguments);
}
let obj = function _calculateScrollOffset() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let extraOffset = arg0;
    const styles = arg1;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj5;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              c4 = 0;
              styles2 = undefined;
              closure_3 = undefined;
              if (null == extraOffset) {
                c6 = 3;
                const obj4 = { value: nativeDefault.space.PX_16, done: true };
                return obj4;
              } else {
                const type = iter.type;
                if ("toRef" === type) {
                  c5 = 1;
                  c6 = 1;
                  const obj6 = { value: obj5.measureViewRefInWindow(extraOffset.ref), done: false };
                  obj5 = ViewMeasureUtils;
                  return obj6;
                } else if ("toValue" === type) {
                  c6 = 3;
                  return { value: extraOffset.value, done: true };
                } else if ("toBottom" === type) {
                  const _Number = Number;
                  c6 = 3;
                  return { value: Number.MAX_SAFE_INTEGER, done: true };
                } else {
                  c6 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            let sum;
            styles2 = value;
            extraOffset = extraOffset.extraOffset;
            let c2 = extraOffset;
            if (extraOffset == null) {
              c2 = 0;
            }
            closure_3 = c2;
            if (null == styles2) {
              sum = closure_132_1(closure_132_2[3]).space.PX_16 + closure_3;
            } else {
              sum = styles2.y - (styles.y + styles.height) + styles2.height + closure_3;
            }
            c6 = 3;
            return { value: sum, done: true };
          }
        } catch (tmp25) {
          c6 = 3;
          throw tmp25;
        }
      }
    })();
  });
  return obj(...arguments);
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
        obj = { offset: y, animated: true };
        scrollToOffset(obj);
      }
    }
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (insets) => {
      let closure_3;
      let closure_4;
      let scrollViewRef;
      let tmp2;
      let tmp3;
      obj = insets(scrollViewRef[6]);
      const cResult = obj.c(11);
      insets = insets.insets;
      const inputs = insets.inputs;
      scrollViewRef = insets.scrollViewRef;
      let obj2 = react;
      _asyncToGenerator = react.useRef(inputs);
      if (cResult[0] !== inputs) {
        const fn = function u() {
          closure_3.current = inputs;
        };
        const items = [inputs];
        cResult[0] = inputs;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = obj2.useEffect(tmp2, tmp3);
      if (cResult[3] === insets) {
        let tmp5;
        let tmp7;
        let tmp6;
        let tmp9;
        if (cResult[4] === scrollViewRef) {
          tmp5 = cResult[5];
        }
        react = tmp5;
        if (cResult[6] !== tmp5) {
          const fn3 = function y() {
            obj = useKeyboardDuration;
            const timeout = setTimeout(closure_4, obj.getKeyboardDuration());
            return () => clearTimeout(closure_0);
          };
          const items1 = [tmp5];
          cResult[6] = tmp5;
          cResult[7] = fn3;
          cResult[8] = items1;
          tmp7 = items1;
          tmp6 = fn3;
        } else {
          tmp6 = cResult[7];
          tmp7 = cResult[8];
        }
        const effect1 = obj2.useEffect(tmp6, tmp7);
        if (cResult[9] !== tmp5) {
          let obj3 = { onFocus: tmp5 };
          cResult[9] = tmp5;
          cResult[10] = obj3;
          tmp9 = obj3;
        } else {
          tmp9 = cResult[10];
        }
        return tmp9;
      }
      let closure_0 = _asyncToGenerator(async () => {
        let inputInScrollView;
        let inputInWindow;
        let obj10;
        let obj14;
        let obj7;
        if (inputInScrollView === 2) {
          inputInScrollView = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let scrollView;
            let scrollOffset;
            let closure_6;
            let current2;
            let found;
            inputInScrollView = 2;
            if (0 === inputInWindow) {
              if (arg0 === 1) {
                inputInScrollView = 3;
                throw value;
              } else if (arg0 === 2) {
                inputInScrollView = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp;
                insets = tmp2;
                inputInWindow = undefined;
                inputInScrollView = undefined;
                scrollView = undefined;
                scrollOffset = undefined;
                closure_6 = undefined;
                current2 = inputInWindow.current;
                const current1 = inputInScrollView.current;
                found = current1.find((ref) => {
                  const current = ref.ref.current;
                  let isFocusedResult;
                  if (current != null) {
                    isFocusedResult = current.isFocused();
                  }
                  return isFocusedResult;
                });
                if (null != found) {
                  if (null != current2) {
                    inputInWindow = 1;
                    inputInScrollView = 1;
                    const obj4 = { value: obj10.measureViewRefInWindow(found.ref), done: false };
                    obj10 = insets(scrollViewRef[4]);
                    return obj4;
                  }
                }
              }
            } else if (1 === inputInWindow) {
              if (arg0 === 1) {
                inputInScrollView = 3;
                throw value;
              } else if (arg0 === 2) {
                inputInScrollView = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                inputInWindow = 2;
                inputInScrollView = 1;
                const obj6 = { value: obj7.measureViewRefInView(found.ref, current2), done: false };
                obj7 = insets(scrollViewRef[4]);
                return obj6;
              }
            } else if (2 === inputInWindow) {
              if (arg0 === 1) {
                inputInScrollView = 3;
                throw value;
              } else if (arg0 === 2) {
                inputInScrollView = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                inputInScrollView = value;
                if (null != inputInWindow) {
                  if (null != inputInScrollView) {
                    inputInWindow = 3;
                    inputInScrollView = 1;
                    const obj9 = { value: obj14.measureViewInWindow(current2), done: false };
                    obj14 = insets(scrollViewRef[4]);
                    return obj9;
                  }
                }
              }
            } else if (3 === inputInWindow) {
              if (arg0 === 1) {
                inputInScrollView = 3;
                throw value;
              } else if (arg0 === 2) {
                inputInScrollView = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                scrollView = value;
                inputInWindow = 4;
                inputInScrollView = 1;
                const obj12 = { value: calculateScrollOffset(found.offset, inputInWindow), done: false };
                return obj12;
              }
            } else if (arg0 === 1) {
              inputInScrollView = 3;
              throw value;
            } else if (arg0 === 2) {
              inputInScrollView = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              scrollOffset = value;
              const _Number = Number;
              if (scrollOffset !== Number.MAX_SAFE_INTEGER) {
                obj = { insets, inputInScrollView, inputInWindow, scrollOffset, scrollView };
                closure_6 = calculateTargetScrollY(obj);
                if (null != closure_6) {
                  scrollToTargetY(inputInWindow, closure_6);
                }
              } else {
                let current = inputInWindow.current;
                if (current != null) {
                  current.scrollToEnd({ animated: true });
                }
              }
            }
            inputInScrollView = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp35) {
            inputInScrollView = 3;
            throw tmp35;
          }
        }
      });
      const fn2 = function () {
        return closure_0(...arguments);
      };
      cResult[3] = insets;
      cResult[4] = scrollViewRef;
      cResult[5] = fn2;
      tmp5 = fn2;
    }
  : (insets) => {
      let closure_3;
      insets = insets.insets;
      const inputs = insets.inputs;
      const scrollViewRef = insets.scrollViewRef;
      let onFocus;
      _asyncToGenerator = onFocus.useRef(inputs);
      const items = [inputs];
      const effect = onFocus.useEffect(() => {
        closure_3.current = inputs;
      }, items);
      const items1 = [insets, scrollViewRef];
      onFocus = onFocus.useCallback(
        _asyncToGenerator(async () => {
          let closure_0;
          let inputInWindow;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let inputInScrollView;
              let scrollView;
              let scrollOffset;
              let closure_6;
              let current2;
              let found;
              c3 = 2;
              if (0 === inputInWindow) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_1 = tmp;
                  inputInWindow = undefined;
                  inputInScrollView = undefined;
                  scrollView = undefined;
                  scrollOffset = undefined;
                  closure_6 = undefined;
                  current2 = scrollViewRef.current;
                  const current1 = inputInScrollView.current;
                  found = current1.find((ref) => {
                    const current = ref.ref.current;
                    let isFocusedResult;
                    if (current != null) {
                      isFocusedResult = current.isFocused();
                    }
                    return isFocusedResult;
                  });
                  if (null != found) {
                    if (null != current2) {
                      const obj10 = tmp2(inputInWindow[4]);
                      inputInWindow = 1;
                      c3 = 1;
                      const obj4 = { value: obj10.measureViewRefInWindow(found.ref), done: false };
                      return obj4;
                    }
                  }
                }
              } else if (1 === inputInWindow) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  inputInWindow = value;
                  const obj7 = tmp2(inputInWindow[4]);
                  inputInWindow = 2;
                  c3 = 1;
                  const obj6 = { value: obj7.measureViewRefInView(found.ref, current2), done: false };
                  return obj6;
                }
              } else if (2 === inputInWindow) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  inputInScrollView = value;
                  if (null != inputInWindow) {
                    if (null != inputInScrollView) {
                      const obj14 = tmp2(inputInWindow[4]);
                      inputInWindow = 3;
                      c3 = 1;
                      const obj9 = { value: obj14.measureViewInWindow(current2), done: false };
                      return obj9;
                    }
                  }
                }
              } else if (3 === inputInWindow) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj11 = { value, done: true };
                  return obj11;
                } else {
                  scrollView = value;
                  inputInWindow = 4;
                  c3 = 1;
                  const obj12 = { value: calculateScrollOffset(found.offset, inputInWindow), done: false };
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
                scrollOffset = value;
                const _Number = Number;
                if (scrollOffset !== Number.MAX_SAFE_INTEGER) {
                  obj = { insets: closure_129_0, inputInScrollView, inputInWindow, scrollOffset, scrollView };
                  closure_6 = scrollOffset(obj);
                  if (null != closure_6) {
                    scrollToTargetY(closure_129_2, closure_6);
                  }
                } else {
                  let current = closure_129_2.current;
                  if (current != null) {
                    current.scrollToEnd({ animated: true });
                  }
                }
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp35) {
              c3 = 3;
              throw tmp35;
            }
          }
        }),
        items1,
      );
      const items2 = [onFocus];
      const effect1 = onFocus.useEffect(() => {
        obj = useKeyboardDuration;
        const timeout = setTimeout(onFocus, obj.getKeyboardDuration());
        return () => clearTimeout(closure_0);
      }, items2);
      return { onFocus };
    };
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaAvoidingInputs.native.tsx");

export default tmp2;
