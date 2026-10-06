// === Module 4521: AutomodPermissionUtils ===

// Module 4521 (AutomodPermissionUtils)
import FlagUtils from "FlagUtils" /* 1390 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4501 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arr, set;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let items = [, , ];
({ AUTOMOD_QUARANTINED_BIO: arr[0], AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME: arr[1], AUTOMOD_QUARANTINED_SERVER_TAG: arr[2] } = GuildMemberFlags);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const selfMember = GuildMemberStore.getSelfMember(tmp);
        let tmp5 = null != selfMember;
        if (tmp5) {
          tmp5 = null != selfMember.flags && items.some((item) => {
            let num = selfMember.flags;
            const hasFlag = closure_2_0(closure_2_1[2]).hasFlag;
            closure_2_0(closure_2_1[2]);
            if (num == null) {
              num = 0;
            }
            return hasFlag(num, item);
          });
          const someResult = null != selfMember.flags && items.some((item) => {
            let num = selfMember.flags;
            const hasFlag = closure_2_0(closure_2_1[2]).hasFlag;
            closure_2_0(closure_2_1[2]);
            if (num == null) {
              num = 0;
            }
            return hasFlag(num, item);
          });
        }
        tmp2 = tmp5;
      }
      return tmp2;
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
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  items = [GuildMemberStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const selfMember = GuildMemberStore.getSelfMember(tmp);
      let tmp5 = null != selfMember;
      if (tmp5) {
        tmp5 = null != selfMember.flags && items.some((item) => {
          let num = selfMember.flags;
          const hasFlag = closure_2_0(closure_2_1[2]).hasFlag;
          closure_2_0(closure_2_1[2]);
          if (num == null) {
            num = 0;
          }
          return hasFlag(num, item);
        });
        const someResult = null != selfMember.flags && items.some((item) => {
          let num = selfMember.flags;
          const hasFlag = closure_2_0(closure_2_1[2]).hasFlag;
          closure_2_0(closure_2_1[2]);
          if (num == null) {
            num = 0;
          }
          return hasFlag(num, item);
        });
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1);
});
function getAutomodQuarantinedProfileFlags(flags) {
  let closure_0 = flags;
  if (null == flags) {
    const _Set2 = Set;
    const self3 = this;
    const self4 = this;
    set = new Set();
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(items.reduce((arr, item) => {
      let num = flags;
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      if (flags == null) {
        num = 0;
      }
      if (hasFlag(num, item)) {
        arr = arr.push(item);
      }
      return arr;
    }, []));
  }
  return set;
}
function hasAutomodQuarantinedProfile(member) {
  let closure_0 = member;
  let tmp = null != member;
  if (tmp) {
    tmp = null != member.flags && items.some((item) => {
      let num = selfMember.flags;
      const hasFlag = closure_2_0(closure_2_1[2]).hasFlag;
      closure_2_0(closure_2_1[2]);
      if (num == null) {
        num = 0;
      }
      return hasFlag(num, item);
    });
    const someResult = null != member.flags && items.some((item) => {
      let num = selfMember.flags;
      const hasFlag = closure_2_0(closure_2_1[2]).hasFlag;
      closure_2_0(closure_2_1[2]);
      if (num == null) {
        num = 0;
      }
      return hasFlag(num, item);
    });
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/guild_automod/AutomodPermissionUtils.tsx");

export const AUTOMOD_QUARANTINED_PROFILE_FLAGS = items;
export { getAutomodQuarantinedProfileFlags };
export const getAutomodQuarantinedGuildMemberFlags = function getAutomodQuarantinedGuildMemberFlags(member) {
  if (null == member) {
    const _Set3 = Set;
    const self5 = this;
    const self6 = this;
    set = new Set();
  } else {
    const flags = member.flags;
    if (null == flags) {
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      set = new Set();
    } else {
      const tmp = globalThis;
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(items.reduce((arr, item) => {
        let num = flags;
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        if (flags == null) {
          num = 0;
        }
        if (hasFlag(num, item)) {
          arr = arr.push(item);
        }
        return arr;
      }, []));
    }
  }
  return set;
};
export const getAutomodReason = function getAutomodReason(automodQuarantinedGuildMemberFlags) {
  let prop;
  if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
    prop = GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
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
export const useCurrentUserAutomodQuaratinedProfile = tmp2;