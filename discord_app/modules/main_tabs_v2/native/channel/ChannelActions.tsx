// === Module 8543: JoinCallButton ===

// Module 8543 (JoinCallButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import PhoneCallIcon from "PhoneCallIcon" /* 8547 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 8549 */;
import _modDef12758 from "module_12758" /* 12758 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "handleThreadCreateOrUpdate" /* 4974 */;
import { THREADED_CHANNEL_TYPES } from "createChannelRecord" /* 1395 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "updateVoiceState" /* 4547 */;
import { setIsChannelDetailsSearchActive as closure_8 } from "useChannelDetailsStore" /* 8544 */;
import ME from "ME" /* 676 */;
import { SearchEntrypointAnalyticsLocations as closure_12 } from "SearchEntrypointAnalyticsLocations" /* 8545 */;
import { jsx } from "jsxProd" /* 21 */;
import { createElement } from "noop" /* 19 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function JoinCallButton() {
  return jsx(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: ThemesDefault.unsafe_rawColors.GREEN_360 });
}
function EndCallButton() {
  return jsx(PhoneHangUpIcon.PhoneHangUpIcon, { size: "sm", color: ThemesDefault.unsafe_rawColors.RED_400 });
}
function ChannelActionButtons(channel) {
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  let items1;
  let conversationsHeaderButton;
  let tmp = callback();
  let obj = channel(items1[15]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[16])();
  obj1 = channel(items1[17]);
  const items = [closure_4];
  items1 = [];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_4.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = channel(items1[18]);
  const canJoinThreadVoice = obj2.useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[17]);
  const items2 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => closure_1_7.isInChannel(channel.id));
  let obj4 = channel(items1[17]);
  const items3 = [closure_7];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => !screenIndex(items1[19]).isEmpty(closure_1_7.getVoiceStatesForChannel(channel.id)));
  let fn = screenIndex(items1[20])(channel);
  let obj5 = channel(items1[21]);
  conversationsHeaderButton = obj5.useConversationsHeaderButton(channel);
  let obj6 = channel(items1[22]);
  if (obj6.useIsVibegrationsChannelCandidate(channel, "ChannelActions")) {
    obj = { style: null, children: null };
    obj[0] = tmp.actionWrapper;
    obj = { noMargin: true, source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
    obj[2] = tmp5(tmp3[24]).RetryIcon;
    obj[3] = function onPress() {
      const tmp = screenIndex(items1[25]);
      return tmp(channel(items1[22]).vibegrationsAppIdFromTopic(channel.topic));
    };
    const intl6 = tmp5(tmp3[26]).intl;
    obj[4] = intl6.string(tmp2(tmp3[27]).xKexN1);
    obj[1] = jsx(tmp2(tmp3[23]), { noMargin: true, source: null, IconComponent: null, onPress: null, accessibilityLabel: null });
    return <conversationsHeaderButton noMargin source={null} IconComponent={null} onPress={null} accessibilityLabel={null} />;
  } else {
    if (!tmp13) {
      const type = channel.type;
      if (constants.GUILD_DIRECTORY === type) {
        obj1 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
        obj1[0] = tmp2(tmp3[29]);
        obj1[1] = tmp5(tmp3[30]).MagnifyingGlassIcon;
        obj1[2] = function onPress() {
          let obj = screenIndex(items1[31]);
          obj = { channel };
          obj.open(obj);
        };
        const intl4 = tmp5(tmp3[26]).intl;
        obj1[3] = intl4.string(tmp5(tmp3[26]).t["5h0QOP"]);
        items1.push(obj1);
      } else {
        if (tmp15.GUILD_FORUM !== type) {
          if (tmp15.GUILD_MEDIA !== type) {
            if (null != conversationsHeaderButton) {
              items1.push(conversationsHeaderButton);
            }
            obj2 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
            obj2[0] = tmp2(tmp3[29]);
            obj2[1] = tmp5(tmp3[30]).MagnifyingGlassIcon;
            obj2[2] = function onPress() {
              let obj = channel;
              closure_1_8(channel.id, true, "initial");
              obj1 = channel(items1[33]);
              if (obj1.isIOS()) {
                let tmp2Result = tmp2(tmp3[34]);
                const chatInputRef = tmp2Result.getChatInputRef(obj.id, screenIndex);
                if (chatInputRef != null) {
                  chatInputRef.blur();
                }
              }
              const guildId = obj.getGuildId();
              tmp2Result = tmp2(tmp3[35]);
              const channelDetailsSearchContext = tmp2Result.getChannelDetailsSearchContext(obj.id, guildId, obj.isThread());
              const isThreadResult = obj.isThread();
              obj = { searchContext: channelDetailsSearchContext, searchLocation: closure_1_12.CHANNEL_HEADER };
              screenIndex(items1[36]).trackSearchOpened(obj);
              const obj6 = screenIndex(items1[36]);
              if (tmp2Result1.isSwipeToMemberListEnabled()) {
                const ComponentDispatch = tmp2(tmp3[38]).ComponentDispatch;
                obj = { source: "channel-header-search", channelId: null, screenIndex: null };
                obj[1] = obj.id;
                obj[2] = screenIndex;
                ComponentDispatch.dispatch(closure_1_11.SHOW_CHANNEL_DETAILS, obj);
              } else {
                const rootNavigationRef = tmp2(tmp3[39]).getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    obj1 = { channelId: null, search: true, source: "channel-header-search" };
                    obj1[0] = obj.id;
                    rootNavigationRef.navigate("sidebar", obj1);
                  }
                }
              }
            };
            const intl2 = tmp5(tmp3[26]).intl;
            obj2[3] = intl2.string(tmp5(tmp3[26]).t["5h0QOP"]);
            items1.push(obj2);
          }
        }
        if (canSearchForumPosts) {
          obj3 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
          obj3[0] = tmp2(tmp3[29]);
          obj3[1] = tmp5(tmp3[30]).MagnifyingGlassIcon;
          obj3[2] = function onPress() {
            const result = screenIndex(items1[32]).updateForumSearchQuery(channel.id, "");
          };
          const intl3 = tmp5(tmp3[26]).intl;
          obj3[3] = intl3.string(tmp5(tmp3[26]).t["5h0QOP"]);
          items1.push(obj3);
        }
      }
      if (tmp7) {
        tmp7 = 0 !== items1.length;
      }
      if (!tmp7) {
        let hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
        let tmp22 = !hasItem;
        if (!hasItem) {
          tmp22 = stateFromStores;
        }
        if (tmp22) {
          const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
          tmp22 = !GUILD_THREADS_ONLY.has(channel.type);
        }
        if (hasItem) {
          hasItem = !tmp4;
        }
        if (hasItem) {
          hasItem = !channel.isForumLikeChannel();
        }
        if (hasItem) {
          hasItem = tmp22;
        }
        tmp7 = !hasItem;
      }
      if (!tmp7) {
        obj4 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
        obj4[0] = tmp2(tmp3[40]);
        obj4[1] = tmp5(tmp3[41]).ThreadIcon;
        obj4[2] = function onPress() {
          return screenIndex(items1[42])(channel);
        };
        const intl5 = tmp5(tmp3[26]).intl;
        obj4[3] = intl5.string(tmp5(tmp3[26]).t.B2panI);
        items1.unshift(obj4);
      }
      obj5 = { style: null, children: null };
      obj5[0] = tmp.actionWrapper;
      obj5[1] = items1.map((accessibilityLabel) => {
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
            return closure_1_13(closure_1_1(closure_1_2[23]), obj);
          };
          let tmp9 = closure_1_13(channel(items1[43]).ConversationCoachmark, obj, accessibilityLabel.accessibilityLabel);
        } else {
          obj = { noMargin: null };
          obj[0] = tmp;
          let merged = Object.assign(accessibilityLabel);
          obj.key = accessibilityLabel.accessibilityLabel;
          tmp9 = closure_1_14(screenIndex(items1[23]), obj);
          const tmp5 = screenIndex(items1[23]);
        }
        return tmp9;
      });
      return <conversationsHeaderButton style={null}>{null}</conversationsHeaderButton>;
    } else {
      obj6 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
      obj6[1] = stateFromStores1 ? EndCallButton : JoinCallButton;
      if (!stateFromStores1) {
        fn = () => channel(items1[28]).openChannelCallModal(channel);
      }
      obj6[2] = fn;
      const intl = tmp5(tmp3[26]).intl;
      const string = intl.string;
      if (stateFromStores1) {
        let stringResult = string(_4ry6yi);
      } else {
        stringResult = string(_4ry6yi.My50nf);
      }
      obj6[3] = stringResult;
      obj6 = items1.push(obj6);
    }
    tmp13 = channel.isVocalThread() && canJoinThreadVoice && stateFromStores2;
  }
}
function WrappedChannelNavButtons(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  let obj = channelId(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(channelId));
  channelId(5257);
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
  let obj = channelId(589);
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
  obj1 = channelId(8552);
  obj = { style: containerStyle, children: null };
  if (obj1.useHasForumSearchQuery(channelId)) {
    obj = { channelId: null };
    obj[0] = channelId;
    let tmp4Result = tmp4(channelId(12756).ForumChannelCloseSearchButton, obj);
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
    tmp4Result = tmp4(_modDef12758, obj2);
  }
  obj[1] = tmp4Result;
  return <View style={containerStyle}>{null}</View>;
};