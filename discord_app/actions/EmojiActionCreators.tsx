// === Module 10465: EmojiActionCreators ===

// Module 10465 (EmojiActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import wrappers from "wrappers" /* 1216 */;
import HTTPUtils from "HTTPUtils" /* 1270 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4289 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4980 */;
import InlineUploaderDefault from "InlineUploader" /* 5250 */;
import dedupeEmojisByNameOrIdDefault from "dedupeEmojisByNameOrId" /* 5547 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmojiStore from "EmojiStore" /* 5540 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5358 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 4978 */;

const require = globalThis.__r;

require = fn;
let closure_10 = async function _updateEmoji(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[9]).HTTP;
          const request = { url: closure_130_7.GUILD_EMOJI(closure_129_0, closure_129_1), body: null, oldFormErrors: true, rejectWithError: true };
          const obj5 = { name: closure_129_2, roles: closure_129_3 };
          request.body = obj5;
          c5 = 3;
          c6 = 1;
          const obj6 = { value: HTTP.patch(request), done: false };
          return obj6;
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
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
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
  DispatcherDefault.dispatch({ type: "EMOJI_FETCH", guildId });
  const HTTP = require("HTTPUtils").HTTP;
  const obj2 = { type: "EMOJI_FETCH", guildId };
  value = HTTP.get({ url: Endpoints.GUILD_EMOJIS(guildId), oldFormErrors: true, rejectWithError: true });
  value.then((body) => DispatcherDefault.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId, emojis: body.body }), () => DispatcherDefault.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId }));
};
export const uploadEmoji = function uploadEmoji(guildId) {
  guildId = guildId.guildId;
  const analyticsLocation = guildId.analyticsLocation;
  ({ image, name, roles, originalMd5 } = guildId);
  DispatcherDefault.dispatch({ type: "EMOJI_UPLOAD_START", guildId });
  const HTTP = guildId(1270).HTTP;
  const request = { url: Endpoints.GUILD_EMOJIS(guildId), body: { image, name, roles }, headers: null, context: null, oldFormErrors: true, rejectWithError: null };
  const tmp3 = guildId;
  request.headers = InlineUploaderDefault.buildHeadersForMd5(originalMd5);
  let page;
  if (analyticsLocation != null) {
    page = analyticsLocation.page;
  }
  request.context = { client_event_source: page };
  request.rejectWithError = tmp3(1270).rejectWithMigratedError();
  const tmp3Result = tmp3(1270);
  return HTTP.post(request).then((body) => {
    DispatcherDefault.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId });
    return body.body;
  }, (arg0) => {
    DispatcherDefault.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId });
    return Promise.reject(arg0);
  });
};
export const deleteEmoji = function deleteEmoji(guildId, id, replaced_by) {
  DispatcherDefault.dispatch({ type: "EMOJI_DELETE", guildId, emojiId: id });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.GUILD_EMOJI(guildId, id), body: null, oldFormErrors: true, rejectWithError: null };
  let tmp4;
  if (null != replaced_by) {
    const obj3 = { replaced_by };
    tmp4 = obj3;
  }
  request.body = tmp4;
  const obj2 = { type: "EMOJI_DELETE", guildId, emojiId: id };
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
      let name1;
      if (result != null) {
        name1 = result.name;
      }
      name = name1;
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
      const emojis1 = emojis.emojis;
      let tmp = emojis1;
      if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
        tmp = emojis1;
        if (GatewayConnectionStore.isConnected()) {
          const mapped = emojis1.map((item) => {
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
          const obj = dedupeEmojisByNameOrIdDefault(found);
        }
      }
      emojis.emojis = tmp;
      if (obj2.size(emojis.emojis) >= React6) {
        const obj3 = { title: null, body: null };
        const intl = util.intl;
        obj3.title = intl.string(util.t["+XYXtZ"]);
        const intl2 = util.intl;
        const obj4 = { count: tmp11 };
        obj3.body = intl2.formatToPlainString(util.t.JaIyFi, obj4);
        AlertActionCreatorsDefault.show(obj3);
        let flag = false;
        const tmp9Result = AlertActionCreatorsDefault;
      } else {
        emojis = emojis.emojis;
        const hasItem = emojis.includes(name);
        flag = !hasItem;
        if (!hasItem) {
          const emojis2 = emojis.emojis;
          emojis2.push(name);
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
      let name1;
      if (result != null) {
        name1 = result.name;
      }
      name = name1;
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
      const emojis1 = emojis.emojis;
      let tmp = emojis1;
      if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
        tmp = emojis1;
        if (GatewayConnectionStore.isConnected()) {
          const mapped = emojis1.map((item) => {
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
        const emojis2 = emojis.emojis;
        emojis.emojis = emojis2.filter((item) => name !== item);
      } else {
        return false;
      }
    }, constants.INFREQUENT_USER_ACTION);
  }
};