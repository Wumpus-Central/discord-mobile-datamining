// === Module 12592: CameraButton ===

// Module 12592 (CameraButton)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef8666 from "module_8666" /* 8666 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 8674 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9654 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 12522 */;
import registerAssetDefault from "registerAsset" /* 12593 */;
import registerAssetDefault2 from "registerAsset" /* 12594 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = function CameraButton() {
  let obj = initialize;
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isVideoEnabled: store.isVideoEnabled(), videoDeviceId: store.getVideoDeviceId(), videoDevices: store.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["t9eQ/g"]);
    obj[1] = registerAssetDefault;
    obj[2] = function onPress() {
      const keys = Object.keys(closure_1);
      const found = keys.find((item, index) => item !== closure_0);
      if (null != found) {
        trackDeviceChangedDefault.setVideoDevice(found);
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
      const intl = channel(1236).intl;
      obj[0] = intl.string(channel(1236).t.HK4JIu);
      obj[1] = registerAssetDefault2;
      obj[2] = function onPress() {
        return _modDef8666.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = ChannelCallNavigatorIconDefault;
    }
  }
  return tmp4;
};