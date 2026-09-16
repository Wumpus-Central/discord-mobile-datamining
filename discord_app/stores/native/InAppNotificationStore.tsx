// discord_app/stores/native/InAppNotificationStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettings from "../../modules/user_settings/UserSettings.tsx";
import _modDef4229 from "../../../_runtime/metro/04229__.js";
import AppAnalyticsUtilsDefault from "../../modules/app_analytics/AppAnalyticsUtils.tsx";
import MessageRecordUtils from "../../modules/messages/MessageRecordUtils.tsx";
import isSystemMessageDefault from "../../modules/messages/isSystemMessage.tsx";
import SpoilerChannelUtils from "../../modules/spoiler_channels/SpoilerChannelUtils.tsx";
import ForLaterExperiment from "../../modules/saved_messages/ForLaterExperiment.tsx";
import GuildAntiRaidUtils from "../../modules/guild_antiraid/GuildAntiRaidUtils.tsx";
import GuildAntiRaidTypes from "../../modules/guild_antiraid/GuildAntiRaidTypes.tsx";
import ExternalPipDefault from "../../modules/external_pip/ExternalPip.android.tsx";
import RestrictedScheduleNotificationUtils from "../../modules/parent_tools/RestrictedScheduleNotificationUtils.tsx";
import MessageUtils from "../../modules/messages/MessageUtils.tsx";
import NotificationTextUtils from "../../modules/notifications/NotificationTextUtils.tsx";
import isChannelFocused from "../../modules/panels/isChannelFocused.native.tsx";
import useFormattedMessagePreview from "../../modules/message_previews/useFormattedMessagePreview.tsx";
import InAppNotificationUtils from "../../modules/in_app_notifications/native/InAppNotificationUtils.tsx";
import InAppNotificationActionCreatorsDefault from "../../actions/native/InAppNotificationActionCreators.tsx";
import playInAppMessageSound from "../../modules/notifications/native/playInAppMessageSound.tsx";
import EmbeddedActivitiesStore from "../../modules/activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../modules/calls/ChannelRTCStore.tsx";
import GuildIncidentsStore from "../../modules/guild_antiraid/GuildIncidentsStore.tsx";
import FamilyCenterStore from "../../modules/parent_tools/FamilyCenterStore.tsx";
import UserSettingsProtoStore from "../../modules/user_settings/UserSettingsProtoStore.tsx";
import ChannelStore from "../ChannelStore.tsx";
import GuildStore from "../GuildStore.tsx";
import NotificationSettingsStore from "../NotificationSettingsStore.tsx";
import ReadStateStore from "../ReadStateStore.tsx";
import SelectedChannelStore from "../SelectedChannelStore.tsx";
import UserRequiredActionStore from "../UserRequiredActionStore.tsx";
import UserStore from "../UserStore.tsx";

require = fn;
function handleAlertMessage() {
  if (obj.allowInAppNotifications()) {
    const result = tmp(10236).shouldShowRaidInAppNotification();
    const guildId = result.guildId;
    if (result.show) {
      if (null != guildId) {
        const guild = GuildStore.getGuild(guildId);
        if (null == guild) {
          return false;
        } else {
          channel = ChannelStore.getChannel(channel(10240)(guild));
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
              const obj3 = { notification: null };
              const obj4 = {
                type: ALERT,
                key: guildId,
                duration: tmp(10233).getNotificationDuration(ALERT),
                onDismiss() {
                  InAppNotificationActionCreatorsDefault.clearNotification();
                  merged.dismissNotification({ guild, channel });
                },
                channel,
                guild,
                inAppNotificationId: null,
              };
              const tmpResult3 = tmp(10233);
              obj4.inAppNotificationId = tmp(10233).generateInAppNotificationId();
              obj3.notification = obj4;
              handleEnqueueNotification(obj3);
              const tmpResult4 = tmp(10233);
            }
          }
        }
      }
    }
    return false;
  } else {
    return false;
  }
  obj = guild(10224);
}
function handleEnqueueNotification(notification) {
  notification = notification.notification;
  const result = InAppNotificationUtils.extractMetadataFromNotification(notification);
  ({ guildId, channelId, messageId } = result);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  if (isInRestrictedHours) {
    obj2 = {
      type: notification.type,
      guild_id: guildId,
      channel_id: channelId,
      message_id: messageId,
      dismiss_reason: "restricted_hours",
      in_app_notification_id: notification.inAppNotificationId,
    };
    trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj2);
    return false;
  } else {
    const obj4 = {
      type: notification.type,
      guild_id: guildId,
      channel_id: channelId,
      in_app_notification_id: notification.inAppNotificationId,
      message_id: messageId,
    };
    trackWithMetadata(constants.IN_APP_NOTIFICATION_CREATED, obj4);
    obj2.enqueue(notification);
    const result1 = playInAppMessageSound.playInAppMessageSound(notification);
    if (null == c21) {
      c21 = obj3.tryDrain();
    }
    obj3 = obj2;
    const tmpResult = playInAppMessageSound;
  }
}
function trackDismissed(type, arg1) {
  const result = InAppNotificationUtils.extractMetadataFromNotification(type);
  ({ guildId, channelId, messageId } = result);
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, {
    type: type.type,
    guild_id: guildId,
    channel_id: channelId,
    message_id: messageId,
    dismiss_reason: "rejected_from_queue",
    in_app_notification_id: type.inAppNotificationId,
  });
}
let closure_6 = fn(7225).trackMessageNotificationTimestamps;
const Constants = fn(1074);
({
  AnalyticEvents: closure_16,
  ChannelTypes: closure_17,
  InAppNotificationTypes: closure_18,
  MessageTypesSets: closure_19,
} = Constants);
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
  const incidentAlertType = GuildAntiRaidUtils.getIncidentAlertType(GuildIncidentsStore.getGuildIncident(guild.id));
  if (null != incidentAlertType) {
    const self = this;
    obj2 = { guild, channel: guild.channel };
    const result = this.dissmissedAlertsMap[incidentAlertType].set(this.key(obj2), _modDef4229());
    const keyResult = this.key(obj2);
  }
};
prototype["wasRecentlyDismissed"] = function wasRecentlyDismissed(guild) {
  guild = guild.guild;
  const incidentAlertType = GuildAntiRaidUtils.getIncidentAlertType(GuildIncidentsStore.getGuildIncident(guild.id));
  if (null == incidentAlertType) {
    return false;
  } else {
    const self = this;
    const obj3 = { guild, channel: guild.channel };
    value = this.dissmissedAlertsMap[incidentAlertType].get(this.key(obj3));
    let tmp4 = undefined !== value;
    if (tmp4) {
      tmp4 = _modDef4229().diff(_modDef4229(value), self.threshold.unitOfTime) < self.threshold.amount;
      obj2 = _modDef4229();
    }
    return tmp4;
  }
};
let merged = Object.assign({ dissmissedAlertsMap: null, threshold: null });
let obj = {};
obj[fn(8133).GuildIncidentAlertTypes.JOIN_RAID] = new Map();
let map = new Map();
obj[fn(8133).GuildIncidentAlertTypes.DM_RAID] = new Map();
merged[0] = obj;
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
    const arr = queue.shift();
    if (null != arr) {
      const result = InAppNotificationUtils.extractMetadataFromNotification(arr);
      ({ guildId, channelId, messageId } = result);
      const obj3 = {
        type: arr.type,
        guild_id: guildId,
        channel_id: channelId,
        message_id: messageId,
        dismiss_reason: "evicted_from_queue",
        in_app_notification_id: arr.inAppNotificationId,
      };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj3);
    }
  }
  const queue1 = self.queue;
  queue1.push(arg0);
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
  tmp2 = _modDef12.remove(this.queue, arg0)[Symbol.iterator]();
};
let obj2 = Object.create(NotificationQueue.prototype);
obj2.queue = [];
let isInRestrictedHours = FamilyCenterStore.isCurrentUserInRestrictedHours();
let c24 = false;
let EMPTY_SCHEDULE_SNAPSHOT = fn(10221).EMPTY_SCHEDULE_SNAPSHOT;
const Store = initializeDefault.Store;
class InAppNotificationStore extends Store {}
const prototype3 = InAppNotificationStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(
    ChannelRTCStore,
    ChannelStore,
    EmbeddedActivitiesStore,
    FamilyCenterStore,
    GuildIncidentsStore,
    GuildStore,
    NotificationSettingsStore,
    ReadStateStore,
    SelectedChannelStore,
    UserRequiredActionStore,
    UserSettingsProtoStore,
    UserStore,
  );
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
    obj2.removeAll(() => true);
  },
  GUILD_UPDATE: handleAlertMessage,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const channel_id = message.channel_id;
    if (obj.canViewPotentiallyNSFWChannel(channel_id)) {
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
          if (tmpResult8.allowInAppNotifications()) {
            if (!tmp3Result.isEnabled()) {
              if (!ChannelRTCStore.getChatOpen(channel_id)) {
                const result = NotificationTextUtils.shouldIncludeSelectedChannel();
                const tmpResult9 = NotificationTextUtils;
                if (tmpResult10.shouldNotify(message, channel_id, result)) {
                  const channel = ChannelStore.getChannel(channel_id);
                  if (null == channel) {
                    return false;
                  } else {
                    const messageRecord = MessageRecordUtils.createMessageRecord(message);
                    const tmpResult11 = MessageRecordUtils;
                    if (tmpResult12.isMessageContentPreviewable(messageRecord)) {
                      closure_6(message, channel.guild_id);
                      const MESSAGE = constants3.MESSAGE;
                      obj2 = { notification: null };
                      const obj3 = {
                        type: MESSAGE,
                        guild: null,
                        channel: null,
                        message: null,
                        key: null,
                        duration: null,
                        onDismiss: null,
                        parentChannel: null,
                        inAppNotificationId: null,
                        mentionCount: null,
                      };
                      const notificationDuration = InAppNotificationUtils.getNotificationDuration(MESSAGE);
                      obj3.guild = GuildStore.getGuild(channel.getGuildId());
                      obj3.channel = channel;
                      obj3.message = messageRecord;
                      obj3.key = messageRecord.id;
                      obj3.duration = notificationDuration;
                      obj3.onDismiss = function onDismiss() {
                        InAppNotificationActionCreatorsDefault.clearNotification();
                      };
                      obj3.parentChannel = ChannelStore.getChannel(channel.parent_id);
                      const tmpResult13 = InAppNotificationUtils;
                      obj3.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
                      obj3.mentionCount = ReadStateStore.getMentionCount(channel.id);
                      obj2.notification = obj3;
                      handleEnqueueNotification(obj2);
                      const tmpResult14 = InAppNotificationUtils;
                    } else {
                      return false;
                    }
                    tmpResult12 = useFormattedMessagePreview;
                  }
                } else {
                  return false;
                }
                tmpResult10 = NotificationTextUtils;
              }
            }
            tmp3Result = ExternalPipDefault;
          }
          tmpResult8 = NotificationTextUtils;
        }
        return false;
      }
      tmpResult = SpoilerChannelUtils;
    } else {
      return false;
    }
    obj = MessageUtils;
  },
  MESSAGE_REQUEST_NOTIFICATION_SENT: function handleMessageRequest(triggeringUserId) {
    triggeringUserId = triggeringUserId.triggeringUserId;
    const user = UserStore.getUser(triggeringUserId);
    if (null == user) {
      return false;
    } else {
      const MESSAGE_REQUEST = constants3.MESSAGE_REQUEST;
      const obj = { notification: null };
      obj2 = {
        type: MESSAGE_REQUEST,
        author: user,
        numMutualGuilds: triggeringUserId.numMutualGuilds,
        key: null,
        duration: null,
        onDismiss: null,
        inAppNotificationId: null,
      };
      const _HermesInternal = HermesInternal;
      obj2.key = "message-request-" + triggeringUserId;
      obj2.duration = InAppNotificationUtils.getNotificationDuration(MESSAGE_REQUEST);
      obj2.onDismiss = function onDismiss() {
        InAppNotificationActionCreatorsDefault.clearNotification();
      };
      obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      obj.notification = obj2;
      handleEnqueueNotification(obj);
    }
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
    channelId = channelId.channelId;
    const messageId = channelId.messageId;
    let tmp = null != _null;
    if (tmp) {
      let tmp4 = _null.type === constants3.MESSAGE && tmp2.channel.id === channelId;
      if (tmp4) {
        tmp4 = messageId(11).compare(tmp2.message.id, messageId) <= 0;
        let obj = messageId(11);
      }
      tmp = tmp4;
    }
    if (tmp) {
      obj2 = channelId(10233);
      const result = obj2.extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId: messageId2 } = result);
      const obj4 = {
        type: _null.type,
        guild_id: guildId,
        channel_id: channelId2,
        message_id: messageId2,
        dismiss_reason: "message_acked",
        in_app_notification_id: _null.inAppNotificationId,
      };
      messageId(4818).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj4);
      const obj3 = messageId(4818);
    }
    obj2.removeAll(function predicate(type) {
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
            let tryParseChannelPathResult = emoji(4792).tryParseChannelPath(tmp);
            if (tryParseChannelPathResult == null) {
              tryParseChannelPathResult = { channelId: null, guildId: null };
            }
            ({ channelId, guildId } = tryParseChannelPathResult);
            if (null != channelId) {
              if (null != guildId) {
                const ReactionNotifications = emoji(1936).ReactionNotifications;
                const setting = ReactionNotifications.getSetting();
                if (setting === emoji(1186).ReactionNotificationType.NOTIFICATIONS_DISABLED) {
                  return false;
                } else {
                  const channel = ChannelStore.getChannel(channelId);
                  let type1;
                  if (channel != null) {
                    type1 = channel.type;
                  }
                  let result = null != type1;
                  if (result) {
                    result = channel.type === constants2.GUILD_ANNOUNCEMENT;
                  }
                  if (channel != null) {
                    const type = channel.type;
                  }
                  if (!result) {
                    result = tmp19Result8.isReactionMilestoneNotification(message.reactions, type);
                  }
                  const guild = GuildStore.getGuild(guildId);
                  const user = UserStore.getUser(tmp2);
                  if (null != channel) {
                    if (!obj4.isEnabled()) {
                      if (!ChannelRTCStore.getChatOpen(channelId)) {
                        const result1 = emoji(10224).shouldIncludeSelectedChannel();
                        const tmp19Result9 = emoji(10224);
                        const obj = { message, channel, reactor: user, includeSelectedChannel: result1 };
                        if (tmp19Result10.shouldNotifyForReaction(obj)) {
                          const messageRecord = emoji(4861).createMessageRecord(message);
                          const tmp19Result11 = emoji(4861);
                          if (tmp19Result12.isMessageContentPreviewable(messageRecord)) {
                            const reactions = message.reactions;
                            const found = reactions.find((emoji) => {
                              let tmp2 = emoji.emoji.id === emoji.id;
                              if (tmp2) {
                                tmp2 = null != emoji.id;
                              }
                              if (!tmp2) {
                                tmp2 = emoji.emoji.name === emoji.name;
                              }
                              return tmp2;
                            });
                            if (null == found) {
                              if (!result) {
                                return false;
                              }
                            }
                            const REACTION = constants3.REACTION;
                            obj2 = { notification: null };
                            const obj3 = {
                              type: REACTION,
                              key: channelId,
                              duration: emoji(10233).getNotificationDuration(REACTION),
                              onDismiss() {
                                InAppNotificationActionCreatorsDefault.clearNotification();
                              },
                              channel,
                              guild,
                              user,
                              message: messageRecord,
                              parentChannel: ChannelStore.getChannel(channel.parent_id),
                              reaction: found,
                              inAppNotificationId: null,
                            };
                            const tmp19Result13 = emoji(10233);
                            obj3.inAppNotificationId = emoji(10233).generateInAppNotificationId();
                            obj2.notification = obj3;
                            handleEnqueueNotification(obj2);
                            const tmp19Result14 = emoji(10233);
                          } else {
                            return false;
                          }
                          tmp19Result12 = emoji(10232);
                        } else {
                          return false;
                        }
                        tmp19Result10 = emoji(10224);
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
          obj14 = emoji(10224);
        }
      }
    }
    return false;
  },
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    savedMessage = savedMessage.savedMessage;
    if (obj.isForLaterExperimentOn("inAppNotificationStore")) {
      if (null != savedMessage.message) {
        const channel = ChannelStore.getChannel(savedMessage.saveData.channelId);
        if (null != channel) {
          const _HermesInternal = HermesInternal;
          const MESSAGE_REMINDER = constants3.MESSAGE_REMINDER;
          obj2 = { notification: null };
          const obj3 = {
            type: MESSAGE_REMINDER,
            key: "" + savedMessage.saveData.channelId + "-" + savedMessage.saveData.messageId,
            duration: InAppNotificationUtils.getNotificationDuration(MESSAGE_REMINDER),
            onDismiss() {
              InAppNotificationActionCreatorsDefault.clearNotification();
            },
            channel,
            author: savedMessage.message.author,
            savedMessage,
            inAppNotificationId: null,
          };
          const tmpResult = InAppNotificationUtils;
          obj3.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
          obj2.notification = obj3;
          handleEnqueueNotification(obj2);
          const tmpResult2 = InAppNotificationUtils;
        }
      }
    }
    obj = ForLaterExperiment;
  },
  RESTRICTED_HOURS_WARNING: function handleRestrictedHoursWarning(arg0) {
    if (NotificationSettingsStore.screenDowntimeReminder) {
      const RESTRICTED_HOURS_WARNING = constants3.RESTRICTED_HOURS_WARNING;
      const obj = { notification: null };
      obj2 = {
        type: RESTRICTED_HOURS_WARNING,
        key: "restricted-hours-warning",
        duration: InAppNotificationUtils.getNotificationDuration(RESTRICTED_HOURS_WARNING),
        onDismiss() {
          InAppNotificationActionCreatorsDefault.clearNotification();
        },
        title: tmp,
        subtitle: tmp2,
        inAppNotificationId: null,
      };
      obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      obj.notification = obj2;
      handleEnqueueNotification(obj);
    } else {
      return false;
    }
  },
  RESTRICTED_HOURS_STATE_CHANGE: function handleRestrictedHoursStateChange(isInRestrictedHours) {
    isInRestrictedHours = isInRestrictedHours.isInRestrictedHours;
    if (isInRestrictedHours) {
      if (null != _null) {
        obj2 = InAppNotificationUtils;
        const result = obj2.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result);
        const obj4 = {
          type: _null.type,
          guild_id: guildId,
          channel_id: channelId,
          message_id: messageId,
          dismiss_reason: "restricted_hours",
          in_app_notification_id: _null.inAppNotificationId,
        };
        AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj4);
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
    channel = channel.channel;
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    if (null != channel1) {
      if (channel1.isForumLikeChannel()) {
        if (channel.isNewlyCreated) {
          if (obj2.allowInAppNotifications()) {
            const tmpResult = NotificationTextUtils;
            if (tmpResult.shouldNotifyForForumThreadCreation(channel, channel1, !tmpResult4.isChannelFocused())) {
              const user = UserStore.getUser(channel.ownerId);
              if (null == user) {
                return false;
              } else {
                const guild = GuildStore.getGuild(channel1.guild_id);
                if (null == guild) {
                  return false;
                } else {
                  const FORUM_THREAD_CREATED = constants3.FORUM_THREAD_CREATED;
                  const obj = { notification: null };
                  const obj3 = {
                    type: FORUM_THREAD_CREATED,
                    thread: channel,
                    threadCreator: user,
                    parentChannel: channel1,
                    guild,
                    key: channel.id,
                    duration: InAppNotificationUtils.getNotificationDuration(FORUM_THREAD_CREATED),
                    onDismiss() {
                      InAppNotificationActionCreatorsDefault.clearNotification();
                    },
                    inAppNotificationId: null,
                  };
                  const tmpResult5 = InAppNotificationUtils;
                  obj3.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
                  obj.notification = obj3;
                  handleEnqueueNotification(obj);
                  const tmpResult6 = InAppNotificationUtils;
                }
              }
            }
            tmpResult4 = isChannelFocused;
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
    c21 = obj2.tryDrain();
  },
  ENQUEUE_IN_APP_NOTIFICATION: handleEnqueueNotification,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    let tmp = null != _null;
    if (tmp) {
      let tmp4 = _null.type === constants3.MESSAGE && tmp2.channel.id === channelId;
      if (!tmp4) {
        tmp4 = tmp2.type === constants3.MESSAGE_FAILED_TO_SEND && tmp2.channelId === channelId;
        const tmp5 = tmp2.type === constants3.MESSAGE_FAILED_TO_SEND && tmp2.channelId === channelId;
      }
      if (!tmp4) {
        tmp4 = tmp2.type === constants3.ALERT && tmp2.channel.id === channelId;
        let tmp6 = tmp2.type === constants3.ALERT && tmp2.channel.id === channelId;
      }
      tmp = tmp4;
    }
    if (tmp) {
      const result = channelId(10233).extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj2 = AppAnalyticsUtilsDefault;
      const obj3 = {
        type: _null.type,
        guild_id: guildId,
        channel_id: channelId2,
        message_id: messageId,
        dismiss_reason: "notification_clicked",
        in_app_notification_id: _null.inAppNotificationId,
      };
      obj2.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj3);
      const obj = channelId(10233);
    }
    obj2.removeAll(function predicate(type) {
      let tmp2 = type.type === constants3.MESSAGE;
      if (tmp2) {
        tmp2 = type.channel.id === channelId;
      }
      if (!tmp2) {
        let tmp4 = type.type === constants3.MESSAGE_FAILED_TO_SEND;
        if (tmp4) {
          tmp4 = type.channelId === channelId;
        }
        tmp2 = tmp4;
      }
      if (!tmp2) {
        let tmp6 = type.type === constants3.ALERT;
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
        const tmp18 = tmp15.type === constants3.MESSAGE_FAILED_TO_SEND && tmp15.channelId === channelId;
      }
      if (!tmp17) {
        tmp17 = tmp15.type === constants3.ALERT && tmp15.channel.id === channelId;
        const tmp19 = tmp15.type === constants3.ALERT && tmp15.channel.id === channelId;
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
      const result = channelId(10233).extractMetadataFromNotification(_null);
      ({ guildId, channelId: channelId2, messageId } = result);
      obj2 = chatOpen(4818);
      const obj3 = {
        type: _null.type,
        guild_id: guildId,
        channel_id: channelId2,
        message_id: messageId,
        dismiss_reason: "notification_clicked",
        in_app_notification_id: _null.inAppNotificationId,
      };
      obj2.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj3);
      const obj = channelId(10233);
    }
    obj2.removeAll(function predicate(type) {
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
    const result = NotificationTextUtils.allowInAppNotifications();
    let flag = !result;
    if (!result) {
      if (null != _null) {
        const result1 = InAppNotificationUtils.extractMetadataFromNotification(_null);
        ({ guildId, channelId, messageId } = result1);
        const tmpResult = InAppNotificationUtils;
        obj2 = {
          type: _null.type,
          guild_id: guildId,
          channel_id: channelId,
          message_id: messageId,
          dismiss_reason: "settings_updated",
          in_app_notification_id: _null.inAppNotificationId,
        };
        AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, obj2);
        _null = null;
      }
      obj2.removeAll(() => true);
      flag = true;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (c24) {
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
      const toScheduleSnapshotResult = RestrictedScheduleNotificationUtils.toScheduleSnapshot(tmp8);
      EMPTY_SCHEDULE_SNAPSHOT = toScheduleSnapshotResult;
      const tmp = EMPTY_SCHEDULE_SNAPSHOT;
      const diffSchedulesResult = RestrictedScheduleNotificationUtils.diffSchedules(tmp, toScheduleSnapshotResult);
      if (null != diffSchedulesResult) {
        const EnableScreenDowntimeScheduleNotifications = UserSettings.EnableScreenDowntimeScheduleNotifications;
        if (EnableScreenDowntimeScheduleNotifications.getSetting()) {
          if (tmp2Result7.allowInAppNotifications()) {
            const RESTRICTED_SCHEDULE_UPDATED = constants3.RESTRICTED_SCHEDULE_UPDATED;
            obj2 = { notification: null };
            const obj3 = {
              type: RESTRICTED_SCHEDULE_UPDATED,
              key: null,
              duration: null,
              onDismiss: null,
              title: null,
              subtitle: null,
              inAppNotificationId: null,
            };
            const notificationDuration = InAppNotificationUtils.getNotificationDuration(RESTRICTED_SCHEDULE_UPDATED);
            const tmp2Result8 = InAppNotificationUtils;
            obj3.key = RestrictedScheduleNotificationUtils.restrictedScheduleNotificationKey(diffSchedulesResult.kind);
            obj3.duration = notificationDuration;
            obj3.onDismiss = function onDismiss() {
              InAppNotificationActionCreatorsDefault.clearNotification();
            };
            const tmp2Result9 = RestrictedScheduleNotificationUtils;
            obj3.title = RestrictedScheduleNotificationUtils.getRestrictedScheduleNotificationTitle(
              diffSchedulesResult.kind,
            );
            const tmp2Result10 = RestrictedScheduleNotificationUtils;
            obj3.subtitle = RestrictedScheduleNotificationUtils.getRestrictedScheduleNotificationSubtitle(
              diffSchedulesResult.rule,
            );
            const tmp2Result11 = RestrictedScheduleNotificationUtils;
            obj3.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
            obj2.notification = obj3;
            handleEnqueueNotification(obj2);
            const tmp2Result12 = InAppNotificationUtils;
          }
          tmp2Result7 = NotificationTextUtils;
        }
      }
      const tmp2Result = RestrictedScheduleNotificationUtils;
    } else {
      return false;
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/native/InAppNotificationStore.tsx");

export default inAppNotificationStore;
