// discord_app/modules/calls/NativeMuteManager.native.tsx
import LoggerDefault from "../debug/Logger.tsx";
import inject from "../../../discord_common/js/packages/media-engine/native/inject.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import AudioActionCreatorsDefault from "../../actions/AudioActionCreators.tsx";
import AudioRouteStore from "../voice_calls/AudioRouteStore.native.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import Dispatcher from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let prototype2;
let prototype3;
let obj2 = new LoggerDefault("NativeMuteManager");
obj2.enableNativeLogger(true);
class NativeMuteManager {
  constructor() {
    obj2 = Object.create(new.target.prototype);
    obj2.ignoreForNativeUnmute = false;
    obj2.needToUnmuteNative = false;
    obj2.ignoreForAudioRouteChange = false;
    const timeout = new Timers.Timeout();
    obj2.audioRouteChangeIgnoreTimer = timeout;
    obj2.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS = 300;
    obj2.handleAudioRouteChange = function handleAudioRouteChange() {
      const audioRouteChangeIgnoreTimer = obj2.audioRouteChangeIgnoreTimer;
      if (audioRouteChangeIgnoreTimer.isStarted()) {
        const audioRouteChangeIgnoreTimer2 = obj2.audioRouteChangeIgnoreTimer;
        audioRouteChangeIgnoreTimer2.stop();
      }
      obj2.ignoreForAudioRouteChange = true;
      const audioRouteChangeIgnoreTimer3 = obj2.audioRouteChangeIgnoreTimer;
      audioRouteChangeIgnoreTimer3.start(obj2.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS, () => {
        obj2.ignoreForAudioRouteChange = false;
      });
    };
    AudioRouteStore.addChangeListener(obj2.handleAudioRouteChange);
    obj = Dispatcher;
    const subscription = obj.subscribe("VOICE_CHANNEL_SELECT", obj2.handleVoiceChannelSelect);
    return obj2;
  }
  nativeMuteChanged() {
    if (!MediaEngineStore.hasActiveCallKitCall()) {
      const self = this;
      if (this.ignoreForNativeUnmute) {
        self.ignoreForNativeUnmute = false;
      } else if (!self.ignoreForAudioRouteChange) {
        self.needToUnmuteNative = true;
        obj2.log("Native mute changed > toggling mute");
        obj = AudioActionCreatorsDefault;
        obj.toggleSelfMute({ playSoundEffect: false });
      }
    }
  }
  updateNativeMute() {
    if (!MediaEngineStore.hasActiveCallKitCall()) {
      const self = this;
      if (this.needToUnmuteNative) {
        self.needToUnmuteNative = false;
        self.ignoreForNativeUnmute = true;
        obj2.log("Update native mute > unmuting native");
        obj = inject;
        const voiceEngine = obj.getVoiceEngine();
        const setNativeMuteState = voiceEngine.setNativeMuteState;
        if (setNativeMuteState != null) {
          setNativeMuteState(false);
        }
      }
    }
  }
  handleVoiceChannelSelect(channelId) {
    if (null == channelId.channelId) {
      obj2.log("Leaving voice channel > unmuting native");
      obj = inject;
      const voiceEngine = obj.getVoiceEngine();
      const setNativeMuteState = voiceEngine.setNativeMuteState;
      if (setNativeMuteState != null) {
        setNativeMuteState(false);
      }
    }
  }
}
const prototype = NativeMuteManager.prototype;
let obj = Object.create(NativeMuteManager.prototype);
obj.ignoreForNativeUnmute = false;
obj.needToUnmuteNative = false;
obj.ignoreForAudioRouteChange = false;
let timeout = new Timers.Timeout();
obj.audioRouteChangeIgnoreTimer = timeout;
obj.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS = 300;
obj.handleAudioRouteChange = function handleAudioRouteChange() {
  const audioRouteChangeIgnoreTimer = obj2.audioRouteChangeIgnoreTimer;
  if (audioRouteChangeIgnoreTimer.isStarted()) {
    const audioRouteChangeIgnoreTimer2 = obj2.audioRouteChangeIgnoreTimer;
    audioRouteChangeIgnoreTimer2.stop();
  }
  obj2.ignoreForAudioRouteChange = true;
  const audioRouteChangeIgnoreTimer3 = obj2.audioRouteChangeIgnoreTimer;
  audioRouteChangeIgnoreTimer3.start(obj2.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS, () => {
    obj2.ignoreForAudioRouteChange = false;
  });
};
AudioRouteStore.addChangeListener(obj.handleAudioRouteChange);
let subscription = Dispatcher.subscribe("VOICE_CHANNEL_SELECT", obj.handleVoiceChannelSelect);
class NativeMuteManagerWrapper {
  nativeMuteChanged(arg0) {
    obj.nativeMuteChanged(arg0);
  }
  updateNativeMute() {
    obj.updateNativeMute();
  }
}
({ prototype: prototype2, prototype: prototype3 } = NativeMuteManagerWrapper);
const result = size.fileFinishedImporting("modules/calls/NativeMuteManager.native.tsx");

export default Object.create(prototype3);
