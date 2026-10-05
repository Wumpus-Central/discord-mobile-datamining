// discord_app/modules/main_tabs_v2/native/channel/ChannelActions.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react3 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ChannelRecord from "../../../../records/ChannelRecord.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import VoiceNormalIcon2 from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import ChannelDetailsStore from "../sidebar/details/stores/ChannelDetailsStore.tsx";
import TrackingConstants from "../../../search/native/tracking/TrackingConstants.tsx";
import AppChannelChat from "../../../app_channels/AppChannelChat.tsx";
import PhoneCallIcon2 from "../../../../design/components/Icon/native/redesign/generated/PhoneCallIcon.tsx";
import PhoneHangUpIcon2 from "../../../../design/components/Icon/native/redesign/generated/PhoneHangUpIcon.tsx";
import ForumActionCreatorsDefault from "../../../forums/ForumActionCreators.tsx";
import showThreadBrowserModalDefault from "../../../threads/native/showThreadBrowserModal.tsx";
import SwipeToMemberListUtils from "../sidebar/member_list/SwipeToMemberListUtils.tsx";
import useSearchContext from "../../../search/native/hooks/useSearchContext.tsx";
import GuildDirectorySearchModalActionCreatorsDefault from "../../../directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx";
import search_tracking_TrackingDefault from "../../../search/native/tracking/Tracking.tsx";
import ConversationCoachmark from "../../../conversations/components/native/ConversationCoachmark.tsx";
import IconActionButtonDefault from "../shared_components/IconActionButton.tsx";
import PrivateChannelButtonsDefault from "header/PrivateChannelButtons.tsx";
import ActiveThreadsStore from "../../../threads/ActiveThreadsStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import Constants from "../../../../Constants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const react = react2;
let _require, channelId;

let c10;
let c9;
let unpackModuleId;
const View = react_native.View;
const THREADED_CHANNEL_TYPES = ChannelRecord.THREADED_CHANNEL_TYPES;
let closure_8 = ChannelDetailsStore.setIsChannelDetailsSearchActive;
({ ChannelTypes: c9, ChannelTypesSets: c10, ComponentActions: unpackModuleId } = Constants);
let closure_12 = TrackingConstants.SearchEntrypointAnalyticsLocations;
const jsx = Fragment.jsx;
const createElement = react2.createElement;
let closure_15 = createStyles.createStyles({
  actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type) => {
      let StringResult;
      let hasUnread;
      let mentionCount;
      _require = type;
      let obj = require("react");
      const cResult = obj.c(9);
      let id = null;
      const useIsAppChannelChatOpen = require("AppChannelChat").useIsAppChannelChatOpen;
      require("AppChannelChat");
      if (type.type === constants.GUILD_APP) {
        id = type.id;
      }
      const isAppChannelChatOpen = useIsAppChannelChatOpen(id);
      let id1 = null;
      const useAppChannelChatUnread = require("AppChannelChat").useAppChannelChatUnread;
      require("AppChannelChat");
      if (type.type === constants.GUILD_APP) {
        id1 = type.id;
      }
      const appChannelChatUnread = useAppChannelChatUnread(id1);
      ({ hasUnread, mentionCount } = appChannelChatUnread);
      if (type.type === constants.GUILD_APP) {
        let ChatIcon;
        let tmp13;
        let tmp11 = !isAppChannelChatOpen;
        if (tmp11) {
          if (!hasUnread) {
            hasUnread = mentionCount > 0;
          }
          tmp11 = hasUnread;
        }
        if (isAppChannelChatOpen) {
          ChatIcon = tmp(5890).AppsIcon;
        } else {
          ChatIcon = tmp(5855).ChatIcon;
        }
        if (cResult[0] === type.guild_id) {
          if (cResult[1] === type.id) {
            if (cResult[2] === tmp11) {
              if (cResult[3] === isAppChannelChatOpen) {
                if (cResult[4] === mentionCount) {
                  let tmp12;
                  if (cResult[5] === ChatIcon) {
                    tmp12 = cResult[6];
                  }
                  return tmp12;
                }
              }
            }
          }
        }
        if (cResult[7] !== isAppChannelChatOpen) {
          const intl = tmp(1126).intl;
          const string = intl.string;
          const t = tmp(1126).t;
          const stringResult = string(isAppChannelChatOpen ? t["5MstTl"] : t.kkKapG);
          cResult[7] = isAppChannelChatOpen;
          cResult[8] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[8];
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
          accessibilityLabel: tmp13,
          badge: tmp11,
          badgePosition: "right",
          buttonText: StringResult,
        };
        StringResult = undefined;
        if (tmp11) {
          if (mentionCount > 0) {
            const _String = String;
            StringResult = String(mentionCount);
          }
        }
        cResult[0] = type.guild_id;
        cResult[1] = type.id;
        cResult[2] = tmp11;
        cResult[3] = isAppChannelChatOpen;
        cResult[4] = mentionCount;
        cResult[5] = ChatIcon;
        cResult[6] = obj2;
        tmp12 = obj2;
      } else {
        return null;
      }
    }
  : (type) => {
      let StringResult;
      let hasUnread;
      let mentionCount;
      let string;
      let t;
      _require = type;
      let id = null;
      const useIsAppChannelChatOpen = require("AppChannelChat").useIsAppChannelChatOpen;
      require("AppChannelChat");
      if (type.type === constants.GUILD_APP) {
        id = type.id;
      }
      const isAppChannelChatOpen = useIsAppChannelChatOpen(id);
      let id1 = null;
      const useAppChannelChatUnread = require("AppChannelChat").useAppChannelChatUnread;
      require("AppChannelChat");
      if (type.type === constants.GUILD_APP) {
        id1 = type.id;
      }
      const appChannelChatUnread = useAppChannelChatUnread(id1);
      ({ hasUnread, mentionCount } = appChannelChatUnread);
      if (type.type === constants.GUILD_APP) {
        let ChatIcon;
        let tmp10 = !isAppChannelChatOpen;
        if (tmp10) {
          if (!hasUnread) {
            hasUnread = mentionCount > 0;
          }
          tmp10 = hasUnread;
        }
        if (isAppChannelChatOpen) {
          ChatIcon = tmp2(5890).AppsIcon;
        } else {
          ChatIcon = tmp2(5855).ChatIcon;
        }
        let obj = {
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
          accessibilityLabel: string(isAppChannelChatOpen ? t["5MstTl"] : t.kkKapG),
          badge: tmp10,
          badgePosition: "right",
          buttonText: StringResult,
        };
        const intl = tmp2(1126).intl;
        string = intl.string;
        t = tmp2(1126).t;
        StringResult = undefined;
        if (tmp10) {
          if (mentionCount > 0) {
            const _String = String;
            StringResult = String(mentionCount);
          }
        }
        return obj;
      } else {
        return null;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react3;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
        const tmp7 = <PhoneCallIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
      return <PhoneCallIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react3;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
        const tmp7 = <PhoneHangUpIcon size="sm" color={nativeDefault.unsafe_rawColors.RED_400} />;
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
      return <PhoneHangUpIcon size="sm" color={nativeDefault.unsafe_rawColors.RED_400} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react3;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
        const tmp7 = <VoiceNormalIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
      return <VoiceNormalIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react3;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = jsx(VoiceNormalIcon2.VoiceNormalIcon, { size: "sm" });
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(VoiceNormalIcon2.VoiceNormalIcon, { size: "sm" });
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let items1;
      let tmp40;
      let tmp = channel;
      let obj = channel(items1[12]);
      const cResult = obj.c(21);
      channel = channel.channel;
      const screenIndex = channel.screenIndex;
      const tmp4 = closure_15();
      const tmp5 = screenIndex;
      screenIndex(items1[21])(channel);
      let obj2 = channel(items1[22]);
      const canSearchForumPosts = obj2.useCanSearchForumPosts(channel);
      let tmp8 = screenIndex(items1[23])();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ActiveThreadsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channel.guild_id) {
        let tmp11;
        let tmp14;
        let tmp18;
        if (cResult[2] === channel.id) {
          tmp11 = cResult[3];
        }
        const tmpResult = tmp(items1[24]);
        items1 = [];
        const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
        const _Symbol = Symbol;
        const tmpResult7 = tmp(items1[25]);
        const canJoinThreadVoice = tmpResult7.useCanJoinThreadVoice(channel);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [VoiceStateStore];
          cResult[4] = items2;
          tmp14 = items2;
        } else {
          tmp14 = cResult[4];
        }
        if (cResult[5] !== channel.id) {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
          cResult[5] = channel.id;
          cResult[6] = G;
        } else {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
        }
        const tmpResult8 = tmp(items1[24]);
        const stateFromStores1 = tmpResult8.useStateFromStores(tmp14, G);
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
          const items3 = [VoiceStateStore];
          cResult[7] = items3;
          tmp18 = items3;
        } else {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
        }
        if (cResult[8] !== channel.id) {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          cResult[8] = channel.id;
          cResult[9] = O;
        } else {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        const tmpResult9 = tmp(items1[24]);
        const stateFromStores2 = tmpResult9.useStateFromStores(tmp18, O);
        tmp5(items1[26])(channel);
        const tmpResult10 = tmp(items1[27]);
        const conversationsHeaderButton = tmpResult10.useConversationsHeaderButton(channel);
        const tmpResult11 = tmp(items1[28]);
        const isGameInvitePostVoiceEnabled = tmpResult11.useIsGameInvitePostVoiceEnabled(channel);
        const tmpResult12 = tmp(items1[28]);
        const isGameInvitesPost = tmpResult12.useIsGameInvitesPost(channel);
        const tmp27 = closure_16(channel);
        tmp5(items1[29])(channel);
        if (canJoinThreadVoice) {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (constants.GUILD_DIRECTORY === channel.type) {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          const push2 = items1.push;
          tmp32[0] = tmp5(items1[31]);
          tmp32[1] = tmp(items1[32]).MagnifyingGlassIcon;
          tmp32[2] = function onPress() {
            const obj = GuildDirectorySearchModalActionCreatorsDefault;
            const obj2 = { channel };
            obj.open(obj2);
          };
          const intl2 = tmp(tmp2[16]).intl;
          tmp32[3] = intl2.string(tmp(items1[16]).t["5h0QOP"]);
          push2(tmp32);
        } else {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          if (canSearchForumPosts) {
            class O {
              constructor() {
                return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
              }
            }
            const push = items1.push;
            tmp30[0] = tmp5(items1[31]);
            tmp30[1] = tmp(items1[32]).MagnifyingGlassIcon;
            tmp30[2] = function onPress() {
              const obj = ForumActionCreatorsDefault;
              const result = obj.updateForumSearchQuery(channel.id, "");
            };
            const intl = tmp(tmp2[16]).intl;
            tmp30[3] = intl.string(tmp(items1[16]).t["5h0QOP"]);
            push(tmp30);
          }
        }
        if (null != tmp27) {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (tmp8) {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (!tmp8) {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          const hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
          let tmp36 = !hasItem && stateFromStores;
          if (tmp36) {
            class O {
              constructor() {
                return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
              }
            }
            const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
            tmp36 = !GUILD_THREADS_ONLY.has(channel.type);
          }
          if (hasItem) {
            class O {
              constructor() {
                return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          if (hasItem) {
            class O {
              constructor() {
                return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          if (hasItem) {
            class O {
              constructor() {
                return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          tmp8 = !hasItem;
        }
        if (!tmp8) {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          const unshift = items1.unshift;
          tmp37[0] = tmp5(items1[42]);
          tmp37[1] = tmp(items1[43]).ThreadIcon;
          tmp37[2] = function onPress() {
            return showThreadBrowserModalDefault(channel);
          };
          const intl3 = tmp(tmp2[16]).intl;
          tmp37[3] = intl3.string(tmp(items1[16]).t.B2panI);
          unshift(tmp37);
        }
        const actionWrapper = tmp4.actionWrapper;
        const mapped = items1.map((accessibilityLabel, index) => {
          let tmp9;
          let closure_0 = accessibilityLabel;
          let tmp = index === items1.length - 1;
          if (accessibilityLabel === conversationsHeaderButton) {
            tmp9 = jsx(
              ConversationCoachmark.ConversationCoachmark,
              {
                isLast: tmp,
                children(arg0) {
                  closure_0 = arg0;
                  const obj = {
                    noMargin: true,
                    onPress(arg0) {
                      closure_0();
                      const onPress = closure_0.onPress;
                      if (onPress != null) {
                        onPress(arg0);
                      }
                    },
                  };
                  const tmp = closure_1_1(closure_1_2[46]);
                  const merged = Object.assign(closure_0);
                  return closure_1_13(tmp, obj);
                },
              },
              accessibilityLabel.accessibilityLabel,
            );
          } else {
            IconActionButtonDefault;
            let merged = Object.assign(accessibilityLabel);
            tmp9 = <tmp5 noMargin={tmp} key={accessibilityLabel.accessibilityLabel} />;
          }
          return tmp9;
        });
        if (cResult[18] === tmp4.actionWrapper) {
          class O {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          return tmp40;
        }
        const tmp43 = <conversationsHeaderButton style={actionWrapper}>{mapped}</conversationsHeaderButton>;
        cResult[18] = tmp4.actionWrapper;
        cResult[19] = mapped;
        cResult[20] = tmp43;
        tmp40 = tmp43;
      }
      const fn = function c() {
        return ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id);
      };
      cResult[1] = channel.guild_id;
      cResult[2] = channel.id;
      cResult[3] = fn;
      tmp11 = fn;
    }
  : (channel) => {
      let StringResult;
      let fn2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let string2Result;
      let stringResult;
      channel = channel.channel;
      const screenIndex = channel.screenIndex;
      let items1;
      let tmp = closure_15();
      const tmp5 = channel;
      const tmp4 = screenIndex(items1[21])(channel);
      let obj = channel(items1[22]);
      const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
      let tmp7 = screenIndex(items1[23])();
      let obj2 = channel(items1[24]);
      const items = [ActiveThreadsStore];
      items1 = [];
      const stateFromStores = obj2.useStateFromStores(items, () =>
        ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id),
      );
      let obj3 = channel(items1[25]);
      const canJoinThreadVoice = obj3.useCanJoinThreadVoice(channel);
      let obj4 = channel(items1[24]);
      const items2 = [VoiceStateStore];
      const stateFromStores1 = obj4.useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
      let obj5 = channel(items1[24]);
      const items3 = [VoiceStateStore];
      const stateFromStores2 = obj5.useStateFromStores(
        items3,
        () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length,
      );
      let fn = screenIndex(items1[26])(channel);
      let obj6 = channel(items1[27]);
      const conversationsHeaderButton = obj6.useConversationsHeaderButton(channel);
      const obj7 = channel(items1[28]);
      const isGameInvitePostVoiceEnabled = obj7.useIsGameInvitePostVoiceEnabled(channel);
      const obj8 = channel(items1[28]);
      const isGameInvitesPost = obj8.useIsGameInvitesPost(channel);
      const tmp16 = closure_16(channel);
      const tmp17 = screenIndex(items1[29])(channel);
      if (canJoinThreadVoice) {
        if (isGameInvitesPost) {
          if (isGameInvitePostVoiceEnabled) {
            const obj9 = {
              source: null,
              IconComponent: stateFromStores1 || stateFromStores2 > 0 ? closure_19 : closure_20,
              buttonText: StringResult,
              buttonTextColor: "text-feedback-positive",
              onPress: fn,
              accessibilityLabel: string2Result,
            };
            StringResult = undefined;
            const push2 = items1.push;
            if (stateFromStores1 || stateFromStores2 > 0) {
              if (stateFromStores2 > 0) {
                const _String = String;
                StringResult = String(stateFromStores2);
              }
            }
            if (stateFromStores1) {
              fn = () => {
                const obj = PrivateChannelCallUtils;
                return obj.openChannelCallModal(channel);
              };
            }
            const intl2 = tmp5(tmp3[16]).intl;
            const string2 = intl2.string;
            const t2 = tmp5(tmp3[16]).t;
            if (stateFromStores1) {
              string2Result = string2(t2["4ry6yi"]);
            } else {
              string2Result = string2(t2.My50nf);
            }
            push2(obj9);
          }
        } else {
          const tmp18 = channel.isVocalThread() && stateFromStores2 > 0;
          if (tmp18) {
            const obj10 = {
              source: null,
              IconComponent: stateFromStores1 ? closure_18 : closure_17,
              onPress: fn2,
              accessibilityLabel: stringResult,
            };
            fn2 = fn;
            const push = items1.push;
            if (!stateFromStores1) {
              fn2 = () => {
                const obj = PrivateChannelCallUtils;
                return obj.openChannelCallModal(channel);
              };
            }
            const intl = tmp5(tmp3[16]).intl;
            const string = intl.string;
            const t = tmp5(tmp3[16]).t;
            if (stateFromStores1) {
              stringResult = string(t["4ry6yi"]);
            } else {
              stringResult = string(t.My50nf);
            }
            push(obj10);
          }
        }
      }
      const type = channel.type;
      if (constants.GUILD_DIRECTORY === type) {
        const push5 = items1.push;
        const obj11 = {
          source: screenIndex(items1[31]),
          IconComponent: tmp5(items1[32]).MagnifyingGlassIcon,
          onPress() {
            const obj = GuildDirectorySearchModalActionCreatorsDefault;
            const obj2 = { channel };
            obj.open(obj2);
          },
          accessibilityLabel: intl5.string(tmp5(items1[16]).t["5h0QOP"]),
        };
        intl5 = tmp5(tmp3[16]).intl;
        push5(obj11);
      } else {
        if (constants.GUILD_FORUM !== type) {
          if (constants.GUILD_MEDIA !== type) {
            if (null != conversationsHeaderButton) {
              items1.push(conversationsHeaderButton);
            }
            if (null != tmp17) {
              items1.push(tmp17);
            } else {
              const push3 = items1.push;
              const obj12 = {
                source: screenIndex(items1[31]),
                IconComponent: tmp5(items1[32]).MagnifyingGlassIcon,
                onPress() {
                  closure_8(channel.id, true, "initial");
                  const obj2 = PlatformUtils;
                  if (obj2.isIOS()) {
                    const tmp2Result = ChatInputUtils;
                    const chatInputRef = tmp2Result.getChatInputRef(channel.id, screenIndex);
                    if (chatInputRef != null) {
                      chatInputRef.blur();
                    }
                  }
                  const isThreadResult = channel.isThread();
                  const guildId = channel.getGuildId();
                  const tmp2Result4 = useSearchContext;
                  const channelDetailsSearchContext = tmp2Result4.getChannelDetailsSearchContext(
                    channel.id,
                    guildId,
                    isThreadResult,
                  );
                  const obj3 = { searchContext: channelDetailsSearchContext, searchLocation: constants.CHANNEL_HEADER };
                  const obj6 = search_tracking_TrackingDefault;
                  obj6.trackSearchOpened(obj3);
                  const tmp2Result5 = SwipeToMemberListUtils;
                  if (tmp2Result5.isSwipeToMemberListEnabled()) {
                    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                    const obj4 = { source: "channel-header-search", channelId: channel.id, screenIndex };
                    ComponentDispatch.dispatch(unpackModuleId.SHOW_CHANNEL_DETAILS, obj4);
                  } else {
                    const tmp2Result6 = RootNavigationRef;
                    const rootNavigationRef = tmp2Result6.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        const obj5 = { channelId: channel.id, search: true, source: "channel-header-search" };
                        rootNavigationRef.navigate("sidebar", obj5);
                      }
                    }
                  }
                },
                accessibilityLabel: intl3.string(tmp5(items1[16]).t["5h0QOP"]),
              };
              intl3 = tmp5(tmp3[16]).intl;
              push3(obj12);
            }
          }
        }
        if (canSearchForumPosts) {
          const push4 = items1.push;
          const obj13 = {
            source: screenIndex(items1[31]),
            IconComponent: tmp5(items1[32]).MagnifyingGlassIcon,
            onPress() {
              const obj = ForumActionCreatorsDefault;
              const result = obj.updateForumSearchQuery(channel.id, "");
            },
            accessibilityLabel: intl4.string(tmp5(items1[16]).t["5h0QOP"]),
          };
          intl4 = tmp5(tmp3[16]).intl;
          push4(obj13);
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
        let tmp35 = !hasItem && stateFromStores;
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
        const unshift = items1.unshift;
        const obj14 = {
          source: screenIndex(items1[42]),
          IconComponent: tmp5(items1[43]).ThreadIcon,
          onPress() {
            return showThreadBrowserModalDefault(channel);
          },
          accessibilityLabel: intl6.string(tmp5(items1[16]).t.B2panI),
        };
        intl6 = tmp5(tmp3[16]).intl;
        unshift(obj14);
      }
      return (
        <conversationsHeaderButton style={tmp.actionWrapper}>
          {items1.map((accessibilityLabel, index) => {
            let tmp9;
            let closure_0 = accessibilityLabel;
            let tmp = index === items1.length - 1;
            if (accessibilityLabel === conversationsHeaderButton) {
              tmp9 = jsx(
                ConversationCoachmark.ConversationCoachmark,
                {
                  isLast: tmp,
                  children(arg0) {
                    closure_0 = arg0;
                    const obj = {
                      noMargin: true,
                      onPress(arg0) {
                        closure_0();
                        const onPress = closure_0.onPress;
                        if (onPress != null) {
                          onPress(arg0);
                        }
                      },
                    };
                    const tmp = closure_1_1(closure_1_2[46]);
                    const merged = Object.assign(closure_0);
                    return closure_1_13(tmp, obj);
                  },
                },
                accessibilityLabel.accessibilityLabel,
              );
            } else {
              IconActionButtonDefault;
              let merged = Object.assign(accessibilityLabel);
              tmp9 = <tmp5 noMargin={tmp} key={accessibilityLabel.accessibilityLabel} />;
            }
            return tmp9;
          })}
        </conversationsHeaderButton>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      const obj = channelId(576);
      const cResult = obj.c(6);
      channelId = channelId.channelId;
      const screenIndex = channelId.screenIndex;
      const showCreateThread = channelId.showCreateThread;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function s() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      channelId(5100);
      let tmp10 = null;
      if (null != stateFromStores) {
        tmp10 = null;
        if (!tmp9) {
          tmp10 = null;
          if (!showCreateThread) {
            if (cResult[3] === stateFromStores) {
              let tmp11;
              if (cResult[4] === screenIndex) {
                tmp11 = cResult[5];
              }
              tmp10 = tmp11;
            }
            const tmp14 = <closure_21 channel={stateFromStores} screenIndex={screenIndex} />;
            cResult[3] = stateFromStores;
            cResult[4] = screenIndex;
            cResult[5] = tmp14;
            tmp11 = tmp14;
          }
        }
      }
      return tmp10;
    }
  : (channelId) => {
      let screenIndex;
      let showCreateThread;
      channelId = channelId.channelId;
      ({ screenIndex, showCreateThread } = channelId);
      const items = [ChannelStore];
      const obj = channelId(504);
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      channelId(5100);
      let tmp4 = null;
      if (null != stateFromStores) {
        tmp4 = null;
        if (!tmp3) {
          tmp4 = null;
          if (!showCreateThread) {
            tmp4 = <closure_21 channel={stateFromStores} screenIndex={screenIndex} />;
          }
        }
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let containerStyle;
      let first;
      let isDM;
      let isMultiUserDM;
      let screenIndex;
      let showCreateThread;
      let tmp12;
      let tmp6;
      const obj = channelId(576);
      const cResult = obj.c(13);
      channelId = channelId.channelId;
      ({ screenIndex, containerStyle, showCreateThread } = channelId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          let flag2;
          const channel = ChannelStore.getChannel(channelId);
          let flag;
          if (channel != null) {
            flag = channel.isMultiUserDM();
          }
          if (flag == null) {
            flag = false;
          }
          const obj2 = { isMultiUserDM: flag, isDM: flag2 };
          const channel1 = ChannelStore.getChannel(channelId);
          flag2 = undefined;
          if (channel1 != null) {
            flag2 = channel1.isDM();
          }
          if (flag2 == null) {
            flag2 = false;
          }
          return obj2;
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channelId(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6);
      ({ isMultiUserDM, isDM } = stateFromStoresObject);
      const tmpResult2 = channelId(7528);
      const hasForumSearchQuery = tmpResult2.useHasForumSearchQuery(channelId);
      if (cResult[3] === channelId) {
        if (cResult[4] === hasForumSearchQuery) {
          if (cResult[5] === isDM) {
            if (cResult[6] === isMultiUserDM) {
              if (cResult[7] === screenIndex) {
                let tmp9;
                if (cResult[8] === showCreateThread) {
                  tmp9 = cResult[9];
                }
                if (cResult[10] === containerStyle) {
                  let tmp16;
                  if (cResult[11] === tmp9) {
                    tmp16 = cResult[12];
                  }
                  return tmp16;
                }
                const tmp19 = <View style={containerStyle}>{tmp9}</View>;
                cResult[10] = containerStyle;
                cResult[11] = tmp9;
                cResult[12] = tmp19;
                tmp16 = tmp19;
              }
            }
          }
        }
      }
      if (hasForumSearchQuery) {
        tmp12 = jsx(tmp(13098).ForumChannelCloseSearchButton, { channelId });
      } else {
        if (!isDM) {
          if (!isMultiUserDM) {
            tmp12 = <closure_22 channelId={channelId} screenIndex={screenIndex} showCreateThread={showCreateThread} />;
          }
        }
        tmp12 = jsx(PrivateChannelButtonsDefault, { channelId, screenIndex });
      }
      cResult[3] = channelId;
      cResult[4] = hasForumSearchQuery;
      cResult[5] = isDM;
      cResult[6] = isMultiUserDM;
      cResult[7] = screenIndex;
      cResult[8] = showCreateThread;
      cResult[9] = tmp12;
      tmp9 = tmp12;
    }
  : (channelId) => {
      let containerStyle;
      let isDM;
      let isMultiUserDM;
      let showCreateThread;
      let tmp4Result;
      channelId = channelId.channelId;
      const screenIndex = channelId.screenIndex;
      ({ containerStyle, showCreateThread } = channelId);
      const items = [ChannelStore];
      const obj = channelId(504);
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        let flag2;
        const channel = ChannelStore.getChannel(channelId);
        let flag;
        if (channel != null) {
          flag = channel.isMultiUserDM();
        }
        if (flag == null) {
          flag = false;
        }
        const obj2 = { isMultiUserDM: flag, isDM: flag2 };
        const channel1 = ChannelStore.getChannel(channelId);
        flag2 = undefined;
        if (channel1 != null) {
          flag2 = channel1.isDM();
        }
        if (flag2 == null) {
          flag2 = false;
        }
        return obj2;
      });
      ({ isMultiUserDM, isDM } = stateFromStoresObject);
      let obj2 = channelId(7528);
      const tmp = channelId;
      if (obj2.useHasForumSearchQuery(channelId)) {
        tmp4Result = jsx(tmp(13098).ForumChannelCloseSearchButton, { channelId });
      } else {
        if (!isDM) {
          if (!isMultiUserDM) {
            tmp4Result = (
              <closure_22 channelId={channelId} screenIndex={screenIndex} showCreateThread={showCreateThread} />
            );
          }
        }
        tmp4Result = jsx(PrivateChannelButtonsDefault, { channelId, screenIndex });
      }
      return <View style={containerStyle}>{tmp4Result}</View>;
    };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default tmp4;
