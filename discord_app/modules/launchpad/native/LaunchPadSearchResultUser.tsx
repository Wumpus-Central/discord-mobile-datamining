// discord_app/modules/launchpad/native/LaunchPadSearchResultUser.tsx
import importAllResult from "PressableBase";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import _getSystemLocale from "_getSystemLocale";
import ensureGuildLoaded from "ensureGuildLoaded";
import sortActivity from "sortActivity";
import handleTypingStart from "handleTypingStart";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { StatusTypes } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "module_16132";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { _isStreaming } from "../../activities/utils/isStreaming.tsx";
import { getLayoutStyle } from "shared/getLayoutStyles.tsx";
import { renderChannelBadge } from "shared/renderChannelBadge.tsx";
import { ChannelContent } from "shared/renderChannelContent.tsx";
import { renderChannelWrapper } from "shared/renderChannelWrapper.tsx";
import { UnreadBadge } from "shared/UnreadBadge.tsx";
import { useChannelUnreadBadgeState } from "shared/useChannelUnreadBadgeState.tsx";

let closure_12;
let closure_14;
let map1;
const require = arg1;
function UserResult(user) {
  let activities;
  let channel;
  let comparator;
  let isMobileOnline;
  let isVROnline;
  let lastMessage;
  let unread;
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
  const tmp = callback2();
  const tmp4 = getLayoutStyle();
  let items = [user.id];
  const callback = importAllResult.useCallback(() => {
    const items = [user.id];
    outer1_1(outer1_2[13]).openPrivateChannel({ recipientIds: items });
  }, items);
  let obj = user(4761);
  const fontScale = obj.useFontScale();
  let obj1 = user(589);
  const items1 = [_getSystemLocale];
  const stateFromStores = obj1.useStateFromStores(items1, () => locale.locale);
  let obj2 = user(589);
  const items2 = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let obj3 = user(589);
  const items3 = [sortActivity];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => ({ isMobileOnline: outer1_7.isMobileOnline(user.id), isVROnline: outer1_7.isVROnline(user.id), status: outer1_7.getStatus(user.id), activities: outer1_7.getActivities(user.id) }));
  const status = stateFromStoresObject.status;
  let extractTimestampResult;
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (null != lastMessage) {
    let tmp2Result = tmp2(11);
    extractTimestampResult = tmp2Result.extractTimestamp(lastMessage.id);
  }
  let relativeTimestamp = null;
  if (null != extractTimestampResult) {
    relativeTimestamp = tmp6(7148).getRelativeTimestamp(extractTimestampResult);
    const tmp6Result = tmp6(7148);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!flag) {
      str = "text-default";
    }
  }
  tmp2Result = tmp2(16129);
  obj = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items4, children: null };
  items4 = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  obj = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items5 = [callback(UnreadBadge, obj), , ];
  obj1 = { user, guildId: "e", isMobileOnline: true, isVROnline: null, status: false, streaming: false, style: null, size: null, animate: null, typing: null, autoStatusCutout: null };
  obj1[2] = isMobileOnline;
  obj1[3] = isVROnline;
  let tmp19 = null;
  if (!user.isSystemUser()) {
    tmp19 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp19 = status;
    }
  }
  obj1[4] = tmp19;
  obj1[5] = _isStreaming(activities);
  obj1[6] = tmp4.icon.margin;
  obj1[7] = tmp4.icon.avatarSize;
  let tmp21 = !stateFromStores1;
  if (!stateFromStores1) {
    let tmp22 = flag2;
    if (!flag2) {
      tmp22 = unread;
    }
    tmp21 = tmp22;
  }
  obj1[8] = tmp21;
  obj1[9] = flag2;
  items5[1] = callback(user(1297).Avatar, obj1);
  const tmp16 = closure_14;
  const tmp17 = closure_13;
  const tmp18 = UnreadSetting;
  const tmp2Result1 = renderChannelWrapper;
  if (comparator == null) {
    comparator = tmp2(4187).getUserTag(user);
    const tmp2Result3 = tmp2(4187);
  }
  obj2 = { name: comparator, subtitle: null, unread: null, resolvedUnreadSetting: null, muted: null, lastMessageTimestampString: null, mentionCount: null, mentionBadge: null };
  let tmp14Result;
  if (null != lastMessage) {
    if (null != channel) {
      obj3 = { channel: null, message: null, color: null, muted: null, layout: null };
      obj3[0] = channel;
      obj3[1] = lastMessage;
      obj3[2] = str;
      obj3[3] = flag;
      obj3[4] = tmp6(4039).ChannelListLayoutTypes.COMPACT;
      tmp14Result = tmp14(tmp6(9839).ChannelRowPreview, obj3);
    }
  }
  const obj4 = { children: null };
  obj2[1] = tmp14Result;
  obj2[2] = unread;
  obj2[3] = tmp18.ALL_MESSAGES;
  obj2[4] = flag;
  obj2[5] = relativeTimestamp;
  obj2[6] = num;
  obj2[7] = renderChannelBadge({ mentionCount: num, locale: stateFromStores });
  items5[2] = ChannelContent(obj2);
  obj4[0] = items5;
  obj[3] = tmp2Result1(tmp16(tmp17, obj4), { fontScale });
  return tmp2Result(callback(user(4887).PressableHighlight, obj));
}
function UserResultWithChannel(arg0) {
  let channel;
  let mentionCount;
  let require;
  let unread;
  ({ user: require, channel } = arg0);
  let obj = initialize;
  const items = [updateUserGuildSettingsInternal];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.isChannelMuted(undefined, channel.id));
  const baseChannelUnreadBadgeState = useChannelUnreadBadgeState.useBaseChannelUnreadBadgeState(channel, stateFromStores);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const obj2 = useChannelUnreadBadgeState;
  const items1 = [handleTypingStart];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => outer1_8.isTyping(channel.id, id.id));
  obj = {};
  const obj3 = initialize;
  const merged = Object.assign(arg0);
  obj.channel = channel;
  obj.lastMessage = channel(14618)(channel, { unread });
  obj.unread = unread;
  obj.mentionCount = mentionCount;
  obj.muted = stateFromStores;
  obj.isTyping = stateFromStores1;
  return callback(UserResult, obj);
}
let c3 = importAllResult;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: null };
obj = { backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj[1] = obj;
let closure_15 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((user) => {
  user = user.user;
  let obj = user(589);
  const items = [ensureGuildLoaded];
  let closure_1 = obj.useStateFromStores(items, () => outer1_6.getDMFromUserId(user.id));
  const items1 = [ensureGuildLoaded];
  const stateFromStores = user(589).useStateFromStores(items1, () => outer1_6.getChannel(closure_1));
  if (null != stateFromStores) {
    obj = {};
    const merged = Object.assign(user);
    obj.channel = stateFromStores;
    let tmp7 = callback(UserResultWithChannel, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(user);
    tmp7 = callback(UserResult, obj);
  }
  return tmp7;
});
const result = require("_getSystemLocale").fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResultUser.tsx");

export default memoResult;