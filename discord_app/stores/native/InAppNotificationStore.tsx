// === Module 10079: InAppNotificationStore ===

// Module 10079 (InAppNotificationStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _modDef4153 from "module_4153" /* 4153 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import isSystemMessageDefault from "isSystemMessage" /* 7270 */;
import FamilyCenterV3Experiment from "FamilyCenterV3Experiment" /* 7594 */;
import ForLaterExperiment from "ForLaterExperiment" /* 7855 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8015 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8017 */;
import ExternalPipDefault from "ExternalPip" /* 9610 */;
import RestrictedScheduleNotificationUtils from "RestrictedScheduleNotificationUtils" /* 10082 */;
import MessageUtils from "MessageUtils" /* 10084 */;
import NotificationTextUtils from "NotificationTextUtils" /* 10085 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10094 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10096 */;
import MessageRequestPushNotificationExperimentDefault from "MessageRequestPushNotificationExperiment" /* 10097 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10080 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10081 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1951 */;
import UserStore from "UserStore" /* 1371 */;

const playInAppMessageSound = tmp(10103);
require = fn;
function handleAlertMessage() {
  let obj = guild(10085);
  if (obj.allowInAppNotifications()) {
    let tmpResult = tmp(10098);
    const result = tmpResult.shouldShowRaidInAppNotification();
    const guildId = result.guildId;
    if (result.show) {
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
        if (null == guild) {
          return false;
        } else {
          channel = ChannelStore.getChannel(channel(10102)(guild));
          if (null == channel) {
            return false;
          } else if (SelectedChannelStore.getChannelId() === channel.id) {
            return false;
          } else {
            obj = { guild, channel };
            if (merged.wasRecentlyDismissed(obj)) {
              return false;
            } else {
              const ALERT = constants3.ALERT;
              obj = { notification: null };
              const obj1 = { type: ALERT, key: guildId, duration: null, onDismiss: null, channel: null, guild: null, inAppNotificationId: null };
              tmpResult = tmp(10094);
              obj1.duration = tmpResult.getNotificationDuration(ALERT);
              obj1.onDismiss = function onDismiss() {
                let obj = InAppNotificationActionCreatorsDefault;
                obj.clearNotification();
                obj = { guild, channel };
                merged.dismissNotification(obj);
              };
              obj1.channel = channel;
              obj1.guild = guild;
              obj1.inAppNotificationId = tmp(10094).generateInAppNotificationId();
              obj.notification = obj1;
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
  notification = notification.notification;
  let obj = InAppNotificationUtils;
  const result = obj.extractMetadataFromNotification(notification);
  ({ guildId, channelId, messageId } = result);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  if (isInRestrictedHours) {
    obj = { type: notification.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "restricted_hours", in_app_notification_id: notification.inAppNotificationId };
    trackWithMetadata(tmp5.IN_APP_NOTIFICATION_DISMISSED, obj);
    return false;
  } else {
    obj = { type: notification.type, guild_id: guildId, channel_id: channelId, in_app_notification_id: notification.inAppNotificationId, message_id: messageId };
    trackWithMetadata(tmp5.IN_APP_NOTIFICATION_CREATED, obj);
    obj.enqueue(notification);
    const result1 = playInAppMessageSound.playInAppMessageSound(notification);
    if (null == c21) {
      c21 = obj.tryDrain();
    }
  }
}
function trackDismissed(type, arg1) {
  let obj = InAppNotificationUtils;
  const result = obj.extractMetadataFromNotification(type);
  ({ guildId, channelId, messageId } = result);
  obj = { type: type.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "rejected_from_queue", in_app_notification_id: type.inAppNotificationId };
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
}
let closure_6 = fn(7115).trackMessageNotificationTimestamps;
const Constants = fn(1074);
({ AnalyticEvents: closure_16, ChannelTypes: closure_17, InAppNotificationTypes: closure_18, MessageTypesSets: closure_19 } = Constants);
class AlertDismissalHandler {
  constructor() {
    merged = Object.assign({ dissmissedAlertsMap: null, threshold: null });
    obj = {};
    map = new Map();
    obj[closure_0(closure_2[14]).GuildIncidentAlertTypes.JOIN_RAID] = map;
    map1 = new Map();
    obj[closure_0(closure_2[14]).GuildIncidentAlertTypes.DM_RAID] = map1;
    merged[0] = obj;
    merged[1] = { amount: 1, unitOfTime: "hour" };
    return merged;
  }
}
const prototype = AlertDismissalHandler.prototype;
prototype["key"] = function key(guild) {
  return guild.guild.id + guild.channel.id;
};
prototype["dismissNotification"] = function dismissNotification(guild) {
  guild = guild.guild;
  let obj = GuildAntiRaidUtils;
  const incidentAlertType = obj.getIncidentAlertType(GuildIncidentsStore.getGuildIncident(guild.id));
  if (null != incidentAlertType) {
    const self = this;
    obj = { guild, channel: guild.channel };
    const result = this.dissmissedAlertsMap[incidentAlertType].set(this.key(obj), _modDef4153());
    const keyResult = this.key(obj);
  }
};
prototype["wasRecentlyDismissed"] = function wasRecentlyDismissed(guild) {
  guild = guild.guild;
  let obj = GuildAntiRaidUtils;
  const incidentAlertType = obj.getIncidentAlertType(GuildIncidentsStore.getGuildIncident(guild.id));
  if (null == incidentAlertType) {
    return false;
  } else {
    const self = this;
    obj = { guild, channel: guild.channel };
    value = this.dissmissedAlertsMap[incidentAlertType].get(this.key(obj));
    let tmp4 = undefined !== value;
    if (tmp4) {
      tmp4 = _modDef4153().diff(_modDef4153(value), self.threshold.unitOfTime) < self.threshold.amount;
      const obj2 = _modDef4153();
    }
    return tmp4;
  }
};
let merged = Object.assign({ dissmissedAlertsMap: null, threshold: null });
let notification = {};
notification[fn(8017).GuildIncidentAlertTypes.JOIN_RAID] = new Map();
let map = new Map();
notification[fn(8017).GuildIncidentAlertTypes.DM_RAID] = new Map();
merged[0] = notification;
merged[1] = { amount: 1, unitOfTime: "hour" };
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
  const self = this;
  if (this.isFull()) {
    const queue = self.queue;
    let arr = queue.shift();
    if (null != arr) {
      let obj = InAppNotificationUtils;
      const result = obj.extractMetadataFromNotification(arr);
      ({ guildId, channelId, messageId } = result);
      obj = { type: arr.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "evicted_from_queue", in_app_notification_id: arr.inAppNotificationId };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
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
  const removeResult = _modDef12.remove(this.queue, arg0);
  while (tmp2 !== undefined) {
    let tmp5 = trackDismissed(tmp3, "rejected_from_queue");
    continue;
  }
};
notification = Object.create(NotificationQueue.prototype);
notification.queue = [];
let isInRestrictedHours = FamilyCenterStore.isCurrentUserInRestrictedHours();
let c24 = false;
let EMPTY_SCHEDULE_SNAPSHOT = fn(10082).EMPTY_SCHEDULE_SNAPSHOT;
const Store = initializeDefault.Store;
class InAppNotificationStore extends Store {
}
const prototype3 = InAppNotificationStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(ChannelRTCStore, ChannelStore, EmbeddedActivitiesStore, FamilyCenterStore, GuildIncidentsStore, GuildStore, NotificationSettingsStore, ReadStateStore, SelectedChannelStore, UserRequiredActionStore, UserSettingsProtoStore, UserStore);
  const items = [GuildIncidentsStore];
  this.syncWith(items, handleAlertMessage);
};
prototype3["getCurrentNotification"] = function getCurrentNotification() {
  return c21;
};
InAppNotificationStore.displayName = "InAppNotificationStore";
const inAppNotificationStore = new InAppNotificationStore(DispatcherDefault, {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    c24 = true;
    const currentUser = UserStore.getCurrentUser();
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
    EMPTY_SCHEDULE_SNAPSHOT = RestrictedScheduleNotificationUtils.toScheduleSnapshot(tmp3);
    handleAlertMessage();
  },
  LOGOUT: function handleLogout() {
    c24 = false;
    EMPTY_SCHEDULE_SNAPSHOT = RestrictedScheduleNotificationUtils.EMPTY_SCHEDULE_SNAPSHOT;
    c21 = null;
    obj.removeAll(() => true);
  },
  GUILD_UPDATE: handleAlertMessage,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const channel_id = message.channel_id;
    notification = MessageUtils;
    if (notification.canViewPotentiallyNSFWChannel(channel_id)) {
      let tmpResult = tmp(7329);
      if (tmpResult.shouldShowSpoilerGateForChannelId(channel_id)) {
        return false;
      } else {
        if (isSystemMessageDefault(message)) {
          const SELF_MENTIONABLE_SYSTEM = constants4.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            return false;
          }
        }
        if (!message.optimistic) {
          tmpResult = tmp(10085);
          if (tmpResult.allowInAppNotifications()) {
            if (!tmp3Result.isEnabled()) {
              if (!ChannelRTCStore.getChatOpen(channel_id)) {
                const result = tmp(10085).shouldIncludeSelectedChannel();
                const tmpResult1 = tmp(10085);
                if (tmpResult2.shouldNotify(message, channel_id, result)) {
                  const channel = ChannelStore.getChannel(channel_id);
                  if (null == channel) {
                    return false;
                  } else {
                    const messageRecord = tmp(4783).createMessageRecord(message);
                    const tmpResult3 = tmp(4783);
                    if (tmpResult4.isMessageContentPreviewable(messageRecord)) {
                      closure_6(message, channel.guild_id);
                      const MESSAGE = constants3.MESSAGE;
                      notification = { notification: null };
                      notification = { type: MESSAGE, guild: null, channel: null, message: null, key: null, duration: null, onDismiss: null, parentChannel: null, inAppNotificationId: null, mentionCount: null };
                      const notificationDuration = tmp(10094).getNotificationDuration(MESSAGE);
                      notification.guild = GuildStore.getGuild(channel.getGuildId());
                      notification.channel = channel;
                      notification.message = messageRecord;
                      notification.key = messageRecord.id;
                      notification.duration = notificationDuration;
                      notification.onDismiss = function onDismiss() {
                        InAppNotificationActionCreatorsDefault.clearNotification();
                      };
                      notification.parentChannel = obj7.getChannel(channel.parent_id);
                      const tmpResult5 = tmp(10094);
                      notification.inAppNotificationId = tmp(10094).generateInAppNotificationId();
                      notification.mentionCount = ReadStateStore.getMentionCount(channel.id);
                      notification.notification = notification;
                      handleEnqueueNotification(notification);
                    } else {
                      return false;
                    }
                    tmpResult4 = tmp(10093);
                  }
                  obj7 = ChannelStore;
                } else {
                  return false;
                }
                tmpResult2 = tmp(10085);
              }
            }
            tmp3Result = ExternalPipDefault;
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
    notification = MessageRequestPushNotificationExperimentDefault;
    if (notification.getConfig({ location: "inAppNotificationStore" }).enabled) {
      const user = UserStore.getUser(triggeringUserId);
      if (null == user) {
        return false;
      } else {
        const MESSAGE_REQUEST = constants3.MESSAGE_REQUEST;
        notification = { notification: null };
        notification = { type: MESSAGE_REQUEST, author: user, numMutualGuilds: triggeringUserId.numMutualGuilds, key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        const _HermesInternal = HermesInternal;
        notification.key = "message-request-" + triggeringUserId;
        notification.duration = InAppNotificationUtils.getNotificationDuration(MESSAGE_REQUEST);
        notification.onDismiss = function onDismiss() {
          InAppNotificationActionCreatorsDefault.clearNotification();
        };
        notification.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        notification.notification = notification;
        handleEnqueueNotification(notification);
      }
    } else {
      return false;
    }
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
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
      const result = channelId(10094).extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId: messageId2 } = result);
      const obj2 = channelId(10094);
      obj = { type: _null.type, guild_id: guildId, channel_id: channelId2, message_id: messageId2, dismiss_reason: "message_acked", in_app_notification_id: _null.inAppNotificationId };
      messageId(4740).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj3 = messageId(4740);
    }
    obj.removeAll(function predicate(type) {
      let tmp = type.type === constants3.MESSAGE;
      if (tmp) {
        tmp = type.channel.id === channelId;
      }
      if (tmp) {
        tmp = SnowflakeUtilsDefault.compare(type.message.id, messageId) <= 0;
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
    ({ message, emoji } = arg0);
    if (null != message) {
      if (null != message.reactions) {
        if (null != emoji) {
          if (obj14.allowInAppNotifications()) {
            let tmp19Result = tmp19(4714);
            let tryParseChannelPathResult = tmp19Result.tryParseChannelPath(tmp);
            if (tryParseChannelPathResult == null) {
              tryParseChannelPathResult = { channelId: null, guildId: null };
            }
            ({ channelId, guildId } = tryParseChannelPathResult);
            if (null != channelId) {
              if (null != guildId) {
                const ReactionNotifications = tmp19(1935).ReactionNotifications;
                const setting = ReactionNotifications.getSetting();
                if (setting === tmp19(1187).ReactionNotificationType.NOTIFICATIONS_DISABLED) {
                  return false;
                } else {
                  const channel = ChannelStore.getChannel(channelId);
                  let type;
                  if (channel != null) {
                    type = channel.type;
                  }
                  let result = null != type;
                  if (result) {
                    result = channel.type === constants2.GUILD_ANNOUNCEMENT;
                  }
                  tmp19Result = tmp19(10094);
                  if (channel != null) {
                    type = channel.type;
                  }
                  if (!result) {
                    result = tmp19Result.isReactionMilestoneNotification(message.reactions, type);
                  }
                  const guild = GuildStore.getGuild(guildId);
                  const user = UserStore.getUser(tmp2);
                  if (null != channel) {
                    if (!obj4.isEnabled()) {
                      if (!ChannelRTCStore.getChatOpen(channelId)) {
                        const result1 = tmp19(10085).shouldIncludeSelectedChannel();
                        const tmp19Result1 = tmp19(10085);
                        let obj = { message, channel, reactor: user, includeSelectedChannel: result1 };
                        if (tmp19Result2.shouldNotifyForReaction(obj)) {
                          const messageRecord = tmp19(4783).createMessageRecord(message);
                          const tmp19Result3 = tmp19(4783);
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
                            const obj1 = {
                              type: REACTION,
                              key: channelId,
                              duration: tmp19(10094).getNotificationDuration(REACTION),
                              onDismiss() {
                                                        InAppNotificationActionCreatorsDefault.clearNotification();
                                                      },
                              channel,
                              guild,
                              user,
                              message: messageRecord,
                              parentChannel: ChannelStore.getChannel(channel.parent_id),
                              reaction: found,
                              inAppNotificationId: null
                            };
                            const tmp19Result5 = tmp19(10094);
                            obj1.inAppNotificationId = tmp19(10094).generateInAppNotificationId();
                            obj.notification = obj1;
                            handleEnqueueNotification(obj);
                          } else {
                            return false;
                          }
                          tmp19Result4 = tmp19(10093);
                        } else {
                          return false;
                        }
                        tmp19Result2 = tmp19(10085);
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
          obj14 = emoji(10085);
        }
      }
    }
    return false;
  },
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    savedMessage = savedMessage.savedMessage;
    notification = ForLaterExperiment;
    if (notification.isForLaterExperimentOn("inAppNotificationStore")) {
      if (null != savedMessage.message) {
        const channel = ChannelStore.getChannel(savedMessage.saveData.channelId);
        if (null != channel) {
          const _HermesInternal = HermesInternal;
          const MESSAGE_REMINDER = constants3.MESSAGE_REMINDER;
          notification = { notification: null };
          notification = { type: MESSAGE_REMINDER, key: "" + savedMessage.saveData.channelId + "-" + savedMessage.saveData.messageId, duration: null, onDismiss: null, channel: null, author: null, savedMessage: null, inAppNotificationId: null };
          let tmpResult = tmp(10094);
          notification.duration = tmpResult.getNotificationDuration(MESSAGE_REMINDER);
          notification.onDismiss = function onDismiss() {
            InAppNotificationActionCreatorsDefault.clearNotification();
          };
          notification.channel = channel;
          notification.author = savedMessage.message.author;
          notification.savedMessage = savedMessage;
          tmpResult = tmp(10094);
          notification.inAppNotificationId = tmpResult.generateInAppNotificationId();
          notification.notification = notification;
          handleEnqueueNotification(notification);
        }
      }
    }
  },
  RESTRICTED_HOURS_WARNING: function handleRestrictedHoursWarning(arg0) {
    ({ title, subtitle } = arg0);
    notification = FamilyCenterV3Experiment;
    if (notification.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" })) {
      if (NotificationSettingsStore.screenDowntimeReminder) {
        const RESTRICTED_HOURS_WARNING = constants3.RESTRICTED_HOURS_WARNING;
        notification = { notification: null };
        notification = { type: RESTRICTED_HOURS_WARNING, key: "restricted-hours-warning", duration: null, onDismiss: null, title: null, subtitle: null, inAppNotificationId: null };
        let tmpResult = tmp(10094);
        notification.duration = tmpResult.getNotificationDuration(RESTRICTED_HOURS_WARNING);
        notification.onDismiss = function onDismiss() {
          InAppNotificationActionCreatorsDefault.clearNotification();
        };
        notification.title = title;
        notification.subtitle = subtitle;
        tmpResult = tmp(10094);
        notification.inAppNotificationId = tmpResult.generateInAppNotificationId();
        notification.notification = notification;
        handleEnqueueNotification(notification);
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  RESTRICTED_HOURS_STATE_CHANGE: function handleRestrictedHoursStateChange(isInRestrictedHours) {
    isInRestrictedHours = isInRestrictedHours.isInRestrictedHours;
    if (isInRestrictedHours) {
      if (null != _null) {
        const result = InAppNotificationUtils.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result);
        const obj = { type: _null.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "restricted_hours", in_app_notification_id: _null.inAppNotificationId };
        AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      }
      obj.removeAll(() => true);
      if (null != _null) {
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
    channel = ChannelStore.getChannel(channel.parent_id);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        if (channel.isNewlyCreated) {
          if (obj2.allowInAppNotifications()) {
            tmp(10085);
            const tmpResult = tmp(10089);
            if (tmpResult.shouldNotifyForForumThreadCreation(channel, channel, !tmpResult.isChannelFocused())) {
              const user = UserStore.getUser(channel.ownerId);
              if (null == user) {
                return false;
              } else {
                const guild = GuildStore.getGuild(channel.guild_id);
                if (null == guild) {
                  return false;
                } else {
                  const FORUM_THREAD_CREATED = constants3.FORUM_THREAD_CREATED;
                  notification = { notification: null };
                  notification = {
                    type: FORUM_THREAD_CREATED,
                    thread: channel,
                    threadCreator: user,
                    parentChannel: channel,
                    guild,
                    key: channel.id,
                    duration: tmp(10094).getNotificationDuration(FORUM_THREAD_CREATED),
                    onDismiss() {
                                    InAppNotificationActionCreatorsDefault.clearNotification();
                                  },
                    inAppNotificationId: null
                  };
                  const tmpResult1 = tmp(10094);
                  notification.inAppNotificationId = tmp(10094).generateInAppNotificationId();
                  notification.notification = notification;
                  handleEnqueueNotification(notification);
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
    c21 = obj.tryDrain();
  },
  ENQUEUE_IN_APP_NOTIFICATION: handleEnqueueNotification,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
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
      let obj = channelId(10094);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj = { type: _null.type, guild_id: guildId, channel_id: channelId2, message_id: messageId, dismiss_reason: "notification_clicked", in_app_notification_id: _null.inAppNotificationId };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
    }
    obj.removeAll(function predicate(type) {
      let tmp2 = type.type === constants3.MESSAGE;
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
    channelId = channelId.channelId;
    const chatOpen = channelId.chatOpen;
    let tmp = null != _null;
    if (tmp) {
      tmp = _null.type === constants3.MESSAGE && _null.channel.id === channelId && chatOpen;
      const tmp3 = _null.type === constants3.MESSAGE && _null.channel.id === channelId && chatOpen;
    }
    if (tmp) {
      let obj = channelId(10094);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj = { type: _null.type, guild_id: guildId, channel_id: channelId2, message_id: messageId, dismiss_reason: "notification_clicked", in_app_notification_id: _null.inAppNotificationId };
      chatOpen(4740).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj2 = chatOpen(4740);
    }
    obj.removeAll(function predicate(type) {
      let tmp = type.type === constants3.MESSAGE;
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
    let obj = NotificationTextUtils;
    const result = obj.allowInAppNotifications();
    let flag = !result;
    if (!result) {
      if (null != _null) {
        const result1 = InAppNotificationUtils.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result1);
        const tmpResult = InAppNotificationUtils;
        obj = { type: _null.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "settings_updated", in_app_notification_id: _null.inAppNotificationId };
        AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
        _null = null;
      }
      obj.removeAll(() => true);
      flag = true;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (c24) {
      notification = FamilyCenterV3Experiment;
      if (notification.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" })) {
        let tmpResult = tmp(10082);
        const currentUser = UserStore.getCurrentUser();
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
        EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshotResult;
        tmpResult = tmp(10082);
        const diffSchedulesResult = tmpResult.diffSchedules(EMPTY_SCHEDULE_SNAPSHOT, toScheduleSnapshotResult);
        if (null != diffSchedulesResult) {
          const EnableScreenDowntimeScheduleNotifications = tmp(1935).EnableScreenDowntimeScheduleNotifications;
          if (EnableScreenDowntimeScheduleNotifications.getSetting()) {
            if (tmpResult1.allowInAppNotifications()) {
              const RESTRICTED_SCHEDULE_UPDATED = constants3.RESTRICTED_SCHEDULE_UPDATED;
              notification = { notification: null };
              notification = { type: RESTRICTED_SCHEDULE_UPDATED, key: null, duration: null, onDismiss: null, title: null, subtitle: null, inAppNotificationId: null };
              const notificationDuration = tmp(10094).getNotificationDuration(RESTRICTED_SCHEDULE_UPDATED);
              const tmpResult2 = tmp(10094);
              notification.key = tmp(10082).restrictedScheduleNotificationKey(diffSchedulesResult.kind);
              notification.duration = notificationDuration;
              notification.onDismiss = function onDismiss() {
                InAppNotificationActionCreatorsDefault.clearNotification();
              };
              const tmpResult3 = tmp(10082);
              notification.title = tmp(10082).getRestrictedScheduleNotificationTitle(diffSchedulesResult.kind);
              const tmpResult4 = tmp(10082);
              notification.subtitle = tmp(10082).getRestrictedScheduleNotificationSubtitle(diffSchedulesResult.rule);
              const tmpResult5 = tmp(10082);
              notification.inAppNotificationId = tmp(10094).generateInAppNotificationId();
              notification.notification = notification;
              handleEnqueueNotification(notification);
              const tmpResult6 = tmp(10094);
            }
            tmpResult1 = tmp(10085);
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
const size = fn(2);
let result = size.fileFinishedImporting("stores/native/InAppNotificationStore.tsx");

export default inAppNotificationStore;