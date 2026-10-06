// discord_app/modules/in_app_notifications/native/InAppNotificationUtils.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import react2 from "../../../../_runtime/00576_react.js";
import DurationsDefault from "../../../utils/Durations.tsx";
import v1 from "../../../../_runtime/01266_v1.js";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import AppAnalyticsUtilsDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import isForwardMessageDefault from "../../forwarding/isForwardMessage.tsx";
import InAppNotificationConstants from "InAppNotificationConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let count_details;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f112157 = (type) => type.type === constants.GIFV;
const REACTION_MILESTONE_COUNTS = InAppNotificationConstants.REACTION_MILESTONE_COUNTS;
({
  AnalyticEvents: hasOwnProperty,
  ChannelTypes: metroRequire,
  InAppNotificationTypes: metroImportDefault,
  MessageEmbedTypes: metroImportAll,
  MessageFlags: c9,
} = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasFlag) => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== hasFlag) {
        let hasFlagResult = hasFlag.hasFlag(constants4.IS_VOICE_MESSAGE);
        if (!hasFlagResult) {
          hasFlagResult = hasFlag.attachments.length > 0;
        }
        if (!hasFlagResult) {
          let everyResult = hasFlag.embeds.length > 0;
          if (everyResult) {
            let embeds = hasFlag.embeds;
            everyResult = embeds.every(f112157);
          }
          hasFlagResult = everyResult;
        }
        if (!hasFlagResult) {
          hasFlagResult = hasFlag.stickerItems.length > 0;
        }
        if (!hasFlagResult) {
          let someResult = isForwardMessageDefault(hasFlag);
          if (someResult) {
            const messageSnapshots = hasFlag.messageSnapshots;
            someResult = messageSnapshots.some((message) => {
              message = message.message;
              let hasFlagResult = message.hasFlag(constants.IS_VOICE_MESSAGE) || message.attachments.length > 0;
              if (!hasFlagResult) {
                let everyResult = message.embeds.length > 0;
                if (everyResult) {
                  const embeds = message.embeds;
                  everyResult = embeds.every(f112157);
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
        cResult[0] = hasFlag;
        cResult[1] = hasFlagResult;
        tmp3 = hasFlagResult;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      return react.useMemo(() => {
        let hasFlagResult = closure_0.hasFlag(constants.IS_VOICE_MESSAGE);
        if (!hasFlagResult) {
          hasFlagResult = closure_0.attachments.length > 0;
        }
        if (!hasFlagResult) {
          let everyResult = closure_0.embeds.length > 0;
          if (everyResult) {
            let embeds = closure_0.embeds;
            everyResult = embeds.every(f112157);
          }
          hasFlagResult = everyResult;
        }
        if (!hasFlagResult) {
          hasFlagResult = closure_0.stickerItems.length > 0;
        }
        if (!hasFlagResult) {
          let someResult = isForwardMessageDefault(closure_0);
          if (someResult) {
            const messageSnapshots = closure_0.messageSnapshots;
            someResult = messageSnapshots.some((message) => {
              message = message.message;
              let hasFlagResult = message.hasFlag(constants.IS_VOICE_MESSAGE) || message.attachments.length > 0;
              if (!hasFlagResult) {
                let everyResult = message.embeds.length > 0;
                if (everyResult) {
                  const embeds = message.embeds;
                  everyResult = embeds.every(f112157);
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
const result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationUtils.tsx");

export const isReactionMilestoneNotification = function isReactionMilestoneNotification(reactions, type) {
  if (null != type) {
    if (type !== metroRequire.GUILD_ANNOUNCEMENT) {
      const obj = _mod12;
      return REACTION_MILESTONE_COUNTS.has(
        obj.sumBy(reactions, (count_details) => {
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
        }),
      );
    }
  }
  return false;
};
export const generateInAppNotificationId = function generateInAppNotificationId() {
  const obj = v1;
  return obj.v4();
};
export const getMessagePreviewTextVariant = function getMessagePreviewTextVariant() {
  let str = "text-md/medium";
  const obj = utils_PlatformUtils;
  if (obj.isIOS()) {
    str = "text-md/normal";
  }
  return str;
};
export const getNotificationDuration = function getNotificationDuration(ALERT) {
  if (metroImportDefault.MESSAGE !== ALERT) {
    if (metroImportDefault.MESSAGE_FAILED_TO_SEND !== ALERT) {
      if (metroImportDefault.FORUM_THREAD_CREATED !== ALERT) {
        if (metroImportDefault.BUG_REPORTER !== ALERT) {
          if (metroImportDefault.REACTION !== ALERT) {
            if (metroImportDefault.MESSAGE_REQUEST !== ALERT) {
              if (metroImportDefault.ALERT === ALERT) {
                return 30 * DurationsDefault.Millis.SECOND;
              } else {
                if (metroImportDefault.MESSAGE_REMINDER !== ALERT) {
                  if (metroImportDefault.RESTRICTED_HOURS_WARNING !== ALERT) {
                    if (metroImportDefault.RESTRICTED_SCHEDULE_UPDATED === ALERT) {
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
export const useHasPreviewableMedia = tmp3;
export const extractMetadataFromNotification = function extractMetadataFromNotification(notification) {
  let tmp3;
  const type = notification.type;
  if (metroImportDefault.MESSAGE !== type) {
    let tmp2;
    let channelId;
    let tmp4;
    if (metroImportDefault.REACTION !== type) {
      if (metroImportDefault.ALERT === type) {
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
        let type1;
        if (channel5 != null) {
          type1 = channel5.type;
        }
        tmp2 = type1;
        channelId = id1;
        tmp4 = id;
      } else if (metroImportDefault.FORUM_THREAD_CREATED === type) {
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
      } else if (metroImportDefault.MESSAGE_FAILED_TO_SEND === type) {
        channelId = notification.channelId;
      } else if (metroImportDefault.MESSAGE_REMINDER === type) {
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
        let type2;
        if (channel2 != null) {
          type2 = channel2.type;
        }
        tmp2 = type2;
        channelId = id3;
        tmp4 = guild_id2;
      }
    }
    return { guildId: tmp4, channelId, messageId: tmp3, channelType: tmp2 };
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
  let id6;
  if (message != null) {
    id6 = message.id;
  }
  const channel8 = notification.channel;
  let type3;
  if (channel8 != null) {
    type3 = channel8.type;
  }
  tmp2 = type3;
  channelId = id5;
  tmp4 = id4;
  tmp3 = id6;
};
export const trackDismissed = function trackDismissed(arg0) {
  let channelId;
  let dismissReason;
  let guildId;
  let inAppNotificationId;
  let messageId;
  let type;
  ({ guildId, channelId, type, dismissReason, inAppNotificationId, messageId } = arg0);
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(hasOwnProperty.IN_APP_NOTIFICATION_DISMISSED, {
    type,
    guild_id: guildId,
    channel_id: channelId,
    dismiss_reason: dismissReason,
    in_app_notification_id: inAppNotificationId,
    message_id: messageId,
  });
};
