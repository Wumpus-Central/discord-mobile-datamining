// === Module 16360: ForYouItems ===

// Module 16360 (ForYouItems)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _mod686 from "module_686" /* 686 */;
import intl7 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import Link from "Link" /* 1491 */;
import parseURLDefault from "parseURL" /* 4867 */;
import Text_Text from "Text/Text" /* 4886 */;
import CustomMarkupAll from "CustomMarkup" /* 5784 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6085 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7125 */;
import PollsUtils from "PollsUtils" /* 7257 */;
import parsePollResultSystemMessageEmbedDefault from "parsePollResultSystemMessageEmbed" /* 7713 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12294 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 13663 */;
import NotificationCenterStoreActions from "NotificationCenterStoreActions" /* 16358 */;
import ForYouMentionPlaceholder from "ForYouMentionPlaceholder" /* 16359 */;
import ForYouReadSectionHeader from "ForYouReadSectionHeader" /* 16375 */;
import ForYouRecentActivitySectionHeader from "ForYouRecentActivitySectionHeader" /* 16376 */;
import ForYouHoistedItemsHeader from "ForYouHoistedItemsHeader" /* 16377 */;
import ForYouSuggestedFriendsSectionHeaderDefault from "ForYouSuggestedFriendsSectionHeader" /* 16378 */;
import ForYouSuggestedFriendRowDefault from "ForYouSuggestedFriendRow" /* 16379 */;
import ForYouShowAllRow from "ForYouShowAllRow" /* 16385 */;
import ForYouUnreadClearedState from "ForYouUnreadClearedState" /* 16386 */;
import ForYouLoadMore from "ForYouLoadMore" /* 16387 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4879 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import NotificationCenterStore from "NotificationCenterStore" /* 16354 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c1, c4, compactMode, navigation, onAddSuggestionAnimationFinish, onPressLoad, scrollRef;

let StyleSheet;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj2;
let obj4;
let obj6;
let obj8;
let size;
function getMessageContentPreviewV2(item) {
  let ATTACHMENT;
  let result;
  item = item.item;
  const intl = intl7.intl;
  const stringResult = intl.string(intl7.t.BOi07B);
  const message = item.message;
  let num;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (message != null) {
    num = message.flags;
  }
  if (num == null) {
    num = 0;
  }
  const message2 = item.message;
  let type;
  const hasFlagResult = hasFlag(num, constants2.IS_VOICE_MESSAGE);
  if (message2 != null) {
    type = message2.type;
  }
  const message3 = item.message;
  let attachments;
  const POLL_RESULT = constants3.POLL_RESULT;
  if (message3 != null) {
    attachments = message3.attachments;
  }
  if (attachments == null) {
    attachments = [];
  }
  const message4 = item.message;
  let stickers;
  const length = attachments.length;
  if (message4 != null) {
    stickers = message4.stickers;
  }
  if (stickers == null) {
    stickers = [];
  }
  const message5 = item.message;
  let embeds1;
  const length2 = stickers.length;
  if (message5 != null) {
    embeds1 = message5.embeds;
  }
  if (embeds1 == null) {
    embeds1 = [];
  }
  const message6 = item.message;
  const length3 = embeds1.length;
  if (message6 != null) {
    const interaction = message6.interaction;
  }
  if (type === POLL_RESULT) {
    const message8 = item.message;
    let first;
    if (message8 != null) {
      const embeds = message8.embeds;
      if (embeds != null) {
        first = embeds[0];
      }
    }
    const tmp17 = parsePollResultSystemMessageEmbedDefault(first);
    result = stringResult;
    if (null != tmp17) {
      const tmpResult = PollsUtils;
      result = tmpResult.formatPollResultNotificationCenterText(tmp17);
    }
  } else if (length2 > 0) {
    const intl6 = intl7.intl;
    result = intl6.string(intl7.t["7K5Lma"]);
    ATTACHMENT = constants4.STICKER;
  } else if (tmp8) {
    const intl5 = intl7.intl;
    result = intl5.string(intl7.t["2v7kfl"]);
  } else if (hasFlagResult) {
    const intl4 = intl7.intl;
    result = intl4.string(intl7.t["6bhHrc"]);
    ATTACHMENT = constants4.VOICE_MESSAGE;
  } else {
    const message7 = item.message;
    let num2;
    const hasFlag2 = FlagUtils.hasFlag;
    FlagUtils;
    if (message7 != null) {
      num2 = message7.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    if (hasFlag2(num2, constants2.IS_COMPONENTS_V2)) {
      const intl3 = intl7.intl;
      result = intl3.string(intl7.t.Xxm5i3);
    } else {
      result = stringResult;
      const tmp10 = length > 0 || length3 > 0;
      if (tmp10) {
        const intl2 = intl7.intl;
        result = intl2.string(intl7.t.JAKsM8);
        ATTACHMENT = constants4.ATTACHMENT;
      }
    }
  }
  const message9 = item.message;
  let content;
  if (message9 != null) {
    content = message9.content;
  }
  if (null != content && "" !== content) {
    result = content;
  }
  return { content: result, isSystemMessage: !(null != content && "" !== content), iconType: ATTACHMENT };
}
function extractKey(id) {
  return id.id;
}
({ View: metroImportDefault, RefreshControl: metroImportAll, StyleSheet } = react_native);
let AccessibilityStore = AccessibilityStore_mod;
({ AnalyticEvents: closure_15, MessageFlags: closure_16, AnalyticsLocations: closure_17, MessageTypes: closure_18, EMPTY_STRING_SNOWFLAKE_ID: closure_19 } = Constants);
const NotificationTypes = PushNotificationConstants.NotificationTypes;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
const viewabilityConfig = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 1000 };
let createStyles = createStyles_mod;
let obj = { strong: obj2 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
const merged = Object.assign(Text_Text.TextStyleSheet["text-md/medium"]);
let closure_24 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { strong: obj4 };
obj4 = { color: nativeDefault.colors.TEXT_MUTED };
const createStyles2 = createStyles.createStyles;
const merged1 = Object.assign(Text_Text.TextStyleSheet["text-md/medium"]);
let closure_25 = createStyles2(obj3);
createStyles = createStyles_mod;
let obj5 = { mention: obj6 };
obj6 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
let closure_26 = createStyles.createStyles(obj5);
createStyles = createStyles_mod;
let obj7 = { mention: obj8 };
obj8 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
let closure_27 = createStyles.createStyles(obj7);
let closure_28 = { channelMentionText: "redesign/message-preview/medium" };
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f73536 = () => {

};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f73537 = () => {

};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f73538 = () => {

};
createStyles = createStyles_mod;
let obj9 = { container: { flex: 1 }, row: obj10, rowCompact: { paddingVertical: 6 }, rowActive: obj11, col: { flexDirection: "column", flex: 1 }, unreadIndicatorV2: size, unreadIndicatorCompactV2: { top: 18 }, rowText: { flex: 1 }, rowTextV2: { flexDirection: "row", justifyContent: "space-between" }, rowBody: { lineHeight: 20 }, rowBodyV2: { marginRight: 30 }, rowBodyAcked: obj12, rowTime: { lineHeight: 20 }, rowTimeV2: { marginLeft: -24 }, itemV2: { alignItems: "flex-start", marginRight: 4, marginLeft: 8 }, calloutContainer: { marginTop: 4, flexDirection: "row", marginRight: 16 }, calloutTextAcked: obj13, calloutTextNotAcked: obj14, messagePreviewContainerV2: { marginTop: 4, flexDirection: "row", marginRight: 16 }, messagePreviewBarV2: obj15, messagePreviewIconV2Container: { paddingTop: 4 }, messagePreviewIconV2: obj16, messagePreviewTextV2Acked: obj17, messagePreviewTextV2NotAcked: { color: nativeDefault.colors.TEXT_DEFAULT }, messagePreviewSystemTextV2: { fontStyle: "italic", fontWeight: "normal" }, refreshSpinner: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, forYouDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 }, friendRequestNoteContainer: { marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE } };
obj10 = { marginHorizontal: 4, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4, borderRadius: nativeDefault.radii.lg, flexDirection: "row", justifyContent: "space-between" };
const createStyles3 = createStyles.createStyles;
obj11 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
size = { top: 28, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: nativeDefault.radii.xs, position: "absolute", left: 4 };
obj12 = { color: nativeDefault.colors.TEXT_MUTED };
obj13 = { color: nativeDefault.colors.TEXT_MUTED };
obj14 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj15 = { marginRight: 8, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderLeftWidth: 3, borderRadius: 2, height: "auto" };
obj16 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
obj17 = { color: nativeDefault.colors.TEXT_MUTED };
({ color: nativeDefault.colors.TEXT_DEFAULT });
({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
({ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 });
({ marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
let closure_32 = createStyles3(obj9);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? ((loading) => {
  const obj = react2;
  const cResult = obj.c(1);
  let tmp4 = null;
  if (loading.loading) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp8 = closure_21(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
      cResult[0] = tmp8;
      first = tmp8;
    } else {
      first = cResult[0];
    }
    tmp4 = first;
  }
  return tmp4;
}) : ((loading) => {
  let tmp = null;
  if (loading.loading) {
    tmp = closure_21(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
  }
  return tmp;
});
const constants4 = { STICKER: "sticker", VOICE_MESSAGE: "voice_message", ATTACHMENT: "attachment" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  let acked;
  let items1;
  const obj = react2;
  const cResult = obj.c(15);
  item = item.item;
  ({ acked, compactMode } = item);
  const tmp4 = closure_32();
  if (typeof f73536 === "function") {
    let tmp8;
    let tmp13;
    const obj2 = CustomMarkupAll;
    const parser = obj2.getParser(closure_26());
    const calloutContainer = tmp4.calloutContainer;
    if (cResult[0] !== tmp4.messagePreviewBarV2) {
      const obj3 = { style: tmp4.messagePreviewBarV2 };
      const tmp11 = closure_21(metroImportDefault, obj3);
      cResult[0] = tmp4.messagePreviewBarV2;
      cResult[1] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[1];
    }
    const tmp12 = acked ? tmp4.calloutTextAcked : tmp4.calloutTextNotAcked;
    if (cResult[2] !== tmp12) {
      const items = [tmp12];
      cResult[2] = tmp12;
      cResult[3] = items;
      tmp13 = items;
    } else {
      tmp13 = cResult[3];
    }
    let num6 = 10;
    if (compactMode) {
      num6 = 3;
    }
    if (cResult[4] === item.callout) {
      let tmp14;
      if (cResult[5] === parser) {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp13) {
        if (cResult[8] === num6) {
          let tmp16;
          if (cResult[9] === tmp14) {
            tmp16 = cResult[10];
          }
          if (cResult[11] === tmp4.calloutContainer) {
            if (cResult[12] === tmp8) {
              let tmp19;
              if (cResult[13] === tmp16) {
                tmp19 = cResult[14];
              }
              return tmp19;
            }
          }
          const obj4 = { style: calloutContainer, pointerEvents: "none", children: items1 };
          items1 = [tmp8, tmp16];
          const tmp22 = afk(metroImportDefault, obj4);
          cResult[11] = tmp4.calloutContainer;
          cResult[12] = tmp8;
          cResult[13] = tmp16;
          cResult[14] = tmp22;
          tmp19 = tmp22;
        }
      }
      const obj5 = { style: tmp13, variant: "redesign/message-preview/medium", lineClamp: num6, children: tmp14 };
      const tmp18 = closure_21(Text_Text.Text, obj5);
      cResult[7] = tmp13;
      cResult[8] = num6;
      cResult[9] = tmp14;
      cResult[10] = tmp18;
      tmp16 = tmp18;
    }
    const parserResult = parser(item.callout);
    cResult[4] = item.callout;
    cResult[5] = parser;
    cResult[6] = parserResult;
    tmp14 = parserResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((arg0) => {
  let acked;
  let item;
  let items;
  let items1;
  let num;
  ({ item, acked, compactMode } = arg0);
  const tmp = closure_32();
  if (typeof f73536 === "function") {
    const obj2 = { style: tmp.calloutContainer, pointerEvents: "none", children: items };
    const obj3 = { style: tmp.messagePreviewBarV2 };
    const obj = CustomMarkupAll;
    const parser = obj.getParser(closure_26());
    items = [closure_21(metroImportDefault, obj3), ];
    const obj4 = { style: items1, variant: "redesign/message-preview/medium", lineClamp: num, children: parser(item.callout) };
    items1 = [acked ? tmp.calloutTextAcked : tmp.calloutTextNotAcked];
    num = 10;
    const Text = Text_Text.Text;
    if (compactMode) {
      num = 3;
    }
    items[1] = closure_21(Text, obj4);
    return afk(metroImportDefault, obj2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  let Icon;
  let content;
  let first;
  let id1;
  let isSystemMessage;
  let items3;
  let items4;
  let message_channel_id;
  let obj7;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp9;
  const obj = item(576);
  const cResult = obj.c(26);
  item = item.item;
  const acked = item.acked;
  ({ compactMode, roleStyle } = item);
  const tmp4 = closure_32();
  const obj2 = message_channel_id(5784);
  const notifCenterV2MessagePreviewParser = obj2.getNotifCenterV2MessagePreviewParser(closure_27(), closure_28, roleStyle);
  const tmp6 = getMessageContentPreviewV2({ item });
  const iconType = tmp6.iconType;
  const guild_id = item.guild_id;
  message_channel_id = item.message_channel_id;
  ({ content, isSystemMessage } = tmp6);
  const message_id = item.message_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function o() {
      return GuildStore.getGuild(guild_id);
    };
    cResult[1] = guild_id;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = item(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== message_channel_id) {
    const fn2 = function l() {
      return ChannelStore.getChannel(message_channel_id);
    };
    cResult[4] = message_channel_id;
    cResult[5] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult4 = item(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    cResult[6] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[6];
  }
  let message = item.message;
  let id;
  const tmp17 = cResult[7];
  if (message != null) {
    id = message.author.id;
  }
  if (tmp17 === id) {
    let tmp21;
    let tmp26;
    let message2 = item.message;
    let mentions;
    const tmp19 = cResult[8];
    if (message2 != null) {
      mentions = message2.mentions;
    }
    if (tmp19 === mentions) {
      tmp21 = cResult[9];
    }
    const tmpResult5 = item(504);
    const stateFromStoresArray = tmpResult5.useStateFromStoresArray(tmp15, tmp21);
    const messagePreviewContainerV2 = tmp4.messagePreviewContainerV2;
    if (cResult[10] !== tmp4.messagePreviewBarV2) {
      const obj3 = { style: tmp4.messagePreviewBarV2 };
      const tmp28 = closure_21(closure_7, obj3);
      cResult[10] = tmp4.messagePreviewBarV2;
      cResult[11] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[11];
    }
    const Text = tmp(4886).Text;
    const tmp29 = acked ? tmp4.messagePreviewTextV2Acked : tmp4.messagePreviewTextV2NotAcked;
    let prop;
    if (isSystemMessage) {
      prop = tmp4.messagePreviewSystemTextV2;
    }
    if (cResult[12] === tmp29) {
      let tmp31;
      if (cResult[13] === prop) {
        tmp31 = cResult[14];
      }
      let num12 = 10;
      if (compactMode) {
        num12 = 3;
      }
      const message5 = item.message;
      const obj4 = { content, guildId: guild_id, channelId: message_channel_id, messageId: message_id, authorId: id1 };
      id1 = undefined;
      const renderMessageContentMarkup = item(7531).renderMessageContentMarkup;
      item(7531);
      if (message5 != null) {
        id1 = message5.author.id;
      }
      let str = "text-default";
      if (acked) {
        str = "text-muted";
      }
      const obj5 = { textColor: str };
      const result = renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj4, obj5);
      let tmp36Result = null != iconType;
      if (tmp36Result) {
        let tmp38;
        const obj6 = { style: tmp4.messagePreviewIconV2Container, children: closure_21(Icon, obj7) };
        Icon = tmp(1188).Icon;
        if (constants4.ATTACHMENT === iconType) {
          tmp38 = guild_id(11042);
        } else if (constants4.STICKER === iconType) {
          tmp38 = guild_id(10149);
        } else {
          tmp38 = null;
          if (constants4.VOICE_MESSAGE === iconType) {
            tmp38 = guild_id(8276);
          }
        }
        obj7 = { source: tmp38, size: item(1188).IconSizes.SMALL, style: tmp4.messagePreviewIconV2 };
        tmp36Result = closure_21(closure_7, obj6);
      }
      if (cResult[15] === Text) {
        if (cResult[16] === tmp31) {
          if (cResult[17] === num12) {
            if (cResult[18] === result) {
              let tmp42;
              if (cResult[19] === tmp36Result) {
                tmp42 = cResult[20];
              }
              if (cResult[21] === closure_7) {
                if (cResult[22] === tmp4.messagePreviewContainerV2) {
                  if (cResult[23] === tmp42) {
                    let tmp45;
                    if (cResult[24] === tmp26) {
                      tmp45 = cResult[25];
                    }
                    return tmp45;
                  }
                }
              }
              const obj8 = { style: messagePreviewContainerV2, pointerEvents: "none", children: items3 };
              items3 = [tmp26, tmp42];
              const tmp47 = closure_22(closure_7, obj8);
              cResult[21] = closure_7;
              cResult[22] = tmp4.messagePreviewContainerV2;
              cResult[23] = tmp42;
              cResult[24] = tmp26;
              cResult[25] = tmp47;
              tmp45 = tmp47;
            }
          }
        }
      }
      const obj9 = { style: tmp31, variant: "redesign/message-preview/medium", lineClamp: num12, children: items4 };
      items4 = [result, tmp36Result];
      const tmp44 = closure_22(Text, obj9);
      cResult[15] = Text;
      cResult[16] = tmp31;
      cResult[17] = num12;
      cResult[18] = result;
      cResult[19] = tmp36Result;
      cResult[20] = tmp44;
      tmp42 = tmp44;
    }
    const items5 = [tmp29, prop];
    cResult[12] = tmp29;
    cResult[13] = prop;
    cResult[14] = items5;
    tmp31 = items5;
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
    let user;
    const message = item.message;
    let id;
    const getUser = UserStore.getUser;
    if (message != null) {
      id = message.author.id;
    }
    const items = [getUser(id)];
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
    HermesBuiltin.arraySpread(items, mapped, 1);
    return items;
  };
  cResult[8] = mentions1;
  cResult[9] = fn3;
  tmp21 = fn3;
}) : ((item) => {
  let Icon;
  let content;
  let id;
  let isSystemMessage;
  let items3;
  let items5;
  let num;
  let obj10;
  item = item.item;
  const acked = item.acked;
  let message_channel_id;
  ({ compactMode, roleStyle } = item);
  const tmp = closure_32();
  const obj = message_channel_id(5784);
  const notifCenterV2MessagePreviewParser = obj.getNotifCenterV2MessagePreviewParser(closure_27(), closure_28, roleStyle);
  const tmp4 = getMessageContentPreviewV2({ item });
  const iconType = tmp4.iconType;
  const guild_id = item.guild_id;
  message_channel_id = item.message_channel_id;
  ({ content, isSystemMessage } = tmp4);
  const message_id = item.message_id;
  let items = [GuildStore];
  const obj2 = item(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guild_id));
  const items1 = [ChannelStore];
  const obj3 = item(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => ChannelStore.getChannel(message_channel_id));
  const items2 = [UserStore];
  const obj4 = item(504);
  const stateFromStoresArray = obj4.useStateFromStoresArray(items2, () => {
    let user;
    const message = item.message;
    let id;
    const getUser = UserStore.getUser;
    if (message != null) {
      id = message.author.id;
    }
    const items = [getUser(id)];
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
    HermesBuiltin.arraySpread(items, mapped, 1);
    return items;
  });
  const obj5 = { style: tmp.messagePreviewContainerV2, pointerEvents: "none", children: items3 };
  items3 = [, ];
  const obj6 = { style: tmp.messagePreviewBarV2 };
  items3[0] = closure_21(closure_7, obj6);
  const items4 = [acked ? tmp.messagePreviewTextV2Acked : tmp.messagePreviewTextV2NotAcked, ];
  let prop;
  const Text = item(4886).Text;
  if (isSystemMessage) {
    prop = tmp.messagePreviewSystemTextV2;
  }
  const obj7 = { style: items4, variant: "redesign/message-preview/medium", lineClamp: num, children: items5 };
  items4[1] = prop;
  num = 10;
  if (compactMode) {
    num = 3;
  }
  let message = item.message;
  const obj8 = { content, guildId: guild_id, channelId: message_channel_id, messageId: message_id, authorId: id };
  id = undefined;
  const renderMessageContentMarkup = item(7531).renderMessageContentMarkup;
  item(7531);
  if (message != null) {
    id = message.author.id;
  }
  let str = "text-default";
  if (acked) {
    str = "text-muted";
  }
  items5 = [renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj8, { textColor: str }), ];
  let tmp11Result = null != iconType;
  if (tmp11Result) {
    let tmp17;
    const obj9 = { style: tmp.messagePreviewIconV2Container, children: closure_21(Icon, obj10) };
    Icon = tmp5(1188).Icon;
    if (constants4.ATTACHMENT === iconType) {
      tmp17 = guild_id(11042);
    } else if (constants4.STICKER === iconType) {
      tmp17 = guild_id(10149);
    } else {
      tmp17 = null;
      if (constants4.VOICE_MESSAGE === iconType) {
        tmp17 = guild_id(8276);
      }
    }
    obj10 = { source: tmp17, size: item(1188).IconSizes.SMALL, style: tmp.messagePreviewIconV2 };
    tmp11Result = closure_21(closure_7, obj9);
  }
  items5[1] = tmp11Result;
  items3[1] = closure_22(Text, obj7);
  return closure_22(closure_7, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let first;
  let tmp6;
  let tmp8;
  const obj = applicationId(576);
  const cResult = obj.c(7);
  const tmp = applicationId;
  applicationId = applicationId.applicationId;
  const textVariant = applicationId.textVariant;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const fn = function o() {
      return ApplicationStore.getApplication(applicationId);
    };
    cResult[1] = applicationId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = closure_21(closure_7, {});
      cResult[3] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[3];
    }
    tmp8 = tmp12;
  } else {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === textVariant) {
        tmp8 = cResult[6];
      }
    }
    const obj2 = { application: stateFromStores, textVariant, iconSize: 16 };
    const tmp11 = closure_21(ApplicationIconAndNameDefault, obj2, stateFromStores.id);
    cResult[4] = stateFromStores;
    cResult[5] = textVariant;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  return tmp8;
}) : ((applicationId) => {
  let tmp5;
  applicationId = applicationId.applicationId;
  const textVariant = applicationId.textVariant;
  const items = [ApplicationStore];
  const obj = applicationId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  if (null == stateFromStores) {
    tmp5 = closure_21(closure_7, {});
  } else {
    const obj2 = { application: stateFromStores, textVariant, iconSize: 16 };
    tmp5 = closure_21(ApplicationIconAndNameDefault, obj2, stateFromStores.id);
  }
  return tmp5;
});
let closure_39 = react.memo((item) => {
  let forceHoistItem;
  let id;
  let isForceHoisted;
  let isSoftAcked;
  let items10;
  let items3;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj8;
  let onSoftAckItem;
  let tmp10;
  let tmp11;
  let tmp20;
  let tmp2Result5;
  let tmp2Result6;
  let tmp37;
  item = item.item;
  const rowIndex = item.rowIndex;
  ({ isSoftAcked, onSoftAckItem } = item);
  ({ forceHoistItem, isForceHoisted, compactMode } = item);
  let notificationCenterItemAcked;
  navigation = undefined;
  let callback;
  let str;
  ({ ackedBeforeId, roleStyle } = item);
  let tmp = closure_32();
  const tmp2 = item;
  const tmp3 = notificationCenterItemAcked;
  let obj = item(notificationCenterItemAcked[31]);
  notificationCenterItemAcked = obj.useNotificationCenterItemAcked(item, ackedBeforeId);
  if (!isSoftAcked) {
    isSoftAcked = notificationCenterItemAcked;
  }
  let tmp2Result = tmp2(tmp3[32]);
  navigation = tmp2Result.useNavigation();
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
    const obj3 = { action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.CLICKED, notification_center_id: item.id, item_type: item.type, acked: notificationCenterItemAcked, item_index: rowIndex, deeplink: item.deeplink };
    obj2.track(constants.NOTIFICATION_CENTER_ACTION, obj3);
  }, items1);
  const items2 = [item];
  const callback2 = str.useCallback(() => {
    let closure_0;
    let intl;
    let intl2;
    let intl3;
    let tmp6;
    const items = [];
    const tmp = item;
    if (item.type === item(notificationCenterItemAcked[35]).NotificationCenterItems.TRENDING_CONTENT) {
      let obj = {
        label: intl.string(tmp2(notificationCenterItemAcked[20]).t["gSMz/x"]),
        icon: rowIndex(notificationCenterItemAcked[37]),
        IconComponent: tmp2(notificationCenterItemAcked[38]).LightbulbIcon,
        onPress() {
            let intl;
            let tmp19;
            try {
              str = closure_0.deeplink ?? "";
              const match = str.match(/channels\/(\d*)\/(\d*)\/(\d*)\?summaryId=(\d*)/);
              if (null == match) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("Invalid deeplink: " + closure_0.deeplink);
                throw error;
              } else {
                const tmp18 = callback(tmp4, 5);
                [r10045, tmp19] = tmp18;
                const tmp20 = tmp18[2];
                const tmp21 = tmp18[3];
                const tmp22 = tmp18[4];
                const obj2 = item(notificationCenterItemAcked[39]);
                const obj3 = { id: tmp21, channel_id: tmp20 };
                const obj4 = { summary_id: tmp22 };
                const result = obj2.openGuildHighlightNotificationForPush(tmp19, obj3, constants2.TRENDING_CONTENT_PUSH, constants.NOTIFICATION_CENTER, obj4);
              }
            } catch (err) {
              const obj = { key: "USER_SURVEY_ERROR", content: intl.string(item(notificationCenterItemAcked[20]).t.HO9Lf2) };
              const open = rowIndex(notificationCenterItemAcked[40]).open;
              rowIndex(notificationCenterItemAcked[40]);
              intl = item(notificationCenterItemAcked[20]).intl;
              open(obj);
            }
          }
      };
      const push = items.push;
      intl = tmp2(notificationCenterItemAcked[20]).intl;
      push(obj);
      tmp6 = rowIndex;
    } else {
      let obj2 = {
        label: intl2.string(tmp2(notificationCenterItemAcked[20]).t["08rqg5"]),
        icon: rowIndex(notificationCenterItemAcked[37]),
        IconComponent: tmp2(notificationCenterItemAcked[38]).LightbulbIcon,
        onPress() {
            let intl;
            try {
              const obj2 = { notificationType: closure_0.type, location: constants.NOTIFICATION_CENTER };
              const tmp5 = item(notificationCenterItemAcked[42])(notificationCenterItemAcked[41], notificationCenterItemAcked.paths);
              const obj = rowIndex(notificationCenterItemAcked[43]);
              obj.openLazy(tmp5, "NotificationSurvey", obj2);
            } catch (err) {
              const obj3 = { key: "USER_SURVEY_ERROR", content: intl.string(item(notificationCenterItemAcked[20]).t.HO9Lf2) };
              const open = rowIndex(notificationCenterItemAcked[40]).open;
              rowIndex(notificationCenterItemAcked[40]);
              intl = item(notificationCenterItemAcked[20]).intl;
              open(obj3);
            }
          }
      };
      const push2 = items.push;
      intl2 = tmp2(notificationCenterItemAcked[20]).intl;
      push2(obj2);
      tmp6 = rowIndex;
    }
    if (null == tmp.local_id) {
      let obj3 = {
        label: intl3.string(tmp2(notificationCenterItemAcked[20]).t.D8z9ju),
        icon: tmp6(notificationCenterItemAcked[44]),
        IconComponent: tmp2(notificationCenterItemAcked[45]).TrashIcon,
        onPress: function() {
            return closure_0(...arguments);
          }
      };
      const unshift = items.unshift;
      intl3 = tmp2(notificationCenterItemAcked[20]).intl;
      item = navigation(function*() {
        let intl;
        let obj3;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c3 = 1;
                c1 = 2;
                c4 = 1;
                const obj5 = { value: obj3.deleteNotificationCenterItem(tmp), done: false };
                obj3 = tmp(notificationCenterItemAcked[46]);
                return obj5;
              }
            } else {
              if (1 === tmp4) {
                c3 = 0;
                const obj6 = { key: "REMOVE_NOTIFICATION_ERROR", content: intl.string(tmp(notificationCenterItemAcked[20]).t.WDxhvB) };
                const open = rowIndex(notificationCenterItemAcked[40]).open;
                const tmp9 = rowIndex(notificationCenterItemAcked[40]);
                intl = tmp(notificationCenterItemAcked[20]).intl;
                open(obj6);
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp18) {
            let closure_2 = tmp18;
            if (0 === c3) {
              c4 = 3;
              throw tmp18;
            } else {
              c1 = 1;
            }
          }
        }
      });
      unshift(obj3);
    }
    const tmp2Result = item(notificationCenterItemAcked[47]);
    let result = tmp2Result.showSimpleActionSheet({ key: "ForYouItemLongPress", options: items, hasIcons: true });
  }, items2);
  let tmp9 = callback(str.useState(undefined), 2);
  [tmp10, tmp11] = tmp9;
  const tmp2Result4 = tmp2(tmp3[48]);
  const itemActionButtonPropsV2 = tmp2Result4.useItemActionButtonPropsV2(item, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, tmp11, compactMode);
  if (typeof f73537 === "function") {
    let tmp18 = onSoftAckItem(tmp3[17]);
    const getParserWithoutLinks = tmp18.getParserWithoutLinks;
    if (typeof f73538 === "function") {
      const tmp17Result = onSoftAckItem(tmp3[17]);
      const parserWithoutLinks = tmp17Result.getParserWithoutLinks(closure_24());
      const tmp24 = item.type === tmp2(tmp3[35]).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED || item.type === tmp2(tmp3[35]).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED;
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
                  const obj = { applicationId, textVariant: str };
                  return closure_21(closure_38, obj);
                }
        };
        tmp10 = rowIndex(tmp3[49])(obj3);
      }
      const obj7 = rowIndex(tmp3[50]);
      const extractTimestampResult = obj7.extractTimestamp(item.id);
      let obj4 = { accessibilityRole: "button", accessibilityActions: tmp15, onAccessibilityAction: tmp16, style: items3, onPress: callback1, onAccessibilityTap: callback1, onLongPress: callback2, underlayColor: tmp.rowActive.backgroundColor, children: items5 };
      items3 = [tmp.row, ];
      let rowCompact = compactMode;
      const PressableHighlight = tmp2(tmp3[51]).PressableHighlight;
      const tmp29 = rowIndex;
      if (rowCompact) {
        rowCompact = tmp.rowCompact;
      }
      items3[1] = rowCompact;
      let tmp33Result = null;
      if (item.enableBadge) {
        tmp33Result = null;
        if (!isSoftAcked) {
          const items4 = [tmp.unreadIndicatorV2, ];
          const unreadIndicatorCompactV2 = compactMode && tmp.unreadIndicatorCompactV2;
          let obj5 = { style: items4 };
          items4[1] = unreadIndicatorCompactV2;
          tmp33Result = closure_21(closure_7, obj5);
        }
      }
      items5 = [tmp33Result, , ];
      let obj6 = { style: tmp.itemV2, children: closure_21(tmp2(tmp3[52]).ForYouItemImage, obj8) };
      obj8 = { item, compactMode };
      items5[1] = closure_21(closure_7, obj6);
      const obj9 = { style: { flex: 1, flexDirection: "row" }, children: closure_22(closure_7, obj10) };
      const obj11 = { style: items6, children: items8 };
      items6 = [, ];
      obj10 = { style: tmp.col, children: items10 };
      ({ rowText: arr7[0], rowTextV2: arr7[1] } = tmp);
      const obj12 = { variant: str, style: items7, color: "text-default", children: tmp37 };
      items7 = [, , ];
      ({ rowBody: arr8[0], rowBodyV2: arr8[1] } = tmp);
      let rowBodyAcked = isSoftAcked;
      const Text = tmp2(tmp3[14]).Text;
      if (rowBodyAcked) {
        rowBodyAcked = tmp.rowBodyAcked;
      }
      items7[2] = rowBodyAcked;
      tmp37 = tmp10;
      if (typeof tmp10 === "string") {
        tmp37 = isSoftAcked ? tmp20(tmp10) : parserWithoutLinks(tmp10);
      }
      items8 = [closure_21(Text, obj12), ];
      const items9 = [, , ];
      ({ rowTime: arr10[0], rowTimeV2: arr10[1] } = tmp);
      let rowBodyAcked2 = isSoftAcked;
      const Text2 = tmp2(tmp3[14]).Text;
      if (rowBodyAcked2) {
        rowBodyAcked2 = tmp.rowBodyAcked;
      }
      items9[2] = rowBodyAcked2;
      const obj13 = { variant: "text-xs/medium", style: items9, color: "text-default", accessibilityLabel: tmp2Result5.getRelativeTimestamp(extractTimestampResult, false), children: tmp2Result6.getRelativeTimestamp(extractTimestampResult) };
      tmp2Result5 = tmp2(tmp3[53]);
      tmp2Result6 = tmp2(tmp3[53]);
      items8[1] = closure_21(Text2, obj13);
      items10 = [closure_22(closure_7, obj11), , , , ];
      let tmp35Result = item.type === tmp2(tmp3[35]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (tmp35Result) {
        const other_user = item.other_user;
        const obj14 = { styles: tmp.friendRequestNoteContainer, backgroundColor: tmp.friendRequestNoteContainer.backgroundColor, userId: id, analyticsLocation: "Notifications Tab" };
        id = undefined;
        const tmp29Result = tmp29(tmp3[54]);
        if (other_user != null) {
          id = other_user.id;
        }
        if (id == null) {
          id = closure_19;
        }
        tmp35Result = closure_21(tmp29Result, obj14);
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
      items5[2] = closure_21(closure_7, obj9);
      return closure_22(PressableHighlight, obj4);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? ((scrollRef) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
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
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const ref = react.useRef(tmp4);
  const tmpResult = Link;
  const scrollToTop = tmpResult.useScrollToTop(ref);
  return null;
}) : ((scrollRef) => {
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
  const ref = react.useRef(obj);
  const obj2 = Link;
  const scrollToTop = obj2.useScrollToTop(ref);
  return null;
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isSoftAcked) => {
  let closure_9;
  let items;
  let loadMore;
  let loadingMore;
  let nestedInLaunchPad;
  let onScroll;
  let onSoftAckItem;
  let ref;
  let shouldScrollToTop;
  let tmp11;
  let tmp12;
  let tmp7;
  let tmp8;
  const tmp = loadMore;
  let obj = loadMore(onSoftAckItem[18]);
  const cResult = obj.c(48);
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
  const NotificationCenterAckedBeforeId = tmp(tmp2[56]).NotificationCenterAckedBeforeId;
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
  const tmpResult = tmp(onSoftAckItem[27]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [U];
    class L {
      constructor() {
        return U.isRefreshing();
      }
    }
    cResult[2] = items2;
    cResult[3] = L;
    tmp12 = L;
    tmp11 = items2;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult2 = tmp(onSoftAckItem[27]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp11, tmp12);
  const ChannelListLayoutSetting = tmp(tmp2[56]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp16 = setting1 === tmp(onSoftAckItem[57]).ChannelListLayoutTypes.COMPACT;
  compactMode = tmp16;
  if (cResult[4] !== loadMore) {
    class U {
      constructor() {
        loadMore(true);
      }
    }
    cResult[4] = loadMore;
    class L {
      constructor() {
        return U.isRefreshing();
      }
    }
    cResult[5] = U;
  } else {
    class U {
      constructor() {
        loadMore(true);
      }
    }
  }
  U = tmp17;
  if (cResult[6] === setting) {
    class U {
      constructor() {
        loadMore(true);
      }
    }
  }
  class G {
    constructor(item) {
      let obj7;
      item = item.item;
      switch (item.kind) {
        case "read-section-header":
        {
          return closure_21(ForYouReadSectionHeader.ForYouReadSectionHeader, {});
        }
        case "recent-activity-section-header":
        {
          return closure_21(ForYouRecentActivitySectionHeader.ForYouRecentActivitySectionHeader, {});
        }
        case "hoisted-items-header":
        {
          return closure_21(ForYouHoistedItemsHeader.ForYouHoistedItemsHeader, {});
        }
        case "suggested-friends-header":
        {
          const obj2 = { showDivider: item.showDivider };
          return closure_21(ForYouSuggestedFriendsSectionHeaderDefault, obj2);
        }
        case "suggested-friends-row":
        {
          const obj3 = { suggestedFriend: item.suggestedFriend, onAddSuggestion: suggestedFriendAdded, onAddSuggestionAnimationFinish, panelVariant };
          return closure_21(ForYouSuggestedFriendRowDefault, obj3);
        }
        case "suggested-friends-show-all-row":
        {
          const obj4 = { suggestedFriends: item.suggestedFriends, panelVariant };
          return closure_21(ForYouShowAllRow.ForYouSuggestedFriendShowAllRow, obj4);
        }
        case "for-you-divider":
        {
          const obj5 = { style: closure_9.forYouDivider };
          return closure_21(metroImportDefault, obj5);
        }
        case "notification-center-item":
        {
          const obj6 = { children: closure_21(closure_39, obj7, "" + item.id + "-" + stateFromStores) };
          obj7 = { item, ackedBeforeId: setting, isSoftAcked: isSoftAcked(item.id), onSoftAckItem, forceHoistItem, isForceHoisted, rowIndex: tmp, compactMode, roleStyle: stateFromStores };
          const ErrorBoundary = _mod686.ErrorBoundary;
          const _HermesInternal = HermesInternal;
          return closure_21(ErrorBoundary, obj6);
        }
        case "mentions-placeholder":
        {
          return closure_21(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
        }
        case "unread-cleared-placeholder":
        {
          return closure_21(ForYouUnreadClearedState.ForYouUnreadClearedState, {});
        }
        case "load-more":
        {
          const obj = { onPressLoad: U };
          return closure_21(ForYouLoadMore.ForYouLoadMore, obj);
        }
        default:
        {
          const obj8 = GlobalUtils;
          obj8.assertNever(item);
          break;
        }
      }
    }
  }
  cResult[6] = setting;
  cResult[7] = tmp16;
  cResult[8] = forceHoistItem;
  cResult[9] = tmp17;
  cResult[10] = isForceHoisted;
  cResult[11] = isSoftAcked;
  cResult[12] = onAddSuggestionAnimationFinish;
  cResult[13] = onSoftAckItem;
  cResult[14] = undefined !== panelVariant && panelVariant;
  cResult[15] = stateFromStores;
  cResult[16] = tmp5.forYouDivider;
  cResult[17] = suggestedFriendAdded;
  cResult[18] = G;
}) : ((loadMore) => {
  let items;
  let items7;
  let loadingMore;
  let nestedInLaunchPad;
  let obj6;
  let onScroll;
  let shouldScrollToTop;
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
  let closure_9 = tmp;
  const NotificationCenterAckedBeforeId = loadMore(onSoftAckItem[56]).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  let obj = loadMore(onSoftAckItem[27]);
  const items1 = [closure_9];
  const stateFromStores = obj.useStateFromStores(items1, () => closure_9.roleStyle);
  let obj2 = loadMore(onSoftAckItem[27]);
  const items2 = [onPressLoad];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => callback.isRefreshing());
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
    let obj7;
    item = item.item;
    switch (item.kind) {
      case "read-section-header":
      {
        return closure_21(ForYouReadSectionHeader.ForYouReadSectionHeader, {});
      }
      case "recent-activity-section-header":
      {
        return closure_21(ForYouRecentActivitySectionHeader.ForYouRecentActivitySectionHeader, {});
      }
      case "hoisted-items-header":
      {
        return closure_21(ForYouHoistedItemsHeader.ForYouHoistedItemsHeader, {});
      }
      case "suggested-friends-header":
      {
        const obj2 = { showDivider: item.showDivider };
        return closure_21(ForYouSuggestedFriendsSectionHeaderDefault, obj2);
      }
      case "suggested-friends-row":
      {
        const obj3 = { suggestedFriend: item.suggestedFriend, onAddSuggestion: suggestedFriendAdded, onAddSuggestionAnimationFinish, panelVariant: flag };
        return closure_21(ForYouSuggestedFriendRowDefault, obj3);
      }
      case "suggested-friends-show-all-row":
      {
        const obj4 = { suggestedFriends: item.suggestedFriends, panelVariant: flag };
        return closure_21(ForYouShowAllRow.ForYouSuggestedFriendShowAllRow, obj4);
      }
      case "for-you-divider":
      {
        const obj5 = { style: closure_9.forYouDivider };
        return closure_21(metroImportDefault, obj5);
      }
      case "notification-center-item":
      {
        const obj6 = { children: closure_21(closure_39, obj7, "" + item.id + "-" + stateFromStores) };
        obj7 = { item, ackedBeforeId: setting, isSoftAcked: isSoftAcked(item.id), onSoftAckItem, forceHoistItem, isForceHoisted, rowIndex: tmp, compactMode, roleStyle: stateFromStores };
        const ErrorBoundary = _mod686.ErrorBoundary;
        const _HermesInternal = HermesInternal;
        return closure_21(ErrorBoundary, obj6);
      }
      case "mentions-placeholder":
      {
        return closure_21(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
      }
      case "unread-cleared-placeholder":
      {
        return closure_21(ForYouUnreadClearedState.ForYouUnreadClearedState, {});
      }
      case "load-more":
      {
        const obj = { onPressLoad };
        return closure_21(ForYouLoadMore.ForYouLoadMore, obj);
      }
      default:
      {
        const obj8 = GlobalUtils;
        obj8.assertNever(item);
        break;
      }
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
      const obj = NotificationCenterStoreActions;
      obj.refreshNotifications();
    }
  }, items6);
  const tmp14 = isForceHoisted(suggestedFriendAdded.useState(0), 2);
  let closure_16 = tmp14[1];
  let obj3 = {
    style: tmp.container,
    onLayout(nativeEvent) {
      return closure_16(nativeEvent.nativeEvent.layout.height);
    },
    children: items7
  };
  let tmp18 = !nestedInLaunchPad;
  const first = tmp14[0];
  const tmp17 = onAddSuggestionAnimationFinish;
  if (!nestedInLaunchPad) {
    let obj4 = { scrollRef: ref };
    tmp18 = closure_21(closure_40, obj4);
  }
  items7 = [tmp18, ];
  let obj5 = { ref, data: items, ListEmptyComponent: closure_21(loadMore(tmp3[69]).ForYouEmptyState, { height: first }), onScroll, refreshControl: closure_21(flag, obj6), keyExtractor: extractKey, renderItem: callback1, extraData: setting, onEndReached: loadMore, onEndReachedThreshold: 0.8, ListFooterComponent: closure_21(closure_33, { loading: loadingMore }), viewabilityConfig };
  const FlashList = tmp2(tmp3[70]).FlashList;
  obj6 = { onRefresh: callback2, refreshing: stateFromStores1, tintColor: tmp.refreshSpinner.color };
  items7[1] = closure_21(FlashList, obj5);
  return closure_22(tmp17, obj3);
}));
size = size_mod;
const result3 = size.fileFinishedImporting("modules/notification_center/native/ForYouItems.tsx");

export const ForYouItems = memoResult;