// === Module 4205: AutomodPermissionUtils ===

// Module 4205 (AutomodPermissionUtils)
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

const require = fn;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
let items = [, , ];
({ AUTOMOD_QUARANTINED_BIO: arr[0], AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME: arr[1], AUTOMOD_QUARANTINED_SERVER_TAG: arr[2] } = GuildMemberFlags);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodPermissionUtils.tsx");

export const AUTOMOD_QUARANTINED_PROFILE_FLAGS = items;
export const getAutomodQuarantinedProfileFlags = function getAutomodQuarantinedProfileFlags(flags) {
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
};
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
export const hasAutomodQuarantinedProfile = function hasAutomodQuarantinedProfile(member) {
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
};
export const useCurrentUserAutomodQuaratinedProfile = function useCurrentUserAutomodQuaratinedProfile(guild_id) {
  _require = guild_id;
  items = [GuildMemberStore];
  const items1 = [guild_id];
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
};