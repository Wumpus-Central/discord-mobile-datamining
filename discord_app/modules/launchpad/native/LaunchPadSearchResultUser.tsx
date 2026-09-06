// === Module 16994: LaunchPadSearchResultUser ===

// Module 16994 (LaunchPadSearchResultUser)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import isStreamingDefault from "isStreaming" /* 8259 */;
import useChannelUnreadBadgeState from "useChannelUnreadBadgeState" /* 16343 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16977 */;
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper" /* 16978 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16979 */;
import UnreadBadgeDefault from "UnreadBadge" /* 16981 */;
import renderChannelContentDefault from "renderChannelContent" /* 16982 */;
import shared_renderChannelBadgeDefault from "shared/renderChannelBadge" /* 16984 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import TypingStore from "TypingStore" /* 11965 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

require = fn;
function UserResult(user) {
  user = user.user;
  ({ comparator, channel, lastMessage, unread } = user);
  if (unread === undefined) {
    unread = false;
  }
  let num = user.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  let flag = user.muted;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = user.isTyping;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_15();
  const tmp4 = getLayoutStylesDefault();
  let items = [user.id];
  const callback = noop.useCallback(() => {
    const obj = { recipientIds: null };
    const items = [user.id];
    obj.recipientIds = items;
    obj.openPrivateChannel(obj);
  }, items);
  let obj = user(4982);
  const fontScale = obj.useFontScale();
  let obj1 = user(504);
  const items1 = [LocaleStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => locale.locale);
  let obj2 = user(504);
  const items2 = [AccessibilityStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let obj3 = user(504);
  const items3 = [PresenceStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => ({ isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id), status: PresenceStore.getStatus(user.id), activities: PresenceStore.getActivities(user.id) }));
  const status = stateFromStoresObject.status;
  let extractTimestampResult;
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (null != lastMessage) {
    let tmp2Result = SnowflakeUtilsDefault;
    extractTimestampResult = tmp2Result.extractTimestamp(lastMessage.id);
  }
  let relativeTimestamp = null;
  if (null != extractTimestampResult) {
    relativeTimestamp = tmp6(7641).getRelativeTimestamp(extractTimestampResult);
    const tmp6Result = tmp6(7641);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!flag) {
      str = "text-default";
    }
  }
  tmp2Result = renderChannelPressableWrapperDefault;
  obj = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: null, children: null };
  const items4 = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  obj.style = items4;
  obj = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items5 = [closure_12(UnreadBadgeDefault, obj), , ];
  obj1 = { user, guildId: "e", isMobileOnline, isVROnline, status: false, streaming: false, style: null, size: null, animate: null, typing: null, autoStatusCutout: null };
  let tmp19 = null;
  if (!user.isSystemUser()) {
    tmp19 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp19 = status;
    }
  }
  obj1.status = tmp19;
  obj1.streaming = isStreamingDefault(activities);
  obj1.style = tmp4.icon.margin;
  obj1.size = tmp4.icon.avatarSize;
  let tmp21 = !stateFromStores1;
  if (!stateFromStores1) {
    let tmp22 = flag2;
    if (!flag2) {
      tmp22 = unread;
    }
    tmp21 = tmp22;
  }
  obj1.animate = tmp21;
  obj1.typing = flag2;
  items5[1] = closure_12(user(1178).Avatar, obj1);
  const tmp2Result1 = renderChannelWrapperDefault;
  if (comparator == null) {
    comparator = UserUtilsDefault.getUserTag(user);
    const tmp2Result3 = UserUtilsDefault;
  }
  obj2 = { name: comparator, subtitle: null, unread: null, resolvedUnreadSetting: null, muted: null, lastMessageTimestampString: null, mentionCount: null, mentionBadge: null };
  let tmp14Result;
  if (null != lastMessage) {
    if (null != channel) {
      obj3 = { channel, message: lastMessage, color: str, muted: flag, layout: tmp6(7879).ChannelListLayoutTypes.COMPACT };
      tmp14Result = closure_12(tmp6(10109).ChannelRowPreview, obj3);
    }
  }
  const obj4 = { children: null };
  obj2.subtitle = tmp14Result;
  obj2.unread = unread;
  obj2.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj2.muted = flag;
  obj2.lastMessageTimestampString = relativeTimestamp;
  obj2.mentionCount = num;
  obj2.mentionBadge = shared_renderChannelBadgeDefault({ mentionCount: num, locale: stateFromStores });
  items5[2] = renderChannelContentDefault(obj2);
  obj4.children = items5;
  obj.children = tmp2Result1(closure_14(closure_13, obj4), { fontScale });
  return tmp2Result(closure_12(user(5123).PressableHighlight, obj));
}
function UserResultWithChannel(arg0) {
  ({ user: require, channel } = arg0);
  let obj = initialize;
  const items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(undefined, channel.id));
  const baseChannelUnreadBadgeState = useChannelUnreadBadgeState.useBaseChannelUnreadBadgeState(channel, stateFromStores);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const items1 = [TypingStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => TypingStore.isTyping(channel.id, id.id));
  obj = {};
  const merged = Object.assign(arg0);
  obj.channel = channel;
  obj.lastMessage = channel(15317)(channel, { unread });
  obj.unread = unread;
  obj.mentionCount = mentionCount;
  obj.muted = stateFromStores;
  obj.isTyping = stateFromStores1;
  return closure_12(UserResult, obj);
}
const StatusTypes = fn(1074).StatusTypes;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4560);
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: null };
obj = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.pressableUnderlayColor = obj;
let closure_15 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResultUser.tsx");

export default noop.memo((user) => {
  user = user.user;
  let obj = user(504);
  const items = [ChannelStore];
  closure_1 = obj.useStateFromStores(items, () => ChannelStore.getDMFromUserId(user.id));
  const items1 = [ChannelStore];
  const stateFromStores = user(504).useStateFromStores(items1, () => ChannelStore.getChannel(closure_1));
  if (null != stateFromStores) {
    obj = {};
    const merged = Object.assign(user);
    obj.channel = stateFromStores;
    let tmp7 = closure_12(UserResultWithChannel, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(user);
    tmp7 = closure_12(UserResult, obj);
  }
  return tmp7;
});