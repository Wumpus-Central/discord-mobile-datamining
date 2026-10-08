// === Module 10934: ChannelCallHeaderButtons ===

// Module 10934 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1126 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5104 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5241 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 10335 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 10336 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10793 */;
import _modDef10935 from "module_10935" /* 10935 */;
import _modDef10936 from "module_10936" /* 10936 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;

require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CameraButton() {
  const cResult = videoDeviceId(576).c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function s() {
      return { isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = videoDeviceId(576);
  const stateFromStoresObject = videoDeviceId(504).useStateFromStoresObject(tmp4, tmp5);
  ({ isVideoEnabled, videoDeviceId } = stateFromStoresObject);
  const videoDevices = stateFromStoresObject.videoDevices;
  if (cResult[2] === videoDeviceId) {
    if (cResult[3] === videoDevices) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp8) {
      if (cResult[6] === isVideoEnabled) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
    let tmp10 = null;
    if (isVideoEnabled) {
      const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = videoDeviceId(1126).intl;
      obj2.accessibilityLabel = intl.string(videoDeviceId(1126).t["t9eQ/g"]);
      obj2.source = videoDevices(10935);
      obj2.onPress = tmp8;
      tmp10 = jsx(videoDevices(10793), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmp13 = videoDevices(10793);
    }
    cResult[5] = tmp8;
    cResult[6] = isVideoEnabled;
    cResult[7] = tmp10;
    tmp9 = tmp10;
  }
  function handleCamera() {
    const keys = Object.keys(videoDevices);
    const found = keys.find((item) => item !== videoDeviceId);
    if (null != found) {
      AudioActionCreatorsDefault.setVideoDevice(found);
    }
  }
  cResult[2] = videoDeviceId;
  cResult[3] = videoDevices;
  cResult[4] = handleCamera;
  tmp8 = handleCamera;
  const tmpResult = videoDeviceId(504);
}) : (function CameraButton() {
  const items = [MediaEngineStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["t9eQ/g"]);
    obj2.source = _modDef10935;
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = tmp3;
export const GridButton = ReactCompilerGating.isReactCompilerEnabled() ? (function GridButton(channel) {
  const cResult = channel(576).c(4);
  channel = channel.channel;
  const tmp5 = useIsPrivateAudioOnlyCallDefault(channel);
  const tmp6 = useSelectedParticipantDefault(channel);
  if (cResult[0] === channel) {
    if (cResult[1] === tmp5) {
      if (cResult[2] === tmp6) {
        let tmp7 = cResult[3];
      }
      return tmp7;
    }
  }
  let tmp8 = null;
  if (null != tmp6) {
    tmp8 = null;
    if (!tmp5) {
      const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = tmp(1126).intl;
      obj2.accessibilityLabel = intl.string(tmp(1126).t.HK4JIu);
      obj2.source = _modDef10936;
      obj2.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp8 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmp4Result = ChannelCallNavigatorIconDefault;
    }
  }
  cResult[0] = channel;
  cResult[1] = tmp5;
  cResult[2] = tmp6;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const obj = channel(576);
}) : (function GridButton(channel) {
  channel = channel.channel;
  let tmp4 = null;
  if (null != useSelectedParticipantDefault(channel)) {
    tmp4 = null;
    if (!tmp3) {
      const obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = channel(1126).intl;
      obj.accessibilityLabel = intl.string(channel(1126).t.HK4JIu);
      obj.source = _modDef10936;
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = ChannelCallNavigatorIconDefault;
    }
  }
  return tmp4;
});