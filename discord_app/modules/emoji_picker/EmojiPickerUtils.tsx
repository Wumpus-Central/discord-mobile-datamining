import { v1 } from "../../../_runtime/00514_v1.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { isPremiumAtLeast } from "../../utils/PremiumTypeUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";
import { maybeFetchTopEmojisByGuild } from "../emojis/top_emojis/TopEmojisUtils.tsx";
import { parseRawEmojiObject } from "../emojis/UnicodeEmojis.tsx";
import { withEqualityFn } from "../expression_picker/ExpressionPickerGridStores.tsx";
import { getSoundmojiSendExperiment } from "../premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx";
import { useEmojiHotrail } from "hooks/useEmojiHotrail.tsx";
import { useTopAndNewlyAddedEmojis } from "hooks/useTopAndNewlyAddedEmojis.tsx";
// discord_app/modules/emoji_picker/EmojiPickerUtils.tsx
import getSystemLocale from "getSystemLocale";
import getEmojiToGroupId from "getEmojiToGroupId";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import mergeGuildAvatar from "mergeGuildAvatar";
import EmojiCategoryTypes from "EmojiCategoryTypes";
import ME from "ME";
import set from "set";
import { ExpressionPickerViewType } from "ExpressionPickerViewType";
import { PremiumUpsellTypes } from "GuildFeatures";
import apply from "collectGuildAnalyticsMetadata";
import set from "createGuildRecordFromRust";

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
const require = arg1;
({ EmojiCategories: metroImportAll, EmojiCategoryTypes: c9, EmojiSubCategory: c10 } = EmojiCategoryTypes);
({ AnalyticEvents: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1, AutoCompleteResultTypes: closure_14, SearchTypes: closure_15 } = ME);
({ isExternalEmojiAllowedForIntention: closure_16, EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = set);
const re21 = /-/g;
let result = set.fileFinishedImporting("modules/emoji_picker/EmojiPickerUtils.tsx");

export const initializeSearch = function initializeSearch(location) {
  const intention = location.intention;
  const obj = v1 /* v1 */;
  const replaced = v1 /* v1 */.v4().replace(closure_21, "");
  const EmojiPickerStore = withEqualityFn /* withEqualityFn */.EmojiPickerStore;
  EmojiPickerStore.setAnalyticsId(replaced);
  const str = v1 /* v1 */.v4();
  if (constants8.REACTION === intention) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp3.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  collectGuildAnalyticsMetadata.trackWithMetadata(constants4.SEARCH_OPENED, { search_type: EMOJI, load_id: replaced, location: location.location });
};
export const useEmojiCategories = function useEmojiCategories(CHAT, channel, guildId) {
  let newlyAddedEmojis;
  let topEmojis;
  let _require = CHAT;
  const importDefault = channel;
  let tmp = guildId;
  if (guildId === undefined) {
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    tmp = guildId;
  }
  const dependencyMap = tmp;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let c4;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let stateFromStoresArray2;
  let allEmojis;
  let stateFromStores;
  let stateFromStores1;
  let c11;
  let soundmojiEmojiPickerSectionExperiment;
  const result = _maybeFetchTopEmojisByGuild.maybeFetchTopEmojisByGuild(tmp);
  let tmp5 = callback(CHAT);
  c4 = tmp5;
  _require = tmp;
  const effect = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(tmp[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj = _maybeFetchTopEmojisByGuild;
  let items = [c4];
  stateFromStoresArray = _initialize.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = _undefined.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
  _require = tmp;
  const effect1 = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(tmp[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj2 = _initialize;
  let items1 = [c4];
  stateFromStoresArray1 = _initialize.useStateFromStoresArray(items1, () => {
    const disambiguatedEmojiContext = _undefined.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
  _require = tmp;
  const effect2 = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(tmp[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj3 = _initialize;
  const items2 = [c4];
  stateFromStoresArray2 = _initialize.useStateFromStoresArray(items2, () => _undefined.getDisambiguatedEmojiContext(closure_0).favoriteEmojisWithoutFetchingLatest);
  let obj4 = _initialize;
  ({ topEmojis, newlyAddedEmojis } = useTopAndNewlyAddedEmojis(tmp, CHAT));
  allEmojis = useEmojiHotrail({ topEmojis, newlyAddedEmojis }).allEmojis;
  let tmp12 = useTopAndNewlyAddedEmojis(tmp, CHAT);
  const items3 = [c4];
  const items4 = [tmp];
  stateFromStores = _initialize.useStateFromStores(items3, () => _undefined.getDisambiguatedEmojiContext(closure_2), items4);
  let obj5 = _initialize;
  const items5 = [stateFromStoresArray];
  stateFromStores1 = _initialize.useStateFromStores(items5, () => {
    const guild = stateFromStoresArray.getGuild(closure_2);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  });
  const obj6 = _initialize;
  const items6 = [stateFromStoresArray2];
  const stateFromStores2 = _initialize.useStateFromStores(items6, () => stateFromStoresArray2.getCurrentUser());
  const obj7 = _initialize;
  const isPremiumResult = _isPremiumAtLeast.isPremium(stateFromStores2);
  c11 = isPremiumResult;
  const obj8 = _isPremiumAtLeast;
  soundmojiEmojiPickerSectionExperiment = _getSoundmojiSendExperiment.useSoundmojiEmojiPickerSectionExperiment({ location: "useEmojiCategories" });
  const items7 = [stateFromStores, channel, tmp, CHAT, isPremiumResult, allEmojis, stateFromStores1, stateFromStoresArray1, stateFromStoresArray, stateFromStoresArray2, tmp5, soundmojiEmojiPickerSectionExperiment, flag];
  return flag.useMemo(() => {
    function getEmojiUnavailableReasons(categoryEmojis) {
      let obj = arr(getEmojiUnavailableReasons[20]);
      obj = { categoryEmojis, channel: arr, guildId: getEmojiUnavailableReasons, intention: closure_0 };
      return obj.getEmojiUnavailableReasons(obj);
    }
    const CHAT = stateFromStores.getGroupedCustomEmoji();
    let closure_1 = [];
    let obj = { type: stateFromStores.SOUNDMOJI, name: null, id: null, isNitroLocked: false };
    const flattenedGuildIds = stateFromStoresArray1.getFlattenedGuildIds();
    let intl = CHAT(tmp[19]).intl;
    obj[1] = intl.string(CHAT(tmp[19]).t.f0Ezmv);
    obj[2] = allEmojis.SOUNDMOJI;
    ((flattenedGuildIds, GUILD) => {
      let emojisDisabled;
      let emojisPremiumLockedCount;
      const iter = flattenedGuildIds[Symbol.iterator]();
      while (iter !== undefined) {
        let guild;
        let tmp4 = stateFromStores;
        if (GUILD === stateFromStores.GUILD) {
          let tmp5 = stateFromStoresArray;
          let tmp6 = nextResult;
          guild = stateFromStoresArray.getGuild(tmp2);
        }
        let tmp7 = guild;
        if (null != guild) {
          let tmp26 = lib;
          let tmp27 = guild;
          let value = lib.get(guild.id);
          let arr = value;
          if (null != value) {
            let tmp29 = value;
            if (0 !== arr.length) {
              let tmp30 = getEmojiUnavailableReasons;
              let tmp31 = value;
              let tmp32 = getEmojiUnavailableReasons(arr);
              ({ emojisDisabled, emojisPremiumLockedCount } = tmp32);
              if (0 !== tmp32.emojisUnfiltered.length) {
                let tmp34 = hiddenEmojiIds;
                let tmp35 = guild;
                hiddenEmojiIds = hiddenEmojiIds.getHiddenEmojiIds(guild.id);
                let tmp16 = null;
                if (GUILD === tmp4.GUILD) {
                  let obj = { type: null, guild: null, isNitroLocked: null, emojis: null, emojisDisabled: null, emojisHidden: null };
                  obj[0] = tmp4.GUILD;
                  let tmp8 = guild;
                  obj[1] = guild;
                  let tmp9 = outer1_11;
                  let tmp10 = !outer1_11;
                  if (!outer1_11) {
                    tmp10 = tmp33;
                  }
                  if (tmp10) {
                    let tmp11 = emojisPremiumLockedCount;
                    let tmp12 = value;
                    tmp10 = emojisPremiumLockedCount === arr.length;
                  }
                  obj[2] = tmp10;
                  let tmp13 = value;
                  obj[3] = arr;
                  let tmp14 = emojisDisabled;
                  obj[4] = emojisDisabled;
                  let tmp15 = hiddenEmojiIds;
                  obj[5] = hiddenEmojiIds;
                  tmp16 = obj;
                }
                let tmp17 = tmp16;
                if (null != tmp16) {
                  let tmp18 = guild;
                  let tmp19 = getEmojiUnavailableReasons;
                  if (guild.id === getEmojiUnavailableReasons) {
                    let tmp23 = arr;
                    let tmp24 = tmp16;
                    arr = arr.unshift(tmp16);
                  } else {
                    let tmp20 = arr;
                    let tmp21 = tmp16;
                    arr = arr.push(tmp16);
                  }
                }
              }
            }
          }
        }
        continue;
      }
    })(flattenedGuildIds, stateFromStores.GUILD);
    if (soundmojiEmojiPickerSectionExperiment) {
      if (flag) {
        let items = [obj];
      }
      return tmp3((arr) => {
        if (arg1 === allEmojis.TOP_GUILD_EMOJI) {
          let obj = { categoryEmojis: null, channel: null, guildId: null, intention: null };
          obj[0] = outer1_8;
          obj[1] = arr;
          obj[2] = getEmojiUnavailableReasons;
          obj[3] = lib;
          const emojiUnavailableReasons = arr(getEmojiUnavailableReasons[20]).getEmojiUnavailableReasons(obj);
          const emojisUnfiltered = emojiUnavailableReasons.emojisUnfiltered;
          if (null != emojisUnfiltered) {
            if (0 !== emojisUnfiltered.length) {
              obj = { type: null, id: null, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
              obj[0] = stateFromStores.TOP_GUILD_EMOJI;
              obj[1] = arg1;
              const intl3 = lib(tmp41[19]).intl;
              let obj1 = { guildName: null };
              obj1[0] = outer1_10;
              obj[2] = intl3.formatToPlainString(lib(tmp41[19]).t.W6Wi1X, obj1);
              obj[4] = emojisUnfiltered;
              obj[5] = tmp46;
              arr = arr.push(obj);
            }
          }
          return arr;
        } else if (arg1 === tmp.RECENT) {
          const items = [, ];
          ({ REACTION: arr4[0], DEFAULT_REACT_EMOJI: arr4[1] } = outer2_18);
          let obj4 = arr(getEmojiUnavailableReasons[20]);
          const obj2 = { categoryEmojis: null, channel: null, guildId: null, intention: null };
          obj2[0] = items.includes(lib) ? outer1_6 : outer1_5;
          obj2[1] = arr;
          obj2[2] = getEmojiUnavailableReasons;
          obj2[3] = lib;
          const emojiUnavailableReasons1 = obj4.getEmojiUnavailableReasons(obj2);
          const emojisUnfiltered1 = emojiUnavailableReasons1.emojisUnfiltered;
          if (null != emojisUnfiltered1) {
            if (0 !== emojisUnfiltered1.length) {
              const obj3 = { type: null, id: null, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
              obj3[0] = stateFromStores.RECENT;
              obj3[1] = arg1;
              const intl2 = lib(tmp29[19]).intl;
              obj3[2] = intl2.string(lib(tmp29[19]).t["5TvaSm"]);
              obj3[4] = emojisUnfiltered1;
              obj3[5] = tmp34;
              arr = arr.push(obj3);
            }
          }
          return arr;
        } else if (arg1 === tmp.FAVORITES) {
          obj1 = arr(getEmojiUnavailableReasons[20]);
          obj4 = { categoryEmojis: null, channel: null, guildId: null, intention: null };
          obj4[0] = outer1_7;
          obj4[1] = arr;
          obj4[2] = getEmojiUnavailableReasons;
          obj4[3] = lib;
          const emojiUnavailableReasons2 = obj1.getEmojiUnavailableReasons(obj4);
          const emojisUnfiltered2 = emojiUnavailableReasons2.emojisUnfiltered;
          if (null != emojisUnfiltered2) {
            if (0 !== emojisUnfiltered2.length) {
              const obj5 = { type: null, id: null, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
              obj5[0] = stateFromStores.FAVORITES;
              obj5[1] = arg1;
              const intl = lib(tmp15[19]).intl;
              obj5[2] = intl.string(lib(tmp15[19]).t.y3LQCG);
              obj5[4] = emojisUnfiltered2;
              obj5[5] = tmp20;
              arr.push(obj5);
            }
          }
          return arr;
        } else if (arg1 === tmp.CUSTOM) {
          let found = arr;
          if (!outer1_4) {
            found = arr.filter((type) => {
              if (type.type === outer1_9.GUILD) {
                let flag = type.guild.id === closure_2;
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
          obj = { type: null, id: null, name: null, isNitroLocked: false };
          obj[0] = stateFromStores.UNICODE;
          obj[1] = arg1;
          obj[2] = arg1;
          arr.push(obj);
        }
        return arr;
      }, []);
    }
  }, items7);
};
export const getUnicodeEmojiCategories = function getUnicodeEmojiCategories() {
  const categories = parseRawEmojiObject.getCategories();
  return categories.map((id) => ({ type: constants.UNICODE, id, name: id, isNitroLocked: false }));
};
export const trackPremiumSettingsPaneOpened = function trackPremiumSettingsPaneOpened(getGuildId) {
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let obj = expandEventProperties;
  obj = { location_page: null != guildId ? tmp3.GUILD_CHANNEL : tmp3.DM_CHANNEL, location_section: null };
  if (null != getGuildId) {
    let CUSTOM_STATUS_MODAL = constants5.EMOJI_PICKER_POPOUT;
  } else {
    CUSTOM_STATUS_MODAL = constants5.CUSTOM_STATUS_MODAL;
  }
  obj[1] = CUSTOM_STATUS_MODAL;
  obj.track(constants4.PREMIUM_PROMOTION_OPENED, obj);
};
export const trackEmojiSearchStart = function trackEmojiSearchStart(location) {
  let obj = collectGuildAnalyticsMetadata;
  if (constants8.REACTION === arg1) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp2.AUTO_SUGGESTION === arg1) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  obj = { search_type: EMOJI, location };
  const EmojiPickerStore = withEqualityFn /* withEqualityFn */.EmojiPickerStore;
  const analyticsId = EmojiPickerStore.getAnalyticsId();
  if (null != analyticsId) {
    if ("" !== analyticsId) {
      obj = { load_id: null };
      obj[0] = analyticsId;
      let obj1 = obj;
    }
    const merged = Object.assign(obj1);
    obj.trackWithMetadata(constants4.SEARCH_STARTED, obj);
  }
  obj1 = {};
};
export const trackEmojiSearchResultsViewed = function trackEmojiSearchResultsViewed(arg0) {
  let _location;
  let intention;
  let loadId;
  let numEmojiLocked;
  let searchQuery;
  let totalResults;
  ({ intention, loadId } = arg0);
  ({ totalResults, numEmojiLocked, location: _location, searchQuery } = arg0);
  let obj = collectGuildAnalyticsMetadata;
  if (constants8.REACTION === intention) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  obj = { search_type: EMOJI, total_results: totalResults, num_results_locked: numEmojiLocked, query: searchQuery, location: _location };
  if (null != loadId) {
    if ("" !== loadId) {
      obj = { load_id: null };
      obj[0] = loadId;
      let obj1 = obj;
    }
    const merged = Object.assign(obj1);
    obj.trackWithMetadata(constants4.SEARCH_RESULT_VIEWED, obj);
  }
  obj1 = {};
};
export const trackEmojiSearchSelect = function trackEmojiSearchSelect(arg0) {
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
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  let obj = collectGuildAnalyticsMetadata;
  obj = { search_type: EMOJI, location: _location, expression_guild_id: emoji.guildId, emoji_id: emoji.id, emoji_name: name, is_custom: null != emoji.id, is_animated: emoji.animated, is_locked: isLocked, query: searchQuery, index_num: index };
  let loadId;
  if (emojiSuggestions != null) {
    loadId = emojiSuggestions.loadId;
  }
  if (loadId == null) {
    const EmojiPickerStore = withEqualityFn /* withEqualityFn */.EmojiPickerStore;
    loadId = EmojiPickerStore.getAnalyticsId();
  }
  if (null != loadId) {
    if ("" !== loadId) {
      obj = { load_id: null };
      obj[0] = loadId;
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
        found = mapped.filter((arg0) => null != arg0);
      }
    }
    obj.emoji_suggestion_ids = found;
    obj.message_id = messageId;
    obj.trackWithMetadata(constants4.SEARCH_RESULT_SELECTED, obj);
  }
  obj1 = {};
};
export const trackEmojiSearchEmpty = function trackEmojiSearchEmpty(arg0) {
  let _location;
  let intention;
  let loadId;
  let searchQuery;
  ({ intention, loadId } = arg0);
  ({ location: _location, searchQuery } = arg0);
  let obj = collectGuildAnalyticsMetadata;
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
      obj = { load_id: null };
      obj[0] = loadId;
      let obj1 = obj;
    }
    const merged = Object.assign(obj1);
    obj.trackWithMetadata(constants4.SEARCH_RESULT_EMPTY, obj);
  }
  obj1 = {};
};
export const trackEmojiFocus = function trackEmojiFocus(arg0) {
  let emoji;
  let newlyAddedHighlight;
  let position;
  let subCategory;
  ({ emoji, subCategory } = arg0);
  ({ position, newlyAddedHighlight } = arg0);
  let obj = collectGuildAnalyticsMetadata;
  let str;
  if (subCategory != null) {
    str = subCategory.toString();
  }
  obj = { expression_section: str, newly_added_highlight: newlyAddedHighlight, emoji_id: emoji.id, emoji_name: emoji.name, emoji_animated: emoji.animated, emoji_position: position };
  obj.trackWithMetadata(constants4.EXPRESSION_PICKER_EXPRESSION_FOCUS, obj);
};
export const trackEmojiSelect = function trackEmojiSelect(arg0) {
  let _location;
  let category;
  let emoji;
  let isBurstReaction;
  let lockedReason;
  let pickerIntention;
  let subCategory;
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
    let obj = collectGuildAnalyticsMetadata;
    if (null != lockedReason) {
      let EXPRESSION_PICKER_EXPRESSION_SELECTED = constants4.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED;
    } else {
      EXPRESSION_PICKER_EXPRESSION_SELECTED = constants4.EXPRESSION_PICKER_EXPRESSION_SELECTED;
    }
    obj = { type: null, location: null, expression_id: null, expression_name: null, expression_guild_id: null, is_custom: null, is_animated: null, expression_picker_section: null, expression_section: null, emoji_position: null, newly_added_highlight: null, is_burst: null, message_id: null };
    obj[0] = EMOJI_PICKER_EMOJI_CLICKED;
    obj[1] = _location;
    obj[2] = emoji.id;
    obj[3] = name;
    obj[4] = emoji.guildId;
    obj[5] = null != emoji.id;
    obj[6] = emoji.animated;
    obj[7] = category;
    let str;
    if (subCategory != null) {
      str = subCategory.toString();
    }
    obj[8] = str;
    obj[9] = tmp2;
    obj[10] = tmp3;
    obj[11] = isBurstReaction;
    obj[12] = tmp4;
    let tmp17 = null != lockedReason;
    if (tmp17) {
      obj = { locked_reason: null, visible_row_index: null };
      obj[0] = table[lockedReason];
      obj[1] = tmp5;
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
  let obj = collectGuildAnalyticsMetadata;
  obj = { location: emoji.location, expression_type: ExpressionPickerViewType.EMOJI, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated };
  obj.trackWithMetadata(constants4.EXPRESSION_FAVORITED, obj);
};
export const throttledTrackEmojiAutoSuggestDisplayed = apply.throttle((emojiSuggestions) => {
  emojiSuggestions = emojiSuggestions.emojiSuggestions;
  let obj = collectGuildAnalyticsMetadata;
  obj = { suggestion_type: constants6.EMOJI, suggestion_quantity: emojiSuggestions.results.length, custom_quantity: results.filter((emoji) => null != emoji.emoji.id).length, load_id: emojiSuggestions.loadId, location: emojiSuggestions.analyticsLocation };
  results = emojiSuggestions.results;
  obj.trackWithMetadata(constants4.AUTO_SUGGEST_DISPLAYED, obj);
}, require("set").Millis.HALF_SECOND, { leading: false, trailing: true });
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
export const getStringForEmojiCategory = function getStringForEmojiCategory(PREMIUM_UPSELL) {
  if (constants.TOP_GUILD_EMOJI === PREMIUM_UPSELL) {
    const intl13 = getSystemLocale /* getSystemLocale */.intl;
    const obj = { guildName: null };
    obj[0] = arg1;
    return intl13.formatToPlainString(getSystemLocale /* getSystemLocale */.t.W6Wi1X, obj);
  } else if (tmp.RECENT === PREMIUM_UPSELL) {
    const intl12 = getSystemLocale /* getSystemLocale */.intl;
    return intl12.string(getSystemLocale /* getSystemLocale */.t["5TvaSm"]);
  } else if (tmp.FAVORITES === PREMIUM_UPSELL) {
    const intl11 = getSystemLocale /* getSystemLocale */.intl;
    return intl11.string(getSystemLocale /* getSystemLocale */.t.y3LQCG);
  } else if (tmp.ACTIVITY === PREMIUM_UPSELL) {
    const intl10 = getSystemLocale /* getSystemLocale */.intl;
    return intl10.string(getSystemLocale /* getSystemLocale */.t.O783tR);
  } else if (tmp.FLAGS === PREMIUM_UPSELL) {
    const intl9 = getSystemLocale /* getSystemLocale */.intl;
    return intl9.string(getSystemLocale /* getSystemLocale */.t.vvaizu);
  } else if (tmp.FOOD === PREMIUM_UPSELL) {
    const intl8 = getSystemLocale /* getSystemLocale */.intl;
    return intl8.string(getSystemLocale /* getSystemLocale */.t.ldm9aY);
  } else if (tmp.NATURE === PREMIUM_UPSELL) {
    const intl7 = getSystemLocale /* getSystemLocale */.intl;
    return intl7.string(getSystemLocale /* getSystemLocale */.t.egIBDH);
  } else if (tmp.OBJECTS === PREMIUM_UPSELL) {
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    return intl6.string(getSystemLocale /* getSystemLocale */.t.gWm7Mk);
  } else if (tmp.PEOPLE === PREMIUM_UPSELL) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    return intl5.string(getSystemLocale /* getSystemLocale */.t.GX594D);
  } else if (tmp.SYMBOLS === PREMIUM_UPSELL) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    return intl4.string(getSystemLocale /* getSystemLocale */.t.QXMYAb);
  } else if (tmp.TRAVEL === PREMIUM_UPSELL) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    return intl3.string(getSystemLocale /* getSystemLocale */.t.w33hIP);
  } else if (tmp.PREMIUM_UPSELL === PREMIUM_UPSELL) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.string(getSystemLocale /* getSystemLocale */.t.pAF6xE);
  } else if (tmp.SOUNDMOJI === PREMIUM_UPSELL) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.f0Ezmv);
  } else {
    let tmp3 = arg1;
    if (arg1 == null) {
      tmp3 = PREMIUM_UPSELL;
    }
    return tmp3;
  }
};
export const useEmojiSearchResults = function useEmojiSearchResults(arg0, arg1, arg2, arg3) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const React = arg3;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = lib(table[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const tmp2 = callback(arg2);
  let getEmojiToGroupId = tmp2;
  const items = [getEmojiToGroupId];
  const items1 = [arg0, arg1, arg2, tmp2, arg3];
  return _initialize.useStateFromStores(items, () => {
    const replaced = lib.replace(/^:/, "").replace(/:$/, "");
    let result = null;
    if ("" !== replaced) {
      const obj = { channel: null, query: null, count: 0, intention: null, includeExternalGuilds: null, showOnlyUnicode: null };
      obj[0] = closure_1;
      obj[1] = replaced;
      obj[3] = closure_2;
      obj[4] = tmp2;
      obj[5] = getSystemLocale;
      result = tmp2.searchWithoutFetchingLatest(obj);
    }
    return result;
  }, items1, _initialize.statesWillNeverBeEqual);
};
export const useFrequentlyUsedEmojis = function useFrequentlyUsedEmojis(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(tmp[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [getEmojiToGroupId];
  return _initialize.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = _undefined.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
};
export const useFrequentlyUsedReactionEmojis = function useFrequentlyUsedReactionEmojis(guildId) {
  const _require = guildId;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(tmp[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [getEmojiToGroupId];
  return _initialize.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = _undefined.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
};
export const useFavoriteEmojis = function useFavoriteEmojis(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(tmp[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [getEmojiToGroupId];
  return _initialize.useStateFromStoresArray(items, () => _undefined.getDisambiguatedEmojiContext(closure_0).favoriteEmojisWithoutFetchingLatest);
};
export const useIsFavoriteEmoji = function useIsFavoriteEmoji(guildId, customEmojiFromJoinedGuild) {
  const _require = guildId;
  let closure_1 = customEmojiFromJoinedGuild;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(table[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [getEmojiToGroupId];
  return _initialize.useStateFromStores(items, () => {
    let result = null != closure_1;
    if (result) {
      const disambiguatedEmojiContext = outer1_4.getDisambiguatedEmojiContext(closure_0);
      result = disambiguatedEmojiContext.isFavoriteEmojiWithoutFetchingLatest(tmp);
    }
    return result;
  });
};
export const useEmojiInPriorityOrder = function useEmojiInPriorityOrder(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = callback(table[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [getEmojiToGroupId];
  return _initialize.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = outer1_4.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getEmojiInPriorityOrderWithoutFetchingLatest();
  });
};
export const getEmojiSubCategory = function getEmojiSubCategory(arr, arr2) {
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
      TOP_GUILD_EMOJI = mapped1.includes(arg2) ? tmp3.NEWLY_ADDED_EMOJI : tmp3.NONE;
    }
    return TOP_GUILD_EMOJI;
  }
};
export const getSearchPlaceholder = function getSearchPlaceholder(arg0, arg1) {
  if (arg0 === constants8.REACTION) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    const string = intl2.string;
    h7ES_n = getSystemLocale /* getSystemLocale */.t;
    if (arg1) {
      h7ES_n = h7ES_n["h7ES+n"];
      let stringResult = string(h7ES_n);
    } else {
      stringResult = string(h7ES_n["6any2A"]);
    }
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.KgK5qg);
  }
};