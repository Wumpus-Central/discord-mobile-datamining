// discord_app/modules/headless_tasks/android/SelectVoiceChannel.tsx
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import _modDef4975 from "../../../actions/SelectedChannelActionCreators.tsx";
import openChannelCallModal from "../../../utils/native/PrivateChannelCallUtils.tsx";
import _modDef17148 from "../HeadlessTaskUtils.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

export default (arg0) => {
  ({ channelId: require, connectToVoice: importDefault } = arg0);
  return new Promise((arg0) => {
    closure_0 = arg0;
    _modDef17148.awaitStorage(() => {
      if (closure_1_1) {
        const voiceChannel = _modDef4975.selectVoiceChannel(callback);
      }
      if (closure_2_4.getChannelId() === callback) {
        const channel = closure_2_3.getChannel(callback);
        if (null != channel) {
          const result = openChannelCallModal.navigateToVoiceChannel(channel);
        }
      } else {
        transitionToChannel.transitionToChannel(callback);
      }
      callback(true);
    });
  });
};