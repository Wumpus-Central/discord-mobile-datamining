// === Module 8083: guildHasTag ===

// Module 8083 (guildHasTag)
import GuildMemberFlags from "GuildMemberFlags" /* 4126 */;
import closure_2 from "trackCommunicationDisabled" /* 1991 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import items from "items" /* 7862 */;
import { GuildFeatures } from "ME" /* 673 */;

require = arg1;
({ GuildTagBadgeMediaProxySizes, GuildTagBadgeMediaProxySizesMobile: c5, GuildTagBadgeSize: closure_6 } = items);
let result = require("set").fileFinishedImporting("modules/guild_tag/GuildTagUtils.tsx");

export const guildHasTag = function guildHasTag(guild) {
  let tag;
  if (guild != null) {
    const profile = guild.profile;
    if (profile != null) {
      tag = profile.tag;
    }
  }
  return null != tag;
};
export const guildSupportsTags = function guildSupportsTags(guild) {
  const features = guild.features;
  return features.has(GuildFeatures.GUILD_TAGS);
};
export const getGuildTagBadgeUrl = function getGuildTagBadgeUrl(guildId, badge, SIZE_12) {
  if (SIZE_12 === undefined) {
    SIZE_12 = SIZE_12.SIZE_12;
  }
  if (null != badge) {
    const _window = window;
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      return "https://" + CDN_HOST + "/clan-badges/" + guildId + "/" + badge + ".png?size=" + table[SIZE_12];
    }
  }
};
export const getUserPrimaryGuild = function getUserPrimaryGuild(primaryGuild) {
  if (null != primaryGuild) {
    if (primaryGuild.identityEnabled) {
      const obj = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj[0], tag: obj[1], badge: obj[2] } = primaryGuild);
    }
    return {};
  }
};
export const useUserPrimaryGuild = function useUserPrimaryGuild(arg0) {
  let tmp = arg0;
  const _require = arg0;
  let obj = _require(586);
  const items = [closure_3];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getGuild(closure_0), items1);
  if (null != arg0) {
    let tmp3 = stateFromStores;
    if (null != stateFromStores) {
      obj = { identityGuildId: null, identityEnabled: true, tag: null, badge: null };
      ({ id: obj2[0], profile } = stateFromStores);
      let tag;
      if (profile != null) {
        tag = profile.tag;
      }
      obj[2] = tag;
      const profile2 = stateFromStores.profile;
      let badge;
      if (profile2 != null) {
        badge = profile2.badge;
      }
      obj[3] = badge;
      tmp3 = obj;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const useShouldDisplayGuildTag = function useShouldDisplayGuildTag(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  let tmp = arg2;
  let obj = _require(586);
  const items = [closure_4];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getUser(closure_0), items1);
  const items2 = [closure_2];
  const items3 = [arg1, arg0];
  const stateFromStores1 = _require(586).useStateFromStores(items2, () => {
    if (null != table) {
      if (null != callback) {
        const member = closure_1_2.getMember(tmp, tmp2);
        return callback(table[6]).hasAutomodQuarantinedProfile(member);
      }
    }
    return null;
  }, items3);
  if (undefined === arg2) {
    let primaryGuild;
    if (stateFromStores != null) {
      primaryGuild = stateFromStores.primaryGuild;
    }
    tmp = primaryGuild;
  }
  if (null != tmp) {
    if (tmp.identityEnabled) {
      obj = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj4[0], tag: obj4[1], badge: obj4[2] } = tmp);
    }
    return null != obj.guildId && null != obj.tag && !stateFromStores1;
  }
  obj = {};
};
export const shouldDisplayGuildTag = function shouldDisplayGuildTag(id, merged) {
  let tmp = arg2;
  user = user.getUser(id);
  if (undefined === arg2) {
    let primaryGuild;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    tmp = primaryGuild;
  }
  if (null != tmp) {
    if (tmp.identityEnabled) {
      let obj = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj2[0], tag: obj2[1], badge: obj2[2] } = tmp);
    }
    let tmp5 = null != obj.guildId && null != obj.tag;
    if (tmp5) {
      let result = null != merged && null != id;
      if (result) {
        result = GuildMemberFlags.hasAutomodQuarantinedProfile(member.getMember(merged, id));
        const obj3 = GuildMemberFlags;
      }
      tmp5 = !result;
    }
    return tmp5;
  }
  obj = {};
};