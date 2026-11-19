// === Module 13737: useActiveLeaderboardWinnerData ===

// Module 13737 (useActiveLeaderboardWinnerData)
import DurationsDefault from "Durations" /* 1089 */;
import canUseGuildSpace from "canUseGuildSpace" /* 6725 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
import GuildStore from "GuildStore" /* 4663 */;

const require = globalThis.__r;

require = fn;
let closure_4 = 14 * DurationsDefault.Millis.DAY;
let closure_5 = 8 * DurationsDefault.Millis.DAY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/useActiveLeaderboardWinnerData.tsx");

export default function useActiveLeaderboardWinnerData(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  items = [GuildMemberStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
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
        const winningWeek = prop.winningWeek;
        let flag = false;
        if (null != winningWeek) {
          const _Date2 = Date;
          const parsed = Date.parse(winningWeek);
          const _isNaN = isNaN;
          const isNaNResult = isNaN(parsed);
          let tmp13 = !isNaNResult;
          if (!isNaNResult) {
            tmp13 = tmp8 - parsed <= tmp10;
          }
          flag = tmp13;
        }
        tmp9 = null;
        if (flag) {
          tmp9 = prop;
        }
      }
      tmp2 = tmp9;
    }
    return tmp2;
  }, items1);
};
export function getActiveLeaderboardWinnerData(prop) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3 = null;
  if (null != prop) {
    const winningWeek = prop.winningWeek;
    let flag = false;
    if (null != winningWeek) {
      const _Date2 = Date;
      const parsed = Date.parse(winningWeek);
      const _isNaN = isNaN;
      const isNaNResult = isNaN(parsed);
      let tmp8 = !isNaNResult;
      if (!isNaNResult) {
        tmp8 = timestamp - parsed <= tmp4;
      }
      flag = tmp8;
    }
    tmp3 = null;
    if (flag) {
      tmp3 = prop;
    }
  }
  return tmp3;
}
export function getActiveLeaderboardLeaderData(prop) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3 = null;
  if (null != prop) {
    const currentLeaderWeek = prop.currentLeaderWeek;
    let flag = false;
    if (null != currentLeaderWeek) {
      const _Date2 = Date;
      const parsed = Date.parse(currentLeaderWeek);
      const _isNaN = isNaN;
      const isNaNResult = isNaN(parsed);
      let tmp8 = !isNaNResult;
      if (!isNaNResult) {
        tmp8 = timestamp - parsed <= tmp4;
      }
      flag = tmp8;
    }
    tmp3 = null;
    if (flag) {
      tmp3 = prop;
    }
  }
  return tmp3;
}
export function useActiveLeaderboardLeaderData(guildId, userId) {
  _require = guildId;
  dependencyMap = userId;
  items = [GuildMemberStore];
  const items1 = [guildId, userId];
  return require("initialize").useStateFromStores(items, () => {
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
        const currentLeaderWeek = prop.currentLeaderWeek;
        let flag = false;
        if (null != currentLeaderWeek) {
          const _Date2 = Date;
          const parsed = Date.parse(currentLeaderWeek);
          const _isNaN = isNaN;
          const isNaNResult = isNaN(parsed);
          let tmp13 = !isNaNResult;
          if (!isNaNResult) {
            tmp13 = tmp8 - parsed <= tmp10;
          }
          flag = tmp13;
        }
        tmp9 = null;
        if (flag) {
          tmp9 = prop;
        }
      }
      tmp2 = tmp9;
    }
    return tmp2;
  }, items1);
}
export function useHasActiveLeaderboardBadge(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  items = [GuildMemberStore, GuildStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      guild = GuildStore.getGuild(closure_0);
      if (null != guild) {
        const obj = canUseGuildSpace;
        if (obj.isGuildSpaceVisible(guild, obj2.isGuildSpaceAdmin(guild))) {
          const member = GuildMemberStore.getMember(closure_0, closure_1);
          let prop;
          if (member != null) {
            prop = member.gamingLeaderboardData;
          }
          const _Date = Date;
          let tmp8 = null;
          if (null != prop) {
            const winningWeek = prop.winningWeek;
            let flag = false;
            if (null != winningWeek) {
              const _Date2 = Date;
              const parsed = Date.parse(winningWeek);
              const _isNaN = isNaN;
              const isNaNResult = isNaN(parsed);
              let tmp12 = !isNaNResult;
              if (!isNaNResult) {
                tmp12 = tmp7 - parsed <= tmp9;
              }
              flag = tmp12;
            }
            tmp8 = null;
            if (flag) {
              tmp8 = prop;
            }
          }
          let tmp13 = null != tmp8;
          if (!tmp13) {
            const _Date3 = Date;
            let tmp15 = null;
            if (null != prop) {
              const currentLeaderWeek = prop.currentLeaderWeek;
              let flag2 = false;
              if (null != currentLeaderWeek) {
                const _Date4 = Date;
                const parsed1 = Date.parse(currentLeaderWeek);
                const _isNaN2 = isNaN;
                const isNaNResult1 = isNaN(parsed1);
                let tmp19 = !isNaNResult1;
                if (!isNaNResult1) {
                  tmp19 = tmp14 - parsed1 <= tmp16;
                }
                flag2 = tmp19;
              }
              tmp15 = null;
              if (flag2) {
                tmp15 = prop;
              }
            }
            tmp13 = null != tmp15;
          }
          return tmp13;
        }
        obj2 = canUseGuildSpace;
      }
      return false;
    }
  }, items1);
}