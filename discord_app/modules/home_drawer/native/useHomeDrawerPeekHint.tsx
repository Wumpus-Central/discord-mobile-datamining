// discord_app/modules/home_drawer/native/useHomeDrawerPeekHint.tsx
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import useHomeDrawerGesture from "useHomeDrawerGesture.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import HomeDrawerStore from "HomeDrawerStore.tsx";

const require = globalThis.__r;

require = fn;
const ME = fn(1072).ME;
const ContentDismissActionType = fn(4986).ContentDismissActionType;
let c8 = 2000;
const Easing = fn(1652).Easing;
let closure_9 = Easing.inOut(fn(1652).Easing.cubic);
let closure_10 = [];
let items = [fn(4973).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let closure_12 = {
  code: "(function useHomeDrawerPeekHintTsx1(){let[gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD]=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;})",
};
let closure_13 = {
  code: "(function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){let[isPeekGranted,scheduleOnRN,handleDrawerDragged]=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){scheduleOnRN(handleDrawerDragged);}})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export function useHomeDrawerPeekHint(enablePeekHint, sharedValue8) {
  let tmp = enablePeekHint;
  _require = sharedValue8;
  const tmp2 = HomeDrawerStore();
  const lastInteractionAt = tmp2.lastInteractionAt;
  dependencyMap = lastInteractionAt;
  const isPanelTouchActive = tmp2.isPanelTouchActive;
  _slicedToArray = isPanelTouchActive;
  const noteInteraction = tmp2.noteInteraction;
  ({ panelX, gestureState } = tmp2);
  const isFocused = require("Link").useIsFocused();
  let obj = require("Link");
  const drawerOpen = require("useDrawerState").useDrawerOpen(enablePeekHint);
  let obj2 = require("useDrawerState");
  items = [drawerOpen];
  const stateFromStores = require("initialize").useStateFromStores(items, () => drawerOpen.useReducedMotion);
  const obj3 = require("initialize");
  const first = _slicedToArray(require("useGuildsRouteGuildId").useGuildsRouteGuildAndChannelId(), 1)[0];
  const obj4 = require("useGuildsRouteGuildId");
  const obj5 = require("DismissibleContentUnsafeUtils");
  if (enablePeekHint) {
    tmp = isFocused;
  }
  if (tmp) {
    tmp = null != first;
  }
  if (tmp) {
    tmp = first !== ref;
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
  HomeDrawerStore = tmp;
  ref = noteInteraction.useRef(false);
  [first1] = noteInteraction.useState(false);
  closure_8 = tmp15;
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
      let tmp20 = ref3;
    }
    const tmp8Result2 = tmp8(tmp19(tmp20, { bypassAutoDismiss: true }), 2);
    closure_9 = tmp22;
    const ref2 = obj6.useRef(null);
    const ref4 = obj6.useRef(false);
    const ref5 = obj6.useRef(null);
    const items1 = [sharedValue8];
    const callback = obj6.useCallback(() => {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      closure_12.current = true;
      let result = _undefined.set(timing_timing.withTiming(40, { duration: 1500, easing }));
      closure_11.current = setTimeout(() => {
        ref3.current = null;
        ref4.current = false;
        const result = _undefined.set(c0(5761).withSpring(0, c0(18404).HOME_DRAWER_FLING_PHYSICS));
        const current = ref.current;
        if (current != null) {
          current(first1.AUTO_DISMISS);
        }
        closure_1_8(false);
        const obj = c0(5761);
      }, 2500);
      const obj2 = { duration: 1500, easing };
    }, items1);
    const tmp25 = tmp8Result2[0] === tmp3(4973).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    closure_15 = tmp25;
    const items2 = [tmp25, callback, tmp8Result2[1]];
    const effect = obj6.useEffect(() => {
      let tmp = closure_15;
      if (closure_15) {
        tmp = !ref4.current;
      }
      if (tmp) {
        closure_13.current = current;
        callback();
      }
    }, items2);
    const items3 = [sharedValue8];
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
        const result = _undefined.set(spring_spring.withSpring(0, useHomeDrawerGesture.HOME_DRAWER_FLING_PHYSICS));
      }
    }, items3);
    const items4 = [tmp, first1, noteInteraction, lastInteractionAt, isPanelTouchActive];
    const effect1 = obj6.useEffect(() => {
      if (closure_5) {
        if (!first1) {
          if (!ref.current) {
            noteInteraction();
            const _setTimeout = setTimeout;
            function checkIdle() {
              closure_10.current = null;
              let diff = c8 - (Date.now() - ref.current);
              if (!c2.get()) {
                if (0 >= diff) {
                  closure_8(true);
                }
              }
              if (0 >= diff) {
                diff = c8;
              }
              closure_10.current = setTimeout(checkIdle, diff);
            }
            ref2.current = setTimeout(checkIdle, closure_8);
            return () => {
              if (null != ref2.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref2.current);
                ref2.current = null;
              }
            };
          }
        }
      }
    }, items4);
    const items5 = [drawerOpen, callback1];
    const effect2 = obj6.useEffect(() => {
      if (drawerOpen) {
        closure_6.current = true;
        callback1();
      }
    }, items5);
    const items6 = [tmp, callback1];
    const effect3 = obj6.useEffect(() => {
      let current = !closure_5;
      if (!closure_5) {
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
      const current = ref5.current;
      if (current != null) {
        current(ContentDismissActionType.INDIRECT_ACTION);
      }
      closure_8(false);
    }, items7);
    ref3 = obj6.useRef(null);
    const items8 = [ref4, gestureState, panelX, 8];
    [tmp34, tmp35, tmp36, tmp37] = items8;
    function useHomeDrawerPeekHintTsx1() {
      let active = _undefined.get().active;
      if (active) {
        active = _undefined2.get() > c2;
      }
      return active;
    }
    const items9 = [tmp35, tmp36, tmp37];
    useHomeDrawerPeekHintTsx1.__closure = items9;
    useHomeDrawerPeekHintTsx1.__workletHash = 12843932440959;
    useHomeDrawerPeekHintTsx1.__initData = tmp34;
    const items10 = [ref5, tmp25, tmp3(1705).scheduleOnRN, callback2];
    _require = undefined;
    dependencyMap = undefined;
    _slicedToArray = undefined;
    [tmp40, tmp41, tmp42, tmp43] = items10;
    function useHomeDrawerPeekHintTsx2(arg0, arg1) {
      let tmp = c0;
      if (c0) {
        tmp = null != arg1;
      }
      if (tmp) {
        tmp = arg0;
      }
      if (tmp) {
        tmp = !arg1;
      }
      if (tmp) {
        _undefined2(c2);
      }
    }
    const items11 = [tmp41, tmp42, tmp43];
    useHomeDrawerPeekHintTsx2.__closure = items11;
    useHomeDrawerPeekHintTsx2.__workletHash = 16017025377880;
    useHomeDrawerPeekHintTsx2.__initData = tmp40;
    const animatedReaction = tmp3(1652).useAnimatedReaction(useHomeDrawerPeekHintTsx1, useHomeDrawerPeekHintTsx2);
  }
  tmp20 = ref2;
}
