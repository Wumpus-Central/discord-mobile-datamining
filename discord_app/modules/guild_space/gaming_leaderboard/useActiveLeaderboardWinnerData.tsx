// discord_app/modules/guild_space/gaming_leaderboard/useActiveLeaderboardWinnerData.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = 14 * DurationsDefault.Millis.DAY;
let closure_4 = 8 * DurationsDefault.Millis.DAY;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
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
      const fn = function l() {
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
        },
        items1,
      );
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useActiveLeaderboardLeaderData(arg0, arg1) {
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
      const fn = function l() {
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
  : function useActiveLeaderboardLeaderData(arg0, arg1) {
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
        },
        items1,
      );
    };
function getActiveLeaderboardWinnerData(prop) {
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
function getActiveLeaderboardLeaderData(prop1) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3 = null;
  if (null != prop1) {
    const currentLeaderWeek = prop1.currentLeaderWeek;
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
      tmp3 = prop1;
    }
  }
  return tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/useActiveLeaderboardWinnerData.tsx");

export default tmp2;
export { getActiveLeaderboardWinnerData };
export { getActiveLeaderboardLeaderData };
export const useActiveLeaderboardLeaderData = tmp3;
export const useHasActiveLeaderboardBadge = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasActiveLeaderboardBadge(arg0, arg1) {
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
      const fn = function l() {
        if (null == closure_0) {
          return false;
        } else {
          const member = GuildMemberStore.getMember(tmp, closure_1);
          let prop;
          if (member != null) {
            prop = member.gamingLeaderboardData;
          }
          const _Date = Date;
          let tmp5 = null;
          if (null != prop) {
            const winningWeek = prop.winningWeek;
            let flag = false;
            if (null != winningWeek) {
              const _Date2 = Date;
              const parsed = Date.parse(winningWeek);
              const _isNaN = isNaN;
              const isNaNResult = isNaN(parsed);
              let tmp9 = !isNaNResult;
              if (!isNaNResult) {
                tmp9 = tmp4 - parsed <= tmp6;
              }
              flag = tmp9;
            }
            tmp5 = null;
            if (flag) {
              tmp5 = prop;
            }
          }
          let tmp10 = null != tmp5;
          if (!tmp10) {
            const _Date3 = Date;
            let tmp12 = null;
            if (null != prop) {
              const currentLeaderWeek = prop.currentLeaderWeek;
              let flag2 = false;
              if (null != currentLeaderWeek) {
                const _Date4 = Date;
                const parsed1 = Date.parse(currentLeaderWeek);
                const _isNaN2 = isNaN;
                const isNaNResult1 = isNaN(parsed1);
                let tmp16 = !isNaNResult1;
                if (!isNaNResult1) {
                  tmp16 = tmp11 - parsed1 <= tmp13;
                }
                flag2 = tmp16;
              }
              tmp12 = null;
              if (flag2) {
                tmp12 = prop;
              }
            }
            tmp10 = null != tmp12;
          }
          return tmp10;
        }
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
  : function useHasActiveLeaderboardBadge(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const items = [GuildMemberStore];
      const items1 = [arg0, arg1];
      return require("initialize").useStateFromStores(
        items,
        () => {
          if (null == closure_0) {
            return false;
          } else {
            const member = GuildMemberStore.getMember(tmp, closure_1);
            let prop;
            if (member != null) {
              prop = member.gamingLeaderboardData;
            }
            const _Date = Date;
            let tmp5 = null;
            if (null != prop) {
              const winningWeek = prop.winningWeek;
              let flag = false;
              if (null != winningWeek) {
                const _Date2 = Date;
                const parsed = Date.parse(winningWeek);
                const _isNaN = isNaN;
                const isNaNResult = isNaN(parsed);
                let tmp9 = !isNaNResult;
                if (!isNaNResult) {
                  tmp9 = tmp4 - parsed <= tmp6;
                }
                flag = tmp9;
              }
              tmp5 = null;
              if (flag) {
                tmp5 = prop;
              }
            }
            let tmp10 = null != tmp5;
            if (!tmp10) {
              const _Date3 = Date;
              let tmp12 = null;
              if (null != prop) {
                const currentLeaderWeek = prop.currentLeaderWeek;
                let flag2 = false;
                if (null != currentLeaderWeek) {
                  const _Date4 = Date;
                  const parsed1 = Date.parse(currentLeaderWeek);
                  const _isNaN2 = isNaN;
                  const isNaNResult1 = isNaN(parsed1);
                  let tmp16 = !isNaNResult1;
                  if (!isNaNResult1) {
                    tmp16 = tmp11 - parsed1 <= tmp13;
                  }
                  flag2 = tmp16;
                }
                tmp12 = null;
                if (flag2) {
                  tmp12 = prop;
                }
              }
              tmp10 = null != tmp12;
            }
            return tmp10;
          }
        },
        items1,
      );
    };
