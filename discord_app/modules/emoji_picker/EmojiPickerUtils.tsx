// === Module 9430: EmojiPickerUtils ===

// Module 9430 (EmojiPickerUtils)
import DurationsDefault from "Durations" /* 1102 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import v1 from "v1" /* 1279 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4764 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4768 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5107 */;
import ExpressionPickerGridStores from "ExpressionPickerGridStores" /* 9431 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5987 */;
import GuildStore from "GuildStore" /* 2087 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
const EmojiPickerConstants = fn(5991);
({ EmojiCategories: closure_8, EmojiCategoryTypes: closure_9, EmojiSubCategory: c10 } = EmojiPickerConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_11, AnalyticsPages: closure_12, AnalyticsSections: map1, AutoCompleteResultTypes: closure_14, SearchTypes: closure_15 } = Constants);
const EmojiConstants = fn(1393);
({ isExternalEmojiAllowedForIntention: closure_16, EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = EmojiConstants);
const ExpressionPickerViewType = fn(1241).ExpressionPickerViewType;
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const re21 = /-/g;
const apply = fn(12);
fn(558);
const throttleResult = apply.throttle((emojiSuggestions) => {
  emojiSuggestions = emojiSuggestions.emojiSuggestions;
  const obj2 = { suggestion_type: constants6.EMOJI, suggestion_quantity: emojiSuggestions.results.length, custom_quantity: null, load_id: emojiSuggestions.loadId, location: emojiSuggestions.analyticsLocation };
  const results = emojiSuggestions.results;
  obj2.custom_quantity = results.filter((emoji) => null != emoji.emoji.id).length;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants4.AUTO_SUGGEST_DISPLAYED, obj2);
}, DurationsDefault.Millis.HALF_SECOND, { leading: false, trailing: true });
let ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFrequentlyUsedEmojis(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function u() {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
      return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(tmp7, tmp9);
}) : (function useFrequentlyUsedEmojis(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
});
let closure_22 = tmp7;
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFrequentlyUsedReactionEmojis(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function u() {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
      return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(tmp7, tmp9);
}) : (function useFrequentlyUsedReactionEmojis(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
});
let closure_23 = tmp8;
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoriteEmojis(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function u() {
      return EmojiStore.getDisambiguatedEmojiContext(closure_0).favoriteEmojisWithoutFetchingLatest;
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(tmp7, tmp9);
}) : (function useFavoriteEmojis(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  return require("initialize").useStateFromStoresArray(items, () => EmojiStore.getDisambiguatedEmojiContext(closure_0).favoriteEmojisWithoutFetchingLatest);
});
let closure_24 = tmp9;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiSearchResults(arg0, channel, intention, showOnlyUnicode) {
  _require = arg0;
  dependencyMap = intention;
  noop = showOnlyUnicode;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const FrecencyUserSettingsActionCreators = closure_0(intention[27]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] !== intention) {
    const tmp9 = closure_16(intention);
    cResult[2] = intention;
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  const includeExternalGuilds = tmp7;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [includeExternalGuilds];
    cResult[4] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === channel) {
    if (cResult[6] === tmp7) {
      if (cResult[7] === intention) {
        if (cResult[8] === arg0) {
          if (cResult[9] === showOnlyUnicode) {
            let tmp12 = cResult[10];
            let tmp13 = cResult[11];
          }
          const tmpResult = tmp(504);
          return tmpResult.useStateFromStores(tmp10, tmp12, tmp13, tmp(504).statesWillNeverBeEqual);
        }
      }
    }
  }
  const fn2 = function j() {
    const replaced = closure_0.replace(/^:/, "").replace(/:$/, "");
    let result = null;
    if ("" !== replaced) {
      const obj = { channel, query: replaced, count: 0, intention, includeExternalGuilds, showOnlyUnicode };
      result = EmojiStore.searchWithoutFetchingLatest(obj);
    }
    return result;
  };
  const items2 = [arg0, channel, intention, tmp7, showOnlyUnicode];
  cResult[5] = channel;
  cResult[6] = tmp7;
  cResult[7] = intention;
  cResult[8] = arg0;
  cResult[9] = showOnlyUnicode;
  cResult[10] = fn2;
  cResult[11] = items2;
  tmp13 = items2;
  tmp12 = fn2;
  let obj = require("c");
}) : (function useEmojiSearchResults(arg0, channel, intention, showOnlyUnicode) {
  _require = arg0;
  dependencyMap = intention;
  noop = showOnlyUnicode;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(intention[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const tmp2 = closure_16(intention);
  const includeExternalGuilds = tmp2;
  const items = [includeExternalGuilds];
  const items1 = [arg0, channel, intention, tmp2, showOnlyUnicode];
  return require("initialize").useStateFromStores(items, () => {
    const replaced = closure_0.replace(/^:/, "").replace(/:$/, "");
    let result = null;
    if ("" !== replaced) {
      const obj = { channel, query: replaced, count: 0, intention, includeExternalGuilds, showOnlyUnicode };
      result = EmojiStore.searchWithoutFetchingLatest(obj);
    }
    return result;
  }, items1, require("initialize").statesWillNeverBeEqual);
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFavoriteEmoji(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === arg1) {
    if (cResult[4] === arg0) {
      let tmp9 = cResult[5];
    }
    return tmp(504).useStateFromStores(tmp7, tmp9);
  }
  class E {
    constructor() {
      result = null != closure_1;
      if (result) {
        tmp3 = closure_4;
        tmp4 = closure_0;
        disambiguatedEmojiContext = closure_4.getDisambiguatedEmojiContext(closure_0);
        result = disambiguatedEmojiContext.isFavoriteEmojiWithoutFetchingLatest(tmp);
      }
      return result;
    }
  }
  cResult[3] = arg1;
  cResult[4] = arg0;
  cResult[5] = E;
  tmp9 = E;
  const obj = require("c");
  tmp = _require;
}) : (function useIsFavoriteEmoji(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  return require("initialize").useStateFromStores(items, () => {
    let result = null != closure_1;
    if (result) {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
      result = disambiguatedEmojiContext.isFavoriteEmojiWithoutFetchingLatest(tmp);
    }
    return result;
  });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/EmojiPickerUtils.tsx");

export const initializeSearch = function initializeSearch(location) {
  const intention = location.intention;
  const replaced = v1.v4().replace(re21, "");
  const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
  EmojiPickerStore.setAnalyticsId(replaced);
  const str = v1.v4();
  if (constants8.REACTION === intention) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp3.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  AppAnalyticsUtilsDefault.trackWithMetadata(constants4.SEARCH_OPENED, { search_type: EMOJI, load_id: replaced, location: location.location });
};
export const useEmojiCategories = function useEmojiCategories(CHAT, channel) {
  _require = CHAT;
  importDefault = channel;
  let obj = cResult;
  if (cResult === undefined) {
    obj = {};
  }
  let guildId = obj.guildId;
  if (guildId === undefined) {
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    guildId = guildId1;
  }
  let flag = obj.shouldShowSoundmojiInEmojiPicker;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.bypassPremiumEmojiEntitlement;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const suggestedEmojis = obj.suggestedEmojis;
  const result = require("TopEmojisUtils").maybeFetchTopEmojisByGuild(guildId);
  const tmp4 = closure_16(CHAT);
  let flattenedGuildIds = tmp4;
  const tmp5 = closure_22(guildId);
  const currentUser = tmp5;
  let tmp6 = closure_23(guildId);
  constants = tmp6;
  let tmp7 = closure_24(guildId);
  constants2 = tmp7;
  const obj2 = require("TopEmojisUtils");
  ({ topEmojis, newlyAddedEmojis } = require("useTopAndNewlyAddedEmojis")(guildId, CHAT));
  const allEmojis = require("useEmojiHotrail")({ topEmojis, newlyAddedEmojis }).allEmojis;
  let tmp8 = require("useTopAndNewlyAddedEmojis")(guildId, CHAT);
  let items = [flag2];
  let items1 = [guildId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => EmojiStore.getDisambiguatedEmojiContext(guildId), items1);
  let obj3 = require("initialize");
  const items2 = [suggestedEmojis];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    guild = GuildStore.getGuild(guildId);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  });
  let obj4 = require("initialize");
  const items3 = [currentUser];
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => currentUser.getCurrentUser());
  const obj5 = require("initialize");
  const isPremiumResult = require("PremiumTypeUtils").isPremium(stateFromStores2);
  c13 = isPremiumResult;
  let obj6 = require("PremiumTypeUtils");
  const soundmojiEmojiPickerSectionExperiment = require("SoundmojiSendingExperiment").useSoundmojiEmojiPickerSectionExperiment({ location: "useEmojiCategories" });
  const items4 = [stateFromStores, channel, guildId, CHAT, isPremiumResult, allEmojis, stateFromStores1, tmp6, tmp5, tmp7, tmp4, soundmojiEmojiPickerSectionExperiment, flag, flag2];
  const memo = flag.useMemo(() => {
    function getEmojiUnavailableReasons(categoryEmojis) {
      return channel(guildId[20]).getEmojiUnavailableReasons({ categoryEmojis, channel, guildId: getEmojiUnavailableReasons, intention, bypassPremiumEmojiEntitlement });
    }
    CHAT = stateFromStores.getGroupedCustomEmoji();
    channel = [];
    let obj = { type: constants2.SOUNDMOJI, name: null, id: null, isNitroLocked: false };
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    let intl = CHAT(guildId[19]).intl;
    obj.name = intl.string(CHAT(guildId[19]).t.f0Ezmv);
    obj.id = constants.SOUNDMOJI;
    (function addCustomEmojiCategory(flattenedGuildIds, GUILD) {
      const iter = flattenedGuildIds[Symbol.iterator]();
      while (iter !== undefined) {
        guild = undefined;
        if (GUILD === constants2.GUILD) {
          guild = GuildStore.getGuild(tmp2);
        }
        if (null != guild) {
          value = intention.get(guild.id);
          let arr = value;
          if (null != value) {
            if (0 !== arr.length) {
              let tmp32 = getEmojiUnavailableReasons(arr);
              ({ emojisDisabled, emojisPremiumLockedCount } = tmp32);
              if (0 !== tmp32.emojisUnfiltered.length) {
                let hiddenEmojiIds = EmojiStore.getHiddenEmojiIds(guild.id);
                let tmp16 = null;
                if (GUILD === constants2.GUILD) {
                  let obj = { type: constants2.GUILD, guild: null, isNitroLocked: null, emojis: null, emojisDisabled: null, emojisHidden: null };
                  obj.guild = guild;
                  let tmp10 = !c13;
                  if (!c13) {
                    tmp10 = tmp33;
                  }
                  if (tmp10) {
                    tmp10 = emojisPremiumLockedCount === arr.length;
                  }
                  obj.isNitroLocked = tmp10;
                  obj.emojis = arr;
                  obj.emojisDisabled = emojisDisabled;
                  obj.emojisHidden = hiddenEmojiIds;
                  tmp16 = obj;
                }
                if (null != tmp16) {
                  if (guild.id === guildId) {
                    let arr3 = channel.unshift(tmp16);
                  } else {
                    let arr4 = channel.push(tmp16);
                  }
                }
              }
            }
          }
        }
        continue;
      }
      const nextResult = iter.next();
    })(flattenedGuildIds, constants2.GUILD);
    if (soundmojiEmojiPickerSectionExperiment) {
      if (flag) {
        let items = [obj];
      }
      return tmp3((arr, id) => {
        if (id === constants.TOP_GUILD_EMOJI) {
          const obj3 = { categoryEmojis: allEmojis, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const emojiUnavailableReasons = EmojiUtilsDefault.getEmojiUnavailableReasons(obj3);
          const emojisUnfiltered = emojiUnavailableReasons.emojisUnfiltered;
          if (null != emojisUnfiltered) {
            if (0 !== emojisUnfiltered.length) {
              const obj4 = { type: constants2.TOP_GUILD_EMOJI, id, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
              const intl3 = util.intl;
              const obj6 = { guildName: stateFromStores1 };
              obj4.name = intl3.formatToPlainString(util.t.W6Wi1X, obj6);
              obj4.emojis = emojisUnfiltered;
              obj4.emojisDisabled = tmp49;
              arr.push(obj4);
            }
          }
          return arr;
        } else if (id === constants.RECENT) {
          const items = [, ];
          ({ REACTION: arr4[0], DEFAULT_REACT_EMOJI: arr4[1] } = constants8);
          const tmp28 = items.includes(intention) ? closure_8 : closure_7;
          const obj7 = { categoryEmojis: tmp28, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const emojiUnavailableReasons1 = EmojiUtilsDefault.getEmojiUnavailableReasons(obj7);
          const emojisUnfiltered1 = emojiUnavailableReasons1.emojisUnfiltered;
          if (null != emojisUnfiltered1) {
            if (0 !== emojisUnfiltered1.length) {
              const obj9 = { type: constants2.RECENT, id, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
              const intl2 = util.intl;
              obj9.name = intl2.string(util.t["5TvaSm"]);
              obj9.emojis = emojisUnfiltered1;
              obj9.emojisDisabled = tmp36;
              arr.push(obj9);
            }
          }
          return arr;
        } else if (id === constants.FAVORITES) {
          const obj10 = { categoryEmojis, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const emojiUnavailableReasons2 = EmojiUtilsDefault.getEmojiUnavailableReasons(obj10);
          const emojisUnfiltered2 = emojiUnavailableReasons2.emojisUnfiltered;
          if (null != emojisUnfiltered2) {
            if (0 !== emojisUnfiltered2.length) {
              const obj11 = { type: constants2.FAVORITES, id, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
              const intl = util.intl;
              obj11.name = intl.string(util.t.y3LQCG);
              obj11.emojis = emojisUnfiltered2;
              obj11.emojisDisabled = tmp21;
              arr.push(obj11);
            }
          }
          return arr;
        } else if (id === constants.CUSTOM) {
          let found = channel;
          if (!closure_6) {
            found = channel.filter((type) => {
              if (type.type === categoryEmojis.GUILD) {
                flag = type.guild.id === getEmojiUnavailableReasons;
              } else {
                type = type.type;
                flag = false;
              }
              return flag;
            });
          }
          const push = arr.push;
          const items1 = [];
          HermesBuiltin.arraySpread(found, 0);
          HermesBuiltin.apply(items1, arr);
        } else {
          const obj = { type: constants2.UNICODE, id, name: id, isNitroLocked: false };
          arr.push(obj);
        }
        return arr;
      }, []);
    }
  }, items4);
  const items5 = [CHAT, suggestedEmojis];
  const memo1 = flag.useMemo(() => {
    if (closure_0 === constants8.CHAT) {
      if (null != suggestedEmojis) {
        ({ unlocked, locked } = suggestedEmojis);
        if (0 === unlocked.length) {
          if (0 === locked.length) {
            return null;
          }
        }
        const _Set = Set;
        const set = new Set();
        for (const item10015 of locked) {
          if (null != item10015.id) {
            let addResult = set.add(tmp7.id);
          }
          continue;
        }
        const obj = { type: constants2.SUGGESTED, id: constants.SUGGESTED, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
        const intl = util.intl;
        obj.name = intl.string(util.t.YUcvdQ);
        const items = [];
        HermesBuiltin.arraySpread(locked, HermesBuiltin.arraySpread(unlocked, 0));
        obj.emojis = items;
        obj.emojisDisabled = set;
        return obj;
      }
    }
    return null;
  }, items5);
  let tmp16 = memo;
  if (null != memo1) {
    const items6 = [memo1];
    HermesBuiltin.arraySpread(memo, 1);
    tmp16 = items6;
  }
  return tmp16;
};
export const getUnicodeEmojiCategories = function getUnicodeEmojiCategories() {
  const categories = UnicodeEmojisDefault.getCategories();
  return categories.map((id) => ({ type: constants.UNICODE, id, name: id, isNitroLocked: false }));
};
export const trackPremiumSettingsPaneOpened = function trackPremiumSettingsPaneOpened(getGuildId) {
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  const obj2 = { location_page: null != guildId ? __initData.GUILD_CHANNEL : __initData.DM_CHANNEL, location_section: null };
  if (null != getGuildId) {
    let CUSTOM_STATUS_MODAL = constants5.EMOJI_PICKER_POPOUT;
  } else {
    CUSTOM_STATUS_MODAL = constants5.CUSTOM_STATUS_MODAL;
  }
  obj2.location_section = CUSTOM_STATUS_MODAL;
  AnalyticsUtilsDefault.track(constants4.PREMIUM_PROMOTION_OPENED, obj2);
  const tmp2 = null != guildId;
};
export const trackEmojiSearchStart = function trackEmojiSearchStart(location, arg1) {
  if (constants8.REACTION === arg1) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp2.AUTO_SUGGESTION === arg1) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj2 = { search_type: EMOJI, location };
  const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
  const analyticsId = EmojiPickerStore.getAnalyticsId();
  if (null != analyticsId) {
    if ("" !== analyticsId) {
      const obj3 = { load_id: analyticsId };
      let obj4 = obj3;
    }
    const merged = Object.assign(obj4);
    obj.trackWithMetadata(constants4.SEARCH_STARTED, obj2);
  }
  obj4 = {};
  obj = AppAnalyticsUtilsDefault;
};
export const trackEmojiSearchResultsViewed = function trackEmojiSearchResultsViewed(arg0) {
  ({ intention, loadId } = arg0);
  ({ totalResults, numEmojiLocked, location: _location, searchQuery } = arg0);
  if (constants8.REACTION === intention) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj2 = { search_type: EMOJI, total_results: totalResults, num_results_locked: numEmojiLocked, query: searchQuery, location: _location };
  if (null != loadId) {
    if ("" !== loadId) {
      const obj3 = { load_id: loadId };
      let obj4 = obj3;
    }
    const merged = Object.assign(obj4);
    obj.trackWithMetadata(constants4.SEARCH_RESULT_VIEWED, obj2);
  }
  obj4 = {};
  obj = AppAnalyticsUtilsDefault;
};
export const trackEmojiSearchSelect = function trackEmojiSearchSelect(tmp2Result2) {
  ({ emoji, emojiSuggestions, intention } = tmp2Result2);
  let name = emoji.uniqueName;
  ({ searchQuery, isLocked, location: _location, index, messageId } = tmp2Result2);
  if (name == null) {
    name = emoji.name;
  }
  if (constants8.REACTION === intention) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj2 = { search_type: EMOJI, location: _location, expression_guild_id: emoji.guildId, emoji_id: emoji.id, emoji_name: name, is_custom: null != emoji.id, is_animated: emoji.animated, is_locked: isLocked, query: searchQuery, index_num: index };
  let loadId;
  if (emojiSuggestions != null) {
    loadId = emojiSuggestions.loadId;
  }
  if (loadId == null) {
    const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
    loadId = EmojiPickerStore.getAnalyticsId();
  }
  if (null != loadId) {
    if ("" !== loadId) {
      const obj3 = { load_id: loadId };
      let obj4 = obj3;
    }
    const merged = Object.assign(obj4);
    let length;
    if (emojiSuggestions != null) {
      const results = emojiSuggestions.results;
      if (results != null) {
        length = results.length;
      }
    }
    obj2.total_results = length;
    let found;
    if (emojiSuggestions != null) {
      const results1 = emojiSuggestions.results;
      if (results1 != null) {
        const mapped = results1.map((emoji) => emoji.emoji.id);
        found = mapped.filter((item) => null != item);
      }
    }
    obj2.emoji_suggestion_ids = found;
    obj2.message_id = messageId;
    obj.trackWithMetadata(constants4.SEARCH_RESULT_SELECTED, obj2);
  }
  obj4 = {};
  obj = AppAnalyticsUtilsDefault;
};
export const trackEmojiSearchEmpty = function trackEmojiSearchEmpty(arg0) {
  ({ intention, loadId } = arg0);
  ({ location: _location, searchQuery } = arg0);
  if (constants8.REACTION === intention) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj2 = { search_type: EMOJI, query: searchQuery, location: _location };
  if (null != loadId) {
    if ("" !== loadId) {
      const obj3 = { load_id: loadId };
      let obj4 = obj3;
    }
    const merged = Object.assign(obj4);
    obj.trackWithMetadata(constants4.SEARCH_RESULT_EMPTY, obj2);
  }
  obj4 = {};
  obj = AppAnalyticsUtilsDefault;
};
export const trackEmojiFocus = function trackEmojiFocus(arg0) {
  ({ emoji, subCategory } = arg0);
  ({ position, newlyAddedHighlight } = arg0);
  let str;
  if (subCategory != null) {
    str = subCategory.toString();
  }
  AppAnalyticsUtilsDefault.trackWithMetadata(constants4.EXPRESSION_PICKER_EXPRESSION_FOCUS, { expression_section: str, newly_added_highlight: newlyAddedHighlight, emoji_id: emoji.id, emoji_name: emoji.name, emoji_animated: emoji.animated, emoji_position: position });
};
export const trackEmojiSelect = function trackEmojiSelect(arg0) {
  ({ emoji, pickerIntention, subCategory } = arg0);
  ({ location: _location, category } = arg0);
  if (subCategory === undefined) {
    subCategory = constants3.NONE;
  }
  ({ isBurstReaction, lockedReason } = arg0);
  if (constants8.REACTION !== pickerIntention) {
    if (tmp6.STATUS === pickerIntention) {
      let EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
    } else {
      EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
    }
    let name = emoji.uniqueName;
    if (name == null) {
      name = emoji.name;
    }
    if (null != lockedReason) {
      let EXPRESSION_PICKER_EXPRESSION_SELECTED = constants4.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED;
    } else {
      EXPRESSION_PICKER_EXPRESSION_SELECTED = constants4.EXPRESSION_PICKER_EXPRESSION_SELECTED;
    }
    const obj2 = { type: EMOJI_PICKER_EMOJI_CLICKED, location: _location, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated, expression_picker_section: category, expression_section: null, emoji_position: null, newly_added_highlight: null, is_burst: null, message_id: null };
    let str;
    if (subCategory != null) {
      str = subCategory.toString();
    }
    obj2.expression_section = str;
    obj2.emoji_position = tmp2;
    obj2.newly_added_highlight = tmp3;
    obj2.is_burst = isBurstReaction;
    obj2.message_id = tmp4;
    let tmp17 = null != lockedReason;
    if (tmp17) {
      const obj3 = { locked_reason: constants[lockedReason], visible_row_index: tmp5 };
      tmp17 = obj3;
    }
    const merged = Object.assign(tmp17);
    AppAnalyticsUtilsDefault.trackWithMetadata(EXPRESSION_PICKER_EXPRESSION_SELECTED, obj2);
  }
};
export const trackEmojiFavorited = function trackEmojiFavorited(emoji) {
  emoji = emoji.emoji;
  let name = emoji.uniqueName;
  if (name == null) {
    name = emoji.name;
  }
  AppAnalyticsUtilsDefault.trackWithMetadata(constants4.EXPRESSION_FAVORITED, { location: emoji.location, expression_type: ExpressionPickerViewType.EMOJI, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated });
};
export const throttledTrackEmojiAutoSuggestDisplayed = throttleResult;
export const getAriaIdForEmojiCategory = function getAriaIdForEmojiCategory(type, name) {
  if (type.type === constants2.GUILD) {
    let str = "";
    if (null != name) {
      str = name.name;
    }
    let id = str;
  } else {
    id = type.id;
  }
  return id;
};
export const getStringForEmojiCategory = function getStringForEmojiCategory(PREMIUM_UPSELL, guildName) {
  if (constants.TOP_GUILD_EMOJI === PREMIUM_UPSELL) {
    const intl13 = util.intl;
    const obj = { guildName };
    return intl13.formatToPlainString(util.t.W6Wi1X, obj);
  } else if (constants.RECENT === PREMIUM_UPSELL) {
    const intl12 = util.intl;
    return intl12.string(util.t["5TvaSm"]);
  } else if (constants.FAVORITES === PREMIUM_UPSELL) {
    const intl11 = util.intl;
    return intl11.string(util.t.y3LQCG);
  } else if (constants.ACTIVITY === PREMIUM_UPSELL) {
    const intl10 = util.intl;
    return intl10.string(util.t.O783tR);
  } else if (constants.FLAGS === PREMIUM_UPSELL) {
    const intl9 = util.intl;
    return intl9.string(util.t.vvaizu);
  } else if (constants.FOOD === PREMIUM_UPSELL) {
    const intl8 = util.intl;
    return intl8.string(util.t.ldm9aY);
  } else if (constants.NATURE === PREMIUM_UPSELL) {
    const intl7 = util.intl;
    return intl7.string(util.t.egIBDH);
  } else if (constants.OBJECTS === PREMIUM_UPSELL) {
    const intl6 = util.intl;
    return intl6.string(util.t.gWm7Mk);
  } else if (constants.PEOPLE === PREMIUM_UPSELL) {
    const intl5 = util.intl;
    return intl5.string(util.t.GX594D);
  } else if (constants.SYMBOLS === PREMIUM_UPSELL) {
    const intl4 = util.intl;
    return intl4.string(util.t.QXMYAb);
  } else if (constants.TRAVEL === PREMIUM_UPSELL) {
    const intl3 = util.intl;
    return intl3.string(util.t.w33hIP);
  } else if (constants.PREMIUM_UPSELL === PREMIUM_UPSELL) {
    const intl2 = util.intl;
    return intl2.string(util.t.pAF6xE);
  } else if (constants.SOUNDMOJI === PREMIUM_UPSELL) {
    const intl = util.intl;
    return intl.string(util.t.f0Ezmv);
  } else {
    let tmp3 = guildName;
    if (guildName == null) {
      tmp3 = PREMIUM_UPSELL;
    }
    return tmp3;
  }
};
export const useEmojiSearchResults = tmp6;
export const useFrequentlyUsedEmojis = tmp7;
export const useFrequentlyUsedReactionEmojis = tmp8;
export const useFavoriteEmojis = tmp9;
export const useIsFavoriteEmoji = tmp10;
export const useEmojiInPriorityOrder = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiInPriorityOrder(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function u() {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
      return disambiguatedEmojiContext.getEmojiInPriorityOrderWithoutFetchingLatest();
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(tmp7, tmp9);
}) : (function useEmojiInPriorityOrder(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getEmojiInPriorityOrderWithoutFetchingLatest();
  });
});
export const getEmojiSubCategory = function getEmojiSubCategory(arr, arr2, arg2) {
  if (null == arg2) {
    return constants3.NONE;
  } else {
    const mapped = arr.map((id) => {
      let name = id.id;
      if (name == null) {
        name = id.uniqueName;
      }
      if (name == null) {
        name = id.name;
      }
      return name;
    });
    const mapped1 = arr2.map((id) => id.id);
    if (mapped.includes(arg2)) {
      let TOP_GUILD_EMOJI = constants3.TOP_GUILD_EMOJI;
    } else {
      TOP_GUILD_EMOJI = mapped1.includes(arg2) ? constants3.NEWLY_ADDED_EMOJI : constants3.NONE;
    }
    return TOP_GUILD_EMOJI;
  }
};
export const getSearchPlaceholder = function getSearchPlaceholder(pickerIntention, currentUser) {
  if (pickerIntention === constants8.REACTION) {
    const intl2 = util.intl;
    const string = intl2.string;
    let t = util.t;
    if (currentUser) {
      t = t["h7ES+n"];
      let stringResult = string(t);
    } else {
      stringResult = string(t["6any2A"]);
    }
  } else {
    const intl = util.intl;
    return intl.string(util.t.KgK5qg);
  }
};