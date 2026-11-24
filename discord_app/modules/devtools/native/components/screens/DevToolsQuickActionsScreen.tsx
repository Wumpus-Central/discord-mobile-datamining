// === Module 17121: DevToolsQuickActionsScreen ===

// Module 17121 (DevToolsQuickActionsScreen)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import UserSettings from "UserSettings" /* 4742 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4747 */;
import dismissible_content from "dismissible_content" /* 4750 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5892 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import NUFActionCreators from "NUFActionCreators" /* 13524 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 13610 */;
import requestReviewModalDefault from "requestReviewModal" /* 15018 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15668 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17031 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 17143 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import CheckpointStore from "CheckpointStore" /* 12407 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5723 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1387 */;
import LocaleStore from "LocaleStore" /* 2188 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;
import UserStore from "UserStore" /* 1386 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8242 */;

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
  asyncRequireImpl(17138, dependencyMap.paths).then((result) => {
    result = result.default.openPasskeyUpsellPromoSheet();
  });
}
function showVibingWumpus() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11716, dependencyMap.paths), {
    onClose() {

    }
  }, VIBING_WUMPUS_MODAL_KEY);
}
function handleResetDoubleTapState() {
  const result = UserSettingsProtoActionCreators.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER);
  const result1 = UserSettingsProtoActionCreators.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", async (arg0) => {
    arg0.defaultReactionEmoji = undefined;
  }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function launchTotpSetupSuccess() {
  ModalActionCreatorsDefault.pop();
  items = [asyncRequireImpl(16086, dependencyMap.paths), asyncRequireImpl(16088, dependencyMap.paths)];
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
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_36 = async function _handleShowAppRatingModal() {
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
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_128_0 = value;
        let str2 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
        if (!closure_128_0.ok) {
          const _HermesInternal = HermesInternal;
          str2 = "Review request failed: " + closure_128_0.error;
        }
        const obj = { text: str2, icon: closure_129_0(closure_129_2[36]).WrenchIcon };
        closure_129_1(closure_129_2[35]).open("DEV_APP_RATING_REQUEST", obj);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp15) {
      c3 = tmp;
      throw tmp15;
    }
  }
};
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_6, ScrollView: metroImportDefault } = get_ActivityIndicator);
const ThemeTypes = fn(1071).ThemeTypes;
const NewUserTypes = fn(13525).NewUserTypes;
const PremiumConstants = fn(1388);
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_19, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_20 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = fn(11672).VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = fn(1194).SystemThemeState;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
const createStyles = fn(4917);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_26 = createStyles.createStyles(obj2);
function launchMFA() {
  ModalActionCreatorsDefault.pop();
  asyncRequireImpl(17122, dependencyMap.paths).then((openMFAModal) => {
    const obj = { ticket: "ticket", methods: null };
    items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    obj.methods = items;
    openMFAModal.openMFAModal(obj, () => {

    }, () => {

    });
  });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default function DevToolsQuickActionsScreen() {
  const tmp = closure_26();
  let isCheckpointEnabled = locale(6643).useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  let obj = locale(6643);
  items = [CheckpointStore];
  if (obj2.useStateFromStores(items, () => isFetching.isFetching)) {
    let KeyIcon = closure_6;
  } else {
    KeyIcon = locale(7196).KeyIcon;
  }
  const tmp5Result = closure_23(KeyIcon, {});
  obj2 = locale(504);
  const tmp8 = showDevWidget(1628)();
  const items1 = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
  const stateFromStoresObject = locale(504).useStateFromStoresObject(items1, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  showDevWidget = stateFromStoresObject.showDevWidget;
  const tmp2Result = locale(504);
  const items2 = [UserStore];
  dependencyMap = locale(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp2Result7 = locale(504);
  const items3 = [OverridePremiumTypeStore];
  _slicedToArray = locale(504).useStateFromStores(items3, () => premiumTypeOverride.getPremiumTypeOverride());
  const tmp2Result8 = locale(504);
  [tmp11, asyncGeneratorStep] = setting.useState(false);
  let IgnoreProfileSpeedbumpDisabled = locale(4742).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  const tmp10 = _slicedToArray(setting.useState(false), 2);
  const items4 = [AccessibilityStore];
  [][0] = locale;
  const stateFromStores = locale(504).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  if (tmp11) {
    return closure_23(locale(17142).default, {});
  } else {
    let obj3 = { style: tmp.container, contentContainerStyle: null, children: null };
    const items5 = [tmp.content, ];
    const obj4 = { paddingBottom: tmp.content.padding + tmp8.bottom };
    items5[1] = obj4;
    obj3.contentContainerStyle = items5;
    let obj5 = { title: "General", hasIcons: false, children: null };
    let obj6 = {
      label: "Show Dev Widget",
      value: showDevWidget,
      onValueChange() {
          return DevToolsActionCreators.updateDevToolsSettings({ showDevWidget: !showDevWidget });
        }
    };
    obj5.children = closure_23(locale(7423).TableSwitchRow, obj6);
    const items6 = [closure_23(locale(6014).TableRowGroup, obj5), , , , , , , , , ];
    let obj7 = { size: tmp7(575).space.PX_16 };
    items6[1] = closure_23(locale(1186).Spacer, obj7);
    let str = "Light Theme";
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj8 = { title: "Appearance", hasIcons: true, children: null };
    const obj9 = { label: str, disabled: usingSystemTheme, icon: closure_23(locale(16708).ThemeLightIcon, {}), value: locale(4924).isThemeLight(stateFromStoresObject.theme), onValueChange: handleThemeChange };
    const items7 = [closure_23(locale(7423).TableSwitchRow, obj9), ];
    const obj10 = { label: "Reduced Motion", icon: closure_23(locale(16767).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    items7[1] = closure_23(locale(7423).TableSwitchRow, obj10);
    obj8.children = items7;
    items6[2] = closure_24(locale(6014).TableRowGroup, obj8);
    const obj11 = { size: tmp7(575).space.PX_16 };
    items6[3] = closure_23(locale(1186).Spacer, obj11);
    const obj12 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_19.map((item) => {
          ({ label, value } = item);
          locale = value;
          return closure_1_23(locale(7423).TableSwitchRow, {
            onValueChange(arg0) {
              const result = OverridePremiumTypeActions.updateClientPremiumTypeOverride(arg0 ? value : set, closure_2);
            },
            label,
            icon: closure_1_23(locale(9483).PencilIcon, {}),
            value: value === closure_3
          }, label);
        })
    };
    items6[4] = closure_23(locale(6014).TableRowGroup, obj12);
    const obj13 = { size: tmp7(575).space.PX_16 };
    items6[5] = closure_23(locale(1186).Spacer, obj13);
    const obj14 = { title: null, hasIcons: true, children: null };
    const intl = locale(1112).intl;
    obj14.title = intl.string(locale(1112).t["Aojq+L"]);
    let str2 = "Change to en-US";
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj15 = { label: str2, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: tmp14, icon: closure_23(locale(14081).LanguageIcon, {}), trailing: closure_23(locale(6030).TableRowArrow, {}) };
    const items8 = [closure_23(locale(6018).TableRow, obj15), , , , , , , , , , , , , , , ];
    const obj16 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: closure_23(locale(7196).KeyIcon, {}), trailing: closure_23(locale(6030).TableRowArrow, {}) };
    items8[1] = closure_23(locale(6018).TableRow, obj16);
    const obj17 = { label: null, subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    const intl2 = locale(1112).intl;
    obj17.label = intl2.string(locale(1112).t.yoWDXU);
    obj17.onPress = handleNewUserOnboarding;
    obj17.icon = closure_23(locale(17015).WrenchIcon, {});
    obj17.trailing = closure_23(locale(6030).TableRowArrow, {});
    items8[2] = closure_23(locale(6018).TableRow, obj17);
    const obj18 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: closure_23(locale(7196).KeyIcon, {}), trailing: closure_23(locale(6030).TableRowArrow, {}) };
    items8[3] = closure_23(locale(6018).TableRow, obj18);
    const obj19 = { label: "Show Passkey Promo Sheet", subLabel: "Skips eligibility checks. Dismisses dev tools when launching.", onPress: launchPasskeyPromoSheet, icon: closure_23(locale(7196).KeyIcon, {}), trailing: closure_23(locale(6030).TableRowArrow, {}) };
    items8[4] = closure_23(locale(6018).TableRow, obj19);
    const obj20 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: closure_23(locale(7196).KeyIcon, {}), trailing: closure_23(locale(6030).TableRowArrow, {}) };
    items8[5] = closure_23(locale(6018).TableRow, obj20);
    const obj21 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: closure_23(locale(7196).KeyIcon, {}), trailing: closure_23(locale(6030).TableRowArrow, {}) };
    items8[6] = closure_23(locale(6018).TableRow, obj21);
    let tmp5Result6 = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj22 = {
        label: "Launch Checkpoint",
        subLabel: "Look back at your year on Discord",
        onPress() {
              return locale(12412).openCheckpoint("devtools");
            },
        icon: tmp5Result,
        trailing: closure_23(locale(6030).TableRowArrow, {})
      };
      tmp5Result6 = closure_23(locale(6018).TableRow, obj22);
    }
    items8[7] = tmp5Result6;
    let tmp5Result7 = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj23 = {
        label: "Reset Checkpoint Progress",
        onPress() {
              const result = locale(12415).resetCheckpointProgress();
              const obj = locale(12415);
              showDevWidget(5599).open("CHECKPOINT_RESET", { text: "success" });
            },
        icon: closure_23(locale(7196).KeyIcon, {}),
        trailing: closure_23(locale(6030).TableRowArrow, {})
      };
      tmp5Result7 = closure_23(locale(6018).TableRow, obj23);
    }
    items8[8] = tmp5Result7;
    let tmp5Result8 = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj24 = {
        label: "Reset Checkpoint Character",
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
                  return { value: "HermesInternal", done: null };
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
                      const obj6 = { value: tmp4(12415).resetCheckpointCharacter(), done: false };
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
                      v1(5599).open("CHECKPOINT_RESET", { text: "success" });
                      const obj2 = v1(5599);
                    } else {
                      tmp4(5598).presentError("error");
                      const obj = tmp4(5598);
                    }
                    dependencyMap = 3;
                  }
                } catch (tmp14) {
                  dependencyMap = tmp;
                  throw tmp14;
                }
              }
            }),
        icon: closure_23(locale(7196).KeyIcon, {}),
        trailing: closure_23(locale(6030).TableRowArrow, {})
      };
      tmp5Result8 = closure_23(locale(6018).TableRow, obj24);
    }
    items8[9] = tmp5Result8;
    let tmp5Result9 = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj25 = {
        label: "Launch Checkpoint with fake data",
        subLabel: "Use mock stats in place of your own",
        onPress() {
              return locale(12412).openCheckpoint("devtools", locale(14876).CheckpointMocks.FAKE_DATA);
            },
        icon: tmp5Result,
        trailing: closure_23(locale(6030).TableRowArrow, {})
      };
      tmp5Result9 = closure_23(locale(6018).TableRow, obj25);
    }
    items8[10] = tmp5Result9;
    let tmp5Result10 = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj26 = {
        label: "Launch Checkpoint with No Personal Data",
        subLabel: "Use the no-shared-data flow with null stats",
        onPress() {
              return locale(12412).openCheckpoint("devtools", locale(14876).CheckpointMocks.GLOBAL_STATS);
            },
        icon: tmp5Result,
        trailing: closure_23(locale(6030).TableRowArrow, {})
      };
      tmp5Result10 = closure_23(locale(6018).TableRow, obj26);
    }
    items8[11] = tmp5Result10;
    if (isCheckpointEnabled) {
      const obj27 = {
        label: "Launch Checkpoint with Zero Data",
        subLabel: "Use mock stats with every stat at zero",
        onPress() {
              return locale(12412).openCheckpoint("devtools", locale(14876).CheckpointMocks.ZERO_STATS);
            },
        icon: tmp5Result,
        trailing: closure_23(locale(6030).TableRowArrow, {})
      };
      isCheckpointEnabled = closure_23(locale(6018).TableRow, obj27);
    }
    items8[12] = isCheckpointEnabled;
    const obj28 = { label: "Test captcha", onPress: locale(17144).showCaptchaTestModal, icon: closure_23(locale(7196).KeyIcon, {}), trailing: closure_23(locale(6030).TableRowArrow, {}) };
    items8[13] = closure_23(locale(6018).TableRow, obj28);
    const obj29 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: closure_23(locale(7162).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    items8[14] = closure_23(locale(7423).TableSwitchRow, obj29);
    const obj30 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: handleShowAppRatingModal, icon: closure_23(locale(17015).WrenchIcon, {}) };
    items8[15] = closure_23(locale(6018).TableRow, obj30);
    obj14.children = items8;
    items6[6] = closure_24(locale(6014).TableRowGroup, obj14);
    const obj31 = { size: tmp7(575).space.PX_16 };
    items6[7] = closure_23(locale(1186).Spacer, obj31);
    const obj32 = {
      icon: closure_23(locale(17015).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          return showDevWidget(1241).crash();
        }
    };
    const items9 = [closure_23(locale(6018).TableRow, obj32), , , , , , ];
    const tmp2Result10 = locale(4924);
    let isIOSResult = locale(1378).isIOS();
    if (isIOSResult) {
      const obj33 = {
        icon: closure_23(locale(17015).WrenchIcon, {}),
        label: "Simulate App Hang",
        subLabel: "Blocks the main thread forever. Background the app for 5+ seconds to let the system watchdog kill it.",
        onPress() {
              return showDevWidget(1241).hangMainThread();
            }
      };
      isIOSResult = closure_23(locale(6018).TableRow, obj33);
    }
    const obj34 = { title: "Crash Actions", hasIcons: true, children: null };
    items9[1] = isIOSResult;
    const obj35 = {
      icon: closure_23(locale(17015).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    items9[2] = closure_23(locale(6018).TableRow, obj35);
    const obj36 = {
      icon: closure_23(locale(17015).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          asyncGeneratorStep(true);
        }
    };
    items9[3] = closure_23(locale(6018).TableRow, obj36);
    const obj37 = {
      icon: closure_23(locale(17015).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          locale(1364).crash();
        }
    };
    items9[4] = closure_23(locale(6018).TableRow, obj37);
    const obj38 = {
      icon: closure_23(locale(17015).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          showDevWidget(572).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    items9[5] = closure_23(locale(6018).TableRow, obj38);
    const obj39 = {
      icon: closure_23(locale(17015).WrenchIcon, {}),
      label: "Force libdiscore Store Error",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
      onPress() {
          const socket2 = socket.getSocket();
          const obj = showDevWidget(572);
          showDevWidget(572).dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((error) => {
            const result = closure_0.resetSocketOnDispatchError({ error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          });
        }
    };
    items9[6] = closure_23(locale(6018).TableRow, obj39);
    obj34.children = items9;
    items6[8] = closure_24(locale(6014).TableRowGroup, obj34);
    const tmp2Result11 = locale(1378);
    let isIOSResult1 = locale(1378).isIOS();
    if (isIOSResult1) {
      const obj40 = { children: null };
      const obj41 = { size: tmp7(575).space.PX_16 };
      const items10 = [closure_23(locale(1186).Spacer, obj41), ];
      const obj42 = { title: "Memory Actions", hasIcons: true, children: null };
      const obj43 = {
        icon: closure_23(locale(17015).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
              return showDevWidget(1241).triggerMemoryWarning();
            }
      };
      obj42.children = closure_23(locale(6018).TableRow, obj43);
      items10[1] = closure_23(locale(6014).TableRowGroup, obj42);
      obj40.children = items10;
      isIOSResult1 = closure_24(closure_25, obj40);
    }
    items6[9] = isIOSResult1;
    obj3.children = items6;
    return closure_24(closure_7, obj3);
  }
  const tmp2Result9 = locale(504);
};