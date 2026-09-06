// === Module 15663: DevToolsQuickActionsScreen ===

// Module 15663 (DevToolsQuickActionsScreen)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1940 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9358 */;
import NUFActionCreators from "NUFActionCreators" /* 12704 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12746 */;
import requestReviewModalDefault from "requestReviewModal" /* 13697 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14437 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15574 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 15681 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1372 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import UserStore from "UserStore" /* 1371 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7719 */;

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
function handleLaunchWelcomeReset() {
  const result = UserSettingsProtoActionCreators.removeDismissedContent(dismissible_content.DismissibleContent.SEEN_LAUNCH_WELCOME);
  const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SEEN_OLD_DESIGN);
}
function showVibingWumpus() {
  const obj = {
    onClose() {

    }
  };
  obj.pushLazy(asyncRequireImpl(11402, dependencyMap.paths), obj, VIBING_WUMPUS_MODAL_KEY);
}
function handleResetDoubleTapState() {
  const result = UserSettingsProtoActionCreators.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_UPSELL);
  const result1 = UserSettingsProtoActionCreators.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER);
  const result2 = UserSettingsProtoActionCreators.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", async (arg0) => {
    arg0.defaultReactionEmoji = undefined;
  }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function launchTotpSetupSuccess() {
  let arr = ModalActionCreatorsDefault;
  arr = arr.pop();
  const items = [asyncRequireImpl(14781, dependencyMap.paths), asyncRequireImpl(14783, dependencyMap.paths)];
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: requestReviewModalDefault(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        const obj2 = {
          key: "DEV_APP_RATING_REQUEST",
          icon() {
                  return closure_1_21(closure_1_0(closure_1_2[36]).WrenchIcon, {});
                },
          content: null,
          toastDurationMs: 6000
        };
        let str2 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
        if (!closure_128_0.ok) {
          const _HermesInternal = HermesInternal;
          str2 = "Review request failed: " + closure_128_0.error;
        }
        obj2.content = str2;
        closure_129_1(closure_129_2[35]).open(obj2);
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
const NewUserTypes = fn(12705).NewUserTypes;
const PremiumConstants = fn(1373);
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = fn(11363).VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = fn(1186).SystemThemeState;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
fn(4560);
let createStyles = { container: null, content: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.content = { padding: nativeDefault.space.PX_16 };
let closure_24 = createStyles.createStyles(createStyles);
function launchMFA() {
  let arr = ModalActionCreatorsDefault;
  arr = arr.pop();
  asyncRequireImpl(15664, dependencyMap.paths).then((openMFAModal) => {
    const obj = { ticket: "ticket", methods: null };
    const items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    obj.methods = items;
    openMFAModal.openMFAModal(obj, () => {

    }, () => {

    });
  });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default function DevToolsQuickActionsScreen() {
  const tmp = closure_24();
  let obj = locale(504);
  const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  const showDevWidget = stateFromStoresObject.showDevWidget;
  let obj1 = locale(504);
  const items1 = [UserStore];
  dependencyMap = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj2 = locale(504);
  const items2 = [OverridePremiumTypeStore];
  _slicedToArray = obj2.useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
  const tmp4 = showDevWidget(1611)();
  [tmp8, asyncGeneratorStep] = _slicedToArray(setting.useState(false), 2);
  let IgnoreProfileSpeedbumpDisabled = locale(1935).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  let obj3 = locale(504);
  const items3 = [AccessibilityStore];
  [][0] = locale;
  const stateFromStores = obj3.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp8) {
    return closure_21(locale(15680).default, {});
  } else {
    obj = { style: tmp.container, contentContainerStyle: null, children: null };
    const items4 = [tmp.content, ];
    obj = { paddingBottom: tmp.content.padding + tmp4.bottom };
    items4[1] = obj;
    obj.contentContainerStyle = items4;
    obj1 = { title: "General", hasIcons: false, children: null };
    obj2 = {
      label: "Show Dev Widget",
      value: showDevWidget,
      onValueChange() {
          const obj = { showDevWidget: !showDevWidget };
          return obj.updateDevToolsSettings(obj);
        }
    };
    obj1.children = closure_21(locale(7201).TableSwitchRow, obj2);
    const items5 = [closure_21(locale(5687).TableRowGroup, obj1), , , , , , , , , ];
    obj3 = { size: tmp2(576).space.PX_16 };
    items5[1] = closure_21(locale(1178).Spacer, obj3);
    let str = "Light Theme";
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj4 = { title: "Appearance", hasIcons: true, children: null };
    const obj5 = { label: str, disabled: usingSystemTheme, icon: closure_21(locale(15267).ThemeLightIcon, {}), value: null, onValueChange: null };
    let tmp5Result = locale(4411);
    obj5.value = tmp5Result.isThemeLight(stateFromStoresObject.theme);
    obj5.onValueChange = handleThemeChange;
    const items6 = [closure_21(locale(7201).TableSwitchRow, obj5), ];
    const obj6 = { label: "Reduced Motion", icon: closure_21(locale(15327).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    items6[1] = closure_21(locale(7201).TableSwitchRow, obj6);
    obj4.children = items6;
    items5[2] = closure_22(locale(5687).TableRowGroup, obj4);
    const obj7 = { size: tmp2(576).space.PX_16 };
    items5[3] = closure_21(locale(1178).Spacer, obj7);
    const obj8 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_17.map((item) => {
          ({ label, value } = item);
          locale = value;
          return closure_1_21(locale(7201).TableSwitchRow, {
            onValueChange(arg0) {
              const result = OverridePremiumTypeActions.updateClientPremiumTypeOverride(arg0 ? value : collapsedCategories, closure_2);
            },
            label,
            icon: closure_1_21(locale(10250).PencilIcon, {}),
            value: value === closure_3
          }, label);
        })
    };
    items5[4] = closure_21(locale(5687).TableRowGroup, obj8);
    const obj9 = { size: tmp2(576).space.PX_16 };
    items5[5] = closure_21(locale(1178).Spacer, obj9);
    const obj10 = { title: null, hasIcons: true, children: null };
    const intl = locale(1114).intl;
    obj10.title = intl.string(locale(1114).t["Aojq+L"]);
    let str2 = "Change to en-US";
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj11 = { label: str2, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: tmp11, icon: closure_21(locale(15421).LanguageIcon, {}), trailing: closure_21(locale(5612).TableRowArrow, {}) };
    const items7 = [closure_21(locale(5605).TableRow, obj11), , , , , , , , , ];
    const obj12 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: closure_21(locale(6958).KeyIcon, {}), trailing: closure_21(locale(5612).TableRowArrow, {}) };
    items7[1] = closure_21(locale(5605).TableRow, obj12);
    const obj13 = { label: null, subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    const intl2 = locale(1114).intl;
    obj13.label = intl2.string(locale(1114).t.yoWDXU);
    obj13.onPress = handleNewUserOnboarding;
    obj13.icon = closure_21(locale(15562).WrenchIcon, {});
    obj13.trailing = closure_21(locale(5612).TableRowArrow, {});
    items7[2] = closure_21(locale(5605).TableRow, obj13);
    const obj14 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: closure_21(locale(6958).KeyIcon, {}), trailing: closure_21(locale(5612).TableRowArrow, {}) };
    items7[3] = closure_21(locale(5605).TableRow, obj14);
    const obj15 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: closure_21(locale(6958).KeyIcon, {}), trailing: closure_21(locale(5612).TableRowArrow, {}) };
    items7[4] = closure_21(locale(5605).TableRow, obj15);
    const obj16 = { label: "Reset Launch Welcome", subLabel: "Resets launch welcome NUX flag, requires an app restart to take effect.", onPress: handleLaunchWelcomeReset, icon: closure_21(locale(6958).KeyIcon, {}), trailing: closure_21(locale(5612).TableRowArrow, {}) };
    items7[5] = closure_21(locale(5605).TableRow, obj16);
    const obj17 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: closure_21(locale(6958).KeyIcon, {}), trailing: closure_21(locale(5612).TableRowArrow, {}) };
    items7[6] = closure_21(locale(5605).TableRow, obj17);
    const obj18 = { label: "Test captcha", onPress: locale(15682).showCaptchaTestModal, icon: closure_21(locale(6958).KeyIcon, {}), trailing: closure_21(locale(5612).TableRowArrow, {}) };
    items7[7] = closure_21(locale(5605).TableRow, obj18);
    const obj19 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: closure_21(locale(6968).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    items7[8] = closure_21(locale(7201).TableSwitchRow, obj19);
    const obj20 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: handleShowAppRatingModal, icon: closure_21(locale(15562).WrenchIcon, {}) };
    items7[9] = closure_21(locale(5605).TableRow, obj20);
    obj10.children = items7;
    items5[6] = closure_22(locale(5687).TableRowGroup, obj10);
    const obj21 = { size: tmp2(576).space.PX_16 };
    items5[7] = closure_21(locale(1178).Spacer, obj21);
    const obj22 = { title: "Crash Actions", hasIcons: true, children: null };
    const obj23 = {
      icon: closure_21(locale(15562).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          return showDevWidget(1232).crash();
        }
    };
    const items8 = [closure_21(locale(5605).TableRow, obj23), , , , , ];
    const obj24 = {
      icon: closure_21(locale(15562).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    items8[1] = closure_21(locale(5605).TableRow, obj24);
    const obj25 = {
      icon: closure_21(locale(15562).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          asyncGeneratorStep(true);
        }
    };
    items8[2] = closure_21(locale(5605).TableRow, obj25);
    const obj26 = {
      icon: closure_21(locale(15562).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          locale(1351).crash();
        }
    };
    items8[3] = closure_21(locale(5605).TableRow, obj26);
    const obj27 = {
      icon: closure_21(locale(15562).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          showDevWidget(573).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    items8[4] = closure_21(locale(5605).TableRow, obj27);
    const obj28 = {
      icon: closure_21(locale(15562).WrenchIcon, {}),
      label: "Force libdiscore Store Error",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
      onPress() {
          const socket2 = socket.getSocket();
          const obj = showDevWidget(573);
          showDevWidget(573).dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((error) => {
            const result = closure_0.resetSocketOnDispatchError({ error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          });
        }
    };
    items8[5] = closure_21(locale(5605).TableRow, obj28);
    obj22.children = items8;
    items5[8] = closure_22(locale(5687).TableRowGroup, obj22);
    tmp5Result = locale(1115);
    let isIOSResult = tmp5Result.isIOS();
    if (isIOSResult) {
      const obj29 = { children: null };
      const obj30 = { size: tmp2(576).space.PX_16 };
      const items9 = [closure_21(locale(1178).Spacer, obj30), ];
      const obj31 = { title: "Memory Actions", hasIcons: true, children: null };
      const obj32 = {
        icon: closure_21(locale(15562).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
              return showDevWidget(1232).triggerMemoryWarning();
            }
      };
      obj31.children = closure_21(locale(5605).TableRow, obj32);
      items9[1] = closure_21(locale(5687).TableRowGroup, obj31);
      obj29.children = items9;
      isIOSResult = closure_22(closure_23, obj29);
    }
    items5[9] = isIOSResult;
    obj.children = items5;
    return closure_22(ScrollView, obj);
  }
  const tmp7 = _slicedToArray(setting.useState(false), 2);
};