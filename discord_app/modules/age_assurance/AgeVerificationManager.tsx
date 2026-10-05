// === Module 17453: AgeVerificationManager ===

// Module 17453 (AgeVerificationManager)
import LoggerDefault from "Logger" /* 3 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1107 */;
import UserStore2 from "UserStore" /* 1377 */;
import Server from "Server" /* 1985 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5102 */;
import ChannelMessagesDefault from "ChannelMessages" /* 5431 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5581 */;
import Constants2 from "Constants" /* 8075 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8274 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

const UserStore = UserStore2;

let c9;
let metroImportAll;
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
            found = fields.find((rawName) => rawName.rawName === AgeVerificationUtils.AgeVerificationSystemNotificationEmbedKeys.CONTENT_TYPE);
          }
        }
      }
    }
    let rawValue;
    if (found != null) {
      rawValue = found.rawValue;
    }
    if (rawValue === AgeVerificationUtils.AgeVerificationSystemNotificationContentType.MANUAL_REVIEW_SUBMITTED) {
      const tmp4Result = ManualReviewActionCreators;
      const result = tmp4Result.invalidateAgeVerificationCaches();
    }
  }
}
const transformUser = UserStore2.transformUser;
({ ChannelTypes: metroImportAll, MAX_MESSAGES_PER_CHANNEL: c9 } = Constants);
const SafetyToastType = Constants2.SafetyToastType;
let tmp3 = new LoggerDefault("AgeVerificationManager");
let closure_10 = tmp3;
class AgeVerificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
      require._previousAgeVerificationStatus = prop;
    };
    applyArgumentsResult.handleCurrentUserUpdate = function handleCurrentUserUpdate(user) {
      let limit;
      function handleLoadChannelMessages(channelId) {
        const obj = closure_1_1(closure_1_2[10]);
        const obj2 = { channelId, limit };
        const messages = obj.fetchMessages(obj2);
      }
      function handleLoadForumPosts(arg0) {
        const channel = closure_1_3.getChannel(arg0);
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
          const obj = closure_1_0(closure_1_2[11]);
          obj.preloadForumThreads(channel);
        }
      }
      let channelId;
      let c1;
      let prop = transformUser(user.user).ageVerificationStatus;
      if (prop == null) {
        prop = null;
      }
      const tmp3 = require._previousAgeVerificationStatus !== prop;
      let isFeatureAgeGatedResult = tmp3 && prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
      if (isFeatureAgeGatedResult) {
        let obj = RegionalFeatureConfigUtils;
        isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
      }
      if (tmp3) {
        let obj2 = ManualReviewActionCreators;
        const result = obj2.invalidateManualReviewCache();
      }
      try {
        if (isFeatureAgeGatedResult) {
          channelId = SelectedChannelStore.getChannelId();
          c1 = false;
          const arr = ChannelMessagesDefault;
          const item = arr.forEach((channelId) => {
            channelId = channelId.channelId;
            const channel = closure_2_3.getChannel(channelId);
            let nsfw;
            if (channel != null) {
              nsfw = channel.nsfw;
            }
            if (nsfw) {
              const obj = closure_2_1(closure_2_2[16]);
              obj.clear(channelId);
              if (channelId === channelId) {
                c1 = true;
              }
            }
          });
          const tmp18 = c1 && null != tmp14;
          if (tmp18) {
            handleLoadChannelMessages(channelId);
            handleLoadForumPosts(channelId);
          }
        }
        require._previousAgeVerificationStatus = prop;
      } catch (tmp23) {
        require._previousAgeVerificationStatus = prop;
        throw tmp23;
      }
    };
    let obj = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate, MESSAGE_CREATE: handleMessageCreate };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const ageVerificationManager = new AgeVerificationManager();
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationManager.tsx");

export default ageVerificationManager;