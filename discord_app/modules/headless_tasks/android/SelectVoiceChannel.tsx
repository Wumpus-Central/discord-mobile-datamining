// === Module 17975: SelectVoiceChannel ===

// Module 17975 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4585 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4781 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5425 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17968 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4597 */;

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