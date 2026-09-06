// === Module 13910: GuildActionSheetActions ===

// Module 13910 (GuildActionSheetActions)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1940 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import ConnectionsUtils from "ConnectionsUtils" /* 5407 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import TidaWebformExperimentDefault from "TidaWebformExperiment" /* 7189 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import useGuildOnboardingAvailableDefault from "useGuildOnboardingAvailable" /* 7335 */;
import ChannelListState from "ChannelListState" /* 7528 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8017 */;
import ReportModals from "ReportModals" /* 8629 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 9207 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9698 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9737 */;
import DiscordTagDefault from "DiscordTag" /* 9803 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 10964 */;
import OptInOnboardingUtils from "OptInOnboardingUtils" /* 11555 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11569 */;
import markGuildsAsReadDefault from "markGuildsAsRead" /* 13960 */;
import GuildAntiRaidModalActionCreators from "GuildAntiRaidModalActionCreators" /* 13963 */;
import noop from "module_19" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7532 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7636 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function HideMutedChannelsOption(guild) {
  guild = guild.guild;
  let obj = guild(504);
  const items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isGuildCollapsed(guild.id));
  obj = { label: null, value: null, onValueChange: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.UwOLJO);
  obj.value = stateFromStores;
  obj.onValueChange = function onValueChange() {
    return ChannelCollapseActionCreatorsDefault.toggleCollapseGuild(guild.id);
  };
  return closure_21(guild(7200).ActionSheetSwitchRow, obj);
}
function BrowseChannelsOption(guild) {
  guild = guild.guild;
  let obj = guild(4380);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(1943).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  const tmp2 = useGuildOnboardingAvailableDefault(guild);
  const items = [ReadStateStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION));
  const obj2 = guild(504);
  const items1 = [NewChannelsStore];
  const items2 = [guild.id];
  const stateFromStores1 = guild(504).useStateFromStores(items1, () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW);
  const features = guild.features;
  const callback = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { guildId: guild.id };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11549, dependencyMap.paths), obj, closure_18);
  }, items2);
  if (!features.has(constants2.COMMUNITY)) {
    return null;
  } else {
    if (result) {
      if (!stateFromStores) {
        let tmp8Result = null;
      }
      obj = { trailing: tmp8Result, onPress: callback, label: null };
      const intl = tmp3(1114).intl;
      const string = intl.string;
      let h9mGOP = tmp3(1114).t;
      if (tmp2) {
        h9mGOP = h9mGOP.h9mGOP;
        let stringResult = string(h9mGOP);
      } else {
        stringResult = string(h9mGOP.et6wav);
      }
      obj.label = stringResult;
      tmp8Result = closure_21(tmp9, obj);
    }
    tmp8Result = closure_21(tmp3(12291).NewBadge, {});
  }
  const obj3 = guild(504);
}
function ChangeIdentityOption(arg0) {
  ({ guild, user } = arg0);
  const tmp = closure_23();
  let obj = NicknameUtilsDefault;
  const nickname = obj.getNickname(guild.id, undefined, user);
  _require = useOpenProfileSettingsDefault({ guild, analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.GUILD_SETTINGS).analyticsLocations });
  const intl = require("util").intl;
  const features = guild.features;
  const hasItem = features.has(constants2.HUB);
  const t = require("util").t;
  obj = { label: intl.string(hasItem ? t["+MWrWt"] : t["PKQB/H"]), subLabel: null, onPress: null };
  let tmp9 = nickname;
  if (null != user) {
    tmp9 = nickname;
    if (user.hasAvatarForGuild(guild.id)) {
      obj = { style: tmp.identitySublabel, children: null };
      const obj1 = { size: tmp7(1178).AvatarSizes.SIZE_16, style: tmp.guildServerAvatar, user, guildId: guild.id };
      const items = [closure_21(tmp7(1178).Avatar, obj1), ];
      const obj2 = { user, nick: nickname, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
      ({ identityName: obj5.usernameStyle, identityName: obj5.discriminatorStyle, identityName: obj5.nicknameStyle } = tmp);
      items[1] = closure_21(DiscordTagDefault, obj2);
      obj.children = items;
      tmp9 = closure_22(View, obj);
    }
  }
  obj.subLabel = tmp9;
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    closure_0();
  };
  return closure_21(require("ActionSheetRow").ActionSheetRow, obj);
}
function GuildThemePreferenceOption(guild) {
  guild = guild.guild;
  let obj = guild(504);
  const items = [UserSettingsProtoStore];
  const items1 = [guild.id];
  [][0] = guild.id;
  const stateFromStores = obj.useStateFromStores(items, () => UserSettingsProtoStore.resolveGuildThemeSourcePreference(guild.id), items1);
  let tmp6 = null;
  if (tmp2) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = tmp3(1114).intl;
    obj.label = intl.string(tmp3(1114).t.CFzDOG);
    obj.value = stateFromStores === tmp3(1187).GuildThemeSourcePreference.GUILD;
    obj.onValueChange = tmp5;
    tmp6 = closure_21(tmp3(7200).ActionSheetSwitchRow, obj);
  }
  return tmp6;
}
function ServerTagOption(guild) {
  guild = guild.guild;
  let obj = guild(9067);
  [][0] = guild.id;
  const result = obj.canViewMobileServerTag(guild.id);
  if (result) {
    const profile = guild.profile;
    let badge;
    if (profile != null) {
      badge = profile.badge;
    }
    const guildTagBadgeUrl = tmp2(8165).getGuildTagBadgeUrl(guild.id, badge, GuildTagBadgeSize.SIZE_16);
    obj = { style: tmp.serverTagLabel, children: null };
    const profile2 = guild.profile;
    let tag;
    if (profile2 != null) {
      tag = profile2.tag;
    }
    obj = { label: null, onPress: null };
    const obj1 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    let obj2 = { guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: GuildTagBadgeSize.SIZE_16 };
    obj1.children = closure_21(tmp2(9184).BaseGuildTagChiplet, obj2);
    const items = [closure_21(View, obj1), ];
    const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1114).intl;
    obj3.children = intl.string(tmp2(1114).t["2QmKZ2"]);
    items[1] = closure_21(tmp2(4556).Text, obj3);
    obj.children = items;
    obj.label = closure_22(View, obj);
    obj.onPress = tmp5;
    return closure_21(tmp2(7200).ActionSheetRow, obj);
  } else {
    return null;
  }
  tmp = closure_23();
}
class RestrictedGuildPrivacyOption {
  constructor(arg0) {
    guild = global.guild;
    RestrictedGuildIds = guild(closure_2[44]).RestrictedGuildIds;
    setting = RestrictedGuildIds.useSetting();
    hasItem = setting.includes(guild.id);
    tmp2 = jsx;
    obj = { label: null, subLabel: null, value: null, onValueChange: null };
    intl = guild(closure_2[19]).intl;
    obj.label = intl.string(guild(closure_2[19]).t.KXNTgb);
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
    obj.subLabel = stringResult;
    obj.value = !hasItem;
    obj.onValueChange = function onValueChange(arg0) {
      const sanitizedRestrictedGuilds = UserSettingsUtils.getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(guild.id);
      } else {
        sanitizedRestrictedGuilds.add(guild.id);
      }
      const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
    };
    return tmp2(guild(closure_2[18]).ActionSheetSwitchRow, obj);
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
const GuildRecord = fn(1975);
({ isGuildOwner: closure_7, getGuildIconURL: closure_8 } = GuildRecord);
const Constants = fn(1074);
({ ChannelTypes: closure_14, GuildFeatures: closure_15, AnalyticsSections: closure_16, AVATAR_MAX_SIZE: closure_17, Fonts } = Constants);
let closure_18 = fn(7097).CHANNELS_AND_ROLES_MODAL_KEY;
const GuildTagBadgeSize = fn(7944).GuildTagBadgeSize;
const ReadStateTypes = fn(4742).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
fn(4560);
let createStyles = { guildServerAvatar: { marginRight: 4 }, identityName: null, identitySublabel: null, serverTagLabel: null };
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
createStyles.identityName = createStyles;
createStyles.identitySublabel = { flexDirection: "row" };
createStyles.serverTagLabel = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
let closure_23 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx");

export { RestrictedGuildPrivacyOption };
export { NotificationAction };
export const GuildUnreadAction = function GuildUnreadAction(guild) {
  guild = guild.guild;
  let stateFromStores1;
  let obj = guild(stateFromStores1[17]);
  let items = [GuildReadStateStore];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => GuildReadStateStore.getGuildHasUnreadIgnoreMuted(guild.id), items1);
  let obj1 = guild(stateFromStores1[47]);
  const shouldUseNewNotificationSystem = obj1.useShouldUseNewNotificationSystem("GuildUnreadAction");
  const items2 = [guild.id];
  closure_1 = noop.useCallback(() => {
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guild.id, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
  }, items2);
  const items3 = [UserGuildSettingsStore];
  stateFromStores1 = guild(stateFromStores1[17]).useStateFromStores(items3, () => UserGuildSettingsStore.isMuted(guild.id));
  obj = { label: null, onPress: null, disabled: null };
  const intl = guild(stateFromStores1[19]).intl;
  obj.label = intl.string(guild(stateFromStores1[19]).t.e6RscS);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const items = [guild.id];
    markGuildsAsReadDefault(items, constants3.GUILD_POPOUT);
  };
  obj.disabled = !stateFromStores;
  const items4 = [closure_21(guild(stateFromStores1[18]).ActionSheetRow, obj), , ];
  if (!shouldUseNewNotificationSystem) {
    items4[1] = shouldUseNewNotificationSystem;
    const features = guild.features;
    let tmp7Result = null;
    if (features.has(constants2.COMMUNITY)) {
      obj = { guild };
      tmp7Result = closure_21(BrowseChannelsOption, obj);
    }
    obj1 = { hasIcons: false, children: null };
    items4[2] = tmp7Result;
    obj1.children = items4;
    return closure_22(guild(stateFromStores1[18]).ActionSheetRow.Group, obj1);
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
            let obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const _HermesInternal = HermesInternal;
            const obj2 = ActionSheetActionCreatorsDefault;
            obj = { guildId: guild.id };
            obj2.openLazy(asyncRequireImpl(10144, dependencyMap.paths), "muteSettings" + guild.id, obj);
            const tmp5 = asyncRequireImpl(10144, dependencyMap.paths);
          }
        }
    };
    tmp7Result = closure_21(tmp(tmp2[18]).ActionSheetRow, t);
  }
  const obj3 = guild(stateFromStores1[17]);
};
export const GuildActionSheetPrimaryActions = function GuildActionSheetPrimaryActions(guild) {
  guild = guild.guild;
  let obj = guild(13961);
  let obj1 = guild(504);
  const items = [GuildRoleStore];
  const items1 = [];
  const stateFromStores = obj1.useStateFromStores(items, () => ConnectionsUtils.isVerifiedRolesChannelVisible(GuildRoleStore.getSortedRoles(guild.id)));
  if (obj.useGuildActionSheetPermissions(guild).canManageChannels) {
    obj = { label: null, onPress: null };
    const intl = tmp(1114).intl;
    obj.label = intl.string(tmp(1114).t["fUYU+j"]);
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      CreateChannelModalActionCreatorsDefault.open(null, guild.id, null, null);
    };
    items1.push(closure_21(tmp(7200).ActionSheetRow, obj));
    obj = { label: null, onPress: null };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(tmp(1114).t["ISN+NM"]);
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      CreateChannelModalActionCreatorsDefault.open(constants.GUILD_CATEGORY, guild.id, null, null);
    };
    items1.push(closure_21(tmp(7200).ActionSheetRow, obj));
  }
  if (tmp3) {
    obj1 = { label: null, onPress: null };
    const intl3 = tmp(1114).intl;
    obj1.label = intl3.string(tmp(1114).t["60lJ0C"]);
    obj1.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, {});
    };
    items1.push(closure_21(tmp(7200).ActionSheetRow, obj1));
  }
  if (stateFromStores) {
    const obj2 = { label: null, onPress: null };
    const intl4 = tmp(1114).intl;
    obj2.label = intl4.string(tmp(1114).t.ghtnss);
    obj2.onPress = function onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      obj = {
        guildId: guild.id,
        onClose() {

        }
      };
      const result = GuildRoleConnectionsModalActionCreators.openGuildRoleConnectionsModal(obj);
    };
    items1.push(closure_21(tmp(7200).ActionSheetRow, obj2));
  }
  let tmp12 = null;
  if (0 !== items1.length) {
    const obj3 = { hasIcons: false, children: items1.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
    tmp12 = closure_21(tmp(7200).ActionSheetRow.Group, obj3);
  }
  return tmp12;
};
export const handleLeaveServer = function handleLeaveServer(guild) {
  let obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const lazyResult = noop.lazy(() => guild(paths[28])(paths[57], paths.paths));
  obj = { guild };
  useAlertStore.openAlert("guild-action-sheet-leave-server", __initData(lazyResult, obj));
};
export const GuildActionSheetDirectoryActions = function GuildActionSheetDirectoryActions(guild) {
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  _modDef38(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
  const items = [];
  items.push(closure_21(NotificationAction, { guild }));
  items.push(closure_21(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(closure_21(RestrictedGuildPrivacyOption, { guild }));
  let obj = guild(13909);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (tmp4) {
    let tmp5Result = null;
    if (0 !== items.length) {
      obj = { hasIcons: false, children: items.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
      tmp5Result = closure_21(tmp9(7200).ActionSheetRow.Group, obj);
    }
    return tmp5Result;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants2.HUB);
    const intl = tmp9(1114).intl;
    const string = intl.string;
    let t = tmp9(1114).t;
    if (hasItem) {
      let stringResult = string(t.Dv8gFT);
    } else {
      stringResult = string(t.J2TBi3);
    }
    obj = {
      label: stringResult,
      variant: "danger",
      onPress() {
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const lazyResult = noop.lazy(() => guild(paths[28])(paths[57], paths.paths));
          obj = { guild };
          useAlertStore.openAlert("guild-action-sheet-leave-server", __initData(lazyResult, obj));
        }
    };
    t = items.push(closure_21(tmp9(7200).ActionSheetRow, obj));
  }
  tmp4 = closure_7(guild, currentUser);
};
export const GuildActionSheetSecondaryActions = function GuildActionSheetSecondaryActions(guild) {
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  const tmp2 = closure_7(guild, currentUser);
  let obj = guild(10099);
  const canReportRaid = obj.useCanReportRaid(guild);
  let obj1 = guild(10098);
  const guildIncidentsState = obj1.useGuildIncidentsState(guild.id);
  const items = [];
  ({ shouldShowIncidentActions, isUnderLockdown } = guildIncidentsState);
  let obj2 = guild(7535);
  const optInEnabledForGuild = obj2.useOptInEnabledForGuild(guild.id);
  items.push(closure_21(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(closure_21(GuildThemePreferenceOption, { guild }));
  items.push(closure_21(ServerTagOption, { guild }));
  const features = guild.features;
  if (features.has(constants2.COMMUNITY)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = tmp3(1114).intl;
    obj.label = intl.string(tmp3(1114).t.FB2ZZV);
    obj.value = !optInEnabledForGuild;
    obj.onValueChange = function onValueChange() {
      return OptInOnboardingUtils.toggleShowAllChannels(guild.id);
    };
    items.push(closure_21(tmp3(7200).ActionSheetSwitchRow, obj));
  }
  items.push(closure_21(HideMutedChannelsOption, { guild }));
  items.push(closure_21(RestrictedGuildPrivacyOption, { guild }));
  const messageRequestPrivacyOption = guild(13909).useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (canReportRaid) {
    obj = { label: null, onPress: null };
    const intl2 = tmp3(1114).intl;
    obj.label = intl2.string(tmp3(1114).t.cswId3);
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildAntiRaidModalActionCreators.openReportRaidModal(guild.id);
    };
    items.push(closure_21(tmp3(7200).ActionSheetRow, obj));
  }
  if (!tmp2) {
    obj1 = { label: null, onPress: null };
    const intl3 = tmp3(1114).intl;
    obj1.label = intl3.string(tmp3(1114).t.Aen9eh);
    obj1.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = ReportModals.showReportModalForGuild(guild);
    };
    items.push(closure_21(tmp3(7200).ActionSheetRow, obj1));
  }
  if (!shouldShowIncidentActions) {
    if (tmp2) {
      let tmp8Result = null;
      if (0 !== items.length) {
        obj2 = { hasIcons: false, children: items.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
        tmp8Result = closure_21(tmp3(7200).ActionSheetRow.Group, obj2);
      }
      return tmp8Result;
    } else {
      const features2 = guild.features;
      const hasItem = features2.has(constants2.HUB);
      const intl5 = tmp3(1114).intl;
      const string2 = intl5.string;
      let t2 = tmp3(1114).t;
      if (hasItem) {
        let string2Result = string2(t2.Dv8gFT);
      } else {
        string2Result = string2(t2.J2TBi3);
      }
      const obj3 = {
        label: string2Result,
        variant: "danger",
        onPress() {
              let obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const lazyResult = noop.lazy(() => guild(paths[28])(paths[57], paths.paths));
              obj = { guild };
              useAlertStore.openAlert("guild-action-sheet-leave-server", __initData(lazyResult, obj));
            }
      };
      t2 = items.push(closure_21(tmp3(7200).ActionSheetRow, obj3));
    }
  } else {
    const intl4 = tmp3(1114).intl;
    const string = intl4.string;
    let t = tmp3(1114).t;
    if (isUnderLockdown) {
      let stringResult = string(t["+tSVi3"]);
    } else {
      stringResult = string(t.EPlEdu);
    }
    const obj4 = {
      label: stringResult,
      variant: "danger",
      onPress() {
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          obj = { source: GuildAntiRaidTypes.GuildIncidentActionSources.GUILD_PROFILE };
          obj = { guild, analyticsData: obj };
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11829, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj);
        }
    };
    t = items.push(closure_21(tmp3(7200).ActionSheetRow, obj4));
  }
  const tmp3Result = guild(13909);
};
export const GuildDeveloperOptionAction = function GuildDeveloperOptionAction(guild) {
  guild = guild.guild;
  const DeveloperMode = guild(1935).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  TidaWebformExperimentDefault;
  if (setting) {
    const items = [];
    let obj = { label: null, onPress: null };
    const intl = tmp(1114).intl;
    obj.label = intl.string(tmp(1114).t["94lLD7"]);
    obj.onPress = function onPress() {
      ClipboardUtils.copy(guild.id);
      ToastUtils.presentIdCopied();
    };
    items.push(closure_21(tmp(7200).ActionSheetRow, obj));
    if (tmp5) {
      if (null != guild.icon) {
        obj = { label: null, onPress: null };
        const intl2 = tmp(1114).intl;
        obj.label = intl2.string(tmp(1114).t["7H30wR"]);
        obj.onPress = function onPress() {
          const tmp = React6(guild, closure_2_17, true);
          if (null != tmp) {
            ClipboardUtils.copy(tmp);
            ToastUtils.presentLinkCopied();
          }
        };
        items.push(closure_21(tmp(7200).ActionSheetRow, obj));
      }
      if (null != guild.banner) {
        obj = { label: null, onPress: null };
        const intl3 = tmp(1114).intl;
        obj.label = intl3.string(tmp(1114).t["2FoUnk"]);
        obj.onPress = function onPress() {
          const obj = { id: guild.id, banner: guild.banner };
          const guildBannerURL = obj.getGuildBannerURL(obj, true);
          if (null != guildBannerURL) {
            ClipboardUtils.copy(guildBannerURL);
            ToastUtils.presentLinkCopied();
          }
        };
        items.push(closure_21(tmp(7200).ActionSheetRow, obj));
      }
    }
    const obj1 = { hasIcons: false, title: null, children: null };
    const intl4 = tmp(1114).intl;
    obj1.title = intl4.string(tmp(1114).t.ObIb1Q);
    obj1.children = items.map((children, index) => closure_1_21(React.Fragment, { children }, index));
    return closure_21(tmp(7200).ActionSheetRow.Group, obj1);
  } else {
    return null;
  }
};