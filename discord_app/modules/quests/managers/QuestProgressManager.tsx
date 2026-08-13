// discord_app/modules/quests/managers/QuestProgressManager.tsx
import reset from "reset";
import "_slicedToArray";
import participantFromServer from "participantFromServer";
import map from "map";
import initialize from "initialize";
import closure_7 from "reset";
import gameFromServer from "gameFromServer";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import initializeState from "initializeState";
import set from "set";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { isLaunched } from "FrameLayoutModes";
import getQuestLogger from "getQuestLogger";
import "initialize";
import { set } from "../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import { QuestVariants } from "../../../../discord_common/js/shared/shared-constants/QuestVariants.tsx";
import { _openRobloxURLWithRootPlaceId } from "../../roblox_subgame_detection/RobloxSubgameUtils.tsx";
import { getQuestDeliveryDataForPlacement } from "../utils/QuestDataUtils.tsx";
import { questMatchesActivity } from "../utils/QuestMatchingUtils.tsx";
import { getApplicationIdsByTaskTypes } from "../utils/QuestTaskUtils.tsx";
import { isSponsoredPlayQuest } from "../utils/QuestUtils.tsx";

let QuestsExperimentLocations;
let closure_12;
const require = arg1;
function isQuestProgressable(item10047) {
  const isQuestExpiredResult = getQuestDeliveryDataForPlacement.isQuestExpired(item10047);
  let tmp2 = !isQuestExpiredResult;
  if (!isQuestExpiredResult) {
    tmp2 = null != item10047.userStatus;
  }
  if (tmp2) {
    tmp2 = null != item10047.userStatus.enrolledAt;
  }
  if (tmp2) {
    tmp2 = null == item10047.userStatus.completedAt;
  }
  return tmp2;
}
function handleEmbeddedActivityLaunchSuccess(applicationId) {
  let obj = questMatchesActivity;
  const eligibleQuestsForApplicationId = obj.getEligibleQuestsForApplicationId(initializeState.quests, applicationId);
  for (const item10020 of eligibleQuestsForApplicationId) {
    if (tmp) {
      let tmp4 = item10020;
      let features = tmp3.config.features;
      let tmp6 = require;
      let tmp8 = dependencyMap;
      let tmp5 = require;
      let tmp7 = dependencyMap;
      if (features.includes(QuestVariants.QuestVariants.MOBILE_ACTIVITY_QUEST)) {
        let tmp9 = tmp5;
        let tmp10 = tmp7;
        let tmp6Result = tmp6(10422);
        obj = { questContent: null, questContentCTA: null, sourceQuestContent: null };
        obj[0] = tmp6(5205).QuestContent.RUNNING_ACTIVITY;
        obj[1] = tmp6(7233).QuestContentCTA.START_QUEST;
        obj[2] = tmp6(5205).QuestContent.RUNNING_ACTIVITY;
        let tmp12 = obj2;
        let enrollInQuestResult = tmp6Result.enrollInQuest(item10020.id, obj);
        obj2.return();
        return enrollInQuestResult;
      }
    }
    continue;
  }
}
function isQuestRobloxRelated(arr, distributor) {
  let tmp = null != distributor;
  if (tmp) {
    let someResult = arr.some((arg0) => arg0 === callback(table[20]).ROBLOX_APPLICATION_ID);
    if (someResult) {
      someResult = _openRobloxURLWithRootPlaceId.isRobloxSubgame(distributor);
      const obj = _openRobloxURLWithRootPlaceId;
    }
    tmp = someResult;
  }
  return tmp;
}
({ DISCORD_APPLICATION_ID: closure_12, QuestsExperimentLocations } = QuestsExperimentLocations);
const MINUTE = require("set").Millis.MINUTE;
const SECOND = require("set").Millis.SECOND;
getQuestLogger = { location: QuestsExperimentLocations.QUESTS_MANAGER };
getQuestLogger = getQuestLogger.getQuestLogger(getQuestLogger);
class QuestProgressManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    f114695 = applyArgumentsResult;
    obj = {};
    map = new Map();
    obj[require("set").FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP] = map;
    map1 = new Map();
    obj[require("set").FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP] = map1;
    map2 = new Map();
    obj[require("set").FirstPartyQuestTaskTypes.PLAY_ACTIVITY] = map2;
    applyArgumentsResult.heartbeats = obj;
    applyArgumentsResult.calculateHeartbeatDurationMs = function calculateHeartbeatDurationMs(arg0) {
      quests = quests.quests;
      const value = quests.get(arg0);
      if (null != value) {
        if (null != value.config) {
          if (null != value.userStatus) {
            const questTaskDetails = lib(7229).getQuestTaskDetails(value, lib(5209).FirstPartyQuestTaskTypesSets.DESKTOP);
            const _Math = Math;
            const diff = questTaskDetails.targetSeconds - questTaskDetails.progressSeconds;
            const bound = Math.max(0, diff * applyArgumentsResult(687).Millis.SECOND);
            let sum = closure_14;
            if (bound <= closure_14) {
              sum = bound + closure_15;
            }
            return sum;
          }
        }
      }
      return closure_14;
    };
    applyArgumentsResult.initiateHeartbeat = function initiateHeartbeat(arg0, arg1, arg2) {
      const lib = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let obj = lib.heartbeats[arg1];
      if (obj.has(arg0)) {
        let _HermesInternal2 = HermesInternal;
        outer1_16.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: " + arg0);
      } else {
        function maybeSendHeartbeat() {
          let obj = activelyProgressingQuests;
          activelyProgressingQuests = activelyProgressingQuests.getActivelyProgressingQuests(closure_1);
          if (activelyProgressingQuests.has(activelyProgressingQuests)) {
            const value = activelyProgressingQuests.get(tmp2);
            let applicationId;
            if (value != null) {
              applicationId = value.applicationId;
            }
            if (applicationId == null) {
              let applicationId1;
              if (closure_2 != null) {
                applicationId1 = closure_2.applicationId;
              }
              applicationId = applicationId1;
            }
            let prop;
            if (value != null) {
              prop = value.executableFingerprint;
            }
            let executablePath;
            if (value != null) {
              executablePath = value.executablePath;
            }
            if (executablePath == null) {
              let executablePath1;
              if (closure_2 != null) {
                executablePath1 = closure_2.executablePath;
              }
              executablePath = executablePath1;
            }
            let timerId = activelyProgressingQuests;
            let tmp15 = outer2_2;
            if (tmp === activelyProgressingQuests(outer2_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
              const currentUserActiveStream = outer2_7.getCurrentUserActiveStream();
              if (null == currentUserActiveStream) {
                const _HermesInternal3 = HermesInternal;
                outer2_16.log("~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: " + tmp2);
                obj.terminateHeartbeat(tmp2, tmp);
              } else {
                const _HermesInternal4 = HermesInternal;
                const timerIdResult = timerId(tmp15[25]);
                outer2_16.log("~ initiateHeartbeat -> Sending heartbeat for questId: " + tmp2);
                const encodeStreamKeyResult = timerId(tmp15[25]).encodeStreamKey(currentUserActiveStream);
                obj = { questId: null, streamKey: null, applicationId: null, executablePath: null, executableFingerprint: null };
                obj[0] = tmp2;
                obj[1] = encodeStreamKeyResult;
                obj[2] = applicationId;
                obj[3] = executablePath;
                obj[4] = prop;
                timerId(tmp15[17]).sendHeartbeat(obj);
                const timerIdResult1 = timerId(tmp15[17]);
              }
            } else {
              const _HermesInternal2 = HermesInternal;
              outer2_16.log("~ initiateHeartbeat -> Sending heartbeat for questId: " + tmp2);
              obj = { questId: null, applicationId: null, executablePath: null, executableFingerprint: null };
              obj[0] = tmp2;
              obj[1] = applicationId;
              obj[2] = executablePath;
              obj[3] = prop;
              timerId(tmp15[17]).sendHeartbeat(obj);
              const timerIdResult2 = timerId(tmp15[17]);
            }
            prop = obj.calculateHeartbeatDurationMs(tmp2);
            const _window = window;
            timerId = window.setTimeout(maybeSendHeartbeat, prop);
            tmp15 = obj;
            const result = obj.set(tmp2, timerId);
          } else {
            const _HermesInternal = HermesInternal;
            outer2_16.log("~ initiateHeartbeat -> Quest " + tmp2 + " is no longer actively progressing, terminating heartbeat");
            obj.terminateHeartbeat(tmp2, tmp);
          }
        }
        let _HermesInternal = HermesInternal;
        outer1_16.log("~ initiateHeartbeat -> Initiating heartbeat for Quest " + arg0);
        maybeSendHeartbeat();
      }
    };
    applyArgumentsResult.terminateHeartbeat = function terminateHeartbeat(questId, item10030) {
      let obj = lib.heartbeats[item10030];
      const quests = outer1_10.quests;
      let value = obj.get(questId);
      if (null != value) {
        const _HermesInternal2 = HermesInternal;
        outer1_16.log("~ terminateHeartbeat -> Terminating heartbeat for questId: " + questId);
        const _window = window;
        window.clearTimeout(value);
        obj.delete(questId);
        value = quests.get(questId);
        let tmp6 = null != value;
        if (tmp6) {
          const isQuestExpiredResult = lib(outer1_2[14]).isQuestExpired(value);
          let tmp5 = !isQuestExpiredResult;
          if (!isQuestExpiredResult) {
            tmp5 = null != value.userStatus;
          }
          if (tmp5) {
            tmp5 = null != value.userStatus.enrolledAt;
          }
          if (tmp5) {
            tmp5 = null == value.userStatus.completedAt;
          }
          tmp6 = tmp5;
          const obj2 = lib(outer1_2[14]);
        }
        if (tmp6) {
          const _HermesInternal = HermesInternal;
          obj5.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: " + questId);
          obj = { questId: null, terminal: true };
          obj[0] = questId;
          lib(outer1_2[17]).sendHeartbeat(obj);
          const obj3 = lib(outer1_2[17]);
        }
        obj5 = outer1_16;
      }
    };
    applyArgumentsResult.handleSendHeartbeatSuccess = function handleSendHeartbeatSuccess(questId) {
      questId = questId.questId;
      outer1_16.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: " + questId + ")");
      if (null != questId.userStatus.completedAt) {
        const _HermesInternal = HermesInternal;
        outer1_16.log("~ handleSendHeartbeatSuccess -> Quest " + questId + " completed, terminating any heartbeats for it");
        const _Object = Object;
        const keys = Object.keys(lib.heartbeats);
        for (const item10030 of keys) {
          let tmp7 = lib;
          let terminateHeartbeatResult = lib.terminateHeartbeat(questId, item10030);
          continue;
        }
      }
    };
    applyArgumentsResult.handleSendHeartbeatFailure = function handleSendHeartbeatFailure(questId) {
      logger.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: " + questId.questId);
    };
    obj = {
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, lib(outer1_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return lib.syncHeartbeats(items, "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS");
          },
      QUESTS_ENROLL_SUCCESS() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, lib(outer1_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
            return lib.syncHeartbeats(items, "QUESTS_ENROLL_SUCCESS", (config) => {
              let hasItem = null != config;
              if (hasItem) {
                const features = config.config.features;
                hasItem = features.includes(callback(table[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
              }
              return !hasItem;
            });
          },
      QUESTS_SEND_HEARTBEAT_SUCCESS: applyArgumentsResult.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: applyArgumentsResult.handleSendHeartbeatFailure,
      QUESTS_PREVIEW_UPDATE_SUCCESS() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, lib(outer1_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
            return lib.syncHeartbeats(items, "QUESTS_PREVIEW_UPDATE_SUCCESS");
          },
      RUNNING_GAMES_CHANGE() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
            return lib.syncHeartbeats(items, "RUNNING_GAMES_CHANGE");
          },
      RUNNING_NON_GAMES_CHANGE() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
            return lib.syncHeartbeats(items, "RUNNING_NON_GAMES_CHANGE");
          },
      STREAM_START() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return lib.syncHeartbeats(items, "STREAM_START");
          },
      STREAM_CREATE() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return lib.syncHeartbeats(items, "STREAM_CREATE");
          },
      STREAM_CLOSE() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return lib.syncHeartbeats(items, "STREAM_CLOSE");
          },
      PASSIVE_UPDATE_V2() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return lib.syncHeartbeats(items, "PASSIVE_UPDATE_V2");
          },
      VOICE_STATE_UPDATES() {
            const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return lib.syncHeartbeats(items, "VOICE_STATE_UPDATES");
          },
      EMBEDDED_ACTIVITY_LAUNCH_SUCCESS(applicationId) {
            callback(applicationId.applicationId);
          },
      FRAME_LAUNCH: null,
      FRAME_STOP: null,
      EMBEDDED_ACTIVITY_UPDATE_V2: null,
      QUEST_APPLICATION_START_TIMER: null
    };
    f114695 = undefined;
    closure_1 = applyArgumentsResult;
    f114695 = isQuestRobloxRelated((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      const iter = (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp5;
                let closure_1 = tmp2;
                let applicationId;
                applicationId = applicationId.applicationId;
                c3 = 1;
                c4 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                c3 = 2;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = outer1_18(callback);
                return obj2;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const items = [callback(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
              closure_1.syncHeartbeats(items, "FRAME_LAUNCH", (config) => {
                let hasItem = null != config;
                if (hasItem) {
                  const features = config.config.features;
                  hasItem = features.includes(applicationId(tmp5[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
                }
                return !hasItem;
              });
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp17) {
            c4 = tmp;
            throw tmp17;
          }
        }
      })();
      iter.next();
      return iter;
    });
    obj[13] = function FRAME_LAUNCH(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj[14] = function FRAME_STOP() {
      const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
      lib.syncHeartbeats(items, "FRAME_STOP");
    };
    obj[15] = function EMBEDDED_ACTIVITY_UPDATE_V2() {
      const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
      lib.syncHeartbeats(items, "EMBEDDED_ACTIVITY_UPDATE_V2", (config) => {
        let hasItem = null != config;
        if (hasItem) {
          const features = config.config.features;
          hasItem = features.includes(callback(table[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
        }
        return !hasItem;
      });
    };
    obj[16] = function QUEST_APPLICATION_START_TIMER(questId) {
      questId = questId.questId;
      const items = [lib(outer1_2[23]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
      questId.syncHeartbeats(items, "QUEST_APPLICATION_START_TIMER", (id) => {
        let tmp = null != id;
        if (tmp) {
          tmp = id.id === questId;
        }
        if (tmp) {
          let hasItem = null != id;
          if (hasItem) {
            const features = id.config.features;
            hasItem = features.includes(questId(outer1_2[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
          }
          tmp = hasItem;
        }
        return tmp;
      });
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = QuestProgressManager.prototype;
prototype["syncHeartbeats"] = function syncHeartbeats(items, EMBEDDED_ACTIVITY_UPDATE_V2, arg2) {

};
prototype["getActivelyProgressingQuests"] = function getActivelyProgressingQuests(closure_1) {
  const self = this;
  if (set.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP === closure_1) {
    return self.getActivelyProgressingPlayOnDesktopQuests();
  } else if (tmp(5209).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP === closure_1) {
    return self.getActivelyProgressingStreamOnDesktopQuests();
  } else if (tmp(5209).FirstPartyQuestTaskTypes.PLAY_ACTIVITY === closure_1) {
    return self.getActivelyProgressingActivityQuests();
  } else {
    tmp(1370).assertNever(closure_1);
  }
};
prototype["getActivelyProgressingPlayOnDesktopQuests"] = function getActivelyProgressingPlayOnDesktopQuests() {
  const map = new Map();
  const runningGames = store.getRunningGames();
  const runningNonGames = store.getRunningNonGames();
  const quests = initializeState.quests;
  getQuestLogger.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", runningGames, "Running non-games: ", runningNonGames);
  let obj = {};
  let iter = runningGames[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (!nextResult.isLauncher) {
      let tmp6 = nextResult;
      if (null == tmp5.id) {
        let tmp8 = store;
        let tmp9 = nextResult;
        let overrideForGame = store.getOverrideForGame(tmp5);
        if (null != tmp5.distributor) {
          let tmp12 = gameFromServer;
          let tmp13 = nextResult;
          let findGameResult = gameFromServer.findGame(tmp5);
          let id;
          let tmp15 = findGameResult;
          if (findGameResult != null) {
            id = findGameResult.id;
          }
          if (null != id) {
            let tmp17 = findGameResult;
            let tmp18 = nextResult;
            obj[tmp15.id] = tmp5;
          }
        } else {
          let tmp11 = overrideForGame;
        }
      } else {
        let tmp7 = nextResult;
        obj[tmp5.id] = tmp5;
      }
    }
    continue;
  }
  for (const item10059 of runningNonGames) {
    let tmp19 = item10059;
    if (null != item10059.id) {
      let tmp20 = item10059;
      obj[tmp19.id] = tmp19;
    }
    continue;
  }
  function _loop(iter2) {
    obj = map(obj[27]);
    const result = obj.removeExecutablePathPrefix(tmp.exePath);
    const values = quests.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let tmp6 = map;
      let tmp7 = map;
      let tmp8 = obj;
      let tmp9 = obj;
      let obj2 = map(obj[24]);
      let desktopApplicationIds = obj2.getDesktopApplicationIds(nextResult);
      let tmp10 = outer1_17;
      if (outer1_17(nextResult)) {
        let tmp11 = desktopApplicationIds;
        if (null != desktopApplicationIds) {
          let tmp23 = desktopApplicationIds;
          let found = desktopApplicationIds.find((arg0) => arg0 === closure_0);
          if (null != found) {
            let tmp19 = map;
            let tmp20 = nextResult;
            obj = { applicationId: null, executablePath: null, executableFingerprint: null };
            let tmp21 = found;
            obj[0] = tmp25;
            obj[1] = result;
            obj[2] = tmp.executableFingerprint;
            let result1 = map.set(tmp5.id, obj);
          } else {
            let tmp12 = outer1_19;
            let tmp13 = desktopApplicationIds;
            if (outer1_19(desktopApplicationIds, tmp)) {
              let tmp14 = map;
              let tmp15 = nextResult;
              obj = { applicationId: null, executablePath: null, executableFingerprint: null };
              let tmp16 = tmp6;
              let tmp17 = tmp8;
              obj[0] = tmp7(tmp9[20]).ROBLOX_APPLICATION_ID;
              obj[1] = result;
              obj[2] = tmp.executableFingerprint;
              let result2 = map.set(tmp5.id, obj);
            }
          }
        }
      }
      continue;
    }
  }
  const keys = Object.keys(obj);
  const iter2 = keys[Symbol.iterator]();
  while (iter2 !== undefined) {
    let _loopResult = _loop(iter2.next());
    continue;
  }
  getQuestLogger.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
  return map;
};
prototype["getActivelyProgressingStreamOnDesktopQuests"] = function getActivelyProgressingStreamOnDesktopQuests() {
  const map = new Map();
  currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  if (null == currentUserActiveStream) {
    return map;
  } else if (getVoiceStatesForGuild.countVoiceStatesForChannel(currentUserActiveStream.channelId) < 2) {
    return map;
  } else {
    const streamerActiveStreamMetadata = obj2.getStreamerActiveStreamMetadata();
    if (null == streamerActiveStreamMetadata) {
      return map;
    } else {
      getQuestLogger.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", streamerActiveStreamMetadata);
      const id = streamerActiveStreamMetadata.id;
      if (null == id) {
        return map;
      } else {
        const quests = initializeState.quests;
        const values = quests.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = require;
          let tmp7 = dependencyMap;
          let tmp5 = nextResult;
          let obj3 = getApplicationIdsByTaskTypes;
          let streamingApplicationId = obj3.getStreamingApplicationId(nextResult);
          let tmp9 = isQuestProgressable;
          let tmp10 = isQuestProgressable(nextResult);
          if (tmp10) {
            let tmp11 = streamingApplicationId;
            tmp10 = null != streamingApplicationId;
          }
          if (tmp10) {
            let tmp12 = streamingApplicationId;
            if (streamingApplicationId === id) {
              let tmp13 = nextResult;
              let obj = { applicationId: null };
              obj[0] = id;
              let result = map.set(tmp5.id, obj);
            }
          }
          continue;
        }
        const _Array = Array;
        getQuestLogger.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
        return map;
      }
    }
  }
  obj2 = currentUserActiveStream;
};
prototype["getActivelyProgressingActivityQuests"] = function getActivelyProgressingActivityQuests() {
  const map = new Map();
  selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
  mainFrame = mainFrame.getMainFrame();
  const set = new Set(selfEmbeddedActivities.keys());
  if (isLaunched(mainFrame)) {
    set.add(mainFrame.applicationId);
  }
  getQuestLogger.log("~ getActivelyProgressingActivityQuestIds -> Running activity applicationIds: ", Array.from(set));
  if (0 === set.size) {
    return map;
  } else {
    const quests = initializeState.quests;
    const iter = tmp2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = nextResult;
      let values = quests.values();
      let tmp10 = values;
      let tmp11 = values;
      for (const item10047 of values) {
        let tmp13 = require;
        let tmp14 = dependencyMap;
        let tmp12 = item10047;
        let obj4 = getApplicationIdsByTaskTypes;
        let playActivityApplicationId = obj4.getPlayActivityApplicationId(item10047);
        let tmp16 = isQuestProgressable;
        let tmp17 = isQuestProgressable(item10047);
        if (tmp17) {
          let tmp18 = playActivityApplicationId;
          tmp17 = null != playActivityApplicationId;
        }
        if (tmp17) {
          let tmp19 = playActivityApplicationId;
          let tmp20 = nextResult;
          if (playActivityApplicationId === tmp8) {
            let tmp21 = item10047;
            let obj = { applicationId: null };
            let tmp22 = nextResult;
            obj[0] = tmp8;
            let result = map.set(tmp12.id, obj);
          }
        }
        continue;
      }
      continue;
    }
    values = quests.values();
    for (const item10074 of values) {
      let tmp27 = item10074;
      let tmp28 = isQuestProgressable;
      let result1 = isQuestProgressable(item10074);
      if (result1) {
        let tmp30 = require;
        let tmp31 = dependencyMap;
        let obj6 = isSponsoredPlayQuest;
        let tmp32 = item10074;
        result1 = obj6.isPlayAnyActivityQuest(tmp27);
      }
      if (result1) {
        let tmp33 = item10074;
        obj = { applicationId: null };
        let tmp34 = closure_12;
        obj[0] = closure_12;
        let result2 = map.set(tmp27.id, obj);
      }
      continue;
    }
    const _Array = Array;
    getQuestLogger.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
    return map;
  }
};
const questProgressManager = new QuestProgressManager();
let result = require("participantFromServer").fileFinishedImporting("modules/quests/managers/QuestProgressManager.tsx");

export default questProgressManager;