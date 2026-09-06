// discord_app/modules/home_drawer/native/useHomeDrawerPeekHint.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import useHomeDrawerGesture from "useHomeDrawerGesture.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import HomeDrawerStore from "HomeDrawerStore.tsx";

require = fn;
const ME = fn(1074).ME;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let c8 = 2000;
const Easing = fn(4296).Easing;
let closure_9 = Easing.inOut(fn(4296).Easing.cubic);
let closure_10 = [];
let items = [fn(1943).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let __initData = {
  code: "function useHomeDrawerPeekHintTsx1(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}",
};
let __initData2 = {
  code: "function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export const useHomeDrawerPeekHint = function useHomeDrawerPeekHint(enablePeekHint, sharedValue2) {
  let tmp = enablePeekHint;
  _require = sharedValue2;
  const tmp2 = noteInteraction();
  const panelX = tmp2.panelX;
  const gestureState = tmp2.gestureState;
  const lastInteractionAt = tmp2.lastInteractionAt;
  const isPanelTouchActive = tmp2.isPanelTouchActive;
  noteInteraction = tmp2.noteInteraction;
  let obj = require("Link");
  const isFocused = obj.useIsFocused();
  const drawerOpen = require("useDrawerState").useDrawerOpen(enablePeekHint);
  const obj2 = require("useDrawerState");
  items = [isPanelTouchActive];
  const stateFromStores = require("initialize").useStateFromStores(items, () => isPanelTouchActive.useReducedMotion);
  const obj3 = require("initialize");
  const first = gestureState(require("useGuildsRouteGuildId").useGuildsRouteGuildAndChannelId(), 1)[0];
  const obj4 = require("useGuildsRouteGuildId");
  const obj5 = require("DismissibleContentUnsafeUtils");
  if (enablePeekHint) {
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
      let tmp20 = current;
    }
    tmp8Result = tmp8(tmp19(tmp20, undefined, true), 2);
    current = tmp22;
    __initData = obj6.useRef(null);
    __initData2 = obj6.useRef(null);
    obj6.useRef(false);
    obj6.useRef(null);
    const items1 = [sharedValue2];
    const callback = obj6.useCallback(() => {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
      closure_14.current = true;
      const obj = { duration: 1500, easing };
      let result = sharedValue2.set(obj.withTiming(40, obj));
      closure_13.current = setTimeout(() => {
        ref3.current = null;
        ref4.current = false;
        const result = sharedValue2.set(
          closure_0(panelX[15]).withSpring(0, closure_0(panelX[16]).HOME_DRAWER_FLING_PHYSICS),
        );
        current = ref.current;
        if (current != null) {
          current(constants.AUTO_DISMISS);
        }
        closure_1_10(false);
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
        closure_15.current = current;
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
        const result = sharedValue2.set(spring.withSpring(0, useHomeDrawerGesture.HOME_DRAWER_FLING_PHYSICS));
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
    obj = { gestureState, panelX, PEEK_HINT_DRAWER_DRAG_THRESHOLD: 8 };
    V.__closure = obj;
    V.__workletHash = 15765003051494;
    V.__initData = __initData;
    class Q {
      constructor(arg0, arg1) {
        tmp = closure_17;
        if (closure_17) {
          tmp2 = null;
          tmp = null != sharedValue2;
        }
        if (tmp) {
          tmp = enablePeekHint;
        }
        if (tmp) {
          tmp = !sharedValue2;
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
    obj = { isPeekGranted: tmp25, runOnJS: tmp3(tmp4[6]).runOnJS, handleDrawerDragged: callback2 };
    Q.__closure = obj;
    Q.__workletHash = 10054961085184;
    Q.__initData = __initData2;
    const animatedReaction = tmp3Result.useAnimatedReaction(V, Q);
  }
  tmp20 = closure_10;
};
