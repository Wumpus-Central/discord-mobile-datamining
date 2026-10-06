// === Module 18131: QuestProgressManager ===

// Module 18131 (QuestProgressManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4948 */;
import GameAnalyticsUtils from "GameAnalyticsUtils" /* 5025 */;
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 5026 */;
import RobloxSubgameTypes from "RobloxSubgameTypes" /* 5027 */;
import QuestVariants from "QuestVariants" /* 5631 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5638 */;
import QuestDataUtils from "QuestDataUtils" /* 7196 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7219 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7221 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import FramesConstants from "FramesConstants" /* 8738 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 9077 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import FramesStore from "FramesStore" /* 9000 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import DetectableGameStore from "DetectableGameStore" /* 2024 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4920 */;
import QuestStore from "QuestStore" /* 7200 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 17214 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import getQuestLogger from "getQuestLogger" /* 7206 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let map, set;

let QuestsExperimentLocations;
let closure_12;
function isQuestProgressable(nextResult) {
  const obj = QuestDataUtils;
  let tmp2 = !obj.isQuestExpired(nextResult);
  obj.isQuestExpired(nextResult);
  if (tmp2) {
    tmp2 = null != nextResult.userStatus;
  }
  if (tmp2) {
    tmp2 = null != nextResult.userStatus.enrolledAt;
  }
  if (tmp2) {
    tmp2 = null == nextResult.userStatus.completedAt;
  }
  return tmp2;
}
function handleEmbeddedActivityLaunchSuccess(applicationId) {
  const autoEnroll = UnenrolledActivityQuestStore.getState().autoEnroll;
  const quests = QuestStore.quests;
  const obj = QuestMatchingUtils;
  const eligibleQuestsForApplicationId = obj.getEligibleQuestsForApplicationId(quests, applicationId);
  for (const item10020 of eligibleQuestsForApplicationId) {
    if (autoEnroll) {
      let features = tmp2.config.features;
      if (features.includes(QuestVariants.QuestVariants.MOBILE_ACTIVITY_QUEST)) {
        let tmp5Result = QuestActionCreators;
        let obj3 = { questContent: QuestTypes.QuestContent.RUNNING_ACTIVITY, questContentCTA: AnalyticsTypes.QuestContentCTA.START_QUEST, sourceQuestContent: QuestTypes.QuestContent.RUNNING_ACTIVITY };
        let enrollInQuest = tmp5Result.enrollInQuest;
        let id = item10020.id;
        let enrollInQuestResult = enrollInQuest(id, obj3);
        obj2.return();
        return enrollInQuestResult;
      }
    }
    continue;
  }
}
function isQuestRobloxRelated(desktopApplicationIds, distributor) {
  let tmp = null != distributor;
  if (tmp) {
    let someResult = desktopApplicationIds.some((item) => item === RobloxSubgameTypes.ROBLOX_APPLICATION_ID);
    if (someResult) {
      const obj = RobloxSubgameUtils;
      someResult = obj.isRobloxSubgame(distributor);
    }
    tmp = someResult;
  }
  return tmp;
}
({ DISCORD_APPLICATION_ID: closure_12, QuestsExperimentLocations } = QuestConstants);
const isLaunched = FramesConstants.isLaunched;
const MINUTE = DurationsDefault.Millis.MINUTE;
const SECOND = DurationsDefault.Millis.SECOND;
let obj = { location: QuestsExperimentLocations.QUESTS_MANAGER };
const authStore3 = getQuestLogger.getQuestLogger(obj);
class QuestProgressManager extends AutomaticLifecycleManager {
  constructor() {
    let applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    let obj = {};
    const PLAY_ON_DESKTOP = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP;
    obj[PLAY_ON_DESKTOP] = new Map();
    new Map();
    const STREAM_ON_DESKTOP = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
    obj[STREAM_ON_DESKTOP] = new Map();
    new Map();
    const PLAY_ACTIVITY = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY;
    obj[PLAY_ACTIVITY] = new Map();
    applyArgumentsResult.heartbeats = obj;
    applyArgumentsResult.calculateHeartbeatDurationMs = function calculateHeartbeatDurationMs(questId) {
      quests = quests.quests;
      const value = quests.get(questId);
      if (null != value) {
        if (null != value.config) {
          if (null != value.userStatus) {
            const obj = QuestTaskUtils;
            const questTaskDetails = obj.getQuestTaskDetails(value, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.DESKTOP);
            const _Math = Math;
            const diff = questTaskDetails.targetSeconds - questTaskDetails.progressSeconds;
            const bound = Math.max(0, diff * DurationsDefault.Millis.SECOND);
            let sum = MINUTE;
            if (bound <= MINUTE) {
              sum = bound + SECOND;
            }
            return sum;
          }
        }
      }
      return MINUTE;
    };
    applyArgumentsResult.initiateHeartbeat = function initiateHeartbeat(questId, arg1, arg2) {
      let closure_1 = arg1;
      let closure_2 = arg2;
      const obj = questId.heartbeats[arg1];
      if (obj.has(questId)) {
        let _HermesInternal2 = HermesInternal;
        logger.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: " + questId);
      } else {
        function maybeSendHeartbeat() {
          const activelyProgressingQuests = require.getActivelyProgressingQuests(closure_1);
          if (activelyProgressingQuests.has(questId)) {
            let executableFingerprint;
            const value = activelyProgressingQuests.get(questId);
            applicationId = undefined;
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
            if (value != null) {
              executableFingerprint = value.executableFingerprint;
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
            if (closure_1 === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
              const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
              if (null == currentUserActiveStream) {
                const _HermesInternal3 = HermesInternal;
                logger.log("~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: " + questId);
                require.terminateHeartbeat(questId, closure_1);
              } else {
                const _HermesInternal4 = HermesInternal;
                const tmp13Result = StreamKeyUtils;
                const encodeStreamKeyResult = tmp13Result.encodeStreamKey(currentUserActiveStream);
                logger.log("~ initiateHeartbeat -> Sending heartbeat for questId: " + questId);
                const obj2 = { questId, streamKey: encodeStreamKeyResult, applicationId, executablePath, executableFingerprint };
                const tmp13Result3 = QuestActionCreators;
                tmp13Result3.sendHeartbeat(obj2);
              }
            } else {
              const _HermesInternal2 = HermesInternal;
              logger.log("~ initiateHeartbeat -> Sending heartbeat for questId: " + questId);
              const obj3 = { questId, applicationId, executablePath, executableFingerprint };
              const tmp13Result4 = QuestActionCreators;
              tmp13Result4.sendHeartbeat(obj3);
            }
            const _window = window;
            const result = require.set(questId, window.setTimeout(maybeSendHeartbeat, require.calculateHeartbeatDurationMs(questId)));
          } else {
            const _HermesInternal = HermesInternal;
            logger.log("~ initiateHeartbeat -> Quest " + questId + " is no longer actively progressing, terminating heartbeat");
            require.terminateHeartbeat(questId, closure_1);
          }
        }
        let _HermesInternal = HermesInternal;
        logger.log("~ initiateHeartbeat -> Initiating heartbeat for Quest " + questId);
        maybeSendHeartbeat();
      }
    };
    applyArgumentsResult.terminateHeartbeat = function terminateHeartbeat(questId, item10030) {
      quests = QuestStore.quests;
      const value = obj.get(questId);
      if (null != value) {
        const _HermesInternal2 = HermesInternal;
        logger.log("~ terminateHeartbeat -> Terminating heartbeat for questId: " + questId);
        const _window = window;
        window.clearTimeout(value);
        require.heartbeats[item10030].delete(questId);
        const value2 = quests.get(questId);
        let tmp6 = null != value2;
        if (tmp6) {
          const obj2 = QuestDataUtils;
          tmp6 = !obj2.isQuestExpired(value2) && null != value2.userStatus && null != value2.userStatus.enrolledAt && null == value2.userStatus.completedAt;
          !obj2.isQuestExpired(value2) && null != value2.userStatus && null != value2.userStatus.enrolledAt && null == value2.userStatus.completedAt;
        }
        if (tmp6) {
          const _HermesInternal = HermesInternal;
          logger.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: " + questId);
          const obj4 = { questId, terminal: true };
          const obj3 = QuestActionCreators;
          obj3.sendHeartbeat(obj4);
        }
      }
    };
    applyArgumentsResult.handleSendHeartbeatSuccess = function handleSendHeartbeatSuccess(questId) {
      questId = questId.questId;
      const userStatus = questId.userStatus;
      logger.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: " + questId + ")");
      if (null != userStatus.completedAt) {
        const _HermesInternal = HermesInternal;
        logger.log("~ handleSendHeartbeatSuccess -> Quest " + questId + " completed, terminating any heartbeats for it");
        const _Object = Object;
        const keys = Object.keys(require.heartbeats);
        for (const item10030 of keys) {
          let terminateHeartbeatResult = require.terminateHeartbeat(questId, item10030);
          continue;
        }
      }
    };
    applyArgumentsResult.handleSendHeartbeatFailure = function handleSendHeartbeatFailure(questId) {
      logger.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: " + questId.questId);
    };
    let obj2 = {
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
        return syncHeartbeats(items, "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS");
      },
      QUESTS_ENROLL_SUCCESS() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
        return syncHeartbeats(items, "QUESTS_ENROLL_SUCCESS", (config) => {
          let hasItem = null != config;
          if (hasItem) {
            const features = config.config.features;
            hasItem = features.includes(closure_1_0(closure_1_2[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
          }
          return !hasItem;
        });
      },
      QUESTS_SEND_HEARTBEAT_SUCCESS: applyArgumentsResult.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: applyArgumentsResult.handleSendHeartbeatFailure,
      QUESTS_PREVIEW_UPDATE_SUCCESS() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
        return syncHeartbeats(items, "QUESTS_PREVIEW_UPDATE_SUCCESS");
      },
      GAME_FETCH_SUCCESS() {
        const obj = DispatcherDefault;
        return obj.wait(() => {
          syncHeartbeats = syncHeartbeats.syncHeartbeats;
          const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
          syncHeartbeats(items, "GAME_FETCH_SUCCESS");
        });
      },
      APPLICATIONS_FETCH_SUCCESS() {
        const obj = DispatcherDefault;
        return obj.wait(() => {
          syncHeartbeats = syncHeartbeats.syncHeartbeats;
          const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
          syncHeartbeats(items, "APPLICATIONS_FETCH_SUCCESS");
        });
      },
      RUNNING_GAMES_CHANGE() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
        return syncHeartbeats(items, "RUNNING_GAMES_CHANGE");
      },
      RUNNING_NON_GAMES_CHANGE() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
        return syncHeartbeats(items, "RUNNING_NON_GAMES_CHANGE");
      },
      LOCAL_ACTIVITY_UPDATE() {
        const obj = DispatcherDefault;
        return obj.wait(() => {
          syncHeartbeats = syncHeartbeats.syncHeartbeats;
          const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
          syncHeartbeats(items, "LOCAL_ACTIVITY_UPDATE");
        });
      },
      RPC_APP_DISCONNECTED() {
        const obj = DispatcherDefault;
        return obj.wait(() => {
          syncHeartbeats = syncHeartbeats.syncHeartbeats;
          const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
          syncHeartbeats(items, "RPC_APP_DISCONNECTED");
        });
      },
      STREAM_START() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
        return syncHeartbeats(items, "STREAM_START");
      },
      STREAM_CREATE() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
        return syncHeartbeats(items, "STREAM_CREATE");
      },
      STREAM_CLOSE() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
        return syncHeartbeats(items, "STREAM_CLOSE");
      },
      PASSIVE_UPDATE_V2() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
        return syncHeartbeats(items, "PASSIVE_UPDATE_V2");
      },
      VOICE_STATE_UPDATES() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
        return syncHeartbeats(items, "VOICE_STATE_UPDATES");
      },
      EMBEDDED_ACTIVITY_LAUNCH_SUCCESS(applicationId) {
        handleEmbeddedActivityLaunchSuccess(applicationId.applicationId);
      },
      FRAME_LAUNCH(arg0) {
        return closure_0(...arguments);
      },
      FRAME_STOP() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
        syncHeartbeats(items, "FRAME_STOP");
      },
      EMBEDDED_ACTIVITY_UPDATE_V2() {
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
        syncHeartbeats(items, "EMBEDDED_ACTIVITY_UPDATE_V2", (config) => {
          let hasItem = null != config;
          if (hasItem) {
            const features = config.config.features;
            hasItem = features.includes(closure_1_0(closure_1_2[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
          }
          return !hasItem;
        });
      },
      QUEST_APPLICATION_START_TIMER(questId) {
        questId = questId.questId;
        const syncHeartbeats = require.syncHeartbeats;
        const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
        syncHeartbeats(items, "QUEST_APPLICATION_START_TIMER", (id) => {
          let tmp = null != id && id.id === questId;
          if (tmp) {
            let hasItem = null != id;
            if (hasItem) {
              const features = id.config.features;
              hasItem = features.includes(closure_2_0(closure_2_2[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
            }
            tmp = hasItem;
          }
          return tmp;
        });
      }
    };
    new Map();
    applyArgumentsResult = _asyncToGenerator(async (arg0) => {
      let c3;
      let c4;
      let closure_1;
      closure_0 = arg0;
      await closure_1_18(applicationId);
      const syncHeartbeats = closure_130_1.syncHeartbeats;
      const items = [closure_0(closure_2[23]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
      syncHeartbeats(items, "FRAME_LAUNCH", (config) => {
        let hasItem = null != config;
        if (hasItem) {
          const features = config.config.features;
          hasItem = features.includes(closure_1_0(closure_1_2[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
        }
        return !hasItem;
      });
      await "IconComponent";
      closure_2 = tmp4;
      applicationId = closure_0.applicationId;
      return "Reflect";
    });
    applyArgumentsResult.actions = obj2;
    return applyArgumentsResult;
  }
  syncHeartbeats(items, APPLICATIONS_FETCH_SUCCESS, arg2) {

  }
  getActivelyProgressingQuests(type) {
    const self = this;
    if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP === type) {
      return self.getActivelyProgressingPlayOnDesktopQuests();
    } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP === type) {
      return self.getActivelyProgressingStreamOnDesktopQuests();
    } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY === type) {
      return self.getActivelyProgressingActivityQuests();
    } else {
      const tmpResult = GlobalUtils;
      tmpResult.assertNever(type);
    }
  }
  getActivelyProgressingPlayOnDesktopQuests() {
    map = new Map();
    const runningGames = RunningGameStore.getRunningGames();
    const runningNonGames = RunningGameStore.getRunningNonGames();
    const quests = QuestStore.quests;
    logger.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", runningGames, "Running non-games: ", runningNonGames);
    let obj = {};
    let iter = runningGames[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (!nextResult.isLauncher) {
        let id = tmp5.id;
        let tmp7 = id;
        if (null == id) {
          let overrideForGame = RunningGameStore.getOverrideForGame(tmp5);
          if (null == tmp5.distributor) {
            let tmp11 = overrideForGame;
          }
          let tmp13 = nextResult;
          let findGameResult = DetectableGameStore.findGame(tmp5);
          let id1;
          if (findGameResult != null) {
            id1 = findGameResult.id;
          }
          tmp7 = id1;
        }
        if (null != tmp7) {
          let obj3 = map(obj[15]);
          let tmp20 = tmp7;
          let questApplicationIdsForRunningGame = obj3.getQuestApplicationIdsForRunningGame(tmp5, tmp7);
          let tmp23 = questApplicationIdsForRunningGame;
          for (const item10062 of questApplicationIdsForRunningGame) {
            obj[item10062] = tmp5;
            continue;
          }
        }
      }
      continue;
    }
    for (const item10070 of runningNonGames) {
      if (null != item10070.id) {
        obj[item10070.id] = item10070;
      }
      continue;
    }
    function _loop(iter2) {
      let closure_0 = iter2;
      obj = GameAnalyticsUtils;
      const result = obj.removeExecutablePathPrefix(tmp.exePath);
      const values = quests.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        let obj2 = QuestTaskUtils;
        let desktopApplicationIds = obj2.getDesktopApplicationIds(nextResult);
        if (isQuestProgressable(nextResult)) {
          if (null != desktopApplicationIds) {
            let found = desktopApplicationIds.find((item) => item === closure_0);
            if (null != found) {
              let obj3 = { applicationId: tmp25, executablePath: result, executableFingerprint: tmp.executableFingerprint };
              let result1 = map.set(tmp5.id, obj3);
            } else if (isQuestRobloxRelated(desktopApplicationIds, tmp)) {
              let obj4 = { applicationId: RobloxSubgameTypes.ROBLOX_APPLICATION_ID, executablePath: result, executableFingerprint: tmp.executableFingerprint };
              set = map.set;
              let id = tmp5.id;
              let result2 = set(id, obj4);
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
    logger.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
    return map;
  }
  getActivelyProgressingStreamOnDesktopQuests() {
    map = new Map();
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return map;
    } else if (SortedVoiceStateStore.countVoiceStatesForChannel(currentUserActiveStream.channelId) < 2) {
      return map;
    } else {
      const streamerActiveStreamMetadata = ApplicationStreamingStore.getStreamerActiveStreamMetadata();
      if (null == streamerActiveStreamMetadata) {
        return map;
      } else {
        logger.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", streamerActiveStreamMetadata);
        const id = streamerActiveStreamMetadata.id;
        if (null == id) {
          return map;
        } else {
          const quests = QuestStore.quests;
          const values = quests.values();
          const iter = values[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp5 = nextResult;
            let obj3 = QuestTaskUtils;
            let streamingApplicationId = obj3.getStreamingApplicationId(nextResult);
            let tmp10 = isQuestProgressable(nextResult);
            if (tmp10) {
              tmp10 = null != streamingApplicationId;
            }
            if (tmp10) {
              if (streamingApplicationId === id) {
                let obj = { applicationId: id };
                let result = map.set(tmp5.id, obj);
              }
            }
            continue;
          }
          const _Array = Array;
          logger.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
          return map;
        }
      }
    }
  }
  getActivelyProgressingActivityQuests() {
    map = new Map();
    const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
    const mainFrame = FramesStore.getMainFrame();
    set = new Set(selfEmbeddedActivities.keys());
    if (isLaunched(mainFrame)) {
      set.add(mainFrame.applicationId);
    }
    logger.log("~ getActivelyProgressingActivityQuestIds -> Running activity applicationIds: ", Array.from(set));
    if (0 === set.size) {
      return map;
    } else {
      const quests = QuestStore.quests;
      const iter = set[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult;
        let values = quests.values();
        for (const item10047 of values) {
          let obj4 = QuestTaskUtils;
          let playActivityApplicationId = obj4.getPlayActivityApplicationId(item10047);
          let tmp17 = isQuestProgressable(item10047);
          if (tmp17) {
            tmp17 = null != playActivityApplicationId;
          }
          if (tmp17) {
            if (playActivityApplicationId === tmp8) {
              let obj = { applicationId: tmp8 };
              let result = map.set(item10047.id, obj);
            }
          }
          continue;
        }
        continue;
      }
      const values2 = quests.values();
      for (const item10074 of values2) {
        let result1 = isQuestProgressable(item10074);
        if (result1) {
          let obj6 = utils_QuestUtils;
          result1 = obj6.isPlayAnyActivityQuest(item10074);
        }
        if (result1) {
          let obj2 = { applicationId };
          let result2 = map.set(item10074.id, obj2);
        }
        continue;
      }
      const _Array = Array;
      logger.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
      return map;
    }
  }
}
const prototype = QuestProgressManager.prototype;
const questProgressManager = new QuestProgressManager();
let result = size.fileFinishedImporting("modules/quests/managers/QuestProgressManager.tsx");

export default questProgressManager;