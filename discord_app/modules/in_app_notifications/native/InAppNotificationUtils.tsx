// === Module 10094: InAppNotificationUtils ===

// Module 10094 (InAppNotificationUtils)
import _mod12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1090 */;
import v1 from "v1" /* 1256 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import isForwardMessageDefault from "isForwardMessage" /* 7302 */;
import noop from "module_19" /* 19 */;

require = fn;
const REACTION_MILESTONE_COUNTS = fn(10095).REACTION_MILESTONE_COUNTS;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, ChannelTypes: metroRequire, InAppNotificationTypes: closure_7, MessageEmbedTypes: closure_8, MessageFlags: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationUtils.tsx");

export const isReactionMilestoneNotification = function isReactionMilestoneNotification(reactions, type) {
  if (null != type) {
    if (type !== constants2.GUILD_ANNOUNCEMENT) {
      return REACTION_MILESTONE_COUNTS.has(_mod12.sumBy(reactions, (count_details) => {
        count_details = count_details.count_details;
        let num;
        if (count_details != null) {
          num = count_details.burst;
        }
        if (num == null) {
          num = 0;
        }
        let num2;
        if (count_details != null) {
          num2 = count_details.normal;
        }
        if (num2 == null) {
          num2 = 0;
        }
        return num + num2;
      }));
    }
  }
  return false;
};
export const generateInAppNotificationId = function generateInAppNotificationId() {
  return v1.v4();
};
export const getMessagePreviewTextVariant = function getMessagePreviewTextVariant() {
  let str = "text-md/medium";
  if (obj.isIOS()) {
    str = "text-md/normal";
  }
  return str;
};
export const getNotificationDuration = function getNotificationDuration(ALERT) {
  if (constants3.MESSAGE !== ALERT) {
    if (tmp.MESSAGE_FAILED_TO_SEND !== ALERT) {
      if (tmp.FORUM_THREAD_CREATED !== ALERT) {
        if (tmp.BUG_REPORTER !== ALERT) {
          if (tmp.REACTION !== ALERT) {
            if (tmp.MESSAGE_REQUEST !== ALERT) {
              if (tmp.ALERT === ALERT) {
                return 30 * DurationsDefault.Millis.SECOND;
              } else {
                if (tmp.MESSAGE_REMINDER !== ALERT) {
                  if (tmp.RESTRICTED_HOURS_WARNING !== ALERT) {
                    if (tmp.RESTRICTED_SCHEDULE_UPDATED === ALERT) {
                      return 7 * DurationsDefault.Millis.SECOND;
                    }
                  }
                }
                return 10 * DurationsDefault.Millis.SECOND;
              }
            }
          }
        }
      }
    }
  }
  return 5 * DurationsDefault.Millis.SECOND;
};
export const useHasPreviewableMedia = function useHasPreviewableMedia(message) {
  const items = [message];
  return noop.useMemo(() => {
    let hasFlagResult = message.hasFlag(constants4.IS_VOICE_MESSAGE);
    if (!hasFlagResult) {
      hasFlagResult = tmp.attachments.length > 0;
    }
    if (!hasFlagResult) {
      let everyResult = tmp.embeds.length > 0;
      if (everyResult) {
        let embeds = tmp.embeds;
        everyResult = embeds.every((type) => type.type === constants.GIFV);
      }
      hasFlagResult = everyResult;
    }
    if (!hasFlagResult) {
      hasFlagResult = tmp.stickerItems.length > 0;
    }
    if (!hasFlagResult) {
      let someResult = isForwardMessageDefault(tmp);
      if (someResult) {
        const messageSnapshots = tmp.messageSnapshots;
        someResult = messageSnapshots.some((message) => {
          message = message.message;
          let hasFlagResult = message.hasFlag(constants.IS_VOICE_MESSAGE);
          if (!hasFlagResult) {
            hasFlagResult = message.attachments.length > 0;
          }
          if (!hasFlagResult) {
            let everyResult = message.embeds.length > 0;
            if (everyResult) {
              const embeds = message.embeds;
              everyResult = embeds.every((type) => type.type === constants.GIFV);
            }
            hasFlagResult = everyResult;
          }
          if (!hasFlagResult) {
            hasFlagResult = message.stickerItems.length > 0;
          }
          return hasFlagResult;
        });
      }
      hasFlagResult = someResult;
    }
    return hasFlagResult;
  }, items);
};
export const extractMetadataFromNotification = function extractMetadataFromNotification(notification) {
  let type = notification.type;
  if (constants3.MESSAGE !== type) {
    if (tmp.REACTION !== type) {
      if (tmp.ALERT === type) {
        const guild = notification.guild;
        let id;
        if (guild != null) {
          id = guild.id;
        }
        if (id == null) {
          const channel3 = notification.channel;
          let guild_id;
          if (channel3 != null) {
            guild_id = channel3.guild_id;
          }
          id = guild_id;
        }
        const channel4 = notification.channel;
        let id1;
        if (channel4 != null) {
          id1 = channel4.id;
        }
        const channel5 = notification.channel;
        type = undefined;
        if (channel5 != null) {
          type = channel5.type;
        }
        let tmp2 = type;
        let channelId = id1;
        let tmp4 = id;
      } else if (tmp.FORUM_THREAD_CREATED === type) {
        const thread = notification.thread;
        let guild_id1;
        if (thread != null) {
          guild_id1 = thread.guild_id;
        }
        const thread2 = notification.thread;
        let id2;
        if (thread2 != null) {
          id2 = thread2.id;
        }
        channelId = id2;
        tmp4 = guild_id1;
      } else if (tmp.MESSAGE_FAILED_TO_SEND === type) {
        channelId = notification.channelId;
      } else if (tmp.MESSAGE_REMINDER === type) {
        const channel9 = notification.channel;
        let guild_id2;
        if (channel9 != null) {
          guild_id2 = channel9.guild_id;
        }
        const channel = notification.channel;
        let id3;
        if (channel != null) {
          id3 = channel.id;
        }
        const channel2 = notification.channel;
        let type1;
        if (channel2 != null) {
          type1 = channel2.type;
        }
        tmp2 = type1;
        channelId = id3;
        tmp4 = guild_id2;
      }
    }
    const obj = { guildId: tmp4, channelId, messageId: id6, channelType: tmp2 };
    return obj;
  }
  const guild2 = notification.guild;
  let id4;
  if (guild2 != null) {
    id4 = guild2.id;
  }
  if (id4 == null) {
    const channel6 = notification.channel;
    let guild_id3;
    if (channel6 != null) {
      guild_id3 = channel6.guild_id;
    }
    id4 = guild_id3;
  }
  const channel7 = notification.channel;
  let id5;
  if (channel7 != null) {
    id5 = channel7.id;
  }
  const message = notification.message;
  id6 = undefined;
  if (message != null) {
    id6 = message.id;
  }
  const channel8 = notification.channel;
  let type2;
  if (channel8 != null) {
    type2 = channel8.type;
  }
  tmp2 = type2;
  channelId = id5;
  tmp4 = id4;
};
export const trackDismissed = function trackDismissed(arg0) {
  ({ guildId, channelId, type, dismissReason, inAppNotificationId, messageId } = arg0);
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, { type, guild_id: guildId, channel_id: channelId, dismiss_reason: dismissReason, in_app_notification_id: inAppNotificationId, message_id: messageId });
};