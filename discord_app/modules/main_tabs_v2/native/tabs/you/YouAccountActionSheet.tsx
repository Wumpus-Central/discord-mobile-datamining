// discord_app/modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import getThemeForColor from "../../../../client_themes/ClientThemesUtils.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import explicitContentFromProto from "../../../../user_settings/UserSettings.tsx";
import map from "../../../../../design/tokens/native/useToken.tsx";
import Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import useDesignToggleDefault from "../../../../devtools/design_toggles/useDesignToggle.tsx";
import PressableBase from "../../../../../design/void/Pressables/native/Pressables.tsx";
import TableRowGroupTitle from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import PressableCard from "../../../../../design/components/Card/native/Card.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import _activityFromSetting from "../../../../custom_status/utils/userSettingToActivity.tsx";
import ReactionIcon from "../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import TableRadioRow from "../../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import context from "../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import registerAssetDefault from "../../../../../../_runtime/08176_registerAsset.js";
import useGameMentionsAsPlainText from "../../../../game_mentions/hooks/useGameMentionsAsPlainText.tsx";
import ActivityEmojiDefault from "../../../../activity_status/native/ActivityEmoji.tsx";
import BellSlashIcon from "../../../../../design/components/Icon/native/redesign/generated/BellSlashIcon.tsx";
import useFocusModeEnabled from "../../../../notifications/FocusModeUtils.tsx";
import ThemeDarkIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeDarkIcon.tsx";
import validateMultiAccountTokensAll from "../../../../multi_account/MultiAccountActionCreators.tsx";
import DevToolsContentSortButtonsDefault from "../../../../devtools/native/components/DevToolsContent.tsx";
import ThemeLightIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeLightIcon.tsx";
import ThemeMidnightIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeMidnightIcon.tsx";
import ThemeGrayIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeGrayIcon.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MultiAccountTokenStatus } from "../../../../multi_account/MultiAccountStore.tsx";
import handleThemeChange from "../../../../user_settings/ThemeStore.tsx";
import createdAt from "../../../../../records/UserRecord.tsx";
import init from "../../../../../stores/DeveloperExperimentStore.tsx";
import initialize2 from "../../../../../stores/StreamerModeStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import ME from "../../../../../Constants.tsx";
import { MultiAccountSwitchLocation as closure_18 } from "../../../../multi_account/Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function YouStatusRadioGroup() {
  const memo = importAllResult.useMemo(() => {
    let obj = { source: callback(13476), variant: "text-status-online" };
    obj[0] = callback2(setting(6296).TableRowIcon, obj);
    obj[1] = constants.ONLINE;
    const items = [obj, , , ];
    obj = { icon: callback2(setting(6296).TableRowIcon, { source: callback(13473), variant: "text-status-idle" }), value: constants.IDLE };
    items[1] = obj;
    const obj2 = { icon: null, value: null };
    obj1 = { source: callback(13473), variant: "text-status-idle" };
    obj2[0] = callback2(setting(6296).TableRowIcon, { source: callback(13474), variant: "text-status-dnd" });
    obj2[1] = constants.DND;
    items[2] = obj2;
    const obj4 = { icon: null, value: null };
    const obj3 = { source: callback(13474), variant: "text-status-dnd" };
    obj4[0] = callback2(setting(6296).TableRowIcon, { source: callback(13475), variant: "text-status-offline" });
    obj4[1] = constants.INVISIBLE;
    items[3] = obj4;
    return items;
  }, []);
  const StatusSetting = setting(4066).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(4066).StatusExpiresAtSetting;
  closure_1 = StatusExpiresAtSetting.useSetting();
  let items = [setting];
  const callback = importAllResult.useCallback((nextStatus) => {
    callback(dependencyMap[19])({ prevStatus: setting, nextStatus });
    callback(dependencyMap[20]).hideActionSheet();
  }, items);
  let obj = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let intl = setting(1236).intl;
  obj[0] = intl.string(setting(1236).t["0DPAZH"]);
  obj[1] = callback;
  obj[2] = setting;
  obj[4] = memo.map((item, index) => {
    let obj = {};
    const merged = Object.assign(item);
    obj.label = setting(dependencyMap[24]).getStatusLabel(item.value);
    let formatToPlainStringResult;
    if (item.value === setting) {
      if (null != closure_1) {
        if ("0" !== closure_1) {
          const intl = setting(dependencyMap[22]).intl;
          obj = { endTime: null };
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(closure_1));
          obj[0] = date.toLocaleString(setting(dependencyMap[22]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
          formatToPlainStringResult = intl.formatToPlainString(setting(dependencyMap[22]).t.BWD8fs, obj);
        }
      }
    }
    obj.subLabel = formatToPlainStringResult;
    return closure_1_19(setting(dependencyMap[23]).TableRadioRow, obj, item.value);
  });
  return callback(setting(8101).TableRadioGroup, obj);
}
function ThemeRadioGroup() {
  const tmp2 = useIsMobileVisualRefreshExperimentEnabledDefault("ThemeRadioGroup");
  let obj = initialize;
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const callback = importAllResult.useCallback((arg0) => {
    const result = callback(14529).resetBackgroundGradientPreset();
    const obj = callback(14529);
    callback(11135).resetCustomTheme();
    const obj2 = callback(11135);
    callback2(9365).updateTheme(arg0);
  }, []);
  obj = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Ksh3ik);
  obj[1] = callback;
  obj[2] = stateFromStores;
  obj = { icon: callback(ThemeLightIcon.ThemeLightIcon, {}), label: null, value: null };
  let obj3 = getThemeForColor;
  obj[1] = obj3.getThemeName(constants.LIGHT, tmp2);
  obj[2] = constants.LIGHT;
  const items1 = [callback(TableRadioRow.TableRadioRow, obj), , , ];
  let tmp6Result = tmp2;
  if (tmp2) {
    obj1 = { icon: null, label: null, value: null };
    obj1[0] = tmp6(ThemeGrayIcon.ThemeGrayIcon, {});
    let tmp3Result = getThemeForColor;
    obj1[1] = tmp3Result.getThemeName(constants.DARK, true);
    obj1[2] = constants.DARK;
    tmp6Result = tmp6(TableRadioRow.TableRadioRow, obj1);
  }
  let obj2 = { children: null };
  items1[1] = tmp6Result;
  obj3 = { icon: tmp6(ThemeDarkIcon.ThemeDarkIcon, {}), label: null, value: null };
  tmp3Result = getThemeForColor;
  obj3[1] = tmp3Result.getThemeName(constants.DARKER, tmp2);
  obj3[2] = constants.DARKER;
  items1[2] = callback(TableRadioRow.TableRadioRow, obj3);
  const obj4 = { icon: callback(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: getThemeForColor.getThemeName(constants.MIDNIGHT, tmp2), value: constants.MIDNIGHT };
  items1[3] = callback(TableRadioRow.TableRadioRow, obj4);
  obj[4] = items1;
  obj2[0] = callback2(context.TableRadioGroup, obj);
  return callback(closure_5, obj2);
}
function YouAccountRadioGroup() {
  const tmp3 = callback2();
  let obj = multiAccountUsers(589);
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  multiAccountUsers = stateFromStores;
  obj1 = multiAccountUsers(15217);
  multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  let obj2 = multiAccountUsers(589);
  const items1 = [closure_12];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => obj.hidePersonalInformation);
  const items2 = [multiAccountUsers, stateFromStores1];
  const memo = importAllResult.useMemo(() => multiAccountUsers.map((item, index) => {
    let obj = new closure_1_10(item);
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
    obj = { label: stateFromStores1(closure_1_3[35]).getUserTag(obj, { mode: "username", identifiable: str2 }), value: item.id, subLabel: combined, icon: null };
    obj = { user: obj, guildId: "Array", size: multiAccountUsers(closure_1_3[36]).AvatarSizes.REFRESH_MEDIUM_32 };
    obj[3] = closure_1_19(multiAccountUsers(closure_1_3[36]).Avatar, obj);
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
      return stateFromStores1(15634)();
    };
    let str = "text-link";
    if (tmp2) {
      str = "text-brand";
    }
    obj2 = { variant: "text-sm/semibold", color: null, children: null };
    obj2[1] = str;
    const intl = tmp4(1236).intl;
    obj2[2] = intl.string(tmp4(1236).t.HxrBOZ);
    obj1[1] = callback(tmp4(4734).Text, obj2);
    obj[1] = callback(tmp4(5433).PressableOpacity, obj1);
    const items4 = [callback(closure_5, obj), ];
    const obj3 = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
    const intl2 = tmp4(1236).intl;
    obj3[0] = intl2.string(tmp4(1236).t.oMNyYN);
    obj3[1] = tmp8;
    obj3[2] = stateFromStores.id;
    obj3[4] = memo.map((item, index) => {
      const merged = Object.assign(item);
      return callback(multiAccountUsers(8100).TableRadioRow, {}, item.value);
    });
    items4[1] = callback(tmp4(8101).TableRadioGroup, obj3);
    obj[1] = items4;
    tmp10Result = callback2(closure_5, obj);
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
          callback(10024).setFocusMode(quiet_mode_enabled, arg1);
          const obj = callback(10024);
          callback2(4342).hideActionSheet();
          const obj2 = callback2(4342);
          const result = callback(15629).showYouAccountActionSheet();
        };
        callback2(paths[20]).openLazy(callback(paths[49])(paths[48], paths.paths), "FocusModeOptionsActionSheet", obj);
        let obj2 = callback2(paths[20]);
      } else {
        obj = callback(paths[44]);
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
      tmp5Result = callback(TableSwitchRow.TableSwitchRow, tmp5Result);
      obj1[1] = tmp5Result;
      tmp5Result = callback(TableRowGroupTitle.TableRowGroup, obj1);
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
  tmp = callback2();
}
function CustomStatus() {
  const tmp = callback2();
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
  let tmp2Result = useGameMentionsAsPlainText;
  let state1;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = tmp2Result.useGameMentionsAsPlainText(state1);
  const tmp12 = useIsMobileVisualRefreshExperimentEnabledDefault("CustomStatus");
  tmp2Result = map;
  const token1 = tmp2Result.useToken(ThemesDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const token2 = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  obj = { style: tmp.customStatusEditButton, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (tmp8) {
    let stringResult = string(t["2p9FMw"]);
  } else {
    stringResult = string(t["/UonHN"]);
  }
  obj[2] = stringResult;
  let formatToPlainStringResult;
  if (tmp8) {
    const intl2 = getSystemLocale.intl;
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
    formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.GE7QzY, obj1);
  }
  obj[3] = formatToPlainStringResult;
  obj[4] = function onPress() {
    let obj = callback2(4342);
    obj.hideActionSheet();
    obj = { analyticsLocations: null };
    const items = [callback2(7159).YOU_ACCOUNT_ACTION_SHEET];
    obj[0] = items;
    const result = callback(9290).openEditCustomStatusModal(obj);
  };
  let emoji1;
  if (customStatusActivity != null) {
    emoji1 = customStatusActivity.emoji;
  }
  if (null != emoji1) {
    const obj2 = { emoji: null, size: null };
    obj2[0] = customStatusActivity.emoji;
    obj2[1] = token;
    let tmp15Result = callback(ActivityEmojiDefault, obj2);
  } else {
    const obj3 = { size: "md", style: null };
    obj3[1] = tmp.leadingIcon;
    tmp15Result = callback(ReactionIcon.ReactionIcon, obj3);
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
    const intl3 = getSystemLocale.intl;
    gameMentionsAsPlainText = intl3.string(getSystemLocale.t["/UonHN"]);
  }
  obj4[4] = gameMentionsAsPlainText;
  items[1] = callback(Text.Text, obj4);
  obj[5] = items;
  const items1 = [callback2(PressableBase.PressableOpacity, obj), ];
  tmp15Result = null;
  if (null != customStatusActivity) {
    const obj5 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, style: null, children: null };
    obj5[0] = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      callback2(9297)();
    };
    const intl4 = getSystemLocale.intl;
    obj5[2] = intl4.string(getSystemLocale.t.wfYTHe);
    obj5[3] = tmp.customStatusRemoveButton;
    const obj6 = { style: null, source: null };
    obj6[0] = tmp.trailingIcon;
    obj6[1] = registerAssetDefault;
    obj5[4] = callback(closure_6, obj6);
    tmp15Result = callback(PressableBase.PressableOpacity, obj5);
  }
  const tmp2Result1 = map;
  items1[1] = tmp15Result;
  obj[3] = items1;
  return callback(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: callback2(PressableCard.Card, obj) });
}
let c4 = importAllResult;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let obj = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj[3] = obj;
const createCacheKey = { padding: 0, flexDirection: "row", alignItems: "center", gap: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
obj[4] = createCacheKey;
obj[5] = { minHeight: ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: ThemesDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
obj[6] = { height: ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj[7] = { flexShrink: 1 };
let closure_21 = createCacheKey.createStyles(obj);
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
  obj[1] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: stringResult });
  let tmp7Result = tmp5;
  if (tmp5) {
    tmp7Result = callback(ThemeRadioGroup, {});
  }
  const items2 = [tmp7Result, callback(YouStatusRadioGroup, {}), callback(FocusModeSetting, {}), callback(CustomStatus, {}), , ];
  tmp7Result = !flag;
  if (!flag) {
    tmp7Result = stateFromStores;
  }
  if (tmp7Result) {
    tmp7Result = callback(YouAccountRadioGroup, {});
  }
  items2[4] = tmp7Result;
  let tmp7Result1 = !flag;
  if (!flag) {
    tmp7Result1 = stateFromStores1;
  }
  if (tmp7Result1) {
    tmp7Result1 = callback(DevToolsContentSortButtonsDefault, { title: "Developer Tools", embedded: true });
  }
  items2[5] = tmp7Result1;
  obj[3] = callback2(Stack.Stack, { spacing: 24, children: items2 });
  return callback(ActionSheet.ActionSheet, obj);
});
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default memoResult;