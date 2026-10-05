// discord_app/design/components/LottieIcon/native/LottieIcon.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import react3 from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import LottieViewDefault from "../../../../../_runtime/05921_LottieView.js";
import IconSize from "../../Icon/IconSize.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let animation, playResult, playResult1, playResult2, tmp10, tmp11, tmp13, tmp14, tmp15, tmp2, tmp4, tmp7, tmp9;

const View = react_native.View;
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (animation, arg1) => {
        let autoPlay;
        let color;
        let dotLottie;
        let height;
        let layers;
        let markers;
        let opacity;
        let useLottieDefaultColors;
        let width;
        const obj = react2;
        const cResult = obj.c(40);
        animation = animation.animation;
        ({ dotLottie, size, color, opacity, markers, layers, autoPlay } = animation);
        let str = "md";
        ({ width, height, useLottieDefaultColors } = animation);
        if (undefined !== size) {
          str = size;
        }
        if (undefined === color) {
          color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
        }
        let num = 1;
        if (undefined !== opacity) {
          num = opacity;
        }
        const tmp5 = IconSize.ICON_SIZE[str];
        if (cResult[0] === animation) {
          let tmp6;
          if (cResult[1] === markers) {
            tmp6 = cResult[2];
          }
          const start = tmp6.start;
          const sum = start + tmp6.duration;
          if (cResult[5] !== markers) {
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              class R {
                constructor(arg0) {
                  return "easteregg" === animation.name;
                }
              }
              cResult[7] = R;
            } else {
              class R {
                constructor(arg0) {
                  return "easteregg" === animation.name;
                }
              }
            }
            const found = markers.find(R);
            cResult[5] = markers;
            cResult[6] = found;
          } else {
            class R {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
          }
          if (tmp11 != null) {
            class R {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
          }
          if (undefined == null) {
            class R {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
          }
          let c4 = tmp16;
          if (tmp11 != null) {
            class R {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
          }
          if (undefined == null) {
            class R {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
          }
          const sum1 = tmp16 + tmp17;
          const ref = react.useRef(null);
          const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
          if ("custom" === str) {
            class R {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
          }
          if ("custom" === str) {
            class R {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
          }
          if (cResult[8] === tmp5) {
            class R {
              constructor(arg0) {
                return "easteregg" === animation.name;
              }
            }
            if (cResult[11] !== num) {
              class R {
                constructor(arg0) {
                  return "easteregg" === animation.name;
                }
              }
              tmp25[0] = num;
              cResult[11] = num;
              cResult[12] = tmp25;
            } else {
              class R {
                constructor(arg0) {
                  return "easteregg" === animation.name;
                }
              }
            }
            const tmpResult = useToken;
            const token = tmpResult.useToken(color);
            if (cResult[13] === layers) {
              class R {
                constructor(arg0) {
                  return "easteregg" === animation.name;
                }
              }
              if (cResult[16] === sum) {
                class R {
                  constructor(arg0) {
                    return "easteregg" === animation.name;
                  }
                }
              }
              class K {
                constructor() {
                  tmp2 = enabled;
                  if (tmp2) {
                    tmp13 = closure_6;
                    current3 = closure_6.current;
                    tmp14 = null;
                    if (current3 != null) {
                      tmp15 = closure_3;
                      playResult = current3.play(closure_3, closure_3);
                    }
                  } else {
                    if (tmp) {
                      num = 0;
                      if (c4 >= 0) {
                        tmp9 = closure_6;
                        current2 = closure_6.current;
                        tmp10 = null;
                        if (current2 != null) {
                          tmp11 = closure_5;
                          playResult1 = current2.play(tmp3, closure_5);
                        }
                      }
                    }
                    tmp4 = closure_6;
                    current = closure_6.current;
                    tmp5 = null;
                    if (current != null) {
                      tmp6 = start;
                      tmp7 = closure_3;
                      playResult2 = current.play(start, closure_3);
                    }
                  }
                  return;
                }
              }
              cResult[16] = sum;
              cResult[17] = start;
              cResult[18] = sum1;
              cResult[19] = undefined;
              cResult[20] = enabled;
              cResult[21] = K;
            }
            if (null != token) {
              class R {
                constructor(arg0) {
                  return "easteregg" === animation.name;
                }
              }
            }
            cResult[13] = layers;
            cResult[14] = token;
            cResult[15] = undefined;
          }
          const size1 = { width: tmp5, height: tmp5 };
          cResult[8] = tmp5;
          cResult[9] = tmp5;
          cResult[10] = size1;
        }
        if (cResult[3] !== animation) {
          class R {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
          class K {
            constructor() {
              tmp2 = enabled;
              if (tmp2) {
                tmp13 = closure_6;
                current3 = closure_6.current;
                tmp14 = null;
                if (current3 != null) {
                  tmp15 = closure_3;
                  playResult = current3.play(closure_3, closure_3);
                }
              } else {
                if (tmp) {
                  num = 0;
                  if (c4 >= 0) {
                    tmp9 = closure_6;
                    current2 = closure_6.current;
                    tmp10 = null;
                    if (current2 != null) {
                      tmp11 = closure_5;
                      playResult1 = current2.play(tmp3, closure_5);
                    }
                  }
                }
                tmp4 = closure_6;
                current = closure_6.current;
                tmp5 = null;
                if (current != null) {
                  tmp6 = start;
                  tmp7 = closure_3;
                  playResult2 = current.play(start, closure_3);
                }
              }
              return;
            }
          }
          cResult[4] = tmp8;
        } else {
          class R {
            constructor(arg0) {
              return "easteregg" === animation.name;
            }
          }
        }
        const found1 = markers.find(tmp8);
        cResult[0] = animation;
        cResult[1] = markers;
        cResult[2] = found1;
        tmp6 = found1;
      }
    : (dotLottie, arg1) => {
        let closure_129_0;
        let height;
        let layers;
        let markers;
        let useLottieDefaultColors;
        let width;
        ({ animation: closure_129_0, size } = dotLottie);
        dotLottie = dotLottie.dotLottie;
        if (size === undefined) {
          size = "md";
        }
        let INTERACTIVE_TEXT_DEFAULT = dotLottie.color;
        if (INTERACTIVE_TEXT_DEFAULT === undefined) {
          INTERACTIVE_TEXT_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
        }
        let num = dotLottie.opacity;
        if (num === undefined) {
          num = 1;
        }
        ({ markers, layers } = dotLottie);
        const autoPlay = dotLottie.autoPlay;
        let sum1;
        let ref;
        let enabled;
        let token;
        let callback;
        ({ width, height, useLottieDefaultColors } = dotLottie);
        let tmp5 = IconSize.ICON_SIZE[size];
        const found = markers.find((name) => name.name === closure_1_0);
        const start = found.start;
        const sum = start + found.duration;
        let c4 = sum;
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
        ref = react.useRef(null);
        enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
        let tmp12 = tmp5;
        if ("custom" === size) {
          tmp12 = width;
        }
        const size1 = { width: tmp12, height: tmp5 };
        if ("custom" === size) {
          tmp5 = height;
        }
        const tmp3Result = useToken;
        token = tmp3Result.useToken(INTERACTIVE_TEXT_DEFAULT);
        const items = [token, layers];
        const items1 = [enabled, start, sum, num2, sum1];
        const memo = react.useMemo(() => {
          let color;
          let mapped;
          if (null != token) {
            mapped = layers.map((keypath) => ({ keypath, color }));
          }
          return mapped;
        }, items);
        callback = react.useCallback(() => {
          if (enabled) {
            const current3 = ref.current;
            if (current3 != null) {
              current3.play(c4, c4);
            }
          } else {
            if (tmp) {
              if (num2 >= 0) {
                const current2 = ref.current;
                if (current2 != null) {
                  current2.play(tmp3, sum1);
                }
              }
            }
            const current = ref.current;
            if (current != null) {
              current.play(start, c4);
            }
          }
        }, items1);
        const items2 = [callback];
        const imperativeHandle = react.useImperativeHandle(
          arg1,
          () => ({
            play() {
              return callback();
            },
          }),
          items2,
        );
        const items3 = [start, autoPlay, callback];
        const callback1 = react.useCallback(() => {
          if (autoPlay) {
            callback();
          } else {
            const current = ref.current;
            if (current != null) {
              current.play(start, start);
            }
          }
        }, items3);
        LottieViewDefault;
        const items4 = [size1, { opacity: num }];
        return <View style={size1}>{null}</View>;
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("design/components/LottieIcon/native/LottieIcon.tsx");

export const LottieIcon = forwardRefResult;
