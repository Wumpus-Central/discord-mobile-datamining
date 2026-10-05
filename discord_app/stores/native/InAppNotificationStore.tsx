// === Module 12465: InAppNotificationStore ===

// Module 12465 (InAppNotificationStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserSettings from "UserSettings" /* 2028 */;
import _modDef4461 from "module_4461" /* 4461 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import LastMentionTimestampStore from "LastMentionTimestampStore" /* 6610 */;
import isSystemMessageDefault from "isSystemMessage" /* 6773 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6832 */;
import ForLaterExperiment from "ForLaterExperiment" /* 7485 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 7685 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 7687 */;
import ExternalPipDefault from "ExternalPip" /* 9110 */;
import isChannelFocused from "isChannelFocused" /* 11825 */;
import RestrictedScheduleNotificationUtils from "RestrictedScheduleNotificationUtils" /* 12467 */;
import MessageUtils from "MessageUtils" /* 12469 */;
import NotificationTextUtils from "NotificationTextUtils" /* 12470 */;
import useFormattedMessagePreview from "useFormattedMessagePreview" /* 12476 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 12477 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 12479 */;
import playInAppMessageSound from "playInAppMessageSound" /* 12482 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11160 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12466 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let _null;

let closure_16;
let closure_17;
let closure_18;
let closure_19;
function handleAlertMessage() {
  let channel;
  let guild;
  let obj4;
  let tmpResult3;
  let tmpResult4;
  let obj = guild(12470);
  if (obj.allowInAppNotifications()) {
    const tmpResult = guild(12480);
    const result = tmpResult.shouldShowRaidInAppNotification();
    const guildId = result.guildId;
    if (result.show) {
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
        if (null == guild) {
          return false;
        } else {
          channel = ChannelStore.getChannel(channel(11442)(guild));
          if (null == channel) {
            return false;
          } else if (SelectedChannelStore.getChannelId() === channel.id) {
            return false;
          } else {
            obj2 = { guild, channel };
            if (merged.wasRecentlyDismissed(obj2)) {
              return false;
            } else {
              const ALERT = constants3.ALERT;
              const obj3 = { notification: obj4 };
              obj4 = {
                type: ALERT,
                key: guildId,
                duration: tmpResult3.getNotificationDuration(ALERT),
                onDismiss() {
                              const obj = InAppNotificationActionCreatorsDefault;
                              obj.clearNotification();
                              obj2 = { guild, channel };
                              merged.dismissNotification(obj2);
                            },
                channel,
                guild,
                inAppNotificationId: tmpResult4.generateInAppNotificationId()
              };
              tmpResult3 = guild(12477);
              tmpResult4 = guild(12477);
              handleEnqueueNotification(obj3);
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
  const obj = InAppNotificationUtils;
  const result = obj.extractMetadataFromNotification(notification);
  ({ guildId, channelId, messageId } = result);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  AppAnalyticsUtilsDefault;
  if (isInRestrictedHours) {
    obj2 = { type: notification.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "restricted_hours", in_app_notification_id: notification.inAppNotificationId };
    trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj2);
    return false;
  } else {
    const obj4 = { type: notification.type, guild_id: guildId, channel_id: channelId, in_app_notification_id: notification.inAppNotificationId, message_id: messageId };
    trackWithMetadata(constants.IN_APP_NOTIFICATION_CREATED, obj4);
    obj2.enqueue(notification);
    const tmpResult = playInAppMessageSound;
    const result1 = tmpResult.playInAppMessageSound(notification);
    const obj3 = obj2;
    if (null == c21) {
      c21 = obj3.tryDrain();
    }
  }
}
function trackDismissed(type, arg1) {
  let channelId;
  let guildId;
  let messageId;
  const obj = InAppNotificationUtils;
  const result = obj.extractMetadataFromNotification(type);
  ({ guildId, channelId, messageId } = result);
  obj2 = AppAnalyticsUtilsDefault;
  const obj3 = { type: type.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "rejected_from_queue", in_app_notification_id: type.inAppNotificationId };
  obj2.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj3);
}
let closure_6 = LastMentionTimestampStore.trackMessageNotificationTimestamps;
({ AnalyticEvents: closure_16, ChannelTypes: closure_17, InAppNotificationTypes: closure_18, MessageTypesSets: closure_19 } = Constants);
class AlertDismissalHandler {
  constructor() {
    merged = Object.assign({ dissmissedAlertsMap: null, threshold: null });
    const obj = {};
    const JOIN_RAID = GuildAntiRaidTypes.GuildIncidentAlertTypes.JOIN_RAID;
    obj[JOIN_RAID] = new Map();
    new Map();
    const DM_RAID = GuildAntiRaidTypes.GuildIncidentAlertTypes.DM_RAID;
    obj[DM_RAID] = new Map();
    merged[0] = obj;
    merged[1] = { amount: 1, unitOfTime: "hour" };
    new Map();
    return merged;
  }
  key(guild) {
    return guild.guild.id + guild.channel.id;
  }
  dismissNotification(guild) {
    guild = guild.guild;
    const channel = guild.channel;
    const obj = GuildAntiRaidUtils;
    const incidentAlertType = obj.getIncidentAlertType(GuildIncidentsStore.getGuildIncident(guild.id));
    if (null != incidentAlertType) {
      const self = this;
      obj2 = { guild, channel };
      const obj3 = this.dissmissedAlertsMap[incidentAlertType];
      const keyResult = this.key(obj2);
      const result = obj3.set(keyResult, _modDef4461());
    }
  }
  wasRecentlyDismissed(guild) {
    guild = guild.guild;
    const channel = guild.channel;
    const obj = GuildAntiRaidUtils;
    const incidentAlertType = obj.getIncidentAlertType(GuildIncidentsStore.getGuildIncident(guild.id));
    if (null == incidentAlertType) {
      return false;
    } else {
      const self = this;
      const obj3 = { guild, channel };
      const obj4 = this.dissmissedAlertsMap[incidentAlertType];
      const value = obj4.get(this.key(obj3));
      let tmp4 = undefined !== value;
      if (tmp4) {
        obj2 = _modDef4461();
        tmp4 = obj2.diff(_modDef4461(value), self.threshold.unitOfTime) < self.threshold.amount;
      }
      return tmp4;
    }
  }
}
const prototype = AlertDismissalHandler.prototype;
let merged = Object.assign({ dissmissedAlertsMap: null, threshold: null });
let obj = {};
let JOIN_RAID = GuildAntiRaidTypes.GuildIncidentAlertTypes.JOIN_RAID;
const map = new Map();
obj[JOIN_RAID] = map;
let DM_RAID = GuildAntiRaidTypes.GuildIncidentAlertTypes.DM_RAID;
const map1 = new Map();
obj[DM_RAID] = map1;
merged[0] = obj;
merged[1] = { amount: 1, unitOfTime: "hour" };
let c21 = null;
class NotificationQueue {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.queue = [];
    return obj;
  }
  enqueue(arg0) {
    let channelId;
    let guildId;
    let messageId;
    const self = this;
    if (this.isFull()) {
      const queue = self.queue;
      const arr = queue.shift();
      if (null != arr) {
        const obj = InAppNotificationUtils;
        const result = obj.extractMetadataFromNotification(arr);
        ({ guildId, channelId, messageId } = result);
        const obj3 = { type: arr.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "evicted_from_queue", in_app_notification_id: arr.inAppNotificationId };
        obj2 = AppAnalyticsUtilsDefault;
        obj2.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj3);
      }
    }
    const queue1 = self.queue;
    queue1.push(arg0);
  }
  tryDrain() {
    const queue = this.queue;
    return queue.shift();
  }
  isFull() {
    return this.queue.length >= 2;
  }
  removeAll(arg0) {
    const obj = _modDef12;
    const removeResult = obj.remove(this.queue, arg0);
    const tmp2 = removeResult[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = trackDismissed(tmp3, "rejected_from_queue");
      continue;
    }
  }
}
const prototype2 = NotificationQueue.prototype;
let obj2 = Object.create(NotificationQueue.prototype);
obj2.queue = [];
let isInRestrictedHours = FamilyCenterStore.isCurrentUserInRestrictedHours();
let c24 = false;
let EMPTY_SCHEDULE_SNAPSHOT = RestrictedScheduleNotificationUtils.EMPTY_SCHEDULE_SNAPSHOT;
const Store = get_initializedDefault.Store;
class InAppNotificationStore extends Store {
  initialize() {
    this.waitFor(ChannelRTCStore, ChannelStore, EmbeddedActivitiesStore, FamilyCenterStore, GuildIncidentsStore, GuildStore, NotificationSettingsStore, ReadStateStore, SelectedChannelStore, UserRequiredActionStore, UserSettingsProtoStore, UserStore);
    const items = [GuildIncidentsStore];
    this.syncWith(items, handleAlertMessage);
  }
  getCurrentNotification() {
    return c21;
  }
}
const prototype3 = InAppNotificationStore.prototype;
InAppNotificationStore.displayName = "InAppNotificationStore";
let obj3 = {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    c24 = true;
    const toScheduleSnapshot = RestrictedScheduleNotificationUtils.toScheduleSnapshot;
    RestrictedScheduleNotificationUtils;
    const currentUser = UserStore.getCurrentUser();
    let restrictedSchedule;
    if (currentUser != null) {
      restrictedSchedule = currentUser.restrictedSchedule;
    }
    let tmp4 = null;
    if (null != restrictedSchedule) {
      tmp4 = null;
      if (0 !== restrictedSchedule.rules.length) {
        tmp4 = restrictedSchedule;
      }
    }
    EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshot(tmp4);
    handleAlertMessage();
  },
  LOGOUT: function handleLogout() {
    c24 = false;
    EMPTY_SCHEDULE_SNAPSHOT = RestrictedScheduleNotificationUtils.EMPTY_SCHEDULE_SNAPSHOT;
    let c21 = null;
    obj2.removeAll(() => true);
  },
  GUILD_UPDATE: handleAlertMessage,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    let notificationDuration;
    let obj3;
    let tmpResult14;
    message = message.message;
    const channel_id = message.channel_id;
    const optimistic = message.optimistic;
    let obj = MessageUtils;
    if (obj.canViewPotentiallyNSFWChannel(channel_id)) {
      const tmpResult = SpoilerChannelUtils;
      if (tmpResult.shouldShowSpoilerGateForChannelId(channel_id)) {
        return false;
      } else {
        if (isSystemMessageDefault(message)) {
          const SELF_MENTIONABLE_SYSTEM = constants4.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            return false;
          }
        }
        if (!optimistic) {
          const tmpResult8 = NotificationTextUtils;
          if (tmpResult8.allowInAppNotifications()) {
            const tmp3Result = ExternalPipDefault;
            if (!tmp3Result.isEnabled()) {
              if (!ChannelRTCStore.getChatOpen(channel_id)) {
                const tmpResult9 = NotificationTextUtils;
                const result = tmpResult9.shouldIncludeSelectedChannel();
                const tmpResult10 = NotificationTextUtils;
                if (tmpResult10.shouldNotify(message, channel_id, result)) {
                  const channel = ChannelStore.getChannel(channel_id);
                  if (null == channel) {
                    return false;
                  } else {
                    const tmpResult11 = MessageRecordUtils;
                    const messageRecord = tmpResult11.createMessageRecord(message);
                    const tmpResult12 = useFormattedMessagePreview;
                    if (tmpResult12.isMessageContentPreviewable(messageRecord)) {
                      closure_6(message, channel.guild_id);
                      const MESSAGE = constants3.MESSAGE;
                      obj2 = { notification: obj3 };
                      obj3 = {
                        type: MESSAGE,
                        guild: GuildStore.getGuild(channel.getGuildId()),
                        channel,
                        message: messageRecord,
                        key: messageRecord.id,
                        duration: notificationDuration,
                        onDismiss() {
                                            const obj = InAppNotificationActionCreatorsDefault;
                                            obj.clearNotification();
                                          },
                        parentChannel: ChannelStore.getChannel(channel.parent_id),
                        inAppNotificationId: tmpResult14.generateInAppNotificationId(),
                        mentionCount: ReadStateStore.getMentionCount(channel.id)
                      };
                      const tmpResult13 = InAppNotificationUtils;
                      notificationDuration = tmpResult13.getNotificationDuration(MESSAGE);
                      tmpResult14 = InAppNotificationUtils;
                      handleEnqueueNotification(obj2);
                    } else {
                      return false;
                    }
                  }
                } else {
                  return false;
                }
              }
            }
          }
        }
        return false;
      }
    } else {
      return false;
    }
  },
  MESSAGE_REQUEST_NOTIFICATION_SENT: function handleMessageRequest(triggeringUserId) {
    let obj3;
    let obj4;
    triggeringUserId = triggeringUserId.triggeringUserId;
    const numMutualGuilds = triggeringUserId.numMutualGuilds;
    const user = UserStore.getUser(triggeringUserId);
    if (null == user) {
      return false;
    } else {
      const MESSAGE_REQUEST = constants3.MESSAGE_REQUEST;
      let obj = { notification: obj2 };
      const _HermesInternal = HermesInternal;
      obj2 = {
        type: MESSAGE_REQUEST,
        author: user,
        numMutualGuilds,
        key: "message-request-" + triggeringUserId,
        duration: obj3.getNotificationDuration(MESSAGE_REQUEST),
        onDismiss() {
            const obj = InAppNotificationActionCreatorsDefault;
            obj.clearNotification();
          },
        inAppNotificationId: obj4.generateInAppNotificationId()
      };
      obj3 = InAppNotificationUtils;
      obj4 = InAppNotificationUtils;
      handleEnqueueNotification(obj);
    }
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
    let channelId2;
    let closure_21;
    let flag;
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
      obj2 = channelId(12477);
      const result = obj2.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId: messageId2 } = result);
      const obj4 = { type: _null.type, guild_id: guildId, channel_id: channelId2, message_id: messageId2, dismiss_reason: "message_acked", in_app_notification_id: _null.inAppNotificationId };
      const obj3 = messageId(5070);
      obj3.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj4);
    }
    obj2.removeAll(function predicate(type) {
      let tmp = type.type === constants.MESSAGE && type.channel.id === channelId;
      if (tmp) {
        const obj = SnowflakeUtilsDefault;
        tmp = obj.compare(type.message.id, messageId) <= 0;
      }
      return tmp;
    });
    if (null != _null) {
      let tmp17 = _null.type === constants3.MESSAGE && tmp15.channel.id === channelId;
      if (tmp17) {
        const obj6 = messageId(11);
        tmp17 = obj6.compare(tmp15.message.id, messageId) <= 0;
      }
      if (tmp17) {
        _null = obj5.tryDrain();
        flag = true;
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
    let obj4;
    let tmp20Result13;
    let tmp20Result14;
    ({ message, emoji } = arg0);
    if (null != message) {
      if (null != message.reactions) {
        if (null != emoji) {
          const obj13 = emoji(12470);
          if (obj13.allowInAppNotifications()) {
            const tmp20Result = emoji(5044);
            let tryParseChannelPathResult = tmp20Result.tryParseChannelPath(tmp);
            if (tryParseChannelPathResult == null) {
              tryParseChannelPathResult = { channelId: null, guildId: null };
            }
            ({ channelId, guildId } = tryParseChannelPathResult);
            if (null != channelId) {
              if (null != guildId) {
                const ReactionNotifications = emoji(2028).ReactionNotifications;
                const setting = ReactionNotifications.getSetting();
                if (setting === emoji(1197).ReactionNotificationType.NOTIFICATIONS_DISABLED) {
                  return false;
                } else {
                  let type;
                  const channel = ChannelStore.getChannel(channelId);
                  let type1;
                  if (channel != null) {
                    type1 = channel.type;
                  }
                  let result = null != type1 && channel.type === constants2.GUILD_ANNOUNCEMENT;
                  const isReactionMilestoneNotification = emoji(12477).isReactionMilestoneNotification;
                  const reactions = message.reactions;
                  emoji(12477);
                  if (channel != null) {
                    type = channel.type;
                  }
                  if (!result) {
                    result = isReactionMilestoneNotification(reactions, type);
                  }
                  const guild = GuildStore.getGuild(guildId);
                  const user = UserStore.getUser(tmp2);
                  if (null != channel) {
                    const obj3 = ExternalPipDefault;
                    if (!obj3.isEnabled()) {
                      if (!ChannelRTCStore.getChatOpen(channelId)) {
                        const tmp20Result9 = emoji(12470);
                        const result1 = tmp20Result9.shouldIncludeSelectedChannel();
                        let obj = { message, channel, reactor: user, includeSelectedChannel: result1 };
                        const tmp20Result10 = emoji(12470);
                        if (tmp20Result10.shouldNotifyForReaction(obj)) {
                          const tmp20Result11 = emoji(5112);
                          const messageRecord = tmp20Result11.createMessageRecord(message);
                          const tmp20Result12 = emoji(12476);
                          if (tmp20Result12.isMessageContentPreviewable(messageRecord)) {
                            const reactions1 = message.reactions;
                            const found = reactions1.find((emoji) => emoji.emoji.id === emoji.id && null != emoji.id || emoji.emoji.name === emoji.name);
                            if (null == found) {
                              if (!result) {
                                return false;
                              }
                            }
                            const REACTION = constants3.REACTION;
                            obj2 = { notification: obj4 };
                            obj4 = {
                              type: REACTION,
                              key: channelId,
                              duration: tmp20Result13.getNotificationDuration(REACTION),
                              onDismiss() {
                                                        const obj = InAppNotificationActionCreatorsDefault;
                                                        obj.clearNotification();
                                                      },
                              channel,
                              guild,
                              user,
                              message: messageRecord,
                              parentChannel: ChannelStore.getChannel(channel.parent_id),
                              reaction: found,
                              inAppNotificationId: tmp20Result14.generateInAppNotificationId()
                            };
                            tmp20Result13 = emoji(12477);
                            tmp20Result14 = emoji(12477);
                            handleEnqueueNotification(obj2);
                          } else {
                            return false;
                          }
                        } else {
                          return false;
                        }
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
        }
      }
    }
    return false;
  },
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    let obj3;
    let tmpResult;
    let tmpResult2;
    savedMessage = savedMessage.savedMessage;
    let obj = ForLaterExperiment;
    if (obj.isForLaterExperimentOn("inAppNotificationStore")) {
      if (null != savedMessage.message) {
        const channel = ChannelStore.getChannel(savedMessage.saveData.channelId);
        if (null != channel) {
          const _HermesInternal = HermesInternal;
          const MESSAGE_REMINDER = constants3.MESSAGE_REMINDER;
          obj2 = { notification: obj3 };
          obj3 = {
            type: MESSAGE_REMINDER,
            key: "" + savedMessage.saveData.channelId + "-" + savedMessage.saveData.messageId,
            duration: tmpResult.getNotificationDuration(MESSAGE_REMINDER),
            onDismiss() {
                    const obj = InAppNotificationActionCreatorsDefault;
                    obj.clearNotification();
                  },
            channel,
            author: savedMessage.message.author,
            savedMessage,
            inAppNotificationId: tmpResult2.generateInAppNotificationId()
          };
          tmpResult = InAppNotificationUtils;
          tmpResult2 = InAppNotificationUtils;
          handleEnqueueNotification(obj2);
        }
      }
    }
  },
  RESTRICTED_HOURS_WARNING: function handleRestrictedHoursWarning(arg0) {
    let obj3;
    let obj4;
    if (NotificationSettingsStore.screenDowntimeReminder) {
      const RESTRICTED_HOURS_WARNING = constants3.RESTRICTED_HOURS_WARNING;
      let obj = { notification: obj2 };
      obj2 = {
        type: RESTRICTED_HOURS_WARNING,
        key: "restricted-hours-warning",
        duration: obj3.getNotificationDuration(RESTRICTED_HOURS_WARNING),
        onDismiss() {
            const obj = InAppNotificationActionCreatorsDefault;
            obj.clearNotification();
          },
        title: tmp,
        subtitle: tmp2,
        inAppNotificationId: obj4.generateInAppNotificationId()
      };
      obj3 = InAppNotificationUtils;
      obj4 = InAppNotificationUtils;
      handleEnqueueNotification(obj);
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
        obj2 = InAppNotificationUtils;
        const result = obj2.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result);
        const obj4 = { type: _null.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "restricted_hours", in_app_notification_id: _null.inAppNotificationId };
        const obj3 = AppAnalyticsUtilsDefault;
        obj3.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj4);
      }
      obj2.removeAll(() => true);
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
    let obj3;
    let tmpResult5;
    let tmpResult6;
    channel = channel.channel;
    const isNewlyCreated = channel.isNewlyCreated;
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    if (null != channel1) {
      if (channel1.isForumLikeChannel()) {
        if (isNewlyCreated) {
          obj2 = NotificationTextUtils;
          if (obj2.allowInAppNotifications()) {
            const shouldNotifyForForumThreadCreation = NotificationTextUtils.shouldNotifyForForumThreadCreation;
            NotificationTextUtils;
            const tmpResult4 = isChannelFocused;
            if (shouldNotifyForForumThreadCreation(channel, channel1, !tmpResult4.isChannelFocused())) {
              const user = UserStore.getUser(channel.ownerId);
              if (null == user) {
                return false;
              } else {
                const guild = GuildStore.getGuild(channel1.guild_id);
                if (null == guild) {
                  return false;
                } else {
                  const FORUM_THREAD_CREATED = constants3.FORUM_THREAD_CREATED;
                  let obj = { notification: obj3 };
                  obj3 = {
                    type: FORUM_THREAD_CREATED,
                    thread: channel,
                    threadCreator: user,
                    parentChannel: channel1,
                    guild,
                    key: channel.id,
                    duration: tmpResult5.getNotificationDuration(FORUM_THREAD_CREATED),
                    onDismiss() {
                                    const obj = InAppNotificationActionCreatorsDefault;
                                    obj.clearNotification();
                                  },
                    inAppNotificationId: tmpResult6.generateInAppNotificationId()
                  };
                  tmpResult5 = InAppNotificationUtils;
                  tmpResult6 = InAppNotificationUtils;
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
    let c21 = obj2.tryDrain();
  },
  ENQUEUE_IN_APP_NOTIFICATION: handleEnqueueNotification,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    let channelId2;
    let closure_21;
    let flag;
    let guildId;
    let messageId;
    channelId = channelId.channelId;
    let tmp = null != _null;
    if (tmp) {
      let tmp2 = _null;
      let tmp4 = _null.type === constants3.MESSAGE && tmp2.channel.id === channelId;
      if (!tmp4) {
        tmp4 = tmp2.type === constants3.MESSAGE_FAILED_TO_SEND && tmp2.channelId === channelId;
      }
      if (!tmp4) {
        let tmp6 = tmp2.type === constants3.ALERT && tmp2.channel.id === channelId;
        tmp4 = tmp6;
      }
      tmp = tmp4;
    }
    if (tmp) {
      const obj = channelId(12477);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj2 = AppAnalyticsUtilsDefault;
      const obj3 = { type: _null.type, guild_id: guildId, channel_id: channelId2, message_id: messageId, dismiss_reason: "notification_clicked", in_app_notification_id: _null.inAppNotificationId };
      obj2.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj3);
    }
    obj2.removeAll(function predicate(type) {
      let tmp2 = type.type === constants.MESSAGE && type.channel.id === channelId;
      if (!tmp2) {
        tmp2 = type.type === constants.MESSAGE_FAILED_TO_SEND && type.channelId === channelId;
        const tmp4 = type.type === constants.MESSAGE_FAILED_TO_SEND && type.channelId === channelId;
      }
      if (!tmp2) {
        tmp2 = type.type === constants.ALERT && type.channel.id === channelId;
        const tmp6 = type.type === constants.ALERT && type.channel.id === channelId;
      }
      return tmp2;
    });
    if (null != _null) {
      let tmp17 = _null.type === constants3.MESSAGE && tmp15.channel.id === channelId;
      if (!tmp17) {
        tmp17 = _null.type === constants3.MESSAGE_FAILED_TO_SEND && _null.channelId === channelId;
      }
      if (!tmp17) {
        tmp17 = _null.type === constants3.ALERT && _null.channel.id === channelId;
      }
      if (tmp17) {
        _null = obj4.tryDrain();
        flag = true;
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
    let closure_21;
    let flag;
    let guildId;
    let messageId;
    channelId = channelId.channelId;
    const chatOpen = channelId.chatOpen;
    let tmp = null != _null;
    if (tmp) {
      tmp = _null.type === constants3.MESSAGE && _null.channel.id === channelId && chatOpen;
    }
    if (tmp) {
      const obj = channelId(12477);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj2 = chatOpen(5070);
      const obj3 = { type: _null.type, guild_id: guildId, channel_id: channelId2, message_id: messageId, dismiss_reason: "notification_clicked", in_app_notification_id: _null.inAppNotificationId };
      obj2.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj3);
    }
    obj2.removeAll(function predicate(type) {
      return type.type === constants.MESSAGE && type.channel.id === channelId && chatOpen;
    });
    if (null != _null) {
      const tmp13 = _null.type === constants3.MESSAGE && _null.channel.id === channelId && chatOpen;
      if (tmp13) {
        _null = obj4.tryDrain();
        flag = true;
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
    const obj = NotificationTextUtils;
    const result = obj.allowInAppNotifications();
    let flag = !result;
    if (flag) {
      if (null != _null) {
        const tmpResult = InAppNotificationUtils;
        const result1 = tmpResult.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result1);
        obj2 = { type: _null.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "settings_updated", in_app_notification_id: _null.inAppNotificationId };
        const obj3 = AppAnalyticsUtilsDefault;
        obj3.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj2);
        _null = null;
      }
      obj2.removeAll(() => true);
      flag = true;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    let notificationDuration;
    let tmp3Result10;
    let tmp3Result11;
    let tmp3Result12;
    let tmp3Result9;
    if (c24) {
      const toScheduleSnapshot = RestrictedScheduleNotificationUtils.toScheduleSnapshot;
      RestrictedScheduleNotificationUtils;
      const currentUser = UserStore.getCurrentUser();
      let restrictedSchedule;
      const tmp2 = EMPTY_SCHEDULE_SNAPSHOT;
      if (currentUser != null) {
        restrictedSchedule = currentUser.restrictedSchedule;
      }
      let tmp10 = null;
      if (null != restrictedSchedule) {
        tmp10 = null;
        if (0 !== restrictedSchedule.rules.length) {
          tmp10 = restrictedSchedule;
        }
      }
      const toScheduleSnapshotResult = toScheduleSnapshot(tmp10);
      EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshotResult;
      const tmp3Result = RestrictedScheduleNotificationUtils;
      const diffSchedulesResult = tmp3Result.diffSchedules(tmp2, toScheduleSnapshotResult);
      if (null != diffSchedulesResult) {
        const EnableScreenDowntimeScheduleNotifications = UserSettings.EnableScreenDowntimeScheduleNotifications;
        if (EnableScreenDowntimeScheduleNotifications.getSetting()) {
          const tmp3Result7 = NotificationTextUtils;
          if (tmp3Result7.allowInAppNotifications()) {
            const RESTRICTED_SCHEDULE_UPDATED = constants3.RESTRICTED_SCHEDULE_UPDATED;
            let obj = { notification: obj2 };
            obj2 = {
              type: RESTRICTED_SCHEDULE_UPDATED,
              key: tmp3Result9.restrictedScheduleNotificationKey(diffSchedulesResult.kind),
              duration: notificationDuration,
              onDismiss() {
                        const obj = InAppNotificationActionCreatorsDefault;
                        obj.clearNotification();
                      },
              title: tmp3Result10.getRestrictedScheduleNotificationTitle(diffSchedulesResult.kind),
              subtitle: tmp3Result11.getRestrictedScheduleNotificationSubtitle(diffSchedulesResult.rule),
              inAppNotificationId: tmp3Result12.generateInAppNotificationId()
            };
            const tmp3Result8 = InAppNotificationUtils;
            notificationDuration = tmp3Result8.getNotificationDuration(RESTRICTED_SCHEDULE_UPDATED);
            tmp3Result9 = RestrictedScheduleNotificationUtils;
            tmp3Result10 = RestrictedScheduleNotificationUtils;
            tmp3Result11 = RestrictedScheduleNotificationUtils;
            tmp3Result12 = InAppNotificationUtils;
            handleEnqueueNotification(obj);
          }
        }
      }
    } else {
      return false;
    }
  }
};
const inAppNotificationStore = new InAppNotificationStore(DispatcherDefault, obj3);
let result = size.fileFinishedImporting("stores/native/InAppNotificationStore.tsx");

export default inAppNotificationStore;