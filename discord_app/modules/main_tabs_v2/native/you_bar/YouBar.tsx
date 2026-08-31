// discord_app/modules/main_tabs_v2/native/you_bar/YouBar.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import _modDef15948 from "YouBarFloatingShade.tsx";
import ConnectionBannerIconDefault from "../ConnectionBanner.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import closure_9 from "../../../../stores/SelectedGuildStore.tsx";
import closure_10 from "../../../../stores/UserStore.tsx";
import CONNECTION_BANNER_HEIGHT from "YouBarConstants.tsx";
import { ME } from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c5 = importAllResult;
({ View: closure_6, Pressable: error } = get_ActivityIndicator);
({ YOU_BAR_HEIGHT: unpackModuleId, YOU_BAR_PADDING: closure_12, YOU_BAR_SPRING_CONFIG: map1, YOU_BAR_AVATAR_LARGE_SIZE: closure_14, YOU_BAR_AVATAR_SIZE: closure_15, YOU_BAR_BUTTON_HIT_SLOP: closure_16 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let obj = { youRow: null, youRowRight: null, youPressable: null };
obj = { position: "absolute", left: 0, right: 0, bottom: 0, flexDirection: "row", alignItems: "center", backgroundColor: "transparent" };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
obj[0] = obj;
obj[1] = { flexDirection: "row", gap: 8 };
createCacheKey = { flex: 1, marginRight: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
obj[2] = createCacheKey;
let closure_21 = createCacheKey.createStyles(obj);
let closure_22 = { code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_23 = { code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}" };
let closure_24 = { code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}" };
let closure_25 = { code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}" };
let closure_26 = importAllResult.memo(() => {
  let tmp = callback3();
  let obj = isMobileQuestDockRenderedBase(14659);
  const mobileQuestDock = obj.useMobileQuestDock();
  obj1 = isMobileQuestDockRenderedBase(14659);
  isMobileQuestDockRenderedBase = obj1.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = isMobileQuestDockRenderedBase(11089);
  const drawerWidth = obj2.useDrawerWidth();
  let obj3 = isMobileQuestDockRenderedBase(14665);
  const youBarHorizontalMargin = obj3.useYouBarHorizontalMargin();
  let result = 2 * youBarHorizontalMargin;
  const tmp10 = youBarHorizontalMargin(4305)().isChatBesideChannelList ? drawerWidth - result : youBarHorizontalMargin(1493)().width - result;
  dependencyMap = tmp10;
  let tmp4Result = tmp4(14665);
  const youBarBottomMargin = tmp4Result.useYouBarBottomMargin();
  tmp4Result = tmp4(14669);
  const connectionBannerHeight = tmp4Result.useConnectionBannerHeight();
  let items = [tmp10, youBarHorizontalMargin];
  const memo = sharedValue.useMemo(() => ({ marginHorizontal: youBarHorizontalMargin, height: closure_11, padding: closure_12, width: closure_2 }), items);
  sharedValue = isMobileQuestDockRenderedBase(4187).useSharedValue(false);
  const tmp4Result1 = isMobileQuestDockRenderedBase(4187);
  let fn = function r() {
    let obj = { marginBottom: isMobileQuestDockRenderedBase(4895).withSpring(youBarBottomMargin + connectionBannerHeight, callback4), transform: null };
    const obj2 = isMobileQuestDockRenderedBase(4895);
    const tmp = callback4;
    let num = 1;
    if (sharedValue.get()) {
      num = 1;
      if (!isMobileQuestDockRenderedBase) {
        num = 0.98;
      }
    }
    obj = { scale: isMobileQuestDockRenderedBase(4895).withSpring(num, tmp) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { withSpring: tmp4(4895).withSpring, barMarginBottom: youBarBottomMargin, connectionBannerHeight, YOU_BAR_SPRING_CONFIG: callback4, isPressedValue: sharedValue, isQuestRendered: isMobileQuestDockRenderedBase };
  fn.__closure = obj;
  fn.__workletHash = 7314807713815;
  fn.__initData = closure_22;
  const animatedStyle = isMobileQuestDockRenderedBase(4187).useAnimatedStyle(fn);
  const tmp4Result2 = isMobileQuestDockRenderedBase(4187);
  const iCYMIEnabled = isMobileQuestDockRenderedBase(8591).useICYMIEnabled("TabsNavigator");
  const tmp4Result3 = isMobileQuestDockRenderedBase(8591);
  const youBarCoachmark = isMobileQuestDockRenderedBase(15919).useYouBarCoachmark({ isQuestRendered: isMobileQuestDockRenderedBase });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  const tmp4Result4 = isMobileQuestDockRenderedBase(15919);
  const showTinyBroncoPromoSheet = isMobileQuestDockRenderedBase(15920).useShowTinyBroncoPromoSheet({ visibleContent, markAsDismissed });
  closure_8 = sharedValue.useRef(markAsDismissed);
  closure_9 = sharedValue.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = sharedValue.useEffect(() => {
    closure_9.current = visibleContent;
    closure_8.current = markAsDismissed;
  }, items1);
  const tmp4Result5 = isMobileQuestDockRenderedBase(15920);
  const items2 = [closure_10];
  const stateFromStores = isMobileQuestDockRenderedBase(589).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp4Result6 = isMobileQuestDockRenderedBase(589);
  const nameplate = isMobileQuestDockRenderedBase(8868).useNameplate({ user: stateFromStores });
  const tmp4Result7 = isMobileQuestDockRenderedBase(8868);
  const youBarAccessibilityLabel = isMobileQuestDockRenderedBase(15922).useYouBarAccessibilityLabel(stateFromStores);
  const memo1 = sharedValue.useMemo(() => {
    const obj = { name: "open-settings", label: null };
    const intl = isMobileQuestDockRenderedBase(1236).intl;
    obj[1] = intl.string(isMobileQuestDockRenderedBase(1236).t["3/IlR0"]);
    const items = [obj];
    return items;
  }, []);
  const callback = sharedValue.useCallback((nativeEvent) => {
    if ("open-settings" === nativeEvent.nativeEvent.actionName) {
      isMobileQuestDockRenderedBase(6213).openUserSettings();
      const obj = isMobileQuestDockRenderedBase(6213);
    }
  }, []);
  closure_10 = sharedValue.useRef(null);
  const tmp26 = connectionBannerHeight(sharedValue.useState(0), 2);
  closure_11 = tmp26[1];
  closure_12 = sharedValue.useRef(true);
  const effect1 = sharedValue.useEffect(() => {
    const rootNavigationRef = isMobileQuestDockRenderedBase(4303).getRootNavigationRef();
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
          const current = closure_1_12.current;
          let tmp5 = !current;
          if (!current) {
            tmp5 = tmp3;
          }
          if (tmp5) {
            closure_1_11((arg0) => arg0 + 1);
          }
          closure_1_12.current = tmp3;
          let someResult;
          if (state != null) {
            const routes = state.routes;
            if (routes != null) {
              someResult = routes.some((name) => "you" === name.name);
            }
          }
          if (!someResult) {
            if (null != closure_1_10.current) {
              if ("press" === tmp9.current) {
                const result = isMobileQuestDockRenderedBase(4416).triggerHapticFeedback(isMobileQuestDockRenderedBase(4416).HapticFeedbackTypes.SOFT);
                obj.navigate("you");
                const obj3 = isMobileQuestDockRenderedBase(4416);
              } else {
                isMobileQuestDockRenderedBase(1471).assertNever(tmp9.current);
                const obj2 = isMobileQuestDockRenderedBase(1471);
              }
              tmp9.current = null;
            }
          }
          const tmp4 = closure_1_12;
        }
      }
      let result = checkYouScreenPresence();
      closure_1 = rootNavigationRef.addListener("state", checkYouScreenPresence);
      return () => {
        callback();
      };
    }
    const obj = isMobileQuestDockRenderedBase(4303);
  }, []);
  const items3 = [sharedValue];
  const memo2 = sharedValue.useMemo(() => isMobileQuestDockRenderedBase(12).debounce(() => {
    const rootNavigationRef = closure_1_0(closure_1_2[29]).getRootNavigationRef();
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
        closure_10.current = "press";
      }
    }
    if (null != rootNavigationRef) {
      const result = tmp(tmp2[30]).triggerHapticFeedback(tmp(tmp2[30]).HapticFeedbackTypes.SOFT);
      rootNavigationRef.navigate("you");
      const result1 = closure_5.set(false);
      const tmpResult = tmp(tmp2[30]);
    }
  }, 500, { leading: true, trailing: false }), items3);
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback1 = sharedValue.useCallback(youBarBottomMargin(function*() {
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
            obj1[0] = closure_1_0(paths[34])(paths[33], paths.paths);
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
          const result = closure_1_0(paths[30]).triggerHapticFeedback(closure_1_0(paths[30]).HapticFeedbackTypes.SOFT);
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
  }), items4);
  const items6 = [sharedValue];
  const callback2 = sharedValue.useCallback(() => {
    const result = sharedValue.set(true);
  }, items5);
  callback3 = sharedValue.useCallback(() => {
    const result = sharedValue.set(false);
  }, items6);
  callback4 = sharedValue.useCallback(() => {
    const coerceGuildsRouteResult = isMobileQuestDockRenderedBase(4302).coerceGuildsRoute(youBarHorizontalMargin(9015)());
    if (null != coerceGuildsRouteResult) {
      let tmpResult = tmp(4416);
      const result = tmpResult.triggerHapticFeedback(tmp(4416).HapticFeedbackTypes.SOFT);
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      if (guildId === closure_1_17) {
        const lastSelectedGuildId = ref2.getLastSelectedGuildId();
        if (null != lastSelectedGuildId) {
          tmpResult = tmp(6154);
          tmpResult.transitionToGuild(lastSelectedGuildId);
        }
      } else {
        if (ref2.current === tmp(1373).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK) {
          ref.current(closure_1_18.TAKE_ACTION);
        }
        tmp(6154).transitionToGuild(tmp5);
        const tmpResult1 = tmp(6154);
      }
    }
  }, []);
  const context = sharedValue.useContext(tmp2(15566));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const tmp4Result8 = isMobileQuestDockRenderedBase(15922);
  closure_16 = isMobileQuestDockRenderedBase(4187).useSharedValue(0);
  const items7 = [callback4, gesture, tmp26[0]];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = isMobileQuestDockRenderedBase(5620).Gesture;
    let result = Gesture.Pan().simultaneousWithExternalGesture(gesture);
    const PanResult = Gesture.Pan();
    const activeOffsetXResult = result.activeOffsetX(50);
    const failOffsetXResult = result.activeOffsetX(50).failOffsetX(-10);
    const fn = function n() {
      const result = store2.set(store.get());
    };
    let obj = { startingTranslateX: closure_16, translateX };
    fn.__closure = obj;
    fn.__workletHash = 13002049298724;
    fn.__initData = closure_1_25;
    const failOffsetYResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]);
    const fn2 = function s(arg0, fail) {
      const value = store2.get();
      if (Math.abs(value - store.get()) >= 10) {
        fail.fail();
      }
    };
    fn2.__closure = { startingTranslateX: closure_16, translateX };
    fn2.__workletHash = 11728992116193;
    fn2.__initData = closure_1_24;
    const onBeginResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(fn);
    const fn3 = function t(arg0, arg1) {
      if (arg1) {
        closure_1_0(closure_1_2[19]).runOnJS(closure_13)();
        const obj = closure_1_0(closure_1_2[19]);
      }
    };
    obj = { runOnJS: isMobileQuestDockRenderedBase(4187).runOnJS, handleNavBetweenGuildsAndDMs: callback4 };
    fn3.__closure = obj;
    fn3.__workletHash = 2931771790779;
    fn3.__initData = closure_1_23;
    return result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(fn).onTouchesMove(fn2).onEnd(fn3);
  }, items7);
  const AVATAR_SIZE_MAP = tmp4(1297).AVATAR_SIZE_MAP;
  if (isMobileQuestDockRenderedBase) {
    let tmp37 = AVATAR_SIZE_MAP[translateX];
  } else {
    tmp37 = AVATAR_SIZE_MAP[gesture];
  }
  obj = { ref: youBarCoachmark.animatedRef, style: items8, shouldRasterizeIOS: true, children: null };
  items8 = [tmp.youRow, memo, animatedStyle];
  const items9 = [callback(youBarHorizontalMargin(15936), { hasNameplate: null != nameplate, isLargeAvatar: !isMobileQuestDockRenderedBase, barWidth: tmp10, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp37 }), , , ];
  let tmp40Result = tmp22;
  if (null != nameplate) {
    obj1 = { nameplate: null, barWidth: null, isQuestRendered: null, avatarSize: null };
    obj1[0] = nameplate;
    obj1[1] = tmp10;
    obj1[2] = isMobileQuestDockRenderedBase;
    obj1[3] = tmp37;
    tmp40Result = tmp40(tmp2(15937), obj1);
  }
  items9[1] = tmp40Result;
  obj2 = { gesture: memo3, children: null };
  obj3 = { style: tmp.youPressable, android_ripple: { color: "transparent" }, accessibilityRole: "button", accessibilityLabel: youBarAccessibilityLabel, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onPressIn: null, onPressOut: null, onPress: null, onLongPress: null, hitSlop: null, children: null };
  let intl = tmp4(1236).intl;
  obj3[4] = intl.string(isMobileQuestDockRenderedBase(1236).t.cSgdvE);
  obj3[5] = memo1;
  obj3[6] = callback;
  obj3[7] = callback2;
  obj3[8] = callback3;
  obj3[9] = memo2;
  obj3[10] = callback1;
  obj3[11] = closure_16;
  obj3[12] = callback(youBarHorizontalMargin(15938), { isQuestRendered: isMobileQuestDockRenderedBase, onAvatarPress: memo2 });
  obj2[1] = callback(markAsDismissed, obj3);
  items9[2] = callback(isMobileQuestDockRenderedBase(5620).GestureDetector, obj2);
  const obj4 = { style: tmp.youRowRight, children: null };
  tmp40Result = null;
  if (iCYMIEnabled) {
    const obj5 = { hasNameplate: null };
    obj5[0] = tmp22;
    tmp40Result = tmp40(tmp2(15943), obj5);
  }
  const items10 = [tmp40Result, callback(youBarHorizontalMargin(15946), { hasNameplate: null != nameplate })];
  obj4[1] = items10;
  items9[3] = closure_20(visibleContent, obj4);
  obj[3] = items9;
  return closure_20(youBarHorizontalMargin(4187).View, obj);
});
const memoResult = importAllResult.memo(function YouBarThemed() {
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  obj = { gradient: stateFromStores, children: null };
  const items1 = [callback(_modDef15948, {}), callback(closure_26, {}), callback(ConnectionBannerIconDefault, {})];
  obj[1] = items1;
  return callback2(ManaContext.ThemeContextProvider, obj);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;