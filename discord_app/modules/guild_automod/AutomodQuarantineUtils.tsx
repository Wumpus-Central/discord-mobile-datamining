// === Module 11871: AutomodQuarantineUtils ===

// Module 11871 (AutomodQuarantineUtils)
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4205 */;
import openUserSettings2 from "openUserSettings" /* 7382 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9210 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9208 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
const Constants = fn(1074);
({ Permissions: closure_9, UserSettingsSections: c10 } = Constants);
const GuildMemberFlags = fn(4187).GuildMemberFlags;
let closure_12 = fn(1084).ProfileCustomizationSubsection;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodQuarantineUtils.tsx");

export const useCurrentUserHasAutomodQuarantinedProfile = function useCurrentUserHasAutomodQuarantinedProfile(arg0) {
  _require = arg0;
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [arg0];
  return require("useStateFromStores").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const id = AuthenticationStore.getId();
      return AutomodPermissionUtils.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(tmp, id));
    }
  }, items1);
};
export const useGuildAutomodProfileQuarantineErrors = function useGuildAutomodProfileQuarantineErrors(id) {
  _require = id;
  let items = [AuthenticationStore, GuildMemberStore, SelectedGuildStore, GuildStore];
  let items1 = [id];
  return require("useStateFromStores").useStateFromStoresObject(items, () => {
    let guildId = closure_0;
    if (closure_0 == null) {
      guildId = SelectedGuildStore.getGuildId();
    }
    let obj = { nick: "hash", bio: "call" };
    let guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      if (null != guildId) {
        const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
        let flags;
        if (member != null) {
          flags = member.flags;
        }
        const automodQuarantinedProfileFlags = AutomodPermissionUtils.getAutomodQuarantinedProfileFlags(flags);
        if (0 !== automodQuarantinedProfileFlags.size) {
          if (!automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
            if (automodQuarantinedProfileFlags.has(tmp9.AUTOMOD_QUARANTINED_BIO)) {
              const intl3 = tmp7(1114).intl;
              const items = [intl3.string(tmp7(1114).t.dZh1vz)];
              obj.bio = items;
            }
          } else {
            if (null == closure_0) {
              const intl2 = tmp7(1114).intl;
              let str = guild.name;
              if (str == null) {
                str = "";
              }
              obj = { guildName: str };
              guild = [intl2.formatToPlainString(tmp7(1114).t.WBUh3O, obj)];
              let items1 = guild;
            } else {
              const intl = tmp7(1114).intl;
              items1 = [intl.string(tmp7(1114).t.EPZCrM)];
            }
            obj.nick = items1;
          }
          tmp9 = GuildMemberFlags;
        }
        return obj;
      }
    }
    return obj;
  }, items1);
};
export const useOpenFixQuarantinedProfileModal = function useOpenFixQuarantinedProfileModal(guildId) {
  guildId = guildId.guildId;
  const scrollPosition = guildId.scrollPosition;
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(scrollPosition[10]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj = guildId(scrollPosition[10]);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = guildId(scrollPosition[10]).useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
    }
    return canResult;
  }, items3);
  const obj2 = guildId(scrollPosition[10]);
  const items4 = [stateFromStores1, scrollPosition, guildId.analyticsLocations, stateFromStores, guildId(scrollPosition[13]).useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils")];
  const items5 = [
    stateFromStores.useCallback(() => {
      let setState = stateFromStores;
      if (null != stateFromStores) {
        let openUserSettings = constants.GUILD;
        if (stateFromStores1) {
          let obj = GuildIdentityActionCreators;
          const guildIdentitySettings = obj.initGuildIdentitySettings(setState.id);
          let USER_PROFILE = openUserSettings;
        } else {
          USER_PROFILE = tmp11.USER_PROFILE;
        }
        openUserSettings = openUserSettings2.openUserSettings;
        setState = ProfileCustomizationNavigationStore.setState;
        obj = { subsection: USER_PROFILE, scrollPosition };
        setState(obj);
        obj = { screen: constants2.PROFILE_CUSTOMIZATION };
        openUserSettings(obj);
      }
    }, items4),
    stateFromStores1
  ];
  return items5;
};