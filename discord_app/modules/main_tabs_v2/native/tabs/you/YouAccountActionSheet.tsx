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
import ManaTypeConsolidationExperiment from "../../../../design/ManaTypeConsolidationExperiment.tsx";
import _modDef7257 from "../../../../../../_runtime/metro/07257__.js";
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
import ThemeGrayIcon from "../../../../../design/components/Icon/native/redesign/generated/ThemeGrayIcon.tsx";
import openManageAccountsModalDefault from "../../../../multi_account/native/openManageAccountsModal.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import MultiAccountStore from "../../../../multi_account/MultiAccountStore.tsx";
import ThemeStore from "../../../../user_settings/ThemeStore.tsx";
import UserRecord from "../../../../../records/UserRecord.tsx";
import DeveloperExperimentStore from "../../../../../stores/DeveloperExperimentStore.tsx";
import StreamerModeStore from "../../../../../stores/StreamerModeStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const TableRowGroup = currentLocale(7060);
const TableSwitchRow = currentLocale(7369);
const BellSlashIcon = currentLocale(10992);
const DevToolsContentDefault = tmp4(17744);
const YouSwitchClientsRadioGroupDefault = tmp4(18441);
require = fn;
function AccountSectionHeading(children) {
  const tmp = closure_21();
  return closure_1_19(Text_Text.Text, {
    accessibilityRole: "header",
    variant: "experimental/body-sm/medium",
    color: "text-subtle",
    style: closure_21().sectionHeading,
    children: children.children,
  });
}
function YouStatusRadioGroup() {
  const memo = noop.useMemo(() => {
    const obj = {
      icon: closure_1_19(setting(6983).TableRowIcon, { source: closure_1(15992), variant: "text-status-online" }),
      value: constants.ONLINE,
    };
    const items = [obj, , ,];
    const obj3 = { icon: null, value: null };
    const obj2 = { source: closure_1(15992), variant: "text-status-online" };
    obj3.icon = closure_1_19(setting(6983).TableRowIcon, { source: closure_1(15989), variant: "text-status-idle" });
    obj3.value = constants.IDLE;
    items[1] = obj3;
    const obj5 = { icon: null, value: null };
    const obj4 = { source: closure_1(15989), variant: "text-status-idle" };
    obj5.icon = closure_1_19(setting(6983).TableRowIcon, { source: closure_1(15990), variant: "text-status-dnd" });
    obj5.value = constants.DND;
    items[2] = obj5;
    const obj7 = { icon: null, value: null };
    const obj6 = { source: closure_1(15990), variant: "text-status-dnd" };
    obj7.icon = closure_1_19(setting(6983).TableRowIcon, { source: closure_1(15991), variant: "text-status-offline" });
    obj7.value = constants.INVISIBLE;
    items[3] = obj7;
    return items;
  }, []);
  const StatusSetting = setting(4839).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(4839).StatusExpiresAtSetting;
  closure_1 = StatusExpiresAtSetting.useSetting();
  const manaTypeConsolidationExperiment = setting(7149).useManaTypeConsolidationExperiment(
    "YouAccountActionSheetOnlineStatus",
  );
  let items = [setting];
  const callback = noop.useCallback((nextStatus) => {
    setUserStatusDefault({ prevStatus: setting, nextStatus });
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let intl = setting(1113).intl;
  const stringResult = intl.string(setting(1113).t["0DPAZH"]);
  let tmp6;
  if (!manaTypeConsolidationExperiment) {
    tmp6 = stringResult;
  }
  let obj2 = {
    title: tmp6,
    accessibilityLabel: null,
    onChange: null,
    defaultValue: null,
    hasIcons: true,
    children: null,
  };
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
    return closure_2_19(TableRadioRow.TableRadioRow, obj, value.value);
  });
  const tmp5Result = closure_19(setting(7058).TableRadioGroup, obj2);
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
  const manaTypeConsolidationExperiment =
    ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetTheme");
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
  const items1 = [tmp9];
  let tmp12;
  if (!manaTypeConsolidationExperiment) {
    tmp12 = stringResult;
  }
  const obj4 = {
    title: tmp12,
    accessibilityLabel: null,
    onChange: null,
    defaultValue: null,
    hasIcons: true,
    children: null,
  };
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
  const items2 = [closure_1_19(TableRadioRow.TableRadioRow, obj6), , ,];
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
  const multiAccountUsers = stateFromStores(17981).useMultiAccountUsers().multiAccountUsers;
  closure_129_0 = multiAccountUsers;
  let obj2 = stateFromStores(17981);
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
          label: multiAccountUsers(5068).getUserTag(obj, { mode: "username", identifiable: str2 }),
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
  let obj3 = stateFromStores(504);
  const manaTypeConsolidationExperiment = stateFromStores(7149).useManaTypeConsolidationExperiment(
    "YouAccountActionSheetSwitchAccounts",
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
    let obj5 = { style: tmp.account, children: null };
    const obj6 = { style: tmp.manage, children: null };
    const obj7 = {
      onPress() {
        return multiAccountUsers(18435)();
      },
      children: null,
    };
    const obj8 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl2 = tmp2(1113).intl;
    obj8.children = intl2.string(tmp2(1113).t.HxrBOZ);
    obj7.children = closure_19(tmp2(5624).Text, obj8);
    obj6.children = closure_19(tmp2(6980).PressableOpacity, obj7);
    const items4 = [closure_19(View, obj6), ,];
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
    const obj10 = {
      title: tmp11,
      accessibilityLabel: null,
      onChange: null,
      defaultValue: null,
      hasIcons: true,
      children: null,
    };
    let tmp12;
    if (manaTypeConsolidationExperiment) {
      tmp12 = stringResult;
    }
    obj10.accessibilityLabel = tmp12;
    obj10.onChange = tmp8;
    obj10.defaultValue = stateFromStores.id;
    obj10.children = memo.map((value) => {
      const merged = Object.assign(value);
      return closure_1_19(stateFromStores(7061).TableRadioRow, {}, value.value);
    });
    items4[2] = closure_19(tmp2(7058).TableRadioGroup, obj10);
    obj5.children = items4;
    return closure_20(View, obj5);
  }
  let obj4 = stateFromStores(7149);
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
    obj2.icon = closure_1_19(BellSlashIcon.BellSlashIcon, obj3);
    obj2.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        const obj3 = {
          onSelect(quiet_mode_enabled, arg1) {
            closure_1_0(11018).setFocusMode(quiet_mode_enabled, arg1);
            const obj = closure_1_0(11018);
            closure_1_1(5258).hideActionSheet();
            const obj2 = closure_1_1(5258);
            const result = closure_1_0(18430).showYouAccountActionSheet();
          },
        };
        require("ActionSheetActionCreators").openLazy(
          require("asyncRequireImpl")(paths[49], paths.paths),
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
    const items = [AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET];
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
    let tmp21Result = closure_1_19(EmojiDefault, obj7);
  } else {
    const obj9 = { size: "md", style: tmp.leadingIcon };
    tmp21Result = closure_1_19(ReactionIcon.ReactionIcon, obj9);
  }
  let items = [tmp21Result];
  const obj10 = { variant: token, color: token1, lineClamp: 2, style: tmp.customStatusText, children: null };
  if (!tmp14) {
    const intl3 = util.intl;
    gameMentionsAsPlainText = intl3.string(util.t["/UonHN"]);
  }
  obj10.children = gameMentionsAsPlainText;
  items[1] = closure_1_19(Text_Text.Text, obj10);
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
    const obj12 = { style: tmp.trailingIcon, source: _modDef7257 };
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
const MultiAccountTokenStatus = fn(13962).MultiAccountTokenStatus;
const Constants = fn(1072);
({ AnalyticEvents: map1, AuthStates: closure_14, StatusTypes: closure_15, ThemeTypes: closure_16 } = Constants);
const EMOJI_URL_BASE_SIZE = fn(1386).EMOJI_URL_BASE_SIZE;
let closure_18 = fn(13963).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5014);
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
  let tmp8Result6 = dependencyMap;
  const items = [MultiAccountStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    canUseMultiAccountMobile.getCanUseMultiAccountMobile(),
  );
  let tmp4 = importDefault;
  const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
  const items1 = [DeveloperExperimentStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment(
    "YouAccountActionSheetDeveloperTools",
  );
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
  const items2 = [
    tmp8Result,
    closure_1_19(YouStatusRadioGroup, {}),
    closure_1_19(FocusModeSetting, {}),
    closure_1_19(CustomStatus, {}),
    ,
    ,
  ];
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
    const items3 = [closure_1_19(AccountSectionHeading, { children: "Developer Tools" })];
    tmp4 = DevToolsContentDefault;
    tmp8Result6 = closure_1_19(tmp4, { embedded: true });
    items3[1] = tmp8Result6;
    obj6.children = items3;
    let tmp8Result7 = closure_1_20(View, obj6);
  } else {
    tmp8Result7 = closure_1_19(DevToolsContentDefault, { title: "Developer Tools", embedded: true });
  }
});
