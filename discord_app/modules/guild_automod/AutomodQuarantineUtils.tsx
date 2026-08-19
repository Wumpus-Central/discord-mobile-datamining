// discord_app/modules/guild_automod/AutomodQuarantineUtils.tsx
import noop from "../../../_runtime/00019_noop.js";
import zustandStore from "../profile_customization/ProfileCustomizationNavigationStore.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import handleConnectionOpen from "../../stores/SelectedGuildStore.tsx";
import ME from "../../Constants.tsx";
import { GuildMemberFlags } from "../guild_member/GuildMemberConstants.tsx";
import { ProfileCustomizationSubsection as closure_12 } from "../user_settings/UserSettingsConstants.tsx";

const require = fn;
({ Permissions: c9, UserSettingsSections: c10 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_automod/AutomodQuarantineUtils.tsx");

export const useCurrentUserHasAutomodQuarantinedProfile = function useCurrentUserHasAutomodQuarantinedProfile(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_5];
  const items1 = [arg0];
  return require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    if (null == callback) {
      return false;
    } else {
      const id = closure_1_4.getId();
      return callback(dependencyMap[11]).hasAutomodQuarantinedProfile(closure_1_5.getMember(tmp, id));
    }
  }, items1);
};
export const useGuildAutomodProfileQuarantineErrors = function useGuildAutomodProfileQuarantineErrors(id) {
  const _require = id;
  let items = [closure_4, closure_5, closure_8, closure_6];
  let items1 = [id];
  return require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresObject(items, () => {
    let guildId = id;
    if (id == null) {
      guildId = closure_1_8.getGuildId();
    }
    let obj = { nick: "r", bio: "accessibilityRole" };
    let guild = closure_1_6.getGuild(guildId);
    if (null != guild) {
      if (null != guildId) {
        const member = closure_1_5.getMember(guildId, closure_1_4.getId());
        let flags;
        if (member != null) {
          flags = member.flags;
        }
        const automodQuarantinedProfileFlags = id(dependencyMap[11]).getAutomodQuarantinedProfileFlags(flags);
        if (0 !== automodQuarantinedProfileFlags.size) {
          if (!automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
            if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_BIO)) {
              const intl3 = id(dependencyMap[12]).intl;
              const items = [intl3.string(id(dependencyMap[12]).t.dZh1vz)];
              obj.bio = items;
            }
          } else {
            if (null == id) {
              const intl2 = id(dependencyMap[12]).intl;
              let str = guild.name;
              if (str == null) {
                str = "";
              }
              obj = { guildName: null };
              obj[0] = str;
              guild = [intl2.formatToPlainString(id(dependencyMap[12]).t.WBUh3O, obj)];
              let items1 = guild;
            } else {
              const intl = id(dependencyMap[12]).intl;
              items1 = [intl.string(id(dependencyMap[12]).t.EPZCrM)];
            }
            obj.nick = items1;
          }
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
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = guildId(scrollPosition[10]).useStateFromStores(items, () => closure_1_6.getGuild(guildId), items1);
  let obj = guildId(scrollPosition[10]);
  const items2 = [closure_7];
  const items3 = [stateFromStores];
  const stateFromStores1 = guildId(scrollPosition[10]).useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = closure_1_7.can(closure_1_9.CHANGE_NICKNAME, tmp);
    }
    return canResult;
  }, items3);
  const obj2 = guildId(scrollPosition[10]);
  const items4 = [stateFromStores1, scrollPosition, guildId.analyticsLocations, stateFromStores, guildId(scrollPosition[13]).useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils")];
  const items5 = [
    stateFromStores.useCallback(() => {
      let setState = stateFromStores;
      if (null != stateFromStores) {
        let openUserSettings = closure_1_12.GUILD;
        if (stateFromStores1) {
          let obj = guildId(scrollPosition[14]);
          const guildIdentitySettings = obj.initGuildIdentitySettings(setState.id);
          let USER_PROFILE = openUserSettings;
        } else {
          USER_PROFILE = tmp11.USER_PROFILE;
        }
        openUserSettings = guildId(scrollPosition[15]).openUserSettings;
        setState = stateFromStores1.setState;
        obj = { subsection: null, scrollPosition: null };
        obj[0] = USER_PROFILE;
        obj[1] = scrollPosition;
        setState(obj);
        obj = { screen: null };
        obj[0] = closure_1_10.PROFILE_CUSTOMIZATION;
        openUserSettings(obj);
      }
    }, items4),
    stateFromStores1
  ];
  return items5;
};