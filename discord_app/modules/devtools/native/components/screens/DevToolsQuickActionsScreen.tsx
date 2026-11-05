// === Module 17946: DevToolsQuickActionsScreen ===

// Module 17946 (DevToolsQuickActionsScreen)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import UserSettings from "UserSettings" /* 4968 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4973 */;
import dismissible_content from "dismissible_content" /* 4976 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 6070 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import NUFActionCreators from "NUFActionCreators" /* 14501 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 14585 */;
import requestReviewModalDefault from "requestReviewModal" /* 15845 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16528 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17854 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 17968 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import CheckpointStore from "CheckpointStore" /* 13668 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6706 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1386 */;
import LocaleStore from "LocaleStore" /* 2191 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import UserStore from "UserStore" /* 1385 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8008 */;

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
  asyncRequireImpl(17963, dependencyMap.paths).then((result) => {
    result = result.default.openPasskeyUpsellPromoSheet();
  });
}
function showVibingWumpus() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11503, dependencyMap.paths), {
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
  items = [asyncRequireImpl(16926, dependencyMap.paths), asyncRequireImpl(16928, dependencyMap.paths)];
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
const ThemeTypes = fn(1072).ThemeTypes;
const NewUserTypes = fn(14502).NewUserTypes;
const PremiumConstants = fn(1387);
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_19, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_20 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = fn(11452).VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = fn(1195).SystemThemeState;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_26 = createStyles.createStyles(obj2);
function launchMFA() {
  ModalActionCreatorsDefault.pop();
  asyncRequireImpl(17947, dependencyMap.paths).then((openMFAModal) => {
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
  let isCheckpointEnabled = locale(6575).useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  let obj = locale(6575);
  items = [CheckpointStore];
  if (obj2.useStateFromStores(items, () => isFetching.isFetching)) {
    let KeyIcon = closure_6;
  } else {
    KeyIcon = locale(7274).KeyIcon;
  }
  const tmp5Result = closure_23(KeyIcon, {});
  obj2 = locale(504);
  const tmp8 = showDevWidget(1627)();
  const items1 = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
  const stateFromStoresObject = locale(504).useStateFromStoresObject(items1, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  showDevWidget = stateFromStoresObject.showDevWidget;
  const tmp2Result = locale(504);
  const items2 = [UserStore];
  dependencyMap = locale(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp2Result6 = locale(504);
  const items3 = [OverridePremiumTypeStore];
  _slicedToArray = locale(504).useStateFromStores(items3, () => premiumTypeOverride.getPremiumTypeOverride());
  const tmp2Result7 = locale(504);
  [tmp11, asyncGeneratorStep] = setting.useState(false);
  let IgnoreProfileSpeedbumpDisabled = locale(4968).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  const tmp10 = _slicedToArray(setting.useState(false), 2);
  const items4 = [AccessibilityStore];
  [][0] = locale;
  const stateFromStores = locale(504).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  if (tmp11) {
    return closure_23(locale(17967).default, {});
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
    obj5.children = closure_23(locale(7507).TableSwitchRow, obj6);
    const items6 = [closure_23(locale(7204).TableRowGroup, obj5), , , , , , , , , ];
    let obj7 = { size: tmp7(575).space.PX_16 };
    items6[1] = closure_23(locale(1187).Spacer, obj7);
    let str = "Light Theme";
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj8 = { title: "Appearance", hasIcons: true, children: null };
    const obj9 = { label: str, disabled: usingSystemTheme, icon: closure_23(locale(17532).ThemeLightIcon, {}), value: locale(5150).isThemeLight(stateFromStoresObject.theme), onValueChange: handleThemeChange };
    const items7 = [closure_23(locale(7507).TableSwitchRow, obj9), ];
    const obj10 = { label: "Reduced Motion", icon: closure_23(locale(17592).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    items7[1] = closure_23(locale(7507).TableSwitchRow, obj10);
    obj8.children = items7;
    items6[2] = closure_24(locale(7204).TableRowGroup, obj8);
    const obj11 = { size: tmp7(575).space.PX_16 };
    items6[3] = closure_23(locale(1187).Spacer, obj11);
    const obj12 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_19.map((item) => {
          ({ label, value } = item);
          locale = value;
          return closure_1_23(locale(7507).TableSwitchRow, {
            onValueChange(arg0) {
              const result = OverridePremiumTypeActions.updateClientPremiumTypeOverride(arg0 ? value : dependencyMap, closure_2);
            },
            label,
            icon: closure_1_23(locale(10416).PencilIcon, {}),
            value: value === closure_3
          }, label);
        })
    };
    items6[4] = closure_23(locale(7204).TableRowGroup, obj12);
    const obj13 = { size: tmp7(575).space.PX_16 };
    items6[5] = closure_23(locale(1187).Spacer, obj13);
    const obj14 = { title: null, hasIcons: true, children: null };
    const intl = locale(1113).intl;
    obj14.title = intl.string(locale(1113).t["Aojq+L"]);
    let str2 = "Change to en-US";
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj15 = { label: str2, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: tmp14, icon: closure_23(locale(9776).LanguageIcon, {}), trailing: closure_23(locale(7128).TableRowArrow, {}) };
    const items8 = [closure_23(locale(7119).TableRow, obj15), , , , , , , , , , , , , , ];
    const obj16 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: closure_23(locale(7274).KeyIcon, {}), trailing: closure_23(locale(7128).TableRowArrow, {}) };
    items8[1] = closure_23(locale(7119).TableRow, obj16);
    const obj17 = { label: null, subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    const intl2 = locale(1113).intl;
    obj17.label = intl2.string(locale(1113).t.yoWDXU);
    obj17.onPress = handleNewUserOnboarding;
    obj17.icon = closure_23(locale(17838).WrenchIcon, {});
    obj17.trailing = closure_23(locale(7128).TableRowArrow, {});
    items8[2] = closure_23(locale(7119).TableRow, obj17);
    const obj18 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: closure_23(locale(7274).KeyIcon, {}), trailing: closure_23(locale(7128).TableRowArrow, {}) };
    items8[3] = closure_23(locale(7119).TableRow, obj18);
    const obj19 = { label: "Show Passkey Promo Sheet", subLabel: "Skips eligibility checks. Dismisses dev tools when launching.", onPress: launchPasskeyPromoSheet, icon: closure_23(locale(7274).KeyIcon, {}), trailing: closure_23(locale(7128).TableRowArrow, {}) };
    items8[4] = closure_23(locale(7119).TableRow, obj19);
    const obj20 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: closure_23(locale(7274).KeyIcon, {}), trailing: closure_23(locale(7128).TableRowArrow, {}) };
    items8[5] = closure_23(locale(7119).TableRow, obj20);
    const obj21 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: closure_23(locale(7274).KeyIcon, {}), trailing: closure_23(locale(7128).TableRowArrow, {}) };
    items8[6] = closure_23(locale(7119).TableRow, obj21);
    let tmp5Result5 = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj22 = {
        label: "Launch Checkpoint",
        subLabel: "Look back at your year on Discord",
        onPress() {
              return locale(13669).openCheckpoint("devtools");
            },
        icon: tmp5Result,
        trailing: closure_23(locale(7128).TableRowArrow, {})
      };
      tmp5Result5 = closure_23(locale(7119).TableRow, obj22);
    }
    items8[7] = tmp5Result5;
    let tmp5Result6 = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj23 = {
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
                      const obj6 = { value: tmp4(13670).resetCheckpoint(), done: false };
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
                      v1(5849).open("CHECKPOINT_RESET", { text: "success" });
                      const obj2 = v1(5849);
                    } else {
                      tmp4(5848).presentError("error");
                      const obj = tmp4(5848);
                    }
                    dependencyMap = 3;
                  }
                } catch (tmp14) {
                  dependencyMap = tmp;
                  throw tmp14;
                }
              }
            }),
        icon: closure_23(locale(7274).KeyIcon, {}),
        trailing: closure_23(locale(7128).TableRowArrow, {})
      };
      tmp5Result6 = closure_23(locale(7119).TableRow, obj23);
    }
    items8[8] = tmp5Result6;
    let tmp5Result7 = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj24 = {
        label: "Launch Checkpoint with fake data",
        subLabel: "Use mock stats in place of your own",
        onPress() {
              return locale(13669).openCheckpoint("devtools", true, locale(13671).CheckpointMockStats.DEFAULT);
            },
        icon: tmp5Result,
        trailing: closure_23(locale(7128).TableRowArrow, {})
      };
      tmp5Result7 = closure_23(locale(7119).TableRow, obj24);
    }
    items8[9] = tmp5Result7;
    let tmp5Result8 = isCheckpointEnabled;
    if (isCheckpointEnabled) {
      const obj25 = {
        label: "Launch Checkpoint with No Personal Data",
        subLabel: "Use the no-shared-data flow with null stats",
        onPress() {
              return locale(13669).openCheckpoint("devtools", false, locale(13671).CheckpointMockStats.NO_PERSONAL_DATA);
            },
        icon: tmp5Result,
        trailing: closure_23(locale(7128).TableRowArrow, {})
      };
      tmp5Result8 = closure_23(locale(7119).TableRow, obj25);
    }
    items8[10] = tmp5Result8;
    if (isCheckpointEnabled) {
      const obj26 = {
        label: "Launch Checkpoint with Zero Data",
        subLabel: "Use mock stats with every stat at zero",
        onPress() {
              return locale(13669).openCheckpoint("devtools", true, locale(13671).CheckpointMockStats.ZERO_DATA);
            },
        icon: tmp5Result,
        trailing: closure_23(locale(7128).TableRowArrow, {})
      };
      isCheckpointEnabled = closure_23(locale(7119).TableRow, obj26);
    }
    items8[11] = isCheckpointEnabled;
    const obj27 = { label: "Test captcha", onPress: locale(17969).showCaptchaTestModal, icon: closure_23(locale(7274).KeyIcon, {}), trailing: closure_23(locale(7128).TableRowArrow, {}) };
    items8[12] = closure_23(locale(7119).TableRow, obj27);
    const obj28 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: closure_23(locale(7240).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    items8[13] = closure_23(locale(7507).TableSwitchRow, obj28);
    const obj29 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: handleShowAppRatingModal, icon: closure_23(locale(17838).WrenchIcon, {}) };
    items8[14] = closure_23(locale(7119).TableRow, obj29);
    obj14.children = items8;
    items6[6] = closure_24(locale(7204).TableRowGroup, obj14);
    const obj30 = { size: tmp7(575).space.PX_16 };
    items6[7] = closure_23(locale(1187).Spacer, obj30);
    const obj31 = { title: "Crash Actions", hasIcons: true, children: null };
    const obj32 = {
      icon: closure_23(locale(17838).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          return showDevWidget(1242).crash();
        }
    };
    const items9 = [closure_23(locale(7119).TableRow, obj32), , , , , ];
    const obj33 = {
      icon: closure_23(locale(17838).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    items9[1] = closure_23(locale(7119).TableRow, obj33);
    const obj34 = {
      icon: closure_23(locale(17838).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          asyncGeneratorStep(true);
        }
    };
    items9[2] = closure_23(locale(7119).TableRow, obj34);
    const obj35 = {
      icon: closure_23(locale(17838).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          locale(1363).crash();
        }
    };
    items9[3] = closure_23(locale(7119).TableRow, obj35);
    const obj36 = {
      icon: closure_23(locale(17838).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          showDevWidget(572).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    items9[4] = closure_23(locale(7119).TableRow, obj36);
    const obj37 = {
      icon: closure_23(locale(17838).WrenchIcon, {}),
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
    items9[5] = closure_23(locale(7119).TableRow, obj37);
    obj31.children = items9;
    items6[8] = closure_24(locale(7204).TableRowGroup, obj31);
    const tmp2Result9 = locale(5150);
    let isIOSResult = locale(1377).isIOS();
    if (isIOSResult) {
      const obj38 = { children: null };
      const obj39 = { size: tmp7(575).space.PX_16 };
      const items10 = [closure_23(locale(1187).Spacer, obj39), ];
      const obj40 = { title: "Memory Actions", hasIcons: true, children: null };
      const obj41 = {
        icon: closure_23(locale(17838).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
              return showDevWidget(1242).triggerMemoryWarning();
            }
      };
      obj40.children = closure_23(locale(7119).TableRow, obj41);
      items10[1] = closure_23(locale(7204).TableRowGroup, obj40);
      obj38.children = items10;
      isIOSResult = closure_24(closure_25, obj38);
    }
    items6[9] = isIOSResult;
    obj3.children = items6;
    return closure_24(closure_7, obj3);
  }
  const tmp2Result8 = locale(504);
};