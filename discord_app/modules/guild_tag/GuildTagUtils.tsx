// === Module 8165: GuildTagUtils ===

// Module 8165 (GuildTagUtils)
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4205 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const GuildTagConstants = fn(7944);
({ GuildTagBadgeMediaProxySizes, GuildTagBadgeMediaProxySizesMobile: hasOwnProperty, GuildTagBadgeSize: metroRequire } = GuildTagConstants);
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_tag/GuildTagUtils.tsx");

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
export const getGuildTagBadgeUrl = function getGuildTagBadgeUrl(guildId, badge) {
  if (SIZE_12 === undefined) {
    SIZE_12 = SIZE_12.SIZE_12;
  }
  if (null != badge) {
    const _window = window;
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      return "https://" + CDN_HOST + "/clan-badges/" + guildId + "/" + badge + ".png?size=" + hasOwnProperty[SIZE_12];
    }
  }
};
export const getUserPrimaryGuild = function getUserPrimaryGuild(primaryGuild) {
  if (null != primaryGuild) {
    if (primaryGuild.identityEnabled) {
      const obj = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj.guildId, tag: obj.tag, badge: obj.badge } = primaryGuild);
    }
    return {};
  }
};
export const useUserPrimaryGuild = function useUserPrimaryGuild(arg0) {
  let tmp = arg0;
  _require = arg0;
  let obj = require("initialize");
  const items = [GuildStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  if (null != arg0) {
    let tmp3 = stateFromStores;
    if (null != stateFromStores) {
      obj = { identityGuildId: null, identityEnabled: true, tag: null, badge: null };
      ({ id: obj2.identityGuildId, profile } = stateFromStores);
      let tag;
      if (profile != null) {
        tag = profile.tag;
      }
      obj.tag = tag;
      const profile2 = stateFromStores.profile;
      let badge;
      if (profile2 != null) {
        badge = profile2.badge;
      }
      obj.badge = badge;
      tmp3 = obj;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const useShouldDisplayGuildTag = function useShouldDisplayGuildTag(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  let tmp = arg2;
  let obj = require("initialize");
  const items = [UserStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(closure_0), items1);
  const items2 = [GuildMemberStore];
  const items3 = [arg1, arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    if (null != closure_1) {
      if (null != closure_0) {
        const member = GuildMemberStore.getMember(tmp, tmp2);
        return AutomodPermissionUtils.hasAutomodQuarantinedProfile(member);
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
      ({ identityGuildId: obj4.guildId, tag: obj4.tag, badge: obj4.badge } = tmp);
    }
    return null != obj.guildId && null != obj.tag && !stateFromStores1;
  }
  obj = {};
};
export const shouldDisplayGuildTag = function shouldDisplayGuildTag(id, guildId, arg2) {
  let tmp = arg2;
  const user = UserStore.getUser(id);
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
      ({ identityGuildId: obj2.guildId, tag: obj2.tag, badge: obj2.badge } = tmp);
    }
    let tmp5 = null != obj.guildId && null != obj.tag;
    if (tmp5) {
      let result = null != guildId && null != id;
      if (result) {
        result = AutomodPermissionUtils.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(guildId, id));
      }
      tmp5 = !result;
    }
    return tmp5;
  }
  obj = {};
};