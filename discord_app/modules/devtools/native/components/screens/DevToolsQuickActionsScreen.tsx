// discord_app/modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx
import dispatcherDefault from "dispatcher" /* 709 */;
import ThemesDefault from "Themes" /* 712 */;
import updateUserGuildSettings from "updateUserGuildSettings" /* 1374 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4196 */;
import _modDef5260 from "module_5260" /* 5260 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 9365 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 11877 */;
import setNewUser from "setNewUser" /* 11925 */;
import setFontSize from "setFontSize" /* 13813 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import closure_7 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import closure_8 from "_handleConnectionOpen" /* 4495 */;
import closure_9 from "setPremiumTypeActual" /* 1923 */;
import closure_10 from "_getSystemLocale" /* 1994 */;
import closure_11 from "handleThemeChange" /* 1302 */;
import closure_12 from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import closure_13 from "mergeGuildAvatar" /* 1922 */;
import closure_14 from "initialize" /* 7471 */;
import { ThemeTypes } from "ME" /* 676 */;
import { NewUserTypes } from "NewUserTypes" /* 11878 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import { VIBING_WUMPUS_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE" /* 10569 */;
import { SystemThemeState } from "SystemThemeState" /* 1305 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function handleNewUserOnboarding() {
  setNewUser.setNewUser(NewUserTypes.ORGANIC_REGISTERED);
  const obj = setNewUser;
  dispatcherDefault.wait(_startContactSyncForDiscoverability.startOnboarding);
}
function handleThemeChange(arg0) {
  saveGuildFoldersDefault.updateTheme(arg0 ? ThemeTypes.LIGHT : ThemeTypes.DARK);
}
function handleReducedMotionChange(arg0) {
  let str = "no-preference";
  if (arg0) {
    str = "reduce";
  }
  const result = setFontSize.setPrefersReducedMotion(str);
}
function handleLaunchWelcomeReset() {
  const result = updateUserGuildSettings.removeDismissedContent(DismissibleContent.DismissibleContent.SEEN_LAUNCH_WELCOME);
  const obj = updateUserGuildSettings;
  const result1 = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.SEEN_OLD_DESIGN);
}
function showVibingWumpus() {
  let obj = _modDef5260;
  obj = {
    onClose() {

    }
  };
  obj.pushLazy(asyncRequireImpl(10615, dependencyMap.paths), obj, VIBING_WUMPUS_MODAL_KEY);
}
function handleResetDoubleTapState() {
  const result = updateUserGuildSettings.removeDismissedContent(DismissibleContent.DismissibleContent.DOUBLE_TAP_TO_REACT_UPSELL);
  const obj = updateUserGuildSettings;
  const result1 = updateUserGuildSettings.removeDismissedContent(DismissibleContent.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER);
  const obj2 = updateUserGuildSettings;
  const result2 = updateUserGuildSettings.removeDismissedContent(DismissibleContent.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
  const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", (arg0) => {
    arg0.defaultReactionEmoji = undefined;
  }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function launchTotpSetupSuccess() {
  let arr = _modDef5260;
  arr = arr.pop();
  const items = [asyncRequireImpl(14138, dependencyMap.paths), asyncRequireImpl(14140, dependencyMap.paths)];
  Promise.all(items).then((arg0) => {
    const iter = arg0[Symbol.iterator]();
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
  const apply = _handleShowAppRatingModal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleShowAppRatingModal() {
  const self = this;
  const tmp = callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp5;
            let ok = tmp2;
            ok = undefined;
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_1(13247)();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          ok = arg1;
          const obj2 = { key: "DEV_APP_RATING_REQUEST", icon: null, content: null, toastDurationMs: 6000 };
          obj2[1] = function icon() {
            return callback2(callback(table[36]).WrenchIcon, {});
          };
          let str2 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
          if (!ok.ok) {
            const _HermesInternal = HermesInternal;
            str2 = "Review request failed: " + closure_1_0.error;
          }
          obj2[2] = str2;
          callback(4094).open(obj2);
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  });
  closure_34 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = GuildFeatures);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
createCacheKey = { container: null, content: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
let closure_24 = createCacheKey.createStyles(createCacheKey);
function launchMFA() {
  let arr = _modDef5260;
  arr = arr.pop();
  asyncRequireImpl(15118, dependencyMap.paths).then((openMFAModal) => {
    const items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    openMFAModal.openMFAModal({ ticket: "ticket", methods: items }, () => {

    }, () => {

    });
  });
}
let obj1 = { padding: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default function DevToolsQuickActionsScreen() {
  const tmp = callback4();
  const tmp5 = locale;
  let obj = locale(589);
  const items = [closure_11, closure_10, closure_12, closure_14];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  const showDevWidget = stateFromStoresObject.showDevWidget;
  obj1 = locale(589);
  const items1 = [closure_13];
  dependencyMap = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj2 = locale(589);
  const items2 = [closure_9];
  const callback = obj2.useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
  const tmp4 = showDevWidget(1629)();
  [tmp8, closure_4] = callback(setting.useState(false), 2);
  let IgnoreProfileSpeedbumpDisabled = locale(4066).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  let obj3 = locale(589);
  const items3 = [closure_7];
  [][0] = locale;
  const stateFromStores = obj3.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp8) {
    return callback3(tmp5(15134).default, {});
  } else {
    obj = { style: null, contentContainerStyle: null, children: null };
    obj[0] = tmp.container;
    const items4 = [tmp.content, ];
    obj = { paddingBottom: null };
    obj[0] = tmp.content.padding + tmp4.bottom;
    items4[1] = obj;
    obj[1] = items4;
    const tmp14 = callback3;
    obj1 = { title: "General", hasIcons: false, children: null };
    obj2 = { label: "Show Dev Widget", value: null, onValueChange: null };
    obj2[1] = showDevWidget;
    obj2[2] = function onValueChange() {
      let obj = locale(13951);
      obj = { showDevWidget: !showDevWidget };
      return obj.updateDevToolsSettings(obj);
    };
    obj1[2] = callback3(tmp5(7178).TableSwitchRow, obj2);
    const items5 = [callback3(tmp5(6286).TableRowGroup, obj1), , , , , , , , , ];
    obj3 = { size: null };
    obj3[0] = tmp2(712).space.PX_16;
    items5[1] = callback3(tmp5(1297).Spacer, obj3);
    let str = "Light Theme";
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj4 = { title: "Appearance", hasIcons: true, children: null };
    const obj5 = { label: null, disabled: null, icon: null, value: null, onValueChange: null };
    obj5[0] = str;
    obj5[1] = usingSystemTheme;
    obj5[2] = tmp14(tmp5(14613).ThemeLightIcon, {});
    let tmp5Result = tmp5(1363);
    obj5[3] = tmp5Result.isThemeLight(stateFromStoresObject.theme);
    obj5[4] = handleThemeChange;
    const items6 = [tmp14(tmp5(7178).TableSwitchRow, obj5), ];
    const obj6 = { label: "Reduced Motion", icon: null, value: null, onValueChange: null };
    obj6[1] = tmp14(tmp5(14674).AccessibilityIcon, {});
    obj6[2] = stateFromStores;
    obj6[3] = handleReducedMotionChange;
    items6[1] = tmp14(tmp5(7178).TableSwitchRow, obj6);
    obj4[2] = items6;
    items5[2] = closure_22(tmp5(6286).TableRowGroup, obj4);
    const obj7 = { size: null };
    obj7[0] = tmp2(712).space.PX_16;
    items5[3] = tmp14(tmp5(1297).Spacer, obj7);
    const obj8 = { title: "Override Client-Side Premium Type", hasIcons: true, children: null };
    obj8[2] = closure_17.map((arg0) => {
      ({ label, value } = arg0);
      locale = value;
      return closure_1_21(locale(7178).TableSwitchRow, {
        onValueChange(arg0) {
          const result = locale(table[48]).updateClientPremiumTypeOverride(arg0 ? closure_0 : closure_2_18, closure_1_2);
        },
        label,
        icon: closure_1_21(locale(9925).PencilIcon, {}),
        value: value === closure_3
      }, label);
    });
    items5[4] = tmp14(tmp5(6286).TableRowGroup, obj8);
    const obj9 = { size: null };
    obj9[0] = tmp2(712).space.PX_16;
    items5[5] = tmp14(tmp5(1297).Spacer, obj9);
    const obj10 = { title: null, hasIcons: true, children: null };
    const intl = tmp5(1236).intl;
    obj10[0] = intl.string(tmp5(1236).t["Aojq+L"]);
    let str2 = "Change to en-US";
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj11 = { label: null, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: null, icon: null, trailing: null };
    obj11[0] = str2;
    obj11[2] = tmp11;
    obj11[3] = tmp14(tmp5(14729).LanguageIcon, {});
    obj11[4] = tmp14(tmp5(6297).TableRowArrow, {});
    const items7 = [tmp14(tmp5(6291).TableRow, obj11), , , , , , , , , ];
    const obj12 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: null, icon: null, trailing: null };
    obj12[2] = handleResetDoubleTapState;
    obj12[3] = tmp14(tmp5(8595).KeyIcon, {});
    obj12[4] = tmp14(tmp5(6297).TableRowArrow, {});
    items7[1] = tmp14(tmp5(6291).TableRow, obj12);
    const obj13 = { label: null, subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    const intl2 = tmp5(1236).intl;
    obj13[0] = intl2.string(tmp5(1236).t.yoWDXU);
    obj13[2] = handleNewUserOnboarding;
    obj13[3] = tmp14(tmp5(14870).WrenchIcon, {});
    obj13[4] = tmp14(tmp5(6297).TableRowArrow, {});
    items7[2] = tmp14(tmp5(6291).TableRow, obj13);
    const obj14 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    obj14[2] = launchMFA;
    obj14[3] = tmp14(tmp5(8595).KeyIcon, {});
    obj14[4] = tmp14(tmp5(6297).TableRowArrow, {});
    items7[3] = tmp14(tmp5(6291).TableRow, obj14);
    const obj15 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    obj15[2] = launchTotpSetupSuccess;
    obj15[3] = tmp14(tmp5(8595).KeyIcon, {});
    obj15[4] = tmp14(tmp5(6297).TableRowArrow, {});
    items7[4] = tmp14(tmp5(6291).TableRow, obj15);
    const obj16 = { label: "Reset Launch Welcome", subLabel: "Resets launch welcome NUX flag, requires an app restart to take effect.", onPress: null, icon: null, trailing: null };
    obj16[2] = handleLaunchWelcomeReset;
    obj16[3] = tmp14(tmp5(8595).KeyIcon, {});
    obj16[4] = tmp14(tmp5(6297).TableRowArrow, {});
    items7[5] = tmp14(tmp5(6291).TableRow, obj16);
    const obj17 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: null, icon: null, trailing: null };
    obj17[2] = showVibingWumpus;
    obj17[3] = tmp14(tmp5(8595).KeyIcon, {});
    obj17[4] = tmp14(tmp5(6297).TableRowArrow, {});
    items7[6] = tmp14(tmp5(6291).TableRow, obj17);
    const obj18 = { label: "Test captcha", onPress: null, icon: null, trailing: null };
    obj18[1] = tmp5(15136).showCaptchaTestModal;
    obj18[2] = tmp14(tmp5(8595).KeyIcon, {});
    obj18[3] = tmp14(tmp5(6297).TableRowArrow, {});
    items7[7] = tmp14(tmp5(6291).TableRow, obj18);
    const obj19 = { label: "Ignored Profile Speedbump Suppression", subLabel: "Suppresses the speedbump for ignored profiles.", icon: null, value: null, onValueChange: null };
    obj19[2] = tmp14(tmp5(8605).EyeSlashIcon, {});
    obj19[3] = setting;
    obj19[4] = function onValueChange() {
      const IgnoreProfileSpeedbumpDisabled = locale(4066).IgnoreProfileSpeedbumpDisabled;
      return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
    };
    items7[8] = tmp14(tmp5(7178).TableSwitchRow, obj19);
    const obj20 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: null, icon: null };
    obj20[2] = handleShowAppRatingModal;
    obj20[3] = tmp14(tmp5(14870).WrenchIcon, {});
    items7[9] = tmp14(tmp5(6291).TableRow, obj20);
    obj10[2] = items7;
    items5[6] = closure_22(tmp5(6286).TableRowGroup, obj10);
    const obj21 = { size: null };
    obj21[0] = tmp2(712).space.PX_16;
    items5[7] = tmp14(tmp5(1297).Spacer, obj21);
    const obj22 = { title: "Crash Actions", hasIcons: true, children: null };
    const obj23 = { icon: null, label: "Force Native Crash", onPress: null };
    obj23[0] = tmp14(tmp5(14870).WrenchIcon, {});
    obj23[2] = function onPress() {
      return showDevWidget(1208).crash();
    };
    const items8 = [tmp14(tmp5(6291).TableRow, obj23), , , , , ];
    const obj24 = { icon: null, label: "Force JS Crash", onPress: null };
    obj24[0] = tmp14(tmp5(14870).WrenchIcon, {});
    obj24[2] = function onPress() {
      error = new Error("Force JS Crash");
      throw error;
    };
    items8[1] = tmp14(tmp5(6291).TableRow, obj24);
    const obj25 = { icon: null, label: "Force JS Boundary Crash", onPress: null };
    obj25[0] = tmp14(tmp5(14870).WrenchIcon, {});
    obj25[2] = function onPress() {
      callback(true);
    };
    items8[2] = tmp14(tmp5(6291).TableRow, obj25);
    const obj26 = { icon: null, label: "Force libdiscore Crash", onPress: null };
    obj26[0] = tmp14(tmp5(14870).WrenchIcon, {});
    obj26[2] = function onPress() {
      locale(1917).crash();
    };
    items8[3] = tmp14(tmp5(6291).TableRow, obj26);
    const obj27 = { icon: null, label: "Force libdiscore Store Crash", subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore", onPress: null };
    obj27[0] = tmp14(tmp5(14870).WrenchIcon, {});
    obj27[3] = function onPress() {
      showDevWidget(709).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
    };
    items8[4] = tmp14(tmp5(6291).TableRow, obj27);
    const obj28 = { icon: null, label: "Force libdiscore Store Error", subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset", onPress: null };
    obj28[0] = tmp14(tmp5(14870).WrenchIcon, {});
    obj28[3] = function onPress() {
      const socket2 = socket.getSocket();
      const obj = showDevWidget(709);
      showDevWidget(709).dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((error) => {
        const result = closure_0.resetSocketOnDispatchError({ error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
      });
    };
    items8[5] = tmp14(tmp5(6291).TableRow, obj28);
    obj22[2] = items8;
    items5[8] = closure_22(tmp5(6286).TableRowGroup, obj22);
    tmp5Result = tmp5(500);
    let isIOSResult = tmp5Result.isIOS();
    if (isIOSResult) {
      const obj29 = { children: null };
      const obj30 = { size: null };
      obj30[0] = tmp2(712).space.PX_16;
      const items9 = [tmp14(tmp5(1297).Spacer, obj30), ];
      const obj31 = { title: "Memory Actions", hasIcons: true, children: null };
      const obj32 = { icon: null, label: "Trigger Memory Warning", subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).", onPress: null };
      obj32[0] = tmp14(tmp5(14870).WrenchIcon, {});
      obj32[3] = function onPress() {
        return showDevWidget(1208).triggerMemoryWarning();
      };
      obj31[2] = tmp14(tmp5(6291).TableRow, obj32);
      items9[1] = tmp14(tmp5(6286).TableRowGroup, obj31);
      obj29[0] = items9;
      isIOSResult = tmp12(closure_23, obj29);
    }
    items5[9] = isIOSResult;
    obj[2] = items5;
    return closure_22(ScrollView, obj);
  }
  const tmp7 = callback(setting.useState(false), 2);
};