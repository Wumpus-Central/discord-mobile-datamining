// === Module 10336: EmojiActionCreators ===

// Module 10336 (EmojiActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import wrappers from "wrappers" /* 1218 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import InlineUploaderDefault from "InlineUploader" /* 5169 */;
import dedupeEmojisByNameOrIdDefault from "dedupeEmojisByNameOrId" /* 5466 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 4902 */;

require = fn;
let closure_10 = async function _updateEmoji(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ guildId: closure_129_0, emojiId: closure_129_1, name: closure_129_2, roles: closure_129_3 } = closure_0);
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[9]).HTTP;
          const request = { url: closure_130_7.GUILD_EMOJI(closure_129_0, closure_129_1), body: null, oldFormErrors: true, rejectWithError: true };
          const obj2 = { name: closure_129_2, roles: closure_129_3 };
          request.body = obj2;
          c5 = 3;
          c6 = 1;
          const obj3 = { value: HTTP.patch(request), done: false };
          return obj3;
        }
      } else if (2 === tmp8) {
        c4 = 0;
        closure_129_4 = closure_3;
        const tmp18 = new closure_130_1(closure_130_2[13])(closure_129_4);
        throw tmp18;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp21) {
      closure_3 = tmp21;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp21;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const UserSettingsConstants = fn(1084);
({ MAX_FAVORITES: closure_8, UserSettingsDelay: closure_9 } = UserSettingsConstants);
const size = fn(2);
let result = size.fileFinishedImporting("actions/EmojiActionCreators.tsx");

export const setDiversityColor = function setDiversityColor(value) {
  _require = value;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", async (diversitySurrogate) => {
    const StringValue = wrappers.StringValue;
    diversitySurrogate.diversitySurrogate = StringValue.create();
    diversitySurrogate.diversitySurrogate.value = value;
  }, constants.FREQUENT_USER_ACTION);
};
export const fetchEmoji = function fetchEmoji(guildId) {
  _require = guildId;
  let obj = { type: "EMOJI_FETCH", guildId };
  obj.dispatch(obj);
  const HTTP = require("HTTPUtils").HTTP;
  obj = { url: Endpoints.GUILD_EMOJIS(guildId), oldFormErrors: true, rejectWithError: true };
  value = HTTP.get(obj);
  value.then((body) => {
    const obj = { type: "EMOJI_FETCH_SUCCESS", guildId, emojis: body.body };
    return obj.dispatch(obj);
  }, () => {
    const obj = { type: "EMOJI_FETCH_FAILURE", guildId };
    return obj.dispatch(obj);
  });
};
export const uploadEmoji = function uploadEmoji(guildId) {
  guildId = guildId.guildId;
  const analyticsLocation = guildId.analyticsLocation;
  ({ image, name, roles, originalMd5 } = guildId);
  DispatcherDefault.dispatch({ type: "EMOJI_UPLOAD_START", guildId });
  const HTTP = guildId(1272).HTTP;
  const request = { url: Endpoints.GUILD_EMOJIS(guildId), body: { image, name, roles }, headers: null, context: null, oldFormErrors: true, rejectWithError: null };
  const tmp3 = guildId;
  request.headers = InlineUploaderDefault.buildHeadersForMd5(originalMd5);
  let page;
  if (analyticsLocation != null) {
    page = analyticsLocation.page;
  }
  request.context = { client_event_source: page };
  request.rejectWithError = tmp3(1272).rejectWithMigratedError();
  const tmp3Result = tmp3(1272);
  return HTTP.post(request).then((body) => {
    const obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return body.body;
  }, (arg0) => {
    const obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return Promise.reject(arg0);
  });
};
export const deleteEmoji = function deleteEmoji(guildId, id, replaced_by) {
  let obj = { type: "EMOJI_DELETE", guildId, emojiId: id };
  obj.dispatch(obj);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.GUILD_EMOJI(guildId, id), body: null, oldFormErrors: true, rejectWithError: null };
  let tmp4;
  if (null != replaced_by) {
    obj = { replaced_by };
    tmp4 = obj;
  }
  request.body = tmp4;
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  const tmp3Result = HTTPUtils;
  return HTTP.del(request).then(() => {
    const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
    const intl = require("util").intl;
    AccessibilityAnnouncer.announce(intl.string(require("util").t.L3UUha));
  });
};
export const updateEmoji = function updateEmoji() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const favoriteEmoji = function favoriteEmoji(customEmojiFromJoinedGuild) {
  let tmp = null;
  if (null != customEmojiFromJoinedGuild) {
    let name = customEmojiFromJoinedGuild.id;
    if (name == null) {
      const result = UnicodeEmojisDefault.convertSurrogateToBase(customEmojiFromJoinedGuild.surrogates);
      name = undefined;
      if (result != null) {
        name = result.name;
      }
    }
    if (name == null) {
      name = customEmojiFromJoinedGuild.name;
    }
    tmp = name;
  }
  name = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = name(1940).FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", async (emojis) => {
      emojis = emojis.emojis;
      let tmp = emojis;
      if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
        tmp = emojis;
        if (GatewayConnectionStore.isConnected()) {
          const mapped = emojis.map((item) => {
            customEmojiById = customEmojiById.getCustomEmojiById(item);
            if (customEmojiById == null) {
              customEmojiById = closure_1_1(dependencyMap[14]).getByName(item);
              const obj = closure_1_1(dependencyMap[14]);
            }
            return customEmojiById;
          });
          const found = mapped.filter(GlobalUtils.isNotNullish);
          let obj = dedupeEmojisByNameOrIdDefault(found);
          const items = [];
          HermesBuiltin.arraySpread(obj.keys(), 0);
          tmp = items;
        }
      }
      emojis.emojis = tmp;
      if (obj2.size(emojis.emojis) >= React6) {
        obj = { title: null, body: null };
        const intl = util.intl;
        obj.title = intl.string(util.t["+XYXtZ"]);
        const intl2 = util.intl;
        obj = { count: tmp11 };
        obj.body = intl2.formatToPlainString(util.t.JaIyFi, obj);
        AlertActionCreatorsDefault.show(obj);
        let flag = false;
        const tmp9Result = AlertActionCreatorsDefault;
      } else {
        emojis = emojis.emojis;
        const hasItem = emojis.includes(name);
        flag = !hasItem;
        if (!hasItem) {
          const emojis1 = emojis.emojis;
          emojis1.push(name);
        }
      }
      return flag;
    }, constants.INFREQUENT_USER_ACTION);
  }
};
export const unfavoriteEmoji = function unfavoriteEmoji(customEmojiFromJoinedGuild) {
  let tmp = null;
  if (null != customEmojiFromJoinedGuild) {
    let name = customEmojiFromJoinedGuild.id;
    if (name == null) {
      const result = UnicodeEmojisDefault.convertSurrogateToBase(customEmojiFromJoinedGuild.surrogates);
      name = undefined;
      if (result != null) {
        name = result.name;
      }
    }
    if (name == null) {
      name = customEmojiFromJoinedGuild.name;
    }
    tmp = name;
  }
  name = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = name(1940).FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", async (emojis) => {
      emojis = emojis.emojis;
      let tmp = emojis;
      if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
        tmp = emojis;
        if (GatewayConnectionStore.isConnected()) {
          const mapped = emojis.map((item) => {
            customEmojiById = customEmojiById.getCustomEmojiById(item);
            if (customEmojiById == null) {
              customEmojiById = closure_1_1(dependencyMap[14]).getByName(item);
              const obj = closure_1_1(dependencyMap[14]);
            }
            return customEmojiById;
          });
          const found = mapped.filter(GlobalUtils.isNotNullish);
          const items = [];
          HermesBuiltin.arraySpread(dedupeEmojisByNameOrIdDefault(found).keys(), 0);
          tmp = items;
          let obj = dedupeEmojisByNameOrIdDefault(found);
        }
      }
      emojis.emojis = tmp;
      emojis = emojis.emojis;
      if (emojis.includes(name)) {
        const emojis1 = emojis.emojis;
        emojis.emojis = emojis1.filter((item) => name !== item);
      } else {
        return false;
      }
    }, constants.INFREQUENT_USER_ACTION);
  }
};