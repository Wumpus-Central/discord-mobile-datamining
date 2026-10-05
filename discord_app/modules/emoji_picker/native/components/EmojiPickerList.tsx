// discord_app/modules/emoji_picker/native/components/EmojiPickerList.tsx
import intl2 from "../../../../intl/index.native.tsx";
import ExpressionPickerConstants from "../../../expression_picker/ExpressionPickerConstants.tsx";
import PremiumConstants from "../../../premium/PremiumConstants.tsx";
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import PremiumUpsellUtilsDefault from "../../../../utils/native/PremiumUpsellUtils.tsx";
import EmojiPickerListConstants from "EmojiPickerListConstants.tsx";
import EmojiPickerUtils from "../../EmojiPickerUtils.tsx";
import TopEmojisActionCreators from "../../../emojis/top_emojis/TopEmojisActionCreators.tsx";
import RoleSubscriptionUpsellUtilsDefault from "../../../guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx";
import useEmojiPickerData from "data/useEmojiPickerData.tsx";
import PremiumUpsellSectionDividerDefault from "../../../premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx";
import PremiumUpsellGradientBackground from "../../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";
import EmojiPickerListComponents from "EmojiPickerListComponents.tsx";
import EmojiPickerListRow from "EmojiPickerListRow.tsx";
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import EmojiConstants from "../../../emojis/EmojiConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let guildId;

let c10;
let c9;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
({
  AnalyticsObjects: hasOwnProperty,
  AnalyticsPages: metroRequire,
  AnalyticsSections: metroImportDefault,
  UpsellTypes: metroImportAll,
} = Constants);
({ EmojiDisabledReasons: c9, EmojiIntention: c10 } = EmojiConstants);
const MIN_MARGIN = ExpressionPickerConstants.MIN_MARGIN;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildId) => {
        let analyticsObject;
        let bottomSheetIndex;
        let categories;
        let categoryIndexActive;
        let channel;
        let computeCategories;
        let computeSearchResults;
        let emojiPickerListRef;
        let emojis;
        let inPortalKeyboard;
        let insetBottom;
        let insetTop;
        let items;
        let messageId;
        let num7;
        let onShowNitroUpsell;
        let rounded;
        let searchQueryRef;
        let shouldShowUpsell;
        const tmp = emojiPickerListRef;
        let obj = emojiPickerListRef(guildId[8]);
        const cResult = obj.c(71);
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
        const tmp6 = channel(guildId[9]);
        const analyticsLocations = tmp6(channel(tmp2[10]).EMOJI).analyticsLocations;
        const tmp7 = channel(guildId[11])(undefined !== inPortalKeyboard && inPortalKeyboard);
        const containerWidth = tmp7;
        rounded = Math.floor((tmp7 - rounded) / (onLongPressEmoji + rounded));
        const newlyAddedEmojis = channel(tmp2[12])(guildId, emojiPickerIntention).newlyAddedEmojis;
        let id = null;
        if (newlyAddedEmojis.length > 0) {
          id = newlyAddedEmojis[0].id;
        }
        if (cResult[0] === guildId) {
          let tmp10;
          let tmp11;
          if (cResult[1] === id) {
            tmp10 = cResult[2];
            tmp11 = cResult[3];
          }
          const effect = onPressEmoji.useEffect(tmp10, tmp11);
          const tmp14 = channel(guildId[14])();
          if (cResult[4] === analyticsObject) {
            if (cResult[5] === emojiPickerIntention) {
              let tmp15;
              let searchResults;
              if (cResult[6] === rounded) {
                tmp15 = cResult[7];
              }
              const tmpResult = tmp(guildId[15]);
              const trackOnEmojiPickerOpenedForReactions = tmpResult.useTrackOnEmojiPickerOpenedForReactions(tmp15);
              ({ computeCategories, computeSearchResults } = channel(guildId[16])());
              channel(guildId[16])();
              if (cResult[8] === categories) {
                if (cResult[9] === computeCategories) {
                  if (cResult[10] === computeSearchResults) {
                    if (cResult[11] === emojis) {
                      if (cResult[12] === tmp14) {
                        let arr3;
                        let tmp19;
                        if (cResult[13] === rounded) {
                          arr3 = cResult[14];
                        }
                        const _Symbol = Symbol;
                        let str = "react.memo_cache_sentinel";
                        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmpResult4 = tmp(guildId[17]);
                          const upsellType = tmpResult4.getUpsellType(
                            tmp(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
                          );
                          cResult[15] = upsellType;
                          tmp19 = upsellType;
                        } else {
                          tmp19 = cResult[15];
                        }
                        const tmpResult5 = tmp(guildId[19]);
                        const useTier0UpsellContent = tmpResult5.usePremiumUpsellConfig(tmp19).useTier0UpsellContent;
                        if (cResult[16] === analyticsLocations) {
                          if (cResult[17] === bypassPremiumEmojiEntitlement) {
                            if (cResult[18] === channel) {
                              if (cResult[19] === guildId) {
                                if (cResult[20] === emojiPickerIntention) {
                                  if (cResult[21] === messageId) {
                                    if (cResult[22] === onPressEmoji) {
                                      let tmp21;
                                      let tmp22;
                                      if (cResult[23] === searchQueryRef) {
                                        tmp21 = cResult[24];
                                      }
                                      onPressEmoji = tmp21;
                                      if (cResult[25] !== onLongPressEmoji) {
                                        function ae(arg0) {
                                          if (onLongPressEmoji != null) {
                                            tmp(arg0);
                                          }
                                        }
                                        cResult[25] = onLongPressEmoji;
                                        cResult[26] = ae;
                                        tmp22 = ae;
                                      } else {
                                        tmp22 = cResult[26];
                                      }
                                      onLongPressEmoji = tmp22;
                                      if (cResult[27] === arr3) {
                                        if (cResult[28] === tmp14) {
                                          let tmp23;
                                          if (cResult[29] === rounded) {
                                            tmp23 = cResult[30];
                                          }
                                          const tmp24 = channel(guildId[28])(tmp23);
                                          const AnimateEmoji = tmp(tmp2[29]).AnimateEmoji;
                                          const setting = AnimateEmoji.useSetting();
                                          if (cResult[31] === analyticsLocations) {
                                            if (cResult[32] === setting) {
                                              let guild_id;
                                              const tmp26 = cResult[33];
                                              if (channel != null) {
                                                guild_id = channel.guild_id;
                                              }
                                              if (tmp26 === guild_id) {
                                                if (cResult[34] === tmp7) {
                                                  if (cResult[35] === emojiPickerListRef) {
                                                    if (cResult[36] === tmp22) {
                                                      if (cResult[37] === tmp21) {
                                                        if (cResult[38] === rounded) {
                                                          let tmp28;
                                                          if (cResult[39] === useTier0UpsellContent) {
                                                            tmp28 = cResult[40];
                                                          }
                                                          ({ shouldShowUpsell, onShowNitroUpsell } = channel(
                                                            guildId[35],
                                                          )());
                                                          channel(guildId[35])();
                                                          if (0 === arr3.length) {
                                                            if (cResult[41] === num) {
                                                              let tmp46;
                                                              if (cResult[42] === num2) {
                                                                tmp46 = cResult[43];
                                                              }
                                                              return tmp46;
                                                            }
                                                            let obj2 = {
                                                              inActionSheet: true,
                                                              insetTop: num2,
                                                              insetBottom: num,
                                                            };
                                                            const tmp48 = useTier0UpsellContent(
                                                              channel(guildId[36]),
                                                              obj2,
                                                            );
                                                            cResult[41] = num;
                                                            cResult[42] = num2;
                                                            cResult[43] = tmp48;
                                                            tmp46 = tmp48;
                                                          } else {
                                                            let tmp32;
                                                            const tmp5Result = channel(
                                                              tmp14 ? guildId[37] : guildId[38],
                                                            );
                                                            if (cResult[44] !== tmp24.hasSearchUpsell) {
                                                              let hasSearchUpsell = tmp24.hasSearchUpsell;
                                                              if (hasSearchUpsell) {
                                                                const tmpResult6 = tmp(guildId[39]);
                                                                hasSearchUpsell =
                                                                  tmpResult6.getMobileEmojiPickerUpsellRestyleEnabledForFeature(
                                                                    tmp(tmp2[18]).EntitlementFeatureNames
                                                                      .EMOJIS_EVERYWHERE,
                                                                    "native.EmojiPickerList",
                                                                  );
                                                              }
                                                              cResult[44] = tmp24.hasSearchUpsell;
                                                              cResult[45] = hasSearchUpsell;
                                                              tmp32 = hasSearchUpsell;
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
                                                                      if (cResult[51] === tmp24) {
                                                                        if (cResult[52] === emojiPickerListRef) {
                                                                          if (
                                                                            cResult[53] ===
                                                                            (undefined !== inPortalKeyboard &&
                                                                              inPortalKeyboard)
                                                                          ) {
                                                                            if (cResult[54] === num) {
                                                                              if (cResult[55] === num2) {
                                                                                if (cResult[56] === tmp22) {
                                                                                  if (cResult[57] === tmp21) {
                                                                                    if (
                                                                                      cResult[58] === onShowNitroUpsell
                                                                                    ) {
                                                                                      if (cResult[59] === tmp28) {
                                                                                        if (cResult[60] === tmp33) {
                                                                                          if (
                                                                                            cResult[63] ===
                                                                                            bottomSheetIndex
                                                                                          ) {
                                                                                            if (cResult[64] === tmp32) {
                                                                                              if (
                                                                                                cResult[65] ===
                                                                                                (undefined !==
                                                                                                  inPortalKeyboard &&
                                                                                                  inPortalKeyboard)
                                                                                              ) {
                                                                                                let tmp38;
                                                                                                if (
                                                                                                  cResult[66] ===
                                                                                                  shouldShowUpsell
                                                                                                ) {
                                                                                                  tmp38 = cResult[67];
                                                                                                }
                                                                                                if (
                                                                                                  cResult[68] === tmp35
                                                                                                ) {
                                                                                                  let tmp42;
                                                                                                  if (
                                                                                                    cResult[69] ===
                                                                                                    tmp38
                                                                                                  ) {
                                                                                                    tmp42 = cResult[70];
                                                                                                  }
                                                                                                  return tmp42;
                                                                                                }
                                                                                                const tmp44 =
                                                                                                  onPressEmoji;
                                                                                                let obj3 = {
                                                                                                  children: items,
                                                                                                };
                                                                                                items = [tmp35, tmp38];
                                                                                                const tmp45 =
                                                                                                  onLongPressEmoji(
                                                                                                    onPressEmoji,
                                                                                                    obj3,
                                                                                                  );
                                                                                                cResult[68] = tmp35;
                                                                                                cResult[69] = tmp38;
                                                                                                cResult[70] = tmp45;
                                                                                                tmp42 = tmp45;
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          let tmp39 = !tmp32;
                                                                                          if (tmp39) {
                                                                                            let obj4 = {
                                                                                              bottomSheetIndex,
                                                                                              featureName: tmp(tmp2[18])
                                                                                                .EntitlementFeatureNames
                                                                                                .EMOJIS_EVERYWHERE,
                                                                                              inPortalKeyboard:
                                                                                                undefined !==
                                                                                                  inPortalKeyboard &&
                                                                                                inPortalKeyboard,
                                                                                              shouldShow:
                                                                                                shouldShowUpsell,
                                                                                            };
                                                                                            const tmp5Result2 = channel(
                                                                                              guildId[40],
                                                                                            );
                                                                                            tmp39 =
                                                                                              useTier0UpsellContent(
                                                                                                tmp5Result2,
                                                                                                obj4,
                                                                                              );
                                                                                          }
                                                                                          cResult[63] =
                                                                                            bottomSheetIndex;
                                                                                          cResult[64] = tmp32;
                                                                                          cResult[65] =
                                                                                            undefined !==
                                                                                              inPortalKeyboard &&
                                                                                            inPortalKeyboard;
                                                                                          cResult[66] =
                                                                                            shouldShowUpsell;
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
                                                            let obj5 = {
                                                              analyticsLocations,
                                                              animateEmoji: setting,
                                                              bottomSheetIndex,
                                                              categoryIndexActive,
                                                              data: tmp24,
                                                              guildId: tmp33,
                                                              inPortalKeyboard:
                                                                undefined !== inPortalKeyboard && inPortalKeyboard,
                                                              onPressEmoji: tmp21,
                                                              onLongPressEmoji: tmp22,
                                                              onShowNitroUpsell,
                                                              paddingBottom: num,
                                                              paddingTop: num2,
                                                              ref: emojiPickerListRef,
                                                              renderItem: tmp28,
                                                              useTier0UpsellContent,
                                                            };
                                                            cResult[46] = tmp5Result;
                                                            cResult[47] = analyticsLocations;
                                                            cResult[48] = setting;
                                                            cResult[49] = bottomSheetIndex;
                                                            cResult[50] = categoryIndexActive;
                                                            cResult[51] = tmp24;
                                                            cResult[52] = emojiPickerListRef;
                                                            cResult[53] =
                                                              undefined !== inPortalKeyboard && inPortalKeyboard;
                                                            cResult[54] = num;
                                                            cResult[55] = num2;
                                                            cResult[56] = tmp22;
                                                            cResult[57] = tmp21;
                                                            cResult[58] = onShowNitroUpsell;
                                                            cResult[59] = tmp28;
                                                            cResult[60] = tmp33;
                                                            cResult[61] = useTier0UpsellContent;
                                                            cResult[62] = useTier0UpsellContent(tmp5Result, obj5);
                                                            useTier0UpsellContent(tmp5Result, obj5);
                                                            class I {
                                                              constructor() {
                                                                const obj = TopEmojisActionCreators;
                                                                const result = obj.updateNewlyAddedLastSeen(
                                                                  guildId,
                                                                  id,
                                                                );
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
                                          cResult[31] = analyticsLocations;
                                          cResult[32] = setting;
                                          let guild_id2;
                                          if (channel != null) {
                                            guild_id2 = channel.guild_id;
                                          }
                                          function ce(item) {
                                            let emojis;
                                            let emojisDisabled;
                                            let footer;
                                            let index;
                                            let isSectionNitroLocked;
                                            let items;
                                            let row;
                                            let target;
                                            item = item.item;
                                            const type = item.type;
                                            ({ target, index } = item);
                                            if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
                                              if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
                                                if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                  if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
                                                    const title = item.title;
                                                    if ("StickyHeader" === target) {
                                                      const current = emojiPickerListRef.current;
                                                      if (current != null) {
                                                        const result = current.onStickyHeaderRendered(index);
                                                      }
                                                    }
                                                    const obj2 = {
                                                      label: title,
                                                      isSectionNitroLocked: item.isSectionNitroLocked,
                                                      useTier0UpsellContent,
                                                    };
                                                    return map1(EmojiPickerListComponents.Section, obj2);
                                                  } else if (
                                                    useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK ===
                                                    type
                                                  ) {
                                                    const obj3 = { position: item.position, useTier0UpsellContent };
                                                    return map1(PremiumUpsellSectionDividerDefault, obj3);
                                                  } else {
                                                    let tmp27Result;
                                                    if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
                                                      ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } =
                                                        item);
                                                      const obj4 = {
                                                        emojis,
                                                        emojisDisabled,
                                                        category: footer,
                                                        rowSize: rounded,
                                                        containerWidth,
                                                        onPressEmoji,
                                                        onLongPressEmoji,
                                                        animateEmoji: setting,
                                                        row,
                                                        isSectionNitroLocked,
                                                      };
                                                      tmp27Result = map1(EmojiPickerListRow.EmojiPickerListRow, obj4);
                                                    } else if (
                                                      useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type
                                                    ) {
                                                      tmp27Result = map1(EmojiPickerListComponents.NSFWRow, {});
                                                    } else if (
                                                      useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type
                                                    ) {
                                                      let guild_id;
                                                      const PremiumSearchUpsell =
                                                        EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell;
                                                      if (channel != null) {
                                                        guild_id = channel.guild_id;
                                                      }
                                                      const obj = {
                                                        guildId: guild_id,
                                                        analyticsLocations,
                                                        useTier0UpsellContent,
                                                      };
                                                      tmp27Result = map1(PremiumSearchUpsell, obj);
                                                    }
                                                    let tmp16 = true === item.isSectionNitroLocked;
                                                    if (tmp16) {
                                                      const obj5 = { useTier0UpsellContent };
                                                      tmp16 = map1(
                                                        PremiumUpsellGradientBackground.PremiumUpsellGradientBackground,
                                                        obj5,
                                                      );
                                                    }
                                                    const obj6 = { children: items };
                                                    items = [tmp16, tmp27Result];
                                                    return onLongPressEmoji(authStore2, obj6);
                                                  }
                                                }
                                              }
                                            }
                                            return null;
                                          }
                                          cResult[33] = guild_id2;
                                          cResult[34] = tmp7;
                                          cResult[35] = emojiPickerListRef;
                                          cResult[36] = tmp22;
                                          cResult[37] = tmp21;
                                          cResult[38] = rounded;
                                          cResult[39] = useTier0UpsellContent;
                                          cResult[40] = ce;
                                          tmp28 = ce;
                                        }
                                      }
                                      let obj6 = {
                                        emojiSections: arr3,
                                        rowSize: rounded,
                                        isNativeEmojiPickerEnabled: tmp14,
                                      };
                                      cResult[27] = arr3;
                                      cResult[28] = tmp14;
                                      cResult[29] = rounded;
                                      cResult[30] = obj6;
                                      tmp23 = obj6;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        function oe(emoji, category) {
                          let intl;
                          let obj10;
                          let obj12;
                          let obj6;
                          let obj7;
                          let tmp22;
                          let str;
                          if (searchQueryRef != null) {
                            str = searchQueryRef.current;
                          }
                          if (str == null) {
                            str = "";
                          }
                          const obj = HapticUtils;
                          const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
                          const obj2 = EmojiUtilsDefault;
                          const obj3 = {
                            emoji,
                            channel,
                            intention: emojiPickerIntention,
                            guildId,
                            bypassPremiumEmojiEntitlement,
                          };
                          const emojiUnavailableReason = obj2.getEmojiUnavailableReason(obj3);
                          if (null === emojiUnavailableReason) {
                            if (onPressEmoji != null) {
                              onPressEmoji(emoji);
                            }
                          } else if (analyticsLocations.ROLE_SUBSCRIPTION_LOCKED === emojiUnavailableReason) {
                            const tmp2Result = ChatInputUtils;
                            tmp2Result.dismissKeyboard();
                            if (null != emoji.guildId) {
                              const obj4 = { guildId: emoji.guildId };
                              const tmp4Result = RoleSubscriptionUpsellUtilsDefault;
                              const result1 = tmp4Result.handleShowEmojiUpsellAlert(obj4);
                            }
                          } else if (tmp44.PREMIUM_LOCKED === emojiUnavailableReason) {
                            let DM_CHANNEL;
                            let EMOJI_PICKER_EMOJI_CLICKED;
                            let guild_id;
                            const obj5 = {
                              initialUpsellKey: emoji.animated
                                ? metroImportAll.ANIMATED_EMOJI
                                : metroImportAll.GLOBAL_EMOJI,
                              analyticsLocation: obj6,
                              analyticsLocations,
                              analyticsProperties: obj7,
                            };
                            const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
                            PremiumUpsellUtilsDefault;
                            if (channel != null) {
                              guild_id = channel.guild_id;
                            }
                            if (null != guild_id) {
                              DM_CHANNEL = metroRequire.GUILD_CHANNEL;
                            } else {
                              DM_CHANNEL = metroRequire.DM_CHANNEL;
                            }
                            obj6 = {
                              page: DM_CHANNEL,
                              section: metroImportDefault.EMOJI_PICKER_POPOUT,
                              object: hasOwnProperty.EMOJI,
                            };
                            if (emojiPickerIntention === containerWidth.REACTION) {
                              EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            } else {
                              EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                            }
                            obj7 = {
                              type: EMOJI_PICKER_EMOJI_CLICKED,
                              is_animated: emoji.animated,
                              is_external: tmp22,
                              has_search_query: str.length > 0,
                            };
                            tmp22 = null != emoji.guildId;
                            if (tmp22) {
                              let guild_id1;
                              guildId = emoji.guildId;
                              if (channel != null) {
                                guild_id1 = channel.guild_id;
                              }
                              tmp22 = guildId !== guild_id1;
                            }
                            const result2 = handleShowUpsellAlert(obj5);
                          } else {
                            const obj8 = {
                              key: "EMOJI_PICKER_LIST_PRESS_DISABLED",
                              content: intl.string(intl2.t.VsE5yG),
                            };
                            const open = ToastActionCreatorsDefault.open;
                            ToastActionCreatorsDefault;
                            intl = intl2.intl;
                            open(obj8);
                          }
                          const tmp2Result2 = EmojiPickerUtils;
                          if (str.length > 0) {
                            let DM_CHANNEL3;
                            let guild_id2;
                            const trackEmojiSearchSelect = tmp2Result2.trackEmojiSearchSelect;
                            const obj9 = {
                              emoji,
                              location: obj10,
                              searchQuery: str,
                              intention: emojiPickerIntention,
                              messageId,
                            };
                            if (channel != null) {
                              guild_id2 = channel.guild_id;
                            }
                            if (null != guild_id2) {
                              DM_CHANNEL3 = metroRequire.GUILD_CHANNEL;
                            } else {
                              DM_CHANNEL3 = metroRequire.DM_CHANNEL;
                            }
                            obj10 = {
                              page: DM_CHANNEL3,
                              section: metroImportDefault.EMOJI_PICKER_POPOUT,
                              object: hasOwnProperty.EMOJI,
                            };
                            const result3 = trackEmojiSearchSelect(obj9);
                          } else {
                            let DM_CHANNEL2;
                            let guild_id3;
                            const trackEmojiSelect = tmp2Result2.trackEmojiSelect;
                            const obj11 = {
                              emoji,
                              pickerIntention: emojiPickerIntention,
                              category,
                              location: obj12,
                              messageId,
                            };
                            if (channel != null) {
                              guild_id3 = channel.guild_id;
                            }
                            if (null != guild_id3) {
                              DM_CHANNEL2 = metroRequire.GUILD_CHANNEL;
                            } else {
                              DM_CHANNEL2 = metroRequire.DM_CHANNEL;
                            }
                            obj12 = {
                              page: DM_CHANNEL2,
                              section: metroImportDefault.EMOJI_PICKER_POPOUT,
                              object: hasOwnProperty.EMOJI,
                            };
                            trackEmojiSelect(obj11);
                          }
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
                        tmp21 = oe;
                      }
                    }
                  }
                }
              }
              if (null != emojis) {
                let obj7 = { emojis, rowSize: rounded, limit: num7 };
                num7 = undefined;
                if (tmp14) {
                  num7 = 200;
                }
                searchResults = computeSearchResults(obj7);
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
              arr3 = searchResults;
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
            const obj = TopEmojisActionCreators;
            const result = obj.updateNewlyAddedLastSeen(guildId, id);
          }
        }
        const items1 = [id, guildId];
        cResult[0] = guildId;
        cResult[1] = id;
        cResult[2] = I;
        cResult[3] = items1;
        tmp11 = items1;
        tmp10 = I;
      }
    : (guildId) => {
        let bottomSheetIndex;
        let categories;
        let categoryIndexActive;
        let channel;
        let emojiPickerListRef;
        let emojis;
        let num3;
        let tmp12Result;
        let tmp22;
        ({ bottomSheetIndex, emojiPickerListRef } = guildId);
        ({ emojis, channel } = guildId);
        guildId = guildId.guildId;
        let onPressEmoji = guildId.onPressEmoji;
        const onLongPressEmoji = guildId.onLongPressEmoji;
        const emojiPickerIntention = guildId.emojiPickerIntention;
        let num = guildId.insetBottom;
        ({ categories, categoryIndexActive } = guildId);
        if (num === undefined) {
          num = 0;
        }
        let num2 = guildId.insetTop;
        if (num2 === undefined) {
          num2 = 0;
        }
        let flag = guildId.inPortalKeyboard;
        if (flag === undefined) {
          flag = false;
        }
        const searchQueryRef = guildId.searchQueryRef;
        const messageId = guildId.messageId;
        const bypassPremiumEmojiEntitlement = guildId.bypassPremiumEmojiEntitlement;
        let rounded;
        let useTier0UpsellContent;
        onPressEmoji = undefined;
        let callback1;
        let setting;
        const tmp = channel;
        const analyticsObject = guildId.analyticsObject;
        const tmp3 = channel(guildId[9]);
        const analyticsLocations = tmp3(channel(guildId[10]).EMOJI).analyticsLocations;
        const tmp4 = channel(guildId[11])(flag);
        const containerWidth = tmp4;
        rounded = Math.floor((tmp4 - rounded) / (onLongPressEmoji + rounded));
        const newlyAddedEmojis = channel(guildId[12])(guildId, emojiPickerIntention).newlyAddedEmojis;
        let id = null;
        if (newlyAddedEmojis.length > 0) {
          id = newlyAddedEmojis[0].id;
        }
        let obj = onPressEmoji;
        let items = [id, guildId];
        const effect = onPressEmoji.useEffect(() => {
          const obj = TopEmojisActionCreators;
          const result = obj.updateNewlyAddedLastSeen(guildId, id);
        }, items);
        const tmp8 = tmp(guildId[14])();
        let obj2 = emojiPickerListRef(tmp2[15]);
        const trackOnEmojiPickerOpenedForReactions = obj2.useTrackOnEmojiPickerOpenedForReactions({
          intention: emojiPickerIntention,
          rowSize: rounded,
          analyticsObject,
        });
        tmp(guildId[16])();
        if (null != emojis) {
          let obj3 = { emojis, rowSize: rounded, limit: num3 };
          num3 = undefined;
          if (tmp8) {
            num3 = 200;
          }
          tmp12Result = tmp13(obj3);
        } else {
          let obj4 = { categories, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 };
          tmp12Result = tmp12(obj4);
        }
        const usePremiumUpsellConfig = emojiPickerListRef(tmp2[19]).usePremiumUpsellConfig;
        emojiPickerListRef(guildId[19]);
        const tmp9Result3 = emojiPickerListRef(guildId[17]);
        useTier0UpsellContent = usePremiumUpsellConfig(
          tmp9Result3.getUpsellType(tmp9(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE),
        ).useTier0UpsellContent;
        const items1 = [
          searchQueryRef,
          channel,
          emojiPickerIntention,
          guildId,
          onPressEmoji,
          analyticsLocations,
          messageId,
          bypassPremiumEmojiEntitlement,
        ];
        onPressEmoji = obj.useCallback((emoji, category) => {
          let intl;
          let obj10;
          let obj12;
          let obj6;
          let obj7;
          let tmp22;
          let str;
          if (searchQueryRef != null) {
            str = searchQueryRef.current;
          }
          if (str == null) {
            str = "";
          }
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          const obj2 = EmojiUtilsDefault;
          const obj3 = { emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement };
          const emojiUnavailableReason = obj2.getEmojiUnavailableReason(obj3);
          if (null === emojiUnavailableReason) {
            if (onPressEmoji != null) {
              onPressEmoji(emoji);
            }
          } else if (analyticsLocations.ROLE_SUBSCRIPTION_LOCKED === emojiUnavailableReason) {
            const tmp2Result = ChatInputUtils;
            tmp2Result.dismissKeyboard();
            if (null != emoji.guildId) {
              const obj4 = { guildId: emoji.guildId };
              const tmp4Result = RoleSubscriptionUpsellUtilsDefault;
              const result1 = tmp4Result.handleShowEmojiUpsellAlert(obj4);
            }
          } else if (tmp44.PREMIUM_LOCKED === emojiUnavailableReason) {
            let DM_CHANNEL;
            let EMOJI_PICKER_EMOJI_CLICKED;
            let guild_id;
            const obj5 = {
              initialUpsellKey: emoji.animated ? metroImportAll.ANIMATED_EMOJI : metroImportAll.GLOBAL_EMOJI,
              analyticsLocation: obj6,
              analyticsLocations,
              analyticsProperties: obj7,
            };
            const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
            PremiumUpsellUtilsDefault;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            if (null != guild_id) {
              DM_CHANNEL = metroRequire.GUILD_CHANNEL;
            } else {
              DM_CHANNEL = metroRequire.DM_CHANNEL;
            }
            obj6 = { page: DM_CHANNEL, section: metroImportDefault.EMOJI_PICKER_POPOUT, object: hasOwnProperty.EMOJI };
            if (emojiPickerIntention === containerWidth.REACTION) {
              EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
            } else {
              EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
            }
            obj7 = {
              type: EMOJI_PICKER_EMOJI_CLICKED,
              is_animated: emoji.animated,
              is_external: tmp22,
              has_search_query: str.length > 0,
            };
            tmp22 = null != emoji.guildId;
            if (tmp22) {
              let guild_id1;
              guildId = emoji.guildId;
              if (channel != null) {
                guild_id1 = channel.guild_id;
              }
              tmp22 = guildId !== guild_id1;
            }
            const result2 = handleShowUpsellAlert(obj5);
          } else {
            const obj8 = { key: "EMOJI_PICKER_LIST_PRESS_DISABLED", content: intl.string(intl2.t.VsE5yG) };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl2.intl;
            open(obj8);
          }
          const tmp2Result2 = EmojiPickerUtils;
          if (str.length > 0) {
            let DM_CHANNEL3;
            let guild_id2;
            const trackEmojiSearchSelect = tmp2Result2.trackEmojiSearchSelect;
            const obj9 = { emoji, location: obj10, searchQuery: str, intention: emojiPickerIntention, messageId };
            if (channel != null) {
              guild_id2 = channel.guild_id;
            }
            if (null != guild_id2) {
              DM_CHANNEL3 = metroRequire.GUILD_CHANNEL;
            } else {
              DM_CHANNEL3 = metroRequire.DM_CHANNEL;
            }
            obj10 = {
              page: DM_CHANNEL3,
              section: metroImportDefault.EMOJI_PICKER_POPOUT,
              object: hasOwnProperty.EMOJI,
            };
            const result3 = trackEmojiSearchSelect(obj9);
          } else {
            let DM_CHANNEL2;
            let guild_id3;
            const trackEmojiSelect = tmp2Result2.trackEmojiSelect;
            const obj11 = { emoji, pickerIntention: emojiPickerIntention, category, location: obj12, messageId };
            if (channel != null) {
              guild_id3 = channel.guild_id;
            }
            if (null != guild_id3) {
              DM_CHANNEL2 = metroRequire.GUILD_CHANNEL;
            } else {
              DM_CHANNEL2 = metroRequire.DM_CHANNEL;
            }
            obj12 = {
              page: DM_CHANNEL2,
              section: metroImportDefault.EMOJI_PICKER_POPOUT,
              object: hasOwnProperty.EMOJI,
            };
            trackEmojiSelect(obj11);
          }
        }, items1);
        const items2 = [onLongPressEmoji];
        callback1 = obj.useCallback((arg0) => {
          if (onLongPressEmoji != null) {
            tmp(arg0);
          }
        }, items2);
        const tmp17 = tmp(guildId[28])({
          emojiSections: tmp12Result,
          rowSize: rounded,
          isNativeEmojiPickerEnabled: tmp8,
        });
        const AnimateEmoji = tmp9(tmp2[29]).AnimateEmoji;
        setting = AnimateEmoji.useSetting();
        const items3 = [
          analyticsLocations,
          onPressEmoji,
          callback1,
          channel,
          rounded,
          tmp4,
          setting,
          emojiPickerListRef,
          useTier0UpsellContent,
        ];
        const callback2 = obj.useCallback((item) => {
          let emojis;
          let emojisDisabled;
          let footer;
          let index;
          let isSectionNitroLocked;
          let items;
          let row;
          let target;
          item = item.item;
          const type = item.type;
          ({ target, index } = item);
          if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
            if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
              if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
                  const title = item.title;
                  if ("StickyHeader" === target) {
                    const current = emojiPickerListRef.current;
                    if (current != null) {
                      const result = current.onStickyHeaderRendered(index);
                    }
                  }
                  const obj2 = { label: title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
                  return map1(EmojiPickerListComponents.Section, obj2);
                } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                  const obj3 = { position: item.position, useTier0UpsellContent };
                  return map1(PremiumUpsellSectionDividerDefault, obj3);
                } else {
                  let tmp27Result;
                  if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
                    ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                    const obj4 = {
                      emojis,
                      emojisDisabled,
                      category: footer,
                      rowSize: rounded,
                      containerWidth,
                      onPressEmoji,
                      onLongPressEmoji: callback1,
                      animateEmoji: setting,
                      row,
                      isSectionNitroLocked,
                    };
                    tmp27Result = map1(EmojiPickerListRow.EmojiPickerListRow, obj4);
                  } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                    tmp27Result = map1(EmojiPickerListComponents.NSFWRow, {});
                  } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
                    let guild_id;
                    const PremiumSearchUpsell = EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell;
                    if (channel != null) {
                      guild_id = channel.guild_id;
                    }
                    const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
                    tmp27Result = map1(PremiumSearchUpsell, obj);
                  }
                  let tmp16 = true === item.isSectionNitroLocked;
                  if (tmp16) {
                    const obj5 = { useTier0UpsellContent };
                    tmp16 = map1(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj5);
                  }
                  const obj6 = { children: items };
                  items = [tmp16, tmp27Result];
                  return callback1(authStore2, obj6);
                }
              }
            }
          }
          return null;
        }, items3);
        tmp(guildId[35])();
        if (0 === tmp12Result.length) {
          let obj5 = { inActionSheet: true, insetTop: num2, insetBottom: num };
          return useTier0UpsellContent(tmp(guildId[36]), obj5);
        } else {
          let hasSearchUpsell = tmp17.hasSearchUpsell;
          const tmpResult = tmp(tmp8 ? guildId[37] : guildId[38]);
          if (hasSearchUpsell) {
            let str = "native.EmojiPickerList";
            const tmp9Result4 = emojiPickerListRef(guildId[39]);
            hasSearchUpsell = tmp9Result4.getMobileEmojiPickerUpsellRestyleEnabledForFeature(
              tmp9(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
              "native.EmojiPickerList",
            );
          }
          let obj6 = {
            analyticsLocations,
            animateEmoji: setting,
            bottomSheetIndex,
            categoryIndexActive,
            data: tmp17,
            guildId,
            inPortalKeyboard: flag,
            onPressEmoji,
            onLongPressEmoji: callback1,
            onShowNitroUpsell: tmp22,
            paddingBottom: num,
            paddingTop: num2,
            ref: emojiPickerListRef,
            renderItem: callback2,
            useTier0UpsellContent,
          };
          const tmp24 = callback1;
          const tmp25 = onPressEmoji;
          if (guildId == null) {
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            guildId = guild_id;
          }
          const items4 = [useTier0UpsellContent(tmpResult, obj6)];
          let tmp26Result = !hasSearchUpsell;
          if (tmp26Result) {
            let obj7 = {
              bottomSheetIndex,
              featureName: emojiPickerListRef(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
              inPortalKeyboard: flag,
              shouldShow: tmp21,
            };
            const tmpResult2 = tmp(guildId[40]);
            tmp26Result = tmp26(tmpResult2, obj7);
          }
          let obj8 = { children: items4 };
          items4[1] = tmp26Result;
          return tmp24(tmp25, obj8);
        }
      },
);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default memoResult;
