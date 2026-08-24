// discord_app/modules/main_tabs_v2/native/channel/ChannelActions.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PhoneCallIcon from "../../../../design/components/Icon/native/redesign/generated/PhoneCallIcon.tsx";
import PhoneHangUpIcon from "../../../../design/components/Icon/native/redesign/generated/PhoneHangUpIcon.tsx";
import _modDef12703 from "header/PrivateChannelButtons.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../threads/ActiveThreadsStore.tsx";
import { THREADED_CHANNEL_TYPES } from "../../../../records/ChannelRecord.tsx";
import closure_6 from "../../../../stores/ChannelStore.tsx";
import closure_7 from "../../../../stores/VoiceStateStore.tsx";
import { setIsChannelDetailsSearchActive as closure_8 } from "../sidebar/details/stores/ChannelDetailsStore.tsx";
import ME from "../../../../Constants.tsx";
import { SearchEntrypointAnalyticsLocations as closure_12 } from "../../../search/native/tracking/TrackingConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { createElement } from "../../../../../_runtime/00019_noop.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
  const tmp = callback();
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
  const tmp4 = screenIndex(items1[14])(channel);
  conversationsHeaderButton = channel(items1[21]).useConversationsHeaderButton(channel);
  let obj6 = channel(items1[21]);
  if (!tmp13) {
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      obj = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
      obj[0] = tmp2(tmp3[24]);
      obj[1] = tmp5(tmp3[25]).MagnifyingGlassIcon;
      obj[2] = function onPress() {
        let obj = screenIndex(items1[26]);
        obj = { channel };
        obj.open(obj);
      };
      const intl4 = tmp5(tmp3[23]).intl;
      obj[3] = intl4.string(tmp5(tmp3[23]).t["5h0QOP"]);
      items1.push(obj);
    } else {
      if (tmp15.GUILD_FORUM !== type) {
        if (tmp15.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          obj = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
          obj[0] = tmp2(tmp3[24]);
          obj[1] = tmp5(tmp3[25]).MagnifyingGlassIcon;
          obj[2] = function onPress() {
            let obj = channel;
            closure_1_8(channel.id, true, "initial");
            obj1 = channel(items1[28]);
            if (obj1.isIOS()) {
              let tmp2Result = tmp2(tmp3[29]);
              const chatInputRef = tmp2Result.getChatInputRef(obj.id, screenIndex);
              if (chatInputRef != null) {
                chatInputRef.blur();
              }
            }
            const guildId = obj.getGuildId();
            tmp2Result = tmp2(tmp3[30]);
            const channelDetailsSearchContext = tmp2Result.getChannelDetailsSearchContext(obj.id, guildId, obj.isThread());
            const isThreadResult = obj.isThread();
            obj = { searchContext: channelDetailsSearchContext, searchLocation: closure_1_12.CHANNEL_HEADER };
            screenIndex(items1[31]).trackSearchOpened(obj);
            const obj6 = screenIndex(items1[31]);
            if (tmp2Result1.isSwipeToMemberListEnabled()) {
              const ComponentDispatch = tmp2(tmp3[33]).ComponentDispatch;
              obj = { source: "channel-header-search", channelId: null, screenIndex: null };
              obj[1] = obj.id;
              obj[2] = screenIndex;
              ComponentDispatch.dispatch(closure_1_11.SHOW_CHANNEL_DETAILS, obj);
            } else {
              const rootNavigationRef = tmp2(tmp3[34]).getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  obj1 = { channelId: null, search: true, source: "channel-header-search" };
                  obj1[0] = obj.id;
                  rootNavigationRef.navigate("sidebar", obj1);
                }
              }
            }
          };
          const intl2 = tmp5(tmp3[23]).intl;
          obj[3] = intl2.string(tmp5(tmp3[23]).t["5h0QOP"]);
          items1.push(obj);
        }
      }
      if (canSearchForumPosts) {
        obj1 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
        obj1[0] = tmp2(tmp3[24]);
        obj1[1] = tmp5(tmp3[25]).MagnifyingGlassIcon;
        obj1[2] = function onPress() {
          const result = screenIndex(items1[27]).updateForumSearchQuery(channel.id, "");
        };
        const intl3 = tmp5(tmp3[23]).intl;
        obj1[3] = intl3.string(tmp5(tmp3[23]).t["5h0QOP"]);
        items1.push(obj1);
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
      obj2 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
      obj2[0] = tmp2(tmp3[35]);
      obj2[1] = tmp5(tmp3[36]).ThreadIcon;
      obj2[2] = function onPress() {
        return screenIndex(items1[37])(channel);
      };
      const intl5 = tmp5(tmp3[23]).intl;
      obj2[3] = intl5.string(tmp5(tmp3[23]).t.B2panI);
      items1.unshift(obj2);
    }
    obj3 = { style: null, children: null };
    obj3[0] = tmp.actionWrapper;
    obj3[1] = items1.map((accessibilityLabel) => {
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
          return closure_1_13(closure_1_1(closure_1_2[39]), obj);
        };
        let tmp9 = closure_1_13(channel(items1[38]).ConversationCoachmark, obj, accessibilityLabel.accessibilityLabel);
      } else {
        obj = { noMargin: null };
        obj[0] = tmp;
        let merged = Object.assign(accessibilityLabel);
        obj.key = accessibilityLabel.accessibilityLabel;
        tmp9 = closure_1_14(screenIndex(items1[39]), obj);
        const tmp5 = screenIndex(items1[39]);
      }
      return tmp9;
    });
    return <conversationsHeaderButton style={null}>{null}</conversationsHeaderButton>;
  } else {
    obj4 = { source: null, IconComponent: null, onPress: null, accessibilityLabel: null };
    obj4[1] = stateFromStores1 ? EndCallButton : JoinCallButton;
    if (!stateFromStores1) {
      fn = () => channel(items1[22]).openChannelCallModal(channel);
    }
    obj4[2] = fn;
    const intl = tmp5(tmp3[23]).intl;
    const string = intl.string;
    if (stateFromStores1) {
      let stringResult = string(_4ry6yi);
    } else {
      stringResult = string(_4ry6yi.My50nf);
    }
    obj4[3] = stringResult;
    obj4 = items1.push(obj4);
  }
}
function WrappedChannelNavButtons(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  let obj = channelId(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(channelId));
  channelId(5252);
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
  obj1 = channelId(8513);
  obj = { style: containerStyle, children: null };
  if (obj1.useHasForumSearchQuery(channelId)) {
    obj = { channelId: null };
    obj[0] = channelId;
    let tmp4Result = tmp4(channelId(12701).ForumChannelCloseSearchButton, obj);
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
    tmp4Result = tmp4(_modDef12703, obj2);
  }
  obj[1] = tmp4Result;
  return <View style={containerStyle}>{null}</View>;
};