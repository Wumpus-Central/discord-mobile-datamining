// discord_app/modules/user_settings/core/native/SettingsNavigator.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import SettingRendererUtils from "../../../settings/native/renderer/SettingRendererUtils.tsx";
import BackIconWithBadge from "../../../main_tabs_v2/native/shared_components/BackIconWithBadge.tsx";
import SettingRendererTypes from "../../../settings/native/renderer/SettingRendererTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import LocaleStore_mod from "../../LocaleStore.tsx";
import UserSettingSearchStore from "../../UserSettingSearchStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import NativeStackView from "../../../../../_runtime/07568_NativeStackView.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function LeftAlignedHeaderTitle(usePersistentBadge) {
  let items;
  usePersistentBadge = usePersistentBadge.usePersistentBadge;
  const title = usePersistentBadge.title;
  const tmp = closure_13();
  let persistentBadge;
  if (usePersistentBadge != null) {
    persistentBadge = usePersistentBadge();
  }
  const tmp3 = null != persistentBadge ? tmp.headerTitleWithBadge : tmp.headerContainer;
  const tmp5 = authStore(Text_Text.Heading, {
    lineClamp: 1,
    variant: "redesign/heading-18/bold",
    color: "mobile-text-heading-primary",
    maxFontSizeMultiplier: 2,
    style: tmp3,
    children: title,
  });
  let tmp6 = tmp5;
  if (null != persistentBadge) {
    const obj = { style: tmp.headerContainerRow, children: items };
    items = [tmp5];
    const obj2 = { badge: persistentBadge };
    items[1] = authStore(closure_14, obj2);
    tmp6 = unpackModuleId(View, obj);
  }
  return tmp6;
}
let react = react_mod;
let View = react_native.View;
let LocaleStore = LocaleStore_mod;
({ AnalyticsPages: metroImportAll, UserSettingsSections: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = {
  statusBarSpacer: obj2,
  headerContainer: obj3,
  headerContainerRow: obj4,
  headerTitleWithBadge: { flexShrink: 1 },
  backIcon: obj5,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj4 = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  width: "100%",
};
obj5 = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (badge) => {
      const obj = react2;
      const cResult = obj.c(1);
      if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: native.BetaSizes.SMALL };
          const BetaTag = native.BetaTag;
          const tmp7 = authStore(BetaTag, obj2);
          cResult[0] = tmp7;
          first = tmp7;
        } else {
          first = cResult[0];
        }
        return first;
      }
    }
  : (badge) => {
      if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
        const obj = { size: native.BetaSizes.SMALL };
        const BetaTag = native.BetaTag;
        return authStore(BetaTag, obj);
      }
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let Screen;
        let arr4;
        let beforeRemove;
        let closure_0;
        let closure_5;
        let contentStyle;
        let params1;
        let tmp12;
        let tmp13;
        let tmp16;
        let tmp18;
        let tmp19;
        let tmp29;
        let tmp30;
        let tmp33;
        let transitionStart;
        let tmp = _require;
        let tmp2 = params1;
        let obj = require("react");
        const cResult = obj.c(58);
        const tmp4 = closure_13();
        _require = tmp4;
        let obj2 = require("Link");
        const route = obj2.useRoute();
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
        const tmpResult = tmp(tmp2[15]);
        navigation = tmpResult.useNavigation();
        const tmpResult8 = tmp(tmp2[16]);
        const commonTriggerPoint = tmpResult8.useCommonTriggerPoint(tmp(tmp2[17]).OpenUserSettingsTriggerPoint);
        if (cResult[0] !== screen) {
          const fn = function l() {
            let obj3;
            const obj2 = { destinationPane: screen, source: obj3 };
            obj3 = { page: metroImportAll.USER_SETTINGS };
            const obj = UserSettingsUtils;
            const result = obj.trackUserSettingsPaneViewed(obj2);
          };
          const items = [screen];
          cResult[0] = screen;
          cResult[1] = fn;
          cResult[2] = items;
          tmp13 = items;
          tmp12 = fn;
        } else {
          tmp12 = cResult[1];
          tmp13 = cResult[2];
        }
        const effect = navigation.useEffect(tmp12, tmp13);
        if (cResult[3] !== onClose) {
          class T {
            constructor() {
              return () => {
                if (onClose != null) {
                  tmp();
                }
              };
            }
          }
          const items1 = [onClose];
          cResult[3] = onClose;
          cResult[4] = T;
          cResult[5] = items1;
          tmp16 = items1;
        } else {
          class T {
            constructor() {
              return () => {
                if (onClose != null) {
                  tmp();
                }
              };
            }
          }
          tmp16 = cResult[5];
        }
        const effect1 = obj5.useEffect(T, tmp16);
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              return () => {
                if (onClose != null) {
                  tmp();
                }
              };
            }
          }
          const items2 = [LocaleStore];
          class E {
            constructor() {
              return LocaleStore.locale;
            }
          }
          cResult[6] = items2;
          cResult[7] = E;
          tmp19 = E;
          tmp18 = items2;
        } else {
          class T {
            constructor() {
              return () => {
                if (onClose != null) {
                  tmp();
                }
              };
            }
          }
          tmp19 = cResult[7];
        }
        const tmpResult9 = tmp(tmp2[19]);
        const stateFromStores = tmpResult9.useStateFromStores(tmp18, tmp19);
        const tmp21 = onClose(navigation.useState(false), 2)[1];
        View = tmp21;
        if (cResult[8] !== tmp21) {
          class O {
            constructor() {
              closure_5((arg0) => !arg0);
            }
          }
          cResult[8] = tmp21;
          class E {
            constructor() {
              return LocaleStore.locale;
            }
          }
          cResult[9] = O;
        } else {
          class O {
            constructor() {
              closure_5((arg0) => !arg0);
            }
          }
        }
        if (cResult[10] !== stateFromStores) {
          class O {
            constructor() {
              closure_5((arg0) => !arg0);
            }
          }
          tmp24[0] = stateFromStores;
          class E {
            constructor() {
              return LocaleStore.locale;
            }
          }
          cResult[11] = tmp24;
        } else {
          class O {
            constructor() {
              closure_5((arg0) => !arg0);
            }
          }
        }
        const layoutEffect = obj5.useLayoutEffect(O, tmp24);
        const tmp27 = screen(tmp2[20]);
        const analyticsLocations = tmp27(screen(tmp2[21]).USER_SETTINGS).analyticsLocations;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              closure_5((arg0) => !arg0);
            }
          }
          const settingScreens = obj7.getSettingScreens();
          class E {
            constructor() {
              return LocaleStore.locale;
            }
          }
          arr4 = settingScreens;
        } else {
          class O {
            constructor() {
              closure_5((arg0) => !arg0);
            }
          }
        }
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor() {
              const obj = closure_0(params1[23]);
              return obj.trackAppUIViewed();
            }
          }
          const items3 = [];
          class E {
            constructor() {
              return LocaleStore.locale;
            }
          }
          cResult[14] = W;
          tmp30 = W;
          tmp29 = items3;
        } else {
          class W {
            constructor() {
              const obj = closure_0(params1[23]);
              return obj.trackAppUIViewed();
            }
          }
          tmp30 = cResult[14];
        }
        const layoutEffect1 = obj5.useLayoutEffect(tmp30, tmp29);
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor() {
              const obj = screen(params1[24]);
              return obj.validate();
            }
          }
          const items4 = [];
          class E {
            constructor() {
              return LocaleStore.locale;
            }
          }
          cResult[16] = items4;
          tmp33 = items4;
        } else {
          class D {
            constructor() {
              const obj = screen(params1[24]);
              return obj.validate();
            }
          }
          tmp33 = cResult[16];
        }
        const effect2 = obj5.useEffect(D, tmp33);
        const tmpResult10 = tmp(tmp2[25]);
        const accessibilityNativeStackOptions = tmpResult10.useAccessibilityNativeStackOptions();
        const tmpResult11 = tmp(tmp2[26]);
        const accessibilityNativeStackFocusTracking = tmpResult11.useAccessibilityNativeStackFocusTracking();
        ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
        const tmpResult12 = tmp(tmp2[27]);
        const token = tmpResult12.useToken(tmp26(tmp2[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
        const tmpResult13 = tmp(tmp2[27]);
        const token1 = tmpResult13.useToken(tmp26(tmp2[9]).colors.BORDER_SUBTLE);
        if (cResult[17] === token) {
          class D {
            constructor() {
              const obj = screen(params1[24]);
              return obj.validate();
            }
          }
          LocaleStore = tmp39;
          if (cResult[20] !== tmp4.backIcon) {
            class J {
              constructor(navigation) {
                return () => {
                  let PressableOpacity;
                  let intl;
                  let obj2;
                  let obj3;
                  let obj4;
                  const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
                  obj2 = {
                    onPress() {
                      return navigation.goBack();
                    },
                    accessible: true,
                    accessibilityRole: "button",
                    accessibilityLabel: intl.string(intl2.t["13/7kX"]),
                    hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
                    children: authStore(View, obj3),
                  };
                  PressableOpacity = Pressables.PressableOpacity;
                  intl = intl2.intl;
                  obj3 = {
                    style: navigation.backIcon,
                    importantForAccessibility: "no-hide-descendants",
                    accessibilityElementsHidden: true,
                    children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4),
                  };
                  obj4 = { navigation };
                  return authStore(View, obj);
                };
              }
            }
            cResult[20] = tmp4.backIcon;
            class E {
              constructor() {
                return LocaleStore.locale;
              }
            }
            cResult[21] = J;
          } else {
            class J {
              constructor(navigation) {
                return () => {
                  let PressableOpacity;
                  let intl;
                  let obj2;
                  let obj3;
                  let obj4;
                  const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
                  obj2 = {
                    onPress() {
                      return navigation.goBack();
                    },
                    accessible: true,
                    accessibilityRole: "button",
                    accessibilityLabel: intl.string(intl2.t["13/7kX"]),
                    hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
                    children: authStore(View, obj3),
                  };
                  PressableOpacity = Pressables.PressableOpacity;
                  intl = intl2.intl;
                  obj3 = {
                    style: navigation.backIcon,
                    importantForAccessibility: "no-hide-descendants",
                    accessibilityElementsHidden: true,
                    children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4),
                  };
                  obj4 = { navigation };
                  return authStore(View, obj);
                };
              }
            }
          }
          class E {
            constructor() {
              return LocaleStore.locale;
            }
          }
          if (cResult[22] !== navigation) {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
            cResult[22] = navigation;
            class E {
              constructor() {
                return LocaleStore.locale;
              }
            }
            cResult[23] = Y;
          } else {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
            tmp43[0] = function transitionEnd(data) {
              let isActive = data.data.closing;
              const state = UserSettingSearchStore.getState();
              const query = state.query;
              if (isActive) {
                isActive = state.isActive;
              }
              if (isActive) {
                isActive = "" === query;
              }
              if (isActive) {
                UserSettingSearchStore.setState({ isActive: false });
              }
            };
            class E {
              constructor() {
                return LocaleStore.locale;
              }
            }
          } else {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
            tmp45[0] = function transitionEnd(data) {
              const closing = data.data.closing && null != UserSettingSearchStore.getField("selected");
              if (closing) {
                UserSettingSearchStore.setState({ selected: null });
              }
            };
            class E {
              constructor() {
                return LocaleStore.locale;
              }
            }
          } else {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
          }
          const listeners = tmp45;
          const tmpResult14 = tmp(tmp2[31]);
          const autoSettingsSearchSessionAnalytics = tmpResult14.useAutoSettingsSearchSessionAnalytics();
          const _Symbol3 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
            closure_10(screen(tmp2[32]), {});
            class E {
              constructor() {
                return LocaleStore.locale;
              }
            }
          } else {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
          }
          const _Symbol4 = Symbol;
          const statusBarSpacer = tmp4.statusBarSpacer;
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
            cResult[27] = tmp50;
            class E {
              constructor() {
                return LocaleStore.locale;
              }
            }
          } else {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
          }
          const _Symbol5 = Symbol;
          if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
            cResult[28] = tmp52;
            class E {
              constructor() {
                return LocaleStore.locale;
              }
            }
          } else {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
          }
          if (cResult[29] !== accessibilityNativeStackOptions) {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
            tmp54[1] = tmp49;
            tmp54[3] = tmp51;
            class E {
              constructor() {
                return LocaleStore.locale;
              }
            }
            let merged = Object.assign(accessibilityNativeStackOptions);
            cResult[29] = accessibilityNativeStackOptions;
            cResult[30] = tmp54;
          } else {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
          }
          if (cResult[31] === beforeRemove) {
            class Y {
              constructor() {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }
            }
            if (cResult[34] === tmp39) {
              class Y {
                constructor() {
                  if (navigation.canGoBack()) {
                    navigation.goBack();
                  }
                }
              }
              const _Symbol6 = Symbol;
              class E {
                constructor() {
                  return LocaleStore.locale;
                }
              }
              if (cResult[38] !== tmp58) {
                class Y {
                  constructor() {
                    if (navigation.canGoBack()) {
                      navigation.goBack();
                    }
                  }
                }
                let obj3 = { name: constants2.OVERVIEW, options: tmp58, listeners: tmp43, getComponent: tmp60 };
                class E {
                  constructor() {
                    return LocaleStore.locale;
                  }
                }
                cResult[38] = tmp58;
                cResult[39] = closure_10(Screen.Screen, obj3);
                const tmp63 = closure_10(Screen.Screen, obj3);
              } else {
                class Y {
                  constructor() {
                    if (navigation.canGoBack()) {
                      navigation.goBack();
                    }
                  }
                }
              }
              if (cResult[40] === tmp39) {
                class Y {
                  constructor() {
                    if (navigation.canGoBack()) {
                      navigation.goBack();
                    }
                  }
                }
              }
              const mapped = arr4.map((item) => {
                let tmp5;
                const tmp = onClose(item, 2);
                const first = tmp[0];
                let tmp3 = tmp[1];
                let component = tmp3;
                let obj = {
                  name: tmp3.route,
                  options(navigation) {
                    let flag;
                    let obj2;
                    let obj4;
                    let usePersistentBadge;
                    function headerTitle(children) {
                      const obj = {
                        title: children.children,
                        usePersistentBadge: usePersistentBadge.usePersistentBadge,
                      };
                      return closure_3_10(LeftAlignedHeaderTitle, obj);
                    }
                    let obj = {
                      title: obj2.getSettingTitle(first),
                      headerLeft: UserSettingSearchStore(navigation),
                      headerBackVisible: false,
                      contentStyle: LocaleStore,
                      headerShadowVisible: flag,
                    };
                    navigation = navigation.navigation;
                    const navigationOptions = component.navigationOptions;
                    flag = undefined;
                    obj2 = SettingRendererUtils;
                    if (navigationOptions != null) {
                      flag = navigationOptions.headerShadowVisible;
                    }
                    if (flag == null) {
                      flag = true;
                    }
                    if (null != component.usePersistentBadge) {
                      obj4 = { headerTitle };
                      const obj3 = { headerTitle };
                    } else {
                      obj4 = {};
                    }
                    const merged = Object.assign(obj4);
                    return obj;
                  },
                  getComponent() {
                    component = component.getComponent();
                    const tmp2 = _modDef38;
                    const tmp3 = null != component;
                    tmp2(tmp3, "[Settings Navigator] Invalid component for setting: " + first);
                    return component;
                  },
                  initialParams: tmp5,
                  listeners,
                };
                tmp5 = undefined;
                Screen = Screen.Screen;
                if (component === tmp3.route) {
                  tmp5 = params1;
                }
                return closure_1_10(Screen, obj, first);
              });
              cResult[40] = tmp39;
              cResult[41] = J;
              cResult[42] = params1;
              cResult[43] = screen;
              cResult[44] = mapped;
            }
            function de(navigation) {
              let intl;
              const obj = {
                title: intl.string(intl2.t["3D5yo/"]),
                headerLeft: UserSettingSearchStore(navigation),
                headerBackVisible: false,
                headerShadowVisible: false,
                contentStyle: LocaleStore,
              };
              navigation = navigation.navigation;
              intl = intl2.intl;
              return obj;
            }
            class E {
              constructor() {
                return LocaleStore.locale;
              }
            }
            cResult[34] = tmp39;
            cResult[35] = J;
            cResult[36] = de;
          }
          let obj4 = { beforeRemove, transitionStart };
          cResult[31] = beforeRemove;
          cResult[32] = transitionStart;
          cResult[33] = obj4;
        }
        const obj6 = { backgroundColor: token, borderTopWidth: 1, borderTopColor: token1 };
        cResult[17] = token;
        cResult[18] = token1;
        cResult[19] = obj6;
      }
    : () => {
        let Navigator;
        let Screen;
        let beforeRemove;
        let closure_0;
        let items5;
        let items6;
        let obj2;
        let obj5;
        let obj6;
        let params1;
        let tmp2Result12;
        let tmp2Result13;
        let transitionStart;
        const tmp = closure_13();
        _require = tmp;
        let tmp2 = _require;
        let tmp3 = params1;
        let obj = require("Link");
        const route = obj.useRoute();
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
        const tmp2Result = tmp2(tmp3[15]);
        react = tmp2Result.useNavigation();
        const tmp2Result8 = tmp2(tmp3[16]);
        const commonTriggerPoint = tmp2Result8.useCommonTriggerPoint(tmp2(tmp3[17]).OpenUserSettingsTriggerPoint);
        const items = [screen];
        const effect = react.useEffect(() => {
          let obj3;
          obj2 = { destinationPane: screen, source: obj3 };
          obj3 = { page: metroImportAll.USER_SETTINGS };
          const obj = UserSettingsUtils;
          const result = obj.trackUserSettingsPaneViewed(obj2);
        }, items);
        const items1 = [onClose];
        const effect1 = react.useEffect(
          () => () => {
            if (onClose != null) {
              tmp();
            }
          },
          items1,
        );
        const items2 = [obj2];
        const tmp2Result9 = tmp2(tmp3[19]);
        const stateFromStores = tmp2Result9.useStateFromStores(items2, () => obj2.locale);
        let closure_5 = onClose(react.useState(false), 2)[1];
        const items3 = [stateFromStores];
        const layoutEffect = react.useLayoutEffect(() => {
          closure_5((arg0) => !arg0);
        }, items3);
        const tmp14 = screen(tmp3[20]);
        const analyticsLocations = tmp14(screen(tmp3[21]).USER_SETTINGS).analyticsLocations;
        const memo = react.useMemo(() => {
          const obj = closure_0(params1[22]);
          return obj.getSettingScreens();
        }, []);
        const layoutEffect1 = react.useLayoutEffect(() => {
          const obj = closure_0(params1[23]);
          return obj.trackAppUIViewed();
        }, []);
        const effect2 = react.useEffect(() => {
          const obj = screen(params1[24]);
          return obj.validate();
        }, []);
        const tmp2Result10 = tmp2(tmp3[25]);
        const accessibilityNativeStackOptions = tmp2Result10.useAccessibilityNativeStackOptions();
        const tmp2Result11 = tmp2(tmp3[26]);
        const accessibilityNativeStackFocusTracking = tmp2Result11.useAccessibilityNativeStackFocusTracking();
        obj2 = {
          backgroundColor: tmp2Result12.useToken(screen(tmp3[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND),
          borderTopWidth: 1,
          borderTopColor: tmp2Result13.useToken(screen(tmp3[9]).colors.BORDER_SUBTLE),
        };
        ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
        tmp2Result12 = tmp2(tmp3[27]);
        const items4 = [tmp.backIcon];
        tmp2Result13 = tmp2(tmp3[27]);
        let closure_7 = react.useCallback(
          (navigation) => () => {
            let PressableOpacity;
            let intl;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3),
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = {
              style: navigation.backIcon,
              importantForAccessibility: "no-hide-descendants",
              accessibilityElementsHidden: true,
              children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4),
            };
            obj4 = { navigation };
            return authStore(View, obj);
          },
          items4,
        );
        const memo1 = react.useMemo(() => {
          let obj = {
            transitionEnd(data) {
              let isActive = data.data.closing;
              const obj = state;
              state = state.getState();
              const query = state.query;
              if (isActive) {
                isActive = state.isActive;
              }
              if (isActive) {
                isActive = "" === query;
              }
              if (isActive) {
                obj.setState({ isActive: false });
              }
            },
          };
          return obj;
        }, []);
        const listeners = react.useMemo(
          () => ({
            transitionEnd(data) {
              const closing = data.data.closing && null != closure_1_7.getField("selected");
              if (closing) {
                closure_1_7.setState({ selected: null });
              }
            },
          }),
          [],
        );
        const tmp2Result14 = tmp2(tmp3[31]);
        const autoSettingsSearchSessionAnalytics = tmp2Result14.useAutoSettingsSearchSessionAnalytics();
        let obj3 = { value: analyticsLocations, children: items5 };
        const AnalyticsLocationProvider = tmp2(tmp3[20]).AnalyticsLocationProvider;
        items5 = [closure_10(screen(tmp3[32]), {})];
        let obj4 = {
          style: tmp.statusBarSpacer,
          accessible: false,
          onAccessibilityEscape() {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          },
          children: closure_11(Navigator, obj5),
        };
        Navigator = Screen.Navigator;
        obj5 = {
          id: "settings-navigator",
          screenOptions: obj6,
          screenListeners: { beforeRemove, transitionStart },
          initialRouteName: screen,
          children: items6,
        };
        obj6 = {
          fullScreenGestureEnabled: true,
          headerTitle(children) {
            const obj = { title: children.children };
            return closure_1_10(LeftAlignedHeaderTitle, obj);
          },
          headerTitleAlign: "center",
          unstable_headerInsets: { left: false, right: false },
        };
        let merged = Object.assign(accessibilityNativeStackOptions);
        items6 = [,];
        const obj7 = {
          name: constants2.OVERVIEW,
          options(navigation) {
            let intl;
            const obj = {
              title: intl.string(intl2.t["3D5yo/"]),
              headerLeft: closure_7(navigation),
              headerBackVisible: false,
              headerShadowVisible: false,
              contentStyle: obj2,
            };
            navigation = navigation.navigation;
            intl = intl2.intl;
            return obj;
          },
          listeners: memo1,
          getComponent() {
            return closure_0(params1[33]).default;
          },
        };
        items6[0] = closure_10(Screen.Screen, obj7);
        items6[1] = memo.map((item) => {
          let tmp;
          let tmp2;
          let tmp4;
          [tmp, tmp2] = item;
          let obj = {
            name: tmp2.route,
            options(navigation) {
              let flag;
              let obj4;
              let usePersistentBadge;
              function headerTitle(children) {
                const obj = { title: children.children, usePersistentBadge: usePersistentBadge.usePersistentBadge };
                return closure_3_10(LeftAlignedHeaderTitle, obj);
              }
              let obj = {
                title: obj2.getSettingTitle(closure_1_0),
                headerLeft: closure_7(navigation),
                headerBackVisible: false,
                contentStyle: obj2,
                headerShadowVisible: flag,
              };
              navigation = navigation.navigation;
              obj2 = SettingRendererUtils;
              const navigationOptions = component.navigationOptions;
              flag = undefined;
              if (navigationOptions != null) {
                flag = navigationOptions.headerShadowVisible;
              }
              if (flag == null) {
                flag = true;
              }
              if (null != component.usePersistentBadge) {
                obj4 = { headerTitle };
                const obj3 = { headerTitle };
              } else {
                obj4 = {};
              }
              const merged = Object.assign(obj4);
              return obj;
            },
            getComponent() {
              component = component.getComponent();
              const tmp2 = _modDef38;
              const tmp3 = null != component;
              tmp2(tmp3, "[Settings Navigator] Invalid component for setting: " + closure_1_0);
              return component;
            },
            initialParams: tmp4,
            listeners,
          };
          tmp4 = undefined;
          Screen = Screen.Screen;
          if (screen === tmp2.route) {
            tmp4 = params1;
          }
          return closure_1_10(Screen, obj, tmp);
        });
        items5[1] = closure_10(closure_5, obj4);
        return closure_11(AnalyticsLocationProvider, obj3);
      },
);
let result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default memoResult;
