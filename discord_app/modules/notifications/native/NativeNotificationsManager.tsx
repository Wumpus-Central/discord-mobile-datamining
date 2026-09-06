// discord_app/modules/notifications/native/NativeNotificationsManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import ClearChannelNotificationsOnAppForegroundExperiment from "ClearChannelNotificationsOnAppForegroundExperiment.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function getDeliveredNotifications() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _getDeliveredNotifications(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = tmp2;
          let obj1 = ClearChannelNotificationsOnAppForegroundExperiment;
          if (obj1.shouldClearChannelNotificationsOnAppForeground({ location: "getDeliveredNotifications" })) {
            c1 = 1;
            c2 = 1;
            obj1 = { value: require("PushNotification").getDeliveredNotifications(), done: false };
            return obj1;
          } else {
            c2 = 3;
          }
          tmp8 = dependencyMap;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_9 = value;
      }
      c2 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp10) {
      c2 = tmp;
      throw tmp10;
    }
  }
};
function updateAndClearStaleNotifications() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _updateAndClearStaleNotifications(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 0;
          c1 = 1;
          c2 = 1;
          const obj1 = { value: getDeliveredNotifications(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        (function clearStaleNotifications() {
          if (obj.shouldClearChannelNotificationsOnAppForeground({ location: "clearStaleNotifications" })) {
            const found = closure_1_9.filter((userInfo) => {
              if (null != userInfo.userInfo) {
                if (typeof userInfo.userInfo === "object") {
                  if (typeof userInfo.userInfo.channel_id !== "string") {
                    return false;
                  } else if (typeof userInfo.userInfo.notif_instance_id !== "string") {
                    return false;
                  } else {
                    let message_id = userInfo.userInfo.notif_instance_id;
                    if ("MESSAGE_CREATE" === userInfo.userInfo.type) {
                      if (typeof userInfo.userInfo.message_id !== "string") {
                        return false;
                      } else {
                        message_id = userInfo.userInfo.message_id;
                      }
                    } else if ("GENERIC_PUSH_NOTIFICATION_SENT" !== userInfo.userInfo.type) {
                      return false;
                    } else if ("REACTIONS_PUSH_NOTIFICATION" !== userInfo.userInfo.notification_type) {
                      return false;
                    }
                    if (null != message_id) {
                      if (typeof message_id === "string") {
                        const ackMessageIdResult = closure_1_6.ackMessageId(userInfo.userInfo.channel_id);
                        let tmp3 = null != ackMessageIdResult;
                        if (tmp3) {
                          tmp3 = closure_1_1(dependencyMap[8]).compare(ackMessageIdResult, message_id) > 0;
                          const obj = closure_1_1(dependencyMap[8]);
                        }
                        return tmp3;
                      }
                    }
                    return false;
                  }
                }
              }
              return false;
            });
            const mapped = found.map((identifier) => identifier.identifier);
            if (mapped.length > 0) {
              const result = closure_1_1(dependencyMap[7]).removeDeliveredNotifications(mapped);
              closure_1_10();
              const obj2 = closure_1_1(dependencyMap[7]);
            }
          }
        })();
        c2 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp8) {
      c2 = tmp;
      throw tmp8;
    }
  }
};
const NativeModules = fn(17).NativeModules;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_8 = new LoggerDefault("NativeNotificationsManager");
let closure_9 = [];
let prototype = function NativeNotificationsManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleAck = function handleAck(channelId) {
    channelId = channelId.channelId;
    if (obj.isIOS()) {
      const result = PushNotificationDefault.setApplicationIconBadgeNumber(totalMentionCount.getTotalMentionCount());
    }
    if (null != channelId) {
      const DCDNotificationManager = NativeModules.DCDNotificationManager;
      if (DCDNotificationManager != null) {
        const result1 = DCDNotificationManager.clearNotificationsForChannel(channelId);
      }
    }
  };
  require = applyArgumentsResult;
  applyArgumentsResult.handlePostConnectionOpen = asyncGeneratorStep(async (arg0, value) => {
    if (logger === 2) {
      logger = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        logger = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            logger = 3;
            throw value;
          } else if (arg0 === 2) {
            logger = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp6;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            closure_131_6 = undefined;
            closure_131_7 = undefined;
            closure_131_8 = undefined;
            if (obj14.isIOS()) {
              updateAndClearStaleNotifications();
            } else {
              let result = applyArgumentsResult.handleSetCallNotificationExperiment();
            }
            c6 = 1;
            function moveAndReadData() {
              const self = this;
              const apply = closure_10.apply;
              if (typeof apply === "unknown") {
                applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            closure_131_9 = moveAndReadData;
            closure_131_10 = function _moveAndReadData() {
              const self = this;
              const tmp = closure_3(function* (arg0, value) {
                closure_130_0 = closure_0;
                closure_130_1 = closure_1;
                yield closure_0(tmp2[11]).removeFile(closure_2_0, closure_1);
                let obj5 = closure_0(tmp2[11]);
                yield obj5.moveFile(closure_131_0, closure_130_0, closure_130_1);
                if (2 === tmp5) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    return { value, done: true };
                  } else {
                    let tmp6 = null;
                    if (value) {
                      c4 = 3;
                      c5 = 1;
                      obj5 = { value: closure_0(tmp2[11]).readFile(closure_131_0, closure_130_1, "utf8"), done: false };
                      return obj5;
                    }
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else {
                  tmp6 = value;
                  if (arg0 === 2) {
                    c5 = 3;
                    return { value, done: true };
                  }
                }
                return tmp6;
              });
              closure_10 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            closure_131_11 = function normalizeTimestampToMs(match) {
              if (null != match) {
                if (typeof match === "number") {
                  const _Math = Math;
                  let rounded = Math.round(1000 * match);
                } else if (typeof match === "string") {
                  const _parseInt = parseInt;
                  rounded = parseInt(match, 10);
                }
                return rounded;
              }
            };
            obj14 = applyArgumentsResult(1115);
            let str2 = "cache";
            if (obj8.isIOS()) {
              str2 = "shared";
            }
            closure_131_0 = str2;
            closure_131_1 = "processing_notifications";
            closure_131_2 = "processing_notification_states";
            c7 = 2;
            logger = 1;
            let obj1 = { value: moveAndReadData("notifications_to_track", "processing_notifications"), done: false };
            return obj1;
          }
        } else {
          if (1 === tmp9) {
            c6 = 0;
            closure_131_12 = closure_5;
            logger.error("Error tracking push notifications", closure_131_12);
            logger = 3;
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                logger = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                logger = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                closure_131_3 = value;
                if (null == closure_131_3) {
                  c6 = 0;
                  logger = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const _Map = Map;
                  const map = new Map();
                  closure_131_4 = map;
                  if (obj13.isIOS()) {
                    c7 = 3;
                    logger = 1;
                    const obj3 = { value: closure_131_9("notification_states_to_track", closure_131_2), done: false };
                    return obj3;
                  } else {
                    closure_131_6 = closure_131_3.trim().split("\n");
                    closure_1 = closure_131_6;
                    closure_1 = closure_131_6;
                    applyArgumentsResult = closure_131_6[Symbol.iterator]();
                    const str = closure_131_3.trim();
                  }
                  obj13 = applyArgumentsResult(1115);
                }
              }
            } else if (3 === tmp9) {
              if (arg0 === 1) {
                logger = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_131_5 = value;
                if (null !== closure_131_5) {
                  const parts = closure_131_5.trim().split("\n");
                  const item = parts.forEach((item) => {
                    const parsed = JSON.parse(item);
                    const result = closure_1_4.set(parsed._local_uuid, parsed.app_state);
                  });
                  const str13 = closure_131_5.trim();
                }
              }
            } else if (4 === tmp9) {
              c6 = 1;
              applyArgumentsResult.return();
              throw closure_5;
            } else {
              if (5 === tmp9) {
                if (arg0 === 1) {
                  logger = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  logger = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  const obj12 = applyArgumentsResult(1115);
                }
              } else if (arg0 === 1) {
                logger = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                logger = 3;
                obj = { value, done: true };
                return obj;
              }
              c6 = 0;
            }
            c6 = 0;
            logger = 3;
            let obj5 = { value, done: true };
            return obj5;
          }
          obj1 = applyArgumentsResult(8205);
          c7 = 6;
          logger = 1;
          const obj6 = { value: obj1.removeFile(closure_131_0, closure_131_2), done: false };
          return obj6;
        }
      } catch (tmp41) {
        closure_5 = tmp41;
        if (tmp4 === c6) {
          logger = tmp2;
          throw tmp41;
        } else if (tmp === tmp43) {
          c7 = tmp;
        } else {
          c7 = tmp5;
        }
      }
    }
  });
  applyArgumentsResult.handleSetCallNotificationExperiment = function handleSetCallNotificationExperiment() {
    if (!obj.isIOS()) {
      const DCDNotificationManager = NativeModules.DCDNotificationManager;
      const setShowMissedCallNotifications = DCDNotificationManager.setShowMissedCallNotifications;
      if (setShowMissedCallNotifications != null) {
        const result = setShowMissedCallNotifications(true);
      }
      const DCDNotificationManager2 = NativeModules.DCDNotificationManager;
      const setShowFullscreenCallUI = DCDNotificationManager2.setShowFullscreenCallUI;
      if (setShowFullscreenCallUI != null) {
        const result1 = setShowFullscreenCallUI(true);
      }
    }
  };
  applyArgumentsResult.updateAndClearStaleNotifications = function updateAndClearStaleNotifications() {
    updateAndClearStaleNotifications();
  };
  applyArgumentsResult.actions = {
    MESSAGE_ACK: applyArgumentsResult.handleAck,
    CHANNEL_SELECT: applyArgumentsResult.handleAck,
    POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen,
    EXPERIMENT_OVERRIDE_BUCKET: applyArgumentsResult.handleSetCallNotificationExperiment,
    EXPERIMENTS_FETCH_SUCCESS: applyArgumentsResult.handleSetCallNotificationExperiment,
    APP_STATE_UPDATE: applyArgumentsResult.updateAndClearStaleNotifications,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/native/NativeNotificationsManager.tsx");

export default prototype;
