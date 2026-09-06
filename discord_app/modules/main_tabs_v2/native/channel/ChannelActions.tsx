// === Module 7875: ChannelActions ===

// Module 7875 (ChannelActions)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4767 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5101 */;
import VibegrationsUtils from "VibegrationsUtils" /* 7247 */;
import PhoneCallIcon from "PhoneCallIcon" /* 7880 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 7882 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7898 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10963 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11466 */;
import useSearchContext from "useSearchContext" /* 12299 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 12300 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12358 */;
import IconActionButtonDefault from "IconActionButton" /* 13253 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 13254 */;
import ConversationCoachmark from "ConversationCoachmark" /* 13256 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 13259 */;
import noop from "module_19" /* 19 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5507 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
function JoinCallIcon() {
  return jsx(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
}
function EndCallIcon() {
  return jsx(PhoneHangUpIcon.PhoneHangUpIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 });
}
function LfgVoiceActiveIcon() {
  return jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
}
function LfgVoiceInactiveIcon() {
  return jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
}
function ChannelActionButtons(channel) {
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  let items1;
  let tmp = closure_15();
  let obj = channel(items1[16]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[17])();
  let obj1 = channel(items1[18]);
  const items = [ActiveThreadsStore];
  items1 = [];
  const stateFromStores = obj1.useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = channel(items1[19]);
  const canJoinThreadVoice = obj2.useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[18]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj4 = channel(items1[18]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[20])(channel);
  let obj5 = channel(items1[21]);
  const conversationsHeaderButton = obj5.useConversationsHeaderButton(channel);
  let obj6 = channel(items1[22]);
  const isGameInvitePostVoiceEnabled = obj6.useIsGameInvitePostVoiceEnabled(channel);
  let obj7 = channel(items1[22]);
  const isGameInvitesPost = obj7.useIsGameInvitesPost(channel);
  const tmp4 = screenIndex(items1[15])(channel);
  if (obj9.useIsVibegrationsChannelCandidate(channel, "ChannelActions")) {
    obj = { style: tmp.actionWrapper, children: null };
    obj = {
      noMargin: true,
      source: null,
      IconComponent: tmp5(tmp3[25]).RetryIcon,
      onPress() {
          const tmp = restartVibegrationsAppFramesDefault;
          return tmp(VibegrationsUtils.vibegrationsAppIdFromTopic(channel.topic));
        },
      accessibilityLabel: null
    };
    const intl7 = tmp5(tmp3[27]).intl;
    obj.accessibilityLabel = intl7.string(tmp2(tmp3[28]).xKexN1);
    obj.children = jsx(tmp2(tmp3[24]), {
      noMargin: true,
      source: null,
      IconComponent: tmp5(tmp3[25]).RetryIcon,
      onPress() {
          const tmp = restartVibegrationsAppFramesDefault;
          return tmp(VibegrationsUtils.vibegrationsAppIdFromTopic(channel.topic));
        },
      accessibilityLabel: null
    });
    return <conversationsHeaderButton noMargin source={null} IconComponent={tmp5(tmp3[25]).RetryIcon} onPress={function onPress() {
      const tmp = restartVibegrationsAppFramesDefault;
      return tmp(VibegrationsUtils.vibegrationsAppIdFromTopic(channel.topic));
    }} accessibilityLabel={null} />;
  } else {
    if (canJoinThreadVoice) {
      if (isGameInvitesPost) {
        if (isGameInvitePostVoiceEnabled) {
          let tmp19 = stateFromStores1;
          if (!stateFromStores1) {
            tmp19 = tmp12;
          }
          obj1 = { source: null, IconComponent: tmp19 ? LfgVoiceActiveIcon : LfgVoiceInactiveIcon, buttonText: null, buttonTextColor: "text-feedback-positive", onPress: null, accessibilityLabel: null };
          let StringResult;
          if (tmp19) {
            if (stateFromStores2 > 0) {
              const _String = String;
              StringResult = String(stateFromStores2);
            }
          }
          obj1.buttonText = StringResult;
          if (stateFromStores1) {
            fn = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj1.onPress = fn;
          const intl2 = tmp5(tmp3[27]).intl;
          const string2 = intl2.string;
          let t = tmp5(tmp3[27]).t;
          if (stateFromStores1) {
            t = t["4ry6yi"];
            let string2Result = string2(t);
          } else {
            string2Result = string2(t.My50nf);
          }
          obj1.accessibilityLabel = string2Result;
          obj1 = items1.push(obj1);
        }
      } else {
        if (tmp16) {
          obj2 = { source: null, IconComponent: stateFromStores1 ? EndCallIcon : JoinCallIcon, onPress: null, accessibilityLabel: null };
          let fn2 = fn;
          if (!stateFromStores1) {
            fn2 = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj2.onPress = fn2;
          const intl = tmp5(tmp3[27]).intl;
          const string = intl.string;
          t = tmp5(tmp3[27]).t;
          if (stateFromStores1) {
            let stringResult = string(t["4ry6yi"]);
          } else {
            stringResult = string(t.My50nf);
          }
          obj2.accessibilityLabel = stringResult;
          items1.push(obj2);
        }
        tmp16 = channel.isVocalThread() && tmp12;
      }
    }
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      obj3 = {
        source: tmp2(tmp3[30]),
        IconComponent: tmp5(tmp3[31]).MagnifyingGlassIcon,
        onPress() {
              const obj = { channel };
              obj.open(obj);
            },
        accessibilityLabel: null
      };
      const intl5 = tmp5(tmp3[27]).intl;
      obj3.accessibilityLabel = intl5.string(tmp5(tmp3[27]).t["5h0QOP"]);
      items1.push(obj3);
    } else {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          obj4 = {
            source: tmp2(tmp3[30]),
            IconComponent: tmp5(tmp3[31]).MagnifyingGlassIcon,
            onPress() {
                      let obj = channel;
                      closure_8(channel.id, true, "initial");
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
          const intl3 = tmp5(tmp3[27]).intl;
          obj4.accessibilityLabel = intl3.string(tmp5(tmp3[27]).t["5h0QOP"]);
          items1.push(obj4);
        }
      }
      if (canSearchForumPosts) {
        obj5 = {
          source: tmp2(tmp3[30]),
          IconComponent: tmp5(tmp3[31]).MagnifyingGlassIcon,
          onPress() {
                  const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
                },
          accessibilityLabel: null
        };
        const intl4 = tmp5(tmp3[27]).intl;
        obj5.accessibilityLabel = intl4.string(tmp5(tmp3[27]).t["5h0QOP"]);
        items1.push(obj5);
      }
    }
    if (tmp7) {
      tmp7 = 0 !== items1.length;
    }
    if (!tmp7) {
      let hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
      let tmp31 = !hasItem;
      if (!hasItem) {
        tmp31 = stateFromStores;
      }
      if (tmp31) {
        const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
        tmp31 = !GUILD_THREADS_ONLY.has(channel.type);
      }
      if (hasItem) {
        hasItem = !tmp4;
      }
      if (hasItem) {
        hasItem = !channel.isForumLikeChannel();
      }
      if (hasItem) {
        hasItem = tmp31;
      }
      tmp7 = !hasItem;
    }
    if (!tmp7) {
      obj6 = {
        source: tmp2(tmp3[41]),
        IconComponent: tmp5(tmp3[42]).ThreadIcon,
        onPress() {
              return showThreadBrowserModalDefault(channel);
            },
        accessibilityLabel: null
      };
      const intl6 = tmp5(tmp3[27]).intl;
      obj6.accessibilityLabel = intl6.string(tmp5(tmp3[27]).t.B2panI);
      items1.unshift(obj6);
    }
    obj7 = {
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
                  return closure_1_13(screenIndex(items1[24]), obj);
                }
            };
            let tmp9 = jsx(ConversationCoachmark.ConversationCoachmark, {
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
                  return closure_1_13(screenIndex(items1[24]), obj);
                }
            }, accessibilityLabel.accessibilityLabel);
          } else {
            obj = { noMargin: tmp };
            let merged = Object.assign(accessibilityLabel);
            obj.key = accessibilityLabel.accessibilityLabel;
            tmp9 = createElement(IconActionButtonDefault, { noMargin: tmp });
          }
          return tmp9;
        })
    };
    return <conversationsHeaderButton style={tmp.actionWrapper}>{items1.map((accessibilityLabel, index) => {
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
              return closure_1_13(screenIndex(items1[24]), obj);
            }
        };
        let tmp9 = jsx(ConversationCoachmark.ConversationCoachmark, {
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
              return closure_1_13(screenIndex(items1[24]), obj);
            }
        }, accessibilityLabel.accessibilityLabel);
      } else {
        obj = { noMargin: tmp };
        let merged = Object.assign(accessibilityLabel);
        obj.key = accessibilityLabel.accessibilityLabel;
        tmp9 = createElement(IconActionButtonDefault, { noMargin: tmp });
      }
      return tmp9;
    })}</conversationsHeaderButton>;
  }
  obj9 = channel(items1[23]);
}
function WrappedChannelNavButtons(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(4771);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        obj = { channel: stateFromStores, screenIndex };
        tmp4 = <ChannelActionButtons channel={stateFromStores} screenIndex={screenIndex} />;
      }
    }
  }
  return tmp4;
}
const View = fn(17).View;
const THREADED_CHANNEL_TYPES = fn(1961).THREADED_CHANNEL_TYPES;
let closure_8 = fn(7876).setIsChannelDetailsSearchActive;
const Constants = fn(1074);
({ ChannelTypes: closure_9, ChannelTypesSets: c10, ComponentActions: closure_11 } = Constants);
let closure_12 = fn(7877).SearchEntrypointAnalyticsLocations;
const jsx = fn(21).jsx;
const createElement = fn(19).createElement;
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
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
  let obj1 = channelId(7885);
  obj = { style: containerStyle, children: null };
  if (obj1.useHasForumSearchQuery(channelId)) {
    obj = { channelId };
    let tmp4Result = jsx(channelId(13257).ForumChannelCloseSearchButton, { channelId });
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        obj1 = { channelId, screenIndex, showCreateThread };
        tmp4Result = <WrappedChannelNavButtons channelId={channelId} screenIndex={screenIndex} showCreateThread={showCreateThread} />;
      }
    }
    const obj2 = { channelId, screenIndex };
    tmp4Result = jsx(PrivateChannelButtonsDefault, { channelId, screenIndex });
  }
  obj.children = tmp4Result;
  return <View style={containerStyle}>{null}</View>;
};