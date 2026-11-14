// discord_app/modules/user_settings/core/native/SettingsNavigator.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import SettingRendererUtils from "../../../settings/native/renderer/SettingRendererUtils.tsx";
import SettingRendererTypes from "../../../settings/native/renderer/SettingRendererTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../LocaleStore.tsx";
import UserSettingSearchStore from "../../UserSettingSearchStore.tsx";

require = fn;
function SettingHeaderBadge(badge) {
  if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
    const obj = { size: native.BetaSizes.SMALL };
    return React6(native.BetaTag, obj);
  }
}
function LeftAlignedHeaderTitle(children) {
  const usePersistentBadge = children.usePersistentBadge;
  const tmp = closure_12();
  let persistentBadge;
  if (usePersistentBadge != null) {
    persistentBadge = usePersistentBadge();
  }
  const tmp5 = React6(Text_Text.Heading, {
    lineClamp: 1,
    variant: "heading-md/semibold",
    color: "mobile-text-heading-primary",
    maxFontSizeMultiplier: 2,
    style: null != persistentBadge ? tmp.headerTitleWithBadge : tmp.headerContainer,
    children: children.title,
  });
  let tmp6 = tmp5;
  if (null != persistentBadge) {
    const obj = { style: tmp.headerContainerRow, children: null };
    items = [tmp5];
    const obj2 = { badge: persistentBadge };
    items[1] = React6(SettingHeaderBadge, obj2);
    obj.children = items;
    tmp6 = refs(View, obj);
  }
  return tmp6;
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticsPages: metroImportDefault, UserSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const NativeStackNavigator = fn(9128);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5306);
let obj = {
  statusBarSpacer: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  headerContainer: null,
  headerContainerRow: null,
  headerTitleWithBadge: null,
};
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.headerContainer = {
  width: "100%",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
let obj5 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj.headerContainerRow = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  width: "100%",
};
obj.headerTitleWithBadge = { flexShrink: 1 };
let closure_12 = createStyles.createStyles(obj);
const obj6 = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  width: "100%",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default noop.memo(function SettingsNavigator() {
  const tmp = closure_12();
  const route = screen(onClose[12]).useRoute();
  const params = route.params;
  screen = undefined;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants2.OVERVIEW;
  }
  const params2 = route.params;
  let params1;
  if (params2 != null) {
    params1 = params2.params;
  }
  const params3 = route.params;
  onClose = undefined;
  if (params3 != null) {
    onClose = params3.onClose;
  }
  let obj = screen(onClose[12]);
  noop = screen(onClose[12]).useNavigation();
  const tmp2Result = screen(onClose[12]);
  const commonTriggerPoint = screen(onClose[13]).useCommonTriggerPoint(tmp2(tmp3[14]).OpenUserSettingsTriggerPoint);
  items = [screen];
  const effect = noop.useEffect(() => {
    obj2 = { destinationPane: screen, source: { page: constants.USER_SETTINGS } };
    const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj2);
  }, items);
  const items1 = [onClose];
  const effect1 = noop.useEffect(
    () => () => {
      if (onClose != null) {
        tmp();
      }
    },
    items1,
  );
  const tmp2Result8 = screen(onClose[13]);
  const items2 = [closure_5];
  const stateFromStores = screen(onClose[16]).useStateFromStores(items2, () => closure_5.locale);
  const tmp2Result9 = screen(onClose[16]);
  const memo = noop.useMemo(() => screen(onClose[19]).getSettingScreens(), []);
  const layoutEffect = noop.useLayoutEffect(() => screen(onClose[20]).trackAppUIViewed(), []);
  const effect2 = noop.useEffect(() => params1(onClose[21]).validate(), []);
  const tmp13 = params1(onClose[17]);
  const accessibilityNativeStackOptions = screen(onClose[22]).useAccessibilityNativeStackOptions();
  const tmp2Result10 = screen(onClose[22]);
  const accessibilityNativeStackFocusTracking = screen(onClose[23]).useAccessibilityNativeStackFocusTracking();
  let obj2 = { backgroundColor: null, borderTopWidth: 1, borderTopColor: null };
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  const tmp2Result11 = screen(onClose[23]);
  obj2.backgroundColor = screen(onClose[24]).useToken(params1(onClose[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmp2Result12 = screen(onClose[24]);
  obj2.borderTopColor = screen(onClose[24]).useToken(params1(onClose[8]).colors.BORDER_SUBTLE);
  closure_5 = noop.useCallback((navigation) => () => closure_2_9(params1(onClose[25]), { navigation }), []);
  const memo1 = noop.useMemo(
    () => ({
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
      },
    }),
    [],
  );
  const listeners = noop.useMemo(
    () => ({
      transitionEnd(data) {
        let closing = data.data.closing;
        if (closing) {
          closing = null != listeners.getField("selected");
        }
        if (closing) {
          listeners.setState({ selected: null });
        }
      },
    }),
    [],
  );
  const tmp2Result13 = screen(onClose[24]);
  const autoSettingsSearchSessionAnalytics = screen(onClose[26]).useAutoSettingsSearchSessionAnalytics();
  let obj3 = { value: tmp13(params1(onClose[18]).USER_SETTINGS).analyticsLocations, children: null };
  const items3 = [closure_9(params1(onClose[27]), {})];
  let obj4 = {
    style: tmp.statusBarSpacer,
    accessible: false,
    onAccessibilityEscape: function handleAccessibilityEscape() {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },
    children: null,
  };
  const obj5 = {
    id: "settings-navigator",
    screenOptions: null,
    screenListeners: null,
    initialRouteName: null,
    children: null,
  };
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj5.screenOptions = {
    fullScreenGestureEnabled: true,
    headerTitle(children) {
      return closure_1_9(LeftAlignedHeaderTitle, { title: children.children });
    },
    headerTitleAlign: "center",
    unstable_headerInsets: { left: false, right: false },
  };
  obj5.screenListeners = { beforeRemove, transitionStart };
  obj5.initialRouteName = screen;
  const items4 = [
    closure_9(Screen.Screen, {
      name: constants2.OVERVIEW,
      options(navigation) {
        const obj = {
          title: null,
          headerLeft: null,
          headerBackVisible: false,
          headerShadowVisible: false,
          contentStyle: null,
        };
        const intl = util.intl;
        obj.title = intl.string(util.t["3D5yo/"]);
        obj.headerLeft = closure_5(navigation.navigation);
        obj.contentStyle = obj2;
        return obj;
      },
      listeners: memo1,
      getComponent() {
        return screen(onClose[29]).default;
      },
    }),
    memo.map((item) => {
      [tmp, tmp2] = item;
      let obj = {
        name: tmp2.route,
        options(navigation) {
          const obj = {
            title: null,
            headerLeft: null,
            headerBackVisible: false,
            contentStyle: null,
            headerShadowVisible: null,
          };
          obj2 = SettingRendererUtils;
          obj.title = obj2.getSettingTitle(screen);
          obj.headerLeft = closure_5(navigation.navigation);
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
                return closure_3_9(LeftAlignedHeaderTitle, {
                  title: children.children,
                  usePersistentBadge: usePersistentBadge.usePersistentBadge,
                });
              },
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
          _modDef38(null != component, "[Settings Navigator] Invalid component for setting: " + screen);
          return component;
        },
        initialParams: null,
        listeners: null,
      };
      let tmp4;
      if (screen === tmp2.route) {
        tmp4 = params1;
      }
      obj.initialParams = tmp4;
      obj.listeners = listeners;
      return closure_1_9(Screen.Screen, obj, tmp);
    }),
  ];
  obj5.children = items4;
  obj4.children = closure_10(Screen.Navigator, obj5);
  items3[1] = closure_9(obj2, obj4);
  obj3.children = items3;
  return closure_10(screen(onClose[17]).AnalyticsLocationProvider, obj3);
});
