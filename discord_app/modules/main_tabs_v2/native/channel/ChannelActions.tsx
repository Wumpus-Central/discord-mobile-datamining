// === Module 7926: ChannelActions ===

// Module 7926 (ChannelActions)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import RootNavigationRef from "RootNavigationRef" /* 4463 */;
import ChatInputUtils from "ChatInputUtils" /* 4470 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4812 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5151 */;
import VibegrationsUtils from "VibegrationsUtils" /* 7296 */;
import PhoneCallIcon from "PhoneCallIcon" /* 7932 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 7934 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7950 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 11035 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11538 */;
import useSearchContext from "useSearchContext" /* 12369 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 12370 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12428 */;
import IconActionButtonDefault from "IconActionButton" /* 13327 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 13328 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 13329 */;
import ConversationCoachmark from "ConversationCoachmark" /* 13331 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 13334 */;
import noop from "module_19" /* 19 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5557 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 7927 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import VoiceStateStore from "VoiceStateStore" /* 4624 */;

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
  let obj = channel(items1[17]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[18])();
  let obj1 = channel(items1[19]);
  const items = [stateFromStores3];
  items1 = [];
  const stateFromStores = obj1.useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = channel(items1[20]);
  const canJoinThreadVoice = obj2.useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[19]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj4 = channel(items1[19]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[21])(channel);
  let obj5 = channel(items1[22]);
  const conversationsHeaderButton = obj5.useConversationsHeaderButton(channel);
  let obj6 = channel(items1[23]);
  const isGameInvitePostVoiceEnabled = obj6.useIsGameInvitePostVoiceEnabled(channel);
  let obj7 = channel(items1[23]);
  const isGameInvitesPost = obj7.useIsGameInvitesPost(channel);
  let obj8 = channel(items1[24]);
  const isVibegrationsChannelCandidate = obj8.useIsVibegrationsChannelCandidate(channel, "ChannelActions");
  const tmp4 = screenIndex(items1[16])(channel);
  const items4 = [VibegrationsAppChannelsStore];
  const items5 = [channel.id];
  stateFromStores3 = channel(items1[19]).useStateFromStores(items4, () => VibegrationsAppChannelsStore.isChatOpen(channel.id), items5);
  if (isVibegrationsChannelCandidate) {
    obj = { style: tmp.actionWrapper, children: null };
    let tmp40 = null;
    if (!stateFromStores3) {
      obj = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
      let tmp2Result = tmp2(tmp3[25]);
      obj.IconComponent = tmp5(tmp3[26]).RetryIcon;
      obj.onPress = function onPress() {
        const tmp = restartVibegrationsAppFramesDefault;
        return tmp(VibegrationsUtils.vibegrationsAppIdFromTopic(channel.topic));
      };
      const intl7 = tmp5(tmp3[28]).intl;
      obj.accessibilityLabel = intl7.string(tmp2(tmp3[29]).xKexN1);
      tmp40 = closure_14(tmp2Result, obj);
    }
    const items6 = [tmp40, ];
    tmp2Result = tmp2(tmp3[25]);
    if (stateFromStores3) {
      let ChatIcon = tmp5(tmp3[30]).AppsIcon;
    } else {
      ChatIcon = tmp5(tmp3[31]).ChatIcon;
    }
    obj1 = {
      noMargin: true,
      source: null,
      IconComponent: ChatIcon,
      onPress() {
          return VibegrationsAppChannelActionCreators.setAppChannelChatOpen(channel.id, !stateFromStores3);
        },
      accessibilityLabel: null
    };
    const intl8 = tmp5(tmp3[28]).intl;
    let tmp2Result1 = tmp2(tmp3[29]);
    obj1.accessibilityLabel = intl8.string(stateFromStores3 ? tmp2Result1.jLMpUv : tmp2Result1.aWVf4j);
    items6[1] = closure_14(tmp2Result, obj1);
    obj.children = items6;
    return closure_15(conversationsHeaderButton, obj);
  } else {
    if (canJoinThreadVoice) {
      if (isGameInvitesPost) {
        if (isGameInvitePostVoiceEnabled) {
          let tmp21 = stateFromStores1;
          if (!stateFromStores1) {
            tmp21 = tmp12;
          }
          obj2 = { source: null, IconComponent: tmp21 ? LfgVoiceActiveIcon : LfgVoiceInactiveIcon, buttonText: null, buttonTextColor: "text-feedback-positive", onPress: null, accessibilityLabel: null };
          let StringResult;
          if (tmp21) {
            if (stateFromStores2 > 0) {
              const _String = String;
              StringResult = String(stateFromStores2);
            }
          }
          obj2.buttonText = StringResult;
          if (stateFromStores1) {
            fn = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj2.onPress = fn;
          const intl2 = tmp5(tmp3[28]).intl;
          const string2 = intl2.string;
          let t = tmp5(tmp3[28]).t;
          if (stateFromStores1) {
            t = t["4ry6yi"];
            let string2Result = string2(t);
          } else {
            string2Result = string2(t.My50nf);
          }
          obj2.accessibilityLabel = string2Result;
          obj2 = items1.push(obj2);
        }
      } else {
        if (tmp18) {
          obj3 = { source: null, IconComponent: stateFromStores1 ? EndCallIcon : JoinCallIcon, onPress: null, accessibilityLabel: null };
          let fn2 = fn;
          if (!stateFromStores1) {
            fn2 = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj3.onPress = fn2;
          const intl = tmp5(tmp3[28]).intl;
          const string = intl.string;
          t = tmp5(tmp3[28]).t;
          if (stateFromStores1) {
            let stringResult = string(t["4ry6yi"]);
          } else {
            stringResult = string(t.My50nf);
          }
          obj3.accessibilityLabel = stringResult;
          items1.push(obj3);
        }
        tmp18 = channel.isVocalThread() && tmp12;
      }
    }
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      obj4 = {
        source: tmp2(tmp3[34]),
        IconComponent: tmp5(tmp3[35]).MagnifyingGlassIcon,
        onPress() {
              const obj = { channel };
              obj.open(obj);
            },
        accessibilityLabel: null
      };
      const intl5 = tmp5(tmp3[28]).intl;
      obj4.accessibilityLabel = intl5.string(tmp5(tmp3[28]).t["5h0QOP"]);
      items1.push(obj4);
    } else {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          obj5 = {
            source: tmp2(tmp3[34]),
            IconComponent: tmp5(tmp3[35]).MagnifyingGlassIcon,
            onPress() {
                      let obj = channel;
                      closure_9(channel.id, true, "initial");
                      let obj1 = PlatformUtils;
                      if (obj1.isIOS()) {
                        let tmp2Result = ChatInputUtils;
                        const chatInputRef = tmp2Result.getChatInputRef(obj.id, screenIndex);
                        if (chatInputRef != null) {
                          chatInputRef.blur();
                        }
                      }
                      const guildId = obj.getGuildId();
                      tmp2Result = useSearchContext;
                      const channelDetailsSearchContext = tmp2Result.getChannelDetailsSearchContext(obj.id, guildId, obj.isThread());
                      const isThreadResult = obj.isThread();
                      obj = { searchContext: channelDetailsSearchContext, searchLocation: constants.CHANNEL_HEADER };
                      search_tracking_TrackingDefault.trackSearchOpened(obj);
                      if (tmp2Result1.isSwipeToMemberListEnabled()) {
                        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                        obj = { source: "channel-header-search", channelId: null, screenIndex: null };
                        obj.channelId = obj.id;
                        obj.screenIndex = screenIndex;
                        ComponentDispatch.dispatch(constants3.SHOW_CHANNEL_DETAILS, obj);
                      } else {
                        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          if (rootNavigationRef.isReady()) {
                            obj1 = { channelId: obj.id, search: true, source: "channel-header-search" };
                            rootNavigationRef.navigate("sidebar", obj1);
                          }
                        }
                        const tmp2Result2 = RootNavigationRef;
                      }
                      tmp2Result1 = SwipeToMemberListUtils;
                    },
            accessibilityLabel: null
          };
          const intl3 = tmp5(tmp3[28]).intl;
          obj5.accessibilityLabel = intl3.string(tmp5(tmp3[28]).t["5h0QOP"]);
          items1.push(obj5);
        }
      }
      if (canSearchForumPosts) {
        obj6 = {
          source: tmp2(tmp3[34]),
          IconComponent: tmp5(tmp3[35]).MagnifyingGlassIcon,
          onPress() {
                  const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
                },
          accessibilityLabel: null
        };
        const intl4 = tmp5(tmp3[28]).intl;
        obj6.accessibilityLabel = intl4.string(tmp5(tmp3[28]).t["5h0QOP"]);
        items1.push(obj6);
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
      obj7 = {
        source: tmp2(tmp3[45]),
        IconComponent: tmp5(tmp3[46]).ThreadIcon,
        onPress() {
              return showThreadBrowserModalDefault(channel);
            },
        accessibilityLabel: null
      };
      const intl6 = tmp5(tmp3[28]).intl;
      obj7.accessibilityLabel = intl6.string(tmp5(tmp3[28]).t.B2panI);
      items1.unshift(obj7);
    }
    obj8 = {
      style: tmp.actionWrapper,
      children: items1.map((accessibilityLabel, index) => {
          closure_0 = accessibilityLabel;
          if (accessibilityLabel === conversationsHeaderButton) {
            let obj = {
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
            let tmp9 = closure_2_14(ConversationCoachmark.ConversationCoachmark, obj, accessibilityLabel.accessibilityLabel);
          } else {
            obj = { noMargin: tmp };
            let merged = Object.assign(accessibilityLabel);
            obj.key = accessibilityLabel.accessibilityLabel;
            tmp9 = createElement(IconActionButtonDefault, { noMargin: tmp });
          }
          return tmp9;
        })
    };
    return closure_14(conversationsHeaderButton, obj8);
  }
  const obj10 = channel(items1[19]);
}
function WrappedChannelNavButtons(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(4816);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        obj = { channel: stateFromStores, screenIndex };
        tmp4 = closure_14(ChannelActionButtons, obj);
      }
    }
  }
  return tmp4;
}
const View = fn(17).View;
const THREADED_CHANNEL_TYPES = fn(1961).THREADED_CHANNEL_TYPES;
let closure_9 = fn(7928).setIsChannelDetailsSearchActive;
const Constants = fn(1074);
({ ChannelTypes: c10, ChannelTypesSets: closure_11, ComponentActions: closure_12 } = Constants);
let closure_13 = fn(7929).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createElement = fn(19).createElement;
const createStyles = fn(4605);
let closure_17 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default function ChannelActions(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  ({ containerStyle, showCreateThread } = channelId);
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = ChannelStore;
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isMultiUserDM();
    }
    if (flag == null) {
      flag = false;
    }
    obj = { isMultiUserDM: flag, isDM: null };
    const channel1 = obj.getChannel(channelId);
    let flag2;
    if (channel1 != null) {
      flag2 = channel1.isDM();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    obj.isDM = flag2;
    return obj;
  });
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  let obj1 = channelId(7937);
  obj = { style: containerStyle, children: null };
  if (obj1.useHasForumSearchQuery(channelId)) {
    obj = { channelId };
    let tmp4Result = closure_14(channelId(13332).ForumChannelCloseSearchButton, obj);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        obj1 = { channelId, screenIndex, showCreateThread };
        tmp4Result = closure_14(WrappedChannelNavButtons, obj1);
      }
    }
    const obj2 = { channelId, screenIndex };
    tmp4Result = closure_14(PrivateChannelButtonsDefault, obj2);
  }
  obj.children = tmp4Result;
  return closure_14(View, obj);
};