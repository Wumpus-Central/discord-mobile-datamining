// discord_app/modules/video_calls/native/components/ChannelCallHeaderButtons.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import _modDef8666 from "../../../../actions/ChannelRTCActionCreators.tsx";
import useSelectedParticipantDefault from "../../useSelectedParticipant.tsx";
import trackDeviceChangedDefault from "../../../../actions/AudioActionCreators.tsx";
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon.tsx";
import registerAssetDefault from "../../../../../_runtime/12593_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/12594_registerAsset.js";
import _detectH265HardwareDecode from "../../../../stores/MediaEngineStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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