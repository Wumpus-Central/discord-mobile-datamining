// discord_app/actions/EmojiActionCreators.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import intl3 from "../intl/index.native.tsx";
import wrappers from "../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import GlobalUtils from "../utils/GlobalUtils.tsx";
import UnicodeEmojisDefault from "../modules/emojis/UnicodeEmojis.tsx";
import dedupeEmojisByNameOrIdDefault from "../modules/emojis/utils/dedupeEmojisByNameOrId.tsx";
import AlertActionCreatorsDefault from "AlertActionCreators.tsx";
import InlineUploaderDefault from "../lib/uploader_inline/InlineUploader.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import EmojiStore from "../modules/emojis/EmojiStore.tsx";
import GatewayConnectionStore from "../modules/gateway/GatewayConnectionStore.tsx";
import GuildAvailabilityStore from "../stores/GuildAvailabilityStore.tsx";
import UserSettingsConstants from "../modules/user_settings/UserSettingsConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c5, c6, closure_3, customEmojiById, emojis;

let c9;
let metroImportAll;
const f102272 = (item) => {
  customEmojiById = customEmojiById.getCustomEmojiById(item);
  if (customEmojiById == null) {
    obj = closure_1_1(closure_1_2[14]);
    customEmojiById = obj.getByName(item);
  }
  return customEmojiById;
};
let obj = function _updateEmoji() {
  obj = _asyncToGenerator(async function (arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let obj5;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let name;
        let roles;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            c0 = undefined;
            c1 = undefined;
            name = undefined;
            roles = undefined;
            ({ guildId: c0, emojiId: c1, name: c2, roles: c3 } = closure_0);
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[9]).HTTP;
            const request = {
              url: closure_130_7.GUILD_EMOJI(c0, c1),
              body: obj5,
              oldFormErrors: true,
              rejectWithError: true,
            };
            const patch = HTTP.patch;
            obj5 = { name, roles };
            c5 = 3;
            c6 = 1;
            const obj6 = { value: patch(request), done: false };
            return obj6;
          }
        } else if (2 === c5) {
          c4 = 0;
          let closure_4 = closure_3;
          const self2 = this;
          const self = this;
          const tmp12 = new closure_130_1(closure_130_2[13])(closure_4);
          throw tmp12;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp15) {
        closure_3 = tmp15;
        if (0 === c4) {
          c6 = 3;
          throw tmp15;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
({ MAX_FAVORITES: metroImportAll, UserSettingsDelay: c9 } = UserSettingsConstants);
let result = size.fileFinishedImporting("actions/EmojiActionCreators.tsx");

export const setDiversityColor = function setDiversityColor(value) {
  _require = value;
  const PreloadedUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync(
    "textAndImages",
    async (diversitySurrogate) => {
      const StringValue = wrappers.StringValue;
      diversitySurrogate.diversitySurrogate = StringValue.create();
      diversitySurrogate.diversitySurrogate.value = value;
    },
    constants.FREQUENT_USER_ACTION,
  );
};
export const fetchEmoji = function fetchEmoji(guildId) {
  _require = guildId;
  obj = DispatcherDefault;
  let obj2 = { type: "EMOJI_FETCH", guildId };
  obj.dispatch(obj2);
  const HTTP = require("HTTPUtils").HTTP;
  const obj3 = { url: Endpoints.GUILD_EMOJIS(guildId), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj3);
  value.then(
    (body) => {
      obj = DispatcherDefault;
      const obj2 = { type: "EMOJI_FETCH_SUCCESS", guildId, emojis: body.body };
      return obj.dispatch(obj2);
    },
    () => {
      obj = DispatcherDefault;
      const obj2 = { type: "EMOJI_FETCH_FAILURE", guildId };
      return obj.dispatch(obj2);
    },
  );
};
export const uploadEmoji = function uploadEmoji(guildId) {
  let image;
  let name;
  let obj3;
  let originalMd5;
  let page;
  let roles;
  let tmp3Result;
  guildId = guildId.guildId;
  const analyticsLocation = guildId.analyticsLocation;
  ({ image, name, roles, originalMd5 } = guildId);
  obj = DispatcherDefault;
  obj.dispatch({ type: "EMOJI_UPLOAD_START", guildId });
  const HTTP = guildId(1282).HTTP;
  const request = {
    url: Endpoints.GUILD_EMOJIS(guildId),
    body: { image, name, roles },
    headers: obj3.buildHeadersForMd5(originalMd5),
    context: { client_event_source: page },
    oldFormErrors: true,
    rejectWithError: tmp3Result.rejectWithMigratedError(),
  };
  const post = HTTP.post;
  page = undefined;
  obj3 = InlineUploaderDefault;
  const tmp3 = guildId;
  if (analyticsLocation != null) {
    page = analyticsLocation.page;
  }
  tmp3Result = tmp3(1282);
  const postResult = post(request);
  return postResult.then(
    (body) => {
      obj = DispatcherDefault;
      const obj2 = { type: "EMOJI_UPLOAD_STOP", guildId };
      obj.dispatch(obj2);
      return body.body;
    },
    (arg0) => {
      obj = DispatcherDefault;
      const obj2 = { type: "EMOJI_UPLOAD_STOP", guildId };
      obj.dispatch(obj2);
      return Promise.reject(arg0);
    },
  );
};
export const deleteEmoji = function deleteEmoji(guildId, id, replaced_by) {
  let tmp3Result;
  let tmp4;
  obj = DispatcherDefault;
  const obj2 = { type: "EMOJI_DELETE", guildId, emojiId: id };
  obj.dispatch(obj2);
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.GUILD_EMOJI(guildId, id),
    body: tmp4,
    oldFormErrors: true,
    rejectWithError: tmp3Result.rejectWithMigratedError(),
  };
  const del = HTTP.del;
  tmp4 = undefined;
  if (null != replaced_by) {
    tmp4 = { replaced_by };
    const obj3 = { replaced_by };
  }
  tmp3Result = HTTPUtils;
  const delResult = del(request);
  return delResult.then(() => {
    const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = require("intl").intl;
    announce(intl.string(require("intl").t.L3UUha));
  });
};
export const updateEmoji = function updateEmoji() {
  return obj(...arguments);
};
export const favoriteEmoji = function favoriteEmoji(stateFromStores1) {
  let name;
  let tmp = null;
  if (null != stateFromStores1) {
    name = stateFromStores1.id;
    if (name == null) {
      obj = UnicodeEmojisDefault;
      const result = obj.convertSurrogateToBase(stateFromStores1.surrogates);
      let name1;
      if (result != null) {
        name1 = result.name;
      }
      name = name1;
    }
    if (name == null) {
      name = stateFromStores1.name;
    }
    tmp = name;
  }
  name = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = name(2033).FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync(
      "favoriteEmojis",
      async (emojis) => {
        let flag;
        let intl;
        let intl2;
        let obj4;
        const emojis1 = emojis.emojis;
        let tmp2 = emojis1;
        if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
          tmp2 = emojis1;
          if (GatewayConnectionStore.isConnected()) {
            const mapped = emojis1.map(f102272);
            const found = mapped.filter(GlobalUtils.isNotNullish);
            const items = [];
            obj = dedupeEmojisByNameOrIdDefault(found);
            HermesBuiltin.arraySpread(items, obj.keys(), 0);
            tmp2 = items;
          }
        }
        emojis.emojis = tmp2;
        const obj2 = _modDef12;
        if (obj2.size(emojis.emojis) >= metroImportAll) {
          const obj3 = { title: intl.string(intl3.t["+XYXtZ"]), body: intl2.formatToPlainString(intl3.t.JaIyFi, obj4) };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl3.intl;
          intl2 = intl3.intl;
          obj4 = { count: tmp12 };
          show(obj3);
          flag = false;
        } else {
          emojis = emojis.emojis;
          const hasItem = emojis.includes(name);
          flag = !hasItem;
          if (flag) {
            const emojis2 = emojis.emojis;
            emojis2.push(name);
          }
        }
        return flag;
      },
      constants.INFREQUENT_USER_ACTION,
    );
  }
};
export const unfavoriteEmoji = function unfavoriteEmoji(stateFromStores1) {
  let name;
  let tmp = null;
  if (null != stateFromStores1) {
    name = stateFromStores1.id;
    if (name == null) {
      obj = UnicodeEmojisDefault;
      const result = obj.convertSurrogateToBase(stateFromStores1.surrogates);
      let name1;
      if (result != null) {
        name1 = result.name;
      }
      name = name1;
    }
    if (name == null) {
      name = stateFromStores1.name;
    }
    tmp = name;
  }
  name = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = name(2033).FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync(
      "favoriteEmojis",
      async (emojis) => {
        const emojis1 = emojis.emojis;
        let tmp2 = emojis1;
        if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
          tmp2 = emojis1;
          if (GatewayConnectionStore.isConnected()) {
            const mapped = emojis1.map(f102272);
            const found = mapped.filter(GlobalUtils.isNotNullish);
            obj = dedupeEmojisByNameOrIdDefault(found);
            const items = [];
            HermesBuiltin.arraySpread(items, obj.keys(), 0);
            tmp2 = items;
          }
        }
        emojis.emojis = tmp2;
        emojis = emojis.emojis;
        if (emojis.includes(name)) {
          const emojis2 = emojis.emojis;
          emojis.emojis = emojis2.filter((item) => name !== item);
        } else {
          return false;
        }
      },
      constants.INFREQUENT_USER_ACTION,
    );
  }
};
