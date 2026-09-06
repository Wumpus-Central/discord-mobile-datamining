// === Module 10034: ChannelCallHeaderButtons ===

// Module 10034 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9470 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9924 */;
import _modDef10035 from "module_10035" /* 10035 */;
import _modDef10036 from "module_10036" /* 10036 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = function CameraButton() {
  let obj = initialize;
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["t9eQ/g"]);
    obj.source = _modDef10035;
    obj.onPress = function onPress() {
      const keys = Object.keys(closure_1_1);
      const found = keys.find((item) => item !== closure_1_0);
      if (null != found) {
        AudioActionCreatorsDefault.setVideoDevice(found);
      }
    };
    tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
  }
  return tmp4;
};
export const GridButton = function GridButton(channel) {
  channel = channel.channel;
  let tmp4 = null;
  if (null != useSelectedParticipantDefault(channel)) {
    tmp4 = null;
    if (!tmp3) {
      const obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = channel(1114).intl;
      obj.accessibilityLabel = intl.string(channel(1114).t.HK4JIu);
      obj.source = _modDef10036;
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = ChannelCallNavigatorIconDefault;
    }
  }
  return tmp4;
};