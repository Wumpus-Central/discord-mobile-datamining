// discord_app/modules/activities/utils/isVoiceEmbeddedActivity.tsx
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import updateVoiceState from "updateVoiceState";
import { set } from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";

const require = arg1;
const result = require("handleConnectionOpen").fileFinishedImporting("modules/activities/utils/isVoiceEmbeddedActivity.tsx");

export default function isVoiceEmbeddedActivity(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ensureGuildLoaded;
  }
  const channel = obj.getChannel(arg0);
  let tmp3 = null != channel;
  if (tmp3) {
    let tmp6 = channel.type === set /* set */.ChannelTypes.GUILD_VOICE;
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