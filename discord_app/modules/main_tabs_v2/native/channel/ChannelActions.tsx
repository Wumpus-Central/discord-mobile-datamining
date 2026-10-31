// === Module 9824: ChannelActions ===

// Module 9824 (ChannelActions)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import ChatInputUtils from "ChatInputUtils" /* 5207 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7939 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8673 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9829 */;
import PhoneCallIcon from "PhoneCallIcon" /* 9833 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 9835 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9840 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10996 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11537 */;
import useSearchContext from "useSearchContext" /* 13832 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 13833 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13892 */;
import IconActionButtonDefault from "IconActionButton" /* 14541 */;
import ConversationCoachmark from "ConversationCoachmark" /* 14551 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 14553 */;
import noop from "module_19" /* 19 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6861 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;

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
  let hasChannelOverflowMenu;
  let tmp = closure_17();
  const tmp4 = screenIndex(items1[19])(channel);
  const canSearchForumPosts = channel(items1[20]).useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[21])();
  let obj = channel(items1[20]);
  const items = [hasChannelOverflowMenu];
  items1 = [];
  const stateFromStores = channel(items1[22]).useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = channel(items1[22]);
  const canJoinThreadVoice = channel(items1[23]).useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[23]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = channel(items1[22]).useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj4 = channel(items1[22]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = channel(items1[22]).useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[24])(channel);
  let obj5 = channel(items1[22]);
  const conversationsHeaderButton = channel(items1[25]).useConversationsHeaderButton(channel);
  let obj6 = channel(items1[25]);
  const isGameInvitePostVoiceEnabled = channel(items1[26]).useIsGameInvitePostVoiceEnabled(channel);
  const obj7 = channel(items1[26]);
  const isGameInvitesPost = channel(items1[26]).useIsGameInvitesPost(channel);
  let tmp16 = closure_6(channel.type);
  if (tmp16) {
    tmp16 = "channel-secondary-view-chat" !== screenIndex;
  }
  closure_129_0 = channel;
  const obj8 = channel(items1[26]);
  let id = null;
  if (tmp16) {
    id = channel.id;
  }
  const channelChatUnread = channel(items1[11]).useChannelChatUnread(id);
  ({ hasUnread, mentionCount } = channelChatUnread);
  let tmp19 = null;
  if (tmp16) {
    if (!hasUnread) {
      hasUnread = mentionCount > 0;
    }
    const obj9 = {
      IconComponent: tmp5(tmp3[12]).ChatIcon,
      onPress() {
          openChannelSecondaryViewChatDefault(channel.guild_id, channel.id);
        },
      accessibilityLabel: null,
      badge: null,
      badgePosition: "right",
      buttonText: null
    };
    const intl = tmp5(tmp3[14]).intl;
    obj9.accessibilityLabel = intl.string(tmp5(tmp3[14]).t.kkKapG);
    obj9.badge = hasUnread;
    let StringResult;
    if (hasUnread) {
      if (mentionCount > 0) {
        const _String = String;
        StringResult = String(mentionCount);
      }
    }
    obj9.buttonText = StringResult;
    tmp19 = obj9;
  }
  const tmp22 = screenIndex(items1[27])(channel, tmp16);
  const tmp5Result = channel(items1[11]);
  hasChannelOverflowMenu = channel(items1[28]).useHasChannelOverflowMenu(channel, screenIndex);
  if (canJoinThreadVoice) {
    if (isGameInvitesPost) {
      if (isGameInvitePostVoiceEnabled) {
        let tmp27 = stateFromStores1;
        if (!stateFromStores1) {
          tmp27 = tmp12;
        }
        let obj10 = { IconComponent: tmp27 ? LfgVoiceActiveIcon : LfgVoiceInactiveIcon, buttonText: null, buttonTextColor: "text-feedback-positive", onPress: null, accessibilityLabel: null };
        let StringResult1;
        if (tmp27) {
          if (stateFromStores2 > 0) {
            const _String2 = String;
            StringResult1 = String(stateFromStores2);
          }
        }
        obj10.buttonText = StringResult1;
        if (stateFromStores1) {
          fn = () => PrivateChannelCallUtils.openChannelCallModal(channel);
        }
        obj10.onPress = fn;
        const intl3 = tmp5(tmp3[14]).intl;
        const string2 = intl3.string;
        let t1 = tmp5(tmp3[14]).t;
        if (stateFromStores1) {
          t1 = t1["4ry6yi"];
          let string2Result = string2(t1);
        } else {
          string2Result = string2(t1.My50nf);
        }
        obj10.accessibilityLabel = string2Result;
        obj10 = items1.push(obj10);
      }
    } else {
      if (tmp24) {
        const obj11 = { IconComponent: stateFromStores1 ? EndCallIcon : JoinCallIcon, onPress: null, accessibilityLabel: null };
        let fn2 = fn;
        if (!stateFromStores1) {
          fn2 = () => PrivateChannelCallUtils.openChannelCallModal(channel);
        }
        obj11.onPress = fn2;
        const intl2 = tmp5(tmp3[14]).intl;
        const string = intl2.string;
        const t = tmp5(tmp3[14]).t;
        if (stateFromStores1) {
          let stringResult = string(t["4ry6yi"]);
        } else {
          stringResult = string(t.My50nf);
        }
        obj11.accessibilityLabel = stringResult;
        items1.push(obj11);
      }
      tmp24 = channel.isVocalThread() && tmp12;
    }
  }
  const type = channel.type;
  if (constants.GUILD_DIRECTORY === type) {
    const obj12 = {
      source: tmp2(tmp3[30]),
      IconComponent: tmp5(tmp3[31]).MagnifyingGlassIcon,
      onPress() {
          GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
        },
      accessibilityLabel: null
    };
    const intl6 = tmp5(tmp3[14]).intl;
    obj12.accessibilityLabel = intl6.string(tmp5(tmp3[14]).t["5h0QOP"]);
    items1.push(obj12);
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        if (!tmp16) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          const obj13 = {
            source: tmp2(tmp3[30]),
            IconComponent: tmp5(tmp3[31]).MagnifyingGlassIcon,
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
            accessibilityLabel: null
          };
          const intl4 = tmp5(tmp3[14]).intl;
          obj13.accessibilityLabel = intl4.string(tmp5(tmp3[14]).t["5h0QOP"]);
          items1.push(obj13);
        }
      }
    }
    if (canSearchForumPosts) {
      const obj14 = {
        source: tmp2(tmp3[30]),
        IconComponent: tmp5(tmp3[31]).MagnifyingGlassIcon,
        onPress() {
              const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
            },
        accessibilityLabel: null
      };
      const intl5 = tmp5(tmp3[14]).intl;
      obj14.accessibilityLabel = intl5.string(tmp5(tmp3[14]).t["5h0QOP"]);
      items1.push(obj14);
    }
  }
  if (null != tmp22) {
    items1.push(tmp22);
  }
  if (null != tmp19) {
    items1.push(tmp19);
  }
  if (tmp7) {
    tmp7 = 0 !== items1.length;
  }
  if (!tmp7) {
    let hasItem = set.has(channel.type);
    let tmp41 = !hasItem;
    if (!hasItem) {
      tmp41 = stateFromStores;
    }
    if (tmp41) {
      const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
      tmp41 = !GUILD_THREADS_ONLY.has(channel.type);
    }
    if (hasItem) {
      hasItem = !tmp4;
    }
    if (hasItem) {
      hasItem = !channel.isForumLikeChannel();
    }
    if (hasItem) {
      hasItem = tmp41;
    }
    tmp7 = !hasItem;
  }
  if (!tmp7) {
    const obj15 = {
      source: tmp2(tmp3[41]),
      IconComponent: tmp5(tmp3[42]).ThreadIcon,
      onPress() {
          return showThreadBrowserModalDefault(channel);
        },
      accessibilityLabel: null
    };
    const intl7 = tmp5(tmp3[14]).intl;
    obj15.accessibilityLabel = intl7.string(tmp5(tmp3[14]).t.B2panI);
    items1.unshift(obj15);
  }
  const obj16 = { style: tmp.actionWrapper, children: null };
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
              return closure_1_14(screenIndex(items1[45]), obj);
            }
        };
        let tmp10 = closure_2_14(ConversationCoachmark.ConversationCoachmark, obj2, accessibilityLabel.accessibilityLabel);
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
    const obj17 = { channel };
    hasChannelOverflowMenu = closure_14(tmp2(tmp3[28]), obj17);
  }
  items4[1] = hasChannelOverflowMenu;
  obj16.children = items4;
  return closure_15(conversationsHeaderButton, obj16);
}
function WrappedChannelNavButtons(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(6734);
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
const ChannelRecord = fn(4867);
({ THREADED_CHANNEL_TYPES: hasOwnProperty, isChannelChatInSidebar: metroRequire } = ChannelRecord);
let closure_9 = fn(9825).setIsChannelDetailsSearchActive;
const Constants = fn(1072);
({ ChannelTypes: c10, ChannelTypesSets: closure_11, ComponentActions: closure_12 } = Constants);
let closure_13 = fn(9826).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createElement = fn(19).createElement;
const createStyles = fn(5014);
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
    let tmp4Result = closure_14(tmp(14552).ForumChannelCloseSearchButton, obj4);
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