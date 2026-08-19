// === Module 5284: useIsNewMember ===

// Module 5284 (useIsNewMember)
import obj132Default from "obj132" /* 687 */;
import hasFlag from "hasFlag" /* 1403 */;
import initialize from "initialize" /* 1982 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4009 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/useIsNewMember.tsx");

export default function useIsNewMember(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_3];
  return _require(589).useStateFromStores(items, () => {
    let flag = true;
    if (!closure_1_3.isFullServerPreview(callback)) {
      const selfMember = closure_1_4.getSelfMember(callback);
      flag = false;
      if (null != selfMember) {
        const selfMemberJoinedAt = closure_1_4.getSelfMemberJoinedAt(callback);
        let tmp4 = null != selfMemberJoinedAt;
        if (tmp4) {
          let num = selfMember.flags;
          if (num == null) {
            num = 0;
          }
          const hasFlagResult = callback(dependencyMap[3]).hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
          let tmp9 = !hasFlagResult;
          if (!hasFlagResult) {
            const _Date = Date;
            const timestamp = Date.now();
            const diff = timestamp - selfMemberJoinedAt.getTime();
            tmp9 = diff < obj132Default.Millis.WEEK;
          }
          tmp4 = tmp9;
          const obj3 = callback(dependencyMap[3]);
        }
        flag = tmp4;
      }
    }
    return flag;
  });
};
export const getIsNewMember = function getIsNewMember(closure_0) {
  let flag = true;
  if (!fullServerPreview.isFullServerPreview(closure_0)) {
    const selfMember = store.getSelfMember(closure_0);
    flag = false;
    if (null != selfMember) {
      const selfMemberJoinedAt = store.getSelfMemberJoinedAt(closure_0);
      let tmp3 = null != selfMemberJoinedAt;
      if (tmp3) {
        let num = selfMember.flags;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = hasFlag.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        let tmp8 = !hasFlagResult;
        if (!hasFlagResult) {
          const _Date = Date;
          const timestamp = Date.now();
          const diff = timestamp - selfMemberJoinedAt.getTime();
          tmp8 = diff < obj132Default.Millis.WEEK;
        }
        tmp3 = tmp8;
      }
      flag = tmp3;
    }
  }
  return flag;
};