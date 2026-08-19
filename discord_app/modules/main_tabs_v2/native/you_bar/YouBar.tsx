// === Module 15625: ? ===

// Module 15625
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import ManaContext from "ManaContext" /* 4104 */;
import _modDef15651 from "module_15651" /* 15651 */;
import ConnectionBannerIconDefault from "ConnectionBannerIcon" /* 15652 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled" /* 4195 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import filterPlayingActivities from "filterPlayingActivities" /* 7250 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 14450 */;
import { ME } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
let c5 = importAllResult;
({ View: closure_6, Pressable: error } = get_ActivityIndicator);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_PADDING: map1, YOU_BAR_SPRING_CONFIG: closure_14, YOU_BAR_AVATAR_LARGE_SIZE: closure_15, YOU_BAR_AVATAR_SIZE: closure_16, YOU_BAR_BUTTON_HIT_SLOP: closure_17 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let obj = { position: "absolute", left: 0, right: 0, bottom: 0, flexDirection: "row", alignItems: "center", backgroundColor: "transparent" };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
obj[0] = obj;
obj[1] = { flexDirection: "row", gap: 8 };
const createCacheKey = { flex: 1, marginRight: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
obj[2] = createCacheKey;
let closure_22 = createCacheKey.createStyles(obj);
let closure_23 = { code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_24 = { code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}" };
let closure_25 = { code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}" };
let closure_26 = { code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}" };
let closure_27 = importAllResult.memo(() => {
  const tmp = callback3();
  let obj = isMobileQuestDockRenderedBase(14443);
  const mobileQuestDock = obj.useMobileQuestDock();
  obj1 = isMobileQuestDockRenderedBase(14443);
  isMobileQuestDockRenderedBase = obj1.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = isMobileQuestDockRenderedBase(10719);
  const drawerWidth = obj2.useDrawerWidth();
  let obj3 = isMobileQuestDockRenderedBase(14449);
  const youBarHorizontalMargin = obj3.useYouBarHorizontalMargin();
  let result = 2 * youBarHorizontalMargin;
  const tmp10 = youBarHorizontalMargin(4232)().isChatBesideChannelList ? drawerWidth - result : youBarHorizontalMargin(1494)().width - result;
  dependencyMap = tmp10;
  let tmp4Result = tmp4(14449);
  const youBarBottomMargin = tmp4Result.useYouBarBottomMargin();
  tmp4Result = tmp4(14453);
  const connectionBannerHeight = tmp4Result.useConnectionBannerHeight();
  let items = [tmp10, youBarHorizontalMargin];
  const memo = sharedValue.useMemo(() => ({ marginHorizontal: youBarHorizontalMargin, height: tag, padding: closure_13, width: closure_2 }), items);
  sharedValue = isMobileQuestDockRenderedBase(4115).useSharedValue(false);
  const tmp4Result1 = isMobileQuestDockRenderedBase(4115);
  let fn = function r() {
    let obj = { marginBottom: isMobileQuestDockRenderedBase(4744).withSpring(youBarBottomMargin + connectionBannerHeight, closure_14), transform: null };
    const obj2 = isMobileQuestDockRenderedBase(4744);
    let num = 1;
    if (sharedValue.get()) {
      num = 1;
      if (!isMobileQuestDockRenderedBase) {
        num = 0.98;
      }
    }
    obj = { scale: isMobileQuestDockRenderedBase(4744).withSpring(num, closure_14) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { withSpring: tmp4(4744).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, YOU_BAR_SPRING_CONFIG: closure_14, isPressedValue: sharedValue, isQuestRendered: isMobileQuestDockRenderedBase };
  fn.__closure = obj;
  fn.__workletHash = 7314807713815;
  fn.__initData = closure_23;
  const animatedStyle = isMobileQuestDockRenderedBase(4115).useAnimatedStyle(fn);
  const tmp4Result2 = isMobileQuestDockRenderedBase(4115);
  const iCYMIEnabled = isMobileQuestDockRenderedBase(9058).useICYMIEnabled("TabsNavigator");
  const tmp4Result3 = isMobileQuestDockRenderedBase(9058);
  const youBarCoachmark = isMobileQuestDockRenderedBase(15626).useYouBarCoachmark({ isQuestRendered: isMobileQuestDockRenderedBase });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  closure_8 = sharedValue.useRef(markAsDismissed);
  closure_9 = sharedValue.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = sharedValue.useEffect(() => {
    closure_9.current = visibleContent;
    closure_8.current = markAsDismissed;
  }, items1);
  const tmp4Result4 = isMobileQuestDockRenderedBase(15626);
  const items2 = [closure_11];
  const stateFromStores = isMobileQuestDockRenderedBase(589).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp4Result5 = isMobileQuestDockRenderedBase(589);
  const nameplate = isMobileQuestDockRenderedBase(8961).useNameplate({ user: stateFromStores });
  const tmp4Result6 = isMobileQuestDockRenderedBase(8961);
  closure_10 = youBarHorizontalMargin(4219).useName(stateFromStores);
  const tmp2Result = youBarHorizontalMargin(4219);
  const customStatusActivity = isMobileQuestDockRenderedBase(7256).useCustomStatusActivity();
  const tmp4Result7 = isMobileQuestDockRenderedBase(7256);
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  closure_11 = isMobileQuestDockRenderedBase(9287).useGameMentionsAsPlainText(state);
  const tmp4Result8 = isMobileQuestDockRenderedBase(9287);
  let tag;
  if (tmp4Result9.useIsYouBarGuildTagEnabled("YouBar")) {
    let primaryGuild;
    if (stateFromStores != null) {
      primaryGuild = stateFromStores.primaryGuild;
    }
    tag = tmp4(8375).getUserPrimaryGuild(primaryGuild).tag;
    const tmp4Result10 = tmp4(8375);
  }
  tmp4Result9 = isMobileQuestDockRenderedBase(15628);
  const items3 = [closure_10];
  const stateFromStores1 = isMobileQuestDockRenderedBase(589).useStateFromStores(items3, () => {
    if (null != closure_10) {
      let humanizeStatusResult = closure_11;
      if (closure_11 == null) {
        humanizeStatusResult = isMobileQuestDockRenderedBase(4219).humanizeStatus(tmp3);
        const obj = isMobileQuestDockRenderedBase(4219);
      }
      const items = [tmp, tag, humanizeStatusResult];
      const found = items.filter((item, index) => null != item);
      return found.join(", ");
    }
  });
  const memo1 = obj7.useMemo(() => {
    const obj = { name: "open-settings", label: null };
    const intl = isMobileQuestDockRenderedBase(1236).intl;
    obj[1] = intl.string(isMobileQuestDockRenderedBase(1236).t["3/IlR0"]);
    const items = [obj];
    return items;
  }, []);
  const callback = obj7.useCallback((nativeEvent) => {
    if ("open-settings" === nativeEvent.nativeEvent.actionName) {
      isMobileQuestDockRenderedBase(7360).openUserSettings();
      const obj = isMobileQuestDockRenderedBase(7360);
    }
  }, []);
  closure_13 = obj7.useRef(null);
  const tmp29 = connectionBannerHeight(sharedValue.useState(0), 2);
  closure_14 = tmp29[1];
  closure_15 = obj7.useRef(true);
  const effect1 = obj7.useEffect(() => {
    const rootNavigationRef = isMobileQuestDockRenderedBase(4230).getRootNavigationRef();
    if (null != rootNavigationRef) {
      function checkYouScreenPresence() {
        if (null != rootNavigationRef) {
          const state = rootNavigationRef.getState();
          let tmp3 = null != state;
          if (tmp3) {
            let name;
            if (state.routes[state.index] != null) {
              name = tmp.name;
            }
            tmp3 = "main" === name;
          }
          const current = closure_1_15.current;
          let tmp5 = !current;
          if (!current) {
            tmp5 = tmp3;
          }
          if (tmp5) {
            closure_1_14((arg0) => arg0 + 1);
          }
          closure_1_15.current = tmp3;
          let someResult;
          if (state != null) {
            const routes = state.routes;
            if (routes != null) {
              someResult = routes.some((item, index) => "you" === item.name);
            }
          }
          if (!someResult) {
            if (null != closure_1_13.current) {
              if ("press" === closure_1_13.current) {
                const result = isMobileQuestDockRenderedBase(4343).triggerHapticFeedback(isMobileQuestDockRenderedBase(4343).HapticFeedbackTypes.SOFT);
                rootNavigationRef.navigate("you");
                const obj3 = isMobileQuestDockRenderedBase(4343);
              } else {
                isMobileQuestDockRenderedBase(1370).assertNever(closure_1_13.current);
                const obj2 = isMobileQuestDockRenderedBase(1370);
              }
              closure_1_13.current = null;
            }
          }
        }
      }
      let result = checkYouScreenPresence();
      closure_1 = rootNavigationRef.addListener("state", checkYouScreenPresence);
      return () => {
        callback();
      };
    }
    const obj = isMobileQuestDockRenderedBase(4230);
  }, []);
  const items4 = [sharedValue];
  const memo2 = obj7.useMemo(() => isMobileQuestDockRenderedBase(12).debounce(() => {
    const rootNavigationRef = isMobileQuestDockRenderedBase(closure_1_2[33]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      const state = rootNavigationRef.getState();
      let someResult;
      if (state != null) {
        const routes = state.routes;
        if (routes != null) {
          someResult = routes.some((item, index) => "you" === item.name);
        }
      }
      if (someResult) {
        closure_13.current = "press";
      }
    }
    if (null != rootNavigationRef) {
      const result = isMobileQuestDockRenderedBase(closure_1_2[34]).triggerHapticFeedback(isMobileQuestDockRenderedBase(closure_1_2[34]).HapticFeedbackTypes.SOFT);
      rootNavigationRef.navigate("you");
      const result1 = closure_5.set(false);
      const tmpResult = isMobileQuestDockRenderedBase(closure_1_2[34]);
    }
    const obj = isMobileQuestDockRenderedBase(closure_1_2[33]);
  }, 500, { leading: true, trailing: false }), items4);
  const items5 = [sharedValue];
  const items6 = [sharedValue];
  const callback1 = obj7.useCallback(youBarBottomMargin(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === paths) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_0 = undefined;
            paths = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = isMobileQuestDockRenderedBase(paths[38])(paths[37], paths.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          const result = isMobileQuestDockRenderedBase(paths[34]).triggerHapticFeedback(isMobileQuestDockRenderedBase(paths[34]).HapticFeedbackTypes.SOFT);
          const result1 = closure_0.showYouAccountActionSheet();
          const result2 = closure_5.set(false);
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp10) {
        c3 = tmp;
        throw tmp10;
      }
    }
  }), items5);
  const items7 = [sharedValue];
  const callback2 = obj7.useCallback(() => {
    const result = sharedValue.set(true);
  }, items6);
  callback3 = obj7.useCallback(() => {
    const result = sharedValue.set(false);
  }, items7);
  const callback4 = obj7.useCallback(() => {
    const coerceGuildsRouteResult = isMobileQuestDockRenderedBase(4229).coerceGuildsRoute(youBarHorizontalMargin(9569)());
    if (null != coerceGuildsRouteResult) {
      let tmpResult = isMobileQuestDockRenderedBase(4343);
      const result = tmpResult.triggerHapticFeedback(isMobileQuestDockRenderedBase(4343).HapticFeedbackTypes.SOFT);
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      if (guildId === translateX) {
        const lastSelectedGuildId = ref2.getLastSelectedGuildId();
        if (null != lastSelectedGuildId) {
          tmpResult = isMobileQuestDockRenderedBase(7302);
          tmpResult.transitionToGuild(lastSelectedGuildId);
        }
      } else {
        if (ref2.current === isMobileQuestDockRenderedBase(1377).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK) {
          ref.current(constants.TAKE_ACTION);
        }
        isMobileQuestDockRenderedBase(7302).transitionToGuild(tmp5);
        const tmpResult1 = isMobileQuestDockRenderedBase(7302);
      }
    }
    const obj = isMobileQuestDockRenderedBase(4229);
  }, []);
  const context = obj7.useContext(tmp2(15276));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const tmp4Result11 = isMobileQuestDockRenderedBase(589);
  closure_19 = isMobileQuestDockRenderedBase(4115).useSharedValue(0);
  const items8 = [callback4, gesture, tmp29[0]];
  const memo3 = obj7.useMemo(() => {
    const Gesture = isMobileQuestDockRenderedBase(6377).Gesture;
    let result = Gesture.Pan().simultaneousWithExternalGesture(gesture);
    const PanResult = Gesture.Pan();
    const activeOffsetXResult = result.activeOffsetX(50);
    const failOffsetXResult = result.activeOffsetX(50).failOffsetX(-10);
    const fn = function n() {
      const result = store2.set(store.get());
    };
    let obj = { startingTranslateX: closure_19, translateX };
    fn.__closure = obj;
    fn.__workletHash = 13002049298724;
    fn.__initData = closure_1_26;
    const failOffsetYResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]);
    const fn2 = function s(arg0, fail) {
      const value = store2.get();
      if (Math.abs(value - store.get()) >= 10) {
        fail.fail();
      }
    };
    fn2.__closure = { startingTranslateX: closure_19, translateX };
    fn2.__workletHash = 11728992116193;
    fn2.__initData = closure_1_25;
    const onBeginResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(fn);
    const fn3 = function t(arg0, arg1) {
      if (arg1) {
        isMobileQuestDockRenderedBase(closure_1_2[20]).runOnJS(closure_16)();
        const obj = isMobileQuestDockRenderedBase(closure_1_2[20]);
      }
    };
    obj = { runOnJS: isMobileQuestDockRenderedBase(4115).runOnJS, handleNavBetweenGuildsAndDMs: callback4 };
    fn3.__closure = obj;
    fn3.__workletHash = 2931771790779;
    fn3.__initData = closure_1_24;
    return result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(fn).onTouchesMove(fn2).onEnd(fn3);
  }, items8);
  const AVATAR_SIZE_MAP = tmp4(1297).AVATAR_SIZE_MAP;
  if (isMobileQuestDockRenderedBase) {
    let tmp40 = AVATAR_SIZE_MAP[callback4];
  } else {
    tmp40 = AVATAR_SIZE_MAP[closure_15];
  }
  obj = { ref: youBarCoachmark.animatedRef, style: items9, shouldRasterizeIOS: true, children: null };
  items9 = [tmp.youRow, memo, animatedStyle];
  const items10 = [callback(youBarHorizontalMargin(15640), { hasNameplate: null != nameplate, isLargeAvatar: !isMobileQuestDockRenderedBase, barWidth: tmp10, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp40 }), , , ];
  let tmp43Result = tmp21;
  if (null != nameplate) {
    obj1 = { nameplate: null, barWidth: null, isQuestRendered: null, avatarSize: null };
    obj1[0] = nameplate;
    obj1[1] = tmp10;
    obj1[2] = isMobileQuestDockRenderedBase;
    obj1[3] = tmp40;
    tmp43Result = tmp43(tmp2(15641), obj1);
  }
  items10[1] = tmp43Result;
  obj2 = { gesture: memo3, children: null };
  obj3 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: stateFromStores1, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onPressIn: null, onPressOut: null, onPress: null, onLongPress: null, hitSlop: null, children: null };
  let intl = tmp4(1236).intl;
  obj3[4] = intl.string(isMobileQuestDockRenderedBase(1236).t.cSgdvE);
  obj3[5] = memo1;
  obj3[6] = callback;
  obj3[7] = callback2;
  obj3[8] = callback3;
  obj3[9] = memo2;
  obj3[10] = callback1;
  obj3[11] = gesture;
  obj3[12] = callback(youBarHorizontalMargin(15642), { isQuestRendered: isMobileQuestDockRenderedBase, onAvatarPress: memo2 });
  obj2[1] = callback(markAsDismissed, obj3);
  items10[2] = callback(isMobileQuestDockRenderedBase(6377).GestureDetector, obj2);
  const obj4 = { style: tmp.youRowRight, children: null };
  tmp43Result = null;
  if (iCYMIEnabled) {
    const obj5 = { hasNameplate: null };
    obj5[0] = tmp21;
    tmp43Result = tmp43(tmp2(15646), obj5);
  }
  const items11 = [tmp43Result, callback(youBarHorizontalMargin(15649), { hasNameplate: null != nameplate })];
  obj4[1] = items11;
  items10[3] = callback(visibleContent, obj4);
  obj[3] = items10;
  return callback(youBarHorizontalMargin(4115).View, obj);
});
const memoResult = importAllResult.memo(function YouBarThemed() {
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  obj = { gradient: stateFromStores, children: null };
  const items1 = [callback(_modDef15651, {}), callback(closure_27, {}), callback(ConnectionBannerIconDefault, {})];
  obj[1] = items1;
  return callback2(ManaContext.ThemeContextProvider, obj);
});
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;