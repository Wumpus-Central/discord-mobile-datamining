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
  const tmp5 = collapsed(Text_Text.Heading, {
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
    items[1] = collapsed(closure_14, obj2);
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
const NativeStackNavigator = fn(9344);
let closure_12 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5092);
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
  ? function SettingHeaderBadge(badge) {
      const cResult = c.c(1);
      if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: native.BetaSizes.SMALL };
          const tmp7 = collapsed(native.BetaTag, obj2);
          cResult[0] = tmp7;
          let first = tmp7;
        } else {
          first = cResult[0];
        }
        return first;
      }
    }
  : function SettingHeaderBadge(badge) {
      if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
        const obj = { size: native.BetaSizes.SMALL };
        return collapsed(native.BetaTag, obj);
      }
    };
ReactCompilerGating = fn(558);
const obj7 = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SettingsNavigator() {
        const cResult = require("c").c(54);
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
        const tmpResult9 = require("useStateFromStores");
        const analyticsLocations = screen(params1[20])(screen(tmp2[21]).USER_SETTINGS).analyticsLocations;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              return () => {
                if (onClose != null) {
                  tmp();
                }
              };
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
          class T {
            constructor() {
              return () => {
                if (onClose != null) {
                  tmp();
                }
              };
            }
          }
        }
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
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
          cResult[10] = items3;
          let tmp25 = items3;
        } else {
          class N {
            constructor() {
              obj = closure_0(params[23]);
              return obj.trackAppUIViewed();
            }
          }
          tmp25 = cResult[10];
        }
        const layoutEffect = obj5.useLayoutEffect(N, tmp25);
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              obj = closure_0(params[23]);
              return obj.trackAppUIViewed();
            }
          }
          const items4 = [];
          class E {
            constructor() {
              return closure_6.locale;
            }
          }
          cResult[12] = tmp29;
          let tmp28 = tmp29;
          const tmp27 = items4;
        } else {
          class N {
            constructor() {
              obj = closure_0(params[23]);
              return obj.trackAppUIViewed();
            }
          }
          tmp28 = cResult[12];
        }
        const effect2 = obj5.useEffect(tmp28, tmp27);
        const tmp22 = screen(params1[20]);
        const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
        const tmpResult10 = require("Navigator");
        const accessibilityNativeStackFocusTracking =
          require("useAccessibilityNativeStackFocusTracking").useAccessibilityNativeStackFocusTracking();
        ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
        const tmpResult11 = require("useAccessibilityNativeStackFocusTracking");
        const token = require("useToken").useToken(tmp21(tmp2[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
        const tmpResult12 = require("useToken");
        const token1 = require("useToken").useToken(tmp21(tmp2[9]).colors.BORDER_SUBTLE);
        if (cResult[13] === token) {
          class N {
            constructor() {
              obj = closure_0(params[23]);
              return obj.trackAppUIViewed();
            }
          }
          View = tmp35;
          if (cResult[16] !== tmp4.backIcon) {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
            cResult[16] = tmp4.backIcon;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
            cResult[17] = X;
          } else {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
          }
          class E {
            constructor() {
              return closure_6.locale;
            }
          }
          if (cResult[18] !== navigation) {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
            cResult[18] = navigation;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
            cResult[19] = tmp38;
          } else {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
            tmp40[0] = function transitionEnd(data) {
              let isActive = data.data.closing;
              const state = listeners.getState();
              if (isActive) {
                isActive = state.isActive;
              }
              if (isActive) {
                isActive = "" === state.query;
              }
              if (isActive) {
                listeners.setState({ isActive: false });
              }
            };
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
          } else {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
            tmp42[0] = function transitionEnd(data) {
              let closing = data.data.closing;
              if (closing) {
                closing = null != listeners.getField("selected");
              }
              if (closing) {
                listeners.setState({ selected: null });
              }
            };
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
          } else {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
          }
          UserSettingSearchStore = tmp42;
          const autoSettingsSearchSessionAnalytics = tmp(tmp2[31]).useAutoSettingsSearchSessionAnalytics();
          const _Symbol3 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
            const tmp45 = closure_10(tmp21(tmp2[32]), {});
          } else {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
          }
          const _Symbol4 = Symbol;
          const statusBarSpacer = tmp4.statusBarSpacer;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
            cResult[23] = tmp47;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
          } else {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
          }
          const _Symbol5 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
            cResult[24] = tmp49;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
          } else {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
          }
          if (cResult[25] !== accessibilityNativeStackOptions) {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
            tmp51[1] = tmp46;
            tmp51[3] = tmp48;
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
            let merged = Object.assign(accessibilityNativeStackOptions);
            cResult[25] = accessibilityNativeStackOptions;
            cResult[26] = tmp51;
          } else {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
          }
          if (cResult[27] === beforeRemove) {
            class X {
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
                    children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                  };
                  obj2.children = collapsed(View, obj3);
                  obj.children = collapsed(Pressables.PressableOpacity, obj2);
                  return collapsed(View, obj);
                };
              }
            }
            if (cResult[30] === tmp35) {
              class X {
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
                      children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                    };
                    obj2.children = collapsed(View, obj3);
                    obj.children = collapsed(Pressables.PressableOpacity, obj2);
                    return collapsed(View, obj);
                  };
                }
              }
              const _Symbol6 = Symbol;
              class E {
                constructor() {
                  return closure_6.locale;
                }
              }
              if (cResult[34] !== tmp55) {
                class X {
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
                        children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                      };
                      obj2.children = collapsed(View, obj3);
                      obj.children = collapsed(Pressables.PressableOpacity, obj2);
                      return collapsed(View, obj);
                    };
                  }
                }
                let obj3 = { name: null, options: null, listeners: null, getComponent: null };
                class E {
                  constructor() {
                    return closure_6.locale;
                  }
                }
                obj3.name = constants2.OVERVIEW;
                obj3.options = tmp55;
                obj3.listeners = tmp40;
                obj3.getComponent = tmp57;
                const tmp60 = closure_10(Screen.Screen, obj3);
                cResult[34] = tmp55;
                cResult[35] = tmp60;
              } else {
                class X {
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
                        children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                      };
                      obj2.children = collapsed(View, obj3);
                      obj.children = collapsed(Pressables.PressableOpacity, obj2);
                      return collapsed(View, obj);
                    };
                  }
                }
              }
              if (cResult[36] === tmp35) {
                class X {
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
                        children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
                      };
                      obj2.children = collapsed(View, obj3);
                      obj.children = collapsed(Pressables.PressableOpacity, obj2);
                      return collapsed(View, obj);
                    };
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
                      headerLeft: LocaleStore(navigation.navigation),
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
              cResult[36] = tmp35;
              cResult[37] = X;
              cResult[38] = params1;
              cResult[39] = screen;
              cResult[40] = mapped;
            }
            function re(navigation) {
              const obj = {
                title: null,
                headerLeft: null,
                headerBackVisible: false,
                headerShadowVisible: false,
                contentStyle: null,
              };
              const intl = util.intl;
              obj.title = intl.string(util.t["3D5yo/"]);
              obj.headerLeft = LocaleStore(navigation.navigation);
              obj.contentStyle = contentStyle;
              return obj;
            }
            class E {
              constructor() {
                return closure_6.locale;
              }
            }
            cResult[30] = tmp35;
            cResult[31] = X;
            cResult[32] = re;
          }
          let obj4 = { beforeRemove, transitionStart };
          cResult[27] = beforeRemove;
          cResult[28] = transitionStart;
          cResult[29] = obj4;
          const tmpResult14 = tmp(tmp2[31]);
        }
        const obj6 = { backgroundColor: token, borderTopWidth: 1, borderTopColor: token1 };
        cResult[13] = token;
        cResult[14] = token1;
        cResult[15] = obj6;
        const tmpResult13 = require("useToken");
      }
    : function SettingsNavigator() {
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
        const items2 = [closure_6];
        const stateFromStores = require("useStateFromStores").useStateFromStores(items2, () => closure_6.locale);
        const tmp2Result9 = require("useStateFromStores");
        const memo = noop.useMemo(() => closure_0(params1[22]).getSettingScreens(), []);
        const layoutEffect = noop.useLayoutEffect(() => closure_0(params1[23]).trackAppUIViewed(), []);
        const effect2 = noop.useEffect(() => screen(params1[24]).validate(), []);
        const tmp13 = screen(params1[20]);
        const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
        const tmp2Result10 = require("Navigator");
        const accessibilityNativeStackFocusTracking =
          require("useAccessibilityNativeStackFocusTracking").useAccessibilityNativeStackFocusTracking();
        let obj2 = { backgroundColor: null, borderTopWidth: 1, borderTopColor: null };
        ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
        const tmp2Result11 = require("useAccessibilityNativeStackFocusTracking");
        obj2.backgroundColor = require("useToken").useToken(screen(params1[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
        const tmp2Result12 = require("useToken");
        obj2.borderTopColor = require("useToken").useToken(screen(params1[9]).colors.BORDER_SUBTLE);
        const items3 = [tmp.backIcon];
        closure_6 = noop.useCallback(
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
              children: collapsed(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation }),
            };
            obj2.children = collapsed(View, obj3);
            obj.children = collapsed(Pressables.PressableOpacity, obj2);
            return collapsed(View, obj);
          },
          items3,
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
                closing = null != listeners.getField("selected");
              }
              if (closing) {
                listeners.setState({ selected: null });
              }
            },
          }),
          [],
        );
        const tmp2Result13 = require("useToken");
        const autoSettingsSearchSessionAnalytics =
          require("useAutoSettingsSearchSessionAnalytics").useAutoSettingsSearchSessionAnalytics();
        let obj3 = { value: tmp13(screen(params1[21]).USER_SETTINGS).analyticsLocations, children: null };
        const items4 = [closure_10(screen(params1[32]), {})];
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
            return closure_1_10(LeftAlignedHeaderTitle, { title: children.children });
          },
          headerTitleAlign: "center",
          unstable_headerInsets: { left: false, right: false },
        };
        obj5.screenListeners = { beforeRemove, transitionStart };
        obj5.initialRouteName = screen;
        const items5 = [
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
              obj.headerLeft = closure_6(navigation.navigation);
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
                obj.headerLeft = closure_6(navigation.navigation);
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
        obj5.children = items5;
        obj4.children = closure_11(Screen.Navigator, obj5);
        items4[1] = closure_10(obj2, obj4);
        obj3.children = items4;
        return closure_11(require("useAnalyticsLocations").AnalyticsLocationProvider, obj3);
      },
);
