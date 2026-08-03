import participantFromServer from "participantFromServer";
import getParticipants from "getParticipants";
import computeAlertSettings from "computeAlertSettings";
import { trackMessageNotificationTimestamps as closure_6 } from "initialize";
import importDefaultResult from "freshTeenActivityWithMap";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import DesktopNotificationTypes from "DesktopNotificationTypes";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import handleConnectionOpen from "handleConnectionOpen";
import handleRequiredAction from "handleRequiredAction";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { EMPTY_SCHEDULE_SNAPSHOT } from "isOnlyDayLoss";
import { Store } from "initialize";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
function handleAlertMessage() {
  let obj = guild(10263);
  if (obj.allowInAppNotifications()) {
    let tmpResult = tmp(10278);
    const result = tmpResult.shouldShowRaidInAppNotification();
    const guildId = result.guildId;
    if (result.show) {
      if (null != guildId) {
        guild = store3.getGuild(guildId);
        if (null == guild) {
          return false;
        } else {
          channel = store2.getChannel(channel(10282)(guild));
          if (null == channel) {
            return false;
          } else if (channelId.getChannelId() === channel.id) {
            return false;
          } else {
            obj = { guild: null, channel: null };
            obj[0] = guild;
            obj[1] = channel;
            if (obj.wasRecentlyDismissed(obj)) {
              return false;
            } else {
              const ALERT = constants3.ALERT;
              obj = { notification: null };
              const obj1 = { type: null, key: null, duration: null, onDismiss: null, channel: null, guild: null, inAppNotificationId: null };
              obj1[0] = ALERT;
              obj1[1] = guildId;
              tmpResult = tmp(10274);
              obj1[2] = tmpResult.getNotificationDuration(ALERT);
              obj1[3] = function onDismiss() {
                let obj = channel(outer1_2[27]);
                obj.clearNotification();
                obj = { guild, channel };
                outer1_20.dismissNotification(obj);
              };
              obj1[4] = channel;
              obj1[5] = guild;
              obj1[6] = tmp(10274).generateInAppNotificationId();
              obj[0] = obj1;
              handleEnqueueNotification(obj);
            }
          }
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function handleEnqueueNotification(notification) {
  let channelId;
  let guildId;
  let messageId;
  notification = notification.notification;
  let obj = require(10274) /* extractMetadataFromNotification */;
  const result = obj.extractMetadataFromNotification(notification);
  ({ guildId, channelId, messageId } = result);
  const trackWithMetadata = importDefault(4388).trackWithMetadata;
  if (closure_23) {
    obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "restricted_hours", in_app_notification_id: null };
    obj[0] = notification.type;
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = messageId;
    obj[5] = notification.inAppNotificationId;
    trackWithMetadata(tmp5.IN_APP_NOTIFICATION_DISMISSED, obj);
    return false;
  } else {
    obj = { type: null, guild_id: null, channel_id: null, in_app_notification_id: null, message_id: null };
    obj[0] = notification.type;
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = notification.inAppNotificationId;
    obj[4] = messageId;
    trackWithMetadata(tmp5.IN_APP_NOTIFICATION_CREATED, obj);
    obj1.enqueue(notification);
    const result1 = tmp(10283).playInAppMessageSound(notification);
    if (null == closure_21) {
      closure_21 = obj1.tryDrain();
    }
  }
  tmp = require;
  const tmp4 = importDefault(4388);
}
function trackDismissed(type) {
  let channelId;
  let guildId;
  let messageId;
  let obj = require(10274) /* extractMetadataFromNotification */;
  const result = obj.extractMetadataFromNotification(type);
  ({ guildId, channelId, messageId } = result);
  obj = { type: type.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "rejected_from_queue", in_app_notification_id: type.inAppNotificationId };
  importDefault(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
}
const error = importDefaultResult;
({ AnalyticEvents: closure_16, ChannelTypes: closure_17, InAppNotificationTypes: closure_18, MessageTypesSets: closure_19 } = ME);
class AlertDismissalHandler {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj = {};
    map = new Map();
    obj[require("GuildIncidentActionSources").GuildIncidentAlertTypes.JOIN_RAID] = map;
    map1 = new Map();
    obj[require("GuildIncidentActionSources").GuildIncidentAlertTypes.DM_RAID] = map1;
    obj[0] = obj;
    obj[1] = { amount: 1, unitOfTime: "hour" };
    return obj;
  }
}
const prototype = AlertDismissalHandler.prototype;
prototype["key"] = function key(guild) {
  return guild.guild.id + guild.channel.id;
};
prototype["dismissNotification"] = function dismissNotification(guild) {
  guild = guild.guild;
  let obj = require(7802) /* DATE_CONFIG */;
  const incidentAlertType = obj.getIncidentAlertType(store.getGuildIncident(guild.id));
  if (null != incidentAlertType) {
    const self = this;
    obj = { guild: null, channel: null };
    obj[0] = guild;
    obj[1] = guild.channel;
    const result = this.dissmissedAlertsMap[incidentAlertType].set(this.key(obj), importDefault(3775)());
    const keyResult = this.key(obj);
    const obj3 = this.dissmissedAlertsMap[incidentAlertType];
  }
};
prototype["wasRecentlyDismissed"] = function wasRecentlyDismissed(guild) {
  guild = guild.guild;
  let obj = require(7802) /* DATE_CONFIG */;
  const incidentAlertType = obj.getIncidentAlertType(store.getGuildIncident(guild.id));
  if (null == incidentAlertType) {
    return false;
  } else {
    const self = this;
    obj = { guild: null, channel: null };
    obj[0] = guild;
    obj[1] = guild.channel;
    const value = this.dissmissedAlertsMap[incidentAlertType].get(this.key(obj));
    let tmp4 = undefined !== value;
    if (tmp4) {
      tmp4 = importDefault(3775)().diff(importDefault(3775)(value), self.threshold.unitOfTime) < self.threshold.amount;
      const obj2 = importDefault(3775)();
    }
    return tmp4;
  }
};
let obj = Object.create(AlertDismissalHandler.prototype);
obj = {};
obj[require("GuildIncidentActionSources").GuildIncidentAlertTypes.JOIN_RAID] = new Map();
let map = new Map();
obj[require("GuildIncidentActionSources").GuildIncidentAlertTypes.DM_RAID] = new Map();
obj[0] = obj;
obj[1] = { amount: 1, unitOfTime: "hour" };
let c21 = null;
class NotificationQueue {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj.queue = [];
    return obj;
  }
}
const prototype2 = NotificationQueue.prototype;
prototype2["enqueue"] = function enqueue(arg0) {
  let channelId;
  let guildId;
  let messageId;
  const self = this;
  if (this.isFull()) {
    const queue = self.queue;
    let arr = queue.shift();
    if (null != arr) {
      let obj = require(10274) /* extractMetadataFromNotification */;
      const result = obj.extractMetadataFromNotification(arr);
      ({ guildId, channelId, messageId } = result);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "evicted_from_queue", in_app_notification_id: null };
      obj[0] = arr.type;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = messageId;
      obj[5] = arr.inAppNotificationId;
      importDefault(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj2 = importDefault(4388);
    }
  }
  const queue1 = self.queue;
  arr = queue1.push(arg0);
};
prototype2["tryDrain"] = function tryDrain() {
  const queue = this.queue;
  return queue.shift();
};
prototype2["isFull"] = function isFull() {
  return this.queue.length >= 2;
};
prototype2["removeAll"] = function removeAll(arg0) {
  const obj = importDefault(12);
  const removeResult = importDefault(12).remove(this.queue, arg0);
  while (tmp2 !== undefined) {
    let tmp4 = trackDismissed;
    let tmp5 = trackDismissed(tmp3, "rejected_from_queue");
    continue;
  }
};
let obj1 = Object.create(NotificationQueue.prototype);
obj1.queue = [];
let closure_23 = importDefaultResult.isCurrentUserInRestrictedHours();
let c24 = false;
class InAppNotificationStore extends Store {
}
const prototype3 = InAppNotificationStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(getParticipants, ensureGuildLoaded, participantFromServer, closure_7, computeAlertSettings, createGuildRecordFromRust, DesktopNotificationTypes, generateOldThreadCutoff, handleConnectionOpen, handleRequiredAction, handleConnectionClosedOrResumed, mergeGuildAvatar);
  const items = [computeAlertSettings];
  this.syncWith(items, handleAlertMessage);
};
prototype3["getCurrentNotification"] = function getCurrentNotification() {
  return c21;
};
InAppNotificationStore.displayName = "InAppNotificationStore";
const inAppNotificationStore = new InAppNotificationStore(require("dispatcher"), {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    let c24 = true;
    const currentUser = authStore.getCurrentUser();
    let restrictedSchedule;
    if (currentUser != null) {
      restrictedSchedule = currentUser.restrictedSchedule;
    }
    let tmp3 = null;
    if (null != restrictedSchedule) {
      tmp3 = null;
      if (0 !== restrictedSchedule.rules.length) {
        tmp3 = restrictedSchedule;
      }
    }
    let closure_25 = require(10260) /* isOnlyDayLoss */.toScheduleSnapshot(tmp3);
    handleAlertMessage();
  },
  LOGOUT: function handleLogout() {
    let c24 = false;
    const EMPTY_SCHEDULE_SNAPSHOT = require(10260) /* isOnlyDayLoss */.EMPTY_SCHEDULE_SNAPSHOT;
    let c21 = null;
    obj1.removeAll(() => true);
  },
  GUILD_UPDATE: handleAlertMessage,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const channel_id = message.channel_id;
    let obj = require(10262) /* canViewPotentiallyNSFWChannel */;
    if (obj.canViewPotentiallyNSFWChannel(channel_id)) {
      let tmpResult = tmp(7732);
      if (tmpResult.shouldShowSpoilerGateForChannelId(channel_id)) {
        return false;
      } else {
        if (importDefault(5927)(message)) {
          const SELF_MENTIONABLE_SYSTEM = constants4.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            return false;
          }
        }
        if (!message.optimistic) {
          tmpResult = tmp(10263);
          if (tmpResult.allowInAppNotifications()) {
            if (!tmp3Result.isEnabled()) {
              if (!uiStore.getChatOpen(channel_id)) {
                const result = tmp(10263).shouldIncludeSelectedChannel();
                const tmpResult1 = tmp(10263);
                if (tmpResult2.shouldNotify(message, channel_id, result)) {
                  const channel = store2.getChannel(channel_id);
                  if (null == channel) {
                    return false;
                  } else {
                    const messageRecord = tmp(4413).createMessageRecord(message);
                    const tmpResult3 = tmp(4413);
                    if (tmpResult4.isMessageContentPreviewable(messageRecord)) {
                      callback(message, channel.guild_id);
                      const MESSAGE = constants3.MESSAGE;
                      obj = { notification: null };
                      obj = { type: null, guild: null, channel: null, message: null, key: null, duration: null, onDismiss: null, parentChannel: null, inAppNotificationId: null, mentionCount: null };
                      obj[0] = MESSAGE;
                      const notificationDuration = tmp(10274).getNotificationDuration(MESSAGE);
                      obj[1] = store3.getGuild(channel.getGuildId());
                      obj[2] = channel;
                      obj[3] = messageRecord;
                      obj[4] = messageRecord.id;
                      obj[5] = notificationDuration;
                      obj[6] = function onDismiss() {
                        callback(table[27]).clearNotification();
                      };
                      obj[7] = obj7.getChannel(channel.parent_id);
                      const tmpResult5 = tmp(10274);
                      obj[8] = tmp(10274).generateInAppNotificationId();
                      obj[9] = mentionCount.getMentionCount(channel.id);
                      obj[0] = obj;
                      handleEnqueueNotification(obj);
                    } else {
                      return false;
                    }
                    tmpResult4 = tmp(10273);
                  }
                  obj7 = store2;
                } else {
                  return false;
                }
                tmpResult2 = tmp(10263);
              }
            }
            tmp3Result = importDefault(10272);
          }
        }
        return false;
      }
    } else {
      return false;
    }
  },
  MESSAGE_REQUEST_NOTIFICATION_SENT: function handleMessageRequest(triggeringUserId) {
    triggeringUserId = triggeringUserId.triggeringUserId;
    let obj = importDefault(10277);
    if (obj.getConfig({ location: "inAppNotificationStore" }).enabled) {
      const user = authStore.getUser(triggeringUserId);
      if (null == user) {
        return false;
      } else {
        const MESSAGE_REQUEST = constants3.MESSAGE_REQUEST;
        obj = { notification: null };
        obj = { type: null, author: null, numMutualGuilds: null, key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj[0] = MESSAGE_REQUEST;
        obj[1] = user;
        obj[2] = triggeringUserId.numMutualGuilds;
        const _HermesInternal = HermesInternal;
        obj[3] = "message-request-" + triggeringUserId;
        obj[4] = require(10274) /* extractMetadataFromNotification */.getNotificationDuration(MESSAGE_REQUEST);
        obj[5] = function onDismiss() {
          callback(table[27]).clearNotification();
        };
        const obj4 = require(10274) /* extractMetadataFromNotification */;
        obj[6] = require(10274) /* extractMetadataFromNotification */.generateInAppNotificationId();
        obj[0] = obj;
        handleEnqueueNotification(obj);
      }
    } else {
      return false;
    }
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
    let channelId2;
    let guildId;
    let messageId2;
    channelId = channelId.channelId;
    const messageId = channelId.messageId;
    let tmp = null != _null;
    if (tmp) {
      let tmp4 = _null.type === constants3.MESSAGE && tmp2.channel.id === channelId;
      if (tmp4) {
        let obj = messageId(11);
        tmp4 = obj.compare(tmp2.message.id, messageId) <= 0;
      }
      tmp = tmp4;
    }
    if (tmp) {
      const result = channelId(10274).extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId: messageId2 } = result);
      const obj2 = channelId(10274);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "message_acked", in_app_notification_id: null };
      obj[0] = _null.type;
      obj[1] = guildId;
      obj[2] = channelId2;
      obj[3] = messageId2;
      obj[5] = _null.inAppNotificationId;
      messageId(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj3 = messageId(4388);
    }
    obj1.removeAll(function predicate(type) {
      let tmp = type.type === outer1_18.MESSAGE;
      if (tmp) {
        tmp = type.channel.id === channelId;
      }
      if (tmp) {
        tmp = messageId(outer1_2[39]).compare(type.message.id, messageId) <= 0;
        const obj = messageId(outer1_2[39]);
      }
      return tmp;
    });
    if (null != _null) {
      let tmp17 = _null.type === constants3.MESSAGE && tmp15.channel.id === channelId;
      if (tmp17) {
        tmp17 = messageId(11).compare(tmp15.message.id, messageId) <= 0;
        const obj6 = messageId(11);
      }
      if (tmp17) {
        _null = null;
        _null = obj5.tryDrain();
        let flag = true;
      }
      return flag;
    }
    flag = false;
    if (null == _null) {
      _null = obj5.tryDrain();
      flag = true;
    }
  },
  REACTION_NOTIFICATION_SENT: function handleReactionNotification(arg0) {
    let channelId;
    let emoji;
    let guildId;
    let message;
    ({ message, emoji } = arg0);
    if (null != message) {
      if (null != message.reactions) {
        if (null != emoji) {
          if (obj14.allowInAppNotifications()) {
            let tmp19Result = tmp19(4385);
            let tryParseChannelPathResult = tmp19Result.tryParseChannelPath(tmp);
            if (tryParseChannelPathResult == null) {
              tryParseChannelPathResult = { channelId: null, guildId: null };
            }
            ({ channelId, guildId } = tryParseChannelPathResult);
            if (null != channelId) {
              if (null != guildId) {
                const ReactionNotifications = tmp19(3866).ReactionNotifications;
                const setting = ReactionNotifications.getSetting();
                if (setting === tmp19(1306).ReactionNotificationType.NOTIFICATIONS_DISABLED) {
                  return false;
                } else {
                  const channel = store2.getChannel(channelId);
                  let type;
                  if (channel != null) {
                    type = channel.type;
                  }
                  let result = null != type;
                  if (result) {
                    result = channel.type === constants2.GUILD_ANNOUNCEMENT;
                  }
                  tmp19Result = tmp19(10274);
                  if (channel != null) {
                    type = channel.type;
                  }
                  if (!result) {
                    result = tmp19Result.isReactionMilestoneNotification(message.reactions, type);
                  }
                  const guild = store3.getGuild(guildId);
                  const user = authStore.getUser(tmp2);
                  if (null != channel) {
                    if (!obj4.isEnabled()) {
                      if (!uiStore.getChatOpen(channelId)) {
                        const result1 = tmp19(10263).shouldIncludeSelectedChannel();
                        const tmp19Result1 = tmp19(10263);
                        let obj = { message: null, channel: null, reactor: null, includeSelectedChannel: null };
                        obj[0] = message;
                        obj[1] = channel;
                        obj[2] = user;
                        obj[3] = result1;
                        if (tmp19Result2.shouldNotifyForReaction(obj)) {
                          const messageRecord = tmp19(4413).createMessageRecord(message);
                          const tmp19Result3 = tmp19(4413);
                          if (tmp19Result4.isMessageContentPreviewable(messageRecord)) {
                            const reactions = message.reactions;
                            const found = reactions.find((emoji) => {
                              let tmp2 = emoji.emoji.id === emoji.id;
                              if (tmp2) {
                                tmp2 = null != tmp.id;
                              }
                              if (!tmp2) {
                                tmp2 = emoji.emoji.name === tmp.name;
                              }
                              return tmp2;
                            });
                            if (null == found) {
                              if (!result) {
                                return false;
                              }
                            }
                            const REACTION = constants3.REACTION;
                            obj = { notification: null };
                            const obj1 = { type: null, key: null, duration: null, onDismiss: null, channel: null, guild: null, user: null, message: null, parentChannel: null, reaction: null, inAppNotificationId: null };
                            obj1[0] = REACTION;
                            obj1[1] = channelId;
                            obj1[2] = tmp19(10274).getNotificationDuration(REACTION);
                            obj1[3] = function onDismiss() {
                              callback(table[27]).clearNotification();
                            };
                            obj1[4] = channel;
                            obj1[5] = guild;
                            obj1[6] = user;
                            obj1[7] = messageRecord;
                            obj1[8] = store2.getChannel(channel.parent_id);
                            obj1[9] = found;
                            const tmp19Result5 = tmp19(10274);
                            obj1[10] = tmp19(10274).generateInAppNotificationId();
                            obj[0] = obj1;
                            handleEnqueueNotification(obj);
                          } else {
                            return false;
                          }
                          tmp19Result4 = tmp19(10273);
                        } else {
                          return false;
                        }
                        tmp19Result2 = tmp19(10263);
                      }
                    }
                    return false;
                  }
                  return false;
                }
              }
            }
            return false;
          }
          obj14 = emoji(10263);
        }
      }
    }
    return false;
  },
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    savedMessage = savedMessage.savedMessage;
    let obj = require(9567) /* ForLaterFreemiumConfig */;
    if (obj.isForLaterExperimentOn("inAppNotificationStore")) {
      if (null != savedMessage.message) {
        const channel = store2.getChannel(savedMessage.saveData.channelId);
        if (null != channel) {
          const _HermesInternal = HermesInternal;
          const MESSAGE_REMINDER = constants3.MESSAGE_REMINDER;
          obj = { notification: null };
          obj = { type: null, key: null, duration: null, onDismiss: null, channel: null, author: null, savedMessage: null, inAppNotificationId: null };
          obj[0] = MESSAGE_REMINDER;
          obj[1] = "" + savedMessage.saveData.channelId + "-" + savedMessage.saveData.messageId;
          let tmpResult = tmp(10274);
          obj[2] = tmpResult.getNotificationDuration(MESSAGE_REMINDER);
          obj[3] = function onDismiss() {
            callback(table[27]).clearNotification();
          };
          obj[4] = channel;
          obj[5] = savedMessage.message.author;
          obj[6] = savedMessage;
          tmpResult = tmp(10274);
          obj[7] = tmpResult.generateInAppNotificationId();
          obj[0] = obj;
          handleEnqueueNotification(obj);
        }
      }
    }
  },
  RESTRICTED_HOURS_WARNING: function handleRestrictedHoursWarning(arg0) {
    let subtitle;
    let title;
    ({ title, subtitle } = arg0);
    let obj = require(5859) /* apexExperiment */;
    if (obj.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" })) {
      if (obj.screenDowntimeReminder) {
        const RESTRICTED_HOURS_WARNING = constants3.RESTRICTED_HOURS_WARNING;
        obj = { notification: null };
        obj = { type: null, key: "restricted-hours-warning", duration: null, onDismiss: null, title: null, subtitle: null, inAppNotificationId: null };
        obj[0] = RESTRICTED_HOURS_WARNING;
        let tmpResult = tmp(10274);
        obj[2] = tmpResult.getNotificationDuration(RESTRICTED_HOURS_WARNING);
        obj[3] = function onDismiss() {
          callback(table[27]).clearNotification();
        };
        obj[4] = title;
        obj[5] = subtitle;
        tmpResult = tmp(10274);
        obj[6] = tmpResult.generateInAppNotificationId();
        obj[0] = obj;
        handleEnqueueNotification(obj);
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  RESTRICTED_HOURS_STATE_CHANGE: function handleRestrictedHoursStateChange(isInRestrictedHours) {
    let channelId;
    let guildId;
    let messageId;
    isInRestrictedHours = isInRestrictedHours.isInRestrictedHours;
    if (isInRestrictedHours) {
      if (null != _null) {
        const result = require(10274) /* extractMetadataFromNotification */.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result);
        const obj2 = require(10274) /* extractMetadataFromNotification */;
        let obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "restricted_hours", in_app_notification_id: null };
        obj[0] = _null.type;
        obj[1] = guildId;
        obj[2] = channelId;
        obj[3] = messageId;
        obj[5] = _null.inAppNotificationId;
        importDefault(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
        const obj3 = importDefault(4388);
      }
      obj = obj1;
      obj1.removeAll(() => true);
      if (null != _null) {
        _null = null;
        _null = obj.tryDrain();
      } else if (null == _null) {
        _null = obj.tryDrain();
      }
    } else {
      return false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    channel = store2.getChannel(channel.parent_id);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        if (channel.isNewlyCreated) {
          if (obj2.allowInAppNotifications()) {
            let tmpResult = tmp(10263);
            tmpResult = tmp(10267);
            if (tmpResult.shouldNotifyForForumThreadCreation(channel, channel, !tmpResult.isChannelFocused())) {
              const user = authStore.getUser(channel.ownerId);
              if (null == user) {
                return false;
              } else {
                const guild = store3.getGuild(channel.guild_id);
                if (null == guild) {
                  return false;
                } else {
                  const FORUM_THREAD_CREATED = constants3.FORUM_THREAD_CREATED;
                  let obj = { notification: null };
                  obj = { type: null, thread: null, threadCreator: null, parentChannel: null, guild: null, key: null, duration: null, onDismiss: null, inAppNotificationId: null };
                  obj[0] = FORUM_THREAD_CREATED;
                  obj[1] = channel;
                  obj[2] = user;
                  obj[3] = channel;
                  obj[4] = guild;
                  obj[5] = channel.id;
                  obj[6] = tmp(10274).getNotificationDuration(FORUM_THREAD_CREATED);
                  obj[7] = function onDismiss() {
                    callback(table[27]).clearNotification();
                  };
                  const tmpResult1 = tmp(10274);
                  obj[8] = tmp(10274).generateInAppNotificationId();
                  obj[0] = obj;
                  handleEnqueueNotification(obj);
                }
              }
            }
          }
          return false;
        } else {
          return false;
        }
      }
    }
    return false;
  },
  CLEAR_IN_APP_NOTIFICATION: function handleClearInAppNotification() {
    let closure_21 = null;
    closure_21 = obj1.tryDrain();
  },
  ENQUEUE_IN_APP_NOTIFICATION: handleEnqueueNotification,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    let channelId2;
    let guildId;
    let messageId;
    channelId = channelId.channelId;
    let tmp = null != _null;
    if (tmp) {
      let tmp4 = _null.type === constants3.MESSAGE && tmp2.channel.id === channelId;
      if (!tmp4) {
        tmp4 = tmp2.type === tmp3.MESSAGE_FAILED_TO_SEND && tmp2.channelId === channelId;
        const tmp5 = tmp2.type === tmp3.MESSAGE_FAILED_TO_SEND && tmp2.channelId === channelId;
      }
      if (!tmp4) {
        tmp4 = tmp2.type === tmp3.ALERT && tmp2.channel.id === channelId;
        let tmp6 = tmp2.type === tmp3.ALERT && tmp2.channel.id === channelId;
      }
      tmp = tmp4;
    }
    if (tmp) {
      let obj = channelId(10274);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "notification_clicked", in_app_notification_id: null };
      obj[0] = _null.type;
      obj[1] = guildId;
      obj[2] = channelId2;
      obj[3] = messageId;
      obj[5] = _null.inAppNotificationId;
      importDefault(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj2 = importDefault(4388);
    }
    obj1.removeAll(function predicate(type) {
      let tmp2 = type.type === outer1_18.MESSAGE;
      if (tmp2) {
        tmp2 = type.channel.id === channelId;
      }
      if (!tmp2) {
        let tmp4 = type.type === tmp.MESSAGE_FAILED_TO_SEND;
        if (tmp4) {
          tmp4 = type.channelId === channelId;
        }
        tmp2 = tmp4;
      }
      if (!tmp2) {
        let tmp6 = type.type === tmp.ALERT;
        if (tmp6) {
          tmp6 = type.channel.id === channelId;
        }
        tmp2 = tmp6;
      }
      return tmp2;
    });
    if (null != _null) {
      let tmp17 = _null.type === constants3.MESSAGE && tmp15.channel.id === channelId;
      if (!tmp17) {
        tmp17 = tmp15.type === tmp16.MESSAGE_FAILED_TO_SEND && tmp15.channelId === channelId;
        const tmp18 = tmp15.type === tmp16.MESSAGE_FAILED_TO_SEND && tmp15.channelId === channelId;
      }
      if (!tmp17) {
        tmp17 = tmp15.type === tmp16.ALERT && tmp15.channel.id === channelId;
        const tmp19 = tmp15.type === tmp16.ALERT && tmp15.channel.id === channelId;
      }
      if (tmp17) {
        _null = null;
        _null = obj4.tryDrain();
        let flag = true;
      }
      return flag;
    }
    flag = false;
    if (null == _null) {
      _null = obj4.tryDrain();
      flag = true;
    }
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleVoiceChatOpen(channelId) {
    let channelId2;
    let guildId;
    let messageId;
    channelId = channelId.channelId;
    const chatOpen = channelId.chatOpen;
    let tmp = null != _null;
    if (tmp) {
      tmp = _null.type === constants3.MESSAGE && _null.channel.id === channelId && chatOpen;
      const tmp3 = _null.type === constants3.MESSAGE && _null.channel.id === channelId && chatOpen;
    }
    if (tmp) {
      let obj = channelId(10274);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "notification_clicked", in_app_notification_id: null };
      obj[0] = _null.type;
      obj[1] = guildId;
      obj[2] = channelId2;
      obj[3] = messageId;
      obj[5] = _null.inAppNotificationId;
      chatOpen(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj2 = chatOpen(4388);
    }
    obj1.removeAll(function predicate(type) {
      let tmp = type.type === outer1_18.MESSAGE;
      if (tmp) {
        tmp = type.channel.id === channelId;
      }
      if (tmp) {
        tmp = chatOpen;
      }
      return tmp;
    });
    if (null != _null) {
      if (tmp13) {
        _null = null;
        _null = obj4.tryDrain();
        let flag = true;
      }
      return flag;
    }
    flag = false;
    if (null == _null) {
      _null = obj4.tryDrain();
      flag = true;
    }
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsUpdate() {
    let channelId;
    let guildId;
    let messageId;
    let obj = require(10263) /* shouldNotifyBase */;
    const result = obj.allowInAppNotifications();
    let flag = !result;
    if (!result) {
      if (null != _null) {
        const result1 = require(10274) /* extractMetadataFromNotification */.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result1);
        const tmpResult = require(10274) /* extractMetadataFromNotification */;
        obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "settings_updated", in_app_notification_id: null };
        obj[0] = _null.type;
        obj[1] = guildId;
        obj[2] = channelId;
        obj[3] = messageId;
        obj[5] = _null.inAppNotificationId;
        importDefault(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
        _null = null;
        const obj3 = importDefault(4388);
      }
      obj1.removeAll(() => true);
      flag = true;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (c24) {
      let obj = require(5859) /* apexExperiment */;
      if (obj.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" })) {
        let tmpResult = tmp(10260);
        const currentUser = authStore.getCurrentUser();
        let restrictedSchedule;
        if (currentUser != null) {
          restrictedSchedule = currentUser.restrictedSchedule;
        }
        let tmp8 = null;
        if (null != restrictedSchedule) {
          tmp8 = null;
          if (0 !== restrictedSchedule.rules.length) {
            tmp8 = restrictedSchedule;
          }
        }
        const toScheduleSnapshotResult = tmpResult.toScheduleSnapshot(tmp8);
        const EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshotResult;
        tmpResult = tmp(10260);
        const diffSchedulesResult = tmpResult.diffSchedules(EMPTY_SCHEDULE_SNAPSHOT, toScheduleSnapshotResult);
        if (null != diffSchedulesResult) {
          const EnableScreenDowntimeScheduleNotifications = tmp(3866).EnableScreenDowntimeScheduleNotifications;
          if (EnableScreenDowntimeScheduleNotifications.getSetting()) {
            if (tmpResult1.allowInAppNotifications()) {
              const RESTRICTED_SCHEDULE_UPDATED = constants3.RESTRICTED_SCHEDULE_UPDATED;
              obj = { notification: null };
              obj = { type: null, key: null, duration: null, onDismiss: null, title: null, subtitle: null, inAppNotificationId: null };
              obj[0] = RESTRICTED_SCHEDULE_UPDATED;
              const notificationDuration = tmp(10274).getNotificationDuration(RESTRICTED_SCHEDULE_UPDATED);
              const tmpResult2 = tmp(10274);
              obj[1] = tmp(10260).restrictedScheduleNotificationKey(diffSchedulesResult.kind);
              obj[2] = notificationDuration;
              obj[3] = function onDismiss() {
                callback(table[27]).clearNotification();
              };
              const tmpResult3 = tmp(10260);
              obj[4] = tmp(10260).getRestrictedScheduleNotificationTitle(diffSchedulesResult.kind);
              const tmpResult4 = tmp(10260);
              obj[5] = tmp(10260).getRestrictedScheduleNotificationSubtitle(diffSchedulesResult.rule);
              const tmpResult5 = tmp(10260);
              obj[6] = tmp(10274).generateInAppNotificationId();
              obj[0] = obj;
              handleEnqueueNotification(obj);
              const tmpResult6 = tmp(10274);
            }
            tmpResult1 = tmp(10263);
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
});
const map1 = new Map();
let obj2 = {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    let c24 = true;
    const currentUser = authStore.getCurrentUser();
    let restrictedSchedule;
    if (currentUser != null) {
      restrictedSchedule = currentUser.restrictedSchedule;
    }
    let tmp3 = null;
    if (null != restrictedSchedule) {
      tmp3 = null;
      if (0 !== restrictedSchedule.rules.length) {
        tmp3 = restrictedSchedule;
      }
    }
    let closure_25 = require(10260) /* isOnlyDayLoss */.toScheduleSnapshot(tmp3);
    handleAlertMessage();
  },
  LOGOUT: function handleLogout() {
    let c24 = false;
    const EMPTY_SCHEDULE_SNAPSHOT = require(10260) /* isOnlyDayLoss */.EMPTY_SCHEDULE_SNAPSHOT;
    let c21 = null;
    obj1.removeAll(() => true);
  },
  GUILD_UPDATE: handleAlertMessage,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const channel_id = message.channel_id;
    let obj = require(10262) /* canViewPotentiallyNSFWChannel */;
    if (obj.canViewPotentiallyNSFWChannel(channel_id)) {
      let tmpResult = tmp(7732);
      if (tmpResult.shouldShowSpoilerGateForChannelId(channel_id)) {
        return false;
      } else {
        if (importDefault(5927)(message)) {
          const SELF_MENTIONABLE_SYSTEM = constants4.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            return false;
          }
        }
        if (!message.optimistic) {
          tmpResult = tmp(10263);
          if (tmpResult.allowInAppNotifications()) {
            if (!tmp3Result.isEnabled()) {
              if (!uiStore.getChatOpen(channel_id)) {
                const result = tmp(10263).shouldIncludeSelectedChannel();
                const tmpResult1 = tmp(10263);
                if (tmpResult2.shouldNotify(message, channel_id, result)) {
                  const channel = store2.getChannel(channel_id);
                  if (null == channel) {
                    return false;
                  } else {
                    const messageRecord = tmp(4413).createMessageRecord(message);
                    const tmpResult3 = tmp(4413);
                    if (tmpResult4.isMessageContentPreviewable(messageRecord)) {
                      callback(message, channel.guild_id);
                      const MESSAGE = constants3.MESSAGE;
                      obj = { notification: null };
                      obj = { type: null, guild: null, channel: null, message: null, key: null, duration: null, onDismiss: null, parentChannel: null, inAppNotificationId: null, mentionCount: null };
                      obj[0] = MESSAGE;
                      const notificationDuration = tmp(10274).getNotificationDuration(MESSAGE);
                      obj[1] = store3.getGuild(channel.getGuildId());
                      obj[2] = channel;
                      obj[3] = messageRecord;
                      obj[4] = messageRecord.id;
                      obj[5] = notificationDuration;
                      obj[6] = function onDismiss() {
                        callback(table[27]).clearNotification();
                      };
                      obj[7] = obj7.getChannel(channel.parent_id);
                      const tmpResult5 = tmp(10274);
                      obj[8] = tmp(10274).generateInAppNotificationId();
                      obj[9] = mentionCount.getMentionCount(channel.id);
                      obj[0] = obj;
                      handleEnqueueNotification(obj);
                    } else {
                      return false;
                    }
                    tmpResult4 = tmp(10273);
                  }
                  obj7 = store2;
                } else {
                  return false;
                }
                tmpResult2 = tmp(10263);
              }
            }
            tmp3Result = importDefault(10272);
          }
        }
        return false;
      }
    } else {
      return false;
    }
  },
  MESSAGE_REQUEST_NOTIFICATION_SENT: function handleMessageRequest(triggeringUserId) {
    triggeringUserId = triggeringUserId.triggeringUserId;
    let obj = importDefault(10277);
    if (obj.getConfig({ location: "inAppNotificationStore" }).enabled) {
      const user = authStore.getUser(triggeringUserId);
      if (null == user) {
        return false;
      } else {
        const MESSAGE_REQUEST = constants3.MESSAGE_REQUEST;
        obj = { notification: null };
        obj = { type: null, author: null, numMutualGuilds: null, key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj[0] = MESSAGE_REQUEST;
        obj[1] = user;
        obj[2] = triggeringUserId.numMutualGuilds;
        const _HermesInternal = HermesInternal;
        obj[3] = "message-request-" + triggeringUserId;
        obj[4] = require(10274) /* extractMetadataFromNotification */.getNotificationDuration(MESSAGE_REQUEST);
        obj[5] = function onDismiss() {
          callback(table[27]).clearNotification();
        };
        const obj4 = require(10274) /* extractMetadataFromNotification */;
        obj[6] = require(10274) /* extractMetadataFromNotification */.generateInAppNotificationId();
        obj[0] = obj;
        handleEnqueueNotification(obj);
      }
    } else {
      return false;
    }
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
    let channelId2;
    let guildId;
    let messageId2;
    channelId = channelId.channelId;
    const messageId = channelId.messageId;
    let tmp = null != _null;
    if (tmp) {
      let tmp4 = _null.type === constants3.MESSAGE && tmp2.channel.id === channelId;
      if (tmp4) {
        let obj = messageId(11);
        tmp4 = obj.compare(tmp2.message.id, messageId) <= 0;
      }
      tmp = tmp4;
    }
    if (tmp) {
      const result = channelId(10274).extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId: messageId2 } = result);
      const obj2 = channelId(10274);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "message_acked", in_app_notification_id: null };
      obj[0] = _null.type;
      obj[1] = guildId;
      obj[2] = channelId2;
      obj[3] = messageId2;
      obj[5] = _null.inAppNotificationId;
      messageId(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj3 = messageId(4388);
    }
    obj1.removeAll(function predicate(type) {
      let tmp = type.type === outer1_18.MESSAGE;
      if (tmp) {
        tmp = type.channel.id === channelId;
      }
      if (tmp) {
        tmp = messageId(outer1_2[39]).compare(type.message.id, messageId) <= 0;
        const obj = messageId(outer1_2[39]);
      }
      return tmp;
    });
    if (null != _null) {
      let tmp17 = _null.type === constants3.MESSAGE && tmp15.channel.id === channelId;
      if (tmp17) {
        tmp17 = messageId(11).compare(tmp15.message.id, messageId) <= 0;
        const obj6 = messageId(11);
      }
      if (tmp17) {
        _null = null;
        _null = obj5.tryDrain();
        let flag = true;
      }
      return flag;
    }
    flag = false;
    if (null == _null) {
      _null = obj5.tryDrain();
      flag = true;
    }
  },
  REACTION_NOTIFICATION_SENT: function handleReactionNotification(arg0) {
    let channelId;
    let emoji;
    let guildId;
    let message;
    ({ message, emoji } = arg0);
    if (null != message) {
      if (null != message.reactions) {
        if (null != emoji) {
          if (obj14.allowInAppNotifications()) {
            let tmp19Result = tmp19(4385);
            let tryParseChannelPathResult = tmp19Result.tryParseChannelPath(tmp);
            if (tryParseChannelPathResult == null) {
              tryParseChannelPathResult = { channelId: null, guildId: null };
            }
            ({ channelId, guildId } = tryParseChannelPathResult);
            if (null != channelId) {
              if (null != guildId) {
                const ReactionNotifications = tmp19(3866).ReactionNotifications;
                const setting = ReactionNotifications.getSetting();
                if (setting === tmp19(1306).ReactionNotificationType.NOTIFICATIONS_DISABLED) {
                  return false;
                } else {
                  const channel = store2.getChannel(channelId);
                  let type;
                  if (channel != null) {
                    type = channel.type;
                  }
                  let result = null != type;
                  if (result) {
                    result = channel.type === constants2.GUILD_ANNOUNCEMENT;
                  }
                  tmp19Result = tmp19(10274);
                  if (channel != null) {
                    type = channel.type;
                  }
                  if (!result) {
                    result = tmp19Result.isReactionMilestoneNotification(message.reactions, type);
                  }
                  const guild = store3.getGuild(guildId);
                  const user = authStore.getUser(tmp2);
                  if (null != channel) {
                    if (!obj4.isEnabled()) {
                      if (!uiStore.getChatOpen(channelId)) {
                        const result1 = tmp19(10263).shouldIncludeSelectedChannel();
                        const tmp19Result1 = tmp19(10263);
                        let obj = { message: null, channel: null, reactor: null, includeSelectedChannel: null };
                        obj[0] = message;
                        obj[1] = channel;
                        obj[2] = user;
                        obj[3] = result1;
                        if (tmp19Result2.shouldNotifyForReaction(obj)) {
                          const messageRecord = tmp19(4413).createMessageRecord(message);
                          const tmp19Result3 = tmp19(4413);
                          if (tmp19Result4.isMessageContentPreviewable(messageRecord)) {
                            const reactions = message.reactions;
                            const found = reactions.find((emoji) => {
                              let tmp2 = emoji.emoji.id === emoji.id;
                              if (tmp2) {
                                tmp2 = null != tmp.id;
                              }
                              if (!tmp2) {
                                tmp2 = emoji.emoji.name === tmp.name;
                              }
                              return tmp2;
                            });
                            if (null == found) {
                              if (!result) {
                                return false;
                              }
                            }
                            const REACTION = constants3.REACTION;
                            obj = { notification: null };
                            const obj1 = { type: null, key: null, duration: null, onDismiss: null, channel: null, guild: null, user: null, message: null, parentChannel: null, reaction: null, inAppNotificationId: null };
                            obj1[0] = REACTION;
                            obj1[1] = channelId;
                            obj1[2] = tmp19(10274).getNotificationDuration(REACTION);
                            obj1[3] = function onDismiss() {
                              callback(table[27]).clearNotification();
                            };
                            obj1[4] = channel;
                            obj1[5] = guild;
                            obj1[6] = user;
                            obj1[7] = messageRecord;
                            obj1[8] = store2.getChannel(channel.parent_id);
                            obj1[9] = found;
                            const tmp19Result5 = tmp19(10274);
                            obj1[10] = tmp19(10274).generateInAppNotificationId();
                            obj[0] = obj1;
                            handleEnqueueNotification(obj);
                          } else {
                            return false;
                          }
                          tmp19Result4 = tmp19(10273);
                        } else {
                          return false;
                        }
                        tmp19Result2 = tmp19(10263);
                      }
                    }
                    return false;
                  }
                  return false;
                }
              }
            }
            return false;
          }
          obj14 = emoji(10263);
        }
      }
    }
    return false;
  },
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    savedMessage = savedMessage.savedMessage;
    let obj = require(9567) /* ForLaterFreemiumConfig */;
    if (obj.isForLaterExperimentOn("inAppNotificationStore")) {
      if (null != savedMessage.message) {
        const channel = store2.getChannel(savedMessage.saveData.channelId);
        if (null != channel) {
          const _HermesInternal = HermesInternal;
          const MESSAGE_REMINDER = constants3.MESSAGE_REMINDER;
          obj = { notification: null };
          obj = { type: null, key: null, duration: null, onDismiss: null, channel: null, author: null, savedMessage: null, inAppNotificationId: null };
          obj[0] = MESSAGE_REMINDER;
          obj[1] = "" + savedMessage.saveData.channelId + "-" + savedMessage.saveData.messageId;
          let tmpResult = tmp(10274);
          obj[2] = tmpResult.getNotificationDuration(MESSAGE_REMINDER);
          obj[3] = function onDismiss() {
            callback(table[27]).clearNotification();
          };
          obj[4] = channel;
          obj[5] = savedMessage.message.author;
          obj[6] = savedMessage;
          tmpResult = tmp(10274);
          obj[7] = tmpResult.generateInAppNotificationId();
          obj[0] = obj;
          handleEnqueueNotification(obj);
        }
      }
    }
  },
  RESTRICTED_HOURS_WARNING: function handleRestrictedHoursWarning(arg0) {
    let subtitle;
    let title;
    ({ title, subtitle } = arg0);
    let obj = require(5859) /* apexExperiment */;
    if (obj.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" })) {
      if (obj.screenDowntimeReminder) {
        const RESTRICTED_HOURS_WARNING = constants3.RESTRICTED_HOURS_WARNING;
        obj = { notification: null };
        obj = { type: null, key: "restricted-hours-warning", duration: null, onDismiss: null, title: null, subtitle: null, inAppNotificationId: null };
        obj[0] = RESTRICTED_HOURS_WARNING;
        let tmpResult = tmp(10274);
        obj[2] = tmpResult.getNotificationDuration(RESTRICTED_HOURS_WARNING);
        obj[3] = function onDismiss() {
          callback(table[27]).clearNotification();
        };
        obj[4] = title;
        obj[5] = subtitle;
        tmpResult = tmp(10274);
        obj[6] = tmpResult.generateInAppNotificationId();
        obj[0] = obj;
        handleEnqueueNotification(obj);
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  RESTRICTED_HOURS_STATE_CHANGE: function handleRestrictedHoursStateChange(isInRestrictedHours) {
    let channelId;
    let guildId;
    let messageId;
    isInRestrictedHours = isInRestrictedHours.isInRestrictedHours;
    if (isInRestrictedHours) {
      if (null != _null) {
        const result = require(10274) /* extractMetadataFromNotification */.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result);
        const obj2 = require(10274) /* extractMetadataFromNotification */;
        let obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "restricted_hours", in_app_notification_id: null };
        obj[0] = _null.type;
        obj[1] = guildId;
        obj[2] = channelId;
        obj[3] = messageId;
        obj[5] = _null.inAppNotificationId;
        importDefault(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
        const obj3 = importDefault(4388);
      }
      obj = obj1;
      obj1.removeAll(() => true);
      if (null != _null) {
        _null = null;
        _null = obj.tryDrain();
      } else if (null == _null) {
        _null = obj.tryDrain();
      }
    } else {
      return false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    channel = store2.getChannel(channel.parent_id);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        if (channel.isNewlyCreated) {
          if (obj2.allowInAppNotifications()) {
            let tmpResult = tmp(10263);
            tmpResult = tmp(10267);
            if (tmpResult.shouldNotifyForForumThreadCreation(channel, channel, !tmpResult.isChannelFocused())) {
              const user = authStore.getUser(channel.ownerId);
              if (null == user) {
                return false;
              } else {
                const guild = store3.getGuild(channel.guild_id);
                if (null == guild) {
                  return false;
                } else {
                  const FORUM_THREAD_CREATED = constants3.FORUM_THREAD_CREATED;
                  let obj = { notification: null };
                  obj = { type: null, thread: null, threadCreator: null, parentChannel: null, guild: null, key: null, duration: null, onDismiss: null, inAppNotificationId: null };
                  obj[0] = FORUM_THREAD_CREATED;
                  obj[1] = channel;
                  obj[2] = user;
                  obj[3] = channel;
                  obj[4] = guild;
                  obj[5] = channel.id;
                  obj[6] = tmp(10274).getNotificationDuration(FORUM_THREAD_CREATED);
                  obj[7] = function onDismiss() {
                    callback(table[27]).clearNotification();
                  };
                  const tmpResult1 = tmp(10274);
                  obj[8] = tmp(10274).generateInAppNotificationId();
                  obj[0] = obj;
                  handleEnqueueNotification(obj);
                }
              }
            }
          }
          return false;
        } else {
          return false;
        }
      }
    }
    return false;
  },
  CLEAR_IN_APP_NOTIFICATION: function handleClearInAppNotification() {
    let closure_21 = null;
    closure_21 = obj1.tryDrain();
  },
  ENQUEUE_IN_APP_NOTIFICATION: handleEnqueueNotification,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    let channelId2;
    let guildId;
    let messageId;
    channelId = channelId.channelId;
    let tmp = null != _null;
    if (tmp) {
      let tmp4 = _null.type === constants3.MESSAGE && tmp2.channel.id === channelId;
      if (!tmp4) {
        tmp4 = tmp2.type === tmp3.MESSAGE_FAILED_TO_SEND && tmp2.channelId === channelId;
        const tmp5 = tmp2.type === tmp3.MESSAGE_FAILED_TO_SEND && tmp2.channelId === channelId;
      }
      if (!tmp4) {
        tmp4 = tmp2.type === tmp3.ALERT && tmp2.channel.id === channelId;
        let tmp6 = tmp2.type === tmp3.ALERT && tmp2.channel.id === channelId;
      }
      tmp = tmp4;
    }
    if (tmp) {
      let obj = channelId(10274);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "notification_clicked", in_app_notification_id: null };
      obj[0] = _null.type;
      obj[1] = guildId;
      obj[2] = channelId2;
      obj[3] = messageId;
      obj[5] = _null.inAppNotificationId;
      importDefault(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj2 = importDefault(4388);
    }
    obj1.removeAll(function predicate(type) {
      let tmp2 = type.type === outer1_18.MESSAGE;
      if (tmp2) {
        tmp2 = type.channel.id === channelId;
      }
      if (!tmp2) {
        let tmp4 = type.type === tmp.MESSAGE_FAILED_TO_SEND;
        if (tmp4) {
          tmp4 = type.channelId === channelId;
        }
        tmp2 = tmp4;
      }
      if (!tmp2) {
        let tmp6 = type.type === tmp.ALERT;
        if (tmp6) {
          tmp6 = type.channel.id === channelId;
        }
        tmp2 = tmp6;
      }
      return tmp2;
    });
    if (null != _null) {
      let tmp17 = _null.type === constants3.MESSAGE && tmp15.channel.id === channelId;
      if (!tmp17) {
        tmp17 = tmp15.type === tmp16.MESSAGE_FAILED_TO_SEND && tmp15.channelId === channelId;
        const tmp18 = tmp15.type === tmp16.MESSAGE_FAILED_TO_SEND && tmp15.channelId === channelId;
      }
      if (!tmp17) {
        tmp17 = tmp15.type === tmp16.ALERT && tmp15.channel.id === channelId;
        const tmp19 = tmp15.type === tmp16.ALERT && tmp15.channel.id === channelId;
      }
      if (tmp17) {
        _null = null;
        _null = obj4.tryDrain();
        let flag = true;
      }
      return flag;
    }
    flag = false;
    if (null == _null) {
      _null = obj4.tryDrain();
      flag = true;
    }
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleVoiceChatOpen(channelId) {
    let channelId2;
    let guildId;
    let messageId;
    channelId = channelId.channelId;
    const chatOpen = channelId.chatOpen;
    let tmp = null != _null;
    if (tmp) {
      tmp = _null.type === constants3.MESSAGE && _null.channel.id === channelId && chatOpen;
      const tmp3 = _null.type === constants3.MESSAGE && _null.channel.id === channelId && chatOpen;
    }
    if (tmp) {
      let obj = channelId(10274);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "notification_clicked", in_app_notification_id: null };
      obj[0] = _null.type;
      obj[1] = guildId;
      obj[2] = channelId2;
      obj[3] = messageId;
      obj[5] = _null.inAppNotificationId;
      chatOpen(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj2 = chatOpen(4388);
    }
    obj1.removeAll(function predicate(type) {
      let tmp = type.type === outer1_18.MESSAGE;
      if (tmp) {
        tmp = type.channel.id === channelId;
      }
      if (tmp) {
        tmp = chatOpen;
      }
      return tmp;
    });
    if (null != _null) {
      if (tmp13) {
        _null = null;
        _null = obj4.tryDrain();
        let flag = true;
      }
      return flag;
    }
    flag = false;
    if (null == _null) {
      _null = obj4.tryDrain();
      flag = true;
    }
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsUpdate() {
    let channelId;
    let guildId;
    let messageId;
    let obj = require(10263) /* shouldNotifyBase */;
    const result = obj.allowInAppNotifications();
    let flag = !result;
    if (!result) {
      if (null != _null) {
        const result1 = require(10274) /* extractMetadataFromNotification */.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result1);
        const tmpResult = require(10274) /* extractMetadataFromNotification */;
        obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "settings_updated", in_app_notification_id: null };
        obj[0] = _null.type;
        obj[1] = guildId;
        obj[2] = channelId;
        obj[3] = messageId;
        obj[5] = _null.inAppNotificationId;
        importDefault(4388).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
        _null = null;
        const obj3 = importDefault(4388);
      }
      obj1.removeAll(() => true);
      flag = true;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (c24) {
      let obj = require(5859) /* apexExperiment */;
      if (obj.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" })) {
        let tmpResult = tmp(10260);
        const currentUser = authStore.getCurrentUser();
        let restrictedSchedule;
        if (currentUser != null) {
          restrictedSchedule = currentUser.restrictedSchedule;
        }
        let tmp8 = null;
        if (null != restrictedSchedule) {
          tmp8 = null;
          if (0 !== restrictedSchedule.rules.length) {
            tmp8 = restrictedSchedule;
          }
        }
        const toScheduleSnapshotResult = tmpResult.toScheduleSnapshot(tmp8);
        const EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshotResult;
        tmpResult = tmp(10260);
        const diffSchedulesResult = tmpResult.diffSchedules(EMPTY_SCHEDULE_SNAPSHOT, toScheduleSnapshotResult);
        if (null != diffSchedulesResult) {
          const EnableScreenDowntimeScheduleNotifications = tmp(3866).EnableScreenDowntimeScheduleNotifications;
          if (EnableScreenDowntimeScheduleNotifications.getSetting()) {
            if (tmpResult1.allowInAppNotifications()) {
              const RESTRICTED_SCHEDULE_UPDATED = constants3.RESTRICTED_SCHEDULE_UPDATED;
              obj = { notification: null };
              obj = { type: null, key: null, duration: null, onDismiss: null, title: null, subtitle: null, inAppNotificationId: null };
              obj[0] = RESTRICTED_SCHEDULE_UPDATED;
              const notificationDuration = tmp(10274).getNotificationDuration(RESTRICTED_SCHEDULE_UPDATED);
              const tmpResult2 = tmp(10274);
              obj[1] = tmp(10260).restrictedScheduleNotificationKey(diffSchedulesResult.kind);
              obj[2] = notificationDuration;
              obj[3] = function onDismiss() {
                callback(table[27]).clearNotification();
              };
              const tmpResult3 = tmp(10260);
              obj[4] = tmp(10260).getRestrictedScheduleNotificationTitle(diffSchedulesResult.kind);
              const tmpResult4 = tmp(10260);
              obj[5] = tmp(10260).getRestrictedScheduleNotificationSubtitle(diffSchedulesResult.rule);
              const tmpResult5 = tmp(10260);
              obj[6] = tmp(10274).generateInAppNotificationId();
              obj[0] = obj;
              handleEnqueueNotification(obj);
              const tmpResult6 = tmp(10274);
            }
            tmpResult1 = tmp(10263);
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};
let result = require("computeAlertSettings").fileFinishedImporting("stores/native/InAppNotificationStore.tsx");

export default inAppNotificationStore;