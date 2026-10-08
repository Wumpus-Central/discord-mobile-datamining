// === Module 16250: useHomeDrawerPeekHint ===

// Module 16250 (useHomeDrawerPeekHint)
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import spring from "spring" /* 5374 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16248 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16243 */;

const require = globalThis.__r;

require = fn;
const ME = fn(1085).ME;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
let c8 = 2000;
const Easing = fn(4810).Easing;
const easing = Easing.inOut(fn(4810).Easing.cubic);
let closure_10 = [];
let items = [fn(2048).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let closure_13 = { code: "function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null){return;}if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
let __initData = { code: "function useHomeDrawerPeekHintTsx3(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}" };
let __initData2 = { code: "function useHomeDrawerPeekHintTsx4(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export const useHomeDrawerPeekHint = ReactCompilerGating.isReactCompilerEnabled() ? (function useHomeDrawerPeekHint(arg0, arg1) {
  _require = arg1;
  const cResult = require("c").c(26);
  const tmp4 = noteInteraction();
  panelX = tmp4.panelX;
  const gestureState = tmp4.gestureState;
  const lastInteractionAt = tmp4.lastInteractionAt;
  const isPanelTouchActive = tmp4.isPanelTouchActive;
  noteInteraction = tmp4.noteInteraction;
  let obj = require("c");
  const isFocused = require("Link").useIsFocused();
  let obj2 = require("Link");
  const drawerOpen = require("useDrawerState").useDrawerOpen(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [isPanelTouchActive];
    class T {
      constructor() {
        return isPanelTouchActive.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp7 = items;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const obj3 = require("useDrawerState");
  const stateFromStores = require("initialize").useStateFromStores(tmp7, T);
  const tmpResult = require("initialize");
  const first = gestureState(require("useGuildsRouteGuildId").useGuildsRouteGuildAndChannelId(), 1)[0];
  const tmpResult4 = require("useGuildsRouteGuildId");
  let tmp14 = arg0;
  const tmpResult5 = require("DismissibleContentUnsafeUtils");
  if (arg0) {
    tmp14 = isFocused;
  }
  if (tmp14) {
    tmp14 = null != first;
  }
  if (tmp14) {
    tmp14 = first !== drawerOpen;
  }
  if (tmp14) {
    tmp14 = !drawerOpen;
  }
  if (tmp14) {
    tmp14 = !stateFromStores;
  }
  if (tmp14) {
    tmp14 = tmp13;
  }
  closure_7 = tmp14;
  lastInteractionAt.useRef(false);
  const tmp11Result = gestureState(lastInteractionAt.useState(false), 2);
  const first1 = tmp11Result[0];
  closure_10 = tmp19;
  let tmp20 = first1;
  if (first1) {
    tmp20 = !tmp14;
  }
  if (tmp20) {
    tmp19(false);
  }
  require("useSelectedDismissibleContent");
  if (first1) {
    if (tmp14) {
      let tmp24 = items;
    }
    class T {
      constructor() {
        return isPanelTouchActive.useReducedMotion;
      }
    }
    items = tmp26;
    obj7.useRef(null);
    obj7.useRef(null);
    __initData = obj7.useRef(false);
    obj7.useRef(null);
    if (cResult[2] !== arg1) {
      class L {
        constructor() {
          tmp = closure_12;
          if (null != closure_12.current) {
            tmp2 = globalThis;
            _clearTimeout = clearTimeout;
            clearTimeoutResult = clearTimeout(tmp.current);
            tmp.current = null;
          }
          closure_14.current = true;
          obj = closure_0(closure_1[16]);
          obj1 = { duration: 1500, easing: closure_9 };
          result = closure_0.set(obj.withTiming(40, obj1));
          closure_13.current = setTimeout(() => { ... }, 2500);
          return;
        }
      }
      cResult[2] = arg1;
      class T {
        constructor() {
          return isPanelTouchActive.useReducedMotion;
        }
      }
    } else {
      class L {
        constructor() {
          tmp = closure_12;
          if (null != closure_12.current) {
            tmp2 = globalThis;
            _clearTimeout = clearTimeout;
            clearTimeoutResult = clearTimeout(tmp.current);
            tmp.current = null;
          }
          closure_14.current = true;
          obj = closure_0(closure_1[16]);
          obj1 = { duration: 1500, easing: closure_9 };
          result = closure_0.set(obj.withTiming(40, obj1));
          closure_13.current = setTimeout(() => { ... }, 2500);
          return;
        }
      }
    }
    const L = tmp28;
    const tmp29 = tmp11(tmp23(tmp24, undefined, true), 2)[0] === tmp(tmp2[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    closure_17 = tmp29;
    if (cResult[4] === tmp29) {
      class L {
        constructor() {
          tmp = closure_12;
          if (null != closure_12.current) {
            tmp2 = globalThis;
            _clearTimeout = clearTimeout;
            clearTimeoutResult = clearTimeout(tmp.current);
            tmp.current = null;
          }
          closure_14.current = true;
          obj = closure_0(closure_1[16]);
          obj1 = { duration: 1500, easing: closure_9 };
          result = closure_0.set(obj.withTiming(40, obj1));
          closure_13.current = setTimeout(() => { ... }, 2500);
          return;
        }
      }
    }
    class V {
      constructor() {
        tmp = closure_17;
        if (closure_17) {
          tmp2 = closure_14;
          tmp = !closure_14.current;
        }
        if (tmp) {
          tmp3 = closure_15;
          tmp4 = closure_11;
          closure_15.current = closure_11;
          tmp5 = closure_16;
          tmp6 = closure_16();
        }
        return;
      }
    }
    const items1 = [tmp29, tmp28, tmp26];
    cResult[4] = tmp29;
    cResult[5] = tmp26;
    cResult[6] = tmp28;
    cResult[7] = V;
    cResult[8] = items1;
    const tmp11Result2 = tmp11(tmp23(tmp24, undefined, true), 2);
  }
  tmp24 = closure_10;
  tmp13 = !require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX);
}) : (function useHomeDrawerPeekHint(arg0, arg1) {
  let tmp = arg0;
  _require = arg1;
  const tmp2 = noteInteraction();
  const panelX = tmp2.panelX;
  const gestureState = tmp2.gestureState;
  const lastInteractionAt = tmp2.lastInteractionAt;
  const isPanelTouchActive = tmp2.isPanelTouchActive;
  noteInteraction = tmp2.noteInteraction;
  const isFocused = require("Link").useIsFocused();
  let obj = require("Link");
  const drawerOpen = require("useDrawerState").useDrawerOpen(arg0);
  let obj2 = require("useDrawerState");
  const items = [isPanelTouchActive];
  const stateFromStores = require("initialize").useStateFromStores(items, () => isPanelTouchActive.useReducedMotion);
  const obj3 = require("initialize");
  const first = gestureState(require("useGuildsRouteGuildId").useGuildsRouteGuildAndChannelId(), 1)[0];
  const obj4 = require("useGuildsRouteGuildId");
  const obj5 = require("DismissibleContentUnsafeUtils");
  if (arg0) {
    tmp = isFocused;
  }
  if (tmp) {
    tmp = null != first;
  }
  if (tmp) {
    tmp = first !== drawerOpen;
  }
  if (tmp) {
    tmp = !drawerOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  if (tmp) {
    tmp = tmp10;
  }
  closure_7 = tmp;
  lastInteractionAt.useRef(false);
  const tmp8Result = gestureState(lastInteractionAt.useState(false), 2);
  const first1 = tmp8Result[0];
  closure_10 = tmp15;
  let tmp16 = first1;
  if (first1) {
    tmp16 = !tmp;
  }
  if (tmp16) {
    tmp15(false);
  }
  require("useSelectedDismissibleContent");
  if (first1) {
    if (tmp) {
      let tmp20 = current;
    }
    const tmp8Result2 = tmp8(tmp19(tmp20, undefined, true), 2);
    current = tmp22;
    obj6.useRef(null);
    obj6.useRef(null);
    __initData = obj6.useRef(false);
    __initData2 = obj6.useRef(null);
    const items1 = [arg1];
    const callback = obj6.useCallback(() => {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      closure_14.current = true;
      let result = closure_0.set(timing.withTiming(40, { duration: 1500, easing }));
      closure_13.current = setTimeout(() => {
        ref3.current = null;
        ref4.current = false;
        const result = closure_1_0.set(closure_0(panelX[17]).withSpring(0, closure_0(panelX[18]).HOME_DRAWER_FLING_PHYSICS));
        current = ref.current;
        if (current != null) {
          current(constants.AUTO_DISMISS);
        }
        closure_1_10(false);
        const obj = closure_0(panelX[17]);
      }, 2500);
      const obj2 = { duration: 1500, easing };
    }, items1);
    const tmp25 = tmp8Result2[0] === tmp3(tmp4[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    closure_17 = tmp25;
    const items2 = [tmp25, callback, tmp8Result2[1]];
    const effect = obj6.useEffect(() => {
      let tmp = closure_17;
      if (closure_17) {
        tmp = !ref4.current;
      }
      if (tmp) {
        closure_15.current = current;
        callback();
      }
    }, items2);
    const items3 = [arg1];
    const callback1 = obj6.useCallback(() => {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      if (null != ref3.current) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(ref3.current);
        ref3.current = null;
      }
      if (ref4.current) {
        tmp7.current = false;
        const result = closure_0.set(spring.withSpring(0, useHomeDrawerGesture.HOME_DRAWER_FLING_PHYSICS));
      }
    }, items3);
    const items4 = [tmp, first1, noteInteraction, lastInteractionAt, isPanelTouchActive];
    const effect1 = obj6.useEffect(() => {
      if (closure_7) {
        if (!first1) {
          if (!ref.current) {
            noteInteraction();
            const _setTimeout = setTimeout;
            function checkIdle() {
              closure_12.current = null;
              let diff = c8 - (Date.now() - lastInteractionAt.current);
              if (!isPanelTouchActive.get()) {
                if (0 >= diff) {
                  closure_10(true);
                }
              }
              if (0 >= diff) {
                diff = c8;
              }
              closure_12.current = setTimeout(checkIdle, diff);
            }
            ref.current = setTimeout(checkIdle, ref);
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
            };
          }
        }
      }
    }, items4);
    const items5 = [drawerOpen, callback1];
    const effect2 = obj6.useEffect(() => {
      if (drawerOpen) {
        closure_8.current = true;
        callback1();
      }
    }, items5);
    const items6 = [tmp, callback1];
    const effect3 = obj6.useEffect(() => {
      current = !closure_7;
      if (!closure_7) {
        current = ref4.current;
      }
      if (current) {
        callback1();
        const current2 = ref5.current;
        if (current2 != null) {
          current2(ContentDismissActionType.AUTO_DISMISS);
        }
      }
    }, items6);
    const items7 = [callback1];
    const callback2 = obj6.useCallback(() => {
      callback1();
      current = ref5.current;
      if (current != null) {
        current(ContentDismissActionType.INDIRECT_ACTION);
      }
      closure_10(false);
    }, items7);
    class V {
      constructor() {
        active = gestureState.get().active;
        if (active) {
          tmp = panelX;
          num = 8;
          active = panelX.get() > 8;
        }
        return active;
      }
    }
    const obj7 = { gestureState, panelX, PEEK_HINT_DRAWER_DRAG_THRESHOLD: 8 };
    V.__closure = obj7;
    V.__workletHash = 13898630050852;
    V.__initData = __initData;
    class Q {
      constructor(arg0, arg1) {
        tmp = closure_17;
        if (closure_17) {
          tmp2 = null;
          tmp = null != arg1;
        }
        if (tmp) {
          tmp = arg0;
        }
        if (tmp) {
          tmp = !arg1;
        }
        if (tmp) {
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj = closure_0(closure_1[6]);
          tmp5 = closure_19;
          tmp6 = obj.runOnJS(closure_19)();
        }
        return;
      }
    }
    const obj8 = { isPeekGranted: tmp25, runOnJS: tmp3(tmp4[6]).runOnJS, handleDrawerDragged: callback2 };
    Q.__closure = obj8;
    Q.__workletHash = 10590232595782;
    Q.__initData = __initData2;
    const animatedReaction = tmp3(tmp4[6]).useAnimatedReaction(V, Q);
  }
  tmp20 = closure_10;
});