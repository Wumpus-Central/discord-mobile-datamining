// discord_app/modules/main_tabs_v2/native/you_bar/YouBar.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import _modDef16395 from "YouBarFloatingShade.tsx";
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
({
  YOU_BAR_HEIGHT: unpackModuleId,
  YOU_BAR_PADDING: closure_12,
  YOU_BAR_SPRING_CONFIG: map1,
  YOU_BAR_AVATAR_LARGE_SIZE: closure_14,
  YOU_BAR_AVATAR_SIZE: closure_15,
  YOU_BAR_BUTTON_HIT_SLOP: closure_16,
} = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let obj = { youRow: null, youRowRight: null, youPressable: null };
obj = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "transparent",
};
const merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
obj[0] = obj;
obj[1] = { flexDirection: "row", gap: 8 };
createCacheKey = {
  flex: 1,
  marginRight: ThemesDefault.space.PX_12,
  borderRadius: ThemesDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
};
obj[2] = createCacheKey;
let closure_21 = createCacheKey.createStyles(obj);
let closure_22 = {
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
let closure_26 = importAllResult.memo(() => {
  let tmp = callback3();
  let obj = isMobileQuestDockRenderedBase(15091);
  const mobileQuestDock = obj.useMobileQuestDock();
  obj1 = isMobileQuestDockRenderedBase(15091);
  isMobileQuestDockRenderedBase = obj1.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = isMobileQuestDockRenderedBase(11528);
  const drawerWidth = obj2.useDrawerWidth();
  let obj3 = isMobileQuestDockRenderedBase(15097);
  const youBarHorizontalMargin = obj3.useYouBarHorizontalMargin();
  let result = 2 * youBarHorizontalMargin;
  const tmp10 = youBarHorizontalMargin(4420)().isChatBesideChannelList
    ? drawerWidth - result
    : youBarHorizontalMargin(1477)().width - result;
  dependencyMap = tmp10;
  let tmp4Result = tmp4(15097);
  const youBarBottomMargin = tmp4Result.useYouBarBottomMargin();
  tmp4Result = tmp4(15101);
  const connectionBannerHeight = tmp4Result.useConnectionBannerHeight();
  let items = [tmp10, youBarHorizontalMargin];
  const memo = sharedValue.useMemo(
    () => ({ marginHorizontal: youBarHorizontalMargin, height: closure_11, padding: closure_12, width: closure_2 }),
    items,
  );
  sharedValue = isMobileQuestDockRenderedBase(4296).useSharedValue(false);
  const tmp4Result1 = isMobileQuestDockRenderedBase(4296);
  let fn = function r() {
    let obj = {
      marginBottom: isMobileQuestDockRenderedBase(4974).withSpring(
        youBarBottomMargin + connectionBannerHeight,
        callback3,
      ),
      transform: null,
    };
    const obj2 = isMobileQuestDockRenderedBase(4974);
    const tmp = callback3;
    let num = 1;
    if (sharedValue.get()) {
      num = 1;
      if (!isMobileQuestDockRenderedBase) {
        num = 0.98;
      }
    }
    obj = { scale: isMobileQuestDockRenderedBase(4974).withSpring(num, tmp) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = {
    withSpring: tmp4(4974).withSpring,
    barMarginBottom: youBarBottomMargin,
    connectionBannerHeight,
    YOU_BAR_SPRING_CONFIG: callback3,
    isPressedValue: sharedValue,
    isQuestRendered: isMobileQuestDockRenderedBase,
  };
  fn.__closure = obj;
  fn.__workletHash = 7314807713815;
  fn.__initData = closure_22;
  const animatedStyle = isMobileQuestDockRenderedBase(4296).useAnimatedStyle(fn);
  const tmp4Result2 = isMobileQuestDockRenderedBase(4296);
  const iCYMIEnabled = isMobileQuestDockRenderedBase(8352).useICYMIEnabled("TabsNavigator");
  const tmp4Result3 = isMobileQuestDockRenderedBase(8352);
  const youBarCoachmark = isMobileQuestDockRenderedBase(16363).useYouBarCoachmark({
    isQuestRendered: isMobileQuestDockRenderedBase,
  });
  const visibleContent = youBarCoachmark.visibleContent;
  const markAsDismissed = youBarCoachmark.markAsDismissed;
  const tmp4Result4 = isMobileQuestDockRenderedBase(16363);
  const showTinyBroncoPromoSheet = isMobileQuestDockRenderedBase(16364).useShowTinyBroncoPromoSheet({
    visibleContent,
    markAsDismissed,
  });
  closure_8 = sharedValue.useRef(markAsDismissed);
  closure_9 = sharedValue.useRef(visibleContent);
  const items1 = [markAsDismissed, visibleContent];
  const effect = sharedValue.useEffect(() => {
    closure_9.current = visibleContent;
    closure_8.current = markAsDismissed;
  }, items1);
  const tmp4Result5 = isMobileQuestDockRenderedBase(16364);
  const items2 = [closure_10];
  const stateFromStores = isMobileQuestDockRenderedBase(504).useStateFromStores(items2, () =>
    currentUser.getCurrentUser(),
  );
  const tmp4Result6 = isMobileQuestDockRenderedBase(504);
  const nameplate = isMobileQuestDockRenderedBase(8218).useNameplate({ user: stateFromStores });
  const tmp4Result7 = isMobileQuestDockRenderedBase(8218);
  const youBarAccessibilityLabel = isMobileQuestDockRenderedBase(16366).useYouBarAccessibilityLabel(stateFromStores);
  closure_10 = sharedValue.useRef(null);
  const tmp24 = connectionBannerHeight(sharedValue.useState(0), 2);
  closure_11 = tmp24[1];
  closure_12 = sharedValue.useRef(true);
  const effect1 = sharedValue.useEffect(() => {
    const rootNavigationRef = isMobileQuestDockRenderedBase(4418).getRootNavigationRef();
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
                const result = isMobileQuestDockRenderedBase(4528).triggerHapticFeedback(
                  isMobileQuestDockRenderedBase(4528).HapticFeedbackTypes.SOFT,
                );
                obj.navigate("you");
                const obj3 = isMobileQuestDockRenderedBase(4528);
              } else {
                isMobileQuestDockRenderedBase(1369).assertNever(tmp9.current);
                const obj2 = isMobileQuestDockRenderedBase(1369);
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
    const obj = isMobileQuestDockRenderedBase(4418);
  }, []);
  const items3 = [sharedValue];
  const memo1 = sharedValue.useMemo(
    () =>
      isMobileQuestDockRenderedBase(12).debounce(
        () => {
          const rootNavigationRef = closure_1_0(closure_1_2[27]).getRootNavigationRef();
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
            const result = tmp(tmp2[28]).triggerHapticFeedback(tmp(tmp2[28]).HapticFeedbackTypes.SOFT);
            rootNavigationRef.navigate("you");
            const result1 = closure_5.set(false);
            const tmpResult = tmp(tmp2[28]);
          }
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
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_0 = undefined;
              paths = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(paths[32])(paths[31], paths.paths);
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
            const result = closure_1_0(paths[28]).triggerHapticFeedback(
              closure_1_0(paths[28]).HapticFeedbackTypes.SOFT,
            );
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
    const coerceGuildsRouteResult = isMobileQuestDockRenderedBase(4417).coerceGuildsRoute(
      youBarHorizontalMargin(11218)(),
    );
    if (null != coerceGuildsRouteResult) {
      let tmpResult = tmp(4528);
      const result = tmpResult.triggerHapticFeedback(tmp(4528).HapticFeedbackTypes.SOFT);
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      if (guildId === closure_1_17) {
        const lastSelectedGuildId = ref2.getLastSelectedGuildId();
        if (null != lastSelectedGuildId) {
          tmpResult = tmp(7342);
          tmpResult.transitionToGuild(lastSelectedGuildId);
        }
      } else {
        if (ref2.current === tmp(1943).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK) {
          ref.current(closure_1_18.TAKE_ACTION);
        }
        tmp(7342).transitionToGuild(tmp5);
        const tmpResult1 = tmp(7342);
      }
    }
  }, []);
  const items7 = [callback3];
  const memo2 = sharedValue.useMemo(() => {
    let obj = { name: "open-settings", label: null };
    const intl = isMobileQuestDockRenderedBase(1114).intl;
    obj[1] = intl.string(isMobileQuestDockRenderedBase(1114).t["3/IlR0"]);
    const items = [obj];
    obj = { name: "open-dms", label: null };
    const intl2 = isMobileQuestDockRenderedBase(1114).intl;
    obj[1] = intl2.string(isMobileQuestDockRenderedBase(1114).t.GqXUt1);
    items[1] = obj;
    return items;
  }, []);
  const callback4 = sharedValue.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      isMobileQuestDockRenderedBase(7382).openUserSettings();
      const obj = isMobileQuestDockRenderedBase(7382);
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items7);
  const context = sharedValue.useContext(tmp2(16010));
  const gesture = context.gesture;
  const translateX = context.translateX;
  const tmp4Result8 = isMobileQuestDockRenderedBase(16366);
  closure_16 = isMobileQuestDockRenderedBase(4296).useSharedValue(0);
  const items8 = [callback3, gesture, tmp24[0]];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = isMobileQuestDockRenderedBase(6655).Gesture;
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
    obj = { runOnJS: isMobileQuestDockRenderedBase(4296).runOnJS, handleNavBetweenGuildsAndDMs: callback3 };
    fn3.__closure = obj;
    fn3.__workletHash = 2931771790779;
    fn3.__initData = closure_1_23;
    return result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(fn).onTouchesMove(fn2).onEnd(fn3);
  }, items8);
  const AVATAR_SIZE_MAP = tmp4(1178).AVATAR_SIZE_MAP;
  if (isMobileQuestDockRenderedBase) {
    let tmp37 = AVATAR_SIZE_MAP[translateX];
  } else {
    tmp37 = AVATAR_SIZE_MAP[gesture];
  }
  obj = { ref: youBarCoachmark.animatedRef, style: items9, shouldRasterizeIOS: true, children: null };
  items9 = [tmp.youRow, memo, animatedStyle];
  const items10 = [
    callback(youBarHorizontalMargin(16383), {
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
    obj1 = { nameplate: null, barWidth: null, isQuestRendered: null, avatarSize: null };
    obj1[0] = nameplate;
    obj1[1] = tmp10;
    obj1[2] = isMobileQuestDockRenderedBase;
    obj1[3] = tmp37;
    tmp40Result = tmp40(tmp2(16384), obj1);
  }
  items10[1] = tmp40Result;
  obj2 = { gesture: memo3, children: null };
  obj3 = {
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
  let intl = tmp4(1114).intl;
  obj3[4] = intl.string(isMobileQuestDockRenderedBase(1114).t.cSgdvE);
  obj3[5] = memo2;
  obj3[6] = callback4;
  obj3[7] = callback1;
  obj3[8] = callback2;
  obj3[9] = memo1;
  obj3[10] = callback;
  obj3[11] = closure_16;
  obj3[12] = callback(youBarHorizontalMargin(16385), {
    isQuestRendered: isMobileQuestDockRenderedBase,
    onAvatarPress: memo1,
  });
  obj2[1] = callback(markAsDismissed, obj3);
  items10[2] = callback(isMobileQuestDockRenderedBase(6655).GestureDetector, obj2);
  const obj4 = { style: tmp.youRowRight, children: null };
  tmp40Result = null;
  if (iCYMIEnabled) {
    const obj5 = { hasNameplate: null };
    obj5[0] = tmp22;
    tmp40Result = tmp40(tmp2(16390), obj5);
  }
  const items11 = [tmp40Result, callback(youBarHorizontalMargin(16393), { hasNameplate: null != nameplate })];
  obj4[1] = items11;
  items10[3] = closure_20(visibleContent, obj4);
  obj[3] = items10;
  return closure_20(youBarHorizontalMargin(4296).View, obj);
});
const memoResult = importAllResult.memo(function YouBarThemed() {
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  obj = { gradient: stateFromStores, children: null };
  const items1 = [callback(_modDef16395, {}), callback(closure_26, {}), callback(ConnectionBannerIconDefault, {})];
  obj[1] = items1;
  return callback2(ManaContext.ThemeContextProvider, obj);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default memoResult;
