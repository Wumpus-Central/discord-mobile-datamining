// === Module 9718: ChannelCallHeaderButtons ===

// Module 9718 (ChannelCallHeaderButtons)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 9052 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9053 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9306 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9587 */;
import AssetRegistryDefault from "AssetRegistry" /* 9719 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9720 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isVideoEnabled;
  let tmp4;
  let tmp5;
  let videoDeviceId;
  let obj = videoDeviceId(576);
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function l() {
      const obj = { isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = videoDeviceId(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  ({ isVideoEnabled, videoDeviceId } = stateFromStoresObject);
  const videoDevices = stateFromStoresObject.videoDevices;
  if (cResult[2] === videoDeviceId) {
    let tmp8;
    if (cResult[3] === videoDevices) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp8) {
      let tmp9;
      if (cResult[6] === isVideoEnabled) {
        tmp9 = cResult[7];
      }
      return tmp9;
    }
    let tmp10 = null;
    if (isVideoEnabled) {
      videoDevices(9587);
      const intl = videoDeviceId(1126).intl;
      tmp10 = <tmp13 accessibilityLabel={intl.string(videoDeviceId(1126).t["t9eQ/g"])} source={videoDevices(9719)} onPress={tmp8} disableBackground />;
    }
    cResult[5] = tmp8;
    cResult[6] = isVideoEnabled;
    cResult[7] = tmp10;
    tmp9 = tmp10;
  }
  const fn2 = function o() {
    const keys = Object.keys(videoDevices);
    const found = keys.find((item) => item !== videoDeviceId);
    if (null != found) {
      const obj = AudioActionCreatorsDefault;
      obj.setVideoDevice(found);
    }
  };
  cResult[2] = videoDeviceId;
  cResult[3] = videoDevices;
  cResult[4] = fn2;
  tmp8 = fn2;
}) : (() => {
  let obj = get_initialized;
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() };
    return obj;
  });
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    ChannelCallNavigatorIconDefault;
    const intl = intl2.intl;
    tmp4 = <tmp7 accessibilityLabel={intl.string(intl2.t["t9eQ/g"])} source={AssetRegistryDefault} onPress={function onPress() {
      const keys = Object.keys(importDefault);
      const found = keys.find((item) => item !== closure_1_0);
      if (null != found) {
        const obj = AudioActionCreatorsDefault;
        obj.setVideoDevice(found);
      }
    }} disableBackground />;
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let obj = channel(576);
  const cResult = obj.c(4);
  channel = channel.channel;
  const tmp5 = useIsPrivateAudioOnlyCallDefault(channel);
  const tmp6 = useSelectedParticipantDefault(channel);
  if (cResult[0] === channel) {
    if (cResult[1] === tmp5) {
      let tmp7;
      if (cResult[2] === tmp6) {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  }
  let tmp8 = null;
  if (null != tmp6) {
    tmp8 = null;
    if (!tmp5) {
      ChannelCallNavigatorIconDefault;
      const intl = tmp(1126).intl;
      tmp8 = <tmp4Result accessibilityLabel={intl.string(channel(1126).t.HK4JIu)} source={AssetRegistryDefault2} onPress={function onPress() {
        const obj = ChannelRTCActionCreatorsDefault;
        return obj.selectParticipant(channel.id, null);
      }} disableBackground />;
    }
  }
  cResult[0] = channel;
  cResult[1] = tmp5;
  cResult[2] = tmp6;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((channel) => {
  channel = channel.channel;
  let tmp4 = null;
  const tmp3 = useIsPrivateAudioOnlyCallDefault(channel);
  if (null != useSelectedParticipantDefault(channel)) {
    tmp4 = null;
    if (!tmp3) {
      ChannelCallNavigatorIconDefault;
      const intl = channel(1126).intl;
      tmp4 = <tmpResult accessibilityLabel={intl.string(channel(1126).t.HK4JIu)} source={AssetRegistryDefault2} onPress={function onPress() {
        const obj = ChannelRTCActionCreatorsDefault;
        return obj.selectParticipant(channel.id, null);
      }} disableBackground />;
    }
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = tmp3;
export const GridButton = tmp4;