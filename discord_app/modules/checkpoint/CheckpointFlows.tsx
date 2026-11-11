// discord_app/modules/checkpoint/CheckpointFlows.tsx
import CheckpointNavigation from "CheckpointNavigation.tsx";
import CheckpointStatsUtils from "CheckpointStatsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function getAdjacentCheckpointRoute(isCharacterCreatorEnabled) {
  let flag;
  ({ stats: require, flow, currentRoute, direction } = isCharacterCreatorEnabled);
  if (flag === undefined) {
    flag = true;
  }
  if (flow === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    let prop = require("CheckpointSharedDataFlow").CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = require("CheckpointNoSharedDataFlow").CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE) {
      return !flag;
    } else {
      if (!flag) {
        let result = item === CheckpointNavigation.CheckpointRoute.INTRODUCTION;
        if (!result) {
          result = CheckpointNavigation.isCheckpointCustomizationRoute(item);
          const tmpResult = CheckpointNavigation;
        }
        if (result) {
          return false;
        }
      }
      if (!tmp15) {
        if (item === CheckpointNavigation.CheckpointRoute.SUMMARY) {
          if (null === closure_1_0) {
            return false;
          }
        }
      }
      if (null != obj[item]) {
        return null != closure_1_0 && tmp7(closure_1_0);
      } else {
        let tmp11 = null == tmp10;
        if (!tmp11) {
          tmp11 = undefined === closure_1_0 || tmp10(closure_1_0);
          const tmp12 = undefined === closure_1_0 || tmp10(closure_1_0);
        }
        return tmp11;
      }
      tmp15 = flag;
    }
  });
  const index = found.indexOf(currentRoute);
  if (-1 === index) {
    let INTRODUCTION = require("CheckpointNavigation").CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + direction];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
}
let obj = {
  [CheckpointNavigation.CheckpointRoute.VOICE_INTRO]: (voice) => !CheckpointStatsUtils.hasCheckpointVoiceMinutes(voice),
  [CheckpointNavigation.CheckpointRoute.MESSAGES_INTRO]: (messages) =>
    !CheckpointStatsUtils.hasCheckpointMessages(messages),
  [CheckpointNavigation.CheckpointRoute.SERVERS_INTRO]: (guilds) => !CheckpointStatsUtils.hasCheckpointGuilds(guilds),
  [CheckpointNavigation.CheckpointRoute.EMOJI_INTRO]: (stats) => !CheckpointStatsUtils.hasCheckpointEmojis(stats),
  [CheckpointNavigation.CheckpointRoute.GAMES_INTRO]: (stats) => !CheckpointStatsUtils.hasCheckpointGames(stats),
};
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
export function getCheckpointRoutes(flow) {
  ({ stats: require, isCharacterCreatorEnabled } = flow);
  if (isCharacterCreatorEnabled === undefined) {
    isCharacterCreatorEnabled = true;
  }
  if (flow.flow === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    let prop = require("CheckpointSharedDataFlow").CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = require("CheckpointNoSharedDataFlow").CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE) {
      return !flag;
    } else {
      if (!flag) {
        let result = item === CheckpointNavigation.CheckpointRoute.INTRODUCTION;
        if (!result) {
          result = CheckpointNavigation.isCheckpointCustomizationRoute(item);
          const tmpResult = CheckpointNavigation;
        }
        if (result) {
          return false;
        }
      }
      if (!tmp15) {
        if (item === CheckpointNavigation.CheckpointRoute.SUMMARY) {
          if (null === closure_1_0) {
            return false;
          }
        }
      }
      if (null != obj[item]) {
        return null != closure_1_0 && tmp7(closure_1_0);
      } else {
        let tmp11 = null == tmp10;
        if (!tmp11) {
          tmp11 = undefined === closure_1_0 || tmp10(closure_1_0);
          const tmp12 = undefined === closure_1_0 || tmp10(closure_1_0);
        }
        return tmp11;
      }
      tmp15 = flag;
    }
  });
}
export { getAdjacentCheckpointRoute };
export function getCheckpointReplayRoute(arg0) {
  obj = {};
  const merged = Object.assign(arg0);
  obj.currentRoute = CheckpointNavigation.CheckpointRoute.INTRODUCTION;
  obj.direction = 1;
  let INTRODUCTION = getAdjacentCheckpointRoute(obj);
  if (INTRODUCTION == null) {
    INTRODUCTION = CheckpointNavigation.CheckpointRoute.INTRODUCTION;
  }
  return INTRODUCTION;
}
