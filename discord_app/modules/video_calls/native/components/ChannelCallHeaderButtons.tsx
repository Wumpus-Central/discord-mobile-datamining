// discord_app/modules/video_calls/native/components/ChannelCallHeaderButtons.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import useSelectedParticipantDefault from "../../useSelectedParticipant.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon.tsx";
import _modDef10292 from "../../../../../_runtime/metro/10292__.js";
import _modDef10293 from "../../../../../_runtime/metro/10293__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = function CameraButton() {
  const items = [MediaEngineStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({
    isVideoEnabled: MediaEngineStore.isVideoEnabled(),
    videoDeviceId: MediaEngineStore.getVideoDeviceId(),
    videoDevices: MediaEngineStore.getVideoDevices(),
  }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["t9eQ/g"]);
    obj2.source = _modDef10292;
    obj2.onPress = function onPress() {
      const keys = Object.keys(closure_1_1);
      const found = keys.find((item) => item !== closure_1_0);
      if (null != found) {
        AudioActionCreatorsDefault.setVideoDevice(found);
      }
    };
    tmp4 = jsx(ChannelCallNavigatorIconDefault, {
      accessibilityLabel: null,
      source: null,
      onPress: null,
      disableBackground: true,
    });
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
      const intl = channel(1115).intl;
      obj.accessibilityLabel = intl.string(channel(1115).t.HK4JIu);
      obj.source = _modDef10293;
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(ChannelCallNavigatorIconDefault, {
        accessibilityLabel: null,
        source: null,
        onPress: null,
        disableBackground: true,
      });
      const tmpResult = ChannelCallNavigatorIconDefault;
    }
  }
  return tmp4;
};
