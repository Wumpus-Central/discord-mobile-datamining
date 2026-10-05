// === Module 5638: EmojiStore ===

// Module 5638 (EmojiStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import DurationsDefault from "Durations" /* 1102 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import TryLoad from "TryLoad" /* 2098 */;
import _modDef4461 from "module_4461" /* 4461 */;
import PremiumRoleUtils from "PremiumRoleUtils" /* 4499 */;
import EmojiTypes from "EmojiTypes" /* 4526 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4527 */;
import RegexUtilsDefault from "RegexUtils" /* 4874 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5642 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 5643 */;
import dedupeEmojisByNameOrIdDefault from "dedupeEmojisByNameOrId" /* 5645 */;
import EmojiTermsDefault from "EmojiTerms" /* 5646 */;
import IAPEligibility from "IAPEligibility" /* 5678 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5639 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildMembershipStore from "GuildMembershipStore" /* 2053 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import UserStore from "UserStore" /* 1377 */;
import RawGuildEmojiStore from "RawGuildEmojiStore" /* 5640 */;
import TopEmojiStore from "TopEmojiStore" /* 5641 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import UnicodeEmojis from "UnicodeEmojis" /* 4523 */;
import SnowflakeUtils from "SnowflakeUtils" /* 11 */;
import Frecency_mod from "Frecency" /* 4927 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let Loading, _instance_members_initializer_EmojiDisambiguations_, c2, c3, closure_32, dependencyMap, recentUses;

let closure_17;
let closure_18;
let set;
function computeBonus() {
  return 100;
}
function lookupKey(id1) {
  obj = require("UnicodeEmojis");
  let byName = obj.getByName(id1);
  if (byName == null) {
    const tmp3 = getEmojiToGroupId()[id1];
    let tmp4;
    if (null != tmp3) {
      let usableEmoji;
      if (closure_32[tmp3] != null) {
        usableEmoji = obj2.getUsableEmoji(id1);
      }
      tmp4 = usableEmoji;
    }
    byName = tmp4;
  }
  return byName;
}
function afterCompute() {
  closure_0();
  items = [...combined];
  obj = _modDef12;
  if (!obj.some(closure_32, (hasUsableEmoji) => hasUsableEmoji.hasUsableEmoji())) {
    items.splice(combined.indexOf(EmojiCategories.CUSTOM), 1);
  }
}
function getEmojiToGroupId() {
  loadSavedEmojis();
  if (null == c33) {
    c33 = {};
    for (const key10008 in closure_32) {
      obj = closure_32[key10008];
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
  return obj(...arguments);
}
let obj = function _loadSavedEmojis() {
  obj = _asyncToGenerator(async () => {
    let obj3;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let emojis;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_0 = tmp4;
            let c0;
            emojis = undefined;
            if (Loading === obj2.Unloaded) {
              obj2 = DatabaseDaosDefault;
              const databaseResult = obj2.database();
              c0 = databaseResult;
              if (null != databaseResult) {
                Loading = obj2.Loading;
                c2 = 1;
                c3 = 1;
                const obj6 = {
                  value: obj3.tryLoadOrResetCacheGatewayAsync("EmojiStore.loadSavedEmojis", async () => {
                                obj = emojis(closure_2_2[25]);
                                return obj.timeAsync("\u{1F4BE}", "loadSavedEmojis", async () => {
                                  obj = closure_2_1(closure_2_2[26]);
                                  return obj.getAsync(closure_1_0);
                                });
                              }),
                  done: false
                };
                obj3 = TryLoad;
                return obj6;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          emojis = value;
          Loaded = Loaded.Loaded;
          if (null != emojis) {
            const obj8 = { type: "CACHED_EMOJIS_LOADED", emojis };
            const obj7 = closure_129_1(closure_129_2[27]);
            obj7.dispatch(obj8);
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp17) {
        c3 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
function deleteEverything() {
  closure_32 = {};
  c33 = {};
  EmojiDisambiguations.reset();
  map.clear();
  Loaded = obj2.Unloaded;
}
function rebuildEmojis() {
  c33 = null;
  EmojiDisambiguations.reset();
  if (Loaded === obj2.Loaded) {
    importDefaultResult21.compute();
    importDefaultResult31.compute();
  }
}
function updateGuildEmoji(guildId) {
  if (null != closure_32[guildId]) {
    delete closure_32[tmp];
  }
  EmojiDisambiguations.clear(guildId);
  const guildEmojis = RawGuildEmojiStore.getGuildEmojis(guildId);
  if (null != guildEmojis) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      obj = IAPEligibility;
      let flag = obj.canUseRoleSubscriptionIAP(guildId);
      const self = this;
      if (typeof GuildEmojis === "function") {
        if (flag === undefined) {
          flag = false;
        }
        const merged = Object.assign({ _emojis: null, _emoticons: null, _usableEmojis: null, _hiddenEmojiIds: null, _canSeeServerSubIAP: false });
        merged.id = guildId;
        merged._userId = tmp8;
        merged._emojiMap = guildEmojis;
        merged._canSeeServerSubIAP = flag;
        tmp6[guildId] = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
}
function handleUserSettingsProtoStoreChange() {
  function populateInitialFrecencyData(emojis, emojis1) {
    obj = _modDef12;
    if (obj.isEmpty(emojis)) {
      const tmpResult = _modDef12;
      if (tmpResult.isEmpty(closure_1_23.pendingUsages)) {
        if (UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS)) {
          items = ["thumbsup", "eyes", "laughing", "watermelon", "fork_and_knife", "yum", "weary", "tired_face", "poop", "100"];
          for (const item10022 of items) {
            let trackResult = importDefaultResult21.track(item10022);
            continue;
          }
        }
      }
    }
    const obj3 = _modDef12;
    if (obj3.isEmpty(emojis1)) {
      const tmp9Result = _modDef12;
      if (tmp9Result.isEmpty(closure_1_23.emojiReactionPendingUsages)) {
        if (UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS)) {
          const items1 = ["100", "100", "thumbsup", "thumbsup", "thumbsdown", "thumbsdown", "heart", "point_up", "eyes", "weary", "laughing", "white_check_mark", "x"];
          for (const item10049 of items1) {
            let trackResult1 = importDefaultResult31.track(item10049);
            continue;
          }
        }
      }
    }
  }
  const textAndImages = UserSettingsProtoStore.settings.textAndImages;
  let value;
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
  const overwriteHistory = importDefaultResult21.overwriteHistory;
  const obj4 = _modDef12;
  overwriteHistory(obj4.mapValues(emojis, (recentUses) => {
    let mapped;
    obj = { recentUses: mapped.filter((item) => item > 0) };
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    mapped = recentUses.map(Number);
    return obj;
  }), obj.pendingUsages);
  const overwriteHistory2 = importDefaultResult31.overwriteHistory;
  const obj5 = _modDef12;
  overwriteHistory2(obj5.mapValues(emojis1, (recentUses) => {
    let mapped;
    obj = { recentUses: mapped.filter((item) => item > 0) };
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    mapped = recentUses.map(Number);
    return obj;
  }), obj.emojiReactionPendingUsages);
  populateInitialFrecencyData(emojis, emojis1);
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
        let trackResult = importDefaultResult21.track(tmp7);
        let pendingUsages = obj.pendingUsages;
        obj = { key: tmp7, timestamp: Date.now() };
        let _Date = Date;
        let push = pendingUsages.push;
        let arr = push(obj);
      }
      continue;
    }
    const tmp14 = tmp13 && Loaded === obj2.Loaded;
    if (tmp14) {
      importDefaultResult21.compute();
    }
    return emojiUsed.length > 0;
  }
}
function handleRoleUpdate(guildId) {
  guildId = guildId.guildId;
  const role = GuildRoleStore.getRole(guildId, guildId.role.id);
  if (null != role) {
    obj = PremiumRoleUtils;
    if (obj.isSubscriptionRole(role)) {
      updateGuildEmoji(guildId);
      c33 = null;
      EmojiDisambiguations.reset();
      if (Loaded === obj2.Loaded) {
        importDefaultResult21.compute();
        importDefaultResult31.compute();
      }
    }
  }
  return false;
}
({ EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = EmojiConstants);
const NULL_STRING_GUILD_ID = Constants.NULL_STRING_GUILD_ID;
const EmojiCategories = EmojiPickerConstants.EmojiCategories;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
let str = EmojiCategories.TOP_GUILD_EMOJI;
let items = [str.toString(), , , ];
const str2 = EmojiCategories.FAVORITES;
items[1] = str2.toString();
const str3 = EmojiCategories.RECENT;
items[2] = str3.toString();
const str4 = EmojiCategories.CUSTOM;
items[3] = str4.toString();
const concat = items.concat;
let combined = concat(UnicodeEmojis.getCategories());
obj = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: set };
set = new Set();
class GuildEmojis {
  constructor(id, _userId, _emojiMap) {
    let flag = arg3;
    if (arg3 === undefined) {
      flag = false;
    }
    const merged = Object.assign({ _emojis: null, _emoticons: null, _usableEmojis: null, _hiddenEmojiIds: null, _canSeeServerSubIAP: false });
    merged.id = id;
    merged._userId = _userId;
    merged._emojiMap = _emojiMap;
    merged._canSeeServerSubIAP = flag;
    return merged;
  }
  getEmoji(arg0) {
    return this._emojiMap[arg0];
  }
  getUsableEmoji(id1) {
    const self = this;
    const emoji = this.getEmoji(id1);
    let tmp2;
    if (null != emoji) {
      if (self.isUsable(emoji)) {
        tmp2 = emoji;
      }
    }
    return tmp2;
  }
  isUsable(emoji) {
    let closure_0 = emoji;
    if (0 === emoji.roles.length) {
      return true;
    } else {
      const self = this;
      const member = GuildMemberStore.getMember(this.id, this._userId);
      let tmp6 = null != member;
      if (tmp6) {
        let roles = member.roles;
        let someResult = roles.some((item) => {
          roles = roles.roles;
          return roles.includes(item);
        });
        if (!someResult) {
          obj = RoleSubscriptionEmojiUtils;
          let result = obj.isPurchasableRoleSubscriptionEmoji(emoji);
          if (result) {
            const _canSeeServerSubIAP = self._canSeeServerSubIAP || SubscriptionRoleStore.getUserIsAdmin(emoji.guildId);
            result = _canSeeServerSubIAP;
          }
          someResult = result;
        }
        tmp6 = someResult;
      }
      return tmp6;
    }
  }
  emojiIds() {
    obj = SnowflakeUtils;
    return obj.keys(this._emojiMap);
  }
  _computeEmojiUsability() {
    const self = this;
    if (null == this._usableEmojis) {
      items = [];
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      set = new Set();
      const emojis = self.emojis;
      for (const item10017 of emojis) {
        if (self.isUsable(item10017)) {
          let arr = items.push(item10017);
        } else {
          let addResult = set.add(item10017.id);
        }
        continue;
      }
      obj2 = _modDef12;
      self._usableEmojis = obj2.sortBy(items, (name) => name.name);
      self._hiddenEmojiIds = set;
    }
  }
  hasUsableEmoji() {
    let someResult;
    const self = this;
    if (null != this._usableEmojis) {
      someResult = self._usableEmojis.length > 0;
    } else {
      const emojis = self.emojis;
      someResult = emojis.some((item) => self.isUsable(item));
    }
    return someResult;
  }
}
const prototype = GuildEmojis.prototype;
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
const fromTimestamp = SnowflakeUtils.fromTimestamp;
const timestamp = Date.now();
let closure_25 = fromTimestamp(timestamp - 60 * DurationsDefault.Millis.DAY);
let closure_26 = [];
let closure_27 = [];
const set1 = new Set();
let obj2 = { Unloaded: 0, [0]: "Unloaded", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
let Loaded = obj2.Unloaded;
let items1 = [...combined];
items = items1;
const __initData2 = {};
let c33 = {};
let map = new Map();
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
  new Map();
  this.customEmojis = new Map();
  new Map();
  this.customEmojisByGroup = new Map();
  new Map();
  this.emoticonsByName = new Map();
  new Map();
  this.emojisByName = new Map();
  new Map();
  this.emojisById = new Map();
  new Map();
  this.newlyAddedEmoji = new Map();
  this.isFavoriteEmojiWithoutFetchingLatest = function isFavoriteEmojiWithoutFetchingLatest(id) {
    if (null == id) {
      return false;
    } else {
      const favoriteNamesAndIds = self.rebuildFavoriteEmojisWithoutFetchingLatest().favoriteNamesAndIds;
      if (null != id.id) {
        return favoriteNamesAndIds.has(id.id);
      } else {
        obj = require("UnicodeEmojis");
        let result = obj.convertSurrogateToBase(id.surrogates);
        if (result == null) {
          result = id;
        }
        return favoriteNamesAndIds.has(result.name);
      }
    }
  };
  new Map();
};
class EmojiDisambiguations {
  constructor(guildId) {
    function addGuildEmoji(guildId) {
      let tmp = guildId;
      if (null == guildId) {
        tmp = NULL_STRING_GUILD_ID;
      }
      if (null != closure_32[tmp]) {
        obj = _modDef12;
        obj.each(closure_32[tmp].usableEmojis, disambiguateEmoji);
        obj2 = _modDef12;
        obj2.each(closure_32[tmp].emoticons, disambiguateEmoticon);
      }
    }
    obj2 = Object.create(new.target.prototype);
    let tmp2 = _instance_members_initializer_EmojiDisambiguations_();
    obj2.guildId = guildId;
    map = new Map();
    items = [];
    function disambiguateEmoji(name) {
      let customEmojisByGroup;
      let customEmojisByGroup2;
      let newlyAddedEmoji;
      let newlyAddedEmoji2;
      name = name.name;
      let num = map.get(name);
      if (num == null) {
        num = 0;
      }
      const result = map.set(name, num + 1);
      let tmp2 = name;
      if (num > 0) {
        obj2 = { name: "" + name + "~" + num, originalName: name };
        const merged = Object.assign(name);
        const _HermesInternal = HermesInternal;
        tmp2 = obj2;
      }
      const emojisByName = obj2.emojisByName;
      const result1 = emojisByName.set(tmp2.name, tmp2);
      const emojisById = obj2.emojisById;
      const result2 = emojisById.set(tmp2.id, tmp2);
      const customEmojis = obj2.customEmojis;
      const result3 = customEmojis.set(tmp2.name, tmp2);
      const guildId = name.guildId;
      ({ customEmojisByGroup, customEmojisByGroup: customEmojisByGroup2 } = obj2);
      if (customEmojisByGroup.has(guildId)) {
        const value = customEmojisByGroup2.get(guildId);
        if (value != null) {
          value.push(tmp2);
        }
      } else {
        items = [tmp2];
        const result4 = customEmojisByGroup2.set(guildId, items);
      }
      const obj3 = SnowflakeUtils;
      if (obj3.compare(name.id, closure_25) >= 0) {
        ({ newlyAddedEmoji, newlyAddedEmoji: newlyAddedEmoji2 } = obj2);
        if (newlyAddedEmoji.has(guildId)) {
          const value2 = newlyAddedEmoji2.get(guildId);
          if (value2 != null) {
            value2.push(tmp2);
          }
        } else {
          const items1 = [tmp2];
          const result5 = newlyAddedEmoji2.set(guildId, items1);
        }
      }
      const disambiguatedEmoji = tmp7.disambiguatedEmoji;
      disambiguatedEmoji.push(tmp2);
    }
    function disambiguateEmoticon(name) {
      const emoticonsByName = obj2.emoticonsByName;
      if (!emoticonsByName.has(name.name)) {
        const push = items.push;
        obj = RegexUtilsDefault;
        push(obj.escape(name.name));
        const emoticonsByName2 = obj2.emoticonsByName;
        const result = emoticonsByName2.set(name.name, name);
      }
    }
    const arr2 = items(disambiguateEmoji[18]);
    let item = arr2.forEach((name) => {
      name = name.name;
      const names = name.names;
      const substr = names.slice(1);
      const item = substr.forEach((item) => {
        const unicodeAliases = obj2.unicodeAliases;
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
      const emojisByName = obj2.emojisByName;
      const result2 = emojisByName.set(name, name);
      const disambiguatedEmoji = obj2.disambiguatedEmoji;
      disambiguatedEmoji.push(name);
    });
    addGuildEmoji(obj2.guildId);
    const newlyAddedEmoji = obj2.newlyAddedEmoji;
    const keys = newlyAddedEmoji.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = nextResult;
      let newlyAddedEmoji2 = obj2.newlyAddedEmoji;
      let value = newlyAddedEmoji2.get(nextResult);
      obj = value;
      if (null != value) {
        let newlyAddedEmoji4 = obj2.newlyAddedEmoji;
        set = newlyAddedEmoji4.set;
        let sorted = obj.sort((id, id2) => {
          obj = items(disambiguateEmoji[20]);
          return obj.compare(id2.id, id.id);
        });
        let result = set(tmp8, sorted.slice(0, 3));
      } else {
        let newlyAddedEmoji3 = obj2.newlyAddedEmoji;
        let result1 = newlyAddedEmoji3.set(tmp8, []);
      }
      continue;
    }
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    const item1 = flattenedGuildIds.forEach((item) => {
      let tmp = item;
      if (item !== obj2.guildId) {
        if (null == tmp) {
          tmp = NULL_STRING_GUILD_ID;
        }
        if (null != closure_32[tmp]) {
          obj = _modDef12;
          obj.each(closure_32[tmp].usableEmojis, disambiguateEmoji);
          obj2 = _modDef12;
          obj2.each(closure_32[tmp].emoticons, disambiguateEmoticon);
        }
      }
    });
    obj2.escapedEmoticonNames = items.join("|");
    return obj2;
  }
  static get(guildId) {
    let tmp = guildId;
    if (undefined === guildId) {
      tmp = null;
    }
    const tmp3 = null != EmojiDisambiguations._lastInstance && EmojiDisambiguations._lastInstance.guildId === tmp;
    if (!tmp3) {
      const self = this;
      EmojiDisambiguations._lastInstance = new EmojiDisambiguations(tmp);
    }
    return EmojiDisambiguations._lastInstance;
  }
  static reset() {
    EmojiDisambiguations._lastInstance = null;
  }
  static resetFrequentlyUsed() {
    if (null != EmojiDisambiguations._lastInstance) {
      EmojiDisambiguations._lastInstance.frequentlyUsed = null;
    }
  }
  static resetFrequentlyUsedReactionEmojis() {
    if (null != EmojiDisambiguations._lastInstance) {
      EmojiDisambiguations._lastInstance.frequentlyUsedReactionEmojis = null;
      EmojiDisambiguations._lastInstance.frequentlyUsedReactionNamesAndIds = null;
    }
  }
  static clear(arg0) {
    const tmp2 = null != EmojiDisambiguations._lastInstance && EmojiDisambiguations._lastInstance.guildId === arg0;
    if (tmp2) {
      EmojiDisambiguations._lastInstance = null;
    }
  }
  getDisambiguatedEmoji() {
    return this.disambiguatedEmoji;
  }
  getCustomEmoji() {
    return this.customEmojis;
  }
  getGroupedCustomEmoji() {
    return this.customEmojisByGroup;
  }
  getByName(arg0) {
    const self = this;
    const emojisByName = this.emojisByName;
    const value = emojisByName.get(arg0);
    if (null != value) {
      return value;
    } else {
      const unicodeAliases = self.unicodeAliases;
      const value3 = unicodeAliases.get(arg0);
      let value4;
      if (null != value3) {
        const emojisByName2 = self.emojisByName;
        value4 = emojisByName2.get(value3);
      }
      return value4;
    }
  }
  getEmoticonByName(arg0) {
    const emoticonsByName = this.emoticonsByName;
    return emoticonsByName.get(arg0);
  }
  getById(emojiId) {
    const emojisById = this.emojisById;
    return emojisById.get(emojiId);
  }
  getCustomEmoticonRegex() {
    const self = this;
    const tmp = null == this.emoticonRegex && null != self.escapedEmoticonNames && "" !== self.escapedEmoticonNames;
    if (tmp) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const regExp = new RegExp("^\\b(" + self.escapedEmoticonNames + ")\\b");
      self.emoticonRegex = regExp;
    }
    return self.emoticonRegex;
  }
  getFrequentlyUsedEmojisWithoutFetchingLatest() {
    const self = this;
    if (null != this.frequentlyUsed) {
      return self.frequentlyUsed;
    } else {
      const frequently = importDefaultResult21.frequently;
      const mapped = frequently.map((id) => {
        let byId;
        if (null != id.id) {
          byId = self.getById(id.id);
        } else {
          obj = require("UnicodeEmojis");
          byId = obj.getByName(id.name);
        }
        return byId;
      });
      const found = mapped.filter(self(1375).isNotNullish);
      obj = dedupeEmojisByNameOrIdDefault(found);
      items = [];
      HermesBuiltin.arraySpread(items, obj.values(), 0);
      self.frequentlyUsed = items;
      return self.frequentlyUsed;
    }
  }
  rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
    const self = this;
    if (null != this.frequentlyUsedReactionEmojis) {
      if (null != self.frequentlyUsedReactionNamesAndIds) {
        obj2 = { frequentlyUsedReactionEmojis: null, frequentlyUsedReactionNamesAndIds: null };
        ({ frequentlyUsedReactionEmojis: obj3.frequentlyUsedReactionEmojis, frequentlyUsedReactionNamesAndIds: obj3.frequentlyUsedReactionNamesAndIds } = self);
        return obj2;
      }
    }
    const frequently = importDefaultResult31.frequently;
    const mapped = frequently.map((id) => {
      let byId;
      if (null != id.id) {
        byId = self.getById(id.id);
      } else {
        obj = require("UnicodeEmojis");
        byId = obj.getByName(id.name);
      }
      return byId;
    });
    const found = mapped.filter(self(1375).isNotNullish);
    obj = dedupeEmojisByNameOrIdDefault(found);
    items = [...obj.values()];
    self.frequentlyUsedReactionEmojis = items;
    self.frequentlyUsedReactionNamesAndIds = new Set(obj.keys());
    new Set(obj.keys());
    return { frequentlyUsedReactionEmojis: self.frequentlyUsedReactionEmojis, frequentlyUsedReactionNamesAndIds: self.frequentlyUsedReactionNamesAndIds };
  }
  getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
    return this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest().frequentlyUsedReactionEmojis;
  }
  isFrequentlyUsedReactionEmojiWithoutFetchingLatest(id) {
    const frequentlyUsedReactionNamesAndIds = this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest().frequentlyUsedReactionNamesAndIds;
    if (null != id.id) {
      return frequentlyUsedReactionNamesAndIds.has(id.id);
    } else {
      obj = require("UnicodeEmojis");
      let result = obj.convertSurrogateToBase(id.surrogates);
      if (result == null) {
        result = id;
      }
      return frequentlyUsedReactionNamesAndIds.has(result.name);
    }
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    const self = this;
    if (null != this.favorites) {
      if (null != self.favoriteNamesAndIds) {
        obj2 = { favorites: null, favoriteNamesAndIds: null };
        ({ favorites: obj3.favorites, favoriteNamesAndIds: obj3.favoriteNamesAndIds } = self);
        return obj2;
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
        obj = require("UnicodeEmojis");
        byId = obj.getByName(item);
      }
      return byId;
    });
    const found = mapped.filter(self(1375).isNotNullish);
    obj = dedupeEmojisByNameOrIdDefault(found);
    items = [...obj.values()];
    self.favorites = items;
    self.favoriteNamesAndIds = new Set(obj.keys());
    new Set(obj.keys());
    return { favorites: self.favorites, favoriteNamesAndIds: self.favoriteNamesAndIds };
  }
  getEmojiInPriorityOrderWithoutFetchingLatest() {
    const frequentlyUsedReactionEmojisWithoutFetchingLatest = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
    set = new Set();
    const favoriteEmojisWithoutFetchingLatest = this.favoriteEmojisWithoutFetchingLatest;
    combined = favoriteEmojisWithoutFetchingLatest.concat(frequentlyUsedReactionEmojisWithoutFetchingLatest);
    return combined.filter((item) => {
      const hasItem = set.has(item);
      let flag = !hasItem;
      if (flag) {
        set.add(item);
        flag = true;
      }
      return flag;
    });
  }
  getTopEmojiWithoutFetchingLatest(guildId) {
    const self = this;
    if (null == this.topEmojis) {
      const value = map.get(guildId);
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
          const getByName = require("UnicodeEmojis").getByName;
          require("UnicodeEmojis");
          obj = require("UnicodeEmojis");
          byId = getByName(obj.convertSurrogateToName(item, false));
        }
        return byId;
      });
      items = [];
      const item = mapped.forEach((item) => {
        if (null != item) {
          items.push(item);
        }
      });
      const newlyAddedEmojiForGuild = self.getNewlyAddedEmojiForGuild(guildId);
      let closure_0 = newlyAddedEmojiForGuild.map((id) => id.id);
      self.topEmojis = items.filter((id) => !closure_0.includes(id.id));
    }
    return self.topEmojis;
  }
  getNewlyAddedEmojiForGuild(guildId) {
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
  }
  getEscapedCustomEmoticonNames() {
    return this.escapedEmoticonNames;
  }
  nameMatchesChain(matchComparator) {
    const tmp = _modDef12;
    const tmpResult = tmp(this.getDisambiguatedEmoji());
    return tmpResult.filter((item) => {
      let name;
      let names;
      ({ names, name } = item);
      let someResult = null != names;
      if (someResult) {
        obj = _modDef12;
        someResult = obj.some(names, matchComparator);
      }
      let someResult1 = null != name;
      const tmp5 = null != name && matchComparator(name);
      if (someResult1) {
        const some = _modDef12.some;
        _modDef12;
        obj2 = EmojiTermsDefault;
        someResult1 = some(obj2.getTermsForEmoji(name), matchComparator);
      }
      if (!someResult) {
        someResult = tmp5;
      }
      if (!someResult) {
        someResult = someResult1;
      }
      return someResult;
    });
  }
}
Object.defineProperty(EmojiDisambiguations.prototype, "favoriteEmojisWithoutFetchingLatest", {
  get: function favoriteEmojisWithoutFetchingLatest() {
    return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
  },
  set: undefined
});
EmojiDisambiguations._lastInstance = null;
let obj3 = {};
const resetFrequentlyUsed = EmojiDisambiguations.resetFrequentlyUsed;
let obj4 = { computeBonus, lookupKey, afterCompute, numFrequentlyItems: 42 };
let Frecency = Frecency_mod;
let merged = Object.assign(obj4);
const importDefaultResult21 = new Frecency(obj3);
let obj5 = {
  computeFrecency(arg0, score, maxTotalUse) {
    if (null == maxTotalUse.maxTotalUse) {
      return 0;
    } else {
      const _Math = Math;
      return Math.trunc(1000 * (arg0 / maxTotalUse.maxTotalUse * 0.2 + score / 1000 * 0.8));
    }
  },
  calculateMaxTotalUse: true
};
const React = EmojiDisambiguations.resetFrequentlyUsedReactionEmojis;
let obj6 = { computeBonus, lookupKey, afterCompute, numFrequentlyItems: 42 };
Frecency = Frecency_mod;
const merged1 = Object.assign(obj6);
const importDefaultResult31 = new Frecency(obj5);
const PersistedStore = get_initializedDefault.PersistedStore;
class EmojiStore extends PersistedStore {
  initialize(pendingUsages) {
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
        const self2 = this;
        const self3 = this;
        obj.expandedSectionsByGuildIds = new Set(pendingUsages.expandedSectionsByGuildIds);
        set = new Set(pendingUsages.expandedSectionsByGuildIds);
      }
    }
    items = [UserSettingsProtoStore];
    self.syncWith(items, handleUserSettingsProtoStoreChange);
  }
  getState() {
    return obj;
  }
  hasPendingUsage() {
    return obj.pendingUsages.length > 0 || obj.emojiReactionPendingUsages.length > 0;
  }
  getGuildEmoji(guildId) {
    loadSavedEmojis();
    let tmp2;
    if (null != guildId) {
      tmp2 = closure_32[guildId];
    }
    let emojis;
    if (tmp2 != null) {
      emojis = tmp2.emojis;
    }
    if (emojis == null) {
      emojis = closure_27;
    }
    return emojis;
  }
  getHiddenEmojiIds(id) {
    loadSavedEmojis();
    let tmp2;
    if (null != id) {
      tmp2 = closure_32[id];
    }
    let hiddenEmojiIds;
    if (tmp2 != null) {
      hiddenEmojiIds = tmp2.hiddenEmojiIds;
    }
    if (hiddenEmojiIds == null) {
      hiddenEmojiIds = set1;
    }
    return hiddenEmojiIds;
  }
  getUsableGuildEmoji(item) {
    loadSavedEmojis();
    let usableEmojis;
    if (closure_32[item] != null) {
      usableEmojis = tmp2.usableEmojis;
    }
    if (usableEmojis == null) {
      usableEmojis = closure_27;
    }
    return usableEmojis;
  }
  getGuilds() {
    return closure_32;
  }
  getDisambiguatedEmojiContext(guildId) {
    loadSavedEmojis();
    return EmojiDisambiguations.get(guildId);
  }
  getSearchResultsOrder(locked, query, count, intention) {
    let closure_2;
    let closure_0 = intention;
    let formatted = query.toLowerCase();
    obj = formatted(4874);
    const escapeResult = obj.escape(formatted);
    let orderByResult = locked;
    const tmp2 = formatted;
    if (locked.length > 0) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      let str = "^";
      const self = this;
      const self2 = this;
      const regExp = new RegExp("^" + escapeResult, "i");
      const _RegExp2 = RegExp;
      const _HermesInternal2 = HermesInternal;
      const self3 = this;
      const self4 = this;
      const regExp1 = new RegExp("(^|_|[A-Z])" + escapeResult + "s?([A-Z]|_|$)");
      const test = regExp1.test;
      dependencyMap = test.bind(regExp1);
      const test2 = regExp.test;
      let closure_3 = test2.bind(regExp);
      items = [
        (uniqueName) => {
            let str;
            if (null != uniqueName.uniqueName) {
              str = uniqueName.names[0];
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
                let num3;
                let score;
                formatted = str.toLowerCase();
                let num2 = 0;
                if (formatted === formatted) {
                  num2 = 4;
                }
                if (closure_2(formatted)) {
                  num3 = 2;
                } else {
                  num3 = 0;
                }
                let num4 = 0;
                if (closure_3(str)) {
                  num4 = 1;
                }
                if (intention === constants.REACTION) {
                  score = importDefaultResult31.getScore(id);
                } else {
                  score = importDefaultResult21.getScore(id);
                }
                const sum = 1 + num2 + num3 + num4;
                let result = sum;
                if (null != score) {
                  const _Math = Math;
                  result = sum * Math.max(1, score / 100);
                }
                num = result;
              }
            }
            return num;
          },
        (names) => {
            let name;
            if (null != names.names) {
              name = names.names[0];
            } else {
              name = names.name;
            }
            return name;
          }
      ];
      const tmp2Result = tmp2(12);
      orderByResult = tmp2Result.orderBy(locked, items, ["desc", "asc"]);
    }
    let substr = orderByResult;
    if (count > 0) {
      substr = orderByResult.slice(0, count);
    }
    return substr;
  }
  searchWithoutFetchingLatest(channel) {
    let bypassPremiumEmojiEntitlement;
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
    ({ matchComparator, showOnlyUnicode: _slicedToArray, bypassPremiumEmojiEntitlement: _asyncToGenerator } = channel);
    let regExp;
    loadSavedEmojis();
    const formatted = query.toLowerCase();
    const replaced = formatted.replaceAll(/[ _]/g, "");
    intention(flag[30]);
    if (null == matchComparator) {
      let tmp5 = globalThis;
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const str = "i";
      const self2 = this;
      regExp = new RegExp("" + tmp4, "i");
      matchComparator = function c(str) {
        return regExp.test(str.replaceAll("_", ""));
      };
    }
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const value = EmojiDisambiguations.get(guildId);
    const nameMatchesChainResult = value.nameMatchesChain(matchComparator);
    const reduced = nameMatchesChainResult.reduce((locked, emoji) => {
      obj = EmojiUtilsDefault;
      obj2 = { emoji, channel, intention, forceIncludeExternalGuilds: flag, bypassPremiumEmojiEntitlement: _asyncToGenerator };
      const emojiUnavailableReason = obj.getEmojiUnavailableReason(obj2);
      if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
        if (!_slicedToArray) {
          locked = locked.locked;
          locked.push(emoji);
        }
        return locked;
      }
      let tmp5 = null != emojiUnavailableReason;
      if (!tmp5) {
        tmp5 = _slicedToArray && emoji.type !== EmojiTypes.EmojiTypes.UNICODE;
        const tmp6 = _slicedToArray && emoji.type !== EmojiTypes.EmojiTypes.UNICODE;
      }
      if (!tmp5) {
        const unlocked = locked.unlocked;
        unlocked.push(emoji);
      }
    }, { unlocked: [], locked: [] });
    obj = { unlocked: this.getSearchResultsOrder(reduced.unlocked, query, count, intention), locked: this.getSearchResultsOrder(reduced.locked, query, 0, intention) };
    return obj;
  }
  getUsableCustomEmojiById(id1) {
    loadSavedEmojis();
    const tmp2 = getEmojiToGroupId()[id1];
    let tmp3;
    if (null != tmp2) {
      let usableEmoji;
      if (closure_32[tmp2] != null) {
        usableEmoji = obj.getUsableEmoji(id1);
      }
      tmp3 = usableEmoji;
    }
    return tmp3;
  }
  getCustomEmojiById(emojiId) {
    loadSavedEmojis();
    const tmp2 = getEmojiToGroupId()[emojiId];
    let tmp3;
    if (null != tmp2) {
      let emoji;
      if (closure_32[tmp2] != null) {
        emoji = obj.getEmoji(emojiId);
      }
      tmp3 = emoji;
    }
    return tmp3;
  }
  getTopEmoji(guildId) {
    let topEmojiWithoutFetchingLatest;
    if (null == guildId) {
      topEmojiWithoutFetchingLatest = closure_26;
    } else {
      loadSavedEmojis();
      const value = EmojiDisambiguations.get(guildId);
      topEmojiWithoutFetchingLatest = value.getTopEmojiWithoutFetchingLatest(guildId);
    }
    return topEmojiWithoutFetchingLatest;
  }
  getNewlyAddedEmoji(guildId) {
    let newlyAddedEmojiForGuild;
    if (null == guildId) {
      newlyAddedEmojiForGuild = closure_26;
    } else {
      loadSavedEmojis();
      const value = EmojiDisambiguations.get(guildId);
      newlyAddedEmojiForGuild = value.getNewlyAddedEmojiForGuild(guildId);
    }
    return newlyAddedEmojiForGuild;
  }
  getTopEmojisMetadata(guildId) {
    return map.get(guildId);
  }
  hasUsableEmojiInAnyGuild() {
    loadSavedEmojis();
    obj = SnowflakeUtils;
    const keys = obj.keys(closure_32);
    return keys.some((item) => {
      obj = closure_1_32[item];
      return obj.hasUsableEmoji();
    });
  }
  hasFavoriteEmojis(arg0) {
    const value = EmojiDisambiguations.get(arg0);
    return null != value && value.favoriteEmojisWithoutFetchingLatest.length > 0;
  }
}
const prototype2 = EmojiStore.prototype;
Object.defineProperty(prototype2, "loadState", {
  get: function loadState() {
    return Loaded;
  },
  set: undefined
});
Object.defineProperty(prototype2, "expandedSectionsByGuildIds", {
  get: function expandedSectionsByGuildIds() {
    return obj.expandedSectionsByGuildIds;
  },
  set: undefined
});
Object.defineProperty(prototype2, "categories", {
  get: function categories() {
    return items;
  },
  set: undefined
});
Object.defineProperty(prototype2, "diversitySurrogate", {
  get: function diversitySurrogate() {
    obj = require("UnicodeEmojis");
    let str = obj.getDefaultDiversitySurrogate();
    if (str == null) {
      str = "";
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(prototype2, "emojiFrecencyWithoutFetchingLatest", {
  get: function emojiFrecencyWithoutFetchingLatest() {
    return importDefaultResult21;
  },
  set: undefined
});
Object.defineProperty(prototype2, "emojiReactionFrecencyWithoutFetchingLatest", {
  get: function emojiReactionFrecencyWithoutFetchingLatest() {
    return importDefaultResult31;
  },
  set: undefined
});
EmojiStore.displayName = "EmojiStore";
EmojiStore.persistKey = "EmojiStoreV2";
const items2 = [
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    return obj;
  }
];
EmojiStore.migrations = items2;
let obj7 = {
  LOGOUT: function handleLogout() {
    obj.pendingUsages = [];
    obj.emojiReactionPendingUsages = [];
  },
  BACKGROUND_SYNC: function handleBackgroundSync() {
    closure_32 = {};
    c33 = {};
    EmojiDisambiguations.reset();
    map.clear();
    Loaded = obj2.Unloaded;
  },
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    deleteEverything();
    guilds = guilds.guilds;
    for (const item10009 of guilds) {
      let tmp3 = updateGuildEmoji(item10009.id);
      continue;
    }
    if (0 === guilds.unavailableGuilds.length) {
      let Unloaded;
      const guilds2 = guilds.guilds;
      if (guilds2.every((emojis) => "full_sync" === emojis.emojis.op)) {
        Unloaded = obj2.Loaded;
      }
      Loaded = Unloaded;
      rebuildEmojis();
    }
    Unloaded = obj2.Unloaded;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(emojis) {
    closure_32 = {};
    c33 = {};
    EmojiDisambiguations.reset();
    map.clear();
    Loaded = obj2.Unloaded;
    for (const key10014 in emojis.emojis) {
      let tmp10 = updateGuildEmoji(key10014);
      continue;
    }
    Loaded = obj2.Loaded;
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj2.Loaded) {
      importDefaultResult21.compute();
      importDefaultResult31.compute();
    }
  },
  CACHED_EMOJIS_LOADED: function handleCachedEmojisLoaded(arg0) {
    const tmp = arg0.emojis[Symbol.iterator]();
    while (tmp !== undefined) {
      let first = _slicedToArray(tmp2, 1)[0];
      let tmp5 = first;
      if (GuildMembershipStore.isMember(first)) {
        let tmp9 = updateGuildEmoji(tmp5);
      }
      continue;
    }
    rebuildEmojis();
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    const id = guildId.user.id;
    const currentUser = UserStore.getCurrentUser();
    let id1;
    if (currentUser != null) {
      id1 = currentUser.id;
    }
    if (id === id1) {
      updateGuildEmoji(guildId);
      c33 = null;
      EmojiDisambiguations.reset();
      if (Loaded === obj2.Loaded) {
        importDefaultResult21.compute();
        importDefaultResult31.compute();
      }
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateGuildEmoji(guild.guild.id);
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj2.Loaded) {
      importDefaultResult21.compute();
      importDefaultResult31.compute();
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    updateGuildEmoji(guild.guild.id);
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj2.Loaded) {
      importDefaultResult21.compute();
      importDefaultResult31.compute();
    }
  },
  GUILD_EMOJIS_UPDATE: function handleGuildEmojiUpdated(guildId) {
    updateGuildEmoji(guildId.guildId);
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj2.Loaded) {
      importDefaultResult21.compute();
      importDefaultResult31.compute();
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const id = guild.id;
    if (null != closure_32[id]) {
      delete closure_32[id];
    }
    map.delete(guild.id);
    c33 = null;
    EmojiDisambiguations.reset();
    if (Loaded === obj2.Loaded) {
      importDefaultResult21.compute();
      importDefaultResult31.compute();
    }
  },
  MESSAGE_REACTION_ADD: function handleAddReaction(optimistic) {
    function trackReactionUsage(items) {
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
          let trackResult = importDefaultResult31.track(tmp5);
          let prop = closure_1_23.emojiReactionPendingUsages;
          obj = { key: tmp5, timestamp: Date.now() };
          let _Date = Date;
          let push = prop.push;
          let arr = push(obj);
        }
        continue;
      }
      const tmp12 = tmp11 && closure_1_30 === Loaded.Loaded;
      if (tmp12) {
        importDefaultResult31.compute();
      }
      return items.length > 0;
    }
    if (optimistic.optimistic) {
      if (null != optimistic.emoji.id) {
        let emoji;
        if ("0" !== optimistic.emoji.id) {
          emoji = optimistic.emoji;
        }
        if (null == emoji) {
          return false;
        } else {
          items = [emoji];
          let tmp5 = trackReactionUsage(items);
          const items1 = [emoji];
          let tmp7 = trackUsage(items1);
        }
      }
      let tmp4 = require("UnicodeEmojis");
      const getByName = tmp4.getByName;
      obj = require("UnicodeEmojis");
      emoji = getByName(obj.convertSurrogateToName(optimistic.emoji.name, false));
    } else {
      return false;
    }
  },
  EMOJI_TRACK_USAGE: function handleTrackUsage(emojiUsed) {
    trackUsage(emojiUsed.emojiUsed);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    const type = settings.settings.type;
    const wasSaved = settings.wasSaved;
    obj = EmojiTermsDefault;
    obj.setEmojiLocale(LocaleStore.locale);
    if (type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (wasSaved) {
        obj.pendingUsages = [];
        obj.emojiReactionPendingUsages = [];
      }
    }
    return false;
  },
  GUILD_ROLE_CREATE: handleRoleUpdate,
  GUILD_ROLE_UPDATE: handleRoleUpdate,
  TOP_EMOJIS_FETCH_SUCCESS: function handleTopEmojisLoaded(topEmojisMetadata) {
    let addResult;
    topEmojisMetadata = topEmojisMetadata.topEmojisMetadata;
    const guildId = topEmojisMetadata.guildId;
    obj = { emojiIds: topEmojisMetadata.map((emojiId) => emojiId.emojiId), topEmojisTTL: addResult.valueOf() };
    set = map.set;
    const tmp = _modDef4461;
    const tmpResult = tmp(_modDef4461());
    addResult = tmpResult.add(1, "days");
    const result = set(guildId, obj);
  },
  TOGGLE_GUILD_EXPANDED_STATE: function toggleGuildExpandedState(guildId) {
    guildId = guildId.guildId;
    set = new Set(obj.expandedSectionsByGuildIds);
    const expandedSectionsByGuildIds = obj.expandedSectionsByGuildIds;
    if (expandedSectionsByGuildIds.has(guildId)) {
      set.delete(guildId);
    } else {
      set.add(guildId);
    }
    obj = { expandedSectionsByGuildIds: set };
    const merged = Object.assign(obj);
  }
};
const emojiStore = new EmojiStore(DispatcherDefault, obj7);
let result = size.fileFinishedImporting("modules/emojis/EmojiStore.tsx");

export default emojiStore;
export const LoadState = obj2;
export { EmojiDisambiguations };