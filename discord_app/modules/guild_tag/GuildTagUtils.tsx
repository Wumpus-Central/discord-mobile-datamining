// discord_app/modules/guild_tag/GuildTagUtils.tsx
import AutomodPermissionUtils from "../guild_automod/AutomodPermissionUtils.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const GuildTagConstants = fn(8051);
({
  GuildTagBadgeMediaProxySizes,
  GuildTagBadgeMediaProxySizesMobile: hasOwnProperty,
  GuildTagBadgeSize: metroRequire,
} = GuildTagConstants);
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
  const items = [GuildStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  if (null != arg0) {
    let tmp3 = stateFromStores;
    if (null != stateFromStores) {
      const obj3 = { identityGuildId: null, identityEnabled: true, tag: null, badge: null };
      ({ id: obj2.identityGuildId, profile } = stateFromStores);
      let tag;
      if (profile != null) {
        tag = profile.tag;
      }
      obj3.tag = tag;
      const profile2 = stateFromStores.profile;
      let badge;
      if (profile2 != null) {
        badge = profile2.badge;
      }
      obj3.badge = badge;
      tmp3 = obj3;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const useShouldDisplayGuildTag = function useShouldDisplayGuildTag(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  let tmp = arg2;
  const items = [UserStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0), items1);
  const obj = require("initialize");
  const items2 = [GuildMemberStore];
  const items3 = [arg1, arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      if (null != closure_1) {
        if (null != closure_0) {
          const member = GuildMemberStore.getMember(tmp, tmp2);
          return AutomodPermissionUtils.hasAutomodQuarantinedProfile(member);
        }
      }
      return null;
    },
    items3,
  );
  if (undefined === arg2) {
    let primaryGuild;
    if (stateFromStores != null) {
      primaryGuild = stateFromStores.primaryGuild;
    }
    tmp = primaryGuild;
  }
  if (null != tmp) {
    if (tmp.identityEnabled) {
      ({ identityGuildId: obj4.guildId, tag: obj4.tag, badge: obj4.badge } = tmp);
      let obj6 = { guildId: null, tag: null, badge: null };
      const obj3 = { guildId: null, tag: null, badge: null };
    }
    return null != obj6.guildId && null != obj6.tag && !stateFromStores1;
  }
  obj6 = {};
};
export const shouldDisplayGuildTag = function shouldDisplayGuildTag(id, guildId1, arg2) {
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
      ({ identityGuildId: obj2.guildId, tag: obj2.tag, badge: obj2.badge } = tmp);
      let obj = { guildId: null, tag: null, badge: null };
      const obj4 = { guildId: null, tag: null, badge: null };
    }
    let tmp5 = null != obj.guildId && null != obj.tag;
    if (tmp5) {
      let result = null != guildId1 && null != id;
      if (result) {
        result = AutomodPermissionUtils.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(guildId1, id));
      }
      tmp5 = !result;
    }
    return tmp5;
  }
  obj = {};
};
