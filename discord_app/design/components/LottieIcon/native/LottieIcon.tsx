// === Module 10837: LottieIcon ===

// Module 10837 (LottieIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4794 */;
import _modDef6111 from "module_6111" /* 6111 */;
import IconSize from "IconSize" /* 6291 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/LottieIcon.tsx");

export const LottieIcon = ReactCompilerGating.isReactCompilerEnabled() ? (function LottieIcon(animation) {
  const cResult = c.c(40);
  animation = animation.animation;
  ({ dotLottie, size, color, opacity, markers, layers, autoPlay } = animation);
  let str = "md";
  ({ width, height, useLottieDefaultColors, ref } = animation);
  if (undefined !== size) {
    str = size;
  }
  if (undefined === color) {
    color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
  }
  let num = 1;
  let num2 = 1;
  if (undefined !== opacity) {
    num2 = opacity;
  }
  const tmp5 = IconSize.ICON_SIZE[str];
  if (cResult[0] === animation) {
    if (cResult[1] === markers) {
      const start = tmp6.start;
      const sum = start + tmp6.duration;
      noop = sum;
      if (cResult[5] !== markers) {
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
          cResult[7] = F;
        } else {
          class F {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
        }
        const found = markers.find(F);
        cResult[5] = markers;
        cResult[6] = found;
      } else {
        class F {
          constructor(arg0) {
            return "easteregg" === animation.name;
          }
        }
        if (tmp11 != null) {
          class F {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
        }
        if (undefined == null) {
          class F {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
        }
        c4 = tmp17;
        if (tmp11 != null) {
          class F {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
        }
        if (undefined == null) {
          class F {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
        }
        const sum1 = tmp17 + tmp18;
        noop.useRef(null);
        const enabled = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
        if ("custom" === str) {
          class F {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
        }
        if ("custom" === str) {
          class F {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
        }
        if (cResult[8] === tmp5) {
          class F {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
          if (cResult[11] !== num2) {
            class F {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
            tmp26[0] = num2;
            cResult[11] = num2;
            cResult[12] = tmp26;
          } else {
            class F {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
          }
          const token = useToken.useToken(color);
          if (cResult[13] === layers) {
            class F {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
            if (cResult[16] === sum) {
              class F {
                constructor(arg0) {
                  return "easteregg" === animation.name;
                }
              }
            }
            class K {
              constructor() {
                if (enabled) {
                  tmp12 = closure_6;
                  current3 = closure_6.current;
                  tmp13 = null;
                  if (current3 != null) {
                    tmp14 = closure_3;
                    playResult = current3.play(closure_3, closure_3);
                  }
                } else {
                  if (tmp) {
                    num = 0;
                    if (c4 >= 0) {
                      tmp8 = closure_6;
                      current2 = closure_6.current;
                      tmp9 = null;
                      if (current2 != null) {
                        tmp10 = closure_5;
                        playResult1 = current2.play(tmp2, closure_5);
                      }
                    }
                  }
                  tmp3 = closure_6;
                  current = closure_6.current;
                  tmp4 = null;
                  if (current != null) {
                    tmp5 = start;
                    tmp6 = closure_3;
                    playResult2 = current.play(start, closure_3);
                  }
                }
                return;
              }
            }
            cResult[16] = sum;
            cResult[17] = start;
            cResult[18] = sum1;
            cResult[19] = tmp17;
            cResult[20] = enabled;
            cResult[21] = K;
          }
          if (null != token) {
            class F {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
          }
          cResult[13] = layers;
          cResult[14] = token;
          cResult[15] = undefined;
          const tmpResult = useToken;
        }
        const size1 = { width: tmp5, height: tmp5 };
        cResult[8] = tmp5;
        cResult[9] = tmp5;
        cResult[10] = size1;
      }
    }
  }
  if (cResult[3] !== animation) {
    class F {
      constructor(arg0) {
        return "easteregg" === animation.name;
      }
    }
    class K {
      constructor() {
        if (enabled) {
          tmp12 = closure_6;
          current3 = closure_6.current;
          tmp13 = null;
          if (current3 != null) {
            tmp14 = closure_3;
            playResult = current3.play(closure_3, closure_3);
          }
        } else {
          if (tmp) {
            num = 0;
            if (c4 >= 0) {
              tmp8 = closure_6;
              current2 = closure_6.current;
              tmp9 = null;
              if (current2 != null) {
                tmp10 = closure_5;
                playResult1 = current2.play(tmp2, closure_5);
              }
            }
          }
          tmp3 = closure_6;
          current = closure_6.current;
          tmp4 = null;
          if (current != null) {
            tmp5 = start;
            tmp6 = closure_3;
            playResult2 = current.play(start, closure_3);
          }
        }
        return;
      }
    }
    cResult[4] = tmp8;
  } else {
    class F {
      constructor(arg0) {
        return "easteregg" === animation.name;
      }
    }
  }
  const found1 = markers.find(tmp8);
  cResult[0] = animation;
  cResult[num] = markers;
  num = 2;
  cResult[2] = found1;
}) : (function LottieIcon(color) {
  ({ animation: require, size } = color);
  if (size === undefined) {
    size = "md";
  }
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
  }
  let num = color.opacity;
  if (num === undefined) {
    num = 1;
  }
  ({ markers, layers } = color);
  const autoPlay = color.autoPlay;
  let sum1;
  let ref1;
  let enabled;
  let token;
  let callback;
  ({ width, height, useLottieDefaultColors, ref } = color);
  let tmp5 = IconSize.ICON_SIZE[size];
  const found = markers.find((name) => name.name === require);
  const start = found.start;
  const sum = start + found.duration;
  c4 = sum;
  const found1 = markers.find((name) => "easteregg" === name.name);
  let num2;
  if (found1 != null) {
    num2 = found1.start;
  }
  if (num2 == null) {
    num2 = -1;
  }
  let num3;
  if (found1 != null) {
    num3 = found1.duration;
  }
  if (num3 == null) {
    num3 = -1;
  }
  sum1 = num2 + num3;
  ref1 = noop.useRef(null);
  enabled = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
  let tmp12 = tmp5;
  if ("custom" === size) {
    tmp12 = width;
  }
  const size1 = { width: tmp12, height: null };
  if ("custom" === size) {
    tmp5 = height;
  }
  size1.height = tmp5;
  token = useToken.useToken(INTERACTIVE_TEXT_DEFAULT);
  const items = [token, layers];
  const items1 = [enabled, start, sum, num2, sum1];
  const memo = noop.useMemo(() => {
    let mapped;
    if (null != token) {
      mapped = layers.map((keypath) => ({ keypath, color }));
    }
    return mapped;
  }, items);
  callback = noop.useCallback(() => {
    if (enabled) {
      const current3 = ref1.current;
      if (current3 != null) {
        current3.play(c4, c4);
      }
    } else {
      if (tmp) {
        if (num2 >= 0) {
          const current2 = ref1.current;
          if (current2 != null) {
            current2.play(tmp2, sum1);
          }
        }
      }
      const current = ref1.current;
      if (current != null) {
        current.play(start, c4);
      }
    }
  }, items1);
  const items2 = [callback];
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    play() {
      return callback();
    }
  }), items2);
  const items3 = [start, autoPlay, callback];
  const obj2 = { style: size1, children: null };
  const callback1 = noop.useCallback(() => {
    if (autoPlay) {
      callback();
    } else {
      const current = ref1.current;
      if (current != null) {
        current.play(start, start);
      }
    }
  }, items3);
  const obj3 = { ref: ref1, source: color.dotLottie, colorFilters: null, hardwareAccelerationAndroid: true, loop: false, onAnimationLoaded: null, resizeMode: "cover", style: null };
  let tmp21;
  const tmp3Result = useToken;
  if (!useLottieDefaultColors) {
    tmp21 = memo;
  }
  obj3.colorFilters = tmp21;
  obj3.onAnimationLoaded = callback1;
  const items4 = [size1, { opacity: num }];
  obj3.style = items4;
  obj2.children = jsx(_modDef6111, { ref: ref1, source: color.dotLottie, colorFilters: null, hardwareAccelerationAndroid: true, loop: false, onAnimationLoaded: null, resizeMode: "cover", style: null });
  return <View style={size1}>{null}</View>;
});