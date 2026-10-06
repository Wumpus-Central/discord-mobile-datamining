// === Module 7847: GuildTagUtils ===

// Module 7847 (GuildTagUtils)
import Constants from "Constants" /* 1085 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4521 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import GuildTagConstants from "GuildTagConstants" /* 7614 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let GuildTagBadgeMediaProxySizes;
let hasOwnProperty;
let metroRequire;
({ GuildTagBadgeMediaProxySizes, GuildTagBadgeMediaProxySizesMobile: hasOwnProperty, GuildTagBadgeSize: metroRequire } = GuildTagConstants);
const GuildFeatures = Constants.GuildFeatures;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
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
        let tmp11;
        if (cResult[6] === badge) {
          tmp11 = cResult[7];
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
}) : ((arg0) => {
  let badge;
  let closure_0;
  let profile;
  let tag;
  let tmp = arg0;
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  if (null != arg0) {
    let tmp3 = stateFromStores;
    if (null != stateFromStores) {
      const obj3 = { identityGuildId: null, identityEnabled: true, tag, badge };
      ({ id: obj2.identityGuildId, profile } = stateFromStores);
      tag = undefined;
      if (profile != null) {
        tag = profile.tag;
      }
      const profile2 = stateFromStores.profile;
      badge = undefined;
      if (profile2 != null) {
        badge = profile2.badge;
      }
      tmp3 = obj3;
    }
    tmp = tmp3;
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
function getUserPrimaryGuild(primaryGuild) {
  if (null != primaryGuild) {
    if (primaryGuild.identityEnabled) {
      const obj = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj.guildId, tag: obj.tag, badge: obj.badge } = primaryGuild);
    }
    return {};
  }
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  let first;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      return UserStore.getUser(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildMemberStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === arg1) {
    let tmp11;
    let tmp12;
    if (cResult[6] === arg0) {
      tmp11 = cResult[7];
      tmp12 = cResult[8];
    }
    let tmp13 = arg2;
    const tmpResult2 = tmp(504);
    const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11, tmp12);
    if (undefined === arg2) {
      let primaryGuild;
      if (stateFromStores != null) {
        primaryGuild = stateFromStores.primaryGuild;
      }
      tmp13 = primaryGuild;
    }
    if (null != tmp13) {
      let obj3;
      if (tmp13.identityEnabled) {
        const obj2 = { guildId: null, tag: null, badge: null };
        ({ identityGuildId: obj5.guildId, tag: obj5.tag, badge: obj5.badge } = tmp13);
        obj3 = obj2;
      }
      return null != obj3.guildId && null != obj3.tag && !stateFromStores1;
    }
    obj3 = {};
  }
  class S {
    constructor() {
      if (null != closure_1) {
        if (null != closure_0) {
          const member = GuildMemberStore.getMember(tmp, tmp2);
          const obj = AutomodPermissionUtils;
          return obj.hasAutomodQuarantinedProfile(member);
        }
      }
      return null;
    }
  }
  const items3 = [arg1, arg0];
  cResult[5] = arg1;
  cResult[6] = arg0;
  cResult[7] = S;
  cResult[8] = items3;
  tmp12 = items3;
  tmp11 = S;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = arg2;
  let obj = require("get initialized");
  const items = [UserStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(closure_0), items1);
  const items2 = [GuildMemberStore];
  const items3 = [arg1, arg0];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    if (null != closure_1) {
      if (null != closure_0) {
        const member = GuildMemberStore.getMember(tmp, tmp2);
        const obj = AutomodPermissionUtils;
        return obj.hasAutomodQuarantinedProfile(member);
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
    let obj6;
    if (tmp.identityEnabled) {
      const obj3 = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj4.guildId, tag: obj4.tag, badge: obj4.badge } = tmp);
      obj6 = obj3;
    }
    return null != obj6.guildId && null != obj6.tag && !stateFromStores1;
  }
  obj6 = {};
});
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
  metroRequire = SIZE_12;
  if (SIZE_12 === undefined) {
    metroRequire = metroRequire.SIZE_12;
  }
  if (null != badge) {
    const _window = window;
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      return "https://" + CDN_HOST + "/clan-badges/" + guildId + "/" + badge + ".png?size=" + hasOwnProperty[metroRequire];
    }
  }
};
export { getUserPrimaryGuild };
export const useUserPrimaryGuild = tmp3;
export const useShouldDisplayGuildTag = tmp4;
export const shouldDisplayGuildTag = function shouldDisplayGuildTag(id2, guildId1, arg2) {
  let tmp = arg2;
  const user = UserStore.getUser(id2);
  if (undefined === arg2) {
    let primaryGuild;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    tmp = primaryGuild;
  }
  if (null != tmp) {
    let obj;
    if (tmp.identityEnabled) {
      const obj4 = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj2.guildId, tag: obj2.tag, badge: obj2.badge } = tmp);
      obj = obj4;
    }
    let tmp5 = null != obj.guildId && null != obj.tag;
    if (tmp5) {
      let result = null != guildId1 && null != id2;
      if (result) {
        const obj3 = AutomodPermissionUtils;
        result = obj3.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(guildId1, id2));
      }
      tmp5 = !result;
    }
    return tmp5;
  }
  obj = {};
};