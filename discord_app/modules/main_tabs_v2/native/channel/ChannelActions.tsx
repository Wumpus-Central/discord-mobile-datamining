// discord_app/modules/main_tabs_v2/native/channel/ChannelActions.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import VoiceNormalIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import AppChannelChat from "../../../app_channels/AppChannelChat.tsx";
import PhoneCallIcon from "../../../../design/components/Icon/native/redesign/generated/PhoneCallIcon.tsx";
import PhoneHangUpIcon from "../../../../design/components/Icon/native/redesign/generated/PhoneHangUpIcon.tsx";
import ForumActionCreatorsDefault from "../../../forums/ForumActionCreators.tsx";
import showThreadBrowserModalDefault from "../../../threads/native/showThreadBrowserModal.tsx";
import SwipeToMemberListUtils from "../sidebar/member_list/SwipeToMemberListUtils.tsx";
import useSearchContext from "../../../search/native/hooks/useSearchContext.tsx";
import GuildDirectorySearchModalActionCreatorsDefault from "../../../directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx";
import search_tracking_TrackingDefault from "../../../search/native/tracking/Tracking.tsx";
import ConversationCoachmark from "../../../conversations/components/native/ConversationCoachmark.tsx";
import IconActionButtonDefault from "../shared_components/IconActionButton.tsx";
import PrivateChannelButtonsDefault from "header/PrivateChannelButtons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActiveThreadsStore from "../../../threads/ActiveThreadsStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

require = fn;
const View = fn(17).View;
const THREADED_CHANNEL_TYPES = fn(2055).THREADED_CHANNEL_TYPES;
let closure_8 = fn(7511).setIsChannelDetailsSearchActive;
const Constants = fn(1085);
({ ChannelTypes: closure_9, ChannelTypesSets: c10, ComponentActions: closure_11 } = Constants);
let closure_12 = fn(7512).SearchEntrypointAnalyticsLocations;
const jsx = fn(21).jsx;
const createElement = fn(19).createElement;
const createStyles = fn(4890);
let closure_15 = createStyles.createStyles({
  actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" },
});
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type) => {
      _require = type;
      const cResult = require("c").c(9);
      let obj = require("c");
      let id = null;
      if (type.type === constants.GUILD_APP) {
        id = type.id;
      }
      const isAppChannelChatOpen = require("AppChannelChat").useIsAppChannelChatOpen(id);
      const obj2 = require("AppChannelChat");
      let id1 = null;
      if (type.type === constants.GUILD_APP) {
        id1 = type.id;
      }
      const appChannelChatUnread = require("AppChannelChat").useAppChannelChatUnread(id1);
      ({ hasUnread, mentionCount } = appChannelChatUnread);
      if (type.type === constants.GUILD_APP) {
        let tmp9 = !isAppChannelChatOpen;
        if (!isAppChannelChatOpen) {
          if (!hasUnread) {
            hasUnread = mentionCount > 0;
          }
          tmp9 = hasUnread;
        }
        if (isAppChannelChatOpen) {
          let ChatIcon = tmp(5890).AppsIcon;
        } else {
          ChatIcon = tmp(5855).ChatIcon;
        }
        if (cResult[0] === type.guild_id) {
          if (cResult[1] === type.id) {
            if (cResult[2] === tmp9) {
              if (cResult[3] === isAppChannelChatOpen) {
                if (cResult[4] === mentionCount) {
                  if (cResult[5] === ChatIcon) {
                    let tmp10 = cResult[6];
                  }
                  return tmp10;
                }
              }
            }
          }
        }
        if (cResult[7] !== isAppChannelChatOpen) {
          const intl = tmp(1126).intl;
          const t = tmp(1126).t;
          const stringResult = intl.string(isAppChannelChatOpen ? t["5MstTl"] : t.kkKapG);
          cResult[7] = isAppChannelChatOpen;
          cResult[8] = stringResult;
        } else {
          const obj3 = {
            source: null,
            IconComponent: ChatIcon,
            onPress() {
              const obj = AppChannelChat;
              if (isAppChannelChatOpen) {
                obj.closeAppChannelChat(type.id);
              } else {
                obj.openAppChannelChat(type.guild_id, type.id);
              }
            },
            accessibilityLabel: cResult[8],
            badge: tmp9,
            badgePosition: "right",
            buttonText: null,
          };
          let StringResult;
          if (tmp9) {
            if (mentionCount > 0) {
              const _String = String;
              StringResult = String(mentionCount);
            }
          }
          obj3.buttonText = StringResult;
          cResult[0] = type.guild_id;
          cResult[1] = type.id;
          cResult[2] = tmp9;
          cResult[3] = isAppChannelChatOpen;
          cResult[4] = mentionCount;
          cResult[5] = ChatIcon;
          cResult[6] = obj3;
          tmp10 = obj3;
        }
      } else {
        return null;
      }
      const tmpResult = require("AppChannelChat");
    }
  : (type) => {
      _require = type;
      let id = null;
      if (type.type === constants.GUILD_APP) {
        id = type.id;
      }
      const isAppChannelChatOpen = require("AppChannelChat").useIsAppChannelChatOpen(id);
      let obj = require("AppChannelChat");
      let id1 = null;
      if (type.type === constants.GUILD_APP) {
        id1 = type.id;
      }
      const appChannelChatUnread = require("AppChannelChat").useAppChannelChatUnread(id1);
      ({ hasUnread, mentionCount } = appChannelChatUnread);
      if (type.type === constants.GUILD_APP) {
        let tmp8 = !isAppChannelChatOpen;
        if (!isAppChannelChatOpen) {
          if (!hasUnread) {
            hasUnread = mentionCount > 0;
          }
          tmp8 = hasUnread;
        }
        if (isAppChannelChatOpen) {
          let ChatIcon = tmp2(5890).AppsIcon;
        } else {
          ChatIcon = tmp2(5855).ChatIcon;
        }
        const obj2 = {
          source: null,
          IconComponent: ChatIcon,
          onPress() {
            const obj = AppChannelChat;
            if (isAppChannelChatOpen) {
              obj.closeAppChannelChat(type.id);
            } else {
              obj.openAppChannelChat(type.guild_id, type.id);
            }
          },
          accessibilityLabel: null,
          badge: null,
          badgePosition: "right",
          buttonText: null,
        };
        const intl = tmp2(1126).intl;
        const t = tmp2(1126).t;
        obj2.accessibilityLabel = intl.string(isAppChannelChatOpen ? t["5MstTl"] : t.kkKapG);
        obj2.badge = tmp8;
        let StringResult;
        if (tmp8) {
          if (mentionCount > 0) {
            const _String = String;
            StringResult = String(mentionCount);
          }
        }
        obj2.buttonText = StringResult;
        return obj2;
      } else {
        return null;
      }
      const tmp2Result = require("AppChannelChat");
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
        const tmp7 = jsx(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 };
        const tmp7 = jsx(PhoneHangUpIcon.PhoneHangUpIcon, {
          size: "sm",
          color: nativeDefault.unsafe_rawColors.RED_400,
        });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(PhoneHangUpIcon.PhoneHangUpIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 });
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
        const tmp7 = jsx(VoiceNormalIcon.VoiceNormalIcon, {
          size: "sm",
          color: nativeDefault.unsafe_rawColors.GREEN_360,
        });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(items1[12]).c(21);
      channel = channel.channel;
      const screenIndex = channel.screenIndex;
      const tmp4 = closure_15();
      screenIndex(items1[21])(channel);
      let obj = channel(items1[12]);
      const canSearchForumPosts = channel(items1[22]).useCanSearchForumPosts(channel);
      let tmp8 = screenIndex(items1[23])();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ActiveThreadsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channel.guild_id) {
        if (cResult[2] === channel.id) {
          let tmp11 = cResult[3];
        }
        items1 = [];
        const stateFromStores = tmp(tmp2[24]).useStateFromStores(first, tmp11);
        const tmpResult = tmp(tmp2[24]);
        const _Symbol = Symbol;
        const canJoinThreadVoice = tmp(tmp2[25]).useCanJoinThreadVoice(channel);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [VoiceStateStore];
          cResult[4] = items2;
          let tmp14 = items2;
        } else {
          tmp14 = cResult[4];
        }
        if (cResult[5] !== channel.id) {
          class G {
            constructor() {
              return closure_7.isInChannel(channel.id);
            }
          }
          cResult[5] = channel.id;
          cResult[6] = G;
        } else {
          class G {
            constructor() {
              return closure_7.isInChannel(channel.id);
            }
          }
        }
        const tmpResult7 = tmp(tmp2[25]);
        const stateFromStores1 = tmp(tmp2[24]).useStateFromStores(tmp14, G);
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              return closure_7.isInChannel(channel.id);
            }
          }
          const items3 = [VoiceStateStore];
          cResult[7] = items3;
          const tmp18 = items3;
        } else {
          class G {
            constructor() {
              return closure_7.isInChannel(channel.id);
            }
          }
        }
        if (cResult[8] !== channel.id) {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          cResult[8] = channel.id;
          cResult[9] = O;
        } else {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        const tmpResult8 = tmp(tmp2[24]);
        const stateFromStores2 = tmp(tmp2[24]).useStateFromStores(tmp18, O);
        tmp5(tmp2[26])(channel);
        const tmpResult9 = tmp(tmp2[24]);
        const conversationsHeaderButton = tmp(tmp2[27]).useConversationsHeaderButton(channel);
        const tmpResult10 = tmp(tmp2[27]);
        const isGameInvitePostVoiceEnabled = tmp(tmp2[28]).useIsGameInvitePostVoiceEnabled(channel);
        const tmpResult11 = tmp(tmp2[28]);
        const isGameInvitesPost = tmp(tmp2[28]).useIsGameInvitesPost(channel);
        const tmpResult12 = tmp(tmp2[28]);
        tmp5(tmp2[29])(channel);
        if (canJoinThreadVoice) {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (constants.GUILD_DIRECTORY === channel.type) {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          tmp32[0] = tmp5(tmp2[31]);
          tmp32[1] = tmp(tmp2[32]).MagnifyingGlassIcon;
          tmp32[2] = function onPress() {
            GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
          };
          const intl2 = tmp(tmp2[16]).intl;
          tmp32[3] = intl2.string(tmp(tmp2[16]).t["5h0QOP"]);
          items1.push(tmp32);
        } else {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          if (canSearchForumPosts) {
            class O {
              constructor() {
                return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
              }
            }
            tmp30[0] = tmp5(tmp2[31]);
            tmp30[1] = tmp(tmp2[32]).MagnifyingGlassIcon;
            tmp30[2] = function onPress() {
              const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
            };
            const intl = tmp(tmp2[16]).intl;
            tmp30[3] = intl.string(tmp(tmp2[16]).t["5h0QOP"]);
            items1.push(tmp30);
          }
        }
        if (null != tmp27) {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (tmp8) {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (!tmp8) {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          const hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
          let tmp36 = !hasItem;
          if (!hasItem) {
            class O {
              constructor() {
                return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          if (tmp36) {
            class O {
              constructor() {
                return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
              }
            }
            const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
            tmp36 = !GUILD_THREADS_ONLY.has(channel.type);
          }
          if (hasItem) {
            class O {
              constructor() {
                return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          if (hasItem) {
            class O {
              constructor() {
                return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          if (hasItem) {
            class O {
              constructor() {
                return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          tmp8 = !hasItem;
        }
        if (!tmp8) {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          tmp37[0] = tmp5(tmp2[42]);
          tmp37[1] = tmp(tmp2[43]).ThreadIcon;
          tmp37[2] = function onPress() {
            return showThreadBrowserModalDefault(channel);
          };
          const intl3 = tmp(tmp2[16]).intl;
          tmp37[3] = intl3.string(tmp(tmp2[16]).t.B2panI);
          items1.unshift(tmp37);
        }
        const mapped = items1.map((accessibilityLabel, index) => {
          closure_0 = accessibilityLabel;
          if (accessibilityLabel === conversationsHeaderButton) {
            const obj2 = {
              isLast: tmp,
              children(arg0) {
                closure_0 = arg0;
                const obj = { noMargin: true };
                const merged = Object.assign(closure_0);
                obj.onPress = function onPress(arg0) {
                  closure_0();
                  const onPress = closure_0.onPress;
                  if (onPress != null) {
                    onPress(arg0);
                  }
                };
                return closure_1_13(screenIndex(items1[46]), obj);
              },
            };
            let tmp9 = jsx(
              ConversationCoachmark.ConversationCoachmark,
              {
                isLast: tmp,
                children(arg0) {
                  closure_0 = arg0;
                  const obj = { noMargin: true };
                  const merged = Object.assign(closure_0);
                  obj.onPress = function onPress(arg0) {
                    closure_0();
                    const onPress = closure_0.onPress;
                    if (onPress != null) {
                      onPress(arg0);
                    }
                  };
                  return closure_1_13(screenIndex(items1[46]), obj);
                },
              },
              accessibilityLabel.accessibilityLabel,
            );
          } else {
            let obj = { noMargin: tmp };
            let merged = Object.assign(accessibilityLabel);
            obj.key = accessibilityLabel.accessibilityLabel;
            tmp9 = createElement(IconActionButtonDefault, { noMargin: tmp });
          }
          return tmp9;
        });
        if (cResult[18] === tmp4.actionWrapper) {
          class O {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          return tmp40;
        }
        let obj3 = { style: tmp4.actionWrapper, children: mapped };
        const tmp43 = <conversationsHeaderButton style={tmp4.actionWrapper}>{mapped}</conversationsHeaderButton>;
        cResult[18] = tmp4.actionWrapper;
        cResult[19] = mapped;
        cResult[20] = tmp43;
        tmp27 = closure_16(channel);
        tmp40 = tmp43;
      }
      const fn = function c() {
        return ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id);
      };
      cResult[1] = channel.guild_id;
      cResult[2] = channel.id;
      cResult[3] = fn;
      tmp11 = fn;
      let obj2 = channel(items1[22]);
    }
  : (channel) => {
      channel = channel.channel;
      const screenIndex = channel.screenIndex;
      let items1;
      const tmp = closure_15();
      const tmp4 = screenIndex(items1[21])(channel);
      const canSearchForumPosts = channel(items1[22]).useCanSearchForumPosts(channel);
      let tmp7 = screenIndex(items1[23])();
      let obj = channel(items1[22]);
      const items = [ActiveThreadsStore];
      items1 = [];
      const stateFromStores = channel(items1[24]).useStateFromStores(items, () =>
        ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id),
      );
      let obj2 = channel(items1[24]);
      const canJoinThreadVoice = channel(items1[25]).useCanJoinThreadVoice(channel);
      let obj3 = channel(items1[25]);
      const items2 = [VoiceStateStore];
      const stateFromStores1 = channel(items1[24]).useStateFromStores(items2, () =>
        VoiceStateStore.isInChannel(channel.id),
      );
      let obj4 = channel(items1[24]);
      const items3 = [VoiceStateStore];
      const stateFromStores2 = channel(items1[24]).useStateFromStores(
        items3,
        () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length,
      );
      let fn = screenIndex(items1[26])(channel);
      let obj5 = channel(items1[24]);
      const conversationsHeaderButton = channel(items1[27]).useConversationsHeaderButton(channel);
      let obj6 = channel(items1[27]);
      const isGameInvitePostVoiceEnabled = channel(items1[28]).useIsGameInvitePostVoiceEnabled(channel);
      const obj7 = channel(items1[28]);
      const isGameInvitesPost = channel(items1[28]).useIsGameInvitesPost(channel);
      const tmp16 = closure_16(channel);
      const tmp17 = screenIndex(items1[29])(channel);
      if (canJoinThreadVoice) {
        if (isGameInvitesPost) {
          if (isGameInvitePostVoiceEnabled) {
            let tmp21 = stateFromStores1;
            if (!stateFromStores1) {
              tmp21 = tmp12;
            }
            let obj9 = {
              source: null,
              IconComponent: tmp21 ? closure_19 : closure_20,
              buttonText: null,
              buttonTextColor: "text-feedback-positive",
              onPress: null,
              accessibilityLabel: null,
            };
            let StringResult;
            if (tmp21) {
              if (stateFromStores2 > 0) {
                const _String = String;
                StringResult = String(stateFromStores2);
              }
            }
            obj9.buttonText = StringResult;
            if (stateFromStores1) {
              fn = () => PrivateChannelCallUtils.openChannelCallModal(channel);
            }
            obj9.onPress = fn;
            const intl2 = tmp5(tmp3[16]).intl;
            const string2 = intl2.string;
            let t1 = tmp5(tmp3[16]).t;
            if (stateFromStores1) {
              t1 = t1["4ry6yi"];
              let string2Result = string2(t1);
            } else {
              string2Result = string2(t1.My50nf);
            }
            obj9.accessibilityLabel = string2Result;
            obj9 = items1.push(obj9);
          }
        } else {
          if (tmp18) {
            const obj10 = {
              source: null,
              IconComponent: stateFromStores1 ? closure_18 : closure_17,
              onPress: null,
              accessibilityLabel: null,
            };
            let fn2 = fn;
            if (!stateFromStores1) {
              fn2 = () => PrivateChannelCallUtils.openChannelCallModal(channel);
            }
            obj10.onPress = fn2;
            const intl = tmp5(tmp3[16]).intl;
            const string = intl.string;
            const t = tmp5(tmp3[16]).t;
            if (stateFromStores1) {
              let stringResult = string(t["4ry6yi"]);
            } else {
              stringResult = string(t.My50nf);
            }
            obj10.accessibilityLabel = stringResult;
            items1.push(obj10);
          }
          tmp18 = channel.isVocalThread() && tmp12;
        }
      }
      const type = channel.type;
      if (constants.GUILD_DIRECTORY === type) {
        const obj11 = {
          source: tmp2(tmp3[31]),
          IconComponent: tmp5(tmp3[32]).MagnifyingGlassIcon,
          onPress() {
            GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
          },
          accessibilityLabel: null,
        };
        const intl5 = tmp5(tmp3[16]).intl;
        obj11.accessibilityLabel = intl5.string(tmp5(tmp3[16]).t["5h0QOP"]);
        items1.push(obj11);
      } else {
        if (constants.GUILD_FORUM !== type) {
          if (constants.GUILD_MEDIA !== type) {
            if (null != conversationsHeaderButton) {
              items1.push(conversationsHeaderButton);
            }
            if (null != tmp17) {
              items1.push(tmp17);
            } else {
              const obj12 = {
                source: tmp2(tmp3[31]),
                IconComponent: tmp5(tmp3[32]).MagnifyingGlassIcon,
                onPress() {
                  closure_8(channel.id, true, "initial");
                  if (obj2.isIOS()) {
                    const chatInputRef = ChatInputUtils.getChatInputRef(channel.id, screenIndex);
                    if (chatInputRef != null) {
                      chatInputRef.blur();
                    }
                    const tmp2Result = ChatInputUtils;
                  }
                  obj2 = PlatformUtils;
                  const guildId = channel.getGuildId();
                  const isThreadResult = channel.isThread();
                  const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(
                    channel.id,
                    guildId,
                    isThreadResult,
                  );
                  const tmp2Result4 = useSearchContext;
                  search_tracking_TrackingDefault.trackSearchOpened({
                    searchContext: channelDetailsSearchContext,
                    searchLocation: constants.CHANNEL_HEADER,
                  });
                  const obj3 = { searchContext: channelDetailsSearchContext, searchLocation: constants.CHANNEL_HEADER };
                  if (tmp2Result5.isSwipeToMemberListEnabled()) {
                    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                    const obj4 = { source: "channel-header-search", channelId: channel.id, screenIndex };
                    ComponentDispatch.dispatch(constants3.SHOW_CHANNEL_DETAILS, obj4);
                  } else {
                    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        const obj5 = { channelId: channel.id, search: true, source: "channel-header-search" };
                        rootNavigationRef.navigate("sidebar", obj5);
                      }
                    }
                    const tmp2Result6 = RootNavigationRef;
                  }
                  tmp2Result5 = SwipeToMemberListUtils;
                },
                accessibilityLabel: null,
              };
              const intl3 = tmp5(tmp3[16]).intl;
              obj12.accessibilityLabel = intl3.string(tmp5(tmp3[16]).t["5h0QOP"]);
              items1.push(obj12);
            }
          }
        }
        if (canSearchForumPosts) {
          const obj13 = {
            source: tmp2(tmp3[31]),
            IconComponent: tmp5(tmp3[32]).MagnifyingGlassIcon,
            onPress() {
              const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
            },
            accessibilityLabel: null,
          };
          const intl4 = tmp5(tmp3[16]).intl;
          obj13.accessibilityLabel = intl4.string(tmp5(tmp3[16]).t["5h0QOP"]);
          items1.push(obj13);
        }
      }
      if (null != tmp16) {
        items1.push(tmp16);
      }
      if (tmp7) {
        tmp7 = 0 !== items1.length;
      }
      if (!tmp7) {
        let hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
        let tmp35 = !hasItem;
        if (!hasItem) {
          tmp35 = stateFromStores;
        }
        if (tmp35) {
          const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
          tmp35 = !GUILD_THREADS_ONLY.has(channel.type);
        }
        if (hasItem) {
          hasItem = !tmp4;
        }
        if (hasItem) {
          hasItem = !channel.isForumLikeChannel();
        }
        if (hasItem) {
          hasItem = tmp35;
        }
        tmp7 = !hasItem;
      }
      if (!tmp7) {
        const obj14 = {
          source: tmp2(tmp3[42]),
          IconComponent: tmp5(tmp3[43]).ThreadIcon,
          onPress() {
            return showThreadBrowserModalDefault(channel);
          },
          accessibilityLabel: null,
        };
        const intl6 = tmp5(tmp3[16]).intl;
        obj14.accessibilityLabel = intl6.string(tmp5(tmp3[16]).t.B2panI);
        items1.unshift(obj14);
      }
      const obj8 = channel(items1[28]);
      return (
        <conversationsHeaderButton style={tmp.actionWrapper}>
          {items1.map((accessibilityLabel, index) => {
            closure_0 = accessibilityLabel;
            if (accessibilityLabel === conversationsHeaderButton) {
              const obj2 = {
                isLast: tmp,
                children(arg0) {
                  closure_0 = arg0;
                  const obj = { noMargin: true };
                  const merged = Object.assign(closure_0);
                  obj.onPress = function onPress(arg0) {
                    closure_0();
                    const onPress = closure_0.onPress;
                    if (onPress != null) {
                      onPress(arg0);
                    }
                  };
                  return closure_1_13(screenIndex(items1[46]), obj);
                },
              };
              let tmp9 = jsx(
                ConversationCoachmark.ConversationCoachmark,
                {
                  isLast: tmp,
                  children(arg0) {
                    closure_0 = arg0;
                    const obj = { noMargin: true };
                    const merged = Object.assign(closure_0);
                    obj.onPress = function onPress(arg0) {
                      closure_0();
                      const onPress = closure_0.onPress;
                      if (onPress != null) {
                        onPress(arg0);
                      }
                    };
                    return closure_1_13(screenIndex(items1[46]), obj);
                  },
                },
                accessibilityLabel.accessibilityLabel,
              );
            } else {
              let obj = { noMargin: tmp };
              let merged = Object.assign(accessibilityLabel);
              obj.key = accessibilityLabel.accessibilityLabel;
              tmp9 = createElement(IconActionButtonDefault, { noMargin: tmp });
            }
            return tmp9;
          })}
        </conversationsHeaderButton>
      );
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(576).c(6);
      channelId = channelId.channelId;
      const screenIndex = channelId.screenIndex;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function s() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = channelId(576);
      const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
      channelId(5100);
      let tmp10 = null;
      if (null != stateFromStores) {
        tmp10 = null;
        if (!tmp9) {
          tmp10 = null;
          if (!channelId.showCreateThread) {
            if (cResult[3] === stateFromStores) {
            }
            const obj2 = { channel: stateFromStores, screenIndex };
            const tmp14 = <closure_21 channel={stateFromStores} screenIndex={screenIndex} />;
            cResult[3] = stateFromStores;
            cResult[4] = screenIndex;
            cResult[5] = tmp14;
          }
        }
      }
      return tmp10;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      ({ screenIndex, showCreateThread } = channelId);
      const items = [ChannelStore];
      const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      channelId(5100);
      let tmp4 = null;
      if (null != stateFromStores) {
        tmp4 = null;
        if (!tmp3) {
          tmp4 = null;
          if (!showCreateThread) {
            const obj2 = { channel: stateFromStores, screenIndex };
            tmp4 = <closure_21 channel={stateFromStores} screenIndex={screenIndex} />;
          }
        }
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let ForumChannelCloseSearchButton = channelId;
      const cResult = channelId(576).c(13);
      channelId = channelId.channelId;
      ({ screenIndex, containerStyle, showCreateThread } = channelId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          const channel = ChannelStore.getChannel(channelId);
          let flag;
          if (channel != null) {
            flag = channel.isMultiUserDM();
          }
          if (flag == null) {
            flag = false;
          }
          const obj2 = { isMultiUserDM: flag, isDM: null };
          const channel1 = ChannelStore.getChannel(channelId);
          let flag2;
          if (channel1 != null) {
            flag2 = channel1.isDM();
          }
          if (flag2 == null) {
            flag2 = false;
          }
          obj2.isDM = flag2;
          return obj2;
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[2];
      }
      const result = ForumChannelCloseSearchButton(504);
      const stateFromStoresObject = result.useStateFromStoresObject(first, tmp4);
      ({ isMultiUserDM, isDM } = stateFromStoresObject);
      const result1 = ForumChannelCloseSearchButton(7528);
      const hasForumSearchQuery = result1.useHasForumSearchQuery(channelId);
      if (cResult[3] === channelId) {
        if (cResult[4] === hasForumSearchQuery) {
          if (cResult[5] === isDM) {
            if (cResult[6] === isMultiUserDM) {
              if (cResult[7] === screenIndex) {
                if (cResult[8] === showCreateThread) {
                  if (cResult[10] === containerStyle) {
                    if (cResult[11] === tmp7) {
                      let tmp14 = cResult[12];
                    }
                    return tmp14;
                  }
                  const obj3 = { style: containerStyle, children: cResult[9] };
                  const tmp17 = <View style={containerStyle}>{cResult[9]}</View>;
                  cResult[10] = containerStyle;
                  cResult[11] = cResult[9];
                  cResult[12] = tmp17;
                  tmp14 = tmp17;
                }
              }
            }
          }
        }
      }
      if (hasForumSearchQuery) {
        ForumChannelCloseSearchButton = ForumChannelCloseSearchButton(13098).ForumChannelCloseSearchButton;
        const obj = { channelId };
        let tmp10 = <ForumChannelCloseSearchButton channelId={channelId} />;
      } else {
        if (!isDM) {
          if (!isMultiUserDM) {
            const obj4 = { channelId, screenIndex, showCreateThread };
            tmp10 = <closure_22 channelId={channelId} screenIndex={screenIndex} showCreateThread={showCreateThread} />;
          }
        }
        const obj5 = { channelId, screenIndex };
        tmp10 = jsx(PrivateChannelButtonsDefault, { channelId, screenIndex });
      }
      cResult[3] = channelId;
      cResult[4] = hasForumSearchQuery;
      cResult[5] = isDM;
      cResult[6] = isMultiUserDM;
      cResult[7] = screenIndex;
      cResult[8] = showCreateThread;
      cResult[9] = tmp10;
      let obj2 = channelId(576);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const screenIndex = channelId.screenIndex;
      ({ containerStyle, showCreateThread } = channelId);
      const items = [ChannelStore];
      const stateFromStoresObject = channelId(504).useStateFromStoresObject(items, () => {
        const channel = ChannelStore.getChannel(channelId);
        let flag;
        if (channel != null) {
          flag = channel.isMultiUserDM();
        }
        if (flag == null) {
          flag = false;
        }
        const obj2 = { isMultiUserDM: flag, isDM: null };
        const channel1 = ChannelStore.getChannel(channelId);
        let flag2;
        if (channel1 != null) {
          flag2 = channel1.isDM();
        }
        if (flag2 == null) {
          flag2 = false;
        }
        obj2.isDM = flag2;
        return obj2;
      });
      ({ isMultiUserDM, isDM } = stateFromStoresObject);
      const obj = channelId(504);
      const tmp = channelId;
      const obj3 = { style: containerStyle, children: null };
      if (obj2.useHasForumSearchQuery(channelId)) {
        const obj4 = { channelId };
        let tmp4Result = jsx(tmp(13098).ForumChannelCloseSearchButton, { channelId });
      } else {
        if (!isDM) {
          if (!isMultiUserDM) {
            const obj5 = { channelId, screenIndex, showCreateThread };
            tmp4Result = (
              <closure_22 channelId={channelId} screenIndex={screenIndex} showCreateThread={showCreateThread} />
            );
          }
        }
        const obj6 = { channelId, screenIndex };
        tmp4Result = jsx(PrivateChannelButtonsDefault, { channelId, screenIndex });
      }
      obj3.children = tmp4Result;
      return <View style={containerStyle}>{null}</View>;
    };
