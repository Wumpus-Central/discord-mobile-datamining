// === Module 8821: ? ===

// Module 8821
import importAllResult from "noop" /* 19 */;
import { IMAGE_SIZE } from "IMAGE_SIZE" /* 8787 */;
import ME from "ME" /* 676 */;
import set from "set" /* 1925 */;
import { MIN_MARGIN } from "ExpressionPickerViewType" /* 1338 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ AnalyticsObjects: c5, AnalyticsPages: closure_6, AnalyticsSections: error, UpsellTypes: closure_8 } = ME);
({ EmojiDisabledReasons: c9, EmojiIntention: c10 } = set);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let result = set.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default importAllResult.memo(function EmojiPickerList(analyticsObject) {
  ({ bottomSheetIndex, emojiPickerListRef } = analyticsObject);
  ({ emojis, channel } = analyticsObject);
  const guildId = analyticsObject.guildId;
  const onPressEmoji = analyticsObject.onPressEmoji;
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
  let analyticsLocations;
  closure_10 = undefined;
  let rounded;
  let id;
  let useTier0UpsellContent;
  let callback;
  let callback1;
  let setting;
  analyticsLocations = channel(guildId[7])(channel(guildId[8]).EMOJI).analyticsLocations;
  const tmp4 = channel(guildId[9])(flag);
  closure_10 = tmp4;
  rounded = Math.floor((tmp4 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = channel(guildId[10])(guildId, emojiPickerIntention).newlyAddedEmojis;
  id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  let obj = onPressEmoji;
  let items = [id, guildId];
  const effect = onPressEmoji.useEffect(() => {
    const result = emojiPickerListRef(guildId[11]).updateNewlyAddedLastSeen(guildId, id);
  }, items);
  const tmp8 = channel(guildId[12])();
  obj1 = emojiPickerListRef(tmp2[13]);
  const trackOnEmojiPickerOpenedForReactions = obj1.useTrackOnEmojiPickerOpenedForReactions({ intention: emojiPickerIntention, rowSize: rounded, analyticsObject: analyticsObject.analyticsObject });
  channel(guildId[14])();
  if (null != emojis) {
    obj = { emojis: null, rowSize: null, limit: null };
    obj[0] = emojis;
    obj[1] = rounded;
    let num3;
    if (tmp8) {
      num3 = 200;
    }
    obj[2] = num3;
    let tmp12Result = tmp13(obj);
  } else {
    obj = { categories: null, rowSize: null, isNativeEmojiPickerEnabled: null };
    obj[0] = categories;
    obj[1] = rounded;
    obj[2] = tmp8;
    tmp12Result = tmp12(obj);
  }
  let tmp9Result = tmp9(tmp2[15]);
  tmp9Result = tmp9(tmp2[16]);
  useTier0UpsellContent = tmp9Result.usePremiumUpsellConfig(tmp9Result.getUpsellType(tmp9(tmp2[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE)).useTier0UpsellContent;
  const items1 = [searchQueryRef, channel, emojiPickerIntention, guildId, onPressEmoji, analyticsLocations, messageId, bypassPremiumEmojiEntitlement];
  callback = obj.useCallback((emoji) => {
    let str;
    if (searchQueryRef != null) {
      str = searchQueryRef.current;
    }
    if (str == null) {
      str = "";
    }
    let obj = emojiPickerListRef(guildId[18]);
    const result = obj.triggerHapticFeedback(channel(guildId[19]).IMPACT_LIGHT);
    obj1 = channel(guildId[20]);
    obj = { emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement };
    const emojiUnavailableReason = obj1.getEmojiUnavailableReason(obj);
    if (null === emojiUnavailableReason) {
      if (onPressEmoji != null) {
        onPressEmoji(emoji);
      }
    } else if (analyticsLocations.ROLE_SUBSCRIPTION_LOCKED === emojiUnavailableReason) {
      let tmp2Result = tmp2(tmp3[21]);
      tmp2Result.dismissKeyboard();
      if (null != emoji.guildId) {
        let tmp4Result = tmp4(tmp3[22]);
        obj = { guildId: null };
        obj[0] = emoji.guildId;
        const result1 = tmp4Result.handleShowEmojiUpsellAlert(obj);
      }
    } else if (tmp40.PREMIUM_LOCKED === emojiUnavailableReason) {
      tmp4Result = tmp4(tmp3[15]);
      obj1 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      obj1[0] = emoji.animated ? bypassPremiumEmojiEntitlement.ANIMATED_EMOJI : bypassPremiumEmojiEntitlement.GLOBAL_EMOJI;
      let guild_id;
      if (tmp6 != null) {
        guild_id = tmp6.guild_id;
      }
      if (null != guild_id) {
        let DM_CHANNEL = searchQueryRef.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = searchQueryRef.DM_CHANNEL;
      }
      const obj2 = { page: null, section: null, object: null };
      obj2[0] = DM_CHANNEL;
      obj2[1] = messageId.EMOJI_PICKER_POPOUT;
      obj2[2] = emojiPickerIntention.EMOJI;
      obj1[1] = obj2;
      obj1[2] = analyticsLocations;
      if (tmp7 === constants.REACTION) {
        let EMOJI_PICKER_EMOJI_CLICKED = id.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
      } else {
        EMOJI_PICKER_EMOJI_CLICKED = id.EMOJI_PICKER_EMOJI_CLICKED;
      }
      const obj3 = { type: null, is_animated: null, is_external: null, has_search_query: null };
      obj3[0] = EMOJI_PICKER_EMOJI_CLICKED;
      obj3[1] = emoji.animated;
      let tmp20 = null != emoji.guildId;
      if (tmp20) {
        let guild_id1;
        if (tmp6 != null) {
          guild_id1 = tmp6.guild_id;
        }
        tmp20 = emoji.guildId !== guild_id1;
      }
      obj3[2] = tmp20;
      obj3[3] = tmp;
      obj1[3] = obj3;
      const result2 = tmp4Result.handleShowUpsellAlert(obj1);
    } else {
      const obj4 = { key: "EMOJI_PICKER_LIST_PRESS_DISABLED", content: null };
      const intl = tmp2(tmp3[24]).intl;
      obj4[1] = intl.string(tmp2(tmp3[24]).t.VsE5yG);
      tmp4(tmp3[23]).open(obj4);
      const tmp4Result1 = tmp4(tmp3[23]);
    }
    tmp2Result = tmp2(tmp3[25]);
    if (str.length > 0) {
      let obj5 = { emoji: null, location: null, searchQuery: null, intention: null, messageId: null };
      obj5[0] = emoji;
      let guild_id2;
      if (tmp6 != null) {
        guild_id2 = tmp6.guild_id;
      }
      if (null != guild_id2) {
        let DM_CHANNEL3 = searchQueryRef.GUILD_CHANNEL;
      } else {
        DM_CHANNEL3 = searchQueryRef.DM_CHANNEL;
      }
      const obj6 = { page: null, section: null, object: null };
      obj6[0] = DM_CHANNEL3;
      obj6[1] = messageId.EMOJI_PICKER_POPOUT;
      obj6[2] = emojiPickerIntention.EMOJI;
      obj5[1] = obj6;
      obj5[2] = str;
      obj5[3] = tmp7;
      obj5[4] = messageId;
      obj5 = tmp2Result.trackEmojiSearchSelect(obj5);
    } else {
      const obj7 = { emoji: null, pickerIntention: null, category: null, location: null, messageId: null };
      obj7[0] = emoji;
      obj7[1] = tmp7;
      obj7[2] = arg1;
      let guild_id3;
      if (tmp6 != null) {
        guild_id3 = tmp6.guild_id;
      }
      if (null != guild_id3) {
        let DM_CHANNEL2 = searchQueryRef.GUILD_CHANNEL;
      } else {
        DM_CHANNEL2 = searchQueryRef.DM_CHANNEL;
      }
      const obj8 = { page: null, section: null, object: null };
      obj8[0] = DM_CHANNEL2;
      obj8[1] = messageId.EMOJI_PICKER_POPOUT;
      obj8[2] = emojiPickerIntention.EMOJI;
      obj7[3] = obj8;
      obj7[4] = messageId;
      tmp2Result.trackEmojiSelect(obj7);
    }
  }, items1);
  const items2 = [onLongPressEmoji];
  callback1 = obj.useCallback((arg0) => {
    if (onLongPressEmoji != null) {
      tmp(arg0);
    }
  }, items2);
  const tmp3 = channel(guildId[7]);
  const AnimateEmoji = tmp9(tmp2[27]).AnimateEmoji;
  setting = AnimateEmoji.useSetting();
  const items3 = [analyticsLocations, callback, callback1, channel, rounded, tmp4, setting, emojiPickerListRef, useTier0UpsellContent];
  const callback2 = obj.useCallback((item) => {
    item = item.item;
    const type = item.type;
    ({ target, index } = item);
    if (emojiPickerListRef(guildId[26]).EmojiPickerItemType.NATIVE_SECTION !== type) {
      if (tmp(tmp2[26]).EmojiPickerItemType.PLACEHOLDER !== type) {
        if (tmp(tmp2[26]).EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
          if (tmp(tmp2[26]).EmojiPickerItemType.TITLE === type) {
            if ("StickyHeader" === target) {
              const current = emojiPickerListRef.current;
              if (current != null) {
                const result = current.onStickyHeaderRendered(index);
              }
            }
            let obj = { label: null, isSectionNitroLocked: null, useTier0UpsellContent: null };
            obj[0] = item.title;
            obj[1] = item.isSectionNitroLocked;
            obj[2] = useTier0UpsellContent;
            return useTier0UpsellContent(tmp(tmp2[28]).Section, obj);
          } else if (tmp(tmp2[26]).EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
            obj = { position: null, useTier0UpsellContent: null };
            obj[0] = item.position;
            obj[1] = useTier0UpsellContent;
            return useTier0UpsellContent(channel(tmp2[29]), obj);
          } else {
            if (tmp(tmp2[26]).EmojiPickerItemType.EMOJI_ROW === type) {
              ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
              obj1 = { emojis: null, emojisDisabled: null, category: null, rowSize: null, containerWidth: null, onPressEmoji: null, onLongPressEmoji: null, animateEmoji: null, row: null, isSectionNitroLocked: null };
              obj1[0] = emojis;
              obj1[1] = emojisDisabled;
              obj1[2] = footer;
              obj1[3] = rounded;
              obj1[4] = closure_10;
              obj1[5] = callback;
              obj1[6] = callback1;
              obj1[7] = setting;
              obj1[8] = row;
              obj1[9] = isSectionNitroLocked;
              let tmp27Result = useTier0UpsellContent(tmp(tmp2[30]).EmojiPickerListRow, obj1);
            } else if (tmp(tmp2[26]).EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
              tmp27Result = useTier0UpsellContent(tmp(tmp2[28]).NSFWRow, {});
            } else if (tmp(tmp2[26]).EmojiPickerItemType.FOOTER_UPSELL === type) {
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              obj = { guildId: null, analyticsLocations: null, useTier0UpsellContent: null };
              obj[0] = guild_id;
              obj[1] = analyticsLocations;
              obj[2] = useTier0UpsellContent;
              tmp27Result = useTier0UpsellContent(tmp(tmp2[31]).PremiumSearchUpsell, obj);
              const tmp27 = useTier0UpsellContent;
            }
            let tmp16 = true === item.isSectionNitroLocked;
            if (tmp16) {
              const obj2 = { useTier0UpsellContent: null };
              obj2[0] = useTier0UpsellContent;
              tmp16 = useTier0UpsellContent(tmp(tmp2[32]).PremiumUpsellGradientBackground, obj2);
            }
            const obj3 = { children: null };
            const items = [tmp16, tmp27Result];
            obj3[0] = items;
            return callback1(callback, obj3);
          }
        }
      }
    }
    return null;
  }, items3);
  channel(guildId[33])();
  if (0 === tmp12Result.length) {
    obj1 = { inActionSheet: true, insetTop: null, insetBottom: null };
    obj1[1] = num2;
    obj1[2] = num;
    return useTier0UpsellContent(tmp(tmp2[34]), obj1);
  } else {
    let obj2 = { analyticsLocations: null, animateEmoji: null, bottomSheetIndex: null, categoryIndexActive: null, data: null, guildId: null, inPortalKeyboard: null, onPressEmoji: null, onLongPressEmoji: null, onShowNitroUpsell: null, paddingBottom: null, paddingTop: null, ref: null, renderItem: null, useTier0UpsellContent: null };
    obj2[0] = analyticsLocations;
    obj2[1] = setting;
    obj2[2] = bottomSheetIndex;
    obj2[3] = categoryIndexActive;
    obj2[4] = tmp16;
    let tmp26 = guildId;
    if (guildId == null) {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      tmp26 = guild_id;
    }
    let obj3 = { children: null };
    obj2[5] = tmp26;
    obj2[6] = flag;
    obj2[7] = callback;
    obj2[8] = callback1;
    obj2[9] = tmp21;
    obj2[10] = num;
    obj2[11] = num2;
    obj2[12] = emojiPickerListRef;
    obj2[13] = callback2;
    obj2[14] = useTier0UpsellContent;
    const items4 = [useTier0UpsellContent(tmp(tmp8 ? tmp2[35] : tmp2[36]), obj2), ];
    let obj4 = { bottomSheetIndex: null, inPortalKeyboard: null, shouldShow: null };
    obj4[0] = bottomSheetIndex;
    obj4[1] = flag;
    obj4[2] = tmp20;
    items4[1] = useTier0UpsellContent(tmp(tmp2[37]), obj4);
    obj3[0] = items4;
    return callback1(callback, obj3);
  }
  tmp16 = channel(guildId[26])({ emojiSections: tmp12Result, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 });
});