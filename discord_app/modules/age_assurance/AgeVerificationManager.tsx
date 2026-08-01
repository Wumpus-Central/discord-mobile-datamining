// === Module 16153: handleMessageCreate ===

// Module 16153 (handleMessageCreate)
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import { transformUser } from "mergeGuildAvatar";
import ME from "ME";
import { SafetyToastType } from "SafetyToastType";
import "initialize";

let c9;
let metroImportAll;
let require = arg1;
function handleMessageCreate(channelId) {
  message = message.getMessage(channelId.channelId, channelId.message.id);
}
({ ChannelTypes: metroImportAll, MAX_MESSAGES_PER_CHANNEL: c9 } = ME);
let c10 = new require("mergeGuildAvatar")("AgeVerificationManager");
let prototype = function AgeVerificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult._previousAgeVerificationStatus = null;
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    const currentUser = outer1_6.getCurrentUser();
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
    let c1;
    let prop = outer1_7(user.user).ageVerificationStatus;
    if (prop == null) {
      prop = null;
    }
    let isFeatureAgeGatedResult = channelId._previousAgeVerificationStatus !== prop;
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = prop === applyArgumentsResult(outer1_2[10]).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
    }
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = applyArgumentsResult(outer1_2[11]).isFeatureAgeGated(applyArgumentsResult(outer1_2[12]).AgeGatedFeature.AGE_GATED_SPACES);
      let obj = applyArgumentsResult(outer1_2[11]);
    }
    try {
      if (isFeatureAgeGatedResult) {
        channelId = outer1_5.getChannelId();
        c1 = false;
        const item = outer1_1(outer1_2[13]).forEach((channelId) => {
          channelId = channelId.channelId;
          const channel = outer1_3.getChannel(channelId);
          let nsfw;
          if (channel != null) {
            nsfw = channel.nsfw;
          }
          if (nsfw) {
            callback(outer1_2[13]).clear(channelId);
            if (channelId === channelId) {
              callback = true;
            }
            const obj = callback(outer1_2[13]);
          }
        });
        let tmp16 = c1;
        if (c1) {
          tmp16 = null != tmp12;
        }
        if (tmp16) {
          (function handleLoadChannelMessages(channelId) {
            let obj = callback(5718);
            obj = { channelId, limit: closure_9 };
            const messages = obj.fetchMessages(obj);
          })(tmp12);
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
              channelId(6068).preloadForumThreads(channel);
              const obj = channelId(6068);
            }
          })(tmp12);
        }
        const arr = outer1_1(outer1_2[13]);
      }
      channelId._previousAgeVerificationStatus = prop;
    } catch (tmp21) {
      tmp._previousAgeVerificationStatus = tmp2;
      throw tmp21;
    }
  };
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate, MESSAGE_CREATE: handleMessageCreate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {
}
prototype = new prototype();
const tmp3 = new require("mergeGuildAvatar")("AgeVerificationManager");
const result = require("handleConnectionOpen").fileFinishedImporting("modules/age_assurance/AgeVerificationManager.tsx");

export default prototype;