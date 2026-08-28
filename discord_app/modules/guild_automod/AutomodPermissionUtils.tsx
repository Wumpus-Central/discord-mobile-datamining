// === Module 4096: GuildMemberFlags ===

// Module 4096 (GuildMemberFlags)
import closure_2 from "trackCommunicationDisabled" /* 1993 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4078 */;

const require = arg1;
let items = [, , ];
({ AUTOMOD_QUARANTINED_BIO: arr[0], AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME: arr[1], AUTOMOD_QUARANTINED_SERVER_TAG: arr[2] } = GuildMemberFlags);
const result = require("set").fileFinishedImporting("modules/guild_automod/AutomodPermissionUtils.tsx");

export const AUTOMOD_QUARANTINED_PROFILE_FLAGS = items;
export const getAutomodQuarantinedProfileFlags = function getAutomodQuarantinedProfileFlags(flags) {
  closure_0 = flags;
  if (null == flags) {
    const _Set2 = Set;
    let set = new Set();
  } else {
    const _Set = Set;
    set = new Set(items.reduce((arr) => {
      let num = flags;
      if (flags == null) {
        num = 0;
      }
      if (obj.hasFlag(num, arg1)) {
        arr.push(arg1);
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
      set = new Set(items.reduce((arr) => {
        let num = flags;
        if (flags == null) {
          num = 0;
        }
        if (obj.hasFlag(num, arg1)) {
          arr.push(arg1);
        }
        return arr;
      }, []));
    }
  }
  return set;
};
export const getAutomodReason = function getAutomodReason(automodQuarantinedGuildMemberFlags) {
  if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
    let prop = tmp.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
  } else if (automodQuarantinedGuildMemberFlags.has(tmp.AUTOMOD_QUARANTINED_BIO)) {
    prop = tmp.AUTOMOD_QUARANTINED_BIO;
  } else {
    prop = null;
    if (automodQuarantinedGuildMemberFlags.has(tmp.AUTOMOD_QUARANTINED_SERVER_TAG)) {
      prop = tmp.AUTOMOD_QUARANTINED_SERVER_TAG;
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
      someResult = items.some((arg0) => {
        let num = selfMember.flags;
        if (num == null) {
          num = 0;
        }
        return selfMember(closure_1_1[2]).hasFlag(num, arg0);
      });
    }
    tmp = someResult;
  }
  return tmp;
};
export const useCurrentUserAutomodQuaratinedProfile = function useCurrentUserAutomodQuaratinedProfile(guild_id) {
  const _require = guild_id;
  items = [closure_2];
  const items1 = [guild_id];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != selfMember;
    if (tmp2) {
      selfMember = closure_1_2.getSelfMember(tmp);
      let tmp5 = null != selfMember;
      if (tmp5) {
        let someResult = null != selfMember.flags;
        if (someResult) {
          someResult = closure_1_4.some((arg0) => {
            let num = selfMember.flags;
            if (num == null) {
              num = 0;
            }
            return selfMember(closure_1_1[2]).hasFlag(num, arg0);
          });
        }
        tmp5 = someResult;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1);
};