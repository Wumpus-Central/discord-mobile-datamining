// === Module 14255: CheckpointFlows ===

// Module 14255 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6745 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import CheckpointSharedDataFlow from "CheckpointSharedDataFlow" /* 14256 */;
import CheckpointNoSharedDataFlow from "CheckpointNoSharedDataFlow" /* 14257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getAdjacentCheckpointRoute(arg0) {
  ({ currentRoute, direction } = arg0);
  const merged = Object.assign(arg0, Object.assign({ currentRoute: 0, direction: 0 }));
  _require = undefined;
  dependencyMap = undefined;
  isCharacterCreatorEnabled = undefined;
  ({ stats: c0, character: c1, isCharacterCreatorEnabled, flow } = merged);
  if (isCharacterCreatorEnabled === undefined) {
    isCharacterCreatorEnabled = true;
  }
  if (flow === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    let prop = tmp2(14256).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp2(14257).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE) {
      return !isCharacterCreatorEnabled;
    } else {
      let flag2 = isCharacterCreatorEnabled;
      if (!isCharacterCreatorEnabled) {
        let result = item === CheckpointNavigation.CheckpointRoute.INTRODUCTION;
        if (!result) {
          result = CheckpointNavigation.isCheckpointCustomizationRoute(item);
          const tmpResult = CheckpointNavigation;
        }
        if (result) {
          return false;
        }
      }
      if (item === CheckpointNavigation.CheckpointRoute.SUMMARY) {
        if (flag2 === undefined) {
          flag2 = true;
        }
        if (!flag2) {
          flag2 = null != c1;
        }
        if (!flag2) {
          flag2 = null !== c0;
        }
        return flag2;
      } else if (null != obj[item]) {
        return null != c0 && tmp5(c0);
      } else {
        let tmp9 = null == tmp8;
        if (!tmp9) {
          tmp9 = undefined === c0 || tmp8(c0);
          const tmp10 = undefined === c0 || tmp8(c0);
        }
        return tmp9;
      }
    }
  });
  const index = found.indexOf(currentRoute);
  if (-1 === index) {
    let first = found[0];
    if (first == null) {
      first = null;
    }
    let tmp5 = first;
  } else {
    tmp5 = found[index + direction];
    if (tmp5 == null) {
      tmp5 = null;
    }
  }
  return tmp5;
}
let obj = { [CheckpointNavigation.CheckpointRoute.VOICE_INTRO]: (voice) => !CheckpointStatsUtils.hasCheckpointVoiceMinutes(voice), [CheckpointNavigation.CheckpointRoute.MESSAGES_INTRO]: (messages) => !CheckpointStatsUtils.hasCheckpointMessages(messages), [CheckpointNavigation.CheckpointRoute.SERVERS_INTRO]: (guilds) => !CheckpointStatsUtils.hasCheckpointGuilds(guilds), [CheckpointNavigation.CheckpointRoute.EMOJI_INTRO]: (stats) => !CheckpointStatsUtils.hasCheckpointEmojis(stats), [CheckpointNavigation.CheckpointRoute.GAMES_INTRO]: (stats) => !CheckpointStatsUtils.hasCheckpointGames(stats) };
const obj2 = {};
obj2[CheckpointNavigation.CheckpointRoute.TOP_SERVER_STATS] = CheckpointStatsUtils.hasCheckpointGuilds;
obj2[CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION] = CheckpointStatsUtils.hasCheckpointSquad;
obj2[CheckpointNavigation.CheckpointRoute.SQUAD] = CheckpointStatsUtils.hasCheckpointSquad;
obj2[CheckpointNavigation.CheckpointRoute.SIDEKICK] = CheckpointStatsUtils.hasCheckpointSidekick;
obj2[CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE] = CheckpointStatsUtils.hasCheckpointSidekick;
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
}
export function hasCheckpointSummaryRoute(isCharacterCreatorEnabled) {
  let flag = isCharacterCreatorEnabled.isCharacterCreatorEnabled;
  ({ stats, character } = isCharacterCreatorEnabled);
  if (flag === undefined) {
    flag = true;
  }
  if (!flag) {
    flag = null != character;
  }
  if (!flag) {
    flag = null !== stats;
  }
  return flag;
}
export function getCheckpointRoutes(flow) {
  ({ stats: require, character: dependencyMap, isCharacterCreatorEnabled } = flow);
  if (isCharacterCreatorEnabled === undefined) {
    isCharacterCreatorEnabled = true;
  }
  if (flow.flow === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    let prop = CheckpointSharedDataFlow.CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = CheckpointNoSharedDataFlow.CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE) {
      return !isCharacterCreatorEnabled;
    } else {
      let flag2 = isCharacterCreatorEnabled;
      if (!isCharacterCreatorEnabled) {
        let result = item === CheckpointNavigation.CheckpointRoute.INTRODUCTION;
        if (!result) {
          result = CheckpointNavigation.isCheckpointCustomizationRoute(item);
          const tmpResult = CheckpointNavigation;
        }
        if (result) {
          return false;
        }
      }
      if (item === CheckpointNavigation.CheckpointRoute.SUMMARY) {
        if (flag2 === undefined) {
          flag2 = true;
        }
        if (!flag2) {
          flag2 = null != c1;
        }
        if (!flag2) {
          flag2 = null !== c0;
        }
        return flag2;
      } else if (null != obj[item]) {
        return null != c0 && tmp5(c0);
      } else {
        let tmp9 = null == tmp8;
        if (!tmp9) {
          tmp9 = undefined === c0 || tmp8(c0);
          const tmp10 = undefined === c0 || tmp8(c0);
        }
        return tmp9;
      }
    }
  });
}
export { getAdjacentCheckpointRoute };
export function getCheckpointReplayRoute(isCharacterCreatorEnabled) {
  isCharacterCreatorEnabled = isCharacterCreatorEnabled.isCharacterCreatorEnabled;
  if (isCharacterCreatorEnabled != null) {
    if (!isCharacterCreatorEnabled) {
      let CHARACTER_UNAVAILABLE = CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE;
    }
    return CHARACTER_UNAVAILABLE;
  }
  obj = {};
  const merged = Object.assign(isCharacterCreatorEnabled);
  obj.currentRoute = CheckpointNavigation.CheckpointRoute.INTRODUCTION;
  obj.direction = 1;
  let INTRODUCTION = getAdjacentCheckpointRoute(obj);
  if (INTRODUCTION == null) {
    INTRODUCTION = CheckpointNavigation.CheckpointRoute.INTRODUCTION;
  }
  CHARACTER_UNAVAILABLE = INTRODUCTION;
}