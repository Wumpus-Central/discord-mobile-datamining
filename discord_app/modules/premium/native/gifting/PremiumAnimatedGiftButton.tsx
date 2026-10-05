// === Module 11879: PremiumAnimatedGiftButton ===

// Module 11879 (PremiumAnimatedGiftButton)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, playResult, resetResult, tmp4, tmp6;

const useRef = react2.useRef;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles((width, marginHorizontal) => {
  const obj = { containerRefresh: size, animationRefresh: { width: 24, height: 24 } };
  size = { width, height: width, borderRadius: nativeDefault.radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  return obj;
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityState;
  let active;
  let activeStyle;
  let animationDataUrl;
  let channelId;
  let disabled;
  let items2;
  let loop;
  let onAnimationFinished;
  let ref;
  let stateFromStores;
  let style;
  let tmp10;
  let tmp11;
  let useReducedMotion;
  let obj = require("react");
  const cResult = obj.c(30);
  ({ active, style, disabled, accessibilityState, channelId, animationDataUrl, onAnimationFinished, loop, activeStyle } = arg0);
  const obj2 = require("useToken");
  const token = obj2.useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj3 = require("useToken");
  const token1 = obj3.useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj4 = require("useToken");
  const token2 = obj4.useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = closure_7(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp = _require;
  _require = useRef(null);
  useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class T {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp10 = items;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp10, T);
  if (cResult[2] !== stateFromStores) {
    class E {
      constructor() {
        tmp = closure_1;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          if (obj.isIOS()) {
            tmp4 = null;
            if (closure_0 != null) {
              current = closure_0.current;
              if (current != null) {
                resetResult = current.reset();
              }
            }
          }
          tmp6 = null;
          if (closure_0 != null) {
            current2 = closure_0.current;
            if (current2 != null) {
              playResult = current2.play();
            }
          }
        }
        return;
      }
    }
    cResult[2] = stateFromStores;
    class T {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
  } else {
    class E {
      constructor() {
        tmp = closure_1;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          if (obj.isIOS()) {
            tmp4 = null;
            if (closure_0 != null) {
              current = closure_0.current;
              if (current != null) {
                resetResult = current.reset();
              }
            }
          }
          tmp6 = null;
          if (closure_0 != null) {
            current2 = closure_0.current;
            if (current2 != null) {
              playResult = current2.play();
            }
          }
        }
        return;
      }
    }
  }
  if (cResult[4] === channelId) {
    class E {
      constructor() {
        tmp = closure_1;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          if (obj.isIOS()) {
            tmp4 = null;
            if (closure_0 != null) {
              current = closure_0.current;
              if (current != null) {
                resetResult = current.reset();
              }
            }
          }
          tmp6 = null;
          if (closure_0 != null) {
            current2 = closure_0.current;
            if (current2 != null) {
              playResult = current2.play();
            }
          }
        }
        return;
      }
    }
    const effect = react.useEffect(E, items2);
    class T {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    if (!stateFromStores) {
      class E {
        constructor() {
          tmp = closure_1;
          if (!tmp) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[9]);
            if (obj.isIOS()) {
              tmp4 = null;
              if (closure_0 != null) {
                current = closure_0.current;
                if (current != null) {
                  resetResult = current.reset();
                }
              }
            }
            tmp6 = null;
            if (closure_0 != null) {
              current2 = closure_0.current;
              if (current2 != null) {
                playResult = current2.play();
              }
            }
          }
          return;
        }
      }
    }
    if (active) {
      class E {
        constructor() {
          tmp = closure_1;
          if (!tmp) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[9]);
            if (obj.isIOS()) {
              tmp4 = null;
              if (closure_0 != null) {
                current = closure_0.current;
                if (current != null) {
                  resetResult = current.reset();
                }
              }
            }
            tmp6 = null;
            if (closure_0 != null) {
              current2 = closure_0.current;
              if (current2 != null) {
                playResult = current2.play();
              }
            }
          }
          return;
        }
      }
    }
    if (active) {
      class E {
        constructor() {
          tmp = closure_1;
          if (!tmp) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[9]);
            if (obj.isIOS()) {
              tmp4 = null;
              if (closure_0 != null) {
                current = closure_0.current;
                if (current != null) {
                  resetResult = current.reset();
                }
              }
            }
            tmp6 = null;
            if (closure_0 != null) {
              current2 = closure_0.current;
              if (current2 != null) {
                playResult = current2.play();
              }
            }
          }
          return;
        }
      }
    }
    if (cResult[7] === style) {
      class E {
        constructor() {
          tmp = closure_1;
          if (!tmp) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[9]);
            if (obj.isIOS()) {
              tmp4 = null;
              if (closure_0 != null) {
                current = closure_0.current;
                if (current != null) {
                  resetResult = current.reset();
                }
              }
            }
            tmp6 = null;
            if (closure_0 != null) {
              current2 = closure_0.current;
              if (current2 != null) {
                playResult = current2.play();
              }
            }
          }
          return;
        }
      }
    }
    const items1 = [tmp7.containerRefresh, style, active];
    cResult[7] = style;
    cResult[8] = tmp7.containerRefresh;
    cResult[9] = active;
    cResult[10] = items1;
  }
  items2 = [channelId, stateFromStores];
  cResult[4] = channelId;
  cResult[5] = stateFromStores;
  cResult[6] = items2;
}) : ((arg0) => {
  let accessibilityState;
  let active;
  let activeStyle;
  let animationDataUrl;
  let channelId;
  let disabled;
  let loop;
  let obj7;
  let onAnimationFinished;
  let ref;
  let stateFromStores;
  let style;
  let tmp14;
  let useReducedMotion;
  ({ active, disabled, accessibilityState } = arg0);
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  let obj = require("useToken");
  const token = obj.useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = require("useToken");
  const token1 = obj2.useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj3 = require("useToken");
  const token2 = obj3.useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = closure_7(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp9 = useRef(null);
  _require = tmp9;
  const items = [AccessibilityStore];
  const obj4 = require("get initialized");
  const tmp3 = stateFromStores;
  stateFromStores = obj4.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [channelId, stateFromStores];
  const effect = react.useEffect(() => {
    if (!stateFromStores) {
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.reset();
          }
        }
      }
      if (ref != null) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.play();
        }
      }
    }
  }, items1);
  let FadeOut;
  const View = stateFromStores(4612).View;
  if (!stateFromStores) {
    FadeOut = tmp(4612).FadeOut;
  }
  const items2 = [tmp7.containerRefresh, style, ];
  const PressableOpacity = tmp(5909).PressableOpacity;
  if (active) {
    active = !disabled;
  }
  if (active) {
    active = activeStyle;
  }
  ({ style: items2, hitSlop: tmp14, accessibilityRole: "button", accessibilityState: obj7, children: jsx(tmp3(5920), obj8) });
  items2[2] = active;
  tmp14 = undefined;
  if (bound > 0) {
    tmp14 = bound;
  }
  obj7 = { disabled };
  const merged = Object.assign(accessibilityState);
  const merged1 = Object.assign(arg0);
  return <View exiting={FadeOut}>{null}</View>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export const PremiumAnimatedGiftButton = tmp2;