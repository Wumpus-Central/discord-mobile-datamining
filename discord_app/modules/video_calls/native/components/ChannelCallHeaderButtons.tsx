// === Module 10506: ChannelCallHeaderButtons ===

// Module 10506 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5965 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6098 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9969 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10287 */;
import _modDef10507 from "module_10507" /* 10507 */;
import _modDef10508 from "module_10508" /* 10508 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export function CameraButton() {
  items = [MediaEngineStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["t9eQ/g"]);
    obj2.source = _modDef10507;
    obj2.onPress = function handleCamera() {
      const keys = Object.keys(closure_1_1);
      const found = keys.find((item) => item !== closure_1_0);
      if (null != found) {
        AudioActionCreatorsDefault.setVideoDevice(found);
      }
    };
    tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
  }
  return tmp4;
}
export function GridButton(channel) {
  channel = channel.channel;
  let tmp4 = null;
  if (null != useSelectedParticipantDefault(channel)) {
    tmp4 = null;
    if (!tmp3) {
      const obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = channel(1112).intl;
      obj.accessibilityLabel = intl.string(channel(1112).t.HK4JIu);
      obj.source = _modDef10508;
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = ChannelCallNavigatorIconDefault;
    }
  }
  return tmp4;
}