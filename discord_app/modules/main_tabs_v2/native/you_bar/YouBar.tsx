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
import LegacyBaseButton from "../../../../../_runtime/05298_LegacyBaseButton.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import getNavigatorCurrentRouteDefault from "../../navigator/getNavigatorCurrentRoute.tsx";
import YouBarFloatingShadeDefault from "YouBarFloatingShade.tsx";
import ConnectionBannerDefault from "../ConnectionBanner.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const YouBarConstants = fn(17004);
({
  YOU_BAR_HEIGHT: c10,
  YOU_BAR_PADDING: closure_11,
  YOU_BAR_SPRING_CONFIG: closure_12,
  YOU_BAR_AVATAR_LARGE_SIZE: map1,
  YOU_BAR_AVATAR_SIZE: closure_14,
  YOU_BAR_BUTTON_HIT_SLOP: closure_15,
} = YouBarConstants);
const ME = fn(1072).ME;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5009);
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
let closure_20 = createStyles.createStyles(obj);
const __initData = {
  code: "function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}",
};
let closure_22 = {
  code: "function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}",
};
let closure_23 = {
  code: "function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}",
};
let closure_24 = {
  code: "function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}",
};
let closure_25 = noop.memo(function YouBar() {
  const tmp = closure_20();
  const mobileQuestDock = isMobileQuestDockRenderedBase(16997).useMobileQuestDock();
  let obj = isMobileQuestDockRenderedBase(16997);
  isMobileQuestDockRenderedBase =
    isMobileQuestDockRenderedBase(16997).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = isMobileQuestDockRenderedBase(16997);
  const drawerWidth = isMobileQuestDockRenderedBase(11522).useDrawerWidth({ whileSliding: "wider" });
  let obj3 = isMobileQuestDockRenderedBase(11522);
  const youBarHorizontalMargin = isMobileQuestDockRenderedBase(17003).useYouBarHorizontalMargin();
  const diff = drawerWidth - 2 * youBarHorizontalMargin;
  dependencyMap = diff;
  let obj4 = isMobileQuestDockRenderedBase(17003);
  const youBarBottomMargin = isMobileQuestDockRenderedBase(17003).useYouBarBottomMargin();
  const obj5 = isMobileQuestDockRenderedBase(17003);
  const connectionBannerHeight = isMobileQuestDockRenderedBase(17007).useConnectionBannerHeight();
  let items = [diff, youBarHorizontalMargin];
  const memo = connectionBannerHeight.useMemo(() => {
    const size = { marginHorizontal: youBarHorizontalMargin, height, padding, width: diff };
    return size;
  }, items);
  const obj6 = isMobileQuestDockRenderedBase(17007);
  const sharedValue = isMobileQuestDockRenderedBase(5090).useSharedValue(false);
  const obj7 = isMobileQuestDockRenderedBase(5090);
  let fn = function n() {
    const obj = {
      marginBottom: spring.withSpring(youBarBottomMargin + connectionBannerHeight, closure_2_12),
      transform: null,
    };
    let num = 1;
    if (sharedValue.get()) {
      num = 1;
      if (!isMobileQuestDockRenderedBase) {
        num = 0.98;
      }
    }
    const items = [{ scale: spring.withSpring(num, closure_2_12) }];
    obj.transform = items;
    return obj;
  };
  const obj8 = isMobileQuestDockRenderedBase(5090);
  fn.__closure = {
    withSpring: isMobileQuestDockRenderedBase(5632).withSpring,
    barMarginBottom: youBarBottomMargin,
    connectionBannerHeight,
    YOU_BAR_SPRING_CONFIG: gesture,
    isPressedValue: sharedValue,
    isQuestRendered: isMobileQuestDockRenderedBase,
  };
  fn.__workletHash = 7314807713815;
  fn.__initData = __initData;
  const animatedStyle = obj8.useAnimatedStyle(fn);
  const obj9 = {
    withSpring: isMobileQuestDockRenderedBase(5632).withSpring,
    barMarginBottom: youBarBottomMargin,
    connectionBannerHeight,
    YOU_BAR_SPRING_CONFIG: gesture,
    isPressedValue: sharedValue,
    isQuestRendered: isMobileQuestDockRenderedBase,
  };
  const iCYMIEnabled = isMobileQuestDockRenderedBase(8916).useICYMIEnabled("TabsNavigator");
  const tmp16 = youBarHorizontalMargin(9654)("YouBar");
  const obj10 = isMobileQuestDockRenderedBase(8916);
  const youBarCoachmark = isMobileQuestDockRenderedBase(18380).useYouBarCoachmark({
    isQuestRendered: isMobileQuestDockRenderedBase,
  });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  const obj11 = isMobileQuestDockRenderedBase(18380);
  const showTinyBroncoPromoSheet = isMobileQuestDockRenderedBase(16561).useShowTinyBroncoPromoSheet({
    visibleContent,
    markAsDismissed,
  });
  connectionBannerHeight.useRef(markAsDismissed);
  const obj12 = isMobileQuestDockRenderedBase(16561);
  const items1 = [markAsDismissed, visibleContent];
  const effect = connectionBannerHeight.useEffect(() => {
    closure_9.current = visibleContent;
    closure_8.current = markAsDismissed;
  }, items1);
  const ref2 = connectionBannerHeight.useRef(visibleContent);
  const items2 = [ref2];
  const stateFromStores = isMobileQuestDockRenderedBase(504).useStateFromStores(items2, () => ref2.getCurrentUser());
  const obj13 = isMobileQuestDockRenderedBase(504);
  const nameplate = isMobileQuestDockRenderedBase(8781).useNameplate({ user: stateFromStores });
  const obj14 = isMobileQuestDockRenderedBase(8781);
  const youBarAccessibilityLabel = isMobileQuestDockRenderedBase(18386).useYouBarAccessibilityLabel(stateFromStores);
  closure_10 = connectionBannerHeight.useRef(null);
  const effect1 = connectionBannerHeight.useEffect(() => {
    const rootNavigationRef = isMobileQuestDockRenderedBase(diff[25]).getRootNavigationRef();
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
    const obj = isMobileQuestDockRenderedBase(diff[25]);
  }, []);
  const items3 = [sharedValue];
  const memo1 = connectionBannerHeight.useMemo(
    () =>
      _mod12.debounce(
        () => {
          const rootNavigationRef = isMobileQuestDockRenderedBase(diff[25]).getRootNavigationRef();
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
              closure_1_10.current = "press";
            }
          }
          if (null != rootNavigationRef) {
            const result = isMobileQuestDockRenderedBase(diff[26]).triggerHapticFeedback(
              isMobileQuestDockRenderedBase(diff[26]).HapticFeedbackTypes.SOFT,
            );
            rootNavigationRef.navigate("you");
            const result1 = sharedValue.set(false);
            const tmpResult = isMobileQuestDockRenderedBase(diff[26]);
          }
          const obj = isMobileQuestDockRenderedBase(diff[25]);
        },
        500,
        { leading: true, trailing: false },
      ),
    items3,
  );
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback = connectionBannerHeight.useCallback(
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
              const obj4 = { value: tmp2(paths[30])(paths[29], paths.paths), done: false };
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
            const result = tmp2(paths[26]).triggerHapticFeedback(tmp2(paths[26]).HapticFeedbackTypes.SOFT);
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
  const callback1 = connectionBannerHeight.useCallback(() => {
    const result = sharedValue.set(true);
  }, items5);
  const callback2 = connectionBannerHeight.useCallback(() => {
    const result = sharedValue.set(false);
  }, items6);
  const callback3 = connectionBannerHeight.useCallback(() => {
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
  const memo2 = connectionBannerHeight.useMemo(() => {
    const obj = { name: "open-settings", label: null };
    const intl = isMobileQuestDockRenderedBase(diff[35]).intl;
    obj.label = intl.string(isMobileQuestDockRenderedBase(diff[35]).t["3/IlR0"]);
    const items = [obj];
    const obj2 = { name: "open-dms", label: null };
    const intl2 = isMobileQuestDockRenderedBase(diff[35]).intl;
    obj2.label = intl2.string(isMobileQuestDockRenderedBase(diff[35]).t.GqXUt1);
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = connectionBannerHeight.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      openUserSettings.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items7);
  const context = connectionBannerHeight.useContext(youBarHorizontalMargin(12056));
  gesture = context.gesture;
  const translateX = context.translateX;
  const obj15 = isMobileQuestDockRenderedBase(18386);
  const sharedValue1 = isMobileQuestDockRenderedBase(5090).useSharedValue(0);
  const items8 = [callback3, gesture, sharedValue1, translateX];
  const memo3 = connectionBannerHeight.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    let result = Gesture.Pan().simultaneousWithExternalGesture(gesture);
    const PanResult = Gesture.Pan();
    const activeOffsetXResult = result.activeOffsetX(50);
    const failOffsetXResult = result.activeOffsetX(50).failOffsetX(-10);
    const fn = function n() {
      const result = sharedValue1.set(translateX.get());
    };
    fn.__closure = { startingTranslateX: sharedValue1, translateX };
    fn.__workletHash = 13002049298724;
    fn.__initData = __initData3;
    const failOffsetYResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]);
    let obj = { startingTranslateX: sharedValue1, translateX };
    const fn2 = function s(arg0, fail) {
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
        isMobileQuestDockRenderedBase(diff[16]).runOnJS(callback3)();
        const obj = isMobileQuestDockRenderedBase(diff[16]);
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
  const AVATAR_SIZE_MAP = isMobileQuestDockRenderedBase(1188).AVATAR_SIZE_MAP;
  if (isMobileQuestDockRenderedBase) {
    let tmp37 = AVATAR_SIZE_MAP[sharedValue1];
  } else {
    tmp37 = AVATAR_SIZE_MAP[translateX];
  }
  const obj17 = { ref: youBarCoachmark.animatedRef, style: null, shouldRasterizeIOS: true, children: null };
  const items9 = [tmp.youRow, memo, animatedStyle];
  obj17.style = items9;
  const items10 = [
    closure_18(youBarHorizontalMargin(18401), {
      hasNameplate: null != nameplate,
      isLargeAvatar: !isMobileQuestDockRenderedBase,
      barWidth: diff,
      isQuestRendered: isMobileQuestDockRenderedBase,
      avatarSize: tmp37,
    }),
    ,
    ,
  ];
  let tmp40Result = tmp22;
  if (null != nameplate) {
    const obj18 = { nameplate, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp37 };
    tmp40Result = closure_18(tmp15(18402), obj18);
  }
  items10[1] = tmp40Result;
  const obj19 = { gesture: memo3, children: null };
  const obj20 = {
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
    testID: "you_bar_profile_button",
    children: null,
  };
  let intl = tmp2(1114).intl;
  obj20.accessibilityHint = intl.string(isMobileQuestDockRenderedBase(1114).t.cSgdvE);
  obj20.accessibilityActions = memo2;
  obj20.onAccessibilityAction = callback4;
  obj20.onPressIn = callback1;
  obj20.onPressOut = callback2;
  obj20.onPress = memo1;
  obj20.onLongPress = callback;
  obj20.hitSlop = hitSlop;
  obj20.children = closure_18(youBarHorizontalMargin(18403), {
    isQuestRendered: isMobileQuestDockRenderedBase,
    onAvatarPress: memo1,
  });
  obj19.children = closure_18(visibleContent, obj20);
  items10[2] = closure_18(isMobileQuestDockRenderedBase(5298).GestureDetector, obj19);
  const obj21 = { style: tmp.youRowRight, children: null };
  let placement;
  if (tmp16 != null) {
    placement = tmp16.placement;
  }
  if ("you_bar" === placement) {
    const obj22 = { hasNameplate: tmp22, canUnpin: tmp16.canPin };
    let tmp40Result2 = closure_18(tmp15(18408), obj22);
  } else {
    tmp40Result2 = null;
    if (iCYMIEnabled) {
      const obj23 = { hasNameplate: tmp22 };
      tmp40Result2 = closure_18(tmp15(18410), obj23);
    }
  }
  const items11 = [tmp40Result2, closure_18(youBarHorizontalMargin(18412), { hasNameplate: null != nameplate })];
  obj21.children = items11;
  items10[3] = closure_19(sharedValue, obj21);
  obj17.children = items10;
  return closure_19(youBarHorizontalMargin(5090).View, obj17);
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
    collapsedCategories(YouBarFloatingShadeDefault, {}),
    collapsedCategories(closure_25, {}),
    collapsedCategories(ConnectionBannerDefault, {}),
  ];
  obj2.children = items1;
  return closure_1_19(native.ThemeContextProvider, obj2);
});
