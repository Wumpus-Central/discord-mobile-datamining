// discord_app/modules/activities/utils/isVoiceEmbeddedActivity.tsx
import ChannelTypes from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

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
}
