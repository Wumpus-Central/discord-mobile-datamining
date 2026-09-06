// === Module 7724: QuestTaskUtils ===

// Module 7724 (QuestTaskUtils)
import _mod12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1090 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5452 */;
import QuestDataUtils from "QuestDataUtils" /* 7699 */;
import QuestStore from "QuestStore" /* 7703 */;

require = fn;
function getApplicationIdsByTaskTypes(nextResult, items) {
  if (null != nextResult) {
    const _Set = Set;
    const set = new Set();
    const tmp7 = items[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp11 = nextResult.config.taskConfigV2.tasks[tmp9];
      let tmp12 = tmp11;
      if (null != tmp11) {
        if ("applications" in tmp12) {
          let _Array = Array;
          if (Array.isArray(tmp12.applications)) {
            let applications = tmp12.applications;
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
function isQuestProgressingOnConsole(quest) {
  let tmp = null != quest.userStatus;
  if (tmp) {
    const userStatus = quest.userStatus;
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
      const userStatus2 = quest.userStatus;
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
  return type === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP;
}
function _getTaskDetailsForType(arg0) {
  ({ quest, taskType, includeTaskTypes } = arg0);
  if (includeTaskTypes === undefined) {
    includeTaskTypes = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.ALL;
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
    floorResult = taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
  }
  if (null == floorResult) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Quest " + quest.id + " has no task matching the include filters");
    let obj = { tags: { source: "_getTaskDetailsForType" }, extra: null };
    obj = { questId: quest.id, taskType, includeTaskTypes: null };
    if (includeTaskTypes == null) {
      includeTaskTypes = [];
    }
    obj.includeTaskTypes = Array.from(includeTaskTypes);
    obj.extra = obj;
    const result = QuestDataUtils.captureQuestsException(error, obj);
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
      let obj1 = { progressSeconds: target, targetSeconds: target2, targetMinutes: null, percentComplete: null, taskType: null, applications: null };
      const _Math3 = Math;
      obj1.targetMinutes = Math.ceil(target2 / DurationsDefault.Seconds.MINUTE);
      let num7 = 0;
      if (target2 > 0) {
        const _Math4 = Math;
        num7 = _mod12.floor(Math.min(target / target2, 1), 4);
      }
      obj1.percentComplete = num7;
      obj1.taskType = tmp3;
      obj1.applications = mapped;
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
      if (typeof fn4 === "function") {
        if (closure_136_0.some((item) => null != config.config.taskConfigV2.tasks[item])) {
          let optimisticProgress = QuestStore.getOptimisticProgress(quest.id, floorResult.type);
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
              result1 = QuestStore.isProgressingOnDesktop(quest.id);
            }
            num2 = 0;
            if (result1) {
              const _Date = Date;
              const _Date2 = Date;
              const timestamp = Date.now();
              const date = new Date(lastBeatAt);
              const diff = timestamp - date.valueOf();
              obj1 = _mod12;
              num2 = obj1.floor(diff / DurationsDefault.Millis.SECOND, 2);
            }
          }
          sum = num + num2;
        }
        const _Math = Math;
        target = Math.min(0.99 * target, sum);
        const _Math2 = Math;
        num = Math.max;
        floorResult = _mod12.floor(target, 2);
        num(floorResult, 0);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
}
function _parseFirstPartyTaskType(arg0) {
  const ALL = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.ALL;
  let tmp = null;
  if (ALL.has(arg0)) {
    tmp = arg0;
  }
  return tmp;
}
function formatWatchTaskTimeFromSeconds(arg0, arg1) {
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
let items = [fn(5452).FirstPartyQuestTaskTypes.PLAY_ON_XBOX, fn(5452).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION];
let closure_129_0 = items;
const hasSomeConsoleTasks = (arg0) => {
  const config = arg0;
  return config.some((item) => null != config.config.taskConfigV2.tasks[item]);
};
const items1 = [fn(5452).FirstPartyQuestTaskTypes.WATCH_VIDEO];
let closure_130_0 = items1;
const fn2 = (arg0) => {
  const config = arg0;
  return config.some((item) => null != config.config.taskConfigV2.tasks[item]);
};
const items2 = [fn(5452).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
let closure_131_0 = items2;
const fn3 = (arg0) => {
  const config = arg0;
  return config.some((item) => null != config.config.taskConfigV2.tasks[item]);
};
const items3 = [fn(5452).FirstPartyQuestTaskTypes.WATCH_VIDEO, fn(5452).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
let closure_132_0 = items3;
const fn4 = (arg0) => {
  const config = arg0;
  return config.some((item) => null != config.config.taskConfigV2.tasks[item]);
};
const items4 = [fn(5452).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, fn(5452).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, fn(5452).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION, fn(5452).FirstPartyQuestTaskTypes.PLAY_ON_XBOX, fn(5452).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
let closure_133_0 = items4;
const items5 = [fn(5452).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY, fn(5452).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
let closure_134_0 = items5;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/utils/QuestTaskUtils.tsx");

export const getAllApplicationIds = function getAllApplicationIds(quest) {
  if (null != quest) {
    const _Object = Object;
    return getApplicationIdsByTaskTypes(quest, Object.keys(quest.config.taskConfigV2.tasks));
  }
};
export const getDesktopApplicationIds = function getDesktopApplicationIds(nextResult) {
  const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
  return getApplicationIdsByTaskTypes(nextResult, items);
};
export const getConsoleApplicationId = function getConsoleApplicationId(id) {
  const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION];
  const tmp = getApplicationIdsByTaskTypes(id, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const getPlayActivityApplicationId = function getPlayActivityApplicationId(item10047) {
  const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
  const tmp = getApplicationIdsByTaskTypes(item10047, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const getInGameApplicationId = function getInGameApplicationId(quest) {
  const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
  const tmp = getApplicationIdsByTaskTypes(quest, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const getActivityApplicationId = function getActivityApplicationId(quest) {
  const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
  const tmp = getApplicationIdsByTaskTypes(quest, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const getStreamingApplicationId = function getStreamingApplicationId(nextResult) {
  const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
  const tmp = getApplicationIdsByTaskTypes(nextResult, items);
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  return first;
};
export const hasPlayOnDesktopTask = function hasPlayOnDesktopTask(arg0) {
  return null != arg0.quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
};
export const hasStreamOnDesktopTask = function hasStreamOnDesktopTask(arg0) {
  return null != arg0.quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
};
export const hasAchievementActivityTask = function hasAchievementActivityTask(quest) {
  return null != quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
};
export const hasAchievementInGameTask = function hasAchievementInGameTask(quest) {
  return null != quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
};
export const hasPlayActivityTask = function hasPlayActivityTask(quest) {
  return null != quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
};
export const shouldUsePlayOnDesktopTask = function shouldUsePlayOnDesktopTask(quest) {
  let tmp = null != quest;
  if (tmp) {
    tmp = null != quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
  }
  return tmp;
};
export function hasSomeFirstPartyTasks(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const config = arg0;
    return config.some((item) => null != config.config.taskConfigV2.tasks[item]);
  };
}
export const isInGameQuest = function isInGameQuest(quest) {
  closure_0 = quest;
  return Array.from(FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.IN_GAME).some((item) => null != value.config.taskConfigV2.tasks[item]);
};
export { hasSomeConsoleTasks };
export const hasWatchVideoOnDesktopTasks = fn2;
export const hasWatchVideoOnMobileTasks = fn3;
export const hasWatchVideoTasks = fn4;
export const hasStandaloneGameplayTasks = (arg0) => {
  const config = arg0;
  return config.some((item) => null != config.config.taskConfigV2.tasks[item]);
};
export const hasActivityTasks = (arg0) => {
  const config = arg0;
  return config.some((item) => null != config.config.taskConfigV2.tasks[item]);
};
export const isVideoQuestForMobilePlatformOnly = function isVideoQuestForMobilePlatformOnly(arg0) {
  if (typeof fn3 === "function") {
    closure_0 = arg0;
    let someResult = closure_135_0.some((item) => null != config.config.taskConfigV2.tasks[item]);
    if (someResult) {
      if (typeof fn2 === "function") {
        closure_0 = arg0;
        someResult = !closure_134_0.some((item) => null != config.config.taskConfigV2.tasks[item]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return someResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const isConsoleQuest = function isConsoleQuest(quest) {
  if (typeof fn === "function") {
    closure_0 = quest;
    return closure_133_0.some((item) => null != config.config.taskConfigV2.tasks[item]);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const isDesktopOnlyPlayQuest = function isDesktopOnlyPlayQuest(arg0) {
  if (typeof fn === "function") {
    closure_0 = arg0;
    const someResult = closure_133_0.some((item) => null != config.config.taskConfigV2.tasks[item]);
    let tmp4 = !someResult;
    if (!someResult) {
      tmp4 = null != arg0.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
    }
    return tmp4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { isQuestProgressingOnConsole };
export const getQuestTaskTypes = function getQuestTaskTypes(config) {
  return new Set(Object.keys(config.config.taskConfigV2.tasks));
};
export const getDefaultWatchVideoTask = function getDefaultWatchVideoTask(config) {
  const tmp = config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO];
  const tmp2 = config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
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
export const getQuestTaskDetails = function getQuestTaskDetails(value, DESKTOP) {
  if (arr.some((item) => null != value.config.taskConfigV2.tasks[item])) {
    let obj = { progressSeconds: 0, targetSeconds: 1, targetMinutes: 1, percentComplete: 0, taskType: tmp(5452).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    let tmp13Result = obj;
  } else if (typeof fn === "function") {
    if (closure_133_0.some((item) => null != config.config.taskConfigV2.tasks[item])) {
      obj = { quest: value, includeTaskTypes: null };
      if (DESKTOP != null) {
        obj.includeTaskTypes = DESKTOP;
        tmp13Result = (function _getLatestTaskDetails(arg0) {
          ({ quest, includeTaskTypes } = arg0);
          if (includeTaskTypes === undefined) {
            includeTaskTypes = value(5452).FirstPartyQuestTaskTypesSets.ALL;
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
          const found = sorted.filter(value(1369).isNotNullish);
          const obj3 = found[Symbol.iterator]();
          while (obj3 !== undefined) {
            let tmp6 = _parseFirstPartyTaskType(tmp4.eventName);
            let tmp7 = tmp6;
            if (null != tmp6) {
              let hasItem;
              if (includeTaskTypes != null) {
                hasItem = includeTaskTypes.has(tmp7);
              }
              if (hasItem) {
                let obj = { quest, taskType: null, includeTaskTypes: null };
                obj.taskType = tmp7;
                obj.includeTaskTypes = includeTaskTypes;
                let tmp12 = _getTaskDetailsForType(obj);
                if (null != tmp12) {
                  obj3.return();
                  return tmp12;
                }
              }
            }
            continue;
          }
          return _getTaskDetailsForType({ quest, includeTaskTypes });
        })(obj);
      } else {
        const FirstPartyQuestTaskTypesSets = tmp(5452).FirstPartyQuestTaskTypesSets;
        const tmp23 = isQuestProgressingOnConsole(value);
      }
    } else if (typeof fn4 === "function") {
      if (closure_136_0.some((item) => null != config.config.taskConfigV2.tasks[item])) {
        const obj1 = { quest: value, taskType: null };
        const config = value.config;
        let tmp14 = config.taskConfigV2.tasks[tmp(undefined, 5452).FirstPartyQuestTaskTypes.WATCH_VIDEO];
        const tmp15 = config.taskConfigV2.tasks[tmp(undefined, 5452).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
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
        obj1.taskType = type;
        tmp13Result = _getTaskDetailsForType(obj1);
      } else {
        let tmp8 = null != value;
        if (tmp8) {
          tmp8 = null != value.config.taskConfigV2.tasks[tmp(undefined, 5452).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
        }
        if (tmp8) {
          const obj2 = { quest: value, taskType: tmp(5452).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
          tmp13Result = _getTaskDetailsForType(obj2);
        } else if (null != value.config.taskConfigV2.tasks[tmp(undefined, 5452).FirstPartyQuestTaskTypes.PLAY_ACTIVITY]) {
          let obj3 = { quest: value, taskType: tmp(5452).FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
          tmp13Result = _getTaskDetailsForType(obj3);
        } else {
          const obj4 = { quest: value, taskType: tmp(5452).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
          tmp13Result = _getTaskDetailsForType(obj4);
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  if (null != tmp13Result) {
    return tmp13Result;
  } else {
    const obj5 = { quest: value };
    let tmp26 = _getTaskDetailsForType(obj5);
    if (null == tmp26) {
      const obj6 = { progressSeconds: 0, targetSeconds: 1, targetMinutes: 1, percentComplete: 0, taskType: tmp(5452).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
      tmp26 = obj6;
    }
    return tmp26;
  }
  arr = Array.from(FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.IN_GAME);
};
export const getDefaultInGameTask = function getDefaultInGameTask(config) {
  const tasks = config.taskConfigV2.tasks;
  let tmp = tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
  if (tmp == null) {
    tmp = tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
  }
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
export const getThirdPartyTaskDetails = function getThirdPartyTaskDetails(config) {
  const tasks = config.config.taskConfigV2.tasks;
  let tmp3 = tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
  if (tmp3 == null) {
    tmp3 = tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
  }
  if (tmp3 == null) {
    tmp3 = null;
  }
  if (null == tmp3) {
    return null;
  } else {
    const userStatus = config.userStatus;
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
      num2 = _mod12.floor(Math.min(num / target, 1), 4);
      const tmpResult = _mod12;
    }
    const obj = { title: tmp3.messages.taskTitle, description: tmp3.messages.taskDescription, target: tmp3.target, progress: num, percentComplete: num2 };
    return obj;
  }
};
export const getRemainingTaskTime = function getRemainingTaskTime(targetSeconds) {
  const diff = targetSeconds.targetSeconds - targetSeconds.progressSeconds;
  const time = { minutes: Math.max(0, Math.floor(diff / 60)), seconds: Math.max(0, Math.floor(diff % 60)) };
  return time;
};
export const parseMinutesAndSecondsFromSeconds = function parseMinutesAndSecondsFromSeconds(arg0) {
  const time = { minutes: Math.max(0, Math.floor(arg0 / 60)), seconds: Math.max(0, Math.floor(arg0 % 60)) };
  return time;
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