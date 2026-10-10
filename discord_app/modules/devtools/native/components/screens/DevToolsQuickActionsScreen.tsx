// discord_app/modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/02000_asyncRequireImpl.js";
import UserSettings from "../../../../user_settings/UserSettings.tsx";
import UserSettingsProtoActionCreators from "../../../../user_settings/UserSettingsProtoActionCreators.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import UserSettingsActionCreatorsDefault from "../../../../../actions/UserSettingsActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import NUFActionCreators from "../../../../nuf/native/NUFActionCreators.tsx";
import nuf_NUFActionCreators from "../../../../nuf/NUFActionCreators.tsx";
import requestReviewModalDefault from "../../../../feedback/native/requestReviewModal.android.tsx";
import AccessibilityActionCreators from "../../../../a11y/AccessibilityActionCreators.tsx";
import DevToolsActionCreators from "../../../DevToolsActionCreators.tsx";
import OverridePremiumTypeActions from "../../../../premium/OverridePremiumTypeActions.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";
import OverridePremiumTypeStore from "../../../../premium/OverridePremiumTypeStore.tsx";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";
import ThemeStore from "../../../../user_settings/ThemeStore.tsx";
import UnsyncedUserSettingsStore from "../../../../user_settings/UnsyncedUserSettingsStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import DevToolsSettingsStore from "../../../DevToolsSettingsStore.tsx";

require = fn;
function handleNewUserOnboarding() {
  nuf_NUFActionCreators.setNewUser(NewUserTypes.ORGANIC_REGISTERED);
  NUFActionCreators.startOnboarding();
}
function handleThemeChange(arg0) {
  UserSettingsActionCreatorsDefault.updateTheme(arg0 ? ThemeTypes.LIGHT : ThemeTypes.DARK);
}
function handleReducedMotionChange(arg0) {
  let str = "no-preference";
  if (arg0) {
    str = "reduce";
  }
  const result = AccessibilityActionCreators.setPrefersReducedMotion(str);
}
function launchPasskeyPromoSheet() {
  ModalActionCreatorsDefault.pop();
  asyncRequireImpl(15966, dependencyMap.paths).then((result) => {
    result = result.default.openPasskeyUpsellPromoSheet();
  });
}
function showVibingWumpus() {
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(10434, dependencyMap.paths),
    {
      onClose() {},
    },
    VIBING_WUMPUS_MODAL_KEY,
  );
}
function handleResetDoubleTapState() {
  const result = UserSettingsProtoActionCreators.removeDismissedContent(
    dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER,
  );
  const result1 = UserSettingsProtoActionCreators.removeDismissedContent(
    dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL,
  );
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync(
    "textAndImages",
    async (arg0) => {
      arg0.defaultReactionEmoji = undefined;
    },
    UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
}
function launchTotpSetupSuccess() {
  ModalActionCreatorsDefault.pop();
  const items = [asyncRequireImpl(15010, dependencyMap.paths), asyncRequireImpl(15012, dependencyMap.paths)];
  Promise.all(items).then((result) => {
    const iter = result[Symbol.iterator]();
    let nextResult;
    if (iter !== undefined) {
      nextResult = iter.next();
    }
    let nextResult1;
    let tmp4 = tmp;
    if (iter !== undefined) {
      tmp4 = tmp6;
      if (iter !== undefined) {
        nextResult1 = iter.next();
        tmp4 = tmp6;
      }
    }
    if (!tmp4) {
      iter.return();
    }
    nextResult.default.open(nextResult1.TwoFAModalSetupSections.SUCCESS);
  });
}
function handleShowAppRatingModal() {
  const self = this;
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_34 = async function _handleShowAppRatingModal() {
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
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: requestReviewModalDefault(), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_128_0 = value;
        let str2 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
        if (!closure_128_0.ok) {
          const _HermesInternal = HermesInternal;
          str2 = "Review request failed: " + closure_128_0.error;
        }
        const obj = { text: str2, icon: closure_129_0(closure_129_2[35]).WrenchIcon };
        closure_129_1(closure_129_2[34]).open("DEV_APP_RATING_REQUEST", obj);
        c3 = 3;
        return { value: "IconComponent", done: "+51" };
      }
    } catch (tmp15) {
      c3 = tmp;
      throw tmp15;
    }
  }
};
const ScrollView = fn(17).ScrollView;
const ThemeTypes = fn(1085).ThemeTypes;
const NewUserTypes = fn(12428).NewUserTypes;
const PremiumConstants = fn(1392);
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = fn(10381).VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = fn(1208).SystemThemeState;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_24 = createStyles.createStyles(obj2);
function launchMFA() {
  ModalActionCreatorsDefault.pop();
  asyncRequireImpl(15950, dependencyMap.paths).then((openMFAModal) => {
    const obj = { ticket: "ticket", methods: null };
    const items = [
      { type: "webauthn", challenge: "{}" },
      { type: "totp" },
      { type: "backup" },
      { type: "sms" },
      { type: "password" },
    ];
    obj.methods = items;
    openMFAModal.openMFAModal(
      obj,
      () => {},
      () => {},
    );
  });
}
const ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DevToolsQuickActionsScreen() {
      const cResult = locale(stateFromStores[37]).c(96);
      const tmp4 = closure_24();
      let obj = locale(stateFromStores[37]);
      const isCheckpointEnabled = locale(stateFromStores[38]).useIsCheckpointEnabled("DevToolsQuickActionsScreen");
      showDevWidget(stateFromStores[39])();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
        class R {
          constructor() {
            obj = {
              theme: closure_1_11.theme,
              usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON,
              locale: closure_1_10.locale,
              showDevWidget: closure_1_14.showDevWidget,
            };
            return obj;
          }
        }
        cResult[0] = items;
        cResult[1] = R;
        tmp7 = items;
      } else {
        [tmp7, tmp8] = cResult;
      }
      let obj2 = locale(stateFromStores[38]);
      const stateFromStoresObject = locale(stateFromStores[40]).useStateFromStoresObject(tmp7, R);
      ({ theme, usingSystemTheme, locale } = stateFromStoresObject);
      showDevWidget = stateFromStoresObject.showDevWidget;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        const fn = function k() {
          return currentUser.getCurrentUser();
        };
        cResult[2] = items1;
        cResult[3] = fn;
        let tmp15 = fn;
        class R {
          constructor() {
            obj = {
              theme: closure_1_11.theme,
              usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON,
              locale: closure_1_10.locale,
              showDevWidget: closure_1_14.showDevWidget,
            };
            return obj;
          }
        }
      } else {
        tmp15 = cResult[3];
        const tmp14 = cResult[2];
      }
      const tmpResult = locale(stateFromStores[40]);
      stateFromStores = locale(stateFromStores[40]).useStateFromStores(tmp14, tmp15);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [OverridePremiumTypeStore];
        class K {
          constructor() {
            return closure_1_9.getPremiumTypeOverride();
          }
        }
        cResult[4] = items2;
        cResult[5] = K;
        let tmp19 = K;
        class R {
          constructor() {
            obj = {
              theme: closure_1_11.theme,
              usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON,
              locale: closure_1_10.locale,
              showDevWidget: closure_1_14.showDevWidget,
            };
            return obj;
          }
        }
      } else {
        tmp19 = cResult[5];
        const tmp18 = cResult[4];
      }
      const tmpResult4 = locale(stateFromStores[40]);
      const stateFromStores1 = locale(stateFromStores[40]).useStateFromStores(tmp18, tmp19);
      const tmpResult5 = locale(stateFromStores[40]);
      [tmp23, asyncGeneratorStep] = stateFromStores1(setting.useState(false), 2);
      let IgnoreProfileSpeedbumpDisabled = locale(tmp2[41]).IgnoreProfileSpeedbumpDisabled;
      setting = IgnoreProfileSpeedbumpDisabled.useSetting();
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [AccessibilityStore];
        class X {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        cResult[6] = items3;
        cResult[7] = X;
        let tmp26 = X;
        class R {
          constructor() {
            obj = {
              theme: closure_1_11.theme,
              usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON,
              locale: closure_1_10.locale,
              showDevWidget: closure_1_14.showDevWidget,
            };
            return obj;
          }
        }
      } else {
        tmp26 = cResult[7];
        const tmp25 = cResult[6];
      }
      const tmp22 = stateFromStores1(setting.useState(false), 2);
      const stateFromStores2 = locale(stateFromStores[40]).useStateFromStores(tmp25, tmp26);
      if (cResult[8] !== locale) {
        class J {
          constructor() {
            if ("en-US" !== locale) {
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj2 = closure_1(closure_2[22]);
              updateLocaleResult = obj2.updateLocale("en-US");
            } else {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[22]);
              str = "pt-BR";
              updateLocaleResult1 = obj.updateLocale("pt-BR");
            }
            return;
          }
        }
        cResult[8] = locale;
        class X {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        cResult[9] = J;
      } else {
        class J {
          constructor() {
            if ("en-US" !== locale) {
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj2 = closure_1(closure_2[22]);
              updateLocaleResult = obj2.updateLocale("en-US");
            } else {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[22]);
              str = "pt-BR";
              updateLocaleResult1 = obj.updateLocale("pt-BR");
            }
            return;
          }
        }
      }
      if (tmp23) {
        class J {
          constructor() {
            if ("en-US" !== locale) {
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj2 = closure_1(closure_2[22]);
              updateLocaleResult = obj2.updateLocale("en-US");
            } else {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[22]);
              str = "pt-BR";
              updateLocaleResult1 = obj.updateLocale("pt-BR");
            }
            return;
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor() {
              if ("en-US" !== locale) {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                updateLocaleResult = obj2.updateLocale("en-US");
              } else {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                str = "pt-BR";
                updateLocaleResult1 = obj.updateLocale("pt-BR");
              }
              return;
            }
          }
          class X {
            constructor() {
              return closure_1_7.useReducedMotion;
            }
          }
          const tmp35 = closure_21(locale(tmp2[42]).default, {});
        } else {
          class J {
            constructor() {
              if ("en-US" !== locale) {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                updateLocaleResult = obj2.updateLocale("en-US");
              } else {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                str = "pt-BR";
                updateLocaleResult1 = obj.updateLocale("pt-BR");
              }
              return;
            }
          }
        }
        class X {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
      } else {
        class J {
          constructor() {
            if ("en-US" !== locale) {
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj2 = closure_1(closure_2[22]);
              updateLocaleResult = obj2.updateLocale("en-US");
            } else {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[22]);
              str = "pt-BR";
              updateLocaleResult1 = obj.updateLocale("pt-BR");
            }
            return;
          }
        }
        const container = tmp4.container;
        if (cResult[11] !== tmp30) {
          class J {
            constructor() {
              if ("en-US" !== locale) {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                updateLocaleResult = obj2.updateLocale("en-US");
              } else {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                str = "pt-BR";
                updateLocaleResult1 = obj.updateLocale("pt-BR");
              }
              return;
            }
          }
          tmp32[0] = tmp30;
          class X {
            constructor() {
              return closure_1_7.useReducedMotion;
            }
          }
          cResult[12] = tmp32;
        } else {
          class J {
            constructor() {
              if ("en-US" !== locale) {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                updateLocaleResult = obj2.updateLocale("en-US");
              } else {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                str = "pt-BR";
                updateLocaleResult1 = obj.updateLocale("pt-BR");
              }
              return;
            }
          }
        }
        class X {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        const items4 = [tmp4.content, tmp32];
        cResult[13] = tmp4.content;
        class R {
          constructor() {
            obj = {
              theme: closure_1_11.theme,
              usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON,
              locale: closure_1_10.locale,
              showDevWidget: closure_1_14.showDevWidget,
            };
            return obj;
          }
        }
        cResult[14] = tmp32;
        cResult[15] = items4;
      }
      const tmpResult6 = locale(stateFromStores[40]);
    }
  : function DevToolsQuickActionsScreen() {
      const tmp = closure_24();
      let isCheckpointEnabled = locale(5460).useIsCheckpointEnabled("DevToolsQuickActionsScreen");
      let obj = locale(5460);
      const tmp6 = showDevWidget(1631)();
      const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
      const stateFromStoresObject = locale(504).useStateFromStoresObject(items, () => ({
        theme: theme.theme,
        usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON,
        locale: locale.locale,
        showDevWidget: showDevWidget.showDevWidget,
      }));
      ({ usingSystemTheme, locale } = stateFromStoresObject);
      showDevWidget = stateFromStoresObject.showDevWidget;
      let obj2 = locale(504);
      const items1 = [UserStore];
      dependencyMap = locale(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
      let obj3 = locale(504);
      const items2 = [OverridePremiumTypeStore];
      _slicedToArray = locale(504).useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
      const obj4 = locale(504);
      [tmp9, asyncGeneratorStep] = setting.useState(false);
      let IgnoreProfileSpeedbumpDisabled = locale(2041).IgnoreProfileSpeedbumpDisabled;
      setting = IgnoreProfileSpeedbumpDisabled.useSetting();
      const tmp8 = _slicedToArray(setting.useState(false), 2);
      const items3 = [AccessibilityStore];
      [][0] = locale;
      const stateFromStores = locale(504).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
      if (tmp9) {
        return closure_21(locale(15970).default, {});
      } else {
        let obj6 = { style: tmp.container, contentContainerStyle: null, children: null };
        const items4 = [tmp.content];
        let obj7 = { paddingBottom: tmp.content.padding + tmp6.bottom };
        items4[1] = obj7;
        obj6.contentContainerStyle = items4;
        const obj8 = { title: "General", hasIcons: false, children: null };
        const obj9 = {
          label: "Show Dev Widget",
          value: showDevWidget,
          onValueChange() {
            return DevToolsActionCreators.updateDevToolsSettings({ showDevWidget: !showDevWidget });
          },
        };
        obj8.children = closure_21(locale(6895).TableSwitchRow, obj9);
        const items5 = [closure_21(locale(6264).TableRowGroup, obj8), , , , , , , , ,];
        const obj10 = { size: tmp5(587).space.PX_16 };
        items5[1] = closure_21(locale(1200).Spacer, obj10);
        let str = "Light Theme";
        if (usingSystemTheme) {
          str = "(using system theme)";
        }
        const obj11 = { title: "Appearance", hasIcons: true, children: null };
        const obj12 = {
          label: str,
          disabled: usingSystemTheme,
          icon: closure_21(locale(15539).ThemeLightIcon, {}),
          value: locale(4969).isThemeLight(stateFromStoresObject.theme),
          onValueChange: handleThemeChange,
        };
        const items6 = [closure_21(locale(6895).TableSwitchRow, obj12)];
        const obj13 = {
          label: "Reduced Motion",
          icon: closure_21(locale(15599).AccessibilityIcon, {}),
          value: stateFromStores,
          onValueChange: handleReducedMotionChange,
        };
        items6[1] = closure_21(locale(6895).TableSwitchRow, obj13);
        obj11.children = items6;
        items5[2] = closure_22(locale(6264).TableRowGroup, obj11);
        const obj14 = { size: tmp5(587).space.PX_16 };
        items5[3] = closure_21(locale(1200).Spacer, obj14);
        const obj15 = {
          title: "Override Client-Side Premium Type",
          hasIcons: true,
          children: closure_17.map((item) => {
            ({ label, value } = item);
            locale = value;
            return closure_1_21(
              locale(6895).TableSwitchRow,
              {
                onValueChange(arg0) {
                  const result = OverridePremiumTypeActions.updateClientPremiumTypeOverride(
                    arg0 ? value : collapsedCategories,
                    closure_2,
                  );
                },
                label,
                icon: closure_1_21(locale(9723).PencilIcon, {}),
                value: value === closure_3,
              },
              label,
            );
          }),
        };
        items5[4] = closure_21(locale(6264).TableRowGroup, obj15);
        const obj16 = { size: tmp5(587).space.PX_16 };
        items5[5] = closure_21(locale(1200).Spacer, obj16);
        const obj17 = { title: null, hasIcons: true, children: null };
        const intl = locale(1126).intl;
        obj17.title = intl.string(locale(1126).t["Aojq+L"]);
        let str2 = "Change to en-US";
        if ("en-US" === locale) {
          str2 = "Change to pt-BR";
        }
        const obj18 = {
          label: str2,
          subLabel: "Toggle to a non-english locale for change log testing, etc.",
          onPress: tmp12,
          icon: closure_21(locale(15695).LanguageIcon, {}),
          trailing: closure_21(locale(6188).TableRowArrow, {}),
        };
        const items7 = [closure_21(locale(6179).TableRow, obj18), , , , , , , , , , , ,];
        const obj19 = {
          label: "Reset Double Tap Emoji State",
          subLabel: "Clears double tap emoji and resets dismissible content.",
          onPress: handleResetDoubleTapState,
          icon: closure_21(locale(6639).KeyIcon, {}),
          trailing: closure_21(locale(6188).TableRowArrow, {}),
        };
        items7[1] = closure_21(locale(6179).TableRow, obj19);
        const obj20 = {
          label: null,
          subLabel: "Dismisses dev tools when launching.",
          onPress: null,
          icon: null,
          trailing: null,
        };
        const intl2 = locale(1126).intl;
        obj20.label = intl2.string(locale(1126).t.yoWDXU);
        obj20.onPress = handleNewUserOnboarding;
        obj20.icon = closure_21(locale(15841).WrenchIcon, {});
        obj20.trailing = closure_21(locale(6188).TableRowArrow, {});
        items7[2] = closure_21(locale(6179).TableRow, obj20);
        const obj21 = {
          label: "Launch MFA Challenge Modal",
          subLabel: "Dismisses dev tools when launching.",
          onPress: launchMFA,
          icon: closure_21(locale(6639).KeyIcon, {}),
          trailing: closure_21(locale(6188).TableRowArrow, {}),
        };
        items7[3] = closure_21(locale(6179).TableRow, obj21);
        const obj22 = {
          label: "Show Passkey Promo Sheet",
          subLabel: "Skips eligibility checks. Dismisses dev tools when launching.",
          onPress: launchPasskeyPromoSheet,
          icon: closure_21(locale(6639).KeyIcon, {}),
          trailing: closure_21(locale(6188).TableRowArrow, {}),
        };
        items7[4] = closure_21(locale(6179).TableRow, obj22);
        const obj23 = {
          label: "Show TOTP Setup Success",
          subLabel: "Dismisses dev tools when launching.",
          onPress: launchTotpSetupSuccess,
          icon: closure_21(locale(6639).KeyIcon, {}),
          trailing: closure_21(locale(6188).TableRowArrow, {}),
        };
        items7[5] = closure_21(locale(6179).TableRow, obj23);
        const obj24 = {
          label: "Launch Vibing Wumpus",
          subLabel: "Vibe with the one and only",
          onPress: showVibingWumpus,
          icon: closure_21(locale(6639).KeyIcon, {}),
          trailing: closure_21(locale(6188).TableRowArrow, {}),
        };
        items7[6] = closure_21(locale(6179).TableRow, obj24);
        let tmp15Result = isCheckpointEnabled;
        if (isCheckpointEnabled) {
          const obj25 = {
            label: "Launch Checkpoint",
            subLabel: "Look back at your year on Discord",
            onPress() {
              const checkpointData = locale(15972).fetchCheckpointData();
              showDevWidget(15975)("devtools");
            },
            icon: closure_21(locale(6639).KeyIcon, {}),
            trailing: closure_21(locale(6188).TableRowArrow, {}),
          };
          tmp15Result = closure_21(locale(6179).TableRow, obj25);
        }
        items7[7] = tmp15Result;
        let tmp15Result2 = isCheckpointEnabled;
        if (isCheckpointEnabled) {
          const obj26 = {
            label: "Reset Checkpoint",
            onPress: asyncGeneratorStep(async () => {
              if (dependencyMap === 2) {
                dependencyMap = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: "+51" };
                }
              } else {
                try {
                  dependencyMap = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      v1 = 1;
                      dependencyMap = 1;
                      const obj6 = { value: tmp4(15972).resetCheckpoint(), done: false };
                      return obj6;
                    }
                  } else if (arg0 === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    if (value) {
                      v1(4809).open("CHECKPOINT_RESET", { text: "success" });
                      const obj2 = v1(4809);
                    } else {
                      tmp4(4808).presentError("error");
                      const obj = tmp4(4808);
                    }
                    dependencyMap = 3;
                  }
                } catch (tmp14) {
                  dependencyMap = tmp;
                  throw tmp14;
                }
              }
            }),
            icon: closure_21(locale(6639).KeyIcon, {}),
            trailing: closure_21(locale(6188).TableRowArrow, {}),
          };
          tmp15Result2 = closure_21(locale(6179).TableRow, obj26);
        }
        items7[8] = tmp15Result2;
        if (isCheckpointEnabled) {
          const obj27 = {
            label: "Launch Checkpoint with fake data",
            subLabel: "Use mock stats instead of GET /checkpoint",
            onPress() {
              const checkpointData = locale(15972).fetchCheckpointData(true);
              showDevWidget(15975)("devtools");
            },
            icon: closure_21(locale(6639).KeyIcon, {}),
            trailing: closure_21(locale(6188).TableRowArrow, {}),
          };
          isCheckpointEnabled = closure_21(locale(6179).TableRow, obj27);
        }
        items7[9] = isCheckpointEnabled;
        const obj28 = {
          label: "Test captcha",
          onPress: locale(16029).showCaptchaTestModal,
          icon: closure_21(locale(6639).KeyIcon, {}),
          trailing: closure_21(locale(6188).TableRowArrow, {}),
        };
        items7[10] = closure_21(locale(6179).TableRow, obj28);
        const obj29 = {
          label: "Ignored Profile Speedbump Suppression",
          subLabel: "Suppresses the speedbump for ignored profiles.",
          icon: closure_21(locale(6649).EyeSlashIcon, {}),
          value: setting,
          onValueChange() {
            const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
            return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
          },
        };
        items7[11] = closure_21(locale(6895).TableSwitchRow, obj29);
        const obj30 = {
          label: "Show App Rating Modal",
          subLabel:
            "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.",
          onPress: handleShowAppRatingModal,
          icon: closure_21(locale(15841).WrenchIcon, {}),
        };
        items7[12] = closure_21(locale(6179).TableRow, obj30);
        obj17.children = items7;
        items5[6] = closure_22(locale(6264).TableRowGroup, obj17);
        const obj31 = { size: tmp5(587).space.PX_16 };
        items5[7] = closure_21(locale(1200).Spacer, obj31);
        const obj32 = { title: "Crash Actions", hasIcons: true, children: null };
        const obj33 = {
          icon: closure_21(locale(15841).WrenchIcon, {}),
          label: "Force Native Crash",
          onPress() {
            return showDevWidget(1255).crash();
          },
        };
        const items8 = [closure_21(locale(6179).TableRow, obj33), , , , ,];
        const obj34 = {
          icon: closure_21(locale(15841).WrenchIcon, {}),
          label: "Force JS Crash",
          onPress() {
            const error = new Error("Force JS Crash");
            throw error;
          },
        };
        items8[1] = closure_21(locale(6179).TableRow, obj34);
        const obj35 = {
          icon: closure_21(locale(15841).WrenchIcon, {}),
          label: "Force JS Boundary Crash",
          onPress() {
            asyncGeneratorStep(true);
          },
        };
        items8[2] = closure_21(locale(6179).TableRow, obj35);
        const obj36 = {
          icon: closure_21(locale(15841).WrenchIcon, {}),
          label: "Force libdiscore Crash",
          onPress() {
            locale(562).crash();
          },
        };
        items8[3] = closure_21(locale(6179).TableRow, obj36);
        const obj37 = {
          icon: closure_21(locale(15841).WrenchIcon, {}),
          label: "Force libdiscore Store Crash",
          subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
          onPress() {
            showDevWidget(584).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
          },
        };
        items8[4] = closure_21(locale(6179).TableRow, obj37);
        const obj38 = {
          icon: closure_21(locale(15841).WrenchIcon, {}),
          label: "Force libdiscore Store Error",
          subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
          onPress() {
            const socket2 = socket.getSocket();
            const obj = showDevWidget(584);
            showDevWidget(584)
              .dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" })
              .catch((error) => {
                const result = closure_0.resetSocketOnDispatchError({
                  error,
                  action: "LIBDISCORE_SIMULATE_STORE_ERROR",
                });
              });
          },
        };
        items8[5] = closure_21(locale(6179).TableRow, obj38);
        obj32.children = items8;
        items5[8] = closure_22(locale(6264).TableRowGroup, obj32);
        const tmp2Result = locale(4969);
        let isIOSResult = locale(1382).isIOS();
        if (isIOSResult) {
          const obj39 = { children: null };
          const obj40 = { size: tmp5(587).space.PX_16 };
          const items9 = [closure_21(locale(1200).Spacer, obj40)];
          const obj41 = { title: "Memory Actions", hasIcons: true, children: null };
          const obj42 = {
            icon: closure_21(locale(15841).WrenchIcon, {}),
            label: "Trigger Memory Warning",
            subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
            onPress() {
              return showDevWidget(1255).triggerMemoryWarning();
            },
          };
          obj41.children = closure_21(locale(6179).TableRow, obj42);
          items9[1] = closure_21(locale(6264).TableRowGroup, obj41);
          obj39.children = items9;
          isIOSResult = closure_22(closure_23, obj39);
        }
        items5[9] = isIOSResult;
        obj6.children = items5;
        return closure_22(ScrollView, obj6);
      }
      let obj5 = locale(504);
    };
