// === Module 7470: useIsNewMember ===

// Module 7470 (useIsNewMember)
import DurationsDefault from "Durations" /* 1091 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import ImpersonateStore from "ImpersonateStore" /* 2098 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;

const require = globalThis.__r;

require = fn;
const GuildMemberFlags = fn(4382).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsNewMember.tsx");

export default function useIsNewMember(arg0) {
  _require = arg0;
  const items = [GuildMemberStore, ImpersonateStore];
  return require("initialize").useStateFromStores(items, () => {
    let flag = true;
    if (!ImpersonateStore.isFullServerPreview(closure_0)) {
      const selfMember = GuildMemberStore.getSelfMember(closure_0);
      flag = false;
      if (null != selfMember) {
        const selfMemberJoinedAt = GuildMemberStore.getSelfMemberJoinedAt(closure_0);
        let tmp4 = null != selfMemberJoinedAt;
        if (tmp4) {
          let num = selfMember.flags;
          if (num == null) {
            num = 0;
          }
          const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
          let tmp9 = !hasFlagResult;
          if (!hasFlagResult) {
            const _Date = Date;
            const timestamp = Date.now();
            const diff = timestamp - selfMemberJoinedAt.getTime();
            tmp9 = diff < DurationsDefault.Millis.WEEK;
          }
          tmp4 = tmp9;
        }
        flag = tmp4;
      }
    }
    return flag;
  });
};
export const getIsNewMember = function getIsNewMember(id) {
  let flag = true;
  if (!ImpersonateStore.isFullServerPreview(id)) {
    const selfMember = GuildMemberStore.getSelfMember(id);
    flag = false;
    if (null != selfMember) {
      const selfMemberJoinedAt = GuildMemberStore.getSelfMemberJoinedAt(id);
      let tmp3 = null != selfMemberJoinedAt;
      if (tmp3) {
        let num = selfMember.flags;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        let tmp8 = !hasFlagResult;
        if (!hasFlagResult) {
          const _Date = Date;
          const timestamp = Date.now();
          const diff = timestamp - selfMemberJoinedAt.getTime();
          tmp8 = diff < DurationsDefault.Millis.WEEK;
        }
        tmp3 = tmp8;
      }
      flag = tmp3;
    }
  }
  return flag;
};