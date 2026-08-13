// discord_app/modules/quests/utils/QuestTaskUtils.tsx
import initializeState from "initializeState";
import { set } from "../../../utils/Durations.tsx";

let items5 = arg1;
function getApplicationIdsByTaskTypes(nextResult, items) {
  if (null != nextResult) {
    const _Set = Set;
    const set = new Set();
    const tmp7 = items[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp11 = nextResult.config.taskConfigV2.tasks[tmp9];
      let tmp12 = tmp11;
      if (null != tmp11) {
        let tmp13 = tmp11;
        if ("applications" in tmp12) {
          let _Array = Array;
          let tmp14 = tmp11;
          if (Array.isArray(tmp12.applications)) {
            let tmp15 = tmp11;
            let applications = tmp12.applications;
            let tmp16 = applications;
            let tmp17 = applications;
            for (const item10034 of applications) {
              let addResult = set.add(item10034.id);
              continue;
            }
          }
        }
      }
      continue;
    }
    let arr;
    if (set.size > 0) {
      const _Array2 = Array;
      arr = Array.from(set);
    }
    return arr;
  }
}
function isQuestProgressingOnConsole(closure_0) {
  let tmp = null != closure_0.userStatus;
  if (tmp) {
    const userStatus = closure_0.userStatus;
    let expiresAt;
    if (userStatus != null) {
      if (userStatus.progress[tmp4] != null) {
        const heartbeat = tmp6.heartbeat;
        if (heartbeat != null) {
          expiresAt = heartbeat.expiresAt;
        }
      }
    }
    let flag = false;
    if (null != expiresAt) {
      const _Date = Date;
      const date = new Date(expiresAt);
      let valueOfResult = date.valueOf();
      const _isNaN = isNaN;
      const isNaNResult = isNaN(valueOfResult);
      let tmp14 = !isNaNResult;
      if (!isNaNResult) {
        const _Date2 = Date;
        tmp14 = valueOfResult > Date.now();
      }
      flag = tmp14;
    }
    if (!flag) {
      const userStatus2 = closure_0.userStatus;
      let expiresAt1;
      if (userStatus2 != null) {
        if (userStatus2.progress[tmp15] != null) {
          const heartbeat2 = tmp17.heartbeat;
          if (heartbeat2 != null) {
            expiresAt1 = heartbeat2.expiresAt;
          }
        }
      }
      let flag2 = false;
      if (null != expiresAt1) {
        const _Date3 = Date;
        const date1 = new Date(expiresAt1);
        valueOfResult = date1.valueOf();
        const _isNaN2 = isNaN;
        const isNaNResult1 = isNaN(valueOfResult);
        let tmp25 = !isNaNResult1;
        if (!isNaNResult1) {
          const _Date4 = Date;
          tmp25 = valueOfResult > Date.now();
        }
        flag2 = tmp25;
      }
      flag = flag2;
    }
    tmp = flag;
  }
  return tmp;
}
function _isPlayOnDesktopTaskType(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  return type === items5(5209).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP;
}
function _getTaskDetailsForType(arg0) {
  let includeTaskTypes;
  let quest;
  let target;
  let target2;
  let taskType;
  ({ quest, taskType, includeTaskTypes } = arg0);
  if (includeTaskTypes === undefined) {
    includeTaskTypes = quest(5209).FirstPartyQuestTaskTypesSets.ALL;
  }
  quest = includeTaskTypes;
  const taskConfigV2 = quest.config.taskConfigV2;
  let tmp3 = taskType;
  if (taskType == null) {
    const _Object = Object;
    let values = Object.values(taskConfigV2.tasks);
    const first = values.filter((type) => quest.has(type.type))[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    tmp3 = type;
  }
  let floorResult = taskConfigV2.tasks[tmp3];
  if (floorResult == null) {
    floorResult = taskConfigV2.tasks[quest(undefined, 5209).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
  }
  if (null == floorResult) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Quest " + quest.id + " has no task matching the include filters");
    let obj = { tags: null, extra: null };
    obj[0] = { source: "_getTaskDetailsForType" };
    obj = { questId: null, taskType: null, includeTaskTypes: null };
    obj[0] = quest.id;
    obj[1] = taskType;
    if (includeTaskTypes == null) {
      includeTaskTypes = [];
    }
    obj[2] = Array.from(includeTaskTypes);
    obj[1] = obj;
    const result = quest(7204).captureQuestsException(error, obj);
    return null;
  } else {
    ({ target: target2, target } = floorResult);
    const userStatus3 = quest.userStatus;
    let completedAt;
    if (userStatus3 != null) {
      completedAt = userStatus3.completedAt;
    }
    if (null != completedAt) {
      const _Object2 = Object;
      values = Object.values(taskConfigV2.tasks);
      const found = values.find(_isPlayOnDesktopTaskType);
      let mapped;
      if (found != null) {
        const applications = found.applications;
        if (applications != null) {
          mapped = applications.map((id) => id.id);
        }
      }
      let obj1 = { progressSeconds: null, targetSeconds: null, targetMinutes: null, percentComplete: null, taskType: null, applications: null };
      obj1[0] = target;
      obj1[1] = target2;
      const _Math3 = Math;
      obj1[2] = Math.ceil(target2 / set.Seconds.MINUTE);
      let num7 = 0;
      if (target2 > 0) {
        const _Math4 = Math;
        num7 = quest(12).floor(Math.min(target / target2, 1), 4);
        const obj5 = quest(12);
      }
      obj1[3] = num7;
      obj1[4] = tmp3;
      obj1[5] = mapped;
      return obj1;
    } else {
      const userStatus4 = quest.userStatus;
      let tmp12;
      if (userStatus4 != null) {
        const progress = userStatus4.progress;
        if (progress != null) {
          tmp12 = progress[floorResult.type];
        }
      }
      let num;
      if (tmp12 != null) {
        num = tmp12.value;
      }
      if (num == null) {
        const userStatus = quest.userStatus;
        let prop;
        if (userStatus != null) {
          prop = userStatus.streamProgressSeconds;
        }
        num = prop;
      }
      if (num == null) {
        num = 0;
      }
      if (typeof fn4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (quest.some((arg0) => null != config.config.taskConfigV2.tasks[arg0])) {
        let optimisticProgress = initializeState.getOptimisticProgress(quest.id, floorResult.type);
        if (null == optimisticProgress) {
          optimisticProgress = num;
        }
        let sum = optimisticProgress;
      } else {
        const userStatus2 = quest.userStatus;
        let lastBeatAt;
        if (userStatus2 != null) {
          const progress2 = userStatus2.progress;
          if (progress2 != null) {
            if (progress2[floorResult.type] != null) {
              const heartbeat = tmp17.heartbeat;
              if (heartbeat != null) {
                lastBeatAt = heartbeat.lastBeatAt;
              }
            }
          }
        }
        let num2 = 0;
        if (null != lastBeatAt) {
          let result1 = isQuestProgressingOnConsole(quest);
          if (!result1) {
            result1 = initializeState.isProgressingOnDesktop(quest.id);
          }
          num2 = 0;
          if (result1) {
            const _Date = Date;
            const _Date2 = Date;
            const timestamp = Date.now();
            const date = new Date(lastBeatAt);
            const diff = timestamp - date.valueOf();
            obj1 = quest(12);
            num2 = obj1.floor(diff / set.Millis.SECOND, 2);
          }
        }
        sum = num + num2;
      }
      const _Math = Math;
      target = Math.min(0.99 * target, sum);
      const _Math2 = Math;
      num = Math.max;
      floorResult = quest(12).floor(target, 2);
      num(floorResult, 0);
      const obj3 = quest(12);
    }
  }
}
function _parseFirstPartyTaskType(arg0) {
  const ALL = items5(5209).FirstPartyQuestTaskTypesSets.ALL;
  let tmp = null;
  if (ALL.has(arg0)) {
    tmp = arg0;
  }
  return tmp;
}
function formatWatchTaskTimeFromSeconds(arg0) {
  let truncate;
  if (arg1 != null) {
    truncate = arg1.truncate;
  }
  if (null != truncate) {
    if (arg0 > arg1.truncate) {
      truncate = arg1.truncate;
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      const _Math4 = Math;
      const bound = Math.max(0, Math.floor(truncate / 60));
      const _String = String;
      const bound1 = Math.max(0, Math.floor(truncate % 60));
      const _String2 = String;
      const StringResult = String(bound);
      const padStartResult = String(bound).padStart(2, "0");
      const _HermesInternal = HermesInternal;
      const _HermesInternal2 = HermesInternal;
      return "" + "" + padStartResult + ":" + String(bound1).padStart(2, "0") + "+";
    }
  }
  const bound2 = Math.max(0, Math.floor(arg0 / 60));
  const bound3 = Math.max(0, Math.floor(arg0 % 60));
  const StringResult2 = String(bound2);
  const padStartResult1 = String(bound2).padStart(2, "0");
  return "" + padStartResult1 + ":" + String(bound3).padStart(2, "0");
}
let items = [require("set").FirstPartyQuestTaskTypes.PLAY_ON_XBOX, require("set").FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION];
items5 = items;
const fn = (arg0) => {
  let closure_0 = arg0;
  return closure_0.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
};
const items1 = [require("set").FirstPartyQuestTaskTypes.WATCH_VIDEO];
items5 = items1;
const fn2 = (arg0) => {
  let closure_0 = arg0;
  return closure_0.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
};
const items2 = [require("set").FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
items5 = items2;
const fn3 = (arg0) => {
  let closure_0 = arg0;
  return closure_0.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
};
const items3 = [require("set").FirstPartyQuestTaskTypes.WATCH_VIDEO, require("set").FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
items5 = items3;
const fn4 = (arg0) => {
  let closure_0 = arg0;
  return closure_0.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
};
const items4 = [require("set").FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, require("set").FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, require("set").FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION, require("set").FirstPartyQuestTaskTypes.PLAY_ON_XBOX, require("set").FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
items5 = items4;
items5 = [require("set").FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY, require("set").FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
let result = require("apply").fileFinishedImporting("modules/quests/utils/QuestTaskUtils.tsx");

export const getAllApplicationIds = function getAllApplicationIds(quest) {
  if (null != quest) {
    const _Object = Object;
    return getApplicationIdsByTaskTypes(quest, Object.keys(quest.config.taskConfigV2.tasks));
  }
};
export const getDesktopApplicationIds = function getDesktopApplicationIds(nextResult) {
  const items = [items5(5209).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
  return getApplicationIdsByTaskTypes(nextResult, items);
};
export const getConsoleApplicationId = function getConsoleApplicationId(id) {
  const items = [items5(5209).FirstPartyQuestTaskTypes.PLAY_ON_XBOX, items5(5209).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION];
  const tmp = getApplicationIdsByTaskTypes(id, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const getPlayActivityApplicationId = function getPlayActivityApplicationId(item10047) {
  const items = [items5(5209).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
  const tmp = getApplicationIdsByTaskTypes(item10047, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const getInGameApplicationId = function getInGameApplicationId(quest) {
  const items = [items5(5209).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
  const tmp = getApplicationIdsByTaskTypes(quest, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const getActivityApplicationId = function getActivityApplicationId(quest) {
  const items = [items5(5209).FirstPartyQuestTaskTypes.PLAY_ACTIVITY, items5(5209).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
  const tmp = getApplicationIdsByTaskTypes(quest, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const getStreamingApplicationId = function getStreamingApplicationId(nextResult) {
  const items = [items5(5209).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
  const tmp = getApplicationIdsByTaskTypes(nextResult, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const hasPlayOnDesktopTask = function hasPlayOnDesktopTask(arg0) {
  return null != arg0.quest.config.taskConfigV2.tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
};
export const hasStreamOnDesktopTask = function hasStreamOnDesktopTask(arg0) {
  return null != arg0.quest.config.taskConfigV2.tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
};
export const hasAchievementActivityTask = function hasAchievementActivityTask(quest) {
  return null != quest.config.taskConfigV2.tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
};
export const hasAchievementInGameTask = function hasAchievementInGameTask(quest) {
  return null != quest.config.taskConfigV2.tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
};
export const hasPlayActivityTask = function hasPlayActivityTask(quest) {
  return null != quest.config.taskConfigV2.tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
};
export const shouldUsePlayOnDesktopTask = function shouldUsePlayOnDesktopTask(quest) {
  let tmp = null != quest;
  if (tmp) {
    tmp = null != quest.config.taskConfigV2.tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
  }
  return tmp;
};
export function hasSomeFirstPartyTasks(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let closure_0 = arg0;
    return closure_0.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
  };
}
export const isInGameQuest = function isInGameQuest(quest) {
  const items5 = quest;
  return Array.from(items5(5209).FirstPartyQuestTaskTypesSets.IN_GAME).some((arg0) => null != quest.config.taskConfigV2.tasks[arg0]);
};
export const hasSomeConsoleTasks = fn;
export const hasWatchVideoOnDesktopTasks = fn2;
export const hasWatchVideoOnMobileTasks = fn3;
export const hasWatchVideoTasks = fn4;
export const hasStandaloneGameplayTasks = (arg0) => {
  let closure_0 = arg0;
  return closure_0.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
};
export const hasActivityTasks = (arg0) => {
  let closure_0 = arg0;
  return closure_0.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
};
export const isVideoQuestForMobilePlatformOnly = function isVideoQuestForMobilePlatformOnly(arg0) {
  if (typeof fn3 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let items5 = arg0;
  let someResult = items5.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
  if (someResult) {
    if (typeof fn2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    items5 = arg0;
    someResult = !items5.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
  }
  return someResult;
};
export const isConsoleQuest = function isConsoleQuest(quest) {
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const items5 = quest;
  return items5.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
};
export const isDesktopOnlyPlayQuest = function isDesktopOnlyPlayQuest(arg0) {
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const items5 = arg0;
  const someResult = items5.some((arg0) => null != config.config.taskConfigV2.tasks[arg0]);
  let tmp2 = !someResult;
  if (!someResult) {
    tmp2 = null != arg0.config.taskConfigV2.tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
  }
  return tmp2;
};
export { isQuestProgressingOnConsole };
export const getQuestTaskTypes = function getQuestTaskTypes(config) {
  return new Set(Object.keys(config.config.taskConfigV2.tasks));
};
export const getDefaultWatchVideoTask = function getDefaultWatchVideoTask(config) {
  const tmp = config.taskConfigV2.tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.WATCH_VIDEO];
  const tmp2 = config.taskConfigV2.tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  if (null == tmp) {
    let tmp4 = tmp2;
    if (tmp2 == null) {
      tmp4 = tmp;
    }
    if (tmp4 == null) {
      tmp4 = null;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = tmp2;
  }
  return tmp3;
};
export const getQuestTaskDetails = function getQuestTaskDetails(closure_0, DESKTOP) {
  let items5 = closure_0;
  if (arr.some((arg0) => null != quest.config.taskConfigV2.tasks[arg0])) {
    let obj = { progressSeconds: 0, targetSeconds: 1, targetMinutes: 1, percentComplete: 0, taskType: null };
    obj[4] = tmp(5209).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
    let tmp13Result = obj;
  } else {
    if (typeof fn !== "function") {
      HermesBuiltin.throwTypeError();
    }
    items5 = closure_0;
    if (items5.some((arg0) => null != config.config.taskConfigV2.tasks[arg0])) {
      obj = { quest: null, includeTaskTypes: null };
      obj[0] = closure_0;
      if (DESKTOP != null) {
        obj[1] = DESKTOP;
        tmp13Result = (function _getLatestTaskDetails(arg0) {
          let includeTaskTypes;
          let quest;
          ({ quest, includeTaskTypes } = arg0);
          if (includeTaskTypes === undefined) {
            includeTaskTypes = callback(5209).FirstPartyQuestTaskTypesSets.ALL;
          }
          const userStatus = quest.userStatus;
          let progress;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values = Object.values(progress);
          const sorted = values.sort((heartbeat, heartbeat2) => {
            let lastBeatAt;
            if (heartbeat != null) {
              heartbeat = heartbeat.heartbeat;
              if (heartbeat != null) {
                lastBeatAt = heartbeat.lastBeatAt;
              }
            }
            if (heartbeat2 != null) {
              heartbeat2 = heartbeat2.heartbeat;
              if (heartbeat2 != null) {
                lastBeatAt = heartbeat2.lastBeatAt;
              }
            }
            if (null != lastBeatAt) {
              if (null != lastBeatAt) {
                const _Date3 = Date;
                const date = new Date(lastBeatAt);
                const _Date4 = Date;
                let valueOfResult = date.valueOf();
                const date1 = new Date(lastBeatAt);
                let num3 = 1;
                if (valueOfResult > date1.valueOf()) {
                  num3 = -1;
                }
                let num = num3;
              }
              return num;
            }
            if (null == lastBeatAt) {
              if (null == lastBeatAt) {
                let updatedAt;
                if (heartbeat != null) {
                  updatedAt = heartbeat.updatedAt;
                }
                if (null != updatedAt) {
                  let updatedAt1;
                  if (heartbeat2 != null) {
                    updatedAt1 = heartbeat2.updatedAt;
                  }
                  if (null != updatedAt1) {
                    const _Date = Date;
                    const date2 = new Date(heartbeat.updatedAt);
                    const _Date2 = Date;
                    valueOfResult = date2.valueOf();
                    const date3 = new Date(heartbeat2.updatedAt);
                    let num2 = 1;
                    if (valueOfResult > date3.valueOf()) {
                      num2 = -1;
                    }
                    num = num2;
                  }
                }
              }
            }
            num = 1;
            if (null != lastBeatAt) {
              num = 1;
              if (null == lastBeatAt) {
                num = -1;
              }
            }
          });
          const found = sorted.filter(callback(1370).isNotNullish);
          const obj3 = found[Symbol.iterator]();
          while (obj3 !== undefined) {
            let tmp5 = callback3;
            let tmp6 = callback3(tmp4.eventName);
            let tmp7 = tmp6;
            if (null != tmp6) {
              let hasItem;
              if (includeTaskTypes != null) {
                let tmp9 = tmp6;
                hasItem = includeTaskTypes.has(tmp7);
              }
              if (hasItem) {
                let tmp10 = callback2;
                let obj = { quest: null, taskType: null, includeTaskTypes: null };
                obj[0] = quest;
                let tmp11 = tmp6;
                obj[1] = tmp7;
                obj[2] = includeTaskTypes;
                let tmp12 = callback2(obj);
                let tmp13 = tmp12;
                if (null != tmp12) {
                  let tmp14 = obj3;
                  obj3.return();
                  return tmp12;
                }
              }
            }
            continue;
          }
          return callback2({ quest, includeTaskTypes });
        })(obj);
      } else {
        const FirstPartyQuestTaskTypesSets = tmp(5209).FirstPartyQuestTaskTypesSets;
        const tmp23 = isQuestProgressingOnConsole(closure_0);
      }
    } else {
      if (typeof fn4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      items5 = closure_0;
      if (items5.some((arg0) => null != config.config.taskConfigV2.tasks[arg0])) {
        const obj1 = { quest: null, taskType: null };
        obj1[0] = closure_0;
        const config = closure_0.config;
        let tmp14 = config.taskConfigV2.tasks[tmp(undefined, 5209).FirstPartyQuestTaskTypes.WATCH_VIDEO];
        const tmp15 = config.taskConfigV2.tasks[tmp(undefined, 5209).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
        if (null == tmp14) {
          let tmp18 = tmp15;
          if (tmp15 == null) {
            tmp18 = tmp14;
          }
          if (tmp18 == null) {
            tmp18 = null;
          }
          let tmp17 = tmp18;
        } else {
          tmp17 = tmp15;
        }
        let type;
        if (tmp17 != null) {
          type = tmp17.type;
        }
        obj1[1] = type;
        tmp13Result = _getTaskDetailsForType(obj1);
        let tmp13 = _getTaskDetailsForType;
      } else {
        let tmp8 = null != closure_0;
        if (tmp8) {
          tmp8 = null != closure_0.config.taskConfigV2.tasks[tmp(undefined, 5209).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
        }
        if (tmp8) {
          const obj2 = { quest: null, taskType: null };
          obj2[0] = closure_0;
          obj2[1] = tmp(5209).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP;
          tmp13Result = _getTaskDetailsForType(obj2);
        } else if (null != closure_0.config.taskConfigV2.tasks[tmp(undefined, 5209).FirstPartyQuestTaskTypes.PLAY_ACTIVITY]) {
          let obj3 = { quest: null, taskType: null };
          obj3[0] = closure_0;
          obj3[1] = tmp(5209).FirstPartyQuestTaskTypes.PLAY_ACTIVITY;
          tmp13Result = _getTaskDetailsForType(obj3);
        } else {
          const obj4 = { quest: null, taskType: null };
          obj4[0] = closure_0;
          obj4[1] = tmp(5209).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
          tmp13Result = _getTaskDetailsForType(obj4);
        }
      }
    }
  }
  if (null != tmp13Result) {
    return tmp13Result;
  } else {
    const obj5 = { quest: null };
    obj5[0] = closure_0;
    let tmp26 = _getTaskDetailsForType(obj5);
    if (null == tmp26) {
      const obj6 = { progressSeconds: 0, targetSeconds: 1, targetMinutes: 1, percentComplete: 0, taskType: null };
      obj6[4] = tmp(5209).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
      tmp26 = obj6;
    }
    return tmp26;
  }
  arr = Array.from(items5(5209).FirstPartyQuestTaskTypesSets.IN_GAME);
};
export const getDefaultInGameTask = function getDefaultInGameTask(config) {
  const tasks = config.taskConfigV2.tasks;
  let tmp = tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
  if (tmp == null) {
    tmp = tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
  }
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
export const getThirdPartyTaskDetails = function getThirdPartyTaskDetails(closure_0) {
  const tasks = closure_0.config.taskConfigV2.tasks;
  let tmp3 = tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
  if (tmp3 == null) {
    tmp3 = tasks[items5(undefined, 5209).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
  }
  if (tmp3 == null) {
    tmp3 = null;
  }
  if (null == tmp3) {
    return null;
  } else {
    const userStatus = closure_0.userStatus;
    let num;
    if (userStatus != null) {
      const progress = userStatus.progress;
      if (progress != null) {
        if (progress[tmp3.type] != null) {
          num = iter.value;
        }
      }
    }
    if (num == null) {
      num = 0;
    }
    const target = tmp3.target;
    let num2 = 0;
    if (target > 0) {
      const _Math = Math;
      num2 = tmp(12).floor(Math.min(num / target, 1), 4);
      const tmpResult = tmp(12);
    }
    const obj = { title: null, description: null, target: null, progress: null, percentComplete: null };
    obj[0] = tmp3.messages.taskTitle;
    obj[1] = tmp3.messages.taskDescription;
    obj[2] = tmp3.target;
    obj[3] = num;
    obj[4] = num2;
    return obj;
  }
  tmp = items5;
};
export const getRemainingTaskTime = function getRemainingTaskTime(targetSeconds) {
  const diff = targetSeconds.targetSeconds - targetSeconds.progressSeconds;
  return { minutes: Math.max(0, Math.floor(diff / 60)), seconds: Math.max(0, Math.floor(diff % 60)) };
};
export const parseMinutesAndSecondsFromSeconds = function parseMinutesAndSecondsFromSeconds(arg0) {
  return { minutes: Math.max(0, Math.floor(arg0 / 60)), seconds: Math.max(0, Math.floor(arg0 % 60)) };
};
export const formatWatchTaskRemainingTime = function formatWatchTaskRemainingTime(targetSeconds) {
  return formatWatchTaskTimeFromSeconds(targetSeconds.targetSeconds - targetSeconds.progressSeconds);
};
export const formatWatchTaskTime = function formatWatchTaskTime(minutes, seconds) {
  const StringResult = String(minutes);
  const padStartResult = String(minutes).padStart(2, "0");
  return "" + padStartResult + ":" + String(seconds).padStart(2, "0");
};
export { formatWatchTaskTimeFromSeconds };