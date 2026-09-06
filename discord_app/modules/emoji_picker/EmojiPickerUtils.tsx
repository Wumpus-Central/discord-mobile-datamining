// discord_app/modules/emoji_picker/EmojiPickerUtils.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import util from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import v1 from "../../../_runtime/01256_v1.js";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../utils/EmojiUtils.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import ExpressionPickerGridStores from "../expression_picker/ExpressionPickerGridStores.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import EmojiStore from "../emojis/EmojiStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const EmojiPickerConstants = fn(5463);
({ EmojiCategories: closure_8, EmojiCategoryTypes: closure_9, EmojiSubCategory: c10 } = EmojiPickerConstants);
const Constants = fn(1074);
({
  AnalyticEvents: closure_11,
  AnalyticsPages: closure_12,
  AnalyticsSections: map1,
  AutoCompleteResultTypes: closure_14,
  SearchTypes: closure_15,
} = Constants);
const EmojiConstants = fn(1374);
({
  isExternalEmojiAllowedForIntention: closure_16,
  EmojiDisabledReasons: closure_17,
  EmojiIntention: closure_18,
} = EmojiConstants);
const ExpressionPickerViewType = fn(1219).ExpressionPickerViewType;
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const re21 = /-/g;
const apply = fn(12);
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
  AppAnalyticsUtilsDefault.trackWithMetadata(constants4.SEARCH_OPENED, {
    search_type: EMOJI,
    load_id: replaced,
    location: location.location,
  });
};
export const useEmojiCategories = function useEmojiCategories(CHAT, channel) {
  _require = CHAT;
  importDefault = channel;
  let tmp = guildId;
  if (guildId === undefined) {
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    tmp = guildId;
  }
  guildId = tmp;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let flag2 = bypassPremiumEmojiEntitlement;
  if (bypassPremiumEmojiEntitlement === undefined) {
    flag2 = false;
  }
  const result = require("TopEmojisUtils").maybeFetchTopEmojisByGuild(tmp);
  const tmp5 = closure_16(CHAT);
  closure_5 = tmp5;
  closure_129_0 = tmp;
  const effect = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj = require("TopEmojisUtils");
  let items = [flag2];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
  closure_130_0 = tmp;
  const effect1 = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj2 = require("initialize");
  let items1 = [flag2];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items1, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
  closure_131_0 = tmp;
  const effect2 = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj3 = require("initialize");
  const items2 = [flag2];
  const stateFromStoresArray2 = require("initialize").useStateFromStoresArray(
    items2,
    () => EmojiStore.getDisambiguatedEmojiContext(closure_0).favoriteEmojisWithoutFetchingLatest,
  );
  let obj4 = require("initialize");
  ({ topEmojis, newlyAddedEmojis } = require("useTopAndNewlyAddedEmojis")(tmp, CHAT));
  const allEmojis = require("useEmojiHotrail")({ topEmojis, newlyAddedEmojis }).allEmojis;
  let tmp12 = require("useTopAndNewlyAddedEmojis")(tmp, CHAT);
  const items3 = [flag2];
  const items4 = [tmp];
  const stateFromStores = require("initialize").useStateFromStores(
    items3,
    () => EmojiStore.getDisambiguatedEmojiContext(guildId),
    items4,
  );
  let obj5 = require("initialize");
  const items5 = [closure_5];
  const stateFromStores1 = require("initialize").useStateFromStores(items5, () => {
    const guild = GuildStore.getGuild(guildId);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  });
  const obj6 = require("initialize");
  const items6 = [stateFromStoresArray1];
  const stateFromStores2 = require("initialize").useStateFromStores(items6, () =>
    stateFromStoresArray1.getCurrentUser(),
  );
  const obj7 = require("initialize");
  const isPremiumResult = require("PremiumTypeUtils").isPremium(stateFromStores2);
  c12 = isPremiumResult;
  const obj8 = require("PremiumTypeUtils");
  const soundmojiEmojiPickerSectionExperiment =
    require("SoundmojiSendingExperiment").useSoundmojiEmojiPickerSectionExperiment({ location: "useEmojiCategories" });
  const items7 = [
    stateFromStores,
    channel,
    tmp,
    CHAT,
    isPremiumResult,
    allEmojis,
    stateFromStores1,
    stateFromStoresArray1,
    stateFromStoresArray,
    stateFromStoresArray2,
    tmp5,
    soundmojiEmojiPickerSectionExperiment,
    flag,
    flag2,
  ];
  return flag.useMemo(() => {
    function getEmojiUnavailableReasons(categoryEmojis) {
      channel(guildId[20]);
      const obj = {
        categoryEmojis,
        channel,
        guildId: getEmojiUnavailableReasons,
        intention,
        bypassPremiumEmojiEntitlement,
      };
      return obj.getEmojiUnavailableReasons(obj);
    }
    CHAT = stateFromStores.getGroupedCustomEmoji();
    channel = [];
    let obj = { type: allEmojis.SOUNDMOJI, name: null, id: null, isNitroLocked: false };
    const flattenedGuildIds = stateFromStoresArray.getFlattenedGuildIds();
    let intl = CHAT(guildId[19]).intl;
    obj.name = intl.string(CHAT(guildId[19]).t.f0Ezmv);
    obj.id = stateFromStoresArray2.SOUNDMOJI;
    ((flattenedGuildIds, GUILD) => {
      const iter = flattenedGuildIds[Symbol.iterator]();
      while (iter !== undefined) {
        let guild;
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
                  let obj = {
                    type: constants2.GUILD,
                    guild: null,
                    isNitroLocked: null,
                    emojis: null,
                    emojisDisabled: null,
                    emojisHidden: null,
                  };
                  obj.guild = guild;
                  let tmp10 = !c12;
                  if (!c12) {
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
                    arr = channel.unshift(tmp16);
                  } else {
                    arr = channel.push(tmp16);
                  }
                }
              }
            }
          }
        }
        continue;
      }
      const nextResult = iter.next();
    })(flattenedGuildIds, allEmojis.GUILD);
    if (soundmojiEmojiPickerSectionExperiment) {
      if (flag) {
        let items = [obj];
      }
      return tmp3((arr, id) => {
        if (id === constants.TOP_GUILD_EMOJI) {
          let obj = { categoryEmojis: allEmojis, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const emojiUnavailableReasons = EmojiUtilsDefault.getEmojiUnavailableReasons(obj);
          const emojisUnfiltered = emojiUnavailableReasons.emojisUnfiltered;
          if (null != emojisUnfiltered) {
            if (0 !== emojisUnfiltered.length) {
              obj = {
                type: constants2.TOP_GUILD_EMOJI,
                id,
                name: null,
                isNitroLocked: false,
                emojis: null,
                emojisDisabled: null,
              };
              const intl3 = util.intl;
              let obj1 = { guildName: stateFromStores1 };
              obj.name = intl3.formatToPlainString(util.t.W6Wi1X, obj1);
              obj.emojis = emojisUnfiltered;
              obj.emojisDisabled = tmp49;
              arr = arr.push(obj);
            }
          }
          return arr;
        } else if (id === constants.RECENT) {
          const items = [,];
          ({ REACTION: arr4[0], DEFAULT_REACT_EMOJI: arr4[1] } = constants8);
          let obj4 = EmojiUtilsDefault;
          const obj2 = {
            categoryEmojis: items.includes(intention) ? stateFromStoresArray1 : stateFromStoresArray,
            channel,
            guildId,
            intention,
            bypassPremiumEmojiEntitlement: flag2,
          };
          const emojiUnavailableReasons1 = obj4.getEmojiUnavailableReasons(obj2);
          const emojisUnfiltered1 = emojiUnavailableReasons1.emojisUnfiltered;
          if (null != emojisUnfiltered1) {
            if (0 !== emojisUnfiltered1.length) {
              const obj3 = {
                type: constants2.RECENT,
                id,
                name: null,
                isNitroLocked: false,
                emojis: null,
                emojisDisabled: null,
              };
              const intl2 = util.intl;
              obj3.name = intl2.string(util.t["5TvaSm"]);
              obj3.emojis = emojisUnfiltered1;
              obj3.emojisDisabled = tmp36;
              arr = arr.push(obj3);
            }
          }
          return arr;
        } else if (id === constants.FAVORITES) {
          obj1 = EmojiUtilsDefault;
          obj4 = {
            categoryEmojis: stateFromStoresArray2,
            channel,
            guildId,
            intention,
            bypassPremiumEmojiEntitlement: flag2,
          };
          const emojiUnavailableReasons2 = obj1.getEmojiUnavailableReasons(obj4);
          const emojisUnfiltered2 = emojiUnavailableReasons2.emojisUnfiltered;
          if (null != emojisUnfiltered2) {
            if (0 !== emojisUnfiltered2.length) {
              const obj5 = {
                type: constants2.FAVORITES,
                id,
                name: null,
                isNitroLocked: false,
                emojis: null,
                emojisDisabled: null,
              };
              const intl = util.intl;
              obj5.name = intl.string(util.t.y3LQCG);
              obj5.emojis = emojisUnfiltered2;
              obj5.emojisDisabled = tmp21;
              arr.push(obj5);
            }
          }
          return arr;
        } else if (id === constants.CUSTOM) {
          arr = channel;
          let found = channel;
          if (!closure_5) {
            found = arr.filter((type) => {
              if (type.type === constants.GUILD) {
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
          obj = { type: constants2.UNICODE, id, name: id, isNitroLocked: false };
          arr.push(obj);
        }
        return arr;
      }, []);
    }
  }, items7);
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
  const obj = {
    location_page: null != guildId ? constants.GUILD_CHANNEL : constants.DM_CHANNEL,
    location_section: null,
  };
  if (null != getGuildId) {
    let CUSTOM_STATUS_MODAL = constants5.EMOJI_PICKER_POPOUT;
  } else {
    CUSTOM_STATUS_MODAL = constants5.CUSTOM_STATUS_MODAL;
  }
  obj.location_section = CUSTOM_STATUS_MODAL;
  obj.track(constants4.PREMIUM_PROMOTION_OPENED, obj);
  const tmp2 = null != guildId;
};
export const trackEmojiSearchStart = function trackEmojiSearchStart(location, arg1) {
  let obj = AppAnalyticsUtilsDefault;
  if (constants8.REACTION === arg1) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp2.AUTO_SUGGESTION === arg1) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  obj = { search_type: EMOJI, location };
  const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
  const analyticsId = EmojiPickerStore.getAnalyticsId();
  if (null != analyticsId) {
    if ("" !== analyticsId) {
      obj = { load_id: analyticsId };
      let obj1 = obj;
    }
    const merged = Object.assign(obj1);
    obj.trackWithMetadata(constants4.SEARCH_STARTED, obj);
  }
  obj1 = {};
};
export const trackEmojiSearchResultsViewed = function trackEmojiSearchResultsViewed(arg0) {
  ({ intention, loadId } = arg0);
  ({ totalResults, numEmojiLocked, location: _location, searchQuery } = arg0);
  let obj = AppAnalyticsUtilsDefault;
  if (constants8.REACTION === intention) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  obj = {
    search_type: EMOJI,
    total_results: totalResults,
    num_results_locked: numEmojiLocked,
    query: searchQuery,
    location: _location,
  };
  if (null != loadId) {
    if ("" !== loadId) {
      obj = { load_id: loadId };
      let obj1 = obj;
    }
    const merged = Object.assign(obj1);
    obj.trackWithMetadata(constants4.SEARCH_RESULT_VIEWED, obj);
  }
  obj1 = {};
};
export const trackEmojiSearchSelect = function trackEmojiSearchSelect(tmp2Result) {
  ({ emoji, emojiSuggestions, intention } = tmp2Result);
  let name = emoji.uniqueName;
  ({ searchQuery, isLocked, location: _location, index, messageId } = tmp2Result);
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
  let obj = {
    search_type: EMOJI,
    location: _location,
    expression_guild_id: emoji.guildId,
    emoji_id: emoji.id,
    emoji_name: name,
    is_custom: null != emoji.id,
    is_animated: emoji.animated,
    is_locked: isLocked,
    query: searchQuery,
    index_num: index,
  };
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
      obj = { load_id: loadId };
      let obj1 = obj;
    }
    const merged = Object.assign(obj1);
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
    obj.trackWithMetadata(constants4.SEARCH_RESULT_SELECTED, obj);
  }
  obj1 = {};
};
export const trackEmojiSearchEmpty = function trackEmojiSearchEmpty(arg0) {
  ({ intention, loadId } = arg0);
  ({ location: _location, searchQuery } = arg0);
  let obj = AppAnalyticsUtilsDefault;
  if (constants8.REACTION === intention) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  obj = { search_type: EMOJI, query: searchQuery, location: _location };
  if (null != loadId) {
    if ("" !== loadId) {
      obj = { load_id: loadId };
      let obj1 = obj;
    }
    const merged = Object.assign(obj1);
    obj.trackWithMetadata(constants4.SEARCH_RESULT_EMPTY, obj);
  }
  obj1 = {};
};
export const trackEmojiFocus = function trackEmojiFocus(arg0) {
  ({ emoji, subCategory } = arg0);
  ({ position, newlyAddedHighlight } = arg0);
  let obj = AppAnalyticsUtilsDefault;
  let str;
  if (subCategory != null) {
    str = subCategory.toString();
  }
  obj = {
    expression_section: str,
    newly_added_highlight: newlyAddedHighlight,
    emoji_id: emoji.id,
    emoji_name: emoji.name,
    emoji_animated: emoji.animated,
    emoji_position: position,
  };
  obj.trackWithMetadata(constants4.EXPRESSION_PICKER_EXPRESSION_FOCUS, obj);
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
    let obj = AppAnalyticsUtilsDefault;
    if (null != lockedReason) {
      let EXPRESSION_PICKER_EXPRESSION_SELECTED = constants4.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED;
    } else {
      EXPRESSION_PICKER_EXPRESSION_SELECTED = constants4.EXPRESSION_PICKER_EXPRESSION_SELECTED;
    }
    obj = {
      type: EMOJI_PICKER_EMOJI_CLICKED,
      location: _location,
      expression_id: emoji.id,
      expression_name: name,
      expression_guild_id: emoji.guildId,
      is_custom: null != emoji.id,
      is_animated: emoji.animated,
      expression_picker_section: category,
      expression_section: null,
      emoji_position: null,
      newly_added_highlight: null,
      is_burst: null,
      message_id: null,
    };
    let str;
    if (subCategory != null) {
      str = subCategory.toString();
    }
    obj.expression_section = str;
    obj.emoji_position = tmp2;
    obj.newly_added_highlight = tmp3;
    obj.is_burst = isBurstReaction;
    obj.message_id = tmp4;
    let tmp17 = null != lockedReason;
    if (tmp17) {
      obj = { locked_reason: closure_1_17[lockedReason], visible_row_index: tmp5 };
      tmp17 = obj;
    }
    const merged = Object.assign(tmp17);
    obj.trackWithMetadata(EXPRESSION_PICKER_EXPRESSION_SELECTED, obj);
  }
};
export const trackEmojiFavorited = function trackEmojiFavorited(emoji) {
  emoji = emoji.emoji;
  let name = emoji.uniqueName;
  if (name == null) {
    name = emoji.name;
  }
  const obj = {
    location: emoji.location,
    expression_type: ExpressionPickerViewType.EMOJI,
    expression_id: emoji.id,
    expression_name: name,
    expression_guild_id: emoji.guildId,
    is_custom: null != emoji.id,
    is_animated: emoji.animated,
  };
  obj.trackWithMetadata(constants4.EXPRESSION_FAVORITED, obj);
};
export const throttledTrackEmojiAutoSuggestDisplayed = apply.throttle(
  (emojiSuggestions) => {
    emojiSuggestions = emojiSuggestions.emojiSuggestions;
    const obj = {
      suggestion_type: constants6.EMOJI,
      suggestion_quantity: emojiSuggestions.results.length,
      custom_quantity: null,
      load_id: emojiSuggestions.loadId,
      location: emojiSuggestions.analyticsLocation,
    };
    const results = emojiSuggestions.results;
    obj.custom_quantity = results.filter((emoji) => null != emoji.emoji.id).length;
    obj.trackWithMetadata(constants4.AUTO_SUGGEST_DISPLAYED, obj);
  },
  DurationsDefault.Millis.HALF_SECOND,
  { leading: false, trailing: true },
);
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
export const useEmojiSearchResults = function useEmojiSearchResults(arg0, channel, intention, showOnlyUnicode) {
  _require = arg0;
  dependencyMap = intention;
  noop = showOnlyUnicode;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(intention[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const tmp2 = closure_16(intention);
  const includeExternalGuilds = tmp2;
  const items = [includeExternalGuilds];
  const items1 = [arg0, channel, intention, tmp2, showOnlyUnicode];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const replaced = closure_0.replace(/^:/, "").replace(/:$/, "");
      let result = null;
      if ("" !== replaced) {
        const obj = { channel, query: replaced, count: 0, intention, includeExternalGuilds, showOnlyUnicode };
        result = EmojiStore.searchWithoutFetchingLatest(obj);
      }
      return result;
    },
    items1,
    require("initialize").statesWillNeverBeEqual,
  );
};
export const useFrequentlyUsedEmojis = function useFrequentlyUsedEmojis(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
};
export const useFrequentlyUsedReactionEmojis = function useFrequentlyUsedReactionEmojis(guildId) {
  _require = guildId;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
};
export const useFavoriteEmojis = function useFavoriteEmojis(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  return require("initialize").useStateFromStoresArray(
    items,
    () => EmojiStore.getDisambiguatedEmojiContext(closure_0).favoriteEmojisWithoutFetchingLatest,
  );
};
export const useIsFavoriteEmoji = function useIsFavoriteEmoji(guildId, customEmojiFromJoinedGuild) {
  _require = guildId;
  closure_1 = customEmojiFromJoinedGuild;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(dependencyMap[25]).FrecencyUserSettingsActionCreators;
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
};
export const useEmojiInPriorityOrder = function useEmojiInPriorityOrder(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getEmojiInPriorityOrderWithoutFetchingLatest();
  });
};
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
