// discord_app/modules/notifications/native/NativeNotificationsManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../../../Constants.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import ClearChannelNotificationsOnAppForegroundExperiment from "ClearChannelNotificationsOnAppForegroundExperiment.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c1, c2, c4, c5, closure_12, closure_3, constants, map;

function getDeliveredNotifications() {
  return obj(...arguments);
}
let obj = function _getDeliveredNotifications() {
  obj = _asyncToGenerator(async () => {
    let obj3;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_0 = tmp;
            const obj2 = ClearChannelNotificationsOnAppForegroundExperiment;
            if (obj2.shouldClearChannelNotificationsOnAppForeground({ location: "getDeliveredNotifications" })) {
              c1 = 1;
              c2 = 1;
              const obj6 = { value: obj3.getDeliveredNotifications(), done: false };
              obj3 = PushNotificationDefault;
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_9 = value;
        }
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
function updateAndClearStaleNotifications() {
  return obj(...arguments);
}
obj = function _updateAndClearStaleNotifications() {
  obj = _asyncToGenerator(async () => {
    function clearStaleNotifications() {
      obj = closure_1_0(closure_1_2[6]);
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
                      obj = closure_1_1(closure_1_2[8]);
                      tmp3 = obj.compare(ackMessageIdResult, message_id) > 0;
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
          const obj2 = closure_1_1(closure_1_2[7]);
          const result = obj2.removeDeliveredNotifications(mapped);
          closure_1_10();
        }
      }
    }
    if (c2 === 2) {
      c2 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        let tmp3 = c1;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let c0 = 0;
            c1 = 1;
            c2 = 1;
            const obj4 = { value: getDeliveredNotifications(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          clearStaleNotifications();
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const AnalyticEvents = Constants.AnalyticEvents;
const tmp2 = new LoggerDefault("NativeNotificationsManager");
let closure_8 = tmp2;
let closure_9 = [];
class NativeNotificationsManager extends AutomaticLifecycleManager {
  constructor() {
    let totalMentionCount;
    let applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handleAck = function handleAck(channelId) {
      channelId = channelId.channelId;
      obj = PlatformUtils;
      if (obj.isIOS()) {
        const obj2 = PushNotificationDefault;
        const result = obj2.setApplicationIconBadgeNumber(totalMentionCount.getTotalMentionCount());
      }
      if (null != channelId) {
        const DCDNotificationManager = NativeModules.DCDNotificationManager;
        if (DCDNotificationManager != null) {
          const result1 = DCDNotificationManager.clearNotificationsForChannel(channelId);
        }
      }
    };
    require = applyArgumentsResult;
    applyArgumentsResult.handlePostConnectionOpen = _asyncToGenerator(async function () {
      let background_str;
      let closure_5;
      let logger;
      let str1;
      let value;
      if (logger === 2) {
        logger = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp75;
        let c6;
        try {
          let str3;
          let processing_notifications;
          let processing_notification_states;
          let closure_6;
          let PUSH_NOTIFICATION_RECEIVED;
          let moveAndReadData;
          let normalizeTimestampToMs;
          logger = 2;
          const tmp4 = constants;
          if (0 === constants) {
            if (arg0 === 1) {
              logger = 3;
              throw value;
            } else if (arg0 === 2) {
              logger = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_4 = tmp;
              str3 = undefined;
              processing_notifications = undefined;
              processing_notification_states = undefined;
              map = undefined;
              tmp75 = undefined;
              closure_6 = undefined;
              PUSH_NOTIFICATION_RECEIVED = undefined;
              logger = undefined;
              const obj15 = applyArgumentsResult(background_str[10]);
              if (obj15.isIOS()) {
                updateAndClearStaleNotifications();
              } else {
                let result = require.handleSetCallNotificationExperiment();
              }
              c6 = 1;
              moveAndReadData = function moveAndReadData() {
                return closure_1_10(...arguments);
              };
              obj = function _moveAndReadData() {
                obj = PUSH_NOTIFICATION_RECEIVED(function* (arg0, arg1) {
                  let obj3;
                  let obj6;
                  let obj9;
                  closure_0 = arg0;
                  closure_1 = arg1;
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    try {
                      let closure_2;
                      c5 = 2;
                      if (0 === c4) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          closure_3 = tmp4;
                          closure_2 = tmp;
                          c4 = 1;
                          c5 = 1;
                          const obj5 = { value: obj9.removeFile(str3, closure_1), done: false };
                          obj9 = closure_0(closure_2[11]);
                          return obj5;
                        }
                      } else if (1 === c4) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 3;
                          const obj7 = { value, done: true };
                          return obj7;
                        } else {
                          c4 = 2;
                          c5 = 1;
                          const obj8 = { value: obj6.moveFile(closure_131_0, closure_0, closure_1), done: false };
                          obj6 = closure_0(closure_2[11]);
                          return obj8;
                        }
                      } else {
                        let tmp5;
                        if (2 === c4) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            const obj10 = { value, done: true };
                            return obj10;
                          } else {
                            tmp5 = null;
                            if (value) {
                              c4 = 3;
                              c5 = 1;
                              const obj11 = { value: obj3.readFile(closure_131_0, closure_1, "utf8"), done: false };
                              obj3 = closure_0(closure_2[11]);
                              return obj11;
                            }
                          }
                        } else if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else {
                          tmp5 = value;
                          if (arg0 === 2) {
                            c5 = 3;
                            obj = { value, done: true };
                            return obj;
                          }
                        }
                        c5 = 3;
                        const obj12 = { value: tmp5, done: true };
                        return obj12;
                      }
                    } catch (tmp24) {
                      c5 = 3;
                      throw tmp24;
                    }
                  }
                });
                return obj(...arguments);
              };
              normalizeTimestampToMs = function normalizeTimestampToMs(timestamp) {
                if (null != timestamp) {
                  let rounded;
                  if (typeof timestamp === "number") {
                    const _Math = Math;
                    rounded = Math.round(1000 * timestamp);
                  } else if (typeof timestamp === "string") {
                    const _parseInt = parseInt;
                    rounded = parseInt(timestamp, 10);
                  }
                  return rounded;
                }
              };
              let obj11 = applyArgumentsResult(background_str[10]);
              str3 = "cache";
              if (obj11.isIOS()) {
                str3 = "shared";
              }
              processing_notifications = "processing_notifications";
              processing_notification_states = "processing_notification_states";
              PUSH_NOTIFICATION_RECEIVED = moveAndReadData("notifications_to_track", "processing_notifications");
              constants = 2;
              logger = 1;
              let obj5 = { value: PUSH_NOTIFICATION_RECEIVED, done: false };
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c6 = 0;
              closure_12 = tmp75;
              logger.error("Error tracking push notifications", closure_12);
            } else {
              if (2 === tmp4) {
                if (arg0 === 1) {
                  logger = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  logger = 3;
                  let obj6 = { value, done: true };
                  return obj6;
                } else {
                  PUSH_NOTIFICATION_RECEIVED = value;
                  if (null == PUSH_NOTIFICATION_RECEIVED) {
                    c6 = 0;
                    logger = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    const _Map = Map;
                    const self = this;
                    const self2 = this;
                    map = new Map();
                    PUSH_NOTIFICATION_RECEIVED = applyArgumentsResult(background_str[10]);
                    if (PUSH_NOTIFICATION_RECEIVED.isIOS()) {
                      PUSH_NOTIFICATION_RECEIVED = moveAndReadData(
                        "notification_states_to_track",
                        processing_notification_states,
                      );
                      constants = 3;
                      logger = 1;
                      let obj8 = { value: PUSH_NOTIFICATION_RECEIVED, done: false };
                      return obj8;
                    }
                  }
                }
              } else if (3 === tmp4) {
                if (arg0 === 1) {
                  logger = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  logger = 3;
                  let obj9 = { value, done: true };
                  return obj9;
                } else {
                  tmp75 = value;
                  PUSH_NOTIFICATION_RECEIVED = tmp75;
                  if (null !== tmp75) {
                    const str14 = tmp75.trim();
                    const parts = str14.split("\n");
                    const item = parts.forEach((item) => {
                      const parsed = JSON.parse(item);
                      const result = closure_1_4.set(parsed._local_uuid, parsed.app_state);
                    });
                  }
                }
              } else if (4 === tmp4) {
                c6 = 1;
                PUSH_NOTIFICATION_RECEIVED = applyArgumentsResult;
                applyArgumentsResult.return();
                throw tmp75;
              } else {
                if (5 === tmp4) {
                  if (arg0 === 1) {
                    logger = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 0;
                    logger = 3;
                    let obj10 = { value, done: true };
                    return obj10;
                  } else {
                    PUSH_NOTIFICATION_RECEIVED = applyArgumentsResult(background_str[10]);
                    if (PUSH_NOTIFICATION_RECEIVED.isIOS()) {
                      let tmp5 = PUSH_NOTIFICATION_RECEIVED;
                      let obj2 = applyArgumentsResult(background_str[11]);
                      PUSH_NOTIFICATION_RECEIVED = obj2.removeFile(str3, processing_notification_states);
                      constants = 6;
                      logger = 1;
                      let obj12 = { value: PUSH_NOTIFICATION_RECEIVED, done: false };
                      return obj12;
                    }
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
              const str = PUSH_NOTIFICATION_RECEIVED.trim();
              closure_6 = str.split("\n");
              let closure_1 = closure_6;
              applyArgumentsResult = closure_6[Symbol.iterator]();
              PUSH_NOTIFICATION_RECEIVED = applyArgumentsResult.next();
              while (applyArgumentsResult !== undefined) {
                c6 = 2;
                let _JSON = JSON;
                logger = JSON.parse(PUSH_NOTIFICATION_RECEIVED);
                PUSH_NOTIFICATION_RECEIVED = applyArgumentsResult(background_str[10]);
                let isIOSResult = PUSH_NOTIFICATION_RECEIVED.isIOS();
                if (isIOSResult) {
                  isIOSResult = undefined !== logger._local_uuid;
                }
                if (isIOSResult) {
                  PUSH_NOTIFICATION_RECEIVED = logger;
                  let tmp24 = logger;
                  value = map.get(logger._local_uuid);
                  background_str = value;
                  if (value == null) {
                    background_str = "background";
                  }
                  PUSH_NOTIFICATION_RECEIVED.app_state = background_str;
                }
                let tmp31 = closure_1(background_str[12]);
                PUSH_NOTIFICATION_RECEIVED = constants.PUSH_NOTIFICATION_RECEIVED;
                let obj13 = {
                  notification_received_timestamp: normalizeTimestampToMs(logger.timestamp),
                  push_action_type: logger.push_action_type,
                  notif_instance_id: logger.notif_instance_id,
                  notif_type_id: logger.notif_type_id,
                  join_id: logger.join_id,
                  notif_user_id: logger.notif_user_id,
                  receiving_user_id: logger.receiving_user_id,
                  message_id: logger.message_id,
                  message_type: logger.message_type,
                  guild_id: logger.guild_id,
                  channel_id: logger.channel_id,
                  channel_type: str1,
                  rel_type: logger.rel_type,
                  mention_type: logger.mention_type,
                  app_state: logger.app_state,
                  os_enabled: logger.os_enabled,
                };
                let track = tmp31.track;
                let str2 = logger.channel_type;
                str1 = undefined;
                if (str2 != null) {
                  str1 = str2.toString();
                }
                let trackResult = track(PUSH_NOTIFICATION_RECEIVED, obj13);
                c6 = 1;
                continue;
              }
              let obj7 = applyArgumentsResult(background_str[11]);
              PUSH_NOTIFICATION_RECEIVED = obj7.removeFile(str3, processing_notifications);
              constants = 5;
              logger = 1;
              const obj14 = { value: PUSH_NOTIFICATION_RECEIVED, done: false };
              return obj14;
            }
            logger = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp75) {
          if (0 === c6) {
            logger = 3;
            throw tmp75;
          } else if (1 === tmp77) {
            constants = 1;
          } else {
            constants = 4;
          }
        }
      }
    });
    applyArgumentsResult.handleSetCallNotificationExperiment = function handleSetCallNotificationExperiment() {
      obj = PlatformUtils;
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
  }
}
const nativeNotificationsManager = new NativeNotificationsManager();
let result = size.fileFinishedImporting("modules/notifications/native/NativeNotificationsManager.tsx");

export default nativeNotificationsManager;
