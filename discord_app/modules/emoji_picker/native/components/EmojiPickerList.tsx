// discord_app/modules/emoji_picker/native/components/EmojiPickerList.tsx
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import TopEmojisActionCreators from "../../../emojis/top_emojis/TopEmojisActionCreators.tsx";
import useEmojiPickerData from "data/useEmojiPickerData.tsx";
import PremiumUpsellSectionDividerDefault from "../../../premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const IMAGE_SIZE = fn(10290).IMAGE_SIZE;
const Constants = fn(1074);
({
  AnalyticsObjects: hasOwnProperty,
  AnalyticsPages: metroRequire,
  AnalyticsSections: closure_7,
  UpsellTypes: closure_8,
} = Constants);
const EmojiConstants = fn(1374);
({ EmojiDisabledReasons: closure_9, EmojiIntention: c10 } = EmojiConstants);
const MIN_MARGIN = fn(1219).MIN_MARGIN;
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default noop.memo(function EmojiPickerList(analyticsObject) {
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
  const analyticsLocations = channel(guildId[7])(channel(guildId[8]).EMOJI).analyticsLocations;
  const tmp4 = channel(guildId[9])(flag);
  const containerWidth = tmp4;
  rounded = Math.floor((tmp4 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = channel(guildId[10])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  let obj = onPressEmoji;
  let items = [id, guildId];
  const effect = onPressEmoji.useEffect(() => {
    const result = TopEmojisActionCreators.updateNewlyAddedLastSeen(guildId, id);
  }, items);
  const tmp8 = channel(guildId[12])();
  let obj1 = emojiPickerListRef(tmp2[13]);
  const trackOnEmojiPickerOpenedForReactions = obj1.useTrackOnEmojiPickerOpenedForReactions({
    intention: emojiPickerIntention,
    rowSize: rounded,
    analyticsObject: analyticsObject.analyticsObject,
  });
  channel(guildId[14])();
  if (null != emojis) {
    obj = { emojis, rowSize: rounded, limit: null };
    let num3;
    if (tmp8) {
      num3 = 200;
    }
    obj.limit = num3;
    let tmp12Result = tmp13(obj);
  } else {
    obj = { categories, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 };
    tmp12Result = tmp12(obj);
  }
  tmp9(tmp2[15]);
  const tmp9Result = tmp9(tmp2[16]);
  useTier0UpsellContent = tmp9Result.usePremiumUpsellConfig(
    tmp9Result.getUpsellType(tmp9(tmp2[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE),
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
    let str;
    if (searchQueryRef != null) {
      str = searchQueryRef.current;
    }
    if (str == null) {
      str = "";
    }
    let obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    let obj1 = EmojiUtilsDefault;
    obj = { emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement };
    const emojiUnavailableReason = obj1.getEmojiUnavailableReason(obj);
    if (null === emojiUnavailableReason) {
      if (onPressEmoji != null) {
        onPressEmoji(emoji);
      }
    } else if (constants4.ROLE_SUBSCRIPTION_LOCKED === emojiUnavailableReason) {
      let tmp2Result = tmp2(4425);
      tmp2Result.dismissKeyboard();
      if (null != emoji.guildId) {
        let tmp4Result = tmp4(10298);
        obj = { guildId: emoji.guildId };
        const result1 = tmp4Result.handleShowEmojiUpsellAlert(obj);
      }
    } else if (tmp40.PREMIUM_LOCKED === emojiUnavailableReason) {
      tmp4Result = tmp4(9313);
      obj1 = {
        initialUpsellKey: emoji.animated ? React6.ANIMATED_EMOJI : React6.GLOBAL_EMOJI,
        analyticsLocation: null,
        analyticsLocations: null,
        analyticsProperties: null,
      };
      let guild_id;
      if (tmp6 != null) {
        guild_id = tmp6.guild_id;
      }
      if (null != guild_id) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      const obj2 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
      obj1.analyticsLocation = obj2;
      obj1.analyticsLocations = analyticsLocations;
      if (tmp7 === constants5.REACTION) {
        let EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
      } else {
        EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
      }
      const obj3 = {
        type: EMOJI_PICKER_EMOJI_CLICKED,
        is_animated: emoji.animated,
        is_external: null,
        has_search_query: null,
      };
      let tmp20 = null != emoji.guildId;
      if (tmp20) {
        let guild_id1;
        if (tmp6 != null) {
          guild_id1 = tmp6.guild_id;
        }
        tmp20 = emoji.guildId !== guild_id1;
      }
      obj3.is_external = tmp20;
      obj3.has_search_query = tmp;
      obj1.analyticsProperties = obj3;
      const result2 = tmp4Result.handleShowUpsellAlert(obj1);
    } else {
      const obj4 = { key: "EMOJI_PICKER_LIST_PRESS_DISABLED", content: null };
      const intl = tmp2(1114).intl;
      obj4.content = intl.string(tmp2(1114).t.VsE5yG);
      tmp4(4259).open(obj4);
      const tmp4Result1 = tmp4(4259);
    }
    tmp2Result = tmp2(10285);
    if (str.length > 0) {
      let obj5 = { emoji, location: null, searchQuery: null, intention: null, messageId: null };
      let guild_id2;
      if (tmp6 != null) {
        guild_id2 = tmp6.guild_id;
      }
      if (null != guild_id2) {
        let DM_CHANNEL3 = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL3 = constants2.DM_CHANNEL;
      }
      const obj6 = { page: DM_CHANNEL3, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
      obj5.location = obj6;
      obj5.searchQuery = str;
      obj5.intention = tmp7;
      obj5.messageId = messageId;
      obj5 = tmp2Result.trackEmojiSearchSelect(obj5);
    } else {
      const obj7 = { emoji, pickerIntention: tmp7, category, location: null, messageId: null };
      let guild_id3;
      if (tmp6 != null) {
        guild_id3 = tmp6.guild_id;
      }
      if (null != guild_id3) {
        let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL2 = constants2.DM_CHANNEL;
      }
      const obj8 = { page: DM_CHANNEL2, section: constants3.EMOJI_PICKER_POPOUT, object: constants.EMOJI };
      obj7.location = obj8;
      obj7.messageId = messageId;
      tmp2Result.trackEmojiSelect(obj7);
    }
  }, items1);
  const items2 = [onLongPressEmoji];
  callback1 = obj.useCallback((arg0) => {
    if (onLongPressEmoji != null) {
      tmp(arg0);
    }
  }, items2);
  let tmp16 = channel(guildId[26])({ emojiSections: tmp12Result, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 });
  const AnimateEmoji = tmp9(tmp2[27]).AnimateEmoji;
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
    item = item.item;
    const type = item.type;
    ({ target, index } = item);
    if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
      if (tmp(10303).EmojiPickerItemType.PLACEHOLDER !== type) {
        if (tmp(10303).EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
          if (tmp(10303).EmojiPickerItemType.TITLE === type) {
            if ("StickyHeader" === target) {
              const current = emojiPickerListRef.current;
              if (current != null) {
                const result = current.onStickyHeaderRendered(index);
              }
            }
            let obj = { label: item.title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
            return map1(tmp(10309).Section, obj);
          } else if (tmp(10303).EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
            obj = { position: item.position, useTier0UpsellContent };
            return map1(PremiumUpsellSectionDividerDefault, obj);
          } else {
            if (tmp(10303).EmojiPickerItemType.EMOJI_ROW === type) {
              ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
              const obj1 = {
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
              let tmp27Result = map1(tmp(10310).EmojiPickerListRow, obj1);
            } else if (tmp(10303).EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
              tmp27Result = map1(tmp(10309).NSFWRow, {});
            } else if (tmp(10303).EmojiPickerItemType.FOOTER_UPSELL === type) {
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
              tmp27Result = map1(tmp(10313).PremiumSearchUpsell, obj);
            }
            let tmp16 = true === item.isSectionNitroLocked;
            if (tmp16) {
              const obj2 = { useTier0UpsellContent };
              tmp16 = map1(tmp(10307).PremiumUpsellGradientBackground, obj2);
            }
            const obj3 = { children: null };
            const items = [tmp16, tmp27Result];
            obj3.children = items;
            return __initData(closure_2_14, obj3);
          }
        }
      }
    }
    return null;
  }, items3);
  channel(guildId[33])();
  if (0 === tmp12Result.length) {
    obj1 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    return useTier0UpsellContent(tmp(tmp2[34]), obj1);
  } else {
    let hasSearchUpsell = tmp16.hasSearchUpsell;
    if (hasSearchUpsell) {
      hasSearchUpsell = tmp9(tmp2[37]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(
        tmp9(tmp2[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
        "native.EmojiPickerList",
      );
      const tmp9Result1 = tmp9(tmp2[37]);
    }
    let obj2 = {
      analyticsLocations,
      animateEmoji: setting,
      bottomSheetIndex,
      categoryIndexActive,
      data: tmp16,
      guildId: null,
      inPortalKeyboard: null,
      onPressEmoji: null,
      onLongPressEmoji: null,
      onShowNitroUpsell: null,
      paddingBottom: null,
      paddingTop: null,
      ref: null,
      renderItem: null,
      useTier0UpsellContent: null,
    };
    if (guildId == null) {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      guildId = guild_id;
    }
    obj2.guildId = guildId;
    obj2.inPortalKeyboard = flag;
    obj2.onPressEmoji = onPressEmoji;
    obj2.onLongPressEmoji = callback1;
    obj2.onShowNitroUpsell = tmp21;
    obj2.paddingBottom = num;
    obj2.paddingTop = num2;
    obj2.ref = emojiPickerListRef;
    obj2.renderItem = callback2;
    obj2.useTier0UpsellContent = useTier0UpsellContent;
    const items4 = [useTier0UpsellContent(tmp(tmp8 ? tmp2[35] : tmp2[36]), obj2)];
    let tmp25Result = !hasSearchUpsell;
    if (!hasSearchUpsell) {
      let obj3 = { bottomSheetIndex, inPortalKeyboard: flag, shouldShow: tmp20 };
      tmp25Result = tmp25(tmp(tmp2[38]), obj3);
    }
    let obj4 = { children: null };
    items4[1] = tmp25Result;
    obj4.children = items4;
    return callback1(onPressEmoji, obj4);
  }
  const tmp3 = channel(guildId[7]);
});
