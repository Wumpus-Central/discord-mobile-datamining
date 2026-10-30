// === Module 19335: AgeVerificationManager ===

// Module 19335 (AgeVerificationManager)
import LoggerDefault from "Logger" /* 3 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1095 */;
import ChannelMessagesDefault from "ChannelMessages" /* 6557 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7629 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8164 */;
import AgeVerificationSystemNotificationUtils from "AgeVerificationSystemNotificationUtils" /* 13302 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6856 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import MessageStore from "MessageStore" /* 6056 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import UserStore from "UserStore" /* 1384 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;

require = fn;
function handleMessageCreate(channelId) {
  const message = MessageStore.getMessage(channelId.channelId, channelId.message.id);
  let type;
  if (message != null) {
    const embeds = message.embeds;
    if (embeds != null) {
      const first = embeds[0];
      if (first != null) {
        type = first.type;
      }
    }
  }
  if (type === MessageEmbedTypes.MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
    let found;
    if (message != null) {
      const embeds2 = message.embeds;
      if (embeds2 != null) {
        const first1 = embeds2[0];
        if (first1 != null) {
          const fields = first1.fields;
          if (fields != null) {
            found = fields.find((rawName) => rawName.rawName === AgeVerificationSystemNotificationUtils.AgeVerificationSystemNotificationEmbedKeys.CONTENT_TYPE);
          }
        }
      }
    }
    let rawValue;
    if (found != null) {
      rawValue = found.rawValue;
    }
    if (rawValue === AgeVerificationSystemNotificationUtils.AgeVerificationSystemNotificationContentType.MANUAL_REVIEW_SUBMITTED) {
      const result = ManualReviewActionCreators.invalidateAgeVerificationCaches();
      const tmp4Result = ManualReviewActionCreators;
    }
  }
}
function handleLoadChannelMessages(channelId) {
  const messages = MessageActionCreatorsDefault.fetchMessages({ channelId, limit });
}
const transformUser = fn(1384).transformUser;
const Constants = fn(1072);
({ ChannelTypes: closure_9, MAX_MESSAGES_PER_CHANNEL: c10 } = Constants);
const SafetyToastType = fn(7484).SafetyToastType;
let closure_11 = new LoggerDefault("AgeVerificationManager");
const prototype = function AgeVerificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._previousAgeVerificationStatus = null;
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    const currentUser = UserStore.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    if (prop == null) {
      prop = null;
    }
    applyArgumentsResult._previousAgeVerificationStatus = prop;
  };
  applyArgumentsResult.handleCurrentUserUpdate = function handleCurrentUserUpdate(user) {
    let prop = transformUser(user.user).ageVerificationStatus;
    if (prop == null) {
      prop = null;
    }
    let isAdultStatusResult = tmp5;
    if (applyArgumentsResult._previousAgeVerificationStatus !== prop) {
      isAdultStatusResult = AgeVerificationUtils.isAdultStatus(prop);
    }
    if (applyArgumentsResult._previousAgeVerificationStatus !== prop) {
      const result = ManualReviewActionCreators.invalidateManualReviewCache();
    }
    try {
      if (isAdultStatusResult) {
        const item = ChannelMessagesDefault.forEach((channelId) => closure_1_1(6557).clear(channelId.channelId));
        const channelId = SelectedChannelStore.getChannelId();
        if (null != channelId) {
          handleLoadChannelMessages(tmp17);
          (function handleLoadForumPosts(arg0) {
            channel = channel.getChannel(arg0);
            let type;
            if (channel != null) {
              type = channel.type;
            }
            let tmp4 = type !== constants.GUILD_FORUM;
            if (tmp4) {
              let type1;
              if (channel != null) {
                type1 = channel.type;
              }
              tmp4 = type1 !== tmp3.GUILD_MEDIA;
            }
            if (!tmp4) {
              closure_1_0(7469).preloadForumThreads(channel);
              const obj = closure_1_0(7469);
            }
          })(tmp17);
          const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(tmp17);
          if (null != currentSidebarChannelId) {
            handleLoadChannelMessages(currentSidebarChannelId);
          }
        }
      }
      applyArgumentsResult._previousAgeVerificationStatus = prop;
    } catch (tmp26) {
      tmp._previousAgeVerificationStatus = tmp2;
      throw tmp26;
    }
  };
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate, MESSAGE_CREATE: handleMessageCreate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationManager.tsx");

export default prototype1;