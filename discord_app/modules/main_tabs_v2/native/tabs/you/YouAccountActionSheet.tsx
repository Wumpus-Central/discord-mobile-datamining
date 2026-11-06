// discord_app/modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import ClientThemesUtils from "../../../../client_themes/ClientThemesUtils.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../../../../utils/AvatarUtils.tsx";
import UserSettings from "../../../../user_settings/UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import UserSettingsActionCreatorsDefault from "../../../../../actions/UserSettingsActionCreators.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../../design/components/Card/native/Card.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import useDesignToggleDefault from "../../../../devtools/design_toggles/useDesignToggle.tsx";
import TableRadioGroup from "../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import _modDef7343 from "../../../../../../_runtime/metro/07343__.js";
import EmojiDefault from "../../../../emojis/native/Emoji.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import getChannelA11yLabel from "../../../../channel/getChannelA11yLabel.tsx";
import ReactionIcon from "../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import useGameMentionsAsPlainText from "../../../../game_mentions/hooks/useGameMentionsAsPlainText.tsx";
import FocusModeUtils from "../../../../notifications/FocusModeUtils.tsx";
import setUserStatusDefault from "../../../../multi_account/setUserStatus.tsx";
import ThemeDarkIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeDarkIcon.tsx";
import userSettingToActivity from "../../../../custom_status/utils/userSettingToActivity.tsx";
import CustomStatusUtils from "../../../../custom_status/native/CustomStatusUtils.tsx";
import removeCustomStatusDefault from "../../../../custom_status/utils/removeCustomStatus.tsx";
import CustomThemeMobileActionCreators from "../../../../client_themes/native/CustomThemeMobileActionCreators.tsx";
import MultiAccountActionCreatorsAll from "../../../../multi_account/MultiAccountActionCreators.tsx";
import ClientThemesBackgroundActionCreators from "../../../../client_themes/ClientThemesBackgroundActionCreators.tsx";
import ThemeLightIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeLightIcon.tsx";
import ThemeMidnightIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeMidnightIcon.tsx";
import DevToolsContentDefault from "../../../../devtools/native/components/DevToolsContent.tsx";
import ThemeGrayIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeGrayIcon.tsx";
import openManageAccountsModalDefault from "../../../../multi_account/native/openManageAccountsModal.tsx";
import YouSwitchClientsRadioGroupDefault from "YouSwitchClientsRadioGroup.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import MultiAccountStore from "../../../../multi_account/MultiAccountStore.tsx";
import ThemeStore from "../../../../user_settings/ThemeStore.tsx";
import UserRecord from "../../../../../records/UserRecord.tsx";
import DeveloperExperimentStore from "../../../../../stores/DeveloperExperimentStore.tsx";
import StreamerModeStore from "../../../../../stores/StreamerModeStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const TableRowGroup = currentLocale(7151);
const TableSwitchRow = currentLocale(7452);
const BellSlashIcon = currentLocale(11136);
require = fn;
function AccountSectionHeading(children) {
  const tmp = closure_21();
  return expandedHeight(Text_Text.Text, {
    accessibilityRole: "header",
    variant: "body-sm/medium",
    color: "text-subtle",
    style: closure_21().sectionHeading,
    children: children.children,
  });
}
function YouStatusRadioGroup() {
  const memo = noop.useMemo(() => {
    const obj = {
      icon: closure_1_19(setting(7071).TableRowIcon, { source: closure_1(16251), variant: "text-status-online" }),
      value: constants.ONLINE,
    };
    items = [obj, , ,];
    const obj3 = { icon: null, value: null };
    const obj2 = { source: closure_1(16251), variant: "text-status-online" };
    obj3.icon = closure_1_19(setting(7071).TableRowIcon, { source: closure_1(16248), variant: "text-status-idle" });
    obj3.value = constants.IDLE;
    items[1] = obj3;
    const obj5 = { icon: null, value: null };
    const obj4 = { source: closure_1(16248), variant: "text-status-idle" };
    obj5.icon = closure_1_19(setting(7071).TableRowIcon, { source: closure_1(16249), variant: "text-status-dnd" });
    obj5.value = constants.DND;
    items[2] = obj5;
    const obj7 = { icon: null, value: null };
    const obj6 = { source: closure_1(16249), variant: "text-status-dnd" };
    obj7.icon = closure_1_19(setting(7071).TableRowIcon, { source: closure_1(16250), variant: "text-status-offline" });
    obj7.value = constants.INVISIBLE;
    items[3] = obj7;
    return items;
  }, []);
  const StatusSetting = setting(4995).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(4995).StatusExpiresAtSetting;
  closure_1 = StatusExpiresAtSetting.useSetting();
  items = [setting];
  const callback = noop.useCallback((nextStatus) => {
    setUserStatusDefault({ prevStatus: setting, nextStatus });
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let intl = setting(1113).intl;
  const stringResult = intl.string(setting(1113).t["0DPAZH"]);
  let obj2 = { children: null };
  let obj = {
    accessibilityLabel: stringResult,
    onChange: callback,
    defaultValue: setting,
    hasIcons: true,
    children: memo.map((value) => {
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
            obj3.endTime = date.toLocaleString(util.intl.currentLocale, {
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            });
            formatToPlainStringResult = intl.formatToPlainString(util.t.BWD8fs, obj3);
          }
        }
      }
      obj.subLabel = formatToPlainStringResult;
      return expandedHeight(TableRadioRow.TableRadioRow, obj, value.value);
    }),
  };
  const items1 = [
    closure_19(AccountSectionHeading, { children: stringResult }),
    closure_19(setting(7149).TableRadioGroup, {
      accessibilityLabel: stringResult,
      onChange: callback,
      defaultValue: setting,
      hasIcons: true,
      children: memo.map((value) => {
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
              obj3.endTime = date.toLocaleString(util.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              });
              formatToPlainStringResult = intl.formatToPlainString(util.t.BWD8fs, obj3);
            }
          }
        }
        obj.subLabel = formatToPlainStringResult;
        return expandedHeight(TableRadioRow.TableRadioRow, obj, value.value);
      }),
    }),
  ];
  obj2.children = items1;
  return closure_20(View, obj2);
}
function ThemeRadioGroup() {
  items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  const callback = noop.useCallback((arg0) => {
    const result = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
    CustomThemeMobileActionCreators.resetCustomTheme();
    UserSettingsActionCreatorsDefault.updateTheme(arg0);
  }, []);
  const intl = util.intl;
  const stringResult = intl.string(util.t.Ksh3ik);
  let obj2 = { children: null };
  const items1 = [expandedHeight(AccountSectionHeading, { children: stringResult })];
  const obj3 = {
    accessibilityLabel: stringResult,
    onChange: callback,
    defaultValue: stateFromStores,
    hasIcons: true,
    children: null,
  };
  const obj4 = { icon: expandedHeight(ThemeLightIcon.ThemeLightIcon, {}), label: null, value: null };
  obj4.label = ClientThemesUtils.getThemeName(constants3.LIGHT);
  obj4.value = constants3.LIGHT;
  const items2 = [expandedHeight(TableRadioRow.TableRadioRow, obj4), , ,];
  const obj6 = { icon: expandedHeight(ThemeGrayIcon.ThemeGrayIcon, {}), label: null, value: null };
  obj6.label = ClientThemesUtils.getThemeName(constants3.ASH);
  obj6.value = constants3.ASH;
  items2[1] = expandedHeight(TableRadioRow.TableRadioRow, obj6);
  const obj8 = { icon: expandedHeight(ThemeDarkIcon.ThemeDarkIcon, {}), label: null, value: null };
  obj8.label = ClientThemesUtils.getThemeName(constants3.DARK);
  obj8.value = constants3.DARK;
  items2[2] = expandedHeight(TableRadioRow.TableRadioRow, obj8);
  const obj10 = { icon: expandedHeight(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: null, value: null };
  obj10.label = ClientThemesUtils.getThemeName(constants3.ONYX);
  obj10.value = constants3.ONYX;
  items2[3] = expandedHeight(TableRadioRow.TableRadioRow, obj10);
  obj3.children = items2;
  items1[1] = dependencyMap(TableRadioGroup.TableRadioGroup, obj3);
  obj2.children = items1;
  return dependencyMap(View, obj2);
}
function YouAccountRadioGroup() {
  const tmp = closure_21();
  items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = stateFromStores(504);
  const multiAccountUsers = stateFromStores(18269).useMultiAccountUsers().multiAccountUsers;
  closure_129_0 = multiAccountUsers;
  let obj2 = stateFromStores(18269);
  const items1 = [StreamerModeStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(
    items1,
    () => StreamerModeStore.hidePersonalInformation,
  );
  closure_129_1 = stateFromStores1;
  const items2 = [multiAccountUsers, stateFromStores1];
  const memo = noop.useMemo(
    () =>
      stateFromStores.map((id) => {
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
        const obj3 = {
          label: multiAccountUsers(5224).getUserTag(obj, { mode: "username", identifiable: str2 }),
          value: id.id,
          subLabel: combined,
          icon: null,
        };
        const obj4 = { user: obj, guildId: "Array", size: stateFromStores(1187).AvatarSizes.REFRESH_MEDIUM_32 };
        obj3.icon = closure_2_19(stateFromStores(1187).Avatar, obj4);
        return obj3;
      }),
    items2,
  );
  const items3 = [multiAccountUsers];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1113).intl;
    const stringResult = intl.string(tmp2(1113).t.oMNyYN);
    let obj4 = { style: tmp.account, children: null };
    let obj5 = { style: tmp.manage, children: null };
    const obj6 = {
      onPress() {
        return multiAccountUsers(18737)();
      },
      children: null,
    };
    const obj7 = { variant: "body-sm/semibold", color: "text-brand", children: null };
    const intl2 = tmp2(1113).intl;
    obj7.children = intl2.string(tmp2(1113).t.HxrBOZ);
    obj6.children = closure_19(tmp2(5781).Text, obj7);
    obj5.children = closure_19(tmp2(7068).PressableOpacity, obj6);
    const items4 = [closure_19(View, obj5), ,];
    const obj8 = { children: stringResult };
    items4[1] = closure_19(AccountSectionHeading, obj8);
    const obj9 = {
      accessibilityLabel: stringResult,
      onChange: tmp7,
      defaultValue: stateFromStores.id,
      hasIcons: true,
      children: memo.map((value) => {
        const merged = Object.assign(value);
        return closure_1_19(stateFromStores(7152).TableRadioRow, {}, value.value);
      }),
    };
    items4[2] = closure_19(tmp2(7149).TableRadioGroup, obj9);
    obj4.children = items4;
    return closure_20(View, obj4);
  }
  let obj3 = stateFromStores(504);
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
    let obj2 = {
      accessibilityLabel: null,
      accessibilityHint: null,
      icon: null,
      onValueChange: null,
      value: null,
      label: null,
      subLabel: null,
    };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.wCxBOc);
    const intl2 = util.intl;
    obj2.accessibilityHint = intl2.string(util.t.wCxBOc);
    let obj3 = { style: tmp.leadingIcon };
    obj2.icon = expandedHeight(BellSlashIcon.BellSlashIcon, obj3);
    obj2.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        const obj3 = {
          onSelect(quiet_mode_enabled, arg1) {
            closure_1_0(11162).setFocusMode(quiet_mode_enabled, arg1);
            const obj = closure_1_0(11162);
            closure_1_1(5404).hideActionSheet();
            const obj2 = closure_1_1(5404);
            const result = closure_1_0(18732).showYouAccountActionSheet();
          },
        };
        require("ActionSheetActionCreators").openLazy(
          require("asyncRequireImpl")(paths[48], paths.paths),
          "FocusModeOptionsActionSheet",
          obj3,
        );
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
      obj2 = expandedHeight(TableSwitchRow.TableSwitchRow, obj2);
      obj4.children = obj2;
      expandedHeight(TableRowGroup.TableRowGroup, obj4);
    }
    const intl5 = util.intl;
    const obj5 = { endTime: null };
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    currentLocale = util.intl.currentLocale;
    toLocaleStringResult = date.toLocaleString(currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
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
  state = undefined;
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
  const obj5 = {
    style: tmp.customStatusEditButton,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
    onPress: null,
    children: null,
  };
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
    items = [AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET];
    obj3.analyticsLocations = items;
    const result = CustomStatusUtils.openEditCustomStatusModal(obj3);
  };
  if (null != emoji1) {
    const obj7 = {
      src: emojiURL,
      name: emoji1.name,
      style: tmp.customStatusEmoji,
      textEmojiStyle: null,
      fastImageStyle: null,
    };
    const obj8 = { fontSize: width };
    obj7.textEmojiStyle = obj8;
    const size = { width, height: width };
    obj7.fastImageStyle = size;
    let tmp21Result = expandedHeight(EmojiDefault, obj7);
  } else {
    const obj9 = { size: "md", style: tmp.leadingIcon };
    tmp21Result = expandedHeight(ReactionIcon.ReactionIcon, obj9);
  }
  items = [tmp21Result];
  const obj10 = { variant: token, color: token1, lineClamp: 2, style: tmp.customStatusText, children: null };
  if (!tmp14) {
    const intl3 = util.intl;
    gameMentionsAsPlainText = intl3.string(util.t["/UonHN"]);
  }
  obj10.children = gameMentionsAsPlainText;
  items[1] = expandedHeight(Text_Text.Text, obj10);
  obj5.children = items;
  const items1 = [dependencyMap(Pressables.PressableOpacity, obj5)];
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
      children: null,
    };
    const intl4 = util.intl;
    obj11.accessibilityLabel = intl4.string(util.t.wfYTHe);
    obj11.style = tmp.customStatusRemoveButton;
    const obj12 = { style: tmp.trailingIcon, source: _modDef7343 };
    obj11.children = expandedHeight(FastImageDefault, obj12);
    tmp21Result2 = expandedHeight(Pressables.PressableOpacity, obj11);
    const tmp18Result = FastImageDefault;
  }
  const tmp2Result4 = useToken;
  items1[1] = tmp21Result2;
  obj4.children = items1;
  return expandedHeight(TableRowGroup.TableRowGroup, { hasIcons: false, children: dependencyMap(Card.Card, obj4) });
}
const View = fn(17).View;
const MultiAccountTokenStatus = fn(14185).MultiAccountTokenStatus;
const Constants = fn(1072);
({ AnalyticEvents: map1, AuthStates: closure_14, StatusTypes: closure_15, ThemeTypes: closure_16 } = Constants);
const EMOJI_URL_BASE_SIZE = fn(1388).EMOJI_URL_BASE_SIZE;
let closure_18 = fn(14186).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5170);
let obj = {
  account: { position: "relative" },
  manage: { position: "absolute", right: 0, zIndex: 100 },
  leadingIcon: { width: 24, height: 24, margin: 4 },
  trailingIcon: null,
  customStatusRow: null,
  customStatusEditButton: null,
  customStatusRemoveButton: null,
  customStatusText: null,
  customStatusEmoji: null,
  sectionHeading: null,
};
let size = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj.trailingIcon = size;
obj.customStatusRow = {
  padding: 0,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
let obj3 = {
  padding: 0,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
obj.customStatusEditButton = {
  minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
  padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
let obj4 = {
  minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
  padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
obj.customStatusRemoveButton = {
  height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  alignItems: "center",
  justifyContent: "center",
};
obj.customStatusText = { flexShrink: 1 };
let obj5 = {
  height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  alignItems: "center",
  justifyContent: "center",
};
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
  items = [MultiAccountStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    canUseMultiAccountMobile.getCanUseMultiAccountMobile(),
  );
  const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
  const items1 = [DeveloperExperimentStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  const obj3 = { startExpanded: stateFromStores, header: null, showGradient: true, children: null };
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
  obj3.header = expandedHeight(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult });
  let tmp7Result = tmp5;
  if (tmp5) {
    tmp7Result = expandedHeight(ThemeRadioGroup, {});
  }
  const items2 = [
    tmp7Result,
    expandedHeight(YouStatusRadioGroup, {}),
    expandedHeight(FocusModeSetting, {}),
    expandedHeight(CustomStatus, {}),
    ,
    ,
  ];
  let tmp7Result3 = !flag;
  if (!flag) {
    tmp7Result3 = stateFromStores;
  }
  if (tmp7Result3) {
    tmp7Result3 = expandedHeight(YouAccountRadioGroup, {});
  }
  items2[4] = tmp7Result3;
  let tmp7Result4 = !flag;
  if (!flag) {
    tmp7Result4 = stateFromStores1;
  }
  if (tmp7Result4) {
    tmp7Result4 = expandedHeight(YouSwitchClientsRadioGroupDefault, {});
  }
  items2[5] = tmp7Result4;
  let tmp9Result = !flag;
  if (!flag) {
    tmp9Result = stateFromStores1;
  }
  if (tmp9Result) {
    const obj4 = { children: null };
    const items3 = [
      expandedHeight(AccountSectionHeading, { children: "Developer Tools" }),
      expandedHeight(DevToolsContentDefault, { embedded: true }),
    ];
    obj4.children = items3;
    tmp9Result = dependencyMap(View, obj4);
  }
  items2[6] = tmp9Result;
  obj3.children = dependencyMap(Stack_Stack.Stack, { spacing: 24, children: items2 });
  return expandedHeight(ActionSheet.ActionSheet, obj3);
});
