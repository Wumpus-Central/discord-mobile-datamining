// discord_app/modules/video_calls/native/components/ChannelCallHeaderButtons.tsx
import "noop";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../_runtime/10849_registerAsset.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useSelectedParticipant } from "../../useSelectedParticipant.tsx";
import { ChannelCallNavigatorIcon } from "ChannelCallNavigatorIcon.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = function CameraButton() {
  let importDefault;
  let require;
  let obj = initialize;
  const items = [_detectH265HardwareDecode];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isVideoEnabled: store.isVideoEnabled(), videoDeviceId: store.getVideoDeviceId(), videoDevices: store.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t["t9eQ/g"]);
    obj[1] = registerAsset;
    obj[2] = function onPress() {
      const keys = Object.keys(closure_1);
      const found = keys.find((arg0) => arg0 !== closure_0);
      if (null != found) {
        outer1_1(outer1_2[7]).setVideoDevice(found);
        const obj = outer1_1(outer1_2[7]);
      }
    };
    tmp4 = jsx(ChannelCallNavigatorIcon, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
    const tmp7 = ChannelCallNavigatorIcon;
  }
  return tmp4;
};
export const GridButton = function GridButton(channel) {
  channel = channel.channel;
  let tmp4 = null;
  if (null != useSelectedParticipant(channel)) {
    tmp4 = null;
    if (!tmp3) {
      const obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = channel(1236).intl;
      obj[0] = intl.string(channel(1236).t.HK4JIu);
      obj[1] = tmp(10850);
      obj[2] = function onPress() {
        return outer1_1(outer1_2[11]).selectParticipant(channel.id, null);
      };
      tmp4 = jsx(tmp(10735), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = tmp(10735);
    }
  }
  return tmp4;
};