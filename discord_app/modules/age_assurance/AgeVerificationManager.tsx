// discord_app/modules/age_assurance/AgeVerificationManager.tsx
import LoggerDefault from "../debug/Logger.tsx";
import MessageEmbedTypes from "../../../discord_common/js/shared/shared-constants/MessageEmbedTypes.tsx";
import Server from "../../flow/Server.tsx";
import ChannelMessagesDefault from "../../lib/ChannelMessages.tsx";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeGatedFeature from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import ManualReviewActionCreators from "ManualReviewActionCreators.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleMessageCreate(channelId) {
  const message = MessageStore.getMessage(channelId.channelId, channelId.message.id);
  const AGE_VERIFICATION_SYSTEM_NOTIFICATION = MessageEmbedTypes.MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
}
const transformUser = fn(1371).transformUser;
const Constants = fn(1074);
({ ChannelTypes: closure_8, MAX_MESSAGES_PER_CHANNEL: closure_9 } = Constants);
const SafetyToastType = fn(8399).SafetyToastType;
let closure_10 = new LoggerDefault("AgeVerificationManager");
let prototype = function AgeVerificationManager() {
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
    let channelId;
    c1 = undefined;
    let prop = transformUser(user.user).ageVerificationStatus;
    if (prop == null) {
      prop = null;
    }
    let isFeatureAgeGatedResult = tmp5;
    if (applyArgumentsResult._previousAgeVerificationStatus !== prop) {
      isFeatureAgeGatedResult = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
    }
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(
        AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES,
      );
    }
    if (applyArgumentsResult._previousAgeVerificationStatus !== prop) {
      const result = ManualReviewActionCreators.invalidateManualReviewCache();
    }
    try {
      if (isFeatureAgeGatedResult) {
        channelId = SelectedChannelStore.getChannelId();
        c1 = false;
        const item = ChannelMessagesDefault.forEach((channelId) => {
          channelId = channelId.channelId;
          channel = channel.getChannel(channelId);
          let nsfw;
          if (channel != null) {
            nsfw = channel.nsfw;
          }
          if (nsfw) {
            ChannelMessagesDefault.clear(channelId);
            if (channelId === channelId) {
              c1 = true;
            }
          }
        });
        let tmp20 = c1;
        if (c1) {
          tmp20 = null != tmp16;
        }
        if (tmp20) {
          (function handleLoadChannelMessages(channelId) {
            _true(7456);
            const obj = { channelId, limit };
            const messages = obj.fetchMessages(obj);
          })(tmp16);
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
              channelId(7304).preloadForumThreads(channel);
              const obj = channelId(7304);
            }
          })(tmp16);
        }
      }
      applyArgumentsResult._previousAgeVerificationStatus = prop;
    } catch (tmp25) {
      tmp._previousAgeVerificationStatus = tmp2;
      throw tmp25;
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
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationManager.tsx");

export default prototype;
