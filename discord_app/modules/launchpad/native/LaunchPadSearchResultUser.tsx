// === Module 17409: LaunchPadSearchResultUser ===

// Module 17409 (LaunchPadSearchResultUser)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import isStreamingDefault from "isStreaming" /* 7931 */;
import useChannelUnreadBadgeState from "useChannelUnreadBadgeState" /* 16285 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16832 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16833 */;
import renderChannelContentDefault from "renderChannelContent" /* 16835 */;
import UnreadBadgeDefault from "UnreadBadge" /* 17398 */;
import renderChannelBadgeDefault from "renderChannelBadge" /* 17399 */;
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper" /* 17400 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import TypingStore from "TypingStore" /* 11579 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj1, openPrivateChannelResult, user;

let closure_12;
let closure_14;
let map1;
let obj2;
const StatusTypes = Constants.StatusTypes;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let activities;
  let channel;
  let comparator;
  let first;
  let isMobileOnline;
  let isTyping;
  let isVROnline;
  let lastMessage;
  let locale;
  let mentionCount;
  let muted;
  let status;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp21;
  let unread;
  let useReducedMotion;
  let obj = user(576);
  const cResult = obj.c(76);
  user = user.user;
  ({ comparator, channel, lastMessage, unread, mentionCount, muted, isTyping } = user);
  const tmp6 = undefined !== muted && muted;
  const tmp8 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = getLayoutStylesDefault();
    cResult[0] = tmp11;
    first = tmp11;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    class I {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { recipientIds: null };
        items = [];
        items[0] = user.id;
        obj1.recipientIds = items;
        openPrivateChannelResult = obj.openPrivateChannel(obj1);
        return;
      }
    }
    cResult[1] = user.id;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { recipientIds: null };
        items = [];
        items[0] = user.id;
        obj1.recipientIds = items;
        openPrivateChannelResult = obj.openPrivateChannel(obj1);
        return;
      }
    }
  }
  const tmpResult = user(5602);
  const fontScale = tmpResult.useFontScale();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { recipientIds: null };
        items = [];
        items[0] = user.id;
        obj1.recipientIds = items;
        openPrivateChannelResult = obj.openPrivateChannel(obj1);
        return;
      }
    }
    let items = [LocaleStore];
    class V {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[3] = items;
    cResult[4] = V;
    tmp15 = V;
    tmp14 = items;
  } else {
    class I {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { recipientIds: null };
        items = [];
        items[0] = user.id;
        obj1.recipientIds = items;
        openPrivateChannelResult = obj.openPrivateChannel(obj1);
        return;
      }
    }
    tmp15 = cResult[4];
  }
  const tmpResult4 = user(504);
  const stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp15);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { recipientIds: null };
        items = [];
        items[0] = user.id;
        obj1.recipientIds = items;
        openPrivateChannelResult = obj.openPrivateChannel(obj1);
        return;
      }
    }
    const items1 = [AccessibilityStore];
    class V {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[5] = tmp19;
    cResult[6] = items1;
    tmp18 = items1;
  } else {
    class I {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { recipientIds: null };
        items = [];
        items[0] = user.id;
        obj1.recipientIds = items;
        openPrivateChannelResult = obj.openPrivateChannel(obj1);
        return;
      }
    }
    tmp18 = cResult[6];
  }
  const tmpResult5 = user(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp18, tmp19);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { recipientIds: null };
        items = [];
        items[0] = user.id;
        obj1.recipientIds = items;
        openPrivateChannelResult = obj.openPrivateChannel(obj1);
        return;
      }
    }
    const items2 = [PresenceStore];
    class V {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[7] = items2;
    tmp21 = items2;
  } else {
    class I {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { recipientIds: null };
        items = [];
        items[0] = user.id;
        obj1.recipientIds = items;
        openPrivateChannelResult = obj.openPrivateChannel(obj1);
        return;
      }
    }
  }
  if (cResult[8] !== user.id) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
    cResult[8] = user.id;
    class V {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[9] = N;
  } else {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
  }
  const tmpResult6 = user(504);
  const stateFromStoresObject = tmpResult6.useStateFromStoresObject(tmp21, N);
  ({ isMobileOnline, isVROnline, status, activities } = stateFromStoresObject);
  if (cResult[10] === activities) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
  }
  let extractTimestampResult;
  if (null != lastMessage) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
    const obj6 = SnowflakeUtilsDefault;
    extractTimestampResult = obj6.extractTimestamp(lastMessage.id);
  }
  if (null != extractTimestampResult) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
    const relativeTimestamp = obj7.getRelativeTimestamp(extractTimestampResult);
  }
  if (undefined !== unread && unread) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
    if (!tmp6) {
      class N {
        constructor() {
          obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
          return obj;
        }
      }
    }
  }
  renderChannelPressableWrapperDefault;
  const PressableHighlight = tmp(5909).PressableHighlight;
  if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
    tmp29[0] = first.container.borderRadius;
    class V {
      constructor() {
        return closure_1_5.locale;
      }
    }
  } else {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
  }
  if (cResult[37] !== tmp8.pressable) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
    tmp31[0] = tmp8.pressable;
    tmp31[1] = tmp29;
    class V {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[37] = tmp8.pressable;
    cResult[38] = tmp31;
  } else {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
  }
  renderChannelWrapperDefault;
  if (cResult[39] !== (undefined !== unread && unread)) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
    let obj2 = { unread: undefined !== unread && unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
    class V {
      constructor() {
        return closure_1_5.locale;
      }
    }
    cResult[39] = undefined !== unread && unread;
    cResult[40] = closure_12(UnreadBadgeDefault, obj2);
    const tmp34 = closure_12(UnreadBadgeDefault, obj2);
  } else {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
  }
  if (cResult[41] === status) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
    if (cResult[44] !== activities) {
      class N {
        constructor() {
          obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
          return obj;
        }
      }
      cResult[44] = activities;
      class V {
        constructor() {
          return closure_1_5.locale;
        }
      }
      cResult[45] = tmp38;
    } else {
      class N {
        constructor() {
          obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
          return obj;
        }
      }
    }
    class V {
      constructor() {
        return closure_1_5.locale;
      }
    }
    if (cResult[46] === isMobileOnline) {
      class N {
        constructor() {
          obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
          return obj;
        }
      }
    }
    const obj3 = { user, guildId: "e", isMobileOnline, isVROnline, status: tmp35, streaming: tmp38, style: first.icon.margin, size: first.icon.avatarSize, animate: !stateFromStores1, typing: undefined !== isTyping && isTyping, autoStatusCutout: true };
    cResult[46] = isMobileOnline;
    cResult[47] = undefined !== isTyping && isTyping;
    cResult[48] = isVROnline;
    cResult[49] = tmp35;
    cResult[50] = tmp38;
    cResult[51] = !stateFromStores1;
    cResult[52] = user;
    cResult[53] = closure_12(user(1188).Avatar, obj3);
    const tmp42 = closure_12(user(1188).Avatar, obj3);
  }
  let tmp36 = null;
  if (!user.isSystemUser()) {
    class N {
      constructor() {
        obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
        return obj;
      }
    }
    tmp36 = null;
    if (status !== StatusTypes.OFFLINE) {
      class N {
        constructor() {
          obj = { isMobileOnline: closure_7.isMobileOnline(user.id), isVROnline: closure_7.isVROnline(user.id), status: closure_7.getStatus(user.id), activities: closure_7.getActivities(user.id) };
          return obj;
        }
      }
    }
  }
  cResult[41] = status;
  cResult[42] = user;
  cResult[43] = tmp36;
}) : ((user) => {
  let activities;
  let channel;
  let comparator;
  let isMobileOnline;
  let isVROnline;
  let items4;
  let lastMessage;
  let locale;
  let obj10;
  let tmp14Result;
  let tmp19;
  let tmp21;
  let tmp2Result6;
  let unread;
  let useReducedMotion;
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
  const callback = react.useCallback(() => {
    let items;
    const obj2 = { recipientIds: items };
    items = [user.id];
    const obj = ChannelActionCreatorsDefault;
    obj.openPrivateChannel(obj2);
  }, items);
  let obj = user(5602);
  const fontScale = obj.useFontScale();
  let obj2 = user(504);
  const items1 = [LocaleStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => locale.locale);
  const items2 = [AccessibilityStore];
  const obj3 = user(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const items3 = [PresenceStore];
  const obj4 = user(504);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items3, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id), status: PresenceStore.getStatus(user.id), activities: PresenceStore.getActivities(user.id) };
    return obj;
  });
  const status = stateFromStoresObject.status;
  let extractTimestampResult;
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (null != lastMessage) {
    const tmp2Result = SnowflakeUtilsDefault;
    extractTimestampResult = tmp2Result.extractTimestamp(lastMessage.id);
  }
  let relativeTimestamp = null;
  if (null != extractTimestampResult) {
    const tmp6Result = user(7126);
    relativeTimestamp = tmp6Result.getRelativeTimestamp(extractTimestampResult);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!flag) {
      str = "text-default";
    }
  }
  const obj5 = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items4, children: tmp2Result6(closure_14(closure_13, obj10), { fontScale }) };
  items4 = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  const tmp2Result5 = renderChannelPressableWrapperDefault;
  const PressableHighlight = tmp6(5909).PressableHighlight;
  const items5 = [, , ];
  const obj6 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  tmp2Result6 = renderChannelWrapperDefault;
  items5[0] = closure_12(UnreadBadgeDefault, obj6);
  const obj7 = { user, guildId: "e", isMobileOnline, isVROnline, status: tmp19, streaming: isStreamingDefault(activities), style: tmp4.icon.margin, size: tmp4.icon.avatarSize, animate: tmp21, typing: flag2, autoStatusCutout: true };
  const Avatar = tmp6(1188).Avatar;
  tmp19 = null;
  if (!user.isSystemUser()) {
    tmp19 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp19 = status;
    }
  }
  tmp21 = !stateFromStores1;
  if (tmp21) {
    tmp21 = flag2 || unread;
  }
  items5[1] = closure_12(Avatar, obj7);
  const tmp2Result7 = renderChannelContentDefault;
  if (comparator == null) {
    const tmp2Result8 = UserUtilsDefault;
    comparator = tmp2Result8.getUserTag(user);
  }
  const obj8 = { name: comparator, subtitle: tmp14Result, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted: flag, lastMessageTimestampString: relativeTimestamp, mentionCount: num, mentionBadge: renderChannelBadgeDefault({ mentionCount: num, locale: stateFromStores }) };
  tmp14Result = undefined;
  if (null != lastMessage) {
    if (null != channel) {
      const obj9 = { channel, message: lastMessage, color: str, muted: flag, layout: user(7514).ChannelListLayoutTypes.COMPACT };
      const ChannelRowPreview = tmp6(12488).ChannelRowPreview;
      tmp14Result = closure_12(ChannelRowPreview, obj9);
    }
  }
  obj10 = { children: items5 };
  items5[2] = tmp2Result7(obj8);
  return tmp2Result5(closure_12(PressableHighlight, obj5));
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let mentionCount;
  let tmp6;
  let tmp9;
  let unread;
  const obj = user(576);
  const cResult = obj.c(17);
  user = user.user;
  const channel = user.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function s() {
      return UserGuildSettingsStore.isChannelMuted(undefined, channel.id);
    };
    cResult[1] = channel.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = user(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmpResult3 = user(16285);
  const baseChannelUnreadBadgeState = tmpResult3.useBaseChannelUnreadBadgeState(channel, stateFromStores);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [TypingStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === channel.id) {
    let tmp11;
    let tmp13;
    if (cResult[5] === user.id) {
      tmp11 = cResult[6];
    }
    const tmpResult4 = user(504);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp11);
    if (cResult[7] !== unread) {
      const obj2 = { unread };
      cResult[7] = unread;
      cResult[8] = obj2;
      tmp13 = obj2;
    } else {
      tmp13 = cResult[8];
    }
    const tmp15 = channel(15137)(channel, tmp13);
    if (cResult[9] === channel) {
      if (cResult[10] === stateFromStores1) {
        if (cResult[11] === tmp15) {
          if (cResult[12] === mentionCount) {
            if (cResult[13] === stateFromStores) {
              if (cResult[14] === user) {
                let tmp16;
                if (cResult[15] === unread) {
                  tmp16 = cResult[16];
                }
                return tmp16;
              }
            }
          }
        }
      }
    }
    const obj3 = { channel, lastMessage: tmp15, unread, mentionCount, muted: stateFromStores, isTyping: stateFromStores1 };
    const merged = Object.assign(user);
    const tmp22 = closure_12(closure_16, obj3);
    cResult[9] = channel;
    cResult[10] = stateFromStores1;
    cResult[11] = tmp15;
    cResult[12] = mentionCount;
    cResult[13] = stateFromStores;
    cResult[14] = user;
    cResult[15] = unread;
    cResult[16] = tmp22;
    tmp16 = tmp22;
  }
  const fn2 = function b() {
    return TypingStore.isTyping(channel.id, user.id);
  };
  cResult[4] = channel.id;
  cResult[5] = user.id;
  cResult[6] = fn2;
  tmp11 = fn2;
}) : ((arg0) => {
  let channel;
  let id;
  let mentionCount;
  let tmp4;
  let unread;
  ({ user: require, channel } = arg0);
  const items = [UserGuildSettingsStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(undefined, channel.id));
  const obj2 = useChannelUnreadBadgeState;
  const baseChannelUnreadBadgeState = obj2.useBaseChannelUnreadBadgeState(channel, stateFromStores);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const items1 = [TypingStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => TypingStore.isTyping(channel.id, require.id));
  const obj4 = { channel, lastMessage: tmp4, unread, mentionCount, muted: stateFromStores, isTyping: stateFromStores1 };
  tmp4 = channel(15137)(channel, { unread });
  const merged = Object.assign(arg0);
  return closure_12(closure_16, obj4);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let tmp12;
  let tmp17;
  let tmp6;
  let tmp8;
  const obj = user(576);
  const cResult = obj.c(9);
  user = user.user;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function s() {
      return ChannelStore.getDMFromUserId(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = user(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class S {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = S;
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
  }
  const tmpResult2 = user(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, S);
  if (cResult[6] === stateFromStores1) {
    class S {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
    return tmp12;
  }
  if (null != stateFromStores1) {
    class S {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
    const obj2 = { channel: stateFromStores1 };
    const merged = Object.assign(user);
    tmp17 = closure_12(closure_17, obj2);
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
    const obj3 = {};
    const merged1 = Object.assign(user);
    tmp17 = closure_12(closure_16, obj3);
  }
  cResult[6] = stateFromStores1;
  cResult[7] = user;
  cResult[8] = tmp17;
  tmp12 = tmp17;
}) : ((user) => {
  let tmp7;
  user = user.user;
  const items = [ChannelStore];
  const obj = user(504);
  let closure_1 = obj.useStateFromStores(items, () => ChannelStore.getDMFromUserId(user.id));
  const items1 = [ChannelStore];
  const obj2 = user(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(closure_1));
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores };
    const merged = Object.assign(user);
    tmp7 = closure_12(closure_17, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(user);
    tmp7 = closure_12(closure_16, obj4);
  }
  return tmp7;
}));
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResultUser.tsx");

export default memoResult;