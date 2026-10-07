// discord_app/modules/user_settings/core/native/SettingsNavigator.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import SettingRendererUtils from "../../../settings/native/renderer/SettingRendererUtils.tsx";
import BackIconWithBadge from "../../../main_tabs_v2/native/shared_components/BackIconWithBadge.tsx";
import SettingRendererTypes from "../../../settings/native/renderer/SettingRendererTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../LocaleStore.tsx";
import UserSettingSearchStore from "../../UserSettingSearchStore.tsx";

const require = globalThis.__r;

require = fn;
function LeftAlignedHeaderTitle(children) {
  const usePersistentBadge = children.usePersistentBadge;
  const tmp = closure_13();
  let persistentBadge;
  if (usePersistentBadge != null) {
    persistentBadge = usePersistentBadge();
  }
  const tmp5 = v65535(Text_Text.Heading, {
    lineClamp: 1,
    variant: "redesign/heading-18/bold",
    color: "mobile-text-heading-primary",
    maxFontSizeMultiplier: 2,
    style: null != persistentBadge ? tmp.headerTitleWithBadge : tmp.headerContainer,
    children: children.title,
  });
  let tmp6 = tmp5;
  if (null != persistentBadge) {
    const obj = { style: tmp.headerContainerRow, children: null };
    const items = [tmp5];
    const obj2 = { badge: persistentBadge };
    items[1] = v65535(closure_14, obj2);
    obj.children = items;
    tmp6 = closure_1_11(View, obj);
  }
  return tmp6;
}
let View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const NativeStackNavigator = fn(7568);
let closure_12 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4896);
let obj = {
  statusBarSpacer: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  headerContainer: null,
  headerContainerRow: null,
  headerTitleWithBadge: null,
  backIcon: null,
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
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  width: "100%",
};
obj.backIcon = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (badge) => {
      const cResult = c.c(1);
      if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: native.BetaSizes.SMALL };
          const tmp7 = v65535(native.BetaTag, obj2);
          cResult[0] = tmp7;
          let first = tmp7;
        } else {
          first = cResult[0];
        }
        return first;
      }
    }
  : (badge) => {
      if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
        const obj = { size: native.BetaSizes.SMALL };
        return v65535(native.BetaTag, obj);
      }
    };
ReactCompilerGating = fn(558);
const obj7 = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = require("c").c(58);
        const tmp4 = closure_13();
        _require = tmp4;
        let obj = require("c");
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
        let obj2 = require("Link");
        let navigation = require("Link").useNavigation();
        const tmpResult = require("Link");
        const commonTriggerPoint = require("useCommonTriggerPoint").useCommonTriggerPoint(
          tmp(tmp2[17]).OpenUserSettingsTriggerPoint,
        );
        if (cResult[0] !== screen) {
          const fn = function l() {
            const obj2 = { destinationPane: screen, source: { page: constants.USER_SETTINGS } };
            const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj2);
          };
          const items = [screen];
          cResult[0] = screen;
          cResult[1] = fn;
          cResult[2] = items;
          let tmp13 = items;
          let tmp12 = fn;
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
          let tmp16 = items1;
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
              return closure_6.locale;
            }
          }
          cResult[6] = items2;
          cResult[7] = E;
          let tmp19 = E;
          const tmp18 = items2;
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
        const tmpResult8 = require("useCommonTriggerPoint");
        const stateFromStores = require("useStateFromStores").useStateFromStores(tmp18, tmp19);
        const tmp21 = onClose(navigation.useState(false), 2)[1];
        View = tmp21;
        if (cResult[8] !== tmp21) {
          class O {
            constructor() {
              tmp = closure_5((arg0) => !arg0);
              return;
            }
          }
          cResult[8] = tmp21;
          class E {
            constructor() {
              return closure_6.locale;
            }
          }
          cResult[9] = O;
        } else {
          class O {
            constructor() {
              tmp = closure_5((arg0) => !arg0);
              return;
            }
          }
        }
        if (cResult[10] !== stateFromStores) {
          class O {
            constructor() {
              tmp = closure_5((arg0) => !arg0);
              return;
            }
          }
          tmp24[0] = stateFromStores;
          class E {
            constructor() {
              return closure_6.locale;
            }
          }
          cResult[11] = tmp24;
        } else {
          class O {
            constructor() {
              tmp = closure_5((arg0) => !arg0);
              return;
            }
          }
        }
        const layoutEffect = obj5.useLayoutEffect(O, tmp24);
        const tmpResult9 = require("useStateFromStores");
        const analyticsLocations = screen(params1[20])(screen(tmp2[21]).USER_SETTINGS).analyticsLocations;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              tmp = closure_5((arg0) => !arg0);
              return;
            }
          }
          const settingScreens = obj7.getSettingScreens();
          class E {
            constructor() {
              return closure_6.locale;
            }
          }
          const arr4 = settingScreens;
        } else {
          class O {
            constructor() {
              tmp = closure_5((arg0) => !arg0);
              return;
            }
          }
        }
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor() {
              obj = closure_0(params[23]);
              return obj.trackAppUIViewed();
            }
          }
          const items3 = [];
          class E {
            constructor() {
              return closure_6.locale;
            }
          }
          cResult[14] = W;
          let tmp30 = W;
          const tmp29 = items3;
        } else {
          class W {
            constructor() {
              obj = closure_0(params[23]);
              return obj.trackAppUIViewed();
            }
          }
          tmp30 = cResult[14];
        }
        const layoutEffect1 = obj5.useLayoutEffect(tmp30, tmp29);
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor() {
              obj = OVERVIEW(params[24]);
              return obj.validate();
            }
          }
          const items4 = [];
          class E {
            constructor() {
              return closure_6.locale;
            }
          }
          cResult[16] = items4;
          let tmp33 = items4;
        } else {
          class D {
            constructor() {
              obj = OVERVIEW(params[24]);
              return obj.validate();
            }
          }
          tmp33 = cResult[16];
        }
        const effect2 = obj5.useEffect(D, tmp33);
        const tmp27 = screen(params1[20]);
        const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
        const tmpResult10 = require("Navigator");
        const accessibilityNativeStackFocusTracking =
          require("useAccessibilityNativeStackFocusTracking").useAccessibilityNativeStackFocusTracking();
        ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
        const tmpResult11 = require("useAccessibilityNativeStackFocusTracking");
        const token = require("useToken").useToken(tmp26(tmp2[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
        const tmpResult12 = require("useToken");
        const token1 = require("useToken").useToken(tmp26(tmp2[9]).colors.BORDER_SUBTLE);
        if (cResult[17] === token) {
          class D {
            constructor() {
              obj = OVERVIEW(params[24]);
              return obj.validate();
            }
          }
          LocaleStore = tmp39;
          if (cResult[20] !== tmp4.backIcon) {
            class J {
              constructor(arg0) {
                closure_0 = arg0;
                return () => {
                  const obj = { collapsable: false, children: null };
                  const obj2 = {
                    onPress() {
                      return navigation.goBack();
                    },
                    accessible: true,
                    accessibilityRole: "button",
                    accessibilityLabel: null,
                    hitSlop: null,
                    children: null,
                  };
                  const intl = util.intl;
                  obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
                  obj2.hitSlop = BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP;
                  const obj3 = {
                    style: navigation.backIcon,
                    importantForAccessibility: "no-hide-descendants",
                    accessibilityElementsHidden: true,
                    children: v65535(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = v65535(View, obj3);
                  obj.children = v65535(Pressables.PressableOpacity, obj2);
                  return v65535(View, obj);
                };
              }
            }
            cResult[20] = tmp4.backIcon;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
            cResult[21] = J;
          } else {
            class J {
              constructor(arg0) {
                closure_0 = arg0;
                return () => {
                  const obj = { collapsable: false, children: null };
                  const obj2 = {
                    onPress() {
                      return navigation.goBack();
                    },
                    accessible: true,
                    accessibilityRole: "button",
                    accessibilityLabel: null,
                    hitSlop: null,
                    children: null,
                  };
                  const intl = util.intl;
                  obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
                  obj2.hitSlop = BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP;
                  const obj3 = {
                    style: navigation.backIcon,
                    importantForAccessibility: "no-hide-descendants",
                    accessibilityElementsHidden: true,
                    children: v65535(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = v65535(View, obj3);
                  obj.children = v65535(Pressables.PressableOpacity, obj2);
                  return v65535(View, obj);
                };
              }
            }
          }
          class E {
            constructor() {
              return closure_6.locale;
            }
          }
          if (cResult[22] !== navigation) {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
            cResult[22] = navigation;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
            cResult[23] = Y;
          } else {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
            tmp43[0] = function transitionEnd(data) {
              let isActive = data.data.closing;
              state = UserSettingSearchStore.getState();
              if (isActive) {
                isActive = state.isActive;
              }
              if (isActive) {
                isActive = "" === state.query;
              }
              if (isActive) {
                UserSettingSearchStore.setState({ isActive: false });
              }
            };
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
          } else {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
            tmp45[0] = function transitionEnd(data) {
              let closing = data.data.closing;
              if (closing) {
                closing = null != UserSettingSearchStore.getField("selected");
              }
              if (closing) {
                UserSettingSearchStore.setState({ selected: null });
              }
            };
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
          } else {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
          }
          const listeners = tmp45;
          const autoSettingsSearchSessionAnalytics = tmp(tmp2[31]).useAutoSettingsSearchSessionAnalytics();
          const _Symbol3 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
            const tmp48 = closure_10(tmp26(tmp2[32]), {});
          } else {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
          }
          const _Symbol4 = Symbol;
          const statusBarSpacer = tmp4.statusBarSpacer;
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
            cResult[27] = tmp50;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
          } else {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
          }
          const _Symbol5 = Symbol;
          if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
            cResult[28] = tmp52;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
          } else {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
          }
          if (cResult[29] !== accessibilityNativeStackOptions) {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
            tmp54[1] = tmp49;
            tmp54[3] = tmp51;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
            let merged = Object.assign(accessibilityNativeStackOptions);
            cResult[29] = accessibilityNativeStackOptions;
            cResult[30] = tmp54;
          } else {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
          }
          if (cResult[31] === beforeRemove) {
            class Y {
              constructor() {
                obj = closure_4;
                if (closure_4.canGoBack()) {
                  goBackResult = obj.goBack();
                }
                return;
              }
            }
            if (cResult[34] === tmp39) {
              class Y {
                constructor() {
                  obj = closure_4;
                  if (closure_4.canGoBack()) {
                    goBackResult = obj.goBack();
                  }
                  return;
                }
              }
              const _Symbol6 = Symbol;
              class E {
                constructor() {
                  return closure_6.locale;
                }
              }
              if (cResult[38] !== tmp58) {
                class Y {
                  constructor() {
                    obj = closure_4;
                    if (closure_4.canGoBack()) {
                      goBackResult = obj.goBack();
                    }
                    return;
                  }
                }
                let obj3 = { name: null, options: null, listeners: null, getComponent: null };
                class E {
                  constructor() {
                    return closure_6.locale;
                  }
                }
                obj3.name = constants2.OVERVIEW;
                obj3.options = tmp58;
                obj3.listeners = tmp43;
                obj3.getComponent = tmp60;
                const tmp63 = closure_10(Screen.Screen, obj3);
                cResult[38] = tmp58;
                cResult[39] = tmp63;
              } else {
                class Y {
                  constructor() {
                    obj = closure_4;
                    if (closure_4.canGoBack()) {
                      goBackResult = obj.goBack();
                    }
                    return;
                  }
                }
              }
              if (cResult[40] === tmp39) {
                class Y {
                  constructor() {
                    obj = closure_4;
                    if (closure_4.canGoBack()) {
                      goBackResult = obj.goBack();
                    }
                    return;
                  }
                }
              }
              const mapped = arr4.map((item) => {
                const tmp = onClose(item, 2);
                const first = tmp[0];
                let component = tmp3;
                let obj = {
                  name: tmp[1].route,
                  options(navigation) {
                    const obj = {
                      title: SettingRendererUtils.getSettingTitle(first),
                      headerLeft: UserSettingSearchStore(navigation.navigation),
                      headerBackVisible: false,
                      contentStyle,
                      headerShadowVisible: null,
                    };
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
                          return closure_3_10(LeftAlignedHeaderTitle, {
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
                    _modDef38(null != component, "[Settings Navigator] Invalid component for setting: " + first);
                    return component;
                  },
                  initialParams: null,
                  listeners: null,
                };
                let tmp5;
                if (component === tmp[1].route) {
                  tmp5 = params1;
                }
                obj.initialParams = tmp5;
                obj.listeners = listeners;
                return closure_1_10(Screen.Screen, obj, first);
              });
              cResult[40] = tmp39;
              cResult[41] = J;
              cResult[42] = params1;
              cResult[43] = screen;
              cResult[44] = mapped;
            }
            function de(navigation) {
              const obj = {
                title: null,
                headerLeft: null,
                headerBackVisible: false,
                headerShadowVisible: false,
                contentStyle: null,
              };
              const intl = util.intl;
              obj.title = intl.string(util.t["3D5yo/"]);
              obj.headerLeft = UserSettingSearchStore(navigation.navigation);
              obj.contentStyle = contentStyle;
              return obj;
            }
            class E {
              constructor() {
                return closure_6.locale;
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
          const tmpResult14 = tmp(tmp2[31]);
        }
        const obj6 = { backgroundColor: token, borderTopWidth: 1, borderTopColor: token1 };
        cResult[17] = token;
        cResult[18] = token1;
        cResult[19] = obj6;
        const tmpResult13 = require("useToken");
      }
    : () => {
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
        const commonTriggerPoint = require("useCommonTriggerPoint").useCommonTriggerPoint(
          tmp2(tmp3[17]).OpenUserSettingsTriggerPoint,
        );
        const items = [screen];
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
        const tmp2Result8 = require("useCommonTriggerPoint");
        const items2 = [obj2];
        const stateFromStores = require("useStateFromStores").useStateFromStores(items2, () => obj2.locale);
        closure_5 = onClose(noop.useState(false), 2)[1];
        const items3 = [stateFromStores];
        const layoutEffect = noop.useLayoutEffect(() => {
          closure_5((arg0) => !arg0);
        }, items3);
        const tmp2Result9 = require("useStateFromStores");
        const memo = noop.useMemo(() => closure_0(params1[22]).getSettingScreens(), []);
        const layoutEffect1 = noop.useLayoutEffect(() => closure_0(params1[23]).trackAppUIViewed(), []);
        const effect2 = noop.useEffect(() => screen(params1[24]).validate(), []);
        const tmp14 = screen(params1[20]);
        const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
        const tmp2Result10 = require("Navigator");
        const accessibilityNativeStackFocusTracking =
          require("useAccessibilityNativeStackFocusTracking").useAccessibilityNativeStackFocusTracking();
        obj2 = { backgroundColor: null, borderTopWidth: 1, borderTopColor: null };
        ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
        const tmp2Result11 = require("useAccessibilityNativeStackFocusTracking");
        obj2.backgroundColor = require("useToken").useToken(screen(params1[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
        const tmp2Result12 = require("useToken");
        obj2.borderTopColor = require("useToken").useToken(screen(params1[9]).colors.BORDER_SUBTLE);
        const items4 = [tmp.backIcon];
        closure_7 = noop.useCallback(
          (navigation) => () => {
            const obj = { collapsable: false, children: null };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: null,
              hitSlop: null,
              children: null,
            };
            const intl = util.intl;
            obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
            obj2.hitSlop = BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP;
            const obj3 = {
              style: navigation.backIcon,
              importantForAccessibility: "no-hide-descendants",
              accessibilityElementsHidden: true,
              children: v65535(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
            };
            obj2.children = v65535(View, obj3);
            obj.children = v65535(Pressables.PressableOpacity, obj2);
            return v65535(View, obj);
          },
          items4,
        );
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
                closing = null != closure_1_7.getField("selected");
              }
              if (closing) {
                closure_1_7.setState({ selected: null });
              }
            },
          }),
          [],
        );
        const tmp2Result13 = require("useToken");
        const autoSettingsSearchSessionAnalytics =
          require("useAutoSettingsSearchSessionAnalytics").useAutoSettingsSearchSessionAnalytics();
        let obj3 = { value: tmp14(screen(params1[21]).USER_SETTINGS).analyticsLocations, children: null };
        const items5 = [closure_10(screen(params1[32]), {})];
        let obj4 = {
          style: tmp.statusBarSpacer,
          accessible: false,
          onAccessibilityEscape() {
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
            return closure_1_10(LeftAlignedHeaderTitle, { title: children.children });
          },
          headerTitleAlign: "center",
          unstable_headerInsets: { left: false, right: false },
        };
        obj5.screenListeners = { beforeRemove, transitionStart };
        obj5.initialRouteName = screen;
        const items6 = [
          closure_10(Screen.Screen, {
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
              obj.headerLeft = closure_7(navigation.navigation);
              obj.contentStyle = obj2;
              return obj;
            },
            listeners: memo1,
            getComponent() {
              return closure_0(params1[33]).default;
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
                      return closure_3_10(LeftAlignedHeaderTitle, {
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
                _modDef38(null != component, "[Settings Navigator] Invalid component for setting: " + closure_1_0);
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
            return closure_1_10(Screen.Screen, obj, tmp);
          }),
        ];
        obj5.children = items6;
        obj4.children = closure_11(Screen.Navigator, obj5);
        items5[1] = closure_10(closure_5, obj4);
        obj3.children = items5;
        return closure_11(require("useAnalyticsLocations").AnalyticsLocationProvider, obj3);
      },
);
