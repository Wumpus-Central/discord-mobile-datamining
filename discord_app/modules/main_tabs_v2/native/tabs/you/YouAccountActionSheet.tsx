// === Module 18389: YouAccountActionSheet ===

// Module 18389 (YouAccountActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1240 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import UserSettings from "UserSettings" /* 4834 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5913 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import Card from "Card" /* 6971 */;
import Pressables from "Pressables" /* 6974 */;
import useDesignToggleDefault from "useDesignToggle" /* 6994 */;
import TableRadioGroup from "TableRadioGroup" /* 7052 */;
import TableRadioRow from "TableRadioRow" /* 7055 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7143 */;
import _modDef7251 from "module_7251" /* 7251 */;
import EmojiDefault from "Emoji" /* 7294 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7315 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import ActionSheet from "ActionSheet" /* 7360 */;
import getChannelA11yLabel from "getChannelA11yLabel" /* 9066 */;
import ReactionIcon from "ReactionIcon" /* 9430 */;
import useGameMentionsAsPlainText from "useGameMentionsAsPlainText" /* 10729 */;
import FocusModeUtils from "FocusModeUtils" /* 10999 */;
import setUserStatusDefault from "setUserStatus" /* 11000 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 11170 */;
import userSettingToActivity from "userSettingToActivity" /* 11357 */;
import CustomStatusUtils from "CustomStatusUtils" /* 11360 */;
import removeCustomStatusDefault from "removeCustomStatus" /* 11367 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 13662 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 13931 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 16941 */;
import ThemeLightIcon from "ThemeLightIcon" /* 17190 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 17192 */;
import ThemeGrayIcon from "ThemeGrayIcon" /* 18390 */;
import openManageAccountsModalDefault from "openManageAccountsModal" /* 18392 */;
import noop from "module_19" /* 19 */;
import MultiAccountStore from "MultiAccountStore" /* 13927 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UserRecord from "UserRecord" /* 1398 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7857 */;
import StreamerModeStore from "StreamerModeStore" /* 5064 */;
import UserStore from "UserStore" /* 1384 */;

const TableRowGroup = currentLocale(7054);
const TableSwitchRow = currentLocale(7363);
const BellSlashIcon = currentLocale(10973);
const DevToolsContentDefault = tmp4(17700);
const YouSwitchClientsRadioGroupDefault = tmp4(18398);
require = fn;
function AccountSectionHeading(children) {
  const tmp = closure_21();
  return closure_1_19(Text_Text.Text, { accessibilityRole: "header", variant: "experimental/body-sm/medium", color: "text-subtle", style: closure_21().sectionHeading, children: children.children });
}
function YouStatusRadioGroup() {
  const memo = noop.useMemo(() => {
    const obj = { icon: closure_1_19(setting(6977).TableRowIcon, { source: closure_1(15951), variant: "text-status-online" }), value: constants.ONLINE };
    const items = [obj, , , ];
    const obj3 = { icon: null, value: null };
    const obj2 = { source: closure_1(15951), variant: "text-status-online" };
    obj3.icon = closure_1_19(setting(6977).TableRowIcon, { source: closure_1(15948), variant: "text-status-idle" });
    obj3.value = constants.IDLE;
    items[1] = obj3;
    const obj5 = { icon: null, value: null };
    const obj4 = { source: closure_1(15948), variant: "text-status-idle" };
    obj5.icon = closure_1_19(setting(6977).TableRowIcon, { source: closure_1(15949), variant: "text-status-dnd" });
    obj5.value = constants.DND;
    items[2] = obj5;
    const obj7 = { icon: null, value: null };
    const obj6 = { source: closure_1(15949), variant: "text-status-dnd" };
    obj7.icon = closure_1_19(setting(6977).TableRowIcon, { source: closure_1(15950), variant: "text-status-offline" });
    obj7.value = constants.INVISIBLE;
    items[3] = obj7;
    return items;
  }, []);
  const StatusSetting = setting(4834).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(4834).StatusExpiresAtSetting;
  closure_1 = StatusExpiresAtSetting.useSetting();
  const manaTypeConsolidationExperiment = setting(7143).useManaTypeConsolidationExperiment("YouAccountActionSheetOnlineStatus");
  let items = [setting];
  const callback = noop.useCallback((nextStatus) => {
    setUserStatusDefault({ prevStatus: setting, nextStatus });
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let intl = setting(1114).intl;
  const stringResult = intl.string(setting(1114).t["0DPAZH"]);
  let tmp6;
  if (!manaTypeConsolidationExperiment) {
    tmp6 = stringResult;
  }
  let obj2 = { title: tmp6, accessibilityLabel: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let tmp7;
  if (manaTypeConsolidationExperiment) {
    tmp7 = stringResult;
  }
  obj2.accessibilityLabel = tmp7;
  obj2.onChange = callback;
  obj2.defaultValue = setting;
  obj2.children = memo.map((value) => {
    const obj = {};
    const merged = Object.assign(value);
    obj.label = getChannelA11yLabel.getStatusLabel(value.value);
    let formatToPlainStringResult;
    if (value.value === setting) {
      if (null != closure_1) {
        if ("0" !== closure_1) {
          const intl = util.intl;
          const obj3 = { endTime: null };
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(closure_1));
          obj3.endTime = date.toLocaleString(util.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
          formatToPlainStringResult = intl.formatToPlainString(util.t.BWD8fs, obj3);
        }
      }
    }
    obj.subLabel = formatToPlainStringResult;
    return closure_2_19(TableRadioRow.TableRadioRow, obj, value.value);
  });
  const tmp5Result = closure_19(setting(7052).TableRadioGroup, obj2);
  let tmp9 = tmp5Result;
  if (manaTypeConsolidationExperiment) {
    let obj3 = { children: null };
    let obj4 = { children: stringResult };
    const items1 = [closure_19(AccountSectionHeading, obj4), tmp5Result];
    obj3.children = items1;
    tmp9 = closure_20(View, obj3);
  }
  return tmp9;
}
function ThemeRadioGroup() {
  const items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetTheme");
  const callback = noop.useCallback((arg0) => {
    const result = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
    CustomThemeMobileActionCreators.resetCustomTheme();
    UserSettingsActionCreatorsDefault.updateTheme(arg0);
  }, []);
  const intl = util.intl;
  const stringResult = intl.string(util.t.Ksh3ik);
  let tmp9 = manaTypeConsolidationExperiment;
  if (manaTypeConsolidationExperiment) {
    const obj3 = { children: stringResult };
    tmp9 = closure_1_19(AccountSectionHeading, obj3);
  }
  const items1 = [tmp9, ];
  let tmp12;
  if (!manaTypeConsolidationExperiment) {
    tmp12 = stringResult;
  }
  const obj4 = { title: tmp12, accessibilityLabel: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let tmp13;
  if (manaTypeConsolidationExperiment) {
    tmp13 = stringResult;
  }
  const obj5 = { children: null };
  obj4.accessibilityLabel = tmp13;
  obj4.onChange = callback;
  obj4.defaultValue = stateFromStores;
  const obj6 = { icon: closure_1_19(ThemeLightIcon.ThemeLightIcon, {}), label: null, value: null };
  obj6.label = ClientThemesUtils.getThemeName(constants3.LIGHT);
  obj6.value = constants3.LIGHT;
  const items2 = [closure_1_19(TableRadioRow.TableRadioRow, obj6), , , ];
  const obj7 = { icon: closure_1_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: null, value: null };
  const tmpResult = ClientThemesUtils;
  obj7.label = ClientThemesUtils.getThemeName(constants3.ASH);
  obj7.value = constants3.ASH;
  items2[1] = closure_1_19(TableRadioRow.TableRadioRow, obj7);
  const obj8 = { icon: closure_1_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: null, value: null };
  const tmpResult4 = ClientThemesUtils;
  obj8.label = ClientThemesUtils.getThemeName(constants3.DARK);
  obj8.value = constants3.DARK;
  items2[2] = closure_1_19(TableRadioRow.TableRadioRow, obj8);
  const obj9 = { icon: closure_1_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: null, value: null };
  const tmpResult5 = ClientThemesUtils;
  obj9.label = ClientThemesUtils.getThemeName(constants3.ONYX);
  obj9.value = constants3.ONYX;
  items2[3] = closure_1_19(TableRadioRow.TableRadioRow, obj9);
  obj4.children = items2;
  items1[1] = dependencyMap(TableRadioGroup.TableRadioGroup, obj4);
  obj5.children = items1;
  return dependencyMap(View, obj5);
}
function YouAccountRadioGroup() {
  const tmp = closure_21();
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = stateFromStores(504);
  const multiAccountUsers = stateFromStores(17938).useMultiAccountUsers().multiAccountUsers;
  closure_129_0 = multiAccountUsers;
  let obj2 = stateFromStores(17938);
  const items1 = [StreamerModeStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  closure_129_1 = stateFromStores1;
  const items2 = [multiAccountUsers, stateFromStores1];
  const memo = noop.useMemo(() => stateFromStores.map((id) => {
    const obj = new UserRecord(id);
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
    const obj3 = { label: multiAccountUsers(5063).getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: null };
    const obj4 = { user: obj, guildId: "Array", size: stateFromStores(1188).AvatarSizes.REFRESH_MEDIUM_32 };
    obj3.icon = closure_2_19(stateFromStores(1188).Avatar, obj4);
    return obj3;
  }), items2);
  let obj3 = stateFromStores(504);
  const manaTypeConsolidationExperiment = stateFromStores(7143).useManaTypeConsolidationExperiment("YouAccountActionSheetSwitchAccounts");
  const items3 = [multiAccountUsers, ];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1114).intl;
    const stringResult = intl.string(tmp2(1114).t.oMNyYN);
    let obj5 = { style: tmp.account, children: null };
    const obj6 = { style: tmp.manage, children: null };
    const obj7 = {
      onPress() {
          return multiAccountUsers(18392)();
        },
      children: null
    };
    const obj8 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl2 = tmp2(1114).intl;
    obj8.children = intl2.string(tmp2(1114).t.HxrBOZ);
    obj7.children = closure_19(tmp2(5619).Text, obj8);
    obj6.children = closure_19(tmp2(6974).PressableOpacity, obj7);
    const items4 = [closure_19(View, obj6), , ];
    let tmp16Result = manaTypeConsolidationExperiment;
    if (manaTypeConsolidationExperiment) {
      const obj9 = { children: stringResult };
      tmp16Result = closure_19(AccountSectionHeading, obj9);
    }
    items4[1] = tmp16Result;
    let tmp11;
    if (!manaTypeConsolidationExperiment) {
      tmp11 = stringResult;
    }
    const obj10 = { title: tmp11, accessibilityLabel: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
    let tmp12;
    if (manaTypeConsolidationExperiment) {
      tmp12 = stringResult;
    }
    obj10.accessibilityLabel = tmp12;
    obj10.onChange = tmp8;
    obj10.defaultValue = stateFromStores.id;
    obj10.children = memo.map((value) => {
      const merged = Object.assign(value);
      return closure_1_19(stateFromStores(7055).TableRadioRow, {}, value.value);
    });
    items4[2] = closure_19(tmp2(7052).TableRadioGroup, obj10);
    obj5.children = items4;
    return closure_20(View, obj5);
  }
  let obj4 = stateFromStores(7143);
}
function FocusModeSetting() {
  let currentLocale = require;
  let toLocaleStringResult = dependencyMap;
  const tmp = closure_21();
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  let setting = FocusModeExpiresAtSetting.useSetting();
  if (!focusModeEnabled) {
    return null;
  } else {
    let obj2 = { accessibilityLabel: null, accessibilityHint: null, icon: null, onValueChange: null, value: null, label: null, subLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.wCxBOc);
    const intl2 = util.intl;
    obj2.accessibilityHint = intl2.string(util.t.wCxBOc);
    let obj3 = { style: tmp.leadingIcon };
    obj2.icon = closure_1_19(BellSlashIcon.BellSlashIcon, obj3);
    obj2.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        const obj3 = {
          onSelect(quiet_mode_enabled, arg1) {
              closure_1_0(10999).setFocusMode(quiet_mode_enabled, arg1);
              const obj = closure_1_0(10999);
              closure_1_1(5253).hideActionSheet();
              const obj2 = closure_1_1(5253);
              const result = closure_1_0(18387).showYouAccountActionSheet();
            }
        };
        require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[49], paths.paths), "FocusModeOptionsActionSheet", obj3);
        let obj2 = require("ActionSheetActionCreators");
      } else {
        require("FocusModeUtils").setFocusMode(false);
        let obj = require("FocusModeUtils");
      }
    };
    obj2.value = focusModeEnabled;
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.wCxBOc);
    if (null == setting) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.i0nsoY);
      const obj4 = { hasIcons: true, children: null };
      obj2.subLabel = stringResult;
      obj2 = closure_1_19(TableSwitchRow.TableSwitchRow, obj2);
      obj4.children = obj2;
      closure_1_19(TableRowGroup.TableRowGroup, obj4);
    }
    const intl5 = util.intl;
    const obj5 = { endTime: null };
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    currentLocale = util.intl.currentLocale;
    toLocaleStringResult = date.toLocaleString(currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    obj5.endTime = toLocaleStringResult;
    stringResult = intl5.formatToPlainString(util.t.BWD8fs, obj5);
  }
}
function CustomStatus() {
  const tmp = closure_21();
  const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
  const width = tmp.leadingIcon.width;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let emoji1;
  const setting = AnimateEmoji.useSetting();
  if (customStatusActivity != null) {
    emoji1 = customStatusActivity.emoji;
  }
  let id;
  if (emoji1 != null) {
    id = emoji1.id;
  }
  if (null != id) {
    let obj3 = { id: emoji1.id, size: EMOJI_URL_BASE_SIZE, animated: null };
    const _Boolean = Boolean;
    const obj2 = AvatarUtilsDefault;
    obj3.animated = Boolean(emoji1.animated) && setting;
    const emojiURL = obj2.getEmojiURL(obj3);
    const tmp12 = Boolean(emoji1.animated) && setting;
  }
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  let tmp14 = null != state;
  if (tmp14) {
    tmp14 = "" !== customStatusActivity.state;
  }
  if (!tmp14) {
    let emoji2;
    if (customStatusActivity != null) {
      emoji2 = customStatusActivity.emoji;
    }
    tmp14 = null != emoji2;
  }
  let state1;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = useGameMentionsAsPlainText.useGameMentionsAsPlainText(state1);
  const tmp2Result = useGameMentionsAsPlainText;
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const tmp2Result3 = useToken;
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  const obj4 = { shadow: "none", border: "none", style: tmp.customStatusRow, children: null };
  const obj5 = { style: tmp.customStatusEditButton, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (tmp14) {
    let stringResult = string(t["2p9FMw"]);
  } else {
    stringResult = string(t["/UonHN"]);
  }
  obj5.accessibilityLabel = stringResult;
  let formatToPlainStringResult;
  if (tmp14) {
    const intl2 = util.intl;
    const emoji = customStatusActivity.emoji;
    let str2;
    if (emoji != null) {
      str2 = emoji.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    const obj6 = { emoji: str2, status: gameMentionsAsPlainText };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.GE7QzY, obj6);
  }
  obj5.accessibilityHint = formatToPlainStringResult;
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = { analyticsLocations: null };
    const items = [AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET];
    obj3.analyticsLocations = items;
    const result = CustomStatusUtils.openEditCustomStatusModal(obj3);
  };
  if (null != emoji1) {
    const obj7 = { src: emojiURL, name: emoji1.name, style: tmp.customStatusEmoji, textEmojiStyle: null, fastImageStyle: null };
    const obj8 = { fontSize: width };
    obj7.textEmojiStyle = obj8;
    const size = { width, height: width };
    obj7.fastImageStyle = size;
    let tmp21Result = closure_1_19(EmojiDefault, obj7);
  } else {
    const obj9 = { size: "md", style: tmp.leadingIcon };
    tmp21Result = closure_1_19(ReactionIcon.ReactionIcon, obj9);
  }
  let items = [tmp21Result, ];
  const obj10 = { variant: token, color: token1, lineClamp: 2, style: tmp.customStatusText, children: null };
  if (!tmp14) {
    const intl3 = util.intl;
    gameMentionsAsPlainText = intl3.string(util.t["/UonHN"]);
  }
  obj10.children = gameMentionsAsPlainText;
  items[1] = closure_1_19(Text_Text.Text, obj10);
  obj5.children = items;
  const items1 = [dependencyMap(Pressables.PressableOpacity, obj5), ];
  let tmp21Result2 = null;
  if (null != customStatusActivity) {
    const obj11 = {
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          removeCustomStatusDefault();
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      style: null,
      children: null
    };
    const intl4 = util.intl;
    obj11.accessibilityLabel = intl4.string(util.t.wfYTHe);
    obj11.style = tmp.customStatusRemoveButton;
    const obj12 = { style: tmp.trailingIcon, source: _modDef7251 };
    obj11.children = closure_1_19(FastImageDefault, obj12);
    tmp21Result2 = closure_1_19(Pressables.PressableOpacity, obj11);
    const tmp18Result = FastImageDefault;
  }
  const tmp2Result4 = useToken;
  items1[1] = tmp21Result2;
  obj4.children = items1;
  return closure_1_19(TableRowGroup.TableRowGroup, { hasIcons: false, children: dependencyMap(Card.Card, obj4) });
}
const View = fn(17).View;
const MultiAccountTokenStatus = fn(13927).MultiAccountTokenStatus;
const Constants = fn(1072);
({ AnalyticEvents: map1, AuthStates: closure_14, StatusTypes: closure_15, ThemeTypes: closure_16 } = Constants);
const EMOJI_URL_BASE_SIZE = fn(1387).EMOJI_URL_BASE_SIZE;
let closure_18 = fn(13928).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5009);
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 }, trailingIcon: null, customStatusRow: null, customStatusEditButton: null, customStatusRemoveButton: null, customStatusText: null, customStatusEmoji: null, sectionHeading: null };
let size = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj.trailingIcon = size;
obj.customStatusRow = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj3 = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusEditButton = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj4 = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusRemoveButton = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.customStatusText = { flexShrink: 1 };
let obj5 = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.customStatusEmoji = { paddingHorizontal: nativeDefault.space.PX_4, alignItems: "center" };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_4, alignItems: "center" };
obj.sectionHeading = { marginBottom: nativeDefault.space.PX_8 };
let closure_21 = createStyles.createStyles(obj);
let obj7 = { marginBottom: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default noop.memo(function YouAccountActionSheet(statusOnly) {
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  let tmp8Result6 = dependencyMap;
  const items = [MultiAccountStore];
  const stateFromStores = initialize.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  let tmp4 = importDefault;
  const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
  const items1 = [DeveloperExperimentStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetDeveloperTools");
  const obj4 = { startExpanded: stateFromStores, header: null, showGradient: true, children: null };
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
  obj4.header = closure_1_19(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult });
  let tmp8Result = tmp5;
  if (tmp5) {
    tmp8Result = closure_1_19(ThemeRadioGroup, {});
  }
  const items2 = [tmp8Result, closure_1_19(YouStatusRadioGroup, {}), closure_1_19(FocusModeSetting, {}), closure_1_19(CustomStatus, {}), , , ];
  let tmp8Result4 = !flag;
  if (!flag) {
    tmp8Result4 = stateFromStores;
  }
  if (tmp8Result4) {
    tmp8Result4 = closure_1_19(YouAccountRadioGroup, {});
  }
  items2[4] = tmp8Result4;
  let tmp8Result5 = !flag;
  if (!flag) {
    tmp8Result5 = stateFromStores1;
  }
  if (tmp8Result5) {
    tmp8Result5 = closure_1_19(YouSwitchClientsRadioGroupDefault, {});
  }
  items2[5] = tmp8Result5;
  let tmp16 = !flag;
  if (!flag) {
    tmp16 = stateFromStores1;
  }
  if (!tmp16) {
    const obj5 = { spacing: 24, children: null };
    items2[6] = tmp16;
    obj5.children = items2;
    obj4.children = closure_1_20(Stack_Stack.Stack, obj5);
    return closure_1_19(ActionSheet.ActionSheet, obj4);
  } else if (manaTypeConsolidationExperiment) {
    const obj6 = { children: null };
    const items3 = [closure_1_19(AccountSectionHeading, { children: "Developer Tools" }), ];
    tmp4 = DevToolsContentDefault;
    tmp8Result6 = closure_1_19(tmp4, { embedded: true });
    items3[1] = tmp8Result6;
    obj6.children = items3;
    let tmp8Result7 = closure_1_20(View, obj6);
  } else {
    tmp8Result7 = closure_1_19(DevToolsContentDefault, { title: "Developer Tools", embedded: true });
  }
});