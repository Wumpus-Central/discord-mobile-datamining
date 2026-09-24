// === Module 10734: StickersActionCreators ===

// Module 10734 (StickersActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5195 */;
import InlineUploaderDefault from "InlineUploader" /* 5474 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5582 */;
import LocaleStore from "LocaleStore" /* 2111 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5193 */;
import UserStore from "UserStore" /* 1372 */;
import StickersStore from "StickersStore" /* 5807 */;

const require = globalThis.__r;

require = fn;
let closure_12 = async function _fetchStickerPack() {
  closure_3 = tmp2;
  closure_2 = tmp5;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  await require("StoreUtils").httpGetWithCountryCodeQuery({ url: Endpoints.STICKER_PACK(closure_0), rejectWithError: require("HTTPUtils").rejectWithMigratedError() });
  const body = value.body;
  closure_131_1(closure_131_2[10]).dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: closure_130_0, pack: body, ingestStickers: closure_130_1 });
  return body;
};
let closure_13 = async function _fetchStickerPacks() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
          closure_2 = tmp3;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let obj5 = closure_0;
          if (closure_0 === undefined) {
            obj5 = {};
          }
          locale = obj5.locale;
          if (locale === undefined) {
            locale = locale.locale;
          }
          closure_129_0 = locale;
          let sticker_packs;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: true };
        }
      } else {
        if (1 === tmp6) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            if (!closure_130_8.isFetchingStickerPacks) {
              if (!closure_130_8.hasLoadedStickerPacks) {
                closure_130_1(closure_130_2[10]).wait(() => {
                  closure_1_1(closure_1_2[10]).dispatch({ type: "STICKER_PACKS_FETCH_START" });
                });
                const HTTP = closure_130_0(closure_130_2[9]).HTTP;
                const request = { url: closure_130_9.STICKER_PACKS, query: null, rejectWithError: null };
                const obj8 = { locale: closure_129_0 };
                request.query = obj8;
                const obj4 = closure_130_1(closure_130_2[10]);
                request.rejectWithError = closure_130_0(closure_130_2[9]).rejectWithMigratedError();
                c3 = 2;
                c4 = 1;
                const obj9 = { value: HTTP.get(request), done: false };
                return obj9;
              }
            }
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          sticker_packs = value.body.sticker_packs;
          const obj10 = { type: "STICKER_PACKS_FETCH_SUCCESS", packs: sticker_packs };
          closure_130_1(closure_130_2[10]).dispatch(obj10);
          const obj = closure_130_1(closure_130_2[10]);
        }
        c4 = 3;
        const obj11 = { value, done: true };
        return obj11;
      }
    } catch (tmp26) {
      c4 = tmp;
      throw tmp26;
    }
  }
};
let closure_14 = async function _fetchSticker(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          let body;
          const HTTP = require("HTTPUtils").HTTP;
          const obj6 = { url: Endpoints.STICKER(closure_0), rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
          c3 = 1;
          c4 = 1;
          const obj7 = { value: HTTP.get(obj6), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        body = value.body;
        if (obj10.isGuildSticker(body)) {
          const obj9 = { type: "GUILD_STICKER_FETCH_SUCCESS", sticker: body };
          closure_130_1(closure_130_2[10]).dispatch(obj9);
          const obj4 = closure_130_1(closure_130_2[10]);
        } else {
          if (obj.isStandardSticker(body)) {
            const obj11 = { type: "PACK_STICKER_FETCH_SUCCESS", sticker: body };
            closure_130_1(closure_130_2[10]).dispatch(obj11);
            const obj2 = closure_130_1(closure_130_2[10]);
          } else {
            const _Error = Error;
            const error = new Error("Invalid sticker type");
            throw error;
          }
          obj = closure_130_0(closure_130_2[11]);
        }
        c4 = 3;
        obj10 = closure_130_0(closure_130_2[11]);
      }
    } catch (tmp24) {
      c4 = tmp;
      throw tmp24;
    }
  }
};
let closure_15 = async function _fetchGuildStickersWithCreator(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
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
            closure_3 = tmp2;
            closure_2 = tmp5;
            closure_130_0 = closure_0;
            let body;
            const HTTP = require("HTTPUtils").HTTP;
            const obj4 = { url: Endpoints.GUILD_STICKER_PACKS(closure_0), rejectWithError: require("HTTPUtils").rejectWithMigratedError(), signal };
            c4 = 1;
            c5 = 1;
            const obj5 = { value: HTTP.get(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          body = value.body;
          const obj7 = {
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: closure_130_0,
            stickers: body.map((user) => {
                    let tmp = user;
                    if (null != user.user) {
                      const obj = {};
                      const merged = Object.assign(user);
                      obj.user_id = user.user.id;
                      obj.user = user.user;
                      tmp = obj;
                    }
                    return tmp;
                  })
          };
          closure_131_1(closure_131_2[10]).dispatch(obj7);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        c5 = tmp;
        throw tmp13;
      }
    }
  })();
};
let closure_16 = async function _deleteGuildSticker(arg0) {
  if (c1 === 2) {
    c1 = 3;
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const HTTP = require("HTTPUtils").HTTP;
          const obj4 = { url: Endpoints.GUILD_STICKER(user.guild_id, user.id), rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
          c2 = 1;
          c1 = 1;
          const obj5 = { value: HTTP.del(obj4), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
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
};
let closure_17 = async function _createGuildSticker() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const guildId = user.guildId;
  closure_129_0 = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.GUILD_STICKER_PACKS(guildId), body: null, fields: null, attachments: null, headers: null, rejectWithError: null };
  if ("web" === user.platform) {
    const body = user.body;
  }
  request.body = body;
  if ("mobile" === user.platform) {
    const items = [{ name: "name", value: user.name }, , ];
    items[1] = { name: "tags", value: user.tags };
    items[2] = { name: "description", value: user.description };
    const tmp11 = items;
  }
  request.fields = tmp11;
  if ("mobile" === user.platform) {
    const obj9 = { name: "file", file: null };
    ({ uri: obj7.uri, name: obj7.name, mimeType: obj7.type } = user);
    obj9.file = { uri: null, name: null, type: null };
    const items1 = [obj9];
    const tmp12 = items1;
  }
  request.attachments = tmp12;
  request.headers = InlineUploaderDefault.buildHeadersForMd5(user.originalMd5);
  request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  await HTTP.post(request);
  closure_129_1 = value;
  const obj14 = { type: "GUILD_STICKERS_CREATE_SUCCESS", guildId: closure_129_0, sticker: null };
  const obj15 = {};
  const merged = Object.assign(closure_129_1.body);
  const currentUser = closure_130_7.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
  }
  obj15.user_id = id;
  obj14.sticker = obj15;
  closure_130_1(closure_130_2[10]).dispatch(obj14);
  return closure_129_1.body;
};
let closure_18 = async function _updateGuildSticker(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: Endpoints.GUILD_STICKER(closure_0, closure_1), body, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    await HTTP.patch(request);
    return value.body;
  })();
};
const Endpoints = fn(1074).Endpoints;
const UserSettingsConstants = fn(1084);
({ MAX_FAVORITES: c10, UserSettingsDelay: closure_11 } = UserSettingsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/StickersActionCreators.tsx");

export const fetchStickerPack = function fetchStickerPack() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchStickerPacks = function fetchStickerPacks() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSticker = function fetchSticker() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchGuildStickersWithCreator = function fetchGuildStickersWithCreator() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteGuildSticker = function deleteGuildSticker() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createGuildSticker = function createGuildSticker() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildSticker = function updateGuildSticker() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addStickerPreview = function addStickerPreview(channelId, sticker, draftType) {
  DispatcherDefault.dispatch({ type: "ADD_STICKER_PREVIEW", channelId, sticker, draftType });
};
export const clearStickerPreview = function clearStickerPreview(channelId, draftType) {
  DispatcherDefault.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId, draftType });
};
export const favoriteSticker = function favoriteSticker(sticker) {
  const _require = sticker;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", async (stickerIds) => {
    const stickerIds1 = stickerIds.stickerIds;
    let tmp = stickerIds1;
    if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
      let found = stickerIds1;
      if (GatewayConnectionStore.isConnected()) {
        found = stickerIds1.filter((item) => null != stickerById.getStickerById(item));
      }
      tmp = found;
    }
    stickerIds.stickerIds = tmp;
    if (obj.size(stickerIds.stickerIds) >= closure_2_10) {
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t["+XYXtZ"]);
      const intl2 = util.intl;
      const obj3 = { count: tmp6 };
      obj2.body = intl2.formatToPlainString(util.t.JaIyFi, obj3);
      AlertActionCreatorsDefault.show(obj2);
      let flag = false;
      const tmp4Result = AlertActionCreatorsDefault;
    } else {
      stickerIds = stickerIds.stickerIds;
      const hasItem = stickerIds.includes(closure_0);
      flag = !hasItem;
      if (!hasItem) {
        const stickerIds2 = stickerIds.stickerIds;
        stickerIds2.push(closure_0);
      }
    }
    return flag;
  }, constants.INFREQUENT_USER_ACTION);
};
export const unfavoriteSticker = function unfavoriteSticker(sticker) {
  const _require = sticker;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", async (stickerIds) => {
    stickerIds = stickerIds.stickerIds;
    stickerIds.stickerIds = stickerIds.filter((item) => item !== sticker);
    const stickerIds1 = stickerIds.stickerIds;
    let tmp = stickerIds1;
    if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
      let found = stickerIds1;
      if (GatewayConnectionStore.isConnected()) {
        found = stickerIds1.filter((item) => null != stickerById.getStickerById(item));
      }
      tmp = found;
    }
    stickerIds.stickerIds = tmp;
  }, constants.INFREQUENT_USER_ACTION);
};