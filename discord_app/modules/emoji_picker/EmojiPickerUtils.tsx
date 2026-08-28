// === Module 9041: initializeSearch ===

// Module 9041 (initializeSearch)
import v1 from "v1" /* 514 */;
import setDefault from "set" /* 687 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4103 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 4666 */;
import withEqualityFn from "withEqualityFn" /* 9042 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "getEmojiToGroupId" /* 5366 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "insertUnsortedGuilds" /* 5346 */;
import closure_7 from "mergeGuildAvatar" /* 1923 */;
import EmojiCategoryTypes from "EmojiCategoryTypes" /* 5370 */;
import ME from "ME" /* 676 */;
import set from "set" /* 1926 */;
import { ExpressionPickerViewType } from "ExpressionPickerViewType" /* 1338 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1925 */;
import apply from "apply" /* 12 */;

require = arg1;
({ EmojiCategories: closure_8, EmojiCategoryTypes: c9, EmojiSubCategory: c10 } = EmojiCategoryTypes);
({ AnalyticEvents: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1, AutoCompleteResultTypes: closure_14, SearchTypes: closure_15 } = ME);
({ isExternalEmojiAllowedForIntention: closure_16, EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = set);
const re21 = /-/g;
let result = set.fileFinishedImporting("modules/emoji_picker/EmojiPickerUtils.tsx");

export const initializeSearch = function initializeSearch(location) {
  const intention = location.intention;
  const obj = v1;
  const replaced = v1.v4().replace(closure_21, "");
  const EmojiPickerStore = withEqualityFn.EmojiPickerStore;
  EmojiPickerStore.setAnalyticsId(replaced);
  const str = v1.v4();
  if (constants8.REACTION === intention) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp3.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants4.SEARCH_OPENED, { search_type: EMOJI, load_id: replaced, location: location.location });
};
export const useEmojiCategories = function useEmojiCategories(CHAT, channel, guildId, arg3, bypassPremiumEmojiEntitlement) {
  guildId = CHAT;
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
  closure_5 = undefined;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let stateFromStoresArray2;
  let allEmojis;
  let stateFromStores;
  let stateFromStores1;
  c12 = undefined;
  let soundmojiEmojiPickerSectionExperiment;
  const result = guildId(guildId[13]).maybeFetchTopEmojisByGuild(tmp);
  let tmp5 = callback(CHAT);
  closure_5 = tmp5;
  guildId = tmp;
  const effect = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj = guildId(guildId[13]);
  let items = [flag2];
  stateFromStoresArray = guildId(guildId[16]).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = flag2.getDisambiguatedEmojiContext(guildId);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
  guildId = tmp;
  const effect1 = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj2 = guildId(guildId[16]);
  let items1 = [flag2];
  stateFromStoresArray1 = guildId(guildId[16]).useStateFromStoresArray(items1, () => {
    const disambiguatedEmojiContext = flag2.getDisambiguatedEmojiContext(guildId);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
  guildId = tmp;
  const effect2 = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj3 = guildId(guildId[16]);
  const items2 = [flag2];
  stateFromStoresArray2 = guildId(guildId[16]).useStateFromStoresArray(items2, () => flag2.getDisambiguatedEmojiContext(guildId).favoriteEmojisWithoutFetchingLatest);
  let obj4 = guildId(guildId[16]);
  ({ topEmojis, newlyAddedEmojis } = importDefault(guildId[14])(tmp, CHAT));
  allEmojis = importDefault(guildId[15])({ topEmojis, newlyAddedEmojis }).allEmojis;
  let tmp12 = importDefault(guildId[14])(tmp, CHAT);
  const items3 = [flag2];
  const items4 = [tmp];
  stateFromStores = guildId(guildId[16]).useStateFromStores(items3, () => flag2.getDisambiguatedEmojiContext(guildId), items4);
  let obj5 = guildId(guildId[16]);
  const items5 = [closure_5];
  stateFromStores1 = guildId(guildId[16]).useStateFromStores(items5, () => {
    guild = guild.getGuild(guildId);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  });
  const obj6 = guildId(guildId[16]);
  const items6 = [stateFromStoresArray1];
  const stateFromStores2 = guildId(guildId[16]).useStateFromStores(items6, () => stateFromStoresArray1.getCurrentUser());
  const obj7 = guildId(guildId[16]);
  const isPremiumResult = guildId(guildId[17]).isPremium(stateFromStores2);
  c12 = isPremiumResult;
  const obj8 = guildId(guildId[17]);
  soundmojiEmojiPickerSectionExperiment = guildId(guildId[18]).useSoundmojiEmojiPickerSectionExperiment({ location: "useEmojiCategories" });
  const items7 = [stateFromStores, channel, tmp, CHAT, isPremiumResult, allEmojis, stateFromStores1, stateFromStoresArray1, stateFromStoresArray, stateFromStoresArray2, tmp5, soundmojiEmojiPickerSectionExperiment, flag, flag2];
  return flag.useMemo(() => {
    function getEmojiUnavailableReasons(categoryEmojis) {
      let obj = arr(getEmojiUnavailableReasons[20]);
      obj = { categoryEmojis, channel: arr, guildId: getEmojiUnavailableReasons, intention: closure_0, bypassPremiumEmojiEntitlement: closure_4 };
      return obj.getEmojiUnavailableReasons(obj);
    }
    const groupedCustomEmoji = stateFromStores.getGroupedCustomEmoji();
    closure_1 = [];
    let obj = { type: allEmojis.SOUNDMOJI, name: null, id: null, isNitroLocked: false };
    const flattenedGuildIds = stateFromStoresArray.getFlattenedGuildIds();
    let intl = guildId(guildId[19]).intl;
    obj[1] = intl.string(guildId(guildId[19]).t.f0Ezmv);
    obj[2] = stateFromStoresArray2.SOUNDMOJI;
    ((flattenedGuildIds, GUILD) => {
      const iter = flattenedGuildIds[Symbol.iterator]();
      while (iter !== undefined) {
        let guild;
        let tmp4 = allEmojis;
        if (GUILD === allEmojis.GUILD) {
          let tmp5 = guild;
          let tmp6 = nextResult;
          guild = guild.getGuild(tmp2);
        }
        let tmp7 = guild;
        if (null != guild) {
          let tmp26 = closure_0;
          let tmp27 = guild;
          let value = closure_0.get(guild.id);
          let arr = value;
          if (null != value) {
            let tmp29 = value;
            if (0 !== arr.length) {
              let tmp30 = getEmojiUnavailableReasons;
              let tmp31 = value;
              let tmp32 = getEmojiUnavailableReasons(arr);
              ({ emojisDisabled, emojisPremiumLockedCount } = tmp32);
              if (0 !== tmp32.emojisUnfiltered.length) {
                let tmp34 = flag2;
                let tmp35 = guild;
                let hiddenEmojiIds = flag2.getHiddenEmojiIds(guild.id);
                let tmp16 = null;
                if (GUILD === tmp4.GUILD) {
                  let obj = { type: null, guild: null, isNitroLocked: null, emojis: null, emojisDisabled: null, emojisHidden: null };
                  obj[0] = tmp4.GUILD;
                  let tmp8 = guild;
                  obj[1] = guild;
                  let tmp9 = closure_1_12;
                  let tmp10 = !closure_1_12;
                  if (!closure_1_12) {
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
    })(flattenedGuildIds, allEmojis.GUILD);
    if (soundmojiEmojiPickerSectionExperiment) {
      if (flag) {
        let items = [obj];
      }
      return tmp3((arr) => {
        if (arg1 === stateFromStoresArray2.TOP_GUILD_EMOJI) {
          let obj = { categoryEmojis: null, channel: null, guildId: null, intention: null, bypassPremiumEmojiEntitlement: null };
          obj[0] = closure_1_9;
          obj[1] = arr;
          obj[2] = getEmojiUnavailableReasons;
          obj[3] = closure_0;
          obj[4] = closure_1_4;
          const emojiUnavailableReasons = arr(guildId[20]).getEmojiUnavailableReasons(obj);
          const emojisUnfiltered = emojiUnavailableReasons.emojisUnfiltered;
          if (null != emojisUnfiltered) {
            if (0 !== emojisUnfiltered.length) {
              obj = { type: null, id: null, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
              obj[0] = allEmojis.TOP_GUILD_EMOJI;
              obj[1] = arg1;
              const intl3 = guildId(tmp43[19]).intl;
              obj1 = { guildName: null };
              obj1[0] = closure_1_11;
              obj[2] = intl3.formatToPlainString(guildId(tmp43[19]).t.W6Wi1X, obj1);
              obj[4] = emojisUnfiltered;
              obj[5] = tmp49;
              arr = arr.push(obj);
            }
          }
          return arr;
        } else if (arg1 === tmp.RECENT) {
          const items = [, ];
          ({ REACTION: arr4[0], DEFAULT_REACT_EMOJI: arr4[1] } = closure_2_18);
          let obj4 = arr(guildId[20]);
          const obj2 = { categoryEmojis: null, channel: null, guildId: null, intention: null, bypassPremiumEmojiEntitlement: null };
          obj2[0] = items.includes(closure_0) ? closure_1_7 : closure_1_6;
          obj2[1] = arr;
          obj2[2] = getEmojiUnavailableReasons;
          obj2[3] = closure_0;
          obj2[4] = closure_1_4;
          const emojiUnavailableReasons1 = obj4.getEmojiUnavailableReasons(obj2);
          const emojisUnfiltered1 = emojiUnavailableReasons1.emojisUnfiltered;
          if (null != emojisUnfiltered1) {
            if (0 !== emojisUnfiltered1.length) {
              const obj3 = { type: null, id: null, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
              obj3[0] = allEmojis.RECENT;
              obj3[1] = arg1;
              const intl2 = guildId(tmp30[19]).intl;
              obj3[2] = intl2.string(guildId(tmp30[19]).t["5TvaSm"]);
              obj3[4] = emojisUnfiltered1;
              obj3[5] = tmp36;
              arr = arr.push(obj3);
            }
          }
          return arr;
        } else if (arg1 === tmp.FAVORITES) {
          obj1 = arr(guildId[20]);
          obj4 = { categoryEmojis: null, channel: null, guildId: null, intention: null, bypassPremiumEmojiEntitlement: null };
          obj4[0] = closure_1_8;
          obj4[1] = arr;
          obj4[2] = getEmojiUnavailableReasons;
          obj4[3] = closure_0;
          obj4[4] = closure_1_4;
          const emojiUnavailableReasons2 = obj1.getEmojiUnavailableReasons(obj4);
          const emojisUnfiltered2 = emojiUnavailableReasons2.emojisUnfiltered;
          if (null != emojisUnfiltered2) {
            if (0 !== emojisUnfiltered2.length) {
              const obj5 = { type: null, id: null, name: null, isNitroLocked: false, emojis: null, emojisDisabled: null };
              obj5[0] = allEmojis.FAVORITES;
              obj5[1] = arg1;
              const intl = guildId(tmp15[19]).intl;
              obj5[2] = intl.string(guildId(tmp15[19]).t.y3LQCG);
              obj5[4] = emojisUnfiltered2;
              obj5[5] = tmp21;
              arr.push(obj5);
            }
          }
          return arr;
        } else if (arg1 === tmp.CUSTOM) {
          let found = arr;
          if (!closure_1_5) {
            found = arr.filter((type) => {
              if (type.type === closure_1_9.GUILD) {
                flag = type.guild.id === closure_2;
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
          obj[0] = allEmojis.UNICODE;
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
  const categories = parseRawEmojiObjectDefault.getCategories();
  return categories.map((id) => ({ type: constants.UNICODE, id, name: id, isNitroLocked: false }));
};
export const trackPremiumSettingsPaneOpened = function trackPremiumSettingsPaneOpened(getGuildId) {
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let obj = expandEventPropertiesDefault;
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
  let obj = collectGuildAnalyticsMetadataDefault;
  if (constants8.REACTION === arg1) {
    let EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp2.AUTO_SUGGESTION === arg1) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  obj = { search_type: EMOJI, location };
  const EmojiPickerStore = withEqualityFn.EmojiPickerStore;
  const analyticsId = EmojiPickerStore.getAnalyticsId();
  if (null != analyticsId) {
    if ("" !== analyticsId) {
      obj = { load_id: null };
      obj[0] = analyticsId;
      obj1 = obj;
    }
    const merged = Object.assign(obj1);
    obj.trackWithMetadata(constants4.SEARCH_STARTED, obj);
  }
  obj1 = {};
};
export const trackEmojiSearchResultsViewed = function trackEmojiSearchResultsViewed(arg0) {
  ({ intention, loadId } = arg0);
  ({ totalResults, numEmojiLocked, location: _location, searchQuery } = arg0);
  let obj = collectGuildAnalyticsMetadataDefault;
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
      obj1 = obj;
    }
    const merged = Object.assign(obj1);
    obj.trackWithMetadata(constants4.SEARCH_RESULT_VIEWED, obj);
  }
  obj1 = {};
};
export const trackEmojiSearchSelect = function trackEmojiSearchSelect(arg0) {
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
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = { search_type: EMOJI, location: _location, expression_guild_id: emoji.guildId, emoji_id: emoji.id, emoji_name: name, is_custom: null != emoji.id, is_animated: emoji.animated, is_locked: isLocked, query: searchQuery, index_num: index };
  let loadId;
  if (emojiSuggestions != null) {
    loadId = emojiSuggestions.loadId;
  }
  if (loadId == null) {
    const EmojiPickerStore = withEqualityFn.EmojiPickerStore;
    loadId = EmojiPickerStore.getAnalyticsId();
  }
  if (null != loadId) {
    if ("" !== loadId) {
      obj = { load_id: null };
      obj[0] = loadId;
      obj1 = obj;
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
  ({ intention, loadId } = arg0);
  ({ location: _location, searchQuery } = arg0);
  let obj = collectGuildAnalyticsMetadataDefault;
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
      obj1 = obj;
    }
    const merged = Object.assign(obj1);
    obj.trackWithMetadata(constants4.SEARCH_RESULT_EMPTY, obj);
  }
  obj1 = {};
};
export const trackEmojiFocus = function trackEmojiFocus(arg0) {
  ({ emoji, subCategory } = arg0);
  ({ position, newlyAddedHighlight } = arg0);
  let obj = collectGuildAnalyticsMetadataDefault;
  let str;
  if (subCategory != null) {
    str = subCategory.toString();
  }
  obj = { expression_section: str, newly_added_highlight: newlyAddedHighlight, emoji_id: emoji.id, emoji_name: emoji.name, emoji_animated: emoji.animated, emoji_position: position };
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
    let obj = collectGuildAnalyticsMetadataDefault;
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
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = { location: emoji.location, expression_type: ExpressionPickerViewType.EMOJI, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated };
  obj.trackWithMetadata(constants4.EXPRESSION_FAVORITED, obj);
};
export const throttledTrackEmojiAutoSuggestDisplayed = apply.throttle((emojiSuggestions) => {
  emojiSuggestions = emojiSuggestions.emojiSuggestions;
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = { suggestion_type: constants6.EMOJI, suggestion_quantity: emojiSuggestions.results.length, custom_quantity: results.filter((emoji) => null != emoji.emoji.id).length, load_id: emojiSuggestions.loadId, location: emojiSuggestions.analyticsLocation };
  results = emojiSuggestions.results;
  obj.trackWithMetadata(constants4.AUTO_SUGGEST_DISPLAYED, obj);
}, setDefault.Millis.HALF_SECOND, { leading: false, trailing: true });
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
    const intl13 = getSystemLocale.intl;
    const obj = { guildName: null };
    obj[0] = arg1;
    return intl13.formatToPlainString(getSystemLocale.t.W6Wi1X, obj);
  } else if (tmp.RECENT === PREMIUM_UPSELL) {
    const intl12 = getSystemLocale.intl;
    return intl12.string(getSystemLocale.t["5TvaSm"]);
  } else if (tmp.FAVORITES === PREMIUM_UPSELL) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.y3LQCG);
  } else if (tmp.ACTIVITY === PREMIUM_UPSELL) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.O783tR);
  } else if (tmp.FLAGS === PREMIUM_UPSELL) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.vvaizu);
  } else if (tmp.FOOD === PREMIUM_UPSELL) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.ldm9aY);
  } else if (tmp.NATURE === PREMIUM_UPSELL) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.egIBDH);
  } else if (tmp.OBJECTS === PREMIUM_UPSELL) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.gWm7Mk);
  } else if (tmp.PEOPLE === PREMIUM_UPSELL) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.GX594D);
  } else if (tmp.SYMBOLS === PREMIUM_UPSELL) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.QXMYAb);
  } else if (tmp.TRAVEL === PREMIUM_UPSELL) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.w33hIP);
  } else if (tmp.PREMIUM_UPSELL === PREMIUM_UPSELL) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.pAF6xE);
  } else if (tmp.SOUNDMOJI === PREMIUM_UPSELL) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.f0Ezmv);
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
  closure_1 = arg1;
  dependencyMap = arg2;
  const React = arg3;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = lib(table[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const tmp2 = callback(arg2);
  closure_4 = tmp2;
  const items = [closure_4];
  const items1 = [arg0, arg1, arg2, tmp2, arg3];
  return _require(589).useStateFromStores(items, () => {
    const replaced = lib.replace(/^:/, "").replace(/:$/, "");
    let result = null;
    if ("" !== replaced) {
      const obj = { channel: null, query: null, count: 0, intention: null, includeExternalGuilds: null, showOnlyUnicode: null };
      obj[0] = closure_1;
      obj[1] = replaced;
      obj[3] = closure_2;
      obj[4] = closure_4;
      obj[5] = closure_3;
      result = closure_4.searchWithoutFetchingLatest(obj);
    }
    return result;
  }, items1, _require(589).statesWillNeverBeEqual);
};
export const useFrequentlyUsedEmojis = function useFrequentlyUsedEmojis(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [closure_4];
  return _require(589).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = flag2.getDisambiguatedEmojiContext(guildId);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
};
export const useFrequentlyUsedReactionEmojis = function useFrequentlyUsedReactionEmojis(guildId) {
  const _require = guildId;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [closure_4];
  return _require(589).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = flag2.getDisambiguatedEmojiContext(guildId);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
};
export const useFavoriteEmojis = function useFavoriteEmojis(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [closure_4];
  return _require(589).useStateFromStoresArray(items, () => flag2.getDisambiguatedEmojiContext(guildId).favoriteEmojisWithoutFetchingLatest);
};
export const useIsFavoriteEmoji = function useIsFavoriteEmoji(guildId, customEmojiFromJoinedGuild) {
  const _require = guildId;
  closure_1 = customEmojiFromJoinedGuild;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(table[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [closure_4];
  return _require(589).useStateFromStores(items, () => {
    let result = null != closure_1;
    if (result) {
      const disambiguatedEmojiContext = closure_1_4.getDisambiguatedEmojiContext(closure_0);
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
  const items = [closure_4];
  return _require(589).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = closure_1_4.getDisambiguatedEmojiContext(closure_0);
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
    const intl2 = getSystemLocale.intl;
    const string = intl2.string;
    h7ES_n = getSystemLocale.t;
    if (arg1) {
      h7ES_n = h7ES_n["h7ES+n"];
      let stringResult = string(h7ES_n);
    } else {
      stringResult = string(h7ES_n["6any2A"]);
    }
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KgK5qg);
  }
};