// discord_app/modules/guild_space/gaming_leaderboard/useActiveLeaderboardWinnerData.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = 14 * DurationsDefault.Millis.DAY;
const ReactCompilerGating = fn(558);
function getActiveLeaderboardWinnerData(prop) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (null != prop) {
    if (null != prop.winningWeek) {
      const _Date2 = Date;
      const parsed = Date.parse(prop.winningWeek);
      const _isNaN = isNaN;
      let tmp5 = null;
      if (!isNaN(parsed)) {
        tmp5 = null;
        if (timestamp - parsed <= closure_3) {
          tmp5 = prop;
        }
      }
      return tmp5;
    }
  }
  return null;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/useActiveLeaderboardWinnerData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useActiveLeaderboardWinnerData(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === arg1) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        return tmp(504).useStateFromStores(first, tmp6, tmp7);
      }
      const fn = function u() {
        let tmp2 = null;
        if (null != closure_0) {
          const member = GuildMemberStore.getMember(tmp, closure_1);
          let prop;
          if (member != null) {
            prop = member.gamingLeaderboardData;
          }
          const _Date = Date;
          let tmp9 = null;
          if (null != prop) {
            tmp9 = null;
            if (null != prop.winningWeek) {
              const _Date2 = Date;
              const parsed = Date.parse(prop.winningWeek);
              const _isNaN = isNaN;
              let tmp11 = null;
              if (!isNaN(parsed)) {
                tmp11 = null;
                if (tmp8 - parsed <= closure_3) {
                  tmp11 = prop;
                }
              }
              tmp9 = tmp11;
            }
          }
          tmp2 = tmp9;
        }
        return tmp2;
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : function useActiveLeaderboardWinnerData(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const items = [GuildMemberStore];
      const items1 = [arg0, arg1];
      return require("initialize").useStateFromStores(
        items,
        () => {
          let tmp2 = null;
          if (null != closure_0) {
            const member = GuildMemberStore.getMember(tmp, closure_1);
            let prop;
            if (member != null) {
              prop = member.gamingLeaderboardData;
            }
            const _Date = Date;
            let tmp9 = null;
            if (null != prop) {
              tmp9 = null;
              if (null != prop.winningWeek) {
                const _Date2 = Date;
                const parsed = Date.parse(prop.winningWeek);
                const _isNaN = isNaN;
                let tmp11 = null;
                if (!isNaN(parsed)) {
                  tmp11 = null;
                  if (tmp8 - parsed <= closure_3) {
                    tmp11 = prop;
                  }
                }
                tmp9 = tmp11;
              }
            }
            tmp2 = tmp9;
          }
          return tmp2;
        },
        items1,
      );
    };
export { getActiveLeaderboardWinnerData };
