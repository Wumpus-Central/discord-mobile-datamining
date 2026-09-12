// discord_app/modules/stickers/StickersActionCreators.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import util from "../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import InlineUploaderDefault from "../../lib/uploader_inline/InlineUploader.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import GuildAvailabilityStore from "../../stores/GuildAvailabilityStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import StickersStore from "StickersStore.tsx";

require = fn;
let closure_12 = async function _fetchStickerPack() {
  closure_3 = tmp2;
  closure_2 = tmp5;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  await require("StoreUtils").httpGetWithCountryCodeQuery({
    url: Endpoints.STICKER_PACK(closure_0),
    rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
  });
  const body = value.body;
  closure_131_1(closure_131_2[10]).dispatch({
    type: "STICKER_PACK_FETCH_SUCCESS",
    packId: closure_130_0,
    pack: body,
    ingestStickers: closure_130_1,
  });
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
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let obj1 = closure_0;
          if (closure_0 === undefined) {
            obj1 = {};
          }
          locale = obj1.locale;
          if (locale === undefined) {
            locale = locale.locale;
          }
          closure_129_0 = locale;
          let sticker_packs;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp6) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            if (!closure_130_8.isFetchingStickerPacks) {
              if (!closure_130_8.hasLoadedStickerPacks) {
                let obj3 = closure_130_1(closure_130_2[10]);
                obj3.wait(() => {
                  closure_1_1(closure_1_2[10]).dispatch({ type: "STICKER_PACKS_FETCH_START" });
                });
                const HTTP = closure_130_0(closure_130_2[9]).HTTP;
                const request = { url: closure_130_9.STICKER_PACKS, query: null, rejectWithError: null };
                obj3 = { locale: closure_129_0 };
                request.query = obj3;
                let obj6 = closure_130_0(closure_130_2[9]);
                request.rejectWithError = obj6.rejectWithMigratedError();
                c3 = 2;
                c4 = 1;
                const obj4 = { value: HTTP.get(request), done: false };
                return obj4;
              }
            }
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          sticker_packs = value.body.sticker_packs;
          obj = closure_130_1(closure_130_2[10]);
          const obj5 = { type: "STICKER_PACKS_FETCH_SUCCESS", packs: sticker_packs };
          obj.dispatch(obj5);
        }
        c4 = 3;
        obj6 = { value, done: true };
        return obj6;
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
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          let body;
          const HTTP = require("HTTPUtils").HTTP;
          let obj1 = {
            url: Endpoints.STICKER(closure_0),
            rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
          };
          c3 = 1;
          c4 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        let obj3 = { value, done: true };
        return obj3;
      } else {
        body = value.body;
        if (obj10.isGuildSticker(body)) {
          obj3 = closure_130_1(closure_130_2[10]);
          const obj4 = { type: "GUILD_STICKER_FETCH_SUCCESS", sticker: body };
          obj3.dispatch(obj4);
        } else {
          obj = closure_130_0(closure_130_2[11]);
          if (obj.isStandardSticker(body)) {
            obj1 = closure_130_1(closure_130_2[10]);
            const obj5 = { type: "PACK_STICKER_FETCH_SUCCESS", sticker: body };
            obj1.dispatch(obj5);
          } else {
            const _Error = Error;
            const error = new Error("Invalid sticker type");
            throw error;
          }
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
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp2;
            closure_2 = tmp5;
            closure_130_0 = closure_0;
            let body;
            const HTTP = require("HTTPUtils").HTTP;
            const obj1 = {
              url: Endpoints.GUILD_STICKER_PACKS(closure_0),
              rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
              signal,
            };
            c4 = 1;
            c5 = 1;
            const obj2 = { value: HTTP.get(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          body = value.body;
          obj = closure_131_1(closure_131_2[10]);
          const obj4 = {
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
            }),
          };
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
};
let closure_16 = async function _deleteGuildSticker(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = require("HTTPUtils").HTTP;
          const obj1 = {
            url: Endpoints.GUILD_STICKER(user.guild_id, user.id),
            rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
          };
          c2 = 1;
          c1 = 1;
          const obj2 = { value: HTTP.del(obj1), done: false };
          return obj2;
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
  const request = {
    url: Endpoints.GUILD_STICKER_PACKS(guildId),
    body: null,
    fields: null,
    attachments: null,
    headers: null,
    rejectWithError: null,
  };
  if ("web" === user.platform) {
    const body = user.body;
  }
  request.body = body;
  if ("mobile" === user.platform) {
    const items = [{ name: "name", value: user.name }, ,];
    items[1] = { name: "tags", value: user.tags };
    items[2] = { name: "description", value: user.description };
    const tmp11 = items;
  }
  request.fields = tmp11;
  if ("mobile" === user.platform) {
    const obj4 = { name: "file", file: null };
    ({ uri: obj7.uri, name: obj7.name, mimeType: obj7.type } = user);
    obj4.file = { uri: null, name: null, type: null };
    const items1 = [obj4];
    const tmp12 = items1;
  }
  request.attachments = tmp12;
  const obj7 = InlineUploaderDefault;
  request.headers = obj7.buildHeadersForMd5(user.originalMd5);
  request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  await HTTP.post(request);
  closure_129_1 = value;
  const obj8 = { type: "GUILD_STICKERS_CREATE_SUCCESS", guildId: closure_129_0, sticker: null };
  const obj9 = {};
  const merged = Object.assign(closure_129_1.body);
  const currentUser = closure_130_7.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
  }
  obj9.user_id = id;
  obj8.sticker = obj9;
  closure_130_1(closure_130_2[10]).dispatch(obj8);
  return closure_129_1.body;
};
let closure_18 = async function _updateGuildSticker(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    const HTTP = require("HTTPUtils").HTTP;
    const request = {
      url: Endpoints.GUILD_STICKER(closure_0, closure_1),
      body,
      rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
    };
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
  const obj = { type: "ADD_STICKER_PREVIEW", channelId, sticker, draftType };
  obj.dispatch(obj);
};
export const clearStickerPreview = function clearStickerPreview(channelId, draftType) {
  const obj = { type: "CLEAR_STICKER_PREVIEW", channelId, draftType };
  obj.dispatch(obj);
};
export const favoriteSticker = function favoriteSticker(sticker) {
  const _require = sticker;
  const FrecencyUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteStickers",
    async (stickerIds) => {
      stickerIds = stickerIds.stickerIds;
      let tmp = stickerIds;
      if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
        let found = stickerIds;
        if (GatewayConnectionStore.isConnected()) {
          found = stickerIds.filter((item) => null != stickerById.getStickerById(item));
        }
        tmp = found;
      }
      stickerIds.stickerIds = tmp;
      let obj = _modDef12;
      if (obj.size(stickerIds.stickerIds) >= closure_2_10) {
        obj = { title: null, body: null };
        const intl = util.intl;
        obj.title = intl.string(util.t["+XYXtZ"]);
        const intl2 = util.intl;
        obj = { count: tmp6 };
        obj.body = intl2.formatToPlainString(util.t.JaIyFi, obj);
        AlertActionCreatorsDefault.show(obj);
        let flag = false;
        const tmp4Result = AlertActionCreatorsDefault;
      } else {
        stickerIds = stickerIds.stickerIds;
        const hasItem = stickerIds.includes(closure_0);
        flag = !hasItem;
        if (!hasItem) {
          const stickerIds1 = stickerIds.stickerIds;
          stickerIds1.push(closure_0);
        }
      }
      return flag;
    },
    constants.INFREQUENT_USER_ACTION,
  );
};
export const unfavoriteSticker = function unfavoriteSticker(sticker) {
  const _require = sticker;
  const FrecencyUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync(
    "favoriteStickers",
    async (stickerIds) => {
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
    },
    constants.INFREQUENT_USER_ACTION,
  );
};
