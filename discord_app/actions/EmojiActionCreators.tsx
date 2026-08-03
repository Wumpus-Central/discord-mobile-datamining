import closure_3 from "MAX_FAVORITES";
import getEmojiToGroupId from "getEmojiToGroupId";
import _handleConnectionOpen from "_handleConnectionOpen";
import handleConnectionOpen from "handleConnectionOpen";
import { Endpoints } from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";

let c9;
let metroImportAll;
let require = arg1;
function _updateEmoji() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
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
          return { value: "HermesInternal", done: null };
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
              let dependencyMap = tmp3;
              let callback2 = tmp5;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              ({ guildId: c0, emojiId: c1, name: c2, roles: c3 } = callback);
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let c4 = 1;
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
            const tmp18 = new callback2(4093)(c4);
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
  const _updateEmoji = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ MAX_FAVORITES: metroImportAll, UserSettingsDelay: c9 } = MAX_FAVORITES);
let result = require("_handleConnectionOpen").fileFinishedImporting("actions/EmojiActionCreators.tsx");

export const setDiversityColor = function setDiversityColor(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _require(1355).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", (diversitySurrogate) => {
    const StringValue = callback(outer1_2[7]).StringValue;
    diversitySurrogate.diversitySurrogate = StringValue.create();
    diversitySurrogate.diversitySurrogate.value = callback;
  }, constants.FREQUENT_USER_ACTION);
};
export const fetchEmoji = function fetchEmoji(guildId) {
  const _require = guildId;
  let obj = importDefault(709);
  obj = { type: "EMOJI_FETCH", guildId };
  obj.dispatch(obj);
  const HTTP = _require(530).HTTP;
  obj = { url: Endpoints.GUILD_EMOJIS(guildId), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  value.then((body) => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "EMOJI_FETCH_SUCCESS", guildId: closure_0, emojis: body.body };
    return obj.dispatch(obj);
  }, () => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "EMOJI_FETCH_FAILURE", guildId: closure_0 };
    return obj.dispatch(obj);
  });
};
export const uploadEmoji = function uploadEmoji(guildId) {
  let image;
  let name;
  let originalMd5;
  let roles;
  guildId = guildId.guildId;
  const analyticsLocation = guildId.analyticsLocation;
  ({ image, name, roles, originalMd5 } = guildId);
  let obj = importDefault(709);
  obj.dispatch({ type: "EMOJI_UPLOAD_START", guildId });
  const HTTP = guildId(530).HTTP;
  obj = { url: Endpoints.GUILD_EMOJIS(guildId), body: { image, name, roles }, headers: null, context: null, oldFormErrors: true, rejectWithError: null };
  obj[2] = importDefault(7953).buildHeadersForMd5(originalMd5);
  let page;
  if (analyticsLocation != null) {
    page = analyticsLocation.page;
  }
  obj[3] = { client_event_source: page };
  const obj3 = importDefault(7953);
  const tmp3 = guildId;
  obj[5] = guildId(530).rejectWithMigratedError();
  const tmp3Result = guildId(530);
  return HTTP.post(obj).then((body) => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return body.body;
  }, (arg0) => {
    let obj = outer1_1(outer1_2[8]);
    obj = { type: "EMOJI_UPLOAD_STOP", guildId };
    obj.dispatch(obj);
    return Promise.reject(arg0);
  });
};
export const deleteEmoji = function deleteEmoji(c0, id) {
  let obj = importDefault(709);
  obj = { type: "EMOJI_DELETE", guildId: c0, emojiId: id };
  obj.dispatch(obj);
  const HTTP = require(530) /* sendRequest */.HTTP;
  obj = { url: Endpoints.GUILD_EMOJI(c0, id), body: null, oldFormErrors: true, rejectWithError: null };
  let tmp4;
  if (null != arg2) {
    const obj1 = { replaced_by: null };
    obj1[0] = arg2;
    tmp4 = obj1;
  }
  obj[1] = tmp4;
  obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
  const tmp3 = require;
  const tmp3Result = require(530) /* sendRequest */;
  return HTTP.del(obj).then(() => {
    const AccessibilityAnnouncer = callback(4039).AccessibilityAnnouncer;
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
      const result = importDefault(3834).convertSurrogateToBase(customEmojiFromJoinedGuild.surrogates);
      name = undefined;
      if (result != null) {
        name = result.name;
      }
      let obj = importDefault(3834);
    }
    if (name == null) {
      name = customEmojiFromJoinedGuild.name;
    }
    tmp = name;
  }
  const require = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", (emojis) => {
      emojis = emojis.emojis;
      let tmp = emojis;
      if (outer1_6.totalUnavailableGuilds <= 0) {
        tmp = emojis;
        if (outer1_5.isConnected()) {
          const mapped = emojis.map((emojiId) => {
            customEmojiById = customEmojiById.getCustomEmojiById(emojiId);
            if (customEmojiById == null) {
              customEmojiById = callback(table[14]).getByName(emojiId);
              const obj = callback(table[14]);
            }
            return customEmojiById;
          });
          const found = mapped.filter(tmp(outer1_2[15]).isNotNullish);
          let obj = outer1_1(outer1_2[16])(found);
          const items = [];
          HermesBuiltin.arraySpread(obj.keys(), 0);
          tmp = items;
        }
      }
      emojis.emojis = tmp;
      if (obj2.size(emojis.emojis) >= outer1_8) {
        obj = { title: null, body: null };
        const intl = tmp(tmp10[12]).intl;
        obj[0] = intl.string(tmp(tmp10[12]).t["+XYXtZ"]);
        const intl2 = tmp(tmp10[12]).intl;
        obj = { count: null };
        obj[0] = tmp11;
        obj[1] = intl2.formatToPlainString(tmp(tmp10[12]).t.JaIyFi, obj);
        outer1_1(tmp10[18]).show(obj);
        let flag = false;
        const tmp9Result = outer1_1(tmp10[18]);
      } else {
        emojis = emojis.emojis;
        const hasItem = emojis.includes(tmp);
        flag = !hasItem;
        if (!hasItem) {
          const emojis1 = emojis.emojis;
          emojis1.push(tmp12);
        }
        tmp12 = tmp;
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
      const result = importDefault(3834).convertSurrogateToBase(customEmojiFromJoinedGuild.surrogates);
      name = undefined;
      if (result != null) {
        name = result.name;
      }
      let obj = importDefault(3834);
    }
    if (name == null) {
      name = customEmojiFromJoinedGuild.name;
    }
    tmp = name;
  }
  const require = tmp;
  if (null != tmp) {
    const FrecencyUserSettingsActionCreators = require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators;
    FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", (emojis) => {
      emojis = emojis.emojis;
      let tmp = emojis;
      if (outer1_6.totalUnavailableGuilds <= 0) {
        tmp = emojis;
        if (outer1_5.isConnected()) {
          const mapped = emojis.map((emojiId) => {
            customEmojiById = customEmojiById.getCustomEmojiById(emojiId);
            if (customEmojiById == null) {
              customEmojiById = callback(table[14]).getByName(emojiId);
              const obj = callback(table[14]);
            }
            return customEmojiById;
          });
          const found = mapped.filter(tmp(outer1_2[15]).isNotNullish);
          const items = [];
          HermesBuiltin.arraySpread(outer1_1(outer1_2[16])(found).keys(), 0);
          tmp = items;
          let obj = outer1_1(outer1_2[16])(found);
        }
      }
      emojis.emojis = tmp;
      emojis = emojis.emojis;
      if (emojis.includes(tmp)) {
        const emojis1 = emojis.emojis;
        emojis.emojis = emojis1.filter((arg0) => closure_0 !== arg0);
      } else {
        return false;
      }
    }, constants.INFREQUENT_USER_ACTION);
  }
};