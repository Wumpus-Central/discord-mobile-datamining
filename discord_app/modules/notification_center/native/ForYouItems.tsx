// === Module 16784: ForYouItems ===

// Module 16784 (ForYouItems)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _mod686 from "module_686" /* 686 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import Link from "Link" /* 1504 */;
import parseURLDefault from "parseURL" /* 5068 */;
import Text_Text from "Text/Text" /* 5087 */;
import CustomMarkupAll from "CustomMarkup" /* 5396 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 6065 */;
import PollsUtils from "PollsUtils" /* 7879 */;
import parsePollResultSystemMessageEmbedDefault from "parsePollResultSystemMessageEmbed" /* 8053 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12325 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 13994 */;
import NotificationCenterStoreActions from "NotificationCenterStoreActions" /* 16782 */;
import ForYouReadSectionHeader from "ForYouReadSectionHeader" /* 16799 */;
import ForYouRecentActivitySectionHeader from "ForYouRecentActivitySectionHeader" /* 16800 */;
import ForYouHoistedItemsHeader from "ForYouHoistedItemsHeader" /* 16801 */;
import ForYouSuggestedFriendsSectionHeaderDefault from "ForYouSuggestedFriendsSectionHeader" /* 16802 */;
import ForYouSuggestedFriendRowDefault from "ForYouSuggestedFriendRow" /* 16803 */;
import ForYouShowAllRow from "ForYouShowAllRow" /* 16809 */;
import ForYouUnreadClearedState from "ForYouUnreadClearedState" /* 16810 */;
import ForYouLoadMore from "ForYouLoadMore" /* 16811 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;
import NotificationCenterStore from "NotificationCenterStore" /* 16778 */;

const ForYouMentionPlaceholder2 = ForYouMentionPlaceholder(16783);
require = fn;
function getMessageContentPreviewV2(item) {
  item = item.item;
  const intl = util.intl;
  const stringResult = intl.string(util.t.BOi07B);
  const message = item.message;
  let num;
  if (message != null) {
    num = message.flags;
  }
  if (num == null) {
    num = 0;
  }
  const message2 = item.message;
  let type;
  if (message2 != null) {
    type = message2.type;
  }
  const message3 = item.message;
  let attachments;
  if (message3 != null) {
    attachments = message3.attachments;
  }
  if (attachments == null) {
    attachments = [];
  }
  const message4 = item.message;
  let stickers;
  if (message4 != null) {
    stickers = message4.stickers;
  }
  if (stickers == null) {
    stickers = [];
  }
  const message5 = item.message;
  let embeds1;
  if (message5 != null) {
    embeds1 = message5.embeds;
  }
  if (embeds1 == null) {
    embeds1 = [];
  }
  const message6 = item.message;
  if (message6 != null) {
    const interaction = message6.interaction;
  }
  if (type === constants3.POLL_RESULT) {
    const message8 = item.message;
    let first;
    if (message8 != null) {
      const embeds = message8.embeds;
      if (embeds != null) {
        first = embeds[0];
      }
    }
    const tmp15 = parsePollResultSystemMessageEmbedDefault(first);
    let result = stringResult;
    if (null != tmp15) {
      result = PollsUtils.formatPollResultNotificationCenterText(tmp15);
      const tmpResult = PollsUtils;
    }
  } else if (stickers.length > 0) {
    const intl6 = util.intl;
    result = intl6.string(util.t["7K5Lma"]);
    let ATTACHMENT = constants4.STICKER;
  } else if (tmp7) {
    const intl5 = util.intl;
    result = intl5.string(util.t["2v7kfl"]);
  } else if (hasFlagResult) {
    const intl4 = util.intl;
    result = intl4.string(util.t["6bhHrc"]);
    ATTACHMENT = constants4.VOICE_MESSAGE;
  } else {
    const message7 = item.message;
    let num2;
    if (message7 != null) {
      num2 = message7.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    if (tmpResult2.hasFlag(num2, constants2.IS_COMPONENTS_V2)) {
      const intl3 = util.intl;
      result = intl3.string(util.t.Xxm5i3);
    } else {
      result = stringResult;
      if (tmp8) {
        const intl2 = util.intl;
        result = intl2.string(util.t.JAKsM8);
        ATTACHMENT = constants4.ATTACHMENT;
      }
      tmp8 = attachments.length > 0 || embeds1.length > 0;
    }
    tmpResult2 = FlagUtils;
  }
  const message9 = item.message;
  let content;
  if (message9 != null) {
    content = message9.content;
  }
  let tmp17 = null != content;
  if (tmp17) {
    tmp17 = "" !== content;
  }
  if (tmp17) {
    result = content;
  }
  return { content: result, isSystemMessage: !tmp17, iconType: ATTACHMENT };
}
function extractKey(id) {
  return id.id;
}
get_ActivityIndicator = fn(17);
({ View: closure_7, RefreshControl: closure_8, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_15, MessageFlags: closure_16, AnalyticsLocations: closure_17, MessageTypes: closure_18, EMPTY_STRING_SNOWFLAKE_ID: closure_19 } = Constants);
const NotificationTypes = fn(5940).NotificationTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const viewabilityConfig = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 1000 };
let createStyles = fn(5091);
let obj = { strong: null };
let obj3 = {};
const merged = Object.assign(fn(5087).TextStyleSheet["text-md/medium"]);
obj3.color = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.strong = obj3;
let closure_24 = createStyles.createStyles(obj);
createStyles = fn(5091);
let obj4 = { strong: null };
let obj6 = {};
const merged1 = Object.assign(fn(5087).TextStyleSheet["text-md/medium"]);
obj6.color = nativeDefault.colors.TEXT_MUTED;
obj4.strong = obj6;
let closure_25 = createStyles.createStyles(obj4);
createStyles = fn(5091);
let obj7 = { mention: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND } };
let closure_26 = createStyles.createStyles(obj7);
createStyles = fn(5091);
let obj10 = { mention: null };
let obj9 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
obj10.mention = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
let closure_27 = createStyles.createStyles(obj10);
let closure_28 = { channelMentionText: "redesign/message-preview/medium" };
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useMarkupMessagePreview() {

}
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useMarkupReadV2() {

}
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useMarkupUnreadV2() {

}
createStyles = fn(5091);
let obj13 = { container: { flex: 1 }, row: null, rowCompact: null, rowActive: null, col: null, unreadIndicatorV2: null, unreadIndicatorCompactV2: null, rowText: null, rowTextV2: null, rowBody: null, rowBodyV2: null, rowBodyAcked: null, rowTime: null, rowTimeV2: null, itemV2: null, calloutContainer: null, calloutTextAcked: null, calloutTextNotAcked: null, messagePreviewContainerV2: null, messagePreviewBarV2: null, messagePreviewIconV2Container: null, messagePreviewIconV2: null, messagePreviewTextV2Acked: null, messagePreviewTextV2NotAcked: null, messagePreviewSystemTextV2: null, refreshSpinner: null, forYouDivider: null, friendRequestNoteContainer: null };
let obj12 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
obj13.row = { marginHorizontal: 4, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4, borderRadius: nativeDefault.radii.lg, flexDirection: "row", justifyContent: "space-between" };
obj13.rowCompact = { paddingVertical: 6 };
const obj18 = { marginHorizontal: 4, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4, borderRadius: nativeDefault.radii.lg, flexDirection: "row", justifyContent: "space-between" };
obj13.rowActive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj13.col = { flexDirection: "column", flex: 1 };
let size = { top: 28, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: nativeDefault.radii.xs, position: "absolute", left: 4 };
obj13.unreadIndicatorV2 = size;
obj13.unreadIndicatorCompactV2 = { top: 18 };
obj13.rowText = { flex: 1 };
obj13.rowTextV2 = { flexDirection: "row", justifyContent: "space-between" };
obj13.rowBody = { lineHeight: 20 };
obj13.rowBodyV2 = { marginRight: 30 };
const obj19 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj13.rowBodyAcked = { color: nativeDefault.colors.TEXT_MUTED };
obj13.rowTime = { lineHeight: 20 };
obj13.rowTimeV2 = { marginLeft: -24 };
obj13.itemV2 = { alignItems: "flex-start", marginRight: 4, marginLeft: 8 };
obj13.calloutContainer = { marginTop: 4, flexDirection: "row", marginRight: 16 };
const obj20 = { color: nativeDefault.colors.TEXT_MUTED };
obj13.calloutTextAcked = { color: nativeDefault.colors.TEXT_MUTED };
const obj21 = { color: nativeDefault.colors.TEXT_MUTED };
obj13.calloutTextNotAcked = { color: nativeDefault.colors.TEXT_DEFAULT };
obj13.messagePreviewContainerV2 = { marginTop: 4, flexDirection: "row", marginRight: 16 };
const obj22 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj13.messagePreviewBarV2 = { marginRight: 8, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderLeftWidth: 3, borderRadius: 2, height: "auto" };
obj13.messagePreviewIconV2Container = { paddingTop: 4 };
const obj23 = { marginRight: 8, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderLeftWidth: 3, borderRadius: 2, height: "auto" };
obj13.messagePreviewIconV2 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const obj24 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
obj13.messagePreviewTextV2Acked = { color: nativeDefault.colors.TEXT_MUTED };
const obj25 = { color: nativeDefault.colors.TEXT_MUTED };
obj13.messagePreviewTextV2NotAcked = { color: nativeDefault.colors.TEXT_DEFAULT };
obj13.messagePreviewSystemTextV2 = { fontStyle: "italic", fontWeight: "normal" };
const obj26 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj13.refreshSpinner = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj27 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj13.forYouDivider = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
const obj28 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
obj13.friendRequestNoteContainer = { marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_32 = createStyles.createStyles(obj13);
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForYouFooter(loading) {
  let ForYouMentionPlaceholder = require;
  let tmp = dependencyMap;
  const cResult = c.c(1);
  if (!loading.loading) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      ForYouMentionPlaceholder = ForYouMentionPlaceholder2.ForYouMentionPlaceholder;
      tmp = guild(ForYouMentionPlaceholder, {});
      cResult[0] = tmp;
      let first = tmp;
    } else {
      first = cResult[0];
    }
  }
}) : (function ForYouFooter(loading) {
  let tmp = null;
  if (loading.loading) {
    tmp = guild(ForYouMentionPlaceholder2.ForYouMentionPlaceholder, {});
  }
  return tmp;
});
const constants4 = { STICKER: "sticker", VOICE_MESSAGE: "voice_message", ATTACHMENT: "attachment" };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function Callout(item) {
  const cResult = c.c(13);
  item = item.item;
  ({ acked, compactMode } = item);
  const tmp4 = closure_32();
  if (typeof useMarkupMessagePreview === "function") {
    const parser = CustomMarkupAll.getParser(closure_26());
    if (cResult[0] !== tmp4.messagePreviewBarV2) {
      const obj3 = { style: tmp4.messagePreviewBarV2 };
      const tmp11 = guild(onAddSuggestionAnimationFinish, obj3);
      cResult[0] = tmp4.messagePreviewBarV2;
      cResult[1] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[1];
    }
    const tmp12 = acked ? tmp4.calloutTextAcked : tmp4.calloutTextNotAcked;
    let num4 = 10;
    if (compactMode) {
      num4 = 3;
    }
    if (cResult[2] === item.callout) {
      if (cResult[3] === parser) {
        let tmp13 = cResult[4];
      }
      if (cResult[5] === tmp12) {
        if (cResult[6] === num4) {
          if (cResult[7] === tmp13) {
            let tmp15 = cResult[8];
          }
          if (cResult[9] === tmp4.calloutContainer) {
            if (cResult[10] === tmp8) {
              if (cResult[11] === tmp15) {
                let tmp18 = cResult[12];
              }
              return tmp18;
            }
          }
          const obj4 = { style: tmp4.calloutContainer, pointerEvents: "none", children: null };
          const items = [tmp8, tmp15];
          obj4.children = items;
          const tmp21 = closure_1_22(onAddSuggestionAnimationFinish, obj4);
          cResult[9] = tmp4.calloutContainer;
          cResult[10] = tmp8;
          cResult[11] = tmp15;
          cResult[12] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj5 = { style: tmp12, variant: "redesign/message-preview/medium", lineClamp: num4, children: tmp13 };
      const tmp17 = guild(Text_Text.Text, obj5);
      cResult[5] = tmp12;
      cResult[6] = num4;
      cResult[7] = tmp13;
      cResult[8] = tmp17;
      tmp15 = tmp17;
    }
    const parserResult = parser(item.callout);
    cResult[2] = item.callout;
    cResult[3] = parser;
    cResult[4] = parserResult;
    tmp13 = parserResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function Callout(arg0) {
  ({ item, acked, compactMode } = arg0);
  const tmp = closure_32();
  if (typeof useMarkupMessagePreview === "function") {
    const obj2 = { style: tmp.calloutContainer, pointerEvents: "none", children: null };
    const obj3 = { style: tmp.messagePreviewBarV2 };
    const parser = CustomMarkupAll.getParser(closure_26());
    const items = [guild(onAddSuggestionAnimationFinish, obj3), ];
    const obj4 = { style: acked ? tmp.calloutTextAcked : tmp.calloutTextNotAcked, variant: "redesign/message-preview/medium", lineClamp: null, children: null };
    let num = 10;
    if (compactMode) {
      num = 3;
    }
    obj4.lineClamp = num;
    obj4.children = parser(item.callout);
    items[1] = guild(Text_Text.Text, obj4);
    obj2.children = items;
    return closure_1_22(onAddSuggestionAnimationFinish, obj2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForYouMessagePreviewV2(item) {
  let messagePreviewIconV2 = dependencyMap;
  const cResult = item(576).c(26);
  item = item.item;
  const acked = item.acked;
  ({ compactMode, roleStyle } = item);
  const tmp3 = closure_32();
  const obj = item(576);
  const notifCenterV2MessagePreviewParser = message_channel_id(5396).getNotifCenterV2MessagePreviewParser(closure_27(), closure_28, roleStyle);
  const tmp5 = getMessageContentPreviewV2({ item });
  const iconType = tmp5.iconType;
  const guild_id = item.guild_id;
  message_channel_id = item.message_channel_id;
  ({ content, isSystemMessage } = tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function o() {
      return GuildStore.getGuild(guild_id);
    };
    cResult[1] = guild_id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = message_channel_id(5396);
  const stateFromStores = item(504).useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== message_channel_id) {
    const fn2 = function l() {
      return ChannelStore.getChannel(message_channel_id);
    };
    cResult[4] = message_channel_id;
    cResult[5] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult = item(504);
  const stateFromStores1 = item(504).useStateFromStores(tmp10, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    cResult[6] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  let message = item.message;
  let id;
  if (message != null) {
    id = message.author.id;
  }
  if (cResult[7] === id) {
    let message2 = item.message;
    let mentions;
    if (message2 != null) {
      mentions = message2.mentions;
    }
    if (cResult[8] === mentions) {
      let tmp18 = cResult[9];
    }
    const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp14, tmp18);
    if (cResult[10] !== tmp3.messagePreviewBarV2) {
      const obj3 = { style: tmp3.messagePreviewBarV2 };
      const tmp25 = closure_21(closure_7, obj3);
      cResult[10] = tmp3.messagePreviewBarV2;
      cResult[11] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[11];
    }
    const Text = tmp(5087).Text;
    const tmp26 = acked ? tmp3.messagePreviewTextV2Acked : tmp3.messagePreviewTextV2NotAcked;
    let prop;
    if (isSystemMessage) {
      prop = tmp3.messagePreviewSystemTextV2;
    }
    if (cResult[12] === tmp26) {
      if (cResult[13] === prop) {
        let tmp28 = cResult[14];
      }
      let num12 = 10;
      if (compactMode) {
        num12 = 3;
      }
      const obj4 = { content, guildId: guild_id, channelId: message_channel_id, messageId: item.message_id, authorId: null };
      const message5 = item.message;
      let id1;
      if (message5 != null) {
        id1 = message5.author.id;
      }
      obj4.authorId = id1;
      let str = "text-default";
      if (acked) {
        str = "text-muted";
      }
      const obj5 = { textColor: str };
      const result = tmp(8122).renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj4, obj5);
      if (null == iconType) {
        if (cResult[15] === Text) {
          if (cResult[16] === tmp28) {
            if (cResult[17] === num12) {
              if (cResult[18] === result) {
                if (cResult[19] === tmp31) {
                  let tmp40 = cResult[20];
                }
                if (cResult[21] === closure_7) {
                  if (cResult[22] === tmp3.messagePreviewContainerV2) {
                    if (cResult[23] === tmp40) {
                      if (cResult[24] === tmp23) {
                        let tmp43 = cResult[25];
                      }
                      return tmp43;
                    }
                  }
                }
                const obj6 = { style: tmp3.messagePreviewContainerV2, pointerEvents: "none", children: null };
                const items3 = [tmp23, tmp40];
                obj6.children = items3;
                const tmp45 = closure_22(closure_7, obj6);
                cResult[21] = closure_7;
                cResult[22] = tmp3.messagePreviewContainerV2;
                cResult[23] = tmp40;
                cResult[24] = tmp23;
                cResult[25] = tmp45;
                tmp43 = tmp45;
              }
            }
          }
        }
        const obj7 = { style: tmp28, variant: "redesign/message-preview/medium", lineClamp: num12, children: null };
        const items4 = [result, tmp31];
        obj7.children = items4;
        const tmp42 = closure_22(Text, obj7);
        cResult[15] = Text;
        cResult[16] = tmp28;
        cResult[17] = num12;
        cResult[18] = result;
        cResult[19] = tmp31;
        cResult[20] = tmp42;
        tmp40 = tmp42;
      } else {
        const obj8 = { style: tmp3.messagePreviewIconV2Container, children: null };
        if (constants4.ATTACHMENT === iconType) {
          let tmp35 = guild_id(11637);
          const obj9 = { source: tmp35, size: tmp(1200).IconSizes.SMALL, style: null };
          messagePreviewIconV2 = tmp3.messagePreviewIconV2;
          obj9.style = messagePreviewIconV2;
          obj8.children = closure_21(tmp33, obj9);
          closure_21(closure_7, obj8);
        } else if (constants4.STICKER !== iconType) {
          tmp35 = null;
          if (constants4.VOICE_MESSAGE === iconType) {
            tmp35 = guild_id(7701);
          }
        }
        tmp35 = guild_id(9767);
      }
      const tmpResult6 = tmp(8122);
    }
    const items5 = [tmp26, prop];
    cResult[12] = tmp26;
    cResult[13] = prop;
    cResult[14] = items5;
    tmp28 = items5;
    const tmpResult5 = tmp(504);
  }
  const message3 = item.message;
  let id2;
  if (message3 != null) {
    id2 = message3.author.id;
  }
  cResult[7] = id2;
  const message4 = item.message;
  let mentions1;
  if (message4 != null) {
    mentions1 = message4.mentions;
  }
  const fn3 = function u() {
    const message = item.message;
    let id;
    if (message != null) {
      id = message.author.id;
    }
    const items = [UserStore.getUser(id)];
    const message2 = item.message;
    let mapped;
    if (message2 != null) {
      const mentions = message2.mentions;
      if (mentions != null) {
        mapped = mentions.map((item) => user.getUser(item));
      }
    }
    if (mapped == null) {
      mapped = [];
    }
    HermesBuiltin.arraySpread(mapped, 1);
    return items;
  };
  cResult[8] = mentions1;
  cResult[9] = fn3;
  tmp18 = fn3;
  const tmpResult4 = item(504);
}) : (function ForYouMessagePreviewV2(item) {
  item = item.item;
  const acked = item.acked;
  let message_channel_id;
  ({ compactMode, roleStyle } = item);
  let messagePreviewIconV2 = closure_32();
  let SMALL = dependencyMap;
  const notifCenterV2MessagePreviewParser = message_channel_id(5396).getNotifCenterV2MessagePreviewParser(closure_27(), closure_28, roleStyle);
  const tmp2 = getMessageContentPreviewV2({ item });
  const iconType = tmp2.iconType;
  const guild_id = item.guild_id;
  message_channel_id = item.message_channel_id;
  ({ content, isSystemMessage } = tmp2);
  const obj = message_channel_id(5396);
  let items = [GuildStore];
  const stateFromStores = item(504).useStateFromStores(items, () => GuildStore.getGuild(guild_id));
  const obj2 = item(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = item(504).useStateFromStores(items1, () => ChannelStore.getChannel(message_channel_id));
  const obj3 = item(504);
  const items2 = [UserStore];
  const stateFromStoresArray = item(504).useStateFromStoresArray(items2, () => {
    const message = item.message;
    let id;
    if (message != null) {
      id = message.author.id;
    }
    const items = [UserStore.getUser(id)];
    const message2 = item.message;
    let mapped;
    if (message2 != null) {
      const mentions = message2.mentions;
      if (mentions != null) {
        mapped = mentions.map((item) => user.getUser(item));
      }
    }
    if (mapped == null) {
      mapped = [];
    }
    HermesBuiltin.arraySpread(mapped, 1);
    return items;
  });
  const obj5 = { style: messagePreviewIconV2.messagePreviewContainerV2, pointerEvents: "none", children: null };
  const items3 = [closure_21(closure_7, { style: messagePreviewIconV2.messagePreviewBarV2 }), ];
  const items4 = [acked ? messagePreviewIconV2.messagePreviewTextV2Acked : messagePreviewIconV2.messagePreviewTextV2NotAcked, ];
  let prop;
  if (isSystemMessage) {
    prop = messagePreviewIconV2.messagePreviewSystemTextV2;
  }
  const obj7 = { style: items4, variant: "redesign/message-preview/medium", lineClamp: null, children: null };
  items4[1] = prop;
  let num = 10;
  if (compactMode) {
    num = 3;
  }
  obj7.lineClamp = num;
  const obj4 = item(504);
  const obj6 = { style: messagePreviewIconV2.messagePreviewBarV2 };
  const obj8 = { content, guildId: guild_id, channelId: message_channel_id, messageId: item.message_id, authorId: null };
  let message = item.message;
  let id;
  if (message != null) {
    id = message.author.id;
  }
  obj8.authorId = id;
  let str = "text-default";
  if (acked) {
    str = "text-muted";
  }
  const items5 = [item(8122).renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj8, { textColor: str }), ];
  if (null == iconType) {
    items5[1] = tmp12;
    obj7.children = items5;
    items3[1] = closure_22(item(5087).Text, obj7);
    obj5.children = items3;
    return closure_22(closure_7, obj5);
  } else {
    const obj9 = { style: messagePreviewIconV2.messagePreviewIconV2Container, children: null };
    if (constants4.ATTACHMENT === iconType) {
      let tmp15 = guild_id(11637);
      const obj10 = { source: tmp15, size: null, style: null };
      SMALL = tmp3(1200).IconSizes.SMALL;
      obj10.size = SMALL;
      messagePreviewIconV2 = messagePreviewIconV2.messagePreviewIconV2;
      obj10.style = messagePreviewIconV2;
      obj9.children = closure_21(tmp13, obj10);
      closure_21(closure_7, obj9);
    } else if (constants4.STICKER !== iconType) {
      tmp15 = null;
      if (constants4.VOICE_MESSAGE === iconType) {
        tmp15 = guild_id(7701);
      }
    }
    tmp15 = guild_id(9767);
  }
  const tmp3Result = item(8122);
});
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationName(applicationId) {
  const cResult = applicationId(576).c(7);
  applicationId = applicationId.applicationId;
  const textVariant = applicationId.textVariant;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const fn = function o() {
      return ApplicationStore.getApplication(applicationId);
    };
    cResult[1] = applicationId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = applicationId(576);
  const stateFromStores = applicationId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = closure_21(closure_7, {});
      cResult[3] = tmp15;
    }
  } else {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === textVariant) {
        let tmp8 = cResult[6];
      }
      return tmp8;
    }
    const obj2 = { application: stateFromStores, textVariant, iconSize: 16 };
    const tmp11 = closure_21(ApplicationIconAndNameDefault, obj2, stateFromStores.id);
    cResult[4] = stateFromStores;
    cResult[5] = textVariant;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  const tmpResult = applicationId(504);
}) : (function ApplicationName(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [ApplicationStore];
  const stateFromStores = applicationId(504).useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  if (null == stateFromStores) {
    let tmp5 = closure_21(closure_7, {});
  } else {
    const obj2 = { application: stateFromStores, textVariant: applicationId.textVariant, iconSize: 16 };
    tmp5 = closure_21(ApplicationIconAndNameDefault, obj2, stateFromStores.id);
  }
  return tmp5;
});
let closure_39 = noop.memo(function ForYouRowWrapped(item) {
  item = item.item;
  const rowIndex = item.rowIndex;
  ({ isSoftAcked, onSoftAckItem } = item);
  ({ forceHoistItem, isForceHoisted, compactMode } = item);
  let notificationCenterItemAcked;
  let navigation;
  let callback;
  let str;
  ({ ackedBeforeId, roleStyle } = item);
  let tmp = closure_32();
  notificationCenterItemAcked = item(notificationCenterItemAcked[31]).useNotificationCenterItemAcked(item, ackedBeforeId);
  if (!isSoftAcked) {
    isSoftAcked = notificationCenterItemAcked;
  }
  let obj = item(notificationCenterItemAcked[31]);
  navigation = item(notificationCenterItemAcked[32]).useNavigation();
  let items = [item];
  callback = str.useCallback(() => {
    if (null != item.deeplink) {
      const obj = { payload: parseURLDefault(tmp.deeplink).payload, safe: true, navigationReplace: false };
      handleSupportedURLDefault(obj);
    }
  }, items);
  const items1 = [notificationCenterItemAcked, item, callback, rowIndex, onSoftAckItem, navigation];
  const callback1 = str.useCallback(() => {
    if (!notificationCenterItemAcked) {
      onSoftAckItem(item);
    }
    if (item.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
      if (navigation != null) {
        navigation.navigate("friends", { screen: "requests" });
      }
    }
    callback();
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(constants.NOTIFICATION_CENTER_ACTION, { action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.CLICKED, notification_center_id: item.id, item_type: item.type, acked: notificationCenterItemAcked, item_index: rowIndex, deeplink: item.deeplink });
    const obj3 = { action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.CLICKED, notification_center_id: item.id, item_type: item.type, acked: notificationCenterItemAcked, item_index: rowIndex, deeplink: item.deeplink };
  }, items1);
  const items2 = [item];
  const callback2 = str.useCallback(() => {
    const items = [];
    if (item.type === item(notificationCenterItemAcked[35]).NotificationCenterItems.TRENDING_CONTENT) {
      let obj = { label: null, icon: null, IconComponent: null, onPress: null };
      let intl = tmp2(notificationCenterItemAcked[20]).intl;
      obj.label = intl.string(tmp2(notificationCenterItemAcked[20]).t["gSMz/x"]);
      obj.icon = rowIndex(notificationCenterItemAcked[37]);
      obj.IconComponent = tmp2(notificationCenterItemAcked[38]).LightbulbIcon;
      obj.onPress = function onPress() {
        try {
          str = closure_0.deeplink;
          if (str == null) {
            str = "";
          }
          const match = str.match(/channels\/(\d*)\/(\d*)\/(\d*)\?summaryId=(\d*)/);
          if (null == match) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Invalid deeplink: " + closure_0.deeplink);
            throw error;
          } else {
            const tmp20 = callback(tmp5, 5);
            [r10045, tmp21] = tmp20;
            const obj3 = item(notificationCenterItemAcked[39]);
            const obj2 = { id: tmp20[3], channel_id: tmp20[2] };
            const obj4 = { summary_id: tmp20[4] };
            const result = obj3.openGuildHighlightNotificationForPush(tmp21, obj2, constants2.TRENDING_CONTENT_PUSH, constants.NOTIFICATION_CENTER, obj4);
          }
        } catch (err) {
          const obj5 = { key: "USER_SURVEY_ERROR", content: null };
          const intl = item(notificationCenterItemAcked[20]).intl;
          obj5.content = intl.string(item(notificationCenterItemAcked[20]).t.HO9Lf2);
          rowIndex(notificationCenterItemAcked[40]).open(obj5);
          const obj = rowIndex(notificationCenterItemAcked[40]);
        }
      };
      items.push(obj);
      let tmp6 = rowIndex;
    } else {
      let obj2 = { label: null, icon: null, IconComponent: null, onPress: null };
      const intl2 = tmp2(notificationCenterItemAcked[20]).intl;
      obj2.label = intl2.string(tmp2(notificationCenterItemAcked[20]).t["08rqg5"]);
      obj2.icon = rowIndex(notificationCenterItemAcked[37]);
      obj2.IconComponent = tmp2(notificationCenterItemAcked[38]).LightbulbIcon;
      obj2.onPress = function onPress() {
        try {
          const tmp5 = item(notificationCenterItemAcked[42])(notificationCenterItemAcked[41], notificationCenterItemAcked.paths);
          const obj2 = { notificationType: closure_0.type, location: constants.NOTIFICATION_CENTER };
          rowIndex(notificationCenterItemAcked[43]).openLazy(tmp5, "NotificationSurvey", obj2);
          const obj = rowIndex(notificationCenterItemAcked[43]);
        } catch (err) {
          const obj4 = { key: "USER_SURVEY_ERROR", content: null };
          const intl = item(notificationCenterItemAcked[20]).intl;
          obj4.content = intl.string(item(notificationCenterItemAcked[20]).t.HO9Lf2);
          rowIndex(notificationCenterItemAcked[40]).open(obj4);
          const obj3 = rowIndex(notificationCenterItemAcked[40]);
        }
      };
      items.push(obj2);
      tmp6 = rowIndex;
    }
    if (null == tmp.local_id) {
      let obj3 = { label: null, icon: null, IconComponent: null, onPress: null };
      const intl3 = tmp2(notificationCenterItemAcked[20]).intl;
      obj3.label = intl3.string(tmp2(notificationCenterItemAcked[20]).t.D8z9ju);
      obj3.icon = tmp6(notificationCenterItemAcked[44]);
      obj3.IconComponent = tmp2(notificationCenterItemAcked[45]).TrashIcon;
      item = navigation(function*() {
        yield tmp3(16780).deleteNotificationCenterItem(tmp3);
        if (1 === tmp7) {
          c3 = 0;
          const obj7 = { key: "REMOVE_NOTIFICATION_ERROR", content: null };
          const intl = tmp3(1126).intl;
          obj7.content = intl.string(tmp3(1126).t.WDxhvB);
          rowIndex(4768).open(obj7);
          c4 = 3;
          rowIndex(4768);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      });
      obj3.onPress = function onPress() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      items.unshift(obj3);
    }
    let result = item(notificationCenterItemAcked[47]).showSimpleActionSheet({ key: "ForYouItemLongPress", options: items, hasIcons: true });
    tmp = item;
    const tmp2Result = item(notificationCenterItemAcked[47]);
  }, items2);
  let tmp2Result = item(notificationCenterItemAcked[32]);
  [tmp10, tmp11] = callback(str.useState(undefined), 2);
  const tmp9 = callback(str.useState(undefined), 2);
  const itemActionButtonPropsV2 = item(notificationCenterItemAcked[48]).useItemActionButtonPropsV2(item, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, tmp11, compactMode);
  if (typeof useMarkupReadV2 === "function") {
    const getParserWithoutLinks = onSoftAckItem(tmp3[17]).getParserWithoutLinks;
    if (typeof useMarkupUnreadV2 === "function") {
      const parserWithoutLinks = onSoftAckItem(tmp3[17]).getParserWithoutLinks(closure_24());
      let tmp24 = item.type === tmp2(tmp3[35]).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED;
      if (!tmp24) {
        tmp24 = item.type === tmp2(tmp3[35]).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED;
      }
      if (notificationCenterItemAcked) {
        notificationCenterItemAcked = !tmp24;
      }
      let tmp26 = null;
      if (!notificationCenterItemAcked) {
        let obj2 = { "aria-hidden": true, accessibilityLabel: "", item, rowIndex, onSoftAckItem, actionButtons: tmp13, actionsNode: tmp14, compactMode };
        tmp26 = closure_21(tmp2(tmp3[48]).ForYouItemActionButtons, obj2);
      }
      str = "text-md/semibold";
      if (isSoftAcked) {
        str = "text-md/medium";
      }
      if (tmp10 == null) {
        let obj3 = {
          item,
          renderApplication(applicationId) {
                  return guild(closure_38, { applicationId, textVariant: str });
                }
        };
        tmp10 = rowIndex(tmp3[49])(obj3);
      }
      const tmp17Result = onSoftAckItem(tmp3[17]);
      const tmp29 = rowIndex;
      const extractTimestampResult = rowIndex(tmp3[50]).extractTimestamp(item.id);
      let obj4 = { accessibilityRole: "button", accessibilityActions: tmp15, onAccessibilityAction: tmp16, style: null, onPress: null, onAccessibilityTap: null, onLongPress: null, underlayColor: null, children: null };
      const items3 = [tmp.row, ];
      let rowCompact = compactMode;
      if (rowCompact) {
        rowCompact = tmp.rowCompact;
      }
      items3[1] = rowCompact;
      obj4.style = items3;
      obj4.onPress = callback1;
      obj4.onAccessibilityTap = callback1;
      obj4.onLongPress = callback2;
      obj4.underlayColor = tmp.rowActive.backgroundColor;
      let tmp33Result = null;
      if (item.enableBadge) {
        tmp33Result = null;
        if (!isSoftAcked) {
          const items4 = [tmp.unreadIndicatorV2, ];
          let unreadIndicatorCompactV2 = compactMode;
          if (unreadIndicatorCompactV2) {
            unreadIndicatorCompactV2 = tmp.unreadIndicatorCompactV2;
          }
          let obj5 = { style: null };
          items4[1] = unreadIndicatorCompactV2;
          obj5.style = items4;
          tmp33Result = closure_21(closure_7, obj5);
        }
      }
      const items5 = [tmp33Result, , ];
      const obj6 = { style: tmp.itemV2, children: null };
      const obj8 = { item, compactMode };
      obj6.children = closure_21(tmp2(tmp3[52]).ForYouItemImage, obj8);
      items5[1] = closure_21(closure_7, obj6);
      const obj9 = { style: { flex: 1, flexDirection: "row" }, children: null };
      const obj10 = { style: tmp.col, children: null };
      const obj11 = { style: null, children: null };
      const items6 = [, ];
      ({ rowText: arr7[0], rowTextV2: arr7[1] } = tmp);
      obj11.style = items6;
      const obj12 = { variant: str, style: null, color: "text-default", children: null };
      const items7 = [, , ];
      ({ rowBody: arr8[0], rowBodyV2: arr8[1] } = tmp);
      let rowBodyAcked = isSoftAcked;
      if (rowBodyAcked) {
        rowBodyAcked = tmp.rowBodyAcked;
      }
      items7[2] = rowBodyAcked;
      obj12.style = items7;
      if (typeof tmp10 !== "string") {
        obj12.children = tmp10;
        const items8 = [closure_21(tmp2(tmp3[14]).Text, obj12), ];
        const items9 = [, , ];
        ({ rowTime: arr10[0], rowTimeV2: arr10[1] } = tmp);
        let rowBodyAcked2 = isSoftAcked;
        if (rowBodyAcked2) {
          rowBodyAcked2 = tmp.rowBodyAcked;
        }
        const obj13 = { variant: "text-xs/medium", style: null, color: "text-default", accessibilityLabel: null, children: null };
        items9[2] = rowBodyAcked2;
        obj13.style = items9;
        obj13.accessibilityLabel = tmp2(tmp3[53]).getRelativeTimestamp(extractTimestampResult, false);
        const tmp2Result5 = tmp2(tmp3[53]);
        obj13.children = tmp2(tmp3[53]).getRelativeTimestamp(extractTimestampResult);
        items8[1] = closure_21(tmp2(tmp3[14]).Text, obj13);
        obj11.children = items8;
        const items10 = [closure_22(closure_7, obj11), , , , ];
        let tmp35Result = item.type === tmp2(tmp3[35]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
        if (tmp35Result) {
          const obj14 = { styles: tmp.friendRequestNoteContainer, backgroundColor: tmp.friendRequestNoteContainer.backgroundColor, userId: null, analyticsLocation: "Notifications Tab" };
          const other_user = item.other_user;
          let id;
          if (other_user != null) {
            id = other_user.id;
          }
          if (id == null) {
            id = closure_19;
          }
          obj14.userId = id;
          tmp35Result = closure_21(tmp29(tmp3[54]), obj14);
          const tmp29Result = tmp29(tmp3[54]);
        }
        items10[1] = tmp35Result;
        const message = item.message;
        let content;
        if (message != null) {
          content = message.content;
        }
        let tmp35Result3 = null;
        if (null != content) {
          const obj15 = { item, acked: isSoftAcked, compactMode, roleStyle };
          tmp35Result3 = closure_21(closure_37, obj15);
        }
        items10[2] = tmp35Result3;
        let tmp35Result4 = null;
        if (null != item.callout) {
          const obj16 = { item, acked: isSoftAcked, compactMode };
          tmp35Result4 = closure_21(closure_36, obj16);
        }
        items10[3] = tmp35Result4;
        const obj17 = { children: tmp26 };
        items10[4] = closure_21(closure_7, obj17);
        obj10.children = items10;
        obj9.children = closure_22(closure_7, obj10);
        items5[2] = closure_21(closure_7, obj9);
        obj4.children = items5;
        return closure_22(tmp2(tmp3[51]).PressableHighlight, obj4);
      } else {
        isSoftAcked ? tmp20(tmp10) : parserWithoutLinks(tmp10);
      }
      let obj7 = rowIndex(tmp3[50]);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const tmp18 = onSoftAckItem(tmp3[17]);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmp2Result4 = item(notificationCenterItemAcked[48]);
});
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScrollToTopRef(scrollRef) {
  const cResult = c.c(2);
  scrollRef = scrollRef.scrollRef;
  if (cResult[0] !== scrollRef) {
    const obj2 = {
      scrollToTop() {
          const current = scrollRef.current;
          let scrollToTopResult;
          if (current != null) {
            scrollToTopResult = current.scrollToTop();
          }
          return scrollToTopResult;
        }
    };
    cResult[0] = scrollRef;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const ref = noop.useRef(tmp4);
  const scrollToTop = Link.useScrollToTop(ref);
  return null;
}) : (function ScrollToTopRef(scrollRef) {
  scrollRef = scrollRef.scrollRef;
  const obj = {
    scrollToTop() {
      const current = scrollRef.current;
      let scrollToTopResult;
      if (current != null) {
        scrollToTopResult = current.scrollToTop();
      }
      return scrollToTopResult;
    }
  };
  const ref = noop.useRef({
    scrollToTop() {
      const current = scrollRef.current;
      let scrollToTopResult;
      if (current != null) {
        scrollToTopResult = current.scrollToTop();
      }
      return scrollToTopResult;
    }
  });
  const scrollToTop = Link.useScrollToTop(ref);
  return null;
});
ReactCompilerGating = fn(558);
const obj29 = { marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size = fn(2);
const result3 = size.fileFinishedImporting("modules/notification_center/native/ForYouItems.tsx");

export const ForYouItems = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ForYouItemsWrapped(isSoftAcked) {
  const cResult = loadMore(onSoftAckItem[18]).c(48);
  ({ items, onScroll, loadMore } = isSoftAcked);
  ({ loadingMore, nestedInLaunchPad, shouldScrollToTop } = isSoftAcked);
  isSoftAcked = isSoftAcked.isSoftAcked;
  onSoftAckItem = isSoftAcked.onSoftAckItem;
  const forceHoistItem = isSoftAcked.forceHoistItem;
  const isForceHoisted = isSoftAcked.isForceHoisted;
  const suggestedFriendAdded = isSoftAcked.suggestedFriendAdded;
  onAddSuggestionAnimationFinish = isSoftAcked.onAddSuggestionAnimationFinish;
  const panelVariant = tmp4;
  const tmp5 = closure_32();
  AccessibilityStore = tmp5;
  const NotificationCenterAckedBeforeId = loadMore(tmp2[56]).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    const fn = function l() {
      return closure_9.roleStyle;
    };
    cResult[0] = items1;
    cResult[1] = fn;
    tmp7 = items1;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj = loadMore(onSoftAckItem[18]);
  const stateFromStores = loadMore(onSoftAckItem[27]).useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [onPressLoad];
    class L {
      constructor() {
        return closure_14.isRefreshing();
      }
    }
    cResult[2] = items2;
    cResult[3] = L;
    let tmp12 = L;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult = loadMore(onSoftAckItem[27]);
  const stateFromStores1 = loadMore(onSoftAckItem[27]).useStateFromStores(tmp11, tmp12);
  const ChannelListLayoutSetting = loadMore(tmp2[56]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp16 = setting1 === loadMore(onSoftAckItem[57]).ChannelListLayoutTypes.COMPACT;
  compactMode = tmp16;
  if (cResult[4] !== loadMore) {
    class Y {
      constructor() {
        tmp = loadMore(true);
        return;
      }
    }
    cResult[4] = loadMore;
    class L {
      constructor() {
        return closure_14.isRefreshing();
      }
    }
    cResult[5] = Y;
  } else {
    class Y {
      constructor() {
        tmp = loadMore(true);
        return;
      }
    }
  }
  onPressLoad = Y;
  if (cResult[6] === setting) {
    class Y {
      constructor() {
        tmp = loadMore(true);
        return;
      }
    }
  }
  class G {
    constructor(arg0) {
      item = isSoftAcked.item;
      switch (item.kind) {
        case "read-section-header":
          tmp47 = jsx;
          tmp48 = closure_0;
          tmp49 = closure_3;
          return jsx(closure_0(closure_3[58]).ForYouReadSectionHeader, {});
        case "recent-activity-section-header":
          tmp44 = jsx;
          tmp45 = closure_0;
          tmp46 = closure_3;
          return jsx(closure_0(closure_3[59]).ForYouRecentActivitySectionHeader, {});
        case "hoisted-items-header":
          tmp41 = jsx;
          tmp42 = closure_0;
          tmp43 = closure_3;
          return jsx(closure_0(closure_3[60]).ForYouHoistedItemsHeader, {});
        case "suggested-friends-header":
          tmp38 = jsx;
          tmp39 = closure_1;
          tmp40 = closure_3;
          obj1 = { showDivider: null };
          obj1.showDivider = item.showDivider;
          return jsx(closure_1(closure_3[61]), obj1);
        case "suggested-friends-row":
          tmp32 = jsx;
          tmp33 = closure_1;
          tmp34 = closure_3;
          obj9 = { suggestedFriend: null, onAddSuggestion: null, onAddSuggestionAnimationFinish: null, panelVariant: null };
          obj9.suggestedFriend = item.suggestedFriend;
          tmp35 = suggestedFriendAdded;
          obj9.onAddSuggestion = suggestedFriendAdded;
          tmp36 = closure_7;
          obj9.onAddSuggestionAnimationFinish = closure_7;
          tmp37 = panelVariant;
          obj9.panelVariant = panelVariant;
          return jsx(closure_1(closure_3[62]), obj9);
        case "suggested-friends-show-all-row":
          tmp28 = jsx;
          tmp29 = closure_0;
          tmp30 = closure_3;
          obj10 = { suggestedFriends: null, panelVariant: null };
          obj10.suggestedFriends = item.suggestedFriends;
          tmp31 = panelVariant;
          obj10.panelVariant = panelVariant;
          return jsx(closure_0(closure_3[63]).ForYouSuggestedFriendShowAllRow, obj10);
        case "for-you-divider":
          tmp25 = jsx;
          tmp26 = View;
          obj11 = { style: null };
          tmp27 = closure_9;
          obj11.style = closure_9.forYouDivider;
          return jsx(View, obj11);
        case "notification-center-item":
          tmp12 = jsx;
          tmp13 = closure_0;
          tmp14 = closure_3;
          obj12 = { children: null };
          tmp15 = jsx;
          tmp16 = closure_39;
          obj13 = { item: null, ackedBeforeId: null, isSoftAcked: null, onSoftAckItem: null, forceHoistItem: null, isForceHoisted: null, rowIndex: null, compactMode: null, roleStyle: null };
          obj13.item = item;
          tmp17 = closure_10;
          obj13.ackedBeforeId = closure_10;
          tmp18 = isSoftAcked;
          obj13.isSoftAcked = isSoftAcked(item.id);
          tmp19 = onSoftAckItem;
          obj13.onSoftAckItem = onSoftAckItem;
          tmp20 = forceHoistItem;
          obj13.forceHoistItem = forceHoistItem;
          tmp21 = isForceHoisted;
          obj13.isForceHoisted = isForceHoisted;
          obj13.rowIndex = tmp;
          tmp22 = closure_13;
          obj13.compactMode = closure_13;
          tmp23 = closure_11;
          obj13.roleStyle = closure_11;
          tmp24 = globalThis;
          _HermesInternal = HermesInternal;
          str = "-";
          str2 = "";
          obj12.children = jsx(closure_39, obj13, "" + item.id + "-" + closure_11);
          return jsx(closure_0(closure_3[64]).ErrorBoundary, obj12);
        case "mentions-placeholder":
          tmp9 = jsx;
          tmp10 = closure_0;
          tmp11 = closure_3;
          return jsx(closure_0(closure_3[19]).ForYouMentionPlaceholder, {});
        case "unread-cleared-placeholder":
          tmp6 = jsx;
          tmp7 = closure_0;
          tmp8 = closure_3;
          return jsx(closure_0(closure_3[65]).ForYouUnreadClearedState, {});
        case "load-more":
          tmp2 = jsx;
          tmp3 = closure_0;
          tmp4 = closure_3;
          obj = { onPressLoad: null };
          tmp5 = closure_14;
          obj.onPressLoad = closure_14;
          return jsx(closure_0(closure_3[66]).ForYouLoadMore, obj);
        default:
          tmp50 = closure_0;
          tmp51 = closure_3;
          obj8 = closure_0(closure_3[67]);
          assertNeverResult = obj8.assertNever(item);
          return;
      }
      return;
    }
  }
  cResult[6] = setting;
  cResult[7] = tmp16;
  cResult[8] = forceHoistItem;
  cResult[9] = Y;
  cResult[10] = isForceHoisted;
  cResult[11] = isSoftAcked;
  cResult[12] = onAddSuggestionAnimationFinish;
  cResult[13] = onSoftAckItem;
  cResult[14] = undefined !== panelVariant && panelVariant;
  cResult[15] = stateFromStores;
  cResult[16] = tmp5.forYouDivider;
  cResult[17] = suggestedFriendAdded;
  cResult[18] = G;
  const tmpResult2 = loadMore(onSoftAckItem[27]);
}) : (function ForYouItemsWrapped(loadMore) {
  loadMore = loadMore.loadMore;
  ({ nestedInLaunchPad, shouldScrollToTop } = loadMore);
  const isSoftAcked = loadMore.isSoftAcked;
  const onSoftAckItem = loadMore.onSoftAckItem;
  const forceHoistItem = loadMore.forceHoistItem;
  const isForceHoisted = loadMore.isForceHoisted;
  const suggestedFriendAdded = loadMore.suggestedFriendAdded;
  onAddSuggestionAnimationFinish = loadMore.onAddSuggestionAnimationFinish;
  let flag = loadMore.panelVariant;
  ({ items, onScroll, loadingMore } = loadMore);
  if (flag === undefined) {
    flag = false;
  }
  onPressLoad = undefined;
  const tmp = closure_32();
  closure_9 = tmp;
  const NotificationCenterAckedBeforeId = loadMore(onSoftAckItem[56]).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  const items1 = [closure_9];
  const stateFromStores = loadMore(onSoftAckItem[27]).useStateFromStores(items1, () => closure_9.roleStyle);
  let obj = loadMore(onSoftAckItem[27]);
  const items2 = [onPressLoad];
  const stateFromStores1 = loadMore(onSoftAckItem[27]).useStateFromStores(items2, () => callback.isRefreshing());
  const ChannelListLayoutSetting = loadMore(onSoftAckItem[56]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp8 = setting1 === loadMore(onSoftAckItem[57]).ChannelListLayoutTypes.COMPACT;
  compactMode = tmp8;
  const items3 = [loadMore];
  onPressLoad = suggestedFriendAdded.useCallback(() => {
    loadMore(true);
  }, items3);
  const items4 = [tmp.forYouDivider, suggestedFriendAdded, onAddSuggestionAnimationFinish, stateFromStores, setting, isSoftAcked, onSoftAckItem, forceHoistItem, isForceHoisted, tmp8, onPressLoad, flag];
  const callback1 = suggestedFriendAdded.useCallback((item) => {
    item = item.item;
    switch (item.kind) {
      case "read-section-header":
        return guild(ForYouReadSectionHeader.ForYouReadSectionHeader, {});
      case "recent-activity-section-header":
        return guild(ForYouRecentActivitySectionHeader.ForYouRecentActivitySectionHeader, {});
      case "hoisted-items-header":
        return guild(ForYouHoistedItemsHeader.ForYouHoistedItemsHeader, {});
      case "suggested-friends-header":
        const obj2 = { showDivider: item.showDivider };
        return guild(ForYouSuggestedFriendsSectionHeaderDefault, obj2);
      case "suggested-friends-row":
        const obj3 = { suggestedFriend: item.suggestedFriend, onAddSuggestion: suggestedFriendAdded, onAddSuggestionAnimationFinish, panelVariant: flag };
        return guild(ForYouSuggestedFriendRowDefault, obj3);
      case "suggested-friends-show-all-row":
        const obj4 = { suggestedFriends: item.suggestedFriends, panelVariant: flag };
        return guild(ForYouShowAllRow.ForYouSuggestedFriendShowAllRow, obj4);
      case "for-you-divider":
        const obj5 = { style: closure_9.forYouDivider };
        return guild(closure_2_7, obj5);
      case "notification-center-item":
        const obj6 = { children: null };
        const obj7 = { item, ackedBeforeId: setting, isSoftAcked: isSoftAcked(item.id), onSoftAckItem, forceHoistItem, isForceHoisted, rowIndex: tmp, compactMode, roleStyle: stateFromStores };
        const _HermesInternal = HermesInternal;
        obj6.children = guild(closure_39, obj7, "" + item.id + "-" + stateFromStores);
        return guild(_mod686.ErrorBoundary, obj6);
      case "mentions-placeholder":
        return guild(ForYouMentionPlaceholder2.ForYouMentionPlaceholder, {});
      case "unread-cleared-placeholder":
        return guild(ForYouUnreadClearedState.ForYouUnreadClearedState, {});
      case "load-more":
        const obj = { onPressLoad };
        return guild(ForYouLoadMore.ForYouLoadMore, obj);
      default:
        GlobalUtils.assertNever(item);
    }
  }, items4);
  const ref = suggestedFriendAdded.useRef(null);
  const items5 = [shouldScrollToTop];
  const effect = suggestedFriendAdded.useEffect(() => {
    if (shouldScrollToTop) {
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ animated: false, offset: 0 });
      }
    }
  }, items5);
  const items6 = [stateFromStores1];
  const callback2 = suggestedFriendAdded.useCallback(() => {
    if (!stateFromStores1) {
      NotificationCenterStoreActions.refreshNotifications();
    }
  }, items6);
  const tmp14 = isForceHoisted(suggestedFriendAdded.useState(0), 2);
  closure_16 = tmp14[1];
  let obj3 = {
    style: tmp.container,
    onLayout(nativeEvent) {
      return closure_16(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  let tmp17 = !nestedInLaunchPad;
  if (!nestedInLaunchPad) {
    let obj4 = { scrollRef: ref };
    tmp17 = closure_21(closure_40, obj4);
  }
  const items7 = [tmp17, ];
  let obj5 = { ref, data: items, ListEmptyComponent: closure_21(loadMore(onSoftAckItem[69]).ForYouEmptyState, { height: tmp14[0] }), onScroll, refreshControl: closure_21(flag, { onRefresh: callback2, refreshing: stateFromStores1, tintColor: tmp.refreshSpinner.color }), keyExtractor: extractKey, renderItem: callback1, extraData: setting, onEndReached: loadMore, onEndReachedThreshold: 0.8, ListFooterComponent: closure_21(closure_33, { loading: loadingMore }), viewabilityConfig };
  items7[1] = closure_21(loadMore(onSoftAckItem[70]).FlashList, obj5);
  obj3.children = items7;
  return closure_22(onAddSuggestionAnimationFinish, obj3);
}));