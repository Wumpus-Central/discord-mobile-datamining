// discord_app/modules/video_calls/native/components/ChannelCallHeaderButtons.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useSelectedParticipantDefault from "../../useSelectedParticipant.tsx";
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon.tsx";
import registerAssetDefault from "../../../../../_runtime/11003_registerAsset.js";
import closure_3 from "../../../../stores/MediaEngineStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t["t9eQ/g"]);
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
      const intl = channel(1236).intl;
      obj[0] = intl.string(channel(1236).t.HK4JIu);
      obj[1] = tmp(11004);
      obj[2] = function onPress() {
        return closure_1_1(closure_1_2[11]).selectParticipant(channel.id, null);
      };
      tmp4 = jsx(tmp(10889), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = tmp(10889);
    }
  }
  return tmp4;
};