// discord_app/modules/activities/utils/isVoiceEmbeddedActivity.tsx
import set from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import closure_2 from "../../../stores/AuthenticationStore.tsx";
import closure_3 from "../../../stores/ChannelStore.tsx";
import closure_4 from "../../../stores/SelectedChannelStore.tsx";
import closure_5 from "../../../stores/VoiceStateStore.tsx";

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
}
