// === Module 15765: DevToolsQuickActionsScreen ===

// Module 15765 (DevToolsQuickActionsScreen)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import UserSettings from "UserSettings" /* 1936 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1941 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4460 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9490 */;
import NUFActionCreators from "NUFActionCreators" /* 12839 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12881 */;
import requestReviewModalDefault from "requestReviewModal" /* 13792 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14535 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15674 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 15783 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4631 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5362 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1373 */;
import LocaleStore from "LocaleStore" /* 2026 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import UserStore from "UserStore" /* 1372 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7824 */;

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
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11540, dependencyMap.paths), {
    onClose() {

    }
  }, VIBING_WUMPUS_MODAL_KEY);
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
  ModalActionCreatorsDefault.pop();
  const items = [asyncRequireImpl(14880, dependencyMap.paths), asyncRequireImpl(14882, dependencyMap.paths)];
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
        obj6.content = str2;
        closure_129_1(closure_129_2[35]).open(obj6);
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
const NewUserTypes = fn(12840).NewUserTypes;
const PremiumConstants = fn(1374);
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = fn(11501).VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = fn(1185).SystemThemeState;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_24 = createStyles.createStyles(obj2);
function launchMFA() {
  ModalActionCreatorsDefault.pop();
  asyncRequireImpl(15766, dependencyMap.paths).then((openMFAModal) => {
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
  const tmp4 = showDevWidget(1612)();
  const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
  const stateFromStoresObject = locale(504).useStateFromStoresObject(items, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  showDevWidget = stateFromStoresObject.showDevWidget;
  let obj = locale(504);
  const items1 = [UserStore];
  dependencyMap = locale(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj2 = locale(504);
  const items2 = [OverridePremiumTypeStore];
  _slicedToArray = locale(504).useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
  const obj3 = locale(504);
  [tmp8, asyncGeneratorStep] = setting.useState(false);
  let IgnoreProfileSpeedbumpDisabled = locale(1936).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  const tmp7 = _slicedToArray(setting.useState(false), 2);
  const items3 = [AccessibilityStore];
  [][0] = locale;
  const stateFromStores = locale(504).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp8) {
    return closure_21(locale(15782).default, {});
  } else {
    const obj5 = { style: tmp.container, contentContainerStyle: null, children: null };
    const items4 = [tmp.content, ];
    const obj6 = { paddingBottom: tmp.content.padding + tmp4.bottom };
    items4[1] = obj6;
    obj5.contentContainerStyle = items4;
    const obj7 = { title: "General", hasIcons: false, children: null };
    const obj8 = {
      label: "Show Dev Widget",
      value: showDevWidget,
      onValueChange() {
          return DevToolsActionCreators.updateDevToolsSettings({ showDevWidget: !showDevWidget });
        }
    };
    obj7.children = closure_21(locale(7307).TableSwitchRow, obj8);
    const items5 = [closure_21(locale(5772).TableRowGroup, obj7), , , , , , , , , ];
    const obj9 = { size: tmp2(576).space.PX_16 };
    items5[1] = closure_21(locale(1177).Spacer, obj9);
    let str = "Light Theme";
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj10 = { title: "Appearance", hasIcons: true, children: null };
    const obj11 = { label: str, disabled: usingSystemTheme, icon: closure_21(locale(15363).ThemeLightIcon, {}), value: locale(4491).isThemeLight(stateFromStoresObject.theme), onValueChange: handleThemeChange };
    const items6 = [closure_21(locale(7307).TableSwitchRow, obj11), ];
    const obj12 = { label: "Reduced Motion", icon: closure_21(locale(15423).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    items6[1] = closure_21(locale(7307).TableSwitchRow, obj12);
    obj10.children = items6;
    items5[2] = closure_22(locale(5772).TableRowGroup, obj10);
    const obj13 = { size: tmp2(576).space.PX_16 };
    items5[3] = closure_21(locale(1177).Spacer, obj13);
    const obj14 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_17.map((item) => {
          ({ label, value } = item);
          locale = value;
          return closure_1_21(locale(7307).TableSwitchRow, {
            onValueChange(arg0) {
              const result = OverridePremiumTypeActions.updateClientPremiumTypeOverride(arg0 ? value : collapsedCategories, closure_2);
            },
            label,
            icon: closure_1_21(locale(10381).PencilIcon, {}),
            value: value === closure_3
          }, label);
        })
    };
    items5[4] = closure_21(locale(5772).TableRowGroup, obj14);
    const obj15 = { size: tmp2(576).space.PX_16 };
    items5[5] = closure_21(locale(1177).Spacer, obj15);
    const obj16 = { title: null, hasIcons: true, children: null };
    const intl = locale(1115).intl;
    obj16.title = intl.string(locale(1115).t["Aojq+L"]);
    let str2 = "Change to en-US";
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj17 = { label: str2, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: tmp11, icon: closure_21(locale(15517).LanguageIcon, {}), trailing: closure_21(locale(5697).TableRowArrow, {}) };
    const items7 = [closure_21(locale(5690).TableRow, obj17), , , , , , , , , ];
    const obj18 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: closure_21(locale(7063).KeyIcon, {}), trailing: closure_21(locale(5697).TableRowArrow, {}) };
    items7[1] = closure_21(locale(5690).TableRow, obj18);
    const obj19 = { label: null, subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    const intl2 = locale(1115).intl;
    obj19.label = intl2.string(locale(1115).t.yoWDXU);
    obj19.onPress = handleNewUserOnboarding;
    obj19.icon = closure_21(locale(15660).WrenchIcon, {});
    obj19.trailing = closure_21(locale(5697).TableRowArrow, {});
    items7[2] = closure_21(locale(5690).TableRow, obj19);
    const obj20 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: closure_21(locale(7063).KeyIcon, {}), trailing: closure_21(locale(5697).TableRowArrow, {}) };
    items7[3] = closure_21(locale(5690).TableRow, obj20);
    const obj21 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: closure_21(locale(7063).KeyIcon, {}), trailing: closure_21(locale(5697).TableRowArrow, {}) };
    items7[4] = closure_21(locale(5690).TableRow, obj21);
    const obj22 = { label: "Reset Launch Welcome", subLabel: "Resets launch welcome NUX flag, requires an app restart to take effect.", onPress: handleLaunchWelcomeReset, icon: closure_21(locale(7063).KeyIcon, {}), trailing: closure_21(locale(5697).TableRowArrow, {}) };
    items7[5] = closure_21(locale(5690).TableRow, obj22);
    const obj23 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: closure_21(locale(7063).KeyIcon, {}), trailing: closure_21(locale(5697).TableRowArrow, {}) };
    items7[6] = closure_21(locale(5690).TableRow, obj23);
    const obj24 = { label: "Test captcha", onPress: locale(15784).showCaptchaTestModal, icon: closure_21(locale(7063).KeyIcon, {}), trailing: closure_21(locale(5697).TableRowArrow, {}) };
    items7[7] = closure_21(locale(5690).TableRow, obj24);
    const obj25 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: closure_21(locale(7073).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    items7[8] = closure_21(locale(7307).TableSwitchRow, obj25);
    const obj26 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: handleShowAppRatingModal, icon: closure_21(locale(15660).WrenchIcon, {}) };
    items7[9] = closure_21(locale(5690).TableRow, obj26);
    obj16.children = items7;
    items5[6] = closure_22(locale(5772).TableRowGroup, obj16);
    const obj27 = { size: tmp2(576).space.PX_16 };
    items5[7] = closure_21(locale(1177).Spacer, obj27);
    const obj28 = { title: "Crash Actions", hasIcons: true, children: null };
    const obj29 = {
      icon: closure_21(locale(15660).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          return showDevWidget(1231).crash();
        }
    };
    const items8 = [closure_21(locale(5690).TableRow, obj29), , , , , ];
    const obj30 = {
      icon: closure_21(locale(15660).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    items8[1] = closure_21(locale(5690).TableRow, obj30);
    const obj31 = {
      icon: closure_21(locale(15660).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          asyncGeneratorStep(true);
        }
    };
    items8[2] = closure_21(locale(5690).TableRow, obj31);
    const obj32 = {
      icon: closure_21(locale(15660).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          locale(1350).crash();
        }
    };
    items8[3] = closure_21(locale(5690).TableRow, obj32);
    const obj33 = {
      icon: closure_21(locale(15660).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          showDevWidget(573).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    items8[4] = closure_21(locale(5690).TableRow, obj33);
    const obj34 = {
      icon: closure_21(locale(15660).WrenchIcon, {}),
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
    items8[5] = closure_21(locale(5690).TableRow, obj34);
    obj28.children = items8;
    items5[8] = closure_22(locale(5772).TableRowGroup, obj28);
    const tmp5Result = locale(4491);
    let isIOSResult = locale(1364).isIOS();
    if (isIOSResult) {
      const obj35 = { children: null };
      const obj36 = { size: tmp2(576).space.PX_16 };
      const items9 = [closure_21(locale(1177).Spacer, obj36), ];
      const obj37 = { title: "Memory Actions", hasIcons: true, children: null };
      const obj38 = {
        icon: closure_21(locale(15660).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
              return showDevWidget(1231).triggerMemoryWarning();
            }
      };
      obj37.children = closure_21(locale(5690).TableRow, obj38);
      items9[1] = closure_21(locale(5772).TableRowGroup, obj37);
      obj35.children = items9;
      isIOSResult = closure_22(closure_23, obj35);
    }
    items5[9] = isIOSResult;
    obj5.children = items5;
    return closure_22(ScrollView, obj5);
  }
  const obj4 = locale(504);
};