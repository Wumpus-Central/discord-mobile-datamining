// === Module 9870: EmojiPickerUtils ===

// Module 9870 (EmojiPickerUtils)
import DurationsDefault from "Durations" /* 1102 */;
import intl14 from "intl" /* 1126 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import v1 from "v1" /* 1266 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4523 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4527 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import ExpressionPickerGridStores from "ExpressionPickerGridStores" /* 9871 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5638 */;
import GuildStore from "GuildStore" /* 2074 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import UserStore from "UserStore" /* 1377 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5642 */;
import Constants from "Constants" /* 1085 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import module_12 from "module_12" /* 12 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, constants, constants2, dependencyMap, importDefault, includeExternalGuilds, set;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let unpackModuleId;
({ EmojiCategories: metroImportAll, EmojiCategoryTypes: c9, EmojiSubCategory: c10 } = EmojiPickerConstants);
({ AnalyticEvents: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1, AutoCompleteResultTypes: closure_14, SearchTypes: closure_15 } = Constants);
({ isExternalEmojiAllowedForIntention: closure_16, EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = EmojiConstants);
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const re21 = /-/g;
const throttleResult = module_12.throttle((emojiSuggestions) => {
  let results;
  emojiSuggestions = emojiSuggestions.emojiSuggestions;
  const analyticsLocation = emojiSuggestions.analyticsLocation;
  const obj = { suggestion_type: constants6.EMOJI, suggestion_quantity: emojiSuggestions.results.length, custom_quantity: results.filter((emoji) => null != emoji.emoji.id).length, load_id: emojiSuggestions.loadId, location: analyticsLocation };
  results = emojiSuggestions.results;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const AUTO_SUGGEST_DISPLAYED = unpackModuleId.AUTO_SUGGEST_DISPLAYED;
  AppAnalyticsUtilsDefault;
  trackWithMetadata(AUTO_SUGGEST_DISPLAYED, obj);
}, DurationsDefault.Millis.HALF_SECOND, { leading: false, trailing: true });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, channel, intention, showOnlyUnicode) => {
  let closure_0;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp7;
  _require = arg0;
  importDefault = channel;
  dependencyMap = intention;
  let obj = require("react");
  const cResult = obj.c(12);
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
  const effect = showOnlyUnicode.useEffect(tmp4, tmp5);
  if (cResult[2] !== intention) {
    const tmp9 = closure_16(intention);
    cResult[2] = intention;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  includeExternalGuilds = tmp7;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [includeExternalGuilds];
    cResult[4] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === channel) {
    if (cResult[6] === tmp7) {
      if (cResult[7] === intention) {
        if (cResult[8] === arg0) {
          let tmp12;
          let tmp13;
          if (cResult[9] === showOnlyUnicode) {
            tmp12 = cResult[10];
            tmp13 = cResult[11];
          }
          const tmpResult = require("get initialized");
          return tmpResult.useStateFromStores(tmp10, tmp12, tmp13, require("get initialized").statesWillNeverBeEqual);
        }
      }
    }
  }
  class I {
    constructor() {
      const str = closure_0.replace(/^:/, "");
      const replaced = str.replace(/:$/, "");
      let result = null;
      if ("" !== replaced) {
        const obj = { channel, query: replaced, count: 0, intention, includeExternalGuilds, showOnlyUnicode };
        result = EmojiStore.searchWithoutFetchingLatest(obj);
      }
      return result;
    }
  }
  const items2 = [arg0, channel, intention, tmp7, showOnlyUnicode];
  cResult[5] = channel;
  cResult[6] = tmp7;
  cResult[7] = intention;
  cResult[8] = arg0;
  cResult[9] = showOnlyUnicode;
  cResult[10] = I;
  cResult[11] = items2;
  tmp13 = items2;
  tmp12 = I;
}) : ((arg0, channel, intention, showOnlyUnicode) => {
  let closure_0;
  _require = arg0;
  dependencyMap = intention;
  const effect = showOnlyUnicode.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(intention[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const tmp2 = closure_16(intention);
  includeExternalGuilds = tmp2;
  let obj = require("get initialized");
  const items = [includeExternalGuilds];
  const items1 = [arg0, channel, intention, tmp2, showOnlyUnicode];
  return obj.useStateFromStores(items, () => {
    const str = closure_0.replace(/^:/, "");
    const replaced = str.replace(/:$/, "");
    let result = null;
    if ("" !== replaced) {
      const obj = { channel, query: replaced, count: 0, intention, includeExternalGuilds, showOnlyUnicode };
      result = EmojiStore.searchWithoutFetchingLatest(obj);
    }
    return result;
  }, items1, require("get initialized").statesWillNeverBeEqual);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
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
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    tmp7 = items1;
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
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(tmp7, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
});
let closure_22 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
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
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    tmp7 = items1;
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
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(tmp7, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
});
let closure_23 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
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
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function u() {
      return EmojiStore.getDisambiguatedEmojiContext(closure_0).favoriteEmojisWithoutFetchingLatest;
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(tmp7, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => EmojiStore.getDisambiguatedEmojiContext(closure_0).favoriteEmojisWithoutFetchingLatest);
});
let closure_24 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let tmp4;
  let tmp5;
  let tmp7;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(6);
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
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === arg1) {
    let tmp9;
    if (cResult[4] === arg0) {
      tmp9 = cResult[5];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(tmp7, tmp9);
  }
  class E {
    constructor() {
      let result = null != closure_1;
      if (result) {
        const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
        result = disambiguatedEmojiContext.isFavoriteEmojiWithoutFetchingLatest(tmp);
      }
      return result;
    }
  }
  cResult[3] = arg1;
  cResult[4] = arg0;
  cResult[5] = E;
  tmp9 = E;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let result = null != closure_1;
    if (result) {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
      result = disambiguatedEmojiContext.isFavoriteEmojiWithoutFetchingLatest(tmp);
    }
    return result;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
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
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[2] = items1;
    tmp7 = items1;
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
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(tmp7, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[27]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getEmojiInPriorityOrderWithoutFetchingLatest();
  });
});
let result = size.fileFinishedImporting("modules/emoji_picker/EmojiPickerUtils.tsx");

export const initializeSearch = function initializeSearch(intention) {
  let EMOJI;
  intention = intention.intention;
  const _location = intention.location;
  const obj = v1;
  const str = obj.v4();
  const replaced = str.replace(re21, "");
  const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
  EmojiPickerStore.setAnalyticsId(replaced);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_OPENED = unpackModuleId.SEARCH_OPENED;
  AppAnalyticsUtilsDefault;
  if (constants8.REACTION === intention) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp4.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  trackWithMetadata(SEARCH_OPENED, { search_type: EMOJI, load_id: replaced, location: _location });
};
export const useEmojiCategories = function useEmojiCategories(CHAT, channel) {
  let newlyAddedEmojis;
  let topEmojis;
  _require = CHAT;
  importDefault = channel;
  let obj = cResult;
  if (cResult === undefined) {
    obj = {};
  }
  let guildId = obj.guildId;
  if (guildId === undefined) {
    let tmp2 = null;
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
  let obj2 = require("TopEmojisUtils");
  const result = obj2.maybeFetchTopEmojisByGuild(guildId);
  const tmp5 = closure_16(CHAT);
  let flattenedGuildIds = tmp5;
  let tmp6 = closure_22(guildId);
  const currentUser = tmp6;
  let tmp7 = closure_23(guildId);
  constants = tmp7;
  let tmp8 = closure_24(guildId);
  constants2 = tmp8;
  ({ topEmojis, newlyAddedEmojis } = require("useTopAndNewlyAddedEmojis")(guildId, CHAT));
  require("useTopAndNewlyAddedEmojis")(guildId, CHAT);
  const allEmojis = require("useEmojiHotrail")({ topEmojis, newlyAddedEmojis }).allEmojis;
  let obj3 = require("get initialized");
  let items = [flag2];
  let items1 = [guildId];
  const stateFromStores = obj3.useStateFromStores(items, () => EmojiStore.getDisambiguatedEmojiContext(guildId), items1);
  let obj4 = require("get initialized");
  const items2 = [suggestedEmojis];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    const guild = GuildStore.getGuild(guildId);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  });
  let obj5 = require("get initialized");
  const items3 = [currentUser];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => currentUser.getCurrentUser());
  let obj6 = require("PremiumTypeUtils");
  const isPremiumResult = obj6.isPremium(stateFromStores2);
  let c13 = isPremiumResult;
  let obj7 = require("SoundmojiSendingExperiment");
  const soundmojiEmojiPickerSectionExperiment = obj7.useSoundmojiEmojiPickerSectionExperiment({ location: "useEmojiCategories" });
  const items4 = [stateFromStores, channel, guildId, CHAT, isPremiumResult, allEmojis, stateFromStores1, tmp7, tmp6, tmp8, tmp5, soundmojiEmojiPickerSectionExperiment, flag, flag2];
  const memo = flag.useMemo(() => {
    let bypassPremiumEmojiEntitlement;
    let categoryEmojis;
    let intention;
    let intl;
    function getEmojiUnavailableReasons(categoryEmojis) {
      const obj = channel(guildId[20]);
      const obj2 = { categoryEmojis, channel, guildId: getEmojiUnavailableReasons, intention, bypassPremiumEmojiEntitlement };
      return obj.getEmojiUnavailableReasons(obj2);
    }
    CHAT = stateFromStores.getGroupedCustomEmoji();
    channel = [];
    let obj = { type: constants2.SOUNDMOJI, name: intl.string(CHAT(guildId[19]).t.f0Ezmv), id: constants.SOUNDMOJI, isNitroLocked: false };
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    intl = CHAT(guildId[19]).intl;
    const tmp2 = ((flattenedGuildIds, GUILD) => {
      let emojisDisabled;
      let emojisPremiumLockedCount;
      let tmp10;
      const iter = flattenedGuildIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let guild;
        if (GUILD === categoryEmojis.GUILD) {
          guild = GuildStore.getGuild(tmp2);
        }
        if (null != guild) {
          let value = intention.get(guild.id);
          let arr = value;
          if (null != value) {
            if (0 !== arr.length) {
              let tmp32 = getEmojiUnavailableReasons(arr);
              ({ emojisDisabled, emojisPremiumLockedCount } = tmp32);
              if (0 !== tmp32.emojisUnfiltered.length) {
                let hiddenEmojiIds = EmojiStore.getHiddenEmojiIds(guild.id);
                let tmp16 = null;
                if (GUILD === categoryEmojis.GUILD) {
                  let obj = { type: categoryEmojis.GUILD, guild, isNitroLocked: tmp10, emojis: arr, emojisDisabled, emojisHidden: hiddenEmojiIds };
                  tmp10 = !c13 && tmp33;
                  if (tmp10) {
                    tmp10 = emojisPremiumLockedCount === arr.length;
                  }
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
    })(flattenedGuildIds, constants2.GUILD);
    const categories = flag2.categories;
    if (soundmojiEmojiPickerSectionExperiment) {
      if (flag) {
        let items = [obj];
        let tmp6 = items;
      }
      return tmp3((arr, id) => {
        let intl;
        let intl2;
        let intl3;
        let obj6;
        if (id === metroImportAll.TOP_GUILD_EMOJI) {
          const obj3 = { categoryEmojis: allEmojis, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const obj8 = EmojiUtilsDefault;
          const emojiUnavailableReasons = obj8.getEmojiUnavailableReasons(obj3);
          const emojisUnfiltered = emojiUnavailableReasons.emojisUnfiltered;
          if (null != emojisUnfiltered) {
            if (0 !== emojisUnfiltered.length) {
              const push4 = arr.push;
              const obj4 = { type: categoryEmojis.TOP_GUILD_EMOJI, id, name: intl3.formatToPlainString(intl14.t.W6Wi1X, obj6), isNitroLocked: false, emojis: emojisUnfiltered, emojisDisabled: tmp50 };
              intl3 = intl14.intl;
              obj6 = { guildName: stateFromStores1 };
              push4(obj4);
            }
          }
          return arr;
        } else if (id === metroImportAll.RECENT) {
          const items = [, ];
          ({ REACTION: arr4[0], DEFAULT_REACT_EMOJI: arr4[1] } = closure_18);
          const obj7 = { categoryEmojis: items.includes(intention) ? constants : currentUser, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const obj5 = EmojiUtilsDefault;
          const emojiUnavailableReasons1 = obj5.getEmojiUnavailableReasons(obj7);
          const emojisUnfiltered1 = emojiUnavailableReasons1.emojisUnfiltered;
          if (null != emojisUnfiltered1) {
            if (0 !== emojisUnfiltered1.length) {
              const push3 = arr.push;
              const obj9 = { type: categoryEmojis.RECENT, id, name: intl2.string(intl14.t["5TvaSm"]), isNitroLocked: false, emojis: emojisUnfiltered1, emojisDisabled: tmp37 };
              intl2 = intl14.intl;
              push3(obj9);
            }
          }
          return arr;
        } else if (id === metroImportAll.FAVORITES) {
          const obj10 = { categoryEmojis, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const obj2 = EmojiUtilsDefault;
          const emojiUnavailableReasons2 = obj2.getEmojiUnavailableReasons(obj10);
          const emojisUnfiltered2 = emojiUnavailableReasons2.emojisUnfiltered;
          if (null != emojisUnfiltered2) {
            if (0 !== emojisUnfiltered2.length) {
              const push2 = arr.push;
              const obj11 = { type: categoryEmojis.FAVORITES, id, name: intl.string(intl14.t.y3LQCG), isNitroLocked: false, emojis: emojisUnfiltered2, emojisDisabled: tmp22 };
              intl = intl14.intl;
              push2(obj11);
            }
          }
          return arr;
        } else if (id === metroImportAll.CUSTOM) {
          let found = channel;
          if (!flattenedGuildIds) {
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
          HermesBuiltin.arraySpread(items1, found, 0);
          HermesBuiltin.apply(push, items1, arr);
        } else {
          const obj = { type: categoryEmojis.UNICODE, id, name: id, isNitroLocked: false };
          arr.push(obj);
        }
        return arr;
      }, []);
    }
  }, items4);
  const items5 = [CHAT, suggestedEmojis];
  const memo1 = flag.useMemo(function() {
    let intl;
    let items;
    let locked;
    let unlocked;
    if (CHAT === constants.CHAT) {
      if (null != suggestedEmojis) {
        ({ unlocked, locked } = suggestedEmojis);
        if (0 === unlocked.length) {
          if (0 === locked.length) {
            return null;
          }
        }
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        for (const item10015 of locked) {
          if (null != item10015.id) {
            let addResult = set.add(tmp5.id);
          }
          continue;
        }
        const obj = { type: constants2.SUGGESTED, id: metroImportAll.SUGGESTED, name: intl.string(intl14.t.YUcvdQ), isNitroLocked: false, emojis: items, emojisDisabled: set };
        intl = intl14.intl;
        items = [];
        HermesBuiltin.arraySpread(items, locked, HermesBuiltin.arraySpread(items, unlocked, 0));
        return obj;
      }
    }
    return null;
  }, items5);
  let tmp17 = memo;
  if (null != memo1) {
    const items6 = [memo1];
    let tmp18 = items6;
    HermesBuiltin.arraySpread(items6, memo, 1);
    tmp17 = items6;
  }
  return tmp17;
};
export const getUnicodeEmojiCategories = function getUnicodeEmojiCategories() {
  const obj = UnicodeEmojisDefault;
  const categories = obj.getCategories();
  return categories.map((id) => ({ type: constants.UNICODE, id, name: id, isNitroLocked: false }));
};
export const trackPremiumSettingsPaneOpened = function trackPremiumSettingsPaneOpened(getGuildId) {
  let CUSTOM_STATUS_MODAL;
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  const obj = { location_page: null != guildId ? constants.GUILD_CHANNEL : constants.DM_CHANNEL, location_section: CUSTOM_STATUS_MODAL };
  const track = AnalyticsUtilsDefault.track;
  const PREMIUM_PROMOTION_OPENED = unpackModuleId.PREMIUM_PROMOTION_OPENED;
  AnalyticsUtilsDefault;
  if (null != getGuildId) {
    CUSTOM_STATUS_MODAL = map1.EMOJI_PICKER_POPOUT;
  } else {
    CUSTOM_STATUS_MODAL = map1.CUSTOM_STATUS_MODAL;
  }
  track(PREMIUM_PROMOTION_OPENED, obj);
};
export const trackEmojiSearchStart = function trackEmojiSearchStart(location, arg1) {
  let EMOJI;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_STARTED = unpackModuleId.SEARCH_STARTED;
  AppAnalyticsUtilsDefault;
  if (constants8.REACTION === arg1) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp3.AUTO_SUGGESTION === arg1) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj = { search_type: EMOJI, location };
  const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
  const analyticsId = EmojiPickerStore.getAnalyticsId();
  if (null != analyticsId) {
    let obj3;
    if ("" !== analyticsId) {
      obj3 = { load_id: analyticsId };
      const obj2 = { load_id: analyticsId };
    }
    const merged = Object.assign(obj3);
    trackWithMetadata(SEARCH_STARTED, obj);
  }
  obj3 = {};
};
export const trackEmojiSearchResultsViewed = function trackEmojiSearchResultsViewed(arg0) {
  let EMOJI;
  let _location;
  let intention;
  let loadId;
  let numEmojiLocked;
  let searchQuery;
  let totalResults;
  ({ intention, loadId } = arg0);
  ({ totalResults, numEmojiLocked, location: _location, searchQuery } = arg0);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_RESULT_VIEWED = unpackModuleId.SEARCH_RESULT_VIEWED;
  AppAnalyticsUtilsDefault;
  if (constants8.REACTION === intention) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp2.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj = { search_type: EMOJI, total_results: totalResults, num_results_locked: numEmojiLocked, query: searchQuery, location: _location };
  if (null != loadId) {
    let obj3;
    if ("" !== loadId) {
      obj3 = { load_id: loadId };
      const obj2 = { load_id: loadId };
    }
    const merged = Object.assign(obj3);
    trackWithMetadata(SEARCH_RESULT_VIEWED, obj);
  }
  obj3 = {};
};
export const trackEmojiSearchSelect = function trackEmojiSearchSelect(arg0) {
  let EMOJI;
  let _location;
  let emoji;
  let emojiSuggestions;
  let index;
  let intention;
  let isLocked;
  let messageId;
  let searchQuery;
  ({ emoji, emojiSuggestions, intention } = arg0);
  let name = emoji.uniqueName;
  ({ searchQuery, isLocked, location: _location, index, messageId } = arg0);
  if (name == null) {
    name = emoji.name;
  }
  if (constants8.REACTION === intention) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj = { search_type: EMOJI, location: _location, expression_guild_id: emoji.guildId, emoji_id: emoji.id, emoji_name: name, is_custom: null != emoji.id, is_animated: emoji.animated, is_locked: isLocked, query: searchQuery, index_num: index };
  let loadId;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_RESULT_SELECTED = unpackModuleId.SEARCH_RESULT_SELECTED;
  AppAnalyticsUtilsDefault;
  if (emojiSuggestions != null) {
    loadId = emojiSuggestions.loadId;
  }
  if (loadId == null) {
    const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
    loadId = EmojiPickerStore.getAnalyticsId();
  }
  if (null != loadId) {
    let obj3;
    if ("" !== loadId) {
      obj3 = { load_id: loadId };
      const obj2 = { load_id: loadId };
    }
    const merged = Object.assign(obj3);
    let length;
    if (emojiSuggestions != null) {
      const results = emojiSuggestions.results;
      if (results != null) {
        length = results.length;
      }
    }
    obj.total_results = length;
    let found;
    if (emojiSuggestions != null) {
      const results1 = emojiSuggestions.results;
      if (results1 != null) {
        const mapped = results1.map((emoji) => emoji.emoji.id);
        found = mapped.filter((item) => null != item);
      }
    }
    obj.emoji_suggestion_ids = found;
    obj.message_id = messageId;
    trackWithMetadata(SEARCH_RESULT_SELECTED, obj);
  }
  obj3 = {};
};
export const trackEmojiSearchEmpty = function trackEmojiSearchEmpty(arg0) {
  let EMOJI;
  let _location;
  let intention;
  let loadId;
  let searchQuery;
  ({ intention, loadId } = arg0);
  ({ location: _location, searchQuery } = arg0);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_RESULT_EMPTY = unpackModuleId.SEARCH_RESULT_EMPTY;
  AppAnalyticsUtilsDefault;
  if (constants8.REACTION === intention) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp2.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj = { search_type: EMOJI, query: searchQuery, location: _location };
  if (null != loadId) {
    let obj3;
    if ("" !== loadId) {
      obj3 = { load_id: loadId };
      const obj2 = { load_id: loadId };
    }
    const merged = Object.assign(obj3);
    trackWithMetadata(SEARCH_RESULT_EMPTY, obj);
  }
  obj3 = {};
};
export const trackEmojiFocus = function trackEmojiFocus(arg0) {
  let emoji;
  let newlyAddedHighlight;
  let position;
  let subCategory;
  ({ emoji, subCategory } = arg0);
  ({ position, newlyAddedHighlight } = arg0);
  let str;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const EXPRESSION_PICKER_EXPRESSION_FOCUS = unpackModuleId.EXPRESSION_PICKER_EXPRESSION_FOCUS;
  AppAnalyticsUtilsDefault;
  if (subCategory != null) {
    str = subCategory.toString();
  }
  const obj = { expression_section: str, newly_added_highlight: newlyAddedHighlight, emoji_id: emoji.id, emoji_name: emoji.name, emoji_animated: emoji.animated, emoji_position: position };
  trackWithMetadata(EXPRESSION_PICKER_EXPRESSION_FOCUS, obj);
};
export const trackEmojiSelect = function trackEmojiSelect(arg0) {
  let EMOJI_PICKER_EMOJI_CLICKED;
  let EXPRESSION_PICKER_EXPRESSION_SELECTED;
  let _location;
  let category;
  let emoji;
  let isBurstReaction;
  let lockedReason;
  let messageId;
  let newlyAddedHighlight;
  let pickerIntention;
  let position;
  let str;
  let subCategory;
  let visibleRowIndex;
  ({ emoji, pickerIntention, subCategory } = arg0);
  ({ location: _location, category } = arg0);
  if (subCategory === undefined) {
    subCategory = constants3.NONE;
  }
  ({ isBurstReaction, lockedReason, position, newlyAddedHighlight, messageId, visibleRowIndex } = arg0);
  if (constants8.REACTION === pickerIntention) {
    EMOJI_PICKER_EMOJI_CLICKED = isBurstReaction ? PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
  } else if (tmp2.STATUS === pickerIntention) {
    EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
  } else {
    EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
  }
  let name = emoji.uniqueName;
  if (name == null) {
    name = emoji.name;
  }
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  AppAnalyticsUtilsDefault;
  if (null != lockedReason) {
    EXPRESSION_PICKER_EXPRESSION_SELECTED = unpackModuleId.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED;
  } else {
    EXPRESSION_PICKER_EXPRESSION_SELECTED = unpackModuleId.EXPRESSION_PICKER_EXPRESSION_SELECTED;
  }
  const obj = { type: EMOJI_PICKER_EMOJI_CLICKED, location: _location, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated, expression_picker_section: category, expression_section: str, emoji_position: position, newly_added_highlight: newlyAddedHighlight, is_burst: isBurstReaction, message_id: messageId };
  str = undefined;
  if (subCategory != null) {
    str = subCategory.toString();
  }
  let tmp10 = null != lockedReason;
  if (tmp10) {
    tmp10 = { locked_reason: closure_17[lockedReason], visible_row_index: visibleRowIndex };
    const obj2 = { locked_reason: closure_17[lockedReason], visible_row_index: visibleRowIndex };
  }
  const merged = Object.assign(tmp10);
  trackWithMetadata(EXPRESSION_PICKER_EXPRESSION_SELECTED, obj);
};
export const trackEmojiFavorited = function trackEmojiFavorited(emoji) {
  emoji = emoji.emoji;
  let name = emoji.uniqueName;
  const _location = emoji.location;
  if (name == null) {
    name = emoji.name;
  }
  const obj = AppAnalyticsUtilsDefault;
  const obj2 = { location: _location, expression_type: ExpressionPickerViewType.EMOJI, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated };
  obj.trackWithMetadata(unpackModuleId.EXPRESSION_FAVORITED, obj2);
};
export const throttledTrackEmojiAutoSuggestDisplayed = throttleResult;
export const getAriaIdForEmojiCategory = function getAriaIdForEmojiCategory(type, name) {
  let id;
  if (type.type === constants2.GUILD) {
    let str = "";
    if (null != name) {
      str = name.name;
    }
    id = str;
  } else {
    id = type.id;
  }
  return id;
};
export const getStringForEmojiCategory = function getStringForEmojiCategory(PREMIUM_UPSELL, guildName) {
  if (metroImportAll.TOP_GUILD_EMOJI === PREMIUM_UPSELL) {
    const intl13 = intl14.intl;
    const obj = { guildName };
    return intl13.formatToPlainString(intl14.t.W6Wi1X, obj);
  } else if (metroImportAll.RECENT === PREMIUM_UPSELL) {
    const intl12 = intl14.intl;
    return intl12.string(intl14.t["5TvaSm"]);
  } else if (metroImportAll.FAVORITES === PREMIUM_UPSELL) {
    const intl11 = intl14.intl;
    return intl11.string(intl14.t.y3LQCG);
  } else if (metroImportAll.ACTIVITY === PREMIUM_UPSELL) {
    const intl10 = intl14.intl;
    return intl10.string(intl14.t.O783tR);
  } else if (metroImportAll.FLAGS === PREMIUM_UPSELL) {
    const intl9 = intl14.intl;
    return intl9.string(intl14.t.vvaizu);
  } else if (metroImportAll.FOOD === PREMIUM_UPSELL) {
    const intl8 = intl14.intl;
    return intl8.string(intl14.t.ldm9aY);
  } else if (metroImportAll.NATURE === PREMIUM_UPSELL) {
    const intl7 = intl14.intl;
    return intl7.string(intl14.t.egIBDH);
  } else if (metroImportAll.OBJECTS === PREMIUM_UPSELL) {
    const intl6 = intl14.intl;
    return intl6.string(intl14.t.gWm7Mk);
  } else if (metroImportAll.PEOPLE === PREMIUM_UPSELL) {
    const intl5 = intl14.intl;
    return intl5.string(intl14.t.GX594D);
  } else if (metroImportAll.SYMBOLS === PREMIUM_UPSELL) {
    const intl4 = intl14.intl;
    return intl4.string(intl14.t.QXMYAb);
  } else if (metroImportAll.TRAVEL === PREMIUM_UPSELL) {
    const intl3 = intl14.intl;
    return intl3.string(intl14.t.w33hIP);
  } else if (metroImportAll.PREMIUM_UPSELL === PREMIUM_UPSELL) {
    const intl2 = intl14.intl;
    return intl2.string(intl14.t.pAF6xE);
  } else if (metroImportAll.SOUNDMOJI === PREMIUM_UPSELL) {
    const intl = intl14.intl;
    return intl.string(intl14.t.f0Ezmv);
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
export const useEmojiInPriorityOrder = tmp11;
export const getEmojiSubCategory = function getEmojiSubCategory(arr, arr2, arg2) {
  if (null == arg2) {
    return constants3.NONE;
  } else {
    let TOP_GUILD_EMOJI;
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
      TOP_GUILD_EMOJI = constants3.TOP_GUILD_EMOJI;
    } else {
      TOP_GUILD_EMOJI = mapped1.includes(arg2) ? constants3.NEWLY_ADDED_EMOJI : constants3.NONE;
    }
    return TOP_GUILD_EMOJI;
  }
};
export const getSearchPlaceholder = function getSearchPlaceholder(pickerIntention, currentUser) {
  let stringResult1;
  if (pickerIntention === constants8.REACTION) {
    let stringResult;
    const intl2 = intl14.intl;
    const string = intl2.string;
    const t = intl14.t;
    if (currentUser) {
      stringResult = string(t["h7ES+n"]);
    } else {
      stringResult = string(t["6any2A"]);
    }
    stringResult1 = stringResult;
  } else {
    const intl = intl14.intl;
    stringResult1 = intl.string(intl14.t.KgK5qg);
  }
  return stringResult1;
};