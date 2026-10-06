// discord_app/modules/soundboard/SoundboardActionCreators.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import intl3 from "../../intl/index.native.tsx";
import UserSettingsProtoActionCreators from "../user_settings/UserSettingsProtoActionCreators.tsx";
import SoundboardConstants from "SoundboardConstants.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import SoundboardStore from "SoundboardStore.tsx";
import Constants from "../../Constants.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c6, c7, closure_4, soundIds;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _fetchDefaultSoundsFromApi2() {
  obj = _asyncToGenerator(async function () {
    let obj9;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let soundboardSounds;
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
            closure_1 = tmp;
            soundboardSounds = undefined;
            c3 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj5 = { url: constants.SOUNDBOARD_DEFAULT_SOUNDS, rejectWithError: obj9.rejectWithMigratedError() };
            const get = HTTP.get;
            obj9 = require("HTTPUtils");
            c4 = 2;
            c5 = 1;
            const obj6 = { value: get(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            const obj4 = closure_129_1(closure_129_2[7]);
            obj4.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" });
            const captureOrIgnoreApiError = closure_129_0(closure_129_2[8]).captureOrIgnoreApiError;
            const self = this;
            const self2 = this;
            const tmp20 = closure_129_0(closure_129_2[8]);
            const tmp24 = new closure_129_1(closure_129_2[9])(closure_1);
            const result = captureOrIgnoreApiError(tmp24);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const body = value.body;
            soundboardSounds = body.map((item) => {
              obj = soundboardSounds(closure_1_2[6]);
              return obj.soundboardSoundFromAPI(item, closure_1_5);
            });
            obj = closure_129_1(closure_129_2[7]);
            const obj8 = { type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", soundboardSounds };
            obj.dispatch(obj8);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp27) {
        closure_2 = tmp27;
        if (0 === c3) {
          c5 = 3;
          throw tmp27;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function _maybeFetchDefaultSounds() {
  function _fetchDefaultSoundsFromApi() {
    return obj(...arguments);
  }
  if (SoundboardStore.shouldFetchDefaultSounds()) {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
    const SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS = "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS";
    const self = this;
    const self2 = this;
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      obj = DispatcherDefault;
      function onSoundboardActionCompleted() {
        obj = DispatcherDefault;
        obj.unsubscribe(SOUNDBOARD_SOUNDS_RECEIVED, onSoundboardActionCompleted);
        const timerId = setTimeout(closure_0, 0);
      }
      const subscription = obj.subscribe(closure_0, onSoundboardActionCompleted);
    });
    _fetchDefaultSoundsFromApi();
    return promise;
  } else {
    return Promise.resolve();
  }
}
function _maybeFetchGuildSoundboardSounds() {
  let SOUNDBOARD_SOUNDS_RECEIVED;
  obj = SOUNDBOARD_SOUNDS_RECEIVED(6853);
  const guildIdsToFetchSoundsFor = obj.getGuildIdsToFetchSoundsFor();
  if (0 === guildIdsToFetchSoundsFor.length) {
    return Promise.resolve();
  } else {
    SOUNDBOARD_SOUNDS_RECEIVED = "SOUNDBOARD_SOUNDS_RECEIVED";
    const self = this;
    const self2 = this;
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      obj = DispatcherDefault;
      function onSoundboardActionCompleted() {
        obj = DispatcherDefault;
        obj.unsubscribe(SOUNDBOARD_SOUNDS_RECEIVED, onSoundboardActionCompleted);
        const timerId = setTimeout(closure_0, 0);
      }
      const subscription = obj.subscribe(closure_0, onSoundboardActionCompleted);
    });
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" });
    const obj4 = { type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: guildIdsToFetchSoundsFor };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj4);
    return promise;
  }
}
obj = function _maybeFetchSoundboardSounds() {
  obj = _asyncToGenerator(async (arg0) => {
    let c4;
    let c5;
    let closure_3 = tmp2;
    const value = tmp;
    const _performance2 = performance;
    let closure_0 = performance.now();
    let tmp18 = !c10;
    if (tmp18) {
      let disableAnalytics;
      if (closure_0 != null) {
        disableAnalytics = tmp27.disableAnalytics;
      }
      let c1 = disableAnalytics;
      if (disableAnalytics == null) {
        c1 = false;
      }
      tmp18 = !c1;
    }
    let closure_1 = tmp18;
    if (closure_1) {
      c10 = true;
    }
    const items = [_maybeFetchDefaultSounds(), _maybeFetchGuildSoundboardSounds()];
    await all(items);
    const tmp26 = closure_1;
    if (tmp26) {
      const _performance = performance;
      closure_3 = performance.now();
      const obj6 = { elapsed_ms: closure_3 - closure_0 };
      obj = closure_131_1(closure_131_2[11]);
      obj.track(closure_131_7.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, obj6);
    }
    return value;
  });
  return obj(...arguments);
};
obj = function _uploadSound() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let emoji_id;
    let obj10;
    let obj5;
    let volume;
    let closure_0 = arg0;
    if (emoji_id === 2) {
      emoji_id = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let name;
        let sound;
        let emoji_name;
        let body;
        emoji_id = 2;
        if (0 === volume) {
          if (arg0 === 1) {
            emoji_id = 3;
            throw value;
          } else if (arg0 === 2) {
            emoji_id = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            name = undefined;
            sound = undefined;
            emoji_name = undefined;
            ({ guildId: c0, name: c1, sound: c2, volume: c3, emojiId: c4, emojiName: c5 } = closure_0);
            body = undefined;
            volume = 1;
            emoji_id = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === volume) {
          if (arg0 === 1) {
            emoji_id = 3;
            throw value;
          } else if (arg0 === 2) {
            emoji_id = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const HTTP = closure_130_0(closure_130_2[5]).HTTP;
            const request = {
              url: closure_130_6.GUILD_SOUNDBOARD_SOUNDS(c0),
              body: obj5,
              rejectWithError: obj10.rejectWithMigratedError(),
            };
            const post = HTTP.post;
            obj5 = { name, sound, volume, emoji_id, emoji_name };
            obj10 = closure_130_0(closure_130_2[5]);
            volume = 2;
            emoji_id = 1;
            const obj6 = { value: post(request), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          emoji_id = 3;
          throw value;
        } else if (arg0 === 2) {
          emoji_id = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value;
          emoji_id = 3;
          const obj8 = { value: obj.soundboardSoundFromAPI(body.body, c0), done: true };
          obj = closure_130_0(closure_130_2[6]);
          return obj8;
        }
      } catch (tmp11) {
        emoji_id = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _updateSound() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let emoji_id;
    let obj10;
    let obj5;
    let volume;
    let closure_0 = arg0;
    if (emoji_id === 2) {
      emoji_id = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let name;
        let emoji_name;
        let body;
        emoji_id = 2;
        if (0 === volume) {
          if (arg0 === 1) {
            emoji_id = 3;
            throw value;
          } else if (arg0 === 2) {
            emoji_id = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            name = undefined;
            emoji_name = undefined;
            ({ guildId: c0, soundId: c1, name: c2, volume: c3, emojiId: c4, emojiName: c5 } = closure_0);
            body = undefined;
            volume = 1;
            emoji_id = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === volume) {
          if (arg0 === 1) {
            emoji_id = 3;
            throw value;
          } else if (arg0 === 2) {
            emoji_id = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const HTTP = closure_130_0(closure_130_2[5]).HTTP;
            const request = {
              url: closure_130_6.GUILD_SOUNDBOARD_SOUND(c0, c1),
              body: obj5,
              rejectWithError: obj10.rejectWithMigratedError(),
            };
            const patch = HTTP.patch;
            obj5 = { name, volume, emoji_id, emoji_name };
            obj10 = closure_130_0(closure_130_2[5]);
            volume = 2;
            emoji_id = 1;
            const obj6 = { value: patch(request), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          emoji_id = 3;
          throw value;
        } else if (arg0 === 2) {
          emoji_id = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value;
          emoji_id = 3;
          const obj8 = { value: obj.soundboardSoundFromAPI(body.body, c0), done: true };
          obj = closure_130_0(closure_130_2[6]);
          return obj8;
        }
      } catch (tmp11) {
        emoji_id = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _deleteSound() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
              url: metroRequire.GUILD_SOUNDBOARD_SOUND(closure_0, closure_1),
              oldFormErrors: true,
              rejectWithError: obj6.rejectWithMigratedError(),
            };
            const del = HTTP.del;
            obj6 = require("HTTPUtils");
            c3 = 1;
            c2 = 1;
            const obj5 = { value: del(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c2 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchSoundGuildData() {
  obj = _asyncToGenerator(async function (arg0, arg1) {
    let obj8;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
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
            let closure_3 = tmp;
            let closure_2 = tmp4;
            closure_0 = undefined;
            c5 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj4 = {
              url: metroRequire.SOUNDBOARD_SOUND_GUILD_DATA(closure_0, closure_1),
              rejectWithError: obj8.rejectWithMigratedError(),
            };
            const get = HTTP.get;
            obj8 = require("HTTPUtils");
            c6 = 2;
            c7 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_1 = closure_4;
          const self = this;
          const self2 = this;
          const tmp20 = new closure_131_1(closure_131_2[9])(closure_1);
          throw tmp20;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          let discoverableGuild = null;
          if (null != closure_0.body) {
            obj = closure_131_0(closure_131_2[16]);
            discoverableGuild = obj.makeDiscoverableGuild(closure_0.body);
          }
          c5 = 0;
          c7 = 3;
          const obj7 = { value: discoverableGuild, done: true };
          return obj7;
        }
      } catch (tmp22) {
        closure_4 = tmp22;
        if (0 === c5) {
          c7 = 3;
          throw tmp22;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
({ Endpoints: metroRequire, AnalyticEvents: metroImportDefault } = Constants);
({ MAX_FAVORITES: metroImportAll, UserSettingsDelay: c9 } = UserSettingsConstants);
let c10 = false;
let result = size.fileFinishedImporting("modules/soundboard/SoundboardActionCreators.tsx");

export const maybeFetchSoundboardSounds = function maybeFetchSoundboardSounds() {
  return obj(...arguments);
};
export const uploadSound = function uploadSound() {
  return obj(...arguments);
};
export const updateSound = function updateSound() {
  return obj(...arguments);
};
export const deleteSound = function deleteSound() {
  return obj(...arguments);
};
export const addFavoriteSound = function addFavoriteSound(soundId) {
  _require = soundId;
  const FrecencyUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteSoundboardSounds",
    async (soundIds) => {
      let intl;
      let intl2;
      obj = _modDef12;
      if (obj.size(soundIds.soundIds) < metroImportAll) {
        let flag;
        const tmpResult = _modDef12;
        if (tmpResult.size(soundIds.orderedSoundIds) < metroImportAll) {
          const soundIds2 = soundIds.soundIds;
          const hasItem = soundIds2.includes(soundId);
          flag = !hasItem;
          if (hasItem) {
            const orderedSoundIds = soundIds.orderedSoundIds;
            flag = !orderedSoundIds.includes(soundId);
          }
          if (flag) {
            soundIds = soundIds.soundIds;
            if (!soundIds.includes(soundId)) {
              const soundIds1 = soundIds.soundIds;
              soundIds1.push(soundId);
            }
            const orderedSoundIds2 = soundIds.orderedSoundIds;
            if (!orderedSoundIds2.includes(soundId)) {
              const orderedSoundIds1 = soundIds.orderedSoundIds;
              orderedSoundIds1.push(soundId);
            }
          }
        }
        return flag;
      }
      const obj2 = {
        title: intl.string(intl3.t["+XYXtZ"]),
        body: intl2.formatToPlainString(intl3.t.JaIyFi, { count: metroImportAll }),
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = intl3.intl;
      intl2 = intl3.intl;
      show(obj2);
      flag = false;
    },
    constants.INFREQUENT_USER_ACTION,
  );
};
export const reorderFavoriteSound = function reorderFavoriteSound(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
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
          let length;
          if (null == closure_1) {
            length = orderedSoundIds.orderedSoundIds.length;
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
  let closure_0 = soundId;
  const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteSoundboardSounds",
    async (soundIds) => {
      soundIds = soundIds.soundIds;
      soundIds.soundIds = soundIds.filter((item) => item !== closure_1_0);
      const orderedSoundIds = soundIds.orderedSoundIds;
      soundIds.orderedSoundIds = orderedSoundIds.filter((item) => item !== closure_1_0);
    },
    constants.INFREQUENT_USER_ACTION,
  );
};
export const fetchSoundGuildData = function fetchSoundGuildData() {
  return obj(...arguments);
};
export const playSoundLocally = function playSoundLocally(id, sound) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound, channelId: id };
  obj.dispatch(obj2);
};
export const reportSoundStartedPlaying = function reportSoundStartedPlaying(soundId, userId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId, userId };
  obj.dispatch(obj2);
};
export const reportSoundFinishedPlaying = function reportSoundFinishedPlaying(c2, c3) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId: dependencyMap, userId };
  obj.dispatch(obj2);
};
export const updateUserSoundboardVolume = function updateUserSoundboardVolume(volume, analyticsLocations) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_SOUNDBOARD_SET_VOLUME", volume, location: analyticsLocations };
  obj.dispatch(obj2);
};
export const muteCustomJoinSound = function muteCustomJoinSound(voiceChannelId) {
  obj = DispatcherDefault;
  const obj2 = { type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId: voiceChannelId };
  obj.dispatch(obj2);
};
