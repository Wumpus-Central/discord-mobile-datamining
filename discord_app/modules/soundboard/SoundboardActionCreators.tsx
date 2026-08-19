// === Module 7299: _fetchDefaultSoundsFromApi2 ===

// Module 7299 (_fetchDefaultSoundsFromApi2)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "handleSoundCreateOrUpdate" /* 4780 */;
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME" /* 4781 */;
import ME from "ME" /* 676 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;

const require = arg1;
function _fetchDefaultSoundsFromApi2() {
  const self = this;
  const tmp = callback(function*() {
    let callback2 = tmp3;
    c3 = 1;
    const HTTP = closure_1_0(closure_1_2[5]).HTTP;
    obj1 = { url: null, rejectWithError: null };
    obj1[0] = closure_1_6.SOUNDBOARD_DEFAULT_SOUNDS;
    obj1[1] = closure_1_0(closure_1_2[5]).rejectWithMigratedError();
    yield HTTP.get(obj1);
    if (1 === tmp7) {
      c3 = 0;
      callback2 = dependencyMap;
      let obj3 = callback2(709);
      obj3.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" });
      const obj4 = callback(5360);
      const tmp28 = new callback2(4274)(callback2);
      const result = obj4.captureOrIgnoreApiError(tmp28);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const body = arg1.body;
      callback = body.map((body) => callback(tmp31[6]).soundboardSoundFromAPI(body, c5));
      const obj = callback2(709);
      obj3 = { type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", soundboardSounds: null };
      obj3[1] = callback;
      obj.dispatch(obj3);
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeFetchDefaultSounds() {
  if (closure_4.shouldFetchDefaultSounds()) {
    dispatcherDefault.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
    const SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS = "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS";
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      function onSoundboardActionCompleted() {
        closure_2_1(closure_2_2[7]).unsubscribe(closure_0, onSoundboardActionCompleted);
        const timerId = setTimeout(closure_0, 0);
      }
      const subscription = closure_1_1(closure_1_2[7]).subscribe(closure_0, onSoundboardActionCompleted);
    });
    (function _fetchDefaultSoundsFromApi() {
      const self = this;
      const apply = closure_11.apply;
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
  let obj = SOUNDBOARD_SOUNDS_RECEIVED(7300);
  const guildIdsToFetchSoundsFor = obj.getGuildIdsToFetchSoundsFor();
  if (0 === guildIdsToFetchSoundsFor.length) {
    return Promise.resolve();
  } else {
    SOUNDBOARD_SOUNDS_RECEIVED = "SOUNDBOARD_SOUNDS_RECEIVED";
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      function onSoundboardActionCompleted() {
        closure_2_1(closure_2_2[7]).unsubscribe(closure_0, onSoundboardActionCompleted);
        const timerId = setTimeout(closure_0, 0);
      }
      const subscription = closure_1_1(closure_1_2[7]).subscribe(closure_0, onSoundboardActionCompleted);
    });
    dispatcherDefault.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" });
    const obj2 = dispatcherDefault;
    obj = { type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: null };
    obj[1] = guildIdsToFetchSoundsFor;
    dispatcherDefault.dispatch(obj);
    return promise;
  }
}
function _maybeFetchSoundboardSounds() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    return (function*(arg0) {
      closure_3 = tmp3;
      let table = tmp2;
      const _performance2 = performance;
      closure_0 = performance.now();
      let tmp19 = !c10;
      if (!c10) {
        let disableAnalytics;
        if (tmp30 != null) {
          disableAnalytics = tmp30.disableAnalytics;
        }
        let callback = disableAnalytics;
        if (disableAnalytics == null) {
          callback = false;
        }
        tmp19 = !callback;
      }
      callback = tmp19;
      if (tmp19) {
        c10 = true;
      }
      const items = [closure_1_12(), closure_1_13()];
      table = yield Promise.all(items);
      if (callback) {
        const _performance = performance;
        closure_3 = performance.now();
        const obj = callback(table[11]);
        const obj3 = { elapsed_ms: null };
        obj3[0] = closure_3 - closure_0;
        obj.track(constants.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, obj3);
      }
      return table;
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _uploadSound() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              c1 = tmp2;
              let callback;
              c1 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ guildId: c0, name: c1, sound: c2, volume: c3, emojiId: c4, emojiName: c5 } = callback);
              closure_6 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: null };
              obj2[0] = closure_6.GUILD_SOUNDBOARD_SOUNDS(callback);
              const obj3 = { name: null, sound: null, volume: null, emoji_id: null, emoji_name: null };
              obj3[0] = c1;
              obj3[1] = dependencyMap;
              obj3[2] = c3;
              obj3[3] = c4;
              obj3[4] = c5;
              obj2[1] = obj3;
              obj2[2] = callback(530).rejectWithMigratedError();
              c3 = 2;
              c4 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_6 = arg1;
            obj = callback(6824);
            c4 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = obj.soundboardSoundFromAPI(closure_6.body, callback);
            return obj6;
          }
        } catch (tmp12) {
          c4 = tmp;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateSound() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              c1 = tmp2;
              let callback;
              c1 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ guildId: c0, soundId: c1, name: c2, volume: c3, emojiId: c4, emojiName: c5 } = callback);
              closure_6 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: null };
              obj2[0] = closure_6.GUILD_SOUNDBOARD_SOUND(callback, c1);
              const obj3 = { name: null, volume: null, emoji_id: null, emoji_name: null };
              obj3[0] = dependencyMap;
              obj3[1] = c3;
              obj3[2] = c4;
              obj3[3] = c5;
              obj2[1] = obj3;
              obj2[2] = callback(530).rejectWithMigratedError();
              c3 = 2;
              c4 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj2);
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_6 = arg1;
            obj = callback(6824);
            c4 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = obj.soundboardSoundFromAPI(closure_6.body, callback);
            return obj6;
          }
        } catch (tmp12) {
          c4 = tmp;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteSound() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(530).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_6.GUILD_SOUNDBOARD_SOUND(callback, closure_1);
              obj1[2] = callback(530).rejectWithMigratedError();
              c3 = 1;
              dependencyMap = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          dependencyMap = tmp;
          throw tmp5;
        }
      }
    })();
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSoundGuildData() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              let lib;
              c5 = 1;
              const HTTP = lib(closure_1_2[5]).HTTP;
              obj1 = { url: null, rejectWithError: null };
              obj1[0] = c6.SOUNDBOARD_SOUND_GUILD_DATA(lib, callback);
              obj1[1] = lib(closure_1_2[5]).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            callback = closure_4;
            const tmp25 = new callback(4274)(callback);
            throw tmp25;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            let discoverableGuild = null;
            if (null != lib.body) {
              obj = lib(7301);
              discoverableGuild = obj.makeDiscoverableGuild(lib.body);
            }
            c5 = 0;
            c7 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = discoverableGuild;
            return obj4;
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
    })();
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: closure_6, AnalyticEvents: error } = ME);
({ MAX_FAVORITES: closure_8, UserSettingsDelay: c9 } = MAX_FAVORITES);
let c10 = false;
let result = require("set").fileFinishedImporting("modules/soundboard/SoundboardActionCreators.tsx");

export const maybeFetchSoundboardSounds = function maybeFetchSoundboardSounds() {
  const self = this;
  const apply = _maybeFetchSoundboardSounds.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uploadSound = function uploadSound() {
  const self = this;
  const apply = _uploadSound.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSound = function updateSound() {
  const self = this;
  const apply = _updateSound.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteSound = function deleteSound() {
  const self = this;
  const apply = _deleteSound.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addFavoriteSound = function addFavoriteSound(soundId) {
  const _require = soundId;
  const FrecencyUserSettingsActionCreators = _require(1374).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", (soundIds) => {
    let obj = closure_1_1(closure_1_2[13]);
    if (obj.size(soundIds.soundIds) >= closure_1_8) {
      obj = { title: null, body: null };
      const intl = soundId(tmp2[15]).intl;
      obj[0] = intl.string(soundId(tmp2[15]).t["+XYXtZ"]);
      const intl2 = soundId(tmp2[15]).intl;
      obj = { count: null };
      obj[0] = tmp3;
      obj[1] = intl2.formatToPlainString(soundId(tmp2[15]).t.JaIyFi, obj);
      closure_1_1(tmp2[14]).show(obj);
      let flag = false;
      const tmpResult = closure_1_1(tmp2[14]);
    } else {
      soundIds = soundIds.soundIds;
      const hasItem = soundIds.includes(soundId);
      flag = !hasItem;
      if (!hasItem) {
        soundIds = soundIds.soundIds;
        soundIds.push(tmp4);
      }
      tmp4 = soundId;
    }
    return flag;
  }, constants.INFREQUENT_USER_ACTION);
};
export const removeFavoriteSound = function removeFavoriteSound(soundId) {
  const _require = soundId;
  const FrecencyUserSettingsActionCreators = _require(1374).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", (soundIds) => {
    soundIds = soundIds.soundIds;
    soundIds.soundIds = soundIds.filter((arg0) => arg0 !== closure_0);
  }, constants.INFREQUENT_USER_ACTION);
};
export const fetchSoundGuildData = function fetchSoundGuildData() {
  const self = this;
  const apply = _fetchSoundGuildData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const playSoundLocally = function playSoundLocally(channelId, sound, SOUNDBOARD) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound, channelId, trigger: SOUNDBOARD };
  obj.dispatch(obj);
};
export const reportSoundStartedPlaying = function reportSoundStartedPlaying(soundId, userId) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId, userId };
  obj.dispatch(obj);
};
export const reportSoundFinishedPlaying = function reportSoundFinishedPlaying(c2, c3) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId: c2, userId: c3 };
  obj.dispatch(obj);
};
export const updateUserSoundboardVolume = function updateUserSoundboardVolume(volume, analyticsLocations) {
  let obj = dispatcherDefault;
  obj = { type: "USER_SOUNDBOARD_SET_VOLUME", volume, location: analyticsLocations };
  obj.dispatch(obj);
};
export const muteCustomJoinSound = function muteCustomJoinSound(voiceChannelId) {
  let obj = dispatcherDefault;
  obj = { type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId: voiceChannelId };
  obj.dispatch(obj);
};