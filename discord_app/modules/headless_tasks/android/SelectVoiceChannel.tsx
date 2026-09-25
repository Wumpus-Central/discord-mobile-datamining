// === Module 17730: SelectVoiceChannel ===

// Module 17730 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4840 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5036 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5718 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17723 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4852 */;

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