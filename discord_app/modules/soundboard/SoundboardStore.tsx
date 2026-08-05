// discord_app/modules/soundboard/SoundboardStore.tsx
import _slicedToArray from "_slicedToArray";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import mergeGuildAvatar from "mergeGuildAvatar";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";
import { AnalyticEvents } from "ME";
import { UserSettingsTypes } from "MAX_FAVORITES";
import registerAsset from "../../../_runtime/02026_registerAsset.js";
import { Store } from "initialize";
import set from "mergeGuildAvatar";
import { apply } from "../../../_runtime/00012_apply.js";
import { t } from "../../../_runtime/03837_t.js";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { perceptualToAmplitude } from "../../utils/PerceptualVolumeUtils.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
import { explicitContentFromProto } from "../user_settings/UserSettings.tsx";

let closure_14;
let map1;
const require = arg1;
function handleSoundCreateOrUpdate(sound) {
  sound = sound.sound;
  const value = map.get(sound.guildId);
  if (value != null) {
    const findIndexResult = value.findIndex((soundId) => soundId.soundId === sound.soundId);
  }
  if (null != value) {
    if (null != findIndexResult) {
      if (-1 !== findIndexResult) {
        value[findIndexResult] = sound;
        const items = [];
        HermesBuiltin.arraySpread(value, 0);
        const result = map.set(sound.guildId, items);
      }
    }
  }
  if (null != value) {
    if (value != null) {
      value.push(sound);
    }
    const items1 = [];
    HermesBuiltin.arraySpread(value, 0);
    const result1 = map.set(sound.guildId, items1);
  }
}
function syncLocalSoundboardMutesFromUserSettings(proto) {
  let user;
  if (proto != null) {
    const audioContextSettings = proto.audioContextSettings;
    if (audioContextSettings != null) {
      user = audioContextSettings.user;
    }
  }
  if (user == null) {
    user = {};
  }
  const entries = Object.entries(user);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let first = tmp5[0];
    let obj2 = set;
    if (tmp5[1].soundboardMuted) {
      let tmp9 = first;
      let addResult = obj2.add(first);
    } else {
      let tmp7 = first;
      let deleteResult = obj2.delete(first);
    }
    continue;
  }
  const keys = set.keys();
  for (const item10038 of keys) {
    if (null == user[item10038]) {
      let tmp13 = set;
      let tmp14 = item10038;
      let deleteResult1 = set.delete(tmp12);
    }
    continue;
  }
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let map = new Map();
map1 = new Map();
let set = new Set();
({ NOT_FETCHED: map1, NOT_FETCHED: closure_14 } = obj);
let set1 = new Set();
const map2 = new Map();
obj = {
  computeBonus() {
    return 100;
  },
  computeWeight(arg0) {
    if (arg0 > obj.diff(module_2026, "days")) {
      return 0;
    } else {
      let num2 = 100;
      if (arg0 > 3) {
        num2 = 70;
        if (arg0 > 15) {
          num2 = 50;
          if (arg0 > 30) {
            num2 = 30;
            if (arg0 > 45) {
              num2 = 1;
              if (arg0 <= 80) {
                num2 = 10;
              }
            }
          }
        }
      }
      return num2;
    }
    obj = t();
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  }
};
let closure_18 = new require("DEFAULT_FRECENCY")(obj);
let closure_19 = [];
let c20 = false;
let c21 = false;
let tmp7 = new require("DEFAULT_FRECENCY")(obj);
let closure_22 = require("DISCORD_EPOCH").debounce((volume) => {
  let obj = expandEventProperties;
  obj = { volume: null, location_stack: null };
  obj[0] = Math.round(perceptualToAmplitude.amplitudeToPerceptual(volume));
  obj[1] = arg1;
  obj.track(AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, obj);
  const SoundboardSettings = explicitContentFromProto.SoundboardSettings;
  obj = { volume };
  SoundboardSettings.updateSetting(obj);
}, 1000);
class SoundboardStore extends Store {
}
const prototype = SoundboardStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(settings, mergeGuildAvatar);
  syncLocalSoundboardMutesFromUserSettings(settings.settings);
  const SoundboardSettings = explicitContentFromProto.SoundboardSettings;
  const setting = SoundboardSettings.getSetting();
  let volume;
  if (setting != null) {
    volume = setting.volume;
  }
  let closure_21 = 0 === volume;
};
prototype["getOverlaySerializedState"] = function getOverlaySerializedState() {
  return { soundboardSounds: Object.fromEntries(map), favoritedSoundIds: Array.from(set1), localSoundboardMutes: Array.from(set) };
};
prototype["getSounds"] = function getSounds() {
  return map;
};
prototype["getSoundsForGuild"] = function getSoundsForGuild(arg0) {
  return map.get(arg0);
};
prototype["getSound"] = function getSound(arg0, arg1) {
  let closure_0 = arg1;
  let items = map.get(arg0);
  if (items == null) {
    items = [];
  }
  return items.find((soundId) => soundId.soundId === closure_0);
};
prototype["getSoundById"] = function getSoundById(soundId) {
  let closure_0 = soundId;
  const arr = Array.from(map.values());
  return Array.from(map.values()).flat().find((soundId) => soundId.soundId === closure_0);
};
prototype["isFetchingSounds"] = function isFetchingSounds() {
  return closure_14 === obj.FETCHING;
};
prototype["isFetchingDefaultSounds"] = function isFetchingDefaultSounds() {
  return closure_13 === obj.FETCHING;
};
prototype["isFetching"] = function isFetching() {
  const self = this;
  return this.isFetchingSounds() || self.isFetchingDefaultSounds();
};
prototype["shouldFetchDefaultSounds"] = function shouldFetchDefaultSounds() {
  return closure_13 === obj.NOT_FETCHED;
};
prototype["hasFetchedDefaultSounds"] = function hasFetchedDefaultSounds() {
  return closure_13 === obj.FETCHED;
};
prototype["isUserPlayingSounds"] = function isUserPlayingSounds(closure_0) {
  const value = map2.get(closure_0);
  let tmp2 = null != value;
  if (tmp2) {
    tmp2 = value > 0;
  }
  return tmp2;
};
prototype["isPlayingSound"] = function isPlayingSound(soundId) {
  return null != map1.get(soundId);
};
prototype["isFavoriteSound"] = function isFavoriteSound(soundId) {
  return set1.has(soundId);
};
prototype["getFavorites"] = function getFavorites() {
  return set1;
};
prototype["getFrequentlyUsedSoundIds"] = function getFrequentlyUsedSoundIds() {
  return tmp7.frequently;
};
prototype["hasPendingUsage"] = function hasPendingUsage() {
  return arr.length > 0;
};
Object.defineProperty(prototype, "playedSoundFrecencyWithoutFetchingLatest", {
  get: function playedSoundFrecencyWithoutFetchingLatest() {
    return closure_18;
  },
  set: undefined
});
prototype["isLocalSoundboardMuted"] = function isLocalSoundboardMuted(id) {
  return set.has(id);
};
prototype["isSoundboardVolumeMuted"] = function isSoundboardVolumeMuted() {
  return c21;
};
prototype["hasHadOtherUserPlaySoundInSession"] = function hasHadOtherUserPlaySoundInSession() {
  return c20;
};
prototype["hasFetchedAllSounds"] = function hasFetchedAllSounds() {
  let tmp2 = closure_14 === obj.FETCHED;
  if (tmp2) {
    tmp2 = closure_13 === tmp.FETCHED;
  }
  return tmp2;
};
prototype["isFetchingAnySounds"] = function isFetchingAnySounds() {
  let tmp2 = closure_14 === obj.FETCHING;
  if (!tmp2) {
    tmp2 = closure_13 === tmp.FETCHING;
  }
  return tmp2;
};
SoundboardStore.displayName = "SoundboardStore";
obj = {
  LOGOUT: function handleReset() {
    let closure_13;
    let closure_14;
    map.clear();
    map1.clear();
    map2.clear();
    let c20 = false;
    ({ NOT_FETCHED: closure_14, NOT_FETCHED: closure_13 } = obj);
    let c21 = false;
    let closure_19 = [];
    tmp7.overwriteHistory({});
  },
  GUILD_SOUNDBOARD_FETCH: function handleSoundboardFetch() {
    const FETCHING = obj.FETCHING;
  },
  GUILD_SOUNDBOARD_SOUND_CREATE: handleSoundCreateOrUpdate,
  GUILD_SOUNDBOARD_SOUND_UPDATE: handleSoundCreateOrUpdate,
  GUILD_SOUNDBOARD_SOUND_DELETE: function handleSoundDelete(arg0) {
    let guildId;
    let require;
    ({ soundId: require, guildId } = arg0);
    const value = map.get(guildId);
    let findIndexResult;
    if (value != null) {
      findIndexResult = value.findIndex((soundId) => soundId.soundId === closure_0);
    }
    let tmp2 = null == value || null == findIndexResult;
    if (!tmp2) {
      tmp2 = findIndexResult < 0;
    }
    if (!tmp2) {
      value.splice(findIndexResult, 1);
      const items = [];
      HermesBuiltin.arraySpread(value, 0);
      const result = map.set(guildId, items);
    }
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function handleSoundPlayStart(arg0) {
    let soundId;
    let userId;
    ({ soundId, userId } = arg0);
    let num = map1.get(soundId);
    if (num == null) {
      num = 0;
    }
    const sum = num + 1;
    let num2 = map2.get(userId);
    if (num2 == null) {
      num2 = 0;
    }
    const sum1 = num2 + 1;
    const result = map1.set(soundId, sum);
    const result1 = map2.set(userId, sum1);
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (userId !== id) {
      let c20 = true;
    }
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_END: function handleSoundPlayEnd(arg0) {
    let soundId;
    let userId;
    ({ soundId, userId } = arg0);
    let num = map1.get(soundId);
    if (num == null) {
      num = 0;
    }
    const diff = num - 1;
    let num2 = map2.get(userId);
    if (num2 == null) {
      num2 = 0;
    }
    const diff1 = num2 - 1;
    if (diff <= 0) {
      obj.delete(soundId);
    } else {
      const result = obj.set(soundId, diff);
    }
    if (diff1 <= 0) {
      obj2.delete(userId);
    } else {
      const result1 = obj2.set(userId, diff1);
    }
  },
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: function handleSoundsUpdate(guildId) {
    const result = map.set(guildId.guildId, guildId.soundboardSounds);
  },
  USER_SOUNDBOARD_SET_VOLUME: function handleSetLocalVolume(volume) {
    volume = volume.volume;
    let closure_21 = 0 === volume;
    callback2(volume, volume.location);
    if (closure_21 !== closure_21) {
      callback2.flush();
    }
  },
  SOUNDBOARD_TRACK_USAGE: function handleTrackUsage(soundId) {
    soundId = soundId.soundId;
    tmp7.track(soundId);
    const obj = { key: soundId, timestamp: Date.now() };
    tmp7.compute();
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect() {
    map1.clear();
    map2.clear();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let proto;
    let type;
    ({ type, proto } = settings.settings);
    if (UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS === type) {
      let soundIds;
      if (proto != null) {
        const favoriteSoundboardSounds = proto.favoriteSoundboardSounds;
        if (favoriteSoundboardSounds != null) {
          soundIds = favoriteSoundboardSounds.soundIds;
        }
      }
      if (soundIds == null) {
        soundIds = [];
      }
      const set = new Set(soundIds);
      if (tmp) {
        let closure_19 = [];
      }
      let playedSoundFrecency;
      if (proto != null) {
        playedSoundFrecency = proto.playedSoundFrecency;
      }
      if (null != playedSoundFrecency) {
        let playedSounds = proto.playedSoundFrecency.playedSounds;
        if (playedSounds == null) {
          playedSounds = {};
        }
        tmp7.overwriteHistory(apply.mapValues(playedSounds, (recentUses) => {
          const obj = {};
          const merged = Object.assign(recentUses);
          recentUses = recentUses.recentUses;
          const mapped = recentUses.map(Number);
          obj.recentUses = mapped.filter((arg0) => arg0 > 0);
          return obj;
        }), closure_19);
        let obj = apply;
      }
    } else if (tmp2.PRELOADED_USER_SETTINGS === type) {
      syncLocalSoundboardMutesFromUserSettings(proto);
      const SoundboardSettings = explicitContentFromProto.SoundboardSettings;
      const setting = SoundboardSettings.getSetting();
      let volume;
      if (setting != null) {
        volume = setting.volume;
      }
      let closure_21 = 0 === volume;
    }
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function handleFetchDefaultSounds() {
    const FETCHING = obj.FETCHING;
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function handleFetchDefaultSoundsSuccess(soundboardSounds) {
    const result = map.set(DEFAULT_SOUND_GUILD_ID, soundboardSounds.soundboardSounds);
    const FETCHED = obj.FETCHED;
  },
  SOUNDBOARD_SOUNDS_RECEIVED: function handleSoundboardSoundsReceived(updates) {
    updates = updates.updates;
    const item = updates.forEach((guildId) => {
      const result = closure_10.set(guildId.guildId, guildId.sounds);
    });
    const FETCHED = obj.FETCHED;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    map.delete(guild.guild.id);
  },
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function handleToggleLocalSoundboardMute(userId) {
    userId = userId.userId;
    if (set.has(userId)) {
      obj.delete(userId);
    } else {
      obj.add(userId);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(soundboardStoreState) {
    soundboardStoreState = soundboardStoreState.soundboardStoreState;
    const map = new Map(DISCORD_EPOCH.entries(soundboardStoreState.soundboardSounds));
    const set = new Set(soundboardStoreState.favoritedSoundIds);
    const set1 = new Set(soundboardStoreState.localSoundboardMutes);
  }
};
const soundboardStore = new SoundboardStore(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/soundboard/SoundboardStore.tsx");

export default soundboardStore;
export const FetchState = obj;