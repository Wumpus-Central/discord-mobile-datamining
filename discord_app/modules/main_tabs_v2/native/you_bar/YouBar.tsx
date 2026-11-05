// discord_app/modules/main_tabs_v2/native/you_bar/YouBar.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import NavigationRouteUtils from "../../helpers/NavigationRouteUtils.native.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05430_LegacyBaseButton.js";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import useConjureEntryPointPlacementDefault from "../../../conjure/title_bar/native/useConjureEntryPointPlacement.tsx";
import getNavigatorCurrentRouteDefault from "../../navigator/getNavigatorCurrentRoute.tsx";
import YouBarBackgroundDefault from "YouBarBackground.tsx";
import YouBarUserDefault from "YouBarUser.tsx";
import YouBarNotificationsButtonDefault from "YouBarNotificationsButton.tsx";
import YouBarFloatingShadeDefault from "YouBarFloatingShade.tsx";
import ConnectionBannerDefault from "../ConnectionBanner.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: closure_6 } = get_ActivityIndicator);
const YouBarConstants = fn(17348);
({
  YOU_BAR_HEIGHT: closure_10,
  YOU_BAR_PADDING: closure_11,
  YOU_BAR_SPRING_CONFIG: closure_12,
  YOU_BAR_AVATAR_LARGE_SIZE: map1,
  YOU_BAR_AVATAR_SIZE: closure_14,
  YOU_BAR_BUTTON_HIT_SLOP: closure_15,
} = YouBarConstants);
const ME = fn(1072).ME;
const ContentDismissActionType = fn(4989).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5143);
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
let closure_21 = {
  code: "(function YouBarTsx1(){let[withSpring,barMarginBottom,connectionBannerHeight,marginSpringConfig,isPressedValue,isCondensed,YOU_BAR_SPRING_CONFIG]=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,marginSpringConfig),transform:[{scale:withSpring(isPressedValue.get()&&!isCondensed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};})",
};
let closure_22 = {
  code: "(function YouBarTsx2(){let[startingTranslateX,translateX]=this.__closure;startingTranslateX.set(translateX.get());})",
};
let closure_23 = {
  code: "(function YouBarTsx3(_,manager){let[startingTranslateX,translateX]=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}})",
};
let closure_24 = {
  code: "(function YouBarTsx4(_,success){let[scheduleOnRN,handleNavBetweenGuildsAndDMs]=this.__closure;if(!success)return;scheduleOnRN(handleNavBetweenGuildsAndDMs);})",
};
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
  if (isMobileRTCV2Enabled) {
    let DOCK_SPACE_SPRING_CONFIG = tmp2(11445).DOCK_SPACE_SPRING_CONFIG;
  } else {
    DOCK_SPACE_SPRING_CONFIG = closure_12;
  }
  let obj3 = require("MobileRTCV2Experiment");
  const drawerWidth = require("useDrawerWidth").useDrawerWidth({ whileSliding: "wider" });
  const tmp2Result = require("useDrawerWidth");
  const youBarHorizontalMargin = require("useYouBarMargins").useYouBarHorizontalMargin();
  _require = youBarHorizontalMargin;
  const diff = drawerWidth - 2 * youBarHorizontalMargin;
  const tmp2Result13 = require("useYouBarMargins");
  const youBarBottomMargin = require("useYouBarMargins").useYouBarBottomMargin();
  const tmp2Result14 = require("useYouBarMargins");
  items = [diff, youBarHorizontalMargin];
  const connectionBannerHeight = require("useConnectionBannerHeight").useConnectionBannerHeight();
  const memo = markAsDismissed.useMemo(() => {
    const size = { marginHorizontal, height, padding, width };
    return size;
  }, items);
  const tmp2Result15 = require("useConnectionBannerHeight");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const tmp2Result16 = require("../../../../../_runtime/metro/01652__.js");
  let items1 = [
    closure_21,
    require("spring/spring").withSpring,
    youBarBottomMargin,
    connectionBannerHeight,
    DOCK_SPACE_SPRING_CONFIG,
    sharedValue,
    null != str,
    closure_12,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  let visibleContent;
  markAsDismissed = undefined;
  let ref;
  let ref2;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items1;
  class YouBarTsx1 {
    constructor() {
      obj = { marginBottom: closure_0(closure_1 + closure_2, visibleContent), transform: null };
      tmp = closure_0;
      num = 1;
      if (markAsDismissed.get()) {
        tmp2 = closure_5;
        num = 1;
        if (!closure_5) {
          num = 0.98;
        }
      }
      obj1 = { scale: tmp(num, closure_6) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  let items2 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
  YouBarTsx1.__closure = items2;
  YouBarTsx1.__workletHash = 9061810726804;
  YouBarTsx1.__initData = tmp17;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(YouBarTsx1);
  const tmp2Result17 = require("../../../../../_runtime/metro/01652__.js");
  const iCYMIEnabled = require("ICYMIExperiment").useICYMIEnabled("TabsNavigator");
  const tmp27 = useConjureEntryPointPlacementDefault("YouBar");
  const tmp2Result18 = require("ICYMIExperiment");
  const youBarCoachmark = require("useYouBarCoachmark").useYouBarCoachmark({ isCondensed: tmp9 });
  visibleContent = youBarCoachmark.visibleContent;
  markAsDismissed = youBarCoachmark.markAsDismissed;
  const tmp2Result19 = require("useYouBarCoachmark");
  const showAgeNoticePromoSheet = require("AgeNoticeLazy").useShowAgeNoticePromoSheet({
    visibleContent,
    markAsDismissed,
  });
  ref = obj8.useRef(markAsDismissed);
  ref2 = obj8.useRef(visibleContent);
  let items3 = [markAsDismissed, visibleContent];
  const effect = obj8.useEffect(() => {
    closure_6.current = visibleContent;
    closure_5.current = markAsDismissed;
  }, items3);
  const tmp2Result20 = require("AgeNoticeLazy");
  let items4 = [gesture];
  const stateFromStores = require("initialize").useStateFromStores(items4, () => gesture.getCurrentUser());
  const tmp2Result21 = require("initialize");
  const nameplate = require("useNameplate").useNameplate({ user: stateFromStores });
  const tmp2Result22 = require("useNameplate");
  const youBarAccessibilityLabel = require("useYouBarAccessibilityLabel").useYouBarAccessibilityLabel(stateFromStores);
  closure_7 = obj8.useRef(null);
  const effect1 = obj8.useEffect(() => {
    const rootNavigationRef = marginHorizontal(_undefined[28]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      function checkYouScreenPresence() {
        if (null != rootNavigationRef) {
          state = rootNavigationRef.getState();
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
    const obj = marginHorizontal(_undefined[28]);
  }, []);
  let items5 = [sharedValue];
  const memo1 = obj8.useMemo(
    () =>
      _mod12.debounce(
        () => {
          const rootNavigationRef = c0(dependencyMap[28]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            state = rootNavigationRef.getState();
            let someResult;
            if (state != null) {
              const routes = state.routes;
              if (routes != null) {
                someResult = routes.some((name) => "you" === name.name);
              }
            }
            if (someResult) {
              closure_1_7.current = "press";
            }
          }
          if (null != rootNavigationRef) {
            const result = c0(dependencyMap[29]).triggerHapticFeedback(c0(dependencyMap[29]).HapticFeedbackTypes.SOFT);
            rootNavigationRef.navigate("you");
            const result1 = _undefined.set(false);
            const tmpResult = c0(dependencyMap[29]);
          }
          const obj = c0(dependencyMap[28]);
        },
        500,
        { leading: true, trailing: false },
      ),
    items5,
  );
  const items6 = [sharedValue];
  const items7 = [sharedValue];
  const callback = obj8.useCallback(
    visibleContent(function* () {
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
            const result2 = closure_129_2.set(false);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    }),
    items6,
  );
  const items8 = [sharedValue];
  const callback1 = obj8.useCallback(() => {
    const result = _undefined.set(true);
  }, items7);
  const callback2 = obj8.useCallback(() => {
    const result = _undefined.set(false);
  }, items8);
  const callback3 = obj8.useCallback(() => {
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
  const items9 = [callback3];
  const memo2 = obj8.useMemo(() => {
    const obj = { name: "open-settings", label: null };
    const intl = marginHorizontal(_undefined[38]).intl;
    obj.label = intl.string(marginHorizontal(_undefined[38]).t["3/IlR0"]);
    items = [obj];
    const obj2 = { name: "open-dms", label: null };
    const intl2 = marginHorizontal(_undefined[38]).intl;
    obj2.label = intl2.string(marginHorizontal(_undefined[38]).t.GqXUt1);
    items[1] = obj2;
    return items;
  }, []);
  const callback4 = obj8.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("open-settings" === actionName) {
      openUserSettings.openUserSettings();
    } else if ("open-dms" === actionName) {
      callback3();
    }
  }, items9);
  const context = obj8.useContext(tmp7(11439));
  gesture = context.gesture;
  const translateX = context.translateX;
  const tmp2Result23 = require("useYouBarAccessibilityLabel");
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const items10 = [callback3, gesture, sharedValue1, translateX];
  const memo3 = obj8.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    let result = Gesture.Pan().simultaneousWithExternalGesture(gesture);
    const PanResult = Gesture.Pan();
    const activeOffsetXResult = result.activeOffsetX(50);
    const failOffsetXResult = result.activeOffsetX(50).failOffsetX(-10);
    items = [closure_22, sharedValue1, translateX];
    c0 = undefined;
    c1 = undefined;
    [tmp5, tmp6, tmp7] = items;
    class YouBarTsx2 {
      constructor() {
        result = closure_0.set(closure_1.get());
        return;
      }
    }
    const items1 = [tmp6, tmp7];
    YouBarTsx2.__closure = items1;
    YouBarTsx2.__workletHash = 16283529753051;
    YouBarTsx2.__initData = tmp5;
    const failOffsetYResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]);
    const items2 = [closure_23, sharedValue1, translateX];
    c0 = undefined;
    c1 = undefined;
    [tmp8, tmp9, tmp10] = items2;
    class YouBarTsx3 {
      constructor(arg0, arg1) {
        value = closure_0.get();
        if (Math.abs(value - closure_1.get()) >= 10) {
          tmp2 = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items3 = [tmp9, tmp10];
    YouBarTsx3.__closure = items3;
    YouBarTsx3.__workletHash = 12226847969400;
    YouBarTsx3.__initData = tmp8;
    const onBeginResult = result.activeOffsetX(50).failOffsetX(-10).failOffsetY([-40, 40]).onBegin(YouBarTsx2);
    const items4 = [closure_24, _mod1705.scheduleOnRN, callback3];
    c0 = undefined;
    c1 = undefined;
    [tmp11, tmp12, tmp13] = items4;
    class YouBarTsx4 {
      constructor(arg0, arg1) {
        if (arg1) {
          tmp = closure_0;
          tmp2 = closure_1;
          tmp3 = closure_0(closure_1);
        }
        return;
      }
    }
    const items5 = [tmp12, tmp13];
    YouBarTsx4.__closure = items5;
    YouBarTsx4.__workletHash = 14643495293573;
    YouBarTsx4.__initData = tmp11;
    return result
      .activeOffsetX(50)
      .failOffsetX(-10)
      .failOffsetY([-40, 40])
      .onBegin(YouBarTsx2)
      .onTouchesMove(YouBarTsx3)
      .onEnd(YouBarTsx4);
  }, items10);
  const AVATAR_SIZE_MAP = tmp2(1187).AVATAR_SIZE_MAP;
  if (null != str) {
    let tmp47 = AVATAR_SIZE_MAP[closure_14];
  } else {
    tmp47 = AVATAR_SIZE_MAP[closure_13];
  }
  let obj4 = { ref: youBarCoachmark.animatedRef, style: null, shouldRasterizeIOS: true, children: null };
  const items11 = [tmp.youRow, memo, animatedStyle];
  obj4.style = items11;
  const items12 = [
    closure_18(YouBarBackgroundDefault, {
      hasNameplate: null != nameplate,
      barWidth: diff,
      condensedReason: str,
      avatarSize: tmp47,
    }),
    ,
    ,
  ];
  let tmp50Result = tmp33;
  if (null != nameplate) {
    const obj5 = { nameplate, barWidth: diff, isQuestRendered: isMobileQuestDockRenderedBase, avatarSize: tmp47 };
    tmp50Result = closure_18(tmp7(18757), obj5);
  }
  items12[1] = tmp50Result;
  const obj6 = { gesture: memo3, children: null };
  const obj7 = {
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
  let intl = tmp2(1113).intl;
  obj7.accessibilityHint = intl.string(require("util").t.cSgdvE);
  obj7.accessibilityActions = memo2;
  obj7.onAccessibilityAction = callback4;
  obj7.onPressIn = callback1;
  obj7.onPressOut = callback2;
  obj7.onPress = memo1;
  obj7.onLongPress = callback;
  obj7.hitSlop = hitSlop;
  obj7.children = closure_18(YouBarUserDefault, { isCondensed: null != str, onAvatarPress: memo1 });
  obj6.children = closure_18(ref2, obj7);
  items12[2] = closure_18(require("LegacyBaseButton").GestureDetector, obj6);
  const obj9 = { style: tmp.youRowRight, children: null };
  let placement;
  if (tmp27 != null) {
    placement = tmp27.placement;
  }
  if ("you_bar" === placement) {
    const obj10 = { hasNameplate: tmp33, canUnpin: tmp27.canPin };
    let tmp50Result2 = closure_18(tmp7(18763), obj10);
  } else {
    tmp50Result2 = null;
    if (iCYMIEnabled) {
      const obj11 = { hasNameplate: tmp33 };
      tmp50Result2 = closure_18(tmp7(18765), obj11);
    }
  }
  const items13 = [tmp50Result2, closure_18(YouBarNotificationsButtonDefault, { hasNameplate: null != nameplate })];
  obj9.children = items13;
  items12[3] = closure_19(ref, obj9);
  obj4.children = items12;
  return closure_19(_modDef1652.View, obj4);
});
let obj3 = {
  flex: 1,
  marginRight: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBar.tsx");

export default noop.memo(function YouBarThemed() {
  items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj2 = { gradient: stateFromStores, children: null };
  const items1 = [
    collapsedCategories(YouBarFloatingShadeDefault, {}),
    collapsedCategories(closure_25, {}),
    collapsedCategories(ConnectionBannerDefault, {}),
  ];
  obj2.children = items1;
  return expandedHeight(native.ThemeContextProvider, obj2);
});
