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
import UnreadBadgeDefault from "shared/UnreadBadge.tsx";
import shared_renderChannelBadgeDefault from "shared/renderChannelBadge.tsx";
import renderChannelPressableWrapperDefault from "shared/renderChannelPressableWrapper.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import TypingStore from "../../../stores/TypingStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const StatusTypes = fn(1085).StatusTypes;
const UnreadSetting = fn(5974).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5091);
let obj = {
  pressable: { flex: 1 },
  pressableUnderlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE },
};
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserResult(user) {
      const cResult = user(576).c(76);
      user = user.user;
      ({ comparator, channel, lastMessage, unread, mentionCount, muted, isTyping } = user);
      const tmp8 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = getLayoutStylesDefault();
        cResult[0] = tmp11;
        let first = tmp11;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== user.id) {
        class P {
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
        cResult[2] = P;
      } else {
        class P {
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
      const obj = user(576);
      const tmp6 = undefined !== muted && muted;
      const fontScale = user(5383).useFontScale();
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
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
        let tmp15 = V;
        const tmp14 = items;
      } else {
        class P {
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
      const tmpResult = user(5383);
      const stateFromStores = user(504).useStateFromStores(tmp14, tmp15);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
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
        let tmp18 = items1;
      } else {
        class P {
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
      const tmpResult4 = user(504);
      const stateFromStores1 = user(504).useStateFromStores(tmp18, tmp19);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
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
        const tmp21 = items2;
      } else {
        class P {
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
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
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
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
      }
      const tmpResult5 = user(504);
      const stateFromStoresObject = user(504).useStateFromStoresObject(tmp21, N);
      ({ isMobileOnline, isVROnline, status, activities } = stateFromStoresObject);
      if (cResult[10] === activities) {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
      }
      let extractTimestampResult;
      if (null != lastMessage) {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
        extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessage.id);
      }
      if (null != extractTimestampResult) {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
        const relativeTimestamp = obj7.getRelativeTimestamp(extractTimestampResult);
      }
      if (undefined !== unread && unread) {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
        if (!tmp6) {
          class N {
            constructor() {
              obj = {
                isMobileOnline: closure_7.isMobileOnline(user.id),
                isVROnline: closure_7.isVROnline(user.id),
                status: closure_7.getStatus(user.id),
                activities: closure_7.getActivities(user.id),
              };
              return obj;
            }
          }
        }
      }
      renderChannelPressableWrapperDefault;
      const PressableHighlight = tmp(6191).PressableHighlight;
      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
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
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
      }
      if (cResult[37] !== tmp8.pressable) {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
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
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
      }
      renderChannelWrapperDefault;
      if (cResult[39] !== (undefined !== unread && unread)) {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
        let obj2 = { unread: tmp4, resolvedUnreadSetting: null };
        class V {
          constructor() {
            return closure_1_5.locale;
          }
        }
        obj2.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
        const tmp34 = closure_12(UnreadBadgeDefault, obj2);
        cResult[39] = tmp4;
        cResult[40] = tmp34;
      } else {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
      }
      if (cResult[41] === status) {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
        if (cResult[44] !== activities) {
          class N {
            constructor() {
              obj = {
                isMobileOnline: closure_7.isMobileOnline(user.id),
                isVROnline: closure_7.isVROnline(user.id),
                status: closure_7.getStatus(user.id),
                activities: closure_7.getActivities(user.id),
              };
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
              obj = {
                isMobileOnline: closure_7.isMobileOnline(user.id),
                isVROnline: closure_7.isVROnline(user.id),
                status: closure_7.getStatus(user.id),
                activities: closure_7.getActivities(user.id),
              };
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
              obj = {
                isMobileOnline: closure_7.isMobileOnline(user.id),
                isVROnline: closure_7.isVROnline(user.id),
                status: closure_7.getStatus(user.id),
                activities: closure_7.getActivities(user.id),
              };
              return obj;
            }
          }
        }
        const obj3 = {
          user,
          guildId: "e",
          isMobileOnline,
          isVROnline,
          status: tmp35,
          streaming: tmp38,
          style: first.icon.margin,
          size: first.icon.avatarSize,
          animate: !stateFromStores1,
          typing: tmp7,
          autoStatusCutout: true,
        };
        const tmp42 = closure_12(tmp(1200).Avatar, obj3);
        cResult[46] = isMobileOnline;
        cResult[47] = tmp7;
        cResult[48] = isVROnline;
        cResult[49] = tmp35;
        cResult[50] = tmp38;
        cResult[51] = !stateFromStores1;
        cResult[52] = user;
        cResult[53] = tmp42;
      }
      let tmp36 = null;
      if (!user.isSystemUser()) {
        class N {
          constructor() {
            obj = {
              isMobileOnline: closure_7.isMobileOnline(user.id),
              isVROnline: closure_7.isVROnline(user.id),
              status: closure_7.getStatus(user.id),
              activities: closure_7.getActivities(user.id),
            };
            return obj;
          }
        }
        tmp36 = null;
        if (status !== StatusTypes.OFFLINE) {
          class N {
            constructor() {
              obj = {
                isMobileOnline: closure_7.isMobileOnline(user.id),
                isVROnline: closure_7.isVROnline(user.id),
                status: closure_7.getStatus(user.id),
                activities: closure_7.getActivities(user.id),
              };
              return obj;
            }
          }
        }
      }
      cResult[41] = status;
      cResult[42] = user;
      cResult[43] = tmp36;
      const tmpResult6 = user(504);
    }
  : function UserResult(user) {
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
      const fontScale = user(5383).useFontScale();
      const obj = user(5383);
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
        relativeTimestamp = tmp6(6066).getRelativeTimestamp(extractTimestampResult);
        const tmp6Result = tmp6(6066);
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
        streaming: "87baeefdf7c0d9a1502798941428fe60",
        style: "zh-TW.messages.87baeefdf7c0d9a1502798941428fe60.compiled.messages",
        size: "jsona",
        animate: "Mobile NUX Post Reg",
        typing: "Skip avatar modal",
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
      items5[1] = closure_12(user(1200).Avatar, obj7);
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
            layout: tmp6(9286).ChannelListLayoutTypes.COMPACT,
          };
          tmp14Result = closure_12(tmp6(12539).ChannelRowPreview, obj9);
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
      return tmp2Result5(closure_12(user(6191).PressableHighlight, obj5));
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserResultWithChannel(user) {
      const cResult = user(576).c(17);
      user = user.user;
      const channel = user.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserGuildSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function s() {
          return UserGuildSettingsStore.isChannelMuted(undefined, channel.id);
        };
        cResult[1] = channel.id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = user(576);
      const stateFromStores = user(504).useStateFromStores(first, tmp6);
      const tmpResult = user(504);
      const baseChannelUnreadBadgeState = user(16708).useBaseChannelUnreadBadgeState(channel, stateFromStores);
      ({ unread, mentionCount } = baseChannelUnreadBadgeState);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [TypingStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === channel.id) {
        if (cResult[5] === user.id) {
          let tmp11 = cResult[6];
        }
        const stateFromStores1 = tmp(504).useStateFromStores(tmp9, tmp11);
        if (cResult[7] !== unread) {
          const obj2 = { unread };
          cResult[7] = unread;
          cResult[8] = obj2;
          let tmp13 = obj2;
        } else {
          tmp13 = cResult[8];
        }
        const tmp15 = channel(15527)(channel, tmp13);
        if (cResult[9] === channel) {
          if (cResult[10] === stateFromStores1) {
            if (cResult[11] === tmp15) {
              if (cResult[12] === mentionCount) {
                if (cResult[13] === stateFromStores) {
                  if (cResult[14] === user) {
                    if (cResult[15] === unread) {
                      let tmp16 = cResult[16];
                    }
                    return tmp16;
                  }
                }
              }
            }
          }
        }
        const obj3 = {};
        const merged = Object.assign(user);
        obj3.channel = channel;
        obj3.lastMessage = tmp15;
        obj3.unread = unread;
        obj3.mentionCount = mentionCount;
        obj3.muted = stateFromStores;
        obj3.isTyping = stateFromStores1;
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
        const tmpResult4 = tmp(504);
      }
      const fn2 = function h() {
        return TypingStore.isTyping(channel.id, user.id);
      };
      cResult[4] = channel.id;
      cResult[5] = user.id;
      cResult[6] = fn2;
      tmp11 = fn2;
      const tmpResult3 = user(16708);
    }
  : function UserResultWithChannel(arg0) {
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
      obj4.lastMessage = channel(15527)(channel, { unread });
      obj4.unread = unread;
      obj4.mentionCount = mentionCount;
      obj4.muted = stateFromStores;
      obj4.isTyping = stateFromStores1;
      return closure_12(closure_16, obj4);
    };
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResultUser.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function LaunchPadSearchResultUser(user) {
        const cResult = user(576).c(9);
        user = user.user;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== user.id) {
          const fn = function s() {
            return ChannelStore.getDMFromUserId(user.id);
          };
          cResult[1] = user.id;
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const obj = user(576);
        const stateFromStores = user(504).useStateFromStores(first, tmp6);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ChannelStore];
          cResult[3] = items1;
          let tmp8 = items1;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== stateFromStores) {
          class S {
            constructor() {
              return closure_6.getChannel(closure_1);
            }
          }
          cResult[4] = stateFromStores;
          cResult[5] = S;
        } else {
          class S {
            constructor() {
              return closure_6.getChannel(closure_1);
            }
          }
        }
        const tmpResult = user(504);
        const stateFromStores1 = user(504).useStateFromStores(tmp8, S);
        if (cResult[6] === stateFromStores1) {
          class S {
            constructor() {
              return closure_6.getChannel(closure_1);
            }
          }
        }
        if (null != stateFromStores1) {
          class S {
            constructor() {
              return closure_6.getChannel(closure_1);
            }
          }
          const obj2 = {};
          const merged = Object.assign(user);
          obj2.channel = stateFromStores1;
          let tmp16 = closure_12(closure_17, obj2);
        } else {
          class S {
            constructor() {
              return closure_6.getChannel(closure_1);
            }
          }
          const obj3 = {};
          const merged1 = Object.assign(user);
          tmp16 = closure_12(closure_16, obj3);
        }
        cResult[6] = stateFromStores1;
        cResult[7] = user;
        cResult[8] = tmp16;
        const tmpResult2 = user(504);
      }
    : function LaunchPadSearchResultUser(user) {
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
          let tmp7 = closure_12(closure_17, obj3);
        } else {
          const obj4 = {};
          const merged1 = Object.assign(user);
          tmp7 = closure_12(closure_16, obj4);
        }
        return tmp7;
      },
);
