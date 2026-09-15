// === Module 7981: ChannelActions ===

// Module 7981 (ChannelActions)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import RootNavigationRef from "RootNavigationRef" /* 4498 */;
import ChatInputUtils from "ChatInputUtils" /* 4505 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4846 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5185 */;
import VibegrationsUtils from "VibegrationsUtils" /* 7351 */;
import PhoneCallIcon from "PhoneCallIcon" /* 7987 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 7989 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 8005 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 11100 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11604 */;
import useSearchContext from "useSearchContext" /* 12434 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 12435 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12493 */;
import IconActionButtonDefault from "IconActionButton" /* 13389 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 13390 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 13391 */;
import ConversationCoachmark from "ConversationCoachmark" /* 13393 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 13396 */;
import noop from "module_19" /* 19 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5592 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 7982 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import VoiceStateStore from "VoiceStateStore" /* 4658 */;

require = fn;
function JoinCallIcon() {
  return closure_1_14(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
}
function EndCallIcon() {
  return closure_1_14(PhoneHangUpIcon.PhoneHangUpIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 });
}
function LfgVoiceActiveIcon() {
  return closure_1_14(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
}
function LfgVoiceInactiveIcon() {
  return closure_1_14(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
}
function ChannelActionButtons(channel) {
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  let items1;
  let stateFromStores3;
  let tmp = closure_17();
  const tmp4 = screenIndex(items1[16])(channel);
  const canSearchForumPosts = channel(items1[17]).useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[18])();
  let obj = channel(items1[17]);
  const items = [stateFromStores3];
  items1 = [];
  const stateFromStores = channel(items1[19]).useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = channel(items1[19]);
  const canJoinThreadVoice = channel(items1[20]).useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[20]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = channel(items1[19]).useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj4 = channel(items1[19]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = channel(items1[19]).useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[21])(channel);
  let obj5 = channel(items1[19]);
  const conversationsHeaderButton = channel(items1[22]).useConversationsHeaderButton(channel);
  let obj6 = channel(items1[22]);
  const isGameInvitePostVoiceEnabled = channel(items1[23]).useIsGameInvitePostVoiceEnabled(channel);
  const obj7 = channel(items1[23]);
  const isGameInvitesPost = channel(items1[23]).useIsGameInvitesPost(channel);
  const obj8 = channel(items1[23]);
  const isVibegrationsChannelCandidate = channel(items1[24]).useIsVibegrationsChannelCandidate(channel, "ChannelActions");
  const obj9 = channel(items1[24]);
  const items4 = [VibegrationsAppChannelsStore];
  const items5 = [channel.id];
  stateFromStores3 = channel(items1[19]).useStateFromStores(items4, () => VibegrationsAppChannelsStore.isChatOpen(channel.id), items5);
  if (isVibegrationsChannelCandidate) {
    const obj11 = { style: tmp.actionWrapper, children: null };
    let tmp40 = null;
    if (!stateFromStores3) {
      const obj12 = {
        source: null,
        IconComponent: tmp5(tmp3[26]).RetryIcon,
        onPress() {
              const tmp = restartVibegrationsAppFramesDefault;
              return tmp(VibegrationsUtils.vibegrationsAppIdFromTopic(channel.topic));
            },
        accessibilityLabel: null
      };
      const intl7 = tmp5(tmp3[28]).intl;
      obj12.accessibilityLabel = intl7.string(tmp2(tmp3[29]).xKexN1);
      tmp40 = closure_14(tmp2(tmp3[25]), obj12);
      let tmp2Result = tmp2(tmp3[25]);
    }
    const items6 = [tmp40, ];
    if (stateFromStores3) {
      let ChatIcon = tmp5(tmp3[30]).AppsIcon;
    } else {
      ChatIcon = tmp5(tmp3[31]).ChatIcon;
    }
    const obj13 = {
      noMargin: true,
      source: null,
      IconComponent: ChatIcon,
      onPress() {
          return VibegrationsAppChannelActionCreators.setAppChannelChatOpen(channel.id, !stateFromStores3);
        },
      accessibilityLabel: null
    };
    const intl8 = tmp5(tmp3[28]).intl;
    let tmp2Result4 = tmp2(tmp3[29]);
    obj13.accessibilityLabel = intl8.string(stateFromStores3 ? tmp2Result4.jLMpUv : tmp2Result4.aWVf4j);
    items6[1] = closure_14(tmp2(tmp3[25]), obj13);
    obj11.children = items6;
    return closure_15(conversationsHeaderButton, obj11);
  } else {
    if (canJoinThreadVoice) {
      if (isGameInvitesPost) {
        if (isGameInvitePostVoiceEnabled) {
          let tmp21 = stateFromStores1;
          if (!stateFromStores1) {
            tmp21 = tmp12;
          }
          let obj14 = { source: null, IconComponent: tmp21 ? LfgVoiceActiveIcon : LfgVoiceInactiveIcon, buttonText: null, buttonTextColor: "text-feedback-positive", onPress: null, accessibilityLabel: null };
          let StringResult;
          if (tmp21) {
            if (stateFromStores2 > 0) {
              const _String = String;
              StringResult = String(stateFromStores2);
            }
          }
          obj14.buttonText = StringResult;
          if (stateFromStores1) {
            fn = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj14.onPress = fn;
          const intl2 = tmp5(tmp3[28]).intl;
          const string2 = intl2.string;
          let t1 = tmp5(tmp3[28]).t;
          if (stateFromStores1) {
            t1 = t1["4ry6yi"];
            let string2Result = string2(t1);
          } else {
            string2Result = string2(t1.My50nf);
          }
          obj14.accessibilityLabel = string2Result;
          obj14 = items1.push(obj14);
        }
      } else {
        if (tmp18) {
          const obj15 = { source: null, IconComponent: stateFromStores1 ? EndCallIcon : JoinCallIcon, onPress: null, accessibilityLabel: null };
          let fn2 = fn;
          if (!stateFromStores1) {
            fn2 = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj15.onPress = fn2;
          const intl = tmp5(tmp3[28]).intl;
          const string = intl.string;
          const t = tmp5(tmp3[28]).t;
          if (stateFromStores1) {
            let stringResult = string(t["4ry6yi"]);
          } else {
            stringResult = string(t.My50nf);
          }
          obj15.accessibilityLabel = stringResult;
          items1.push(obj15);
        }
        tmp18 = channel.isVocalThread() && tmp12;
      }
    }
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      const obj16 = {
        source: tmp2(tmp3[34]),
        IconComponent: tmp5(tmp3[35]).MagnifyingGlassIcon,
        onPress() {
              GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
            },
        accessibilityLabel: null
      };
      const intl5 = tmp5(tmp3[28]).intl;
      obj16.accessibilityLabel = intl5.string(tmp5(tmp3[28]).t["5h0QOP"]);
      items1.push(obj16);
    } else {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          const obj17 = {
            source: tmp2(tmp3[34]),
            IconComponent: tmp5(tmp3[35]).MagnifyingGlassIcon,
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
                      const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(channel.id, guildId, isThreadResult);
                      const tmp2Result4 = useSearchContext;
                      search_tracking_TrackingDefault.trackSearchOpened({ searchContext: channelDetailsSearchContext, searchLocation: constants.CHANNEL_HEADER });
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
            accessibilityLabel: null
          };
          const intl3 = tmp5(tmp3[28]).intl;
          obj17.accessibilityLabel = intl3.string(tmp5(tmp3[28]).t["5h0QOP"]);
          items1.push(obj17);
        }
      }
      if (canSearchForumPosts) {
        const obj18 = {
          source: tmp2(tmp3[34]),
          IconComponent: tmp5(tmp3[35]).MagnifyingGlassIcon,
          onPress() {
                  const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
                },
          accessibilityLabel: null
        };
        const intl4 = tmp5(tmp3[28]).intl;
        obj18.accessibilityLabel = intl4.string(tmp5(tmp3[28]).t["5h0QOP"]);
        items1.push(obj18);
      }
    }
    if (tmp7) {
      tmp7 = 0 !== items1.length;
    }
    if (!tmp7) {
      let hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
      let tmp33 = !hasItem;
      if (!hasItem) {
        tmp33 = stateFromStores;
      }
      if (tmp33) {
        const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
        tmp33 = !GUILD_THREADS_ONLY.has(channel.type);
      }
      if (hasItem) {
        hasItem = !tmp4;
      }
      if (hasItem) {
        hasItem = !channel.isForumLikeChannel();
      }
      if (hasItem) {
        hasItem = tmp33;
      }
      tmp7 = !hasItem;
    }
    if (!tmp7) {
      const obj19 = {
        source: tmp2(tmp3[45]),
        IconComponent: tmp5(tmp3[46]).ThreadIcon,
        onPress() {
              return showThreadBrowserModalDefault(channel);
            },
        accessibilityLabel: null
      };
      const intl6 = tmp5(tmp3[28]).intl;
      obj19.accessibilityLabel = intl6.string(tmp5(tmp3[28]).t.B2panI);
      items1.unshift(obj19);
    }
    const obj20 = {
      style: tmp.actionWrapper,
      children: items1.map((accessibilityLabel, index) => {
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
                  return closure_1_14(screenIndex(items1[25]), obj);
                }
            };
            let tmp9 = closure_2_14(ConversationCoachmark.ConversationCoachmark, obj2, accessibilityLabel.accessibilityLabel);
          } else {
            let obj = { noMargin: tmp };
            let merged = Object.assign(accessibilityLabel);
            obj.key = accessibilityLabel.accessibilityLabel;
            tmp9 = createElement(IconActionButtonDefault, { noMargin: tmp });
          }
          return tmp9;
        })
    };
    return closure_14(conversationsHeaderButton, obj20);
  }
  const obj10 = channel(items1[19]);
}
function WrappedChannelNavButtons(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(4850);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        const obj2 = { channel: stateFromStores, screenIndex };
        tmp4 = closure_14(ChannelActionButtons, obj2);
      }
    }
  }
  return tmp4;
}
const View = fn(17).View;
const THREADED_CHANNEL_TYPES = fn(1962).THREADED_CHANNEL_TYPES;
let closure_9 = fn(7983).setIsChannelDetailsSearchActive;
const Constants = fn(1074);
({ ChannelTypes: c10, ChannelTypesSets: closure_11, ComponentActions: closure_12 } = Constants);
let closure_13 = fn(7984).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createElement = fn(19).createElement;
const createStyles = fn(4639);
let closure_17 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default function ChannelActions(channelId) {
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
    let tmp4Result = closure_14(tmp(13394).ForumChannelCloseSearchButton, obj4);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        const obj5 = { channelId, screenIndex, showCreateThread };
        tmp4Result = closure_14(WrappedChannelNavButtons, obj5);
      }
    }
    const obj6 = { channelId, screenIndex };
    tmp4Result = closure_14(PrivateChannelButtonsDefault, obj6);
  }
  obj3.children = tmp4Result;
  return closure_14(View, obj3);
};