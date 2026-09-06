// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import transitionToChannel from "../../../../../../routing/transitionToChannel.tsx";
import ChannelActionCreatorsDefault from "../../../../../../../actions/ChannelActionCreators.tsx";
import openChannelLongPressActionSheet from "../../../../../../channel/native/openChannelLongPressActionSheet.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../../../../../stores/PresenceStore.tsx";
import ReadStateStore from "../../../../../../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../../../../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../../../../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../../../../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles(() => {
  let obj = { pressable: null, nameplate: null, rowActive: null, selectedBorder: null, rowSelected: null };
  obj = {
    marginBottom: 1,
    borderRadius: nativeDefault.radii.md,
    marginHorizontal: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_8,
    marginVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  };
  obj.pressable = obj;
  obj = { borderRadius: nativeDefault.radii.md };
  obj.nameplate = obj;
  obj.rowActive = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const rect = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderRadius: nativeDefault.radii.md,
  };
  obj.selectedBorder = rect;
  const obj1 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.rowSelected = {
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx",
);

export default noop.memo(function MessagesItemChannelBase(channel) {
  channel = channel.channel;
  const height = channel.height;
  const setIsPressed = channel.setIsPressed;
  let isPressed;
  let obj = channel(isPressed[12]);
  let items = [SelectedChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const channelId = SelectedChannelStore.getChannelId(null);
    if (channel != null) {
      id = channel.id;
    }
    return channelId === id;
  });
  let tmp4 = closure_14();
  closure_5 = tmp4;
  let obj1 = setIsPressed;
  const items1 = [height];
  const items2 = [tmp4, stateFromStores];
  const memo = setIsPressed.useMemo(() => ({ height, overflow: "hidden" }), items1);
  const memo1 = setIsPressed.useMemo(() => {
    const items = [closure_5.pressable];
    let rowSelected;
    if (stateFromStores) {
      rowSelected = closure_5.rowSelected;
    }
    items[1] = rowSelected;
    return items;
  }, items2);
  let obj2 = channel(isPressed[12]);
  const items3 = [closure_5];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items3, () => {
    let obj = channel;
    if (channel.isDM()) {
      const activities = PresenceStore.getActivities(obj.getRecipientId());
    }
    if (obj.isDM()) {
      obj = { status: null, activities: null };
      obj.status = PresenceStore.getStatus(obj.getRecipientId());
      obj.activities = activities;
    } else {
      obj = { status: "hash", activities: "call" };
    }
    return obj;
  });
  ({ status, activities } = stateFromStoresObject);
  let obj3 = channel(isPressed[12]);
  const items4 = [isPressed];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items4, () => {
    const mentionCount = ReadStateStore.getMentionCount(channel.id);
    const obj = { mentionCount, hasUnreadMessages: null };
    let tmp2 = mentionCount > 0;
    if (!tmp2) {
      tmp2 = null != channel.getGuildId() && obj.hasUnread(channel.id);
      const tmp4 = null != channel.getGuildId() && obj.hasUnread(channel.id);
    }
    obj.hasUnreadMessages = tmp2;
    return obj;
  });
  const hasUnreadMessages = stateFromStoresObject1.hasUnreadMessages;
  ({ isIncomingCall, isOngoingCall } = height(isPressed[13])(channel.id));
  let obj4 = channel(isPressed[12]);
  const items5 = [UserGuildSettingsStore];
  const stateFromStoresObject2 = obj4.useStateFromStoresObject(items5, () => ({
    resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
    muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
    favorite: UserGuildSettingsStore.isMessagesFavorite(channel.id),
  }));
  ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
  let obj5 = channel(isPressed[12]);
  const items6 = [RelationshipStore];
  const stateFromStoresObject3 = obj5.useStateFromStoresObject(items6, () => {
    let obj = channel;
    let isIgnoredResult = channel.isDM();
    if (isIgnoredResult) {
      isIgnoredResult = RelationshipStore.isIgnored(obj.getRecipientId());
    }
    obj = { ignored: isIgnoredResult, blocked: null };
    let isBlockedResult = obj.isDM();
    if (isBlockedResult) {
      isBlockedResult = RelationshipStore.isBlocked(obj.getRecipientId());
    }
    obj.blocked = isBlockedResult;
    return obj;
  });
  ({ ignored, blocked } = stateFromStoresObject3);
  let obj6 = channel(isPressed[12]);
  const items7 = [UserStore];
  const stateFromStores1 = obj6.useStateFromStores(items7, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return UserStore.getUser(recipientId);
  });
  const tmp10 = height(isPressed[13])(channel.id);
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
  const items9 = [, ,];
  ({ guild_id: arr10[0], id: arr10[1] } = channel);
  items9[2] = setIsPressed;
  const memo2 = obj1.useMemo(() => {
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
  const callback = obj1.useCallback(() => {
    ChannelActionCreatorsDefault.preload(channel.guild_id, channel.id);
    setIsPressed(true);
  }, items9);
  const items11 = [channel.id];
  const callback1 = obj1.useCallback(() => {
    setIsPressed(false);
  }, items10);
  const items12 = [channel.id];
  const callback2 = obj1.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id);
  }, items11);
  obj = { style: memo, collapsable: false, children: null };
  const callback3 = obj1.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items12);
  obj = {
    onPressIn: callback,
    onPressOut: callback1,
    onPress: callback2,
    onLongPress: callback3,
    accessibilityRole: "button",
    accessibilityLabel: tmp9(tmp2[20])({
      channel,
      unread: hasUnreadMessages,
      mentionCount: stateFromStoresObject1.mentionCount,
      isIncomingCall,
      isOngoingCall,
      ignored,
      blocked,
    }),
    accessibilityHint: null,
    underlayColor: null,
    style: null,
    children: null,
  };
  const obj8 = channel(isPressed[14]);
  obj.accessibilityHint = channel(isPressed[20]).getChannelA11yHint({
    channel,
    muted,
    userStatus: status,
    isFavorite: favorite,
  });
  obj.underlayColor = tmp4.rowActive.backgroundColor;
  obj.style = memo1;
  let tmp26;
  let tmp9Result = tmp9(tmp2[21]);
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
  obj1.isMuted = tmp27;
  obj1.fadeIn = isPressed;
  obj1.style = tmp4.nameplate;
  const items13 = [closure_12(tmp9Result, obj1), , , ,];
  let tmp22Result = stateFromStores;
  if (stateFromStores) {
    obj2 = { style: tmp4.selectedBorder, pointerEvents: "none" };
    tmp22Result = closure_12(tmp23, obj2);
  }
  items13[1] = tmp22Result;
  obj3 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted, layout: null, panelVariant: true };
  tmp9Result = tmp9(tmp2[22]);
  obj3.layout = channel(isPressed[23]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  items13[2] = closure_12(tmp9Result, obj3);
  obj4 = { backgroundColor: memo2, children: null };
  obj5 = {
    channel,
    channelSelected: stateFromStores,
    hasUnreadMessages,
    muted,
    ignored,
    blocked,
    isStreaming: null,
    status: null,
  };
  const tmpResult = channel(isPressed[20]);
  obj5.isStreaming = height(isPressed[26])(activities);
  obj5.status = status;
  obj4.children = closure_12(height(isPressed[25]), obj5);
  items13[3] = closure_12(channel(isPressed[24]).CutoutBackgroundProvider, obj4);
  obj6 = {
    channel,
    channelSelected: stateFromStores,
    favorite,
    muted,
    ignored,
    blocked,
    hasActivity: null,
    hasUnreadMessages: null,
    resolvedUnreadSetting: null,
    hasNameplate: null,
  };
  let someResult;
  const tmp9Result1 = height(isPressed[25]);
  if (activities != null) {
    someResult = activities.some((type) => type.type !== constants.CUSTOM_STATUS);
  }
  obj6.hasActivity = true === someResult;
  obj6.hasUnreadMessages = hasUnreadMessages;
  obj6.resolvedUnreadSetting = resolvedUnreadSetting;
  obj6.hasNameplate = tmp15;
  items13[4] = closure_12(height(isPressed[27]), obj6);
  obj.children = items13;
  obj.children = closure_13(channel(isPressed[19]).PressableHighlight, obj);
  return closure_12(stateFromStores, obj);
});
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;
