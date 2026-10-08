// === Module 4713: AutomodPermissionUtils ===

// Module 4713 (AutomodPermissionUtils)
import GuildMemberStore from "GuildMemberStore" /* 2124 */;

const require = globalThis.__r;

const require = fn;
const GuildMemberFlags = fn(4693).GuildMemberFlags;
let items = [, , ];
({ AUTOMOD_QUARANTINED_BIO: arr[0], AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME: arr[1], AUTOMOD_QUARANTINED_SERVER_TAG: arr[2] } = GuildMemberFlags);
const ReactCompilerGating = fn(558);
function getAutomodQuarantinedProfileFlags(flags) {
  closure_0 = flags;
  if (null == flags) {
    const _Set2 = Set;
    let set = new Set();
  } else {
    const _Set = Set;
    set = new Set(items.reduce((arr, item) => {
      let num = flags;
      if (flags == null) {
        num = 0;
      }
      if (obj.hasFlag(num, item)) {
        arr = arr.push(item);
      }
      return arr;
    }, []));
  }
  return set;
}
function hasAutomodQuarantinedProfile(member) {
  closure_0 = member;
  let tmp = null != member;
  if (tmp) {
    let someResult = null != member.flags;
    if (someResult) {
      someResult = items.some((item) => {
        let num = selfMember.flags;
        if (num == null) {
          num = 0;
        }
        return selfMember(dependencyMap[2]).hasFlag(num, item);
      });
    }
    tmp = someResult;
  }
  return tmp;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodPermissionUtils.tsx");

export const AUTOMOD_QUARANTINED_PROFILE_FLAGS = items;
export { getAutomodQuarantinedProfileFlags };
export const getAutomodQuarantinedGuildMemberFlags = function getAutomodQuarantinedGuildMemberFlags(member) {
  if (null == member) {
    const _Set3 = Set;
    let set = new Set();
  } else {
    const flags = member.flags;
    if (null == flags) {
      const _Set2 = Set;
      set = new Set();
    } else {
      const _Set = Set;
      set = new Set(items.reduce((arr, item) => {
        let num = flags;
        if (flags == null) {
          num = 0;
        }
        if (obj.hasFlag(num, item)) {
          arr = arr.push(item);
        }
        return arr;
      }, []));
    }
  }
  return set;
};
export const getAutomodReason = function getAutomodReason(automodQuarantinedGuildMemberFlags) {
  if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
    let prop = GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
  } else if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_BIO)) {
    prop = GuildMemberFlags.AUTOMOD_QUARANTINED_BIO;
  } else {
    prop = null;
    if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG)) {
      prop = GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG;
    }
  }
  return prop;
};
export { hasAutomodQuarantinedProfile };
export const useCurrentUserAutomodQuaratinedProfile = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUserAutomodQuaratinedProfile(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const selfMember = GuildMemberStore.getSelfMember(tmp);
        let tmp5 = null != selfMember;
        if (tmp5) {
          let someResult = null != selfMember.flags;
          if (someResult) {
            someResult = items.some((item) => {
              let num = selfMember.flags;
              if (num == null) {
                num = 0;
              }
              return selfMember(dependencyMap[2]).hasFlag(num, item);
            });
          }
          tmp5 = someResult;
        }
        tmp2 = tmp5;
      }
      return tmp2;
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
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useCurrentUserAutomodQuaratinedProfile(arg0) {
  _require = arg0;
  items = [GuildMemberStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != selfMember;
    if (tmp2) {
      selfMember = GuildMemberStore.getSelfMember(tmp);
      let tmp5 = null != selfMember;
      if (tmp5) {
        let someResult = null != selfMember.flags;
        if (someResult) {
          someResult = items.some((item) => {
            let num = selfMember.flags;
            if (num == null) {
              num = 0;
            }
            return selfMember(dependencyMap[2]).hasFlag(num, item);
          });
        }
        tmp5 = someResult;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1);
});