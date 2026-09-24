// discord_app/modules/soundboard/SoundboardStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import _modDef4416 from "../../../_runtime/metro/04416__.js";
import FrecencyDefault from "../../lib/Frecency.tsx";
import PerceptualVolumeUtils from "../../utils/PerceptualVolumeUtils.tsx";
import SoundboardFavoritesExperiment2 from "experiments/SoundboardFavoritesExperiment.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import TopSoundboardSoundStore from "top_sounds/TopSoundboardSoundStore.tsx";
import apply from "../../../_runtime/metro/00012__.js";

require = fn;
function handleSoundCreateOrUpdate(sound) {
  sound = sound.sound;
  value = map.get(sound.guildId);
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
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    if (tmp5[1].soundboardMuted) {
      let addResult = set2.add(first);
    } else {
      let deleteResult = set2.delete(first);
    }
    continue;
  }
  const keys = set2.keys();
  for (const item10038 of keys) {
    if (null == user[item10038]) {
      let deleteResult1 = set2.delete(tmp12);
    }
    continue;
  }
  tmp2 = entries[Symbol.iterator]();
}
const SoundboardConstants = fn(5313);
({ DEFAULT_SOUND_GUILD_ID: closure_8, EMPTY_SOUND_ID_LIST: closure_9 } = SoundboardConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let map = new Map();
const map1 = new Map();
const map2 = new Map();
let set = new Set();
({ NOT_FETCHED: FETCHED, NOT_FETCHED: FETCHED } = FetchState);
let set1 = new Set();
set = set1;
let set2 = new Set();
set1 = set2;
const map3 = new Map();
let closure_22 = Date.UTC(2026, 5, 29);
let closure_23 = new FrecencyDefault({
  computeBonus() {
    return 100;
  },
  computeWeight(arg0) {
    if (arg0 > obj.diff(closure_22, "days")) {
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
    obj = _modDef4416();
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {},
});
let closure_24 = [];
let c25 = false;
let closure_26 = false;
let closure_27 = apply.debounce((volume, location_stack) => {
  const obj2 = { volume: null, location_stack: null, voice_guild_id: null };
  const obj = AnalyticsUtilsDefault;
  obj2.volume = Math.round(PerceptualVolumeUtils.amplitudeToPerceptual(volume));
  obj2.location_stack = location_stack;
  let guildId = RTCConnectionStore.getGuildId();
  if (guildId == null) {
    guildId = null;
  }
  obj2.voice_guild_id = guildId;
  obj.track(AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, obj2);
  const SoundboardSettings = UserSettings.SoundboardSettings;
  SoundboardSettings.updateSetting({ volume });
  const obj4 = { volume };
}, 1000);
const Store = initializeDefault.Store;
class SoundboardStore extends Store {}
const prototype = SoundboardStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(RTCConnectionStore, TopSoundboardSoundStore, UserSettingsProtoStore, UserStore);
  syncLocalSoundboardMutesFromUserSettings(UserSettingsProtoStore.settings);
  const SoundboardSettings = UserSettings.SoundboardSettings;
  const setting = SoundboardSettings.getSetting();
  let volume;
  if (setting != null) {
    volume = setting.volume;
  }
  closure_26 = 0 === volume;
};
prototype["getOverlaySerializedState"] = function getOverlaySerializedState() {
  return {
    soundboardSounds: Object.fromEntries(map),
    favoritedSoundIds: Array.from(set),
    orderedFavoritedSoundIds: Array.from(set1),
    localSoundboardMutes: Array.from(set2),
  };
};
prototype["getSounds"] = function getSounds() {
  return map;
};
prototype["getSoundsForGuild"] = function getSoundsForGuild(arg0) {
  return map.get(arg0);
};
prototype["getSound"] = function getSound(arg0, arg1) {
  closure_0 = arg1;
  let items = map.get(arg0);
  if (items == null) {
    items = [];
  }
  return items.find((soundId) => soundId.soundId === closure_0);
};
prototype["getSoundById"] = function getSoundById(soundId) {
  closure_0 = soundId;
  const arr = Array.from(map.values());
  return Array.from(map.values())
    .flat()
    .find((soundId) => soundId.soundId === closure_0);
};
prototype["isFetchingSounds"] = function isFetchingSounds() {
  return FETCHED === obj.FETCHING;
};
prototype["isFetchingDefaultSounds"] = function isFetchingDefaultSounds() {
  return FETCHED === obj.FETCHING;
};
prototype["isFetching"] = function isFetching() {
  const self = this;
  return this.isFetchingSounds() || self.isFetchingDefaultSounds();
};
prototype["shouldFetchDefaultSounds"] = function shouldFetchDefaultSounds() {
  return FETCHED === obj.NOT_FETCHED;
};
prototype["hasFetchedDefaultSounds"] = function hasFetchedDefaultSounds() {
  return FETCHED === obj.FETCHED;
};
prototype["isUserPlayingSounds"] = function isUserPlayingSounds(userId) {
  value = map3.get(userId);
  let tmp2 = null != value;
  if (tmp2) {
    tmp2 = value > 0;
  }
  return tmp2;
};
prototype["isPlayingSound"] = function isPlayingSound(sharedValue1) {
  return null != map2.get(sharedValue1);
};
prototype["isFavoriteSound"] = function isFavoriteSound(soundId) {
  let hasItem = set.has(soundId);
  if (!hasItem) {
    hasItem = set1.has(soundId);
  }
  return hasItem;
};
prototype["getFavorites"] = function getFavorites() {
  const SoundboardFavoritesExperiment = SoundboardFavoritesExperiment2.SoundboardFavoritesExperiment;
  return SoundboardFavoritesExperiment.getConfig({ location: "SoundboardStore" }).allowReordering ? set1 : set;
};
prototype["getFrequentlyUsedSoundIds"] = function getFrequentlyUsedSoundIds() {
  return closure_23.frequently;
};
prototype["getTopSoundboardSoundsMetadata"] = function getTopSoundboardSoundsMetadata(id) {
  return map1.get(id);
};
prototype["getTopSoundboardSoundIds"] = function getTopSoundboardSoundIds(id) {
  if (null == id) {
    return React7;
  } else {
    value = map1.get(id);
    let soundIds;
    const topSoundboardSoundIdsByGuildId = TopSoundboardSoundStore.getTopSoundboardSoundIdsByGuildId(id);
    if (value != null) {
      soundIds = value.soundIds;
    }
    if (soundIds == null) {
      soundIds = topSoundboardSoundIdsByGuildId;
    }
    if (soundIds == null) {
      soundIds = React7;
    }
    return soundIds;
  }
};
prototype["hasPendingUsage"] = function hasPendingUsage() {
  return closure_24.length > 0;
};
Object.defineProperty(prototype, "playedSoundFrecencyWithoutFetchingLatest", {
  get: function playedSoundFrecencyWithoutFetchingLatest() {
    return closure_23;
  },
  set: undefined,
});
prototype["isLocalSoundboardMuted"] = function isLocalSoundboardMuted(id) {
  return set2.has(id);
};
prototype["isSoundboardVolumeMuted"] = function isSoundboardVolumeMuted() {
  return closure_26;
};
prototype["hasHadOtherUserPlaySoundInSession"] = function hasHadOtherUserPlaySoundInSession() {
  return c25;
};
prototype["hasFetchedAllSounds"] = function hasFetchedAllSounds() {
  let tmp2 = FETCHED === obj.FETCHED;
  if (tmp2) {
    tmp2 = FETCHED === tmp.FETCHED;
  }
  return tmp2;
};
prototype["isFetchingAnySounds"] = function isFetchingAnySounds() {
  let tmp2 = FETCHED === obj.FETCHING;
  if (!tmp2) {
    tmp2 = FETCHED === tmp.FETCHING;
  }
  return tmp2;
};
SoundboardStore.displayName = "SoundboardStore";
const soundboardStore = new SoundboardStore(DispatcherDefault, {
  LOGOUT: function handleReset() {
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    c25 = false;
    ({ NOT_FETCHED: FETCHED, NOT_FETCHED: FETCHED } = obj);
    closure_26 = false;
    closure_24 = [];
    closure_23.overwriteHistory({});
  },
  GUILD_SOUNDBOARD_FETCH: function handleSoundboardFetch() {
    FETCHED = obj.FETCHING;
  },
  GUILD_SOUNDBOARD_SOUND_CREATE: handleSoundCreateOrUpdate,
  GUILD_SOUNDBOARD_SOUND_UPDATE: handleSoundCreateOrUpdate,
  GUILD_SOUNDBOARD_SOUND_DELETE: function handleSoundDelete(arg0) {
    ({ soundId: require, guildId } = arg0);
    value = map.get(guildId);
    let findIndexResult;
    if (value != null) {
      findIndexResult = value.findIndex((soundId) => soundId.soundId === require);
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
    ({ soundId, userId } = arg0);
    let num = map2.get(soundId);
    if (num == null) {
      num = 0;
    }
    const sum = num + 1;
    let num2 = map3.get(userId);
    if (num2 == null) {
      num2 = 0;
    }
    const sum1 = num2 + 1;
    const result = map2.set(soundId, sum);
    const result1 = map3.set(userId, sum1);
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (userId !== id) {
      c25 = true;
    }
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_END: function handleSoundPlayEnd(arg0) {
    ({ soundId, userId } = arg0);
    let num = map2.get(soundId);
    if (num == null) {
      num = 0;
    }
    const diff = num - 1;
    let num2 = map3.get(userId);
    if (num2 == null) {
      num2 = 0;
    }
    const diff1 = num2 - 1;
    if (diff <= 0) {
      map2.delete(soundId);
    } else {
      const result = map2.set(soundId, diff);
    }
    if (diff1 <= 0) {
      map3.delete(userId);
    } else {
      const result1 = map3.set(userId, diff1);
    }
  },
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: function handleSoundsUpdate(guildId) {
    const result = map.set(guildId.guildId, guildId.soundboardSounds);
  },
  USER_SOUNDBOARD_SET_VOLUME: function handleSetLocalVolume(volume) {
    volume = volume.volume;
    closure_26 = 0 === volume;
    closure_27(volume, volume.location);
    if (closure_26 !== closure_26) {
      closure_27.flush();
    }
  },
  SOUNDBOARD_TRACK_USAGE: function handleTrackUsage(soundId) {
    soundId = soundId.soundId;
    closure_23.track(soundId);
    closure_24.push({ key: soundId, timestamp: Date.now() });
    closure_23.compute();
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect() {
    map2.clear();
    map3.clear();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
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
      let orderedSoundIds;
      if (proto != null) {
        const favoriteSoundboardSounds2 = proto.favoriteSoundboardSounds;
        if (favoriteSoundboardSounds2 != null) {
          orderedSoundIds = favoriteSoundboardSounds2.orderedSoundIds;
        }
      }
      if (orderedSoundIds == null) {
        orderedSoundIds = [];
      }
      set = new Set(soundIds);
      if (tmp) {
        closure_24 = [];
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
        closure_23.overwriteHistory(
          apply.mapValues(playedSounds, (recentUses) => {
            const obj = {};
            const merged = Object.assign(recentUses);
            recentUses = recentUses.recentUses;
            const mapped = recentUses.map(Number);
            obj.recentUses = mapped.filter((item) => item > 0);
            return obj;
          }),
          closure_24,
        );
      }
      set1 = new Set(orderedSoundIds);
    } else if (tmp2.PRELOADED_USER_SETTINGS === type) {
      syncLocalSoundboardMutesFromUserSettings(proto);
      const SoundboardSettings = UserSettings.SoundboardSettings;
      const setting = SoundboardSettings.getSetting();
      let volume;
      if (setting != null) {
        volume = setting.volume;
      }
      closure_26 = 0 === volume;
    }
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function handleFetchDefaultSounds() {
    FETCHED = obj.FETCHING;
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function handleFetchDefaultSoundsSuccess(soundboardSounds) {
    const result = map.set(React6, soundboardSounds.soundboardSounds);
    FETCHED = obj.FETCHED;
  },
  SOUNDBOARD_SOUNDS_RECEIVED: function handleSoundboardSoundsReceived(updates) {
    updates = updates.updates;
    const item = updates.forEach((guildId) => {
      const result = map.set(guildId.guildId, guildId.sounds);
    });
    FETCHED = obj.FETCHED;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    map.delete(guild.id);
    map1.delete(guild.id);
  },
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function handleToggleLocalSoundboardMute(userId) {
    userId = userId.userId;
    if (set2.has(userId)) {
      set2.delete(userId);
    } else {
      set2.add(userId);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(soundboardStoreState) {
    soundboardStoreState = soundboardStoreState.soundboardStoreState;
    map = new Map(SnowflakeUtilsDefault.entries(soundboardStoreState.soundboardSounds));
    set = new Set(soundboardStoreState.favoritedSoundIds);
    set1 = new Set(soundboardStoreState.orderedFavoritedSoundIds);
    set2 = new Set(soundboardStoreState.localSoundboardMutes);
  },
  TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function handleTopSoundboardSoundsLoaded(topSoundsMetadata) {
    topSoundsMetadata = topSoundsMetadata.topSoundsMetadata;
    const obj = { soundIds: topSoundsMetadata.map((soundId) => soundId.soundId), topSoundsTTL: null };
    const obj2 = _modDef4416();
    obj.topSoundsTTL = _modDef4416().add(1, "days").valueOf();
    const result = map1.set(topSoundsMetadata.guildId, obj);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/SoundboardStore.tsx");

export default soundboardStore;
export { FetchState };
