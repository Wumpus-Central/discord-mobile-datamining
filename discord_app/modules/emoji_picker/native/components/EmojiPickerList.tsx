// === Module 9455: EmojiPickerList ===

// Module 9455 (EmojiPickerList)
import util from "util" /* 1126 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4768 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5058 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9269 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 9430 */;
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9433 */;
import RoleSubscriptionUpsellUtilsDefault from "RoleSubscriptionUpsellUtils" /* 9462 */;
import useEmojiPickerData from "useEmojiPickerData" /* 9506 */;
import PremiumUpsellSectionDividerDefault from "PremiumUpsellSectionDivider" /* 9509 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9510 */;
import EmojiPickerListComponents from "EmojiPickerListComponents" /* 9512 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 9513 */;
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell" /* 9517 */;
import noop from "module_19" /* 19 */;

require = fn;
const IMAGE_SIZE = fn(9429).IMAGE_SIZE;
const Constants = fn(1085);
({ AnalyticsObjects: hasOwnProperty, AnalyticsPages: metroRequire, AnalyticsSections: closure_7, UpsellTypes: closure_8 } = Constants);
const EmojiConstants = fn(1393);
({ EmojiDisabledReasons: closure_9, EmojiIntention: c10 } = EmojiConstants);
const MIN_MARGIN = fn(1241).MIN_MARGIN;
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerList(guildId) {
  const cResult = emojiPickerListRef(guildId[8]).c(71);
  ({ bottomSheetIndex, categories, categoryIndexActive, emojiPickerListRef } = guildId);
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
  let obj = emojiPickerListRef(guildId[8]);
  const analyticsLocations = channel(guildId[9])(channel(tmp2[10]).EMOJI).analyticsLocations;
  const tmp7 = channel(guildId[11])(undefined !== inPortalKeyboard && inPortalKeyboard);
  const containerWidth = tmp7;
  rounded = Math.floor((tmp7 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = channel(tmp2[12])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === id) {
      let tmp10 = cResult[2];
      let tmp11 = cResult[3];
    }
    const effect = onPressEmoji.useEffect(tmp10, tmp11);
    const tmp14 = tmp5(tmp2[14])();
    if (cResult[4] === analyticsObject) {
      if (cResult[5] === emojiPickerIntention) {
        if (cResult[6] === rounded) {
          let tmp15 = cResult[7];
        }
        const trackOnEmojiPickerOpenedForReactions = tmp(tmp2[15]).useTrackOnEmojiPickerOpenedForReactions(tmp15);
        const tmpResult = tmp(tmp2[15]);
        ({ computeCategories, computeSearchResults } = tmp5(tmp2[16])());
        if (cResult[8] === categories) {
          if (cResult[9] === computeCategories) {
            if (cResult[10] === computeSearchResults) {
              if (cResult[11] === emojis) {
                if (cResult[12] === tmp14) {
                  if (cResult[13] === rounded) {
                    const _Symbol = Symbol;
                    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                      const upsellType = tmp(tmp2[17]).getUpsellType(tmp(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
                      cResult[15] = upsellType;
                      let tmp20 = upsellType;
                      const tmpResult4 = tmp(tmp2[17]);
                    } else {
                      tmp20 = cResult[15];
                    }
                    const useTier0UpsellContent = tmp(tmp2[19]).usePremiumUpsellConfig(tmp20).useTier0UpsellContent;
                    if (cResult[16] === analyticsLocations) {
                      if (cResult[17] === bypassPremiumEmojiEntitlement) {
                        if (cResult[18] === channel) {
                          if (cResult[19] === guildId) {
                            if (cResult[20] === emojiPickerIntention) {
                              if (cResult[21] === messageId) {
                                if (cResult[22] === onPressEmoji) {
                                  if (cResult[23] === searchQueryRef) {
                                    let tmp22 = cResult[24];
                                  }
                                  onPressEmoji = tmp22;
                                  if (cResult[25] !== onLongPressEmoji) {
                                    function ae(arg0) {
                                      if (onLongPressEmoji != null) {
                                        tmp(arg0);
                                      }
                                    }
                                    cResult[25] = onLongPressEmoji;
                                    cResult[26] = ae;
                                    let tmp23 = ae;
                                  } else {
                                    tmp23 = cResult[26];
                                  }
                                  onLongPressEmoji = tmp23;
                                  if (cResult[27] === arr3) {
                                    if (cResult[28] === tmp14) {
                                      if (cResult[29] === rounded) {
                                        let tmp24 = cResult[30];
                                      }
                                      const tmp25 = tmp5(tmp2[28])(tmp24);
                                      const AnimateEmoji = tmp(tmp2[29]).AnimateEmoji;
                                      const setting = AnimateEmoji.useSetting();
                                      if (cResult[31] === analyticsLocations) {
                                        if (cResult[32] === setting) {
                                          let guild_id;
                                          if (channel != null) {
                                            guild_id = channel.guild_id;
                                          }
                                          if (cResult[33] === guild_id) {
                                            if (cResult[34] === tmp7) {
                                              if (cResult[35] === emojiPickerListRef) {
                                                if (cResult[36] === tmp23) {
                                                  if (cResult[37] === tmp22) {
                                                    if (cResult[38] === rounded) {
                                                      if (cResult[39] === useTier0UpsellContent) {
                                                        let tmp28 = cResult[40];
                                                      }
                                                      ({ shouldShowUpsell, onShowNitroUpsell } = tmp5(tmp2[35])());
                                                      if (0 === arr3.length) {
                                                        if (cResult[41] === num) {
                                                          if (cResult[42] === num2) {
                                                            let tmp46 = cResult[43];
                                                          }
                                                          return tmp46;
                                                        }
                                                        let obj2 = { inActionSheet: true, insetTop: num2, insetBottom: num };
                                                        const tmp48 = useTier0UpsellContent(tmp5(tmp2[36]), obj2);
                                                        cResult[41] = num;
                                                        cResult[42] = num2;
                                                        cResult[43] = tmp48;
                                                        tmp46 = tmp48;
                                                      } else {
                                                        const tmp5Result = tmp5(tmp14 ? tmp2[37] : tmp2[38]);
                                                        if (cResult[44] !== tmp25.hasSearchUpsell) {
                                                          let hasSearchUpsell = tmp25.hasSearchUpsell;
                                                          if (hasSearchUpsell) {
                                                            hasSearchUpsell = tmp(tmp2[39]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(tmp(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, "native.EmojiPickerList");
                                                            const tmpResult6 = tmp(tmp2[39]);
                                                          }
                                                          cResult[44] = tmp25.hasSearchUpsell;
                                                          cResult[45] = hasSearchUpsell;
                                                          let tmp32 = hasSearchUpsell;
                                                        } else {
                                                          tmp32 = cResult[45];
                                                        }
                                                        let tmp33 = guildId;
                                                        if (guildId == null) {
                                                          let guild_id1;
                                                          if (channel != null) {
                                                            guild_id1 = channel.guild_id;
                                                          }
                                                          tmp33 = guild_id1;
                                                        }
                                                        if (cResult[46] === tmp5Result) {
                                                          if (cResult[47] === analyticsLocations) {
                                                            if (cResult[48] === setting) {
                                                              if (cResult[49] === bottomSheetIndex) {
                                                                if (cResult[50] === categoryIndexActive) {
                                                                  if (cResult[51] === tmp25) {
                                                                    if (cResult[52] === emojiPickerListRef) {
                                                                      if (cResult[53] === tmp4) {
                                                                        if (cResult[54] === num) {
                                                                          if (cResult[55] === num2) {
                                                                            if (cResult[56] === tmp23) {
                                                                              if (cResult[57] === tmp22) {
                                                                                if (cResult[58] === onShowNitroUpsell) {
                                                                                  if (cResult[59] === tmp28) {
                                                                                    if (cResult[60] === tmp33) {
                                                                                      if (cResult[63] === bottomSheetIndex) {
                                                                                        if (cResult[64] === tmp32) {
                                                                                          if (cResult[65] === tmp4) {
                                                                                            if (cResult[66] === shouldShowUpsell) {
                                                                                              let tmp38 = cResult[67];
                                                                                            }
                                                                                            if (cResult[68] === tmp35) {
                                                                                              if (cResult[69] === tmp38) {
                                                                                                let tmp42 = cResult[70];
                                                                                              }
                                                                                              return tmp42;
                                                                                            }
                                                                                            let obj3 = { children: null };
                                                                                            let items = [tmp35, tmp38];
                                                                                            obj3.children = items;
                                                                                            const tmp45 = onLongPressEmoji(onPressEmoji, obj3);
                                                                                            cResult[68] = tmp35;
                                                                                            cResult[69] = tmp38;
                                                                                            cResult[70] = tmp45;
                                                                                            tmp42 = tmp45;
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      let tmp39 = !tmp32;
                                                                                      if (!tmp32) {
                                                                                        let obj4 = { bottomSheetIndex, featureName: tmp(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: tmp4, shouldShow: shouldShowUpsell };
                                                                                        tmp39 = useTier0UpsellContent(tmp5(tmp2[40]), obj4);
                                                                                        const tmp5Result2 = tmp5(tmp2[40]);
                                                                                      }
                                                                                      cResult[63] = bottomSheetIndex;
                                                                                      cResult[64] = tmp32;
                                                                                      cResult[65] = tmp4;
                                                                                      cResult[66] = shouldShowUpsell;
                                                                                      cResult[67] = tmp39;
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
                                                        cResult[46] = tmp5Result;
                                                        cResult[47] = analyticsLocations;
                                                        cResult[48] = setting;
                                                        cResult[49] = bottomSheetIndex;
                                                        cResult[50] = categoryIndexActive;
                                                        cResult[51] = tmp25;
                                                        cResult[52] = emojiPickerListRef;
                                                        cResult[53] = tmp4;
                                                        cResult[54] = num;
                                                        cResult[55] = num2;
                                                        cResult[56] = tmp23;
                                                        cResult[57] = tmp22;
                                                        cResult[58] = onShowNitroUpsell;
                                                        cResult[59] = tmp28;
                                                        cResult[60] = tmp33;
                                                        cResult[61] = useTier0UpsellContent;
                                                        cResult[62] = useTier0UpsellContent(tmp5Result, obj5);
                                                        class I {
                                                          constructor() {
                                                            obj = closure_0(closure_2[13]);
                                                            result = obj.updateNewlyAddedLastSeen(guildId, id);
                                                            return;
                                                          }
                                                        }
                                                        const tmp37 = useTier0UpsellContent(tmp5Result, obj5);
                                                      }
                                                      const tmp30 = tmp5(tmp2[35])();
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      cResult[31] = analyticsLocations;
                                      cResult[32] = setting;
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
                                                return map1(EmojiPickerListComponents.Section, obj2);
                                              } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                const obj3 = { position: item.position, useTier0UpsellContent };
                                                return map1(PremiumUpsellSectionDividerDefault, obj3);
                                              } else {
                                                if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
                                                  ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                  const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji, animateEmoji: setting, row, isSectionNitroLocked };
                                                  let tmp27Result = map1(EmojiPickerListRow.EmojiPickerListRow, obj4);
                                                } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                  tmp27Result = map1(EmojiPickerListComponents.NSFWRow, {});
                                                } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                  let guild_id;
                                                  if (channel != null) {
                                                    guild_id = channel.guild_id;
                                                  }
                                                  const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
                                                  tmp27Result = map1(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj);
                                                }
                                                let tmp16 = true === item.isSectionNitroLocked;
                                                if (tmp16) {
                                                  const obj5 = { useTier0UpsellContent };
                                                  tmp16 = map1(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj5);
                                                }
                                                const obj6 = { children: null };
                                                const items = [tmp16, tmp27Result];
                                                obj6.children = items;
                                                return value2(closure_2_14, obj6);
                                              }
                                            }
                                          }
                                        }
                                        return null;
                                      }
                                      cResult[33] = guild_id2;
                                      cResult[34] = tmp7;
                                      cResult[35] = emojiPickerListRef;
                                      cResult[36] = tmp23;
                                      cResult[37] = tmp22;
                                      cResult[38] = rounded;
                                      cResult[39] = useTier0UpsellContent;
                                      cResult[40] = ce;
                                      tmp28 = ce;
                                    }
                                  }
                                  let obj6 = { emojiSections: arr3, rowSize: rounded, isNativeEmojiPickerEnabled: tmp14 };
                                  cResult[27] = arr3;
                                  cResult[28] = tmp14;
                                  cResult[29] = rounded;
                                  cResult[30] = obj6;
                                  tmp24 = obj6;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    function oe(emoji, category) {
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
                      } else if (tmp40.PREMIUM_LOCKED === emojiUnavailableReason) {
                        const obj5 = { initialUpsellKey: emoji.animated ? constants.ANIMATED_EMOJI : constants.GLOBAL_EMOJI, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
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
                        obj5.analyticsLocations = analyticsLocations;
                        if (emojiPickerIntention === constants5.REACTION) {
                          let EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                        } else {
                          EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                        }
                        const obj7 = { type: EMOJI_PICKER_EMOJI_CLICKED, is_animated: emoji.animated, is_external: null, has_search_query: null };
                        let tmp20 = null != emoji.guildId;
                        if (tmp20) {
                          let guild_id1;
                          if (channel != null) {
                            guild_id1 = channel.guild_id;
                          }
                          tmp20 = emoji.guildId !== guild_id1;
                        }
                        obj7.is_external = tmp20;
                        obj7.has_search_query = tmp;
                        obj5.analyticsProperties = obj7;
                        const result2 = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj5);
                        const tmp4Result3 = PremiumUpsellUtilsDefault;
                      } else {
                        const obj8 = { text: null };
                        const intl = util.intl;
                        obj8.text = intl.string(util.t.VsE5yG);
                        ToastActionCreatorsDefault.open("EMOJI_PICKER_LIST_PRESS_DISABLED", obj8);
                        const tmp4Result4 = ToastActionCreatorsDefault;
                      }
                      const tmp2Result2 = EmojiPickerUtils;
                      if (str.length > 0) {
                        let obj9 = { emoji, location: null, searchQuery: null, intention: null, messageId: null };
                        let guild_id2;
                        if (channel != null) {
                          guild_id2 = channel.guild_id;
                        }
                        if (null != guild_id2) {
                          let DM_CHANNEL3 = constants2.GUILD_CHANNEL;
                        } else {
                          DM_CHANNEL3 = constants2.DM_CHANNEL;
                        }
                        const obj10 = { page: DM_CHANNEL3, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
                        obj9.location = obj10;
                        obj9.searchQuery = str;
                        obj9.intention = emojiPickerIntention;
                        obj9.messageId = messageId;
                        obj9 = tmp2Result2.trackEmojiSearchSelect(obj9);
                      } else {
                        const obj11 = { emoji, pickerIntention: emojiPickerIntention, category, location: null, messageId: null };
                        let guild_id3;
                        if (channel != null) {
                          guild_id3 = channel.guild_id;
                        }
                        if (null != guild_id3) {
                          let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
                        } else {
                          DM_CHANNEL2 = constants2.DM_CHANNEL;
                        }
                        const obj12 = { page: DM_CHANNEL2, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
                        obj11.location = obj12;
                        obj11.messageId = messageId;
                        tmp2Result2.trackEmojiSelect(obj11);
                      }
                      const obj3 = { emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement };
                    }
                    cResult[16] = analyticsLocations;
                    cResult[17] = bypassPremiumEmojiEntitlement;
                    cResult[18] = channel;
                    cResult[19] = guildId;
                    cResult[20] = emojiPickerIntention;
                    cResult[21] = messageId;
                    cResult[22] = onPressEmoji;
                    cResult[23] = searchQueryRef;
                    cResult[24] = oe;
                    tmp22 = oe;
                    const tmpResult5 = tmp(tmp2[19]);
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
        const tmp17 = tmp5(tmp2[16])();
      }
    }
    let obj9 = { intention: emojiPickerIntention, rowSize: rounded, analyticsObject };
    cResult[4] = analyticsObject;
    cResult[5] = emojiPickerIntention;
    cResult[6] = rounded;
    cResult[7] = obj9;
    tmp15 = obj9;
  }
  class I {
    constructor() {
      obj = closure_0(closure_2[13]);
      result = obj.updateNewlyAddedLastSeen(guildId, id);
      return;
    }
  }
  const items1 = [id, guildId];
  cResult[0] = guildId;
  cResult[1] = id;
  cResult[2] = I;
  cResult[3] = items1;
  tmp11 = items1;
  tmp10 = I;
}) : (function EmojiPickerList(analyticsObject) {
  ({ bottomSheetIndex, emojiPickerListRef } = analyticsObject);
  ({ emojis, channel } = analyticsObject);
  let guildId = analyticsObject.guildId;
  let onPressEmoji = analyticsObject.onPressEmoji;
  const onLongPressEmoji = analyticsObject.onLongPressEmoji;
  const emojiPickerIntention = analyticsObject.emojiPickerIntention;
  let num = analyticsObject.insetBottom;
  ({ categories, categoryIndexActive } = analyticsObject);
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
  const analyticsLocations = channel(guildId[9])(channel(guildId[10]).EMOJI).analyticsLocations;
  const tmp4 = channel(guildId[11])(flag);
  const containerWidth = tmp4;
  rounded = Math.floor((tmp4 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = channel(guildId[12])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  let items = [id, guildId];
  const effect = onPressEmoji.useEffect(() => {
    const result = TopEmojisActionCreators.updateNewlyAddedLastSeen(guildId, id);
  }, items);
  const tmp8 = channel(guildId[14])();
  const tmp3 = channel(guildId[9]);
  const trackOnEmojiPickerOpenedForReactions = emojiPickerListRef(guildId[15]).useTrackOnEmojiPickerOpenedForReactions({ intention: emojiPickerIntention, rowSize: rounded, analyticsObject: analyticsObject.analyticsObject });
  channel(guildId[16])();
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
  let obj2 = emojiPickerListRef(guildId[15]);
  const tmp9Result = emojiPickerListRef(guildId[19]);
  useTier0UpsellContent = tmp9Result.usePremiumUpsellConfig(emojiPickerListRef(guildId[17]).getUpsellType(tmp9(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE)).useTier0UpsellContent;
  const items1 = [searchQueryRef, channel, emojiPickerIntention, guildId, onPressEmoji, analyticsLocations, messageId, bypassPremiumEmojiEntitlement];
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
    } else if (tmp40.PREMIUM_LOCKED === emojiUnavailableReason) {
      const obj5 = { initialUpsellKey: emoji.animated ? constants.ANIMATED_EMOJI : constants.GLOBAL_EMOJI, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
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
      obj5.analyticsLocations = analyticsLocations;
      if (emojiPickerIntention === constants5.REACTION) {
        let EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
      } else {
        EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
      }
      const obj7 = { type: EMOJI_PICKER_EMOJI_CLICKED, is_animated: emoji.animated, is_external: null, has_search_query: null };
      let tmp20 = null != emoji.guildId;
      if (tmp20) {
        let guild_id1;
        if (channel != null) {
          guild_id1 = channel.guild_id;
        }
        tmp20 = emoji.guildId !== guild_id1;
      }
      obj7.is_external = tmp20;
      obj7.has_search_query = tmp;
      obj5.analyticsProperties = obj7;
      const result2 = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj5);
      const tmp4Result3 = PremiumUpsellUtilsDefault;
    } else {
      const obj8 = { text: null };
      const intl = util.intl;
      obj8.text = intl.string(util.t.VsE5yG);
      ToastActionCreatorsDefault.open("EMOJI_PICKER_LIST_PRESS_DISABLED", obj8);
      const tmp4Result4 = ToastActionCreatorsDefault;
    }
    const tmp2Result2 = EmojiPickerUtils;
    if (str.length > 0) {
      let obj9 = { emoji, location: null, searchQuery: null, intention: null, messageId: null };
      let guild_id2;
      if (channel != null) {
        guild_id2 = channel.guild_id;
      }
      if (null != guild_id2) {
        let DM_CHANNEL3 = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL3 = constants2.DM_CHANNEL;
      }
      const obj10 = { page: DM_CHANNEL3, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
      obj9.location = obj10;
      obj9.searchQuery = str;
      obj9.intention = emojiPickerIntention;
      obj9.messageId = messageId;
      obj9 = tmp2Result2.trackEmojiSearchSelect(obj9);
    } else {
      const obj11 = { emoji, pickerIntention: emojiPickerIntention, category, location: null, messageId: null };
      let guild_id3;
      if (channel != null) {
        guild_id3 = channel.guild_id;
      }
      if (null != guild_id3) {
        let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL2 = constants2.DM_CHANNEL;
      }
      const obj12 = { page: DM_CHANNEL2, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
      obj11.location = obj12;
      obj11.messageId = messageId;
      tmp2Result2.trackEmojiSelect(obj11);
    }
    const obj3 = { emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement };
  }, items1);
  const items2 = [onLongPressEmoji];
  callback1 = obj.useCallback((arg0) => {
    if (onLongPressEmoji != null) {
      tmp(arg0);
    }
  }, items2);
  let tmp16 = channel(guildId[28])({ emojiSections: tmp12Result, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 });
  const AnimateEmoji = tmp9(tmp2[29]).AnimateEmoji;
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
            return map1(EmojiPickerListComponents.Section, obj2);
          } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
            const obj3 = { position: item.position, useTier0UpsellContent };
            return map1(PremiumUpsellSectionDividerDefault, obj3);
          } else {
            if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
              ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
              const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji: callback1, animateEmoji: setting, row, isSectionNitroLocked };
              let tmp27Result = map1(EmojiPickerListRow.EmojiPickerListRow, obj4);
            } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
              tmp27Result = map1(EmojiPickerListComponents.NSFWRow, {});
            } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
              tmp27Result = map1(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj);
            }
            let tmp16 = true === item.isSectionNitroLocked;
            if (tmp16) {
              const obj5 = { useTier0UpsellContent };
              tmp16 = map1(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj5);
            }
            const obj6 = { children: null };
            const items = [tmp16, tmp27Result];
            obj6.children = items;
            return value2(closure_2_14, obj6);
          }
        }
      }
    }
    return null;
  }, items3);
  channel(guildId[35])();
  if (0 === tmp12Result.length) {
    let obj5 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    return useTier0UpsellContent(tmp(tmp2[36]), obj5);
  } else {
    let hasSearchUpsell = tmp16.hasSearchUpsell;
    if (hasSearchUpsell) {
      hasSearchUpsell = tmp9(tmp2[39]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(tmp9(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, "native.EmojiPickerList");
      const tmp9Result4 = tmp9(tmp2[39]);
    }
    let obj6 = { analyticsLocations, animateEmoji: setting, bottomSheetIndex, categoryIndexActive, data: tmp16, guildId: null, inPortalKeyboard: null, onPressEmoji: null, onLongPressEmoji: null, onShowNitroUpsell: null, paddingBottom: null, paddingTop: null, ref: null, renderItem: null, useTier0UpsellContent: null };
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
    const items4 = [useTier0UpsellContent(tmp(tmp8 ? tmp2[37] : tmp2[38]), obj6), ];
    let tmp25Result = !hasSearchUpsell;
    if (!hasSearchUpsell) {
      let obj7 = { bottomSheetIndex, featureName: tmp9(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: flag, shouldShow: tmp20 };
      tmp25Result = tmp25(tmp(tmp2[40]), obj7);
      const tmpResult2 = tmp(tmp2[40]);
    }
    let obj8 = { children: null };
    items4[1] = tmp25Result;
    obj8.children = items4;
    return callback1(onPressEmoji, obj8);
  }
  const tmp9Result3 = emojiPickerListRef(guildId[17]);
}));