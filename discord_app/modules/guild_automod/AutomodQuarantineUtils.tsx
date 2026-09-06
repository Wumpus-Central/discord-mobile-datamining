// discord_app/modules/guild_automod/AutomodQuarantineUtils.tsx
import util from "../../intl/index.native.tsx";
import AutomodPermissionUtils from "AutomodPermissionUtils.tsx";
import openUserSettings2 from "../user_settings/core/native/openUserSettings.tsx";
import GuildIdentityActionCreators from "../guild_identity/GuildIdentityActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ProfileCustomizationNavigationStore from "../profile_customization/ProfileCustomizationNavigationStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

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
  return require("useStateFromStores").useStateFromStores(
    items,
    () => {
      if (null == closure_0) {
        return false;
      } else {
        const id = AuthenticationStore.getId();
        return AutomodPermissionUtils.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(tmp, id));
      }
    },
    items1,
  );
};
export const useGuildAutomodProfileQuarantineErrors = function useGuildAutomodProfileQuarantineErrors(id) {
  _require = id;
  let items = [AuthenticationStore, GuildMemberStore, SelectedGuildStore, GuildStore];
  let items1 = [id];
  return require("useStateFromStores").useStateFromStoresObject(
    items,
    () => {
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
              if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_BIO)) {
                const intl3 = util.intl;
                const items = [intl3.string(util.t.dZh1vz)];
                obj.bio = items;
              }
            } else {
              if (null == closure_0) {
                const intl2 = util.intl;
                let str = guild.name;
                if (str == null) {
                  str = "";
                }
                obj = { guildName: str };
                guild = [intl2.formatToPlainString(util.t.WBUh3O, obj)];
                let items1 = guild;
              } else {
                const intl = util.intl;
                items1 = [intl.string(util.t.EPZCrM)];
              }
              obj.nick = items1;
            }
          }
          return obj;
        }
      }
      return obj;
    },
    items1,
  );
};
export const useOpenFixQuarantinedProfileModal = function useOpenFixQuarantinedProfileModal(guildId) {
  guildId = guildId.guildId;
  const scrollPosition = guildId.scrollPosition;
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(scrollPosition[10]).useStateFromStores(
    items,
    () => GuildStore.getGuild(guildId),
    items1,
  );
  let obj = guildId(scrollPosition[10]);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = guildId(scrollPosition[10]).useStateFromStores(
    items2,
    () => {
      let canResult = null != stateFromStores;
      if (canResult) {
        canResult = PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
      }
      return canResult;
    },
    items3,
  );
  const obj2 = guildId(scrollPosition[10]);
  const items4 = [
    stateFromStores1,
    scrollPosition,
    guildId.analyticsLocations,
    stateFromStores,
    guildId(scrollPosition[13]).useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils"),
  ];
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
    stateFromStores1,
  ];
  return items5;
};
