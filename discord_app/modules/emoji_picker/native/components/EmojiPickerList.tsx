// === Module 9855: EmojiPickerList ===

// Module 9855 (EmojiPickerList)
import util from "util" /* 1125 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4922 */;
import ChatInputUtils from "ChatInputUtils" /* 5160 */;
import HapticUtils from "HapticUtils" /* 5213 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5214 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5664 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7280 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9674 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 9831 */;
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9834 */;
import RoleSubscriptionUpsellUtilsDefault from "RoleSubscriptionUpsellUtils" /* 9861 */;
import trackEmojiSuggestionSelectedDefault from "trackEmojiSuggestionSelected" /* 9905 */;
import useEmojiPickerData from "useEmojiPickerData" /* 9906 */;
import PremiumUpsellSectionDividerDefault from "PremiumUpsellSectionDivider" /* 9909 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9910 */;
import EmojiPickerListComponents from "EmojiPickerListComponents" /* 9912 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 9913 */;
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell" /* 9917 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategoryTypes = fn(6729).EmojiCategoryTypes;
const IMAGE_SIZE = fn(9830).IMAGE_SIZE;
const Constants = fn(1084);
({ AnalyticsObjects: metroRequire, AnalyticsPages: closure_7, AnalyticsSections: closure_8, UpsellTypes: closure_9 } = Constants);
const EmojiConstants = fn(1392);
({ EmojiDisabledReasons: c10, EmojiIntention: closure_11 } = EmojiConstants);
const MIN_MARGIN = fn(1240).MIN_MARGIN;
const PremiumUpsellTypes = fn(1391).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerList(guildId) {
  const cResult = categories(channel[9]).c(70);
  ({ bottomSheetIndex, categories } = guildId);
  ({ categoryIndexActive, emojiPickerListRef } = guildId);
  ({ emojis, channel } = guildId);
  guildId = guildId.guildId;
  onPressEmoji = guildId.onPressEmoji;
  onLongPressEmoji = guildId.onLongPressEmoji;
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
  containerWidth = tmp7;
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
                      const tmpResult3 = tmp(tmp2[18]);
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
                                                              const tmp45 = cResult[44];
                                                            }
                                                            return tmp45;
                                                          }
                                                          let obj2 = { inActionSheet: true, insetTop: num2, insetBottom: num };
                                                          cResult[42] = num;
                                                          cResult[43] = num2;
                                                          cResult[44] = useTier0UpsellContent(tmp5(tmp2[38]), obj2);
                                                          class Ee {
                                                            constructor(arg0) {
                                                              item = guildId.item;
                                                              type = item.type;
                                                              tmp = closure_0;
                                                              tmp2 = closure_2;
                                                              ({ target, index } = guildId);
                                                              if (closure_0(closure_2[30]).EmojiPickerItemType.NATIVE_SECTION !== type) {
                                                                if (tmp(tmp2[30]).EmojiPickerItemType.PLACEHOLDER !== type) {
                                                                  if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                                    if (tmp(tmp2[30]).EmojiPickerItemType.TITLE === type) {
                                                                      str = "StickyHeader";
                                                                      if ("StickyHeader" === target) {
                                                                        tmp22 = emojiPickerListRef;
                                                                        current = emojiPickerListRef.current;
                                                                        tmp23 = null;
                                                                        if (current != null) {
                                                                          result = current.onStickyHeaderRendered(index);
                                                                        }
                                                                      }
                                                                      tmp25 = jsx;
                                                                      obj1 = { label: null, isSectionNitroLocked: null, useTier0UpsellContent: null };
                                                                      obj1.label = item.title;
                                                                      obj1.isSectionNitroLocked = item.isSectionNitroLocked;
                                                                      tmp26 = useTier0UpsellContent;
                                                                      obj1.useTier0UpsellContent = useTier0UpsellContent;
                                                                      return jsx(tmp(tmp2[32]).Section, obj1);
                                                                    } else if (tmp(tmp2[30]).EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                                      tmp19 = jsx;
                                                                      tmp20 = closure_1;
                                                                      obj7 = { position: null, useTier0UpsellContent: null };
                                                                      obj7.position = item.position;
                                                                      tmp21 = useTier0UpsellContent;
                                                                      obj7.useTier0UpsellContent = useTier0UpsellContent;
                                                                      return jsx(closure_1(tmp2[33]), obj7);
                                                                    } else {
                                                                      if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW === type) {
                                                                        tmp8 = jsx;
                                                                        ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                                        obj8 = { emojis: null, emojisDisabled: null, category: null, rowSize: null, containerWidth: null, onPressEmoji: null, onLongPressEmoji: null, animateEmoji: null, row: null, isSectionNitroLocked: null };
                                                                        obj8.emojis = emojis;
                                                                        obj8.emojisDisabled = emojisDisabled;
                                                                        obj8.category = footer;
                                                                        tmp9 = closure_12;
                                                                        obj8.rowSize = closure_12;
                                                                        tmp10 = closure_11;
                                                                        obj8.containerWidth = closure_11;
                                                                        tmp11 = closure_15;
                                                                        obj8.onPressEmoji = closure_15;
                                                                        tmp12 = closure_16;
                                                                        obj8.onLongPressEmoji = closure_16;
                                                                        tmp13 = closure_17;
                                                                        obj8.animateEmoji = closure_17;
                                                                        obj8.row = row;
                                                                        obj8.isSectionNitroLocked = isSectionNitroLocked;
                                                                        tmp27Result = jsx(tmp(tmp2[34]).EmojiPickerListRow, obj8);
                                                                      } else if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                                        tmp7 = jsx;
                                                                        tmp27Result = jsx(tmp(tmp2[32]).NSFWRow, {});
                                                                      } else if (tmp(tmp2[30]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                                        tmp27 = jsx;
                                                                        tmp28 = null;
                                                                        guild_id = undefined;
                                                                        if (channel != null) {
                                                                          guild_id = channel.guild_id;
                                                                        }
                                                                        obj = { guildId: null, analyticsLocations: null, useTier0UpsellContent: null };
                                                                        obj.guildId = guild_id;
                                                                        tmp5 = analyticsLocations;
                                                                        obj.analyticsLocations = analyticsLocations;
                                                                        tmp6 = useTier0UpsellContent;
                                                                        obj.useTier0UpsellContent = useTier0UpsellContent;
                                                                        tmp27Result = tmp27(tmp(tmp2[35]).PremiumSearchUpsell, obj);
                                                                      }
                                                                      flag = true;
                                                                      tmp16 = true === item.isSectionNitroLocked;
                                                                      tmp14 = jsxs;
                                                                      tmp15 = Fragment;
                                                                      if (tmp16) {
                                                                        tmp17 = jsx;
                                                                        obj9 = { useTier0UpsellContent: null };
                                                                        tmp18 = useTier0UpsellContent;
                                                                        obj9.useTier0UpsellContent = useTier0UpsellContent;
                                                                        tmp16 = jsx(tmp(tmp2[36]).PremiumUpsellGradientBackground, obj9);
                                                                      }
                                                                      obj10 = { children: null };
                                                                      items = [, ];
                                                                      items[0] = tmp16;
                                                                      items[1] = tmp27Result;
                                                                      obj10.children = items;
                                                                      return tmp14(tmp15, obj10);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              return null;
                                                            }
                                                          }
                                                          const tmp47 = useTier0UpsellContent(tmp5(tmp2[38]), obj2);
                                                        } else {
                                                          const tmp5Result = tmp5(tmp14 ? tmp2[39] : tmp2[40]);
                                                          const hasSearchUpsell = tmp25.hasSearchUpsell;
                                                          let tmp32 = guildId;
                                                          if (guildId == null) {
                                                            let guild_id1;
                                                            if (channel != null) {
                                                              guild_id1 = channel.guild_id;
                                                            }
                                                            tmp32 = guild_id1;
                                                          }
                                                          if (cResult[45] === tmp5Result) {
                                                            if (cResult[46] === analyticsLocations) {
                                                              if (cResult[47] === setting) {
                                                                if (cResult[48] === bottomSheetIndex) {
                                                                  if (cResult[49] === categoryIndexActive) {
                                                                    if (cResult[50] === tmp25) {
                                                                      if (cResult[51] === emojiPickerListRef) {
                                                                        if (cResult[52] === tmp4) {
                                                                          if (cResult[53] === num) {
                                                                            if (cResult[54] === num2) {
                                                                              if (cResult[55] === tmp23) {
                                                                                if (cResult[56] === tmp22) {
                                                                                  if (cResult[57] === onShowNitroUpsell) {
                                                                                    if (cResult[58] === tmp28) {
                                                                                      if (cResult[59] === tmp32) {
                                                                                        if (cResult[60] === useTier0UpsellContent) {
                                                                                          let tmp34 = cResult[61];
                                                                                        }
                                                                                        if (cResult[62] === bottomSheetIndex) {
                                                                                          if (cResult[63] === hasSearchUpsell) {
                                                                                            if (cResult[64] === tmp4) {
                                                                                              if (cResult[65] === shouldShowUpsell) {
                                                                                                let tmp37 = cResult[66];
                                                                                              }
                                                                                              if (cResult[67] === tmp34) {
                                                                                                if (cResult[68] === tmp37) {
                                                                                                  let tmp41 = cResult[69];
                                                                                                }
                                                                                                return tmp41;
                                                                                              }
                                                                                              let obj3 = { children: null };
                                                                                              let items = [tmp34, tmp37];
                                                                                              obj3.children = items;
                                                                                              const tmp44 = onLongPressEmoji(onPressEmoji, obj3);
                                                                                              cResult[67] = tmp34;
                                                                                              class Ee {
                                                                                                constructor(arg0) {
                                                                                                  item = guildId.item;
                                                                                                  type = item.type;
                                                                                                  tmp = closure_0;
                                                                                                  tmp2 = closure_2;
                                                                                                  ({ target, index } = guildId);
                                                                                                  if (closure_0(closure_2[30]).EmojiPickerItemType.NATIVE_SECTION !== type) {
                                                                                                    if (tmp(tmp2[30]).EmojiPickerItemType.PLACEHOLDER !== type) {
                                                                                                      if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                                                                        if (tmp(tmp2[30]).EmojiPickerItemType.TITLE === type) {
                                                                                                          str = "StickyHeader";
                                                                                                          if ("StickyHeader" === target) {
                                                                                                            tmp22 = emojiPickerListRef;
                                                                                                            current = emojiPickerListRef.current;
                                                                                                            tmp23 = null;
                                                                                                            if (current != null) {
                                                                                                              result = current.onStickyHeaderRendered(index);
                                                                                                            }
                                                                                                          }
                                                                                                          tmp25 = jsx;
                                                                                                          obj1 = { label: null, isSectionNitroLocked: null, useTier0UpsellContent: null };
                                                                                                          obj1.label = item.title;
                                                                                                          obj1.isSectionNitroLocked = item.isSectionNitroLocked;
                                                                                                          tmp26 = useTier0UpsellContent;
                                                                                                          obj1.useTier0UpsellContent = useTier0UpsellContent;
                                                                                                          return jsx(tmp(tmp2[32]).Section, obj1);
                                                                                                        } else if (tmp(tmp2[30]).EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                                                                          tmp19 = jsx;
                                                                                                          tmp20 = closure_1;
                                                                                                          obj7 = { position: null, useTier0UpsellContent: null };
                                                                                                          obj7.position = item.position;
                                                                                                          tmp21 = useTier0UpsellContent;
                                                                                                          obj7.useTier0UpsellContent = useTier0UpsellContent;
                                                                                                          return jsx(closure_1(tmp2[33]), obj7);
                                                                                                        } else {
                                                                                                          if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW === type) {
                                                                                                            tmp8 = jsx;
                                                                                                            ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                                                                            obj8 = { emojis: null, emojisDisabled: null, category: null, rowSize: null, containerWidth: null, onPressEmoji: null, onLongPressEmoji: null, animateEmoji: null, row: null, isSectionNitroLocked: null };
                                                                                                            obj8.emojis = emojis;
                                                                                                            obj8.emojisDisabled = emojisDisabled;
                                                                                                            obj8.category = footer;
                                                                                                            tmp9 = closure_12;
                                                                                                            obj8.rowSize = closure_12;
                                                                                                            tmp10 = closure_11;
                                                                                                            obj8.containerWidth = closure_11;
                                                                                                            tmp11 = closure_15;
                                                                                                            obj8.onPressEmoji = closure_15;
                                                                                                            tmp12 = closure_16;
                                                                                                            obj8.onLongPressEmoji = closure_16;
                                                                                                            tmp13 = closure_17;
                                                                                                            obj8.animateEmoji = closure_17;
                                                                                                            obj8.row = row;
                                                                                                            obj8.isSectionNitroLocked = isSectionNitroLocked;
                                                                                                            tmp27Result = jsx(tmp(tmp2[34]).EmojiPickerListRow, obj8);
                                                                                                          } else if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                                                                            tmp7 = jsx;
                                                                                                            tmp27Result = jsx(tmp(tmp2[32]).NSFWRow, {});
                                                                                                          } else if (tmp(tmp2[30]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                                                                            tmp27 = jsx;
                                                                                                            tmp28 = null;
                                                                                                            guild_id = undefined;
                                                                                                            if (channel != null) {
                                                                                                              guild_id = channel.guild_id;
                                                                                                            }
                                                                                                            obj = { guildId: null, analyticsLocations: null, useTier0UpsellContent: null };
                                                                                                            obj.guildId = guild_id;
                                                                                                            tmp5 = analyticsLocations;
                                                                                                            obj.analyticsLocations = analyticsLocations;
                                                                                                            tmp6 = useTier0UpsellContent;
                                                                                                            obj.useTier0UpsellContent = useTier0UpsellContent;
                                                                                                            tmp27Result = tmp27(tmp(tmp2[35]).PremiumSearchUpsell, obj);
                                                                                                          }
                                                                                                          flag = true;
                                                                                                          tmp16 = true === item.isSectionNitroLocked;
                                                                                                          tmp14 = jsxs;
                                                                                                          tmp15 = Fragment;
                                                                                                          if (tmp16) {
                                                                                                            tmp17 = jsx;
                                                                                                            obj9 = { useTier0UpsellContent: null };
                                                                                                            tmp18 = useTier0UpsellContent;
                                                                                                            obj9.useTier0UpsellContent = useTier0UpsellContent;
                                                                                                            tmp16 = jsx(tmp(tmp2[36]).PremiumUpsellGradientBackground, obj9);
                                                                                                          }
                                                                                                          obj10 = { children: null };
                                                                                                          items = [, ];
                                                                                                          items[0] = tmp16;
                                                                                                          items[1] = tmp27Result;
                                                                                                          obj10.children = items;
                                                                                                          return tmp14(tmp15, obj10);
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                  return null;
                                                                                                }
                                                                                              }
                                                                                              cResult[68] = tmp37;
                                                                                              cResult[69] = tmp44;
                                                                                              tmp41 = tmp44;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        let tmp38 = !hasSearchUpsell;
                                                                                        if (!hasSearchUpsell) {
                                                                                          let obj4 = { bottomSheetIndex, featureName: tmp(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: tmp4, shouldShow: shouldShowUpsell };
                                                                                          tmp38 = useTier0UpsellContent(tmp5(tmp2[41]), obj4);
                                                                                          const tmp5Result2 = tmp5(tmp2[41]);
                                                                                        }
                                                                                        cResult[62] = bottomSheetIndex;
                                                                                        cResult[63] = hasSearchUpsell;
                                                                                        cResult[64] = tmp4;
                                                                                        cResult[65] = shouldShowUpsell;
                                                                                        class Ee {
                                                                                          constructor(arg0) {
                                                                                            item = guildId.item;
                                                                                            type = item.type;
                                                                                            tmp = closure_0;
                                                                                            tmp2 = closure_2;
                                                                                            ({ target, index } = guildId);
                                                                                            if (closure_0(closure_2[30]).EmojiPickerItemType.NATIVE_SECTION !== type) {
                                                                                              if (tmp(tmp2[30]).EmojiPickerItemType.PLACEHOLDER !== type) {
                                                                                                if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                                                                  if (tmp(tmp2[30]).EmojiPickerItemType.TITLE === type) {
                                                                                                    str = "StickyHeader";
                                                                                                    if ("StickyHeader" === target) {
                                                                                                      tmp22 = emojiPickerListRef;
                                                                                                      current = emojiPickerListRef.current;
                                                                                                      tmp23 = null;
                                                                                                      if (current != null) {
                                                                                                        result = current.onStickyHeaderRendered(index);
                                                                                                      }
                                                                                                    }
                                                                                                    tmp25 = jsx;
                                                                                                    obj1 = { label: null, isSectionNitroLocked: null, useTier0UpsellContent: null };
                                                                                                    obj1.label = item.title;
                                                                                                    obj1.isSectionNitroLocked = item.isSectionNitroLocked;
                                                                                                    tmp26 = useTier0UpsellContent;
                                                                                                    obj1.useTier0UpsellContent = useTier0UpsellContent;
                                                                                                    return jsx(tmp(tmp2[32]).Section, obj1);
                                                                                                  } else if (tmp(tmp2[30]).EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                                                                    tmp19 = jsx;
                                                                                                    tmp20 = closure_1;
                                                                                                    obj7 = { position: null, useTier0UpsellContent: null };
                                                                                                    obj7.position = item.position;
                                                                                                    tmp21 = useTier0UpsellContent;
                                                                                                    obj7.useTier0UpsellContent = useTier0UpsellContent;
                                                                                                    return jsx(closure_1(tmp2[33]), obj7);
                                                                                                  } else {
                                                                                                    if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW === type) {
                                                                                                      tmp8 = jsx;
                                                                                                      ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                                                                      obj8 = { emojis: null, emojisDisabled: null, category: null, rowSize: null, containerWidth: null, onPressEmoji: null, onLongPressEmoji: null, animateEmoji: null, row: null, isSectionNitroLocked: null };
                                                                                                      obj8.emojis = emojis;
                                                                                                      obj8.emojisDisabled = emojisDisabled;
                                                                                                      obj8.category = footer;
                                                                                                      tmp9 = closure_12;
                                                                                                      obj8.rowSize = closure_12;
                                                                                                      tmp10 = closure_11;
                                                                                                      obj8.containerWidth = closure_11;
                                                                                                      tmp11 = closure_15;
                                                                                                      obj8.onPressEmoji = closure_15;
                                                                                                      tmp12 = closure_16;
                                                                                                      obj8.onLongPressEmoji = closure_16;
                                                                                                      tmp13 = closure_17;
                                                                                                      obj8.animateEmoji = closure_17;
                                                                                                      obj8.row = row;
                                                                                                      obj8.isSectionNitroLocked = isSectionNitroLocked;
                                                                                                      tmp27Result = jsx(tmp(tmp2[34]).EmojiPickerListRow, obj8);
                                                                                                    } else if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                                                                      tmp7 = jsx;
                                                                                                      tmp27Result = jsx(tmp(tmp2[32]).NSFWRow, {});
                                                                                                    } else if (tmp(tmp2[30]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                                                                      tmp27 = jsx;
                                                                                                      tmp28 = null;
                                                                                                      guild_id = undefined;
                                                                                                      if (channel != null) {
                                                                                                        guild_id = channel.guild_id;
                                                                                                      }
                                                                                                      obj = { guildId: null, analyticsLocations: null, useTier0UpsellContent: null };
                                                                                                      obj.guildId = guild_id;
                                                                                                      tmp5 = analyticsLocations;
                                                                                                      obj.analyticsLocations = analyticsLocations;
                                                                                                      tmp6 = useTier0UpsellContent;
                                                                                                      obj.useTier0UpsellContent = useTier0UpsellContent;
                                                                                                      tmp27Result = tmp27(tmp(tmp2[35]).PremiumSearchUpsell, obj);
                                                                                                    }
                                                                                                    flag = true;
                                                                                                    tmp16 = true === item.isSectionNitroLocked;
                                                                                                    tmp14 = jsxs;
                                                                                                    tmp15 = Fragment;
                                                                                                    if (tmp16) {
                                                                                                      tmp17 = jsx;
                                                                                                      obj9 = { useTier0UpsellContent: null };
                                                                                                      tmp18 = useTier0UpsellContent;
                                                                                                      obj9.useTier0UpsellContent = useTier0UpsellContent;
                                                                                                      tmp16 = jsx(tmp(tmp2[36]).PremiumUpsellGradientBackground, obj9);
                                                                                                    }
                                                                                                    obj10 = { children: null };
                                                                                                    items = [, ];
                                                                                                    items[0] = tmp16;
                                                                                                    items[1] = tmp27Result;
                                                                                                    obj10.children = items;
                                                                                                    return tmp14(tmp15, obj10);
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            return null;
                                                                                          }
                                                                                        }
                                                                                        cResult[66] = tmp38;
                                                                                        tmp37 = tmp38;
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
                                                          let obj5 = { analyticsLocations, animateEmoji: setting, bottomSheetIndex, categoryIndexActive, data: tmp25, guildId: null, inPortalKeyboard: null, onPressEmoji: null, onLongPressEmoji: null, onShowNitroUpsell: null, paddingBottom: null, paddingTop: null, ref: null, renderItem: null, useTier0UpsellContent: null };
                                                          class Ee {
                                                            constructor(arg0) {
                                                              item = guildId.item;
                                                              type = item.type;
                                                              tmp = closure_0;
                                                              tmp2 = closure_2;
                                                              ({ target, index } = guildId);
                                                              if (closure_0(closure_2[30]).EmojiPickerItemType.NATIVE_SECTION !== type) {
                                                                if (tmp(tmp2[30]).EmojiPickerItemType.PLACEHOLDER !== type) {
                                                                  if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                                    if (tmp(tmp2[30]).EmojiPickerItemType.TITLE === type) {
                                                                      str = "StickyHeader";
                                                                      if ("StickyHeader" === target) {
                                                                        tmp22 = emojiPickerListRef;
                                                                        current = emojiPickerListRef.current;
                                                                        tmp23 = null;
                                                                        if (current != null) {
                                                                          result = current.onStickyHeaderRendered(index);
                                                                        }
                                                                      }
                                                                      tmp25 = jsx;
                                                                      obj1 = { label: null, isSectionNitroLocked: null, useTier0UpsellContent: null };
                                                                      obj1.label = item.title;
                                                                      obj1.isSectionNitroLocked = item.isSectionNitroLocked;
                                                                      tmp26 = useTier0UpsellContent;
                                                                      obj1.useTier0UpsellContent = useTier0UpsellContent;
                                                                      return jsx(tmp(tmp2[32]).Section, obj1);
                                                                    } else if (tmp(tmp2[30]).EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                                      tmp19 = jsx;
                                                                      tmp20 = closure_1;
                                                                      obj7 = { position: null, useTier0UpsellContent: null };
                                                                      obj7.position = item.position;
                                                                      tmp21 = useTier0UpsellContent;
                                                                      obj7.useTier0UpsellContent = useTier0UpsellContent;
                                                                      return jsx(closure_1(tmp2[33]), obj7);
                                                                    } else {
                                                                      if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW === type) {
                                                                        tmp8 = jsx;
                                                                        ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                                        obj8 = { emojis: null, emojisDisabled: null, category: null, rowSize: null, containerWidth: null, onPressEmoji: null, onLongPressEmoji: null, animateEmoji: null, row: null, isSectionNitroLocked: null };
                                                                        obj8.emojis = emojis;
                                                                        obj8.emojisDisabled = emojisDisabled;
                                                                        obj8.category = footer;
                                                                        tmp9 = closure_12;
                                                                        obj8.rowSize = closure_12;
                                                                        tmp10 = closure_11;
                                                                        obj8.containerWidth = closure_11;
                                                                        tmp11 = closure_15;
                                                                        obj8.onPressEmoji = closure_15;
                                                                        tmp12 = closure_16;
                                                                        obj8.onLongPressEmoji = closure_16;
                                                                        tmp13 = closure_17;
                                                                        obj8.animateEmoji = closure_17;
                                                                        obj8.row = row;
                                                                        obj8.isSectionNitroLocked = isSectionNitroLocked;
                                                                        tmp27Result = jsx(tmp(tmp2[34]).EmojiPickerListRow, obj8);
                                                                      } else if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                                        tmp7 = jsx;
                                                                        tmp27Result = jsx(tmp(tmp2[32]).NSFWRow, {});
                                                                      } else if (tmp(tmp2[30]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                                        tmp27 = jsx;
                                                                        tmp28 = null;
                                                                        guild_id = undefined;
                                                                        if (channel != null) {
                                                                          guild_id = channel.guild_id;
                                                                        }
                                                                        obj = { guildId: null, analyticsLocations: null, useTier0UpsellContent: null };
                                                                        obj.guildId = guild_id;
                                                                        tmp5 = analyticsLocations;
                                                                        obj.analyticsLocations = analyticsLocations;
                                                                        tmp6 = useTier0UpsellContent;
                                                                        obj.useTier0UpsellContent = useTier0UpsellContent;
                                                                        tmp27Result = tmp27(tmp(tmp2[35]).PremiumSearchUpsell, obj);
                                                                      }
                                                                      flag = true;
                                                                      tmp16 = true === item.isSectionNitroLocked;
                                                                      tmp14 = jsxs;
                                                                      tmp15 = Fragment;
                                                                      if (tmp16) {
                                                                        tmp17 = jsx;
                                                                        obj9 = { useTier0UpsellContent: null };
                                                                        tmp18 = useTier0UpsellContent;
                                                                        obj9.useTier0UpsellContent = useTier0UpsellContent;
                                                                        tmp16 = jsx(tmp(tmp2[36]).PremiumUpsellGradientBackground, obj9);
                                                                      }
                                                                      obj10 = { children: null };
                                                                      items = [, ];
                                                                      items[0] = tmp16;
                                                                      items[1] = tmp27Result;
                                                                      obj10.children = items;
                                                                      return tmp14(tmp15, obj10);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              return null;
                                                            }
                                                          }
                                                          obj5.inPortalKeyboard = tmp4;
                                                          obj5.onPressEmoji = tmp22;
                                                          obj5.onLongPressEmoji = tmp23;
                                                          obj5.onShowNitroUpsell = onShowNitroUpsell;
                                                          obj5.paddingBottom = num;
                                                          obj5.paddingTop = num2;
                                                          obj5.ref = emojiPickerListRef;
                                                          obj5.renderItem = tmp28;
                                                          obj5.useTier0UpsellContent = useTier0UpsellContent;
                                                          const tmp36 = useTier0UpsellContent(tmp5Result, obj5);
                                                          cResult[45] = tmp5Result;
                                                          cResult[46] = analyticsLocations;
                                                          cResult[47] = setting;
                                                          cResult[48] = bottomSheetIndex;
                                                          cResult[49] = categoryIndexActive;
                                                          cResult[50] = tmp25;
                                                          cResult[51] = emojiPickerListRef;
                                                          cResult[52] = tmp4;
                                                          cResult[53] = num;
                                                          cResult[54] = num2;
                                                          cResult[55] = tmp23;
                                                          cResult[56] = tmp22;
                                                          cResult[57] = onShowNitroUpsell;
                                                          cResult[58] = tmp28;
                                                          cResult[59] = tmp32;
                                                          cResult[60] = useTier0UpsellContent;
                                                          cResult[61] = tmp36;
                                                          tmp34 = tmp36;
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
                                        class Ee {
                                          constructor(arg0) {
                                            item = guildId.item;
                                            type = item.type;
                                            tmp = closure_0;
                                            tmp2 = closure_2;
                                            ({ target, index } = guildId);
                                            if (closure_0(closure_2[30]).EmojiPickerItemType.NATIVE_SECTION !== type) {
                                              if (tmp(tmp2[30]).EmojiPickerItemType.PLACEHOLDER !== type) {
                                                if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                  if (tmp(tmp2[30]).EmojiPickerItemType.TITLE === type) {
                                                    str = "StickyHeader";
                                                    if ("StickyHeader" === target) {
                                                      tmp22 = emojiPickerListRef;
                                                      current = emojiPickerListRef.current;
                                                      tmp23 = null;
                                                      if (current != null) {
                                                        result = current.onStickyHeaderRendered(index);
                                                      }
                                                    }
                                                    tmp25 = jsx;
                                                    obj1 = { label: null, isSectionNitroLocked: null, useTier0UpsellContent: null };
                                                    obj1.label = item.title;
                                                    obj1.isSectionNitroLocked = item.isSectionNitroLocked;
                                                    tmp26 = useTier0UpsellContent;
                                                    obj1.useTier0UpsellContent = useTier0UpsellContent;
                                                    return jsx(tmp(tmp2[32]).Section, obj1);
                                                  } else if (tmp(tmp2[30]).EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                    tmp19 = jsx;
                                                    tmp20 = closure_1;
                                                    obj7 = { position: null, useTier0UpsellContent: null };
                                                    obj7.position = item.position;
                                                    tmp21 = useTier0UpsellContent;
                                                    obj7.useTier0UpsellContent = useTier0UpsellContent;
                                                    return jsx(closure_1(tmp2[33]), obj7);
                                                  } else {
                                                    if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW === type) {
                                                      tmp8 = jsx;
                                                      ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                      obj8 = { emojis: null, emojisDisabled: null, category: null, rowSize: null, containerWidth: null, onPressEmoji: null, onLongPressEmoji: null, animateEmoji: null, row: null, isSectionNitroLocked: null };
                                                      obj8.emojis = emojis;
                                                      obj8.emojisDisabled = emojisDisabled;
                                                      obj8.category = footer;
                                                      tmp9 = closure_12;
                                                      obj8.rowSize = closure_12;
                                                      tmp10 = closure_11;
                                                      obj8.containerWidth = closure_11;
                                                      tmp11 = closure_15;
                                                      obj8.onPressEmoji = closure_15;
                                                      tmp12 = closure_16;
                                                      obj8.onLongPressEmoji = closure_16;
                                                      tmp13 = closure_17;
                                                      obj8.animateEmoji = closure_17;
                                                      obj8.row = row;
                                                      obj8.isSectionNitroLocked = isSectionNitroLocked;
                                                      tmp27Result = jsx(tmp(tmp2[34]).EmojiPickerListRow, obj8);
                                                    } else if (tmp(tmp2[30]).EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                      tmp7 = jsx;
                                                      tmp27Result = jsx(tmp(tmp2[32]).NSFWRow, {});
                                                    } else if (tmp(tmp2[30]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                      tmp27 = jsx;
                                                      tmp28 = null;
                                                      guild_id = undefined;
                                                      if (channel != null) {
                                                        guild_id = channel.guild_id;
                                                      }
                                                      obj = { guildId: null, analyticsLocations: null, useTier0UpsellContent: null };
                                                      obj.guildId = guild_id;
                                                      tmp5 = analyticsLocations;
                                                      obj.analyticsLocations = analyticsLocations;
                                                      tmp6 = useTier0UpsellContent;
                                                      obj.useTier0UpsellContent = useTier0UpsellContent;
                                                      tmp27Result = tmp27(tmp(tmp2[35]).PremiumSearchUpsell, obj);
                                                    }
                                                    flag = true;
                                                    tmp16 = true === item.isSectionNitroLocked;
                                                    tmp14 = jsxs;
                                                    tmp15 = Fragment;
                                                    if (tmp16) {
                                                      tmp17 = jsx;
                                                      obj9 = { useTier0UpsellContent: null };
                                                      tmp18 = useTier0UpsellContent;
                                                      obj9.useTier0UpsellContent = useTier0UpsellContent;
                                                      tmp16 = jsx(tmp(tmp2[36]).PremiumUpsellGradientBackground, obj9);
                                                    }
                                                    obj10 = { children: null };
                                                    items = [, ];
                                                    items[0] = tmp16;
                                                    items[1] = tmp27Result;
                                                    obj10.children = items;
                                                    return tmp14(tmp15, obj10);
                                                  }
                                                }
                                              }
                                            }
                                            return null;
                                          }
                                        }
                                        cResult[34] = guild_id2;
                                        cResult[35] = tmp7;
                                        cResult[36] = emojiPickerListRef;
                                        cResult[37] = tmp23;
                                        cResult[38] = tmp22;
                                        cResult[39] = rounded;
                                        cResult[40] = useTier0UpsellContent;
                                        cResult[41] = Ee;
                                        tmp28 = Ee;
                                      }
                                    }
                                    let obj6 = { emojiSections: arr3, rowSize: rounded, isNativeEmojiPickerEnabled: tmp14 };
                                    cResult[28] = arr3;
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
                        if (emojiPickerIntention === containerWidth.REACTION) {
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
                    const tmpResult4 = tmp(tmp2[20]);
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
  onPressEmoji = analyticsObject.onPressEmoji;
  onLongPressEmoji = analyticsObject.onLongPressEmoji;
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
  containerWidth = tmp4;
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
      if (emojiPickerIntention === containerWidth.REACTION) {
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
            return onLongPressEmoji(closure_2_15, obj6);
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
    const hasSearchUpsell = tmp16.hasSearchUpsell;
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
      tmp25Result = tmp25(tmp(tmp2[41]), obj7);
      const tmpResult2 = tmp(tmp2[41]);
    }
    let obj8 = { children: null };
    items4[1] = tmp25Result;
    obj8.children = items4;
    return callback1(onPressEmoji, obj8);
  }
  const tmp9Result2 = categories(channel[18]);
}));