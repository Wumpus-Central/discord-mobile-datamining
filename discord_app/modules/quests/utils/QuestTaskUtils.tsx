// discord_app/modules/quests/utils/QuestTaskUtils.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import DurationsDefault from "../../../utils/Durations.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import FirstPartyQuestTaskTypes from "../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import QuestDataUtils from "QuestDataUtils.tsx";
import QuestStore from "../QuestStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set;

const f94504 = (arg0) => {
  closure_0 = arg0;
  return closure_0.some((item) => null != config.config.taskConfigV2.tasks[item]);
};
function getApplicationIdsByTaskTypes(nextResult, items) {
  if (null != nextResult) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const tmp5 = items[Symbol.iterator]();
    while (tmp5 !== undefined) {
      let tmp9 = nextResult.config.taskConfigV2.tasks[tmp7];
      let tmp10 = tmp9;
      if (null != tmp9) {
        if ("applications" in tmp10) {
          let _Array = Array;
          if (Array.isArray(tmp10.applications)) {
            let applications = tmp10.applications;
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
      const self = this;
      const self2 = this;
      const date = new Date(expiresAt);
      const valueOfResult = date.valueOf();
      const _isNaN = isNaN;
      let tmp12 = !isNaN(valueOfResult);
      isNaN(valueOfResult);
      if (tmp12) {
        const _Date2 = Date;
        tmp12 = valueOfResult > Date.now();
      }
      flag = tmp12;
    }
    if (!flag) {
      const userStatus2 = quest.userStatus;
      let expiresAt1;
      if (userStatus2 != null) {
        if (userStatus2.progress[tmp13] != null) {
          const heartbeat2 = tmp15.heartbeat;
          if (heartbeat2 != null) {
            expiresAt1 = heartbeat2.expiresAt;
          }
        }
      }
      let flag2 = false;
      if (null != expiresAt1) {
        const _Date3 = Date;
        const self3 = this;
        const self4 = this;
        const date1 = new Date(expiresAt1);
        const valueOfResult2 = date1.valueOf();
        const _isNaN2 = isNaN;
        let tmp21 = !isNaN(valueOfResult2);
        isNaN(valueOfResult2);
        if (tmp21) {
          const _Date4 = Date;
          tmp21 = valueOfResult2 > Date.now();
        }
        flag2 = tmp21;
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
  let from;
  let includeTaskTypes;
  let num7;
  let obj4;
  let quest;
  let target;
  let target2;
  let taskType;
  ({ quest, taskType, includeTaskTypes } = arg0);
  if (includeTaskTypes === undefined) {
    includeTaskTypes = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.ALL;
  }
  const taskConfigV2 = quest.config.taskConfigV2;
  let tmp3 = taskType;
  if (taskType == null) {
    const _Object = Object;
    const values = Object.values(taskConfigV2.tasks);
    const first = values.filter((type) => includeTaskTypes.has(type.type))[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    tmp3 = type;
  }
  let tmp7 = taskConfigV2.tasks[tmp3];
  if (tmp7 == null) {
    tmp7 = taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
  }
  if (null == tmp7) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const captureQuestsException = QuestDataUtils.captureQuestsException;
    const self3 = this;
    const self4 = this;
    QuestDataUtils;
    const error = new Error("Quest " + quest.id + " has no task matching the include filters");
    const obj = { tags: { source: "_getTaskDetailsForType" }, extra: obj4 };
    const _Array = Array;
    obj4 = { questId: quest.id, taskType, includeTaskTypes: from(includeTaskTypes) };
    from = Array.from;
    if (includeTaskTypes == null) {
      includeTaskTypes = [];
    }
    const result = captureQuestsException(error, obj);
    return null;
  } else {
    ({ target, target: target2 } = tmp7);
    const userStatus3 = quest.userStatus;
    let completedAt;
    if (userStatus3 != null) {
      completedAt = userStatus3.completedAt;
    }
    let maxResult = target2;
    if (null == completedAt) {
      const userStatus4 = quest.userStatus;
      let tmp12;
      if (userStatus4 != null) {
        const progress = userStatus4.progress;
        if (progress != null) {
          tmp12 = progress[tmp7.type];
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
        let sum;
        if (closure_136_0.some((item) => null != config.config.taskConfigV2.tasks[item])) {
          const optimisticProgress = QuestStore.getOptimisticProgress(quest.id, tmp7.type) ?? num;
          sum = optimisticProgress;
        } else {
          const userStatus2 = quest.userStatus;
          let lastBeatAt;
          if (userStatus2 != null) {
            const progress2 = userStatus2.progress;
            if (progress2 != null) {
              if (progress2[tmp7.type] != null) {
                const heartbeat = tmp17.heartbeat;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
              }
            }
          }
          let num2 = 0;
          if (null != lastBeatAt) {
            const result1 = isQuestProgressingOnConsole(quest) || QuestStore.isProgressingOnDesktop(quest.id);
            num2 = 0;
            if (result1) {
              const _Date = Date;
              const _Date2 = Date;
              const self = this;
              const self2 = this;
              const timestamp = Date.now();
              const date = new Date(lastBeatAt);
              const diff = timestamp - date.valueOf();
              const obj2 = _mod12;
              num2 = obj2.floor(diff / DurationsDefault.Millis.SECOND, 2);
            }
          }
          sum = num + num2;
        }
        const _Math = Math;
        const _Math2 = Math;
        const bound = Math.min(0.99 * target2, sum);
        const obj3 = _mod12;
        maxResult = max(obj3.floor(bound, 2), 0);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const _Object2 = Object;
    const values2 = Object.values(taskConfigV2.tasks);
    const found = values2.find(_isPlayOnDesktopTaskType);
    let mapped;
    if (found != null) {
      const applications = found.applications;
      if (applications != null) {
        mapped = applications.map((id) => id.id);
      }
    }
    const _Math3 = Math;
    const obj6 = {
      progressSeconds: maxResult,
      targetSeconds: target,
      targetMinutes: Math.ceil(target / DurationsDefault.Seconds.MINUTE),
      percentComplete: num7,
      taskType: tmp3,
      applications: mapped,
    };
    num7 = 0;
    if (target > 0) {
      const _Math4 = Math;
      const obj5 = _mod12;
      num7 = obj5.floor(Math.min(maxResult / target, 1), 4);
    }
    return obj6;
  }
}
function _parseFirstPartyTaskType(eventName) {
  const ALL = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.ALL;
  let tmp = null;
  if (ALL.has(eventName)) {
    tmp = eventName;
  }
  return tmp;
}
function formatWatchTaskTimeFromSeconds(arg0, arg1) {
  let truncate1;
  if (arg1 != null) {
    truncate1 = arg1.truncate;
  }
  if (null != truncate1) {
    if (arg0 > arg1.truncate) {
      const truncate = arg1.truncate;
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      const _Math4 = Math;
      const bound = Math.max(0, Math.floor(truncate / 60));
      const _String = String;
      const bound1 = Math.max(0, Math.floor(truncate % 60));
      const _String2 = String;
      const StringResult = String(bound);
      const _HermesInternal = HermesInternal;
      const _HermesInternal2 = HermesInternal;
      const padStartResult = StringResult.padStart(2, "0");
      const StringResult1 = String(bound1);
      return "" + "" + padStartResult + ":" + StringResult1.padStart(2, "0") + "+";
    }
  }
  const bound2 = Math.max(0, Math.floor(arg0 / 60));
  const bound3 = Math.max(0, Math.floor(arg0 % 60));
  const StringResult2 = String(bound2);
  const padStartResult1 = StringResult2.padStart(2, "0");
  const StringResult3 = String(bound3);
  return "" + padStartResult1 + ":" + StringResult3.padStart(2, "0");
}
let items = [
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX,
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION,
];
const hasSomeConsoleTasks = f94504;
const items1 = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO];
const fn2 = f94504;
const items2 = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
const fn3 = f94504;
const items3 = [
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO,
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE,
];
const fn4 = f94504;
const items4 = [
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP,
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP,
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION,
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX,
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME,
];
const items5 = [
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY,
  FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY,
];
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
  const items = [
    FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX,
    FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION,
  ];
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
  const items = [
    FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY,
    FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY,
  ];
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
  return (
    null != arg0.quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP]
  );
};
export const hasStreamOnDesktopTask = function hasStreamOnDesktopTask(arg0) {
  return (
    null != arg0.quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP]
  );
};
export const hasAchievementActivityTask = function hasAchievementActivityTask(quest) {
  return (
    null != quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY]
  );
};
export const hasAchievementInGameTask = function hasAchievementInGameTask(quest) {
  return null != quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
};
export const hasPlayActivityTask = function hasPlayActivityTask(quest) {
  return null != quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
};
export const shouldUsePlayOnDesktopTask = function shouldUsePlayOnDesktopTask(quest) {
  const tmp =
    null != quest &&
    null != quest.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
  return tmp;
};
export function hasSomeFirstPartyTasks(arg0) {
  let closure_0 = arg0;
  return f94504;
}
export const isInGameQuest = function isInGameQuest(quest) {
  let closure_0 = quest;
  const arr = Array.from(FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.IN_GAME);
  return arr.some((item) => null != config.config.taskConfigV2.tasks[item]);
};
export { hasSomeConsoleTasks };
export const hasWatchVideoOnDesktopTasks = fn2;
export const hasWatchVideoOnMobileTasks = fn3;
export const hasWatchVideoTasks = fn4;
export const hasStandaloneGameplayTasks = f94504;
export const hasActivityTasks = f94504;
export const isVideoQuestForMobilePlatformOnly = function isVideoQuestForMobilePlatformOnly(id) {
  if (typeof fn3 === "function") {
    let closure_0 = id;
    let someResult = closure_135_0.some((item) => null != config.config.taskConfigV2.tasks[item]);
    if (someResult) {
      if (typeof fn2 === "function") {
        closure_0 = id;
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
    let closure_0 = quest;
    return closure_133_0.some((item) => null != config.config.taskConfigV2.tasks[item]);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const isDesktopOnlyPlayQuest = function isDesktopOnlyPlayQuest(arg0) {
  if (typeof fn === "function") {
    let closure_0 = arg0;
    let tmp4 = !closure_133_0.some((item) => null != config.config.taskConfigV2.tasks[item]);
    closure_133_0.some((item) => null != config.config.taskConfigV2.tasks[item]);
    if (tmp4) {
      tmp4 = null != arg0.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
    }
    return tmp4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { isQuestProgressingOnConsole };
export const getQuestTaskTypes = function getQuestTaskTypes(config) {
  set = new Set(Object.keys(config.config.taskConfigV2.tasks));
  return set;
};
export const getDefaultWatchVideoTask = function getDefaultWatchVideoTask(config) {
  let tmp3;
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
    tmp3 = tmp4;
  } else {
    tmp3 = tmp2;
  }
  return tmp3;
};
export const getQuestTaskDetails = function getQuestTaskDetails(value, DESKTOP) {
  let tmp13Result;
  let type;
  function _getLatestTaskDetails(arg0) {
    let includeTaskTypes;
    let quest;
    ({ quest, includeTaskTypes } = arg0);
    if (includeTaskTypes === undefined) {
      includeTaskTypes = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.ALL;
    }
    const userStatus = quest.userStatus;
    let progress;
    const _Object = Object;
    if (userStatus != null) {
      progress = userStatus.progress;
    }
    if (progress == null) {
      progress = {};
    }
    const values2 = values(progress);
    const sorted = values2.sort(function (heartbeat, heartbeat2) {
      let lastBeatAt;
      let num;
      let lastBeatAt1;
      if (heartbeat != null) {
        heartbeat = heartbeat.heartbeat;
        if (heartbeat != null) {
          lastBeatAt1 = heartbeat.lastBeatAt;
        }
      }
      if (heartbeat2 != null) {
        heartbeat2 = heartbeat2.heartbeat;
        if (heartbeat2 != null) {
          lastBeatAt = heartbeat2.lastBeatAt;
        }
      }
      if (null != lastBeatAt1) {
        if (null != lastBeatAt) {
          const _Date3 = Date;
          const self5 = this;
          const self6 = this;
          const _Date4 = Date;
          const self7 = this;
          const self8 = this;
          const date = new Date(lastBeatAt1);
          const valueOfResult = date.valueOf();
          let num3 = 1;
          const date1 = new Date(lastBeatAt);
          if (valueOfResult > date1.valueOf()) {
            num3 = -1;
          }
          num = num3;
        }
        return num;
      }
      if (null == lastBeatAt1) {
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
              const self = this;
              const self2 = this;
              const _Date2 = Date;
              const self3 = this;
              const self4 = this;
              const date2 = new Date(heartbeat.updatedAt);
              const valueOfResult2 = date2.valueOf();
              let num2 = 1;
              const date3 = new Date(heartbeat2.updatedAt);
              if (valueOfResult2 > date3.valueOf()) {
                num2 = -1;
              }
              num = num2;
            }
          }
        }
      }
      num = 1;
      if (null != lastBeatAt1) {
        num = 1;
        if (null == lastBeatAt) {
          num = -1;
        }
      }
    });
    const found = sorted.filter(GlobalUtils.isNotNullish);
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
          let obj = { quest, taskType: tmp7, includeTaskTypes };
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
  }
  let closure_0 = value;
  const arr = Array.from(FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.IN_GAME);
  if (arr.some((item) => null != config.config.taskConfigV2.tasks[item])) {
    let obj = {
      progressSeconds: 0,
      targetSeconds: 1,
      targetMinutes: 1,
      percentComplete: 0,
      taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP,
    };
    tmp13Result = obj;
  } else if (typeof fn === "function") {
    closure_0 = value;
    if (closure_133_0.some((item) => null != config.config.taskConfigV2.tasks[item])) {
      let tmp20 = DESKTOP;
      const obj2 = { quest: value, includeTaskTypes: tmp20 };
      if (DESKTOP == null) {
        const tmp23 = isQuestProgressingOnConsole(value);
        const FirstPartyQuestTaskTypesSets = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets;
        tmp20 = tmp23 ? FirstPartyQuestTaskTypesSets.CONSOLE : FirstPartyQuestTaskTypesSets.ALL;
      }
      tmp13Result = _getLatestTaskDetails(obj2);
    } else if (typeof fn4 === "function") {
      closure_0 = value;
      if (closure_136_0.some((item) => null != config.config.taskConfigV2.tasks[item])) {
        let tmp17;
        let obj3 = { quest: value, taskType: type };
        const config = value.config;
        let tmp14 = config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO];
        const tmp15 =
          config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
        if (null == tmp14) {
          let tmp18 = tmp15;
          if (tmp15 == null) {
            tmp18 = tmp14;
          }
          if (tmp18 == null) {
            tmp18 = null;
          }
          tmp17 = tmp18;
        } else {
          tmp17 = tmp15;
        }
        type = undefined;
        if (tmp17 != null) {
          type = tmp17.type;
        }
        tmp13Result = _getTaskDetailsForType(obj3);
      } else {
        let tmp7 = null;
        const tmp8 =
          null != value &&
          null != value.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
        if (tmp8) {
          let num3 = 0;
          const obj4 = { quest: value, taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
          tmp13Result = _getTaskDetailsForType(obj4);
        } else if (
          null != value.config.taskConfigV2.tasks[FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY]
        ) {
          let num2 = 0;
          const obj5 = { quest: value, taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
          tmp13Result = _getTaskDetailsForType(obj5);
        } else {
          let num = 0;
          const obj6 = { quest: value, taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
          tmp13Result = _getTaskDetailsForType(obj6);
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
    const obj7 = { quest: value };
    let tmp25 = _getTaskDetailsForType(obj7);
    if (null == tmp25) {
      tmp25 = {
        progressSeconds: 0,
        targetSeconds: 1,
        targetMinutes: 1,
        percentComplete: 0,
        taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP,
      };
      const obj8 = {
        progressSeconds: 0,
        targetSeconds: 1,
        targetMinutes: 1,
        percentComplete: 0,
        taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP,
      };
    }
    return tmp25;
  }
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
      const tmpResult = _mod12;
      num2 = tmpResult.floor(Math.min(num / target, 1), 4);
    }
    return {
      title: tmp3.messages.taskTitle,
      description: tmp3.messages.taskDescription,
      target: tmp3.target,
      progress: num,
      percentComplete: num2,
    };
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
  const padStartResult = StringResult.padStart(2, "0");
  const StringResult1 = String(seconds);
  return "" + padStartResult + ":" + StringResult1.padStart(2, "0");
};
export { formatWatchTaskTimeFromSeconds };
export const getWatchVideoTaskDetailsFromProgress = function getWatchVideoTaskDetailsFromProgress(arg0) {
  let num;
  let progressSeconds;
  let targetSeconds;
  ({ progressSeconds, targetSeconds } = arg0);
  const obj = {
    progressSeconds,
    targetSeconds,
    targetMinutes: Math.ceil(targetSeconds / DurationsDefault.Seconds.MINUTE),
    percentComplete: num,
    taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE,
  };
  num = 0;
  if (targetSeconds > 0) {
    const _Math = Math;
    const obj2 = _mod12;
    num = obj2.floor(Math.min(progressSeconds / targetSeconds, 1), 4);
  }
  return obj;
};
