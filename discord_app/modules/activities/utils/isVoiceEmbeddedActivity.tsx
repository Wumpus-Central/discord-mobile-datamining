// === Module 9526: isVoiceEmbeddedActivity ===

// Module 9526 (isVoiceEmbeddedActivity)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/isVoiceEmbeddedActivity.tsx");

export default function isVoiceEmbeddedActivity(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ChannelStore;
  }
  const channel = obj.getChannel(arg0);
  let tmp3 = null != channel;
  if (tmp3) {
    let tmp6 = channel.type === ChannelTypes.ChannelTypes.GUILD_VOICE;
    if (!tmp6) {
      let isPrivateResult = channel.isPrivate();
      if (isPrivateResult) {
        let tmp8 = channel.id === tmp2;
        if (!tmp8) {
          const voiceStatesForChannel = VoiceStateStore.getVoiceStatesForChannel(channel.id);
          tmp8 = null != voiceStatesForChannel[AuthenticationStore.getId(AuthenticationStore)];
        }
        isPrivateResult = tmp8;
      }
      tmp6 = isPrivateResult;
    }
    tmp3 = tmp6;
  }
  return tmp3;
};