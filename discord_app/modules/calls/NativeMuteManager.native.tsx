// === Module 13815: NativeMuteManager ===

// Module 13815 (NativeMuteManager)
import LoggerDefault from "Logger" /* 3 */;
import inject from "inject" /* 1910 */;
import Timers from "Timers" /* 4447 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import AudioRouteStore from "AudioRouteStore" /* 9083 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import Dispatcher from "Dispatcher" /* 573 */;

require = fn;
const obj2 = new LoggerDefault("NativeMuteManager");
obj2.enableNativeLogger(true);
class NativeMuteManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.ignoreForNativeUnmute = false;
    obj.needToUnmuteNative = false;
    obj.ignoreForAudioRouteChange = false;
    timeout = new closure_0(closure_2[3]).Timeout();
    obj.audioRouteChangeIgnoreTimer = timeout;
    obj.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS = 300;
    obj.handleAudioRouteChange = function handleAudioRouteChange() {
      const audioRouteChangeIgnoreTimer = obj.audioRouteChangeIgnoreTimer;
      if (audioRouteChangeIgnoreTimer.isStarted()) {
        const audioRouteChangeIgnoreTimer2 = obj.audioRouteChangeIgnoreTimer;
        audioRouteChangeIgnoreTimer2.stop();
      }
      obj.ignoreForAudioRouteChange = true;
      const audioRouteChangeIgnoreTimer3 = obj.audioRouteChangeIgnoreTimer;
      audioRouteChangeIgnoreTimer3.start(obj.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS, () => {
        obj.ignoreForAudioRouteChange = false;
      });
    };
    addChangeListenerResult = closure_3.addChangeListener(obj.handleAudioRouteChange);
    obj = closure_1(closure_2[4]);
    subscription = obj.subscribe("VOICE_CHANNEL_SELECT", obj.handleVoiceChannelSelect);
    return obj;
  }
}
const prototype = NativeMuteManager.prototype;
prototype["nativeMuteChanged"] = function nativeMuteChanged() {
  if (!MediaEngineStore.hasActiveCallKitCall()) {
    const self = this;
    if (this.ignoreForNativeUnmute) {
      self.ignoreForNativeUnmute = false;
    } else if (!self.ignoreForAudioRouteChange) {
      self.needToUnmuteNative = true;
      obj2.log("Native mute changed > toggling mute");
      AudioActionCreatorsDefault.toggleSelfMute({ playSoundEffect: false });
    }
  }
};
prototype["updateNativeMute"] = function updateNativeMute() {
  if (!MediaEngineStore.hasActiveCallKitCall()) {
    const self = this;
    if (this.needToUnmuteNative) {
      self.needToUnmuteNative = false;
      self.ignoreForNativeUnmute = true;
      obj2.log("Update native mute > unmuting native");
      const voiceEngine = inject.getVoiceEngine();
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
    const voiceEngine = inject.getVoiceEngine();
    const setNativeMuteState = voiceEngine.setNativeMuteState;
    if (setNativeMuteState != null) {
      setNativeMuteState(false);
    }
  }
};
let obj = Object.create(NativeMuteManager.prototype);
let closure_129_0 = obj;
obj.ignoreForNativeUnmute = false;
obj.needToUnmuteNative = false;
obj.ignoreForAudioRouteChange = false;
let timeout = new fn(4447).Timeout();
obj.audioRouteChangeIgnoreTimer = timeout;
obj.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS = 300;
obj.handleAudioRouteChange = function handleAudioRouteChange() {
  const audioRouteChangeIgnoreTimer = obj.audioRouteChangeIgnoreTimer;
  if (audioRouteChangeIgnoreTimer.isStarted()) {
    const audioRouteChangeIgnoreTimer2 = obj.audioRouteChangeIgnoreTimer;
    audioRouteChangeIgnoreTimer2.stop();
  }
  obj.ignoreForAudioRouteChange = true;
  const audioRouteChangeIgnoreTimer3 = obj.audioRouteChangeIgnoreTimer;
  audioRouteChangeIgnoreTimer3.start(obj.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS, () => {
    obj.ignoreForAudioRouteChange = false;
  });
};
AudioRouteStore.addChangeListener(obj.handleAudioRouteChange);
let subscription = Dispatcher.subscribe("VOICE_CHANNEL_SELECT", obj.handleVoiceChannelSelect);
class NativeMuteManagerWrapper {
}
const prototype2 = NativeMuteManagerWrapper.prototype;
prototype2["nativeMuteChanged"] = function nativeMuteChanged(arg0) {
  obj.nativeMuteChanged(arg0);
};
prototype2["updateNativeMute"] = function updateNativeMute() {
  obj.updateNativeMute();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/NativeMuteManager.native.tsx");

export default Object.create(NativeMuteManagerWrapper.prototype);