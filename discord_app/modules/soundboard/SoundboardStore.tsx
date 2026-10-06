// === Module 5687: SoundboardStore ===

// Module 5687 (SoundboardStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 2028 */;
import _modDef4467 from "module_4467" /* 4467 */;
import FrecencyDefault from "Frecency" /* 4933 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5690 */;
import SoundboardFavoritesExperiment2 from "SoundboardFavoritesExperiment" /* 5692 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import UserStore from "UserStore" /* 1377 */;
import TopSoundboardSoundStore from "TopSoundboardSoundStore" /* 5688 */;
import SoundboardConstants from "SoundboardConstants" /* 5689 */;
import module_12_mod from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let recentUses;

let FETCHED;
let c9;
let metroImportAll;
function handleSoundCreateOrUpdate(sound) {
  let findIndexResult;
  sound = sound.sound;
  const value = map.get(sound.guildId);
  if (value != null) {
    findIndexResult = value.findIndex((soundId) => soundId.soundId === sound.soundId);
  }
  if (null != value) {
    if (null != findIndexResult) {
      if (-1 !== findIndexResult) {
        value[findIndexResult] = sound;
        const items = [];
        const guildId2 = sound.guildId;
        set2 = map.set;
        HermesBuiltin.arraySpread(items, value, 0);
        set2(guildId2, items);
      }
    }
  }
  if (null != value) {
    if (value != null) {
      value.push(sound);
    }
    const items1 = [];
    const guildId = sound.guildId;
    set = map.set;
    HermesBuiltin.arraySpread(items1, value, 0);
    const result = set(guildId, items1);
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
  const tmp2 = entries[Symbol.iterator]();
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
}
({ DEFAULT_SOUND_GUILD_ID: metroImportAll, EMPTY_SOUND_ID_LIST: c9 } = SoundboardConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
const map = new Map();
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
let obj2 = {
  computeBonus() {
    return 100;
  },
  computeWeight(arg0) {
    const obj = _modDef4467();
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
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  }
};
let closure_23 = new FrecencyDefault(obj2);
let closure_24 = [];
let c25 = false;
let closure_26 = false;
const tmp10 = new FrecencyDefault(obj2);
let module_12 = module_12_mod;
let closure_27 = module_12.debounce((volume) => {
  const SoundboardSettings = UserSettings.SoundboardSettings;
  const obj = { volume };
  SoundboardSettings.updateSetting(obj);
}, 1000);
module_12 = module_12_mod;
let closure_28 = module_12.debounce((USER, location_stack) => {
  let guildId;
  let obj2;
  let round;
  const obj = { volume: round(obj2.amplitudeToPerceptual(USER)), location_stack, voice_guild_id: guildId };
  const track = AnalyticsUtilsDefault.track;
  const UPDATE_SOUNDBOARD_SETTINGS = AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS;
  round = Math.round;
  AnalyticsUtilsDefault;
  obj2 = PerceptualVolumeUtils;
  guildId = RTCConnectionStore.getGuildId();
  if (guildId == null) {
    guildId = null;
  }
  track(UPDATE_SOUNDBOARD_SETTINGS, obj);
}, 1000);
const Store = get_initializedDefault.Store;
class SoundboardStore extends Store {
  initialize() {
    this.waitFor(RTCConnectionStore, TopSoundboardSoundStore, UserSettingsProtoStore, UserStore);
    syncLocalSoundboardMutesFromUserSettings(UserSettingsProtoStore.settings);
    const SoundboardSettings = UserSettings.SoundboardSettings;
    const setting = SoundboardSettings.getSetting();
    let volume;
    if (setting != null) {
      volume = setting.volume;
    }
    closure_26 = 0 === volume;
  }
  getOverlaySerializedState() {
    const obj = { soundboardSounds: Object.fromEntries(map), favoritedSoundIds: Array.from(set), orderedFavoritedSoundIds: Array.from(set1), localSoundboardMutes: Array.from(set2) };
    return obj;
  }
  getSounds() {
    return map;
  }
  getSoundsForGuild(arg0) {
    return map.get(arg0);
  }
  getSound(arg0, arg1) {
    let closure_0 = arg1;
    let items = map.get(arg0);
    if (items == null) {
      items = [];
    }
    return items.find((soundId) => soundId.soundId === closure_0);
  }
  getSoundById(soundId) {
    let closure_0 = soundId;
    const arr = Array.from(map.values());
    const flatResult = arr.flat();
    return flatResult.find((soundId) => soundId.soundId === closure_0);
  }
  isFetchingSounds() {
    return FETCHED === obj.FETCHING;
  }
  isFetchingDefaultSounds() {
    return FETCHED === obj.FETCHING;
  }
  isFetching() {
    const self = this;
    const tmp = this.isFetchingSounds() || self.isFetchingDefaultSounds();
    return tmp;
  }
  shouldFetchDefaultSounds() {
    return FETCHED === obj.NOT_FETCHED;
  }
  hasFetchedDefaultSounds() {
    return FETCHED === obj.FETCHED;
  }
  isUserPlayingSounds(userId) {
    const value = map3.get(userId);
    return null != value && value > 0;
  }
  isPlayingSound(soundId) {
    return null != map2.get(soundId);
  }
  isFavoriteSound(soundId) {
    const hasItem = set.has(soundId) || set1.has(soundId);
    return hasItem;
  }
  getFavorites() {
    const SoundboardFavoritesExperiment = SoundboardFavoritesExperiment2.SoundboardFavoritesExperiment;
    return SoundboardFavoritesExperiment.getConfig({ location: "SoundboardStore" }).allowReordering ? set1 : set;
  }
  getFrequentlyUsedSoundIds() {
    return closure_23.frequently;
  }
  getTopSoundboardSoundsMetadata(id) {
    return map1.get(id);
  }
  getTopSoundboardSoundIds(id) {
    if (null == id) {
      return React4;
    } else {
      const value = map1.get(id);
      let soundIds;
      const topSoundboardSoundIdsByGuildId = TopSoundboardSoundStore.getTopSoundboardSoundIdsByGuildId(id);
      if (value != null) {
        soundIds = value.soundIds;
      }
      if (soundIds == null) {
        soundIds = topSoundboardSoundIdsByGuildId;
      }
      if (soundIds == null) {
        soundIds = React4;
      }
      return soundIds;
    }
  }
  hasPendingUsage() {
    return closure_24.length > 0;
  }
  isLocalSoundboardMuted(id) {
    return set2.has(id);
  }
  isSoundboardVolumeMuted() {
    return closure_26;
  }
  hasHadOtherUserPlaySoundInSession() {
    return c25;
  }
  hasFetchedAllSounds() {
    return FETCHED === obj.FETCHED && FETCHED === tmp.FETCHED;
  }
  isFetchingAnySounds() {
    return FETCHED === obj.FETCHING || FETCHED === tmp.FETCHING;
  }
}
Object.defineProperty(SoundboardStore.prototype, "playedSoundFrecencyWithoutFetchingLatest", {
  get: function playedSoundFrecencyWithoutFetchingLatest() {
    return closure_23;
  },
  set: undefined
});
SoundboardStore.displayName = "SoundboardStore";
const obj3 = {
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
    let closure_129_0;
    let guildId;
    ({ soundId: closure_129_0, guildId } = arg0);
    const value = map.get(guildId);
    let findIndexResult;
    if (value != null) {
      findIndexResult = value.findIndex((soundId) => soundId.soundId === closure_1_0);
    }
    const tmp3 = null == value || null == findIndexResult || findIndexResult < 0;
    if (!tmp3) {
      value.splice(findIndexResult, 1);
      const items = [];
      set = map.set;
      HermesBuiltin.arraySpread(items, value, 0);
      const result = set(guildId, items);
    }
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function handleSoundPlayStart(arg0) {
    let soundId;
    let userId;
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
    let soundId;
    let userId;
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
    const _location = volume.location;
    closure_27(volume);
    closure_28(volume, _location);
    if (closure_26 !== closure_26) {
      closure_27.flush();
    }
  },
  SOUNDBOARD_TRACK_USAGE: function handleTrackUsage(soundId) {
    soundId = soundId.soundId;
    closure_23.track(soundId);
    const obj = { key: soundId, timestamp: Date.now() };
    closure_24.push(obj);
    closure_23.compute();
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect() {
    map2.clear();
    map3.clear();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let proto;
    let type;
    ({ type, proto } = settings.settings);
    if (UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS === type) {
      let soundIds;
      const _Set = Set;
      if (proto != null) {
        const favoriteSoundboardSounds = proto.favoriteSoundboardSounds;
        if (favoriteSoundboardSounds != null) {
          soundIds = favoriteSoundboardSounds.soundIds;
        }
      }
      if (soundIds == null) {
        soundIds = [];
      }
      const self = this;
      const self2 = this;
      const _Set1 = new _Set(soundIds);
      let orderedSoundIds;
      const _Set2 = Set;
      if (proto != null) {
        const favoriteSoundboardSounds2 = proto.favoriteSoundboardSounds;
        if (favoriteSoundboardSounds2 != null) {
          orderedSoundIds = favoriteSoundboardSounds2.orderedSoundIds;
        }
      }
      if (orderedSoundIds == null) {
        orderedSoundIds = [];
      }
      const self3 = this;
      const self4 = this;
      const _Set21 = new _Set2(orderedSoundIds);
      if (tmp) {
        closure_24 = [];
      }
      let playedSoundFrecency;
      if (proto != null) {
        playedSoundFrecency = proto.playedSoundFrecency;
      }
      if (null != playedSoundFrecency) {
        const overwriteHistory = closure_23.overwriteHistory;
        let playedSounds = proto.playedSoundFrecency.playedSounds;
        const mapValues = module_12.mapValues;
        module_12;
        if (playedSounds == null) {
          playedSounds = {};
        }
        overwriteHistory(mapValues(playedSounds, (recentUses) => {
          let mapped;
          const obj = { recentUses: mapped.filter((item) => item > 0) };
          const merged = Object.assign(recentUses);
          recentUses = recentUses.recentUses;
          mapped = recentUses.map(Number);
          return obj;
        }), closure_24);
      }
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
    const result = map.set(metroImportAll, soundboardSounds.soundboardSounds);
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
    const obj = SnowflakeUtilsDefault;
    new Map(obj.entries(soundboardStoreState.soundboardSounds));
    new Set(soundboardStoreState.favoritedSoundIds);
    new Set(soundboardStoreState.orderedFavoritedSoundIds);
    new Set(soundboardStoreState.localSoundboardMutes);
  },
  TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function handleTopSoundboardSoundsLoaded(topSoundsMetadata) {
    let addResult;
    topSoundsMetadata = topSoundsMetadata.topSoundsMetadata;
    const guildId = topSoundsMetadata.guildId;
    const obj = { soundIds: topSoundsMetadata.map((soundId) => soundId.soundId), topSoundsTTL: addResult.valueOf() };
    set = map1.set;
    const obj2 = _modDef4467();
    addResult = obj2.add(1, "days");
    const result = set(guildId, obj);
  }
};
const soundboardStore = new SoundboardStore(DispatcherDefault, obj3);
let result = size.fileFinishedImporting("modules/soundboard/SoundboardStore.tsx");

export default soundboardStore;
export { FetchState };