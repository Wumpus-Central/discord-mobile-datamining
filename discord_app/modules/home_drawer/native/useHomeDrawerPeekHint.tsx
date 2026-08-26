// === Module 15464: items ===

// Module 15464 (items)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import closure_5 from "withEqualityFn" /* 15462 */;
import { ME } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { Easing } from "module_4184" /* 4184 */;

const require = arg1;
let c8 = 2000;
let closure_9 = Easing.inOut(require("module_4184").Easing.cubic);
let closure_10 = [];
let items = [require("DismissibleContent").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let closure_12 = { code: "function useHomeDrawerPeekHintTsx1(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}" };
let closure_13 = { code: "function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
let result = require("set").fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export const useHomeDrawerPeekHint = function useHomeDrawerPeekHint(enableHome, sharedValue2) {
  let tmp = enableHome;
  const _require = sharedValue2;
  const tmp2 = noteInteraction();
  const panelX = tmp2.panelX;
  const gestureState = tmp2.gestureState;
  const lastInteractionAt = tmp2.lastInteractionAt;
  const isPanelTouchActive = tmp2.isPanelTouchActive;
  noteInteraction = tmp2.noteInteraction;
  let obj = _require(panelX[8]);
  const isFocused = obj.useIsFocused();
  const drawerOpen = _require(panelX[9]).useDrawerOpen(enableHome);
  const obj2 = _require(panelX[9]);
  items = [isPanelTouchActive];
  const stateFromStores = _require(panelX[10]).useStateFromStores(items, () => isPanelTouchActive.useReducedMotion);
  const obj3 = _require(panelX[10]);
  const first = gestureState(_require(panelX[11]).useGuildsRouteGuildAndChannelId(), 1)[0];
  const obj4 = _require(panelX[11]);
  const obj5 = _require(panelX[12]);
  if (enableHome) {
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
  closure_8 = lastInteractionAt.useRef(false);
  let tmp8Result = tmp8(lastInteractionAt.useState(false), 2);
  const first1 = tmp8Result[0];
  closure_10 = tmp15;
  let tmp16 = first1;
  if (first1) {
    tmp16 = !tmp;
  }
  if (tmp16) {
    tmp15(false);
  }
  let tmp3Result = tmp3(tmp4[13]);
  if (first1) {
    if (tmp) {
      let tmp20 = closure_11;
    }
    tmp8Result = tmp8(tmp19(tmp20, undefined, true), 2);
    closure_11 = tmp22;
    closure_12 = obj6.useRef(null);
    closure_13 = obj6.useRef(null);
    closure_14 = obj6.useRef(false);
    closure_15 = obj6.useRef(null);
    const items1 = [sharedValue2];
    const callback = obj6.useCallback(() => {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
      closure_14.current = true;
      let obj = sharedValue2(panelX[14]);
      obj = { duration: 1500, easing: first1 };
      let result = sharedValue2.set(obj.withTiming(40, obj));
      closure_13.current = setTimeout(() => {
        closure_13.current = null;
        closure_14.current = false;
        const result = closure_0.set(closure_1_0(closure_1_1[15]).withSpring(0, closure_1_0(closure_1_1[16]).HOME_DRAWER_FLING_PHYSICS));
        const current = ref.current;
        if (current != null) {
          current(closure_1_7.AUTO_DISMISS);
        }
        callback(false);
      }, 2500);
    }, items1);
    const tmp25 = tmp8Result[0] === tmp3(tmp4[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    closure_17 = tmp25;
    const items2 = [tmp25, callback, tmp8Result[1]];
    const effect = obj6.useEffect(() => {
      let tmp = closure_17;
      if (closure_17) {
        tmp = !ref4.current;
      }
      if (tmp) {
        closure_15.current = closure_11;
        callback();
      }
    }, items2);
    const items3 = [sharedValue2];
    const callback1 = obj6.useCallback(() => {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
      if (null != ref3.current) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(tmp4.current);
        tmp4.current = null;
      }
      if (ref4.current) {
        tmp7.current = false;
        const result = sharedValue2.set(sharedValue2(panelX[15]).withSpring(0, sharedValue2(panelX[16]).HOME_DRAWER_FLING_PHYSICS));
        const obj = sharedValue2(panelX[15]);
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
              closure_1_12.current = null;
              let diff = closure_8 - (Date.now() - closure_1_3.current);
              if (!closure_1_4.get()) {
                if (0 >= diff) {
                  closure_1_10(true);
                }
              }
              if (0 >= diff) {
                diff = closure_8;
              }
              closure_1_12.current = setTimeout(checkIdle, diff);
            }
            closure_12.current = setTimeout(checkIdle, ref);
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp.current);
                tmp.current = null;
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
      let current = !constants;
      if (!constants) {
        current = ref4.current;
      }
      if (current) {
        callback1();
        const current2 = ref5.current;
        if (current2 != null) {
          current2(constants.AUTO_DISMISS);
        }
      }
    }, items6);
    const items7 = [callback1];
    const callback2 = obj6.useCallback(() => {
      callback1();
      const current = ref5.current;
      if (current != null) {
        current(constants.INDIRECT_ACTION);
      }
      callback(false);
    }, items7);
    tmp3Result = tmp3(tmp4[6]);
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
    obj = { gestureState: null, panelX: null, PEEK_HINT_DRAWER_DRAG_THRESHOLD: 8 };
    obj[0] = gestureState;
    obj[1] = panelX;
    V.__closure = obj;
    V.__workletHash = 15765003051494;
    V.__initData = closure_12;
    class Q {
      constructor(arg0, arg1) {
        tmp = closure_17;
        if (closure_17) {
          tmp2 = null;
          tmp = null != sharedValue2;
        }
        if (tmp) {
          tmp = enableHome;
        }
        if (tmp) {
          tmp = !sharedValue2;
        }
        if (tmp) {
          tmp3 = closure_0;
          tmp4 = panelX;
          obj = closure_0(panelX[6]);
          tmp5 = closure_19;
          tmp6 = obj.runOnJS(closure_19)();
        }
        return;
      }
    }
    obj = { isPeekGranted: null, runOnJS: null, handleDrawerDragged: null };
    obj[0] = tmp25;
    obj[1] = tmp3(tmp4[6]).runOnJS;
    obj[2] = callback2;
    Q.__closure = obj;
    Q.__workletHash = 10054961085184;
    Q.__initData = closure_13;
    const animatedReaction = tmp3Result.useAnimatedReaction(V, Q);
  }
  tmp20 = closure_10;
};