// === Module 16434: MessagesItemChannelBase ===

// Module 16434 (MessagesItemChannelBase)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4838 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4840 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11259 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4867 */;
import ReadStateStore from "ReadStateStore" /* 4842 */;
import RelationshipStore from "RelationshipStore" /* 4472 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5008 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4827);
let closure_14 = createStyles.createStyles(() => {
  const obj = { pressable: { marginBottom: 1, borderRadius: nativeDefault.radii.md, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", flex: 1 }, nameplate: null, rowActive: null, selectedBorder: null, rowSelected: null };
  const obj2 = { marginBottom: 1, borderRadius: nativeDefault.radii.md, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", flex: 1 };
  obj.nameplate = { borderRadius: nativeDefault.radii.md };
  const obj3 = { borderRadius: nativeDefault.radii.md };
  obj.rowActive = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md };
  obj.selectedBorder = rect;
  const obj4 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.rowSelected = { borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx");

export default noop.memo(function MessagesItemChannelBase(channel) {
  channel = channel.channel;
  const height = channel.height;
  const setIsPressed = channel.setIsPressed;
  let isPressed;
  let items = [SelectedChannelStore];
  const stateFromStores = channel(isPressed[12]).useStateFromStores(items, () => {
    let id;
    const channelId = SelectedChannelStore.getChannelId(null);
    if (channel != null) {
      id = channel.id;
    }
    return channelId === id;
  });
  let tmp4 = closure_14();
  closure_5 = tmp4;
  const items1 = [height];
  const items2 = [tmp4, stateFromStores];
  const memo = setIsPressed.useMemo(() => ({ height, overflow: "hidden" }), items1);
  const memo1 = setIsPressed.useMemo(() => {
    const items = [closure_5.pressable, ];
    let rowSelected;
    if (stateFromStores) {
      rowSelected = closure_5.rowSelected;
    }
    items[1] = rowSelected;
    return items;
  }, items2);
  const obj = channel(isPressed[12]);
  const items3 = [closure_5];
  const stateFromStoresObject = channel(isPressed[12]).useStateFromStoresObject(items3, () => {
    if (channel.isDM()) {
      const activities = PresenceStore.getActivities(channel.getRecipientId());
    }
    if (channel.isDM()) {
      const obj2 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
      let obj3 = obj2;
    } else {
      obj3 = { status: "Array", activities: "flex" };
    }
    return obj3;
  });
  ({ status, activities } = stateFromStoresObject);
  let obj3 = channel(isPressed[12]);
  const items4 = [isPressed];
  const stateFromStoresObject1 = channel(isPressed[12]).useStateFromStoresObject(items4, () => {
    const mentionCount = ReadStateStore.getMentionCount(channel.id);
    const obj3 = { mentionCount, hasUnreadMessages: null };
    let tmp2 = mentionCount > 0;
    if (!tmp2) {
      tmp2 = null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
      const tmp4 = null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
    }
    obj3.hasUnreadMessages = tmp2;
    return obj3;
  });
  const hasUnreadMessages = stateFromStoresObject1.hasUnreadMessages;
  const obj4 = channel(isPressed[12]);
  ({ isIncomingCall, isOngoingCall } = height(isPressed[13])(channel.id));
  const tmp10 = height(isPressed[13])(channel.id);
  const items5 = [UserGuildSettingsStore];
  const stateFromStoresObject2 = channel(isPressed[12]).useStateFromStoresObject(items5, () => ({ resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id), favorite: UserGuildSettingsStore.isMessagesFavorite(channel.id) }));
  ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
  const obj5 = channel(isPressed[12]);
  const items6 = [RelationshipStore];
  const stateFromStoresObject3 = channel(isPressed[12]).useStateFromStoresObject(items6, () => {
    let isIgnoredResult = channel.isDM();
    if (isIgnoredResult) {
      isIgnoredResult = RelationshipStore.isIgnored(channel.getRecipientId());
    }
    const obj2 = { ignored: isIgnoredResult, blocked: null };
    let isBlockedResult = channel.isDM();
    if (isBlockedResult) {
      isBlockedResult = RelationshipStore.isBlocked(channel.getRecipientId());
    }
    obj2.blocked = isBlockedResult;
    return obj2;
  });
  ({ ignored, blocked } = stateFromStoresObject3);
  const obj6 = channel(isPressed[12]);
  const items7 = [UserStore];
  const stateFromStores1 = channel(isPressed[12]).useStateFromStores(items7, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return UserStore.getUser(recipientId);
  });
  const obj7 = channel(isPressed[12]);
  const nameplate = channel(isPressed[14]).useNameplate({ user: stateFromStores1 });
  let tmp15 = null != nameplate;
  if (tmp15) {
    let tmp16 = stateFromStores;
    if (!stateFromStores) {
      tmp16 = isPressed;
    }
    tmp15 = tmp16;
  }
  isPressed = tmp15;
  const items8 = [stateFromStores, tmp15, isPressed, tmp4];
  const items9 = [, , ];
  ({ guild_id: arr10[0], id: arr10[1] } = channel);
  items9[2] = setIsPressed;
  const memo2 = obj2.useMemo(() => {
    let tmp = null;
    if (obj.isIOS()) {
      if (isPressed) {
        tmp = null;
      } else if (isPressed) {
        let backgroundColor = closure_5.rowActive.backgroundColor;
      } else if (stateFromStores) {
        backgroundColor = closure_5.rowSelected.backgroundColor;
      }
    }
    return tmp;
  }, items8);
  const items10 = [setIsPressed];
  const callback = obj2.useCallback(() => {
    ChannelActionCreatorsDefault.preload(channel.guild_id, channel.id);
    setIsPressed(true);
  }, items9);
  const items11 = [channel.id];
  const callback1 = obj2.useCallback(() => {
    setIsPressed(false);
  }, items10);
  const items12 = [channel.id];
  const callback2 = obj2.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id);
  }, items11);
  const obj9 = { style: memo, collapsable: false, children: null };
  const callback3 = obj2.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items12);
  const obj10 = { onPressIn: callback, onPressOut: callback1, onPress: callback2, onLongPress: callback3, accessibilityRole: "button", accessibilityLabel: height(isPressed[20])({ channel, unread: hasUnreadMessages, mentionCount: stateFromStoresObject1.mentionCount, isIncomingCall, isOngoingCall, ignored, blocked }), accessibilityHint: null, underlayColor: null, style: null, children: null };
  const obj8 = channel(isPressed[14]);
  obj10.accessibilityHint = channel(isPressed[20]).getChannelA11yHint({ channel, muted, userStatus: status, isFavorite: favorite });
  obj10.underlayColor = tmp4.rowActive.backgroundColor;
  obj10.style = memo1;
  let tmp26;
  const tmpResult = channel(isPressed[20]);
  if (tmp15) {
    tmp26 = nameplate;
  }
  const obj11 = { nameplate: tmp26, isFocused: stateFromStores, isPressed, isMuted: null, fadeIn: null, style: null };
  let tmp27 = muted;
  if (!muted) {
    tmp27 = ignored;
  }
  if (!tmp27) {
    tmp27 = blocked;
  }
  obj11.isMuted = tmp27;
  obj11.fadeIn = isPressed;
  obj11.style = tmp4.nameplate;
  const items13 = [closure_12(height(isPressed[21]), obj11), , , , ];
  let tmp22Result = stateFromStores;
  if (stateFromStores) {
    const obj12 = { style: tmp4.selectedBorder, pointerEvents: "none" };
    tmp22Result = closure_12(tmp23, obj12);
  }
  items13[1] = tmp22Result;
  const obj13 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted, layout: null, panelVariant: true };
  const tmp9Result = height(isPressed[21]);
  obj13.layout = channel(isPressed[23]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  items13[2] = closure_12(height(isPressed[22]), obj13);
  const obj14 = { backgroundColor: memo2, children: null };
  const obj15 = { channel, channelSelected: stateFromStores, hasUnreadMessages, muted, ignored, blocked, isStreaming: null, status: null };
  const tmp9Result4 = height(isPressed[22]);
  obj15.isStreaming = height(isPressed[26])(activities);
  obj15.status = status;
  obj14.children = closure_12(height(isPressed[25]), obj15);
  items13[3] = closure_12(channel(isPressed[24]).CutoutBackgroundProvider, obj14);
  const obj16 = { channel, channelSelected: stateFromStores, favorite, muted, ignored, blocked, hasActivity: null, hasUnreadMessages: null, resolvedUnreadSetting: null, hasNameplate: null };
  let someResult;
  const tmp9Result5 = height(isPressed[25]);
  if (activities != null) {
    someResult = activities.some((type) => type.type !== constants.CUSTOM_STATUS);
  }
  obj16.hasActivity = true === someResult;
  obj16.hasUnreadMessages = hasUnreadMessages;
  obj16.resolvedUnreadSetting = resolvedUnreadSetting;
  obj16.hasNameplate = tmp15;
  items13[4] = closure_12(height(isPressed[27]), obj16);
  obj10.children = items13;
  obj9.children = closure_13(channel(isPressed[19]).PressableHighlight, obj10);
  return closure_12(stateFromStores, obj9);
});
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;