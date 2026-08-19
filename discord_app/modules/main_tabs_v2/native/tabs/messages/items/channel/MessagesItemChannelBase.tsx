// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx
import ThemesDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import sortActivity from "../../../../../../../stores/PresenceStore.tsx";
import generateOldThreadCutoff from "../../../../../../../stores/ReadStateStore.tsx";
import markAllUserIdListsStale from "../../../../../../../stores/RelationshipStore.tsx";
import handleConnectionOpen from "../../../../../../../stores/SelectedChannelStore.tsx";
import updateUserGuildSettingsInternal from "../../../../../../../stores/UserGuildSettingsStore.tsx";
import mergeGuildAvatar from "../../../../../../../stores/UserStore.tsx";
import { ActivityTypes } from "../../../../../../../Constants.tsx";
import jsxProd from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let c3 = importAllResult;
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { marginBottom: 1, borderRadius: ThemesDefault.radii.md, marginHorizontal: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: null, marginVertical: null, flexDirection: "row", alignItems: "center", flex: 1 };
  let num = 0;
  if (!arg0) {
    num = ThemesDefault.space.PX_8;
  }
  obj[4] = num;
  let PX_4;
  if (arg0) {
    PX_4 = ThemesDefault.space.PX_4;
  }
  obj = { pressable: obj, nameplate: null, rowActive: null, selectedBorder: null, rowSelected: null };
  obj[5] = PX_4;
  obj = { borderRadius: ThemesDefault.radii.md };
  obj[1] = obj;
  obj[2] = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj[3] = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, borderRadius: ThemesDefault.radii.md };
  obj[4] = { borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const memoResult = importAllResult.memo(function MessagesItemChannelBase(channel) {
  channel = channel.channel;
  const height = channel.height;
  const setIsPressed = channel.setIsPressed;
  let isPressed;
  let obj = channel(isPressed[12]);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const channelId = closure_1_8.getChannelId(null);
    if (channel != null) {
      id = channel.id;
    }
    return channelId === id;
  });
  const tmp5 = callback(height(isPressed[13])("MessagesItemChannelBase"));
  closure_5 = tmp5;
  obj1 = setIsPressed;
  const items1 = [height];
  const items2 = [tmp5, stateFromStores];
  const memo = setIsPressed.useMemo(() => ({ height, overflow: "hidden" }), items1);
  const memo1 = setIsPressed.useMemo(() => {
    const items = [store.pressable, ];
    let rowSelected;
    if (stateFromStores) {
      rowSelected = store.rowSelected;
    }
    items[1] = rowSelected;
    return items;
  }, items2);
  let obj2 = channel(isPressed[12]);
  const items3 = [closure_5];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items3, () => {
    let obj = channel;
    if (channel.isDM()) {
      const activities = store.getActivities(obj.getRecipientId());
    }
    if (obj.isDM()) {
      obj = { status: null, activities: null };
      obj[0] = store.getStatus(obj.getRecipientId());
      obj[1] = activities;
    } else {
      obj = { status: "r", activities: "accessibilityRole" };
    }
    return obj;
  });
  ({ status, activities } = stateFromStoresObject);
  let obj3 = channel(isPressed[12]);
  const items4 = [isPressed];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items4, () => {
    const mentionCount = isPressed.getMentionCount(channel.id);
    const obj = { mentionCount, hasUnreadMessages: null };
    let tmp2 = mentionCount > 0;
    if (!tmp2) {
      tmp2 = null != channel.getGuildId() && obj.hasUnread(channel.id);
      const tmp4 = null != channel.getGuildId() && obj.hasUnread(channel.id);
    }
    obj[1] = tmp2;
    return obj;
  });
  ({ hasUnreadMessages, mentionCount } = stateFromStoresObject1);
  ({ isIncomingCall, isOngoingCall } = height(isPressed[14])(channel.id));
  let obj4 = channel(isPressed[12]);
  const items5 = [closure_9];
  const stateFromStoresObject2 = obj4.useStateFromStoresObject(items5, () => ({ resolvedUnreadSetting: closure_1_9.resolveUnreadSetting(channel), muted: closure_1_9.isChannelMuted(channel.getGuildId(), channel.id), favorite: closure_1_9.isMessagesFavorite(channel.id) }));
  ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
  let obj5 = channel(isPressed[12]);
  const items6 = [closure_7];
  const stateFromStoresObject3 = obj5.useStateFromStoresObject(items6, () => {
    let obj = channel;
    let isIgnoredResult = channel.isDM();
    if (isIgnoredResult) {
      isIgnoredResult = closure_1_7.isIgnored(obj.getRecipientId());
    }
    obj = { ignored: isIgnoredResult, blocked: null };
    let isBlockedResult = obj.isDM();
    if (isBlockedResult) {
      isBlockedResult = closure_1_7.isBlocked(obj.getRecipientId());
    }
    obj[1] = isBlockedResult;
    return obj;
  });
  ({ ignored, blocked } = stateFromStoresObject3);
  let obj6 = channel(isPressed[12]);
  const items7 = [closure_10];
  const stateFromStores1 = obj6.useStateFromStores(items7, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return closure_1_10.getUser(recipientId);
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
  isPressed = tmp15;
  const items8 = [stateFromStores, tmp15, isPressed, tmp5];
  const items9 = [, , ];
  ({ guild_id: arr10[0], id: arr10[1] } = channel);
  items9[2] = setIsPressed;
  const memo2 = obj1.useMemo(() => {
    let tmp = null;
    if (obj.isIOS()) {
      if (isPressed) {
        tmp = null;
      } else if (isPressed) {
        let backgroundColor = store.rowActive.backgroundColor;
      } else if (stateFromStores) {
        backgroundColor = store.rowSelected.backgroundColor;
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
  const callback3 = obj1.useCallback(() => {
    const result = channel(isPressed[19]).openChannelLongPressActionSheet(channel.id);
  }, items12);
  obj = { onPressIn: callback, onPressOut: callback1, onPress: callback2, onLongPress: callback3, accessibilityRole: "button", accessibilityLabel: tmp4(tmp2[21])({ channel, unread: hasUnreadMessages, mentionCount, isIncomingCall, isOngoingCall }), accessibilityHint: null, underlayColor: null, style: null, children: null };
  const obj8 = channel(isPressed[15]);
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
  const items13 = [callback(tmp4Result, obj1), , , , ];
  let tmp22Result = stateFromStores;
  if (stateFromStores) {
    obj2 = { style: null, pointerEvents: "none" };
    obj2[0] = tmp5.selectedBorder;
    tmp22Result = callback(tmp23, obj2);
  }
  items13[1] = tmp22Result;
  obj3 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted, layout: null, panelVariant: true };
  tmp4Result = tmp4(tmp2[23]);
  obj3[3] = channel(isPressed[24]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  items13[2] = callback(tmp4Result, obj3);
  obj4 = { backgroundColor: memo2, children: null };
  obj5 = { channel, channelSelected: stateFromStores, hasUnreadMessages, muted, ignored, blocked, isStreaming: null, status: null };
  const tmpResult = channel(isPressed[21]);
  obj5[6] = height(isPressed[27])(activities);
  obj5[7] = status;
  obj4[1] = callback(height(isPressed[26]), obj5);
  items13[3] = callback(channel(isPressed[25]).CutoutBackgroundProvider, obj4);
  obj6 = { channel, channelSelected: stateFromStores, favorite, muted, ignored, blocked, hasActivity: null, hasUnreadMessages: null, resolvedUnreadSetting: null, hasNameplate: null };
  let someResult;
  const tmp4Result1 = height(isPressed[26]);
  if (activities != null) {
    someResult = activities.some((item, index) => item.type !== constants.CUSTOM_STATUS);
  }
  obj6[6] = true === someResult;
  obj6[7] = hasUnreadMessages;
  obj6[8] = resolvedUnreadSetting;
  obj6[9] = tmp15;
  items13[4] = callback(height(isPressed[28]), obj6);
  obj[9] = items13;
  obj[2] = callback2(channel(isPressed[20]).PressableHighlight, obj);
  return callback(stateFromStores, obj);
});
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx");

export default memoResult;
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;