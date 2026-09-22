// === Module 16769: ForYouItems ===

// Module 16769 (ForYouItems)
import nativeDefault from "native" /* 576 */;
import _mod675 from "module_675" /* 675 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import Link from "Link" /* 1485 */;
import parseURLDefault from "parseURL" /* 4737 */;
import Text_Text from "Text/Text" /* 4753 */;
import CustomMarkupAll from "CustomMarkup" /* 5207 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7879 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12885 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 14126 */;
import NotificationCenterStoreActions from "NotificationCenterStoreActions" /* 16767 */;
import ForYouMentionPlaceholder from "ForYouMentionPlaceholder" /* 16768 */;
import ForYouReadSectionHeader from "ForYouReadSectionHeader" /* 16786 */;
import ForYouRecentActivitySectionHeader from "ForYouRecentActivitySectionHeader" /* 16787 */;
import ForYouHoistedItemsHeader from "ForYouHoistedItemsHeader" /* 16788 */;
import ForYouSuggestedFriendsSectionHeaderDefault from "ForYouSuggestedFriendsSectionHeader" /* 16789 */;
import ForYouSuggestedFriendRowDefault from "ForYouSuggestedFriendRow" /* 16790 */;
import ForYouShowAllRow from "ForYouShowAllRow" /* 16796 */;
import ForYouUnreadClearedState from "ForYouUnreadClearedState" /* 16797 */;
import ForYouLoadMore from "ForYouLoadMore" /* 16798 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;
import ApplicationStore from "ApplicationStore" /* 4984 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildStore from "GuildStore" /* 2064 */;
import UserStore from "UserStore" /* 1372 */;
import NotificationCenterStore from "NotificationCenterStore" /* 16763 */;

require = fn;
function ForYouFooter(loading) {
  let tmp = null;
  if (loading.loading) {
    tmp = __initData(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
  }
  return tmp;
}
function Callout(arg0) {
  ({ item, acked, compactMode } = arg0);
  const tmp = closure_29();
  const obj2 = { style: tmp.calloutContainer, pointerEvents: "none", children: null };
  const parser = CustomMarkupAll.getParser(closure_26());
  const items = [__initData(React5, { style: tmp.messagePreviewBarV2 }), ];
  const obj4 = { style: null, variant: "redesign/message-preview/medium", lineClamp: null, children: null };
  const items1 = [acked ? tmp.calloutTextAcked : tmp.calloutTextNotAcked];
  obj4.style = items1;
  let num = 10;
  if (compactMode) {
    num = 3;
  }
  obj4.lineClamp = num;
  obj4.children = parser(item.callout);
  items[1] = __initData(Text_Text.Text, obj4);
  obj2.children = items;
  return __initData2(React5, obj2);
}
function ForYouMessagePreviewV2(item) {
  item = item.item;
  const acked = item.acked;
  let guild_id;
  let message_channel_id;
  ({ compactMode, roleStyle } = item);
  let messagePreviewIconV2 = closure_29();
  let SMALL = dependencyMap;
  const notifCenterV2MessagePreviewParser = message_channel_id(5207).getNotifCenterV2MessagePreviewParser(closure_27(), closure_28, roleStyle);
  const intl = item(1115).intl;
  const stringResult = intl.string(item(1115).t.BOi07B);
  const obj = message_channel_id(5207);
  let message = item.message;
  let num;
  if (message != null) {
    num = message.flags;
  }
  if (num == null) {
    num = 0;
  }
  let message2 = item.message;
  let type;
  const obj2 = item(1385);
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
    const tmp15 = guild_id(8305)(first);
    let result = stringResult;
    if (null != tmp15) {
      result = tmp2(8006).formatPollResultNotificationCenterText(tmp15);
      const tmp2Result = tmp2(8006);
    }
  } else if (stickers.length > 0) {
    const intl6 = tmp2(1115).intl;
    result = intl6.string(tmp2(1115).t["7K5Lma"]);
    let ATTACHMENT = constants4.STICKER;
  } else if (tmp7) {
    const intl5 = tmp2(1115).intl;
    result = intl5.string(tmp2(1115).t["2v7kfl"]);
  } else if (hasFlagResult) {
    const intl4 = tmp2(1115).intl;
    result = intl4.string(tmp2(1115).t["6bhHrc"]);
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
    if (tmp2Result6.hasFlag(num2, constants2.IS_COMPONENTS_V2)) {
      const intl3 = tmp2(1115).intl;
      result = intl3.string(tmp2(1115).t.Xxm5i3);
    } else {
      result = stringResult;
      if (tmp8) {
        const intl2 = tmp2(1115).intl;
        result = intl2.string(tmp2(1115).t.JAKsM8);
        ATTACHMENT = constants4.ATTACHMENT;
      }
      tmp8 = attachments.length > 0 || embeds1.length > 0;
    }
    tmp2Result6 = tmp2(1385);
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
  guild_id = item.guild_id;
  message_channel_id = item.message_channel_id;
  hasFlagResult = item(1385).hasFlag(num, constants2.IS_VOICE_MESSAGE);
  let items = [GuildStore];
  const stateFromStores = item(504).useStateFromStores(items, () => GuildStore.getGuild(guild_id));
  const tmp2Result7 = item(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = item(504).useStateFromStores(items1, () => ChannelStore.getChannel(message_channel_id));
  const tmp2Result8 = item(504);
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
  const obj3 = { style: messagePreviewIconV2.messagePreviewContainerV2, pointerEvents: "none", children: null };
  const items3 = [closure_21(closure_7, { style: messagePreviewIconV2.messagePreviewBarV2 }), ];
  const items4 = [acked ? messagePreviewIconV2.messagePreviewTextV2Acked : messagePreviewIconV2.messagePreviewTextV2NotAcked, ];
  let prop;
  if (!tmp17) {
    prop = messagePreviewIconV2.messagePreviewSystemTextV2;
  }
  const obj5 = { style: items4, variant: "redesign/message-preview/medium", lineClamp: null, children: null };
  items4[1] = prop;
  let num3 = 10;
  if (compactMode) {
    num3 = 3;
  }
  obj5.lineClamp = num3;
  const obj4 = { style: messagePreviewIconV2.messagePreviewBarV2 };
  const tmp2Result9 = item(504);
  const obj6 = { content: result, guildId: guild_id, channelId: message_channel_id, messageId: item.message_id, authorId: null };
  const message10 = item.message;
  let id;
  if (message10 != null) {
    id = message10.author.id;
  }
  obj6.authorId = id;
  let str2 = "text-default";
  if (acked) {
    str2 = "text-muted";
  }
  const items5 = [item(8135).renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj6, { textColor: str2 }), ];
  if (null == ATTACHMENT) {
    items5[1] = tmp26;
    obj5.children = items5;
    items3[1] = closure_22(tmp2(4753).Text, obj5);
    obj3.children = items3;
    return closure_22(closure_7, obj3);
  } else {
    const obj7 = { style: messagePreviewIconV2.messagePreviewIconV2Container, children: null };
    if (constants4.ATTACHMENT === ATTACHMENT) {
      let tmp29 = guild_id(11515);
      const obj8 = { source: tmp29, size: null, style: null };
      SMALL = tmp2(1177).IconSizes.SMALL;
      obj8.size = SMALL;
      messagePreviewIconV2 = messagePreviewIconV2.messagePreviewIconV2;
      obj8.style = messagePreviewIconV2;
      obj7.children = closure_21(tmp27, obj8);
      closure_21(closure_7, obj7);
    } else if (constants4.STICKER !== ATTACHMENT) {
      tmp29 = null;
      if (constants4.VOICE_MESSAGE === ATTACHMENT) {
        tmp29 = guild_id(8902);
      }
    }
    tmp29 = guild_id(10686);
  }
  const tmp2Result10 = item(8135);
}
function ApplicationName(applicationId) {
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
}
function ScrollToTopRef(scrollRef) {
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
}
function extractKey(id) {
  return id.id;
}
get_ActivityIndicator = fn(17);
({ View: closure_7, RefreshControl: closure_8, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_15, MessageFlags: closure_16, AnalyticsLocations: closure_17, MessageTypes: closure_18, EMPTY_STRING_SNOWFLAKE_ID: closure_19 } = Constants);
const NotificationTypes = fn(6839).NotificationTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const viewabilityConfig = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 1000 };
let createStyles = fn(4757);
let obj = { strong: null };
let obj3 = {};
const merged = Object.assign(fn(4753).TextStyleSheet["text-md/medium"]);
obj3.color = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.strong = obj3;
let closure_24 = createStyles.createStyles(obj);
createStyles = fn(4757);
let obj4 = { strong: null };
let obj6 = {};
const merged1 = Object.assign(fn(4753).TextStyleSheet["text-md/medium"]);
obj6.color = nativeDefault.colors.TEXT_MUTED;
obj4.strong = obj6;
let closure_25 = createStyles.createStyles(obj4);
createStyles = fn(4757);
let obj7 = { mention: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND } };
let closure_26 = createStyles.createStyles(obj7);
createStyles = fn(4757);
let obj10 = { mention: null };
let obj9 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
obj10.mention = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
let closure_27 = createStyles.createStyles(obj10);
let closure_28 = { channelMentionText: "redesign/message-preview/medium" };
createStyles = fn(4757);
let obj13 = { container: { flex: 1 }, row: null, rowCompact: null, rowActive: null, col: null, unreadIndicatorV2: null, unreadIndicatorCompactV2: null, rowText: null, rowTextV2: null, rowBody: null, rowBodyV2: null, rowBodyAcked: null, rowTime: null, rowTimeV2: null, itemV2: null, calloutContainer: null, calloutTextAcked: null, calloutTextNotAcked: null, messagePreviewContainerV2: null, messagePreviewBarV2: null, messagePreviewIconV2Container: null, messagePreviewIconV2: null, messagePreviewTextV2Acked: null, messagePreviewTextV2NotAcked: null, messagePreviewSystemTextV2: null, refreshSpinner: null, forYouDivider: null, friendRequestNoteContainer: null };
let obj12 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
obj13.row = { marginHorizontal: 4, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4, borderRadius: nativeDefault.radii.lg, flexDirection: "row", justifyContent: "space-between" };
obj13.rowCompact = { paddingVertical: 6 };
let obj15 = { marginHorizontal: 4, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4, borderRadius: nativeDefault.radii.lg, flexDirection: "row", justifyContent: "space-between" };
obj13.rowActive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj13.col = { flexDirection: "column", flex: 1 };
let size = { top: 28, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: nativeDefault.radii.xs, position: "absolute", left: 4 };
obj13.unreadIndicatorV2 = size;
obj13.unreadIndicatorCompactV2 = { top: 18 };
obj13.rowText = { flex: 1 };
obj13.rowTextV2 = { flexDirection: "row", justifyContent: "space-between" };
obj13.rowBody = { lineHeight: 20 };
obj13.rowBodyV2 = { marginRight: 30 };
let obj16 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj13.rowBodyAcked = { color: nativeDefault.colors.TEXT_MUTED };
obj13.rowTime = { lineHeight: 20 };
obj13.rowTimeV2 = { marginLeft: -24 };
obj13.itemV2 = { alignItems: "flex-start", marginRight: 4, marginLeft: 8 };
obj13.calloutContainer = { marginTop: 4, flexDirection: "row", marginRight: 16 };
let obj17 = { color: nativeDefault.colors.TEXT_MUTED };
obj13.calloutTextAcked = { color: nativeDefault.colors.TEXT_MUTED };
let obj18 = { color: nativeDefault.colors.TEXT_MUTED };
obj13.calloutTextNotAcked = { color: nativeDefault.colors.TEXT_DEFAULT };
obj13.messagePreviewContainerV2 = { marginTop: 4, flexDirection: "row", marginRight: 16 };
const obj19 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj13.messagePreviewBarV2 = { marginRight: 8, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderLeftWidth: 3, borderRadius: 2, height: "auto" };
obj13.messagePreviewIconV2Container = { paddingTop: 4 };
const obj20 = { marginRight: 8, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderLeftWidth: 3, borderRadius: 2, height: "auto" };
obj13.messagePreviewIconV2 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const obj21 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
obj13.messagePreviewTextV2Acked = { color: nativeDefault.colors.TEXT_MUTED };
const obj22 = { color: nativeDefault.colors.TEXT_MUTED };
obj13.messagePreviewTextV2NotAcked = { color: nativeDefault.colors.TEXT_DEFAULT };
obj13.messagePreviewSystemTextV2 = { fontStyle: "italic", fontWeight: "normal" };
const obj23 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj13.refreshSpinner = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj24 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj13.forYouDivider = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
const obj25 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
obj13.friendRequestNoteContainer = { marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_29 = createStyles.createStyles(obj13);
const constants4 = { STICKER: "sticker", VOICE_MESSAGE: "voice_message", ATTACHMENT: "attachment" };
let closure_35 = noop.memo((item) => {
  item = item.item;
  const rowIndex = item.rowIndex;
  ({ isSoftAcked, onSoftAckItem } = item);
  ({ forceHoistItem, isForceHoisted, compactMode } = item);
  let notificationCenterItemAcked;
  let navigation;
  let callback;
  let str;
  ({ ackedBeforeId, roleStyle } = item);
  let tmp = closure_29();
  notificationCenterItemAcked = item(notificationCenterItemAcked[29]).useNotificationCenterItemAcked(item, ackedBeforeId);
  if (!isSoftAcked) {
    isSoftAcked = notificationCenterItemAcked;
  }
  let obj = item(notificationCenterItemAcked[29]);
  navigation = item(notificationCenterItemAcked[30]).useNavigation();
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
    if (item.type === item(notificationCenterItemAcked[33]).NotificationCenterItems.TRENDING_CONTENT) {
      let obj = { label: null, icon: null, IconComponent: null, onPress: null };
      let intl = tmp2(notificationCenterItemAcked[18]).intl;
      obj.label = intl.string(tmp2(notificationCenterItemAcked[18]).t["gSMz/x"]);
      obj.icon = rowIndex(notificationCenterItemAcked[35]);
      obj.IconComponent = tmp2(notificationCenterItemAcked[36]).LightbulbIcon;
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
            const obj3 = item(notificationCenterItemAcked[37]);
            const obj2 = { id: tmp20[3], channel_id: tmp20[2] };
            const obj4 = { summary_id: tmp20[4] };
            const result = obj3.openGuildHighlightNotificationForPush(tmp21, obj2, constants2.TRENDING_CONTENT_PUSH, constants.NOTIFICATION_CENTER, obj4);
          }
        } catch (err) {
          const obj5 = { key: "USER_SURVEY_ERROR", content: null };
          const intl = item(notificationCenterItemAcked[18]).intl;
          obj5.content = intl.string(item(notificationCenterItemAcked[18]).t.HO9Lf2);
          rowIndex(notificationCenterItemAcked[38]).open(obj5);
          const obj = rowIndex(notificationCenterItemAcked[38]);
        }
      };
      items.push(obj);
      let tmp6 = rowIndex;
    } else {
      let obj2 = { label: null, icon: null, IconComponent: null, onPress: null };
      const intl2 = tmp2(notificationCenterItemAcked[18]).intl;
      obj2.label = intl2.string(tmp2(notificationCenterItemAcked[18]).t["08rqg5"]);
      obj2.icon = rowIndex(notificationCenterItemAcked[35]);
      obj2.IconComponent = tmp2(notificationCenterItemAcked[36]).LightbulbIcon;
      obj2.onPress = function onPress() {
        try {
          const tmp5 = item(notificationCenterItemAcked[40])(notificationCenterItemAcked[39], notificationCenterItemAcked.paths);
          const obj2 = { notificationType: closure_0.type, location: constants.NOTIFICATION_CENTER };
          rowIndex(notificationCenterItemAcked[41]).openLazy(tmp5, "NotificationSurvey", obj2);
          const obj = rowIndex(notificationCenterItemAcked[41]);
        } catch (err) {
          const obj4 = { key: "USER_SURVEY_ERROR", content: null };
          const intl = item(notificationCenterItemAcked[18]).intl;
          obj4.content = intl.string(item(notificationCenterItemAcked[18]).t.HO9Lf2);
          rowIndex(notificationCenterItemAcked[38]).open(obj4);
          const obj3 = rowIndex(notificationCenterItemAcked[38]);
        }
      };
      items.push(obj2);
      tmp6 = rowIndex;
    }
    if (null == tmp.local_id) {
      let obj3 = { label: null, icon: null, IconComponent: null, onPress: null };
      const intl3 = tmp2(notificationCenterItemAcked[18]).intl;
      obj3.label = intl3.string(tmp2(notificationCenterItemAcked[18]).t.D8z9ju);
      obj3.icon = tmp6(notificationCenterItemAcked[42]);
      obj3.IconComponent = tmp2(notificationCenterItemAcked[43]).TrashIcon;
      item = navigation(function*() {
        yield tmp3(16765).deleteNotificationCenterItem(tmp3);
        if (1 === tmp7) {
          c3 = 0;
          const obj7 = { key: "REMOVE_NOTIFICATION_ERROR", content: null };
          const intl = tmp3(1115).intl;
          obj7.content = intl.string(tmp3(1115).t.WDxhvB);
          rowIndex(4455).open(obj7);
          c4 = 3;
          rowIndex(4455);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      });
      obj3.onPress = function() {
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
    let result = item(notificationCenterItemAcked[45]).showSimpleActionSheet({ key: "ForYouItemLongPress", options: items, hasIcons: true });
    tmp = item;
    const tmp2Result = item(notificationCenterItemAcked[45]);
  }, items2);
  let tmp2Result = item(notificationCenterItemAcked[30]);
  [tmp10, tmp11] = callback(str.useState(undefined), 2);
  const tmp9 = callback(str.useState(undefined), 2);
  const itemActionButtonPropsV2 = item(notificationCenterItemAcked[46]).useItemActionButtonPropsV2(item, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, tmp11, compactMode);
  ({ actionButtons, actionsNode, accessibilityActions, onAccessibilityAction } = itemActionButtonPropsV2);
  const tmp2Result4 = item(notificationCenterItemAcked[46]);
  const parserWithoutLinks = onSoftAckItem(notificationCenterItemAcked[16]).getParserWithoutLinks(closure_25());
  let obj4 = onSoftAckItem(notificationCenterItemAcked[16]);
  const parserWithoutLinks1 = onSoftAckItem(notificationCenterItemAcked[16]).getParserWithoutLinks(closure_24());
  let tmp15 = item.type === tmp2(tmp3[33]).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED;
  if (!tmp15) {
    tmp15 = item.type === tmp2(tmp3[33]).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED;
  }
  if (notificationCenterItemAcked) {
    notificationCenterItemAcked = !tmp15;
  }
  let tmp16 = null;
  if (!notificationCenterItemAcked) {
    let obj2 = { "aria-hidden": true, accessibilityLabel: "", item, rowIndex, onSoftAckItem, actionButtons, actionsNode, compactMode };
    tmp16 = closure_21(tmp2(tmp3[46]).ForYouItemActionButtons, obj2);
  }
  str = "text-md/semibold";
  if (isSoftAcked) {
    str = "text-md/medium";
  }
  if (tmp10 == null) {
    let obj3 = {
      item,
      renderApplication(applicationId) {
          return __initData(ApplicationName, { applicationId, textVariant: str });
        }
    };
    tmp10 = rowIndex(tmp3[47])(obj3);
  }
  let obj5 = onSoftAckItem(notificationCenterItemAcked[16]);
  const tmp19 = rowIndex;
  const extractTimestampResult = rowIndex(notificationCenterItemAcked[48]).extractTimestamp(item.id);
  const obj6 = { accessibilityRole: "button", accessibilityActions, onAccessibilityAction, style: null, onPress: null, onAccessibilityTap: null, onLongPress: null, underlayColor: null, children: null };
  const items3 = [tmp.row, ];
  let rowCompact = compactMode;
  if (rowCompact) {
    rowCompact = tmp.rowCompact;
  }
  items3[1] = rowCompact;
  obj6.style = items3;
  obj6.onPress = callback1;
  obj6.onAccessibilityTap = callback1;
  obj6.onLongPress = callback2;
  obj6.underlayColor = tmp.rowActive.backgroundColor;
  let tmp23Result = null;
  if (item.enableBadge) {
    tmp23Result = null;
    if (!isSoftAcked) {
      const items4 = [tmp.unreadIndicatorV2, ];
      let unreadIndicatorCompactV2 = compactMode;
      if (unreadIndicatorCompactV2) {
        unreadIndicatorCompactV2 = tmp.unreadIndicatorCompactV2;
      }
      let obj7 = { style: null };
      items4[1] = unreadIndicatorCompactV2;
      obj7.style = items4;
      tmp23Result = closure_21(closure_7, obj7);
    }
  }
  const items5 = [tmp23Result, , ];
  const obj8 = rowIndex(notificationCenterItemAcked[48]);
  items5[1] = closure_21(closure_7, { style: tmp.itemV2, children: closure_21(item(notificationCenterItemAcked[50]).ForYouItemImage, { item, compactMode }) });
  const obj10 = { style: { flex: 1, flexDirection: "row" }, children: null };
  const obj11 = { style: tmp.col, children: null };
  const obj12 = { style: null, children: null };
  const items6 = [, ];
  ({ rowText: arr7[0], rowTextV2: arr7[1] } = tmp);
  obj12.style = items6;
  const obj13 = { variant: str, style: null, color: "text-default", children: null };
  const items7 = [, , ];
  ({ rowBody: arr8[0], rowBodyV2: arr8[1] } = tmp);
  let rowBodyAcked = isSoftAcked;
  if (rowBodyAcked) {
    rowBodyAcked = tmp.rowBodyAcked;
  }
  items7[2] = rowBodyAcked;
  obj13.style = items7;
  if (typeof tmp10 !== "string") {
    obj13.children = tmp10;
    const items8 = [closure_21(tmp2(tmp3[14]).Text, obj13), ];
    const items9 = [, , ];
    ({ rowTime: arr10[0], rowTimeV2: arr10[1] } = tmp);
    let rowBodyAcked2 = isSoftAcked;
    if (rowBodyAcked2) {
      rowBodyAcked2 = tmp.rowBodyAcked;
    }
    const obj14 = { variant: "text-xs/medium", style: null, color: "text-default", accessibilityLabel: null, children: null };
    items9[2] = rowBodyAcked2;
    obj14.style = items9;
    obj14.accessibilityLabel = tmp2(tmp3[51]).getRelativeTimestamp(extractTimestampResult, false);
    const tmp2Result5 = tmp2(tmp3[51]);
    obj14.children = tmp2(tmp3[51]).getRelativeTimestamp(extractTimestampResult);
    items8[1] = closure_21(tmp2(tmp3[14]).Text, obj14);
    obj12.children = items8;
    const items10 = [closure_22(closure_7, obj12), , , , ];
    let tmp25Result = item.type === tmp2(tmp3[33]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
    if (tmp25Result) {
      const obj15 = { styles: tmp.friendRequestNoteContainer, backgroundColor: tmp.friendRequestNoteContainer.backgroundColor, userId: null, analyticsLocation: "Notifications Tab" };
      const other_user = item.other_user;
      let id;
      if (other_user != null) {
        id = other_user.id;
      }
      if (id == null) {
        id = closure_19;
      }
      obj15.userId = id;
      tmp25Result = closure_21(tmp19(tmp3[52]), obj15);
      const tmp19Result = tmp19(tmp3[52]);
    }
    items10[1] = tmp25Result;
    const message = item.message;
    let content;
    if (message != null) {
      content = message.content;
    }
    let tmp25Result3 = null;
    if (null != content) {
      const obj16 = { item, acked: isSoftAcked, compactMode, roleStyle };
      tmp25Result3 = closure_21(ForYouMessagePreviewV2, obj16);
    }
    items10[2] = tmp25Result3;
    let tmp25Result4 = null;
    if (null != item.callout) {
      const obj17 = { item, acked: isSoftAcked, compactMode };
      tmp25Result4 = closure_21(Callout, obj17);
    }
    items10[3] = tmp25Result4;
    const obj18 = { children: tmp16 };
    items10[4] = closure_21(closure_7, obj18);
    obj11.children = items10;
    obj10.children = closure_22(closure_7, obj11);
    items5[2] = closure_21(closure_7, obj10);
    obj6.children = items5;
    return closure_22(tmp2(tmp3[49]).PressableHighlight, obj6);
  } else {
    isSoftAcked ? parserWithoutLinks(tmp10) : parserWithoutLinks1(tmp10);
  }
  const obj9 = { style: tmp.itemV2, children: closure_21(item(notificationCenterItemAcked[50]).ForYouItemImage, { item, compactMode }) };
});
const obj26 = { marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItems.tsx");

export const ForYouItems = noop.memo((loadMore) => {
  loadMore = loadMore.loadMore;
  ({ nestedInLaunchPad, shouldScrollToTop } = loadMore);
  const isSoftAcked = loadMore.isSoftAcked;
  const onSoftAckItem = loadMore.onSoftAckItem;
  const forceHoistItem = loadMore.forceHoistItem;
  const isForceHoisted = loadMore.isForceHoisted;
  const suggestedFriendAdded = loadMore.suggestedFriendAdded;
  const onAddSuggestionAnimationFinish = loadMore.onAddSuggestionAnimationFinish;
  let flag = loadMore.panelVariant;
  ({ items, onScroll, loadingMore } = loadMore);
  if (flag === undefined) {
    flag = false;
  }
  let onPressLoad;
  const tmp = closure_29();
  closure_9 = tmp;
  const NotificationCenterAckedBeforeId = loadMore(onSoftAckItem[54]).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  const items1 = [closure_9];
  const stateFromStores = loadMore(onSoftAckItem[25]).useStateFromStores(items1, () => closure_9.roleStyle);
  let obj = loadMore(onSoftAckItem[25]);
  const items2 = [onPressLoad];
  const stateFromStores1 = loadMore(onSoftAckItem[25]).useStateFromStores(items2, () => callback.isRefreshing());
  const ChannelListLayoutSetting = loadMore(onSoftAckItem[54]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp8 = setting1 === loadMore(onSoftAckItem[55]).ChannelListLayoutTypes.COMPACT;
  const compactMode = tmp8;
  const items3 = [loadMore];
  onPressLoad = suggestedFriendAdded.useCallback(() => {
    loadMore(true);
  }, items3);
  const items4 = [tmp.forYouDivider, suggestedFriendAdded, onAddSuggestionAnimationFinish, stateFromStores, setting, isSoftAcked, onSoftAckItem, forceHoistItem, isForceHoisted, tmp8, onPressLoad, flag];
  const callback1 = suggestedFriendAdded.useCallback((item) => {
    item = item.item;
    switch (item.kind) {
      case "read-section-header":
        return __initData(ForYouReadSectionHeader.ForYouReadSectionHeader, {});
      case "recent-activity-section-header":
        return __initData(ForYouRecentActivitySectionHeader.ForYouRecentActivitySectionHeader, {});
      case "hoisted-items-header":
        return __initData(ForYouHoistedItemsHeader.ForYouHoistedItemsHeader, {});
      case "suggested-friends-header":
        const obj2 = { showDivider: item.showDivider };
        return __initData(ForYouSuggestedFriendsSectionHeaderDefault, obj2);
      case "suggested-friends-row":
        const obj3 = { suggestedFriend: item.suggestedFriend, onAddSuggestion: suggestedFriendAdded, onAddSuggestionAnimationFinish, panelVariant: flag };
        return __initData(ForYouSuggestedFriendRowDefault, obj3);
      case "suggested-friends-show-all-row":
        const obj4 = { suggestedFriends: item.suggestedFriends, panelVariant: flag };
        return __initData(ForYouShowAllRow.ForYouSuggestedFriendShowAllRow, obj4);
      case "for-you-divider":
        const obj5 = { style: closure_9.forYouDivider };
        return __initData(React5, obj5);
      case "notification-center-item":
        const obj6 = { children: null };
        const obj7 = { item, ackedBeforeId: setting, isSoftAcked: isSoftAcked(item.id), onSoftAckItem, forceHoistItem, isForceHoisted, rowIndex: tmp, compactMode, roleStyle: stateFromStores };
        const _HermesInternal = HermesInternal;
        obj6.children = __initData(closure_35, obj7, "" + item.id + "-" + stateFromStores);
        return __initData(_mod675.ErrorBoundary, obj6);
      case "mentions-placeholder":
        return __initData(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
      case "unread-cleared-placeholder":
        return __initData(ForYouUnreadClearedState.ForYouUnreadClearedState, {});
      case "load-more":
        const obj = { onPressLoad };
        return __initData(ForYouLoadMore.ForYouLoadMore, obj);
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
    tmp17 = closure_21(ScrollToTopRef, obj4);
  }
  const items7 = [tmp17, ];
  let obj5 = { ref, data: items, ListEmptyComponent: closure_21(loadMore(onSoftAckItem[68]).ForYouEmptyState, { height: tmp14[0] }), onScroll, refreshControl: closure_21(flag, { onRefresh: callback2, refreshing: stateFromStores1, tintColor: tmp.refreshSpinner.color }), keyExtractor: extractKey, renderItem: callback1, extraData: setting, onEndReached: loadMore, onEndReachedThreshold: 0.8, ListFooterComponent: closure_21(ForYouFooter, { loading: loadingMore }), viewabilityConfig };
  items7[1] = closure_21(loadMore(onSoftAckItem[67]).FlashList, obj5);
  obj3.children = items7;
  return closure_22(onAddSuggestionAnimationFinish, obj3);
});