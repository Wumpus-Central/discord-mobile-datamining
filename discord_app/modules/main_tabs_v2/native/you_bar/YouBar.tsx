// discord_app/modules/main_tabs_v2/native/you_bar/YouBar.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import NavigationRouteUtils from "../../helpers/NavigationRouteUtils.native.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../../_runtime/06147_LegacyBaseButton.js";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import getNavigatorCurrentRouteDefault from "../../navigator/getNavigatorCurrentRoute.tsx";
import YouBarFloatingShadeDefault from "YouBarFloatingShade.tsx";
import ConnectionBannerDefault from "../ConnectionBanner.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import YouBarConstants from "YouBarConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c3, dependencyMap, hitSlop, padding;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let unpackModuleId;
({ View: metroRequire, Pressable: metroImportDefault } = react_native);
({
  YOU_BAR_HEIGHT: unpackModuleId,
  YOU_BAR_PADDING: closure_12,
  YOU_BAR_SPRING_CONFIG: map1,
  YOU_BAR_AVATAR_LARGE_SIZE: closure_14,
  YOU_BAR_AVATAR_SIZE: closure_15,
  YOU_BAR_BUTTON_HIT_SLOP: closure_16,
} = YouBarConstants);
const ME = Constants.ME;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = { youRow: rect, youRowRight: { flexDirection: "row", gap: 8 }, youPressable: obj2 };
rect = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "transparent",
};
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2 = {
  flex: 1,
  marginRight: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
};
let closure_21 = createStyles(obj);
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
let closure_26 = react.memo(() => {
  let callback3;
  let currentUser;
  let intl;
  let isMobileQuestDockRenderedBase;
  let items10;
  let items11;
  let items9;
  let obj9;
  let sharedValue;
  let startingTranslateX;
  let tmp38;
  let youBarHorizontalMargin;
  let tmp = closure_21();
  const tmp2 = youBarHorizontalMargin;
  let tmp3 = dependencyMap;
  const tmp4 = isMobileQuestDockRenderedBase;
  const width = youBarHorizontalMargin(1484)().width;
  let obj = isMobileQuestDockRenderedBase(14908);
  const mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = isMobileQuestDockRenderedBase(14908);
  isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj3 = isMobileQuestDockRenderedBase(11157);
  const drawerWidth = obj3.useDrawerWidth();
  const isChatBesideChannelList = youBarHorizontalMargin(4745)().isChatBesideChannelList;
  let obj4 = isMobileQuestDockRenderedBase(14914);
  youBarHorizontalMargin = obj4.useYouBarHorizontalMargin();
  let result = 2 * youBarHorizontalMargin;
  const tmp10 = isChatBesideChannelList ? drawerWidth - result : width - result;
  dependencyMap = tmp10;
  const tmp4Result = tmp4(14914);
  const youBarBottomMargin = tmp4Result.useYouBarBottomMargin();
  const tmp4Result11 = tmp4(14918);
  const connectionBannerHeight = tmp4Result11.useConnectionBannerHeight();
  let items = [tmp10, youBarHorizontalMargin];
  const memo = sharedValue.useMemo(() => {
    size = { marginHorizontal: youBarHorizontalMargin, height: unpackModuleId, padding, width };
    return size;
  }, items);
  const tmp4Result12 = tmp4(4618);
  sharedValue = tmp4Result12.useSharedValue(false);
  let fn = function r() {
    let items;
    let obj2;
    const obj = { marginBottom: obj2.withSpring(youBarBottomMargin + connectionBannerHeight, map1), transform: items };
    obj2 = spring;
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (sharedValue.get()) {
      num = 1;
      if (!isMobileQuestDockRenderedBase) {
        num = 0.98;
      }
    }
    items = [{ scale: withSpring(num, map1) }];
    ({ scale: withSpring(num, map1) });
    return obj;
  };
  const tmp4Result13 = tmp4(4618);
  let obj5 = {
    withSpring: tmp4(5604).withSpring,
    barMarginBottom: youBarBottomMargin,
    connectionBannerHeight,
    YOU_BAR_SPRING_CONFIG: callback3,
    isPressedValue: sharedValue,
    isQuestRendered: isMobileQuestDockRenderedBase,
  };
  fn.__closure = obj5;
  fn.__workletHash = 7314807713815;
  fn.__initData = __initData;
  const animatedStyle = tmp4Result13.useAnimatedStyle(fn);
  const tmp4Result14 = tmp4(8040);
  const iCYMIEnabled = tmp4Result14.useICYMIEnabled("TabsNavigator");
  const tmp4Result15 = tmp4(16345);
  const youBarCoachmark = tmp4Result15.useYouBarCoachmark({ isQuestRendered: isMobileQuestDockRenderedBase });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  const animatedRef = youBarCoachmark.animatedRef;
  const tmp4Result16 = tmp4(14542);
  const showTinyBroncoPromoSheet = tmp4Result16.useShowTinyBroncoPromoSheet({ visibleContent, markAsDismissed });
  const ref = sharedValue.useRef(markAsDismissed);
  const ref2 = sharedValue.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = sharedValue.useEffect(() => {
    ref2.current = visibleContent;
    ref.current = markAsDismissed;
  }, items1);
  const items2 = [currentUser];
  const tmp4Result17 = tmp4(504);
  const stateFromStores = tmp4Result17.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp4Result18 = tmp4(7899);
  const nameplate = tmp4Result18.useNameplate({ user: stateFromStores });
  const tmp4Result19 = tmp4(16349);
  const youBarAccessibilityLabel = tmp4Result19.useYouBarAccessibilityLabel(stateFromStores);
  currentUser = sharedValue.useRef(null);
  const tmp24 = connectionBannerHeight(sharedValue.useState(0), 2);
  let closure_11 = tmp24[1];
  const first = tmp24[0];
  padding = sharedValue.useRef(true);
  const effect1 = sharedValue.useEffect(() => {
    const obj = isMobileQuestDockRenderedBase(width[27]);
    const rootNavigationRef = obj.getRootNavigationRef();
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
          const tmp5 = !current && tmp3;
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
                const obj3 = HapticUtils;
                const result = obj3.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
                rootNavigationRef.navigate("you");
              } else {
                const obj2 = GlobalUtils;
                obj2.assertNever(ref.current);
              }
              ref.current = null;
            }
          }
        }
      }
      let result = checkYouScreenPresence();
      let closure_1 = rootNavigationRef.addListener("state", checkYouScreenPresence);
      return () => {
        closure_1();
      };
    }
  }, []);
  const items3 = [sharedValue];
  const memo1 = sharedValue.useMemo(() => {
    let obj = _mod12;
    return obj.debounce(
      () => {
        const obj = isMobileQuestDockRenderedBase(width[27]);
        const rootNavigationRef = obj.getRootNavigationRef();
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
          const tmpResult = isMobileQuestDockRenderedBase(width[28]);
          const result = tmpResult.triggerHapticFeedback(
            isMobileQuestDockRenderedBase(width[28]).HapticFeedbackTypes.SOFT,
          );
          rootNavigationRef.navigate("you");
          const result1 = sharedValue.set(false);
        }
      },
      500,
      { leading: true, trailing: false },
    );
  }, items3);
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback = sharedValue.useCallback(
    youBarBottomMargin(function* () {
      let closure_0;
      let paths;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
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
              let closure_1 = tmp4;
              tmp = undefined;
              paths = 1;
              c3 = 1;
              const obj4 = { value: tmp(paths[32])(paths[31], paths.paths), done: false };
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
            tmp = value;
            const obj5 = tmp(paths[28]);
            const result = obj5.triggerHapticFeedback(tmp(paths[28]).HapticFeedbackTypes.SOFT);
            const result1 = tmp.showYouAccountActionSheet();
            const result2 = closure_129_5.set(false);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
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
    const obj = NavigationRouteUtils;
    const coerceGuildsRouteResult = obj.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
    if (null != coerceGuildsRouteResult) {
      const tmpResult = HapticUtils;
      const result = tmpResult.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      if (guildId === ME) {
        const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
        if (null != lastSelectedGuildId) {
          const tmpResult3 = transitionToGuild;
          tmpResult3.transitionToGuild(lastSelectedGuildId);
        }
      } else {
        if (ref2.current === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK) {
          ref.current(ContentDismissActionType.TAKE_ACTION);
        }
        const tmpResult4 = transitionToGuild;
        tmpResult4.transitionToGuild(tmp5);
      }
    }
  }, []);
  const items7 = [callback3];
  const memo2 = sharedValue.useMemo(() => {
    let intl;
    let intl2;
    const obj = { name: "open-settings", label: intl.string(isMobileQuestDockRenderedBase(width[37]).t["3/IlR0"]) };
    intl = isMobileQuestDockRenderedBase(width[37]).intl;
    const items = [obj];
    const obj2 = { name: "open-dms", label: intl2.string(isMobileQuestDockRenderedBase(width[37]).t.GqXUt1) };
    intl2 = isMobileQuestDockRenderedBase(width[37]).intl;
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = sharedValue.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      const obj = openUserSettings;
      obj.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items7);
  const context = sharedValue.useContext(tmp2(16364));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const tmp4Result20 = tmp4(4618);
  hitSlop = tmp4Result20.useSharedValue(0);
  const items8 = [callback3, gesture, first];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = PanResult.simultaneousWithExternalGesture(gesture);
    const activeOffsetXResult = result.activeOffsetX(50);
    const fn = function n() {
      const result = startingTranslateX.set(translateX.get());
    };
    let obj = { startingTranslateX, translateX };
    fn.__closure = obj;
    fn.__workletHash = 13002049298724;
    fn.__initData = __initData3;
    const failOffsetXResult = activeOffsetXResult.failOffsetX(-10);
    const fn2 = function s(arg0, fail) {
      const value = startingTranslateX.get();
      if (abs(value - translateX.get()) >= 10) {
        fail.fail();
      }
    };
    fn2.__closure = { startingTranslateX, translateX };
    fn2.__workletHash = 11728992116193;
    fn2.__initData = __initData2;
    const failOffsetYResult = failOffsetXResult.failOffsetY([-40, 40]);
    const fn3 = function t(arg0, arg1) {
      const tmp = arg1;
      if (tmp) {
        const obj = isMobileQuestDockRenderedBase(width[19]);
        obj.runOnJS(callback3)();
      }
    };
    const onBeginResult = failOffsetYResult.onBegin(fn);
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleNavBetweenGuildsAndDMs: callback3 };
    fn3.__workletHash = 2931771790779;
    fn3.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, handleNavBetweenGuildsAndDMs: callback3 });
    return onTouchesMoveResult.onEnd(fn3);
  }, items8);
  const tmp36 = !isMobileQuestDockRenderedBase;
  const AVATAR_SIZE_MAP = tmp4(1188).AVATAR_SIZE_MAP;
  if (isMobileQuestDockRenderedBase) {
    tmp38 = AVATAR_SIZE_MAP[translateX];
  } else {
    tmp38 = AVATAR_SIZE_MAP[gesture];
  }
  const obj6 = { ref: animatedRef, style: items9, shouldRasterizeIOS: true, children: items10 };
  items9 = [tmp.youRow, memo, animatedStyle];
  const View = tmp2(4618).View;
  items10 = [
    closure_19(tmp2(16365), {
      hasNameplate: null != nameplate,
      isLargeAvatar: tmp36,
      barWidth: tmp10,
      isQuestRendered: isMobileQuestDockRenderedBase,
      avatarSize: tmp38,
    }),
    ,
    ,
  ];
  let tmp41Result = tmp22;
  if (tmp41Result) {
    const obj7 = { nameplate, barWidth: tmp10, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp38 };
    tmp41Result = closure_19(tmp2(16366), obj7);
  }
  items10[1] = tmp41Result;
  const obj8 = { gesture: memo3, children: closure_19(markAsDismissed, obj9) };
  obj9 = {
    style: tmp.youPressable,
    android_ripple: { color: "transparent" },
    accessibilityRole: "button",
    accessibilityLabel: youBarAccessibilityLabel,
    accessibilityHint: intl.string(tmp4(1126).t.cSgdvE),
    accessibilityActions: memo2,
    onAccessibilityAction: callback4,
    onPressIn: callback1,
    onPressOut: callback2,
    onPress: memo1,
    onLongPress: callback,
    hitSlop,
    children: closure_19(tmp2(16367), { isQuestRendered: isMobileQuestDockRenderedBase, onAvatarPress: memo1 }),
  };
  const GestureDetector = tmp4(6147).GestureDetector;
  intl = tmp4(1126).intl;
  items10[2] = closure_19(GestureDetector, obj8);
  let tmp41Result2 = null;
  const obj10 = { style: tmp.youRowRight, children: items11 };
  const tmp43 = visibleContent;
  if (iCYMIEnabled) {
    const obj11 = { hasNameplate: null != nameplate };
    tmp41Result2 = closure_19(tmp2(16372), obj11);
  }
  items11 = [tmp41Result2, closure_19(tmp2(16375), { hasNameplate: null != nameplate })];
  items10[3] = closure_20(tmp43, obj10);
  return closure_20(View, obj6);
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let gradientPreset;
        let items1;
        let tmp10;
        let tmp17;
        let tmp4;
        let tmp5;
        let tmp8;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(7);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ClientThemesBackgroundStore];
          const fn = function s() {
            return gradientPreset.gradientPreset;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const tmpResult = get_initialized;
        const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = closure_19(YouBarFloatingShadeDefault, {});
          const tmp15 = closure_19(closure_26, {});
          const tmp16 = closure_19(ConnectionBannerDefault, {});
          cResult[2] = tmp13;
          cResult[3] = tmp15;
          cResult[4] = tmp16;
          tmp10 = tmp16;
          tmp9 = tmp15;
          tmp8 = tmp13;
        } else {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
          tmp10 = cResult[4];
        }
        if (cResult[5] !== stateFromStores) {
          const obj2 = { gradient: stateFromStores, children: items1 };
          items1 = [tmp8, tmp9, tmp10];
          const tmp19 = closure_20(native.ThemeContextProvider, obj2);
          cResult[5] = stateFromStores;
          cResult[6] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[6];
        }
        return tmp17;
      }
    : () => {
        let gradientPreset;
        let items1;
        const items = [ClientThemesBackgroundStore];
        const obj = get_initialized;
        const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
        const obj2 = { gradient: stateFromStores, children: items1 };
        const ThemeContextProvider = native.ThemeContextProvider;
        items1 = [
          closure_19(YouBarFloatingShadeDefault, {}),
          closure_19(closure_26, {}),
          closure_19(ConnectionBannerDefault, {}),
        ];
        return closure_20(ThemeContextProvider, obj2);
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;
