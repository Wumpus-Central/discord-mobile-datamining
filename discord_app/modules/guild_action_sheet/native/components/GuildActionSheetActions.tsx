// === Module 13723: GuildActionSheetActions ===

// Module 13723 (GuildActionSheetActions)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 587 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import UserSettings from "UserSettings" /* 2028 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2033 */;
import _modDef2391 from "module_2391" /* 2391 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6491 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import ConnectionsUtils from "ConnectionsUtils" /* 6678 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import TidaWebformExperimentDefault from "TidaWebformExperiment" /* 6687 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import useGuildOnboardingAvailableDefault from "useGuildOnboardingAvailable" /* 6838 */;
import ChannelListState from "ChannelListState" /* 7039 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 7687 */;
import ReportModals from "ReportModals" /* 8279 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9171 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9174 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9214 */;
import DiscordTagDefault from "DiscordTag" /* 9296 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 9416 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 10700 */;
import OptInOnboardingUtils from "OptInOnboardingUtils" /* 11172 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11186 */;
import useIsServerThemeAvailableForGuildDefault from "useIsServerThemeAvailableForGuild" /* 13724 */;
import markGuildsAsReadDefault from "markGuildsAsRead" /* 13773 */;
import GuildAntiRaidModalActionCreators from "GuildAntiRaidModalActionCreators" /* 13779 */;
import noop from "module_19" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7043 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7121 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function BrowseChannelsOption(guild) {
  guild = guild.guild;
  const tmp2 = useGuildOnboardingAvailableDefault(guild);
  const result = guild(4698).useIsDismissibleContentDismissed_UNSAFE(guild(2036).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  let obj = guild(4698);
  const items = [ReadStateStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION));
  const obj2 = guild(504);
  const items1 = [NewChannelsStore];
  const items2 = [guild.id];
  const stateFromStores1 = guild(504).useStateFromStores(items1, () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW);
  const features = guild.features;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11166, dependencyMap.paths), { guildId: guild.id }, closure_18);
  }, items2);
  if (!features.has(constants2.COMMUNITY)) {
    return null;
  } else {
    if (result) {
      if (!stateFromStores) {
        let tmp8Result2 = null;
      }
      const obj4 = { trailing: tmp8Result2, onPress: callback, label: null };
      const intl = tmp3(1126).intl;
      const string = intl.string;
      let h9mGOP = tmp3(1126).t;
      if (tmp2) {
        h9mGOP = h9mGOP.h9mGOP;
        let stringResult = string(h9mGOP);
      } else {
        stringResult = string(h9mGOP.et6wav);
      }
      obj4.label = stringResult;
      closure_21(tmp9, obj4);
    }
    tmp8Result2 = closure_21(tmp3(11919).NewBadge, {});
  }
  const obj3 = guild(504);
}
function ServerTagOption(guild) {
  guild = guild.guild;
  const tmp = closure_23();
  [][0] = guild.id;
  const result = guild(9250).canViewMobileServerTag(guild.id);
  if (result) {
    const profile = guild.profile;
    let badge;
    if (profile != null) {
      badge = profile.badge;
    }
    const guildTagBadgeUrl = tmp2(7836).getGuildTagBadgeUrl(guild.id, badge, GuildTagBadgeSize.SIZE_16);
    let obj2 = { style: tmp.serverTagLabel, children: null };
    const profile2 = guild.profile;
    let tag;
    if (profile2 != null) {
      tag = profile2.tag;
    }
    const obj3 = { label: null, onPress: null };
    const obj4 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj5 = { guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: GuildTagBadgeSize.SIZE_16 };
    obj4.children = closure_21(tmp2(9395).BaseGuildTagChiplet, obj5);
    const items = [closure_21(View, obj4), ];
    const obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1126).intl;
    obj6.children = intl.string(tmp2(1126).t["2QmKZ2"]);
    items[1] = closure_21(tmp2(4886).Text, obj6);
    obj2.children = items;
    obj3.label = closure_22(View, obj2);
    obj3.onPress = tmp5;
    return closure_21(tmp2(6697).ActionSheetRow, obj3);
  } else {
    return null;
  }
  let obj = guild(9250);
}
const View = fn(17).View;
const GuildRecord = fn(2070);
({ isGuildOwner: closure_7, getGuildIconURL: closure_8 } = GuildRecord);
const Constants = fn(1085);
({ ChannelTypes: closure_14, GuildFeatures: closure_15, AnalyticsSections: closure_16, AVATAR_MAX_SIZE: closure_17, Fonts } = Constants);
let closure_18 = fn(6592).CHANNELS_AND_ROLES_MODAL_KEY;
const GuildTagBadgeSize = fn(7603).GuildTagBadgeSize;
const ReadStateTypes = fn(5072).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { guildServerAvatar: { marginRight: 4 }, identityName: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 }, identitySublabel: { flexDirection: "row" }, serverTagLabel: null };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
obj2.serverTagLabel = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
let closure_23 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(9);
  guild = guild.guild;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function n() {
      return UserGuildSettingsStore.isGuildCollapsed(guild.id);
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guild(576);
  const stateFromStores = guild(504).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.UwOLJO);
    cResult[3] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guild.id) {
    const fn2 = function u() {
      return ChannelCollapseActionCreatorsDefault.toggleCollapseGuild(guild.id);
    };
    cResult[4] = guild.id;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === tmp10) {
      let tmp11 = cResult[8];
    }
    return tmp11;
  }
  const tmp12 = closure_21(guild(6697).ActionSheetSwitchRow, { label: tmp8, value: stateFromStores, onValueChange: tmp10 });
  cResult[6] = stateFromStores;
  cResult[7] = tmp10;
  cResult[8] = tmp12;
  tmp11 = tmp12;
  const tmpResult = guild(504);
}) : ((guild) => {
  guild = guild.guild;
  const items = [UserGuildSettingsStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => UserGuildSettingsStore.isGuildCollapsed(guild.id));
  const obj2 = { label: null, value: null, onValueChange: null };
  const intl = guild(1126).intl;
  obj2.label = intl.string(guild(1126).t.UwOLJO);
  obj2.value = stateFromStores;
  obj2.onValueChange = function onValueChange() {
    return ChannelCollapseActionCreatorsDefault.toggleCollapseGuild(guild.id);
  };
  return closure_21(guild(6697).ActionSheetSwitchRow, obj2);
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(19);
  ({ guild, user } = arg0);
  const tmp4 = closure_23();
  if (cResult[0] === guild.id) {
    if (cResult[1] === user) {
      let tmp5 = cResult[2];
    }
    const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GUILD_SETTINGS).analyticsLocations;
    if (cResult[3] === analyticsLocations) {
      if (cResult[4] === guild) {
        let tmp9 = cResult[5];
      }
      const tmp10 = useOpenProfileSettingsDefault(tmp9);
      _require = tmp10;
      if (cResult[6] !== tmp10) {
        const fn = function p() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          closure_0();
        };
        cResult[6] = tmp10;
        cResult[7] = fn;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== guild.features) {
        const intl = tmp(1126).intl;
        let features = intl.string;
        const features2 = guild.features;
        const hasItem = features2.has(constants2.HUB);
        const t = tmp(1126).t;
        const featuresResult = features(hasItem ? t["+MWrWt"] : t["PKQB/H"]);
        features = guild.features;
        cResult[8] = features;
        cResult[9] = featuresResult;
      } else {
        if (cResult[10] === guild.id) {
          if (cResult[11] === tmp5) {
            if (cResult[12] === tmp4) {
              if (cResult[13] === user) {
                let tmp17 = cResult[14];
              }
              if (cResult[15] === tmp11) {
                if (cResult[16] === tmp12) {
                  if (cResult[17] === tmp17) {
                    let tmp23 = cResult[18];
                  }
                  return tmp23;
                }
              }
              const obj3 = { label: tmp12, subLabel: tmp17, onPress: tmp11 };
              const tmp25 = closure_21(tmp(6697).ActionSheetRow, obj3);
              cResult[15] = tmp11;
              cResult[16] = tmp12;
              cResult[17] = tmp17;
              cResult[18] = tmp25;
              tmp23 = tmp25;
            }
          }
        }
        let tmp19 = tmp5;
        if (null != user) {
          tmp19 = tmp5;
          if (user.hasAvatarForGuild(guild.id)) {
            const obj4 = { style: tmp4.identitySublabel, children: null };
            const obj5 = { size: tmp(1188).AvatarSizes.SIZE_16, style: tmp4.guildServerAvatar, user, guildId: guild.id };
            const items = [closure_21(tmp(1188).Avatar, obj5), ];
            const obj7 = { user, nick: tmp5, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
            ({ identityName: obj6.usernameStyle, identityName: obj6.discriminatorStyle, identityName: obj6.nicknameStyle } = tmp4);
            items[1] = closure_21(DiscordTagDefault, obj7);
            obj4.children = items;
            tmp19 = closure_22(View, obj4);
          }
        }
        cResult[10] = guild.id;
        cResult[11] = tmp5;
        cResult[12] = tmp4;
        cResult[13] = user;
        cResult[14] = tmp19;
        tmp17 = tmp19;
      }
    }
    const obj12 = { guild, analyticsLocations };
    cResult[3] = analyticsLocations;
    cResult[4] = guild;
    cResult[5] = obj12;
    tmp9 = obj12;
  }
  const obj = require("c");
  const nickname = NicknameUtilsDefault.getNickname(guild.id, undefined, user);
  cResult[0] = guild.id;
  cResult[1] = user;
  cResult[2] = nickname;
  tmp5 = nickname;
}) : ((arg0) => {
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
      const obj4 = { size: tmp7(1188).AvatarSizes.SIZE_16, style: tmp.guildServerAvatar, user, guildId: guild.id };
      const items = [closure_21(tmp7(1188).Avatar, obj4), ];
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
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(10);
  guild = guild.guild;
  const obj = guild(576);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function n() {
      return UserSettingsProtoStore.resolveGuildThemeSourcePreference(guild.id);
    };
    const items1 = [guild.id];
    cResult[1] = guild.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmp4 = useIsServerThemeAvailableForGuildDefault(guild.id, "GuildActionSheetActions");
  const stateFromStores = guild(504).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== guild.id) {
    const fn2 = function h(arg0) {
      const GuildThemeSourcePreference = preloaded_user_settings.GuildThemeSourcePreference;
      const result = UserSettingsProtoActionCreators.setGuildThemeSourcePreferenceOverride(guild.id, arg0 ? GuildThemeSourcePreference.GUILD : GuildThemeSourcePreference.PERSONAL);
    };
    cResult[4] = guild.id;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  if (tmp4) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.CFzDOG);
      cResult[6] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[6];
    }
    const tmp14 = stateFromStores === tmp(1197).GuildThemeSourcePreference.GUILD;
    if (cResult[7] === tmp10) {
      if (cResult[8] === tmp14) {
        let tmp15 = cResult[9];
      }
      return tmp15;
    }
    const obj2 = { label: tmp12, value: tmp14, onValueChange: tmp10 };
    const tmp17 = closure_21(tmp(6697).ActionSheetSwitchRow, obj2);
    cResult[7] = tmp10;
    cResult[8] = tmp14;
    cResult[9] = tmp17;
    tmp15 = tmp17;
  } else {
    return null;
  }
  const tmpResult = guild(504);
}) : ((guild) => {
  guild = guild.guild;
  const tmp2 = useIsServerThemeAvailableForGuildDefault(guild.id, "GuildActionSheetActions");
  const items = [UserSettingsProtoStore];
  const items1 = [guild.id];
  [][0] = guild.id;
  const stateFromStores = guild(504).useStateFromStores(items, () => UserSettingsProtoStore.resolveGuildThemeSourcePreference(guild.id), items1);
  let tmp6 = null;
  if (tmp2) {
    const obj2 = { label: null, value: null, onValueChange: null };
    const intl = tmp3(1126).intl;
    obj2.label = intl.string(tmp3(1126).t.CFzDOG);
    obj2.value = stateFromStores === tmp3(1197).GuildThemeSourcePreference.GUILD;
    obj2.onValueChange = tmp5;
    tmp6 = closure_21(tmp3(6697).ActionSheetSwitchRow, obj2);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = features(576).c(12);
  features = guild.guild;
  let RestrictedGuildIds = features(2028).RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  if (cResult[0] === features.id) {
    if (cResult[1] === setting) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== features.id) {
      const fn = function s(arg0) {
        const sanitizedRestrictedGuilds = UserSettingsUtils.getSanitizedRestrictedGuilds();
        if (arg0) {
          sanitizedRestrictedGuilds.delete(features.id);
        } else {
          sanitizedRestrictedGuilds.add(features.id);
        }
        const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
        RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      };
      cResult[3] = features.id;
      cResult[4] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.KXNTgb);
      cResult[5] = stringResult;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== features.features) {
      const features2 = features.features;
      const hasItem = features2.has(constants2.HUB);
      const intl2 = tmp(1126).intl;
      const string = intl2.string;
      let t = tmp(1126).t;
      if (hasItem) {
        t = t["2YwzGs"];
        let stringResult1 = string(t);
      } else {
        stringResult1 = string(t.jMFSQV);
      }
      features = features.features;
      cResult[6] = features;
      cResult[7] = stringResult1;
    } else {
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === tmp16) {
            let tmp17 = cResult[11];
          }
          return tmp17;
        }
      }
      const obj2 = { label: tmp8, subLabel: cResult[7], value: !tmp4, onValueChange: tmp6 };
      const tmp19 = closure_21(tmp(6697).ActionSheetSwitchRow, obj2);
      cResult[8] = tmp6;
      cResult[9] = cResult[7];
      cResult[10] = !tmp4;
      cResult[11] = tmp19;
      tmp17 = tmp19;
    }
  }
  const hasItem1 = setting.includes(features.id);
  cResult[0] = features.id;
  cResult[1] = setting;
  cResult[2] = hasItem1;
  tmp4 = hasItem1;
  let obj = features(576);
}) : ((guild) => {
  guild = guild.guild;
  let RestrictedGuildIds = guild(2028).RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  const hasItem = setting.includes(guild.id);
  let obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = guild(1126).intl;
  obj.label = intl.string(guild(1126).t.KXNTgb);
  const features = guild.features;
  const hasItem1 = features.has(constants2.HUB);
  const intl2 = guild(1126).intl;
  const string = intl2.string;
  const t = guild(1126).t;
  if (hasItem1) {
    let stringResult = string(t["2YwzGs"]);
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
  return closure_21(guild(6697).ActionSheetSwitchRow, obj);
});
let closure_29 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(3);
  guild = guild.guild;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.HcoRu0);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const obj2 = {
      label: first,
      onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          NotificationSettingsModalActionCreatorsDefault.open(guild.id);
        }
    };
    const tmp8 = closure_21(tmp(6697).ActionSheetRow, obj2);
    cResult[1] = guild.id;
    cResult[2] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((guild) => {
  guild = guild.guild;
  let obj = { label: null, onPress: null };
  const intl = guild(1126).intl;
  obj.label = intl.string(guild(1126).t.HcoRu0);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  return closure_21(guild(6697).ActionSheetRow, obj);
});
let closure_30 = tmp6;
fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let Group = guild;
  let tmp = dependencyMap;
  const cResult = guild(576).c(22);
  guild = guild.guild;
  let obj = guild(576);
  const canManageChannels = guild(13774).useGuildActionSheetPermissions(guild).canManageChannels;
  const tmp3 = useCanCreateAnEventDefault(guild.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function l() {
      return ConnectionsUtils.isVerifiedRolesChannelVisible(GuildRoleStore.getSortedRoles(guild.id));
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj2 = guild(13774);
  const stateFromStores = Group(504).useStateFromStores(first, tmp6);
  if (cResult[3] === tmp3) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === canManageChannels) {
        if (cResult[6] === guild) {
          let arr2 = cResult[7];
        }
        if (0 === arr2.length) {
          return null;
        } else if (cResult[20] !== arr2) {
          Group = Group(6697).ActionSheetRow.Group;
          const obj3 = { hasIcons: false, children: arr2.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
          tmp = closure_21(Group, obj3);
          cResult[20] = arr2;
          cResult[21] = tmp;
        }
      }
    }
  }
  const items1 = [];
  if (!canManageChannels) {
    if (!tmp3) {
      if (!stateFromStores) {
        cResult[3] = tmp3;
        cResult[4] = stateFromStores;
        cResult[5] = canManageChannels;
        cResult[6] = guild;
        cResult[7] = items1;
        arr2 = items1;
      } else {
        const _Symbol4 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = Group(1126).intl;
          const stringResult = intl4.string(Group(1126).t.ghtnss);
          cResult[17] = stringResult;
          let tmp24 = stringResult;
        } else {
          tmp24 = cResult[17];
        }
        if (cResult[18] !== guild.id) {
          const obj4 = {
            label: tmp24,
            onPress() {
                      ActionSheetActionCreatorsDefault.hideActionSheet();
                      const result = GuildRoleConnectionsModalActionCreators.openGuildRoleConnectionsModal({
                        guildId: guild.id,
                        onClose() {

                        }
                      });
                    }
          };
          const tmp28 = closure_21(Group(6697).ActionSheetRow, obj4);
          cResult[18] = guild.id;
          cResult[19] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[19];
        }
        items1.push(tmp26);
      }
    } else {
      const _Symbol3 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = Group(1126).intl;
        const stringResult1 = intl3.string(Group(1126).t["60lJ0C"]);
        cResult[14] = stringResult1;
        let onPress2 = stringResult1;
      } else {
        onPress2 = cResult[14];
      }
      if (cResult[15] !== guild) {
        const obj5 = { label: onPress2, onPress: null };
        onPress2 = function onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const result = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, {});
        };
        obj5.onPress = onPress2;
        const tmp22 = closure_21(Group(6697).ActionSheetRow, obj5);
        cResult[15] = guild;
        cResult[16] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[16];
      }
      items1.push(tmp20);
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = Group(1126).intl;
      const stringResult2 = intl.string(Group(1126).t["fUYU+j"]);
      cResult[8] = stringResult2;
      let tmp8 = stringResult2;
    } else {
      tmp8 = cResult[8];
    }
    if (cResult[9] !== guild.id) {
      const obj6 = {
        label: tmp8,
        onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              CreateChannelModalActionCreatorsDefault.open(null, guild.id, null, null);
            }
      };
      const tmp12 = closure_21(Group(6697).ActionSheetRow, obj6);
      cResult[9] = guild.id;
      cResult[10] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[10];
    }
    items1.push(tmp10);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = Group(1126).intl;
      const stringResult3 = intl2.string(Group(1126).t["ISN+NM"]);
      cResult[11] = stringResult3;
      let onPress = stringResult3;
    } else {
      onPress = cResult[11];
    }
    if (cResult[12] !== guild.id) {
      const obj7 = { label: onPress, onPress: null };
      onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        CreateChannelModalActionCreatorsDefault.open(constants.GUILD_CATEGORY, guild.id, null, null);
      };
      obj7.onPress = onPress;
      const tmp17 = closure_21(Group(6697).ActionSheetRow, obj7);
      cResult[12] = guild.id;
      cResult[13] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[13];
    }
    items1.push(tmp15);
  }
  const GroupResult = Group(504);
}) : ((guild) => {
  guild = guild.guild;
  let obj = guild(13774);
  const tmp3 = useCanCreateAnEventDefault(guild.id);
  const items = [GuildRoleStore];
  const items1 = [];
  const stateFromStores = guild(504).useStateFromStores(items, () => ConnectionsUtils.isVerifiedRolesChannelVisible(GuildRoleStore.getSortedRoles(guild.id)));
  if (obj.useGuildActionSheetPermissions(guild).canManageChannels) {
    const obj3 = { label: null, onPress: null };
    const intl = tmp(1126).intl;
    obj3.label = intl.string(tmp(1126).t["fUYU+j"]);
    obj3.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      CreateChannelModalActionCreatorsDefault.open(null, guild.id, null, null);
    };
    items1.push(closure_21(tmp(6697).ActionSheetRow, obj3));
    const obj4 = { label: null, onPress: null };
    const intl2 = tmp(1126).intl;
    obj4.label = intl2.string(tmp(1126).t["ISN+NM"]);
    obj4.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      CreateChannelModalActionCreatorsDefault.open(constants.GUILD_CATEGORY, guild.id, null, null);
    };
    items1.push(closure_21(tmp(6697).ActionSheetRow, obj4));
  }
  if (tmp3) {
    const obj5 = { label: null, onPress: null };
    const intl3 = tmp(1126).intl;
    obj5.label = intl3.string(tmp(1126).t["60lJ0C"]);
    obj5.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, {});
    };
    items1.push(closure_21(tmp(6697).ActionSheetRow, obj5));
  }
  if (stateFromStores) {
    const obj6 = { label: null, onPress: null };
    const intl4 = tmp(1126).intl;
    obj6.label = intl4.string(tmp(1126).t.ghtnss);
    obj6.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = GuildRoleConnectionsModalActionCreators.openGuildRoleConnectionsModal({
        guildId: guild.id,
        onClose() {

        }
      });
    };
    items1.push(closure_21(tmp(6697).ActionSheetRow, obj6));
  }
  let tmp12 = null;
  if (0 !== items1.length) {
    const obj7 = { hasIcons: false, children: items1.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
    tmp12 = closure_21(tmp(6697).ActionSheetRow.Group, obj7);
  }
  return tmp12;
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(16);
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  _modDef38(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
  let obj = guild(576);
  if (cResult[0] !== guild) {
    const obj2 = { guild };
    const tmp10 = closure_21(closure_30, obj2);
    cResult[0] = guild;
    cResult[1] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  const items = [];
  items.push(tmp7);
  if (cResult[2] === guild) {
    if (cResult[3] === currentUser) {
      let tmp12 = cResult[4];
    }
    items.push(tmp12);
    if (cResult[5] !== guild) {
      const obj3 = { guild };
      const tmp18 = closure_21(closure_29, obj3);
      cResult[5] = guild;
      cResult[6] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[6];
    }
    items.push(tmp15);
    if (cResult[7] !== guild) {
      const obj4 = { guild };
      cResult[7] = guild;
      cResult[8] = obj4;
      let tmp20 = obj4;
    } else {
      tmp20 = cResult[8];
    }
    const messageRequestPrivacyOption = tmp(13722).useMessageRequestPrivacyOption(tmp20);
    if (null != messageRequestPrivacyOption) {
      items.push(messageRequestPrivacyOption);
    }
    if (tmp6) {
      let tmp33 = null;
      if (0 !== items.length) {
        const obj5 = { hasIcons: false, children: items.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
        tmp33 = closure_21(tmp(6697).ActionSheetRow.Group, obj5);
      }
      return tmp33;
    } else if (cResult[9] !== guild.features) {
      const features = guild.features;
      const hasItem = features.has(constants2.HUB);
      const intl = tmp(1126).intl;
      const string = intl.string;
      let features2 = tmp(1126).t;
      if (hasItem) {
        let stringResult = string(features2.Dv8gFT);
      } else {
        stringResult = string(features2.J2TBi3);
      }
      features2 = guild.features;
      cResult[9] = features2;
      cResult[10] = stringResult;
    } else {
      if (cResult[11] !== guild) {
        class R {
          constructor() {
            obj = closure_1(closure_2[27]);
            hideActionSheetResult = obj.hideActionSheet();
            lazyResult = closure_3.lazy(() => guild(paths[30])(paths[62], paths.paths));
            obj2 = closure_0(closure_2[63]);
            obj1 = { guild };
            openAlertResult = obj2.openAlert("guild-action-sheet-leave-server", jsx(lazyResult, obj1));
            return;
          }
        }
        cResult[11] = guild;
        cResult[12] = R;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[27]);
            hideActionSheetResult = obj.hideActionSheet();
            lazyResult = closure_3.lazy(() => guild(paths[30])(paths[62], paths.paths));
            obj2 = closure_0(closure_2[63]);
            obj1 = { guild };
            openAlertResult = obj2.openAlert("guild-action-sheet-leave-server", jsx(lazyResult, obj1));
            return;
          }
        }
      }
      if (cResult[13] === cResult[10]) {
        class R {
          constructor() {
            obj = closure_1(closure_2[27]);
            hideActionSheetResult = obj.hideActionSheet();
            lazyResult = closure_3.lazy(() => guild(paths[30])(paths[62], paths.paths));
            obj2 = closure_0(closure_2[63]);
            obj1 = { guild };
            openAlertResult = obj2.openAlert("guild-action-sheet-leave-server", jsx(lazyResult, obj1));
            return;
          }
        }
        items.push(tmp29);
      }
      const obj6 = { label: cResult[10], variant: "danger", onPress: R };
      const tmp31 = closure_21(tmp(6697).ActionSheetRow, obj6);
      cResult[13] = cResult[10];
      cResult[14] = R;
      cResult[15] = tmp31;
      tmp29 = tmp31;
    }
    const tmpResult = tmp(13722);
  }
  const tmp13 = closure_21(closure_26, { guild, user: currentUser });
  cResult[2] = guild;
  cResult[3] = currentUser;
  cResult[4] = tmp13;
  tmp12 = tmp13;
  tmp6 = closure_7(guild, currentUser);
}) : ((guild) => {
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  _modDef38(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
  const items = [];
  items.push(closure_21(closure_30, { guild }));
  items.push(closure_21(closure_26, { guild, user: currentUser }));
  items.push(closure_21(closure_29, { guild }));
  const tmp4 = closure_7(guild, currentUser);
  const messageRequestPrivacyOption = guild(13722).useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (tmp4) {
    let tmp5Result = null;
    if (0 !== items.length) {
      const obj2 = { hasIcons: false, children: items.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
      tmp5Result = closure_21(tmp9(6697).ActionSheetRow.Group, obj2);
    }
    return tmp5Result;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants2.HUB);
    const intl = tmp9(1126).intl;
    const string = intl.string;
    let t = tmp9(1126).t;
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
          const lazyResult = noop.lazy(() => guild(paths[30])(paths[62], paths.paths));
          useAlertStore.openAlert("guild-action-sheet-leave-server", closure_2_21(lazyResult, { guild }));
        }
    };
    t = items.push(closure_21(tmp9(6697).ActionSheetRow, obj3));
  }
  let obj = guild(13722);
});
function handleLeaveServer(guild) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const lazyResult = noop.lazy(() => guild(paths[30])(paths[62], paths.paths));
  useAlertStore.openAlert("guild-action-sheet-leave-server", guild(lazyResult, { guild }));
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx");

export const RestrictedGuildPrivacyOption = tmp5;
export const NotificationAction = tmp6;
export const GuildUnreadAction = function GuildUnreadAction(guild) {
  guild = guild.guild;
  let stateFromStores1;
  let items = [GuildReadStateStore];
  const items1 = [guild];
  const stateFromStores = guild(stateFromStores1[19]).useStateFromStores(items, () => GuildReadStateStore.getGuildHasUnreadIgnoreMuted(guild.id), items1);
  let obj = guild(stateFromStores1[19]);
  const shouldUseNewNotificationSystem = guild(stateFromStores1[49]).useShouldUseNewNotificationSystem("GuildUnreadAction");
  const items2 = [guild.id];
  closure_1 = noop.useCallback(() => {
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guild.id, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
  }, items2);
  let obj2 = guild(stateFromStores1[49]);
  const items3 = [UserGuildSettingsStore];
  stateFromStores1 = guild(stateFromStores1[19]).useStateFromStores(items3, () => UserGuildSettingsStore.isMuted(guild.id));
  const obj4 = { label: null, onPress: null, disabled: null };
  const intl = guild(stateFromStores1[20]).intl;
  obj4.label = intl.string(guild(stateFromStores1[20]).t.e6RscS);
  obj4.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const items = [guild.id];
    markGuildsAsReadDefault(items, constants3.GUILD_POPOUT);
  };
  obj4.disabled = !stateFromStores;
  const items4 = [closure_21(guild(stateFromStores1[22]).ActionSheetRow, obj4), , ];
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
    return closure_22(guild(stateFromStores1[22]).ActionSheetRow.Group, obj6);
  } else {
    const intl2 = tmp(tmp2[20]).intl;
    const string = intl2.string;
    let t = tmp(tmp2[20]).t;
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
            obj2.openLazy(asyncRequireImpl(11064, dependencyMap.paths), "muteSettings" + guild.id, obj3);
            const tmp5 = asyncRequireImpl(11064, dependencyMap.paths);
          }
        }
    };
    closure_21(tmp(tmp2[22]).ActionSheetRow, t);
  }
  let obj3 = guild(stateFromStores1[19]);
};
export const GuildActionSheetPrimaryActions = tmp7;
export const GuildActionSheetGameOrganizationActions = function GuildActionSheetGameOrganizationActions(guild) {
  guild = guild.guild;
  let tmp3 = null;
  if (obj.useLinkedGameOrgInvitesEnabled("guild_action_sheet")) {
    const obj2 = { hasIcons: false, children: null };
    const obj3 = { label: null, onPress: null };
    const intl = tmp(1126).intl;
    const obj4 = { noun: null };
    const intl2 = tmp(1126).intl;
    obj4.noun = intl2.string(_modDef2391.nVMqjA);
    obj3.label = intl.formatToPlainString(_modDef2391.EnTIIr, obj4);
    obj3.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13775, dependencyMap.paths), "GameOrganizationInviteActionSheet", { guildId: guild.id });
    };
    obj2.children = closure_21(tmp(6697).ActionSheetRow, obj3);
    tmp3 = closure_21(tmp(6697).ActionSheetRow.Group, obj2);
  }
  return tmp3;
};
export { handleLeaveServer };
export const GuildActionSheetDirectoryActions = tmp8;
export const GuildActionSheetSecondaryActions = function GuildActionSheetSecondaryActions(guild) {
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  const tmp2 = closure_7(guild, currentUser);
  const canReportRaid = guild(12481).useCanReportRaid(guild);
  let obj = guild(12481);
  const guildIncidentsState = guild(12480).useGuildIncidentsState(guild.id);
  const items = [];
  ({ shouldShowIncidentActions, isUnderLockdown } = guildIncidentsState);
  let obj2 = guild(12480);
  const optInEnabledForGuild = guild(7046).useOptInEnabledForGuild(guild.id);
  items.push(closure_21(closure_26, { guild, user: currentUser }));
  items.push(closure_21(closure_27, { guild }));
  items.push(closure_21(ServerTagOption, { guild }));
  const features = guild.features;
  if (features.has(constants2.COMMUNITY)) {
    const obj4 = { label: null, value: null, onValueChange: null };
    const intl = tmp3(1126).intl;
    obj4.label = intl.string(tmp3(1126).t.FB2ZZV);
    obj4.value = !optInEnabledForGuild;
    obj4.onValueChange = function onValueChange() {
      return OptInOnboardingUtils.toggleShowAllChannels(guild.id);
    };
    items.push(closure_21(tmp3(6697).ActionSheetSwitchRow, obj4));
  }
  items.push(closure_21(closure_24, { guild }));
  items.push(closure_21(closure_29, { guild }));
  const obj3 = guild(7046);
  const messageRequestPrivacyOption = guild(13722).useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (canReportRaid) {
    const obj5 = { label: null, onPress: null };
    const intl2 = tmp3(1126).intl;
    obj5.label = intl2.string(tmp3(1126).t.cswId3);
    obj5.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildAntiRaidModalActionCreators.openReportRaidModal(guild.id);
    };
    items.push(closure_21(tmp3(6697).ActionSheetRow, obj5));
  }
  if (!tmp2) {
    const obj6 = { label: null, onPress: null };
    const intl3 = tmp3(1126).intl;
    obj6.label = intl3.string(tmp3(1126).t.Aen9eh);
    obj6.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = ReportModals.showReportModalForGuild(guild);
    };
    items.push(closure_21(tmp3(6697).ActionSheetRow, obj6));
  }
  if (!shouldShowIncidentActions) {
    if (tmp2) {
      let tmp8Result = null;
      if (0 !== items.length) {
        const obj7 = { hasIcons: false, children: items.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
        tmp8Result = closure_21(tmp3(6697).ActionSheetRow.Group, obj7);
      }
      return tmp8Result;
    } else {
      const features2 = guild.features;
      const hasItem = features2.has(constants2.HUB);
      const intl5 = tmp3(1126).intl;
      const string2 = intl5.string;
      let t2 = tmp3(1126).t;
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
              const lazyResult = noop.lazy(() => guild(paths[30])(paths[62], paths.paths));
              useAlertStore.openAlert("guild-action-sheet-leave-server", closure_2_21(lazyResult, { guild }));
            }
      };
      t2 = items.push(closure_21(tmp3(6697).ActionSheetRow, obj8));
    }
  } else {
    const intl4 = tmp3(1126).intl;
    const string = intl4.string;
    let t = tmp3(1126).t;
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
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11439, dependencyMap.paths), "GuildIncidentActionsActionSheet", { guild, analyticsData: obj2 });
        }
    };
    t = items.push(closure_21(tmp3(6697).ActionSheetRow, obj9));
  }
  const tmp3Result = guild(13722);
};
export const GuildDeveloperOptionAction = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(18);
  guild = guild.guild;
  const DeveloperMode = guild(2028).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "GuildDeveloperOptionAction" };
    let obj3 = { autoTrackExposure: false };
    cResult[0] = obj2;
    cResult[1] = obj3;
    tmp5 = obj2;
    tmp6 = obj3;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = guild(576);
  const tidaWebformEnabled = TidaWebformExperimentDefault.useExperiment(tmp5, tmp6).tidaWebformEnabled;
  if (setting) {
    if (cResult[2] === guild) {
      if (cResult[3] === tidaWebformEnabled) {
        let arr = cResult[4];
      }
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult = intl4.string(tmp(1126).t.ObIb1Q);
        cResult[15] = stringResult;
        let tmp26 = stringResult;
      } else {
        tmp26 = cResult[15];
      }
      if (cResult[16] !== arr) {
        const obj5 = { hasIcons: false, title: tmp26, children: arr.map((children, index) => closure_1_21(React.Fragment, { children }, index)) };
        const tmp30 = closure_21(tmp(6697).ActionSheetRow.Group, obj5);
        cResult[16] = arr;
        cResult[17] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[17];
      }
      return tmp28;
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult1 = intl.string(tmp(1126).t["94lLD7"]);
      cResult[5] = stringResult1;
      let tmp8 = stringResult1;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== guild.id) {
      const obj6 = {
        label: tmp8,
        onPress() {
              ClipboardUtils.copy(guild.id);
              ToastUtils.presentIdCopied();
            }
      };
      const tmp12 = closure_21(tmp(6697).ActionSheetRow, obj6);
      cResult[6] = guild.id;
      cResult[7] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[7];
    }
    const items = [];
    items.push(tmp10);
    if (tidaWebformEnabled) {
      if (null == guild.icon) {
        if (null != guild.banner) {
          const _Symbol4 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(tmp(1126).t["2FoUnk"]);
            cResult[11] = stringResult2;
            let tmp20 = stringResult2;
          } else {
            tmp20 = cResult[11];
          }
          if (cResult[12] === guild.banner) {
            if (cResult[13] === guild.id) {
              let tmp22 = cResult[14];
            }
            items.push(tmp22);
          }
          const obj7 = {
            label: tmp20,
            onPress() {
                      const guildBannerURL = AvatarUtilsDefault.getGuildBannerURL({ id: guild.id, banner: guild.banner }, true);
                      if (null != guildBannerURL) {
                        ClipboardUtils.copy(guildBannerURL);
                        ToastUtils.presentLinkCopied();
                      }
                      const obj2 = { id: guild.id, banner: guild.banner };
                    }
          };
          const tmp24 = closure_21(tmp(6697).ActionSheetRow, obj7);
          cResult[12] = guild.banner;
          cResult[13] = guild.id;
          cResult[14] = tmp24;
          tmp22 = tmp24;
        }
      } else {
        const _Symbol3 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult3 = intl2.string(tmp(1126).t["7H30wR"]);
          cResult[8] = stringResult3;
          let onPress = stringResult3;
        } else {
          onPress = cResult[8];
        }
        if (cResult[9] !== guild) {
          const obj8 = { label: onPress, onPress: null };
          onPress = function onPress() {
            const tmp = closure_2_8(guild, constants, true);
            if (null != tmp) {
              ClipboardUtils.copy(tmp);
              ToastUtils.presentLinkCopied();
            }
          };
          obj8.onPress = onPress;
          const tmp18 = closure_21(tmp(6697).ActionSheetRow, obj8);
          cResult[9] = guild;
          cResult[10] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[10];
        }
        items.push(tmp16);
      }
    }
    cResult[2] = guild;
    cResult[3] = tidaWebformEnabled;
    cResult[4] = items;
    arr = items;
  } else {
    return null;
  }
}) : ((guild) => {
  guild = guild.guild;
  const DeveloperMode = guild(2028).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  TidaWebformExperimentDefault;
  if (setting) {
    const items = [];
    let obj = { label: null, onPress: null };
    const intl = tmp(1126).intl;
    obj.label = intl.string(tmp(1126).t["94lLD7"]);
    obj.onPress = function onPress() {
      ClipboardUtils.copy(guild.id);
      ToastUtils.presentIdCopied();
    };
    items.push(closure_21(tmp(6697).ActionSheetRow, obj));
    if (tmp5) {
      if (null != guild.icon) {
        let obj2 = { label: null, onPress: null };
        const intl2 = tmp(1126).intl;
        obj2.label = intl2.string(tmp(1126).t["7H30wR"]);
        obj2.onPress = function onPress() {
          const tmp = closure_2_8(guild, constants, true);
          if (null != tmp) {
            ClipboardUtils.copy(tmp);
            ToastUtils.presentLinkCopied();
          }
        };
        items.push(closure_21(tmp(6697).ActionSheetRow, obj2));
      }
      if (null != guild.banner) {
        let obj3 = { label: null, onPress: null };
        const intl3 = tmp(1126).intl;
        obj3.label = intl3.string(tmp(1126).t["2FoUnk"]);
        obj3.onPress = function onPress() {
          const guildBannerURL = AvatarUtilsDefault.getGuildBannerURL({ id: guild.id, banner: guild.banner }, true);
          if (null != guildBannerURL) {
            ClipboardUtils.copy(guildBannerURL);
            ToastUtils.presentLinkCopied();
          }
          const obj2 = { id: guild.id, banner: guild.banner };
        };
        items.push(closure_21(tmp(6697).ActionSheetRow, obj3));
      }
    }
    let obj4 = { hasIcons: false, title: null, children: null };
    const intl4 = tmp(1126).intl;
    obj4.title = intl4.string(tmp(1126).t.ObIb1Q);
    obj4.children = items.map((children, index) => closure_1_21(React.Fragment, { children }, index));
    return closure_21(tmp(6697).ActionSheetRow.Group, obj4);
  } else {
    return null;
  }
});