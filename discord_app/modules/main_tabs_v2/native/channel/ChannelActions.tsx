// === Module 7875: JoinCallIcon ===

// Module 7875 (JoinCallIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5101 */;
import PhoneCallIcon from "PhoneCallIcon" /* 7880 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 7882 */;
import _modDef13259 from "module_13259" /* 13259 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "handleThreadCreateOrUpdate" /* 5507 */;
import { THREADED_CHANNEL_TYPES } from "createChannelRecord" /* 1961 */;
import closure_6 from "ensureGuildLoaded" /* 1957 */;
import closure_7 from "updateVoiceState" /* 4579 */;
import { setIsChannelDetailsSearchActive as closure_8 } from "useChannelDetailsStore" /* 7876 */;
import ME from "ME" /* 1074 */;
import { SearchEntrypointAnalyticsLocations as closure_12 } from "SearchEntrypointAnalyticsLocations" /* 7877 */;
import { jsx } from "jsxProd" /* 21 */;
import { createElement } from "noop" /* 19 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function JoinCallIcon() {
  return jsx(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: ThemesDefault.unsafe_rawColors.GREEN_360 });
}
function EndCallIcon() {
  return jsx(PhoneHangUpIcon.PhoneHangUpIcon, { size: "sm", color: ThemesDefault.unsafe_rawColors.RED_400 });
}
function LfgVoiceActiveIcon() {
  return jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: ThemesDefault.unsafe_rawColors.GREEN_360 });
}
function LfgVoiceInactiveIcon() {
  return jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
}
function ChannelActionButtons(channel) {
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  let items1;
  let conversationsHeaderButton;
  let tmp = callback();
  let obj = channel(items1[16]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[17])();
  obj1 = channel(items1[18]);
  const items = [closure_4];
  items1 = [];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_4.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = channel(items1[19]);
  const canJoinThreadVoice = obj2.useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[18]);
  const items2 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => closure_1_7.isInChannel(channel.id));
  let obj4 = channel(items1[18]);
  const items3 = [closure_7];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => Object.keys(closure_1_7.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[20])(channel);
  let obj5 = channel(items1[21]);
  conversationsHeaderButton = obj5.useConversationsHeaderButton(channel);
  let obj6 = channel(items1[22]);
  const isGameInvitePostVoiceEnabled = obj6.useIsGameInvitePostVoiceEnabled(channel);
  let obj7 = channel(items1[22]);
  const isGameInvitesPost = obj7.useIsGameInvitesPost(channel);
  const tmp4 = screenIndex(items1[15])(channel);
  if (obj9.useIsVibegrationsChannelCandidate(channel, "ChannelActions")) {
    obj = { style: null, children: null };
    obj[0] = tmp.actionWrapper;
    obj = { noMargin: true, source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
    obj[2] = tmp5(tmp3[25]).RetryIcon;
    obj[3] = function onPress() {
      const tmp = screenIndex(items1[26]);
      return tmp(channel(items1[23]).vibegrationsAppIdFromTopic(channel.topic));
    };
    const intl7 = tmp5(tmp3[27]).intl;
    obj[4] = intl7.string(tmp2(tmp3[28]).xKexN1);
    obj[1] = jsx(tmp2(tmp3[24]), { noMargin: true, source: null, IconComponent: null, onPress: null, accessibilityLabel: null });
    return <conversationsHeaderButton noMargin source={null} IconComponent={null} onPress={null} accessibilityLabel={null} />;
  } else {
    if (canJoinThreadVoice) {
      if (isGameInvitesPost) {
        if (isGameInvitePostVoiceEnabled) {
          let tmp19 = stateFromStores1;
          if (!stateFromStores1) {
            tmp19 = tmp12;
          }
          obj1 = { source: null, IconComponent: null, buttonText: null, buttonTextColor: "text-feedback-positive", onPress: null, accessibilityLabel: null };
          obj1[1] = tmp19 ? LfgVoiceActiveIcon : LfgVoiceInactiveIcon;
          let StringResult;
          if (tmp19) {
            if (stateFromStores2 > 0) {
              const _String = String;
              StringResult = String(stateFromStores2);
            }
          }
          obj1[2] = StringResult;
          if (stateFromStores1) {
            fn = () => channel(items1[29]).openChannelCallModal(channel);
          }
          obj1[4] = fn;
          const intl2 = tmp5(tmp3[27]).intl;
          const string2 = intl2.string;
          if (stateFromStores1) {
            let string2Result = string2(_4ry6yi);
          } else {
            string2Result = string2(_4ry6yi.My50nf);
          }
          obj1[5] = string2Result;
          obj1 = items1.push(obj1);
        }
      } else {
        if (tmp16) {
          obj2 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
          obj2[1] = stateFromStores1 ? EndCallIcon : JoinCallIcon;
          let fn2 = fn;
          if (!stateFromStores1) {
            fn2 = () => channel(items1[29]).openChannelCallModal(channel);
          }
          obj2[2] = fn2;
          const intl = tmp5(tmp3[27]).intl;
          const string = intl.string;
          const t = tmp5(tmp3[27]).t;
          if (stateFromStores1) {
            let stringResult = string(t["4ry6yi"]);
          } else {
            stringResult = string(t.My50nf);
          }
          obj2[3] = stringResult;
          items1.push(obj2);
        }
        tmp16 = channel.isVocalThread() && tmp12;
      }
    }
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      obj3 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
      obj3[0] = tmp2(tmp3[30]);
      obj3[1] = tmp5(tmp3[31]).MagnifyingGlassIcon;
      obj3[2] = function onPress() {
        let obj = screenIndex(items1[32]);
        obj = { channel };
        obj.open(obj);
      };
      const intl5 = tmp5(tmp3[27]).intl;
      obj3[3] = intl5.string(tmp5(tmp3[27]).t["5h0QOP"]);
      items1.push(obj3);
    } else {
      if (tmp23.GUILD_FORUM !== type) {
        if (tmp23.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          obj4 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
          obj4[0] = tmp2(tmp3[30]);
          obj4[1] = tmp5(tmp3[31]).MagnifyingGlassIcon;
          obj4[2] = function onPress() {
            let obj = channel;
            closure_1_8(channel.id, true, "initial");
            obj1 = channel(items1[34]);
            if (obj1.isIOS()) {
              let tmp2Result = tmp2(tmp3[35]);
              const chatInputRef = tmp2Result.getChatInputRef(obj.id, screenIndex);
              if (chatInputRef != null) {
                chatInputRef.blur();
              }
            }
            const guildId = obj.getGuildId();
            tmp2Result = tmp2(tmp3[36]);
            const channelDetailsSearchContext = tmp2Result.getChannelDetailsSearchContext(obj.id, guildId, obj.isThread());
            const isThreadResult = obj.isThread();
            obj = { searchContext: channelDetailsSearchContext, searchLocation: closure_1_12.CHANNEL_HEADER };
            screenIndex(items1[37]).trackSearchOpened(obj);
            const obj6 = screenIndex(items1[37]);
            if (tmp2Result1.isSwipeToMemberListEnabled()) {
              const ComponentDispatch = tmp2(tmp3[39]).ComponentDispatch;
              obj = { source: "channel-header-search", channelId: null, screenIndex: null };
              obj[1] = obj.id;
              obj[2] = screenIndex;
              ComponentDispatch.dispatch(closure_1_11.SHOW_CHANNEL_DETAILS, obj);
            } else {
              const rootNavigationRef = tmp2(tmp3[40]).getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  obj1 = { channelId: null, search: true, source: "channel-header-search" };
                  obj1[0] = obj.id;
                  rootNavigationRef.navigate("sidebar", obj1);
                }
              }
            }
          };
          const intl3 = tmp5(tmp3[27]).intl;
          obj4[3] = intl3.string(tmp5(tmp3[27]).t["5h0QOP"]);
          items1.push(obj4);
        }
      }
      if (canSearchForumPosts) {
        obj5 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
        obj5[0] = tmp2(tmp3[30]);
        obj5[1] = tmp5(tmp3[31]).MagnifyingGlassIcon;
        obj5[2] = function onPress() {
          const result = screenIndex(items1[33]).updateForumSearchQuery(channel.id, "");
        };
        const intl4 = tmp5(tmp3[27]).intl;
        obj5[3] = intl4.string(tmp5(tmp3[27]).t["5h0QOP"]);
        items1.push(obj5);
      }
    }
    if (tmp7) {
      tmp7 = 0 !== items1.length;
    }
    if (!tmp7) {
      let hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
      let tmp30 = !hasItem;
      if (!hasItem) {
        tmp30 = stateFromStores;
      }
      if (tmp30) {
        const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
        tmp30 = !GUILD_THREADS_ONLY.has(channel.type);
      }
      if (hasItem) {
        hasItem = !tmp4;
      }
      if (hasItem) {
        hasItem = !channel.isForumLikeChannel();
      }
      if (hasItem) {
        hasItem = tmp30;
      }
      tmp7 = !hasItem;
    }
    if (!tmp7) {
      obj6 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
      obj6[0] = tmp2(tmp3[41]);
      obj6[1] = tmp5(tmp3[42]).ThreadIcon;
      obj6[2] = function onPress() {
        return screenIndex(items1[43])(channel);
      };
      const intl6 = tmp5(tmp3[27]).intl;
      obj6[3] = intl6.string(tmp5(tmp3[27]).t.B2panI);
      items1.unshift(obj6);
    }
    obj7 = { style: null, children: null };
    obj7[0] = tmp.actionWrapper;
    obj7[1] = items1.map((accessibilityLabel) => {
      closure_0 = accessibilityLabel;
      if (accessibilityLabel === conversationsHeaderButton) {
        let obj = { isLast: null, children: null };
        obj[0] = tmp;
        obj[1] = function children(arg0) {
          closure_0 = arg0;
          const obj = { noMargin: true };
          const merged = Object.assign(closure_0);
          obj.onPress = function onPress(arg0) {
            lib();
            const onPress = lib.onPress;
            if (onPress != null) {
              onPress(arg0);
            }
          };
          return closure_1_13(closure_1_1(closure_1_2[24]), obj);
        };
        let tmp9 = closure_1_13(channel(items1[44]).ConversationCoachmark, obj, accessibilityLabel.accessibilityLabel);
      } else {
        obj = { noMargin: null };
        obj[0] = tmp;
        let merged = Object.assign(accessibilityLabel);
        obj.key = accessibilityLabel.accessibilityLabel;
        tmp9 = closure_1_14(screenIndex(items1[24]), obj);
        const tmp5 = screenIndex(items1[24]);
      }
      return tmp9;
    });
    return <conversationsHeaderButton style={null}>{null}</conversationsHeaderButton>;
  }
  obj9 = channel(items1[23]);
}
function WrappedChannelNavButtons(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  let obj = channelId(504);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(channelId));
  channelId(4771);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        obj = { channel: null, screenIndex: null };
        obj[0] = stateFromStores;
        obj[1] = screenIndex;
        tmp4 = <ChannelActionButtons channel={null} screenIndex={null} />;
      }
    }
  }
  return tmp4;
}
noopAll;
({ ChannelTypes: c9, ChannelTypesSets: c10, ComponentActions: unpackModuleId } = ME);
let closure_15 = createCacheKey.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default function ChannelActions(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  ({ containerStyle, showCreateThread } = channelId);
  let obj = channelId(504);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = closure_1_6;
    const channel = closure_1_6.getChannel(channelId);
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
    obj[1] = flag2;
    return obj;
  });
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  obj1 = channelId(7885);
  obj = { style: containerStyle, children: null };
  if (obj1.useHasForumSearchQuery(channelId)) {
    obj = { channelId: null };
    obj[0] = channelId;
    let tmp4Result = tmp4(channelId(13257).ForumChannelCloseSearchButton, obj);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        obj1 = { channelId: null, screenIndex: null, showCreateThread: null };
        obj1[0] = channelId;
        obj1[1] = screenIndex;
        obj1[2] = showCreateThread;
        tmp4Result = tmp4(WrappedChannelNavButtons, obj1);
      }
    }
    const obj2 = { channelId: null, screenIndex: null };
    obj2[0] = channelId;
    obj2[1] = screenIndex;
    tmp4Result = tmp4(_modDef13259, obj2);
  }
  obj[1] = tmp4Result;
  return <View style={containerStyle}>{null}</View>;
};