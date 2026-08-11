// discord_app/modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx
import importAllResult from "_setUserStatus";
import get_ActivityIndicator from "registerAsset";
import initialize from "initialize";
import { MultiAccountTokenStatus } from "initialize";
import handleThemeChange from "handleThemeChange";
import createdAt from "createdAt";
import init from "init";
import closure_12 from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { MultiAccountSwitchLocation as closure_18 } from "MAX_ACCOUNTS";
import jsxProd from "context";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { PressableCard } from "../../../../../design/components/Card/native/Card.native.tsx";
import { ThemeDarkIcon } from "../../../../../design/components/Icon/native/redesign/generated/ThemeDarkIcon.tsx";
import { ThemeLightIcon } from "../../../../../design/components/Icon/native/redesign/generated/ThemeLightIcon.tsx";
import { ThemeMidnightIcon } from "../../../../../design/components/Icon/native/redesign/generated/ThemeMidnightIcon.tsx";
import { ActionSheet } from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { Stack } from "../../../../../design/components/Stack/native/Stack.native.tsx";
import { context } from "../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import { TableRadioRow } from "../../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import { TableRowGroupTitle } from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { map } from "../../../../../design/tokens/native/useToken.tsx";
import { PressableBase } from "../../../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { getThemeForColor } from "../../../../client_themes/ClientThemesUtils.tsx";
import { _activityFromSetting } from "../../../../custom_status/utils/userSettingToActivity.tsx";
import { useDesignToggle } from "../../../../devtools/design_toggles/useDesignToggle.tsx";
import { DevToolsContentSortButtons } from "../../../../devtools/native/components/DevToolsContent.tsx";
import { useFocusModeEnabled } from "../../../../notifications/FocusModeUtils.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { explicitContentFromProto } from "../../../../user_settings/UserSettings.tsx";

let c5;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_6;
const require = arg1;
function YouStatusRadioGroup() {
  const memo = importAllResult.useMemo(() => {
    let obj = { icon: null, value: null };
    obj = { source: null, variant: "text-status-online" };
    obj[0] = callback(13373);
    obj[0] = callback2(setting(5380).TableRowIcon, obj);
    obj[1] = constants.ONLINE;
    const items = [obj, , , ];
    obj = { icon: null, value: null };
    const obj1 = { source: null, variant: "text-status-idle" };
    obj1[0] = callback(13370);
    obj[0] = callback2(setting(5380).TableRowIcon, obj1);
    obj[1] = constants.IDLE;
    items[1] = obj;
    const obj2 = { icon: null, value: null };
    const obj3 = { source: null, variant: "text-status-dnd" };
    obj3[0] = callback(13371);
    obj2[0] = callback2(setting(5380).TableRowIcon, obj3);
    obj2[1] = constants.DND;
    items[2] = obj2;
    const obj4 = { icon: null, value: null };
    const obj5 = { source: null, variant: "text-status-offline" };
    obj5[0] = callback(13372);
    obj4[0] = callback2(setting(5380).TableRowIcon, obj5);
    obj4[1] = constants.INVISIBLE;
    items[3] = obj4;
    return items;
  }, []);
  const StatusSetting = setting(3993).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(3993).StatusExpiresAtSetting;
  let closure_1 = StatusExpiresAtSetting.useSetting();
  let items = [setting];
  const callback = importAllResult.useCallback((nextStatus) => {
    callback(outer1_3[19])({ prevStatus: setting, nextStatus });
    callback(outer1_3[20]).hideActionSheet();
  }, items);
  let obj = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let intl = setting(1236).intl;
  obj[0] = intl.string(setting(1236).t["0DPAZH"]);
  obj[1] = callback;
  obj[2] = setting;
  obj[4] = memo.map((value) => {
    let obj = {};
    const merged = Object.assign(value);
    obj.label = setting(outer1_3[24]).getStatusLabel(value.value);
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
    return outer1_19(setting(outer1_3[23]).TableRadioRow, obj, value.value);
  });
  return callback(setting(7987).TableRadioGroup, obj);
}
function ThemeRadioGroup() {
  const tmp2 = useIsMobileVisualRefreshExperimentEnabled("ThemeRadioGroup");
  let obj = initialize;
  const items = [handleThemeChange];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const callback = importAllResult.useCallback((arg0) => {
    const result = callback(14427).resetBackgroundGradientPreset();
    const obj = callback(14427);
    callback(11360).resetCustomTheme();
    const obj2 = callback(11360);
    callback2(8704).updateTheme(arg0);
  }, []);
  obj = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Ksh3ik);
  obj[1] = callback;
  obj[2] = stateFromStores;
  obj = { icon: null, label: null, value: null };
  obj[0] = callback(ThemeLightIcon.ThemeLightIcon, {});
  let obj3 = getThemeForColor;
  obj[1] = obj3.getThemeName(constants.LIGHT, tmp2);
  obj[2] = constants.LIGHT;
  const items1 = [callback(TableRadioRow.TableRadioRow, obj), , , ];
  let tmp6Result = tmp2;
  if (tmp2) {
    const obj1 = { icon: null, label: null, value: null };
    obj1[0] = tmp6(tmp3(15508).ThemeGrayIcon, {});
    let tmp3Result = tmp3(1347);
    obj1[1] = tmp3Result.getThemeName(tmp9.DARK, true);
    obj1[2] = tmp9.DARK;
    tmp6Result = tmp6(tmp3(7986).TableRadioRow, obj1);
  }
  let obj2 = { children: null };
  items1[1] = tmp6Result;
  obj3 = { icon: null, label: null, value: null };
  obj3[0] = callback(ThemeDarkIcon.ThemeDarkIcon, {});
  tmp3Result = tmp3(1347);
  obj3[1] = tmp3Result.getThemeName(constants.DARKER, tmp2);
  obj3[2] = constants.DARKER;
  items1[2] = callback(TableRadioRow.TableRadioRow, obj3);
  const obj4 = { icon: null, label: null, value: null };
  obj4[0] = callback(ThemeMidnightIcon.ThemeMidnightIcon, {});
  obj4[1] = getThemeForColor.getThemeName(constants.MIDNIGHT, tmp2);
  obj4[2] = constants.MIDNIGHT;
  items1[3] = callback(TableRadioRow.TableRadioRow, obj4);
  obj[4] = items1;
  obj2[0] = closure_20(context.TableRadioGroup, obj);
  return callback(closure_5, obj2);
}
function YouAccountRadioGroup() {
  const tmp3 = callback2();
  let obj = multiAccountUsers(589);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  multiAccountUsers = stateFromStores;
  let obj1 = multiAccountUsers(15097);
  multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  let stateFromStores1 = multiAccountUsers;
  stateFromStores1 = undefined;
  let obj2 = multiAccountUsers(589);
  const items1 = [closure_12];
  stateFromStores1 = obj2.useStateFromStores(items1, () => obj.hidePersonalInformation);
  const items2 = [multiAccountUsers, stateFromStores1];
  const memo = importAllResult.useMemo(() => multiAccountUsers.map((id) => {
    let obj = new outer1_10(id);
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
    obj = { label: outer1_1(outer1_3[35]).getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: null };
    obj = { user: obj, guildId: "Array", size: "Array" };
    obj[2] = outer1_0(outer1_3[36]).AvatarSizes.REFRESH_MEDIUM_32;
    obj[3] = outer1_19(outer1_0(outer1_3[36]).Avatar, obj);
    return obj;
  }), items2);
  const items3 = [multiAccountUsers, ];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  let tmp10Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp3.account;
    obj = { style: null, children: null };
    obj[0] = tmp3.manage;
    obj1 = { onPress: null, children: null };
    obj1[0] = function onPress() {
      return stateFromStores1(15510)();
    };
    let str = "text-link";
    if (tmp2) {
      str = "text-brand";
    }
    obj2 = { variant: "text-sm/semibold", color: null, children: null };
    obj2[1] = str;
    const intl = tmp4(1236).intl;
    obj2[2] = intl.string(tmp4(1236).t.HxrBOZ);
    obj1[1] = closure_19(tmp4(4299).Text, obj2);
    obj[1] = closure_19(tmp4(4846).PressableOpacity, obj1);
    const items4 = [closure_19(closure_5, obj), ];
    const obj3 = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
    const intl2 = tmp4(1236).intl;
    obj3[0] = intl2.string(tmp4(1236).t.oMNyYN);
    obj3[1] = tmp8;
    obj3[2] = stateFromStores.id;
    obj3[4] = memo.map((value) => {
      const merged = Object.assign(value);
      return callback(multiAccountUsers(7986).TableRadioRow, {}, value.value);
    });
    items4[1] = closure_19(tmp4(7987).TableRadioGroup, obj3);
    obj[1] = items4;
    tmp10Result = closure_20(tmp11, obj);
    const tmp10 = closure_20;
  }
  return tmp10Result;
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
    const intl = currentLocale(1236).intl;
    tmp5Result[0] = intl.string(currentLocale(1236).t.wCxBOc);
    const intl2 = currentLocale(1236).intl;
    tmp5Result[1] = intl2.string(currentLocale(1236).t.wCxBOc);
    let obj = { style: null };
    obj[0] = tmp.leadingIcon;
    tmp5Result[2] = callback(currentLocale(9736).BellSlashIcon, obj);
    tmp5Result[3] = function onValueChange(arg0) {
      if (arg0) {
        let obj = { onSelect: null };
        obj[0] = function onSelect(quiet_mode_enabled) {
          callback(9768).setFocusMode(quiet_mode_enabled, arg1);
          const obj = callback(9768);
          callback2(4271).hideActionSheet();
          const obj2 = callback2(4271);
          const result = callback(15505).showYouAccountActionSheet();
        };
        callback2(paths[20]).openLazy(callback(paths[49])(paths[48], paths.paths), "FocusModeOptionsActionSheet", obj);
        let obj2 = callback2(paths[20]);
      } else {
        obj = callback(paths[44]);
        obj.setFocusMode(false);
      }
    };
    tmp5Result[4] = focusModeEnabled;
    const intl3 = currentLocale(1236).intl;
    tmp5Result[5] = intl3.string(currentLocale(1236).t.wCxBOc);
    if (null == setting) {
      const intl4 = currentLocale(1236).intl;
      let stringResult = intl4.string(currentLocale(1236).t.i0nsoY);
      const obj1 = { hasIcons: true, children: null };
      tmp5Result[6] = stringResult;
      tmp5Result = tmp5(currentLocale(5768).TableSwitchRow, tmp5Result);
      obj1[1] = tmp5Result;
      tmp5Result = tmp5(currentLocale(5767).TableRowGroup, obj1);
    }
    const intl5 = currentLocale(1236).intl;
    let obj2 = { endTime: null };
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    currentLocale = currentLocale(1236).intl.currentLocale;
    toLocaleStringResult = date.toLocaleString(currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    obj2[0] = toLocaleStringResult;
    stringResult = intl5.formatToPlainString(currentLocale(1236).t.BWD8fs, obj2);
  }
}
function CustomStatus() {
  const tmp = callback2();
  let obj = _activityFromSetting;
  const customStatusActivity = obj.useCustomStatusActivity();
  let obj1 = map;
  let state;
  const token = obj1.useToken(Themes.modules.mobile.TABLE_ROW_ICON_SIZE);
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
  let tmp2Result = tmp2(9457);
  let state1;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = tmp2Result.useGameMentionsAsPlainText(state1);
  const tmp12 = useIsMobileVisualRefreshExperimentEnabled("CustomStatus");
  tmp2Result = tmp2(4024);
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
    let obj = callback2(4271);
    obj.hideActionSheet();
    obj = { analyticsLocations: null };
    const items = [callback2(5748).YOU_ACCOUNT_ACTION_SHEET];
    obj[0] = items;
    const result = callback(9460).openEditCustomStatusModal(obj);
  };
  let emoji1;
  if (customStatusActivity != null) {
    emoji1 = customStatusActivity.emoji;
  }
  if (null != emoji1) {
    const obj2 = { emoji: null, size: null };
    obj2[0] = customStatusActivity.emoji;
    obj2[1] = token;
    let tmp15Result = tmp15(tmp5(9529), obj2);
  } else {
    const obj3 = { size: "md", style: null };
    obj3[1] = tmp.leadingIcon;
    tmp15Result = tmp15(tmp2(7657).ReactionIcon, obj3);
  }
  let items = [tmp15Result, ];
  let str3 = "text-md/semibold";
  if (tmp12) {
    str3 = token1;
  }
  const obj4 = { variant: str3, color: null, lineClamp: 2, style: null, children: null };
  let str4 = "mobile-text-heading-primary";
  if (tmp12) {
    str4 = token2;
  }
  obj4[1] = str4;
  obj4[3] = tmp.customStatusText;
  if (!tmp8) {
    const intl3 = tmp2(1236).intl;
    gameMentionsAsPlainText = intl3.string(tmp2(1236).t["/UonHN"]);
  }
  obj4[4] = gameMentionsAsPlainText;
  items[1] = closure_19(Text.Text, obj4);
  obj[5] = items;
  const items1 = [closure_20(PressableBase.PressableOpacity, obj), ];
  tmp15Result = null;
  if (null != customStatusActivity) {
    const obj5 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, style: null, children: null };
    obj5[0] = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      callback2(9467)();
    };
    const intl4 = tmp2(1236).intl;
    obj5[2] = intl4.string(tmp2(1236).t.wfYTHe);
    obj5[3] = tmp.customStatusRemoveButton;
    const obj6 = { style: null, source: null };
    obj6[0] = tmp.trailingIcon;
    obj6[1] = tmp5(8062);
    obj5[4] = tmp15(closure_6, obj6);
    tmp15Result = tmp15(tmp2(4846).PressableOpacity, obj5);
  }
  const tmp2Result1 = map;
  items1[1] = tmp15Result;
  obj[3] = items1;
  return closure_19(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: closure_20(PressableCard.Card, obj) });
}
let c4 = importAllResult;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 }, trailingIcon: null, customStatusRow: null, customStatusEditButton: null, customStatusRemoveButton: null, customStatusText: null };
obj = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj[3] = obj;
createCacheKey = { padding: 0, flexDirection: "row", alignItems: "center", gap: require("Themes").modules.mobile.TABLE_ROW_PADDING };
obj[4] = createCacheKey;
obj[5] = { minHeight: require("Themes").modules.mobile.TABLE_ROW_HEIGHT, padding: require("Themes").modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").modules.mobile.TABLE_ROW_PADDING };
let obj2 = { minHeight: require("Themes").modules.mobile.TABLE_ROW_HEIGHT, padding: require("Themes").modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").modules.mobile.TABLE_ROW_PADDING };
obj[6] = { height: require("Themes").modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj[7] = { flexShrink: 1 };
let closure_21 = createCacheKey.createStyles(obj);
let obj3 = { height: require("Themes").modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
const memoResult = importAllResult.memo((statusOnly) => {
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  let obj = initialize;
  const items = [initialize];
  const stateFromStores = obj.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  const tmp5 = useDesignToggle("theme_setting_in_account_sheet");
  const items1 = [init];
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
    tmp7Result1 = tmp7(DevToolsContentSortButtons, { title: "Developer Tools", embedded: true });
  }
  items2[5] = tmp7Result1;
  obj[3] = closure_20(Stack.Stack, { spacing: 24, children: items2 });
  return closure_19(ActionSheet.ActionSheet, obj);
});
let result = require("initialize").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default memoResult;