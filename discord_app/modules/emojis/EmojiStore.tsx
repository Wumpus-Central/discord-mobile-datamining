// === Module 5459: EmojiStore ===

// Module 5459 (EmojiStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 1986 */;
import _modDef4153 from "module_4153" /* 4153 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4217 */;
import RegexUtilsDefault from "RegexUtils" /* 4547 */;
import dedupeEmojisByNameOrIdDefault from "dedupeEmojisByNameOrId" /* 5466 */;
import EmojiTermsDefault from "EmojiTerms" /* 5467 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5460 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildMembershipStore from "GuildMembershipStore" /* 1959 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import UserStore from "UserStore" /* 1371 */;
import RawGuildEmojiStore from "RawGuildEmojiStore" /* 5461 */;
import TopEmojiStore from "TopEmojiStore" /* 5462 */;
import UnicodeEmojis from "UnicodeEmojis" /* 4213 */;
import SnowflakeUtils from "SnowflakeUtils" /* 11 */;
import Frecency from "Frecency" /* 4597 */;

let resetFrequentlyUsed = fn;
function getEmojiToGroupId() {
  loadSavedEmojis();
  if (null == c33) {
    c33 = {};
    for (const key10008 in closure_32) {
      obj = dependencyMap2[key10008];
      let emojiIdsResult = obj.emojiIds();
      for (const item10010 of emojiIdsResult) {
        c33[item10010] = key10008;
        continue;
      }
    }
  }
  return c33;
}
function loadSavedEmojis() {
  const self = this;
  const apply = closure_37.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_37 = async function _loadSavedEmojis() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          if (Loading === __initData8.Unloaded) {
            let obj1 = DatabaseDaosDefault;
            const databaseResult = obj1.database();
            closure_128_0 = databaseResult;
            if (null != databaseResult) {
              Loading = __initData8.Loading;
              let obj2 = React(2006);
              c2 = 1;
              c3 = 1;
              obj1 = { value: obj2.tryLoadOrResetCacheGatewayAsync("EmojiStore.loadSavedEmojis", async () => closure_1(10).timeAsync("\u{1F4BE}", "loadSavedEmojis", async () => closure_2_1(5465).getAsync(closure_1_0))), done: false };
              return obj1;
            }
          }
          c3 = 3;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_1 = value;
        Loaded = closure_129_29.Loaded;
        if (null != closure_128_1) {
          obj2 = { type: "CACHED_EMOJIS_LOADED", emojis: closure_128_1 };
          closure_129_1(closure_129_2[27]).dispatch(obj2);
          const obj7 = closure_129_1(closure_129_2[27]);
        }
      }
      c3 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp18) {
      c3 = tmp;
      throw tmp18;
    }
  }
};
function deleteEverything() {
  closure_32 = {};
  c33 = {};
  EmojiDisambiguations.reset();
  map.clear();
  Loaded = obj.Unloaded;
}
function rebuildEmojis() {
  c33 = null;
  EmojiDisambiguations.reset();
  if (Loaded === obj.Loaded) {
    Frecency.compute();
    Frecency.compute();
  }
}
function updateGuildEmoji(guildId) {
  if (null != dependencyMap2[guildId]) {
    delete tmp[tmp2];
  }
  EmojiDisambiguations.clear(guildId);
  const guildEmojis = RawGuildEmojiStore.getGuildEmojis(guildId);
  if (null != guildEmojis) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      let flag = closure_0(5499).canUseRoleSubscriptionIAP(guildId);
      if (typeof GuildEmojis === "function") {
        if (flag === undefined) {
          flag = false;
        }
        const merged = Object.assign({ _emojis: null, _emoticons: null, _usableEmojis: null, _hiddenEmojiIds: null, _canSeeServerSubIAP: false });
        merged.id = guildId;
        merged._userId = tmp10;
        merged._emojiMap = guildEmojis;
        merged._canSeeServerSubIAP = flag;
        tmp8[guildId] = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      obj = closure_0(5499);
    }
  }
}
function handleUserSettingsProtoStoreChange() {
  const textAndImages = UserSettingsProtoStore.settings.textAndImages;
  value = undefined;
  if (textAndImages != null) {
    if (textAndImages.diversitySurrogate != null) {
      value = iter.value;
    }
  }
  if (null != value) {
    obj = require("UnicodeEmojis");
    const result = obj.setDefaultDiversitySurrogate(value);
  }
  EmojiDisambiguations.reset();
  const frecencyWithoutFetchingLatest = UserSettingsProtoStore.frecencyWithoutFetchingLatest;
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
  Frecency.overwriteHistory(_modDef12.mapValues(emojis, (recentUses) => {
    obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj.recentUses = mapped.filter((item) => item > 0);
    return obj;
  }), obj.pendingUsages);
  Frecency.overwriteHistory(_modDef12.mapValues(emojis1, (recentUses) => {
    obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj.recentUses = mapped.filter((item) => item > 0);
    return obj;
  }), obj.emojiReactionPendingUsages);
  (function populateInitialFrecencyData(emojis, emojis1) {
    if (obj.isEmpty(emojis)) {
      if (tmpResult.isEmpty(closure_1_23.pendingUsages)) {
        if (UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS)) {
          const items = ["thumbsup", "eyes", "laughing", "watermelon", "fork_and_knife", "yum", "weary", "tired_face", "poop", "100"];
          for (const item10022 of items) {
            let trackResult = closure_1_39.track(item10022);
            continue;
          }
        }
      }
      tmpResult = _modDef12;
    }
    obj = _modDef12;
    if (obj3.isEmpty(emojis1)) {
      if (tmp9Result.isEmpty(closure_1_23.emojiReactionPendingUsages)) {
        if (UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS)) {
          items1 = ["100", "100", "thumbsup", "thumbsup", "thumbsdown", "thumbsdown", "heart", "point_up", "eyes", "weary", "laughing", "white_check_mark", "x"];
          for (const item10049 of items1) {
            let trackResult1 = closure_1_40.track(item10049);
            continue;
          }
        }
      }
      tmp9Result = _modDef12;
    }
    obj3 = _modDef12;
  })(emojis, emojis1);
}
function trackUsage(emojiUsed) {
  if (null == emojiUsed) {
    return false;
  } else {
    const iter = emojiUsed[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let name = nextResult.id;
      if (name == null) {
        name = tmp4.uniqueName;
      }
      if (name == null) {
        name = tmp4.name;
      }
      let tmp7 = name;
      if (null != name) {
        let trackResult = Frecency.track(tmp7);
        let pendingUsages = obj.pendingUsages;
        obj = { key: tmp7, timestamp: null };
        let _Date = Date;
        obj.timestamp = Date.now();
        let arr = pendingUsages.push(obj);
      }
      continue;
    }
    let tmp14 = tmp13;
    if (emojiUsed.length > 0) {
      tmp14 = Loaded === obj.Loaded;
    }
    if (tmp14) {
      Frecency.compute();
    }
    return emojiUsed.length > 0;
  }
}
function handleRoleUpdate(guildId) {
  guildId = guildId.guildId;
  const role = GuildRoleStore.getRole(guildId, guildId.role.id);
  if (null != role) {
    obj = closure_0(4190);
    if (obj.isSubscriptionRole(role)) {
      updateGuildEmoji(guildId);
      c33 = null;
      EmojiDisambiguations.reset();
      if (Loaded === obj.Loaded) {
        Frecency.compute();
        Frecency.compute();
      }
    }
  }
  return false;
}
const EmojiConstants = fn(1374);
({ EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = EmojiConstants);
const NULL_STRING_GUILD_ID = fn(1074).NULL_STRING_GUILD_ID;
const EmojiCategories = fn(5463).EmojiCategories;
const UserSettingsTypes = fn(1084).UserSettingsTypes;
let items = [EmojiCategories.TOP_GUILD_EMOJI.toString(), EmojiCategories.FAVORITES.toString(), EmojiCategories.RECENT.toString(), EmojiCategories.CUSTOM.toString()];
let combined = items.concat(UnicodeEmojis.getCategories());
let obj = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: new Set() };
class GuildEmojis {
  constructor(arg0, arg1, arg2) {
    flag = importAll;
    if (importAll === undefined) {
      flag = false;
    }
    merged = Object.assign({ _emojis: null, _emoticons: null, _usableEmojis: null, _hiddenEmojiIds: null, _canSeeServerSubIAP: false });
    merged.id = global;
    merged._userId = fn;
    merged._emojiMap = importDefault;
    merged._canSeeServerSubIAP = flag;
    return merged;
  }
}
const prototype = GuildEmojis.prototype;
prototype["getEmoji"] = function getEmoji(arg0) {
  return this._emojiMap[arg0];
};
prototype["getUsableEmoji"] = function getUsableEmoji(emojiId) {
  const self = this;
  const emoji = this.getEmoji(emojiId);
  let tmp2;
  if (null != emoji) {
    if (self.isUsable(emoji)) {
      tmp2 = emoji;
    }
  }
  return tmp2;
};
prototype["isUsable"] = function isUsable(emoji) {
  if (0 === emoji.roles.length) {
    return true;
  } else {
    const self = this;
    const member = GuildMemberStore.getMember(this.id, this._userId);
    let tmp6 = null != member;
    if (tmp6) {
      let roles = member.roles;
      let someResult = roles.some((item) => {
        const roles = emoji.roles;
        return roles.includes(item);
      });
      if (!someResult) {
        let result = emoji(5464).isPurchasableRoleSubscriptionEmoji(emoji);
        if (result) {
          let _canSeeServerSubIAP = self._canSeeServerSubIAP;
          if (!_canSeeServerSubIAP) {
            _canSeeServerSubIAP = SubscriptionRoleStore.getUserIsAdmin(emoji.guildId);
          }
          result = _canSeeServerSubIAP;
        }
        someResult = result;
        obj = emoji(5464);
      }
      tmp6 = someResult;
    }
    return tmp6;
  }
};
prototype["emojiIds"] = function emojiIds() {
  return SnowflakeUtils.keys(this._emojiMap);
};
Object.defineProperty(prototype, "emojis", {
  get: function emojis() {
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
      if (self.isUsable(item10017)) {
        let arr = items.push(item10017);
      } else {
        let addResult = set.add(item10017.id);
      }
      continue;
    }
    self._usableEmojis = _modDef12.sortBy(items, (name) => name.name);
    self._hiddenEmojiIds = set;
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
const timestamp = Date.now();
let closure_25 = SnowflakeUtils.fromTimestamp(timestamp - 60 * DurationsDefault.Millis.DAY);
let closure_26 = [];
let closure_27 = [];
const set1 = new Set();
obj = { Unloaded: 0, [0]: "Unloaded", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
let Loaded = obj.Unloaded;
let items1 = [...combined];
const dependencyMap2 = {};
let c33 = {};
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
  map = new Map();
  this.customEmojis = new Map();
  map1 = new Map();
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
        let result = require("UnicodeEmojis").convertSurrogateToBase(id.surrogates);
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
    closure_4 = obj;
    tmp2 = _instance_members_initializer_EmojiDisambiguations_();
    obj.guildId = global;
    map = new Map();
    closure_0 = map;
    items = [];
    closure_1 = items;
    disambiguateEmoji = function disambiguateEmoji(name) {
      name = name.name;
      obj = map;
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
        value = customEmojisByGroup2.get(guildId);
        if (value != null) {
          value.push(tmp2);
        }
      } else {
        items = [tmp2];
        const result4 = customEmojisByGroup2.set(guildId, items);
      }
      if (obj3.compare(name.id, closure_25) >= 0) {
        ({ newlyAddedEmoji, newlyAddedEmoji: newlyAddedEmoji2 } = tmp7);
        if (newlyAddedEmoji.has(guildId)) {
          value = newlyAddedEmoji2.get(guildId);
          if (value != null) {
            value.push(tmp2);
          }
        } else {
          items1 = [tmp2];
          const result5 = newlyAddedEmoji2.set(guildId, items1);
        }
      }
      const disambiguatedEmoji = tmp7.disambiguatedEmoji;
      disambiguatedEmoji.push(tmp2);
    };
    disambiguateEmoticon = function disambiguateEmoticon(name) {
      const emoticonsByName = obj.emoticonsByName;
      if (!emoticonsByName.has(name.name)) {
        obj = RegexUtilsDefault;
        items.push(obj.escape(name.name));
        const emoticonsByName2 = tmp.emoticonsByName;
        const result = emoticonsByName2.set(name.name, name);
      }
      tmp = obj;
    };
    arr2 = closure_1(disambiguateEmoji[18]);
    item = arr2.forEach((name) => {
      name = name.name;
      const names = name.names;
      const substr = names.slice(1);
      const item = substr.forEach((item) => {
        const unicodeAliases = obj.unicodeAliases;
        return unicodeAliases.set(item, name);
      });
      let num = name.get(name);
      if (num == null) {
        num = 0;
      }
      items(disambiguateEmoji[29])(0 === num, "Expected existing count to be 0");
      if (name.uniqueName !== name) {
        const result = obj.set(name.uniqueName, 1);
      } else {
        const result1 = obj.set(name, num + 1);
      }
      const emojisByName = obj.emojisByName;
      const result2 = emojisByName.set(name, name);
      const disambiguatedEmoji = obj.disambiguatedEmoji;
      disambiguatedEmoji.push(name);
    });
    tmp5 = (function addGuildEmoji(guildId) {
      let tmp = guildId;
      if (null == guildId) {
        tmp = NULL_STRING_GUILD_ID;
      }
      if (null != dependencyMap[tmp]) {
        _modDef12.each(tmp3.usableEmojis, disambiguateEmoji);
        _modDef12.each(tmp3.emoticons, disambiguateEmoticon);
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
        result = newlyAddedEmoji4.set(tmp8, sorted.slice(0, 3));
      } else {
        newlyAddedEmoji3 = obj.newlyAddedEmoji;
        tmp10 = nextResult;
        result1 = newlyAddedEmoji3.set(tmp8, []);
      }
      continue;
    }
    flattenedGuildIds = closure_13.getFlattenedGuildIds();
    item1 = flattenedGuildIds.forEach((item) => {
      let tmp = item;
      if (item !== obj.guildId) {
        if (null == tmp) {
          tmp = NULL_STRING_GUILD_ID;
        }
        if (null != dependencyMap[tmp]) {
          obj = _modDef12;
          obj.each(tmp4.usableEmojis, disambiguateEmoji);
          _modDef12.each(tmp4.emoticons, disambiguateEmoticon);
        }
      }
    });
    obj.escapedEmoticonNames = items.join("|");
    return obj;
  }
}
const prototype2 = EmojiDisambiguations.prototype;
EmojiDisambiguations["get"] = function get(guildId) {
  let tmp = guildId;
  if (undefined === guildId) {
    tmp = null;
  }
  if (!tmp3) {
    EmojiDisambiguations._lastInstance = new EmojiDisambiguations(tmp);
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
    EmojiDisambiguations._lastInstance.frequentlyUsedReactionEmojis = null;
    EmojiDisambiguations._lastInstance.frequentlyUsedReactionNamesAndIds = null;
  }
};
EmojiDisambiguations["clear"] = function clear(arg0) {
  let tmp2 = null != EmojiDisambiguations._lastInstance;
  if (tmp2) {
    tmp2 = EmojiDisambiguations._lastInstance.guildId === arg0;
  }
  if (tmp2) {
    EmojiDisambiguations._lastInstance = null;
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
  value = emojisByName.get(arg0);
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
  const self = this;
  if (null != this.frequentlyUsed) {
    return self.frequentlyUsed;
  } else {
    const frequently = Frecency.frequently;
    const mapped = frequently.map((id) => {
      if (null != id.id) {
        let byId = self.getById(id.id);
      } else {
        byId = require("UnicodeEmojis").getByName(id.name);
        obj = require("UnicodeEmojis");
      }
      return byId;
    });
    const found = mapped.filter(self(1369).isNotNullish);
    const items = [];
    HermesBuiltin.arraySpread(dedupeEmojisByNameOrIdDefault(found).values(), 0);
    self.frequentlyUsed = items;
    return self.frequentlyUsed;
  }
};
prototype2["rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest"] = function rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
  const self = this;
  if (null != this.frequentlyUsedReactionEmojis) {
    if (null != self.frequentlyUsedReactionNamesAndIds) {
      obj = { frequentlyUsedReactionEmojis: null, frequentlyUsedReactionNamesAndIds: null };
      ({ frequentlyUsedReactionEmojis: obj3.frequentlyUsedReactionEmojis, frequentlyUsedReactionNamesAndIds: obj3.frequentlyUsedReactionNamesAndIds } = self);
      return obj;
    }
  }
  const frequently = Frecency.frequently;
  const mapped = frequently.map((id) => {
    if (null != id.id) {
      let byId = self.getById(id.id);
    } else {
      byId = require("UnicodeEmojis").getByName(id.name);
      obj = require("UnicodeEmojis");
    }
    return byId;
  });
  const found = mapped.filter(self(1369).isNotNullish);
  obj = dedupeEmojisByNameOrIdDefault(found);
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
    let result = require("UnicodeEmojis").convertSurrogateToBase(id.surrogates);
    if (result == null) {
      result = id;
    }
    return frequentlyUsedReactionNamesAndIds.has(result.name);
  }
};
prototype2["rebuildFavoriteEmojisWithoutFetchingLatest"] = function rebuildFavoriteEmojisWithoutFetchingLatest() {
  const self = this;
  if (null != this.favorites) {
    if (null != self.favoriteNamesAndIds) {
      obj = { favorites: null, favoriteNamesAndIds: null };
      ({ favorites: obj3.favorites, favoriteNamesAndIds: obj3.favoriteNamesAndIds } = self);
      return obj;
    }
  }
  const favoriteEmojis = UserSettingsProtoStore.frecencyWithoutFetchingLatest.favoriteEmojis;
  let emojis;
  if (favoriteEmojis != null) {
    emojis = favoriteEmojis.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  const mapped = emojis.map((item) => {
    let byId = self.getById(item);
    if (byId == null) {
      byId = require("UnicodeEmojis").getByName(item);
      obj = require("UnicodeEmojis");
    }
    return byId;
  });
  const found = mapped.filter(self(1369).isNotNullish);
  obj = dedupeEmojisByNameOrIdDefault(found);
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
  combined = favoriteEmojisWithoutFetchingLatest.concat(frequentlyUsedReactionEmojisWithoutFetchingLatest);
  return combined.filter((item) => {
    const hasItem = set.has(item);
    let flag = !hasItem;
    if (!hasItem) {
      set.add(item);
      flag = true;
    }
    return flag;
  });
};
prototype2["getTopEmojiWithoutFetchingLatest"] = function getTopEmojiWithoutFetchingLatest(guildId) {
  const self = this;
  if (null == this.topEmojis) {
    value = map.get(guildId);
    const topEmojiIdsByGuildId = TopEmojiStore.getTopEmojiIdsByGuildId(guildId);
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
    const mapped = emojiIds.map((item) => {
      let byId = self.getById(item);
      if (byId == null) {
        obj = require("UnicodeEmojis");
        byId = obj.getByName(require("UnicodeEmojis").convertSurrogateToName(item, false));
        const obj2 = require("UnicodeEmojis");
      }
      return byId;
    });
    const items = [];
    const item = mapped.forEach((item) => {
      if (null != item) {
        items.push(item);
      }
    });
    const newlyAddedEmojiForGuild = self.getNewlyAddedEmojiForGuild(guildId);
    closure_0 = newlyAddedEmojiForGuild.map((id) => id.id);
    self.topEmojis = items.filter((id) => !closure_0.includes(id.id));
  }
  return self.topEmojis;
};
prototype2["getNewlyAddedEmojiForGuild"] = function getNewlyAddedEmojiForGuild(guildId) {
  if (null == this.newlyAddedEmoji) {
    return closure_26;
  } else {
    const newlyAddedEmoji = tmp.newlyAddedEmoji;
    value = newlyAddedEmoji.get(guildId);
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
  return _modDef12(this.getDisambiguatedEmoji()).filter((item) => {
    ({ names, name } = item);
    let someResult = null != names;
    if (someResult) {
      someResult = _modDef12.some(names, matchComparator);
    }
    let tmp5 = null != name;
    if (tmp5) {
      tmp5 = matchComparator(name);
    }
    let someResult1 = null != name;
    if (someResult1) {
      const obj2 = _modDef12;
      someResult1 = obj2.some(EmojiTermsDefault.getTermsForEmoji(name), matchComparator);
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
let merged = Object.assign({
  computeBonus() {
    return 100;
  },
  lookupKey(emojiId) {
    let byName = require("UnicodeEmojis").getByName(emojiId);
    if (byName == null) {
      const tmp3 = getEmojiToGroupId()[emojiId];
      let tmp4;
      if (null != tmp3) {
        let usableEmoji;
        if (dependencyMap2[tmp3] != null) {
          usableEmoji = obj2.getUsableEmoji(emojiId);
        }
        tmp4 = usableEmoji;
      }
      byName = tmp4;
    }
    return byName;
  },
  afterCompute() {
    closure_0();
    const items = [...closure_2_22];
    if (!obj.some(__initData10, (usableEmojis) => usableEmojis.usableEmojis.length > 0)) {
      items.splice(__initData2.indexOf(closure_2_20.CUSTOM), 1);
    }
    obj = _modDef12;
  },
  numFrequentlyItems: 42
});
new Frecency({});
let obj3 = {};
resetFrequentlyUsed = EmojiDisambiguations.resetFrequentlyUsedReactionEmojis;
const merged1 = Object.assign({
  computeBonus() {
    return 100;
  },
  lookupKey(emojiId) {
    let byName = require("UnicodeEmojis").getByName(emojiId);
    if (byName == null) {
      const tmp3 = getEmojiToGroupId()[emojiId];
      let tmp4;
      if (null != tmp3) {
        let usableEmoji;
        if (dependencyMap2[tmp3] != null) {
          usableEmoji = obj2.getUsableEmoji(emojiId);
        }
        tmp4 = usableEmoji;
      }
      byName = tmp4;
    }
    return byName;
  },
  afterCompute() {
    closure_0();
    const items = [...closure_2_22];
    if (!obj.some(__initData10, (usableEmojis) => usableEmojis.usableEmojis.length > 0)) {
      items.splice(__initData2.indexOf(closure_2_20.CUSTOM), 1);
    }
    obj = _modDef12;
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
Frecency = new Frecency(obj3);
const PersistedStore = initializeDefault.PersistedStore;
class EmojiStore extends PersistedStore {
}
const prototype3 = EmojiStore.prototype;
prototype3["initialize"] = function initialize(pendingUsages) {
  const self = this;
  this.waitFor(ExperimentStore, GuildMemberStore, GuildMembershipStore, GuildRoleStore, GuildStore, LocaleStore, RawGuildEmojiStore, SortedGuildStore, SubscriptionRoleStore, TopEmojiStore, UserSettingsProtoStore, UserStore);
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
  const items = [UserSettingsProtoStore];
  self.syncWith(items, handleUserSettingsProtoStoreChange);
};
prototype3["getState"] = function getState() {
  return obj;
};
Object.defineProperty(prototype3, "loadState", {
  get: function loadState() {
    return Loaded;
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
    let str = require("UnicodeEmojis").getDefaultDiversitySurrogate();
    if (str == null) {
      str = "";
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(prototype3, "emojiFrecencyWithoutFetchingLatest", {
  get: function emojiFrecencyWithoutFetchingLatest() {
    return Frecency;
  },
  set: undefined
});
Object.defineProperty(prototype3, "emojiReactionFrecencyWithoutFetchingLatest", {
  get: function emojiReactionFrecencyWithoutFetchingLatest() {
    return Frecency;
  },
  set: undefined
});
prototype3["getGuildEmoji"] = function getGuildEmoji(guildId) {
  loadSavedEmojis();
  let tmp2;
  if (null != guildId) {
    tmp2 = dependencyMap2[guildId];
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
    tmp2 = dependencyMap2[id];
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
prototype3["getUsableGuildEmoji"] = function getUsableGuildEmoji(item) {
  loadSavedEmojis();
  let usableEmojis;
  if (dependencyMap2[item] != null) {
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
prototype3["getDisambiguatedEmojiContext"] = function getDisambiguatedEmojiContext(guildId) {
  loadSavedEmojis();
  return EmojiDisambiguations.get(guildId);
};
prototype3["getSearchResultsOrder"] = function getSearchResultsOrder(locked, query, count, intention) {
  closure_0 = intention;
  let formatted = query.toLowerCase();
  const escapeResult = formatted(4547).escape(formatted);
  let orderByResult = locked;
  if (locked.length > 0) {
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const regExp = new RegExp("^" + escapeResult, "i");
    const _RegExp2 = RegExp;
    const _HermesInternal2 = HermesInternal;
    const regExp1 = new RegExp("(^|_|[A-Z])" + escapeResult + "s?([A-Z]|_|$)");
    const test = regExp1.test;
    dependencyMap = test.bind(regExp1);
    const test2 = regExp.test;
    closure_3 = test2.bind(regExp);
    const items = [
      (uniqueName) => {
          if (null != uniqueName.uniqueName) {
            let str = uniqueName.names[0];
          } else {
            str = uniqueName.name;
          }
          let id = str;
          if (null == uniqueName.uniqueName) {
            id = uniqueName.id;
          }
          let num = 0;
          if (null != str) {
            num = 0;
            if (null != id) {
              formatted = str.toLowerCase();
              let num2 = 0;
              if (formatted === formatted) {
                num2 = 4;
              }
              if (closure_2(formatted)) {
                let num3 = 2;
              } else {
                num3 = 0;
              }
              let num4 = 0;
              if (closure_3(str)) {
                num4 = 1;
              }
              if (closure_0 === constants2.REACTION) {
                let score = Frecency.getScore(id);
              } else {
                score = Frecency.getScore(id);
              }
              const sum = 1 + num2 + num3 + num4;
              let result = sum;
              if (null != score) {
                result = sum * (score / 100);
              }
              num = result;
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
    orderByResult = formatted(12).orderBy(locked, items, ["desc", "asc"]);
    const tmp2Result = formatted(12);
  }
  let substr = orderByResult;
  if (count > 0) {
    substr = orderByResult.slice(0, count);
  }
  return substr;
};
prototype3["searchWithoutFetchingLatest"] = function searchWithoutFetchingLatest(channel) {
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
  ({ matchComparator, showOnlyUnicode: _slicedToArray, bypassPremiumEmojiEntitlement: asyncGeneratorStep } = channel);
  let regExp;
  loadSavedEmojis();
  const formatted = query.toLowerCase();
  const replaced = formatted.replaceAll(/[ _]/g, "");
  intention(flag[30]);
  if (null == matchComparator) {
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    regExp = new RegExp("" + tmp4, "i");
    matchComparator = function c(str) {
      return regExp.test(str.replaceAll("_", ""));
    };
  }
  let guildId = null;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  value = EmojiDisambiguations.get(guildId);
  const reduced = value.nameMatchesChain(matchComparator).reduce((locked, emoji) => {
    obj = { emoji, channel, intention, forceIncludeExternalGuilds: flag, bypassPremiumEmojiEntitlement };
    const emojiUnavailableReason = obj.getEmojiUnavailableReason(obj);
    if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
      if (!_slicedToArray) {
        locked = locked.locked;
        locked.push(emoji);
      }
      return locked;
    }
    let tmp5 = null != emojiUnavailableReason;
    if (!tmp5) {
      let tmp6 = _slicedToArray;
      if (_slicedToArray) {
        tmp6 = emoji.type !== channel(4216).EmojiTypes.UNICODE;
      }
      tmp5 = tmp6;
    }
    if (!tmp5) {
      const unlocked = locked.unlocked;
      unlocked.push(emoji);
    }
  }, { unlocked: [], locked: [] });
  const nameMatchesChainResult = value.nameMatchesChain(matchComparator);
  return { unlocked: this.getSearchResultsOrder(reduced.unlocked, query, count, intention), locked: this.getSearchResultsOrder(reduced.locked, query, 0, intention) };
};
prototype3["getUsableCustomEmojiById"] = function getUsableCustomEmojiById(emojiId) {
  loadSavedEmojis();
  const tmp2 = getEmojiToGroupId()[emojiId];
  let tmp3;
  if (null != tmp2) {
    let usableEmoji;
    if (dependencyMap2[tmp2] != null) {
      usableEmoji = obj.getUsableEmoji(emojiId);
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
    if (dependencyMap2[tmp2] != null) {
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
    value = EmojiDisambiguations.get(guildId);
    topEmojiWithoutFetchingLatest = value.getTopEmojiWithoutFetchingLatest(guildId);
  }
  return topEmojiWithoutFetchingLatest;
};
prototype3["getNewlyAddedEmoji"] = function getNewlyAddedEmoji(guildId) {
  if (null == guildId) {
    let newlyAddedEmojiForGuild = closure_26;
  } else {
    loadSavedEmojis();
    value = EmojiDisambiguations.get(guildId);
    newlyAddedEmojiForGuild = value.getNewlyAddedEmojiForGuild(guildId);
  }
  return newlyAddedEmojiForGuild;
};
prototype3["getTopEmojisMetadata"] = function getTopEmojisMetadata(guildId) {
  return map.get(guildId);
};
prototype3["hasUsableEmojiInAnyGuild"] = function hasUsableEmojiInAnyGuild() {
  loadSavedEmojis();
  const keys = SnowflakeUtils.keys(closure_32);
  return keys.some((item) => dependencyMap2[item].usableEmojis.length > 0);
};
prototype3["hasFavoriteEmojis"] = function hasFavoriteEmojis(arg0) {
  value = EmojiDisambiguations.get(arg0);
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
const emojiStore = new EmojiStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    obj.pendingUsages = [];
    obj.emojiReactionPendingUsages = [];
  },
  BACKGROUND_SYNC: function handleBackgroundSync() {
    closure_32 = {};
    c33 = {};
    EmojiDisambiguations.reset();
    map.clear();
    Loaded = obj.Unloaded;
  },
  CONNECTION_OPEN: function handleConnectionOpen(unavailableGuilds) {
    deleteEverything();
    for (const item10009 of tmp2) {
      let tmp4 = updateGuildEmoji(item10009.id);
      continue;
    }
    if (0 === unavailableGuilds.unavailableGuilds.length) {
      const guilds = unavailableGuilds.guilds;
      if (guilds.every((emojis) => "full_sync" === emojis.emojis.op)) {
        let Unloaded = obj.Loaded;
      }
      Loaded = Unloaded;
      rebuildEmojis();
    }
    Unloaded = obj.Unloaded;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(emojis) {
    closure_32 = {};
    c33 = {};
    EmojiDisambiguations.reset();
    map.clear();
    Loaded = obj.Unloaded;
    for (const key10014 in arg0.emojis) {
      let tmp10 = updateGuildEmoji(key10014);
      continue;
    }
    Loaded = obj.Loaded;
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj.Loaded) {
      Frecency.compute();
      Frecency.compute();
    }
  },
  CACHED_EMOJIS_LOADED: function handleCachedEmojisLoaded(arg0) {
    while (tmp !== undefined) {
      let first = _slicedToArray(tmp2, 1)[0];
      let tmp5 = first;
      if (GuildMembershipStore.isMember(first)) {
        let tmp9 = updateGuildEmoji(tmp5);
      }
      continue;
    }
    rebuildEmojis();
    tmp = arg0.emojis[Symbol.iterator]();
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(user) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (user.user.id === id) {
      updateGuildEmoji(user.guildId);
      c33 = null;
      EmojiDisambiguations.reset();
      if (Loaded === obj.Loaded) {
        Frecency.compute();
        Frecency.compute();
      }
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateGuildEmoji(guild.guild.id);
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj.Loaded) {
      Frecency.compute();
      Frecency.compute();
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    updateGuildEmoji(guild.guild.id);
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj.Loaded) {
      Frecency.compute();
      Frecency.compute();
    }
  },
  GUILD_EMOJIS_UPDATE: function handleGuildEmojiUpdated(guildId) {
    updateGuildEmoji(guildId.guildId);
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj.Loaded) {
      Frecency.compute();
      Frecency.compute();
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null != dependencyMap2[guild.id]) {
      delete tmp[tmp2];
    }
    map.delete(guild.id);
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj.Loaded) {
      Frecency.compute();
      Frecency.compute();
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
                name = tmp2.uniqueName;
              }
              if (name == null) {
                name = tmp2.name;
              }
              let tmp5 = name;
              if (null != name) {
                let trackResult = Frecency.track(tmp5);
                let prop = closure_1_23.emojiReactionPendingUsages;
                obj = { key: tmp5, timestamp: null };
                let _Date = Date;
                obj.timestamp = Date.now();
                let arr = prop.push(obj);
              }
              continue;
            }
            let tmp12 = tmp11;
            if (items.length > 0) {
              tmp12 = closure_1_30 === Loaded.Loaded;
            }
            if (tmp12) {
              Frecency.compute();
            }
            return items.length > 0;
          })(items);
          items1 = [emoji];
          trackUsage(items1);
        }
      }
      obj = require("UnicodeEmojis");
      emoji = obj.getByName(require("UnicodeEmojis").convertSurrogateToName(optimistic.emoji.name, false));
      const obj2 = require("UnicodeEmojis");
    } else {
      return false;
    }
  },
  EMOJI_TRACK_USAGE: function handleTrackUsage(emojiUsed) {
    trackUsage(emojiUsed.emojiUsed);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    obj = EmojiTermsDefault;
    obj.setEmojiLocale(LocaleStore.locale);
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
    obj = { emojiIds: topEmojisMetadata.map((emojiId) => emojiId.emojiId), topEmojisTTL: null };
    const tmpResult = _modDef4153(_modDef4153());
    obj.topEmojisTTL = _modDef4153(_modDef4153()).add(1, "days").valueOf();
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/EmojiStore.tsx");

export default emojiStore;
export const LoadState = obj;
export { EmojiDisambiguations };