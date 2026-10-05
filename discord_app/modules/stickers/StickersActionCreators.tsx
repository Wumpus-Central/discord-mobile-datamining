// === Module 10112: StickersActionCreators ===

// Module 10112 (StickersActionCreators)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import InlineUploaderDefault from "InlineUploader" /* 6478 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5618 */;
import UserStore from "UserStore" /* 1377 */;
import StickersStore from "StickersStore" /* 5687 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, locale, stickerIds;

let c10;
let unpackModuleId;
const f102766 = (item) => null != stickerById.getStickerById(item);
let obj = function _fetchStickerPack() {
  obj = _asyncToGenerator(async (packId, ingestStickers) => {
    let closure_2;
    let closure_3;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj9;
      const obj4 = { url: Endpoints.STICKER_PACK(packId), rejectWithError: obj9.rejectWithMigratedError() };
      const httpGetWithCountryCodeQuery = require("StoreUtils").httpGetWithCountryCodeQuery;
      require("StoreUtils");
      obj9 = require("HTTPUtils");
      await httpGetWithCountryCodeQuery(obj4);
      const body = value.body;
      const obj7 = { type: "STICKER_PACK_FETCH_SUCCESS", packId, pack: body, ingestStickers };
      obj = closure_131_1(closure_131_2[10]);
      obj.dispatch(obj7);
      return body;
    })();
  });
  return obj(...arguments);
};
obj = function _fetchStickerPacks() {
  obj = _asyncToGenerator(async () => {
    let closure_1;
    let closure_2;
    let obj7;
    let obj8;
    let closure_0 = arg0;
    if (1 === tmp5) {
      if (arg0 === 1) {
        let c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else if (!closure_130_8.isFetchingStickerPacks) {
        if (!closure_130_8.hasLoadedStickerPacks) {
          const obj4 = closure_130_1(closure_130_2[10]);
          obj4.wait(() => {
            obj = closure_1_1(closure_1_2[10]);
            obj.dispatch({ type: "STICKER_PACKS_FETCH_START" });
          });
          const HTTP = closure_130_0(closure_130_2[9]).HTTP;
          const request = { url: closure_130_9.STICKER_PACKS, query: obj8, rejectWithError: obj7.rejectWithMigratedError() };
          obj8 = { locale };
          const get = HTTP.get;
          obj7 = closure_130_0(closure_130_2[9]);
          let c3 = 2;
          c4 = 1;
          const obj9 = { value: get(request), done: false };
          return obj9;
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      const obj10 = { value, done: true };
      return obj10;
    } else {
      const sticker_packs = value.body.sticker_packs;
      obj = closure_130_1(closure_130_2[10]);
      const obj11 = { type: "STICKER_PACKS_FETCH_SUCCESS", packs: sticker_packs };
      const dispatchResult = obj.dispatch(obj11);
    }
    await "IconComponent";
    let obj5 = closure_0;
    if (closure_0 === undefined) {
      obj5 = {};
    }
    locale = obj5.locale ?? locale.locale;
    return "Set";
  });
  return obj(...arguments);
};
obj = function _fetchSticker() {
  obj = _asyncToGenerator(async function(arg0) {
    let obj12;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let body;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            body = undefined;
            const HTTP = require("HTTPUtils").HTTP;
            const obj6 = { url: Endpoints.STICKER(closure_0), rejectWithError: obj12.rejectWithMigratedError() };
            const get = HTTP.get;
            obj12 = require("HTTPUtils");
            c3 = 1;
            c4 = 1;
            const obj7 = { value: get(obj6), done: false };
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
          const obj10 = closure_130_0(closure_130_2[11]);
          if (obj10.isGuildSticker(body)) {
            const obj9 = { type: "GUILD_STICKER_FETCH_SUCCESS", sticker: body };
            const obj4 = closure_130_1(closure_130_2[10]);
            obj4.dispatch(obj9);
          } else {
            obj = closure_130_0(closure_130_2[11]);
            if (obj.isStandardSticker(body)) {
              const obj11 = { type: "PACK_STICKER_FETCH_SUCCESS", sticker: body };
              const obj2 = closure_130_1(closure_130_2[10]);
              obj2.dispatch(obj11);
            } else {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Invalid sticker type");
              throw error;
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp21) {
        c4 = 3;
        throw tmp21;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchGuildStickersWithCreator() {
  obj = _asyncToGenerator(async (guildId, signal) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj7;
      let tmp;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              const HTTP = require("HTTPUtils").HTTP;
              const get = HTTP.get;
              const obj4 = { url: Endpoints.GUILD_STICKER_PACKS(guildId), rejectWithError: obj7.rejectWithMigratedError(), signal };
              c4 = 1;
              c5 = 1;
              obj7 = require("HTTPUtils");
              const obj5 = { value: get(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            obj = {
              type: "GUILD_STICKERS_FETCH_SUCCESS",
              guildId,
              stickers: body.map((user) => {
                      let tmp = user;
                      if (null != user.user) {
                        obj = { user_id: user.user.id, user: user.user };
                        const merged = Object.assign(user);
                        tmp = obj;
                      }
                      return tmp;
                    })
            };
            const dispatch = closure_131_1(closure_131_2[10]).dispatch;
            closure_131_1(closure_131_2[10]);
            dispatch(obj);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c5 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _deleteGuildSticker() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj6;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
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
            const obj4 = { url: Endpoints.GUILD_STICKER(closure_0.guild_id, closure_0.id), rejectWithError: obj6.rejectWithMigratedError() };
            const del = HTTP.del;
            obj6 = require("HTTPUtils");
            c2 = 1;
            c1 = 1;
            const obj5 = { value: del(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c1 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
obj = function _createGuildSticker() {
  obj = _asyncToGenerator(async (arg0) => {
    let body;
    let c3;
    let c4;
    let closure_1;
    let closure_2;
    let id;
    let obj10;
    let obj14;
    let obj8;
    let tmp10;
    let tmp11;
    let tmp32Result;
    let closure_0 = arg0;
    const guildId = closure_0.guildId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: Endpoints.GUILD_STICKER_PACKS(guildId), body, fields: tmp10, attachments: tmp11, headers: obj8.buildHeadersForMd5(closure_0.originalMd5), rejectWithError: tmp32Result.rejectWithMigratedError() };
    const post = HTTP.post;
    if ("web" === closure_0.platform) {
      body = closure_0.body;
    }
    if ("mobile" === closure_0.platform) {
      const obj4 = { name: "name", value: closure_0.name };
      const items = [obj4, , ];
      const obj5 = { name: "tags", value: closure_0.tags };
      items[1] = obj5;
      const obj6 = { name: "description", value: closure_0.description };
      items[2] = obj6;
      tmp10 = items;
    }
    if ("mobile" === closure_0.platform) {
      const obj9 = { name: "file", file: obj10 };
      obj10 = { uri: null, name: null, type: null };
      ({ uri: obj7.uri, name: obj7.name, mimeType: obj7.type } = closure_0);
      const items1 = [obj9];
      tmp11 = items1;
    }
    obj8 = InlineUploaderDefault;
    tmp32Result = require("HTTPUtils");
    await post(request);
    const tmp4 = value;
    const obj13 = { type: "GUILD_STICKERS_CREATE_SUCCESS", guildId, sticker: obj14 };
    obj14 = { user_id: id };
    const dispatch = closure_130_1(closure_130_2[10]).dispatch;
    const tmp23 = closure_130_1(closure_130_2[10]);
    const merged = Object.assign(tmp4.body);
    const currentUser = closure_130_7.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    dispatch(obj13);
    return tmp4.body;
  });
  return obj(...arguments);
};
obj = function _updateGuildSticker() {
  obj = _asyncToGenerator(async (arg0, arg1, body) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      let obj7;
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: Endpoints.GUILD_STICKER(closure_0, closure_1), body, rejectWithError: obj7.rejectWithMigratedError() };
      const patch = HTTP.patch;
      obj7 = require("HTTPUtils");
      await patch(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
({ MAX_FAVORITES: c10, UserSettingsDelay: unpackModuleId } = UserSettingsConstants);
const result = size.fileFinishedImporting("modules/stickers/StickersActionCreators.tsx");

export const fetchStickerPack = function fetchStickerPack() {
  return obj(...arguments);
};
export const fetchStickerPacks = function fetchStickerPacks() {
  return obj(...arguments);
};
export const fetchSticker = function fetchSticker() {
  return obj(...arguments);
};
export const fetchGuildStickersWithCreator = function fetchGuildStickersWithCreator() {
  return obj(...arguments);
};
export const deleteGuildSticker = function deleteGuildSticker() {
  return obj(...arguments);
};
export const createGuildSticker = function createGuildSticker() {
  return obj(...arguments);
};
export const updateGuildSticker = function updateGuildSticker() {
  return obj(...arguments);
};
export const addStickerPreview = function addStickerPreview(channelId, sticker, draftType) {
  obj = DispatcherDefault;
  const obj2 = { type: "ADD_STICKER_PREVIEW", channelId, sticker, draftType };
  obj.dispatch(obj2);
};
export const clearStickerPreview = function clearStickerPreview(channelId, draftType) {
  obj = DispatcherDefault;
  const obj2 = { type: "CLEAR_STICKER_PREVIEW", channelId, draftType };
  obj.dispatch(obj2);
};
export const favoriteSticker = function favoriteSticker(arg0) {
  let closure_0;
  _require = arg0;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", async (stickerIds) => {
    let flag;
    let intl;
    let intl2;
    let obj3;
    const stickerIds1 = stickerIds.stickerIds;
    let tmp = stickerIds1;
    if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
      let found = stickerIds1;
      if (GatewayConnectionStore.isConnected()) {
        found = stickerIds1.filter(f102766);
      }
      tmp = found;
    }
    stickerIds.stickerIds = tmp;
    obj = _modDef12;
    if (obj.size(stickerIds.stickerIds) >= authStore) {
      const obj2 = { title: intl.string(intl3.t["+XYXtZ"]), body: intl2.formatToPlainString(intl3.t.JaIyFi, obj3) };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = intl3.intl;
      intl2 = intl3.intl;
      obj3 = { count: tmp6 };
      show(obj2);
      flag = false;
    } else {
      stickerIds = stickerIds.stickerIds;
      const hasItem = stickerIds.includes(closure_0);
      flag = !hasItem;
      if (flag) {
        const stickerIds2 = stickerIds.stickerIds;
        stickerIds2.push(closure_0);
      }
    }
    return flag;
  }, constants.INFREQUENT_USER_ACTION);
};
export const unfavoriteSticker = function unfavoriteSticker(arg0) {
  let closure_0;
  _require = arg0;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", async (stickerIds) => {
    let stickerById;
    stickerIds = stickerIds.stickerIds;
    stickerIds.stickerIds = stickerIds.filter((item) => item !== closure_1_0);
    const stickerIds1 = stickerIds.stickerIds;
    let tmp = stickerIds1;
    if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
      let found = stickerIds1;
      if (GatewayConnectionStore.isConnected()) {
        found = stickerIds1.filter(f102766);
      }
      tmp = found;
    }
    stickerIds.stickerIds = tmp;
  }, constants.INFREQUENT_USER_ACTION);
};