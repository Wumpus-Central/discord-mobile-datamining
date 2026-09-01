// === Module 15962: YouStatusRadioGroup ===

// Module 15962 (YouStatusRadioGroup)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getThemeForColor from "getThemeForColor" /* 1347 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import map from "map" /* 4197 */;
import Text from "Text" /* 4474 */;
import Stack from "Stack" /* 4926 */;
import PressableBase from "PressableBase" /* 5068 */;
import useDesignToggleDefault from "useDesignToggle" /* 5497 */;
import PressableCard from "PressableCard" /* 5601 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5621 */;
import ActionSheet from "ActionSheet" /* 5989 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5992 */;
import TableSwitchRow from "TableSwitchRow" /* 5993 */;
import context from "context" /* 7692 */;
import TableRadioRow from "TableRadioRow" /* 7693 */;
import _activityFromSetting from "_activityFromSetting" /* 8531 */;
import useFocusModeEnabled from "useFocusModeEnabled" /* 10173 */;
import BellSlashIcon from "BellSlashIcon" /* 10238 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 10957 */;
import ThemeLightIcon from "ThemeLightIcon" /* 14863 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 14865 */;
import DevToolsContentSortButtonsDefault from "DevToolsContentSortButtons" /* 15343 */;
import ThemeGrayIcon from "ThemeGrayIcon" /* 15963 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "initialize" /* 11982 */;
import { MultiAccountTokenStatus } from "initialize" /* 11982 */;
import closure_9 from "handleThemeChange" /* 1302 */;
import closure_10 from "createdAt" /* 1935 */;
import closure_11 from "init" /* 7465 */;
import closure_12 from "initialize" /* 4323 */;
import closure_13 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { MultiAccountSwitchLocation as closure_18 } from "MAX_ACCOUNTS" /* 11983 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function YouStatusRadioGroup() {
  const memo = importAllResult.useMemo(() => {
    let obj = { icon: null, value: null };
    obj = { source: callback(13755), variant: "text-status-online" };
    obj[0] = callback2(setting(5605).TableRowIcon, obj);
    obj[1] = constants.ONLINE;
    const items = [obj, , , ];
    obj = { icon: callback2(setting(5605).TableRowIcon, { source: callback(13752), variant: "text-status-idle" }), value: constants.IDLE };
    items[1] = obj;
    const obj2 = { icon: null, value: null };
    obj1 = { source: callback(13752), variant: "text-status-idle" };
    obj2[0] = callback2(setting(5605).TableRowIcon, { source: callback(13753), variant: "text-status-dnd" });
    obj2[1] = constants.DND;
    items[2] = obj2;
    const obj4 = { icon: null, value: null };
    const obj3 = { source: callback(13753), variant: "text-status-dnd" };
    obj4[0] = callback2(setting(5605).TableRowIcon, { source: callback(13754), variant: "text-status-offline" });
    obj4[1] = constants.INVISIBLE;
    items[3] = obj4;
    return items;
  }, []);
  const StatusSetting = setting(4166).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(4166).StatusExpiresAtSetting;
  closure_1 = StatusExpiresAtSetting.useSetting();
  let items = [setting];
  const callback = importAllResult.useCallback((nextStatus) => {
    callback(closure_1_3[19])({ prevStatus: setting, nextStatus });
    callback(closure_1_3[20]).hideActionSheet();
  }, items);
  let obj = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let intl = setting(1236).intl;
  obj[0] = intl.string(setting(1236).t["0DPAZH"]);
  obj[1] = callback;
  obj[2] = setting;
  obj[4] = memo.map((value) => {
    let obj = {};
    const merged = Object.assign(value);
    obj.label = setting(closure_1_3[24]).getStatusLabel(value.value);
    let formatToPlainStringResult;
    if (value.value === setting) {
      if (null != closure_1) {
        if ("0" !== tmp6) {
          const intl = tmp2(tmp3[22]).intl;
          obj = { endTime: null };
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(tmp6));
          obj[0] = date.toLocaleString(tmp2(tmp3[22]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
          formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[22]).t.BWD8fs, obj);
        }
      }
    }
    obj.subLabel = formatToPlainStringResult;
    return closure_1_19(setting(closure_1_3[23]).TableRadioRow, obj, value.value);
  });
  return callback(setting(7692).TableRadioGroup, obj);
}
function ThemeRadioGroup() {
  let obj = initialize;
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj = { children: null };
  const callback = importAllResult.useCallback((arg0) => {
    const result = callback(14779).resetBackgroundGradientPreset();
    const obj = callback(14779);
    callback(11521).resetCustomTheme();
    const obj2 = callback(11521);
    callback2(8213).updateTheme(arg0);
  }, []);
  obj = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Ksh3ik);
  obj[1] = callback;
  obj[2] = stateFromStores;
  obj1 = { icon: callback(ThemeLightIcon.ThemeLightIcon, {}), label: null, value: null };
  let obj4 = getThemeForColor;
  obj1[1] = obj4.getThemeName(constants.LIGHT);
  obj1[2] = constants.LIGHT;
  const items1 = [callback(TableRadioRow.TableRadioRow, obj1), , , ];
  let obj2 = { icon: callback(ThemeGrayIcon.ThemeGrayIcon, {}), label: getThemeForColor.getThemeName(constants.DARK), value: constants.DARK };
  items1[1] = callback(TableRadioRow.TableRadioRow, obj2);
  const obj3 = { icon: callback(ThemeDarkIcon.ThemeDarkIcon, {}), label: null, value: null };
  const obj7 = getThemeForColor;
  obj3[1] = getThemeForColor.getThemeName(constants.DARKER);
  obj3[2] = constants.DARKER;
  items1[2] = callback(TableRadioRow.TableRadioRow, obj3);
  obj4 = { icon: callback(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: null, value: null };
  const obj9 = getThemeForColor;
  obj4[1] = getThemeForColor.getThemeName(constants.MIDNIGHT);
  obj4[2] = constants.MIDNIGHT;
  items1[3] = callback(TableRadioRow.TableRadioRow, obj4);
  obj[4] = items1;
  obj[0] = callback2(context.TableRadioGroup, obj);
  return callback(closure_5, obj);
}
function YouAccountRadioGroup() {
  const tmp = callback3();
  let obj = multiAccountUsers(589);
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  multiAccountUsers = stateFromStores;
  obj1 = multiAccountUsers(15542);
  multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  let stateFromStores1 = multiAccountUsers;
  stateFromStores1 = undefined;
  let obj2 = multiAccountUsers(589);
  const items1 = [closure_12];
  stateFromStores1 = obj2.useStateFromStores(items1, () => obj.hidePersonalInformation);
  const items2 = [multiAccountUsers, stateFromStores1];
  const memo = importAllResult.useMemo(() => multiAccountUsers.map((id) => {
    let obj = new closure_1_10(id);
    let combined = null;
    if (!closure_1) {
      combined = null;
      if (!obj.hasUniqueUsername()) {
        const _HermesInternal = HermesInternal;
        combined = "#" + obj.discriminator;
      }
    }
    let str2 = "always";
    if (closure_1) {
      str2 = "never";
    }
    obj = { label: closure_1_1(closure_1_3[34]).getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: null };
    obj = { user: obj, guildId: "Array", size: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000055359227687093 };
    obj[2] = closure_1_0(closure_1_3[35]).AvatarSizes.REFRESH_MEDIUM_32;
    obj[3] = closure_1_19(closure_1_0(closure_1_3[35]).Avatar, obj);
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
    obj = { style: null, children: null };
    obj[0] = tmp.account;
    obj = { style: null, children: null };
    obj[0] = tmp.manage;
    obj1 = { onPress: null, children: null };
    obj1[0] = function onPress() {
      return stateFromStores1(15965)();
    };
    obj2 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl = tmp2(1236).intl;
    obj2[2] = intl.string(tmp2(1236).t.HxrBOZ);
    obj1[1] = callback(tmp2(4474).Text, obj2);
    obj[1] = callback(tmp2(5068).PressableOpacity, obj1);
    const items4 = [callback(closure_5, obj), ];
    const obj3 = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
    const intl2 = tmp2(1236).intl;
    obj3[0] = intl2.string(tmp2(1236).t.oMNyYN);
    obj3[1] = tmp7;
    obj3[2] = stateFromStores.id;
    obj3[4] = memo.map((value) => {
      const merged = Object.assign(value);
      return callback(multiAccountUsers(7693).TableRadioRow, {}, value.value);
    });
    items4[1] = callback(tmp2(7692).TableRadioGroup, obj3);
    obj[1] = items4;
    tmp8 = callback2(closure_5, obj);
  }
  return tmp8;
}
function FocusModeSetting() {
  let currentLocale = require;
  let toLocaleStringResult = dependencyMap;
  let tmp5Result = useFocusModeEnabled;
  const focusModeEnabled = tmp5Result.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = explicitContentFromProto.FocusModeExpiresAtSetting;
  let setting = FocusModeExpiresAtSetting.useSetting();
  if (!focusModeEnabled) {
    return null;
  } else {
    tmp5Result = { accessibilityLabel: null, accessibilityHint: null, icon: null, onValueChange: null, value: null, label: null, subLabel: null };
    const intl = getSystemLocale.intl;
    tmp5Result[0] = intl.string(getSystemLocale.t.wCxBOc);
    const intl2 = getSystemLocale.intl;
    tmp5Result[1] = intl2.string(getSystemLocale.t.wCxBOc);
    let obj = { style: null };
    obj[0] = tmp.leadingIcon;
    tmp5Result[2] = callback(BellSlashIcon.BellSlashIcon, obj);
    tmp5Result[3] = function onValueChange(arg0) {
      if (arg0) {
        let obj = { onSelect: null };
        obj[0] = function onSelect(quiet_mode_enabled) {
          callback(10173).setFocusMode(quiet_mode_enabled, arg1);
          const obj = callback(10173);
          callback2(4445).hideActionSheet();
          const obj2 = callback2(4445);
          const result = callback(15960).showYouAccountActionSheet();
        };
        callback2(paths[20]).openLazy(callback(paths[48])(paths[47], paths.paths), "FocusModeOptionsActionSheet", obj);
        let obj2 = callback2(paths[20]);
      } else {
        obj = callback(paths[43]);
        obj.setFocusMode(false);
      }
    };
    tmp5Result[4] = focusModeEnabled;
    const intl3 = getSystemLocale.intl;
    tmp5Result[5] = intl3.string(getSystemLocale.t.wCxBOc);
    if (null == setting) {
      const intl4 = getSystemLocale.intl;
      let stringResult = intl4.string(getSystemLocale.t.i0nsoY);
      obj1 = { hasIcons: true, children: null };
      tmp5Result[6] = stringResult;
      tmp5Result = tmp5(TableSwitchRow.TableSwitchRow, tmp5Result);
      obj1[1] = tmp5Result;
      tmp5Result = tmp5(TableRowGroupTitle.TableRowGroup, obj1);
    }
    const intl5 = getSystemLocale.intl;
    let obj2 = { endTime: null };
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    currentLocale = getSystemLocale.intl.currentLocale;
    toLocaleStringResult = date.toLocaleString(currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    obj2[0] = toLocaleStringResult;
    stringResult = intl5.formatToPlainString(getSystemLocale.t.BWD8fs, obj2);
  }
}
function CustomStatus() {
  const tmp = callback3();
  let obj = _activityFromSetting;
  const customStatusActivity = obj.useCustomStatusActivity();
  obj1 = map;
  let state;
  const token = obj1.useToken(ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
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
  let tmp2Result = tmp2(9087);
  let state1;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = tmp2Result.useGameMentionsAsPlainText(state1);
  tmp2Result = tmp2(4197);
  const token1 = tmp2Result.useToken(tmp5(712).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const token2 = map.useToken(tmp5(712).modules.mobile.TABLE_ROW_LABEL_COLOR);
  obj = { shadow: "none", border: "none", style: tmp.customStatusRow, children: null };
  obj = { style: tmp.customStatusEditButton, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
  const intl = tmp2(1236).intl;
  const string = intl.string;
  const t = tmp2(1236).t;
  if (tmp8) {
    let stringResult = string(t["2p9FMw"]);
  } else {
    stringResult = string(t["/UonHN"]);
  }
  obj[2] = stringResult;
  let formatToPlainStringResult;
  if (tmp8) {
    const intl2 = tmp2(1236).intl;
    emoji = customStatusActivity.emoji;
    let str2;
    if (emoji != null) {
      str2 = emoji.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    obj1 = { emoji: null, status: null };
    obj1[0] = str2;
    obj1[1] = gameMentionsAsPlainText;
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.GE7QzY, obj1);
  }
  obj[3] = formatToPlainStringResult;
  obj[4] = function onPress() {
    let obj = callback2(4445);
    obj.hideActionSheet();
    obj = { analyticsLocations: null };
    const items = [callback2(5973).YOU_ACCOUNT_ACTION_SHEET];
    obj[0] = items;
    const result = callback(9090).openEditCustomStatusModal(obj);
  };
  let emoji1;
  if (customStatusActivity != null) {
    emoji1 = customStatusActivity.emoji;
  }
  if (null != emoji1) {
    const obj2 = { emoji: null, size: null };
    obj2[0] = customStatusActivity.emoji;
    obj2[1] = token;
    let tmp14Result = tmp14(tmp5(9220), obj2);
  } else {
    const obj3 = { size: "md", style: null };
    obj3[1] = tmp.leadingIcon;
    tmp14Result = tmp14(tmp2(8228).ReactionIcon, obj3);
  }
  let items = [tmp14Result, ];
  const obj4 = { variant: token1, color: token2, lineClamp: 2, style: tmp.customStatusText, children: null };
  if (!tmp8) {
    const intl3 = tmp2(1236).intl;
    gameMentionsAsPlainText = intl3.string(tmp2(1236).t["/UonHN"]);
  }
  obj4[4] = gameMentionsAsPlainText;
  items[1] = closure_19(Text.Text, obj4);
  obj[5] = items;
  const items1 = [closure_20(PressableBase.PressableOpacity, obj), ];
  tmp14Result = null;
  if (null != customStatusActivity) {
    const obj5 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, style: null, children: null };
    obj5[0] = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      callback2(9097)();
    };
    const intl4 = tmp2(1236).intl;
    obj5[2] = intl4.string(tmp2(1236).t.wfYTHe);
    obj5[3] = tmp.customStatusRemoveButton;
    const obj6 = { style: null, source: null };
    obj6[0] = tmp.trailingIcon;
    obj6[1] = tmp5(7812);
    obj5[4] = tmp14(closure_6, obj6);
    tmp14Result = tmp14(tmp2(5068).PressableOpacity, obj5);
  }
  const tmp2Result1 = map;
  items1[1] = tmp14Result;
  obj[3] = items1;
  return closure_19(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: closure_20(PressableCard.Card, obj) });
}
let c4 = importAllResult;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 }, trailingIcon: null, customStatusRow: null, customStatusEditButton: null, customStatusRemoveButton: null, customStatusText: null };
obj = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj[3] = obj;
createCacheKey = { padding: 0, flexDirection: "row", alignItems: "center", gap: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
obj[4] = createCacheKey;
obj[5] = { minHeight: ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: ThemesDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
let obj2 = { minHeight: ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: ThemesDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
obj[6] = { height: ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj[7] = { flexShrink: 1 };
let closure_21 = createCacheKey.createStyles(obj);
let obj3 = { height: ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
const memoResult = importAllResult.memo((statusOnly) => {
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  let obj = initialize;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
  const items1 = [closure_11];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  obj = { startExpanded: stateFromStores, header: null, showGradient: true, children: null };
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (flag) {
    let stringResult = string(t["3Uj+2p"]);
  } else if (stateFromStores) {
    stringResult = string(t["ldCE/p"]);
  } else {
    stringResult = string(t["qP/i6k"]);
  }
  obj[1] = closure_19(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: stringResult });
  let tmp7Result = tmp5;
  if (tmp5) {
    tmp7Result = tmp7(ThemeRadioGroup, {});
  }
  const items2 = [tmp7Result, closure_19(YouStatusRadioGroup, {}), closure_19(FocusModeSetting, {}), closure_19(CustomStatus, {}), , ];
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
    tmp7Result1 = tmp7(DevToolsContentSortButtonsDefault, { title: "Developer Tools", embedded: true });
  }
  items2[5] = tmp7Result1;
  obj[3] = closure_20(Stack.Stack, { spacing: 24, children: items2 });
  return closure_19(ActionSheet.ActionSheet, obj);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default memoResult;