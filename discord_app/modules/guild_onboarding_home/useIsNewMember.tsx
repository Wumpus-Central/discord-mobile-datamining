// === Module 6738: useIsNewMember ===

// Module 6738 (useIsNewMember)
import DurationsDefault from "Durations" /* 1102 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4501 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, ImpersonateStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let flag = true;
      if (!ImpersonateStore.isFullServerPreview(closure_0)) {
        const selfMember = GuildMemberStore.getSelfMember(closure_0);
        flag = false;
        if (null != selfMember) {
          const selfMemberJoinedAt = GuildMemberStore.getSelfMemberJoinedAt(closure_0);
          let tmp4 = null != selfMemberJoinedAt;
          if (tmp4) {
            let num = selfMember.flags;
            const hasFlag = FlagUtils.hasFlag;
            FlagUtils;
            if (num == null) {
              num = 0;
            }
            let tmp10 = !hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
            hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
            if (tmp10) {
              const _Date = Date;
              const timestamp = Date.now();
              const diff = timestamp - selfMemberJoinedAt.getTime();
              tmp10 = diff < DurationsDefault.Millis.WEEK;
            }
            tmp4 = tmp10;
          }
          flag = tmp4;
        }
      }
      return flag;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildMemberStore, ImpersonateStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let flag = true;
    if (!ImpersonateStore.isFullServerPreview(closure_0)) {
      const selfMember = GuildMemberStore.getSelfMember(closure_0);
      flag = false;
      if (null != selfMember) {
        const selfMemberJoinedAt = GuildMemberStore.getSelfMemberJoinedAt(closure_0);
        let tmp4 = null != selfMemberJoinedAt;
        if (tmp4) {
          let num = selfMember.flags;
          const hasFlag = FlagUtils.hasFlag;
          FlagUtils;
          if (num == null) {
            num = 0;
          }
          let tmp10 = !hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
          hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
          if (tmp10) {
            const _Date = Date;
            const timestamp = Date.now();
            const diff = timestamp - selfMemberJoinedAt.getTime();
            tmp10 = diff < DurationsDefault.Millis.WEEK;
          }
          tmp4 = tmp10;
        }
        flag = tmp4;
      }
    }
    return flag;
  });
});
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsNewMember.tsx");

export default tmp2;
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
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        if (num == null) {
          num = 0;
        }
        let tmp9 = !hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        if (tmp9) {
          const _Date = Date;
          const timestamp = Date.now();
          const diff = timestamp - selfMemberJoinedAt.getTime();
          tmp9 = diff < DurationsDefault.Millis.WEEK;
        }
        tmp3 = tmp9;
      }
      flag = tmp3;
    }
  }
  return flag;
};