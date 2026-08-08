// discord_app/modules/calls/NativeMuteManager.native.tsx
import importDefaultResult from "handleAudioRouteChanged";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import importDefaultResult1 from "dispatcher";
import { trackDeviceChanged } from "../../actions/AudioActionCreators.tsx";

let obj = arg1;
let c3 = importDefaultResult;
const obj2 = new require("start")("NativeMuteManager");
obj2.enableNativeLogger(true);
class NativeMuteManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    NativeMuteManager = obj;
    obj.ignoreForNativeUnmute = false;
    obj.needToUnmuteNative = false;
    obj.ignoreForAudioRouteChange = false;
    timeout = new require("start").Timeout();
    obj.audioRouteChangeIgnoreTimer = timeout;
    obj.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS = 300;
    obj.handleAudioRouteChange = function handleAudioRouteChange() {
      const audioRouteChangeIgnoreTimer = obj.audioRouteChangeIgnoreTimer;
      if (audioRouteChangeIgnoreTimer.isStarted()) {
        const audioRouteChangeIgnoreTimer2 = tmp.audioRouteChangeIgnoreTimer;
        audioRouteChangeIgnoreTimer2.stop();
      }
      obj.ignoreForAudioRouteChange = true;
      const audioRouteChangeIgnoreTimer3 = tmp.audioRouteChangeIgnoreTimer;
      audioRouteChangeIgnoreTimer3.start(obj.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS, () => {
        closure_0.ignoreForAudioRouteChange = false;
      });
    };
    addChangeListenerResult = closure_3.addChangeListener(obj.handleAudioRouteChange);
    obj = require("dispatcher");
    subscription = obj.subscribe("VOICE_CHANNEL_SELECT", obj.handleVoiceChannelSelect);
    return obj;
  }
}
const prototype = NativeMuteManager.prototype;
prototype["nativeMuteChanged"] = function nativeMuteChanged() {
  if (!_detectH265HardwareDecode.hasActiveCallKitCall()) {
    const self = this;
    if (this.ignoreForNativeUnmute) {
      self.ignoreForNativeUnmute = false;
    } else if (!self.ignoreForAudioRouteChange) {
      self.needToUnmuteNative = true;
      obj2.log("Native mute changed > toggling mute");
      trackDeviceChanged.toggleSelfMute({ playSoundEffect: false });
      const obj = trackDeviceChanged;
    }
  }
};
prototype["updateNativeMute"] = function updateNativeMute() {
  if (!_detectH265HardwareDecode.hasActiveCallKitCall()) {
    const self = this;
    if (this.needToUnmuteNative) {
      self.needToUnmuteNative = false;
      self.ignoreForNativeUnmute = true;
      obj2.log("Update native mute > unmuting native");
      obj = obj(4353);
      const voiceEngine = obj.getVoiceEngine();
      const setNativeMuteState = voiceEngine.setNativeMuteState;
      if (setNativeMuteState != null) {
        setNativeMuteState(false);
      }
    }
  }
};
prototype["handleVoiceChannelSelect"] = function handleVoiceChannelSelect(channelId) {
  if (null == channelId.channelId) {
    obj2.log("Leaving voice channel > unmuting native");
    obj = obj(4353);
    const voiceEngine = obj.getVoiceEngine();
    const setNativeMuteState = voiceEngine.setNativeMuteState;
    if (setNativeMuteState != null) {
      setNativeMuteState(false);
    }
  }
};
obj = Object.create(NativeMuteManager.prototype);
obj.ignoreForNativeUnmute = false;
obj.needToUnmuteNative = false;
obj.ignoreForAudioRouteChange = false;
let timeout = new require("start").Timeout();
obj.audioRouteChangeIgnoreTimer = timeout;
obj.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS = 300;
obj.handleAudioRouteChange = function handleAudioRouteChange() {
  const audioRouteChangeIgnoreTimer = obj.audioRouteChangeIgnoreTimer;
  if (audioRouteChangeIgnoreTimer.isStarted()) {
    const audioRouteChangeIgnoreTimer2 = tmp.audioRouteChangeIgnoreTimer;
    audioRouteChangeIgnoreTimer2.stop();
  }
  obj.ignoreForAudioRouteChange = true;
  const audioRouteChangeIgnoreTimer3 = tmp.audioRouteChangeIgnoreTimer;
  audioRouteChangeIgnoreTimer3.start(obj.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS, () => {
    closure_0.ignoreForAudioRouteChange = false;
  });
};
importDefaultResult.addChangeListener(obj.handleAudioRouteChange);
let subscription = require("dispatcher").subscribe("VOICE_CHANNEL_SELECT", obj.handleVoiceChannelSelect);
class NativeMuteManagerWrapper {
}
const prototype2 = NativeMuteManagerWrapper.prototype;
prototype2["nativeMuteChanged"] = function nativeMuteChanged(arg0) {
  obj.nativeMuteChanged(arg0);
};
prototype2["updateNativeMute"] = function updateNativeMute() {
  obj.updateNativeMute();
};
const result = require("timestamp").fileFinishedImporting("modules/calls/NativeMuteManager.native.tsx");

export default Object.create(NativeMuteManagerWrapper.prototype);