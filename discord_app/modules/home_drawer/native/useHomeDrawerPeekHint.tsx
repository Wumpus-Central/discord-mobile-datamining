// === Module 16369: useHomeDrawerPeekHint ===

// Module 16369 (useHomeDrawerPeekHint)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import spring from "spring" /* 5375 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16367 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16362 */;

const require = globalThis.__r;

require = fn;
const ME = fn(1085).ME;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
let c8 = 2000;
const Easing = fn(4811).Easing;
let closure_9 = Easing.inOut(fn(4811).Easing.cubic);
let closure_10 = [];
let items = [fn(2049).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let __initData = { code: "function useHomeDrawerPeekHintTsx1(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}" };
let __initData2 = { code: "function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null){return;}if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
let __initData3 = { code: "function useHomeDrawerPeekHintTsx3(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}" };
let __initData4 = { code: "function useHomeDrawerPeekHintTsx4(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export const useHomeDrawerPeekHint = ReactCompilerGating.isReactCompilerEnabled() ? (function useHomeDrawerPeekHint(arg0, arg1) {
  let tmp = arg0;
  _require = arg1;
  const cResult = require("c").c(27);
  const tmp5 = noteInteraction();
  panelX = tmp5.panelX;
  const gestureState = tmp5.gestureState;
  const lastInteractionAt = tmp5.lastInteractionAt;
  const isPanelTouchActive = tmp5.isPanelTouchActive;
  noteInteraction = tmp5.noteInteraction;
  let obj = require("c");
  const isFocused = require("Link").useIsFocused();
  let obj2 = require("Link");
  const drawerOpen = require("useDrawerState").useDrawerOpen(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isPanelTouchActive];
    class T {
      constructor() {
        return isPanelTouchActive.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp8 = items;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const obj3 = require("useDrawerState");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, T);
  const tmp2Result = require("initialize");
  const first = gestureState(require("useGuildsRouteGuildId").useGuildsRouteGuildAndChannelId(), 1)[0];
  const tmp2Result5 = require("useGuildsRouteGuildId");
  const tmp2Result6 = require("DismissibleContentUnsafeUtils");
  if (tmp) {
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
    tmp = tmp14;
  }
  closure_7 = tmp;
  lastInteractionAt.useRef(false);
  const tmp12Result = gestureState(lastInteractionAt.useState(false), 2);
  const first1 = tmp12Result[0];
  closure_10 = tmp19;
  let tmp20 = first1;
  if (first1) {
    tmp20 = !tmp;
  }
  if (tmp20) {
    tmp19(false);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { bypassAutoDismiss: true };
    cResult[2] = obj4;
    let tmp22 = obj4;
  } else {
    tmp22 = cResult[2];
  }
  require("useSelectedDismissibleContent");
  if (first1) {
    if (tmp) {
      let tmp25 = items;
    }
    const tmp12Result2 = tmp12(tmp24(tmp25, tmp22), 2);
    class T {
      constructor() {
        return isPanelTouchActive.useReducedMotion;
      }
    }
    __initData = obj7.useRef(null);
    __initData2 = obj7.useRef(null);
    __initData3 = obj7.useRef(false);
    obj7.useRef(null);
    if (cResult[3] !== arg1) {
      const fn = function x() {
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
      };
      cResult[3] = arg1;
      class T {
        constructor() {
          return isPanelTouchActive.useReducedMotion;
        }
      }
      cResult[4] = fn;
      let tmp29 = fn;
    } else {
      tmp29 = cResult[4];
    }
    closure_16 = tmp29;
    const tmp30 = tmp12Result2[0] === tmp2(tmp3[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    closure_17 = tmp30;
    if (cResult[5] === tmp30) {
      if (cResult[6] === tmp27) {
        if (cResult[7] === tmp29) {
          let tmp31 = cResult[8];
          let tmp32 = cResult[9];
        }
        const effect = obj7.useEffect(tmp31, tmp32);
        if (cResult[10] !== arg1) {
          function ee() {
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
          }
          cResult[10] = arg1;
          class T {
            constructor() {
              return isPanelTouchActive.useReducedMotion;
            }
          }
          cResult[11] = ee;
          let tmp34 = ee;
        } else {
          tmp34 = cResult[11];
        }
        class T {
          constructor() {
            return isPanelTouchActive.useReducedMotion;
          }
        }
        if (cResult[12] === tmp) {
          if (cResult[13] === isPanelTouchActive) {
            if (cResult[14] === lastInteractionAt) {
              if (cResult[15] === noteInteraction) {
                if (cResult[16] === first1) {
                  let tmp35 = cResult[17];
                  let tmp36 = cResult[18];
                }
                const effect1 = obj7.useEffect(tmp35, tmp36);
                if (cResult[19] === drawerOpen) {
                  if (cResult[20] === tmp34) {
                    let tmp38 = cResult[21];
                    const tmp39 = cResult[22];
                  }
                  const effect2 = obj7.useEffect(tmp39, tmp38);
                  if (cResult[23] === tmp) {
                    if (cResult[24] === tmp34) {
                      let tmp42 = cResult[25];
                      const tmp43 = cResult[26];
                    }
                    const effect3 = obj7.useEffect(tmp42, tmp43);
                    function handleDrawerDragged() {
                      closure_1_18();
                      current = ref5.current;
                      if (current != null) {
                        current(ContentDismissActionType.INDIRECT_ACTION);
                      }
                      closure_10(false);
                    }
                    class T {
                      constructor() {
                        return isPanelTouchActive.useReducedMotion;
                      }
                    }
                    function oe() {
                      let active = gestureState.get().active;
                      if (active) {
                        active = panelX.get() > 8;
                      }
                      return active;
                    }
                    const obj5 = { gestureState, panelX, PEEK_HINT_DRAWER_DRAG_THRESHOLD: 8 };
                    oe.__closure = obj5;
                    oe.__workletHash = 15765003051494;
                    oe.__initData = __initData;
                    function _e(arg0, arg1) {
                      let tmp = closure_17;
                      if (closure_17) {
                        tmp = null != arg1;
                      }
                      if (tmp) {
                        tmp = arg0;
                      }
                      if (tmp) {
                        tmp = !arg1;
                      }
                      if (tmp) {
                        ReanimatedRexport.runOnJS(closure_1_19)();
                      }
                    }
                    class Z {
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
                    tmp47[0] = tmp30;
                    tmp47[1] = tmp2(tmp3[6]).runOnJS;
                    tmp47[2] = handleDrawerDragged;
                    _e.__closure = tmp47;
                    _e.__workletHash = 7455736075430;
                    _e.__initData = __initData2;
                    const animatedReaction = tmp2(tmp3[6]).useAnimatedReaction(oe, _e);
                    const tmp2Result8 = tmp2(tmp3[6]);
                  }
                  class T {
                    constructor() {
                      return isPanelTouchActive.useReducedMotion;
                    }
                  }
                  const items1 = [tmp, tmp34];
                  cResult[23] = tmp;
                  cResult[24] = tmp34;
                  cResult[25] = tmp44;
                  cResult[26] = items1;
                  class Z {
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
                  tmp42 = tmp44;
                }
                class T {
                  constructor() {
                    return isPanelTouchActive.useReducedMotion;
                  }
                }
                const items2 = [drawerOpen, tmp34];
                cResult[19] = drawerOpen;
                cResult[20] = tmp34;
                cResult[21] = items2;
                cResult[22] = tmp40;
                class Z {
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
                tmp38 = items2;
              }
            }
          }
        }
        function ne() {
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
        }
        const items3 = [tmp, first1, noteInteraction, lastInteractionAt, isPanelTouchActive];
        cResult[12] = tmp;
        class Z {
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
        cResult[14] = lastInteractionAt;
        cResult[15] = noteInteraction;
        cResult[16] = first1;
        cResult[17] = ne;
        cResult[18] = items3;
        tmp36 = items3;
        tmp35 = ne;
      }
    }
    class Z {
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
    const items4 = [tmp30, tmp29, tmp12Result2[1]];
    cResult[5] = tmp30;
    cResult[6] = tmp12Result2[1];
    cResult[7] = tmp29;
    cResult[8] = Z;
    cResult[9] = items4;
    tmp32 = items4;
    tmp31 = Z;
  }
  tmp25 = closure_10;
  tmp14 = !require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX);
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
    const tmp8Result2 = tmp8(tmp19(tmp20, { bypassAutoDismiss: true }), 2);
    current = tmp22;
    obj6.useRef(null);
    obj6.useRef(null);
    __initData3 = obj6.useRef(false);
    __initData4 = obj6.useRef(null);
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
    V.__initData = __initData3;
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
    Q.__initData = __initData4;
    const animatedReaction = tmp3(tmp4[6]).useAnimatedReaction(V, Q);
  }
  tmp20 = closure_10;
});