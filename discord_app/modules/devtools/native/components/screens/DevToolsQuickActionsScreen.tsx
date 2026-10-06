// discord_app/modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import ThemeConstants from "../../../../user_settings/ThemeConstants.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import UserSettings from "../../../../user_settings/UserSettings.tsx";
import UserSettingsProtoActionCreators from "../../../../user_settings/UserSettingsProtoActionCreators.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import UserSettingsActionCreatorsDefault from "../../../../../actions/UserSettingsActionCreators.tsx";
import Constants2 from "../../../../self_mod/Constants.tsx";
import NUFActionCreators from "../../../../nuf/native/NUFActionCreators.tsx";
import NUFConstants from "../../../../nuf/NUFConstants.tsx";
import nuf_NUFActionCreators from "../../../../nuf/NUFActionCreators.tsx";
import requestReviewModalDefault from "../../../../feedback/native/requestReviewModal.android.tsx";
import AccessibilityActionCreators from "../../../../a11y/AccessibilityActionCreators.tsx";
import DevToolsActionCreators from "../../../DevToolsActionCreators.tsx";
import OverridePremiumTypeActions from "../../../../premium/OverridePremiumTypeActions.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";
import OverridePremiumTypeStore from "../../../../premium/OverridePremiumTypeStore.tsx";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";
import ThemeStore from "../../../../user_settings/ThemeStore.tsx";
import UnsyncedUserSettingsStore from "../../../../user_settings/UnsyncedUserSettingsStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import DevToolsSettingsStore from "../../../DevToolsSettingsStore.tsx";
import PremiumConstants from "../../../../premium/PremiumConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c2, c3, dependencyMap;

let closure_17;
let closure_18;
let closure_21;
let closure_22;
let closure_23;
let obj2;
let obj3;
function handleNewUserOnboarding() {
  obj = nuf_NUFActionCreators;
  obj.setNewUser(NewUserTypes.ORGANIC_REGISTERED);
  const obj2 = DispatcherDefault;
  obj2.wait(NUFActionCreators.startOnboarding);
}
function handleThemeChange(arg0) {
  obj = UserSettingsActionCreatorsDefault;
  obj.updateTheme(arg0 ? ThemeTypes.LIGHT : ThemeTypes.DARK);
}
function handleReducedMotionChange(arg0) {
  let str = "no-preference";
  const setPrefersReducedMotion = AccessibilityActionCreators.setPrefersReducedMotion;
  AccessibilityActionCreators;
  if (arg0) {
    str = "reduce";
  }
  const result = setPrefersReducedMotion(str);
}
function launchPasskeyPromoSheet() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
  const promise = asyncRequire(15529, dependencyMap.paths);
  promise.then((result) => {
    const _default = result.default;
    result = _default.openPasskeyUpsellPromoSheet();
  });
}
function showVibingWumpus() {
  obj = ModalActionCreatorsDefault;
  const obj2 = {
    onClose() {},
  };
  obj.pushLazy(asyncRequire(9851, dependencyMap.paths), obj2, VIBING_WUMPUS_MODAL_KEY);
}
function handleResetDoubleTapState() {
  obj = UserSettingsProtoActionCreators;
  const result = obj.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER);
  const obj2 = UserSettingsProtoActionCreators;
  const result1 = obj2.removeDismissedContent(
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
  const arr = ModalActionCreatorsDefault;
  arr.pop();
  const items = [asyncRequire(14582, dependencyMap.paths), asyncRequire(14584, dependencyMap.paths)];
  const allResult = all(items);
  allResult.then((result) => {
    const iter = result[Symbol.iterator]();
    let nextResult;
    if (iter !== undefined) {
      nextResult = iter.next();
    }
    let nextResult1;
    let tmp4 = tmp;
    const _default = nextResult.default;
    if (!tmp4) {
      tmp4 = tmp6;
      if (!tmp4) {
        nextResult1 = iter.next();
        tmp4 = tmp6;
      }
    }
    const TwoFAModalSetupSections = nextResult1.TwoFAModalSetupSections;
    if (!tmp4) {
      iter.return();
    }
    _default.open(TwoFAModalSetupSections.SUCCESS);
  });
}
function handleShowAppRatingModal() {
  return obj(...arguments);
}
let obj = function _handleShowAppRatingModal() {
  obj = _asyncToGenerator(async () => {
    let closure_0;
    let str;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
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
            let closure_1 = tmp4;
            tmp = undefined;
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
          tmp = value;
          const obj7 = closure_129_0(closure_129_2[35]);
          const designSystemsNotificationComponents =
            obj7.getDesignSystemsNotificationComponents("DevToolsQuickActionsScreen");
          const tmp33 = closure_129_1(closure_129_2[36]);
          if (designSystemsNotificationComponents) {
            let str3 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
            const openMana = tmp33.openMana;
            if (!tmp.ok) {
              const _HermesInternal2 = HermesInternal;
              str3 = "Review request failed: " + tmp.error;
            }
            const obj6 = { text: str3, icon: closure_129_0(closure_129_2[37]).WrenchIcon };
            openMana("DEV_APP_RATING_REQUEST", obj6);
          } else {
            obj = {
              key: "DEV_APP_RATING_REQUEST",
              icon() {
                return closure_1_21(closure_1_0(closure_1_2[37]).WrenchIcon, {});
              },
              content: str,
              toastDurationMs: 6000,
            };
            str = "Review requested -- no error returned. The OS decides whether to render the prompt.";
            const open = tmp33.open;
            if (!tmp.ok) {
              const _HermesInternal = HermesInternal;
              str = "Review request failed: " + tmp.error;
            }
            open(obj);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c3 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
let _slicedToArray = _slicedToArray_mod;
const ScrollView = react_native.ScrollView;
const ThemeTypes = Constants.ThemeTypes;
const NewUserTypes = NUFConstants.NewUserTypes;
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = Constants2.VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = ThemeConstants.SystemThemeState;
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = Fragment);
let createStyles = createStyles_mod;
obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_24 = createStyles(obj);
function launchMFA() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
  const promise = asyncRequire(15513, dependencyMap.paths);
  promise.then((openMFAModal) => {
    let items;
    obj = { ticket: "ticket", methods: items };
    items = [
      { type: "webauthn", challenge: "{}" },
      { type: "totp" },
      { type: "backup" },
      { type: "sms" },
      { type: "password" },
    ];
    openMFAModal.openMFAModal(
      obj,
      () => {},
      () => {},
    );
  });
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let locale;
      let premiumTypeOverride;
      let setting;
      let showDevWidget;
      let socket;
      let stateFromStores;
      let theme;
      let tmp14;
      let tmp15;
      let tmp18;
      let tmp19;
      let tmp23;
      let tmp25;
      let tmp26;
      let tmp7;
      let tmp8;
      let useReducedMotion;
      let useSystemTheme;
      let usingSystemTheme;
      const tmp2 = stateFromStores;
      obj = locale(stateFromStores[39]);
      const cResult = obj.c(96);
      const tmp4 = closure_24();
      let obj2 = locale(stateFromStores[40]);
      const isCheckpointEnabled = obj2.useIsCheckpointEnabled("DevToolsQuickActionsScreen");
      const tmp6 = showDevWidget(stateFromStores[41])();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
        class R {
          constructor() {
            return {
              theme: theme.theme,
              usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON,
              locale: locale.locale,
              showDevWidget: showDevWidget.showDevWidget,
            };
          }
        }
        cResult[0] = items;
        cResult[1] = R;
        tmp7 = items;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = locale(tmp2[42]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, R);
      ({ theme, usingSystemTheme, locale } = stateFromStoresObject);
      showDevWidget = stateFromStoresObject.showDevWidget;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        const fn = function k() {
          return currentUser.getCurrentUser();
        };
        cResult[2] = items1;
        cResult[3] = fn;
        tmp15 = fn;
        class R {
          constructor() {
            return {
              theme: theme.theme,
              usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON,
              locale: locale.locale,
              showDevWidget: showDevWidget.showDevWidget,
            };
          }
        }
      } else {
        tmp15 = cResult[3];
        tmp14 = cResult[2];
      }
      const tmpResult4 = locale(tmp2[42]);
      stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp15);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [OverridePremiumTypeStore];
        class G {
          constructor() {
            return premiumTypeOverride.getPremiumTypeOverride();
          }
        }
        cResult[4] = items2;
        cResult[5] = G;
        tmp19 = G;
        class R {
          constructor() {
            return {
              theme: theme.theme,
              usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON,
              locale: locale.locale,
              showDevWidget: showDevWidget.showDevWidget,
            };
          }
        }
      } else {
        tmp19 = cResult[5];
        tmp18 = cResult[4];
      }
      const tmpResult5 = locale(tmp2[42]);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp18, tmp19);
      [tmp23, _asyncToGenerator] = stateFromStores1(setting.useState(false), 2);
      stateFromStores1(setting.useState(false), 2);
      let IgnoreProfileSpeedbumpDisabled = locale(tmp2[43]).IgnoreProfileSpeedbumpDisabled;
      setting = IgnoreProfileSpeedbumpDisabled.useSetting();
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [AccessibilityStore];
        class X {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        cResult[6] = items3;
        cResult[7] = X;
        tmp26 = X;
        class R {
          constructor() {
            return {
              theme: theme.theme,
              usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON,
              locale: locale.locale,
              showDevWidget: showDevWidget.showDevWidget,
            };
          }
        }
      } else {
        tmp26 = cResult[7];
        tmp25 = cResult[6];
      }
      const tmpResult6 = locale(tmp2[42]);
      const stateFromStores2 = tmpResult6.useStateFromStores(tmp25, tmp26);
      if (cResult[8] !== locale) {
        const fn2 = function x() {
          if ("en-US" !== locale) {
            const obj2 = UserSettingsActionCreatorsDefault;
            obj2.updateLocale("en-US");
          } else {
            obj = UserSettingsActionCreatorsDefault;
            obj.updateLocale("pt-BR");
          }
        };
        cResult[8] = locale;
        class X {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        cResult[9] = fn2;
      }
      if (tmp23) {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          closure_21(locale(tmp2[44]).default, {});
          class X {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
        }
        class X {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
      } else {
        let tmp31;
        const sum = tmp4.content.padding + tmp6.bottom;
        const container = tmp4.container;
        if (cResult[11] !== sum) {
          let obj3 = { paddingBottom: sum };
          class X {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          cResult[12] = obj3;
          tmp31 = obj3;
        } else {
          tmp31 = cResult[12];
        }
        class X {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        const items4 = [tmp4.content, tmp31];
        cResult[13] = tmp4.content;
        class R {
          constructor() {
            return {
              theme: theme.theme,
              usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON,
              locale: locale.locale,
              showDevWidget: showDevWidget.showDevWidget,
            };
          }
        }
        cResult[14] = tmp31;
        cResult[15] = items4;
      }
    }
  : () => {
      let TableRow19;
      let closure_2;
      let closure_3;
      let currentUser;
      let intl;
      let intl2;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let locale;
      let obj42;
      let obj9;
      let premiumTypeOverride;
      let setting;
      let showDevWidget;
      let socket;
      let tmp2Result;
      let tmp9;
      let useReducedMotion;
      let useSystemTheme;
      let usingSystemTheme;
      const tmp = closure_24();
      const tmp3 = dependencyMap;
      obj = locale(5144);
      let isCheckpointEnabled = obj.useIsCheckpointEnabled("DevToolsQuickActionsScreen");
      const tmp6 = showDevWidget(1618)();
      let obj2 = locale(504);
      const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({
        theme: theme.theme,
        usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON,
        locale: locale.locale,
        showDevWidget: showDevWidget.showDevWidget,
      }));
      ({ usingSystemTheme, locale } = stateFromStoresObject);
      showDevWidget = stateFromStoresObject.showDevWidget;
      const theme = stateFromStoresObject.theme;
      let obj3 = locale(504);
      const items1 = [UserStore];
      dependencyMap = obj3.useStateFromStores(items1, () => currentUser.getCurrentUser());
      let obj4 = locale(504);
      const items2 = [OverridePremiumTypeStore];
      _slicedToArray = obj4.useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
      [tmp9, _asyncToGenerator] = _slicedToArray(setting.useState(false), 2);
      const tmp8 = _slicedToArray(setting.useState(false), 2);
      let IgnoreProfileSpeedbumpDisabled = locale(2028).IgnoreProfileSpeedbumpDisabled;
      setting = IgnoreProfileSpeedbumpDisabled.useSetting();
      let obj5 = locale(504);
      const items3 = [AccessibilityStore];
      [][0] = locale;
      const stateFromStores = obj5.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
      if (tmp9) {
        return closure_21(locale(15533).default, {});
      } else {
        let obj6 = { style: tmp.container, contentContainerStyle: items4, children: items5 };
        items4 = [tmp.content];
        let obj7 = { paddingBottom: tmp.content.padding + tmp6.bottom };
        items4[1] = obj7;
        const obj8 = { title: "General", hasIcons: false, children: closure_21(locale(6705).TableSwitchRow, obj9) };
        const TableRowGroup = locale(6081).TableRowGroup;
        obj9 = {
          label: "Show Dev Widget",
          value: showDevWidget,
          onValueChange() {
            obj = DevToolsActionCreators;
            const obj2 = { showDevWidget: !showDevWidget };
            return obj.updateDevToolsSettings(obj2);
          },
        };
        items5 = [closure_21(TableRowGroup, obj8), , , , , , , , ,];
        const obj10 = { size: showDevWidget(587).space.PX_16 };
        const Spacer = locale(1188).Spacer;
        items5[1] = closure_21(Spacer, obj10);
        const TableRowGroup2 = locale(6081).TableRowGroup;
        let str = "Light Theme";
        let TableSwitchRow = locale(6705).TableSwitchRow;
        if (usingSystemTheme) {
          str = "(using system theme)";
        }
        const obj11 = { title: "Appearance", hasIcons: true, children: items6 };
        const obj12 = {
          label: str,
          disabled: usingSystemTheme,
          icon: closure_21(locale(15102).ThemeLightIcon, {}),
          value: tmp2Result.isThemeLight(theme),
          onValueChange: handleThemeChange,
        };
        tmp2Result = locale(4735);
        items6 = [closure_21(TableSwitchRow, obj12)];
        const obj13 = {
          label: "Reduced Motion",
          icon: closure_21(locale(15162).AccessibilityIcon, {}),
          value: stateFromStores,
          onValueChange: handleReducedMotionChange,
        };
        const TableSwitchRow2 = locale(6705).TableSwitchRow;
        items6[1] = closure_21(TableSwitchRow2, obj13);
        items5[2] = closure_22(TableRowGroup2, obj11);
        const obj14 = { size: showDevWidget(587).space.PX_16 };
        const Spacer2 = locale(1188).Spacer;
        items5[3] = closure_21(Spacer2, obj14);
        const obj15 = {
          title: "Override Client-Side Premium Type",
          hasIcons: true,
          children: closure_17.map((item) => {
            let label;
            let value;
            ({ label, value } = item);
            locale = value;
            obj = {
              onValueChange(arg0) {
                obj = OverridePremiumTypeActions;
                const result = obj.updateClientPremiumTypeOverride(arg0 ? locale : authStore4, closure_2);
              },
              label,
              icon: closure_1_21(locale(closure_2[53]).PencilIcon, {}),
              value: value === closure_3,
            };
            const TableSwitchRow = locale(closure_2[47]).TableSwitchRow;
            return closure_1_21(TableSwitchRow, obj, label);
          }),
        };
        const TableRowGroup3 = locale(6081).TableRowGroup;
        items5[4] = closure_21(TableRowGroup3, obj15);
        const obj16 = { size: showDevWidget(587).space.PX_16 };
        const Spacer3 = locale(1188).Spacer;
        items5[5] = closure_21(Spacer3, obj16);
        const obj17 = { title: intl.string(locale(1126).t["Aojq+L"]), hasIcons: true, children: items7 };
        const TableRowGroup4 = locale(6081).TableRowGroup;
        intl = locale(1126).intl;
        let str2 = "Change to en-US";
        const TableRow = locale(6000).TableRow;
        if ("en-US" === locale) {
          str2 = "Change to pt-BR";
        }
        const obj18 = {
          label: str2,
          subLabel: "Toggle to a non-english locale for change log testing, etc.",
          onPress: tmp12,
          icon: closure_21(locale(15258).LanguageIcon, {}),
          trailing: closure_21(locale(6007).TableRowArrow, {}),
        };
        items7 = [closure_21(TableRow, obj18), , , , , , , , , , , ,];
        const obj19 = {
          label: "Reset Double Tap Emoji State",
          subLabel: "Clears double tap emoji and resets dismissible content.",
          onPress: handleResetDoubleTapState,
          icon: closure_21(locale(6453).KeyIcon, {}),
          trailing: closure_21(locale(6007).TableRowArrow, {}),
        };
        const TableRow2 = locale(6000).TableRow;
        items7[1] = closure_21(TableRow2, obj19);
        const obj20 = {
          label: intl2.string(locale(1126).t.yoWDXU),
          subLabel: "Dismisses dev tools when launching.",
          onPress: handleNewUserOnboarding,
          icon: closure_21(locale(15404).WrenchIcon, {}),
          trailing: closure_21(locale(6007).TableRowArrow, {}),
        };
        const TableRow3 = locale(6000).TableRow;
        intl2 = locale(1126).intl;
        items7[2] = closure_21(TableRow3, obj20);
        const obj21 = {
          label: "Launch MFA Challenge Modal",
          subLabel: "Dismisses dev tools when launching.",
          onPress: launchMFA,
          icon: closure_21(locale(6453).KeyIcon, {}),
          trailing: closure_21(locale(6007).TableRowArrow, {}),
        };
        const TableRow4 = locale(6000).TableRow;
        items7[3] = closure_21(TableRow4, obj21);
        const obj22 = {
          label: "Show Passkey Promo Sheet",
          subLabel: "Skips eligibility checks. Dismisses dev tools when launching.",
          onPress: launchPasskeyPromoSheet,
          icon: closure_21(locale(6453).KeyIcon, {}),
          trailing: closure_21(locale(6007).TableRowArrow, {}),
        };
        const TableRow5 = locale(6000).TableRow;
        items7[4] = closure_21(TableRow5, obj22);
        const obj23 = {
          label: "Show TOTP Setup Success",
          subLabel: "Dismisses dev tools when launching.",
          onPress: launchTotpSetupSuccess,
          icon: closure_21(locale(6453).KeyIcon, {}),
          trailing: closure_21(locale(6007).TableRowArrow, {}),
        };
        const TableRow6 = locale(6000).TableRow;
        items7[5] = closure_21(TableRow6, obj23);
        const obj24 = {
          label: "Launch Vibing Wumpus",
          subLabel: "Vibe with the one and only",
          onPress: showVibingWumpus,
          icon: closure_21(locale(6453).KeyIcon, {}),
          trailing: closure_21(locale(6007).TableRowArrow, {}),
        };
        const TableRow7 = locale(6000).TableRow;
        items7[6] = closure_21(TableRow7, obj24);
        let tmp15Result = isCheckpointEnabled;
        if (tmp15Result) {
          const obj25 = {
            label: "Launch Checkpoint",
            subLabel: "Look back at your year on Discord",
            onPress() {
              obj = locale(closure_2[59]);
              const checkpointData = obj.fetchCheckpointData();
              showDevWidget(closure_2[60])("devtools");
            },
            icon: closure_21(locale(6453).KeyIcon, {}),
            trailing: closure_21(locale(6007).TableRowArrow, {}),
          };
          const TableRow8 = locale(6000).TableRow;
          tmp15Result = closure_21(TableRow8, obj25);
        }
        items7[7] = tmp15Result;
        let tmp15Result2 = isCheckpointEnabled;
        if (tmp15Result2) {
          const obj26 = {
            label: "Reset Checkpoint",
            onPress: _asyncToGenerator(async () => {
              let closure_0;
              let v1;
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c2 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      v1 = 1;
                      const obj4 = tmp3(c2[59]);
                      c2 = 1;
                      const obj6 = { value: obj4.resetCheckpoint(), done: false };
                      return obj6;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    if (value) {
                      const obj2 = v1(c2[36]);
                      obj2.open({ key: "CHECKPOINT_RESET", content: "success" });
                    } else {
                      obj = tmp3(c2[61]);
                      obj.presentError("error");
                    }
                    c2 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp13) {
                  c2 = 3;
                  throw tmp13;
                }
              }
            }),
            icon: closure_21(locale(6453).KeyIcon, {}),
            trailing: closure_21(locale(6007).TableRowArrow, {}),
          };
          const TableRow9 = locale(6000).TableRow;
          tmp15Result2 = closure_21(TableRow9, obj26);
        }
        items7[8] = tmp15Result2;
        if (isCheckpointEnabled) {
          const obj27 = {
            label: "Launch Checkpoint with fake data",
            subLabel: "Use mock stats instead of GET /checkpoint",
            onPress() {
              obj = locale(closure_2[59]);
              const checkpointData = obj.fetchCheckpointData(true);
              showDevWidget(closure_2[60])("devtools");
            },
            icon: closure_21(locale(6453).KeyIcon, {}),
            trailing: closure_21(locale(6007).TableRowArrow, {}),
          };
          const TableRow10 = locale(6000).TableRow;
          isCheckpointEnabled = closure_21(TableRow10, obj27);
        }
        items7[9] = isCheckpointEnabled;
        const obj28 = {
          label: "Test captcha",
          onPress: locale(15574).showCaptchaTestModal,
          icon: closure_21(locale(6453).KeyIcon, {}),
          trailing: closure_21(locale(6007).TableRowArrow, {}),
        };
        const TableRow11 = locale(6000).TableRow;
        items7[10] = closure_21(TableRow11, obj28);
        const obj29 = {
          label: "Ignored Profile Speedbump Suppression",
          subLabel: "Suppresses the speedbump for ignored profiles.",
          icon: closure_21(locale(6463).EyeSlashIcon, {}),
          value: setting,
          onValueChange() {
            const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
            return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
          },
        };
        const TableSwitchRow3 = locale(6705).TableSwitchRow;
        items7[11] = closure_21(TableSwitchRow3, obj29);
        const obj30 = {
          label: "Show App Rating Modal",
          subLabel:
            "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.",
          onPress: handleShowAppRatingModal,
          icon: closure_21(locale(15404).WrenchIcon, {}),
        };
        const TableRow12 = locale(6000).TableRow;
        items7[12] = closure_21(TableRow12, obj30);
        items5[6] = closure_22(TableRowGroup4, obj17);
        const obj31 = { size: showDevWidget(587).space.PX_16 };
        const Spacer4 = locale(1188).Spacer;
        items5[7] = closure_21(Spacer4, obj31);
        const obj32 = { title: "Crash Actions", hasIcons: true, children: items8 };
        const TableRowGroup5 = locale(6081).TableRowGroup;
        const obj33 = {
          icon: closure_21(locale(15404).WrenchIcon, {}),
          label: "Force Native Crash",
          onPress() {
            obj = showDevWidget(closure_2[64]);
            return obj.crash();
          },
        };
        const TableRow13 = locale(6000).TableRow;
        items8 = [closure_21(TableRow13, obj33), , , , ,];
        const obj34 = {
          icon: closure_21(locale(15404).WrenchIcon, {}),
          label: "Force JS Crash",
          onPress() {
            const error = new Error("Force JS Crash");
            throw error;
          },
        };
        const TableRow14 = locale(6000).TableRow;
        items8[1] = closure_21(TableRow14, obj34);
        const obj35 = {
          icon: closure_21(locale(15404).WrenchIcon, {}),
          label: "Force JS Boundary Crash",
          onPress() {
            _asyncToGenerator(true);
          },
        };
        const TableRow15 = locale(6000).TableRow;
        items8[2] = closure_21(TableRow15, obj35);
        const obj36 = {
          icon: closure_21(locale(15404).WrenchIcon, {}),
          label: "Force libdiscore Crash",
          onPress() {
            obj = locale(closure_2[65]);
            obj.crash();
          },
        };
        const TableRow16 = locale(6000).TableRow;
        items8[3] = closure_21(TableRow16, obj36);
        const obj37 = {
          icon: closure_21(locale(15404).WrenchIcon, {}),
          label: "Force libdiscore Store Crash",
          subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
          onPress() {
            obj = showDevWidget(closure_2[21]);
            obj.dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
          },
        };
        const TableRow17 = locale(6000).TableRow;
        items8[4] = closure_21(TableRow17, obj37);
        const obj38 = {
          icon: closure_21(locale(15404).WrenchIcon, {}),
          label: "Force libdiscore Store Error",
          subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
          onPress() {
            const socket2 = socket.getSocket();
            obj = showDevWidget(closure_2[21]);
            const dispatchResult = obj.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" });
            dispatchResult.catch((error) => {
              obj = { error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" };
              const result = closure_0.resetSocketOnDispatchError(obj);
            });
          },
        };
        const TableRow18 = locale(6000).TableRow;
        items8[5] = closure_21(TableRow18, obj38);
        items5[8] = closure_22(TableRowGroup5, obj32);
        const tmp2Result2 = locale(1369);
        let isIOSResult = tmp2Result2.isIOS();
        if (isIOSResult) {
          const obj39 = { children: items9 };
          const obj40 = { size: showDevWidget(587).space.PX_16 };
          const Spacer5 = locale(1188).Spacer;
          items9 = [closure_21(Spacer5, obj40)];
          const obj41 = { title: "Memory Actions", hasIcons: true, children: closure_21(TableRow19, obj42) };
          const TableRowGroup6 = locale(6081).TableRowGroup;
          obj42 = {
            icon: closure_21(locale(15404).WrenchIcon, {}),
            label: "Trigger Memory Warning",
            subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
            onPress() {
              obj = showDevWidget(closure_2[64]);
              return obj.triggerMemoryWarning();
            },
          };
          TableRow19 = locale(6000).TableRow;
          items9[1] = closure_21(TableRowGroup6, obj41);
          isIOSResult = closure_22(closure_23, obj39);
        }
        items5[9] = isIOSResult;
        return closure_22(ScrollView, obj6);
      }
    };
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default tmp5;
