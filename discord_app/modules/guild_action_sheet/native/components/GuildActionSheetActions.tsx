// === Module 13370: HideMutedChannelsOption ===

// Module 13370 (HideMutedChannelsOption)
import _modDef38 from "module_38" /* 38 */;
import ThemesDefault from "Themes" /* 712 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import useAlertStore from "useAlertStore" /* 4657 */;
import getNicknameDefault from "getNickname" /* 4796 */;
import _modDef5260 from "module_5260" /* 5260 */;
import _modDef6798 from "module_6798" /* 6798 */;
import contextDefault from "context" /* 7139 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import experimentDefault from "experiment" /* 7166 */;
import useGuildOnboardingAvailableDefault from "useGuildOnboardingAvailable" /* 7296 */;
import _modDef8849 from "module_8849" /* 8849 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 9536 */;
import DiscordTagDefault from "DiscordTag" /* 9966 */;
import _modDef10007 from "module_10007" /* 10007 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import guildHasCommunity from "guildHasCommunity" /* 5276 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1434 */;
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel" /* 5383 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { CHANNELS_AND_ROLES_MODAL_KEY as closure_18 } from "GUILD_ONBOARDING_MODAL_KEY" /* 6785 */;
import { GuildTagBadgeSize } from "items" /* 8168 */;
import { ReadStateTypes } from "ReadStateTypes" /* 5044 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function HideMutedChannelsOption(guild) {
  guild = guild.guild;
  let obj = guild(589);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_12.isGuildCollapsed(guild.id));
  obj = { label: null, value: null, onValueChange: null };
  const intl = guild(1236).intl;
  obj[0] = intl.string(guild(1236).t.UwOLJO);
  obj[1] = stateFromStores;
  obj[2] = function onValueChange() {
    return _modDef10007.toggleCollapseGuild(guild.id);
  };
  return callback2(guild(7177).ActionSheetSwitchRow, obj);
}
function BrowseChannelsOption(guild) {
  guild = guild.guild;
  let obj = guild(4196);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(1377).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  const tmp2 = useGuildOnboardingAvailableDefault(guild);
  const items = [closure_11];
  const stateFromStores = guild(589).useStateFromStores(items, () => closure_1_11.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION));
  const obj2 = guild(589);
  const items1 = [closure_5];
  const items2 = [guild.id];
  const stateFromStores1 = guild(589).useStateFromStores(items1, () => closure_1_5.getNewChannelIds(guild.id).size > guild(dependencyMap[24]).MAX_NEW_CHANNELS_TO_SHOW);
  const features = guild.features;
  const callback = React.useCallback(() => {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj.hideActionSheet();
    obj = { guildId: guild.id };
    _modDef5260.pushLazy(guild(dependencyMap[28])(dependencyMap[27], dependencyMap.paths), obj, closure_1_18);
  }, items2);
  if (!features.has(constants.COMMUNITY)) {
    return null;
  } else {
    if (result) {
      if (!stateFromStores) {
        let tmp8Result = null;
      }
      obj = { trailing: null, onPress: null, label: null };
      obj[0] = tmp8Result;
      obj[1] = callback;
      const intl = tmp3(1236).intl;
      const string = intl.string;
      let h9mGOP = tmp3(1236).t;
      if (tmp2) {
        h9mGOP = h9mGOP.h9mGOP;
        let stringResult = string(h9mGOP);
      } else {
        stringResult = string(h9mGOP.et6wav);
      }
      obj[2] = stringResult;
      tmp8Result = callback(tmp9, obj);
    }
    tmp8Result = callback(tmp3(11458).NewBadge, {});
  }
  const obj3 = guild(589);
}
function ChangeIdentityOption(arg0) {
  ({ guild, user } = arg0);
  const tmp = callback4();
  let obj = getNicknameDefault;
  const nickname = obj.getNickname(guild.id, undefined, user);
  const _require = useOpenProfileSettingsDefault({ guild, analyticsLocations: contextDefault(QUICK_SWITCHERDefault.GUILD_SETTINGS).analyticsLocations });
  const intl = _require(1236).intl;
  const features = guild.features;
  const hasItem = features.has(constants.HUB);
  const t = _require(1236).t;
  obj = { label: intl.string(hasItem ? t["+MWrWt"] : t["PKQB/H"]), subLabel: null, onPress: null };
  let tmp9 = nickname;
  if (null != user) {
    tmp9 = nickname;
    if (user.hasAvatarForGuild(guild.id)) {
      obj = { style: null, children: null };
      obj[0] = tmp.identitySublabel;
      obj1 = { size: null, style: null, user: null, guildId: null };
      obj1[0] = tmp7(1297).AvatarSizes.SIZE_16;
      obj1[1] = tmp.guildServerAvatar;
      obj1[2] = user;
      obj1[3] = guild.id;
      const items = [callback(tmp7(1297).Avatar, obj1), ];
      const obj2 = { user: null, nick: null, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
      obj2[0] = user;
      obj2[1] = nickname;
      ({ identityName: obj5[2], identityName: obj5[3], identityName: obj5[4] } = tmp);
      items[1] = callback(DiscordTagDefault, obj2);
      obj[1] = items;
      tmp9 = callback3(View, obj);
    }
  }
  obj[1] = tmp9;
  obj[2] = function onPress() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    callback();
  };
  return callback(_require(7177).ActionSheetRow, obj);
}
function GuildThemePreferenceOption(guild) {
  guild = guild.guild;
  let obj = guild(589);
  const items = [closure_6];
  const items1 = [guild.id];
  [][0] = guild.id;
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.resolveGuildThemeSourcePreference(guild.id), items1);
  let tmp6 = null;
  if (tmp2) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = tmp3(1236).intl;
    obj[0] = intl.string(tmp3(1236).t.CFzDOG);
    obj[1] = stateFromStores === tmp3(1306).GuildThemeSourcePreference.GUILD;
    obj[2] = tmp5;
    tmp6 = callback2(tmp3(7177).ActionSheetSwitchRow, obj);
  }
  return tmp6;
}
function ServerTagOption(guild) {
  guild = guild.guild;
  let obj = guild(8877);
  [][0] = guild.id;
  const result = obj.canViewMobileServerTag(guild.id);
  if (result) {
    const profile = guild.profile;
    let badge;
    if (profile != null) {
      badge = profile.badge;
    }
    const guildTagBadgeUrl = tmp2(8375).getGuildTagBadgeUrl(guild.id, badge, GuildTagBadgeSize.SIZE_16);
    obj = { style: null, children: null };
    obj[0] = tmp.serverTagLabel;
    const profile2 = guild.profile;
    let tag;
    if (profile2 != null) {
      tag = profile2.tag;
    }
    obj = { label: null, onPress: null };
    obj1 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    let obj2 = { guildTag: null, guildBadge: null, badgeSize: null };
    obj2[0] = tag;
    obj2[1] = guildTagBadgeUrl;
    obj2[2] = GuildTagBadgeSize.SIZE_16;
    obj1[2] = callback(tmp2(9509).BaseGuildTagChiplet, obj2);
    const items = [callback(View, obj1), ];
    const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1236).intl;
    obj3[2] = intl.string(tmp2(1236).t["2QmKZ2"]);
    items[1] = callback(tmp2(4734).Text, obj3);
    obj[1] = items;
    obj[0] = callback2(View, obj);
    obj[1] = tmp5;
    return callback(tmp2(7177).ActionSheetRow, obj);
  } else {
    return null;
  }
  tmp = callback4();
}
class RestrictedGuildPrivacyOption {
  constructor(arg0) {
    guild = global.guild;
    RestrictedGuildIds = require("explicitContentFromProto").RestrictedGuildIds;
    setting = RestrictedGuildIds.useSetting();
    hasItem = setting.includes(guild.id);
    tmp2 = jsx;
    obj = { label: null, subLabel: null, value: null, onValueChange: null };
    intl = require("getSystemLocale").intl;
    obj[0] = intl.string(require("getSystemLocale").t.KXNTgb);
    features = guild.features;
    hasItem1 = features.has(GuildFeatures.HUB);
    intl2 = require("getSystemLocale").intl;
    string = intl2.string;
    t = require("getSystemLocale").t;
    if (hasItem1) {
      stringResult = string(t["2YwzGs"]);
    } else {
      stringResult = string(t.jMFSQV);
    }
    obj[1] = stringResult;
    obj[2] = !hasItem;
    obj[3] = function onValueChange(arg0) {
      const sanitizedRestrictedGuilds = guild(dependencyMap[45]).getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(guild.id);
      } else {
        sanitizedRestrictedGuilds.add(guild.id);
      }
      const RestrictedGuildIds = guild(dependencyMap[44]).RestrictedGuildIds;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      const obj = guild(dependencyMap[45]);
    };
    return tmp2(require("ActionSheetRowIcon").ActionSheetSwitchRow, obj);
  }
}
class NotificationAction {
  constructor(arg0) {
    guild = global.guild;
    obj = { label: null, onPress: null };
    intl = require("getSystemLocale").intl;
    obj[0] = intl.string(require("getSystemLocale").t.HcoRu0);
    obj[1] = function onPress() {
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      _modDef6798.open(guild.id);
    };
    return jsx(require("ActionSheetRowIcon").ActionSheetRow, obj);
  }
}
({ isGuildOwner: error, getGuildIconURL: closure_8 } = GuildNSFWContentLevel);
({ ChannelTypes: closure_14, GuildFeatures: closure_15, AnalyticsSections: closure_16, AVATAR_MAX_SIZE: closure_17, Fonts } = ME);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row" };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", columnGap: ThemesDefault.space.PX_8 };
let closure_23 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx");

export { RestrictedGuildPrivacyOption };
export { NotificationAction };
export const GuildUnreadAction = function GuildUnreadAction(guild) {
  guild = guild.guild;
  let stateFromStores1;
  let obj = guild(stateFromStores1[17]);
  let items = [closure_9];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getGuildHasUnreadIgnoreMuted(guild.id), items1);
  obj1 = guild(stateFromStores1[47]);
  const shouldUseNewNotificationSystem = obj1.useShouldUseNewNotificationSystem("GuildUnreadAction");
  const items2 = [guild.id];
  closure_1 = React.useCallback(() => {
    const result = callback(stateFromStores1[46]).updateGuildNotificationSettings(guild.id, { muted: false }, guild(stateFromStores1[48]).NotificationLabels.Unmuted);
  }, items2);
  const items3 = [closure_12];
  stateFromStores1 = guild(stateFromStores1[17]).useStateFromStores(items3, () => closure_1_12.isMuted(guild.id));
  obj = { label: null, onPress: null, disabled: null };
  const intl = guild(stateFromStores1[19]).intl;
  obj[0] = intl.string(guild(stateFromStores1[19]).t.e6RscS);
  obj[1] = function onPress() {
    callback(stateFromStores1[25]).hideActionSheet();
    const items = [guild.id];
    callback(stateFromStores1[49])(items, closure_1_16.GUILD_POPOUT);
  };
  obj[2] = !stateFromStores;
  const items4 = [callback2(guild(stateFromStores1[18]).ActionSheetRow, obj), , ];
  if (!shouldUseNewNotificationSystem) {
    items4[1] = shouldUseNewNotificationSystem;
    const features = guild.features;
    let tmp7Result = null;
    if (features.has(constants.COMMUNITY)) {
      obj = { guild: null };
      obj[0] = guild;
      tmp7Result = callback2(BrowseChannelsOption, obj);
    }
    obj1 = { hasIcons: false, children: null };
    items4[2] = tmp7Result;
    obj1[1] = items4;
    return callback2(guild(stateFromStores1[18]).ActionSheetRow.Group, obj1);
  } else {
    const intl2 = tmp(tmp2[19]).intl;
    const string = intl2.string;
    let t = tmp(tmp2[19]).t;
    if (stateFromStores1) {
      let stringResult = string(t.De0BTC);
    } else {
      stringResult = string(t.vRzp7P);
    }
    t = { label: null, onPress: null };
    t[0] = stringResult;
    t[1] = function onPress() {
      if (stateFromStores1) {
        callback();
      } else {
        let obj = callback(stateFromStores1[25]);
        obj.hideActionSheet();
        const _HermesInternal = HermesInternal;
        const obj2 = callback(stateFromStores1[25]);
        obj = { guildId: null };
        obj[0] = guild.id;
        obj2.openLazy(guild(stateFromStores1[28])(stateFromStores1[50], stateFromStores1.paths), "muteSettings" + guild.id, obj);
        const tmp5 = guild(stateFromStores1[28])(stateFromStores1[50], stateFromStores1.paths);
      }
    };
    tmp7Result = callback2(tmp(tmp2[18]).ActionSheetRow, t);
  }
  const obj3 = guild(stateFromStores1[17]);
};
export const GuildActionSheetPrimaryActions = function GuildActionSheetPrimaryActions(guild) {
  guild = guild.guild;
  let obj = guild(13421);
  obj1 = guild(589);
  const items = [closure_10];
  const items1 = [];
  const stateFromStores = obj1.useStateFromStores(items, () => guild(dependencyMap[53]).isVerifiedRolesChannelVisible(closure_1_10.getSortedRoles(guild.id)));
  if (obj.useGuildActionSheetPermissions(guild).canManageChannels) {
    obj = { label: null, onPress: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t["fUYU+j"]);
    obj[1] = function onPress() {
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      _modDef8849.open(null, guild.id, null, null);
    };
    items1.push(callback2(tmp(7177).ActionSheetRow, obj));
    obj = { label: null, onPress: null };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t["ISN+NM"]);
    obj[1] = function onPress() {
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      _modDef8849.open(closure_1_14.GUILD_CATEGORY, guild.id, null, null);
    };
    items1.push(callback2(tmp(7177).ActionSheetRow, obj));
  }
  if (tmp3) {
    obj1 = { label: null, onPress: null };
    const intl3 = tmp(1236).intl;
    obj1[0] = intl3.string(tmp(1236).t["60lJ0C"]);
    obj1[1] = function onPress() {
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      const result = guild(dependencyMap[55]).openCreateOrEditGuildEventModal(guild, {});
    };
    items1.push(callback2(tmp(7177).ActionSheetRow, obj1));
  }
  if (stateFromStores) {
    const obj2 = { label: null, onPress: null };
    const intl4 = tmp(1236).intl;
    obj2[0] = intl4.string(tmp(1236).t.ghtnss);
    obj2[1] = function onPress() {
      let obj = ACTION_SHEET_HEIGHT_HALFDefault;
      obj.hideActionSheet();
      obj = {
        guildId: guild.id,
        onClose() {

        }
      };
      const result = guild(dependencyMap[56]).openGuildRoleConnectionsModal(obj);
    };
    items1.push(callback2(tmp(7177).ActionSheetRow, obj2));
  }
  let tmp12 = null;
  if (0 !== items1.length) {
    const obj3 = { hasIcons: false, children: null };
    obj3[1] = items1.map((item, index) => callback(React.Fragment, { children: item }, index));
    tmp12 = callback2(tmp(7177).ActionSheetRow.Group, obj3);
  }
  return tmp12;
};
export const handleLeaveServer = function handleLeaveServer(guild) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  const lazyResult = React.lazy(() => callback(paths[28])(paths[57], paths.paths));
  obj = { guild };
  useAlertStore.openAlert("guild-action-sheet-leave-server", callback2(lazyResult, obj));
};
export const GuildActionSheetDirectoryActions = function GuildActionSheetDirectoryActions(guild) {
  guild = guild.guild;
  const currentUser = authStore.getCurrentUser();
  _modDef38(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
  const items = [];
  items.push(callback2(NotificationAction, { guild }));
  items.push(callback2(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(callback2(RestrictedGuildPrivacyOption, { guild }));
  let obj = guild(13369);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (tmp4) {
    let tmp5Result = null;
    if (0 !== items.length) {
      obj = { hasIcons: false, children: null };
      obj[1] = items.map((item, index) => callback(React.Fragment, { children: item }, index));
      tmp5Result = callback2(tmp9(7177).ActionSheetRow.Group, obj);
    }
    return tmp5Result;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants.HUB);
    const intl = tmp9(1236).intl;
    const string = intl.string;
    let t = tmp9(1236).t;
    if (hasItem) {
      let stringResult = string(t.Dv8gFT);
    } else {
      stringResult = string(t.J2TBi3);
    }
    obj = { label: null, variant: "danger", onPress: null };
    obj[0] = stringResult;
    obj[2] = function onPress() {
      let obj = ACTION_SHEET_HEIGHT_HALFDefault;
      obj.hideActionSheet();
      const lazyResult = closure_1_3.lazy(() => callback(paths[28])(paths[57], paths.paths));
      obj = { guild };
      guild(dependencyMap[58]).openAlert("guild-action-sheet-leave-server", closure_1_21(lazyResult, obj));
    };
    t = items.push(callback2(tmp9(7177).ActionSheetRow, obj));
  }
  tmp4 = callback(guild, currentUser);
};
export const GuildActionSheetSecondaryActions = function GuildActionSheetSecondaryActions(guild) {
  guild = guild.guild;
  const currentUser = authStore.getCurrentUser();
  let obj = guild(10034);
  const canReportRaid = obj.useCanReportRaid(guild);
  obj1 = guild(10033);
  const guildIncidentsState = obj1.useGuildIncidentsState(guild.id);
  const items = [];
  ({ shouldShowIncidentActions, isUnderLockdown } = guildIncidentsState);
  let obj2 = guild(5282);
  const optInEnabledForGuild = obj2.useOptInEnabledForGuild(guild.id);
  items.push(callback2(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(callback2(GuildThemePreferenceOption, { guild }));
  items.push(callback2(ServerTagOption, { guild }));
  const features = guild.features;
  if (features.has(constants.COMMUNITY)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = tmp3(1236).intl;
    obj[0] = intl.string(tmp3(1236).t.FB2ZZV);
    obj[1] = !optInEnabledForGuild;
    obj[2] = function onValueChange() {
      return guild(dependencyMap[64]).toggleShowAllChannels(guild.id);
    };
    items.push(callback2(tmp3(7177).ActionSheetSwitchRow, obj));
  }
  items.push(callback2(HideMutedChannelsOption, { guild }));
  items.push(callback2(RestrictedGuildPrivacyOption, { guild }));
  const tmp2 = callback(guild, currentUser);
  const messageRequestPrivacyOption = guild(13369).useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (canReportRaid) {
    obj = { label: null, onPress: null };
    const intl2 = tmp3(1236).intl;
    obj[0] = intl2.string(tmp3(1236).t.cswId3);
    obj[1] = function onPress() {
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      guild(dependencyMap[65]).openReportRaidModal(guild.id);
    };
    items.push(callback2(tmp3(7177).ActionSheetRow, obj));
  }
  obj1 = { label: null, onPress: null };
  const intl3 = tmp3(1236).intl;
  obj1[0] = intl3.string(guild(1236).t.Aen9eh);
  obj1[1] = function onPress() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const result = guild(dependencyMap[66]).showReportModalForGuild(guild);
  };
  items.push(callback2(guild(7177).ActionSheetRow, obj1));
  if (!shouldShowIncidentActions) {
    if (tmp2) {
      let tmp8Result = null;
      if (0 !== items.length) {
        obj2 = { hasIcons: false, children: null };
        obj2[1] = items.map((item, index) => callback(React.Fragment, { children: item }, index));
        tmp8Result = callback2(tmp3(7177).ActionSheetRow.Group, obj2);
      }
      return tmp8Result;
    } else {
      const features2 = guild.features;
      const hasItem = features2.has(constants.HUB);
      const intl5 = tmp3(1236).intl;
      const string2 = intl5.string;
      let t2 = tmp3(1236).t;
      if (hasItem) {
        let string2Result = string2(t2.Dv8gFT);
      } else {
        string2Result = string2(t2.J2TBi3);
      }
      const obj3 = { label: null, variant: "danger", onPress: null };
      obj3[0] = string2Result;
      obj3[2] = function onPress() {
        let obj = ACTION_SHEET_HEIGHT_HALFDefault;
        obj.hideActionSheet();
        const lazyResult = closure_1_3.lazy(() => callback(paths[28])(paths[57], paths.paths));
        obj = { guild };
        guild(dependencyMap[58]).openAlert("guild-action-sheet-leave-server", closure_1_21(lazyResult, obj));
      };
      t2 = items.push(callback2(tmp3(7177).ActionSheetRow, obj3));
    }
  } else {
    const intl4 = tmp3(1236).intl;
    const string = intl4.string;
    let t = tmp3(1236).t;
    if (isUnderLockdown) {
      let stringResult = string(t["+tSVi3"]);
    } else {
      stringResult = string(t.EPlEdu);
    }
    const obj4 = { label: null, variant: "danger", onPress: null };
    obj4[0] = stringResult;
    obj4[2] = function onPress() {
      let obj = ACTION_SHEET_HEIGHT_HALFDefault;
      obj.hideActionSheet();
      obj = { source: guild(dependencyMap[67]).GuildIncidentActionSources.GUILD_PROFILE };
      obj = { guild, analyticsData: obj };
      ACTION_SHEET_HEIGHT_HALFDefault.openLazy(guild(dependencyMap[28])(dependencyMap[68], dependencyMap.paths), "GuildIncidentActionsActionSheet", obj);
    };
    t = items.push(callback2(tmp3(7177).ActionSheetRow, obj4));
  }
  const tmp3Result = guild(13369);
};
export const GuildDeveloperOptionAction = function GuildDeveloperOptionAction(guild) {
  guild = guild.guild;
  const DeveloperMode = guild(4066).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  experimentDefault;
  if (setting) {
    const items = [];
    let obj = { label: null, onPress: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t["94lLD7"]);
    obj[1] = function onPress() {
      guild(dependencyMap[70]).copy(guild.id);
      const obj = guild(dependencyMap[70]);
      guild(dependencyMap[71]).presentIdCopied();
    };
    items.push(callback2(tmp(7177).ActionSheetRow, obj));
    if (tmp5) {
      if (null != guild.icon) {
        obj = { label: null, onPress: null };
        const intl2 = tmp(1236).intl;
        obj[0] = intl2.string(tmp(1236).t["7H30wR"]);
        obj[1] = function onPress() {
          const tmp = closure_1_8(guild, closure_1_17, true);
          if (null != tmp) {
            guild(dependencyMap[70]).copy(tmp);
            const obj = guild(dependencyMap[70]);
            guild(dependencyMap[71]).presentLinkCopied();
            const obj2 = guild(dependencyMap[71]);
          }
        };
        items.push(callback2(tmp(7177).ActionSheetRow, obj));
      }
      if (null != guild.banner) {
        obj = { label: null, onPress: null };
        const intl3 = tmp(1236).intl;
        obj[0] = intl3.string(tmp(1236).t["2FoUnk"]);
        obj[1] = function onPress() {
          const obj = { id: guild.id, banner: guild.banner };
          const guildBannerURL = obj.getGuildBannerURL(obj, true);
          if (null != guildBannerURL) {
            guild(dependencyMap[70]).copy(guildBannerURL);
            const obj3 = guild(dependencyMap[70]);
            guild(dependencyMap[71]).presentLinkCopied();
            const obj4 = guild(dependencyMap[71]);
          }
        };
        items.push(callback2(tmp(7177).ActionSheetRow, obj));
      }
    }
    obj1 = { hasIcons: false, title: null, children: null };
    const intl4 = tmp(1236).intl;
    obj1[1] = intl4.string(tmp(1236).t.ObIb1Q);
    obj1[2] = items.map((item, index) => callback(React.Fragment, { children: item }, index));
    return callback2(tmp(7177).ActionSheetRow.Group, obj1);
  } else {
    return null;
  }
};