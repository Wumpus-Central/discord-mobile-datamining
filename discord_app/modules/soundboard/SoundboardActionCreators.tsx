// discord_app/modules/soundboard/SoundboardActionCreators.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import util from "../../intl/index.native.tsx";
import UserSettingsProtoActionCreators from "../user_settings/UserSettingsProtoActionCreators.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import SoundboardStore from "SoundboardStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_11 = async function _fetchDefaultSoundsFromApi2() {
  closure_1 = tmp3;
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({
    url: constants.SOUNDBOARD_DEFAULT_SOUNDS,
    rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
  });
  if (1 === tmp7) {
    c3 = 0;
    closure_128_1 = closure_2;
    closure_129_1(closure_129_2[7]).dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" });
    closure_129_1(closure_129_2[7]);
    const result = closure_129_0(closure_129_2[8]).captureOrIgnoreApiError(
      new closure_129_1(closure_129_2[9])(closure_128_1),
    );
    c5 = 3;
    closure_129_0(closure_129_2[8]);
    new closure_129_1(closure_129_2[9])(closure_128_1);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const body = value.body;
    closure_128_0 = body.map((item) => closure_1_0(closure_1_2[6]).soundboardSoundFromAPI(item, closure_1_5));
    closure_129_1(closure_129_2[7]).dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
      soundboardSounds: closure_128_0,
    });
    c3 = 0;
    closure_129_1(closure_129_2[7]);
  }
  return value;
};
function _maybeFetchDefaultSounds() {
  if (SoundboardStore.shouldFetchDefaultSounds()) {
    DispatcherDefault.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
    const SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS = "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS";
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      function onSoundboardActionCompleted() {
        DispatcherDefault.unsubscribe(SOUNDBOARD_SOUNDS_RECEIVED, onSoundboardActionCompleted);
        const timerId = setTimeout(closure_0, 0);
      }
      const subscription = DispatcherDefault.subscribe(closure_0, onSoundboardActionCompleted);
    });
    (function _fetchDefaultSoundsFromApi() {
      const self = this;
      const apply = closure_1_11.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return promise;
  } else {
    return Promise.resolve();
  }
}
function _maybeFetchGuildSoundboardSounds() {
  const guildIdsToFetchSoundsFor = SOUNDBOARD_SOUNDS_RECEIVED(6753).getGuildIdsToFetchSoundsFor();
  if (0 === guildIdsToFetchSoundsFor.length) {
    return Promise.resolve();
  } else {
    SOUNDBOARD_SOUNDS_RECEIVED = "SOUNDBOARD_SOUNDS_RECEIVED";
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      function onSoundboardActionCompleted() {
        DispatcherDefault.unsubscribe(SOUNDBOARD_SOUNDS_RECEIVED, onSoundboardActionCompleted);
        const timerId = setTimeout(closure_0, 0);
      }
      const subscription = DispatcherDefault.subscribe(closure_0, onSoundboardActionCompleted);
    });
    DispatcherDefault.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" });
    const obj4 = { type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: guildIdsToFetchSoundsFor };
    DispatcherDefault.dispatch(obj4);
    return promise;
  }
  const obj = SOUNDBOARD_SOUNDS_RECEIVED(6753);
}
let closure_14 = async function _maybeFetchSoundboardSounds(arg0) {
  let disableAnalytics = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
    closure_3 = tmp3;
    closure_2 = tmp2;
    const _performance2 = performance;
    closure_130_0 = performance.now();
    let tmp19 = !c10;
    if (!c10) {
      disableAnalytics = undefined;
      if (disableAnalytics != null) {
        disableAnalytics = disableAnalytics.disableAnalytics;
      }
      c1 = disableAnalytics;
      if (disableAnalytics == null) {
        c1 = false;
      }
      tmp19 = !c1;
    }
    closure_130_1 = tmp19;
    if (tmp19) {
      c10 = true;
    }
    const items = [_maybeFetchDefaultSounds(), _maybeFetchGuildSoundboardSounds()];
    await Promise.all(items);
    closure_130_2 = value;
    if (closure_130_1) {
      const _performance = performance;
      closure_130_3 = performance.now();
      closure_131_1(closure_131_2[11]).track(closure_131_7.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, {
        elapsed_ms: closure_130_3 - closure_130_0,
      });
      closure_131_1(closure_131_2[11]);
    }
    return closure_130_2;
  })();
};
let closure_15 = async function _uploadSound(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({
            guildId: closure_129_0,
            name: closure_129_1,
            sound: closure_129_2,
            volume: closure_129_3,
            emojiId: closure_129_4,
            emojiName: closure_129_5,
          } = closure_0);
          closure_129_6 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const HTTP = closure_130_0(closure_130_2[5]).HTTP;
          const request = {
            url: closure_130_6.GUILD_SOUNDBOARD_SOUNDS(closure_129_0),
            body: null,
            rejectWithError: null,
          };
          const obj5 = {
            name: closure_129_1,
            sound: closure_129_2,
            volume: closure_129_3,
            emoji_id: closure_129_4,
            emoji_name: closure_129_5,
          };
          request.body = obj5;
          request.rejectWithError = closure_130_0(closure_130_2[5]).rejectWithMigratedError();
          c3 = 2;
          c4 = 1;
          const obj6 = { value: HTTP.post(request), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_6 = value;
        c4 = 3;
        const obj8 = {
          value: closure_130_0(closure_130_2[6]).soundboardSoundFromAPI(closure_129_6.body, closure_129_0),
          done: true,
        };
        return obj8;
      }
    } catch (tmp12) {
      c4 = tmp;
      throw tmp12;
    }
  }
};
let closure_16 = async function _updateSound(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({
            guildId: closure_129_0,
            soundId: closure_129_1,
            name: closure_129_2,
            volume: closure_129_3,
            emojiId: closure_129_4,
            emojiName: closure_129_5,
          } = closure_0);
          closure_129_6 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const HTTP = closure_130_0(closure_130_2[5]).HTTP;
          const request = {
            url: closure_130_6.GUILD_SOUNDBOARD_SOUND(closure_129_0, closure_129_1),
            body: null,
            rejectWithError: null,
          };
          const obj5 = {
            name: closure_129_2,
            volume: closure_129_3,
            emoji_id: closure_129_4,
            emoji_name: closure_129_5,
          };
          request.body = obj5;
          request.rejectWithError = closure_130_0(closure_130_2[5]).rejectWithMigratedError();
          c3 = 2;
          c4 = 1;
          const obj6 = { value: HTTP.patch(request), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_6 = value;
        c4 = 3;
        const obj8 = {
          value: closure_130_0(closure_130_2[6]).soundboardSoundFromAPI(closure_129_6.body, closure_129_0),
          done: true,
        };
        return obj8;
      }
    } catch (tmp12) {
      c4 = tmp;
      throw tmp12;
    }
  }
};
let closure_17 = async function _deleteSound(arg0) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const HTTP = require("HTTPUtils").HTTP;
          const obj4 = {
            url: timestampProducer.GUILD_SOUNDBOARD_SOUND(closure_0, closure_1),
            oldFormErrors: true,
            rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
          };
          c3 = 1;
          c2 = 1;
          const obj5 = { value: HTTP.del(obj4), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c2 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c2 = tmp;
      throw tmp5;
    }
  }
};
let closure_18 = async function _fetchSoundGuildData(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          c5 = 1;
          const HTTP = require("HTTPUtils").HTTP;
          const obj4 = {
            url: timestampProducer.SOUNDBOARD_SOUND_GUILD_DATA(closure_0, closure_1),
            rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
          };
          c6 = 2;
          c7 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_1 = closure_4;
        const tmp25 = new closure_131_1(closure_131_2[9])(closure_130_1);
        throw tmp25;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_130_0 = value;
        let discoverableGuild = null;
        if (null != closure_130_0.body) {
          discoverableGuild = closure_131_0(closure_131_2[16]).makeDiscoverableGuild(closure_130_0.body);
          const obj = closure_131_0(closure_131_2[16]);
        }
        c5 = 0;
        c7 = 3;
        const obj7 = { value: discoverableGuild, done: true };
        return obj7;
      }
    } catch (tmp27) {
      closure_4 = tmp27;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp27;
      } else {
        c6 = tmp;
      }
    }
  }
};
const DEFAULT_SOUND_GUILD_ID = fn(5314).DEFAULT_SOUND_GUILD_ID;
const Constants = fn(1074);
({ Endpoints: metroRequire, AnalyticEvents: closure_7 } = Constants);
const UserSettingsConstants = fn(1084);
({ MAX_FAVORITES: closure_8, UserSettingsDelay: closure_9 } = UserSettingsConstants);
let c10 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/SoundboardActionCreators.tsx");

export const maybeFetchSoundboardSounds = function maybeFetchSoundboardSounds() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uploadSound = function uploadSound() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSound = function updateSound() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteSound = function deleteSound() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addFavoriteSound = function addFavoriteSound(soundId) {
  _require = soundId;
  const FrecencyUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteSoundboardSounds",
    async (soundIds) => {
      if (obj.size(soundIds.soundIds) < React6) {
        if (tmpResult.size(soundIds.orderedSoundIds) < React6) {
          const soundIds2 = soundIds.soundIds;
          const hasItem = soundIds2.includes(closure_0);
          let flag = !hasItem;
          if (hasItem) {
            const orderedSoundIds = soundIds.orderedSoundIds;
            flag = !orderedSoundIds.includes(closure_0);
          }
          if (flag) {
            soundIds = soundIds.soundIds;
            if (!soundIds.includes(closure_0)) {
              const soundIds1 = soundIds.soundIds;
              soundIds1.push(closure_0);
            }
            const orderedSoundIds2 = soundIds.orderedSoundIds;
            if (!orderedSoundIds2.includes(closure_0)) {
              const orderedSoundIds1 = soundIds.orderedSoundIds;
              orderedSoundIds1.push(closure_0);
            }
          }
        }
        return flag;
      }
      obj = _modDef12;
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t["+XYXtZ"]);
      const intl2 = util.intl;
      obj2.body = intl2.formatToPlainString(util.t.JaIyFi, { count: React6 });
      AlertActionCreatorsDefault.show(obj2);
      flag = false;
      const tmpResult2 = AlertActionCreatorsDefault;
    },
    constants.INFREQUENT_USER_ACTION,
  );
};
export const reorderFavoriteSound = function reorderFavoriteSound(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  if (arg0 !== arg1) {
    const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync(
      "favoriteSoundboardSounds",
      async (orderedSoundIds) => {
        orderedSoundIds = orderedSoundIds.orderedSoundIds;
        const index = orderedSoundIds.indexOf(closure_0);
        if (-1 === index) {
          return false;
        } else {
          if (null == closure_1) {
            let length = orderedSoundIds.orderedSoundIds.length;
          } else {
            const orderedSoundIds1 = orderedSoundIds.orderedSoundIds;
            length = orderedSoundIds1.indexOf(tmp3);
          }
          if (-1 !== length) {
            if (length !== index) {
              const orderedSoundIds2 = orderedSoundIds.orderedSoundIds;
              orderedSoundIds2.splice(index, 1);
              let diff = length;
              if (index < length) {
                diff = length - 1;
              }
              const orderedSoundIds3 = orderedSoundIds.orderedSoundIds;
              orderedSoundIds3.splice(diff, 0, closure_0);
            }
          }
          return false;
        }
      },
      constants.INFREQUENT_USER_ACTION,
    );
  }
};
export const removeFavoriteSound = function removeFavoriteSound(soundId) {
  closure_0 = soundId;
  const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteSoundboardSounds",
    async (soundIds) => {
      soundIds = soundIds.soundIds;
      soundIds.soundIds = soundIds.filter((item) => item !== soundId);
      const orderedSoundIds = soundIds.orderedSoundIds;
      soundIds.orderedSoundIds = orderedSoundIds.filter((item) => item !== soundId);
    },
    constants.INFREQUENT_USER_ACTION,
  );
};
export const fetchSoundGuildData = function fetchSoundGuildData() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const playSoundLocally = function playSoundLocally(id, sound) {
  DispatcherDefault.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound, channelId: id });
};
export const reportSoundStartedPlaying = function reportSoundStartedPlaying(soundId, userId) {
  DispatcherDefault.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId, userId });
};
export const reportSoundFinishedPlaying = function reportSoundFinishedPlaying(soundId, userId) {
  DispatcherDefault.dispatch({ type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId, userId });
};
export const updateUserSoundboardVolume = function updateUserSoundboardVolume(volume, analyticsLocations) {
  DispatcherDefault.dispatch({ type: "USER_SOUNDBOARD_SET_VOLUME", volume, location: analyticsLocations });
};
export const muteCustomJoinSound = function muteCustomJoinSound(channelId) {
  DispatcherDefault.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId });
};
