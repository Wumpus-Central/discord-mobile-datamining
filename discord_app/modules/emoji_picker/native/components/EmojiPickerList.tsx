// === Module 10420: EmojiPickerList ===

// Module 10420 (EmojiPickerList)
import util from "util" /* 1115 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4296 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import ChatInputUtils from "ChatInputUtils" /* 4505 */;
import HapticUtils from "HapticUtils" /* 4607 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4608 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9445 */;
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10410 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 10416 */;
import RoleSubscriptionUpsellUtilsDefault from "RoleSubscriptionUpsellUtils" /* 10429 */;
import useEmojiPickerData from "useEmojiPickerData" /* 10434 */;
import PremiumUpsellSectionDividerDefault from "PremiumUpsellSectionDivider" /* 10437 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 10438 */;
import EmojiPickerListComponents from "EmojiPickerListComponents" /* 10440 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 10441 */;
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell" /* 10444 */;
import noop from "module_19" /* 19 */;

require = fn;
const IMAGE_SIZE = fn(10421).IMAGE_SIZE;
const Constants = fn(1074);
({ AnalyticsObjects: hasOwnProperty, AnalyticsPages: metroRequire, AnalyticsSections: closure_7, UpsellTypes: closure_8 } = Constants);
const EmojiConstants = fn(1375);
({ EmojiDisabledReasons: closure_9, EmojiIntention: c10 } = EmojiConstants);
const MIN_MARGIN = fn(1218).MIN_MARGIN;
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
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
  let items = [id, guildId];
  const effect = onPressEmoji.useEffect(() => {
    const result = TopEmojisActionCreators.updateNewlyAddedLastSeen(guildId, id);
  }, items);
  const tmp8 = channel(guildId[12])();
  const tmp3 = channel(guildId[7]);
  const trackOnEmojiPickerOpenedForReactions = emojiPickerListRef(guildId[13]).useTrackOnEmojiPickerOpenedForReactions({ intention: emojiPickerIntention, rowSize: rounded, analyticsObject: analyticsObject.analyticsObject });
  channel(guildId[14])();
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
  let obj2 = emojiPickerListRef(guildId[13]);
  const tmp9Result = emojiPickerListRef(guildId[15]);
  useTier0UpsellContent = tmp9Result.usePremiumUpsellConfig(emojiPickerListRef(guildId[16]).getUpsellType(tmp9(tmp2[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE)).useTier0UpsellContent;
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
      const obj8 = { key: "EMOJI_PICKER_LIST_PRESS_DISABLED", content: null };
      const intl = util.intl;
      obj8.content = intl.string(util.t.VsE5yG);
      ToastActionCreatorsDefault.open(obj8);
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
  let tmp16 = channel(guildId[26])({ emojiSections: tmp12Result, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 });
  const AnimateEmoji = tmp9(tmp2[27]).AnimateEmoji;
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
            return __initData(closure_2_14, obj6);
          }
        }
      }
    }
    return null;
  }, items3);
  channel(guildId[33])();
  if (0 === tmp12Result.length) {
    let obj5 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    return useTier0UpsellContent(tmp(tmp2[34]), obj5);
  } else {
    let hasSearchUpsell = tmp16.hasSearchUpsell;
    if (hasSearchUpsell) {
      hasSearchUpsell = tmp9(tmp2[37]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(tmp9(tmp2[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, "native.EmojiPickerList");
      const tmp9Result4 = tmp9(tmp2[37]);
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
    const items4 = [useTier0UpsellContent(tmp(tmp8 ? tmp2[35] : tmp2[36]), obj6), ];
    let tmp25Result = !hasSearchUpsell;
    if (!hasSearchUpsell) {
      let obj7 = { bottomSheetIndex, featureName: tmp9(tmp2[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: flag, shouldShow: tmp20 };
      tmp25Result = tmp25(tmp(tmp2[38]), obj7);
      const tmpResult2 = tmp(tmp2[38]);
    }
    let obj8 = { children: null };
    items4[1] = tmp25Result;
    obj8.children = items4;
    return callback1(onPressEmoji, obj8);
  }
  const tmp9Result3 = emojiPickerListRef(guildId[16]);
});