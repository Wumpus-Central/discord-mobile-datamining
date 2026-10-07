// discord_app/modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx
import MemberVerificationUtils from "../MemberVerificationUtils.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function shouldShowMembershipVerificationGate(guildId) {
  let tmp = items;
  if (items === undefined) {
    items = [GuildStore, UserStore, GuildMemberStore];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  if (null == guildId) {
    return false;
  } else {
    guild = obj.getGuild(guildId);
    const currentUser = obj2.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const member = obj3.getMember(guildId, currentUser.id);
      let flag2;
      if (member != null) {
        flag2 = member.isPending;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      flag = flag2;
    }
    if (flag) {
      flag = MemberVerificationUtils.guildHasVerificationGate(guild);
    }
    return flag;
  }
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx");

export { shouldShowMembershipVerificationGate };
export const useShowMemberVerificationGate = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, UserStore, GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let tmp2 = null != closure_0;
          if (tmp2) {
            const items = [GuildStore, UserStore, GuildMemberStore];
            tmp2 = shouldShowMembershipVerificationGate(tmp, items);
          }
          return tmp2;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp8, tmp9);
    }
  : (arg0) => {
      _require = arg0;
      let items = [GuildStore, UserStore, GuildMemberStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
          let tmp2 = null != closure_0;
          if (tmp2) {
            const items = [GuildStore, UserStore, GuildMemberStore];
            tmp2 = shouldShowMembershipVerificationGate(tmp, items);
          }
          return tmp2;
        },
        items1,
      );
    };
