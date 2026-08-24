// discord_app/modules/age_assurance/AgeVerificationManager.tsx
import timestampDefault from "../debug/Logger.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import closure_4 from "../../stores/MessageStore.tsx";
import closure_5 from "../../stores/SelectedChannelStore.tsx";
import closure_6 from "../../stores/UserStore.tsx";
import { transformUser } from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { SafetyToastType } from "../safety_common/Constants.tsx";

let require = arg1;
function handleMessageCreate(channelId) {
  message = message.getMessage(channelId.channelId, channelId.message.id);
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
    let isFeatureAgeGatedResult = channelId._previousAgeVerificationStatus !== prop;
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = prop === applyArgumentsResult(closure_1_2[10]).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
    }
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = applyArgumentsResult(closure_1_2[11]).isFeatureAgeGated(applyArgumentsResult(closure_1_2[12]).AgeGatedFeature.AGE_GATED_SPACES);
      let obj = applyArgumentsResult(closure_1_2[11]);
    }
    try {
      if (isFeatureAgeGatedResult) {
        channelId = closure_1_5.getChannelId();
        c1 = false;
        const item = closure_1_1(closure_1_2[13]).forEach((channelId) => {
          channelId = channelId.channelId;
          const channel = closure_1_3.getChannel(channelId);
          let nsfw;
          if (channel != null) {
            nsfw = channel.nsfw;
          }
          if (nsfw) {
            callback(closure_1_2[13]).clear(channelId);
            if (channelId === channelId) {
              callback = true;
            }
            const obj = callback(closure_1_2[13]);
          }
        });
        let tmp16 = c1;
        if (c1) {
          tmp16 = null != tmp12;
        }
        if (tmp16) {
          (function handleLoadChannelMessages(channelId) {
            let obj = callback(7465);
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
              channelId(7307).preloadForumThreads(channel);
              const obj = channelId(7307);
            }
          })(tmp12);
        }
        const arr = closure_1_1(closure_1_2[13]);
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
const tmp3 = new timestampDefault("AgeVerificationManager");
const result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationManager.tsx");

export default prototype;