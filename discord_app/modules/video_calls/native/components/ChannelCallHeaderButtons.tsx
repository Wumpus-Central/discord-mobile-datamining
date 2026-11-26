// === Module 10551: ChannelCallHeaderButtons ===

// Module 10551 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5996 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6129 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 10011 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10329 */;
import _modDef10552 from "module_10552" /* 10552 */;
import _modDef10553 from "module_10553" /* 10553 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;

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
    obj2.source = _modDef10552;
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
      obj.source = _modDef10553;
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = ChannelCallNavigatorIconDefault;
    }
  }
  return tmp4;
}