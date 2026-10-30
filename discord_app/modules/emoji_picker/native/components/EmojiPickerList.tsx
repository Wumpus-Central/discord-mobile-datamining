// discord_app/modules/emoji_picker/native/components/EmojiPickerList.tsx
import util from "../../../../intl/index.native.tsx";
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import PremiumUpsellUtilsDefault from "../../../../utils/native/PremiumUpsellUtils.tsx";
import EmojiPickerUtils from "../../EmojiPickerUtils.tsx";
import TopEmojisActionCreators from "../../../emojis/top_emojis/TopEmojisActionCreators.tsx";
import RoleSubscriptionUpsellUtilsDefault from "../../../guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx";
import trackEmojiSuggestionSelectedDefault from "../../../chat_input/native/trackEmojiSuggestionSelected.tsx";
import useEmojiPickerData from "data/useEmojiPickerData.tsx";
import PremiumUpsellSectionDividerDefault from "../../../premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx";
import PremiumUpsellGradientBackground from "../../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";
import EmojiPickerListComponents from "EmojiPickerListComponents.tsx";
import EmojiPickerListRow from "EmojiPickerListRow.tsx";
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const EmojiCategoryTypes = fn(6793).EmojiCategoryTypes;
const IMAGE_SIZE = fn(9921).IMAGE_SIZE;
const Constants = fn(1072);
({
  AnalyticsObjects: metroRequire,
  AnalyticsPages: closure_7,
  AnalyticsSections: closure_8,
  UpsellTypes: closure_9,
} = Constants);
const EmojiConstants = fn(1387);
({ EmojiDisabledReasons: c10, EmojiIntention: closure_11 } = EmojiConstants);
const MIN_MARGIN = fn(1229).MIN_MARGIN;
const PremiumUpsellTypes = fn(1386).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default noop.memo(function EmojiPickerList(analyticsObject) {
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
  const analyticsLocations = emojiPickerListRef(channel[8])(emojiPickerListRef(channel[9]).EMOJI).analyticsLocations;
  const tmp4 = emojiPickerListRef(channel[10])(flag);
  const containerWidth = tmp4;
  rounded = Math.floor((tmp4 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = emojiPickerListRef(channel[11])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  let items = [id, guildId];
  const effect = guildId.useEffect(() => {
    const result = TopEmojisActionCreators.updateNewlyAddedLastSeen(guildId, id);
  }, items);
  const tmp8 = emojiPickerListRef(channel[13])();
  const tmp3 = emojiPickerListRef(channel[8]);
  const trackOnEmojiPickerOpenedForReactions = categories(channel[14]).useTrackOnEmojiPickerOpenedForReactions({
    intention: emojiPickerIntention,
    rowSize: rounded,
    analyticsObject: analyticsObject.analyticsObject,
  });
  emojiPickerListRef(channel[15])();
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
  let obj2 = categories(channel[14]);
  const tmp9Result = categories(channel[16]);
  useTier0UpsellContent = tmp9Result.usePremiumUpsellConfig(
    categories(channel[17]).getUpsellType(tmp9(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE),
  ).useTier0UpsellContent;
  const items1 = [
    searchQueryRef,
    channel,
    emojiPickerIntention,
    guildId,
    categories,
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
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    const emojiUnavailableReason = EmojiUtilsDefault.getEmojiUnavailableReason({
      emoji,
      channel,
      intention: emojiPickerIntention,
      guildId,
      bypassPremiumEmojiEntitlement,
    });
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
      const obj5 = {
        initialUpsellKey: emoji.animated ? React7.ANIMATED_EMOJI : React7.GLOBAL_EMOJI,
        analyticsLocation: null,
        analyticsLocations: null,
        analyticsProperties: null,
      };
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
      const obj7 = {
        type: EMOJI_PICKER_EMOJI_CLICKED,
        is_animated: emoji.animated,
        is_external: null,
        has_search_query: null,
      };
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
  let tmp16 = emojiPickerListRef(channel[28])({
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
            return __initData2(__initData, obj6);
          }
        }
      }
    }
    return null;
  }, items3);
  emojiPickerListRef(channel[35])();
  if (0 === tmp12Result.length) {
    let obj5 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    return useTier0UpsellContent(tmp(tmp2[36]), obj5);
  } else {
    const hasSearchUpsell = tmp16.hasSearchUpsell;
    let obj6 = {
      analyticsLocations,
      animateEmoji: setting,
      bottomSheetIndex,
      categoryIndexActive: analyticsObject.categoryIndexActive,
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
    const items4 = [useTier0UpsellContent(tmp(tmp8 ? tmp2[37] : tmp2[38]), obj6)];
    let tmp25Result = !hasSearchUpsell;
    if (!hasSearchUpsell) {
      let obj7 = {
        bottomSheetIndex,
        featureName: tmp9(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
        inPortalKeyboard: flag,
        shouldShow: tmp20,
      };
      tmp25Result = tmp25(tmp(tmp2[39]), obj7);
      const tmpResult2 = tmp(tmp2[39]);
    }
    let obj8 = { children: null };
    items4[1] = tmp25Result;
    obj8.children = items4;
    return callback1(onPressEmoji, obj8);
  }
  const tmp9Result2 = categories(channel[17]);
});
