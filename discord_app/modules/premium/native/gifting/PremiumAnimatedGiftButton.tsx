// === Module 11879: PremiumAnimatedGiftButton ===

// Module 11879 (PremiumAnimatedGiftButton)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

const require = globalThis.__r;

require = fn;
const useRef = fn(19).useRef;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles((width, marginHorizontal) => {
  const obj = { containerRefresh: null, animationRefresh: null };
  const size = { width, height: width, borderRadius: nativeDefault.radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj.containerRefresh = size;
  obj.animationRefresh = { width: 24, height: 24 };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export const PremiumAnimatedGiftButton = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(30);
  ({ active, style, disabled, accessibilityState, channelId, animationDataUrl, onAnimationFinished, loop, activeStyle } = arg0);
  let obj = require("c");
  const tmp = _require;
  const token = require("useToken").useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = require("useToken");
  const token1 = require("useToken").useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj3 = require("useToken");
  const token2 = require("useToken").useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = closure_7(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const obj4 = require("useToken");
  _require = useRef(null);
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
  const tmp9 = useRef(null);
  stateFromStores = tmp(504).useStateFromStores(tmp10, T);
  if (cResult[2] !== stateFromStores) {
    class E {
      constructor() {
        if (!closure_1) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[9]);
          if (obj.isIOS()) {
            tmp3 = null;
            if (closure_0 != null) {
              current = closure_0.current;
              if (current != null) {
                resetResult = current.reset();
              }
            }
          }
          tmp5 = null;
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
        if (!closure_1) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[9]);
          if (obj.isIOS()) {
            tmp3 = null;
            if (closure_0 != null) {
              current = closure_0.current;
              if (current != null) {
                resetResult = current.reset();
              }
            }
          }
          tmp5 = null;
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
        if (!closure_1) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[9]);
          if (obj.isIOS()) {
            tmp3 = null;
            if (closure_0 != null) {
              current = closure_0.current;
              if (current != null) {
                resetResult = current.reset();
              }
            }
          }
          tmp5 = null;
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
    const effect = noop.useEffect(E, items2);
    class T {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    if (!stateFromStores) {
      class E {
        constructor() {
          if (!closure_1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[9]);
            if (obj.isIOS()) {
              tmp3 = null;
              if (closure_0 != null) {
                current = closure_0.current;
                if (current != null) {
                  resetResult = current.reset();
                }
              }
            }
            tmp5 = null;
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
          if (!closure_1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[9]);
            if (obj.isIOS()) {
              tmp3 = null;
              if (closure_0 != null) {
                current = closure_0.current;
                if (current != null) {
                  resetResult = current.reset();
                }
              }
            }
            tmp5 = null;
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
          if (!closure_1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[9]);
            if (obj.isIOS()) {
              tmp3 = null;
              if (closure_0 != null) {
                current = closure_0.current;
                if (current != null) {
                  resetResult = current.reset();
                }
              }
            }
            tmp5 = null;
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
          if (!closure_1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[9]);
            if (obj.isIOS()) {
              tmp3 = null;
              if (closure_0 != null) {
                current = closure_0.current;
                if (current != null) {
                  resetResult = current.reset();
                }
              }
            }
            tmp5 = null;
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
  const tmpResult = tmp(504);
}) : ((arg0) => {
  ({ active, disabled, accessibilityState } = arg0);
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  const token = require("useToken").useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj = require("useToken");
  const tmp3 = stateFromStores;
  const token1 = require("useToken").useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj2 = require("useToken");
  const token2 = require("useToken").useToken(stateFromStores(587).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = closure_7(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp9 = useRef(null);
  _require = tmp9;
  const obj3 = require("useToken");
  const items = [AccessibilityStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [channelId, stateFromStores];
  const effect = noop.useEffect(() => {
    if (!stateFromStores) {
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
      obj = PlatformUtils;
    }
  }, items1);
  let FadeOut;
  if (!stateFromStores) {
    FadeOut = tmp(4612).FadeOut;
  }
  const obj5 = { exiting: FadeOut, children: null };
  const items2 = [tmp7.containerRefresh, style, ];
  if (active) {
    active = !disabled;
  }
  if (active) {
    active = activeStyle;
  }
  const obj6 = { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null };
  items2[2] = active;
  let tmp14;
  if (bound > 0) {
    tmp14 = bound;
  }
  obj6.hitSlop = tmp14;
  const merged = Object.assign(accessibilityState);
  obj6.accessibilityState = { disabled };
  const merged1 = Object.assign(arg0);
  obj6.children = jsx(tmp3(5920), { ref: tmp9, style: tmp7.animationRefresh, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished });
  obj5.children = jsx(require("Pressables").PressableOpacity, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
  return jsx(stateFromStores(4612).View, { exiting: FadeOut, children: null });
});