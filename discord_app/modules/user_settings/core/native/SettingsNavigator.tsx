// === Module 16718: SettingHeaderBadge ===

// Module 16718 (SettingHeaderBadge)
import ThemesDefault from "Themes" /* 709 */;
import Text from "Text" /* 4474 */;
import SettingsBadgeType from "SettingsBadgeType" /* 15233 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "_getSystemLocale" /* 1995 */;
import closure_7 from "zustandStore" /* 14565 */;
import ME from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 7831 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function SettingHeaderBadge(badge) {
  if (badge.badge.badgeType === SettingsBadgeType.SettingsBadgeType.BETA) {
    const obj = { size: null };
    obj[0] = tmp(1296).BetaSizes.SMALL;
    return callback(tmp(1296).BetaTag, obj);
  }
}
function LeftAlignedHeaderTitle(children) {
  const usePersistentBadge = children.usePersistentBadge;
  const tmp = callback3();
  let persistentBadge;
  if (usePersistentBadge != null) {
    persistentBadge = usePersistentBadge();
  }
  const tmp5 = callback(Text.Heading, { lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null != persistentBadge ? tmp.headerTitleWithBadge : tmp.headerContainer, children: children.title });
  let tmp6 = tmp5;
  if (null != persistentBadge) {
    let obj = { style: null, children: null };
    obj[0] = tmp.headerContainerRow;
    const items = [tmp5, ];
    obj = { badge: null };
    obj[0] = persistentBadge;
    items[1] = callback(SettingHeaderBadge, obj);
    obj[1] = items;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
}
let c4 = importAllResult;
({ AnalyticsPages: closure_8, UserSettingsSections: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createNativeStackNavigator.createNativeStackNavigator();
let obj = { statusBarSpacer: null, headerContainer: null, headerContainerRow: null, headerTitleWithBadge: null, backIcon: null };
obj = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[0] = obj;
createNativeStackNavigator = { width: "100%", paddingHorizontal: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
obj[1] = createNativeStackNavigator;
createCacheKey = { flexDirection: "row", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8, width: "100%" };
obj[2] = createCacheKey;
obj[3] = { flexShrink: 1 };
obj[4] = { borderRadius: ThemesDefault.radii.round, marginTop: ThemesDefault.space.PX_8 };
let closure_13 = createCacheKey.createStyles(obj);
const obj3 = { borderRadius: ThemesDefault.radii.round, marginTop: ThemesDefault.space.PX_8 };
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  const _require = tmp;
  let obj = _require(params[13]);
  const route = obj.useRoute();
  params = route.params;
  let screen;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants.OVERVIEW;
  }
  const params2 = route.params;
  params = undefined;
  if (params2 != null) {
    params = params2.params;
  }
  const params3 = route.params;
  let onClose;
  if (params3 != null) {
    onClose = params3.onClose;
  }
  let tmp2Result = tmp2(tmp3[13]);
  importAllResult = tmp2Result.useNavigation();
  tmp2Result = tmp2(tmp3[14]);
  const commonTriggerPoint = tmp2Result.useCommonTriggerPoint(tmp2(tmp3[15]).OpenUserSettingsTriggerPoint);
  const items = [screen];
  const effect = importAllResult.useEffect(() => {
    obj = callback(params[16]);
    obj = { destinationPane: screen, source: obj };
    obj = { page: constants.USER_SETTINGS };
    const result = obj.trackUserSettingsPaneViewed(obj);
  }, items);
  const items1 = [onClose];
  const effect1 = importAllResult.useEffect(() => () => {
    if (closure_3 != null) {
      tmp();
    }
  }, items1);
  const items2 = [obj];
  const stateFromStores = _require(params[17]).useStateFromStores(items2, () => obj.locale);
  closure_5 = onClose(importAllResult.useState(false), 2)[1];
  const items3 = [stateFromStores];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    callback2((arg0) => !arg0);
  }, items3);
  const tmp2Result1 = _require(params[17]);
  const memo = importAllResult.useMemo(() => callback(params[20]).getSettingScreens(), []);
  const layoutEffect1 = importAllResult.useLayoutEffect(() => callback(params[21]).trackAppUIViewed(), []);
  const effect2 = importAllResult.useEffect(() => screen(params[22]).validate(), []);
  const tmp14 = screen(params[18]);
  const accessibilityNativeStackOptions = _require(params[23]).useAccessibilityNativeStackOptions();
  const tmp2Result2 = _require(params[23]);
  const accessibilityNativeStackFocusTracking = _require(params[24]).useAccessibilityNativeStackFocusTracking();
  obj = { backgroundColor: null, borderTopWidth: 1, borderTopColor: null };
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  const tmp2Result3 = _require(params[24]);
  obj[0] = _require(params[25]).useToken(screen(params[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmp2Result4 = _require(params[25]);
  obj[2] = _require(params[25]).useToken(screen(params[9]).colors.BORDER_SUBTLE);
  const items4 = [tmp.backIcon];
  closure_7 = importAllResult.useCallback((arg0) => {
    closure_0 = arg0;
    return () => {
      obj = { collapsable: false, children: null };
      obj = {
        onPress() {
          return navigation.goBack();
        },
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: null,
        hitSlop: null,
        children: null
      };
      const intl = lib(params[27]).intl;
      obj[3] = intl.string(lib(params[27]).t["13/7kX"]);
      obj[4] = lib(params[28]).BACK_ICON_WITH_BADGE_HIT_SLOP;
      obj = { style: lib.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_2_10(lib(params[28]).SettingsLeftIconWithBadge, obj1) };
      obj[5] = closure_2_10(closure_5, obj);
      obj[1] = closure_2_10(lib(params[26]).PressableOpacity, obj);
      return closure_2_10(closure_5, obj);
    };
  }, items4);
  const memo1 = importAllResult.useMemo(() => ({
    transitionEnd(data) {
      let isActive = data.data.closing;
      state = state.getState();
      if (isActive) {
        isActive = state.isActive;
      }
      if (isActive) {
        isActive = "" === state.query;
      }
      if (isActive) {
        state.setState({ isActive: false });
      }
    }
  }), []);
  closure_8 = importAllResult.useMemo(() => ({
    transitionEnd(data) {
      let closing = data.data.closing;
      if (closing) {
        closing = null != store.getField("selected");
      }
      if (closing) {
        store.setState({ selected: null });
      }
    }
  }), []);
  const tmp2Result5 = _require(params[25]);
  const autoSettingsSearchSessionAnalytics = _require(params[29]).useAutoSettingsSearchSessionAnalytics();
  obj = { value: tmp14(screen(tmp3[19]).USER_SETTINGS).analyticsLocations, children: null };
  const items5 = [callback(screen(params[30]), {}), ];
  obj1 = {
    style: tmp.statusBarSpacer,
    accessible: false,
    onAccessibilityEscape() {
      if (closure_4.canGoBack()) {
        closure_4.goBack();
      }
    },
    children: null
  };
  const obj2 = { id: "settings-navigator", screenOptions: null, screenListeners: null, initialRouteName: null, children: null };
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj2[1] = {
    fullScreenGestureEnabled: true,
    headerTitle(children) {
      return callback4(closure_15, { title: children.children });
    },
    headerTitleAlign: "center",
    unstable_headerInsets: { left: false, right: false }
  };
  obj2[2] = { beforeRemove, transitionStart };
  obj2[3] = screen;
  const items6 = [
    callback(closure_12.Screen, {
      name: constants.OVERVIEW,
      options(navigation) {
        obj = { title: null, headerLeft: null, headerBackVisible: false, headerShadowVisible: false, contentStyle: null };
        const intl = callback(params[27]).intl;
        obj[0] = intl.string(callback(params[27]).t["3D5yo/"]);
        obj[1] = callback3(navigation.navigation);
        obj[4] = obj;
        return obj;
      },
      listeners: memo1,
      getComponent() {
        return callback(params[31]).default;
      }
    }),
    memo.map((arg0) => {
      [tmp, tmp2] = arg0;
      obj = {
        name: tmp2.route,
        options(navigation) {
          obj = { title: callback(params[20]).getSettingTitle(callback), headerLeft: closure_1_7(navigation.navigation), headerBackVisible: false, contentStyle: closure_1_6, headerShadowVisible: null };
          const navigationOptions = component.navigationOptions;
          let flag;
          if (navigationOptions != null) {
            flag = navigationOptions.headerShadowVisible;
          }
          if (flag == null) {
            flag = true;
          }
          obj[4] = flag;
          if (null != component.usePersistentBadge) {
            obj = { headerTitle: null };
            obj[0] = function headerTitle(children) {
              return closure_2_10(closure_2_15, { title: children.children, usePersistentBadge: usePersistentBadge.usePersistentBadge });
            };
          } else {
            obj = {};
          }
          const merged = Object.assign(obj);
          return obj;
        },
        getComponent() {
          component = component.getComponent();
          screen(params[32])(null != component, "[Settings Navigator] Invalid component for setting: " + closure_0);
          return component;
        },
        initialParams: null,
        listeners: null
      };
      let tmp4;
      if (screen === tmp2.route) {
        tmp4 = params;
      }
      obj[3] = tmp4;
      obj[4] = closure_8;
      return closure_1_10(closure_1_12.Screen, obj, tmp);
    })
  ];
  obj2[4] = items6;
  obj1[3] = callback2(closure_12.Navigator, obj2);
  items5[1] = callback(closure_5, obj1);
  obj[1] = items5;
  return callback2(_require(params[18]).AnalyticsLocationProvider, obj);
});
let result = require("set").fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default memoResult;