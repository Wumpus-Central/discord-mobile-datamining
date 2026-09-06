// === Module 10034: CameraButton ===

// Module 10034 (CameraButton)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9470 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9924 */;
import registerAssetDefault from "registerAsset" /* 10035 */;
import closure_3 from "_detectH265HardwareDecode" /* 1908 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = function CameraButton() {
  let obj = initialize;
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isVideoEnabled: store.isVideoEnabled(), videoDeviceId: store.getVideoDeviceId(), videoDevices: store.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = tmp(1114).intl;
    obj[0] = intl.string(tmp(1114).t["t9eQ/g"]);
    obj[1] = registerAssetDefault;
    obj[2] = function onPress() {
      const keys = Object.keys(closure_1);
      const found = keys.find((arg0) => arg0 !== closure_0);
      if (null != found) {
        closure_1_1(closure_1_2[7]).setVideoDevice(found);
        const obj = closure_1_1(closure_1_2[7]);
      }
    };
    tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
    const tmp7 = ChannelCallNavigatorIconDefault;
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
      obj[0] = intl.string(channel(1114).t.HK4JIu);
      obj[1] = tmp(10036);
      obj[2] = function onPress() {
        return closure_1_1(closure_1_2[11]).selectParticipant(channel.id, null);
      };
      tmp4 = jsx(tmp(9924), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = tmp(9924);
    }
  }
  return tmp4;
};