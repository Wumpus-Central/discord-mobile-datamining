// discord_app/modules/guild_onboarding_home/useIsNewMember.tsx
import setDefault from "../../utils/Durations.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import closure_3 from "../impersonate/ImpersonateStore.tsx";
import closure_4 from "../../stores/GuildMemberStore.tsx";
import { GuildMemberFlags } from "../guild_member/GuildMemberConstants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/useIsNewMember.tsx");

export default function useIsNewMember(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_3];
  return _initialize.useStateFromStores(items, () => {
    let flag = true;
    if (!closure_1_3.isFullServerPreview(callback)) {
      const selfMember = obj.getSelfMember(tmp);
      flag = false;
      if (null != selfMember) {
        const selfMemberJoinedAt = obj.getSelfMemberJoinedAt(tmp);
        let tmp4 = null != selfMemberJoinedAt;
        if (tmp4) {
          let num = selfMember.flags;
          if (num == null) {
            num = 0;
          }
          const hasFlagResult = callback(closure_1_2[3]).hasFlag(num, closure_1_5.COMPLETED_HOME_ACTIONS);
          let tmp9 = !hasFlagResult;
          if (!hasFlagResult) {
            const _Date = Date;
            const timestamp = Date.now();
            const diff = timestamp - selfMemberJoinedAt.getTime();
            tmp9 = diff < closure_1_1(tmp6[4]).Millis.WEEK;
          }
          tmp4 = tmp9;
          const obj3 = callback(closure_1_2[3]);
          tmp6 = closure_1_2;
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
    const selfMember = obj.getSelfMember(closure_0);
    flag = false;
    if (null != selfMember) {
      const selfMemberJoinedAt = obj.getSelfMemberJoinedAt(closure_0);
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
          tmp8 = diff < setDefault.Millis.WEEK;
        }
        tmp3 = tmp8;
        const obj3 = hasFlag;
      }
      flag = tmp3;
    }
  }
  return flag;
};