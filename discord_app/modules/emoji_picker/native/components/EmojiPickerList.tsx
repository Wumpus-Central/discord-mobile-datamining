// === Module 9465: EmojiPickerList ===

// Module 9465 (EmojiPickerList)
import util from "util" /* 1126 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4770 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4811 */;
import ChatInputUtils from "ChatInputUtils" /* 4987 */;
import HapticUtils from "HapticUtils" /* 5061 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5062 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6884 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9279 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 9440 */;
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9443 */;
import RoleSubscriptionUpsellUtilsDefault from "RoleSubscriptionUpsellUtils" /* 9472 */;
import trackEmojiSuggestionSelectedDefault from "trackEmojiSuggestionSelected" /* 9516 */;
import useEmojiPickerData from "useEmojiPickerData" /* 9517 */;
import PremiumUpsellSectionDividerDefault from "PremiumUpsellSectionDivider" /* 9520 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9521 */;
import EmojiPickerListComponents from "EmojiPickerListComponents" /* 9523 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 9524 */;
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell" /* 9528 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategoryTypes = fn(5996).EmojiCategoryTypes;
const IMAGE_SIZE = fn(9439).IMAGE_SIZE;
const Constants = fn(1085);
({ AnalyticsObjects: metroRequire, AnalyticsPages: closure_7, AnalyticsSections: closure_8, UpsellTypes: closure_9 } = Constants);
const EmojiConstants = fn(1393);
({ EmojiDisabledReasons: c10, EmojiIntention: closure_11 } = EmojiConstants);
const MIN_MARGIN = fn(1241).MIN_MARGIN;
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerList(guildId) {
  const cResult = categories(channel[9]).c(72);
  ({ bottomSheetIndex, categories } = guildId);
  ({ categoryIndexActive, emojiPickerListRef } = guildId);
  ({ emojis, channel } = guildId);
  guildId = guildId.guildId;
  let onPressEmoji = guildId.onPressEmoji;
  let onLongPressEmoji = guildId.onLongPressEmoji;
  const emojiPickerIntention = guildId.emojiPickerIntention;
  ({ insetBottom, insetTop, inPortalKeyboard, searchQueryRef } = guildId);
  ({ analyticsObject, messageId } = guildId);
  const bypassPremiumEmojiEntitlement = guildId.bypassPremiumEmojiEntitlement;
  let num = 0;
  if (undefined !== insetBottom) {
    num = insetBottom;
  }
  let num2 = 0;
  if (undefined !== insetTop) {
    num2 = insetTop;
  }
  let obj = categories(channel[9]);
  const analyticsLocations = emojiPickerListRef(channel[10])(emojiPickerListRef(tmp2[11]).EMOJI).analyticsLocations;
  const tmp7 = emojiPickerListRef(channel[12])(undefined !== inPortalKeyboard && inPortalKeyboard);
  const containerWidth = tmp7;
  rounded = Math.floor((tmp7 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = emojiPickerListRef(tmp2[13])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === id) {
      let tmp10 = cResult[2];
      let tmp11 = cResult[3];
    }
    const effect = guildId.useEffect(tmp10, tmp11);
    const tmp14 = tmp5(tmp2[15])();
    if (cResult[4] === analyticsObject) {
      if (cResult[5] === emojiPickerIntention) {
        if (cResult[6] === rounded) {
          let tmp15 = cResult[7];
        }
        const trackOnEmojiPickerOpenedForReactions = tmp(tmp2[16]).useTrackOnEmojiPickerOpenedForReactions(tmp15);
        const tmpResult = tmp(tmp2[16]);
        ({ computeCategories, computeSearchResults } = tmp5(tmp2[17])());
        if (cResult[8] === categories) {
          if (cResult[9] === computeCategories) {
            if (cResult[10] === computeSearchResults) {
              if (cResult[11] === emojis) {
                if (cResult[12] === tmp14) {
                  if (cResult[13] === rounded) {
                    const _Symbol = Symbol;
                    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                      const upsellType = tmp(tmp2[18]).getUpsellType(tmp(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
                      cResult[15] = upsellType;
                      let tmp20 = upsellType;
                      const tmpResult4 = tmp(tmp2[18]);
                    } else {
                      tmp20 = cResult[15];
                    }
                    const useTier0UpsellContent = tmp(tmp2[20]).usePremiumUpsellConfig(tmp20).useTier0UpsellContent;
                    if (cResult[16] === analyticsLocations) {
                      if (cResult[17] === bypassPremiumEmojiEntitlement) {
                        if (cResult[18] === categories) {
                          if (cResult[19] === channel) {
                            if (cResult[20] === guildId) {
                              if (cResult[21] === emojiPickerIntention) {
                                if (cResult[22] === messageId) {
                                  if (cResult[23] === onPressEmoji) {
                                    if (cResult[24] === searchQueryRef) {
                                      let tmp22 = cResult[25];
                                    }
                                    onPressEmoji = tmp22;
                                    if (cResult[26] !== onLongPressEmoji) {
                                      function se(arg0) {
                                        if (onLongPressEmoji != null) {
                                          tmp(arg0);
                                        }
                                      }
                                      cResult[26] = onLongPressEmoji;
                                      cResult[27] = se;
                                      let tmp23 = se;
                                    } else {
                                      tmp23 = cResult[27];
                                    }
                                    onLongPressEmoji = tmp23;
                                    if (cResult[28] === arr3) {
                                      if (cResult[29] === tmp14) {
                                        if (cResult[30] === rounded) {
                                          let tmp24 = cResult[31];
                                        }
                                        const tmp25 = tmp5(tmp2[30])(tmp24);
                                        const AnimateEmoji = tmp(tmp2[31]).AnimateEmoji;
                                        const setting = AnimateEmoji.useSetting();
                                        if (cResult[32] === analyticsLocations) {
                                          if (cResult[33] === setting) {
                                            let guild_id;
                                            if (channel != null) {
                                              guild_id = channel.guild_id;
                                            }
                                            if (cResult[34] === guild_id) {
                                              if (cResult[35] === tmp7) {
                                                if (cResult[36] === emojiPickerListRef) {
                                                  if (cResult[37] === tmp23) {
                                                    if (cResult[38] === tmp22) {
                                                      if (cResult[39] === rounded) {
                                                        if (cResult[40] === useTier0UpsellContent) {
                                                          let tmp28 = cResult[41];
                                                        }
                                                        ({ shouldShowUpsell, onShowNitroUpsell } = tmp5(tmp2[37])());
                                                        if (0 === arr3.length) {
                                                          if (cResult[42] === num) {
                                                            if (cResult[43] === num2) {
                                                              let tmp46 = cResult[44];
                                                            }
                                                            return tmp46;
                                                          }
                                                          let obj2 = { inActionSheet: true, insetTop: num2, insetBottom: num };
                                                          const tmp48 = useTier0UpsellContent(tmp5(tmp2[38]), obj2);
                                                          cResult[42] = num;
                                                          cResult[43] = num2;
                                                          cResult[44] = tmp48;
                                                          tmp46 = tmp48;
                                                        } else {
                                                          const tmp5Result = tmp5(tmp14 ? tmp2[39] : tmp2[40]);
                                                          if (cResult[45] !== tmp25.hasSearchUpsell) {
                                                            let hasSearchUpsell = tmp25.hasSearchUpsell;
                                                            if (hasSearchUpsell) {
                                                              hasSearchUpsell = tmp(tmp2[41]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(tmp(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, "native.EmojiPickerList");
                                                              const tmpResult6 = tmp(tmp2[41]);
                                                            }
                                                            cResult[45] = tmp25.hasSearchUpsell;
                                                            cResult[46] = hasSearchUpsell;
                                                            let tmp32 = hasSearchUpsell;
                                                          } else {
                                                            tmp32 = cResult[46];
                                                          }
                                                          let tmp33 = guildId;
                                                          if (guildId == null) {
                                                            let guild_id1;
                                                            if (channel != null) {
                                                              guild_id1 = channel.guild_id;
                                                            }
                                                            tmp33 = guild_id1;
                                                          }
                                                          if (cResult[47] === tmp5Result) {
                                                            if (cResult[48] === analyticsLocations) {
                                                              if (cResult[49] === setting) {
                                                                if (cResult[50] === bottomSheetIndex) {
                                                                  if (cResult[51] === categoryIndexActive) {
                                                                    if (cResult[52] === tmp25) {
                                                                      if (cResult[53] === emojiPickerListRef) {
                                                                        if (cResult[54] === tmp4) {
                                                                          if (cResult[55] === num) {
                                                                            if (cResult[56] === num2) {
                                                                              if (cResult[57] === tmp23) {
                                                                                if (cResult[58] === tmp22) {
                                                                                  if (cResult[59] === onShowNitroUpsell) {
                                                                                    if (cResult[60] === tmp28) {
                                                                                      if (cResult[61] === tmp33) {
                                                                                        if (cResult[62] === useTier0UpsellContent) {
                                                                                          let tmp35 = cResult[63];
                                                                                        }
                                                                                        if (cResult[64] === bottomSheetIndex) {
                                                                                          if (cResult[65] === tmp32) {
                                                                                            if (cResult[66] === tmp4) {
                                                                                              if (cResult[67] === shouldShowUpsell) {
                                                                                                let tmp38 = cResult[68];
                                                                                              }
                                                                                              if (cResult[69] === tmp35) {
                                                                                                if (cResult[70] === tmp38) {
                                                                                                  let tmp42 = cResult[71];
                                                                                                }
                                                                                                return tmp42;
                                                                                              }
                                                                                              let obj3 = { children: null };
                                                                                              let items = [tmp35, tmp38];
                                                                                              obj3.children = items;
                                                                                              const tmp45 = onLongPressEmoji(onPressEmoji, obj3);
                                                                                              cResult[69] = tmp35;
                                                                                              cResult[70] = tmp38;
                                                                                              cResult[71] = tmp45;
                                                                                              tmp42 = tmp45;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        let tmp39 = !tmp32;
                                                                                        if (!tmp32) {
                                                                                          let obj4 = { bottomSheetIndex, featureName: tmp(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: tmp4, shouldShow: shouldShowUpsell };
                                                                                          tmp39 = useTier0UpsellContent(tmp5(tmp2[42]), obj4);
                                                                                          const tmp5Result2 = tmp5(tmp2[42]);
                                                                                        }
                                                                                        cResult[64] = bottomSheetIndex;
                                                                                        cResult[65] = tmp32;
                                                                                        cResult[66] = tmp4;
                                                                                        cResult[67] = shouldShowUpsell;
                                                                                        cResult[68] = tmp39;
                                                                                        tmp38 = tmp39;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          let obj5 = { analyticsLocations, animateEmoji: setting, bottomSheetIndex, categoryIndexActive, data: tmp25, guildId: tmp33, inPortalKeyboard: tmp4, onPressEmoji: tmp22, onLongPressEmoji: tmp23, onShowNitroUpsell, paddingBottom: num, paddingTop: num2, ref: emojiPickerListRef, renderItem: tmp28, useTier0UpsellContent };
                                                          const tmp37 = useTier0UpsellContent(tmp5Result, obj5);
                                                          cResult[47] = tmp5Result;
                                                          cResult[48] = analyticsLocations;
                                                          cResult[49] = setting;
                                                          cResult[50] = bottomSheetIndex;
                                                          cResult[51] = categoryIndexActive;
                                                          cResult[52] = tmp25;
                                                          cResult[53] = emojiPickerListRef;
                                                          cResult[54] = tmp4;
                                                          cResult[55] = num;
                                                          cResult[56] = num2;
                                                          cResult[57] = tmp23;
                                                          cResult[58] = tmp22;
                                                          cResult[59] = onShowNitroUpsell;
                                                          cResult[60] = tmp28;
                                                          cResult[61] = tmp33;
                                                          cResult[62] = useTier0UpsellContent;
                                                          cResult[63] = tmp37;
                                                          tmp35 = tmp37;
                                                        }
                                                        const tmp30 = tmp5(tmp2[37])();
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        cResult[32] = analyticsLocations;
                                        cResult[33] = setting;
                                        let guild_id2;
                                        if (channel != null) {
                                          guild_id2 = channel.guild_id;
                                        }
                                        function ce(item) {
                                          item = item.item;
                                          const type = item.type;
                                          ({ target, index } = item);
                                          if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
                                            if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
                                              if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
                                                  if ("StickyHeader" === target) {
                                                    const current = emojiPickerListRef.current;
                                                    if (current != null) {
                                                      const result = current.onStickyHeaderRendered(index);
                                                    }
                                                  }
                                                  const obj2 = { label: item.title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
                                                  return closure_2_14(EmojiPickerListComponents.Section, obj2);
                                                } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                  const obj3 = { position: item.position, useTier0UpsellContent };
                                                  return closure_2_14(PremiumUpsellSectionDividerDefault, obj3);
                                                } else {
                                                  if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
                                                    ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                    const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji, animateEmoji: setting, row, isSectionNitroLocked };
                                                    let tmp27Result = closure_2_14(EmojiPickerListRow.EmojiPickerListRow, obj4);
                                                  } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                    tmp27Result = closure_2_14(EmojiPickerListComponents.NSFWRow, {});
                                                  } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                    let guild_id;
                                                    if (channel != null) {
                                                      guild_id = channel.guild_id;
                                                    }
                                                    const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
                                                    tmp27Result = closure_2_14(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj);
                                                  }
                                                  let tmp16 = true === item.isSectionNitroLocked;
                                                  if (tmp16) {
                                                    const obj5 = { useTier0UpsellContent };
                                                    tmp16 = closure_2_14(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj5);
                                                  }
                                                  const obj6 = { children: null };
                                                  const items = [tmp16, tmp27Result];
                                                  obj6.children = items;
                                                  return value3(value2, obj6);
                                                }
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                        cResult[34] = guild_id2;
                                        cResult[35] = tmp7;
                                        cResult[36] = emojiPickerListRef;
                                        cResult[37] = tmp23;
                                        cResult[38] = tmp22;
                                        cResult[39] = rounded;
                                        cResult[40] = useTier0UpsellContent;
                                        cResult[41] = ce;
                                        tmp28 = ce;
                                      }
                                    }
                                    let obj6 = { emojiSections: arr3, rowSize: rounded, isNativeEmojiPickerEnabled: tmp14 };
                                    cResult[28] = arr3;
                                    cResult[29] = tmp14;
                                    cResult[30] = rounded;
                                    cResult[31] = obj6;
                                    tmp24 = obj6;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    function ne(emoji, category) {
                      let str;
                      if (searchQueryRef != null) {
                        str = searchQueryRef.current;
                      }
                      if (str == null) {
                        str = "";
                      }
                      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
                      const emojiUnavailableReason = EmojiUtilsDefault.getEmojiUnavailableReason({ emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement });
                      if (null === emojiUnavailableReason) {
                        if (onPressEmoji != null) {
                          onPressEmoji(emoji);
                        }
                      } else if (constants4.ROLE_SUBSCRIPTION_LOCKED === emojiUnavailableReason) {
                        ChatInputUtils.dismissKeyboard();
                        if (null != emoji.guildId) {
                          const obj4 = { guildId: emoji.guildId };
                          const result1 = RoleSubscriptionUpsellUtilsDefault.handleShowEmojiUpsellAlert(obj4);
                          const tmp4Result = RoleSubscriptionUpsellUtilsDefault;
                        }
                        const tmp2Result = ChatInputUtils;
                      } else if (tmp48.PREMIUM_LOCKED === emojiUnavailableReason) {
                        const obj5 = { initialUpsellKey: emoji.animated ? React6.ANIMATED_EMOJI : React6.GLOBAL_EMOJI, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
                        let guild_id;
                        if (channel != null) {
                          guild_id = channel.guild_id;
                        }
                        if (null != guild_id) {
                          let DM_CHANNEL = constants2.GUILD_CHANNEL;
                        } else {
                          DM_CHANNEL = constants2.DM_CHANNEL;
                        }
                        const obj6 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
                        obj5.analyticsLocation = obj6;
                        if (category === EmojiCategoryTypes.SUGGESTED) {
                          const items = [];
                          items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = AnalyticsLocationDefault.EMOJI_SUGGESTIONS;
                          let tmp17 = items;
                          const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
                        } else {
                          tmp17 = analyticsLocations;
                        }
                        obj5.analyticsLocations = tmp17;
                        if (emojiPickerIntention === constants5.REACTION) {
                          let EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                        } else {
                          EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                        }
                        const obj7 = { type: EMOJI_PICKER_EMOJI_CLICKED, is_animated: emoji.animated, is_external: null, has_search_query: null };
                        let tmp24 = null != emoji.guildId;
                        if (tmp24) {
                          let guild_id1;
                          if (channel != null) {
                            guild_id1 = channel.guild_id;
                          }
                          tmp24 = emoji.guildId !== guild_id1;
                        }
                        obj7.is_external = tmp24;
                        obj7.has_search_query = tmp;
                        obj5.analyticsProperties = obj7;
                        const result2 = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj5);
                        const tmp4Result4 = PremiumUpsellUtilsDefault;
                      } else {
                        const obj8 = { text: null };
                        const intl = util.intl;
                        obj8.text = intl.string(util.t.VsE5yG);
                        ToastActionCreatorsDefault.open("EMOJI_PICKER_LIST_PRESS_DISABLED", obj8);
                        const tmp4Result5 = ToastActionCreatorsDefault;
                      }
                      if (null == emojiUnavailableReason) {
                        if (category === EmojiCategoryTypes.SUGGESTED) {
                          const found = categories.find((type) => type.type === constants.SUGGESTED);
                          const obj9 = { emoji, displayedSuggestions: null };
                          let emojis;
                          if (found != null) {
                            emojis = found.emojis;
                          }
                          if (emojis == null) {
                            emojis = [];
                          }
                          obj9.displayedSuggestions = emojis;
                          trackEmojiSuggestionSelectedDefault(obj9);
                          const tmp4Result6 = trackEmojiSuggestionSelectedDefault;
                        }
                      }
                      const tmp2Result2 = EmojiPickerUtils;
                      if (str.length > 0) {
                        let obj10 = { emoji, location: null, searchQuery: null, intention: null, messageId: null };
                        let guild_id2;
                        if (channel != null) {
                          guild_id2 = channel.guild_id;
                        }
                        if (null != guild_id2) {
                          let DM_CHANNEL3 = constants2.GUILD_CHANNEL;
                        } else {
                          DM_CHANNEL3 = constants2.DM_CHANNEL;
                        }
                        const obj11 = { page: DM_CHANNEL3, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
                        obj10.location = obj11;
                        obj10.searchQuery = str;
                        obj10.intention = emojiPickerIntention;
                        obj10.messageId = messageId;
                        obj10 = tmp2Result2.trackEmojiSearchSelect(obj10);
                      } else {
                        const obj12 = { emoji, pickerIntention: emojiPickerIntention, category, location: null, messageId: null };
                        let guild_id3;
                        if (channel != null) {
                          guild_id3 = channel.guild_id;
                        }
                        if (null != guild_id3) {
                          let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
                        } else {
                          DM_CHANNEL2 = constants2.DM_CHANNEL;
                        }
                        const obj13 = { page: DM_CHANNEL2, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
                        obj12.location = obj13;
                        obj12.messageId = messageId;
                        tmp2Result2.trackEmojiSelect(obj12);
                      }
                      const obj3 = { emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement };
                    }
                    cResult[16] = analyticsLocations;
                    cResult[17] = bypassPremiumEmojiEntitlement;
                    cResult[18] = categories;
                    cResult[19] = channel;
                    cResult[20] = guildId;
                    cResult[21] = emojiPickerIntention;
                    cResult[22] = messageId;
                    cResult[23] = onPressEmoji;
                    cResult[24] = searchQueryRef;
                    cResult[25] = ne;
                    tmp22 = ne;
                    const tmpResult5 = tmp(tmp2[20]);
                  }
                }
              }
            }
          }
        }
        if (null != emojis) {
          let obj7 = { emojis, rowSize: rounded, limit: null };
          let num7;
          if (tmp14) {
            num7 = 200;
          }
          obj7.limit = num7;
          let searchResults = computeSearchResults(obj7);
        } else {
          let obj8 = { categories, rowSize: rounded, isNativeEmojiPickerEnabled: tmp14 };
          searchResults = computeCategories(obj8);
        }
        cResult[8] = categories;
        cResult[9] = computeCategories;
        cResult[10] = computeSearchResults;
        cResult[11] = emojis;
        cResult[12] = tmp14;
        cResult[13] = rounded;
        cResult[14] = searchResults;
        let tmp17 = tmp5(tmp2[17])();
      }
    }
    let obj9 = { intention: emojiPickerIntention, rowSize: rounded, analyticsObject };
    cResult[4] = analyticsObject;
    cResult[5] = emojiPickerIntention;
    cResult[6] = rounded;
    cResult[7] = obj9;
    tmp15 = obj9;
  }
  const fn = function u() {
    const result = TopEmojisActionCreators.updateNewlyAddedLastSeen(guildId, id);
  };
  const items1 = [id, guildId];
  cResult[0] = guildId;
  cResult[1] = id;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp11 = items1;
  tmp10 = fn;
}) : (function EmojiPickerList(analyticsObject) {
  ({ bottomSheetIndex, categories } = analyticsObject);
  const emojiPickerListRef = analyticsObject.emojiPickerListRef;
  ({ emojis, channel } = analyticsObject);
  let guildId = analyticsObject.guildId;
  let onPressEmoji = analyticsObject.onPressEmoji;
  const onLongPressEmoji = analyticsObject.onLongPressEmoji;
  const emojiPickerIntention = analyticsObject.emojiPickerIntention;
  let num = analyticsObject.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  let num2 = analyticsObject.insetTop;
  if (num2 === undefined) {
    num2 = 0;
  }
  let flag = analyticsObject.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const searchQueryRef = analyticsObject.searchQueryRef;
  const messageId = analyticsObject.messageId;
  const bypassPremiumEmojiEntitlement = analyticsObject.bypassPremiumEmojiEntitlement;
  let rounded;
  let useTier0UpsellContent;
  onPressEmoji = undefined;
  let callback1;
  let setting;
  const analyticsLocations = emojiPickerListRef(channel[10])(emojiPickerListRef(channel[11]).EMOJI).analyticsLocations;
  const tmp4 = emojiPickerListRef(channel[12])(flag);
  const containerWidth = tmp4;
  rounded = Math.floor((tmp4 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = emojiPickerListRef(channel[13])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  let items = [id, guildId];
  const effect = guildId.useEffect(() => {
    const result = TopEmojisActionCreators.updateNewlyAddedLastSeen(guildId, id);
  }, items);
  const tmp8 = emojiPickerListRef(channel[15])();
  const tmp3 = emojiPickerListRef(channel[10]);
  const trackOnEmojiPickerOpenedForReactions = categories(channel[16]).useTrackOnEmojiPickerOpenedForReactions({ intention: emojiPickerIntention, rowSize: rounded, analyticsObject: analyticsObject.analyticsObject });
  emojiPickerListRef(channel[17])();
  if (null != emojis) {
    let obj3 = { emojis, rowSize: rounded, limit: null };
    let num3;
    if (tmp8) {
      num3 = 200;
    }
    obj3.limit = num3;
    let tmp12Result = tmp13(obj3);
  } else {
    let obj4 = { categories, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 };
    tmp12Result = tmp12(obj4);
  }
  let obj2 = categories(channel[16]);
  const tmp9Result = categories(channel[20]);
  useTier0UpsellContent = tmp9Result.usePremiumUpsellConfig(categories(channel[18]).getUpsellType(tmp9(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE)).useTier0UpsellContent;
  const items1 = [searchQueryRef, channel, emojiPickerIntention, guildId, categories, onPressEmoji, analyticsLocations, messageId, bypassPremiumEmojiEntitlement];
  onPressEmoji = obj.useCallback((emoji, category) => {
    let str;
    if (searchQueryRef != null) {
      str = searchQueryRef.current;
    }
    if (str == null) {
      str = "";
    }
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    const emojiUnavailableReason = EmojiUtilsDefault.getEmojiUnavailableReason({ emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement });
    if (null === emojiUnavailableReason) {
      if (onPressEmoji != null) {
        onPressEmoji(emoji);
      }
    } else if (constants4.ROLE_SUBSCRIPTION_LOCKED === emojiUnavailableReason) {
      ChatInputUtils.dismissKeyboard();
      if (null != emoji.guildId) {
        const obj4 = { guildId: emoji.guildId };
        const result1 = RoleSubscriptionUpsellUtilsDefault.handleShowEmojiUpsellAlert(obj4);
        const tmp4Result = RoleSubscriptionUpsellUtilsDefault;
      }
      const tmp2Result = ChatInputUtils;
    } else if (tmp48.PREMIUM_LOCKED === emojiUnavailableReason) {
      const obj5 = { initialUpsellKey: emoji.animated ? React6.ANIMATED_EMOJI : React6.GLOBAL_EMOJI, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (null != guild_id) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      const obj6 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
      obj5.analyticsLocation = obj6;
      if (category === EmojiCategoryTypes.SUGGESTED) {
        const items = [];
        items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = AnalyticsLocationDefault.EMOJI_SUGGESTIONS;
        let tmp17 = items;
        const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
      } else {
        tmp17 = analyticsLocations;
      }
      obj5.analyticsLocations = tmp17;
      if (emojiPickerIntention === constants5.REACTION) {
        let EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
      } else {
        EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
      }
      const obj7 = { type: EMOJI_PICKER_EMOJI_CLICKED, is_animated: emoji.animated, is_external: null, has_search_query: null };
      let tmp24 = null != emoji.guildId;
      if (tmp24) {
        let guild_id1;
        if (channel != null) {
          guild_id1 = channel.guild_id;
        }
        tmp24 = emoji.guildId !== guild_id1;
      }
      obj7.is_external = tmp24;
      obj7.has_search_query = tmp;
      obj5.analyticsProperties = obj7;
      const result2 = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj5);
      const tmp4Result4 = PremiumUpsellUtilsDefault;
    } else {
      const obj8 = { text: null };
      const intl = util.intl;
      obj8.text = intl.string(util.t.VsE5yG);
      ToastActionCreatorsDefault.open("EMOJI_PICKER_LIST_PRESS_DISABLED", obj8);
      const tmp4Result5 = ToastActionCreatorsDefault;
    }
    if (null == emojiUnavailableReason) {
      if (category === EmojiCategoryTypes.SUGGESTED) {
        const found = categories.find((type) => type.type === constants.SUGGESTED);
        const obj9 = { emoji, displayedSuggestions: null };
        let emojis;
        if (found != null) {
          emojis = found.emojis;
        }
        if (emojis == null) {
          emojis = [];
        }
        obj9.displayedSuggestions = emojis;
        trackEmojiSuggestionSelectedDefault(obj9);
        const tmp4Result6 = trackEmojiSuggestionSelectedDefault;
      }
    }
    const tmp2Result2 = EmojiPickerUtils;
    if (str.length > 0) {
      let obj10 = { emoji, location: null, searchQuery: null, intention: null, messageId: null };
      let guild_id2;
      if (channel != null) {
        guild_id2 = channel.guild_id;
      }
      if (null != guild_id2) {
        let DM_CHANNEL3 = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL3 = constants2.DM_CHANNEL;
      }
      const obj11 = { page: DM_CHANNEL3, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
      obj10.location = obj11;
      obj10.searchQuery = str;
      obj10.intention = emojiPickerIntention;
      obj10.messageId = messageId;
      obj10 = tmp2Result2.trackEmojiSearchSelect(obj10);
    } else {
      const obj12 = { emoji, pickerIntention: emojiPickerIntention, category, location: null, messageId: null };
      let guild_id3;
      if (channel != null) {
        guild_id3 = channel.guild_id;
      }
      if (null != guild_id3) {
        let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL2 = constants2.DM_CHANNEL;
      }
      const obj13 = { page: DM_CHANNEL2, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
      obj12.location = obj13;
      obj12.messageId = messageId;
      tmp2Result2.trackEmojiSelect(obj12);
    }
    const obj3 = { emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement };
  }, items1);
  const items2 = [onLongPressEmoji];
  callback1 = obj.useCallback((arg0) => {
    if (onLongPressEmoji != null) {
      tmp(arg0);
    }
  }, items2);
  let tmp16 = emojiPickerListRef(channel[30])({ emojiSections: tmp12Result, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 });
  const AnimateEmoji = tmp9(tmp2[31]).AnimateEmoji;
  setting = AnimateEmoji.useSetting();
  const items3 = [analyticsLocations, onPressEmoji, callback1, channel, rounded, tmp4, setting, emojiPickerListRef, useTier0UpsellContent];
  const callback2 = obj.useCallback((item) => {
    item = item.item;
    const type = item.type;
    ({ target, index } = item);
    if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
      if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
        if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
          if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
            if ("StickyHeader" === target) {
              const current = emojiPickerListRef.current;
              if (current != null) {
                const result = current.onStickyHeaderRendered(index);
              }
            }
            const obj2 = { label: item.title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
            return closure_2_14(EmojiPickerListComponents.Section, obj2);
          } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
            const obj3 = { position: item.position, useTier0UpsellContent };
            return closure_2_14(PremiumUpsellSectionDividerDefault, obj3);
          } else {
            if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
              ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
              const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji: callback1, animateEmoji: setting, row, isSectionNitroLocked };
              let tmp27Result = closure_2_14(EmojiPickerListRow.EmojiPickerListRow, obj4);
            } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
              tmp27Result = closure_2_14(EmojiPickerListComponents.NSFWRow, {});
            } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
              tmp27Result = closure_2_14(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj);
            }
            let tmp16 = true === item.isSectionNitroLocked;
            if (tmp16) {
              const obj5 = { useTier0UpsellContent };
              tmp16 = closure_2_14(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj5);
            }
            const obj6 = { children: null };
            const items = [tmp16, tmp27Result];
            obj6.children = items;
            return value3(value2, obj6);
          }
        }
      }
    }
    return null;
  }, items3);
  emojiPickerListRef(channel[37])();
  if (0 === tmp12Result.length) {
    let obj5 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    return useTier0UpsellContent(tmp(tmp2[38]), obj5);
  } else {
    let hasSearchUpsell = tmp16.hasSearchUpsell;
    if (hasSearchUpsell) {
      hasSearchUpsell = tmp9(tmp2[41]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(tmp9(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, "native.EmojiPickerList");
      const tmp9Result4 = tmp9(tmp2[41]);
    }
    let obj6 = { analyticsLocations, animateEmoji: setting, bottomSheetIndex, categoryIndexActive: analyticsObject.categoryIndexActive, data: tmp16, guildId: null, inPortalKeyboard: null, onPressEmoji: null, onLongPressEmoji: null, onShowNitroUpsell: null, paddingBottom: null, paddingTop: null, ref: null, renderItem: null, useTier0UpsellContent: null };
    if (guildId == null) {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      guildId = guild_id;
    }
    obj6.guildId = guildId;
    obj6.inPortalKeyboard = flag;
    obj6.onPressEmoji = onPressEmoji;
    obj6.onLongPressEmoji = callback1;
    obj6.onShowNitroUpsell = tmp21;
    obj6.paddingBottom = num;
    obj6.paddingTop = num2;
    obj6.ref = emojiPickerListRef;
    obj6.renderItem = callback2;
    obj6.useTier0UpsellContent = useTier0UpsellContent;
    const items4 = [useTier0UpsellContent(tmp(tmp8 ? tmp2[39] : tmp2[40]), obj6), ];
    let tmp25Result = !hasSearchUpsell;
    if (!hasSearchUpsell) {
      let obj7 = { bottomSheetIndex, featureName: tmp9(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: flag, shouldShow: tmp20 };
      tmp25Result = tmp25(tmp(tmp2[42]), obj7);
      const tmpResult2 = tmp(tmp2[42]);
    }
    let obj8 = { children: null };
    items4[1] = tmp25Result;
    obj8.children = items4;
    return callback1(onPressEmoji, obj8);
  }
  const tmp9Result3 = categories(channel[18]);
}));