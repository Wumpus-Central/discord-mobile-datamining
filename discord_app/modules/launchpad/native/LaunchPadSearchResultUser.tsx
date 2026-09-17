// discord_app/modules/launchpad/native/LaunchPadSearchResultUser.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import isStreamingDefault from "../../activities/utils/isStreaming.tsx";
import useChannelUnreadBadgeState from "shared/useChannelUnreadBadgeState.tsx";
import getLayoutStylesDefault from "shared/getLayoutStyles.tsx";
import renderChannelWrapperDefault from "shared/renderChannelWrapper.tsx";
import renderChannelContentDefault from "shared/renderChannelContent.tsx";
import renderChannelPressableWrapperDefault from "shared/renderChannelPressableWrapper.tsx";
import UnreadBadgeDefault from "shared/UnreadBadge.tsx";
import shared_renderChannelBadgeDefault from "shared/renderChannelBadge.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import TypingStore from "../../../stores/TypingStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";

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
    const obj2 = { recipientIds: null };
    const items = [user.id];
    obj2.recipientIds = items;
    ChannelActionCreatorsDefault.openPrivateChannel(obj2);
  }, items);
  const fontScale = user(5069).useFontScale();
  const obj = user(5069);
  const items1 = [LocaleStore];
  const stateFromStores = user(504).useStateFromStores(items1, () => locale.locale);
  let obj2 = user(504);
  const items2 = [AccessibilityStore];
  const stateFromStores1 = user(504).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const obj3 = user(504);
  const items3 = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items3, () => ({
    isMobileOnline: PresenceStore.isMobileOnline(user.id),
    isVROnline: PresenceStore.isVROnline(user.id),
    status: PresenceStore.getStatus(user.id),
    activities: PresenceStore.getActivities(user.id),
  }));
  const status = stateFromStoresObject.status;
  let extractTimestampResult;
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (null != lastMessage) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessage.id);
    const tmp2Result = SnowflakeUtilsDefault;
  }
  let relativeTimestamp = null;
  if (null != extractTimestampResult) {
    relativeTimestamp = tmp6(7755).getRelativeTimestamp(extractTimestampResult);
    const tmp6Result = tmp6(7755);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!flag) {
      str = "text-default";
    }
  }
  const obj4 = user(504);
  const obj5 = {
    onPress: callback,
    underlayColor: tmp.pressableUnderlayColor.backgroundColor,
    style: null,
    children: null,
  };
  const items4 = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  obj5.style = items4;
  const tmp2Result5 = renderChannelPressableWrapperDefault;
  const items5 = [closure_12(UnreadBadgeDefault, { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES }), ,];
  const obj7 = {
    user,
    guildId: "e",
    isMobileOnline,
    isVROnline,
    status: null,
    streaming: "05ca260ddc3690c8f23eea8ea1704185",
    style: "zh-CN.messages.05ca260ddc3690c8f23eea8ea1704185.compiled.messages",
    size: "jsona",
    animate: "polarToCartesian",
    typing: null,
    autoStatusCutout: true,
  };
  let tmp19 = null;
  if (!user.isSystemUser()) {
    tmp19 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp19 = status;
    }
  }
  obj7.status = tmp19;
  obj7.streaming = isStreamingDefault(activities);
  obj7.style = tmp4.icon.margin;
  obj7.size = tmp4.icon.avatarSize;
  let tmp21 = !stateFromStores1;
  if (!stateFromStores1) {
    let tmp22 = flag2;
    if (!flag2) {
      tmp22 = unread;
    }
    tmp21 = tmp22;
  }
  obj7.animate = tmp21;
  obj7.typing = flag2;
  items5[1] = closure_12(user(1177).Avatar, obj7);
  const obj6 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const tmp2Result6 = renderChannelWrapperDefault;
  if (comparator == null) {
    comparator = UserUtilsDefault.getUserTag(user);
    const tmp2Result8 = UserUtilsDefault;
  }
  const obj8 = {
    name: comparator,
    subtitle: null,
    unread: null,
    resolvedUnreadSetting: null,
    muted: null,
    lastMessageTimestampString: null,
    mentionCount: null,
    mentionBadge: null,
  };
  let tmp14Result;
  if (null != lastMessage) {
    if (null != channel) {
      const obj9 = {
        channel,
        message: lastMessage,
        color: str,
        muted: flag,
        layout: tmp6(8001).ChannelListLayoutTypes.COMPACT,
      };
      tmp14Result = closure_12(tmp6(10258).ChannelRowPreview, obj9);
    }
  }
  const obj10 = { children: null };
  obj8.subtitle = tmp14Result;
  obj8.unread = unread;
  obj8.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj8.muted = flag;
  obj8.lastMessageTimestampString = relativeTimestamp;
  obj8.mentionCount = num;
  obj8.mentionBadge = shared_renderChannelBadgeDefault({ mentionCount: num, locale: stateFromStores });
  items5[2] = renderChannelContentDefault(obj8);
  obj10.children = items5;
  obj5.children = tmp2Result6(closure_14(closure_13, obj10), { fontScale });
  return tmp2Result5(closure_12(user(5210).PressableHighlight, obj5));
}
function UserResultWithChannel(arg0) {
  ({ user: require, channel } = arg0);
  const items = [UserGuildSettingsStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    UserGuildSettingsStore.isChannelMuted(undefined, channel.id),
  );
  const baseChannelUnreadBadgeState = useChannelUnreadBadgeState.useBaseChannelUnreadBadgeState(
    channel,
    stateFromStores,
  );
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const items1 = [TypingStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => TypingStore.isTyping(channel.id, id.id));
  const obj4 = {};
  const merged = Object.assign(arg0);
  obj4.channel = channel;
  obj4.lastMessage = channel(15434)(channel, { unread });
  obj4.unread = unread;
  obj4.mentionCount = mentionCount;
  obj4.muted = stateFromStores;
  obj4.isTyping = stateFromStores1;
  return closure_12(UserResult, obj4);
}
const StatusTypes = fn(1074).StatusTypes;
const UnreadSetting = fn(4822).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4640);
let obj = {
  pressable: { flex: 1 },
  pressableUnderlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE },
};
let closure_15 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResultUser.tsx");

export default noop.memo((user) => {
  user = user.user;
  const items = [ChannelStore];
  closure_1 = user(504).useStateFromStores(items, () => ChannelStore.getDMFromUserId(user.id));
  const obj = user(504);
  const items1 = [ChannelStore];
  const stateFromStores = user(504).useStateFromStores(items1, () => ChannelStore.getChannel(closure_1));
  if (null != stateFromStores) {
    const obj3 = {};
    const merged = Object.assign(user);
    obj3.channel = stateFromStores;
    let tmp7 = closure_12(UserResultWithChannel, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(user);
    tmp7 = closure_12(UserResult, obj4);
  }
  return tmp7;
});
