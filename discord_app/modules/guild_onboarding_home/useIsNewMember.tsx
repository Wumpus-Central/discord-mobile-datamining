// discord_app/modules/guild_onboarding_home/useIsNewMember.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";

require = fn;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsNewMember.tsx");

export default function useIsNewMember(arg0) {
  _require = arg0;
  const items = [GuildMemberStore, ImpersonateStore];
  return require("initialize").useStateFromStores(items, () => {
    let flag = true;
    if (!ImpersonateStore.isFullServerPreview(closure_0)) {
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
}
export const getIsNewMember = function getIsNewMember(id) {
  let flag = true;
  if (!ImpersonateStore.isFullServerPreview(id)) {
    const selfMember = obj.getSelfMember(id);
    flag = false;
    if (null != selfMember) {
      const selfMemberJoinedAt = obj.getSelfMemberJoinedAt(id);
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
