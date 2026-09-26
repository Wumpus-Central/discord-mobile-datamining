// discord_app/modules/main_tabs_v2/native/you_bar/YouBar.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import NavigationRouteUtils from "../../helpers/NavigationRouteUtils.native.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../../_runtime/06073_LegacyBaseButton.js";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import getNavigatorCurrentRouteDefault from "../../navigator/getNavigatorCurrentRoute.tsx";
import YouBarFloatingShadeDefault from "YouBarFloatingShade.tsx";
import ConnectionBannerDefault from "../ConnectionBanner.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const YouBarConstants = fn(14627);
({
  YOU_BAR_HEIGHT: closure_11,
  YOU_BAR_PADDING: closure_12,
  YOU_BAR_SPRING_CONFIG: map1,
  YOU_BAR_AVATAR_LARGE_SIZE: closure_14,
  YOU_BAR_AVATAR_SIZE: closure_15,
  YOU_BAR_BUTTON_HIT_SLOP: closure_16,
} = YouBarConstants);
const ME = fn(1074).ME;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4836);
let obj = { youRow: null, youRowRight: null, youPressable: null };
const rect = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "transparent",
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.youRow = rect;
obj.youRowRight = { flexDirection: "row", gap: 8 };
obj.youPressable = {
  flex: 1,
  marginRight: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
};
let closure_21 = createStyles.createStyles(obj);
const __initData = {
  code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}",
};
let closure_23 = {
  code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}",
};
let closure_24 = {
  code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}",
};
let closure_25 = {
  code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}",
};
let closure_26 = noop.memo(() => {
  const tmp = closure_21();
  const mobileQuestDock = isMobileQuestDockRenderedBase(14620).useMobileQuestDock();
  let obj = isMobileQuestDockRenderedBase(14620);
  isMobileQuestDockRenderedBase =
    isMobileQuestDockRenderedBase(14620).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = isMobileQuestDockRenderedBase(14620);
  const drawerWidth = isMobileQuestDockRenderedBase(11021).useDrawerWidth();
  let obj3 = isMobileQuestDockRenderedBase(11021);
  const youBarHorizontalMargin = isMobileQuestDockRenderedBase(14626).useYouBarHorizontalMargin();
  let result = 2 * youBarHorizontalMargin;
  const tmp10 = youBarHorizontalMargin(4695)().isChatBesideChannelList
    ? drawerWidth - result
    : youBarHorizontalMargin(1479)().width - result;
  dependencyMap = tmp10;
  let obj4 = isMobileQuestDockRenderedBase(14626);
  const youBarBottomMargin = isMobileQuestDockRenderedBase(14626).useYouBarBottomMargin();
  const tmp4Result = isMobileQuestDockRenderedBase(14626);
  const connectionBannerHeight = isMobileQuestDockRenderedBase(14630).useConnectionBannerHeight();
  let items = [tmp10, youBarHorizontalMargin];
  const memo = sharedValue.useMemo(() => {
    const size = { marginHorizontal: youBarHorizontalMargin, height, padding, width };
    return size;
  }, items);
  const tmp4Result11 = isMobileQuestDockRenderedBase(14630);
  sharedValue = isMobileQuestDockRenderedBase(4566).useSharedValue(false);
  const tmp4Result12 = isMobileQuestDockRenderedBase(4566);
  let fn = function r() {
    const obj = { marginBottom: spring.withSpring(youBarBottomMargin + connectionBannerHeight, map1), transform: null };
    let num = 1;
    if (sharedValue.get()) {
      num = 1;
      if (!isMobileQuestDockRenderedBase) {
        num = 0.98;
      }
    }
    const items = [{ scale: spring.withSpring(num, map1) }];
    obj.transform = items;
    return obj;
  };
  const tmp4Result13 = isMobileQuestDockRenderedBase(4566);
  fn.__closure = {
    withSpring: isMobileQuestDockRenderedBase(5280).withSpring,
    barMarginBottom: youBarBottomMargin,
    connectionBannerHeight,
    YOU_BAR_SPRING_CONFIG: callback3,
    isPressedValue: sharedValue,
    isQuestRendered: isMobileQuestDockRenderedBase,
  };
  fn.__workletHash = 7314807713815;
  fn.__initData = __initData;
  const animatedStyle = tmp4Result13.useAnimatedStyle(fn);
  const obj5 = {
    withSpring: isMobileQuestDockRenderedBase(5280).withSpring,
    barMarginBottom: youBarBottomMargin,
    connectionBannerHeight,
    YOU_BAR_SPRING_CONFIG: callback3,
    isPressedValue: sharedValue,
    isQuestRendered: isMobileQuestDockRenderedBase,
  };
  const iCYMIEnabled = isMobileQuestDockRenderedBase(7800).useICYMIEnabled("TabsNavigator");
  const tmp4Result14 = isMobileQuestDockRenderedBase(7800);
  const youBarCoachmark = isMobileQuestDockRenderedBase(16003).useYouBarCoachmark({
    isQuestRendered: isMobileQuestDockRenderedBase,
  });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  const tmp4Result15 = isMobileQuestDockRenderedBase(16003);
  const showTinyBroncoPromoSheet = isMobileQuestDockRenderedBase(14276).useShowTinyBroncoPromoSheet({
    visibleContent,
    markAsDismissed,
  });
  sharedValue.useRef(markAsDismissed);
  sharedValue.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = sharedValue.useEffect(() => {
    closure_9.current = visibleContent;
    closure_8.current = markAsDismissed;
  }, items1);
  const tmp4Result16 = isMobileQuestDockRenderedBase(14276);
  const items2 = [currentUser];
  const stateFromStores = isMobileQuestDockRenderedBase(504).useStateFromStores(items2, () =>
    currentUser.getCurrentUser(),
  );
  const tmp4Result17 = isMobileQuestDockRenderedBase(504);
  const nameplate = isMobileQuestDockRenderedBase(7662).useNameplate({ user: stateFromStores });
  const tmp4Result18 = isMobileQuestDockRenderedBase(7662);
  const youBarAccessibilityLabel = isMobileQuestDockRenderedBase(16007).useYouBarAccessibilityLabel(stateFromStores);
  currentUser = sharedValue.useRef(null);
  const tmp24 = connectionBannerHeight(sharedValue.useState(0), 2);
  closure_11 = tmp24[1];
  closure_12 = sharedValue.useRef(true);
  const effect1 = sharedValue.useEffect(() => {
    const rootNavigationRef = isMobileQuestDockRenderedBase(width[27]).getRootNavigationRef();
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
          const current = ref2.current;
          let tmp5 = !current;
          if (!current) {
            tmp5 = tmp3;
          }
          if (tmp5) {
            closure_11((arg0) => arg0 + 1);
          }
          ref2.current = tmp3;
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
    const obj = isMobileQuestDockRenderedBase(width[27]);
  }, []);
  const items3 = [sharedValue];
  const memo1 = sharedValue.useMemo(
    () =>
      _mod12.debounce(
        () => {
          const rootNavigationRef = isMobileQuestDockRenderedBase(dependencyMap[27]).getRootNavigationRef();
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
              currentUser.current = "press";
            }
          }
          if (null != rootNavigationRef) {
            const result = isMobileQuestDockRenderedBase(dependencyMap[28]).triggerHapticFeedback(
              isMobileQuestDockRenderedBase(dependencyMap[28]).HapticFeedbackTypes.SOFT,
            );
            rootNavigationRef.navigate("you");
            const result1 = sharedValue.set(false);
            const tmpResult = isMobileQuestDockRenderedBase(dependencyMap[28]);
          }
          const obj = isMobileQuestDockRenderedBase(dependencyMap[27]);
        },
        500,
        { leading: true, trailing: false },
      ),
    items3,
  );
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback = sharedValue.useCallback(
    youBarBottomMargin(function* () {
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
          return { value: "HermesInternal", done: null };
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
              const obj4 = { value: tmp2(paths[32])(paths[31], paths.paths), done: false };
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
            const result = tmp2(paths[28]).triggerHapticFeedback(tmp2(paths[28]).HapticFeedbackTypes.SOFT);
            const result1 = closure_128_0.showYouAccountActionSheet();
            const result2 = closure_129_5.set(false);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    }),
    items4,
  );
  const items6 = [sharedValue];
  const callback1 = sharedValue.useCallback(() => {
    const result = sharedValue.set(true);
  }, items5);
  const callback2 = sharedValue.useCallback(() => {
    const result = sharedValue.set(false);
  }, items6);
  callback3 = sharedValue.useCallback(() => {
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
  const memo2 = sharedValue.useMemo(() => {
    const obj = { name: "open-settings", label: null };
    const intl = isMobileQuestDockRenderedBase(width[37]).intl;
    obj.label = intl.string(isMobileQuestDockRenderedBase(width[37]).t["3/IlR0"]);
    const items = [obj];
    const obj2 = { name: "open-dms", label: null };
    const intl2 = isMobileQuestDockRenderedBase(width[37]).intl;
    obj2.label = intl2.string(isMobileQuestDockRenderedBase(width[37]).t.GqXUt1);
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = sharedValue.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      openUserSettings.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items7);
  const context = sharedValue.useContext(tmp2(15637));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const tmp4Result19 = isMobileQuestDockRenderedBase(16007);
  hitSlop = isMobileQuestDockRenderedBase(4566).useSharedValue(0);
  const items8 = [callback3, gesture, tmp24[0]];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    let result = Gesture.Pan().simultaneousWithExternalGesture(gesture);
    const PanResult = Gesture.Pan();
    const activeOffsetXResult = result.activeOffsetX(50);
    const failOffsetXResult = result.activeOffsetX(50).failOffsetX(-10);
    const fn = function n() {
      const result = startingTranslateX.set(translateX.get());
    };
    fn.__closure = { startingTranslateX, translateX };
    fn.__workletHash = 13002049298724;
    fn.__initData = __initData3;
    const failOffsetYResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]);
    let obj = { startingTranslateX, translateX };
    const fn2 = function s(arg0, fail) {
      value = startingTranslateX.get();
      if (Math.abs(value - translateX.get()) >= 10) {
        fail.fail();
      }
    };
    fn2.__closure = { startingTranslateX, translateX };
    fn2.__workletHash = 11728992116193;
    fn2.__initData = __initData2;
    const onBeginResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(fn);
    const fn3 = function t(arg0, arg1) {
      if (arg1) {
        isMobileQuestDockRenderedBase(dependencyMap[19]).runOnJS(callback3)();
        const obj = isMobileQuestDockRenderedBase(dependencyMap[19]);
      }
    };
    const onTouchesMoveResult = result
      .activeOffsetX(50)
      .failOffsetX(-10)
      .failOffsetY([-40, 40])
      .onBegin(fn)
      .onTouchesMove(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleNavBetweenGuildsAndDMs: callback3 };
    fn3.__workletHash = 2931771790779;
    fn3.__initData = __initData;
    return onTouchesMoveResult.onEnd(fn3);
  }, items8);
  const AVATAR_SIZE_MAP = tmp4(1177).AVATAR_SIZE_MAP;
  if (isMobileQuestDockRenderedBase) {
    let tmp37 = AVATAR_SIZE_MAP[translateX];
  } else {
    tmp37 = AVATAR_SIZE_MAP[gesture];
  }
  const obj6 = { ref: youBarCoachmark.animatedRef, style: null, shouldRasterizeIOS: true, children: null };
  const items9 = [tmp.youRow, memo, animatedStyle];
  obj6.style = items9;
  const items10 = [
    closure_19(youBarHorizontalMargin(16024), {
      hasNameplate: null != nameplate,
      isLargeAvatar: !isMobileQuestDockRenderedBase,
      barWidth: tmp10,
      isQuestRendered: isMobileQuestDockRenderedBase,
      avatarSize: tmp37,
    }),
    ,
    ,
  ];
  let tmp40Result = tmp22;
  if (null != nameplate) {
    const obj7 = { nameplate, barWidth: tmp10, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp37 };
    tmp40Result = closure_19(tmp2(16025), obj7);
  }
  items10[1] = tmp40Result;
  const obj8 = { gesture: memo3, children: null };
  const obj9 = {
    style: tmp.youPressable,
    android_ripple: { color: "transparent" },
    accessibilityRole: "button",
    accessibilityLabel: youBarAccessibilityLabel,
    accessibilityHint: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    onPressIn: null,
    onPressOut: null,
    onPress: null,
    onLongPress: null,
    hitSlop: null,
    children: null,
  };
  let intl = tmp4(1115).intl;
  obj9.accessibilityHint = intl.string(isMobileQuestDockRenderedBase(1115).t.cSgdvE);
  obj9.accessibilityActions = memo2;
  obj9.onAccessibilityAction = callback4;
  obj9.onPressIn = callback1;
  obj9.onPressOut = callback2;
  obj9.onPress = memo1;
  obj9.onLongPress = callback;
  obj9.hitSlop = hitSlop;
  obj9.children = closure_19(youBarHorizontalMargin(16026), {
    isQuestRendered: isMobileQuestDockRenderedBase,
    onAvatarPress: memo1,
  });
  obj8.children = closure_19(markAsDismissed, obj9);
  items10[2] = closure_19(isMobileQuestDockRenderedBase(6073).GestureDetector, obj8);
  const obj10 = { style: tmp.youRowRight, children: null };
  let tmp40Result2 = null;
  if (iCYMIEnabled) {
    const obj11 = { hasNameplate: tmp22 };
    tmp40Result2 = closure_19(tmp2(16031), obj11);
  }
  const items11 = [tmp40Result2, closure_19(youBarHorizontalMargin(16034), { hasNameplate: null != nameplate })];
  obj10.children = items11;
  items10[3] = closure_20(visibleContent, obj10);
  obj6.children = items10;
  return closure_20(youBarHorizontalMargin(4566).View, obj6);
});
let obj3 = {
  flex: 1,
  marginRight: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default noop.memo(function YouBarThemed() {
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj2 = { gradient: stateFromStores, children: null };
  const items1 = [
    closure_1_19(YouBarFloatingShadeDefault, {}),
    closure_1_19(closure_26, {}),
    closure_1_19(ConnectionBannerDefault, {}),
  ];
  obj2.children = items1;
  return closure_1_20(native.ThemeContextProvider, obj2);
});
