// discord_app/modules/stickers/StickersActionCreators.tsx
import loadSavedGuildStickers from "loadSavedGuildStickers";
import _handleConnectionOpen from "_handleConnectionOpen";
import _getSystemLocale from "_getSystemLocale";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import closure_8 from "loadSavedGuildStickers";
import { Endpoints } from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";
import { dispatcher } from "../../Dispatcher.tsx";
import { updateUserGuildSettings } from "../user_settings/UserSettingsProtoActionCreators.tsx";

let c10;
let unpackModuleId;
const require = arg1;
function _fetchStickerPack() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      let loadSavedGuildStickers = tmp2;
      body = tmp5;
      const obj1 = { url: null, rejectWithError: null };
      obj1[0] = outer1_9.STICKER_PACK(callback);
      const obj8 = callback(outer1_2[8]);
      obj1[1] = callback(outer1_2[9]).rejectWithMigratedError();
      yield obj8.httpGetWithCountryCodeQuery(obj1);
      body = body.body;
      const obj = callback2(body[10]);
      const obj4 = { type: "STICKER_PACK_FETCH_SUCCESS", packId: null, pack: null, ingestStickers: null };
      obj4[1] = callback;
      obj4[2] = body;
      obj4[3] = callback2;
      obj.dispatch(obj4);
      return body;
    })();
  });
  const _fetchStickerPack = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchStickerPacks() {
  const self = this;
  const tmp = callback(() => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      const dependencyMap = tmp3;
      let sticker_packs = tmp2;
      let obj1 = locale;
      if (locale === undefined) {
        obj1 = {};
      }
      locale = obj1.locale;
      if (locale === undefined) {
        locale = outer1_5.locale;
      }
      yield "ct";
      if (1 === tmp6) {
        if (arg0 === 1) {
          let c4 = 3;
          throw body;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = body;
          return obj2;
        } else {
          if (!closure_8.isFetchingStickerPacks) {
            if (!closure_8.hasLoadedStickerPacks) {
              let obj3 = sticker_packs(709);
              obj3.wait(() => {
                sticker_packs(tmp3[10]).dispatch({ type: "STICKER_PACKS_FETCH_START" });
              });
              const HTTP = locale(530).HTTP;
              obj3 = { url: null, query: null, rejectWithError: null };
              obj3[0] = constants.STICKER_PACKS;
              const obj4 = { locale: null };
              obj4[0] = locale;
              obj3[1] = obj4;
              let obj6 = locale(530);
              obj3[2] = obj6.rejectWithMigratedError();
              let c3 = 2;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.get(obj3);
              return obj5;
            }
          }
          c4 = 3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw body;
      } else if (arg0 !== 2) {
        sticker_packs = body.body.sticker_packs;
        const obj = sticker_packs(709);
        obj6 = { type: "STICKER_PACKS_FETCH_SUCCESS", packs: null };
        obj6[1] = sticker_packs;
        obj.dispatch(obj6);
      }
      return body;
    })();
    iter.next();
    return iter;
  });
  const _fetchStickerPacks = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSticker() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const dependencyMap = tmp2;
              const callback2 = tmp5;
              body = undefined;
              const HTTP = callback(outer1_2[9]).HTTP;
              let obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_9.STICKER(body);
              obj1[1] = callback(outer1_2[9]).rejectWithMigratedError();
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            if (obj10.isGuildSticker(body)) {
              obj3 = callback2(709);
              const obj4 = { type: "GUILD_STICKER_FETCH_SUCCESS", sticker: null };
              obj4[1] = body;
              obj3.dispatch(obj4);
            } else {
              obj = body(4619);
              if (obj.isStandardSticker(body)) {
                obj1 = callback2(709);
                const obj5 = { type: "PACK_STICKER_FETCH_SUCCESS", sticker: null };
                obj5[1] = body;
                obj1.dispatch(obj5);
              } else {
                const _Error = Error;
                const error = new Error("Invalid sticker type");
                throw error;
              }
            }
            c4 = 3;
            obj10 = body(4619);
          }
        } catch (tmp24) {
          c4 = tmp;
          throw tmp24;
        }
      }
    })();
  });
  const _fetchSticker = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchGuildStickersWithCreator() {
  const self = this;
  let tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let loadSavedGuildStickers = tmp2;
              const table = tmp5;
              body = undefined;
              const HTTP = callback(outer1_2[9]).HTTP;
              const obj1 = { url: null, rejectWithError: null, signal: null };
              obj1[0] = outer1_9.GUILD_STICKER_PACKS(callback);
              obj1[1] = callback(outer1_2[9]).rejectWithMigratedError();
              obj1[2] = body;
              c4 = 1;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            obj = body(table[10]);
            const obj4 = { type: "GUILD_STICKERS_FETCH_SUCCESS", guildId: null, stickers: null };
            obj4[1] = callback;
            obj4[2] = body.map((user) => {
              let tmp = user;
              if (null != user.user) {
                const obj = {};
                const merged = Object.assign(user);
                obj.user_id = user.user.id;
                obj.user = user.user;
                tmp = obj;
              }
              return tmp;
            });
            obj.dispatch(obj4);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c5 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _fetchGuildStickersWithCreator = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteGuildSticker() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = lib(530).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_9.GUILD_STICKER(lib.guild_id, lib.id);
              obj1[1] = lib(530).rejectWithMigratedError();
              dependencyMap = 1;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _deleteGuildSticker = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createGuildSticker() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const table = tmp2;
      let lib = tmp5;
      guildId = guildId.guildId;
      const HTTP = callback(outer1_2[9]).HTTP;
      const obj1 = { url: null, body: null, fields: null, attachments: null, headers: null, rejectWithError: null };
      obj1[0] = outer1_9.GUILD_STICKER_PACKS(guildId);
      if ("web" === guildId.platform) {
        const body = tmp33.body;
      }
      obj1[1] = body;
      if ("mobile" === guildId.platform) {
        const obj2 = { name: "name", value: null };
        obj2[1] = tmp33.name;
        const items = [obj2, , ];
        const obj3 = { name: "tags", value: null };
        obj3[1] = tmp33.tags;
        items[1] = obj3;
        const obj4 = { name: "description", value: null };
        obj4[1] = tmp33.description;
        items[2] = obj4;
        const tmp11 = items;
      }
      obj1[2] = tmp11;
      if ("mobile" === guildId.platform) {
        const obj5 = { name: "file", file: null };
        ({ uri: obj7[0], name: obj7[1], mimeType: obj7[2] } = tmp33);
        obj5[1] = { uri: null, name: null, type: null };
        const items1 = [obj5];
        const tmp12 = items1;
        const obj6 = { uri: null, name: null, type: null };
      }
      obj1[3] = tmp12;
      const obj7 = outer1_1(outer1_2[12]);
      obj1[4] = obj7.buildHeadersForMd5(guildId.originalMd5);
      obj1[5] = callback(outer1_2[9]).rejectWithMigratedError();
      lib = yield HTTP.post(obj1);
      const obj9 = { type: "GUILD_STICKERS_CREATE_SUCCESS", guildId: null, sticker: null };
      obj9[1] = guildId;
      const obj10 = {};
      const merged = Object.assign(lib.body);
      currentUser = currentUser.getCurrentUser();
      if (currentUser != null) {
        const id = currentUser.id;
      }
      obj10.user_id = id;
      obj9[2] = obj10;
      lib(table[10]).dispatch(obj9);
      return lib.body;
    })();
  });
  const _createGuildSticker = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateGuildSticker() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_9.GUILD_STICKER(callback, closure_1);
      obj1[1] = dependencyMap;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.patch(obj1);
      return body.body;
    })();
  });
  const _updateGuildSticker = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ MAX_FAVORITES: c10, UserSettingsDelay: unpackModuleId } = MAX_FAVORITES);
const result = require("_getSystemLocale").fileFinishedImporting("modules/stickers/StickersActionCreators.tsx");

export const fetchStickerPack = function fetchStickerPack(_847199849233514549, arg1) {
  const self = this;
  const apply = _fetchStickerPack.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchStickerPacks = function fetchStickerPacks() {
  const self = this;
  const apply = _fetchStickerPacks.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSticker = function fetchSticker(id) {
  const self = this;
  const apply = _fetchSticker.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchGuildStickersWithCreator = function fetchGuildStickersWithCreator(outer1_0, c1) {
  const self = this;
  const apply = _fetchGuildStickersWithCreator.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteGuildSticker = function deleteGuildSticker(arg0) {
  const self = this;
  const apply = _deleteGuildSticker.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createGuildSticker = function createGuildSticker(arg0) {
  const self = this;
  const apply = _createGuildSticker.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildSticker = function updateGuildSticker(arg0, arg1, arg2) {
  const self = this;
  const apply = _updateGuildSticker.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addStickerPreview = function addStickerPreview(channelId, sticker, draftType) {
  let obj = dispatcher;
  obj = { type: "ADD_STICKER_PREVIEW", channelId, sticker, draftType };
  obj.dispatch(obj);
};
export const clearStickerPreview = function clearStickerPreview(channelId, draftType) {
  let obj = dispatcher;
  obj = { type: "CLEAR_STICKER_PREVIEW", channelId, draftType };
  obj.dispatch(obj);
};
export const favoriteSticker = function favoriteSticker(id) {
  const _require = id;
  const FrecencyUserSettingsActionCreators = _updateUserGuildSettings.FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", (stickerIds) => {
    stickerIds = stickerIds.stickerIds;
    let tmp = stickerIds;
    if (outer1_6.totalUnavailableGuilds <= 0) {
      let found = stickerIds;
      if (outer1_4.isConnected()) {
        found = stickerIds.filter((arg0) => null != stickerById.getStickerById(arg0));
      }
      tmp = found;
    }
    stickerIds.stickerIds = tmp;
    let obj = outer1_1(outer1_2[14]);
    if (obj.size(stickerIds.stickerIds) >= outer1_10) {
      obj = { title: null, body: null };
      const intl = id(tmp5[16]).intl;
      obj[0] = intl.string(id(tmp5[16]).t["+XYXtZ"]);
      const intl2 = id(tmp5[16]).intl;
      obj = { count: null };
      obj[0] = tmp6;
      obj[1] = intl2.formatToPlainString(id(tmp5[16]).t.JaIyFi, obj);
      outer1_1(tmp5[15]).show(obj);
      let flag = false;
      const tmp4Result = outer1_1(tmp5[15]);
    } else {
      stickerIds = stickerIds.stickerIds;
      const hasItem = stickerIds.includes(id);
      flag = !hasItem;
      if (!hasItem) {
        const stickerIds1 = stickerIds.stickerIds;
        stickerIds1.push(tmp7);
      }
      tmp7 = id;
    }
    return flag;
  }, constants.INFREQUENT_USER_ACTION);
};
export const unfavoriteSticker = function unfavoriteSticker(id) {
  const _require = id;
  const FrecencyUserSettingsActionCreators = _updateUserGuildSettings.FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", (stickerIds) => {
    stickerIds = stickerIds.stickerIds;
    stickerIds.stickerIds = stickerIds.filter((arg0) => arg0 !== closure_0);
    const stickerIds1 = stickerIds.stickerIds;
    let tmp = stickerIds1;
    if (outer1_6.totalUnavailableGuilds <= 0) {
      let found = stickerIds1;
      if (outer1_4.isConnected()) {
        found = stickerIds1.filter((arg0) => null != stickerById.getStickerById(arg0));
      }
      tmp = found;
    }
    stickerIds.stickerIds = tmp;
  }, constants.INFREQUENT_USER_ACTION);
};