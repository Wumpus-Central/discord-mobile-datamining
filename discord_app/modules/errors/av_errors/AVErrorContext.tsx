// discord_app/modules/errors/av_errors/AVErrorContext.tsx
import StreamKeyUtils from "../../go_live/utils/StreamKeyUtils.tsx";
import BaseConnectionEvent from "../../../../discord_common/js/packages/media-engine/index.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import StreamRTCConnectionStore from "../../../stores/StreamRTCConnectionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/AVErrorContext.tsx");

export const getVoiceChannelErrorContext = function getVoiceChannelErrorContext() {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let obj = { channelId: voiceChannelId, mediaSessionId: null, rtcConnectionId: null, mediaContext: null };
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  obj.mediaSessionId = mediaSessionId;
  obj.rtcConnectionId = RTCConnectionStore.getRTCConnectionId();
  obj.mediaContext = BaseConnectionEvent.MediaEngineContextTypes.DEFAULT;
  const videoDevices = MediaEngineStore.getVideoDevices();
  const tmp4 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
  let name;
  if (tmp4 != null) {
    name = tmp4.name;
  }
  obj = { videoDeviceName: name, audioInputDeviceName: null, audioOutputDeviceName: null };
  const inputDevices = obj3.getInputDevices();
  const tmp7 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
  let name1;
  if (tmp7 != null) {
    name1 = tmp7.name;
  }
  obj.audioInputDeviceName = name1;
  const outputDevices = obj3.getOutputDevices();
  const tmp10 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
  let name2;
  if (tmp10 != null) {
    name2 = tmp10.name;
  }
  obj.audioOutputDeviceName = name2;
  const merged = Object.assign(obj);
  return obj;
};
export const getStreamErrorContext = function getStreamErrorContext(streamKey) {
  let obj = StreamKeyUtils;
  ({ channelId, ownerId } = obj.decodeStreamKey(streamKey));
  const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
  obj = { channelId, mediaSessionId: null, rtcConnectionId: null, mediaContext: null, streamKey: null, userId: null };
  let mediaSessionId;
  if (rTCConnection != null) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  obj.mediaSessionId = mediaSessionId;
  let rTCConnectionId;
  if (rTCConnection != null) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  obj.rtcConnectionId = rTCConnectionId;
  obj.mediaContext = BaseConnectionEvent.MediaEngineContextTypes.STREAM;
  obj.streamKey = streamKey;
  obj.userId = ownerId;
  const videoDevices = MediaEngineStore.getVideoDevices();
  const tmp7 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
  let name;
  if (tmp7 != null) {
    name = tmp7.name;
  }
  obj = { videoDeviceName: name, audioInputDeviceName: null, audioOutputDeviceName: null };
  const inputDevices = obj4.getInputDevices();
  const tmp10 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
  let name1;
  if (tmp10 != null) {
    name1 = tmp10.name;
  }
  obj.audioInputDeviceName = name1;
  const outputDevices = obj4.getOutputDevices();
  const tmp13 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
  let name2;
  if (tmp13 != null) {
    name2 = tmp13.name;
  }
  obj.audioOutputDeviceName = name2;
  const merged = Object.assign(obj);
  return obj;
};
export const getCommonErrorContext = function getCommonErrorContext() {
  let obj = MediaEngineStore;
  const videoDevices = MediaEngineStore.getVideoDevices();
  const tmp2 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
  let name;
  if (tmp2 != null) {
    name = tmp2.name;
  }
  obj = { videoDeviceName: name, audioInputDeviceName: null, audioOutputDeviceName: null };
  const inputDevices = obj.getInputDevices();
  const tmp5 = inputDevices[obj.getInputDeviceId(obj)];
  let name1;
  if (tmp5 != null) {
    name1 = tmp5.name;
  }
  obj.audioInputDeviceName = name1;
  const outputDevices = obj.getOutputDevices();
  const tmp8 = outputDevices[obj.getOutputDeviceId(obj)];
  let name2;
  if (tmp8 != null) {
    name2 = tmp8.name;
  }
  obj.audioOutputDeviceName = name2;
  return obj;
};
