// === Module 17476: SettingsNavigator ===

// Module 17476 (SettingsNavigator)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4825 */;
import Pressables from "Pressables" /* 5427 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7328 */;
import SettingRendererUtils from "SettingRendererUtils" /* 15061 */;
import SettingRendererTypes from "SettingRendererTypes" /* 15759 */;
import BackIconWithBadge from "BackIconWithBadge" /* 16830 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2111 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 15059 */;

const require = globalThis.__r;

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
    const obj = { style: tmp.headerContainerRow, children: null };
    const items = [tmp5, ];
    const obj2 = { badge: persistentBadge };
    items[1] = closure_1_10(SettingHeaderBadge, obj2);
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
const NativeStackNavigator = fn(8245);
let closure_12 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4829);
let obj = { statusBarSpacer: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, headerContainer: null, headerContainerRow: null, headerTitleWithBadge: null, backIcon: null };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.headerContainer = { width: "100%", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
let obj5 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj.headerContainerRow = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, width: "100%" };
obj.headerTitleWithBadge = { flexShrink: 1 };
const obj6 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, width: "100%" };
obj.backIcon = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj);
const obj7 = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default noop.memo(() => {
  const tmp = closure_13();
  _require = tmp;
  const route = require("Link").useRoute();
  const params = route.params;
  let screen;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants2.OVERVIEW;
  }
  const params2 = route.params;
  params1 = undefined;
  if (params2 != null) {
    params1 = params2.params;
  }
  const params3 = route.params;
  let onClose;
  if (params3 != null) {
    onClose = params3.onClose;
  }
  let obj = require("Link");
  noop = require("Link").useNavigation();
  const tmp2Result = require("Link");
  const commonTriggerPoint = require("useCommonTriggerPoint").useCommonTriggerPoint(tmp2(tmp3[15]).OpenUserSettingsTriggerPoint);
  const items = [screen];
  const effect = noop.useEffect(() => {
    obj2 = { destinationPane: screen, source: { page: constants.USER_SETTINGS } };
    const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj2);
  }, items);
  const items1 = [onClose];
  const effect1 = noop.useEffect(() => () => {
    if (onClose != null) {
      tmp();
    }
  }, items1);
  const tmp2Result8 = require("useCommonTriggerPoint");
  const items2 = [obj2];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items2, () => obj2.locale);
  closure_5 = onClose(noop.useState(false), 2)[1];
  const items3 = [stateFromStores];
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_5((arg0) => !arg0);
  }, items3);
  const tmp2Result9 = require("useStateFromStores");
  const memo = noop.useMemo(() => closure_0(params1[20]).getSettingScreens(), []);
  const layoutEffect1 = noop.useLayoutEffect(() => closure_0(params1[21]).trackAppUIViewed(), []);
  const effect2 = noop.useEffect(() => screen(params1[22]).validate(), []);
  const tmp14 = screen(params1[18]);
  const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  const tmp2Result10 = require("Navigator");
  const accessibilityNativeStackFocusTracking = require("useAccessibilityNativeStackFocusTracking").useAccessibilityNativeStackFocusTracking();
  obj2 = { backgroundColor: null, borderTopWidth: 1, borderTopColor: null };
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  const tmp2Result11 = require("useAccessibilityNativeStackFocusTracking");
  obj2.backgroundColor = require("useToken").useToken(screen(params1[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmp2Result12 = require("useToken");
  obj2.borderTopColor = require("useToken").useToken(screen(params1[9]).colors.BORDER_SUBTLE);
  const items4 = [tmp.backIcon];
  closure_7 = noop.useCallback((navigation) => () => {
    const obj = { collapsable: false, children: null };
    obj2 = {
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
    obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj2.hitSlop = BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP;
    const obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_3_10(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }) };
    obj2.children = closure_3_10(View, obj3);
    obj.children = closure_3_10(Pressables.PressableOpacity, obj2);
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
  const tmp2Result13 = require("useToken");
  const autoSettingsSearchSessionAnalytics = require("useAutoSettingsSearchSessionAnalytics").useAutoSettingsSearchSessionAnalytics();
  let obj3 = { value: tmp14(screen(params1[19]).USER_SETTINGS).analyticsLocations, children: null };
  const items5 = [closure_10(screen(params1[30]), {}), ];
  let obj4 = {
    style: tmp.statusBarSpacer,
    accessible: false,
    onAccessibilityEscape() {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },
    children: null
  };
  const obj5 = { id: "settings-navigator", screenOptions: null, screenListeners: null, initialRouteName: null, children: null };
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj5.screenOptions = {
    fullScreenGestureEnabled: true,
    headerTitle(children) {
      return closure_1_10(LeftAlignedHeaderTitle, { title: children.children });
    },
    headerTitleAlign: "center",
    unstable_headerInsets: { left: false, right: false }
  };
  obj5.screenListeners = { beforeRemove, transitionStart };
  obj5.initialRouteName = screen;
  const items6 = [
    closure_10(Screen.Screen, {
      name: constants2.OVERVIEW,
      options(navigation) {
        const obj = { title: null, headerLeft: null, headerBackVisible: false, headerShadowVisible: false, contentStyle: null };
        const intl = util.intl;
        obj.title = intl.string(util.t["3D5yo/"]);
        obj.headerLeft = closure_7(navigation.navigation);
        obj.contentStyle = obj2;
        return obj;
      },
      listeners: memo1,
      getComponent() {
        return closure_0(params1[31]).default;
      }
    }),
    memo.map((item) => {
      [tmp, tmp2] = item;
      let obj = {
        name: tmp2.route,
        options(navigation) {
          const obj = { title: null, headerLeft: null, headerBackVisible: false, contentStyle: null, headerShadowVisible: null };
          obj2 = SettingRendererUtils;
          obj.title = obj2.getSettingTitle(closure_1_0);
          obj.headerLeft = closure_7(navigation.navigation);
          obj.contentStyle = obj2;
          const navigationOptions = component.navigationOptions;
          let flag;
          if (navigationOptions != null) {
            flag = navigationOptions.headerShadowVisible;
          }
          if (flag == null) {
            flag = true;
          }
          obj.headerShadowVisible = flag;
          if (null != component.usePersistentBadge) {
            const obj3 = {
              headerTitle(children) {
                  return closure_3_10(LeftAlignedHeaderTitle, { title: children.children, usePersistentBadge: usePersistentBadge.usePersistentBadge });
                }
            };
            let obj4 = obj3;
          } else {
            obj4 = {};
          }
          const merged = Object.assign(obj4);
          return obj;
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
        tmp4 = params1;
      }
      obj.initialParams = tmp4;
      obj.listeners = listeners;
      return closure_1_10(Screen.Screen, obj, tmp);
    })
  ];
  obj5.children = items6;
  obj4.children = closure_11(Screen.Navigator, obj5);
  items5[1] = closure_10(closure_5, obj4);
  obj3.children = items5;
  return closure_11(require("useAnalyticsLocations").AnalyticsLocationProvider, obj3);
});