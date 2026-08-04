import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import handleConnectionOpen from "handleConnectionOpen";
import initialize from "initialize";

const require = arg1;
const result = require("handleConnectionOpen").fileFinishedImporting("modules/errors/av_errors/AVErrorContext.tsx");

export const getVoiceChannelErrorContext = function getVoiceChannelErrorContext() {
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  let obj = { channelId: voiceChannelId, mediaSessionId: null, rtcConnectionId: null, mediaContext: null };
  mediaSessionId = mediaSessionId.getMediaSessionId();
  obj[1] = mediaSessionId;
  obj[2] = mediaSessionId.getRTCConnectionId();
  obj[3] = require(4381) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT;
  const videoDevices = store.getVideoDevices();
  const tmp4 = videoDevices[store.getVideoDeviceId(store)];
  let name;
  if (tmp4 != null) {
    name = tmp4.name;
  }
  obj = { videoDeviceName: name, audioInputDeviceName: null, audioOutputDeviceName: null };
  const inputDevices = obj3.getInputDevices();
  const tmp7 = inputDevices[store.getInputDeviceId(store)];
  let name1;
  if (tmp7 != null) {
    name1 = tmp7.name;
  }
  obj[1] = name1;
  const outputDevices = obj3.getOutputDevices();
  const tmp10 = outputDevices[store.getOutputDeviceId(store)];
  let name2;
  if (tmp10 != null) {
    name2 = tmp10.name;
  }
  obj[2] = name2;
  const merged = Object.assign(obj);
  return obj;
};
export const getStreamErrorContext = function getStreamErrorContext(streamKey) {
  let channelId;
  let ownerId;
  let obj = require(4348) /* isStreamKey */;
  ({ channelId, ownerId } = obj.decodeStreamKey(streamKey));
  rTCConnection = rTCConnection.getRTCConnection(streamKey);
  obj = { channelId, mediaSessionId: null, rtcConnectionId: null, mediaContext: null, streamKey: null, userId: null };
  let mediaSessionId;
  if (rTCConnection != null) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  obj[1] = mediaSessionId;
  let rTCConnectionId;
  if (rTCConnection != null) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  obj[2] = rTCConnectionId;
  obj[3] = require(4381) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM;
  obj[4] = streamKey;
  obj[5] = ownerId;
  const videoDevices = store.getVideoDevices();
  const tmp7 = videoDevices[store.getVideoDeviceId(store)];
  let name;
  if (tmp7 != null) {
    name = tmp7.name;
  }
  obj = { videoDeviceName: name, audioInputDeviceName: null, audioOutputDeviceName: null };
  const inputDevices = obj4.getInputDevices();
  const tmp10 = inputDevices[store.getInputDeviceId(store)];
  let name1;
  if (tmp10 != null) {
    name1 = tmp10.name;
  }
  obj[1] = name1;
  const outputDevices = obj4.getOutputDevices();
  const tmp13 = outputDevices[store.getOutputDeviceId(store)];
  let name2;
  if (tmp13 != null) {
    name2 = tmp13.name;
  }
  obj[2] = name2;
  const merged = Object.assign(obj);
  return obj;
};
export const getCommonErrorContext = function getCommonErrorContext() {
  let obj = store;
  const videoDevices = store.getVideoDevices();
  const tmp2 = videoDevices[store.getVideoDeviceId(store)];
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
  obj[1] = name1;
  const outputDevices = obj.getOutputDevices();
  const tmp8 = outputDevices[obj.getOutputDeviceId(obj)];
  let name2;
  if (tmp8 != null) {
    name2 = tmp8.name;
  }
  obj[2] = name2;
  return obj;
};