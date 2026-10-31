// === Module 18422: YouBar ===

// Module 18422 (YouBar)
import _mod12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import native from "native" /* 5080 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import spring from "spring" /* 5637 */;
import transitionToGuild from "transitionToGuild" /* 7522 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11504 */;
import YouBarFloatingShadeDefault from "YouBarFloatingShade" /* 18457 */;
import ConnectionBannerDefault from "ConnectionBanner" /* 18458 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5038 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const YouBarConstants = fn(17062);
({ YOU_BAR_HEIGHT: c10, YOU_BAR_PADDING: closure_11, YOU_BAR_SPRING_CONFIG: closure_12, YOU_BAR_AVATAR_LARGE_SIZE: map1, YOU_BAR_AVATAR_SIZE: closure_14, YOU_BAR_BUTTON_HIT_SLOP: closure_15 } = YouBarConstants);
const ME = fn(1072).ME;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5014);
let obj = { youRow: null, youRowRight: null, youPressable: null };
const rect = { position: "absolute", left: 0, right: 0, bottom: 0, flexDirection: "row", alignItems: "center", backgroundColor: "transparent" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.youRow = rect;
obj.youRowRight = { flexDirection: "row", gap: 8 };
obj.youPressable = { flex: 1, marginRight: nativeDefault.space.PX_12, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
let closure_20 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,marginSpringConfig,isPressedValue,isCondensed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,marginSpringConfig),transform:[{scale:withSpring(isPressedValue.get()&&!isCondensed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_22 = { code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}" };
let closure_23 = { code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}" };
let closure_24 = { code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}" };
let closure_25 = noop.memo(function YouBar() {
  const tmp = closure_20();
  const mobileQuestDock = require("QuestHooks").useMobileQuestDock();
  let obj = require("QuestHooks");
  const isMobileQuestDockRenderedBase = require("QuestHooks").useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = require("QuestHooks");
  const isMobileRTCV2Enabled = require("MobileRTCV2Experiment").useIsMobileRTCV2Enabled("YouBar");
  let str = "quest-bar";
  if (!isMobileQuestDockRenderedBase) {
    let str2 = null;
    if (tmp8) {
      str2 = "voice-panel-dock";
    }
    str = str2;
  }
  _require = tmp9;
  if (isMobileRTCV2Enabled) {
    let DOCK_SPACE_SPRING_CONFIG = tmp2(tmp3[15]).DOCK_SPACE_SPRING_CONFIG;
  } else {
    DOCK_SPACE_SPRING_CONFIG = callback3;
  }
  let obj3 = require("MobileRTCV2Experiment");
  const drawerWidth = require("useDrawerWidth").useDrawerWidth({ whileSliding: "wider" });
  const tmp2Result = require("useDrawerWidth");
  youBarHorizontalMargin = require("useYouBarMargins").useYouBarHorizontalMargin();
  const diff = drawerWidth - 2 * youBarHorizontalMargin;
  asyncGeneratorStep = diff;
  const tmp2Result13 = require("useYouBarMargins");
  const youBarBottomMargin = require("useYouBarMargins").useYouBarBottomMargin();
  const tmp2Result14 = require("useYouBarMargins");
  const connectionBannerHeight = require("useConnectionBannerHeight").useConnectionBannerHeight();
  let items = [diff, youBarHorizontalMargin];
  const memo = youBarBottomMargin.useMemo(() => {
    const size = { marginHorizontal: youBarHorizontalMargin, height, padding, width: diff };
    return size;
  }, items);
  const tmp2Result15 = require("useConnectionBannerHeight");
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  const tmp2Result16 = require("ReanimatedRexport");
  let fn = function s() {
    const obj = { marginBottom: spring.withSpring(youBarBottomMargin + connectionBannerHeight, DOCK_SPACE_SPRING_CONFIG), transform: null };
    let num = 1;
    if (sharedValue.get()) {
      num = 1;
      if (!closure_0) {
        num = 0.98;
      }
    }
    const items = [{ scale: spring.withSpring(num, closure_2_12) }];
    obj.transform = items;
    return obj;
  };
  const tmp2Result17 = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, marginSpringConfig: DOCK_SPACE_SPRING_CONFIG, isPressedValue: sharedValue, isCondensed: null != str, YOU_BAR_SPRING_CONFIG: callback3 };
  fn.__workletHash = 14940642801997;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result17.useAnimatedStyle(fn);
  let obj4 = { withSpring: require("spring").withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, marginSpringConfig: DOCK_SPACE_SPRING_CONFIG, isPressedValue: sharedValue, isCondensed: null != str, YOU_BAR_SPRING_CONFIG: callback3 };
  const iCYMIEnabled = require("ICYMIExperiment").useICYMIEnabled("TabsNavigator");
  const tmp19 = DOCK_SPACE_SPRING_CONFIG(youBarHorizontalMargin[22])("YouBar");
  const tmp2Result18 = require("ICYMIExperiment");
  const youBarCoachmark = require("useYouBarCoachmark").useYouBarCoachmark({ isCondensed: tmp9 });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  const tmp2Result19 = require("useYouBarCoachmark");
  const showTinyBroncoPromoSheet = require("TinyBroncoLazy").useShowTinyBroncoPromoSheet({ visibleContent, markAsDismissed });
  const tmp2Result20 = require("TinyBroncoLazy");
  youBarBottomMargin.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = youBarBottomMargin.useEffect(() => {
    closure_10.current = visibleContent;
    closure_9.current = markAsDismissed;
  }, items1);
  const ref = youBarBottomMargin.useRef(markAsDismissed);
  const items2 = [ref];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => ref.getCurrentUser());
  const tmp2Result21 = require("initialize");
  const nameplate = require("useNameplate").useNameplate({ user: stateFromStores });
  const tmp2Result22 = require("useNameplate");
  const youBarAccessibilityLabel = require("useYouBarAccessibilityLabel").useYouBarAccessibilityLabel(stateFromStores);
  closure_11 = youBarBottomMargin.useRef(null);
  const effect1 = youBarBottomMargin.useEffect(() => {
    const rootNavigationRef = closure_0(youBarHorizontalMargin[28]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      function checkYouScreenPresence() {
        if (null != rootNavigationRef) {
          const state = rootNavigationRef.getState();
          let someResult;
          if (state != null) {
            const routes = state.routes;
            if (routes != null) {
              someResult = routes.some((name) => "you" === name.name);
            }
          }
          if (!someResult) {
            if (null != ref.current) {
              if ("press" === ref.current) {
                const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
                rootNavigationRef.navigate("you");
              } else {
                GlobalUtils.assertNever(ref.current);
              }
              ref.current = null;
            }
          }
        }
      }
      let result = checkYouScreenPresence();
      closure_1 = rootNavigationRef.addListener("state", checkYouScreenPresence);
      return () => {
        closure_1();
      };
    }
    const obj = closure_0(youBarHorizontalMargin[28]);
  }, []);
  const items3 = [sharedValue];
  const memo1 = youBarBottomMargin.useMemo(() => _mod12.debounce(() => {
    const rootNavigationRef = closure_0(youBarHorizontalMargin[28]).getRootNavigationRef();
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
        closure_1_11.current = "press";
      }
    }
    if (null != rootNavigationRef) {
      const result = closure_0(youBarHorizontalMargin[29]).triggerHapticFeedback(closure_0(youBarHorizontalMargin[29]).HapticFeedbackTypes.SOFT);
      rootNavigationRef.navigate("you");
      const result1 = sharedValue.set(false);
      const tmpResult = closure_0(youBarHorizontalMargin[29]);
    }
    const obj = closure_0(youBarHorizontalMargin[28]);
  }, 500, { leading: true, trailing: false }), items3);
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback = youBarBottomMargin.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === paths) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            paths = 1;
            c3 = 1;
            const obj4 = { value: tmp2(paths[33])(paths[32], paths.paths), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          const result = tmp2(paths[29]).triggerHapticFeedback(tmp2(paths[29]).HapticFeedbackTypes.SOFT);
          const result1 = closure_128_0.showYouAccountActionSheet();
          const result2 = closure_129_6.set(false);
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp10) {
        c3 = tmp;
        throw tmp10;
      }
    }
  }), items4);
  const items6 = [sharedValue];
  const callback1 = youBarBottomMargin.useCallback(() => {
    const result = sharedValue.set(true);
  }, items5);
  const callback2 = youBarBottomMargin.useCallback(() => {
    const result = sharedValue.set(false);
  }, items6);
  callback3 = youBarBottomMargin.useCallback(() => {
    const coerceGuildsRouteResult = NavigationRouteUtils.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
    if (null != coerceGuildsRouteResult) {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      if (guildId === ME) {
        const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
        if (null != lastSelectedGuildId) {
          transitionToGuild.transitionToGuild(lastSelectedGuildId);
          const tmpResult3 = transitionToGuild;
        }
      } else {
        if (ref2.current === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK) {
          ref.current(ContentDismissActionType.TAKE_ACTION);
        }
        transitionToGuild.transitionToGuild(tmp5);
        const tmpResult4 = transitionToGuild;
      }
      const tmpResult = HapticUtils;
    }
  }, []);
  const items7 = [callback3];
  const memo2 = youBarBottomMargin.useMemo(() => {
    const obj = { name: "open-settings", label: null };
    const intl = closure_0(youBarHorizontalMargin[38]).intl;
    obj.label = intl.string(closure_0(youBarHorizontalMargin[38]).t["3/IlR0"]);
    const items = [obj, ];
    const obj2 = { name: "open-dms", label: null };
    const intl2 = closure_0(youBarHorizontalMargin[38]).intl;
    obj2.label = intl2.string(closure_0(youBarHorizontalMargin[38]).t.GqXUt1);
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = youBarBottomMargin.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      openUserSettings.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items7);
  const context = youBarBottomMargin.useContext(tmp7(tmp3[40]));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const tmp2Result23 = require("useYouBarAccessibilityLabel");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  const items8 = [callback3, gesture, sharedValue1, translateX];
  const memo3 = youBarBottomMargin.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    let result = Gesture.Pan().simultaneousWithExternalGesture(gesture);
    const PanResult = Gesture.Pan();
    const activeOffsetXResult = result.activeOffsetX(50);
    const failOffsetXResult = result.activeOffsetX(50).failOffsetX(-10);
    const fn = function s() {
      const result = sharedValue1.set(translateX.get());
    };
    fn.__closure = { startingTranslateX: sharedValue1, translateX };
    fn.__workletHash = 13002049298724;
    fn.__initData = __initData3;
    const failOffsetYResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]);
    let obj = { startingTranslateX: sharedValue1, translateX };
    const fn2 = function n(arg0, fail) {
      value = sharedValue1.get();
      if (Math.abs(value - translateX.get()) >= 10) {
        fail.fail();
      }
    };
    fn2.__closure = { startingTranslateX: sharedValue1, translateX };
    fn2.__workletHash = 11728992116193;
    fn2.__initData = __initData2;
    const onBeginResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(fn);
    const fn3 = function t(arg0, arg1) {
      if (arg1) {
        closure_0(youBarHorizontalMargin[19]).runOnJS(callback3)();
        const obj = closure_0(youBarHorizontalMargin[19]);
      }
    };
    const onTouchesMoveResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(fn).onTouchesMove(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleNavBetweenGuildsAndDMs: callback3 };
    fn3.__workletHash = 2931771790779;
    fn3.__initData = __initData;
    return onTouchesMoveResult.onEnd(fn3);
  }, items8);
  const AVATAR_SIZE_MAP = tmp2(tmp3[42]).AVATAR_SIZE_MAP;
  if (null != str) {
    let tmp39 = AVATAR_SIZE_MAP[translateX];
  } else {
    tmp39 = AVATAR_SIZE_MAP[gesture];
  }
  const obj5 = { ref: youBarCoachmark.animatedRef, style: null, shouldRasterizeIOS: true, children: null };
  const items9 = [tmp.youRow, memo, animatedStyle];
  obj5.style = items9;
  const items10 = [closure_18(DOCK_SPACE_SPRING_CONFIG(youBarHorizontalMargin[43]), { hasNameplate: null != nameplate, barWidth: diff, condensedReason: str, avatarSize: tmp39 }), , , ];
  let tmp42Result = tmp25;
  if (null != nameplate) {
    const obj6 = { nameplate, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp39 };
    tmp42Result = closure_18(tmp7(tmp3[44]), obj6);
  }
  items10[1] = tmp42Result;
  const obj7 = { gesture: memo3, children: null };
  const obj8 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: youBarAccessibilityLabel, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onPressIn: null, onPressOut: null, onPress: null, onLongPress: null, hitSlop: null, testID: "you_bar_profile_button", children: null };
  let intl = tmp2(tmp3[38]).intl;
  obj8.accessibilityHint = intl.string(require("util").t.cSgdvE);
  obj8.accessibilityActions = memo2;
  obj8.onAccessibilityAction = callback4;
  obj8.onPressIn = callback1;
  obj8.onPressOut = callback2;
  obj8.onPress = memo1;
  obj8.onLongPress = callback;
  obj8.hitSlop = sharedValue1;
  obj8.children = closure_18(DOCK_SPACE_SPRING_CONFIG(youBarHorizontalMargin[45]), { isCondensed: null != str, onAvatarPress: memo1 });
  obj7.children = closure_18(sharedValue, obj8);
  items10[2] = closure_18(require("LegacyBaseButton").GestureDetector, obj7);
  const obj9 = { style: tmp.youRowRight, children: null };
  let placement;
  if (tmp19 != null) {
    placement = tmp19.placement;
  }
  if ("you_bar" === placement) {
    const obj10 = { hasNameplate: tmp25, canUnpin: tmp19.canPin };
    let tmp42Result2 = closure_18(tmp7(tmp3[46]), obj10);
  } else {
    tmp42Result2 = null;
    if (iCYMIEnabled) {
      const obj11 = { hasNameplate: tmp25 };
      tmp42Result2 = closure_18(tmp7(tmp3[47]), obj11);
    }
  }
  const items11 = [tmp42Result2, closure_18(DOCK_SPACE_SPRING_CONFIG(youBarHorizontalMargin[48]), { hasNameplate: null != nameplate })];
  obj9.children = items11;
  items10[3] = closure_19(connectionBannerHeight, obj9);
  obj5.children = items10;
  return closure_19(DOCK_SPACE_SPRING_CONFIG(youBarHorizontalMargin[19]).View, obj5);
});
let obj3 = { flex: 1, marginRight: nativeDefault.space.PX_12, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default noop.memo(function YouBarThemed() {
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj2 = { gradient: stateFromStores, children: null };
  const items1 = [collapsedCategories(YouBarFloatingShadeDefault, {}), collapsedCategories(closure_25, {}), collapsedCategories(ConnectionBannerDefault, {})];
  obj2.children = items1;
  return closure_1_19(native.ThemeContextProvider, obj2);
});