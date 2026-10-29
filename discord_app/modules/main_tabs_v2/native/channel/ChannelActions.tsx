// discord_app/modules/main_tabs_v2/native/channel/ChannelActions.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import VoiceNormalIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import openChannelSecondaryViewChatDefault from "../../../app_channels/native/openChannelSecondaryViewChat.tsx";
import PhoneCallIcon from "../../../../design/components/Icon/native/redesign/generated/PhoneCallIcon.tsx";
import PhoneHangUpIcon from "../../../../design/components/Icon/native/redesign/generated/PhoneHangUpIcon.tsx";
import ForumActionCreatorsDefault from "../../../forums/ForumActionCreators.tsx";
import showThreadBrowserModalDefault from "../../../threads/native/showThreadBrowserModal.tsx";
import SwipeToMemberListUtils from "../sidebar/member_list/SwipeToMemberListUtils.tsx";
import useSearchContext from "../../../search/native/hooks/useSearchContext.tsx";
import GuildDirectorySearchModalActionCreatorsDefault from "../../../directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx";
import search_tracking_TrackingDefault from "../../../search/native/tracking/Tracking.tsx";
import IconActionButtonDefault from "../shared_components/IconActionButton.tsx";
import ConversationCoachmark from "../../../conversations/components/native/ConversationCoachmark.tsx";
import PrivateChannelButtonsDefault from "header/PrivateChannelButtons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActiveThreadsStore from "../../../threads/ActiveThreadsStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

require = fn;
const View = fn(17).View;
const ChannelRecord = fn(4861);
({ THREADED_CHANNEL_TYPES: hasOwnProperty, isChannelChatInSidebar: metroRequire } = ChannelRecord);
let closure_9 = fn(9778).setIsChannelDetailsSearchActive;
const Constants = fn(1084);
({ ChannelTypes: c10, ChannelTypesSets: closure_11, ComponentActions: closure_12 } = Constants);
let closure_13 = fn(9779).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createElement = fn(19).createElement;
const createStyles = fn(5005);
let closure_17 = createStyles.createStyles({
  actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" },
});
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelChatButton(id, arg1) {
      _require = id;
      const cResult = require("c").c(5);
      const obj = require("c");
      id = null;
      if (arg1) {
        id = id.id;
      }
      const channelChatUnread = require("useChannelChatUnread").useChannelChatUnread(id);
      ({ hasUnread, mentionCount } = channelChatUnread);
      if (arg1) {
        if (!hasUnread) {
          hasUnread = mentionCount > 0;
        }
        if (cResult[0] === id) {
          if (cResult[1] === hasUnread) {
            if (cResult[2] === mentionCount) {
              let tmp6 = cResult[3];
            }
            return tmp6;
          }
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1125).intl;
          const stringResult = intl.string(tmp(1125).t.kkKapG);
          cResult[4] = stringResult;
          let tmp8 = stringResult;
        } else {
          tmp8 = cResult[4];
        }
        const obj3 = {
          IconComponent: tmp(8601).ChatIcon,
          onPress() {
            openChannelSecondaryViewChatDefault(id.guild_id, id.id);
          },
          accessibilityLabel: tmp8,
          badge: hasUnread,
          badgePosition: "right",
          buttonText: null,
        };
        let StringResult;
        if (hasUnread) {
          if (mentionCount > 0) {
            const _String = String;
            StringResult = String(mentionCount);
          }
        }
        obj3.buttonText = StringResult;
        cResult[0] = id;
        cResult[1] = hasUnread;
        cResult[2] = mentionCount;
        cResult[3] = obj3;
        tmp6 = obj3;
      } else {
        return null;
      }
      const obj2 = require("useChannelChatUnread");
    }
  : function useChannelChatButton(id, arg1) {
      _require = id;
      id = null;
      if (arg1) {
        id = id.id;
      }
      const channelChatUnread = require("useChannelChatUnread").useChannelChatUnread(id);
      ({ hasUnread, mentionCount } = channelChatUnread);
      if (arg1) {
        if (!hasUnread) {
          hasUnread = mentionCount > 0;
        }
        const obj2 = {
          IconComponent: tmp(8601).ChatIcon,
          onPress() {
            openChannelSecondaryViewChatDefault(id.guild_id, id.id);
          },
          accessibilityLabel: null,
          badge: null,
          badgePosition: "right",
          buttonText: null,
        };
        const intl = tmp(1125).intl;
        obj2.accessibilityLabel = intl.string(tmp(1125).t.kkKapG);
        obj2.badge = hasUnread;
        let StringResult;
        if (hasUnread) {
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
      const obj = require("useChannelChatUnread");
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function JoinCallIcon() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
        const tmp7 = closure_1_14(PhoneCallIcon.PhoneCallIcon, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function JoinCallIcon() {
      return closure_1_14(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EndCallIcon() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 };
        const tmp7 = closure_1_14(PhoneHangUpIcon.PhoneHangUpIcon, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function EndCallIcon() {
      return closure_1_14(PhoneHangUpIcon.PhoneHangUpIcon, {
        size: "sm",
        color: nativeDefault.unsafe_rawColors.RED_400,
      });
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LfgVoiceActiveIcon() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
        const tmp7 = closure_1_14(VoiceNormalIcon.VoiceNormalIcon, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function LfgVoiceActiveIcon() {
      return closure_1_14(VoiceNormalIcon.VoiceNormalIcon, {
        size: "sm",
        color: nativeDefault.unsafe_rawColors.GREEN_360,
      });
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LfgVoiceInactiveIcon() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = closure_1_14(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function LfgVoiceInactiveIcon() {
      return closure_1_14(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelActionButtons(channel) {
      const cResult = channel(items1[12]).c(28);
      channel = channel.channel;
      const screenIndex = channel.screenIndex;
      const tmp4 = closure_17();
      screenIndex(items1[21])(channel);
      let obj = channel(items1[12]);
      const canSearchForumPosts = channel(items1[22]).useCanSearchForumPosts(channel);
      let tmp8 = screenIndex(items1[23])();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [hasChannelOverflowMenu];
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
              return closure_8.isInChannel(channel.id);
            }
          }
          cResult[5] = channel.id;
          cResult[6] = G;
        } else {
          class G {
            constructor() {
              return closure_8.isInChannel(channel.id);
            }
          }
        }
        const tmpResult8 = tmp(tmp2[25]);
        const stateFromStores1 = tmp(tmp2[24]).useStateFromStores(tmp14, G);
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              return closure_8.isInChannel(channel.id);
            }
          }
          const items3 = [VoiceStateStore];
          cResult[7] = items3;
          const tmp18 = items3;
        } else {
          class G {
            constructor() {
              return closure_8.isInChannel(channel.id);
            }
          }
        }
        if (cResult[8] !== channel.id) {
          class G {
            constructor() {
              return closure_8.isInChannel(channel.id);
            }
          }
          cResult[8] = channel.id;
          cResult[9] = tmp20;
        } else {
          class G {
            constructor() {
              return closure_8.isInChannel(channel.id);
            }
          }
        }
        const tmpResult9 = tmp(tmp2[24]);
        const stateFromStores2 = tmp(tmp2[24]).useStateFromStores(tmp18, tmp20);
        tmp5(tmp2[26])(channel);
        const tmpResult10 = tmp(tmp2[24]);
        const conversationsHeaderButton = tmp(tmp2[27]).useConversationsHeaderButton(channel);
        const tmpResult11 = tmp(tmp2[27]);
        const isGameInvitePostVoiceEnabled = tmp(tmp2[28]).useIsGameInvitePostVoiceEnabled(channel);
        tmp(tmp2[28]);
        if (cResult[10] === channel.type) {
          class G {
            constructor() {
              return closure_8.isInChannel(channel.id);
            }
          }
          const tmp31 = closure_18(channel, tmp27);
          const tmp32 = tmp5(tmp2[29])(channel, tmp27);
          hasChannelOverflowMenu = tmp(tmp2[30]).useHasChannelOverflowMenu(channel, screenIndex);
          if (canJoinThreadVoice) {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
          }
          if (constants.GUILD_DIRECTORY === channel.type) {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
            tmp37[0] = tmp5(tmp2[32]);
            tmp37[1] = tmp(tmp2[33]).MagnifyingGlassIcon;
            tmp37[2] = function onPress() {
              GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
            };
            const intl2 = tmp(tmp2[14]).intl;
            tmp37[3] = intl2.string(tmp(tmp2[14]).t["5h0QOP"]);
            items1.push(tmp37);
          } else {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
            if (canSearchForumPosts) {
              class G {
                constructor() {
                  return closure_8.isInChannel(channel.id);
                }
              }
              tmp35[0] = tmp5(tmp2[32]);
              tmp35[1] = tmp(tmp2[33]).MagnifyingGlassIcon;
              tmp35[2] = function onPress() {
                const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
              };
              const intl = tmp(tmp2[14]).intl;
              tmp35[3] = intl.string(tmp(tmp2[14]).t["5h0QOP"]);
              items1.push(tmp35);
            }
          }
          if (null != tmp32) {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
          }
          if (null != tmp31) {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
          }
          if (tmp8) {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
          }
          if (!tmp8) {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
            const hasItem = set.has(channel.type);
            let tmp41 = !hasItem;
            if (!hasItem) {
              class G {
                constructor() {
                  return closure_8.isInChannel(channel.id);
                }
              }
            }
            if (tmp41) {
              class G {
                constructor() {
                  return closure_8.isInChannel(channel.id);
                }
              }
              const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
              tmp41 = !GUILD_THREADS_ONLY.has(channel.type);
            }
            if (hasItem) {
              class G {
                constructor() {
                  return closure_8.isInChannel(channel.id);
                }
              }
            }
            if (hasItem) {
              class G {
                constructor() {
                  return closure_8.isInChannel(channel.id);
                }
              }
            }
            if (hasItem) {
              class G {
                constructor() {
                  return closure_8.isInChannel(channel.id);
                }
              }
            }
            tmp8 = !hasItem;
          }
          if (!tmp8) {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
            tmp42[0] = tmp5(tmp2[43]);
            tmp42[1] = tmp(tmp2[44]).ThreadIcon;
            tmp42[2] = function onPress() {
              return showThreadBrowserModalDefault(channel);
            };
            const intl3 = tmp(tmp2[14]).intl;
            tmp42[3] = intl3.string(tmp(tmp2[14]).t.B2panI);
            items1.unshift(tmp42);
          }
          const mapped = items1.map((accessibilityLabel, index) => {
            closure_0 = accessibilityLabel;
            let tmp = index === items1.length - 1;
            if (tmp) {
              tmp = !hasChannelOverflowMenu;
            }
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
                  return closure_1_14(screenIndex(items1[47]), obj);
                },
              };
              let tmp10 = closure_2_14(
                ConversationCoachmark.ConversationCoachmark,
                obj2,
                accessibilityLabel.accessibilityLabel,
              );
            } else {
              let obj = { noMargin: tmp };
              let merged = Object.assign(accessibilityLabel);
              obj.key = accessibilityLabel.accessibilityLabel;
              tmp10 = createElement(IconActionButtonDefault, { noMargin: tmp });
            }
            return tmp10;
          });
          if (cResult[21] === channel) {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
            if (cResult[24] === tmp4.actionWrapper) {
              class G {
                constructor() {
                  return closure_8.isInChannel(channel.id);
                }
              }
            }
            let obj3 = { style: tmp4.actionWrapper, children: null };
            const items4 = [mapped, tmp45];
            obj3.children = items4;
            const tmp50 = closure_15(conversationsHeaderButton, obj3);
            cResult[24] = tmp4.actionWrapper;
            cResult[25] = tmp45;
            cResult[26] = mapped;
            cResult[27] = tmp50;
          }
          let tmp46 = hasChannelOverflowMenu;
          if (hasChannelOverflowMenu) {
            class G {
              constructor() {
                return closure_8.isInChannel(channel.id);
              }
            }
            let obj4 = { channel };
            tmp46 = closure_14(tmp5(tmp2[30]), obj4);
          }
          cResult[21] = channel;
          cResult[22] = hasChannelOverflowMenu;
          cResult[23] = tmp46;
          const tmpResult14 = tmp(tmp2[30]);
        }
        let tmp29 = closure_6(channel.type);
        if (tmp29) {
          class G {
            constructor() {
              return closure_8.isInChannel(channel.id);
            }
          }
          tmp29 = "channel-secondary-view-chat" !== screenIndex;
        }
        cResult[10] = channel.type;
        cResult[11] = screenIndex;
        cResult[12] = tmp29;
        const tmpResult12 = tmp(tmp2[28]);
      }
      const fn = function l() {
        return ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id);
      };
      cResult[1] = channel.guild_id;
      cResult[2] = channel.id;
      cResult[3] = fn;
      tmp11 = fn;
      let obj2 = channel(items1[22]);
    }
  : function ChannelActionButtons(channel) {
      channel = channel.channel;
      const screenIndex = channel.screenIndex;
      let items1;
      let hasChannelOverflowMenu;
      let tmp = closure_17();
      const tmp4 = screenIndex(items1[21])(channel);
      const canSearchForumPosts = channel(items1[22]).useCanSearchForumPosts(channel);
      let tmp7 = screenIndex(items1[23])();
      let obj = channel(items1[22]);
      const items = [hasChannelOverflowMenu];
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
      let tmp16 = closure_6(channel.type);
      if (tmp16) {
        tmp16 = "channel-secondary-view-chat" !== screenIndex;
      }
      const tmp17 = closure_18(channel, tmp16);
      const tmp18 = screenIndex(items1[29])(channel, tmp16);
      const obj8 = channel(items1[28]);
      hasChannelOverflowMenu = channel(items1[30]).useHasChannelOverflowMenu(channel, screenIndex);
      if (canJoinThreadVoice) {
        if (isGameInvitesPost) {
          if (isGameInvitePostVoiceEnabled) {
            let tmp23 = stateFromStores1;
            if (!stateFromStores1) {
              tmp23 = tmp12;
            }
            let obj9 = {
              IconComponent: tmp23 ? closure_21 : closure_22,
              buttonText: null,
              buttonTextColor: "text-feedback-positive",
              onPress: null,
              accessibilityLabel: null,
            };
            let StringResult;
            if (tmp23) {
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
            const intl2 = tmp5(tmp3[14]).intl;
            const string2 = intl2.string;
            let t1 = tmp5(tmp3[14]).t;
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
          if (tmp20) {
            const obj10 = {
              IconComponent: stateFromStores1 ? closure_20 : closure_19,
              onPress: null,
              accessibilityLabel: null,
            };
            let fn2 = fn;
            if (!stateFromStores1) {
              fn2 = () => PrivateChannelCallUtils.openChannelCallModal(channel);
            }
            obj10.onPress = fn2;
            const intl = tmp5(tmp3[14]).intl;
            const string = intl.string;
            const t = tmp5(tmp3[14]).t;
            if (stateFromStores1) {
              let stringResult = string(t["4ry6yi"]);
            } else {
              stringResult = string(t.My50nf);
            }
            obj10.accessibilityLabel = stringResult;
            items1.push(obj10);
          }
          tmp20 = channel.isVocalThread() && tmp12;
        }
      }
      const type = channel.type;
      if (constants.GUILD_DIRECTORY === type) {
        const obj11 = {
          source: tmp2(tmp3[32]),
          IconComponent: tmp5(tmp3[33]).MagnifyingGlassIcon,
          onPress() {
            GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
          },
          accessibilityLabel: null,
        };
        const intl5 = tmp5(tmp3[14]).intl;
        obj11.accessibilityLabel = intl5.string(tmp5(tmp3[14]).t["5h0QOP"]);
        items1.push(obj11);
      } else {
        if (constants.GUILD_FORUM !== type) {
          if (constants.GUILD_MEDIA !== type) {
            if (!tmp16) {
              if (null != conversationsHeaderButton) {
                items1.push(conversationsHeaderButton);
              }
              const obj12 = {
                source: tmp2(tmp3[32]),
                IconComponent: tmp5(tmp3[33]).MagnifyingGlassIcon,
                onPress() {
                  closure_9(channel.id, true, "initial");
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
                  if (tmp2Result5.isSwipeToMemberListEnabledForChannel(channel.id)) {
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
              const intl3 = tmp5(tmp3[14]).intl;
              obj12.accessibilityLabel = intl3.string(tmp5(tmp3[14]).t["5h0QOP"]);
              items1.push(obj12);
            }
          }
        }
        if (canSearchForumPosts) {
          const obj13 = {
            source: tmp2(tmp3[32]),
            IconComponent: tmp5(tmp3[33]).MagnifyingGlassIcon,
            onPress() {
              const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
            },
            accessibilityLabel: null,
          };
          const intl4 = tmp5(tmp3[14]).intl;
          obj13.accessibilityLabel = intl4.string(tmp5(tmp3[14]).t["5h0QOP"]);
          items1.push(obj13);
        }
      }
      if (null != tmp18) {
        items1.push(tmp18);
      }
      if (null != tmp17) {
        items1.push(tmp17);
      }
      if (tmp7) {
        tmp7 = 0 !== items1.length;
      }
      if (!tmp7) {
        let hasItem = set.has(channel.type);
        let tmp38 = !hasItem;
        if (!hasItem) {
          tmp38 = stateFromStores;
        }
        if (tmp38) {
          const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
          tmp38 = !GUILD_THREADS_ONLY.has(channel.type);
        }
        if (hasItem) {
          hasItem = !tmp4;
        }
        if (hasItem) {
          hasItem = !channel.isForumLikeChannel();
        }
        if (hasItem) {
          hasItem = tmp38;
        }
        tmp7 = !hasItem;
      }
      if (!tmp7) {
        const obj14 = {
          source: tmp2(tmp3[43]),
          IconComponent: tmp5(tmp3[44]).ThreadIcon,
          onPress() {
            return showThreadBrowserModalDefault(channel);
          },
          accessibilityLabel: null,
        };
        const intl6 = tmp5(tmp3[14]).intl;
        obj14.accessibilityLabel = intl6.string(tmp5(tmp3[14]).t.B2panI);
        items1.unshift(obj14);
      }
      const obj15 = { style: tmp.actionWrapper, children: null };
      const items4 = [
        items1.map((accessibilityLabel, index) => {
          closure_0 = accessibilityLabel;
          let tmp = index === items1.length - 1;
          if (tmp) {
            tmp = !hasChannelOverflowMenu;
          }
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
                return closure_1_14(screenIndex(items1[47]), obj);
              },
            };
            let tmp10 = closure_2_14(
              ConversationCoachmark.ConversationCoachmark,
              obj2,
              accessibilityLabel.accessibilityLabel,
            );
          } else {
            let obj = { noMargin: tmp };
            let merged = Object.assign(accessibilityLabel);
            obj.key = accessibilityLabel.accessibilityLabel;
            tmp10 = createElement(IconActionButtonDefault, { noMargin: tmp });
          }
          return tmp10;
        }),
      ];
      if (hasChannelOverflowMenu) {
        const obj16 = { channel };
        hasChannelOverflowMenu = closure_14(tmp2(tmp3[30]), obj16);
      }
      items4[1] = hasChannelOverflowMenu;
      obj15.children = items4;
      return closure_15(conversationsHeaderButton, obj15);
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function WrappedChannelNavButtons(channelId) {
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
        const fn = function t() {
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
      channelId(6721);
      let tmp10 = null;
      if (null != stateFromStores) {
        tmp10 = null;
        if (!tmp9) {
          tmp10 = null;
          if (!channelId.showCreateThread) {
            if (cResult[3] === stateFromStores) {
            }
            const obj2 = { channel: stateFromStores, screenIndex };
            const tmp14 = closure_14(closure_23, obj2);
            cResult[3] = stateFromStores;
            cResult[4] = screenIndex;
            cResult[5] = tmp14;
          }
        }
      }
      return tmp10;
    }
  : function WrappedChannelNavButtons(channelId) {
      channelId = channelId.channelId;
      ({ screenIndex, showCreateThread } = channelId);
      const items = [ChannelStore];
      const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      channelId(6721);
      let tmp4 = null;
      if (null != stateFromStores) {
        tmp4 = null;
        if (!tmp3) {
          tmp4 = null;
          if (!showCreateThread) {
            const obj2 = { channel: stateFromStores, screenIndex };
            tmp4 = closure_14(closure_23, obj2);
          }
        }
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelActions(channelId) {
      let ForumChannelCloseSearchButton = channelId;
      let obj = dependencyMap;
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
        const fn = function s() {
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
      const result1 = ForumChannelCloseSearchButton(9791);
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
                  const tmp17 = closure_14(View, obj3);
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
        ForumChannelCloseSearchButton = ForumChannelCloseSearchButton(14481).ForumChannelCloseSearchButton;
        obj = { channelId };
        let tmp10 = closure_14(ForumChannelCloseSearchButton, obj);
      } else {
        if (!isDM) {
          if (!isMultiUserDM) {
            const obj4 = { channelId, screenIndex, showCreateThread };
            tmp10 = closure_14(closure_24, obj4);
          }
        }
        const obj5 = { channelId, screenIndex };
        tmp10 = closure_14(PrivateChannelButtonsDefault, obj5);
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
  : function ChannelActions(channelId) {
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
        let tmp4Result = closure_14(tmp(14481).ForumChannelCloseSearchButton, obj4);
      } else {
        if (!isDM) {
          if (!isMultiUserDM) {
            const obj5 = { channelId, screenIndex, showCreateThread };
            tmp4Result = closure_14(closure_24, obj5);
          }
        }
        const obj6 = { channelId, screenIndex };
        tmp4Result = closure_14(PrivateChannelButtonsDefault, obj6);
      }
      obj3.children = tmp4Result;
      return closure_14(View, obj3);
    };
