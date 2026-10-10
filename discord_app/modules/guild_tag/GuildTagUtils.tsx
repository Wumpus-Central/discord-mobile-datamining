// discord_app/modules/guild_tag/GuildTagUtils.tsx
import AutomodPermissionUtils from "../guild_automod/AutomodPermissionUtils.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const GuildTagConstants = fn(7887);
({
  GuildTagBadgeMediaProxySizes,
  GuildTagBadgeMediaProxySizesMobile: hasOwnProperty,
  GuildTagBadgeSize: metroRequire,
} = GuildTagConstants);
const GuildFeatures = fn(1085).GuildFeatures;
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUserPrimaryGuild(arg0) {
      _require = arg0;
      const cResult = require("c").c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          return GuildStore.getGuild(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
      if (null == arg0) {
        return arg0;
      } else if (null == stateFromStores) {
        return stateFromStores;
      } else {
        const profile2 = stateFromStores.profile;
        let tag;
        if (profile2 != null) {
          tag = profile2.tag;
        }
        const profile = stateFromStores.profile;
        let badge;
        if (profile != null) {
          badge = profile.badge;
        }
        if (cResult[4] === stateFromStores.id) {
          if (cResult[5] === tag) {
            if (cResult[6] === badge) {
              let tmp11 = cResult[7];
            }
            return tmp11;
          }
        }
        const obj2 = { identityGuildId: stateFromStores.id, identityEnabled: true, tag, badge };
        cResult[4] = stateFromStores.id;
        cResult[5] = tag;
        cResult[6] = badge;
        cResult[7] = obj2;
        tmp11 = obj2;
      }
      const tmpResult = require("initialize");
    }
  : function useUserPrimaryGuild(arg0) {
      let tmp = arg0;
      _require = arg0;
      const items = [GuildStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => GuildStore.getGuild(closure_0),
        items1,
      );
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
function getUserPrimaryGuild(primaryGuild) {
  if (null != primaryGuild) {
    if (primaryGuild.identityEnabled) {
      const obj = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj.guildId, tag: obj.tag, badge: obj.badge } = primaryGuild);
    }
    return {};
  }
}
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
export { getUserPrimaryGuild };
export const useUserPrimaryGuild = tmp3;
export const useShouldDisplayGuildTag = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldDisplayGuildTag(arg0, arg1, arg2) {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class G {
          constructor() {
            return closure_4.getUser(closure_0);
          }
        }
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = G;
        cResult[3] = items1;
        let tmp7 = items1;
      } else {
        class G {
          constructor() {
            return closure_4.getUser(closure_0);
          }
        }
        tmp7 = cResult[3];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, G, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            return closure_4.getUser(closure_0);
          }
        }
        const items2 = [GuildMemberStore];
        cResult[4] = items2;
        const tmp9 = items2;
      } else {
        class G {
          constructor() {
            return closure_4.getUser(closure_0);
          }
        }
      }
      if (cResult[5] === arg1) {
        class G {
          constructor() {
            return closure_4.getUser(closure_0);
          }
        }
        let tmp10 = arg2;
        const stateFromStores1 = tmp(504).useStateFromStores(tmp9, S, items3);
        if (undefined === arg2) {
          class G {
            constructor() {
              return closure_4.getUser(closure_0);
            }
          }
          if (stateFromStores != null) {
            class G {
              constructor() {
                return closure_4.getUser(closure_0);
              }
            }
          }
          tmp10 = tmp12;
        }
        if (null != tmp10) {
          class G {
            constructor() {
              return closure_4.getUser(closure_0);
            }
          }
          return null != obj2.guildId && null != obj2.tag && !stateFromStores1;
        }
        obj2 = {};
        const tmpResult2 = tmp(504);
      }
      class S {
        constructor() {
          if (null != closure_1) {
            if (null != closure_0) {
              tmp3 = closure_2;
              tmp5 = closure_0;
              tmp6 = closure_1;
              member = closure_2.getMember(tmp, tmp2);
              obj = closure_0(closure_1[8]);
              return obj.hasAutomodQuarantinedProfile(member);
            }
          }
          return null;
        }
      }
      items3 = [arg1, arg0];
      cResult[5] = arg1;
      cResult[6] = arg0;
      cResult[7] = S;
      cResult[8] = items3;
      const tmpResult = require("initialize");
    }
  : function useShouldDisplayGuildTag(arg0, arg1, arg2) {
      _require = arg0;
      dependencyMap = arg1;
      let tmp = arg2;
      const items = [UserStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => UserStore.getUser(closure_0),
        items1,
      );
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
