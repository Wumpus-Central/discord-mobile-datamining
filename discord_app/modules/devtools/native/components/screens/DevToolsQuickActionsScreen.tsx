// discord_app/modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01980_asyncRequireImpl.js";
import UserSettings from "../../../../user_settings/UserSettings.tsx";
import UserSettingsProtoActionCreators from "../../../../user_settings/UserSettingsProtoActionCreators.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import UserSettingsActionCreatorsDefault from "../../../../../actions/UserSettingsActionCreators.tsx";
import NUFActionCreators from "../../../../nuf/native/NUFActionCreators.tsx";
import nuf_NUFActionCreators from "../../../../nuf/NUFActionCreators.tsx";
import requestReviewModalDefault from "../../../../feedback/native/requestReviewModal.tsx";
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
  DispatcherDefault.wait(NUFActionCreators.startOnboarding);
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
function showVibingWumpus() {
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(10933, dependencyMap.paths),
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
  const items = [asyncRequireImpl(14291, dependencyMap.paths), asyncRequireImpl(14293, dependencyMap.paths)];
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
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_33 = async function _handleShowAppRatingModal() {
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
        const obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        const obj6 = {
          key: "DEV_APP_RATING_REQUEST",
          icon() {
            return closure_1_21(closure_1_0(closure_1_2[35]).WrenchIcon, {});
          },
          content: null,
          toastDurationMs: 6000,
        };
        let str2 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
        if (!closure_128_0.ok) {
          const _HermesInternal = HermesInternal;
          str2 = "Review request failed: " + closure_128_0.error;
        }
        obj6.content = str2;
        closure_129_1(closure_129_2[34]).open(obj6);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const ScrollView = fn(17).ScrollView;
const ThemeTypes = fn(1074).ThemeTypes;
const NewUserTypes = fn(12184).NewUserTypes;
const PremiumConstants = fn(1374);
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = fn(10892).VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = fn(1185).SystemThemeState;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_24 = createStyles.createStyles(obj2);
function launchMFA() {
  ModalActionCreatorsDefault.pop();
  asyncRequireImpl(15197, dependencyMap.paths).then((openMFAModal) => {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default function DevToolsQuickActionsScreen() {
  const tmp = closure_24();
  let isCheckpointEnabled = locale(5075).useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  let obj = locale(5075);
  const tmp6 = showDevWidget(1612)();
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
  const obj3 = locale(504);
  const items2 = [OverridePremiumTypeStore];
  _slicedToArray = locale(504).useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
  const obj4 = locale(504);
  [tmp9, asyncGeneratorStep] = setting.useState(false);
  let IgnoreProfileSpeedbumpDisabled = locale(2020).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  const tmp8 = _slicedToArray(setting.useState(false), 2);
  const items3 = [AccessibilityStore];
  [][0] = locale;
  const stateFromStores = locale(504).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp9) {
    return closure_21(locale(15213).default, {});
  } else {
    const obj6 = { style: tmp.container, contentContainerStyle: null, children: null };
    const items4 = [tmp.content];
    const obj7 = { paddingBottom: tmp.content.padding + tmp6.bottom };
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
    obj8.children = closure_21(locale(6616).TableSwitchRow, obj9);
    const items5 = [closure_21(locale(5994).TableRowGroup, obj8), , , , , , , , ,];
    const obj10 = { size: tmp5(576).space.PX_16 };
    items5[1] = closure_21(locale(1177).Spacer, obj10);
    let str = "Light Theme";
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj11 = { title: "Appearance", hasIcons: true, children: null };
    const obj12 = {
      label: str,
      disabled: usingSystemTheme,
      icon: closure_21(locale(14788).ThemeLightIcon, {}),
      value: locale(4682).isThemeLight(stateFromStoresObject.theme),
      onValueChange: handleThemeChange,
    };
    const items6 = [closure_21(locale(6616).TableSwitchRow, obj12)];
    const obj13 = {
      label: "Reduced Motion",
      icon: closure_21(locale(14848).AccessibilityIcon, {}),
      value: stateFromStores,
      onValueChange: handleReducedMotionChange,
    };
    items6[1] = closure_21(locale(6616).TableSwitchRow, obj13);
    obj11.children = items6;
    items5[2] = closure_22(locale(5994).TableRowGroup, obj11);
    const obj14 = { size: tmp5(576).space.PX_16 };
    items5[3] = closure_21(locale(1177).Spacer, obj14);
    const obj15 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_17.map((item) => {
        ({ label, value } = item);
        locale = value;
        return closure_1_21(
          locale(6616).TableSwitchRow,
          {
            onValueChange(arg0) {
              const result = OverridePremiumTypeActions.updateClientPremiumTypeOverride(
                arg0 ? value : collapsedCategories,
                closure_2,
              );
            },
            label,
            icon: closure_1_21(locale(9702).PencilIcon, {}),
            value: value === closure_3,
          },
          label,
        );
      }),
    };
    items5[4] = closure_21(locale(5994).TableRowGroup, obj15);
    const obj16 = { size: tmp5(576).space.PX_16 };
    items5[5] = closure_21(locale(1177).Spacer, obj16);
    const obj17 = { title: null, hasIcons: true, children: null };
    const intl = locale(1115).intl;
    obj17.title = intl.string(locale(1115).t["Aojq+L"]);
    let str2 = "Change to en-US";
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj18 = {
      label: str2,
      subLabel: "Toggle to a non-english locale for change log testing, etc.",
      onPress: tmp12,
      icon: closure_21(locale(14944).LanguageIcon, {}),
      trailing: closure_21(locale(5919).TableRowArrow, {}),
    };
    const items7 = [closure_21(locale(5912).TableRow, obj18), , , , , , , , , ,];
    const obj19 = {
      label: "Reset Double Tap Emoji State",
      subLabel: "Clears double tap emoji and resets dismissible content.",
      onPress: handleResetDoubleTapState,
      icon: closure_21(locale(6372).KeyIcon, {}),
      trailing: closure_21(locale(5919).TableRowArrow, {}),
    };
    items7[1] = closure_21(locale(5912).TableRow, obj19);
    const obj20 = {
      label: null,
      subLabel: "Dismisses dev tools when launching.",
      onPress: null,
      icon: null,
      trailing: null,
    };
    const intl2 = locale(1115).intl;
    obj20.label = intl2.string(locale(1115).t.yoWDXU);
    obj20.onPress = handleNewUserOnboarding;
    obj20.icon = closure_21(locale(15089).WrenchIcon, {});
    obj20.trailing = closure_21(locale(5919).TableRowArrow, {});
    items7[2] = closure_21(locale(5912).TableRow, obj20);
    const obj21 = {
      label: "Launch MFA Challenge Modal",
      subLabel: "Dismisses dev tools when launching.",
      onPress: launchMFA,
      icon: closure_21(locale(6372).KeyIcon, {}),
      trailing: closure_21(locale(5919).TableRowArrow, {}),
    };
    items7[3] = closure_21(locale(5912).TableRow, obj21);
    const obj22 = {
      label: "Show TOTP Setup Success",
      subLabel: "Dismisses dev tools when launching.",
      onPress: launchTotpSetupSuccess,
      icon: closure_21(locale(6372).KeyIcon, {}),
      trailing: closure_21(locale(5919).TableRowArrow, {}),
    };
    items7[4] = closure_21(locale(5912).TableRow, obj22);
    const obj23 = {
      label: "Launch Vibing Wumpus",
      subLabel: "Vibe with the one and only",
      onPress: showVibingWumpus,
      icon: closure_21(locale(6372).KeyIcon, {}),
      trailing: closure_21(locale(5919).TableRowArrow, {}),
    };
    items7[5] = closure_21(locale(5912).TableRow, obj23);
    let tmp15Result = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj24 = {
        label: "Launch Checkpoint",
        subLabel: "Look back at your year on Discord",
        onPress() {
          const checkpointData = locale(15215).fetchCheckpointData();
          showDevWidget(15218)("devtools");
        },
        icon: closure_21(locale(6372).KeyIcon, {}),
        trailing: closure_21(locale(5919).TableRowArrow, {}),
      };
      tmp15Result = closure_21(locale(5912).TableRow, obj24);
    }
    items7[6] = tmp15Result;
    if (isCheckpointEnabled) {
      const obj25 = {
        label: "Launch Checkpoint with fake data",
        subLabel: "Use mock stats instead of GET /checkpoint",
        onPress() {
          const checkpointData = locale(15215).fetchCheckpointData(true);
          showDevWidget(15218)("devtools");
        },
        icon: closure_21(locale(6372).KeyIcon, {}),
        trailing: closure_21(locale(5919).TableRowArrow, {}),
      };
      isCheckpointEnabled = closure_21(locale(5912).TableRow, obj25);
    }
    items7[7] = isCheckpointEnabled;
    const obj26 = {
      label: "Test captcha",
      onPress: locale(15256).showCaptchaTestModal,
      icon: closure_21(locale(6372).KeyIcon, {}),
      trailing: closure_21(locale(5919).TableRowArrow, {}),
    };
    items7[8] = closure_21(locale(5912).TableRow, obj26);
    const obj27 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: closure_21(locale(6382).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
        const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
        return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
      },
    };
    items7[9] = closure_21(locale(6616).TableSwitchRow, obj27);
    const obj28 = {
      label: "Show App Rating Modal",
      subLabel:
        "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.",
      onPress: handleShowAppRatingModal,
      icon: closure_21(locale(15089).WrenchIcon, {}),
    };
    items7[10] = closure_21(locale(5912).TableRow, obj28);
    obj17.children = items7;
    items5[6] = closure_22(locale(5994).TableRowGroup, obj17);
    const obj29 = { size: tmp5(576).space.PX_16 };
    items5[7] = closure_21(locale(1177).Spacer, obj29);
    const obj30 = { title: "Crash Actions", hasIcons: true, children: null };
    const obj31 = {
      icon: closure_21(locale(15089).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
        return showDevWidget(1231).crash();
      },
    };
    const items8 = [closure_21(locale(5912).TableRow, obj31), , , , ,];
    const obj32 = {
      icon: closure_21(locale(15089).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
        const error = new Error("Force JS Crash");
        throw error;
      },
    };
    items8[1] = closure_21(locale(5912).TableRow, obj32);
    const obj33 = {
      icon: closure_21(locale(15089).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
        asyncGeneratorStep(true);
      },
    };
    items8[2] = closure_21(locale(5912).TableRow, obj33);
    const obj34 = {
      icon: closure_21(locale(15089).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
        locale(1350).crash();
      },
    };
    items8[3] = closure_21(locale(5912).TableRow, obj34);
    const obj35 = {
      icon: closure_21(locale(15089).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
        showDevWidget(573).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
      },
    };
    items8[4] = closure_21(locale(5912).TableRow, obj35);
    const obj36 = {
      icon: closure_21(locale(15089).WrenchIcon, {}),
      label: "Force libdiscore Store Error",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
      onPress() {
        const socket2 = socket.getSocket();
        const obj = showDevWidget(573);
        showDevWidget(573)
          .dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" })
          .catch((error) => {
            const result = closure_0.resetSocketOnDispatchError({ error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          });
      },
    };
    items8[5] = closure_21(locale(5912).TableRow, obj36);
    obj30.children = items8;
    items5[8] = closure_22(locale(5994).TableRowGroup, obj30);
    const tmp2Result = locale(4682);
    let isIOSResult = locale(1364).isIOS();
    if (isIOSResult) {
      const obj37 = { children: null };
      const obj38 = { size: tmp5(576).space.PX_16 };
      const items9 = [closure_21(locale(1177).Spacer, obj38)];
      const obj39 = { title: "Memory Actions", hasIcons: true, children: null };
      const obj40 = {
        icon: closure_21(locale(15089).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
          return showDevWidget(1231).triggerMemoryWarning();
        },
      };
      obj39.children = closure_21(locale(5912).TableRow, obj40);
      items9[1] = closure_21(locale(5994).TableRowGroup, obj39);
      obj37.children = items9;
      isIOSResult = closure_22(closure_23, obj37);
    }
    items5[9] = isIOSResult;
    obj6.children = items5;
    return closure_22(ScrollView, obj6);
  }
  const obj5 = locale(504);
}
