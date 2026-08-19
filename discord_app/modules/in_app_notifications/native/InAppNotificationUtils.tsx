// discord_app/modules/in_app_notifications/native/InAppNotificationUtils.tsx
import apply from "../../../../_runtime/00012_apply.js";
import v1 from "../../../../_runtime/00514_v1.js";
import obj132Default from "../../../utils/Durations.tsx";
import isForwardMessageDefault from "../../forwarding/isForwardMessage.tsx";
import collectGuildAnalyticsMetadataDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { REACTION_MILESTONE_COUNTS } from "InAppNotificationConstants.tsx";
import ME from "../../../Constants.tsx";

require = fn;
({ AnalyticEvents: c5, ChannelTypes: closure_6, InAppNotificationTypes: error, MessageEmbedTypes: closure_8, MessageFlags: c9 } = ME);
const result = require("obj132").fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationUtils.tsx");

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
    if (constants3.MESSAGE_FAILED_TO_SEND !== ALERT) {
      if (constants3.FORUM_THREAD_CREATED !== ALERT) {
        if (constants3.BUG_REPORTER !== ALERT) {
          if (constants3.REACTION !== ALERT) {
            if (constants3.MESSAGE_REQUEST !== ALERT) {
              if (constants3.ALERT === ALERT) {
                return 30 * obj132Default.Millis.SECOND;
              } else {
                if (constants3.MESSAGE_REMINDER !== ALERT) {
                  if (constants3.RESTRICTED_HOURS_WARNING !== ALERT) {
                    if (constants3.RESTRICTED_SCHEDULE_UPDATED === ALERT) {
                      return 7 * obj132Default.Millis.SECOND;
                    }
                  }
                }
                return 10 * obj132Default.Millis.SECOND;
              }
            }
          }
        }
      }
    }
  }
  return 5 * obj132Default.Millis.SECOND;
};
export const useHasPreviewableMedia = function useHasPreviewableMedia(message) {
  closure_0 = message;
  const items = [message];
  return React.useMemo(() => {
    let hasFlagResult = message.hasFlag(closure_1_9.IS_VOICE_MESSAGE);
    if (!hasFlagResult) {
      hasFlagResult = message.attachments.length > 0;
    }
    if (!hasFlagResult) {
      let everyResult = message.embeds.length > 0;
      if (everyResult) {
        let embeds = message.embeds;
        everyResult = embeds.every((item, index) => item.type === constants.GIFV);
      }
      hasFlagResult = everyResult;
    }
    if (!hasFlagResult) {
      hasFlagResult = message.stickerItems.length > 0;
    }
    if (!hasFlagResult) {
      let someResult = isForwardMessageDefault(message);
      if (someResult) {
        const messageSnapshots = message.messageSnapshots;
        someResult = messageSnapshots.some((item, index) => {
          message = item.message;
          let hasFlagResult = message.hasFlag(constants.IS_VOICE_MESSAGE);
          if (!hasFlagResult) {
            hasFlagResult = message.attachments.length > 0;
          }
          if (!hasFlagResult) {
            let everyResult = message.embeds.length > 0;
            if (everyResult) {
              const embeds = message.embeds;
              everyResult = embeds.every((item, index) => item.type === constants.GIFV);
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
    if (constants3.REACTION !== type) {
      if (constants3.ALERT === type) {
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
      } else if (constants3.FORUM_THREAD_CREATED === type) {
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
      } else if (constants3.MESSAGE_FAILED_TO_SEND === type) {
        channelId = closure_21.channelId;
      } else if (constants3.MESSAGE_REMINDER === type) {
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
    obj[2] = tmp3;
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
  let id6;
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
  tmp3 = id6;
};
export const trackDismissed = function trackDismissed(arg0) {
  ({ guildId, channelId, type, dismissReason, inAppNotificationId, messageId } = arg0);
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, { type, guild_id: guildId, channel_id: channelId, dismiss_reason: dismissReason, in_app_notification_id: inAppNotificationId, message_id: messageId });
};