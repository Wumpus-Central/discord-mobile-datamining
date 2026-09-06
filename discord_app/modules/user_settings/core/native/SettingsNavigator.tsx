// === Module 16903: SettingsNavigator ===

// Module 16903 (SettingsNavigator)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import SettingRendererUtils from "SettingRendererUtils" /* 14693 */;
import SettingRendererTypes from "SettingRendererTypes" /* 15406 */;
import BackIconWithBadge from "BackIconWithBadge" /* 16403 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14691 */;

require = fn;
function SettingHeaderBadge(badge) {
  if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
    const obj = { size: native.BetaSizes.SMALL };
    return closure_1_10(native.BetaTag, obj);
  }
}
function LeftAlignedHeaderTitle(children) {
  const usePersistentBadge = children.usePersistentBadge;
  const tmp = closure_13();
  let persistentBadge;
  if (usePersistentBadge != null) {
    persistentBadge = usePersistentBadge();
  }
  const tmp5 = closure_1_10(Text_Text.Heading, { lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null != persistentBadge ? tmp.headerTitleWithBadge : tmp.headerContainer, children: children.title });
  let tmp6 = tmp5;
  if (null != persistentBadge) {
    let obj = { style: tmp.headerContainerRow, children: null };
    const items = [tmp5, ];
    obj = { badge: persistentBadge };
    items[1] = closure_1_10(SettingHeaderBadge, obj);
    obj.children = items;
    tmp6 = closure_1_11(View, obj);
  }
  return tmp6;
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let NativeStackNavigator = fn(7913);
let closure_12 = NativeStackNavigator.createNativeStackNavigator();
fn(4560);
let obj = { statusBarSpacer: null, headerContainer: null, headerContainerRow: null, headerTitleWithBadge: null, backIcon: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.statusBarSpacer = obj;
NativeStackNavigator = { width: "100%", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj.headerContainer = NativeStackNavigator;
const createStyles = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, width: "100%" };
obj.headerContainerRow = createStyles;
obj.headerTitleWithBadge = { flexShrink: 1 };
obj.backIcon = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj);
const obj3 = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default noop.memo(() => {
  const tmp = closure_13();
  _require = tmp;
  let obj = require("Link");
  const route = obj.useRoute();
  params = route.params;
  let screen;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants2.OVERVIEW;
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
  noop = tmp2Result.useNavigation();
  tmp2Result = tmp2(tmp3[14]);
  const commonTriggerPoint = tmp2Result.useCommonTriggerPoint(tmp2(tmp3[15]).OpenUserSettingsTriggerPoint);
  const items = [screen];
  const effect = noop.useEffect(() => {
    let source = { destinationPane: screen, source: null };
    source = { page: constants.USER_SETTINGS };
    source.source = source;
    const result = source.trackUserSettingsPaneViewed(source);
  }, items);
  const items1 = [onClose];
  const effect1 = noop.useEffect(() => () => {
    if (onClose != null) {
      tmp();
    }
  }, items1);
  const items2 = [obj];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items2, () => obj.locale);
  closure_5 = onClose(noop.useState(false), 2)[1];
  const items3 = [stateFromStores];
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_5((arg0) => !arg0);
  }, items3);
  const tmp2Result1 = require("useStateFromStores");
  const memo = noop.useMemo(() => closure_0(params[20]).getSettingScreens(), []);
  const layoutEffect1 = noop.useLayoutEffect(() => closure_0(params[21]).trackAppUIViewed(), []);
  const effect2 = noop.useEffect(() => screen(params[22]).validate(), []);
  const tmp14 = screen(params[18]);
  const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  const tmp2Result2 = require("Navigator");
  const accessibilityNativeStackFocusTracking = require("useAccessibilityNativeStackFocusTracking").useAccessibilityNativeStackFocusTracking();
  obj = { backgroundColor: null, borderTopWidth: 1, borderTopColor: null };
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  const tmp2Result3 = require("useAccessibilityNativeStackFocusTracking");
  obj.backgroundColor = require("useToken").useToken(screen(params[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmp2Result4 = require("useToken");
  obj.borderTopColor = require("useToken").useToken(screen(params[9]).colors.BORDER_SUBTLE);
  const items4 = [tmp.backIcon];
  closure_7 = noop.useCallback((navigation) => () => {
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
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj.hitSlop = BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP;
    obj = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_3_10(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }) };
    obj.children = closure_3_10(View, obj);
    obj.children = closure_3_10(Pressables.PressableOpacity, obj);
    return closure_3_10(View, obj);
  }, items4);
  const memo1 = noop.useMemo(() => ({
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
  const listeners = noop.useMemo(() => ({
    transitionEnd(data) {
      let closing = data.data.closing;
      if (closing) {
        closing = null != closure_1_7.getField("selected");
      }
      if (closing) {
        closure_1_7.setState({ selected: null });
      }
    }
  }), []);
  const tmp2Result5 = require("useToken");
  const autoSettingsSearchSessionAnalytics = require("useAutoSettingsSearchSessionAnalytics").useAutoSettingsSearchSessionAnalytics();
  obj = { value: tmp14(screen(tmp3[19]).USER_SETTINGS).analyticsLocations, children: null };
  const items5 = [closure_10(screen(params[30]), {}), ];
  const obj1 = {
    style: tmp.statusBarSpacer,
    accessible: false,
    onAccessibilityEscape() {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },
    children: null
  };
  const obj2 = { id: "settings-navigator", screenOptions: null, screenListeners: null, initialRouteName: null, children: null };
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj2.screenOptions = {
    fullScreenGestureEnabled: true,
    headerTitle(children) {
      return closure_1_10(LeftAlignedHeaderTitle, { title: children.children });
    },
    headerTitleAlign: "center",
    unstable_headerInsets: { left: false, right: false }
  };
  obj2.screenListeners = { beforeRemove, transitionStart };
  obj2.initialRouteName = screen;
  const items6 = [
    closure_10(Screen.Screen, {
      name: constants2.OVERVIEW,
      options(navigation) {
        const contentStyle = { title: null, headerLeft: null, headerBackVisible: false, headerShadowVisible: false, contentStyle: null };
        const intl = util.intl;
        contentStyle.title = intl.string(util.t["3D5yo/"]);
        contentStyle.headerLeft = closure_7(navigation.navigation);
        contentStyle.contentStyle = contentStyle;
        return contentStyle;
      },
      listeners: memo1,
      getComponent() {
        return closure_0(params[31]).default;
      }
    }),
    memo.map((item) => {
      [tmp, tmp2] = item;
      obj = {
        name: tmp2.route,
        options(navigation) {
          contentStyle = { title: SettingRendererUtils.getSettingTitle(closure_1_0), headerLeft: closure_7(navigation.navigation), headerBackVisible: false, contentStyle, headerShadowVisible: null };
          const navigationOptions = component.navigationOptions;
          let flag;
          if (navigationOptions != null) {
            flag = navigationOptions.headerShadowVisible;
          }
          if (flag == null) {
            flag = true;
          }
          contentStyle.headerShadowVisible = flag;
          if (null != component.usePersistentBadge) {
            contentStyle = {
              headerTitle(children) {
                  return closure_3_10(LeftAlignedHeaderTitle, { title: children.children, usePersistentBadge: usePersistentBadge.usePersistentBadge });
                }
            };
          } else {
            contentStyle = {};
          }
          const merged = Object.assign(contentStyle);
          return contentStyle;
        },
        getComponent() {
          component = component.getComponent();
          _modDef38(null != component, "[Settings Navigator] Invalid component for setting: " + closure_1_0);
          return component;
        },
        initialParams: null,
        listeners: null
      };
      let tmp4;
      if (screen === tmp2.route) {
        tmp4 = params;
      }
      obj.initialParams = tmp4;
      obj.listeners = listeners;
      return closure_1_10(Screen.Screen, obj, tmp);
    })
  ];
  obj2.children = items6;
  obj1.children = closure_11(Screen.Navigator, obj2);
  items5[1] = closure_10(closure_5, obj1);
  obj.children = items5;
  return closure_11(require("useAnalyticsLocations").AnalyticsLocationProvider, obj);
});