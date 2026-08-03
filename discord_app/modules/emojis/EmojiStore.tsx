import dedupeEmojisByNameOrId from "dedupeEmojisByNameOrId";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import getHash from "getHash";
import computeRolesForGuild from "computeRolesForGuild";
import _getSystemLocale from "_getSystemLocale";
import closure_8 from "handleConnectionClosedOrResumed";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import allGuildIds from "allGuildIds";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import mergeGuildAvatar from "mergeGuildAvatar";
import fromServer from "fromServer";
import initialize from "initialize";
import set from "set";
import { NULL_STRING_GUILD_ID } from "ME";
import { EmojiCategories } from "EmojiCategoryTypes";
import { UserSettingsTypes } from "MAX_FAVORITES";
import importDefaultResult from "parseRawEmojiObject";
import importDefaultResult2 from "DEFAULT_FRECENCY";
import importDefaultResult3 from "DEFAULT_FRECENCY";
import { PersistedStore } from "initialize";
import set from "getHash";

let closure_17;
let closure_18;
let resetFrequentlyUsed = arg1;
function getEmojiToGroupId() {
  loadSavedEmojis();
  if (null == closure_33) {
    closure_33 = {};
    for (const key10008 in closure_32) {
      let tmp5 = key10008;
      let tmp6 = dependencyMap;
      let obj = dependencyMap[key10008];
      let emojiIdsResult = obj.emojiIds();
      let tmp8 = emojiIdsResult;
      let tmp3 = emojiIdsResult;
      for (const item10010 of emojiIdsResult) {
        let tmp4 = closure_33;
        closure_33[item10010] = key10008;
        continue;
      }
    }
  }
  return closure_33;
}
function loadSavedEmojis() {
  const self = this;
  const apply = _loadSavedEmojis.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadSavedEmojis() {
  const self = this;
  const tmp = callback3(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp2;
            let c0 = tmp5;
            c0 = undefined;
            callback = undefined;
            if (outer1_30 === outer1_29.Unloaded) {
              let obj1 = outer1_1(1907);
              const databaseResult = obj1.database();
              c0 = databaseResult;
              if (null != databaseResult) {
                outer1_30 = outer1_29.Loading;
                let obj2 = outer1_0(1926);
                dependencyMap = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj2.tryLoadOrResetCacheGatewayAsync("EmojiStore.loadSavedEmojis", () => callback(table[25]).timeAsync("\u{1F4BE}", "loadSavedEmojis", () => outer1_1(outer1_2[26]).getAsync(closure_0)));
                return obj1;
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          callback = arg1;
          Loaded = Loaded.Loaded;
          if (null != callback) {
            obj2 = { type: "CACHED_EMOJIS_LOADED", emojis: null };
            obj2[1] = callback;
            callback(709).dispatch(obj2);
            const obj7 = callback(709);
          }
        }
        c3 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp18) {
        c3 = tmp;
        throw tmp18;
      }
    }
  });
  const _loadSavedEmojis = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function deleteEverything() {
  let closure_32 = {};
  let closure_33 = {};
  EmojiDisambiguations.reset();
  map.clear();
  const Unloaded = obj.Unloaded;
}
function rebuildEmojis() {
  let c33 = null;
  EmojiDisambiguations.reset();
  if (Unloaded === obj.Loaded) {
    importDefaultResult2.compute();
    importDefaultResult3.compute();
  }
}
function updateGuildEmoji(guildId) {
  if (null != dependencyMap[guildId]) {
    delete tmp[tmp2];
  }
  EmojiDisambiguations.clear(guildId);
  guildEmojis = guildEmojis.getGuildEmojis(guildId);
  if (null != guildEmojis) {
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      let obj = callback(5154);
      let flag = obj.canUseRoleSubscriptionIAP(guildId);
      if (typeof GuildEmojis !== "error") {
        HermesBuiltin.throwTypeError();
      }
      if (flag === undefined) {
        flag = false;
      }
      obj = Object.create(GuildEmojis.prototype);
      obj.id = guildId;
      obj._userId = currentUser.id;
      obj._emojiMap = guildEmojis;
      obj._canSeeServerSubIAP = flag;
      dependencyMap[guildId] = obj;
      const tmp8 = dependencyMap;
      const tmp9 = GuildEmojis;
    }
  }
}
function handleUserSettingsProtoStoreChange() {
  const textAndImages = closure_8.settings.textAndImages;
  let value;
  if (textAndImages != null) {
    if (textAndImages.diversitySurrogate != null) {
      value = iter.value;
    }
  }
  if (null != value) {
    let obj = importDefault(3896);
    const result = obj.setDefaultDiversitySurrogate(value);
  }
  EmojiDisambiguations.reset();
  const frecencyWithoutFetchingLatest = closure_8.frecencyWithoutFetchingLatest;
  const emojiFrecency = frecencyWithoutFetchingLatest.emojiFrecency;
  let emojis;
  if (emojiFrecency != null) {
    emojis = emojiFrecency.emojis;
  }
  if (emojis == null) {
    emojis = {};
  }
  const emojiReactionFrecency = frecencyWithoutFetchingLatest.emojiReactionFrecency;
  let emojis1;
  if (emojiReactionFrecency != null) {
    emojis1 = emojiReactionFrecency.emojis;
  }
  if (emojis1 == null) {
    emojis1 = {};
  }
  importDefaultResult2.overwriteHistory(importDefault(12).mapValues(emojis, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj.recentUses = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), obj.pendingUsages);
  const obj4 = importDefault(12);
  let tmp = closure_8;
  importDefaultResult3.overwriteHistory(importDefault(12).mapValues(emojis1, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj.recentUses = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), obj.emojiReactionPendingUsages);
  (function populateInitialFrecencyData(emojis, emojis1) {
    if (obj.isEmpty(emojis)) {
      if (tmpResult.isEmpty(closure_23.pendingUsages)) {
        if (closure_8.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS)) {
          const items = ["thumbsup", "eyes", "laughing", "watermelon", "fork_and_knife", "yum", "weary", "tired_face", "poop", "100"];
          for (const item10022 of items) {
            let tmp7 = closure_39;
            let trackResult = closure_39.track(item10022);
            continue;
          }
        }
      }
      tmpResult = tmp(12);
    }
    obj = callback(12);
    tmp = callback;
    const tmp9 = callback;
    if (obj3.isEmpty(emojis1)) {
      if (tmp9Result.isEmpty(closure_23.emojiReactionPendingUsages)) {
        if (closure_8.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS)) {
          const items1 = ["100", "100", "thumbsup", "thumbsup", "thumbsdown", "thumbsdown", "heart", "point_up", "eyes", "weary", "laughing", "white_check_mark", "x"];
          for (const item10049 of items1) {
            let tmp15 = closure_40;
            let trackResult1 = closure_40.track(item10049);
            continue;
          }
        }
      }
      tmp9Result = tmp9(12);
    }
  })(emojis, emojis1);
}
function trackUsage(emojiUsed) {
  let obj;
  if (null == emojiUsed) {
    return false;
  } else {
    const iter = emojiUsed[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let name = nextResult.id;
      if (name == null) {
        let tmp5 = nextResult;
        name = tmp4.uniqueName;
      }
      if (name == null) {
        let tmp6 = nextResult;
        name = tmp4.name;
      }
      let tmp7 = name;
      if (null != name) {
        let tmp8 = importDefaultResult2;
        let tmp9 = name;
        let trackResult = importDefaultResult2.track(tmp7);
        let tmp11 = obj;
        let pendingUsages = obj.pendingUsages;
        obj = { key: null, timestamp: null };
        obj[0] = tmp7;
        let _Date = Date;
        obj[1] = Date.now();
        let arr = pendingUsages.push(obj);
      }
      continue;
    }
    let tmp14 = tmp13;
    if (emojiUsed.length > 0) {
      tmp14 = Unloaded === obj.Loaded;
    }
    if (tmp14) {
      importDefaultResult2.compute();
    }
    return emojiUsed.length > 0;
  }
}
function handleRoleUpdate(guildId) {
  guildId = guildId.guildId;
  role = role.getRole(guildId, guildId.role.id);
  if (null != role) {
    const obj = callback(3874);
    if (obj.isSubscriptionRole(role)) {
      updateGuildEmoji(guildId);
      let c33 = null;
      EmojiDisambiguations.reset();
      if (Unloaded === obj.Loaded) {
        importDefaultResult2.compute();
        importDefaultResult3.compute();
      }
    }
  }
  return false;
}
({ EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = set);
let items = [EmojiCategories.TOP_GUILD_EMOJI.toString(), EmojiCategories.FAVORITES.toString(), EmojiCategories.RECENT.toString(), EmojiCategories.CUSTOM.toString()];
let combined = items.concat(require("parseRawEmojiObject").getCategories());
let obj = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: null };
set = new Set();
obj[2] = set;
class GuildEmojis {
  constructor(arg0, arg1, arg2) {
    flag = importAll;
    if (importAll === undefined) {
      flag = false;
    }
    obj = Object.create(new.target.prototype);
    obj.id = global;
    obj._userId = arg1;
    obj._emojiMap = importDefault;
    obj._canSeeServerSubIAP = flag;
    return obj;
  }
}
const prototype = GuildEmojis.prototype;
prototype["getEmoji"] = function getEmoji(arg0) {
  return this._emojiMap[arg0];
};
prototype["getUsableEmoji"] = function getUsableEmoji(id1) {
  const self = this;
  const emoji = this.getEmoji(id1);
  let tmp2;
  if (null != emoji) {
    if (self.isUsable(emoji)) {
      tmp2 = emoji;
    }
  }
  return tmp2;
};
prototype["isUsable"] = function isUsable(emoji) {
  const callback = emoji;
  if (0 === emoji.roles.length) {
    return true;
  } else {
    const self = this;
    member = member.getMember(this.id, this._userId);
    let tmp6 = null != member;
    if (tmp6) {
      let roles = member.roles;
      let someResult = roles.some((arg0) => {
        const roles = emoji.roles;
        return roles.includes(arg0);
      });
      if (!someResult) {
        let result = callback(5119).isPurchasableRoleSubscriptionEmoji(emoji);
        if (result) {
          let _canSeeServerSubIAP = self._canSeeServerSubIAP;
          if (!_canSeeServerSubIAP) {
            _canSeeServerSubIAP = userIsAdmin.getUserIsAdmin(emoji.guildId);
          }
          result = _canSeeServerSubIAP;
        }
        someResult = result;
        const obj = callback(5119);
      }
      tmp6 = someResult;
    }
    return tmp6;
  }
};
prototype["emojiIds"] = function emojiIds() {
  return importDefault(11).keys(this._emojiMap);
};
Object.defineProperty(prototype, "emojis", {
  get: function emojis(database) {
    const self = this;
    if (null == this._emojis) {
      const _Object = Object;
      self._emojis = Object.values(self._emojiMap);
    }
    return self._emojis;
  },
  set: undefined
});
Object.defineProperty(prototype, "emoticons", {
  get: function emoticons() {
    const self = this;
    if (null == this._emoticons) {
      const usableEmojis = self.usableEmojis;
      self._emoticons = usableEmojis.filter((require_colons) => !require_colons.require_colons);
    }
    return self._emoticons;
  },
  set: undefined
});
prototype["_computeEmojiUsability"] = function _computeEmojiUsability() {
  const self = this;
  if (null == this._usableEmojis) {
    const items = [];
    const _Set = Set;
    const set = new Set();
    const emojis = self.emojis;
    for (const item10017 of emojis) {
      let tmp7 = item10017;
      if (self.isUsable(item10017)) {
        let tmp10 = item10017;
        let arr = items.push(tmp7);
      } else {
        let tmp8 = item10017;
        let addResult = set.add(tmp7.id);
      }
      continue;
    }
    self._usableEmojis = importDefault(12).sortBy(items, (name) => name.name);
    self._hiddenEmojiIds = set;
    const obj2 = importDefault(12);
  }
};
Object.defineProperty(prototype, "usableEmojis", {
  get: function usableEmojis() {
    const result = this._computeEmojiUsability();
    return this._usableEmojis;
  },
  set: undefined
});
Object.defineProperty(prototype, "hiddenEmojiIds", {
  get: function hiddenEmojiIds() {
    const result = this._computeEmojiUsability();
    return this._hiddenEmojiIds;
  },
  set: undefined
});
let str = EmojiCategories.TOP_GUILD_EMOJI;
let str2 = EmojiCategories.FAVORITES;
const str3 = EmojiCategories.RECENT;
const str4 = EmojiCategories.CUSTOM;
const timestamp = Date.now();
let closure_25 = require("mergeGuildAvatar").fromTimestamp(timestamp - 60 * require("set").Millis.DAY);
let closure_26 = [];
let closure_27 = [];
const set1 = new Set();
obj = { Unloaded: 0, [0]: "Unloaded", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
let Unloaded = obj.Unloaded;
let items1 = [...combined];
let closure_32 = {};
let closure_33 = {};
let map = new Map();
let EmojiDisambiguations;
_instance_members_initializer_EmojiDisambiguations_ = function() {
  const self = this;
  this.favorites = null;
  this.favoriteNamesAndIds = null;
  this.topEmojis = null;
  this.disambiguatedEmoji = [];
  this.emoticonRegex = null;
  this.frequentlyUsed = null;
  this.frequentlyUsedReactionEmojis = null;
  this.frequentlyUsedReactionNamesAndIds = null;
  this.unicodeAliases = new Map();
  const map = new Map();
  this.customEmojis = new Map();
  const map1 = new Map();
  this.customEmojisByGroup = new Map();
  const map2 = new Map();
  this.emoticonsByName = new Map();
  const map3 = new Map();
  this.emojisByName = new Map();
  const map4 = new Map();
  this.emojisById = new Map();
  const map5 = new Map();
  this.newlyAddedEmoji = new Map();
  this.isFavoriteEmojiWithoutFetchingLatest = function isFavoriteEmojiWithoutFetchingLatest(id) {
    if (null == id) {
      return false;
    } else {
      const favoriteNamesAndIds = self.rebuildFavoriteEmojisWithoutFetchingLatest().favoriteNamesAndIds;
      if (null != id.id) {
        return favoriteNamesAndIds.has(id.id);
      } else {
        let result = outer1_1(outer1_2[18]).convertSurrogateToBase(id.surrogates);
        if (result == null) {
          result = id;
        }
        return favoriteNamesAndIds.has(result.name);
      }
    }
  };
};
class EmojiDisambiguations {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    handleConnectionClosedOrResumed = obj;
    tmp2 = _instance_members_initializer_EmojiDisambiguations_();
    obj.guildId = global;
    map = new Map();
    Map = map;
    items = [];
    Map = items;
    disambiguateEmoji = function disambiguateEmoji(name) {
      let customEmojisByGroup;
      let customEmojisByGroup2;
      let newlyAddedEmoji;
      let newlyAddedEmoji2;
      name = name.name;
      let obj = map;
      let num = map.get(name);
      if (num == null) {
        num = 0;
      }
      const result = obj.set(name, num + 1);
      let tmp2 = name;
      if (num > 0) {
        obj = {};
        const merged = Object.assign(name);
        const _HermesInternal = HermesInternal;
        obj.name = "" + name + "~" + num;
        obj.originalName = name;
        tmp2 = obj;
      }
      const emojisByName = obj.emojisByName;
      const result1 = emojisByName.set(tmp2.name, tmp2);
      const emojisById = obj.emojisById;
      const result2 = emojisById.set(tmp2.id, tmp2);
      const customEmojis = obj.customEmojis;
      const result3 = customEmojis.set(tmp2.name, tmp2);
      const guildId = name.guildId;
      ({ customEmojisByGroup, customEmojisByGroup: customEmojisByGroup2 } = obj);
      if (customEmojisByGroup.has(guildId)) {
        let value = customEmojisByGroup2.get(guildId);
        if (value != null) {
          value.push(tmp2);
        }
      } else {
        const items = [tmp2];
        const result4 = customEmojisByGroup2.set(guildId, items);
      }
      if (obj3.compare(name.id, outer1_25) >= 0) {
        ({ newlyAddedEmoji, newlyAddedEmoji: newlyAddedEmoji2 } = tmp7);
        if (newlyAddedEmoji.has(guildId)) {
          value = newlyAddedEmoji2.get(guildId);
          if (value != null) {
            value.push(tmp2);
          }
        } else {
          const items1 = [tmp2];
          const result5 = newlyAddedEmoji2.set(guildId, items1);
        }
      }
      const disambiguatedEmoji = tmp7.disambiguatedEmoji;
      disambiguatedEmoji.push(tmp2);
    };
    disambiguateEmoticon = function disambiguateEmoticon(name) {
      const emoticonsByName = obj.emoticonsByName;
      if (!emoticonsByName.has(name.name)) {
        obj = items(disambiguateEmoji[30]);
        items.push(obj.escape(name.name));
        const emoticonsByName2 = obj.emoticonsByName;
        const result = emoticonsByName2.set(name.name, name);
      }
    };
    arr2 = require("parseRawEmojiObject");
    item = arr2.forEach((names) => {
      names = names.names;
      const substr = names.slice(1);
      const item = substr.forEach((arg0) => {
        const unicodeAliases = outer1_4.unicodeAliases;
        return unicodeAliases.set(arg0, names.name);
      });
      let num = map.get(names.name);
      if (num == null) {
        num = 0;
      }
      items(disambiguateEmoji[29])(0 === num, "Expected existing count to be 0");
      const result = obj.set(names.name, num + 1);
      const emojisByName = obj.emojisByName;
      const result1 = emojisByName.set(names.name, names);
      const disambiguatedEmoji = obj.disambiguatedEmoji;
      disambiguatedEmoji.push(names);
    });
    tmp5 = (function addGuildEmoji(guildId) {
      let tmp = guildId;
      if (null == guildId) {
        tmp = outer1_19;
      }
      if (null != outer1_32[tmp]) {
        items(disambiguateEmoji[21]).each(tmp3.usableEmojis, disambiguateEmoji);
        const obj = items(disambiguateEmoji[21]);
        items(disambiguateEmoji[21]).each(tmp3.emoticons, disambiguateEmoticon);
        const obj2 = items(disambiguateEmoji[21]);
      }
    })(obj.guildId);
    newlyAddedEmoji = obj.newlyAddedEmoji;
    keys = newlyAddedEmoji.keys();
    iter = keys[Symbol.iterator]();
    nextResult = iter.next();
    while (iter !== undefined) {
      tmp8 = nextResult;
      newlyAddedEmoji2 = obj.newlyAddedEmoji;
      value = newlyAddedEmoji2.get(nextResult);
      obj = value;
      if (null != value) {
        newlyAddedEmoji4 = obj.newlyAddedEmoji;
        tmp12 = nextResult;
        tmp13 = value;
        sorted = obj.sort((id, id2) => items(disambiguateEmoji[20]).compare(id2.id, id.id));
        result = newlyAddedEmoji4.set(tmp8, require("_slicedToArray"));
      } else {
        newlyAddedEmoji3 = obj.newlyAddedEmoji;
        tmp10 = nextResult;
        result1 = newlyAddedEmoji3.set(tmp8, []);
      }
      continue;
    }
    flattenedGuildIds = insertUnsortedGuilds.getFlattenedGuildIds();
    item1 = flattenedGuildIds.forEach((arg0) => {
      let tmp = arg0;
      if (arg0 !== obj.guildId) {
        if (null == tmp) {
          tmp = outer1_19;
        }
        if (null != outer1_32[tmp]) {
          obj = items(disambiguateEmoji[21]);
          obj.each(tmp4.usableEmojis, disambiguateEmoji);
          items(disambiguateEmoji[21]).each(tmp4.emoticons, disambiguateEmoticon);
          const obj2 = items(disambiguateEmoji[21]);
        }
        const tmp2 = outer1_32;
      }
    });
    obj.escapedEmoticonNames = items.join("|");
    return obj;
  }
}
const prototype2 = EmojiDisambiguations.prototype;
EmojiDisambiguations["get"] = function get(arg0) {
  let tmp = arg0;
  if (undefined === arg0) {
    tmp = null;
  }
  if (!tmp3) {
    tmp2._lastInstance = new tmp2(tmp);
  }
  return EmojiDisambiguations._lastInstance;
};
EmojiDisambiguations["reset"] = function reset() {
  EmojiDisambiguations._lastInstance = null;
};
EmojiDisambiguations["resetFrequentlyUsed"] = function resetFrequentlyUsed() {
  if (null != EmojiDisambiguations._lastInstance) {
    EmojiDisambiguations._lastInstance.frequentlyUsed = null;
  }
};
EmojiDisambiguations["resetFrequentlyUsedReactionEmojis"] = function resetFrequentlyUsedReactionEmojis() {
  if (null != EmojiDisambiguations._lastInstance) {
    tmp._lastInstance.frequentlyUsedReactionEmojis = null;
    tmp._lastInstance.frequentlyUsedReactionNamesAndIds = null;
  }
};
EmojiDisambiguations["clear"] = function clear(arg0) {
  let tmp2 = null != EmojiDisambiguations._lastInstance;
  if (tmp2) {
    tmp2 = tmp._lastInstance.guildId === arg0;
  }
  if (tmp2) {
    tmp._lastInstance = null;
  }
};
prototype2["getDisambiguatedEmoji"] = function getDisambiguatedEmoji() {
  return this.disambiguatedEmoji;
};
prototype2["getCustomEmoji"] = function getCustomEmoji() {
  return this.customEmojis;
};
prototype2["getGroupedCustomEmoji"] = function getGroupedCustomEmoji() {
  return this.customEmojisByGroup;
};
prototype2["getByName"] = function getByName(arg0) {
  const self = this;
  const emojisByName = this.emojisByName;
  let value = emojisByName.get(arg0);
  if (null != value) {
    return value;
  } else {
    const unicodeAliases = self.unicodeAliases;
    value = unicodeAliases.get(arg0);
    let value1;
    if (null != value) {
      const emojisByName2 = self.emojisByName;
      value1 = emojisByName2.get(value);
    }
    return value1;
  }
};
prototype2["getEmoticonByName"] = function getEmoticonByName(arg0) {
  const emoticonsByName = this.emoticonsByName;
  return emoticonsByName.get(arg0);
};
prototype2["getById"] = function getById(emojiId) {
  const emojisById = this.emojisById;
  return emojisById.get(emojiId);
};
prototype2["getCustomEmoticonRegex"] = function getCustomEmoticonRegex() {
  const self = this;
  let tmp = null == this.emoticonRegex && null != self.escapedEmoticonNames;
  if (tmp) {
    tmp = "" !== self.escapedEmoticonNames;
  }
  if (tmp) {
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const regExp = new RegExp("^\\b(" + self.escapedEmoticonNames + ")\\b");
    self.emoticonRegex = regExp;
  }
  return self.emoticonRegex;
};
prototype2["getFrequentlyUsedEmojisWithoutFetchingLatest"] = function getFrequentlyUsedEmojisWithoutFetchingLatest() {
  let self = this;
  self = this;
  if (null != this.frequentlyUsed) {
    return self.frequentlyUsed;
  } else {
    const frequently = importDefaultResult2.frequently;
    const mapped = frequently.map((id) => {
      if (null != id.id) {
        let byId = self.getById(id.id);
      } else {
        byId = outer1_1(outer1_2[18]).getByName(id.name);
        const obj = outer1_1(outer1_2[18]);
      }
      return byId;
    });
    const found = mapped.filter(self(1351).isNotNullish);
    const items = [];
    HermesBuiltin.arraySpread(importDefault(5121)(found).values(), 0);
    self.frequentlyUsed = items;
    return self.frequentlyUsed;
  }
};
prototype2["rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest"] = function rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
  let self = this;
  self = this;
  if (null != this.frequentlyUsedReactionEmojis) {
    if (null != self.frequentlyUsedReactionNamesAndIds) {
      let obj = { frequentlyUsedReactionEmojis: null, frequentlyUsedReactionNamesAndIds: null };
      ({ frequentlyUsedReactionEmojis: obj3[0], frequentlyUsedReactionNamesAndIds: obj3[1] } = self);
      return obj;
    }
  }
  const frequently = importDefaultResult3.frequently;
  const mapped = frequently.map((id) => {
    if (null != id.id) {
      let byId = self.getById(id.id);
    } else {
      byId = outer1_1(outer1_2[18]).getByName(id.name);
      const obj = outer1_1(outer1_2[18]);
    }
    return byId;
  });
  const found = mapped.filter(self(1351).isNotNullish);
  obj = importDefault(5121)(found);
  const items = [...obj.values()];
  self.frequentlyUsedReactionEmojis = items;
  self.frequentlyUsedReactionNamesAndIds = new Set(obj.keys());
  obj = { frequentlyUsedReactionEmojis: self.frequentlyUsedReactionEmojis, frequentlyUsedReactionNamesAndIds: self.frequentlyUsedReactionNamesAndIds };
  return obj;
};
prototype2["getFrequentlyUsedReactionEmojisWithoutFetchingLatest"] = function getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
  return this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest().frequentlyUsedReactionEmojis;
};
prototype2["isFrequentlyUsedReactionEmojiWithoutFetchingLatest"] = function isFrequentlyUsedReactionEmojiWithoutFetchingLatest(id) {
  const frequentlyUsedReactionNamesAndIds = this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest().frequentlyUsedReactionNamesAndIds;
  if (null != id.id) {
    return frequentlyUsedReactionNamesAndIds.has(id.id);
  } else {
    let result = importDefault(3896).convertSurrogateToBase(id.surrogates);
    if (result == null) {
      result = id;
    }
    return frequentlyUsedReactionNamesAndIds.has(result.name);
  }
};
prototype2["rebuildFavoriteEmojisWithoutFetchingLatest"] = function rebuildFavoriteEmojisWithoutFetchingLatest() {
  let self = this;
  self = this;
  if (null != this.favorites) {
    if (null != self.favoriteNamesAndIds) {
      let obj = { favorites: null, favoriteNamesAndIds: null };
      ({ favorites: obj3[0], favoriteNamesAndIds: obj3[1] } = self);
      return obj;
    }
  }
  const favoriteEmojis = closure_8.frecencyWithoutFetchingLatest.favoriteEmojis;
  let emojis;
  if (favoriteEmojis != null) {
    emojis = favoriteEmojis.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  const mapped = emojis.map((emojiId) => {
    let byId = self.getById(emojiId);
    if (byId == null) {
      byId = outer1_1(outer1_2[18]).getByName(emojiId);
      const obj = outer1_1(outer1_2[18]);
    }
    return byId;
  });
  const found = mapped.filter(self(1351).isNotNullish);
  obj = importDefault(5121)(found);
  const items = [...obj.values()];
  self.favorites = items;
  self.favoriteNamesAndIds = new Set(obj.keys());
  obj = { favorites: self.favorites, favoriteNamesAndIds: self.favoriteNamesAndIds };
  return obj;
};
Object.defineProperty(prototype2, "favoriteEmojisWithoutFetchingLatest", {
  get: function favoriteEmojisWithoutFetchingLatest() {
    return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
  },
  set: undefined
});
prototype2["getEmojiInPriorityOrderWithoutFetchingLatest"] = function getEmojiInPriorityOrderWithoutFetchingLatest() {
  const frequentlyUsedReactionEmojisWithoutFetchingLatest = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  const set = new Set();
  const favoriteEmojisWithoutFetchingLatest = this.favoriteEmojisWithoutFetchingLatest;
  const combined = favoriteEmojisWithoutFetchingLatest.concat(frequentlyUsedReactionEmojisWithoutFetchingLatest);
  return combined.filter((arg0) => {
    const hasItem = set.has(arg0);
    let flag = !hasItem;
    if (!hasItem) {
      set.add(arg0);
      flag = true;
    }
    return flag;
  });
};
prototype2["getTopEmojiWithoutFetchingLatest"] = function getTopEmojiWithoutFetchingLatest(guildId) {
  let self = this;
  self = this;
  if (null == this.topEmojis) {
    const value = map.get(guildId);
    topEmojiIdsByGuildId = topEmojiIdsByGuildId.getTopEmojiIdsByGuildId(guildId);
    if (null == value) {
      if (null == topEmojiIdsByGuildId) {
        return closure_26;
      }
    }
    let emojiIds;
    if (value != null) {
      emojiIds = value.emojiIds;
    }
    if (emojiIds == null) {
      emojiIds = topEmojiIdsByGuildId;
    }
    const mapped = emojiIds.map((name) => {
      let byId = self.getById(name);
      if (byId == null) {
        const obj = items(self[18]);
        byId = obj.getByName(items(self[18]).convertSurrogateToName(name, false));
        const obj2 = items(self[18]);
      }
      return byId;
    });
    const items = [];
    const item = mapped.forEach((arg0) => {
      if (null != arg0) {
        items.push(arg0);
      }
    });
    const newlyAddedEmojiForGuild = self.getNewlyAddedEmojiForGuild(guildId);
    let closure_0 = newlyAddedEmojiForGuild.map((id) => id.id);
    self.topEmojis = items.filter((id) => !closure_0.includes(id.id));
  }
  return self.topEmojis;
};
prototype2["getNewlyAddedEmojiForGuild"] = function getNewlyAddedEmojiForGuild(guildId) {
  if (null == this.newlyAddedEmoji) {
    return closure_26;
  } else {
    const newlyAddedEmoji = tmp.newlyAddedEmoji;
    let value = newlyAddedEmoji.get(guildId);
    if (null == value) {
      value = closure_26;
    }
    return value;
  }
};
prototype2["getEscapedCustomEmoticonNames"] = function getEscapedCustomEmoticonNames() {
  return this.escapedEmoticonNames;
};
prototype2["nameMatchesChain"] = function nameMatchesChain(matchComparator) {
  let closure_0 = matchComparator;
  const tmp = importDefault(12);
  return importDefault(12)(this.getDisambiguatedEmoji()).filter((arg0) => {
    let name;
    let names;
    ({ names, name } = arg0);
    let someResult = null != names;
    if (someResult) {
      someResult = outer1_1(outer1_2[21]).some(names, matchComparator);
      const obj = outer1_1(outer1_2[21]);
    }
    let tmp5 = null != name;
    if (tmp5) {
      tmp5 = matchComparator(name);
    }
    let someResult1 = null != name;
    if (someResult1) {
      const obj2 = outer1_1(outer1_2[21]);
      someResult1 = obj2.some(outer1_1(outer1_2[33]).getTermsForEmoji(name), matchComparator);
      const obj3 = outer1_1(outer1_2[33]);
    }
    if (!someResult) {
      someResult = tmp5;
    }
    if (!someResult) {
      someResult = someResult1;
    }
    return someResult;
  });
};
EmojiDisambiguations._lastInstance = null;
resetFrequentlyUsed = EmojiDisambiguations.resetFrequentlyUsed;
let merged = Object.assign({
  computeBonus() {
    return 100;
  },
  lookupKey(id1) {
    let byName = importDefault(3896).getByName(id1);
    if (byName == null) {
      const tmp3 = getEmojiToGroupId()[id1];
      let tmp4;
      if (null != tmp3) {
        let usableEmoji;
        if (dependencyMap[tmp3] != null) {
          usableEmoji = obj2.getUsableEmoji(id1);
        }
        tmp4 = usableEmoji;
      }
      byName = tmp4;
    }
    return byName;
  },
  afterCompute() {
    callback();
    const items = [...combined];
    const items1 = items;
    if (!obj.some(closure_32, (usableEmojis) => usableEmojis.usableEmojis.length > 0)) {
      items1.splice(combined.indexOf(EmojiCategories.CUSTOM), 1);
    }
  },
  numFrequentlyItems: 42
});
importDefaultResult2 = new importDefaultResult2({});
let obj3 = {};
resetFrequentlyUsed = EmojiDisambiguations.resetFrequentlyUsedReactionEmojis;
const merged1 = Object.assign({
  computeBonus() {
    return 100;
  },
  lookupKey(id1) {
    let byName = importDefault(3896).getByName(id1);
    if (byName == null) {
      const tmp3 = getEmojiToGroupId()[id1];
      let tmp4;
      if (null != tmp3) {
        let usableEmoji;
        if (dependencyMap[tmp3] != null) {
          usableEmoji = obj2.getUsableEmoji(id1);
        }
        tmp4 = usableEmoji;
      }
      byName = tmp4;
    }
    return byName;
  },
  afterCompute() {
    callback();
    const items = [...combined];
    const items1 = items;
    if (!obj.some(closure_32, (usableEmojis) => usableEmojis.usableEmojis.length > 0)) {
      items1.splice(combined.indexOf(EmojiCategories.CUSTOM), 1);
    }
  },
  numFrequentlyItems: 42
});
obj3.computeFrecency = function computeFrecency(arg0, score, maxTotalUse) {
  if (null == maxTotalUse.maxTotalUse) {
    return 0;
  } else {
    const _Math = Math;
    return Math.trunc(1000 * (arg0 / maxTotalUse.maxTotalUse * 0.2 + score / 1000 * 0.8));
  }
};
obj3.calculateMaxTotalUse = true;
importDefaultResult3 = new importDefaultResult3(obj3);
class EmojiStore extends PersistedStore {
}
const prototype3 = EmojiStore.prototype;
prototype3["initialize"] = function initialize(pendingUsages) {
  const self = this;
  this.waitFor(getHash, trackCommunicationDisabled, allGuildIds, createGuildRoleRecordFromRust, createGuildRecordFromRust, _getSystemLocale, fromServer, insertUnsortedGuilds, computeRolesForGuild, initialize, closure_8, mergeGuildAvatar);
  if (null != pendingUsages) {
    if (null != pendingUsages.pendingUsages) {
      obj.pendingUsages = pendingUsages.pendingUsages;
    }
    if (null != pendingUsages.emojiReactionPendingUsages) {
      obj.emojiReactionPendingUsages = pendingUsages.emojiReactionPendingUsages;
    }
    if (null != pendingUsages.expandedSectionsByGuildIds) {
      const _Set = Set;
      const set = new Set(pendingUsages.expandedSectionsByGuildIds);
      obj.expandedSectionsByGuildIds = set;
    }
  }
  const items = [closure_8];
  self.syncWith(items, handleUserSettingsProtoStoreChange);
};
prototype3["getState"] = function getState() {
  return obj;
};
Object.defineProperty(prototype3, "loadState", {
  get: function loadState() {
    return Unloaded;
  },
  set: undefined
});
prototype3["hasPendingUsage"] = function hasPendingUsage() {
  let tmp = obj.pendingUsages.length > 0;
  if (!tmp) {
    tmp = obj.emojiReactionPendingUsages.length > 0;
  }
  return tmp;
};
Object.defineProperty(prototype3, "expandedSectionsByGuildIds", {
  get: function expandedSectionsByGuildIds() {
    return obj.expandedSectionsByGuildIds;
  },
  set: undefined
});
Object.defineProperty(prototype3, "categories", {
  get: function categories() {
    return items1;
  },
  set: undefined
});
Object.defineProperty(prototype3, "diversitySurrogate", {
  get: function diversitySurrogate() {
    let str = importDefault(3896).getDefaultDiversitySurrogate();
    if (str == null) {
      str = "";
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(prototype3, "emojiFrecencyWithoutFetchingLatest", {
  get: function emojiFrecencyWithoutFetchingLatest() {
    return importDefaultResult2;
  },
  set: undefined
});
Object.defineProperty(prototype3, "emojiReactionFrecencyWithoutFetchingLatest", {
  get: function emojiReactionFrecencyWithoutFetchingLatest() {
    return importDefaultResult3;
  },
  set: undefined
});
prototype3["getGuildEmoji"] = function getGuildEmoji(closure_0) {
  loadSavedEmojis();
  let tmp2;
  if (null != closure_0) {
    tmp2 = dependencyMap[closure_0];
  }
  let emojis;
  if (tmp2 != null) {
    emojis = tmp2.emojis;
  }
  if (emojis == null) {
    emojis = closure_27;
  }
  return emojis;
};
prototype3["getHiddenEmojiIds"] = function getHiddenEmojiIds(id) {
  loadSavedEmojis();
  let tmp2;
  if (null != id) {
    tmp2 = dependencyMap[id];
  }
  let hiddenEmojiIds;
  if (tmp2 != null) {
    hiddenEmojiIds = tmp2.hiddenEmojiIds;
  }
  if (hiddenEmojiIds == null) {
    hiddenEmojiIds = set1;
  }
  return hiddenEmojiIds;
};
prototype3["getUsableGuildEmoji"] = function getUsableGuildEmoji(arg0) {
  loadSavedEmojis();
  let usableEmojis;
  if (dependencyMap[arg0] != null) {
    usableEmojis = tmp2.usableEmojis;
  }
  if (usableEmojis == null) {
    usableEmojis = closure_27;
  }
  return usableEmojis;
};
prototype3["getGuilds"] = function getGuilds() {
  return closure_32;
};
prototype3["getDisambiguatedEmojiContext"] = function getDisambiguatedEmojiContext(closure_0) {
  loadSavedEmojis();
  return EmojiDisambiguations.get(closure_0);
};
prototype3["getSearchResultsOrder"] = function getSearchResultsOrder(locked, query, count, intention, value) {
  let dedupeEmojisByNameOrId;
  let handleConnectionClosedOrResumed;
  let getHash;
  let closure_0 = intention;
  const importDefault = value;
  let formatted = query.toLowerCase();
  const escapeResult = importDefault(formatted[30]).escape(formatted);
  const obj = importDefault(formatted[30]);
  const formatted1 = formatted.slice(0, 1).toUpperCase();
  let sum = formatted1 + formatted.slice(1);
  const str = formatted.slice(0, 1);
  const escapeResult1 = importDefault(formatted[30]).escape(sum);
  let orderByResult = locked;
  if (locked.length > 0) {
    let tmpResult = tmp(tmp2[38]);
    const config = tmpResult.getConfig({ location: "getSearchResultsOrder" });
    ({ boostFavorites: dedupeEmojisByNameOrId, boostAtEnd: handleConnectionClosedOrResumed, boostsIgnoreDisambiguators: getHash } = config);
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const regExp = new RegExp("^" + escapeResult, "i");
    const _RegExp2 = RegExp;
    const _HermesInternal2 = HermesInternal;
    const regExp1 = new RegExp("" + escapeResult + "$", "i");
    const _RegExp3 = RegExp;
    const _HermesInternal3 = HermesInternal;
    let regExp2 = new RegExp("(^|_|[A-Z])" + escapeResult + "s?([A-Z]|_|$)");
    const _RegExp4 = RegExp;
    const _HermesInternal4 = HermesInternal;
    if (config.boostCapitalizedWords) {
      regExp2 = new RegExp("(^|_|[A-Z])" + escapeResult + "s?([A-Z]|_|$)|(^|_|[a-z])" + escapeResult1 + "s?([A-Z]|_|$)");
    }
    const test = regExp2.test;
    let computeRolesForGuild = test.bind(regExp2);
    const test2 = regExp.test;
    let _getSystemLocale = test2.bind(regExp);
    const test3 = regExp1.test;
    let closure_8 = test3.bind(regExp1);
    tmpResult = tmp(tmp2[21]);
    const items = [
      (uniqueName) => {
          if (null != uniqueName.uniqueName) {
            let str2 = uniqueName.names[0];
          } else if (getHash) {
            str2 = str.split("~")[0];
          } else {
            str2 = str;
          }
          let id = str2;
          if (null == uniqueName.uniqueName) {
            id = uniqueName.id;
          }
          let num = 0;
          if (null != str2) {
            num = 0;
            if (null != id) {
              const formatted = str2.toLowerCase();
              let num2 = 0;
              if (formatted === formatted) {
                num2 = 4;
              }
              if (callback(formatted)) {
                let num3 = 2;
              } else {
                num3 = 0;
              }
              let num5 = 1;
              if (!callback2(str2)) {
                let num6 = 0;
                if (handleConnectionClosedOrResumed) {
                  num6 = 0;
                  if (callback3(str2)) {
                    num6 = 0.75;
                  }
                }
                num5 = num6;
              }
              let num7 = 0;
              if (dedupeEmojisByNameOrId) {
                num7 = 0;
                if (value.isFavoriteEmojiWithoutFetchingLatest(uniqueName)) {
                  num7 = 0.5;
                }
              }
              if (closure_0 === outer1_18.REACTION) {
                let score = outer1_40.getScore(id);
              } else {
                score = outer1_39.getScore(id);
              }
              const sum = 1 + num2 + num3 + num5 + num7;
              let result = sum;
              if (null != score) {
                result = sum * (score / 100);
              }
              num = result;
              const tmp5 = callback;
            }
          }
          return num;
        },
      (names) => {
          if (null != names.names) {
            let name = names.names[0];
          } else {
            name = names.name;
          }
          return name;
        }
    ];
    orderByResult = tmpResult.orderBy(locked, items, ["desc", "asc"]);
  }
  let substr = orderByResult;
  if (count > 0) {
    substr = orderByResult.slice(0, count);
  }
  return substr;
};
prototype3["searchWithoutFetchingLatest"] = function searchWithoutFetchingLatest(channel) {
  let dedupeEmojisByNameOrId;
  let count;
  let matchComparator;
  let query;
  channel = channel.channel;
  ({ query, count } = channel);
  if (count === undefined) {
    count = 0;
  }
  const intention = channel.intention;
  let flag = channel.includeExternalGuilds;
  if (flag === undefined) {
    flag = true;
  }
  ({ matchComparator, showOnlyUnicode: dedupeEmojisByNameOrId } = channel);
  let regExp;
  loadSavedEmojis();
  const formatted = query.toLowerCase();
  const replaced = formatted.replaceAll(/[ _]/g, "");
  intention(flag[30]);
  if (null == matchComparator) {
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    regExp = new RegExp("" + tmp4, "i");
    matchComparator = function l(str) {
      return regExp.test(str.replaceAll("_", ""));
    };
  }
  let guildId = null;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  const value = EmojiDisambiguations.get(guildId);
  const reduced = value.nameMatchesChain(matchComparator).reduce((locked, emoji) => {
    let obj = intention(flag[39]);
    obj = { emoji, channel, intention, forceIncludeExternalGuilds: flag };
    const emojiUnavailableReason = obj.getEmojiUnavailableReason(obj);
    if (emojiUnavailableReason === outer1_17.PREMIUM_LOCKED) {
      if (!dedupeEmojisByNameOrId) {
        locked = locked.locked;
        locked.push(emoji);
      }
      return locked;
    }
    let tmp5 = null != emojiUnavailableReason;
    if (!tmp5) {
      let tmp6 = dedupeEmojisByNameOrId;
      if (dedupeEmojisByNameOrId) {
        tmp6 = emoji.type !== channel(flag[40]).EmojiTypes.UNICODE;
      }
      tmp5 = tmp6;
    }
    if (!tmp5) {
      const unlocked = locked.unlocked;
      unlocked.push(emoji);
    }
  }, { unlocked: [], locked: [] });
  const nameMatchesChainResult = value.nameMatchesChain(matchComparator);
  return { unlocked: this.getSearchResultsOrder(reduced.unlocked, query, count, intention, value), locked: this.getSearchResultsOrder(reduced.locked, query, 0, intention, value) };
};
prototype3["getUsableCustomEmojiById"] = function getUsableCustomEmojiById(id1) {
  loadSavedEmojis();
  const tmp2 = getEmojiToGroupId()[id1];
  let tmp3;
  if (null != tmp2) {
    let usableEmoji;
    if (dependencyMap[tmp2] != null) {
      usableEmoji = obj.getUsableEmoji(id1);
    }
    tmp3 = usableEmoji;
  }
  return tmp3;
};
prototype3["getCustomEmojiById"] = function getCustomEmojiById(emojiId) {
  loadSavedEmojis();
  const tmp2 = getEmojiToGroupId()[emojiId];
  let tmp3;
  if (null != tmp2) {
    let emoji;
    if (dependencyMap[tmp2] != null) {
      emoji = obj.getEmoji(emojiId);
    }
    tmp3 = emoji;
  }
  return tmp3;
};
prototype3["getTopEmoji"] = function getTopEmoji(guildId) {
  if (null == guildId) {
    let topEmojiWithoutFetchingLatest = closure_26;
  } else {
    loadSavedEmojis();
    const value = EmojiDisambiguations.get(guildId);
    topEmojiWithoutFetchingLatest = value.getTopEmojiWithoutFetchingLatest(guildId);
  }
  return topEmojiWithoutFetchingLatest;
};
prototype3["getNewlyAddedEmoji"] = function getNewlyAddedEmoji(guildId) {
  if (null == guildId) {
    let newlyAddedEmojiForGuild = closure_26;
  } else {
    loadSavedEmojis();
    const value = EmojiDisambiguations.get(guildId);
    newlyAddedEmojiForGuild = value.getNewlyAddedEmojiForGuild(guildId);
  }
  return newlyAddedEmojiForGuild;
};
prototype3["getTopEmojisMetadata"] = function getTopEmojisMetadata(guildId) {
  return map.get(guildId);
};
prototype3["hasUsableEmojiInAnyGuild"] = function hasUsableEmojiInAnyGuild() {
  loadSavedEmojis();
  const keys = importDefault(11).keys(closure_32);
  return keys.some((arg0) => table[arg0].usableEmojis.length > 0);
};
prototype3["hasFavoriteEmojis"] = function hasFavoriteEmojis(arg0) {
  const value = EmojiDisambiguations.get(arg0);
  let tmp2 = null != value;
  if (tmp2) {
    tmp2 = value.favoriteEmojisWithoutFetchingLatest.length > 0;
  }
  return tmp2;
};
EmojiStore.displayName = "EmojiStore";
EmojiStore.persistKey = "EmojiStoreV2";
const items2 = [
  (arg0) => {
    const merged = Object.assign(arg0);
    return {};
  }
];
EmojiStore.migrations = items2;
const emojiStore = new EmojiStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    obj.pendingUsages = [];
    obj.emojiReactionPendingUsages = [];
  },
  BACKGROUND_SYNC: function handleBackgroundSync() {
    let closure_32 = {};
    let closure_33 = {};
    EmojiDisambiguations.reset();
    map.clear();
    const Unloaded = obj.Unloaded;
  },
  CONNECTION_OPEN: function handleConnectionOpen(unavailableGuilds) {
    deleteEverything();
    for (const item10009 of tmp2) {
      let tmp3 = updateGuildEmoji;
      let tmp4 = updateGuildEmoji(item10009.id);
      continue;
    }
    if (0 === unavailableGuilds.unavailableGuilds.length) {
      const guilds = unavailableGuilds.guilds;
      if (guilds.every((emojis) => "full_sync" === emojis.emojis.op)) {
        let Unloaded = obj.Loaded;
      }
      rebuildEmojis();
    }
    Unloaded = obj.Unloaded;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(emojis) {
    let closure_32 = {};
    let c33 = {};
    EmojiDisambiguations.reset();
    map.clear();
    let Loaded = obj.Unloaded;
    for (const key10014 in arg0.emojis) {
      let tmp8 = key10014;
      let tmp9 = updateGuildEmoji;
      let tmp10 = updateGuildEmoji(key10014);
      continue;
    }
    Loaded = obj.Loaded;
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj.Loaded) {
      importDefaultResult2.compute();
      importDefaultResult3.compute();
    }
  },
  CACHED_EMOJIS_LOADED: function handleCachedEmojisLoaded(arg0) {
    while (tmp !== undefined) {
      let tmp3 = callback2;
      let first = callback2(tmp2, 1)[0];
      let tmp6 = member2;
      let tmp5 = first;
      if (member2.isMember(first)) {
        let tmp7 = updateGuildEmoji;
        let tmp8 = first;
        let tmp9 = updateGuildEmoji(tmp5);
      }
      continue;
    }
    rebuildEmojis();
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(user) {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (user.user.id === id) {
      updateGuildEmoji(user.guildId);
      let c33 = null;
      EmojiDisambiguations.reset();
      if (Unloaded === obj.Loaded) {
        importDefaultResult2.compute();
        importDefaultResult3.compute();
      }
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateGuildEmoji(guild.guild.id);
    let c33 = null;
    EmojiDisambiguations.reset();
    if (Unloaded === obj.Loaded) {
      importDefaultResult2.compute();
      importDefaultResult3.compute();
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    updateGuildEmoji(guild.guild.id);
    let c33 = null;
    EmojiDisambiguations.reset();
    if (Unloaded === obj.Loaded) {
      importDefaultResult2.compute();
      importDefaultResult3.compute();
    }
  },
  GUILD_EMOJIS_UPDATE: function handleGuildEmojiUpdated(guildId) {
    updateGuildEmoji(guildId.guildId);
    let c33 = null;
    EmojiDisambiguations.reset();
    if (Unloaded === obj.Loaded) {
      importDefaultResult2.compute();
      importDefaultResult3.compute();
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null != dependencyMap[guild.id]) {
      delete tmp[tmp2];
    }
    map.delete(guild.id);
    let c33 = null;
    EmojiDisambiguations.reset();
    if (Unloaded === obj.Loaded) {
      importDefaultResult2.compute();
      importDefaultResult3.compute();
    }
  },
  MESSAGE_REACTION_ADD: function handleAddReaction(optimistic) {
    if (optimistic.optimistic) {
      if (null != optimistic.emoji.id) {
        if ("0" !== optimistic.emoji.id) {
          let emoji = optimistic.emoji;
        }
        if (null == emoji) {
          return false;
        } else {
          const items = [emoji];
          (function trackReactionUsage(items) {
            const iter = items[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp2 = nextResult;
              let name = nextResult.id;
              if (name == null) {
                let tmp3 = nextResult;
                name = tmp2.uniqueName;
              }
              if (name == null) {
                let tmp4 = nextResult;
                name = tmp2.name;
              }
              let tmp5 = name;
              if (null != name) {
                let tmp6 = closure_40;
                let tmp7 = name;
                let trackResult = closure_40.track(tmp5);
                let tmp9 = obj;
                let prop = obj.emojiReactionPendingUsages;
                obj = { key: null, timestamp: null };
                obj[0] = tmp5;
                let _Date = Date;
                obj[1] = Date.now();
                let arr = prop.push(obj);
              }
              continue;
            }
            let tmp12 = tmp11;
            if (items.length > 0) {
              tmp12 = closure_30 === Loaded.Loaded;
            }
            if (tmp12) {
              closure_40.compute();
            }
            return items.length > 0;
          })(items);
          const items1 = [emoji];
          trackUsage(items1);
        }
      }
      let obj = importDefault(3896);
      emoji = obj.getByName(importDefault(3896).convertSurrogateToName(optimistic.emoji.name, false));
      const obj2 = importDefault(3896);
    } else {
      return false;
    }
  },
  EMOJI_TRACK_USAGE: function handleTrackUsage(emojiUsed) {
    trackUsage(emojiUsed.emojiUsed);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    const obj = importDefault(5122);
    obj.setEmojiLocale(locale.locale);
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        obj.pendingUsages = [];
        obj.emojiReactionPendingUsages = [];
      }
    }
    return false;
  },
  GUILD_ROLE_CREATE: handleRoleUpdate,
  GUILD_ROLE_UPDATE: handleRoleUpdate,
  TOP_EMOJIS_FETCH_SUCCESS: function handleTopEmojisLoaded(topEmojisMetadata) {
    topEmojisMetadata = topEmojisMetadata.topEmojisMetadata;
    const obj = { emojiIds: topEmojisMetadata.map((emojiId) => emojiId.emojiId), topEmojisTTL: null };
    const tmp = importDefault(3837);
    const tmpResult = importDefault(3837)(importDefault(3837)());
    obj[1] = importDefault(3837)(importDefault(3837)()).add(1, "days").valueOf();
    const result = map.set(topEmojisMetadata.guildId, obj);
  },
  TOGGLE_GUILD_EXPANDED_STATE: function toggleGuildExpandedState(guildId) {
    guildId = guildId.guildId;
    const set = new Set(obj.expandedSectionsByGuildIds);
    const expandedSectionsByGuildIds = obj.expandedSectionsByGuildIds;
    if (expandedSectionsByGuildIds.has(guildId)) {
      set.delete(guildId);
    } else {
      set.add(guildId);
    }
    obj = {};
    const merged = Object.assign(obj);
    obj.expandedSectionsByGuildIds = set;
  }
});
let result = set.fileFinishedImporting("modules/emojis/EmojiStore.tsx");

export default emojiStore;
export const LoadState = obj;
export { EmojiDisambiguations };