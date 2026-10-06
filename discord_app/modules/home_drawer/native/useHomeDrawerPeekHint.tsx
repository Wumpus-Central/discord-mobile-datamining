// discord_app/modules/home_drawer/native/useHomeDrawerPeekHint.tsx
import Constants from "../../../Constants.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import useHomeDrawerGesture from "useHomeDrawerGesture.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import HomeDrawerStore from "HomeDrawerStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, clearTimeoutResult, current, obj1, ref2, set, tmp3, tmp5, tmp6;

const ME = Constants.ME;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let c8 = 2000;
const Easing = ReanimatedRexport.Easing;
const easing = Easing.inOut(ReanimatedRexport.Easing.cubic);
let closure_10 = [];
let items = [dismissible_content.DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let ref = {
  code: "function useHomeDrawerPeekHintTsx1(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}",
};
let closure_13 = {
  code: "function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null){return;}if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}",
};
let __initData = {
  code: "function useHomeDrawerPeekHintTsx3(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}",
};
let __initData2 = {
  code: "function useHomeDrawerPeekHintTsx4(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}",
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let items;
      let noteInteraction;
      let panelX;
      let ref4;
      let tmp7;
      let tmp8;
      _require = arg1;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(26);
      const tmp4 = noteInteraction();
      panelX = tmp4.panelX;
      const gestureState = tmp4.gestureState;
      const lastInteractionAt = tmp4.lastInteractionAt;
      const isPanelTouchActive = tmp4.isPanelTouchActive;
      noteInteraction = tmp4.noteInteraction;
      let obj2 = require("Link");
      const isFocused = obj2.useIsFocused();
      const obj3 = require("useDrawerState");
      const drawerOpen = obj3.useDrawerOpen(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [isPanelTouchActive];
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
      const tmpResult = tmp(panelX[12]);
      const stateFromStores = tmpResult.useStateFromStores(tmp7, T);
      const tmpResult4 = tmp(panelX[13]);
      const first = gestureState(tmpResult4.useGuildsRouteGuildAndChannelId(), 1)[0];
      let tmp14 = arg0;
      const tmpResult5 = tmp(panelX[14]);
      const tmp13 = !tmpResult5.useIsDismissibleContentDismissed_UNSAFE(
        tmp(panelX[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX,
      );
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
      let closure_7 = tmp14;
      ref = lastInteractionAt.useRef(false);
      const tmp11Result = gestureState(lastInteractionAt.useState(false), 2);
      const first1 = tmp11Result[0];
      closure_10 = tmp19;
      const tmp20 = first1 && !tmp14;
      if (tmp20) {
        tmp11Result[1](false);
      }
      tmp(panelX[15]);
      if (first1) {
        let tmp24;
        if (tmp14) {
          tmp24 = items;
        }
        const tmp11Result2 = gestureState(tmp23(tmp24, undefined, true), 2);
        class T {
          constructor() {
            return isPanelTouchActive.useReducedMotion;
          }
        }
        items = tmp27;
        const first2 = tmp11Result2[0];
        ref = obj7.useRef(null);
        const ref3 = obj7.useRef(null);
        __initData = obj7.useRef(false);
        const ref5 = obj7.useRef(null);
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
              set = closure_0.set;
              obj = closure_0(closure_1[16]);
              obj1 = { duration: 1500, easing: closure_9 };
              result = set(obj.withTiming(40, obj1));
              closure_13.current = setTimeout(() => {
                /* body not rendered: F145500 */
              }, 2500);
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
              set = closure_0.set;
              obj = closure_0(closure_1[16]);
              obj1 = { duration: 1500, easing: closure_9 };
              result = set(obj.withTiming(40, obj1));
              closure_13.current = setTimeout(() => {
                /* body not rendered: F145500 */
              }, 2500);
              return;
            }
          }
        }
        const L = tmp29;
        const tmp30 = first2 === tmp(panelX[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
        let closure_17 = tmp30;
        if (cResult[4] === tmp30) {
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
              set = closure_0.set;
              obj = closure_0(closure_1[16]);
              obj1 = { duration: 1500, easing: closure_9 };
              result = set(obj.withTiming(40, obj1));
              closure_13.current = setTimeout(() => {
                /* body not rendered: F145500 */
              }, 2500);
              return;
            }
          }
        }
        class V {
          constructor() {
            tmp = closure_17;
            if (tmp) {
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
        const items1 = [tmp30, tmp29, tmp27];
        cResult[4] = tmp30;
        cResult[5] = tmp27;
        cResult[6] = tmp29;
        cResult[7] = V;
        cResult[8] = items1;
      }
      tmp24 = closure_10;
    }
  : (arg0, arg1) => {
      let closure_0;
      let noteInteraction;
      let ref4;
      let ref5;
      let tmp = arg0;
      _require = arg1;
      const tmp2 = noteInteraction();
      const panelX = tmp2.panelX;
      const gestureState = tmp2.gestureState;
      const lastInteractionAt = tmp2.lastInteractionAt;
      const isPanelTouchActive = tmp2.isPanelTouchActive;
      noteInteraction = tmp2.noteInteraction;
      let obj = require("Link");
      const isFocused = obj.useIsFocused();
      let obj2 = require("useDrawerState");
      const drawerOpen = obj2.useDrawerOpen(arg0);
      const items = [isPanelTouchActive];
      const obj3 = require("get initialized");
      const stateFromStores = obj3.useStateFromStores(items, () => isPanelTouchActive.useReducedMotion);
      const obj4 = require("useGuildsRouteGuildId");
      const first = gestureState(obj4.useGuildsRouteGuildAndChannelId(), 1)[0];
      const obj5 = require("DismissibleContentUnsafeUtils");
      const tmp10 = !obj5.useIsDismissibleContentDismissed_UNSAFE(
        require("dismissible_content").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX,
      );
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
      let closure_7 = tmp;
      ref = lastInteractionAt.useRef(false);
      const tmp8Result = gestureState(lastInteractionAt.useState(false), 2);
      const first1 = tmp8Result[0];
      closure_10 = tmp15;
      const tmp16 = first1 && !tmp;
      if (tmp16) {
        tmp8Result[1](false);
      }
      require("useSelectedDismissibleContent");
      if (first1) {
        let tmp20;
        if (tmp) {
          tmp20 = current;
        }
        const tmp8Result2 = gestureState(tmp19(tmp20, undefined, true), 2);
        current = tmp23;
        const first2 = tmp8Result2[0];
        ref2 = obj6.useRef(null);
        const ref3 = obj6.useRef(null);
        __initData = obj6.useRef(false);
        __initData2 = obj6.useRef(null);
        const items1 = [arg1];
        const callback = obj6.useCallback(() => {
          if (null != ref2.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref2.current);
            ref2.current = null;
          }
          ref4.current = true;
          set = closure_0.set;
          let obj = timing;
          const obj2 = { duration: 1500, easing };
          let result = set(obj.withTiming(40, obj2));
          ref3.current = setTimeout(() => {
            ref3.current = null;
            ref4.current = false;
            set = closure_1_0.set;
            const obj = closure_0(panelX[17]);
            const result = set(obj.withSpring(0, closure_0(panelX[18]).HOME_DRAWER_FLING_PHYSICS));
            current = ref.current;
            if (current != null) {
              current(constants.AUTO_DISMISS);
            }
            closure_1_10(false);
          }, 2500);
        }, items1);
        const tmp26 = first2 === require("dismissible_content").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
        let closure_17 = tmp26;
        const items2 = [tmp26, callback, tmp8Result2[1]];
        const effect = obj6.useEffect(() => {
          const tmp = closure_17 && !ref4.current;
          if (tmp) {
            ref5.current = current;
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
            set = closure_0.set;
            const obj = spring;
            const result = set(obj.withSpring(0, useHomeDrawerGesture.HOME_DRAWER_FLING_PHYSICS));
          }
        }, items3);
        const items4 = [tmp, first1, noteInteraction, lastInteractionAt, isPanelTouchActive];
        const effect1 = obj6.useEffect(() => {
          if (closure_7) {
            if (!first1) {
              if (!ref.current) {
                noteInteraction();
                let _setTimeout = setTimeout;
                function checkIdle() {
                  ref2.current = null;
                  let diff = c8 - (Date.now() - lastInteractionAt.current);
                  if (!isPanelTouchActive.get()) {
                    if (0 >= diff) {
                      closure_10(true);
                    }
                  }
                  const _setTimeout = setTimeout;
                  if (0 >= diff) {
                    diff = c8;
                  }
                  ref2.current = _setTimeout(checkIdle, diff);
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
            ref.current = true;
            callback1();
          }
        }, items5);
        const items6 = [tmp, callback1];
        const effect3 = obj6.useEffect(() => {
          current = !closure_7 && ref4.current;
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
        const tmp3Result2 = require("ReanimatedRexport");
        class V {
          constructor() {
            const active = gestureState.get().active && panelX.get() > 8;
            return active;
          }
        }
        const obj7 = { gestureState, panelX, PEEK_HINT_DRAWER_DRAG_THRESHOLD: 8 };
        V.__closure = obj7;
        V.__workletHash = 13898630050852;
        V.__initData = __initData;
        class Q {
          constructor(arg0, arg1) {
            const tmp = closure_17 && null != arg1 && arg0 && !arg1;
            if (tmp) {
              const obj = ReanimatedRexport;
              obj.runOnJS(callback2)();
            }
          }
        }
        const useAnimatedReaction = tmp3Result2.useAnimatedReaction;
        Q.__closure = {
          isPeekGranted: tmp26,
          runOnJS: require("ReanimatedRexport").runOnJS,
          handleDrawerDragged: callback2,
        };
        Q.__workletHash = 10590232595782;
        Q.__initData = __initData2;
        const obj8 = {
          isPeekGranted: tmp26,
          runOnJS: require("ReanimatedRexport").runOnJS,
          handleDrawerDragged: callback2,
        };
        const animatedReaction = useAnimatedReaction(V, Q);
      }
    };
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export const useHomeDrawerPeekHint = tmp2;
