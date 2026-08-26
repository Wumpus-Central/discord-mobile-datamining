// === Module 10543: isVoiceEmbeddedActivity ===

// Module 10543 (isVoiceEmbeddedActivity)
import set from "set" /* 692 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "handleConnectionOpen" /* 1981 */;
import closure_5 from "updateVoiceState" /* 4463 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/isVoiceEmbeddedActivity.tsx");

export default function isVoiceEmbeddedActivity(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_3;
  }
  const channel = obj.getChannel(arg0);
  let tmp3 = null != channel;
  if (tmp3) {
    let tmp6 = channel.type === set.ChannelTypes.GUILD_VOICE;
    if (!tmp6) {
      let isPrivateResult = channel.isPrivate();
      if (isPrivateResult) {
        let tmp8 = channel.id === tmp2;
        if (!tmp8) {
          voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(channel.id);
          tmp8 = null != voiceStatesForChannel[id.getId(id)];
        }
        isPrivateResult = tmp8;
      }
      tmp6 = isPrivateResult;
    }
    tmp3 = tmp6;
  }
  return tmp3;
};