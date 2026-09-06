// === Module 16371: YouAccountActionSheet ===

// Module 16371 (YouAccountActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1229 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import useToken from "useToken" /* 4262 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import Pressables from "Pressables" /* 5123 */;
import Card from "Card" /* 5607 */;
import useDesignToggleDefault from "useDesignToggle" /* 5626 */;
import TableRadioGroup from "TableRadioGroup" /* 5685 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9358 */;
import getChannelA11yLabel from "getChannelA11yLabel" /* 9770 */;
import FocusModeUtils from "FocusModeUtils" /* 10090 */;
import setUserStatusDefault from "setUserStatus" /* 10091 */;
import userSettingToActivity from "userSettingToActivity" /* 11110 */;
import CustomStatusUtils from "CustomStatusUtils" /* 11113 */;
import removeCustomStatusDefault from "removeCustomStatus" /* 11120 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 11320 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 11948 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 12417 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 15178 */;
import ThemeLightIcon from "ThemeLightIcon" /* 15267 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 15269 */;
import ThemeGrayIcon from "ThemeGrayIcon" /* 16372 */;
import openManageAccountsModalDefault from "openManageAccountsModal" /* 16374 */;
import noop from "module_19" /* 19 */;
import MultiAccountStore from "MultiAccountStore" /* 12413 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserRecord from "UserRecord" /* 1385 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7720 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;
import UserStore from "UserStore" /* 1371 */;

const TableRowGroup = currentLocale(5687);
const TableSwitchRow = currentLocale(7201);
const BellSlashIcon = currentLocale(9059);
require = fn;
function YouStatusRadioGroup() {
  const memo = noop.useMemo(() => {
    let obj = { icon: null, value: null };
    obj = { source: closure_1(14112), variant: "text-status-online" };
    obj.icon = closure_1_19(setting(5611).TableRowIcon, obj);
    obj.value = constants.ONLINE;
    const items = [obj, , , ];
    obj = { icon: closure_1_19(setting(5611).TableRowIcon, { source: closure_1(14109), variant: "text-status-idle" }), value: constants.IDLE };
    items[1] = obj;
    const obj2 = { icon: null, value: null };
    const obj1 = { source: closure_1(14109), variant: "text-status-idle" };
    obj2.icon = closure_1_19(setting(5611).TableRowIcon, { source: closure_1(14110), variant: "text-status-dnd" });
    obj2.value = constants.DND;
    items[2] = obj2;
    const obj4 = { icon: null, value: null };
    const obj3 = { source: closure_1(14110), variant: "text-status-dnd" };
    obj4.icon = closure_1_19(setting(5611).TableRowIcon, { source: closure_1(14111), variant: "text-status-offline" });
    obj4.value = constants.INVISIBLE;
    items[3] = obj4;
    return items;
  }, []);
  const StatusSetting = setting(1935).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(1935).StatusExpiresAtSetting;
  closure_1 = StatusExpiresAtSetting.useSetting();
  let items = [setting];
  const callback = noop.useCallback((nextStatus) => {
    setUserStatusDefault({ prevStatus: setting, nextStatus });
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let intl = setting(1114).intl;
  obj.title = intl.string(setting(1114).t["0DPAZH"]);
  obj.onChange = callback;
  obj.defaultValue = setting;
  obj.children = memo.map((value) => {
    let obj = {};
    const merged = Object.assign(value);
    obj.label = getChannelA11yLabel.getStatusLabel(value.value);
    let formatToPlainStringResult;
    if (value.value === setting) {
      if (null != closure_1) {
        if ("0" !== tmp6) {
          const intl = tmp2(1114).intl;
          obj = { endTime: null };
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(tmp6));
          obj.endTime = date.toLocaleString(tmp2(1114).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
          formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t.BWD8fs, obj);
        }
      }
    }
    obj.subLabel = formatToPlainStringResult;
    return closure_2_19(TableRadioRow.TableRadioRow, obj, value.value);
  });
  return closure_19(setting(5685).TableRadioGroup, obj);
}
function ThemeRadioGroup() {
  let obj = initialize;
  const items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj = { children: null };
  const callback = noop.useCallback((arg0) => {
    const result = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
    CustomThemeMobileActionCreators.resetCustomTheme();
    UserSettingsActionCreatorsDefault.updateTheme(arg0);
  }, []);
  obj = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.Ksh3ik);
  obj.onChange = callback;
  obj.defaultValue = stateFromStores;
  const obj1 = { icon: closure_1_19(ThemeLightIcon.ThemeLightIcon, {}), label: null, value: null };
  let obj4 = ClientThemesUtils;
  obj1.label = obj4.getThemeName(constants3.LIGHT);
  obj1.value = constants3.LIGHT;
  const items1 = [closure_1_19(TableRadioRow.TableRadioRow, obj1), , , ];
  let obj2 = { icon: closure_1_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: ClientThemesUtils.getThemeName(constants3.DARK), value: constants3.DARK };
  items1[1] = closure_1_19(TableRadioRow.TableRadioRow, obj2);
  const obj3 = { icon: closure_1_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: null, value: null };
  obj3.label = ClientThemesUtils.getThemeName(constants3.DARKER);
  obj3.value = constants3.DARKER;
  items1[2] = closure_1_19(TableRadioRow.TableRadioRow, obj3);
  obj4 = { icon: closure_1_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: null, value: null };
  obj4.label = ClientThemesUtils.getThemeName(constants3.MIDNIGHT);
  obj4.value = constants3.MIDNIGHT;
  items1[3] = closure_1_19(TableRadioRow.TableRadioRow, obj4);
  obj.children = items1;
  obj.children = closure_1_20(TableRadioGroup.TableRadioGroup, obj);
  return closure_1_19(hasOwnProperty, obj);
}
function YouAccountRadioGroup() {
  const tmp = closure_21();
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = stateFromStores(15951);
  const multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  closure_129_0 = multiAccountUsers;
  let obj2 = stateFromStores(504);
  const items1 = [StreamerModeStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  closure_129_1 = stateFromStores1;
  const items2 = [multiAccountUsers, stateFromStores1];
  const memo = noop.useMemo(() => stateFromStores.map((id) => {
    let obj = new UserRecord(id);
    let combined = null;
    if (!closure_1_1) {
      combined = null;
      if (!obj.hasUniqueUsername()) {
        const _HermesInternal = HermesInternal;
        combined = "#" + obj.discriminator;
      }
    }
    let str2 = "always";
    if (closure_1_1) {
      str2 = "never";
    }
    obj = { label: multiAccountUsers(4404).getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: null };
    obj = { user: obj, guildId: "Array", size: stateFromStores(1178).AvatarSizes.REFRESH_MEDIUM_32 };
    obj.icon = closure_2_19(stateFromStores(1178).Avatar, obj);
    return obj;
  }), items2);
  const items3 = [multiAccountUsers, ];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  let tmp8 = null;
  if (null != stateFromStores) {
    obj = { style: tmp.account, children: null };
    obj = { style: tmp.manage, children: null };
    obj1 = {
      onPress() {
          return multiAccountUsers(16374)();
        },
      children: null
    };
    obj2 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl = tmp2(1114).intl;
    obj2.children = intl.string(tmp2(1114).t.HxrBOZ);
    obj1.children = closure_19(tmp2(4556).Text, obj2);
    obj.children = closure_19(tmp2(5123).PressableOpacity, obj1);
    const items4 = [closure_19(closure_5, obj), ];
    const obj3 = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
    const intl2 = tmp2(1114).intl;
    obj3.title = intl2.string(tmp2(1114).t.oMNyYN);
    obj3.onChange = tmp7;
    obj3.defaultValue = stateFromStores.id;
    obj3.children = memo.map((value) => {
      const merged = Object.assign(value);
      return closure_1_19(stateFromStores(5688).TableRadioRow, {}, value.value);
    });
    items4[1] = closure_19(tmp2(5685).TableRadioGroup, obj3);
    obj.children = items4;
    tmp8 = closure_20(closure_5, obj);
  }
  return tmp8;
}
function FocusModeSetting() {
  let currentLocale = require;
  let toLocaleStringResult = dependencyMap;
  let tmp5Result = FocusModeUtils;
  const focusModeEnabled = tmp5Result.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  let setting = FocusModeExpiresAtSetting.useSetting();
  if (!focusModeEnabled) {
    return null;
  } else {
    tmp5Result = { accessibilityLabel: null, accessibilityHint: null, icon: null, onValueChange: null, value: null, label: null, subLabel: null };
    const intl = util.intl;
    tmp5Result.accessibilityLabel = intl.string(util.t.wCxBOc);
    const intl2 = util.intl;
    tmp5Result.accessibilityHint = intl2.string(util.t.wCxBOc);
    let obj = { style: tmp.leadingIcon };
    tmp5Result.icon = closure_1_19(BellSlashIcon.BellSlashIcon, obj);
    tmp5Result.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        let obj = {
          onSelect(quiet_mode_enabled, arg1) {
              closure_1_0(10090).setFocusMode(quiet_mode_enabled, arg1);
              const obj = closure_1_0(10090);
              closure_1_1(4527).hideActionSheet();
              const obj2 = closure_1_1(4527);
              const result = closure_1_0(16369).showYouAccountActionSheet();
            }
        };
        require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[47], paths.paths), "FocusModeOptionsActionSheet", obj);
        let obj2 = require("ActionSheetActionCreators");
      } else {
        obj = require("FocusModeUtils");
        obj.setFocusMode(false);
      }
    };
    tmp5Result.value = focusModeEnabled;
    const intl3 = util.intl;
    tmp5Result.label = intl3.string(util.t.wCxBOc);
    if (null == setting) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.i0nsoY);
      const obj1 = { hasIcons: true, children: null };
      tmp5Result.subLabel = stringResult;
      tmp5Result = tmp5(TableSwitchRow.TableSwitchRow, tmp5Result);
      obj1.children = tmp5Result;
      tmp5Result = tmp5(TableRowGroup.TableRowGroup, obj1);
    }
    const intl5 = util.intl;
    let obj2 = { endTime: null };
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    currentLocale = util.intl.currentLocale;
    toLocaleStringResult = date.toLocaleString(currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    obj2.endTime = toLocaleStringResult;
    stringResult = intl5.formatToPlainString(util.t.BWD8fs, obj2);
  }
}
function CustomStatus() {
  const tmp = closure_21();
  let obj = userSettingToActivity;
  const customStatusActivity = obj.useCustomStatusActivity();
  let obj1 = useToken;
  let state;
  const token = obj1.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  let tmp8 = null != state;
  if (tmp8) {
    tmp8 = "" !== customStatusActivity.state;
  }
  if (!tmp8) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    tmp8 = null != emoji;
  }
  let tmp2Result = tmp2(10880);
  let state1;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = tmp2Result.useGameMentionsAsPlainText(state1);
  tmp2Result = tmp2(4262);
  const token1 = tmp2Result.useToken(tmp5(576).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const token2 = useToken.useToken(tmp5(576).modules.mobile.TABLE_ROW_LABEL_COLOR);
  obj = { shadow: "none", border: "none", style: tmp.customStatusRow, children: null };
  obj = { style: tmp.customStatusEditButton, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
  const intl = tmp2(1114).intl;
  const string = intl.string;
  const t = tmp2(1114).t;
  if (tmp8) {
    let stringResult = string(t["2p9FMw"]);
  } else {
    stringResult = string(t["/UonHN"]);
  }
  obj.accessibilityLabel = stringResult;
  let formatToPlainStringResult;
  if (tmp8) {
    const intl2 = tmp2(1114).intl;
    emoji = customStatusActivity.emoji;
    let str2;
    if (emoji != null) {
      str2 = emoji.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    obj1 = { emoji: str2, status: gameMentionsAsPlainText };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.GE7QzY, obj1);
  }
  obj.accessibilityHint = formatToPlainStringResult;
  obj.onPress = function onPress() {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { analyticsLocations: null };
    const items = [AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET];
    obj.analyticsLocations = items;
    const result = CustomStatusUtils.openEditCustomStatusModal(obj);
  };
  let emoji1;
  if (customStatusActivity != null) {
    emoji1 = customStatusActivity.emoji;
  }
  if (null != emoji1) {
    const obj2 = { emoji: customStatusActivity.emoji, size: token };
    let tmp14Result = tmp14(tmp5(10895), obj2);
  } else {
    const obj3 = { size: "md", style: tmp.leadingIcon };
    tmp14Result = tmp14(tmp2(8757).ReactionIcon, obj3);
  }
  let items = [tmp14Result, ];
  const obj4 = { variant: token1, color: token2, lineClamp: 2, style: tmp.customStatusText, children: null };
  if (!tmp8) {
    const intl3 = tmp2(1114).intl;
    gameMentionsAsPlainText = intl3.string(tmp2(1114).t["/UonHN"]);
  }
  obj4.children = gameMentionsAsPlainText;
  items[1] = closure_1_19(Text_Text.Text, obj4);
  obj.children = items;
  const items1 = [closure_1_20(Pressables.PressableOpacity, obj), ];
  tmp14Result = null;
  if (null != customStatusActivity) {
    const obj5 = {
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          removeCustomStatusDefault();
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      style: null,
      children: null
    };
    const intl4 = tmp2(1114).intl;
    obj5.accessibilityLabel = intl4.string(tmp2(1114).t.wfYTHe);
    obj5.style = tmp.customStatusRemoveButton;
    const obj6 = { style: tmp.trailingIcon, source: tmp5(7089) };
    obj5.children = tmp14(timestampProducer, obj6);
    tmp14Result = tmp14(tmp2(5123).PressableOpacity, obj5);
  }
  const tmp2Result1 = useToken;
  items1[1] = tmp14Result;
  obj.children = items1;
  return closure_1_19(TableRowGroup.TableRowGroup, { hasIcons: false, children: closure_1_20(Card.Card, obj) });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const MultiAccountTokenStatus = fn(12413).MultiAccountTokenStatus;
const Constants = fn(1074);
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = Constants);
let closure_18 = fn(12414).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
fn(4560);
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 }, trailingIcon: null, customStatusRow: null, customStatusEditButton: null, customStatusRemoveButton: null, customStatusText: null };
let size = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj.trailingIcon = size;
obj = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusRow = obj;
const createStyles = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusEditButton = createStyles;
obj.customStatusRemoveButton = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.customStatusText = { flexShrink: 1 };
let closure_21 = createStyles.createStyles(obj);
let obj2 = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default noop.memo((statusOnly) => {
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  let obj = initialize;
  const items = [MultiAccountStore];
  const stateFromStores = obj.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
  const items1 = [DeveloperExperimentStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  obj = { startExpanded: stateFromStores, header: null, showGradient: true, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (flag) {
    let stringResult = string(t["3Uj+2p"]);
  } else if (stateFromStores) {
    stringResult = string(t["ldCE/p"]);
  } else {
    stringResult = string(t["qP/i6k"]);
  }
  obj.header = closure_1_19(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult });
  let tmp7Result = tmp5;
  if (tmp5) {
    tmp7Result = tmp7(ThemeRadioGroup, {});
  }
  const items2 = [tmp7Result, closure_1_19(YouStatusRadioGroup, {}), closure_1_19(FocusModeSetting, {}), closure_1_19(CustomStatus, {}), , , ];
  tmp7Result = !flag;
  if (!flag) {
    tmp7Result = stateFromStores;
  }
  if (tmp7Result) {
    tmp7Result = tmp7(YouAccountRadioGroup, {});
  }
  items2[4] = tmp7Result;
  let tmp7Result1 = !flag;
  if (!flag) {
    tmp7Result1 = stateFromStores1;
  }
  if (tmp7Result1) {
    tmp7Result1 = tmp7(tmp4(16380), {});
  }
  items2[5] = tmp7Result1;
  let tmp7Result2 = !flag;
  if (!flag) {
    tmp7Result2 = stateFromStores1;
  }
  if (tmp7Result2) {
    tmp7Result2 = tmp7(tmp4(15743), { title: "Developer Tools", embedded: true });
  }
  items2[6] = tmp7Result2;
  obj.children = closure_1_20(Stack_Stack.Stack, { spacing: 24, children: items2 });
  return closure_1_19(ActionSheet.ActionSheet, obj);
});