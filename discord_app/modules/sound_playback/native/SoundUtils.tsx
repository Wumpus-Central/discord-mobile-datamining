// === Module 10044: _createSound ===

// Module 10044 (_createSound)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let c3 = 0;
class RNSound {
  constructor(arg0, arg1, arg2, arg3) {
    obj = Object.create(new.target.prototype);
    obj._volume = importDefault;
    obj._loaded = false;
    tmp = +closure_3;
    closure_3 = tmp + 1;
    obj._key = tmp;
    obj._duration = -1;
    obj._numberOfChannels = -1;
    obj._volume = 1;
    obj._pan = 0;
    obj._numberOfLoops = 0;
    obj._sound = obj._createSound(global, require, importAll);
    return obj;
  }
}
const prototype = RNSound.prototype;
prototype["_createSound"] = function _createSound(name, usage, fn) {
  const self = this;
  closure_0 = fn;
  const DCDSoundManager = NativeModules.DCDSoundManager;
  DCDSoundManager.prepare(name, usage, this._key, (arg0, arg1) => {
    if (arg1) {
      ({ duration: self._duration, numberOfChannels: self._numberOfChannels } = arg1);
    }
    if (null == arg0) {
      self._loaded = true;
    }
    if (closure_0 != null) {
      tmp3(arg0);
    }
  });
};
prototype["play"] = function play() {
  if (this._loaded) {
    const DCDSoundManager = NativeModules.DCDSoundManager;
    DCDSoundManager.play(tmp._key);
  }
};
prototype["pause"] = function pause() {
  if (this._loaded) {
    const DCDSoundManager = NativeModules.DCDSoundManager;
    DCDSoundManager.pause(tmp._key);
  }
};
prototype["stop"] = function stop() {
  if (this._loaded) {
    const DCDSoundManager = NativeModules.DCDSoundManager;
    DCDSoundManager.stop(tmp._key);
  }
};
prototype["release"] = function release() {
  const self = this;
  if (this._loaded) {
    const DCDSoundManager = NativeModules.DCDSoundManager;
    DCDSoundManager.release(self._key);
  }
  self._loaded = false;
};
Object.defineProperty(prototype, "volume", {
  get: function volume() {
    return this._volume;
  },
  set: undefined
});
Object.defineProperty(prototype, "volume", {
  get: undefined,
  set: function volume(_volume) {
    this._volume = _volume;
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.setVolume(tmp._key, _volume);
    }
  }
});
Object.defineProperty(prototype, "duration", {
  get: function duration() {
    return this._duration;
  },
  set: undefined
});
Object.defineProperty(prototype, "numberOfLoops", {
  get: function numberOfLoops() {
    return this._numberOfLoops;
  },
  set: undefined
});
Object.defineProperty(prototype, "numberOfLoops", {
  get: undefined,
  set: function numberOfLoops(_numberOfLoops) {
    this._numberOfLoops = _numberOfLoops;
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.setNumberOfLoops(tmp._key, _numberOfLoops);
    }
  }
});
let obj = { NOTIFICATION: "notification", VOICE: "voice", RING_TONE: "ring_tone", MEDIA: "media", NOTIFICATION_NO_VIBRATION: "notification_no_vibration" };
obj = { call_calling: obj.VOICE, call_ringing: null, call_ringing_halloween: null, camera_on: null, camera_off: null, deafen: null, disconnect: null, mention1: null, mention2: null, mention3: null, message1: null, message2: null, message3: null, mute: null, ptt_start: null, ptt_stop: null, reconnect: null, stage_waiting: null, stream_ended: null, stream_started: null, stream_user_joined: null, stream_user_left: null, soundboard_sound: null, undeafen: null, unmute: null, user_join: null, user_leave: null, user_moved: null, vibing_wumpus: null, activity_end: null, activity_launch: null, activity_user_join: null, activity_user_left: null };
obj[1] = isMetaQuest.isMetaQuest() ? obj.MEDIA : obj.RING_TONE;
obj[2] = isMetaQuest.isMetaQuest() ? obj.MEDIA : obj.RING_TONE;
({ VOICE: obj2[3], VOICE: obj2[4], VOICE: obj2[5], VOICE: obj2[6], NOTIFICATION: obj2[7], NOTIFICATION: obj2[8], NOTIFICATION: obj2[9], NOTIFICATION: obj2[10], NOTIFICATION: obj2[11], NOTIFICATION: obj2[12], VOICE: obj2[13], VOICE: obj2[14], VOICE: obj2[15], VOICE: obj2[16], VOICE: obj2[17], VOICE: obj2[18], VOICE: obj2[19], VOICE: obj2[20], VOICE: obj2[21], VOICE: obj2[22], VOICE: obj2[23], VOICE: obj2[24], VOICE: obj2[25], VOICE: obj2[26], VOICE: obj2[27], MEDIA: obj2[28], NOTIFICATION_NO_VIBRATION: obj2[29], NOTIFICATION_NO_VIBRATION: obj2[30], NOTIFICATION_NO_VIBRATION: obj2[31], NOTIFICATION_NO_VIBRATION: obj2[32] } = obj);
const result = set.fileFinishedImporting("modules/sound_playback/native/SoundUtils.tsx");
let fn = (name, arg1, _volume, outputChannel) => {
  obj = Object.create(new.target.prototype);
  obj.name = name;
  obj.usage = obj[arg1];
  obj._volume = _volume;
  obj.outputChannel = outputChannel;
  return obj;
};
const prototype2 = fn.prototype;
Object.defineProperty(prototype2, "volume", {
  get: function volume() {
    return this._volume;
  },
  set: undefined
});
Object.defineProperty(prototype2, "volume", {
  get: undefined,
  set: function volume(_volume) {
    closure_0 = _volume;
    this._volume = _volume;
    this.ensureSound().then((arg0) => {
      arg0.volume = closure_0;
    });
  }
});
prototype2["loop"] = function loop() {
  this.ensureSound().then((play) => {
    play.numberOfLoops = -1;
    play.play();
  });
};
prototype2["play"] = function play() {
  this.ensureSound().then((play) => {
    play.play();
  });
};
prototype2["playWithListener"] = function playWithListener() {
  const self = this;
  return new Promise((arg0, arg1) => {
    const _self = arg0;
    closure_1 = arg1;
    const ensureSoundResult = _self.ensureSound();
    _self.ensureSound().then((duration) => {
      let tmp = null != duration.duration;
      if (tmp) {
        tmp = 0 !== duration.duration;
      }
      if (!tmp) {
        dependencyMap("sound has no duration");
      }
      duration.play();
      let num2 = 1;
      if (obj.isIOS()) {
        num2 = 1000;
      }
      const timerId = setTimeout(() => {
        callback(true);
      }, duration.duration * num2);
    }).catch((arg0) => {
      dependencyMap(arg0);
    });
  });
};
prototype2["pause"] = function pause() {
  if (null != this.soundPromise) {
    this.soundPromise.then((pause) => pause.pause());
    const soundPromise = this.soundPromise;
  }
};
prototype2["stop"] = function stop() {
  this.destroyAudio();
};
prototype2["destroyAudio"] = function destroyAudio() {
  const self = this;
  if (null != this.soundPromise) {
    this.soundPromise.then((stop) => {
      stop.stop();
      stop.release();
      self.soundPromise = null;
    });
    const soundPromise = this.soundPromise;
  }
};
prototype2["ensureSound"] = function ensureSound() {
  let self = this;
  self = this;
  let soundPromise = this.soundPromise;
  if (soundPromise == null) {
    soundPromise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      ({ name, usage, _volume } = closure_0);
      if (typeof closure_1_4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const fn = (arg0) => {
        if (null != arg0) {
          if ("" !== arg0) {
            callback2(arg0);
          }
        }
        callback(obj);
      };
      obj = Object.create(closure_1_4.prototype);
      obj._volume = _volume;
      obj._loaded = false;
      closure_3 = tmp2 + 1;
      obj._key = +closure_3;
      obj._duration = -1;
      obj._numberOfChannels = -1;
      obj._volume = 1;
      obj._pan = 0;
      obj._numberOfLoops = 0;
      obj._sound = obj._createSound(name, usage, fn);
    });
  }
  self.soundPromise = soundPromise;
  return self.soundPromise;
};

export const MobileAudioSound = fn;