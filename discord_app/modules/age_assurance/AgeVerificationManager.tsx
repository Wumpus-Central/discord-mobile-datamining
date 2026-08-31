// === Module 16854: handleMessageCreate ===

// Module 16854 (handleMessageCreate)
import timestampDefault from "timestamp" /* 3 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 693 */;
import initializeDefault from "initialize" /* 5454 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;
import closure_4 from "reinjectEphemerals" /* 4703 */;
import closure_5 from "handleConnectionOpen" /* 1981 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { transformUser } from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { SafetyToastType } from "SafetyToastType" /* 8638 */;

require = arg1;
function handleMessageCreate(channelId) {
  message = message.getMessage(channelId.channelId, channelId.message.id);
  const AGE_VERIFICATION_SYSTEM_NOTIFICATION = MessageEmbedTypes.MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
}
({ ChannelTypes: closure_8, MAX_MESSAGES_PER_CHANNEL: c9 } = ME);
let closure_10 = new timestampDefault("AgeVerificationManager");
initializeDefault;
let prototype = function AgeVerificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._previousAgeVerificationStatus = null;
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    const currentUser = closure_1_6.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    if (prop == null) {
      prop = null;
    }
    closure_0._previousAgeVerificationStatus = prop;
  };
  applyArgumentsResult.handleCurrentUserUpdate = function handleCurrentUserUpdate(user) {
    let channelId;
    c1 = undefined;
    let prop = closure_1_7(user.user).ageVerificationStatus;
    if (prop == null) {
      prop = null;
    }
    let isFeatureAgeGatedResult = tmp5;
    if (channelId._previousAgeVerificationStatus !== prop) {
      isFeatureAgeGatedResult = prop === applyArgumentsResult(closure_1_2[11]).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
    }
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = applyArgumentsResult(closure_1_2[12]).isFeatureAgeGated(applyArgumentsResult(closure_1_2[13]).AgeGatedFeature.AGE_GATED_SPACES);
      let obj = applyArgumentsResult(closure_1_2[12]);
    }
    if (channelId._previousAgeVerificationStatus !== prop) {
      const result = applyArgumentsResult(closure_1_2[14]).invalidateManualReviewCache();
      const obj2 = applyArgumentsResult(closure_1_2[14]);
    }
    try {
      if (isFeatureAgeGatedResult) {
        channelId = closure_1_5.getChannelId();
        c1 = false;
        const item = closure_1_1(closure_1_2[15]).forEach((channelId) => {
          channelId = channelId.channelId;
          const channel = closure_1_3.getChannel(channelId);
          let nsfw;
          if (channel != null) {
            nsfw = channel.nsfw;
          }
          if (nsfw) {
            callback(closure_1_2[15]).clear(channelId);
            if (channelId === channelId) {
              callback = true;
            }
            const obj = callback(closure_1_2[15]);
          }
        });
        let tmp20 = c1;
        if (c1) {
          tmp20 = null != tmp16;
        }
        if (tmp20) {
          (function handleLoadChannelMessages(channelId) {
            let obj = callback(7169);
            obj = { channelId, limit: closure_9 };
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
              channelId(6117).preloadForumThreads(channel);
              const obj = channelId(6117);
            }
          })(tmp16);
        }
        const arr = closure_1_1(closure_1_2[15]);
      }
      channelId._previousAgeVerificationStatus = prop;
    } catch (tmp25) {
      tmp._previousAgeVerificationStatus = tmp2;
      throw tmp25;
    }
  };
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate, MESSAGE_CREATE: handleMessageCreate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {
}
prototype = new prototype();
const tmp3 = new timestampDefault("AgeVerificationManager");
let result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationManager.tsx");

export default prototype;