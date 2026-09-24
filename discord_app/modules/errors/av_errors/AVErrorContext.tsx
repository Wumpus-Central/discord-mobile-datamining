// === Module 18397: AVErrorContext ===

// Module 18397 (AVErrorContext)
import StreamKeyUtils from "StreamKeyUtils" /* 4881 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4884 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4852 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4868 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/AVErrorContext.tsx");

export const getVoiceChannelErrorContext = function getVoiceChannelErrorContext() {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const obj = { channelId: voiceChannelId, mediaSessionId: null, rtcConnectionId: null, mediaContext: null };
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
  const obj4 = { videoDeviceName: name, audioInputDeviceName: null, audioOutputDeviceName: null };
  const inputDevices = MediaEngineStore.getInputDevices();
  const tmp7 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
  let name1;
  if (tmp7 != null) {
    name1 = tmp7.name;
  }
  obj4.audioInputDeviceName = name1;
  const outputDevices = MediaEngineStore.getOutputDevices();
  const tmp10 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
  let name2;
  if (tmp10 != null) {
    name2 = tmp10.name;
  }
  obj4.audioOutputDeviceName = name2;
  const merged = Object.assign(obj4);
  return obj;
};
export const getStreamErrorContext = function getStreamErrorContext(streamKey) {
  ({ channelId, ownerId } = StreamKeyUtils.decodeStreamKey(streamKey));
  const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
  const obj2 = { channelId, mediaSessionId: null, rtcConnectionId: null, mediaContext: null, streamKey: null, userId: null };
  let mediaSessionId;
  if (rTCConnection != null) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  obj2.mediaSessionId = mediaSessionId;
  let rTCConnectionId;
  if (rTCConnection != null) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  obj2.rtcConnectionId = rTCConnectionId;
  obj2.mediaContext = BaseConnectionEvent.MediaEngineContextTypes.STREAM;
  obj2.streamKey = streamKey;
  obj2.userId = ownerId;
  const videoDevices = MediaEngineStore.getVideoDevices();
  const tmp7 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
  let name;
  if (tmp7 != null) {
    name = tmp7.name;
  }
  const obj3 = { videoDeviceName: name, audioInputDeviceName: null, audioOutputDeviceName: null };
  const inputDevices = MediaEngineStore.getInputDevices();
  const tmp10 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
  let name1;
  if (tmp10 != null) {
    name1 = tmp10.name;
  }
  obj3.audioInputDeviceName = name1;
  const outputDevices = MediaEngineStore.getOutputDevices();
  const tmp13 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
  let name2;
  if (tmp13 != null) {
    name2 = tmp13.name;
  }
  obj3.audioOutputDeviceName = name2;
  const merged = Object.assign(obj3);
  return obj2;
};
export const getCommonErrorContext = function getCommonErrorContext() {
  const videoDevices = MediaEngineStore.getVideoDevices();
  const tmp2 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
  let name;
  if (tmp2 != null) {
    name = tmp2.name;
  }
  const obj2 = { videoDeviceName: name, audioInputDeviceName: null, audioOutputDeviceName: null };
  const inputDevices = MediaEngineStore.getInputDevices();
  const tmp5 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
  let name1;
  if (tmp5 != null) {
    name1 = tmp5.name;
  }
  obj2.audioInputDeviceName = name1;
  const outputDevices = MediaEngineStore.getOutputDevices();
  const tmp8 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
  let name2;
  if (tmp8 != null) {
    name2 = tmp8.name;
  }
  obj2.audioOutputDeviceName = name2;
  return obj2;
};