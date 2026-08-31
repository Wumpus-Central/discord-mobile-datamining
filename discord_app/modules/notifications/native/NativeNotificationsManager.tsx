// === Module 17353: getDeliveredNotifications ===

// Module 17353 (getDeliveredNotifications)
import timestampDefault from "timestamp" /* 3 */;
import initializeDefault from "initialize" /* 5454 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "updateGuildUnreadSentinel" /* 7349 */;
import closure_6 from "generateOldThreadCutoff" /* 4463 */;
import { AnalyticEvents } from "ME" /* 676 */;

let require = arg1;
function getDeliveredNotifications() {
  const self = this;
  const apply = _getDeliveredNotifications.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getDeliveredNotifications() {
  const self = this;
  const tmp = callback(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        table = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp2;
            obj1 = closure_1_0(table[6]);
            if (obj1.shouldClearChannelNotificationsOnAppForeground({ location: "getDeliveredNotifications" })) {
              v0 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = v0(tmp8[7]).getDeliveredNotifications();
              return obj1;
            } else {
              table = 3;
            }
            tmp8 = table;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_9 = arg1;
        }
        table = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp10) {
        table = tmp;
        throw tmp10;
      }
    }
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function updateAndClearStaleNotifications() {
  const self = this;
  const apply = _updateAndClearStaleNotifications.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateAndClearStaleNotifications() {
  const self = this;
  const tmp = callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c0 = 0;
            c1 = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_10();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          (function clearStaleNotifications() {
            if (obj.shouldClearChannelNotificationsOnAppForeground({ location: "clearStaleNotifications" })) {
              const found = closure_9.filter((userInfo) => {
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
                          const ackMessageIdResult = closure_6.ackMessageId(userInfo.userInfo.channel_id);
                          let tmp3 = null != ackMessageIdResult;
                          if (tmp3) {
                            tmp3 = callback(table[8]).compare(ackMessageIdResult, message_id) > 0;
                            const obj = callback(table[8]);
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
                const result = v1(table[7]).removeDeliveredNotifications(mapped);
                callback();
                const obj2 = v1(table[7]);
              }
            }
          })();
          c2 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        c2 = tmp;
        throw tmp8;
      }
    }
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = new timestampDefault("NativeNotificationsManager");
let closure_9 = [];
initializeDefault;
let prototype = function NativeNotificationsManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleAck = function handleAck(channelId) {
    channelId = channelId.channelId;
    if (obj.isIOS()) {
      const result = callback(9618).setApplicationIconBadgeNumber(totalMentionCount.getTotalMentionCount());
      const obj2 = callback(9618);
    }
    if (null != channelId) {
      const DCDNotificationManager = closure_4.DCDNotificationManager;
      if (DCDNotificationManager != null) {
        const result1 = DCDNotificationManager.clearNotificationsForChannel(channelId);
      }
    }
  };
  require = applyArgumentsResult;
  applyArgumentsResult.handlePostConnectionOpen = callback(function*() {
    if (logger === 2) {
      logger = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        logger = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            logger = 3;
            throw arg1;
          } else if (arg0 === 2) {
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let map = tmp3;
            c3 = tmp6;
            closure_0 = undefined;
            closure_1 = undefined;
            let processing_notification_states;
            c3 = undefined;
            map = undefined;
            c5 = undefined;
            c6 = undefined;
            c7 = undefined;
            logger = undefined;
            if (obj14.isIOS()) {
              callback();
            } else {
              let result = closure_1_0.handleSetCallNotificationExperiment();
            }
            c6 = 1;
            function moveAndReadData(notifications_to_track, processing_notifications) {
              const self = this;
              const apply = _moveAndReadData.apply;
              if (typeof apply === "unknown") {
                applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            function _moveAndReadData() {
              const self = this;
              const tmp = _undefined((arg0, arg1) => {
                closure_0 = arg0;
                closure_1 = arg1;
                c4 = 0;
                c5 = 0;
                return (function*(arg0, arg1) {
                  closure_2 = tmp2;
                  yield callback(closure_1_2[11]).removeFile(callback, closure_1);
                  let obj5 = callback(closure_1_2[11]);
                  yield obj5.moveFile(callback, callback, closure_1);
                  if (2 === tmp5) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c5 = 3;
                      const obj4 = { value: null, done: true };
                      obj4[0] = arg1;
                      return obj4;
                    } else {
                      let tmp6 = null;
                      if (arg1) {
                        const obj2 = callback(closure_1_2[11]);
                        c4 = 3;
                        c5 = 1;
                        obj5 = { value: null, done: false };
                        obj5[0] = obj2.readFile(callback, closure_1, "utf8");
                        return obj5;
                      }
                    }
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else {
                    tmp6 = arg1;
                    if (arg0 === 2) {
                      c5 = 3;
                      const obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    }
                  }
                  return tmp6;
                })();
              });
              closure_10 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            function normalizeTimestampToMs(joined) {
              if (null != joined) {
                if (typeof joined === "number") {
                  const _Math = Math;
                  let rounded = Math.round(1000 * joined);
                } else if (typeof joined === "string") {
                  const _parseInt = parseInt;
                  rounded = parseInt(joined, 10);
                }
                return rounded;
              }
            }
            obj14 = closure_1_0(closure_1_2[10]);
            let str2 = "cache";
            if (obj8.isIOS()) {
              str2 = "shared";
            }
            closure_0 = str2;
            closure_1 = "processing_notifications";
            processing_notification_states = "processing_notification_states";
            c7 = 2;
            logger = 1;
            obj1 = { value: null, done: false };
            obj1[0] = moveAndReadData("notifications_to_track", "processing_notifications");
            return obj1;
          }
        } else {
          if (1 === tmp9) {
            c6 = 0;
            callback = c5;
            logger.error("Error tracking push notifications", callback);
            logger = 3;
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                logger = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_3 = arg1;
                if (null == closure_3) {
                  c6 = 0;
                  logger = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  const _Map = Map;
                  map = new Map();
                  if (obj13.isIOS()) {
                    c7 = 3;
                    logger = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = closure_1_9("notification_states_to_track", closure_1_2);
                    return obj3;
                  } else {
                    dependencyMap = closure_3.trim().split("\n");
                    closure_1 = dependencyMap;
                    closure_1 = dependencyMap;
                    closure_0 = dependencyMap[Symbol.iterator]();
                    const str = closure_3.trim();
                  }
                  obj13 = closure_1_0(closure_1_2[10]);
                }
              }
            } else if (3 === tmp9) {
              if (arg0 === 1) {
                logger = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_5 = arg1;
                if (null !== closure_5) {
                  const parts = closure_5.trim().split("\n");
                  const item = parts.forEach((arg0) => {
                    const parsed = JSON.parse(arg0);
                    const result = map.set(parsed._local_uuid, parsed.app_state);
                  });
                  const str13 = closure_5.trim();
                }
              }
            } else if (4 === tmp9) {
              c6 = 1;
              closure_0.return();
              throw c5;
            } else {
              if (5 === tmp9) {
                if (arg0 === 1) {
                  logger = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 0;
                  logger = 3;
                  let obj4 = { value: null, done: true };
                  obj4[0] = arg1;
                  return obj4;
                } else {
                  const obj12 = closure_1_0(closure_1_2[10]);
                }
              } else if (arg0 === 1) {
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                logger = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c6 = 0;
            }
            c6 = 0;
            logger = 3;
            let obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
          obj1 = closure_1_0(closure_1_2[11]);
          c7 = 6;
          logger = 1;
          const obj6 = { value: null, done: false };
          obj6[0] = obj1.removeFile(closure_1_0, closure_1_2);
          return obj6;
        }
      } catch (tmp41) {
        c5 = tmp41;
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
      const DCDNotificationManager = closure_4.DCDNotificationManager;
      const setShowMissedCallNotifications = DCDNotificationManager.setShowMissedCallNotifications;
      if (setShowMissedCallNotifications != null) {
        const result = setShowMissedCallNotifications(true);
      }
      const DCDNotificationManager2 = closure_4.DCDNotificationManager;
      const setShowFullscreenCallUI = DCDNotificationManager2.setShowFullscreenCallUI;
      if (setShowFullscreenCallUI != null) {
        const result1 = setShowFullscreenCallUI(true);
      }
      const tmp = closure_4;
    }
  };
  applyArgumentsResult.updateAndClearStaleNotifications = function updateAndClearStaleNotifications() {
    callback2();
  };
  applyArgumentsResult.actions = { MESSAGE_ACK: applyArgumentsResult.handleAck, CHANNEL_SELECT: applyArgumentsResult.handleAck, POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, EXPERIMENT_OVERRIDE_BUCKET: applyArgumentsResult.handleSetCallNotificationExperiment, EXPERIMENTS_FETCH_SUCCESS: applyArgumentsResult.handleSetCallNotificationExperiment, APP_STATE_UPDATE: applyArgumentsResult.updateAndClearStaleNotifications };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const tmp2 = new timestampDefault("NativeNotificationsManager");
let result = require("set").fileFinishedImporting("modules/notifications/native/NativeNotificationsManager.tsx");

export default prototype;