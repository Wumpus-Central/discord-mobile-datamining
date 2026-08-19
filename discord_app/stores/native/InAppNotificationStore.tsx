// discord_app/stores/native/InAppNotificationStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import tDefault from "../../../_runtime/03975_t.js";
import explicitContentFromProto from "../../modules/user_settings/UserSettings.tsx";
import createMinimalMessageRecord from "../../modules/messages/MessageRecordUtils.tsx";
import collectGuildAnalyticsMetadataDefault from "../../modules/app_analytics/AppAnalyticsUtils.tsx";
import isChannelSpoilerGated from "../../modules/spoiler_channels/SpoilerChannelUtils.tsx";
import apexExperiment from "../../modules/parent_tools/FamilyCenterV3Experiment.tsx";
import isSystemMessageDefault from "../../modules/messages/isSystemMessage.tsx";
import DATE_CONFIG from "../../modules/guild_antiraid/GuildAntiRaidUtils.tsx";
import GuildIncidentActionSources from "../../modules/guild_antiraid/GuildAntiRaidTypes.tsx";
import ForLaterFreemiumConfig from "../../modules/saved_messages/ForLaterExperiment.tsx";
import isOnlyDayLoss from "../../modules/parent_tools/RestrictedScheduleNotificationUtils.tsx";
import canViewPotentiallyNSFWChannel from "../../modules/messages/MessageUtils.tsx";
import shouldNotifyBase from "../../modules/notifications/NotificationTextUtils.tsx";
import getFocusedChannelId from "../../modules/panels/isChannelFocused.native.tsx";
import NativeEventEmitterDefault from "../../modules/external_pip/ExternalPip.android.tsx";
import formatMessagePreview from "../../modules/message_previews/useFormattedMessagePreview.tsx";
import isReactionMilestoneNotification from "../../modules/in_app_notifications/native/InAppNotificationUtils.tsx";
import apexExperimentDefault from "../../modules/message_request/MessageRequestPushNotificationExperiment.tsx";
import playInAppMessageSound from "../../modules/notifications/native/playInAppMessageSound.tsx";
import participantFromServer from "../../modules/activities/EmbeddedActivitiesStore.tsx";
import getParticipants from "../../modules/calls/ChannelRTCStore.tsx";
import computeAlertSettings from "../../modules/guild_antiraid/GuildIncidentsStore.tsx";
import { trackMessageNotificationTimestamps as closure_6 } from "../../modules/notifications/LastMentionTimestampStore.tsx";
import importDefaultResult from "../../modules/parent_tools/FamilyCenterStore.tsx";
import handleConnectionClosedOrResumed from "../../modules/user_settings/UserSettingsProtoStore.tsx";
import ensureGuildLoaded from "../ChannelStore.tsx";
import createGuildRecordFromRust from "../GuildStore.tsx";
import DesktopNotificationTypes from "../NotificationSettingsStore.tsx";
import generateOldThreadCutoff from "../ReadStateStore.tsx";
import handleConnectionOpen from "../SelectedChannelStore.tsx";
import handleRequiredAction from "../UserRequiredActionStore.tsx";
import mergeGuildAvatar from "../UserStore.tsx";
import ME from "../../Constants.tsx";
import { EMPTY_SCHEDULE_SNAPSHOT } from "../../modules/parent_tools/RestrictedScheduleNotificationUtils.tsx";

require = fn;
function handleAlertMessage() {
  obj = guild(10019);
  if (obj.allowInAppNotifications()) {
    let tmpResult = tmp(10033);
    const result = tmpResult.shouldShowRaidInAppNotification();
    const guildId = result.guildId;
    if (result.show) {
      if (null != guildId) {
        guild = store3.getGuild(guildId);
        if (null == guild) {
          return false;
        } else {
          channel = store2.getChannel(channel(10037)(guild));
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
              obj1 = { type: null, key: null, duration: null, onDismiss: null, channel: null, guild: null, inAppNotificationId: null };
              obj1[0] = ALERT;
              obj1[1] = guildId;
              tmpResult = tmp(10029);
              obj1[2] = tmpResult.getNotificationDuration(ALERT);
              obj1[3] = function onDismiss() {
                obj = channel(dependencyMap[27]);
                obj.clearNotification();
                obj = { guild, channel };
                closure_1_20.dismissNotification(obj);
              };
              obj1[4] = channel;
              obj1[5] = guild;
              obj1[6] = tmp(10029).generateInAppNotificationId();
              obj[0] = obj1;
              handleEnqueueNotification(obj);
              const tmpResult1 = tmp(10029);
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
  obj = isReactionMilestoneNotification;
  const result = obj.extractMetadataFromNotification(notification);
  ({ guildId, channelId, messageId } = result);
  const trackWithMetadata = collectGuildAnalyticsMetadataDefault.trackWithMetadata;
  if (closure_23) {
    obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "restricted_hours", in_app_notification_id: null };
    obj[0] = notification.type;
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = messageId;
    obj[5] = notification.inAppNotificationId;
    trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
    return false;
  } else {
    obj = { type: null, guild_id: null, channel_id: null, in_app_notification_id: null, message_id: null };
    obj[0] = notification.type;
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = notification.inAppNotificationId;
    obj[4] = messageId;
    trackWithMetadata(constants.IN_APP_NOTIFICATION_CREATED, obj);
    obj1.enqueue(notification);
    const result1 = playInAppMessageSound.playInAppMessageSound(notification);
    if (null == closure_21) {
      closure_21 = obj1.tryDrain();
    }
    const tmpResult = playInAppMessageSound;
  }
}
function trackDismissed(type) {
  obj = isReactionMilestoneNotification;
  const result = obj.extractMetadataFromNotification(type);
  ({ guildId, channelId, messageId } = result);
  obj = { type: type.type, guild_id: guildId, channel_id: channelId, message_id: messageId, dismiss_reason: "rejected_from_queue", in_app_notification_id: type.inAppNotificationId };
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
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
  obj = DATE_CONFIG;
  const incidentAlertType = obj.getIncidentAlertType(store.getGuildIncident(guild.id));
  if (null != incidentAlertType) {
    const self = this;
    obj = { guild: null, channel: null };
    obj[0] = guild;
    obj[1] = guild.channel;
    const result = this.dissmissedAlertsMap[incidentAlertType].set(this.key(obj), tDefault());
    const keyResult = this.key(obj);
  }
};
prototype["wasRecentlyDismissed"] = function wasRecentlyDismissed(guild) {
  guild = guild.guild;
  obj = DATE_CONFIG;
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
      tmp4 = tDefault().diff(tDefault(value), self.threshold.unitOfTime) < self.threshold.amount;
      const obj2 = tDefault();
    }
    return tmp4;
  }
};
Object.create(AlertDismissalHandler.prototype);
let obj = {};
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
  const self = this;
  if (this.isFull()) {
    const queue = self.queue;
    let arr = queue.shift();
    if (null != arr) {
      obj = isReactionMilestoneNotification;
      const result = obj.extractMetadataFromNotification(arr);
      ({ guildId, channelId, messageId } = result);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "evicted_from_queue", in_app_notification_id: null };
      obj[0] = arr.type;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = messageId;
      obj[5] = arr.inAppNotificationId;
      collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
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
  const removeResult = applyDefault.remove(this.queue, arg0);
  while (tmp2 !== undefined) {
    let tmp5 = trackDismissed(tmp3, "rejected_from_queue");
    continue;
  }
  tmp2 = applyDefault.remove(this.queue, arg0)[Symbol.iterator]();
};
let obj1 = Object.create(NotificationQueue.prototype);
obj1.queue = [];
let closure_23 = importDefaultResult.isCurrentUserInRestrictedHours();
let c24 = false;
const Store = initializeDefault.Store;
class InAppNotificationStore extends Store {
}
const prototype3 = InAppNotificationStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_9, closure_3, closure_7, closure_5, closure_10, closure_11, closure_12, closure_13, closure_14, closure_8, closure_15);
  const items = [closure_5];
  this.syncWith(items, handleAlertMessage);
};
prototype3["getCurrentNotification"] = function getCurrentNotification() {
  return c21;
};
InAppNotificationStore.displayName = "InAppNotificationStore";
const inAppNotificationStore = new InAppNotificationStore(dispatcherDefault, {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    c24 = true;
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
    closure_25 = isOnlyDayLoss.toScheduleSnapshot(tmp3);
    handleAlertMessage();
  },
  LOGOUT: function handleLogout() {
    c24 = false;
    EMPTY_SCHEDULE_SNAPSHOT = isOnlyDayLoss.EMPTY_SCHEDULE_SNAPSHOT;
    c21 = null;
    obj1.removeAll(() => true);
  },
  GUILD_UPDATE: handleAlertMessage,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const channel_id = message.channel_id;
    obj = canViewPotentiallyNSFWChannel;
    if (obj.canViewPotentiallyNSFWChannel(channel_id)) {
      let tmpResult = isChannelSpoilerGated;
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
          tmpResult = shouldNotifyBase;
          if (tmpResult.allowInAppNotifications()) {
            if (!tmp3Result.isEnabled()) {
              if (!uiStore.getChatOpen(channel_id)) {
                const result = shouldNotifyBase.shouldIncludeSelectedChannel();
                const tmpResult1 = shouldNotifyBase;
                if (tmpResult2.shouldNotify(message, channel_id, result)) {
                  const channel = store2.getChannel(channel_id);
                  if (null == channel) {
                    return false;
                  } else {
                    const messageRecord = createMinimalMessageRecord.createMessageRecord(message);
                    const tmpResult3 = createMinimalMessageRecord;
                    if (tmpResult4.isMessageContentPreviewable(messageRecord)) {
                      callback(message, channel.guild_id);
                      const MESSAGE = constants3.MESSAGE;
                      obj = { type: null, guild: null, channel: null, message: null, key: null, duration: null, onDismiss: null, parentChannel: null, inAppNotificationId: null, mentionCount: null };
                      obj[0] = MESSAGE;
                      const notificationDuration = isReactionMilestoneNotification.getNotificationDuration(MESSAGE);
                      obj[1] = store3.getGuild(channel.getGuildId());
                      obj[2] = channel;
                      obj[3] = messageRecord;
                      obj[4] = messageRecord.id;
                      obj[5] = notificationDuration;
                      obj[6] = function onDismiss() {
                        callback(table[27]).clearNotification();
                      };
                      obj[7] = store2.getChannel(channel.parent_id);
                      const tmpResult5 = isReactionMilestoneNotification;
                      obj[8] = isReactionMilestoneNotification.generateInAppNotificationId();
                      obj[9] = mentionCount.getMentionCount(channel.id);
                      obj[0] = obj;
                      handleEnqueueNotification(obj);
                      const tmpResult6 = isReactionMilestoneNotification;
                    } else {
                      return false;
                    }
                    tmpResult4 = formatMessagePreview;
                  }
                } else {
                  return false;
                }
                tmpResult2 = shouldNotifyBase;
              }
            }
            tmp3Result = NativeEventEmitterDefault;
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
    obj = apexExperimentDefault;
    if (obj.getConfig({ location: "inAppNotificationStore" }).enabled) {
      const user = authStore.getUser(triggeringUserId);
      if (null == user) {
        return false;
      } else {
        const MESSAGE_REQUEST = constants3.MESSAGE_REQUEST;
        obj = { type: null, author: null, numMutualGuilds: null, key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj[0] = MESSAGE_REQUEST;
        obj[1] = user;
        obj[2] = triggeringUserId.numMutualGuilds;
        const _HermesInternal = HermesInternal;
        obj[3] = "message-request-" + triggeringUserId;
        obj[4] = isReactionMilestoneNotification.getNotificationDuration(MESSAGE_REQUEST);
        obj[5] = function onDismiss() {
          callback(table[27]).clearNotification();
        };
        obj[6] = isReactionMilestoneNotification.generateInAppNotificationId();
        obj[0] = obj;
        handleEnqueueNotification(obj);
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
        obj = messageId(11);
        tmp4 = obj.compare(tmp2.message.id, messageId) <= 0;
      }
      tmp = tmp4;
    }
    if (tmp) {
      const result = channelId(10029).extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId: messageId2 } = result);
      const obj2 = channelId(10029);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "message_acked", in_app_notification_id: null };
      obj[0] = _null.type;
      obj[1] = guildId;
      obj[2] = channelId2;
      obj[3] = messageId2;
      obj[5] = _null.inAppNotificationId;
      messageId(5042).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj3 = messageId(5042);
    }
    obj1.removeAll(function predicate(type) {
      let tmp = type.type === closure_1_18.MESSAGE;
      if (tmp) {
        tmp = type.channel.id === channelId;
      }
      if (tmp) {
        tmp = messageId(dependencyMap[39]).compare(type.message.id, messageId) <= 0;
        obj = messageId(dependencyMap[39]);
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
        _null = obj1.tryDrain();
        let flag = true;
      }
      return flag;
    }
    flag = false;
    if (null == _null) {
      _null = obj1.tryDrain();
      flag = true;
    }
  },
  REACTION_NOTIFICATION_SENT: function handleReactionNotification(arg0) {
    ({ message, emoji } = arg0);
    if (null != message) {
      if (null != message.reactions) {
        if (null != emoji) {
          if (obj14.allowInAppNotifications()) {
            let tmp19Result = emoji(4488);
            let tryParseChannelPathResult = tmp19Result.tryParseChannelPath(tmp);
            if (tryParseChannelPathResult == null) {
              tryParseChannelPathResult = { channelId: null, guildId: null };
            }
            ({ channelId, guildId } = tryParseChannelPathResult);
            if (null != channelId) {
              if (null != guildId) {
                const ReactionNotifications = emoji(4066).ReactionNotifications;
                const setting = ReactionNotifications.getSetting();
                if (setting === emoji(1306).ReactionNotificationType.NOTIFICATIONS_DISABLED) {
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
                  tmp19Result = emoji(10029);
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
                        const result1 = emoji(10019).shouldIncludeSelectedChannel();
                        const tmp19Result1 = emoji(10019);
                        obj = { message: null, channel: null, reactor: null, includeSelectedChannel: null };
                        obj[0] = message;
                        obj[1] = channel;
                        obj[2] = user;
                        obj[3] = result1;
                        if (tmp19Result2.shouldNotifyForReaction(obj)) {
                          const messageRecord = emoji(4803).createMessageRecord(message);
                          const tmp19Result3 = emoji(4803);
                          if (tmp19Result4.isMessageContentPreviewable(messageRecord)) {
                            const reactions = message.reactions;
                            const found = reactions.find((item, index) => {
                              let tmp2 = item.emoji.id === emoji.id;
                              if (tmp2) {
                                tmp2 = null != emoji.id;
                              }
                              if (!tmp2) {
                                tmp2 = item.emoji.name === emoji.name;
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
                            obj1 = { type: null, key: null, duration: null, onDismiss: null, channel: null, guild: null, user: null, message: null, parentChannel: null, reaction: null, inAppNotificationId: null };
                            obj1[0] = REACTION;
                            obj1[1] = channelId;
                            obj1[2] = emoji(10029).getNotificationDuration(REACTION);
                            obj1[3] = function onDismiss() {
                              callback(table[27]).clearNotification();
                            };
                            obj1[4] = channel;
                            obj1[5] = guild;
                            obj1[6] = user;
                            obj1[7] = messageRecord;
                            obj1[8] = store2.getChannel(channel.parent_id);
                            obj1[9] = found;
                            const tmp19Result5 = emoji(10029);
                            obj1[10] = emoji(10029).generateInAppNotificationId();
                            obj[0] = obj1;
                            handleEnqueueNotification(obj);
                            const tmp19Result6 = emoji(10029);
                          } else {
                            return false;
                          }
                          tmp19Result4 = emoji(10028);
                        } else {
                          return false;
                        }
                        tmp19Result2 = emoji(10019);
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
          obj14 = emoji(10019);
        }
      }
    }
    return false;
  },
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    savedMessage = savedMessage.savedMessage;
    obj = ForLaterFreemiumConfig;
    if (obj.isForLaterExperimentOn("inAppNotificationStore")) {
      if (null != savedMessage.message) {
        const channel = store2.getChannel(savedMessage.saveData.channelId);
        if (null != channel) {
          const _HermesInternal = HermesInternal;
          const MESSAGE_REMINDER = constants3.MESSAGE_REMINDER;
          obj = { type: null, key: null, duration: null, onDismiss: null, channel: null, author: null, savedMessage: null, inAppNotificationId: null };
          obj[0] = MESSAGE_REMINDER;
          obj[1] = "" + savedMessage.saveData.channelId + "-" + savedMessage.saveData.messageId;
          let tmpResult = isReactionMilestoneNotification;
          obj[2] = tmpResult.getNotificationDuration(MESSAGE_REMINDER);
          obj[3] = function onDismiss() {
            callback(table[27]).clearNotification();
          };
          obj[4] = channel;
          obj[5] = savedMessage.message.author;
          obj[6] = savedMessage;
          tmpResult = isReactionMilestoneNotification;
          obj[7] = tmpResult.generateInAppNotificationId();
          obj[0] = obj;
          handleEnqueueNotification(obj);
        }
      }
    }
  },
  RESTRICTED_HOURS_WARNING: function handleRestrictedHoursWarning(arg0) {
    ({ title, subtitle } = arg0);
    obj = apexExperiment;
    if (obj.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" })) {
      if (obj.screenDowntimeReminder) {
        const RESTRICTED_HOURS_WARNING = constants3.RESTRICTED_HOURS_WARNING;
        obj = { type: null, key: "restricted-hours-warning", duration: null, onDismiss: null, title: null, subtitle: null, inAppNotificationId: null };
        obj[0] = RESTRICTED_HOURS_WARNING;
        let tmpResult = isReactionMilestoneNotification;
        obj[2] = tmpResult.getNotificationDuration(RESTRICTED_HOURS_WARNING);
        obj[3] = function onDismiss() {
          callback(table[27]).clearNotification();
        };
        obj[4] = title;
        obj[5] = subtitle;
        tmpResult = isReactionMilestoneNotification;
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
    isInRestrictedHours = isInRestrictedHours.isInRestrictedHours;
    if (isInRestrictedHours) {
      if (null != _null) {
        const result = isReactionMilestoneNotification.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result);
        obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "restricted_hours", in_app_notification_id: null };
        obj[0] = _null.type;
        obj[1] = guildId;
        obj[2] = channelId;
        obj[3] = messageId;
        obj[5] = _null.inAppNotificationId;
        collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      }
      obj = obj1;
      obj1.removeAll(() => true);
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
    channel = store2.getChannel(channel.parent_id);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        if (channel.isNewlyCreated) {
          if (obj2.allowInAppNotifications()) {
            const tmpResult = getFocusedChannelId;
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
                  obj = { type: null, thread: null, threadCreator: null, parentChannel: null, guild: null, key: null, duration: null, onDismiss: null, inAppNotificationId: null };
                  obj[0] = FORUM_THREAD_CREATED;
                  obj[1] = channel;
                  obj[2] = user;
                  obj[3] = channel;
                  obj[4] = guild;
                  obj[5] = channel.id;
                  obj[6] = isReactionMilestoneNotification.getNotificationDuration(FORUM_THREAD_CREATED);
                  obj[7] = function onDismiss() {
                    callback(table[27]).clearNotification();
                  };
                  const tmpResult1 = isReactionMilestoneNotification;
                  obj[8] = isReactionMilestoneNotification.generateInAppNotificationId();
                  obj[0] = obj;
                  handleEnqueueNotification(obj);
                  const tmpResult2 = isReactionMilestoneNotification;
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
    closure_21 = obj1.tryDrain();
  },
  ENQUEUE_IN_APP_NOTIFICATION: handleEnqueueNotification,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    let tmp = null != _null;
    if (tmp) {
      let tmp4 = _null.type === constants3.MESSAGE && tmp2.channel.id === channelId;
      if (!tmp4) {
        tmp4 = tmp2.type === constants3.MESSAGE_FAILED_TO_SEND && tmp2.channelId === channelId;
      }
      if (!tmp4) {
        tmp4 = tmp2.type === constants3.ALERT && tmp2.channel.id === channelId;
      }
      tmp = tmp4;
    }
    if (tmp) {
      obj = channelId(10029);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "notification_clicked", in_app_notification_id: null };
      obj[0] = _null.type;
      obj[1] = guildId;
      obj[2] = channelId2;
      obj[3] = messageId;
      obj[5] = _null.inAppNotificationId;
      collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
    }
    obj1.removeAll(function predicate(type) {
      let tmp2 = type.type === closure_1_18.MESSAGE;
      if (tmp2) {
        tmp2 = type.channel.id === channelId;
      }
      if (!tmp2) {
        let tmp4 = type.type === closure_1_18.MESSAGE_FAILED_TO_SEND;
        if (tmp4) {
          tmp4 = type.channelId === channelId;
        }
        tmp2 = tmp4;
      }
      if (!tmp2) {
        let tmp6 = type.type === closure_1_18.ALERT;
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
        tmp17 = tmp15.type === constants3.MESSAGE_FAILED_TO_SEND && tmp15.channelId === channelId;
      }
      if (!tmp17) {
        tmp17 = tmp15.type === constants3.ALERT && tmp15.channel.id === channelId;
      }
      if (tmp17) {
        _null = obj1.tryDrain();
        let flag = true;
      }
      return flag;
    }
    flag = false;
    if (null == _null) {
      _null = obj1.tryDrain();
      flag = true;
    }
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleVoiceChatOpen(channelId) {
    channelId = channelId.channelId;
    const chatOpen = channelId.chatOpen;
    let tmp = null != _null;
    if (tmp) {
      tmp = _null.type === constants3.MESSAGE && _null.channel.id === channelId && chatOpen;
    }
    if (tmp) {
      obj = channelId(10029);
      const result = obj.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "notification_clicked", in_app_notification_id: null };
      obj[0] = _null.type;
      obj[1] = guildId;
      obj[2] = channelId2;
      obj[3] = messageId;
      obj[5] = _null.inAppNotificationId;
      chatOpen(5042).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
      const obj2 = chatOpen(5042);
    }
    obj1.removeAll(function predicate(type) {
      let tmp = type.type === closure_1_18.MESSAGE;
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
        _null = obj1.tryDrain();
        let flag = true;
      }
      return flag;
    }
    flag = false;
    if (null == _null) {
      _null = obj1.tryDrain();
      flag = true;
    }
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsUpdate() {
    obj = shouldNotifyBase;
    const result = obj.allowInAppNotifications();
    let flag = !result;
    if (!result) {
      if (null != _null) {
        const result1 = isReactionMilestoneNotification.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result1);
        const tmpResult = isReactionMilestoneNotification;
        obj = { type: null, guild_id: null, channel_id: null, message_id: null, dismiss_reason: "settings_updated", in_app_notification_id: null };
        obj[0] = _null.type;
        obj[1] = guildId;
        obj[2] = channelId;
        obj[3] = messageId;
        obj[5] = _null.inAppNotificationId;
        collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj);
        _null = null;
      }
      obj1.removeAll(() => true);
      flag = true;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (c24) {
      obj = apexExperiment;
      if (obj.getIsFamilyCenterV3Enabled({ location: "InAppNotificationStore" })) {
        let tmpResult = isOnlyDayLoss;
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
        EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshotResult;
        tmpResult = isOnlyDayLoss;
        const diffSchedulesResult = tmpResult.diffSchedules(EMPTY_SCHEDULE_SNAPSHOT, toScheduleSnapshotResult);
        if (null != diffSchedulesResult) {
          const EnableScreenDowntimeScheduleNotifications = explicitContentFromProto.EnableScreenDowntimeScheduleNotifications;
          if (EnableScreenDowntimeScheduleNotifications.getSetting()) {
            if (tmpResult1.allowInAppNotifications()) {
              const RESTRICTED_SCHEDULE_UPDATED = constants3.RESTRICTED_SCHEDULE_UPDATED;
              obj = { type: null, key: null, duration: null, onDismiss: null, title: null, subtitle: null, inAppNotificationId: null };
              obj[0] = RESTRICTED_SCHEDULE_UPDATED;
              const notificationDuration = isReactionMilestoneNotification.getNotificationDuration(RESTRICTED_SCHEDULE_UPDATED);
              const tmpResult2 = isReactionMilestoneNotification;
              obj[1] = isOnlyDayLoss.restrictedScheduleNotificationKey(diffSchedulesResult.kind);
              obj[2] = notificationDuration;
              obj[3] = function onDismiss() {
                callback(table[27]).clearNotification();
              };
              const tmpResult3 = isOnlyDayLoss;
              obj[4] = isOnlyDayLoss.getRestrictedScheduleNotificationTitle(diffSchedulesResult.kind);
              const tmpResult4 = isOnlyDayLoss;
              obj[5] = isOnlyDayLoss.getRestrictedScheduleNotificationSubtitle(diffSchedulesResult.rule);
              const tmpResult5 = isOnlyDayLoss;
              obj[6] = isReactionMilestoneNotification.generateInAppNotificationId();
              obj[0] = obj;
              handleEnqueueNotification(obj);
              const tmpResult6 = isReactionMilestoneNotification;
            }
            tmpResult1 = shouldNotifyBase;
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
let result = require("obj132").fileFinishedImporting("stores/native/InAppNotificationStore.tsx");

export default inAppNotificationStore;