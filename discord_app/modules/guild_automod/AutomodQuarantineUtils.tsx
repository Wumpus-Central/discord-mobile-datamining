// discord_app/modules/guild_automod/AutomodQuarantineUtils.tsx
import noop from "noop";
import zustandStore from "zustandStore";
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import { ProfileCustomizationSubsection as closure_12 } from "MAX_FAVORITES";

let c10;
let c9;
const require = arg1;
({ Permissions: c9, UserSettingsSections: c10 } = ME);
const result = require("fetchFingerprint").fileFinishedImporting("modules/guild_automod/AutomodQuarantineUtils.tsx");

export const useCurrentUserHasAutomodQuarantinedProfile = function useCurrentUserHasAutomodQuarantinedProfile(arg0) {
  const _require = arg0;
  const items = [fetchFingerprint, trackCommunicationDisabled];
  const items1 = [arg0];
  return _require(647).useStateFromStores(items, () => {
    if (null == callback) {
      return false;
    } else {
      const id = outer1_4.getId();
      return callback(outer1_1[11]).hasAutomodQuarantinedProfile(outer1_5.getMember(tmp, id));
    }
  }, items1);
};
export const useGuildAutomodProfileQuarantineErrors = function useGuildAutomodProfileQuarantineErrors(id) {
  const _require = id;
  let items = [fetchFingerprint, trackCommunicationDisabled, handleConnectionOpen, createGuildRecordFromRust];
  let items1 = [id];
  return _require(647).useStateFromStoresObject(items, () => {
    let guildId = id;
    if (id == null) {
      guildId = outer1_8.getGuildId();
    }
    let obj = { nick: "Array", bio: "HermesInternal" };
    let guild = outer1_6.getGuild(guildId);
    if (null != guild) {
      if (null != guildId) {
        const member = outer1_5.getMember(guildId, outer1_4.getId());
        let flags;
        if (member != null) {
          flags = member.flags;
        }
        const automodQuarantinedProfileFlags = id(outer1_1[11]).getAutomodQuarantinedProfileFlags(flags);
        if (0 !== automodQuarantinedProfileFlags.size) {
          if (!automodQuarantinedProfileFlags.has(outer1_11.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
            if (automodQuarantinedProfileFlags.has(tmp9.AUTOMOD_QUARANTINED_BIO)) {
              const intl3 = tmp7(tmp8[12]).intl;
              const items = [intl3.string(tmp7(tmp8[12]).t.dZh1vz)];
              obj.bio = items;
            }
          } else {
            if (null == id) {
              const intl2 = tmp7(tmp8[12]).intl;
              let str = guild.name;
              if (str == null) {
                str = "";
              }
              obj = { guildName: null };
              obj[0] = str;
              guild = [intl2.formatToPlainString(tmp7(tmp8[12]).t.WBUh3O, obj)];
              let items1 = guild;
            } else {
              const intl = tmp7(tmp8[12]).intl;
              items1 = [intl.string(tmp7(tmp8[12]).t.EPZCrM)];
            }
            obj.nick = items1;
          }
          tmp9 = outer1_11;
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
  let stateFromStores;
  let stateFromStores1;
  const items = [createGuildRecordFromRust];
  const items1 = [guildId];
  stateFromStores = guildId(scrollPosition[10]).useStateFromStores(items, () => outer1_6.getGuild(guildId), items1);
  let obj = guildId(scrollPosition[10]);
  const items2 = [getUncachedChannelPermissions];
  const items3 = [stateFromStores];
  stateFromStores1 = guildId(scrollPosition[10]).useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = outer1_7.can(outer1_9.CHANGE_NICKNAME, tmp);
    }
    return canResult;
  }, items3);
  const obj2 = guildId(scrollPosition[10]);
  const items4 = [stateFromStores1, scrollPosition, guildId.analyticsLocations, stateFromStores, guildId(scrollPosition[13]).useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils")];
  const items5 = [
    stateFromStores.useCallback(() => {
      let setState = stateFromStores;
      if (null != stateFromStores) {
        let openUserSettings = outer1_12.GUILD;
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
        obj[0] = outer1_10.PROFILE_CUSTOMIZATION;
        openUserSettings(obj);
      }
    }, items4),
    stateFromStores1
  ];
  return items5;
};