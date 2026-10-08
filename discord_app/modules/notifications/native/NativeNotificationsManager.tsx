// === Module 18334: NativeNotificationsManager ===

// Module 18334 (NativeNotificationsManager)
import LoggerDefault from "Logger" /* 3 */;
import PushNotificationDefault from "PushNotification" /* 10820 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6082 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;

let require = fn;
const NativeModules = fn(17).NativeModules;
const AnalyticEvents = fn(1085).AnalyticEvents;
let closure_7 = new LoggerDefault("NativeNotificationsManager");
const prototype = function NativeNotificationsManager() {
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
    obj = applyArgumentsResult(1381);
  };
  require = applyArgumentsResult;
  applyArgumentsResult.handlePostConnectionOpen = asyncGeneratorStep(async () => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === logger) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
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
            if (!obj14.isIOS()) {
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
              const tmp = closure_3(function*(arg0, arg1) {
                closure_130_0 = closure_0;
                closure_130_1 = closure_1;
                yield closure_0(tmp2[8]).removeFile(closure_2_0, closure_1);
                yield closure_0(tmp2[8]).moveFile(closure_131_0, closure_130_0, closure_130_1);
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
                      return { value: closure_0(tmp2[8]).readFile(closure_131_0, closure_130_1, "utf8"), done: false };
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
            obj14 = applyArgumentsResult(1381);
            let str2 = "cache";
            if (obj8.isIOS()) {
              str2 = "shared";
            }
            closure_131_0 = str2;
            closure_131_1 = "processing_notifications";
            closure_131_2 = "processing_notification_states";
            logger = 2;
            c8 = 1;
            const obj5 = { value: moveAndReadData("notifications_to_track", "processing_notifications"), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp9) {
            c6 = 0;
            closure_131_12 = closure_5;
            logger.error("Error tracking push notifications", closure_131_12);
            c8 = 3;
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_131_3 = value;
                if (null == closure_131_3) {
                  c6 = 0;
                  c8 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  const _Map = Map;
                  const map = new Map();
                  closure_131_4 = map;
                  if (obj13.isIOS()) {
                    logger = 3;
                    c8 = 1;
                    const obj7 = { value: closure_131_9("notification_states_to_track", closure_131_2), done: false };
                    return obj7;
                  } else {
                    closure_131_6 = closure_131_3.trim().split("\n");
                    closure_1 = closure_131_6;
                    closure_1 = closure_131_6;
                    applyArgumentsResult = closure_131_6[Symbol.iterator]();
                    const str = closure_131_3.trim();
                  }
                  obj13 = applyArgumentsResult(1381);
                }
              }
            } else if (3 === tmp9) {
              if (arg0 === 1) {
                c8 = 3;
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
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                } else {
                  applyArgumentsResult(1381);
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            const obj10 = { value, done: true };
            return obj10;
          }
          logger = 6;
          c8 = 1;
          const obj11 = { value: applyArgumentsResult(8307).removeFile(closure_131_0, closure_131_2), done: false };
          return obj11;
        }
      } catch (tmp39) {
        closure_5 = tmp39;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp39;
        } else if (tmp === tmp41) {
          logger = tmp;
        } else {
          logger = tmp5;
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
    obj = applyArgumentsResult(1381);
  };
  applyArgumentsResult.actions = { MESSAGE_ACK: applyArgumentsResult.handleAck, CHANNEL_SELECT: applyArgumentsResult.handleAck, POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, EXPERIMENT_OVERRIDE_BUCKET: applyArgumentsResult.handleSetCallNotificationExperiment, EXPERIMENTS_FETCH_SUCCESS: applyArgumentsResult.handleSetCallNotificationExperiment };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/native/NativeNotificationsManager.tsx");

export default prototype1;