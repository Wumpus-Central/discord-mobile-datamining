import handleConnectionOpen from "handleConnectionOpen";
import getSystemLocale from "getSystemLocale";
import importAllResult from "useYouBarHorizontalMargin";
import get_ActivityIndicator from "sum";
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import closure_9 from "handleConnectionOpen";
import filterPlayingActivities from "filterPlayingActivities";
import mergeGuildAvatar from "mergeGuildAvatar";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import { ME } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "module_4116";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_20;
let closure_21;
let closure_6;
let error;
let map1;
const require = arg1;
let c5 = importAllResult;
({ View: closure_6, Pressable: error } = get_ActivityIndicator);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_PADDING: map1, YOU_BAR_SPRING_CONFIG: closure_14, YOU_BAR_AVATAR_LARGE_SIZE: closure_15, YOU_BAR_AVATAR_SIZE: closure_16, YOU_BAR_BUTTON_HIT_SLOP: closure_17 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let obj = { youRow: null, youRowRight: null, youPressable: null };
obj = { position: "absolute", left: 0, right: 0, bottom: 0, flexDirection: "row", alignItems: "center", backgroundColor: "transparent" };
const merged = Object.assign(require("Themes").shadows.SHADOW_HIGH);
obj[0] = obj;
obj[1] = { flexDirection: "row", gap: 8 };
createCacheKey = { flex: 1, marginRight: require("Themes").space.PX_12, borderRadius: require("Themes").modules.mobile.YOU_BAR_BORDER_RADIUS };
obj[2] = createCacheKey;
let closure_22 = createCacheKey.createStyles(obj);
let closure_23 = { code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_24 = { code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}" };
let closure_25 = { code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}" };
let closure_26 = { code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}" };
let closure_27 = importAllResult.memo(() => {
  let tmp = callback3();
  let obj = isMobileQuestDockRenderedBase(14203);
  const mobileQuestDock = obj.useMobileQuestDock();
  let obj1 = isMobileQuestDockRenderedBase(14203);
  let obj2 = isMobileQuestDockRenderedBase(14290);
  isMobileQuestDockRenderedBase = obj1.useIsMobileQuestDockRenderedBase(obj2.getDeliveredQuest(mobileQuestDock));
  let obj3 = isMobileQuestDockRenderedBase(11026);
  const drawerWidth = obj3.useDrawerWidth();
  let obj4 = isMobileQuestDockRenderedBase(14209);
  const youBarHorizontalMargin = obj4.useYouBarHorizontalMargin();
  let result = 2 * youBarHorizontalMargin;
  const tmp10 = youBarHorizontalMargin(4109)().isChatBesideChannelList ? drawerWidth - result : youBarHorizontalMargin(1474)().width - result;
  const dependencyMap = tmp10;
  let tmp4Result = tmp4(14209);
  const youBarBottomMargin = tmp4Result.useYouBarBottomMargin();
  tmp4Result = tmp4(14213);
  const connectionBannerHeight = tmp4Result.useConnectionBannerHeight();
  let items = [tmp10, youBarHorizontalMargin];
  const memo = sharedValue.useMemo(() => ({ marginHorizontal: youBarHorizontalMargin, height: tag, padding: closure_13, width: closure_2 }), items);
  sharedValue = isMobileQuestDockRenderedBase(4116).useSharedValue(false);
  const tmp4Result1 = isMobileQuestDockRenderedBase(4116);
  let fn = function r() {
    let obj = { marginBottom: null, transform: null };
    obj[0] = isMobileQuestDockRenderedBase(tmp10[22]).withSpring(youBarBottomMargin + connectionBannerHeight, closure_14);
    const obj2 = isMobileQuestDockRenderedBase(tmp10[22]);
    const tmp = closure_14;
    let num = 1;
    if (sharedValue.get()) {
      num = 1;
      if (!isMobileQuestDockRenderedBase) {
        num = 0.98;
      }
    }
    obj = { scale: isMobileQuestDockRenderedBase(tmp10[22]).withSpring(num, tmp) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { withSpring: tmp4(4665).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, YOU_BAR_SPRING_CONFIG: closure_14, isPressedValue: sharedValue, isQuestRendered: isMobileQuestDockRenderedBase };
  fn.__closure = obj;
  fn.__workletHash = 7314807713815;
  fn.__initData = closure_23;
  const animatedStyle = isMobileQuestDockRenderedBase(4116).useAnimatedStyle(fn);
  const tmp4Result2 = isMobileQuestDockRenderedBase(4116);
  const iCYMIEnabled = isMobileQuestDockRenderedBase(8497).useICYMIEnabled("TabsNavigator");
  const tmp4Result3 = isMobileQuestDockRenderedBase(8497);
  const youBarCoachmark = isMobileQuestDockRenderedBase(15329).useYouBarCoachmark({ isQuestRendered: isMobileQuestDockRenderedBase });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  let isSyncedModeThemesEnabled = sharedValue.useRef(markAsDismissed);
  let closure_9 = sharedValue.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = sharedValue.useEffect(() => {
    closure_9.current = visibleContent;
    isSyncedModeThemesEnabled.current = markAsDismissed;
  }, items1);
  const tmp4Result4 = isMobileQuestDockRenderedBase(15329);
  const items2 = [mergeGuildAvatar];
  const stateFromStores = isMobileQuestDockRenderedBase(589).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp4Result5 = isMobileQuestDockRenderedBase(589);
  const nameplate = isMobileQuestDockRenderedBase(8679).useNameplate({ user: stateFromStores });
  const tmp4Result6 = isMobileQuestDockRenderedBase(8679);
  let filterPlayingActivities = youBarHorizontalMargin(4094).useName(stateFromStores);
  const tmp2Result = youBarHorizontalMargin(4094);
  const customStatusActivity = isMobileQuestDockRenderedBase(8415).useCustomStatusActivity();
  const tmp4Result7 = isMobileQuestDockRenderedBase(8415);
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  mergeGuildAvatar = isMobileQuestDockRenderedBase(9248).useGameMentionsAsPlainText(state);
  const tmp4Result8 = isMobileQuestDockRenderedBase(9248);
  let tag;
  if (tmp4Result9.useIsYouBarGuildTagEnabled("YouBar")) {
    let primaryGuild;
    if (stateFromStores != null) {
      primaryGuild = stateFromStores.primaryGuild;
    }
    tag = tmp4(8064).getUserPrimaryGuild(primaryGuild).tag;
    const tmp4Result10 = tmp4(8064);
  }
  tmp4Result9 = isMobileQuestDockRenderedBase(15331);
  const items3 = [filterPlayingActivities];
  const stateFromStores1 = isMobileQuestDockRenderedBase(589).useStateFromStores(items3, () => {
    if (null != filterPlayingActivities) {
      let humanizeStatusResult = mergeGuildAvatar;
      if (mergeGuildAvatar == null) {
        humanizeStatusResult = isMobileQuestDockRenderedBase(tmp10[27]).humanizeStatus(tmp3);
        const obj = isMobileQuestDockRenderedBase(tmp10[27]);
      }
      const items = [tmp, tag, humanizeStatusResult];
      const found = items.filter((arg0) => null != arg0);
      return found.join(", ");
    }
  });
  const memo1 = obj8.useMemo(() => {
    const obj = { name: "open-settings", label: null };
    const intl = isMobileQuestDockRenderedBase(tmp10[32]).intl;
    obj[1] = intl.string(isMobileQuestDockRenderedBase(tmp10[32]).t["3/IlR0"]);
    const items = [obj];
    return items;
  }, []);
  const callback = obj8.useCallback((nativeEvent) => {
    if ("open-settings" === nativeEvent.nativeEvent.actionName) {
      isMobileQuestDockRenderedBase(tmp10[33]).openUserSettings();
      const obj = isMobileQuestDockRenderedBase(tmp10[33]);
    }
  }, []);
  let closure_13 = obj8.useRef(null);
  const tmp29 = connectionBannerHeight(sharedValue.useState(0), 2);
  closure_14 = tmp29[1];
  let closure_15 = obj8.useRef(true);
  const effect1 = obj8.useEffect(() => {
    const rootNavigationRef = isMobileQuestDockRenderedBase(tmp10[34]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      function checkYouScreenPresence() {
        if (null != rootNavigationRef) {
          const state = obj.getState();
          let tmp3 = null != state;
          if (tmp3) {
            let name;
            if (state.routes[state.index] != null) {
              name = tmp.name;
            }
            tmp3 = "main" === name;
          }
          const current = outer1_15.current;
          let tmp5 = !current;
          if (!current) {
            tmp5 = tmp3;
          }
          if (tmp5) {
            outer1_14((arg0) => arg0 + 1);
          }
          outer1_15.current = tmp3;
          let someResult;
          if (state != null) {
            const routes = state.routes;
            if (routes != null) {
              someResult = routes.some((name) => "you" === name.name);
            }
          }
          if (!someResult) {
            if (null != outer1_13.current) {
              if ("press" === tmp9.current) {
                const result = isMobileQuestDockRenderedBase(4224).triggerHapticFeedback(isMobileQuestDockRenderedBase(4224).HapticFeedbackTypes.SOFT);
                obj.navigate("you");
                const obj3 = isMobileQuestDockRenderedBase(4224);
              } else {
                isMobileQuestDockRenderedBase(1351).assertNever(tmp9.current);
                const obj2 = isMobileQuestDockRenderedBase(1351);
              }
              tmp9.current = null;
            }
          }
          const tmp4 = outer1_15;
        }
      }
      let result = checkYouScreenPresence();
      let closure_1 = rootNavigationRef.addListener("state", checkYouScreenPresence);
      return () => {
        callback();
      };
    }
    const obj = isMobileQuestDockRenderedBase(tmp10[34]);
  }, []);
  const items4 = [sharedValue];
  const memo2 = obj8.useMemo(() => isMobileQuestDockRenderedBase(tmp10[37]).debounce(() => {
    const rootNavigationRef = outer1_0(outer1_2[34]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      const state = rootNavigationRef.getState();
      let someResult;
      if (state != null) {
        const routes = state.routes;
        if (routes != null) {
          someResult = routes.some((name) => "you" === name.name);
        }
      }
      if (someResult) {
        closure_13.current = "press";
      }
    }
    if (null != rootNavigationRef) {
      const result = tmp(tmp2[35]).triggerHapticFeedback(tmp(tmp2[35]).HapticFeedbackTypes.SOFT);
      rootNavigationRef.navigate("you");
      const result1 = closure_5.set(false);
      const tmpResult = tmp(tmp2[35]);
    }
  }, 500, { leading: true, trailing: false }), items4);
  const items5 = [sharedValue];
  const items6 = [sharedValue];
  const callback1 = obj8.useCallback(youBarBottomMargin(function*() {
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
        return { value: "HermesInternal", done: null };
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
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            paths = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(paths[39])(paths[38], paths.paths);
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
          const result = outer1_0(paths[35]).triggerHapticFeedback(outer1_0(paths[35]).HapticFeedbackTypes.SOFT);
          const result1 = closure_0.showYouAccountActionSheet();
          const result2 = closure_5.set(false);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c3 = tmp;
        throw tmp10;
      }
    }
  }), items5);
  const items7 = [sharedValue];
  const callback2 = obj8.useCallback(() => {
    const result = sharedValue.set(true);
  }, items6);
  callback3 = obj8.useCallback(() => {
    const result = sharedValue.set(false);
  }, items7);
  const callback4 = obj8.useCallback(() => {
    const coerceGuildsRouteResult = isMobileQuestDockRenderedBase(tmp10[40]).coerceGuildsRoute(youBarHorizontalMargin(tmp10[41])());
    if (null != coerceGuildsRouteResult) {
      let tmpResult = tmp(tmp2[35]);
      const result = tmpResult.triggerHapticFeedback(tmp(tmp2[35]).HapticFeedbackTypes.SOFT);
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      if (guildId === translateX) {
        const lastSelectedGuildId = ref2.getLastSelectedGuildId();
        if (null != lastSelectedGuildId) {
          tmpResult = tmp(tmp2[42]);
          tmpResult.transitionToGuild(lastSelectedGuildId);
        }
      } else {
        if (ref2.current === tmp(tmp2[43]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK) {
          ref.current(constants.TAKE_ACTION);
        }
        tmp(tmp2[42]).transitionToGuild(tmp5);
        const tmpResult1 = tmp(tmp2[42]);
      }
    }
  }, []);
  const context = obj8.useContext(tmp2(15008));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const tmp4Result11 = isMobileQuestDockRenderedBase(589);
  let closure_19 = isMobileQuestDockRenderedBase(4116).useSharedValue(0);
  const items8 = [callback4, gesture, tmp29[0]];
  const memo3 = obj8.useMemo(() => {
    const Gesture = isMobileQuestDockRenderedBase(tmp10[45]).Gesture;
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
    fn.__initData = outer1_26;
    const failOffsetYResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]);
    const fn2 = function s(arg0, fail) {
      const value = store2.get();
      if (Math.abs(value - store.get()) >= 10) {
        fail.fail();
      }
    };
    fn2.__closure = { startingTranslateX: closure_19, translateX };
    fn2.__workletHash = 11728992116193;
    fn2.__initData = outer1_25;
    const onBeginResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(fn);
    const fn3 = function t(arg0, arg1) {
      if (arg1) {
        outer1_0(outer1_2[21]).runOnJS(closure_16)();
        const obj = outer1_0(outer1_2[21]);
      }
    };
    obj = { runOnJS: isMobileQuestDockRenderedBase(tmp10[21]).runOnJS, handleNavBetweenGuildsAndDMs: callback4 };
    fn3.__closure = obj;
    fn3.__workletHash = 2931771790779;
    fn3.__initData = outer1_24;
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
  const items10 = [callback(youBarHorizontalMargin(15343), { hasNameplate: null != nameplate, isLargeAvatar: !isMobileQuestDockRenderedBase, barWidth: tmp10, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp40 }), , , ];
  let tmp43Result = null != nameplate;
  if (tmp43Result) {
    obj1 = { nameplate: null, barWidth: null, isQuestRendered: null, avatarSize: null };
    obj1[0] = nameplate;
    obj1[1] = tmp10;
    obj1[2] = isMobileQuestDockRenderedBase;
    obj1[3] = tmp40;
    tmp43Result = tmp43(tmp2(15344), obj1);
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
  obj3[12] = callback(youBarHorizontalMargin(15345), { isQuestRendered: isMobileQuestDockRenderedBase, onAvatarPress: memo2 });
  obj2[1] = callback(markAsDismissed, obj3);
  items10[2] = callback(isMobileQuestDockRenderedBase(5339).GestureDetector, obj2);
  obj4 = { style: tmp.youRowRight, children: null };
  tmp43Result = null;
  if (iCYMIEnabled) {
    const obj5 = { hasNameplate: null };
    obj5[0] = tmp21;
    tmp43Result = tmp43(tmp2(15349), obj5);
  }
  const items11 = [tmp43Result, callback(youBarHorizontalMargin(15352), { hasNameplate: null != nameplate })];
  obj4[1] = items11;
  items10[3] = closure_21(visibleContent, obj4);
  obj[3] = items10;
  return closure_21(youBarHorizontalMargin(4116).View, obj);
});
const memoResult = importAllResult.memo(function YouBarThemed() {
  let obj = require(589) /* initialize */;
  const items = [isSyncedModeThemesEnabled];
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  obj = { gradient: stateFromStores, children: null };
  const items1 = [callback(importDefault(15354), {}), callback(closure_27, {}), callback(importDefault(15355), {})];
  obj[1] = items1;
  return callback2(require(3967) /* ManaContext */.ThemeContextProvider, obj);
});
let result = require("noop").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;