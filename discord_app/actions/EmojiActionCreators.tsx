// discord_app/actions/EmojiActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import parseRawEmojiObjectDefault from "../modules/emojis/UnicodeEmojis.tsx";
import fromBlobDefault from "../lib/uploader_inline/InlineUploader.tsx";
import closure_3 from "../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../modules/emojis/EmojiStore.tsx";
import closure_5 from "../modules/gateway/GatewayConnectionStore.tsx";
import closure_6 from "../stores/GuildAvailabilityStore.tsx";
import { Endpoints } from "../Constants.tsx";
import MAX_FAVORITES from "../modules/user_settings/UserSettingsConstants.tsx";

require = arg1;
function _updateEmoji() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback2 = tmp5;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              ({ guildId: c0, emojiId: c1, name: c2, roles: c3 } = callback);
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = 1;
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
              obj2[0] = closure_7.GUILD_EMOJI(callback, callback2);
              const obj3 = { name: null, roles: null };
              obj3[0] = dependencyMap;
              obj3[1] = c3;
              obj2[1] = obj3;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj2);
              return obj4;
            }
          } else if (2 === tmp8) {
            c4 = 0;
            c4 = c3;
            const tmp18 = new callback2(4279)(c4);
            throw tmp18;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp21) {
          c3 = tmp21;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp21;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ MAX_FAVORITES: closure_8, UserSettingsDelay: c9 } = MAX_FAVORITES);
let result = require("set").fileFinishedImporting("actions/EmojiActionCreators.tsx");

export const setDiversityColor = function setDiversityColor(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = require("../modules/user_settings/UserSettingsProtoActionCreators.tsx").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", (diversitySurrogate) => {
    const StringValue = callback(closure_1_2[7]).StringValue;
    diversitySurrogate.diversitySurrogate = StringValue.create();
    diversitySurrogate.diversitySurrogate.value = callback;
  }, constants.FREQUENT_USER_ACTION);
};
export const fetchEmoji = function fetchEmoji(guildId) {
  const _require = guildId;
  let obj = dispatcherDefault;
  obj = { type: "EMOJI_FETCH", guildId };
  obj.dispatch(obj);
  const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  obj = { url: Endpoints.GUILD_EMOJIS(guildId), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  value.then((body) => {
    let obj = closure_1_1(closure_1_2[8]);
    obj = { type: "EMOJI_FETCH_SUCCESS", guildId: closure_0, emojis: body.body };
    return obj.dispatch(obj);
  }, () => {
    let obj = closure_1_1(closure_1_2[8]);
    obj = { type: "EMOJI_FETCH_FAILURE", guildId: closure_0 };
    return obj.dispatch(obj);
  });
};
export const uploadEmoji = function uploadEmoji(guildId) {
  guildId = guildId.guildId;
  const analyticsLocation = guildId.analyticsLocation;
  ({ image, name, roles, originalMd5 } = guildId);
  let obj = dispatcherDefault;
  obj.dispatch({ type: "EMOJI_UPLOAD_START", guildId });
  const HTTP = guildId(530).HTTP;
  obj = { url: Endpoints.GUILD_EMOJIS(guildId), body: { image, name, roles }, headers: fromBlobDefault.buildHeadersForMd5(originalMd5), context: null, oldFormErrors: true, rejectWithError: null };
  let page;
  if (analyticsLocation != null) {
    page = analyticsLocation.page;
  }
  obj[3] = { client_event_source: page };
  const obj3 = fromBlobDefault;
  const tmp3 = guildId;
  obj[5] = guildId(530).rejectWithMigratedError();
  const tmp3Result = guildId(530);
  return HTTP.post(obj).then((body) => {
    let obj = closure_1_1(closure_1_2[8]);
    obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return body.body;
  }, (arg0) => {
    let obj = closure_1_1(closure_1_2[8]);
    obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return Promise.reject(arg0);
  });
};
export const deleteEmoji = function deleteEmoji(c0, id) {
  let obj = dispatcherDefault;
  obj = { type: "EMOJI_DELETE", guildId: c0, emojiId: id };
  obj.dispatch(obj);
  const HTTP = sendRequest.HTTP;
  obj = { url: Endpoints.GUILD_EMOJI(c0, id), body: null, oldFormErrors: true, rejectWithError: null };
  let tmp4;
  if (null != arg2) {
    obj1 = { replaced_by: null };
    obj1[0] = arg2;
    tmp4 = obj1;
  }
  obj[1] = tmp4;
  obj[3] = sendRequest.rejectWithMigratedError();
  const tmp3 = require;
  const tmp3Result = sendRequest;
  return HTTP.del(obj).then(() => {
    const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
    const intl = callback(1236).intl;
    AccessibilityAnnouncer.announce(intl.string(callback(1236).t.L3UUha));
  });
};
export const updateEmoji = function updateEmoji(arg0) {
  const self = this;
  const apply = _updateEmoji.apply;
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
      const result = parseRawEmojiObjectDefault.convertSurrogateToBase(customEmojiFromJoinedGuild.surrogates);
      name = undefined;
      if (result != null) {
        name = result.name;
      }
      let obj = parseRawEmojiObjectDefault;
    }
    if (name == null) {
      name = customEmojiFromJoinedGuild.name;
    }
    tmp = name;
  }
  name = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = name(1374).FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", (emojis) => {
      emojis = emojis.emojis;
      let tmp = emojis;
      if (closure_1_6.totalUnavailableGuilds <= 0) {
        tmp = emojis;
        if (closure_1_5.isConnected()) {
          const mapped = emojis.map((emojiId) => {
            customEmojiById = customEmojiById.getCustomEmojiById(emojiId);
            if (customEmojiById == null) {
              customEmojiById = callback(table[14]).getByName(emojiId);
              const obj = callback(table[14]);
            }
            return customEmojiById;
          });
          const found = mapped.filter(name(closure_1_2[15]).isNotNullish);
          let obj = closure_1_1(closure_1_2[16])(found);
          const items = [];
          HermesBuiltin.arraySpread(obj.keys(), 0);
          tmp = items;
        }
      }
      emojis.emojis = tmp;
      if (obj2.size(emojis.emojis) >= closure_1_8) {
        obj = { title: null, body: null };
        const intl = name(tmp10[12]).intl;
        obj[0] = intl.string(name(tmp10[12]).t["+XYXtZ"]);
        const intl2 = name(tmp10[12]).intl;
        obj = { count: null };
        obj[0] = tmp11;
        obj[1] = intl2.formatToPlainString(name(tmp10[12]).t.JaIyFi, obj);
        closure_1_1(tmp10[18]).show(obj);
        let flag = false;
        const tmp9Result = closure_1_1(tmp10[18]);
      } else {
        emojis = emojis.emojis;
        const hasItem = emojis.includes(name);
        flag = !hasItem;
        if (!hasItem) {
          const emojis1 = emojis.emojis;
          emojis1.push(tmp12);
        }
        tmp12 = name;
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
      const result = parseRawEmojiObjectDefault.convertSurrogateToBase(customEmojiFromJoinedGuild.surrogates);
      name = undefined;
      if (result != null) {
        name = result.name;
      }
      let obj = parseRawEmojiObjectDefault;
    }
    if (name == null) {
      name = customEmojiFromJoinedGuild.name;
    }
    tmp = name;
  }
  name = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = name(1374).FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", (emojis) => {
      emojis = emojis.emojis;
      let tmp = emojis;
      if (closure_1_6.totalUnavailableGuilds <= 0) {
        tmp = emojis;
        if (closure_1_5.isConnected()) {
          const mapped = emojis.map((emojiId) => {
            customEmojiById = customEmojiById.getCustomEmojiById(emojiId);
            if (customEmojiById == null) {
              customEmojiById = callback(table[14]).getByName(emojiId);
              const obj = callback(table[14]);
            }
            return customEmojiById;
          });
          const found = mapped.filter(name(closure_1_2[15]).isNotNullish);
          const items = [];
          HermesBuiltin.arraySpread(closure_1_1(closure_1_2[16])(found).keys(), 0);
          tmp = items;
          let obj = closure_1_1(closure_1_2[16])(found);
        }
      }
      emojis.emojis = tmp;
      emojis = emojis.emojis;
      if (emojis.includes(name)) {
        const emojis1 = emojis.emojis;
        emojis.emojis = emojis1.filter((arg0) => closure_0 !== arg0);
      } else {
        return false;
      }
    }, constants.INFREQUENT_USER_ACTION);
  }
};