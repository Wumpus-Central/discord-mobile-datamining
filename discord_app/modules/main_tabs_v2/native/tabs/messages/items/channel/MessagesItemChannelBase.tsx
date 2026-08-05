// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx
import importAllResult from "openChannelLongPressActionSheet";
import { View } from "module_4295";
import sortActivity from "sortActivity";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ActivityTypes } from "ME";
import jsxProd from "getChannelA11yLabel";
import createCacheKey from "createCacheKey";

let closure_12;
let map1;
const require = arg1;
let c3 = importAllResult;
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { marginBottom: 1, borderRadius: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").radii.md, marginHorizontal: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_8, paddingHorizontal: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_8, paddingVertical: null, marginVertical: null, flexDirection: "row", alignItems: "center", flex: 1 };
  let num = 0;
  if (!arg0) {
    num = tmp(712).space.PX_8;
  }
  obj[4] = num;
  let PX_4;
  if (arg0) {
    PX_4 = tmp(712).space.PX_4;
  }
  obj = { pressable: obj, nameplate: null, rowActive: null, selectedBorder: null, rowSelected: null };
  obj[5] = PX_4;
  obj = { borderRadius: tmp(712).radii.md };
  obj[1] = obj;
  obj[2] = { backgroundColor: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const obj1 = { backgroundColor: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj[3] = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").colors.BORDER_MUTED, borderRadius: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").radii.md };
  const obj2 = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").colors.BORDER_MUTED, borderRadius: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").radii.md };
  obj[4] = { borderRadius: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").radii.md, backgroundColor: require("../../../../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const memoResult = importAllResult.memo(function MessagesItemChannelBase(channel) {
  let activities;
  let blocked;
  let favorite;
  let hasUnreadMessages;
  let ignored;
  let isIncomingCall;
  let isOngoingCall;
  let mentionCount;
  let muted;
  let resolvedUnreadSetting;
  let status;
  channel = channel.channel;
  const height = channel.height;
  const isPressed = channel.isPressed;
  const setIsPressed = channel.setIsPressed;
  let stateFromStores;
  let c5;
  let c6;
  let obj = channel(isPressed[12]);
  let items = [handleConnectionOpen];
  stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const channelId = outer1_8.getChannelId(null);
    if (channel != null) {
      id = channel.id;
    }
    return channelId === id;
  });
  const tmp5 = callback(height(isPressed[13])("MessagesItemChannelBase"));
  c5 = tmp5;
  let obj1 = setIsPressed;
  const items1 = [height];
  const items2 = [tmp5, stateFromStores];
  const memo = setIsPressed.useMemo(() => ({ height, overflow: "hidden" }), items1);
  const memo1 = setIsPressed.useMemo(() => {
    const items = [_undefined.pressable, ];
    let rowSelected;
    if (stateFromStores) {
      rowSelected = _undefined.rowSelected;
    }
    items[1] = rowSelected;
    return items;
  }, items2);
  let obj2 = channel(isPressed[12]);
  const items3 = [c5];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items3, () => {
    let obj = channel;
    if (channel.isDM()) {
      const activities = _undefined.getActivities(obj.getRecipientId());
    }
    if (obj.isDM()) {
      obj = { status: null, activities: null };
      obj[0] = _undefined.getStatus(obj.getRecipientId());
      obj[1] = activities;
    } else {
      obj = { status: "body", activities: "useStateFromStores" };
    }
    return obj;
  });
  ({ status, activities } = stateFromStoresObject);
  let obj3 = channel(isPressed[12]);
  const items4 = [c6];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items4, () => {
    let obj = _undefined2;
    const mentionCount = _undefined2.getMentionCount(channel.id);
    obj = { mentionCount, hasUnreadMessages: null };
    let tmp2 = mentionCount > 0;
    if (!tmp2) {
      tmp2 = null != obj2.getGuildId() && obj.hasUnread(obj2.id);
      const tmp4 = null != obj2.getGuildId() && obj.hasUnread(obj2.id);
    }
    obj[1] = tmp2;
    return obj;
  });
  ({ hasUnreadMessages, mentionCount } = stateFromStoresObject1);
  ({ isIncomingCall, isOngoingCall } = height(isPressed[14])(channel.id));
  let obj4 = channel(isPressed[12]);
  const items5 = [updateUserGuildSettingsInternal];
  const stateFromStoresObject2 = obj4.useStateFromStoresObject(items5, () => ({ resolvedUnreadSetting: outer1_9.resolveUnreadSetting(channel), muted: outer1_9.isChannelMuted(channel.getGuildId(), channel.id), favorite: outer1_9.isMessagesFavorite(channel.id) }));
  ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
  let obj5 = channel(isPressed[12]);
  const items6 = [upsertRelationship];
  const stateFromStoresObject3 = obj5.useStateFromStoresObject(items6, () => {
    let obj = channel;
    let isIgnoredResult = channel.isDM();
    if (isIgnoredResult) {
      isIgnoredResult = outer1_7.isIgnored(obj.getRecipientId());
    }
    obj = { ignored: isIgnoredResult, blocked: null };
    let isBlockedResult = obj.isDM();
    if (isBlockedResult) {
      isBlockedResult = outer1_7.isBlocked(obj.getRecipientId());
    }
    obj[1] = isBlockedResult;
    return obj;
  });
  ({ ignored, blocked } = stateFromStoresObject3);
  let obj6 = channel(isPressed[12]);
  const items7 = [mergeGuildAvatar];
  const stateFromStores1 = obj6.useStateFromStores(items7, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return outer1_10.getUser(recipientId);
  });
  const tmp10 = height(isPressed[14])(channel.id);
  const nameplate = channel(isPressed[15]).useNameplate({ user: stateFromStores1 });
  let tmp15 = null != nameplate;
  if (tmp15) {
    let tmp16 = stateFromStores;
    if (!stateFromStores) {
      tmp16 = isPressed;
    }
    tmp15 = tmp16;
  }
  c6 = tmp15;
  const items8 = [stateFromStores, tmp15, isPressed, tmp5];
  const items9 = [, , ];
  ({ guild_id: arr10[0], id: arr10[1] } = channel);
  items9[2] = setIsPressed;
  const memo2 = obj1.useMemo(() => {
    let tmp = null;
    if (obj.isIOS()) {
      if (c6) {
        tmp = null;
      } else if (isPressed) {
        let backgroundColor = _undefined.rowActive.backgroundColor;
      } else if (stateFromStores) {
        backgroundColor = _undefined.rowSelected.backgroundColor;
      }
    }
    return tmp;
  }, items8);
  const items10 = [setIsPressed];
  callback = obj1.useCallback(() => {
    height(isPressed[17]).preload(channel.guild_id, channel.id);
    setIsPressed(true);
  }, items9);
  const items11 = [channel.id];
  const callback1 = obj1.useCallback(() => {
    setIsPressed(false);
  }, items10);
  const items12 = [channel.id];
  const callback2 = obj1.useCallback(() => {
    channel(isPressed[18]).transitionToChannel(channel.id);
  }, items11);
  obj = { style: memo, collapsable: false, children: null };
  const callback3 = obj1.useCallback(() => {
    const result = channel(isPressed[19]).openChannelLongPressActionSheet(channel.id);
  }, items12);
  obj = { onPressIn: callback, onPressOut: callback1, onPress: callback2, onLongPress: callback3, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, underlayColor: null, style: null, children: null };
  obj[5] = height(isPressed[21])({ channel, unread: hasUnreadMessages, mentionCount, isIncomingCall, isOngoingCall });
  const obj8 = channel(isPressed[15]);
  const tmp24 = closure_13;
  obj[6] = channel(isPressed[21]).getChannelA11yHint({ channel, muted, userStatus: status, isFavorite: favorite });
  obj[7] = tmp5.rowActive.backgroundColor;
  obj[8] = memo1;
  let tmp26;
  let tmp4Result = tmp4(tmp2[22]);
  if (tmp15) {
    tmp26 = nameplate;
  }
  obj1 = { nameplate: tmp26, isFocused: stateFromStores, isPressed, isMuted: null, fadeIn: null, style: null };
  let tmp27 = muted;
  if (!muted) {
    tmp27 = ignored;
  }
  if (!tmp27) {
    tmp27 = blocked;
  }
  obj1[3] = tmp27;
  obj1[4] = isPressed;
  obj1[5] = tmp5.nameplate;
  const items13 = [closure_12(tmp4Result, obj1), , , , ];
  let tmp22Result = stateFromStores;
  if (stateFromStores) {
    obj2 = { style: null, pointerEvents: "none" };
    obj2[0] = tmp5.selectedBorder;
    tmp22Result = tmp22(tmp23, obj2);
  }
  items13[1] = tmp22Result;
  obj3 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted, layout: null, panelVariant: true };
  tmp4Result = tmp4(tmp2[23]);
  obj3[3] = channel(isPressed[24]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  items13[2] = closure_12(tmp4Result, obj3);
  obj4 = { backgroundColor: memo2, children: null };
  obj5 = { channel, channelSelected: stateFromStores, hasUnreadMessages, muted, ignored, blocked, isStreaming: null, status: null };
  const tmpResult = channel(isPressed[21]);
  obj5[6] = height(isPressed[27])(activities);
  obj5[7] = status;
  obj4[1] = closure_12(height(isPressed[26]), obj5);
  items13[3] = closure_12(channel(isPressed[25]).CutoutBackgroundProvider, obj4);
  obj6 = { channel, channelSelected: stateFromStores, favorite, muted, ignored, blocked, hasActivity: null, hasUnreadMessages: null, resolvedUnreadSetting: null, hasNameplate: null };
  let someResult;
  const tmp4Result1 = height(isPressed[26]);
  if (activities != null) {
    someResult = activities.some((type) => type.type !== constants.CUSTOM_STATUS);
  }
  obj6[6] = true === someResult;
  obj6[7] = hasUnreadMessages;
  obj6[8] = resolvedUnreadSetting;
  obj6[9] = tmp15;
  items13[4] = closure_12(height(isPressed[28]), obj6);
  obj[9] = items13;
  obj[2] = tmp24(channel(isPressed[20]).PressableHighlight, obj);
  return closure_12(stateFromStores, obj);
});
let result = require("sortActivity").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx");

export default memoResult;
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;