// discord_app/modules/age_assurance/AgeVerificationManager.tsx
import LoggerDefault from "../debug/Logger.tsx";
import MessageEmbedTypes from "../../../discord_common/js/shared/shared-constants/MessageEmbedTypes.tsx";
import ChannelMessagesDefault from "../../lib/ChannelMessages.tsx";
import AgeVerificationUtils from "AgeVerificationUtils.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import ManualReviewActionCreators from "ManualReviewActionCreators.tsx";
import AgeVerificationSystemNotificationUtils from "AgeVerificationSystemNotificationUtils.tsx";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

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
            found = fields.find(
              (rawName) =>
                rawName.rawName ===
                AgeVerificationSystemNotificationUtils.AgeVerificationSystemNotificationEmbedKeys.CONTENT_TYPE,
            );
          }
        }
      }
    }
    let rawValue;
    if (found != null) {
      rawValue = found.rawValue;
    }
    if (
      rawValue ===
      AgeVerificationSystemNotificationUtils.AgeVerificationSystemNotificationContentType.MANUAL_REVIEW_SUBMITTED
    ) {
      const result = ManualReviewActionCreators.invalidateAgeVerificationCaches();
      const tmp4Result = ManualReviewActionCreators;
    }
  }
}
function handleLoadChannelMessages(channelId) {
  const messages = MessageActionCreatorsDefault.fetchMessages({ channelId, limit });
}
const transformUser = fn(1383).transformUser;
const Constants = fn(1072);
({ ChannelTypes: closure_9, MAX_MESSAGES_PER_CHANNEL: c10 } = Constants);
const SafetyToastType = fn(7490).SafetyToastType;
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
        const item = ChannelMessagesDefault.forEach((channelId) => closure_1_1(6563).clear(channelId.channelId));
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
              closure_1_0(7475).preloadForumThreads(channel);
              const obj = closure_1_0(7475);
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
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen,
    CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate,
    MESSAGE_CREATE: handleMessageCreate,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationManager.tsx");

export default prototype1;
