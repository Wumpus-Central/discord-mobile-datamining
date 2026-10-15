// === Module 19040: SelectVoiceChannel ===

// Module 19040 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5162 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6105 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7698 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19033 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5169 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

export default (arg0) => {
  ({ channelId: require, connectToVoice: importDefault } = arg0);
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      if (closure_2_1) {
        const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(closure_2_0);
      }
      if (RTCConnectionStore.getChannelId() === closure_2_0) {
        const channel = ChannelStore.getChannel(closure_2_0);
        if (null != channel) {
          const result = PrivateChannelCallUtils.navigateToVoiceChannel(channel);
        }
      } else {
        transitionToChannel.transitionToChannel(closure_2_0);
      }
      closure_0(true);
    });
  });
};