// discord_app/modules/sound_playback/native/SoundUtils.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import BackoffDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import _modDef11165 from "../../../../discord_assets/assets/sounds/stage_waiting.mp3.js";
import _modDef11166 from "../../../../discord_assets/assets/sounds/vibing_wumpus.mp3.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const NativeModules = fn(17).NativeModules;
let closure_5 = new LoggerDefault("MobileAudioSound");
let closure_6 = 0;
class RNSound {
  constructor(arg0, arg1, arg2, arg3) {
    obj = Object.create(new.target.prototype);
    obj._volume = importDefault;
    obj._loaded = false;
    tmp = +closure_6;
    closure_6 = tmp + 1;
    obj._key = tmp;
    obj._duration = -1;
    obj._numberOfChannels = -1;
    obj._volume = 1;
    obj._pan = 0;
    obj._numberOfLoops = 0;
    obj._sound = obj._createSound(global, fn, importAll);
    return obj;
  }
}
const prototype = RNSound.prototype;
prototype["_createSound"] = function _createSound(arg0, arg1, fn) {
  const self = this;
  closure_0 = fn;
  let DCDSoundManager = NativeModules.DCDSoundManager;
  DCDSoundManager.prepare(arg0, arg1, this._key, (arg0, arg1) => {
    if (null != arg1) {
      ({ duration: self._duration, numberOfChannels: self._numberOfChannels } = arg1);
    }
    if (null == arg0) {
      self._loaded = true;
    } else {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.release(self._key);
    }
    if (closure_0 != null) {
      tmp6(arg0);
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
let obj5 = {
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
let MetaQuestUtils = fn(1624);
obj5.call_ringing = MetaQuestUtils.isMetaQuest() ? obj.MEDIA : obj.RING_TONE;
MetaQuestUtils = fn(1624);
obj5.call_ringing_halloween = MetaQuestUtils.isMetaQuest() ? obj.MEDIA : obj.RING_TONE;
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
const obj8 = { stage_waiting: _modDef11165, vibing_wumpus: _modDef11166 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/sound_playback/native/SoundUtils.tsx");
fn = (call_calling, call_calling, _volume, DEFAULT) => {
  const merged = Object.assign({ numberOfLoops: 0, playbackRequest: 0, prepareBackoff: null, retryAfter: 0 });
  merged[2] = new BackoffDefault();
  let tmp3 = obj8[call_calling];
  if (tmp3 == null) {
    tmp3 = call_calling;
  }
  merged.name = tmp3;
  merged.usage = obj5[call_calling];
  merged._volume = _volume;
  merged.outputChannel = DEFAULT;
  return merged;
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
    if (this.soundPromise != null) {
      soundPromise.then((result) => {
        if (null != result) {
          result.volume = volume;
        }
      });
    }
  },
});
prototype2["loop"] = function loop() {
  const self = this;
  this.numberOfLoops = -1;
  const sum = this.playbackRequest + 1;
  this.playbackRequest = sum;
  require = sum;
  this.ensureSound().then((play) => {
    let tmp = null != play;
    if (tmp) {
      tmp = sum === self.playbackRequest;
    }
    if (tmp) {
      play.numberOfLoops = -1;
      play.play();
    }
  });
};
prototype2["play"] = function play() {
  const self = this;
  const sum = this.playbackRequest + 1;
  this.playbackRequest = sum;
  require = sum;
  this.ensureSound().then((play) => {
    let tmp = null != play;
    if (tmp) {
      tmp = sum === self.playbackRequest;
    }
    if (tmp) {
      play.play();
    }
  });
};
prototype2["playWithListener"] = function playWithListener() {
  const self = this;
  const sum = this.playbackRequest + 1;
  this.playbackRequest = sum;
  require = sum;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    _self = arg1;
    const ensureSoundResult = _self.ensureSound();
    _self
      .ensureSound()
      .then((duration) => {
        if (null != duration) {
          if (sum === self.playbackRequest) {
            let tmp4 = null != duration.duration;
            if (tmp4) {
              tmp4 = 0 !== duration.duration;
            }
            if (!tmp4) {
              closure_1("sound has no duration");
            }
            duration.play();
            let num2 = 1;
            if (obj.isIOS()) {
              num2 = 1000;
            }
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              closure_1_0(true);
            }, duration.duration * num2);
            obj = PlatformUtils;
          }
        }
        closure_0(false);
      })
      .catch((error) => {
        closure_1(error);
      });
  });
};
prototype2["pause"] = function pause() {
  this.playbackRequest = this.playbackRequest + 1;
  if (null != this.soundPromise) {
    this.soundPromise.then((pause) => {
      let pauseResult;
      if (pause != null) {
        pauseResult = pause.pause();
      }
      return pauseResult;
    });
    const soundPromise = this.soundPromise;
  }
};
prototype2["stop"] = function stop() {
  this.playbackRequest = this.playbackRequest + 1;
  this.destroyAudio();
};
prototype2["destroyAudio"] = function destroyAudio() {
  const self = this;
  if (null != this.soundPromise) {
    self.soundPromise.then((stop) => {
      if (stop != null) {
        stop.stop();
      }
      if (stop != null) {
        stop.release();
      }
    });
    self.soundPromise = null;
    const soundPromise = self.soundPromise;
  }
};
prototype2["ensureSound"] = function ensureSound() {
  let self = this;
  closure_0 = this;
  if (null != this.soundPromise) {
    return self.soundPromise;
  } else {
    let _Date = Date;
    if (Date.now() < self.retryAfter) {
      return Promise.resolve(null);
    } else {
      closure_0 = asyncGeneratorStep(async () => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp7;
                closure_128_0 = undefined;
                c3 = 1;
                const promise = new Promise((arg0, arg1) => {
                  closure_0 = arg0;
                  closure_1 = arg1;
                  if (typeof closure_2_7 === "function") {
                    const fn = (arg0) => {
                      if (null != arg0) {
                        if ("" !== arg0) {
                          closure_1(arg0);
                        }
                      }
                      closure_0(obj);
                    };
                    const obj = Object.create(tmp.prototype);
                    obj._volume = tmp4;
                    obj._loaded = false;
                    closure_6 = tmp6 + 1;
                    obj._key = +closure_6;
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
                c4 = 2;
                c5 = 1;
                const obj4 = { value: promise, done: false };
                return obj4;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              logger.warn("Could not prepare sound", closure_0.name, closure_128_1);
              if (closure_0.soundPromise === closure_1) {
                closure_0.soundPromise = null;
                const _Date = Date;
                const prepareBackoff2 = closure_0.prepareBackoff;
                const timestamp = Date.now();
                closure_0.retryAfter = timestamp + prepareBackoff2.fail();
              }
              c5 = 3;
              return { value: null, done: true };
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj5 = { value, done: true };
              return obj5;
            } else {
              closure_128_0 = value;
              closure_128_0.numberOfLoops = closure_0.numberOfLoops;
              closure_128_0.volume = closure_0._volume;
              if (closure_0.soundPromise === closure_1) {
                const prepareBackoff = closure_0.prepareBackoff;
                prepareBackoff.succeed();
                closure_0.retryAfter = 0;
              }
              c3 = 0;
              c5 = 3;
              let obj = { value: closure_128_0, done: true };
              return obj;
            }
          } catch (tmp32) {
            closure_2 = tmp32;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp32;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      const tmp3 = (function load() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      closure_1 = tmp3;
      self.soundPromise = tmp3;
      return tmp3;
    }
  }
};

export const MobileAudioSound = fn;
