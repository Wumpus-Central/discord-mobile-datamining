// discord_app/modules/guild_sidebar/native/VoiceUsers.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useIsUsingClientThemeDefault from "../../client_themes/native/useIsUsingClientTheme.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import ChannelListLayout from "../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import HeadphonesIcon from "../../../design/components/Icon/native/redesign/generated/HeadphonesIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
function AudienceItem(arg0) {
  ({ audienceCount, collapsed } = arg0);
  const tmp2 = closure_11(useIsUsingClientThemeDefault());
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = util.intl;
    let obj = { count: audienceCount };
    formatToPlainStringResult = intl.formatToPlainString(util.t["+v2pN2"], obj);
  }
  obj = { style: collapsed ? tmp2.listenersCollapsed : tmp2.listeners, children: null };
  obj = {
    style: tmp2.listenersIconWrapper,
    children: timestampProducer(HeadphonesIcon.HeadphonesIcon, {
      color: "redesign-channel-name-muted-text",
      size: "custom",
      style: tmp2.headphonesIcon,
    }),
  };
  const items = [
    timestampProducer(View, obj),
    timestampProducer(Text_Text.Text, {
      style: tmp2.listenersText,
      variant,
      color: "redesign-channel-name-muted-text",
      children: formatToPlainStringResult,
    }),
  ];
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = {};
let closure_9 = [];
let c10 = "text-sm/medium";
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((arg0) => {
  const colors = nativeDefault.colors;
  if (arg0) {
    let BACKGROUND_BASE_LOWEST = colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    let tmp4 = tmp;
  } else {
    BACKGROUND_BASE_LOWEST = colors.BACKGROUND_BASE_LOWEST;
    tmp4 = tmp;
  }
  const round = tmp4(576).radii.round;
  let obj = {
    listeners: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 4,
      marginTop: 4,
      marginLeft: -8,
    },
    listenersCollapsed: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: BACKGROUND_BASE_LOWEST,
      borderRadius: round,
      marginLeft: -16,
      marginTop: 4,
      paddingLeft: 2,
      paddingRight: 6,
    },
    listenersIconWrapper: null,
    listenersText: null,
    userCollapsedOverlap: null,
    headphonesIcon: null,
  };
  obj = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_BASE_LOWEST,
    marginRight: 8,
    marginLeft: 4,
    borderRadius: round,
  };
  const merged = Object.assign(ChannelListLayout.makeSizeStyle(20));
  obj.listenersIconWrapper = obj;
  obj.listenersText = { marginRight: 4 };
  obj.userCollapsedOverlap = { marginLeft: -20 };
  obj.headphonesIcon = ChannelListLayout.makeSizeStyle(14);
  return obj;
});
let closure_12 = noop.memo((voiceState) => {
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const channel = voiceState.channel;
  const collapsed = voiceState.collapsed;
  let obj = user(504);
  const items = [GuildMemberStore];
  const items1 = [channel.guild_id, user.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => ({
      storeMember: GuildMemberStore.getMember(channel.guild_id, user.id),
      isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id),
    }),
    items1,
  );
  let userCollapsedOverlap = null;
  ({ storeMember, isGuest } = stateFromStoresObject);
  if (collapsed) {
    userCollapsedOverlap = null;
    if (!voiceState.isFirst) {
      userCollapsedOverlap = tmp3.userCollapsedOverlap;
    }
  }
  obj = { style: userCollapsedOverlap, children: null };
  obj = {
    user,
    member: null,
    mute: null,
    deaf: null,
    selfVideo: null,
    selfMute: null,
    selfDeaf: null,
    suppress: null,
    collapsed: null,
    sessionId: null,
    channel: null,
    isGuest: null,
  };
  tmp3 = closure_11(channel(7873)());
  const tmp6 = View;
  if (member == null) {
    member = storeMember;
  }
  obj.member = member;
  ({
    mute: obj3.mute,
    deaf: obj3.deaf,
    selfVideo: obj3.selfVideo,
    selfMute: obj3.selfMute,
    selfDeaf: obj3.selfDeaf,
    suppress: obj3.suppress,
  } = voiceState2);
  obj.collapsed = collapsed;
  obj.sessionId = voiceState2.sessionId;
  obj.channel = channel;
  obj.isGuest = isGuest;
  obj.children = closure_6(channel(16122), obj, user.id);
  return closure_6(tmp6, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default function VoiceUsers(collapsed) {
  collapsed = collapsed.collapsed;
  const channel = collapsed.channel;
  ({ voiceStates, audienceCount } = collapsed);
  noop = undefined;
  const guild_id = channel.guild_id;
  if (tmp3) {
    if (null != guild_id) {
      const substr = voiceStates.slice(0, collapsed(tmp2[16]).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
      let mapped = substr.map((user) => user.user.id);
    }
    const tmp4Result = tmp4(mapped);
    noop = tmp4Result;
    const items = [guild_id, tmp4Result];
    const memo = noop.useMemo(() => {
      if (null != guild_id) {
        if (length.length > 0) {
          const obj = {};
          obj[tmp] = tmp2;
          let tmp3 = obj;
        }
        return tmp3;
      }
      tmp3 = closure_8;
    }, items);
    let obj = collapsed(tmp2[16]);
    const subscribeGuildMembers = obj.useSubscribeGuildMembers(memo, "voice_channel_games");
    let tmp15Result = null;
    if (0 !== voiceStates.length) {
      obj = { collapsed, children: null };
      const items1 = [
        voiceStates.map((voiceState, index) =>
          timestampProducer(
            closure_12,
            { voiceState, channel, collapsed, isFirst: 0 === index },
            "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId,
          ),
        ),
      ];
      let tmp17 = null != audienceCount && audienceCount > 0;
      if (tmp17) {
        obj = { audienceCount, collapsed };
        tmp17 = closure_6(AudienceItem, obj);
      }
      items1[1] = tmp17;
      obj.children = items1;
      tmp15Result = closure_7(channel(tmp2[17]), obj);
      const tmpResult = channel(tmp2[17]);
    }
    return tmp15Result;
  }
  mapped = closure_9;
}
export const getAudienceItemHeight = function getAudienceItemHeight(fontScale) {
  return 8 + Math.max(20, useScaledTextLineHeight.scaleTextLineHeight(c10, fontScale));
};
