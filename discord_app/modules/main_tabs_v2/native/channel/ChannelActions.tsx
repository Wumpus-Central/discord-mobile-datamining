// discord_app/modules/main_tabs_v2/native/channel/ChannelActions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import VoiceNormalIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
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
  const tmp = closure_15();
  const tmp4 = screenIndex(items1[15])(channel);
  const canSearchForumPosts = channel(items1[16]).useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[17])();
  let obj = channel(items1[16]);
  const items = [ActiveThreadsStore];
  items1 = [];
  const stateFromStores = channel(items1[18]).useStateFromStores(items, () =>
    ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id),
  );
  let obj2 = channel(items1[18]);
  const canJoinThreadVoice = channel(items1[19]).useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[19]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = channel(items1[18]).useStateFromStores(items2, () =>
    VoiceStateStore.isInChannel(channel.id),
  );
  let obj4 = channel(items1[18]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = channel(items1[18]).useStateFromStores(
    items3,
    () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length,
  );
  let fn = screenIndex(items1[20])(channel);
  let obj5 = channel(items1[18]);
  const conversationsHeaderButton = channel(items1[21]).useConversationsHeaderButton(channel);
  let obj6 = channel(items1[21]);
  const isGameInvitePostVoiceEnabled = channel(items1[22]).useIsGameInvitePostVoiceEnabled(channel);
  const obj7 = channel(items1[22]);
  const isGameInvitesPost = channel(items1[22]).useIsGameInvitesPost(channel);
  const obj8 = channel(items1[22]);
  if (obj9.useIsVibegrationsChannelCandidate(channel, "ChannelActions")) {
    const obj10 = { channel };
    return jsx(tmp2(tmp3[24]), { channel });
  } else {
    if (canJoinThreadVoice) {
      if (isGameInvitesPost) {
        if (isGameInvitePostVoiceEnabled) {
          let tmp19 = stateFromStores1;
          if (!stateFromStores1) {
            tmp19 = tmp12;
          }
          let obj11 = {
            source: null,
            IconComponent: tmp19 ? LfgVoiceActiveIcon : LfgVoiceInactiveIcon,
            buttonText: null,
            buttonTextColor: "text-feedback-positive",
            onPress: null,
            accessibilityLabel: null,
          };
          let StringResult;
          if (tmp19) {
            if (stateFromStores2 > 0) {
              const _String = String;
              StringResult = String(stateFromStores2);
            }
          }
          obj11.buttonText = StringResult;
          if (stateFromStores1) {
            fn = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj11.onPress = fn;
          const intl2 = tmp5(tmp3[26]).intl;
          const string2 = intl2.string;
          let t1 = tmp5(tmp3[26]).t;
          if (stateFromStores1) {
            t1 = t1["4ry6yi"];
            let string2Result = string2(t1);
          } else {
            string2Result = string2(t1.My50nf);
          }
          obj11.accessibilityLabel = string2Result;
          obj11 = items1.push(obj11);
        }
      } else {
        if (tmp16) {
          const obj12 = {
            source: null,
            IconComponent: stateFromStores1 ? EndCallIcon : JoinCallIcon,
            onPress: null,
            accessibilityLabel: null,
          };
          let fn2 = fn;
          if (!stateFromStores1) {
            fn2 = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj12.onPress = fn2;
          const intl = tmp5(tmp3[26]).intl;
          const string = intl.string;
          const t = tmp5(tmp3[26]).t;
          if (stateFromStores1) {
            let stringResult = string(t["4ry6yi"]);
          } else {
            stringResult = string(t.My50nf);
          }
          obj12.accessibilityLabel = stringResult;
          items1.push(obj12);
        }
        tmp16 = channel.isVocalThread() && tmp12;
      }
    }
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      const obj13 = {
        source: tmp2(tmp3[27]),
        IconComponent: tmp5(tmp3[28]).MagnifyingGlassIcon,
        onPress() {
          GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
        },
        accessibilityLabel: null,
      };
      const intl5 = tmp5(tmp3[26]).intl;
      obj13.accessibilityLabel = intl5.string(tmp5(tmp3[26]).t["5h0QOP"]);
      items1.push(obj13);
    } else {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          const obj14 = {
            source: tmp2(tmp3[27]),
            IconComponent: tmp5(tmp3[28]).MagnifyingGlassIcon,
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
          const intl3 = tmp5(tmp3[26]).intl;
          obj14.accessibilityLabel = intl3.string(tmp5(tmp3[26]).t["5h0QOP"]);
          items1.push(obj14);
        }
      }
      if (canSearchForumPosts) {
        const obj15 = {
          source: tmp2(tmp3[27]),
          IconComponent: tmp5(tmp3[28]).MagnifyingGlassIcon,
          onPress() {
            const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
          },
          accessibilityLabel: null,
        };
        const intl4 = tmp5(tmp3[26]).intl;
        obj15.accessibilityLabel = intl4.string(tmp5(tmp3[26]).t["5h0QOP"]);
        items1.push(obj15);
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
      const obj16 = {
        source: tmp2(tmp3[38]),
        IconComponent: tmp5(tmp3[39]).ThreadIcon,
        onPress() {
          return showThreadBrowserModalDefault(channel);
        },
        accessibilityLabel: null,
      };
      const intl6 = tmp5(tmp3[26]).intl;
      obj16.accessibilityLabel = intl6.string(tmp5(tmp3[26]).t.B2panI);
      items1.unshift(obj16);
    }
    const obj17 = {
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
              return closure_1_13(screenIndex(items1[42]), obj);
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
                return closure_1_13(screenIndex(items1[42]), obj);
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
      }),
    };
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
                return closure_1_13(screenIndex(items1[42]), obj);
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
                  return closure_1_13(screenIndex(items1[42]), obj);
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
  }
  obj9 = channel(items1[23]);
}
function WrappedChannelNavButtons(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(5037);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        const obj2 = { channel: stateFromStores, screenIndex };
        tmp4 = <ChannelActionButtons channel={stateFromStores} screenIndex={screenIndex} />;
      }
    }
  }
  return tmp4;
}
const View = fn(17).View;
const THREADED_CHANNEL_TYPES = fn(2046).THREADED_CHANNEL_TYPES;
let closure_8 = fn(8205).setIsChannelDetailsSearchActive;
const Constants = fn(1074);
({ ChannelTypes: closure_9, ChannelTypesSets: c10, ComponentActions: closure_11 } = Constants);
let closure_12 = fn(8206).SearchEntrypointAnalyticsLocations;
const jsx = fn(21).jsx;
const createElement = fn(19).createElement;
const createStyles = fn(4827);
let closure_15 = createStyles.createStyles({
  actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" },
});
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
    let tmp4Result = jsx(tmp(13655).ForumChannelCloseSearchButton, { channelId });
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        const obj5 = { channelId, screenIndex, showCreateThread };
        tmp4Result = (
          <WrappedChannelNavButtons
            channelId={channelId}
            screenIndex={screenIndex}
            showCreateThread={showCreateThread}
          />
        );
      }
    }
    const obj6 = { channelId, screenIndex };
    tmp4Result = jsx(PrivateChannelButtonsDefault, { channelId, screenIndex });
  }
  obj3.children = tmp4Result;
  return <View style={containerStyle}>{null}</View>;
}
