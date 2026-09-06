// === Module 10094: isReactionMilestoneNotification ===

// Module 10094 (isReactionMilestoneNotification)
import apply from "apply" /* 12 */;
import setDefault from "set" /* 1090 */;
import v1 from "v1" /* 1256 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 4740 */;
import closure_3 from "noop" /* 19 */;
import { REACTION_MILESTONE_COUNTS } from "set" /* 10095 */;
import ME from "ME" /* 1074 */;

require = arg1;
({ AnalyticEvents: c5, ChannelTypes: closure_6, InAppNotificationTypes: error, MessageEmbedTypes: closure_8, MessageFlags: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationUtils.tsx");

export const isReactionMilestoneNotification = function isReactionMilestoneNotification(reactions, type) {
  if (null != type) {
    if (type !== constants2.GUILD_ANNOUNCEMENT) {
      return REACTION_MILESTONE_COUNTS.has(apply.sumBy(reactions, (count_details) => {
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
                return 30 * setDefault.Millis.SECOND;
              } else {
                if (tmp.MESSAGE_REMINDER !== ALERT) {
                  if (tmp.RESTRICTED_HOURS_WARNING !== ALERT) {
                    if (tmp.RESTRICTED_SCHEDULE_UPDATED === ALERT) {
                      return 7 * setDefault.Millis.SECOND;
                    }
                  }
                }
                return 10 * setDefault.Millis.SECOND;
              }
            }
          }
        }
      }
    }
  }
  return 5 * setDefault.Millis.SECOND;
};
export const useHasPreviewableMedia = function useHasPreviewableMedia(message) {
  closure_0 = message;
  const items = [message];
  return React.useMemo(() => {
    let hasFlagResult = message.hasFlag(closure_1_9.IS_VOICE_MESSAGE);
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
      let someResult = closure_1_1(closure_1_2[7])(tmp);
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
export const extractMetadataFromNotification = function extractMetadataFromNotification(closure_21) {
  let type = closure_21.type;
  if (constants3.MESSAGE !== type) {
    if (tmp.REACTION !== type) {
      if (tmp.ALERT === type) {
        const guild = closure_21.guild;
        let id;
        if (guild != null) {
          id = guild.id;
        }
        if (id == null) {
          const channel3 = closure_21.channel;
          let guild_id;
          if (channel3 != null) {
            guild_id = channel3.guild_id;
          }
          id = guild_id;
        }
        const channel4 = closure_21.channel;
        let id1;
        if (channel4 != null) {
          id1 = channel4.id;
        }
        const channel5 = closure_21.channel;
        type = undefined;
        if (channel5 != null) {
          type = channel5.type;
        }
        let tmp2 = type;
        let channelId = id1;
        let tmp4 = id;
      } else if (tmp.FORUM_THREAD_CREATED === type) {
        const thread = closure_21.thread;
        let guild_id1;
        if (thread != null) {
          guild_id1 = thread.guild_id;
        }
        const thread2 = closure_21.thread;
        let id2;
        if (thread2 != null) {
          id2 = thread2.id;
        }
        channelId = id2;
        tmp4 = guild_id1;
      } else if (tmp.MESSAGE_FAILED_TO_SEND === type) {
        channelId = closure_21.channelId;
      } else if (tmp.MESSAGE_REMINDER === type) {
        const channel9 = closure_21.channel;
        let guild_id2;
        if (channel9 != null) {
          guild_id2 = channel9.guild_id;
        }
        const channel = closure_21.channel;
        let id3;
        if (channel != null) {
          id3 = channel.id;
        }
        const channel2 = closure_21.channel;
        let type1;
        if (channel2 != null) {
          type1 = channel2.type;
        }
        tmp2 = type1;
        channelId = id3;
        tmp4 = guild_id2;
      }
    }
    const obj = { guildId: null, channelId: null, messageId: null, channelType: null };
    obj[0] = tmp4;
    obj[1] = channelId;
    obj[2] = id6;
    obj[3] = tmp2;
    return obj;
  }
  const guild2 = closure_21.guild;
  let id4;
  if (guild2 != null) {
    id4 = guild2.id;
  }
  if (id4 == null) {
    const channel6 = closure_21.channel;
    let guild_id3;
    if (channel6 != null) {
      guild_id3 = channel6.guild_id;
    }
    id4 = guild_id3;
  }
  const channel7 = closure_21.channel;
  let id5;
  if (channel7 != null) {
    id5 = channel7.id;
  }
  const message = closure_21.message;
  id6 = undefined;
  if (message != null) {
    id6 = message.id;
  }
  const channel8 = closure_21.channel;
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
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, { type, guild_id: guildId, channel_id: channelId, dismiss_reason: dismissReason, in_app_notification_id: inAppNotificationId, message_id: messageId });
};