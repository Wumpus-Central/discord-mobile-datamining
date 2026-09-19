// === Module 14173: GuildActionSheetActions ===

// Module 14173 (GuildActionSheetActions)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import UserSettings from "UserSettings" /* 2019 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2024 */;
import ToastUtils from "ToastUtils" /* 4453 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4908 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import useAlertStore from "useAlertStore" /* 5110 */;
import ConnectionsUtils from "ConnectionsUtils" /* 5619 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7235 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7354 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7359 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7402 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7422 */;
import TidaWebformExperimentDefault from "TidaWebformExperiment" /* 7428 */;
import ClipboardUtils from "ClipboardUtils" /* 7429 */;
import useGuildOnboardingAvailableDefault from "useGuildOnboardingAvailable" /* 7575 */;
import ChannelListState from "ChannelListState" /* 7768 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8274 */;
import ReportModals from "ReportModals" /* 8906 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9760 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9782 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9821 */;
import DiscordTagDefault from "DiscordTag" /* 9900 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 10033 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 11229 */;
import OptInOnboardingUtils from "OptInOnboardingUtils" /* 11804 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11818 */;
import useIsServerThemeAvailableForGuildDefault from "useIsServerThemeAvailableForGuild" /* 14174 */;
import markGuildsAsReadDefault from "markGuildsAsRead" /* 14223 */;
import GuildAntiRaidModalActionCreators from "GuildAntiRaidModalActionCreators" /* 14226 */;
import noop from "module_19" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7772 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7870 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import ReadStateStore from "ReadStateStore" /* 4771 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4937 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function HideMutedChannelsOption(guild) {
  guild = guild.guild;
  const items = [UserGuildSettingsStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => UserGuildSettingsStore.isGuildCollapsed(guild.id));
  const obj2 = { label: null, value: null, onValueChange: null };
  const intl = guild(1115).intl;
  obj2.label = intl.string(guild(1115).t.UwOLJO);
  obj2.value = stateFromStores;
  obj2.onValueChange = function onValueChange() {
    return ChannelCollapseActionCreatorsDefault.toggleCollapseGuild(guild.id);
  };
  return closure_21(guild(7439).ActionSheetSwitchRow, obj2);
}
function BrowseChannelsOption(guild) {
  guild = guild.guild;
  const tmp2 = useGuildOnboardingAvailableDefault(guild);
  const result = guild(4576).useIsDismissibleContentDismissed_UNSAFE(guild(2027).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  let obj = guild(4576);
  const items = [ReadStateStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION));
  const obj2 = guild(504);
  const items1 = [NewChannelsStore];
  const items2 = [guild.id];
  const stateFromStores1 = guild(504).useStateFromStores(items1, () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW);
  const features = guild.features;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11798, dependencyMap.paths), { guildId: guild.id }, closure_18);
  }, items2);
  if (!features.has(constants2.COMMUNITY)) {
    return null;
  } else {
    if (result) {
      if (!stateFromStores) {
        let tmp8Result2 = null;
      }
      const obj4 = { trailing: tmp8Result2, onPress: callback, label: null };
      const intl = tmp3(1115).intl;
      const string = intl.string;
      let h9mGOP = tmp3(1115).t;
      if (tmp2) {
        h9mGOP = h9mGOP.h9mGOP;
        let stringResult = string(h9mGOP);
      } else {
        stringResult = string(h9mGOP.et6wav);
      }
      obj4.label = stringResult;
      closure_21(tmp9, obj4);
    }
    tmp8Result2 = closure_21(tmp3(12543).NewBadge, {});
  }
  const obj3 = guild(504);
}
function ChangeIdentityOption(arg0) {
  ({ guild, user } = arg0);
  const tmp = closure_23();
  const nickname = NicknameUtilsDefault.getNickname(guild.id, undefined, user);
  _require = useOpenProfileSettingsDefault({ guild, analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.GUILD_SETTINGS).analyticsLocations });
  const intl = require("util").intl;
  const features = guild.features;
  const hasItem = features.has(constants2.HUB);
  const t = require("util").t;
  const obj2 = { label: intl.string(hasItem ? t["+MWrWt"] : t["PKQB/H"]), subLabel: null, onPress: null };
  let tmp9 = nickname;
  if (null != user) {
    tmp9 = nickname;
    if (user.hasAvatarForGuild(guild.id)) {
      const obj3 = { style: tmp.identitySublabel, children: null };
      const obj4 = { size: tmp7(1177).AvatarSizes.SIZE_16, style: tmp.guildServerAvatar, user, guildId: guild.id };
      const items = [closure_21(tmp7(1177).Avatar, obj4), ];
      const obj9 = { user, nick: nickname, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
      ({ identityName: obj5.usernameStyle, identityName: obj5.discriminatorStyle, identityName: obj5.nicknameStyle } = tmp);
      items[1] = closure_21(DiscordTagDefault, obj9);
      obj3.children = items;
      tmp9 = closure_22(View, obj3);
    }
  }
  obj2.subLabel = tmp9;
  obj2.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    closure_0();
  };
  return closure_21(require("ActionSheetRow").ActionSheetRow, obj2);
}
function GuildThemePreferenceOption(guild) {
  guild = guild.guild;
  const tmp2 = useIsServerThemeAvailableForGuildDefault(guild.id, "GuildActionSheetActions");
  const items = [UserSettingsProtoStore];
  const items1 = [guild.id];
  [][0] = guild.id;
  const stateFromStores = guild(504).useStateFromStores(items, () => UserSettingsProtoStore.resolveGuildThemeSourcePreference(guild.id), items1);
  let tmp6 = null;
  if (tmp2) {
    const obj2 = { label: null, value: null, onValueChange: null };
    const intl = tmp3(1115).intl;
    obj2.label = intl.string(tmp3(1115).t.CFzDOG);
    obj2.value = stateFromStores === tmp3(1186).GuildThemeSourcePreference.GUILD;
    obj2.onValueChange = tmp5;
    tmp6 = closure_21(tmp3(7439).ActionSheetSwitchRow, obj2);
  }
  return tmp6;
}
function ServerTagOption(guild) {
  guild = guild.guild;
  const tmp = closure_23();
  [][0] = guild.id;
  const result = guild(9857).canViewMobileServerTag(guild.id);
  if (result) {
    const profile = guild.profile;
    let badge;
    if (profile != null) {
      badge = profile.badge;
    }
    const guildTagBadgeUrl = tmp2(8433).getGuildTagBadgeUrl(guild.id, badge, GuildTagBadgeSize.SIZE_16);
    let obj2 = { style: tmp.serverTagLabel, children: null };
    const profile2 = guild.profile;
    let tag;
    if (profile2 != null) {
      tag = profile2.tag;
    }
    const obj3 = { label: null, onPress: null };
    const obj4 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj5 = { guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: GuildTagBadgeSize.SIZE_16 };
    obj4.children = closure_21(tmp2(10012).BaseGuildTagChiplet, obj5);
    const items = [closure_21(View, obj4), ];
    const obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1115).intl;
    obj6.children = intl.string(tmp2(1115).t["2QmKZ2"]);
    items[1] = closure_21(tmp2(4752).Text, obj6);
    obj2.children = items;
    obj3.label = closure_22(View, obj2);
    obj3.onPress = tmp5;
    return closure_21(tmp2(7439).ActionSheetRow, obj3);
  } else {
    return null;
  }
  let obj = guild(9857);
}
class RestrictedGuildPrivacyOption {
  constructor(arg0) {
    guild = global.guild;
    RestrictedGuildIds = guild(closure_2[44]).RestrictedGuildIds;
    setting = RestrictedGuildIds.useSetting();
    hasItem = setting.includes(guild.id);
    tmp2 = jsx;
    obj1 = { label: null, subLabel: null, value: null, onValueChange: null };
    intl = guild(closure_2[19]).intl;
    obj1.label = intl.string(guild(closure_2[19]).t.KXNTgb);
    features = guild.features;
    hasItem1 = features.has(GuildFeatures.HUB);
    intl2 = guild(closure_2[19]).intl;
    string = intl2.string;
    t = guild(closure_2[19]).t;
    if (hasItem1) {
      stringResult = string(t["2YwzGs"]);
    } else {
      stringResult = string(t.jMFSQV);
    }
    obj1.subLabel = stringResult;
    obj1.value = !hasItem;
    obj1.onValueChange = function onValueChange(arg0) {
      const sanitizedRestrictedGuilds = UserSettingsUtils.getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(guild.id);
      } else {
        sanitizedRestrictedGuilds.add(guild.id);
      }
      const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
    };
    return tmp2(guild(closure_2[18]).ActionSheetSwitchRow, obj1);
  }
}
class NotificationAction {
  constructor(arg0) {
    guild = global.guild;
    obj = { label: null, onPress: null };
    intl = guild(closure_2[19]).intl;
    obj.label = intl.string(guild(closure_2[19]).t.HcoRu0);
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      NotificationSettingsModalActionCreatorsDefault.open(guild.id);
    };
    return jsx(guild(closure_2[18]).ActionSheetRow, obj);
  }
}
const View = fn(17).View;
const GuildRecord = fn(2059);
({ isGuildOwner: closure_7, getGuildIconURL: closure_8 } = GuildRecord);
const Constants = fn(1074);
({ ChannelTypes: closure_14, GuildFeatures: closure_15, AnalyticsSections: closure_16, AVATAR_MAX_SIZE: closure_17, Fonts } = Constants);
let closure_18 = fn(7337).CHANNELS_AND_ROLES_MODAL_KEY;
const GuildTagBadgeSize = fn(8201).GuildTagBadgeSize;
const ReadStateTypes = fn(4938).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { guildServerAvatar: { marginRight: 4 }, identityName: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 }, identitySublabel: { flexDirection: "row" }, serverTagLabel: null };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
obj2.serverTagLabel = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
let closure_23 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx");

export { RestrictedGuildPrivacyOption };
export { NotificationAction };
export const GuildUnreadAction = function GuildUnreadAction(guild) {
  guild = guild.guild;
  let stateFromStores1;
  let items = [GuildReadStateStore];
  const items1 = [guild];
  const stateFromStores = guild(stateFromStores1[17]).useStateFromStores(items, () => GuildReadStateStore.getGuildHasUnreadIgnoreMuted(guild.id), items1);
  let obj = guild(stateFromStores1[17]);
  const shouldUseNewNotificationSystem = guild(stateFromStores1[47]).useShouldUseNewNotificationSystem("GuildUnreadAction");
  const items2 = [guild.id];
  closure_1 = noop.useCallback(() => {
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guild.id, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
  }, items2);
  let obj2 = guild(stateFromStores1[47]);
  const items3 = [UserGuildSettingsStore];
  stateFromStores1 = guild(stateFromStores1[17]).useStateFromStores(items3, () => UserGuildSettingsStore.isMuted(guild.id));
  const obj4 = { label: null, onPress: null, disabled: null };
  const intl = guild(stateFromStores1[19]).intl;
  obj4.label = intl.string(guild(stateFromStores1[19]).t.e6RscS);
  obj4.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const items = [guild.id];
    markGuildsAsReadDefault(items, constants3.GUILD_POPOUT);
  };
  obj4.disabled = !stateFromStores;
  const items4 = [closure_21(guild(stateFromStores1[18]).ActionSheetRow, obj4), , ];
  if (!shouldUseNewNotificationSystem) {
    items4[1] = shouldUseNewNotificationSystem;
    const features = guild.features;
    let tmp7Result = null;
    if (features.has(constants2.COMMUNITY)) {
      const obj5 = { guild };
      tmp7Result = closure_21(BrowseChannelsOption, obj5);
    }
    const obj6 = { hasIcons: false, children: null };
    items4[2] = tmp7Result;
    obj6.children = items4;
    return closure_22(guild(stateFromStores1[18]).ActionSheetRow.Group, obj6);
  } else {
    const intl2 = tmp(tmp2[19]).intl;
    const string = intl2.string;
    let t = tmp(tmp2[19]).t;
    if (stateFromStores1) {
      let stringResult = string(t.De0BTC);
    } else {
      stringResult = string(t.vRzp7P);
    }
    t = {
      label: stringResult,
      onPress() {
          if (stateFromStores1) {
            closure_1();
          } else {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            const _HermesInternal = HermesInternal;
            const obj2 = ActionSheetActionCreatorsDefault;
            const obj3 = { guildId: guild.id };
            obj2.openLazy(asyncRequireImpl(10396, dependencyMap.paths), "muteSettings" + guild.id, obj3);
            const tmp5 = asyncRequireImpl(10396, dependencyMap.paths);
          }
        }
    };
    closure_21(tmp(tmp2[18]).ActionSheetRow, t);
  }
  let obj3 = guild(stateFromStores1[17]);
};
export const GuildActionSheetPrimaryActions = function GuildActionSheetPrimaryActions(guild) {
  guild = guild.guild;
  let obj = guild(14224);
  const tmp3 = useCanCreateAnEventDefault(guild.id);
  const items = [GuildRoleStore];
  const items1 = [];
  const stateFromStores = guild(504).useStateFromStores(items, () => ConnectionsUtils.isVerifiedRolesChannelVisible(GuildRoleStore.getSortedRoles(guild.id)));
  if (obj.useGuildActionSheetPermissions(guild).canManageChannels) {
    const obj3 = { label: null, onPress: null };
    const intl = tmp(1115).intl;
    obj3.label = intl.string(tmp(1115).t["fUYU+j"]);
    obj3.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      CreateChannelModalActionCreatorsDefault.open(null, guild.id, null, null);
    };
    items1.push(closure_21(tmp(7439).ActionSheetRow, obj3));
    const obj4 = { label: null, onPress: null };
    const intl2 = tmp(1115).intl;
    obj4.label = intl2.string(tmp(1115).t["ISN+NM"]);
    obj4.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      CreateChannelModalActionCreatorsDefault.open(constants.GUILD_CATEGORY, guild.id, null, null);
    };
    items1.push(closure_21(tmp(7439).ActionSheetRow, obj4));
  }
  if (tmp3) {
    const obj5 = { label: null, onPress: null };
    const intl3 = tmp(1115).intl;
    obj5.label = intl3.string(tmp(1115).t["60lJ0C"]);
    obj5.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, {});
    };
    items1.push(closure_21(tmp(7439).ActionSheetRow, obj5));
  }
  if (stateFromStores) {
    const obj6 = { label: null, onPress: null };
    const intl4 = tmp(1115).intl;
    obj6.label = intl4.string(tmp(1115).t.ghtnss);
    obj6.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = GuildRoleConnectionsModalActionCreators.openGuildRoleConnectionsModal({
        guildId: guild.id,
        onClose() {

        }
      });
    };
    items1.push(closure_21(tmp(7439).ActionSheetRow, obj6));
  }
  let tmp12 = null;
  if (0 !== items1.length) {
    const obj7 = { hasIcons: false, children: items1.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
    tmp12 = closure_21(tmp(7439).ActionSheetRow.Group, obj7);
  }
  return tmp12;
};
export const handleLeaveServer = function handleLeaveServer(guild) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const lazyResult = noop.lazy(() => guild(paths[28])(paths[57], paths.paths));
  useAlertStore.openAlert("guild-action-sheet-leave-server", __initData(lazyResult, { guild }));
};
export const GuildActionSheetDirectoryActions = function GuildActionSheetDirectoryActions(guild) {
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  _modDef38(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
  const items = [];
  items.push(closure_21(NotificationAction, { guild }));
  items.push(closure_21(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(closure_21(RestrictedGuildPrivacyOption, { guild }));
  const tmp4 = closure_7(guild, currentUser);
  const messageRequestPrivacyOption = guild(14172).useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (tmp4) {
    let tmp5Result = null;
    if (0 !== items.length) {
      const obj2 = { hasIcons: false, children: items.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
      tmp5Result = closure_21(tmp9(7439).ActionSheetRow.Group, obj2);
    }
    return tmp5Result;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants2.HUB);
    const intl = tmp9(1115).intl;
    const string = intl.string;
    let t = tmp9(1115).t;
    if (hasItem) {
      let stringResult = string(t.Dv8gFT);
    } else {
      stringResult = string(t.J2TBi3);
    }
    const obj3 = {
      label: stringResult,
      variant: "danger",
      onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const lazyResult = noop.lazy(() => guild(paths[28])(paths[57], paths.paths));
          useAlertStore.openAlert("guild-action-sheet-leave-server", __initData(lazyResult, { guild }));
        }
    };
    t = items.push(closure_21(tmp9(7439).ActionSheetRow, obj3));
  }
  let obj = guild(14172);
};
export const GuildActionSheetSecondaryActions = function GuildActionSheetSecondaryActions(guild) {
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  const tmp2 = closure_7(guild, currentUser);
  const canReportRaid = guild(10354).useCanReportRaid(guild);
  let obj = guild(10354);
  const guildIncidentsState = guild(10353).useGuildIncidentsState(guild.id);
  const items = [];
  ({ shouldShowIncidentActions, isUnderLockdown } = guildIncidentsState);
  let obj2 = guild(10353);
  const optInEnabledForGuild = guild(7775).useOptInEnabledForGuild(guild.id);
  items.push(closure_21(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(closure_21(GuildThemePreferenceOption, { guild }));
  items.push(closure_21(ServerTagOption, { guild }));
  const features = guild.features;
  if (features.has(constants2.COMMUNITY)) {
    const obj4 = { label: null, value: null, onValueChange: null };
    const intl = tmp3(1115).intl;
    obj4.label = intl.string(tmp3(1115).t.FB2ZZV);
    obj4.value = !optInEnabledForGuild;
    obj4.onValueChange = function onValueChange() {
      return OptInOnboardingUtils.toggleShowAllChannels(guild.id);
    };
    items.push(closure_21(tmp3(7439).ActionSheetSwitchRow, obj4));
  }
  items.push(closure_21(HideMutedChannelsOption, { guild }));
  items.push(closure_21(RestrictedGuildPrivacyOption, { guild }));
  const obj3 = guild(7775);
  const messageRequestPrivacyOption = guild(14172).useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (canReportRaid) {
    const obj5 = { label: null, onPress: null };
    const intl2 = tmp3(1115).intl;
    obj5.label = intl2.string(tmp3(1115).t.cswId3);
    obj5.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildAntiRaidModalActionCreators.openReportRaidModal(guild.id);
    };
    items.push(closure_21(tmp3(7439).ActionSheetRow, obj5));
  }
  if (!tmp2) {
    const obj6 = { label: null, onPress: null };
    const intl3 = tmp3(1115).intl;
    obj6.label = intl3.string(tmp3(1115).t.Aen9eh);
    obj6.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = ReportModals.showReportModalForGuild(guild);
    };
    items.push(closure_21(tmp3(7439).ActionSheetRow, obj6));
  }
  if (!shouldShowIncidentActions) {
    if (tmp2) {
      let tmp8Result = null;
      if (0 !== items.length) {
        const obj7 = { hasIcons: false, children: items.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
        tmp8Result = closure_21(tmp3(7439).ActionSheetRow.Group, obj7);
      }
      return tmp8Result;
    } else {
      const features2 = guild.features;
      const hasItem = features2.has(constants2.HUB);
      const intl5 = tmp3(1115).intl;
      const string2 = intl5.string;
      let t2 = tmp3(1115).t;
      if (hasItem) {
        let string2Result = string2(t2.Dv8gFT);
      } else {
        string2Result = string2(t2.J2TBi3);
      }
      const obj8 = {
        label: string2Result,
        variant: "danger",
        onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              const lazyResult = noop.lazy(() => guild(paths[28])(paths[57], paths.paths));
              useAlertStore.openAlert("guild-action-sheet-leave-server", __initData(lazyResult, { guild }));
            }
      };
      t2 = items.push(closure_21(tmp3(7439).ActionSheetRow, obj8));
    }
  } else {
    const intl4 = tmp3(1115).intl;
    const string = intl4.string;
    let t = tmp3(1115).t;
    if (isUnderLockdown) {
      let stringResult = string(t["+tSVi3"]);
    } else {
      stringResult = string(t.EPlEdu);
    }
    const obj9 = {
      label: stringResult,
      variant: "danger",
      onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const obj2 = { source: GuildAntiRaidTypes.GuildIncidentActionSources.GUILD_PROFILE };
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12081, dependencyMap.paths), "GuildIncidentActionsActionSheet", { guild, analyticsData: obj2 });
        }
    };
    t = items.push(closure_21(tmp3(7439).ActionSheetRow, obj9));
  }
  const tmp3Result = guild(14172);
};
export const GuildDeveloperOptionAction = function GuildDeveloperOptionAction(guild) {
  guild = guild.guild;
  const DeveloperMode = guild(2019).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  TidaWebformExperimentDefault;
  if (setting) {
    const items = [];
    let obj = { label: null, onPress: null };
    const intl = tmp(1115).intl;
    obj.label = intl.string(tmp(1115).t["94lLD7"]);
    obj.onPress = function onPress() {
      ClipboardUtils.copy(guild.id);
      ToastUtils.presentIdCopied();
    };
    items.push(closure_21(tmp(7439).ActionSheetRow, obj));
    if (tmp5) {
      if (null != guild.icon) {
        let obj2 = { label: null, onPress: null };
        const intl2 = tmp(1115).intl;
        obj2.label = intl2.string(tmp(1115).t["7H30wR"]);
        obj2.onPress = function onPress() {
          const tmp = React6(guild, closure_2_17, true);
          if (null != tmp) {
            ClipboardUtils.copy(tmp);
            ToastUtils.presentLinkCopied();
          }
        };
        items.push(closure_21(tmp(7439).ActionSheetRow, obj2));
      }
      if (null != guild.banner) {
        let obj3 = { label: null, onPress: null };
        const intl3 = tmp(1115).intl;
        obj3.label = intl3.string(tmp(1115).t["2FoUnk"]);
        obj3.onPress = function onPress() {
          const guildBannerURL = AvatarUtilsDefault.getGuildBannerURL({ id: guild.id, banner: guild.banner }, true);
          if (null != guildBannerURL) {
            ClipboardUtils.copy(guildBannerURL);
            ToastUtils.presentLinkCopied();
          }
          const obj2 = { id: guild.id, banner: guild.banner };
        };
        items.push(closure_21(tmp(7439).ActionSheetRow, obj3));
      }
    }
    let obj4 = { hasIcons: false, title: null, children: null };
    const intl4 = tmp(1115).intl;
    obj4.title = intl4.string(tmp(1115).t.ObIb1Q);
    obj4.children = items.map((children, index) => closure_1_21(React.Fragment, { children }, index));
    return closure_21(tmp(7439).ActionSheetRow.Group, obj4);
  } else {
    return null;
  }
};