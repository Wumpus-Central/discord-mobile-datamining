// discord_app/modules/sound_playback/native/SoundUtils.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
let closure_3 = 0;
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
prototype["_createSound"] = function _createSound(arg0, arg1, fn) {
  const self = this;
  closure_0 = fn;
  const DCDSoundManager = NativeModules.DCDSoundManager;
  DCDSoundManager.prepare(arg0, arg1, this._key, (arg0, arg1) => {
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
  set: undefined,
});
Object.defineProperty(prototype, "volume", {
  get: undefined,
  set: function volume(_volume) {
    this._volume = _volume;
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.setVolume(tmp._key, _volume);
    }
  },
});
Object.defineProperty(prototype, "duration", {
  get: function duration() {
    return this._duration;
  },
  set: undefined,
});
Object.defineProperty(prototype, "numberOfLoops", {
  get: function numberOfLoops() {
    return this._numberOfLoops;
  },
  set: undefined,
});
Object.defineProperty(prototype, "numberOfLoops", {
  get: undefined,
  set: function numberOfLoops(_numberOfLoops) {
    this._numberOfLoops = _numberOfLoops;
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.setNumberOfLoops(tmp._key, _numberOfLoops);
    }
  },
});
let obj = {
  NOTIFICATION: "notification",
  VOICE: "voice",
  RING_TONE: "ring_tone",
  MEDIA: "media",
  NOTIFICATION_NO_VIBRATION: "notification_no_vibration",
};
obj = {
  call_calling: obj.VOICE,
  call_ringing: null,
  call_ringing_halloween: null,
  camera_on: null,
  camera_off: null,
  deafen: null,
  disconnect: null,
  mention1: null,
  mention2: null,
  mention3: null,
  message1: null,
  message2: null,
  message3: null,
  mute: null,
  ptt_start: null,
  ptt_stop: null,
  reconnect: null,
  stage_waiting: null,
  stream_ended: null,
  stream_started: null,
  stream_user_joined: null,
  stream_user_left: null,
  soundboard_sound: null,
  undeafen: null,
  unmute: null,
  user_join: null,
  user_leave: null,
  user_moved: null,
  vibing_wumpus: null,
  activity_end: null,
  activity_launch: null,
  activity_user_join: null,
  activity_user_left: null,
};
obj.call_ringing = MetaQuestUtils.isMetaQuest() ? obj.MEDIA : obj.RING_TONE;
obj.call_ringing_halloween = MetaQuestUtils.isMetaQuest() ? obj.MEDIA : obj.RING_TONE;
({
  VOICE: obj2.camera_on,
  VOICE: obj2.camera_off,
  VOICE: obj2.deafen,
  VOICE: obj2.disconnect,
  NOTIFICATION: obj2.mention1,
  NOTIFICATION: obj2.mention2,
  NOTIFICATION: obj2.mention3,
  NOTIFICATION: obj2.message1,
  NOTIFICATION: obj2.message2,
  NOTIFICATION: obj2.message3,
  VOICE: obj2.mute,
  VOICE: obj2.ptt_start,
  VOICE: obj2.ptt_stop,
  VOICE: obj2.reconnect,
  VOICE: obj2.stage_waiting,
  VOICE: obj2.stream_ended,
  VOICE: obj2.stream_started,
  VOICE: obj2.stream_user_joined,
  VOICE: obj2.stream_user_left,
  VOICE: obj2.soundboard_sound,
  VOICE: obj2.undeafen,
  VOICE: obj2.unmute,
  VOICE: obj2.user_join,
  VOICE: obj2.user_leave,
  VOICE: obj2.user_moved,
  MEDIA: obj2.vibing_wumpus,
  NOTIFICATION_NO_VIBRATION: obj2.activity_end,
  NOTIFICATION_NO_VIBRATION: obj2.activity_launch,
  NOTIFICATION_NO_VIBRATION: obj2.activity_user_join,
  NOTIFICATION_NO_VIBRATION: obj2.activity_user_left,
} = obj);
const result = size.fileFinishedImporting("modules/sound_playback/native/SoundUtils.tsx");
let fn = (name, call_calling, _volume, DEFAULT) => {
  obj = Object.create(new.target.prototype);
  obj.name = name;
  obj.usage = obj[call_calling];
  obj._volume = _volume;
  obj.outputChannel = DEFAULT;
  return obj;
};
const prototype2 = fn.prototype;
Object.defineProperty(prototype2, "volume", {
  get: function volume() {
    return this._volume;
  },
  set: undefined,
});
Object.defineProperty(prototype2, "volume", {
  get: undefined,
  set: function volume(_volume) {
    const volume = _volume;
    this._volume = _volume;
    this.ensureSound().then((result) => {
      result.volume = volume;
    });
  },
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
    closure_0 = arg0;
    closure_1 = arg1;
    const ensureSoundResult = self.ensureSound();
    self
      .ensureSound()
      .then((duration) => {
        let tmp = null != duration.duration;
        if (tmp) {
          tmp = 0 !== duration.duration;
        }
        if (!tmp) {
          closure_1("sound has no duration");
        }
        duration.play();
        let num2 = 1;
        if (obj.isIOS()) {
          num2 = 1000;
        }
        const timerId = setTimeout(() => {
          closure_1_0(true);
        }, duration.duration * num2);
        obj = self(dependencyMap[2]);
      })
      .catch((error) => {
        closure_1(error);
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
  const self = this;
  let soundPromise = this.soundPromise;
  if (soundPromise == null) {
    soundPromise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      if (typeof RNSound === "function") {
        const fn = (arg0) => {
          if (null != arg0) {
            if ("" !== arg0) {
              closure_1(arg0);
            }
          }
          closure_0(obj);
        };
        obj = Object.create(tmp.prototype);
        obj._volume = tmp4;
        obj._loaded = false;
        closure_3 = tmp6 + 1;
        obj._key = +closure_3;
        obj._duration = -1;
        obj._numberOfChannels = -1;
        obj._volume = 1;
        obj._pan = 0;
        obj._numberOfLoops = 0;
        obj._sound = obj._createSound(tmp2, tmp3, fn);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
  }
  self.soundPromise = soundPromise;
  return self.soundPromise;
};

export const MobileAudioSound = fn;
