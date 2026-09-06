// discord_app/modules/notification_center/native/ForYouItems.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod675 from "../../../../_runtime/metro/00675__.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import Link from "../../../../_runtime/01484_Link.js";
import parseURLDefault from "../../../utils/native/parseURL.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CustomMarkupAll from "../../markup/CustomMarkup.native.tsx";
import NotificationCenterItemsTypes from "../NotificationCenterItemsTypes.tsx";
import ApplicationIconAndNameDefault from "../../user_profile/native/ApplicationIconAndName.tsx";
import handleSupportedURLDefault from "../../links/native/handleSupportedURL.tsx";
import NotificationCenterStoreActions from "../NotificationCenterStoreActions.tsx";
import ForYouMentionPlaceholder from "ForYouMentionPlaceholder.tsx";
import ForYouReadSectionHeader from "ForYouReadSectionHeader.tsx";
import ForYouRecentActivitySectionHeader from "ForYouRecentActivitySectionHeader.tsx";
import ForYouHoistedItemsHeader from "ForYouHoistedItemsHeader.tsx";
import ForYouSuggestedFriendsSectionHeaderDefault from "ForYouSuggestedFriendsSectionHeader.tsx";
import ForYouSuggestedFriendRowDefault from "ForYouSuggestedFriendRow.tsx";
import ForYouShowAllRow from "ForYouShowAllRow.tsx";
import ForYouUnreadClearedState from "ForYouUnreadClearedState.tsx";
import ForYouLoadMore from "ForYouLoadMore.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import NotificationCenterStore from "../NotificationCenterStore.tsx";

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
  let obj = { style: tmp.calloutContainer, pointerEvents: "none", children: null };
  obj = { style: tmp.messagePreviewBarV2 };
  const parser = obj.getParser(closure_26());
  const items = [__initData(React5, obj)];
  const obj1 = { style: null, variant: "redesign/message-preview/medium", lineClamp: null, children: null };
  const items1 = [acked ? tmp.calloutTextAcked : tmp.calloutTextNotAcked];
  obj1.style = items1;
  let num = 10;
  if (compactMode) {
    num = 3;
  }
  obj1.lineClamp = num;
  obj1.children = parser(item.callout);
  items[1] = __initData(Text_Text.Text, obj1);
  obj.children = items;
  return __initData2(React5, obj);
}
function ForYouMessagePreviewV2(item) {
  item = item.item;
  const acked = item.acked;
  let guild_id;
  let message_channel_id;
  ({ compactMode, roleStyle } = item);
  let messagePreviewIconV2 = closure_29();
  let SMALL = dependencyMap;
  let obj = message_channel_id(4995);
  const notifCenterV2MessagePreviewParser = obj.getNotifCenterV2MessagePreviewParser(
    closure_27(),
    closure_28,
    roleStyle,
  );
  const intl = item(1114).intl;
  const stringResult = intl.string(item(1114).t.BOi07B);
  let obj1 = item(1384);
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
  let embeds;
  if (message5 != null) {
    embeds = message5.embeds;
  }
  if (embeds == null) {
    embeds = [];
  }
  const message6 = item.message;
  if (message6 != null) {
    const interaction = message6.interaction;
  }
  if (type === constants3.POLL_RESULT) {
    const message8 = item.message;
    let first;
    if (message8 != null) {
      embeds = message8.embeds;
      if (embeds != null) {
        first = embeds[0];
      }
    }
    const tmp15 = guild_id(8042)(first);
    let result = stringResult;
    if (null != tmp15) {
      let tmp2Result = tmp2(7761);
      result = tmp2Result.formatPollResultNotificationCenterText(tmp15);
    }
  } else if (stickers.length > 0) {
    const intl6 = tmp2(1114).intl;
    result = intl6.string(tmp2(1114).t["7K5Lma"]);
    let ATTACHMENT = constants4.STICKER;
  } else if (tmp7) {
    const intl5 = tmp2(1114).intl;
    result = intl5.string(tmp2(1114).t["2v7kfl"]);
  } else if (hasFlagResult) {
    const intl4 = tmp2(1114).intl;
    result = intl4.string(tmp2(1114).t["6bhHrc"]);
    ATTACHMENT = constants4.VOICE_MESSAGE;
  } else {
    tmp2Result = tmp2(1384);
    const message7 = item.message;
    let num2;
    if (message7 != null) {
      num2 = message7.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    if (tmp2Result.hasFlag(num2, tmp4.IS_COMPONENTS_V2)) {
      const intl3 = tmp2(1114).intl;
      result = intl3.string(tmp2(1114).t.Xxm5i3);
    } else {
      result = stringResult;
      if (tmp8) {
        const intl2 = tmp2(1114).intl;
        result = intl2.string(tmp2(1114).t.JAKsM8);
        ATTACHMENT = constants4.ATTACHMENT;
      }
      tmp8 = attachments.length > 0 || embeds.length > 0;
    }
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
  hasFlagResult = obj1.hasFlag(num, constants2.IS_VOICE_MESSAGE);
  tmp4 = constants2;
  let items = [GuildStore];
  const stateFromStores = item(504).useStateFromStores(items, () => GuildStore.getGuild(guild_id));
  const tmp2Result1 = item(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = item(504).useStateFromStores(items1, () => ChannelStore.getChannel(message_channel_id));
  const tmp2Result2 = item(504);
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
  obj = { style: messagePreviewIconV2.messagePreviewContainerV2, pointerEvents: "none", children: null };
  obj = { style: messagePreviewIconV2.messagePreviewBarV2 };
  const items3 = [closure_21(closure_7, obj)];
  const items4 = [
    acked ? messagePreviewIconV2.messagePreviewTextV2Acked : messagePreviewIconV2.messagePreviewTextV2NotAcked,
  ];
  let prop;
  if (!tmp17) {
    prop = messagePreviewIconV2.messagePreviewSystemTextV2;
  }
  obj1 = { style: items4, variant: "redesign/message-preview/medium", lineClamp: null, children: null };
  items4[1] = prop;
  let num3 = 10;
  if (compactMode) {
    num3 = 3;
  }
  obj1.lineClamp = num3;
  const tmp2Result3 = item(504);
  const obj2 = {
    content: result,
    guildId: guild_id,
    channelId: message_channel_id,
    messageId: item.message_id,
    authorId: null,
  };
  const message10 = item.message;
  let id;
  if (message10 != null) {
    id = message10.author.id;
  }
  obj2.authorId = id;
  let str2 = "text-default";
  if (acked) {
    str2 = "text-muted";
  }
  const items5 = [item(7888).renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj2, { textColor: str2 })];
  if (null == ATTACHMENT) {
    items5[1] = tmp26;
    obj1.children = items5;
    items3[1] = tmp21(tmp2(4556).Text, obj1);
    obj.children = items3;
    return tmp21(tmp22, obj);
  } else {
    const obj3 = { style: messagePreviewIconV2.messagePreviewIconV2Container, children: null };
    if (constants4.ATTACHMENT === ATTACHMENT) {
      let tmp29 = guild_id(11245);
      const obj4 = { source: tmp29, size: null, style: null };
      SMALL = tmp2(1178).IconSizes.SMALL;
      obj4.size = SMALL;
      messagePreviewIconV2 = messagePreviewIconV2.messagePreviewIconV2;
      obj4.style = messagePreviewIconV2;
      obj3.children = tmp23(tmp27, obj4);
      tmp23(tmp22, obj3);
    } else if (tmp28.STICKER !== ATTACHMENT) {
      tmp29 = null;
      if (tmp28.VOICE_MESSAGE === ATTACHMENT) {
        tmp29 = guild_id(8619);
      }
    }
    tmp29 = guild_id(10420);
  }
}
function ApplicationName(applicationId) {
  applicationId = applicationId.applicationId;
  let obj = applicationId(504);
  const items = [ApplicationStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  if (null == stateFromStores) {
    let tmp5 = closure_21(closure_7, {});
  } else {
    obj = { application: stateFromStores, textVariant: applicationId.textVariant, iconSize: 16 };
    tmp5 = closure_21(ApplicationIconAndNameDefault, obj, stateFromStores.id);
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
    },
  };
  const ref = noop.useRef({
    scrollToTop() {
      const current = scrollRef.current;
      let scrollToTopResult;
      if (current != null) {
        scrollToTopResult = current.scrollToTop();
      }
      return scrollToTopResult;
    },
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
({
  AnalyticEvents: closure_15,
  MessageFlags: closure_16,
  AnalyticsLocations: closure_17,
  MessageTypes: closure_18,
  EMPTY_STRING_SNOWFLAKE_ID: closure_19,
} = Constants);
const NotificationTypes = fn(6596).NotificationTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const viewabilityConfig = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 1000 };
let createStyles = fn(4560);
let obj = { strong: null };
obj = {};
const merged = Object.assign(fn(4556).TextStyleSheet["text-md/medium"]);
obj.color = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.strong = obj;
let closure_24 = createStyles.createStyles(obj);
fn(4560);
createStyles = { strong: null };
let obj2 = {};
const merged1 = Object.assign(fn(4556).TextStyleSheet["text-md/medium"]);
obj2.color = nativeDefault.colors.TEXT_MUTED;
createStyles.strong = obj2;
let closure_25 = createStyles.createStyles(createStyles);
fn(4560);
let obj3 = { mention: null };
createStyles = {
  color: nativeDefault.colors.MENTION_FOREGROUND,
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
};
obj3.mention = createStyles;
let closure_26 = createStyles.createStyles(obj3);
createStyles = fn(4560);
let obj5 = { mention: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" } };
let closure_27 = createStyles.createStyles(obj5);
let closure_28 = { channelMentionText: "redesign/message-preview/medium" };
fn(4560);
createStyles = {
  container: { flex: 1 },
  row: null,
  rowCompact: null,
  rowActive: null,
  col: null,
  unreadIndicatorV2: null,
  unreadIndicatorCompactV2: null,
  rowText: null,
  rowTextV2: null,
  rowBody: null,
  rowBodyV2: null,
  rowBodyAcked: null,
  rowTime: null,
  rowTimeV2: null,
  itemV2: null,
  calloutContainer: null,
  calloutTextAcked: null,
  calloutTextNotAcked: null,
  messagePreviewContainerV2: null,
  messagePreviewBarV2: null,
  messagePreviewIconV2Container: null,
  messagePreviewIconV2: null,
  messagePreviewTextV2Acked: null,
  messagePreviewTextV2NotAcked: null,
  messagePreviewSystemTextV2: null,
  refreshSpinner: null,
  forYouDivider: null,
  friendRequestNoteContainer: null,
};
let obj6 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
createStyles.row = {
  marginHorizontal: 4,
  paddingHorizontal: 12,
  paddingVertical: 8,
  marginBottom: 4,
  borderRadius: nativeDefault.radii.lg,
  flexDirection: "row",
  justifyContent: "space-between",
};
createStyles.rowCompact = { paddingVertical: 6 };
let obj8 = {
  marginHorizontal: 4,
  paddingHorizontal: 12,
  paddingVertical: 8,
  marginBottom: 4,
  borderRadius: nativeDefault.radii.lg,
  flexDirection: "row",
  justifyContent: "space-between",
};
createStyles.rowActive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.col = { flexDirection: "column", flex: 1 };
let size = {
  top: 28,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  height: 8,
  width: 8,
  borderRadius: nativeDefault.radii.xs,
  position: "absolute",
  left: 4,
};
createStyles.unreadIndicatorV2 = size;
createStyles.unreadIndicatorCompactV2 = { top: 18 };
createStyles.rowText = { flex: 1 };
createStyles.rowTextV2 = { flexDirection: "row", justifyContent: "space-between" };
createStyles.rowBody = { lineHeight: 20 };
createStyles.rowBodyV2 = { marginRight: 30 };
createStyles = { color: nativeDefault.colors.TEXT_MUTED };
createStyles.rowBodyAcked = createStyles;
createStyles.rowTime = { lineHeight: 20 };
createStyles.rowTimeV2 = { marginLeft: -24 };
createStyles.itemV2 = { alignItems: "flex-start", marginRight: 4, marginLeft: 8 };
createStyles.calloutContainer = { marginTop: 4, flexDirection: "row", marginRight: 16 };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.calloutTextAcked = { color: nativeDefault.colors.TEXT_MUTED };
let obj11 = { color: nativeDefault.colors.TEXT_MUTED };
createStyles.calloutTextNotAcked = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.messagePreviewContainerV2 = { marginTop: 4, flexDirection: "row", marginRight: 16 };
createStyles = {
  marginRight: 8,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  borderLeftWidth: 3,
  borderRadius: 2,
  height: "auto",
};
createStyles.messagePreviewBarV2 = createStyles;
createStyles.messagePreviewIconV2Container = { paddingTop: 4 };
let obj12 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.messagePreviewIconV2 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const obj14 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles.messagePreviewTextV2Acked = { color: nativeDefault.colors.TEXT_MUTED };
const obj15 = { color: nativeDefault.colors.TEXT_MUTED };
createStyles.messagePreviewTextV2NotAcked = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.messagePreviewSystemTextV2 = { fontStyle: "italic", fontWeight: "normal" };
const obj16 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.refreshSpinner = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj17 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.forYouDivider = {
  borderTopWidth: StyleSheet.hairlineWidth,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_8,
};
const obj18 = {
  borderTopWidth: StyleSheet.hairlineWidth,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_8,
};
createStyles.friendRequestNoteContainer = { marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_29 = createStyles.createStyles(createStyles);
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
  const tmp = closure_29();
  let obj = item(notificationCenterItemAcked[29]);
  notificationCenterItemAcked = obj.useNotificationCenterItemAcked(item, ackedBeforeId);
  if (!isSoftAcked) {
    isSoftAcked = notificationCenterItemAcked;
  }
  let tmp2Result = tmp2(tmp3[30]);
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
      let obj = navigation;
      if (navigation != null) {
        obj.navigate("friends", { screen: "requests" });
      }
    }
    callback();
    obj = {
      action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.CLICKED,
      notification_center_id: tmp5.id,
      item_type: tmp5.type,
      acked: notificationCenterItemAcked,
      item_index: rowIndex,
      deeplink: tmp5.deeplink,
    };
    AnalyticsUtilsDefault.track(constants.NOTIFICATION_CENTER_ACTION, obj);
  }, items1);
  const items2 = [item];
  const callback2 = str.useCallback(() => {
    const items = [];
    if (item.type === item(notificationCenterItemAcked[33]).NotificationCenterItems.TRENDING_CONTENT) {
      let obj = { label: null, icon: null, IconComponent: null, onPress: null };
      let intl = tmp2(tmp3[18]).intl;
      obj.label = intl.string(tmp2(tmp3[18]).t["gSMz/x"]);
      obj.icon = rowIndex(tmp3[35]);
      obj.IconComponent = tmp2(tmp3[36]).LightbulbIcon;
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
            const error = new Error("Invalid deeplink: " + tmp2.deeplink);
            throw error;
          } else {
            const tmp20 = callback(tmp5, 5);
            [r10045, tmp21] = tmp20;
            const obj3 = item(notificationCenterItemAcked[37]);
            let obj = { id: tmp20[3], channel_id: tmp20[2] };
            obj = { summary_id: tmp20[4] };
            const result = obj3.openGuildHighlightNotificationForPush(
              tmp21,
              obj,
              constants2.TRENDING_CONTENT_PUSH,
              constants.NOTIFICATION_CENTER,
              obj,
            );
          }
          tmp2 = closure_0;
        } catch (err) {
          obj = rowIndex(notificationCenterItemAcked[38]);
          const obj1 = { key: "USER_SURVEY_ERROR", content: null };
          const intl = item(notificationCenterItemAcked[18]).intl;
          obj1.content = intl.string(item(notificationCenterItemAcked[18]).t.HO9Lf2);
          obj.open(obj1);
        }
      };
      items.push(obj);
      let tmp6 = rowIndex;
    } else {
      obj = { label: null, icon: null, IconComponent: null, onPress: null };
      const intl2 = tmp2(tmp3[18]).intl;
      obj.label = intl2.string(tmp2(tmp3[18]).t["08rqg5"]);
      obj.icon = rowIndex(tmp3[35]);
      obj.IconComponent = tmp2(tmp3[36]).LightbulbIcon;
      obj.onPress = function onPress() {
        try {
          let obj = rowIndex(notificationCenterItemAcked[41]);
          obj = { notificationType: closure_0.type, location: constants.NOTIFICATION_CENTER };
          obj.openLazy(
            item(notificationCenterItemAcked[40])(notificationCenterItemAcked[39], notificationCenterItemAcked.paths),
            "NotificationSurvey",
            obj,
          );
        } catch (err) {
          obj = { key: "USER_SURVEY_ERROR", content: null };
          const intl = item(notificationCenterItemAcked[18]).intl;
          obj.content = intl.string(item(notificationCenterItemAcked[18]).t.HO9Lf2);
          rowIndex(notificationCenterItemAcked[38]).open(obj);
          const obj3 = rowIndex(notificationCenterItemAcked[38]);
        }
      };
      items.push(obj);
      tmp6 = rowIndex;
    }
    if (null == item.local_id) {
      obj = { label: null, icon: null, IconComponent: null, onPress: null };
      const intl3 = tmp2(tmp3[18]).intl;
      obj.label = intl3.string(tmp2(tmp3[18]).t.D8z9ju);
      obj.icon = tmp6(tmp3[42]);
      obj.IconComponent = tmp2(tmp3[43]).TrashIcon;
      item = navigation(function* () {
        yield tmp3(16414).deleteNotificationCenterItem(tmp3);
        if (1 === tmp7) {
          c3 = 0;
          const obj2 = { key: "REMOVE_NOTIFICATION_ERROR", content: null };
          const intl = tmp3(1114).intl;
          obj2.content = intl.string(tmp3(1114).t.WDxhvB);
          rowIndex(4259).open(obj2);
          c4 = 3;
          rowIndex(4259);
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return arg1;
      });
      obj.onPress = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      items.unshift(obj);
    }
    let result = item(notificationCenterItemAcked[45]).showSimpleActionSheet({
      key: "ForYouItemLongPress",
      options: items,
      hasIcons: true,
    });
  }, items2);
  [tmp10, tmp11] = callback(str.useState(undefined), 2);
  tmp2Result = tmp2(tmp3[46]);
  const itemActionButtonPropsV2 = tmp2Result.useItemActionButtonPropsV2(
    item,
    callback,
    navigation,
    forceHoistItem,
    isForceHoisted,
    onSoftAckItem,
    tmp11,
    compactMode,
  );
  ({ actionButtons, actionsNode, accessibilityActions, onAccessibilityAction } = itemActionButtonPropsV2);
  let obj3 = onSoftAckItem(tmp3[16]);
  const parserWithoutLinks = obj3.getParserWithoutLinks(closure_25());
  let obj4 = onSoftAckItem(tmp3[16]);
  const parserWithoutLinks1 = obj4.getParserWithoutLinks(closure_24());
  let tmp15 = item.type === tmp2(tmp3[33]).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED;
  if (!tmp15) {
    tmp15 = item.type === tmp2(tmp3[33]).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED;
  }
  if (notificationCenterItemAcked) {
    notificationCenterItemAcked = !tmp15;
  }
  let tmp16 = null;
  if (!notificationCenterItemAcked) {
    obj = {
      "aria-hidden": true,
      accessibilityLabel: "",
      item,
      rowIndex,
      onSoftAckItem,
      actionButtons,
      actionsNode,
      compactMode,
    };
    tmp16 = closure_21(tmp2(tmp3[46]).ForYouItemActionButtons, obj);
  }
  str = "text-md/semibold";
  if (isSoftAcked) {
    str = "text-md/medium";
  }
  if (tmp10 == null) {
    obj = {
      item,
      renderApplication(applicationId) {
        return __initData(ApplicationName, { applicationId, textVariant: str });
      },
    };
    tmp10 = rowIndex(tmp3[47])(obj);
  }
  let obj7 = rowIndex(tmp3[48]);
  const extractTimestampResult = obj7.extractTimestamp(item.id);
  let obj1 = {
    accessibilityRole: "button",
    accessibilityActions,
    onAccessibilityAction,
    style: null,
    onPress: null,
    onAccessibilityTap: null,
    onLongPress: null,
    underlayColor: null,
    children: null,
  };
  const items3 = [tmp.row];
  let rowCompact = compactMode;
  if (rowCompact) {
    rowCompact = tmp.rowCompact;
  }
  items3[1] = rowCompact;
  obj1.style = items3;
  obj1.onPress = callback1;
  obj1.onAccessibilityTap = callback1;
  obj1.onLongPress = callback2;
  obj1.underlayColor = tmp.rowActive.backgroundColor;
  let tmp23Result = null;
  if (item.enableBadge) {
    tmp23Result = null;
    if (!isSoftAcked) {
      const items4 = [tmp.unreadIndicatorV2];
      let unreadIndicatorCompactV2 = compactMode;
      if (unreadIndicatorCompactV2) {
        unreadIndicatorCompactV2 = tmp.unreadIndicatorCompactV2;
      }
      let obj2 = { style: null };
      items4[1] = unreadIndicatorCompactV2;
      obj2.style = items4;
      tmp23Result = closure_21(closure_7, obj2);
    }
  }
  const items5 = [tmp23Result, ,];
  obj3 = { style: tmp.itemV2, children: closure_21(tmp2(tmp3[50]).ForYouItemImage, { item, compactMode }) };
  items5[1] = closure_21(closure_7, obj3);
  obj4 = { style: { flex: 1, flexDirection: "row" }, children: null };
  const obj5 = { style: tmp.col, children: null };
  const obj6 = { style: null, children: null };
  const items6 = [,];
  ({ rowText: arr7[0], rowTextV2: arr7[1] } = tmp);
  obj6.style = items6;
  obj7 = { variant: str, style: null, color: "text-default", children: null };
  const items7 = [, ,];
  ({ rowBody: arr8[0], rowBodyV2: arr8[1] } = tmp);
  let rowBodyAcked = isSoftAcked;
  if (rowBodyAcked) {
    rowBodyAcked = tmp.rowBodyAcked;
  }
  items7[2] = rowBodyAcked;
  obj7.style = items7;
  if (typeof tmp10 !== "string") {
    obj7.children = tmp10;
    const items8 = [tmp25(tmp2(tmp3[14]).Text, obj7)];
    const items9 = [, ,];
    ({ rowTime: arr10[0], rowTimeV2: arr10[1] } = tmp);
    let rowBodyAcked2 = isSoftAcked;
    if (rowBodyAcked2) {
      rowBodyAcked2 = tmp.rowBodyAcked;
    }
    const obj8 = {
      variant: "text-xs/medium",
      style: null,
      color: "text-default",
      accessibilityLabel: null,
      children: null,
    };
    items9[2] = rowBodyAcked2;
    obj8.style = items9;
    obj8.accessibilityLabel = tmp2(tmp3[51]).getRelativeTimestamp(extractTimestampResult, false);
    const tmp2Result1 = tmp2(tmp3[51]);
    obj8.children = tmp2(tmp3[51]).getRelativeTimestamp(extractTimestampResult);
    items8[1] = tmp25(tmp2(tmp3[14]).Text, obj8);
    obj6.children = items8;
    const items10 = [tmp21(tmp26, obj6), , , ,];
    let tmp25Result = item.type === tmp2(tmp3[33]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
    if (tmp25Result) {
      const obj9 = {
        styles: tmp.friendRequestNoteContainer,
        backgroundColor: tmp.friendRequestNoteContainer.backgroundColor,
        userId: null,
        analyticsLocation: "Notifications Tab",
      };
      const other_user = item.other_user;
      let id;
      if (other_user != null) {
        id = other_user.id;
      }
      if (id == null) {
        id = closure_19;
      }
      obj9.userId = id;
      tmp25Result = tmp25(rowIndex(tmp3[52]), obj9);
      const tmp19Result = rowIndex(tmp3[52]);
    }
    items10[1] = tmp25Result;
    const message = item.message;
    let content;
    if (message != null) {
      content = message.content;
    }
    tmp25Result = null;
    if (null != content) {
      const obj10 = { item, acked: isSoftAcked, compactMode, roleStyle };
      tmp25Result = tmp25(ForYouMessagePreviewV2, obj10);
    }
    items10[2] = tmp25Result;
    let tmp25Result1 = null;
    if (null != item.callout) {
      const obj11 = { item, acked: isSoftAcked, compactMode };
      tmp25Result1 = tmp25(Callout, obj11);
    }
    items10[3] = tmp25Result1;
    const obj12 = { children: tmp16 };
    items10[4] = tmp25(tmp26, obj12);
    obj5.children = items10;
    obj4.children = tmp21(tmp26, obj5);
    items5[2] = tmp25(tmp26, obj4);
    obj1.children = items5;
    return tmp21(tmp2(tmp3[49]).PressableHighlight, obj1);
  } else {
    isSoftAcked ? parserWithoutLinks(tmp10) : parserWithoutLinks1(tmp10);
  }
});
const obj19 = { marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
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
  let obj = loadMore(onSoftAckItem[25]);
  items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_9.roleStyle);
  let obj1 = loadMore(onSoftAckItem[25]);
  const items1 = [onPressLoad];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => callback.isRefreshing());
  const ChannelListLayoutSetting = loadMore(onSoftAckItem[54]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp8 = setting1 === loadMore(onSoftAckItem[55]).ChannelListLayoutTypes.COMPACT;
  const compactMode = tmp8;
  const items2 = [loadMore];
  onPressLoad = suggestedFriendAdded.useCallback(() => {
    loadMore(true);
  }, items2);
  const items3 = [
    tmp.forYouDivider,
    suggestedFriendAdded,
    onAddSuggestionAnimationFinish,
    stateFromStores,
    setting,
    isSoftAcked,
    onSoftAckItem,
    forceHoistItem,
    isForceHoisted,
    tmp8,
    onPressLoad,
    flag,
  ];
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
        let obj = { showDivider: item.showDivider };
        return __initData(ForYouSuggestedFriendsSectionHeaderDefault, obj);
      case "suggested-friends-row":
        obj = {
          suggestedFriend: item.suggestedFriend,
          onAddSuggestion: suggestedFriendAdded,
          onAddSuggestionAnimationFinish,
          panelVariant: flag,
        };
        return __initData(ForYouSuggestedFriendRowDefault, obj);
      case "suggested-friends-show-all-row":
        const obj1 = { suggestedFriends: item.suggestedFriends, panelVariant: flag };
        return __initData(ForYouShowAllRow.ForYouSuggestedFriendShowAllRow, obj1);
      case "for-you-divider":
        const obj2 = { style: closure_9.forYouDivider };
        return __initData(React5, obj2);
      case "notification-center-item":
        const obj3 = { children: null };
        const obj4 = {
          item,
          ackedBeforeId: setting,
          isSoftAcked: isSoftAcked(item.id),
          onSoftAckItem,
          forceHoistItem,
          isForceHoisted,
          rowIndex: tmp,
          compactMode,
          roleStyle: stateFromStores,
        };
        const _HermesInternal = HermesInternal;
        obj3.children = __initData(closure_35, obj4, "" + item.id + "-" + stateFromStores);
        return __initData(_mod675.ErrorBoundary, obj3);
      case "mentions-placeholder":
        return __initData(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
      case "unread-cleared-placeholder":
        return __initData(ForYouUnreadClearedState.ForYouUnreadClearedState, {});
      case "load-more":
        obj = { onPressLoad };
        return __initData(ForYouLoadMore.ForYouLoadMore, obj);
      default:
        GlobalUtils.assertNever(item);
    }
  }, items3);
  const ref = suggestedFriendAdded.useRef(null);
  const items4 = [shouldScrollToTop];
  const effect = suggestedFriendAdded.useEffect(() => {
    if (shouldScrollToTop) {
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ animated: false, offset: 0 });
      }
    }
  }, items4);
  const items5 = [stateFromStores1];
  const callback2 = suggestedFriendAdded.useCallback(() => {
    if (!stateFromStores1) {
      NotificationCenterStoreActions.refreshNotifications();
    }
  }, items5);
  const tmp14 = isForceHoisted(suggestedFriendAdded.useState(0), 2);
  closure_16 = tmp14[1];
  obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      return closure_16(nativeEvent.nativeEvent.layout.height);
    },
    children: null,
  };
  let tmp17 = !nestedInLaunchPad;
  if (!nestedInLaunchPad) {
    obj = { scrollRef: ref };
    tmp17 = closure_21(ScrollToTopRef, obj);
  }
  const items6 = [tmp17];
  obj1 = {
    ref,
    data: items,
    ListEmptyComponent: closure_21(tmp2(tmp3[68]).ForYouEmptyState, { height: tmp14[0] }),
    onScroll,
    refreshControl: closure_21(flag, {
      onRefresh: callback2,
      refreshing: stateFromStores1,
      tintColor: tmp.refreshSpinner.color,
    }),
    keyExtractor: extractKey,
    renderItem: callback1,
    extraData: setting,
    onEndReached: loadMore,
    onEndReachedThreshold: 0.8,
    ListFooterComponent: closure_21(ForYouFooter, { loading: loadingMore }),
    viewabilityConfig,
  };
  items6[1] = closure_21(loadMore(onSoftAckItem[67]).FlashList, obj1);
  obj.children = items6;
  return closure_22(onAddSuggestionAnimationFinish, obj);
});
