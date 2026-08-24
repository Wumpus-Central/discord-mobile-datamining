// discord_app/modules/notification_center/native/ForYouItems.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import createRulesAll from "../../markup/CustomMarkup.native.tsx";
import ApplicationIconAndNameDefault from "../../user_profile/native/ApplicationIconAndName.tsx";
import ForYouMentionPlaceholder from "ForYouMentionPlaceholder.tsx";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../../a11y/AccessibilityStore.tsx";
import closure_10 from "../../applications/ApplicationStore.tsx";
import closure_11 from "../../../stores/ChannelStore.tsx";
import closure_12 from "../../../stores/GuildStore.tsx";
import closure_13 from "../../../stores/UserStore.tsx";
import closure_14 from "../NotificationCenterStore.tsx";
import ME from "../../../Constants.tsx";
import { NotificationTypes } from "../../push_notifications/PushNotificationConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ForYouFooter(loading) {
  let tmp = null;
  if (loading.loading) {
    tmp = callback(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
  }
  return tmp;
}
function Callout(arg0) {
  ({ item, acked, compactMode } = arg0);
  const tmp = callback6();
  let obj = createRulesAll;
  obj = { style: tmp.calloutContainer, pointerEvents: "none", children: null };
  obj = { style: tmp.messagePreviewBarV2 };
  const parser = obj.getParser(callback4());
  const items = [callback(closure_7, obj), ];
  obj1 = { style: items1, variant: "redesign/message-preview/medium", lineClamp: null, children: null };
  items1 = [acked ? tmp.calloutTextAcked : tmp.calloutTextNotAcked];
  let num = 10;
  if (compactMode) {
    num = 3;
  }
  obj1[2] = num;
  obj1[3] = parser(item.callout);
  items[1] = callback(Text.Text, obj1);
  obj[2] = items;
  return closure_22(closure_7, obj);
}
function ForYouMessagePreviewV2(item) {
  item = item.item;
  const acked = item.acked;
  let guild_id;
  let message_channel_id;
  ({ compactMode, roleStyle } = item);
  let messagePreviewIconV2 = callback6();
  let SMALL = dependencyMap;
  let obj = message_channel_id(4764);
  const notifCenterV2MessagePreviewParser = obj.getNotifCenterV2MessagePreviewParser(callback5(), closure_28, roleStyle);
  const intl = item(1236).intl;
  const stringResult = intl.string(item(1236).t.BOi07B);
  obj1 = item(1403);
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
  if (type === constants2.POLL_RESULT) {
    const message8 = item.message;
    let first;
    if (message8 != null) {
      embeds = message8.embeds;
      if (embeds != null) {
        first = embeds[0];
      }
    }
    const tmp15 = guild_id(8261)(first);
    let result = stringResult;
    if (null != tmp15) {
      let tmp2Result = tmp2(7508);
      result = tmp2Result.formatPollResultNotificationCenterText(tmp15);
    }
  } else if (stickers.length > 0) {
    const intl6 = tmp2(1236).intl;
    result = intl6.string(tmp2(1236).t["7K5Lma"]);
    let ATTACHMENT = constants3.STICKER;
  } else if (tmp7) {
    const intl5 = tmp2(1236).intl;
    result = intl5.string(tmp2(1236).t["2v7kfl"]);
  } else if (hasFlagResult) {
    const intl4 = tmp2(1236).intl;
    result = intl4.string(tmp2(1236).t["6bhHrc"]);
    ATTACHMENT = constants3.VOICE_MESSAGE;
  } else {
    tmp2Result = tmp2(1403);
    const message7 = item.message;
    let num2;
    if (message7 != null) {
      num2 = message7.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    if (tmp2Result.hasFlag(num2, tmp4.IS_COMPONENTS_V2)) {
      const intl3 = tmp2(1236).intl;
      result = intl3.string(tmp2(1236).t.Xxm5i3);
    } else {
      result = stringResult;
      if (tmp8) {
        const intl2 = tmp2(1236).intl;
        result = intl2.string(tmp2(1236).t.JAKsM8);
        ATTACHMENT = constants3.ATTACHMENT;
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
  hasFlagResult = obj1.hasFlag(num, constants.IS_VOICE_MESSAGE);
  tmp4 = constants;
  let items = [closure_12];
  const stateFromStores = item(589).useStateFromStores(items, () => closure_1_12.getGuild(guild_id));
  const tmp2Result1 = item(589);
  const items1 = [closure_11];
  const stateFromStores1 = item(589).useStateFromStores(items1, () => closure_1_11.getChannel(message_channel_id));
  const tmp2Result2 = item(589);
  const items2 = [closure_13];
  const stateFromStoresArray = item(589).useStateFromStoresArray(items2, () => {
    const message = item.message;
    let id;
    if (message != null) {
      id = message.author.id;
    }
    const items = [closure_1_13.getUser(id)];
    const message2 = item.message;
    let mapped;
    if (message2 != null) {
      const mentions = message2.mentions;
      if (mentions != null) {
        mapped = mentions.map((arg0) => user.getUser(arg0));
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
  const items3 = [callback(closure_7, obj), ];
  const items4 = [acked ? messagePreviewIconV2.messagePreviewTextV2Acked : messagePreviewIconV2.messagePreviewTextV2NotAcked, ];
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
  obj1[2] = num3;
  const tmp2Result3 = item(589);
  const obj2 = { content: result, guildId: guild_id, channelId: message_channel_id, messageId: item.message_id, authorId: null };
  const message10 = item.message;
  let id;
  if (message10 != null) {
    id = message10.author.id;
  }
  obj2[4] = id;
  let str2 = "text-default";
  if (acked) {
    str2 = "text-muted";
  }
  const items5 = [item(8315).renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj2, { textColor: str2 }), ];
  if (null == ATTACHMENT) {
    items5[1] = tmp26;
    obj1[3] = items5;
    items3[1] = tmp21(tmp2(4734).Text, obj1);
    obj[2] = items3;
    return tmp21(tmp22, obj);
  } else {
    const obj3 = { style: null, children: null };
    obj3[0] = messagePreviewIconV2.messagePreviewIconV2Container;
    if (constants3.ATTACHMENT === ATTACHMENT) {
      let tmp29 = guild_id(10447);
      const obj4 = { source: null, size: null, style: null };
      obj4[0] = tmp29;
      SMALL = tmp2(1297).IconSizes.SMALL;
      obj4[1] = SMALL;
      messagePreviewIconV2 = messagePreviewIconV2.messagePreviewIconV2;
      obj4[2] = messagePreviewIconV2;
      obj3[1] = tmp23(tmp27, obj4);
      tmp23(tmp22, obj3);
    } else if (tmp28.STICKER !== ATTACHMENT) {
      tmp29 = null;
      if (tmp28.VOICE_MESSAGE === ATTACHMENT) {
        tmp29 = guild_id(8122);
      }
    }
    tmp29 = guild_id(10250);
  }
}
function ApplicationName(applicationId) {
  applicationId = applicationId.applicationId;
  let obj = applicationId(589);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getApplication(applicationId));
  if (null == stateFromStores) {
    let tmp5 = callback(closure_7, {});
  } else {
    obj = { application: null, textVariant: null, iconSize: 16 };
    obj[0] = stateFromStores;
    obj[1] = applicationId.textVariant;
    tmp5 = callback(ApplicationIconAndNameDefault, obj, stateFromStores.id);
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
  const ref = importAllResult.useRef({
    scrollToTop() {
      const current = scrollRef.current;
      let scrollToTopResult;
      if (current != null) {
        scrollToTopResult = current.scrollToTop();
      }
      return scrollToTopResult;
    }
  });
  const scrollToTop = scrollRef(1501).useScrollToTop(ref);
  return null;
}
function extractKey(id) {
  return id.id;
}
({ View: error, RefreshControl: closure_8, StyleSheet } = get_ActivityIndicator);
({ AnalyticEvents: closure_15, MessageFlags: closure_16, AnalyticsLocations: closure_17, MessageTypes: closure_18, EMPTY_STRING_SNOWFLAKE_ID: closure_19 } = ME);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let closure_23 = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 1000 };
let obj = { strong: null };
obj = {};
const merged = Object.assign(require("Text").TextStyleSheet["text-md/medium"]);
obj.color = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
obj[0] = obj;
let closure_24 = createCacheKey.createStyles(obj);
createCacheKey = { strong: null };
let obj2 = {};
const merged1 = Object.assign(require("Text").TextStyleSheet["text-md/medium"]);
obj2.color = ThemesDefault.colors.TEXT_MUTED;
createCacheKey[0] = obj2;
let closure_25 = createCacheKey.createStyles(createCacheKey);
let obj3 = { mention: null };
createCacheKey = { color: ThemesDefault.colors.MENTION_FOREGROUND, backgroundColor: ThemesDefault.colors.MENTION_BACKGROUND };
obj3[0] = createCacheKey;
let closure_26 = createCacheKey.createStyles(obj3);
let obj5 = { mention: { color: ThemesDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" } };
let closure_27 = createCacheKey.createStyles(obj5);
let closure_28 = { channelMentionText: "redesign/message-preview/medium" };
createCacheKey = { container: { flex: 1 }, row: null, rowCompact: null, rowActive: null, col: null, unreadIndicatorV2: null, unreadIndicatorCompactV2: null, rowText: null, rowTextV2: null, rowBody: null, rowBodyV2: null, rowBodyAcked: null, rowTime: null, rowTimeV2: null, itemV2: null, calloutContainer: null, calloutTextAcked: null, calloutTextNotAcked: null, messagePreviewContainerV2: null, messagePreviewBarV2: null, messagePreviewIconV2Container: null, messagePreviewIconV2: null, messagePreviewTextV2Acked: null, messagePreviewTextV2NotAcked: null, messagePreviewSystemTextV2: null, refreshSpinner: null, forYouDivider: null, friendRequestNoteContainer: null };
let obj6 = { color: ThemesDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
createCacheKey[1] = { marginHorizontal: 4, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4, borderRadius: ThemesDefault.radii.lg, flexDirection: "row", justifyContent: "space-between" };
createCacheKey[2] = { paddingVertical: 6 };
let obj8 = { marginHorizontal: 4, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4, borderRadius: ThemesDefault.radii.lg, flexDirection: "row", justifyContent: "space-between" };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[4] = { flexDirection: "column", flex: 1 };
createCacheKey = { top: 28, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: ThemesDefault.radii.xs, position: "absolute", left: 4 };
createCacheKey[5] = createCacheKey;
createCacheKey[6] = { top: 18 };
createCacheKey[7] = { flex: 1 };
createCacheKey[8] = { flexDirection: "row", justifyContent: "space-between" };
createCacheKey[9] = { lineHeight: 20 };
createCacheKey[10] = { marginRight: 30 };
let obj9 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[11] = { color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[12] = { lineHeight: 20 };
createCacheKey[13] = { marginLeft: -24 };
createCacheKey[14] = { alignItems: "flex-start", marginRight: 4, marginLeft: 8 };
createCacheKey[15] = { marginTop: 4, flexDirection: "row", marginRight: 16 };
let obj11 = { color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[16] = { color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[17] = createCacheKey;
createCacheKey[18] = { marginTop: 4, flexDirection: "row", marginRight: 16 };
let obj12 = { color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[19] = { marginRight: 8, borderLeftColor: ThemesDefault.colors.BORDER_SUBTLE, borderLeftWidth: 3, borderRadius: 2, height: "auto" };
createCacheKey[20] = { paddingTop: 4 };
const obj14 = { marginRight: 8, borderLeftColor: ThemesDefault.colors.BORDER_SUBTLE, borderLeftWidth: 3, borderRadius: 2, height: "auto" };
createCacheKey[21] = { marginLeft: 4, tintColor: ThemesDefault.colors.TEXT_SUBTLE };
const obj15 = { marginLeft: 4, tintColor: ThemesDefault.colors.TEXT_SUBTLE };
createCacheKey[22] = { color: ThemesDefault.colors.TEXT_MUTED };
const obj16 = { color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[23] = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[24] = { fontStyle: "italic", fontWeight: "normal" };
const obj17 = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[25] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj18 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[26] = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_8 };
const obj19 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[27] = { marginTop: 4, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_29 = createCacheKey.createStyles(createCacheKey);
let closure_31 = { STICKER: "sticker", VOICE_MESSAGE: "voice_message", ATTACHMENT: "attachment" };
let closure_35 = importAllResult.memo((item) => {
  item = item.item;
  const rowIndex = item.rowIndex;
  ({ isSoftAcked, onSoftAckItem } = item);
  ({ forceHoistItem, isForceHoisted, compactMode } = item);
  let notificationCenterItemAcked;
  let navigation;
  let callback;
  let str;
  ({ ackedBeforeId, roleStyle } = item);
  const tmp = callback6();
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
      const obj = { payload: null, safe: true, navigationReplace: false };
      obj[0] = rowIndex(notificationCenterItemAcked[31])(tmp.deeplink).payload;
      rowIndex(notificationCenterItemAcked[32])(obj);
    }
  }, items);
  const items1 = [notificationCenterItemAcked, item, callback, rowIndex, onSoftAckItem, navigation];
  const callback1 = str.useCallback(() => {
    if (!notificationCenterItemAcked) {
      onSoftAckItem(item);
    }
    if (item.type === item(notificationCenterItemAcked[33]).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
      let obj = navigation;
      if (navigation != null) {
        obj.navigate("friends", { screen: "requests" });
      }
    }
    callback();
    obj = { action_type: item(tmp7[33]).NotificationCenterActionTypes.CLICKED, notification_center_id: tmp5.id, item_type: tmp5.type, acked: notificationCenterItemAcked, item_index: rowIndex, deeplink: tmp5.deeplink };
    rowIndex(notificationCenterItemAcked[34]).track(closure_1_15.NOTIFICATION_CENTER_ACTION, obj);
  }, items1);
  const items2 = [item];
  const callback2 = str.useCallback(() => {
    const items = [];
    if (item.type === item(notificationCenterItemAcked[33]).NotificationCenterItems.TRENDING_CONTENT) {
      let obj = { label: null, icon: null, IconComponent: null, onPress: null };
      let intl = tmp2(tmp3[18]).intl;
      obj[0] = intl.string(tmp2(tmp3[18]).t["gSMz/x"]);
      obj[1] = rowIndex(tmp3[35]);
      obj[2] = tmp2(tmp3[36]).LightbulbIcon;
      obj[3] = function onPress() {
        try {
          str = lib.deeplink;
          if (str == null) {
            str = "";
          }
          const match = str.match(/channels\/(\d*)\/(\d*)\/(\d*)\?summaryId=(\d*)/);
          if (null == match) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error("Invalid deeplink: " + tmp2.deeplink);
            throw error;
          } else {
            const tmp20 = closure_1_5(tmp5, 5);
            [r10045, tmp21] = tmp20;
            const obj3 = lib(closure_1_3[37]);
            let obj = { id: null, channel_id: null };
            obj[0] = tmp20[3];
            obj[1] = tmp20[2];
            obj = { summary_id: null };
            obj[0] = tmp20[4];
            const result = obj3.openGuildHighlightNotificationForPush(tmp21, obj, closure_1_20.TRENDING_CONTENT_PUSH, closure_1_17.NOTIFICATION_CENTER, obj);
          }
          tmp2 = lib;
        } catch (err) {
          obj = closure_1_1(closure_1_3[38]);
          obj1 = { key: "USER_SURVEY_ERROR", content: null };
          const intl = lib(closure_1_3[18]).intl;
          obj1[1] = intl.string(lib(closure_1_3[18]).t.HO9Lf2);
          obj.open(obj1);
        }
      };
      items.push(obj);
      let tmp6 = rowIndex;
    } else {
      obj = { label: null, icon: null, IconComponent: null, onPress: null };
      const intl2 = tmp2(tmp3[18]).intl;
      obj[0] = intl2.string(tmp2(tmp3[18]).t["08rqg5"]);
      obj[1] = rowIndex(tmp3[35]);
      obj[2] = tmp2(tmp3[36]).LightbulbIcon;
      obj[3] = function onPress() {
        try {
          let obj = closure_1_1(closure_1_3[41]);
          obj = { notificationType: null, location: null };
          obj[0] = lib.type;
          obj[1] = closure_1_17.NOTIFICATION_CENTER;
          obj.openLazy(lib(closure_1_3[40])(closure_1_3[39], closure_1_3.paths), "NotificationSurvey", obj);
        } catch (err) {
          obj = { key: "USER_SURVEY_ERROR", content: null };
          const intl = lib(closure_1_3[18]).intl;
          obj[1] = intl.string(lib(closure_1_3[18]).t.HO9Lf2);
          closure_1_1(closure_1_3[38]).open(obj);
          const obj3 = closure_1_1(closure_1_3[38]);
        }
      };
      items.push(obj);
      tmp6 = rowIndex;
    }
    if (null == item.local_id) {
      obj = { label: null, icon: null, IconComponent: null, onPress: null };
      const intl3 = tmp2(tmp3[18]).intl;
      obj[0] = intl3.string(tmp2(tmp3[18]).t.D8z9ju);
      obj[1] = tmp6(tmp3[42]);
      obj[2] = tmp2(tmp3[43]).TrashIcon;
      item = navigation(function*() {
        callback = tmp3;
        c3 = 1;
        yield callback(closure_2_3[44]).deleteNotificationCenterItem(closure_1_0);
        if (1 === tmp7) {
          c3 = 0;
          obj1 = closure_2_1(closure_2_3[38]);
          const obj2 = { key: "REMOVE_NOTIFICATION_ERROR", content: null };
          const intl = callback(closure_2_3[18]).intl;
          obj2[1] = intl.string(callback(closure_2_3[18]).t.WDxhvB);
          obj1.open(obj2);
          c4 = 3;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      });
      obj[3] = function() {
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
    let result = item(notificationCenterItemAcked[45]).showSimpleActionSheet({ key: "ForYouItemLongPress", options: items, hasIcons: true });
  }, items2);
  [tmp10, tmp11] = callback(str.useState(undefined), 2);
  tmp2Result = tmp2(tmp3[46]);
  const itemActionButtonPropsV2 = tmp2Result.useItemActionButtonPropsV2(item, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, tmp11, compactMode);
  ({ actionButtons, actionsNode, accessibilityActions, onAccessibilityAction } = itemActionButtonPropsV2);
  let obj3 = onSoftAckItem(tmp3[16]);
  const parserWithoutLinks = obj3.getParserWithoutLinks(callback3());
  let obj4 = onSoftAckItem(tmp3[16]);
  const parserWithoutLinks1 = obj4.getParserWithoutLinks(callback2());
  let tmp15 = item.type === tmp2(tmp3[33]).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED;
  if (!tmp15) {
    tmp15 = item.type === tmp2(tmp3[33]).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED;
  }
  if (notificationCenterItemAcked) {
    notificationCenterItemAcked = !tmp15;
  }
  let tmp16 = null;
  if (!notificationCenterItemAcked) {
    obj = { "aria-hidden": true, accessibilityLabel: "", item: null, rowIndex: null, onSoftAckItem: null, actionButtons: null, actionsNode: null, compactMode: null };
    obj[2] = item;
    obj[3] = rowIndex;
    obj[4] = onSoftAckItem;
    obj[5] = actionButtons;
    obj[6] = actionsNode;
    obj[7] = compactMode;
    tmp16 = callback(tmp2(tmp3[46]).ForYouItemActionButtons, obj);
  }
  str = "text-md/semibold";
  if (isSoftAcked) {
    str = "text-md/medium";
  }
  if (tmp10 == null) {
    obj = { item: null, renderApplication: null };
    obj[0] = item;
    obj[1] = function renderApplication(applicationId) {
      return closure_1_21(closure_1_34, { applicationId, textVariant: str });
    };
    tmp10 = rowIndex(tmp3[47])(obj);
  }
  let obj7 = rowIndex(tmp3[48]);
  const extractTimestampResult = obj7.extractTimestamp(item.id);
  obj1 = { accessibilityRole: "button", accessibilityActions, onAccessibilityAction, style: null, onPress: null, onAccessibilityTap: null, onLongPress: null, underlayColor: null, children: null };
  const items3 = [tmp.row, ];
  let rowCompact = compactMode;
  if (rowCompact) {
    rowCompact = tmp.rowCompact;
  }
  items3[1] = rowCompact;
  obj1[3] = items3;
  obj1[4] = callback1;
  obj1[5] = callback1;
  obj1[6] = callback2;
  obj1[7] = tmp.rowActive.backgroundColor;
  let tmp23Result = null;
  if (item.enableBadge) {
    tmp23Result = null;
    if (!isSoftAcked) {
      const items4 = [tmp.unreadIndicatorV2, ];
      let unreadIndicatorCompactV2 = compactMode;
      if (unreadIndicatorCompactV2) {
        unreadIndicatorCompactV2 = tmp.unreadIndicatorCompactV2;
      }
      let obj2 = { style: null };
      items4[1] = unreadIndicatorCompactV2;
      obj2[0] = items4;
      tmp23Result = callback(closure_7, obj2);
      const tmp23 = callback;
      const tmp24 = closure_7;
    }
  }
  const items5 = [tmp23Result, , ];
  obj3 = { style: tmp.itemV2, children: callback(tmp2(tmp3[50]).ForYouItemImage, { item, compactMode }) };
  items5[1] = callback(closure_7, obj3);
  obj4 = { style: { flex: 1, flexDirection: "row" }, children: null };
  const obj5 = { style: tmp.col, children: null };
  const obj6 = { style: items6, children: null };
  items6 = [, ];
  ({ rowText: arr7[0], rowTextV2: arr7[1] } = tmp);
  obj7 = { variant: str, style: null, color: "text-default", children: null };
  const items7 = [, , ];
  ({ rowBody: arr8[0], rowBodyV2: arr8[1] } = tmp);
  let rowBodyAcked = isSoftAcked;
  if (rowBodyAcked) {
    rowBodyAcked = tmp.rowBodyAcked;
  }
  items7[2] = rowBodyAcked;
  obj7[1] = items7;
  if (typeof tmp10 !== "string") {
    obj7[3] = tmp10;
    const items8 = [tmp25(tmp2(tmp3[14]).Text, obj7), ];
    const items9 = [, , ];
    ({ rowTime: arr10[0], rowTimeV2: arr10[1] } = tmp);
    let rowBodyAcked2 = isSoftAcked;
    if (rowBodyAcked2) {
      rowBodyAcked2 = tmp.rowBodyAcked;
    }
    const obj8 = { variant: "text-xs/medium", style: null, color: "text-default", accessibilityLabel: null, children: null };
    items9[2] = rowBodyAcked2;
    obj8[1] = items9;
    obj8[3] = tmp2(tmp3[51]).getRelativeTimestamp(extractTimestampResult, false);
    const tmp2Result1 = tmp2(tmp3[51]);
    obj8[4] = tmp2(tmp3[51]).getRelativeTimestamp(extractTimestampResult);
    items8[1] = tmp25(tmp2(tmp3[14]).Text, obj8);
    obj6[1] = items8;
    const items10 = [tmp21(tmp26, obj6), , , , ];
    let tmp25Result = item.type === tmp2(tmp3[33]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
    if (tmp25Result) {
      const obj9 = { styles: null, backgroundColor: null, userId: null, analyticsLocation: "Notifications Tab" };
      obj9[0] = tmp.friendRequestNoteContainer;
      obj9[1] = tmp.friendRequestNoteContainer.backgroundColor;
      const other_user = item.other_user;
      let id;
      if (other_user != null) {
        id = other_user.id;
      }
      if (id == null) {
        id = closure_19;
      }
      obj9[2] = id;
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
      const obj10 = { item: null, acked: null, compactMode: null, roleStyle: null };
      obj10[0] = item;
      obj10[1] = isSoftAcked;
      obj10[2] = compactMode;
      obj10[3] = roleStyle;
      tmp25Result = tmp25(ForYouMessagePreviewV2, obj10);
    }
    items10[2] = tmp25Result;
    let tmp25Result1 = null;
    if (null != item.callout) {
      const obj11 = { item: null, acked: null, compactMode: null };
      obj11[0] = item;
      obj11[1] = isSoftAcked;
      obj11[2] = compactMode;
      tmp25Result1 = tmp25(Callout, obj11);
    }
    items10[3] = tmp25Result1;
    const obj12 = { children: null };
    obj12[0] = tmp16;
    items10[4] = tmp25(tmp26, obj12);
    obj5[1] = items10;
    obj4[1] = tmp21(tmp26, obj5);
    items5[2] = tmp25(tmp26, obj4);
    obj1[8] = items5;
    return tmp21(tmp2(tmp3[49]).PressableHighlight, obj1);
  } else {
    isSoftAcked ? parserWithoutLinks(tmp10) : parserWithoutLinks1(tmp10);
  }
});
const obj20 = { marginTop: 4, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
const memoResult = importAllResult.memo((loadMore) => {
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
  closure_9 = undefined;
  let setting;
  let stateFromStores;
  let stateFromStores1;
  closure_13 = undefined;
  let callback;
  let ref;
  closure_16 = undefined;
  const tmp = callback6();
  closure_9 = tmp;
  const NotificationCenterAckedBeforeId = loadMore(onSoftAckItem[54]).NotificationCenterAckedBeforeId;
  setting = NotificationCenterAckedBeforeId.useSetting();
  let obj = loadMore(onSoftAckItem[25]);
  items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  obj1 = loadMore(onSoftAckItem[25]);
  const items1 = [callback];
  stateFromStores1 = obj1.useStateFromStores(items1, () => callback.isRefreshing());
  const ChannelListLayoutSetting = loadMore(onSoftAckItem[54]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp8 = setting1 === loadMore(onSoftAckItem[55]).ChannelListLayoutTypes.COMPACT;
  closure_13 = tmp8;
  const items2 = [loadMore];
  callback = suggestedFriendAdded.useCallback(() => {
    loadMore(true);
  }, items2);
  const items3 = [tmp.forYouDivider, suggestedFriendAdded, onAddSuggestionAnimationFinish, stateFromStores, setting, isSoftAcked, onSoftAckItem, forceHoistItem, isForceHoisted, tmp8, callback, flag];
  const callback1 = suggestedFriendAdded.useCallback((arg0) => {

  }, items3);
  ref = suggestedFriendAdded.useRef(null);
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
      loadMore(onSoftAckItem[66]).refreshNotifications();
      const obj = loadMore(onSoftAckItem[66]);
    }
  }, items5);
  const tmp14 = isForceHoisted(suggestedFriendAdded.useState(0), 2);
  closure_16 = tmp14[1];
  obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      return callback(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  let tmp17 = !nestedInLaunchPad;
  if (!nestedInLaunchPad) {
    obj = { scrollRef: null };
    obj[0] = ref;
    tmp17 = callback(ScrollToTopRef, obj);
  }
  const items6 = [tmp17, ];
  obj1 = { ref, data: items, ListEmptyComponent: callback(tmp2(tmp3[68]).ForYouEmptyState, { height: tmp14[0] }), onScroll, refreshControl: callback(flag, obj2), keyExtractor: extractKey, renderItem: callback1, extraData: setting, onEndReached: loadMore, onEndReachedThreshold: 0.8, ListFooterComponent: callback(ForYouFooter, { loading: loadingMore }), viewabilityConfig: closure_23 };
  items6[1] = callback(loadMore(onSoftAckItem[67]).FlashList, obj1);
  obj[2] = items6;
  return closure_22(onAddSuggestionAnimationFinish, obj);
});
let result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouItems.tsx");

export const ForYouItems = memoResult;