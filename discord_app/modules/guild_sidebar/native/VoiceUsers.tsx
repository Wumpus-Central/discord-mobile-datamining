// === Module 18123: VoiceUsers ===

// Module 18123 (VoiceUsers)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9801 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11028 */;
import ChannelListLayout from "ChannelListLayout" /* 11030 */;
import HeadphonesIcon from "HeadphonesIcon" /* 14054 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;

require = fn;
function AudienceItem(arg0) {
  ({ audienceCount, collapsed } = arg0);
  const tmp2 = closure_11(useIsUsingClientThemeDefault());
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = util.intl;
    const obj = { count: audienceCount };
    formatToPlainStringResult = intl.formatToPlainString(util.t["+v2pN2"], obj);
  }
  const obj2 = { style: collapsed ? tmp2.listenersCollapsed : tmp2.listeners, children: null };
  const obj3 = { style: tmp2.listenersIconWrapper, children: timestampProducer(HeadphonesIcon.HeadphonesIcon, { color: "redesign-channel-name-muted-text", size: "custom", style: tmp2.headphonesIcon }) };
  const items = [timestampProducer(View, obj3), timestampProducer(Text_Text.Text, { style: tmp2.listenersText, variant, color: "redesign-channel-name-muted-text", children: formatToPlainStringResult })];
  obj2.children = items;
  return React5(View, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = {};
let closure_9 = [];
let c10 = "text-sm/medium";
const createStyles = fn(5009);
let closure_11 = createStyles.createStyles((arg0) => {
  const colors = nativeDefault.colors;
  if (arg0) {
    let BACKGROUND_BASE_LOWEST = colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    let tmp4 = importDefault;
  } else {
    BACKGROUND_BASE_LOWEST = colors.BACKGROUND_BASE_LOWEST;
    tmp4 = importDefault;
  }
  const round = tmp4(575).radii.round;
  const obj = { listeners: { display: "flex", flexDirection: "row", alignItems: "center", padding: 4, marginTop: 4, marginLeft: -8 }, listenersCollapsed: { flexDirection: "row", alignItems: "center", backgroundColor: BACKGROUND_BASE_LOWEST, borderRadius: round, marginLeft: -16, marginTop: 4, paddingLeft: 2, paddingRight: 6 }, listenersIconWrapper: null, listenersText: null, userCollapsedOverlap: null, headphonesIcon: null };
  const merged = Object.assign(ChannelListLayout.makeSizeStyle(20));
  obj.listenersIconWrapper = { alignItems: "center", justifyContent: "center", backgroundColor: BACKGROUND_BASE_LOWEST, marginRight: 8, marginLeft: 4, borderRadius: round };
  obj.listenersText = { marginRight: 4 };
  obj.userCollapsedOverlap = { marginLeft: -20 };
  const obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: BACKGROUND_BASE_LOWEST, marginRight: 8, marginLeft: 4, borderRadius: round };
  obj.headphonesIcon = ChannelListLayout.makeSizeStyle(14);
  return obj;
});
let closure_12 = noop.memo(function VoiceStateUserItem(voiceState) {
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  let member = voiceState.member;
  const channel = voiceState.channel;
  const collapsed = voiceState.collapsed;
  const tmp = channel;
  const tmp3 = closure_11(channel(9801)());
  const obj = user(9216);
  const result = obj.withLocalSelfMuteDeaf(voiceState.voiceState, user(9216).useLocalSelfMuteDeaf());
  const obj2 = user(9216);
  const items = [GuildMemberStore];
  const items1 = [channel.guild_id, user.id];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({ storeMember: GuildMemberStore.getMember(channel.guild_id, user.id), isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id) }), items1);
  let userCollapsedOverlap = null;
  ({ storeMember, isGuest } = stateFromStoresObject);
  if (collapsed) {
    userCollapsedOverlap = null;
    if (!voiceState.isFirst) {
      userCollapsedOverlap = tmp3.userCollapsedOverlap;
    }
  }
  const obj4 = { style: userCollapsedOverlap, children: null };
  const obj7 = { user, member: null, mute: null, deaf: null, selfVideo: null, selfMute: null, selfDeaf: null, suppress: null, collapsed: null, sessionId: null, channel: null, isGuest: null };
  const obj3 = user(504);
  if (member == null) {
    member = storeMember;
  }
  obj7.member = member;
  ({ mute: obj5.mute, deaf: obj5.deaf, selfVideo: obj5.selfVideo, selfMute: obj5.selfMute, selfDeaf: obj5.selfDeaf, suppress: obj5.suppress } = result);
  obj7.collapsed = collapsed;
  obj7.sessionId = result.sessionId;
  obj7.channel = channel;
  obj7.isGuest = isGuest;
  obj4.children = closure_6(tmp(18124), obj7, user.id);
  return closure_6(View, obj4);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default function VoiceUsers(collapsed) {
  collapsed = collapsed.collapsed;
  const channel = collapsed.channel;
  ({ voiceStates, audienceCount } = collapsed);
  noop = undefined;
  const guild_id = channel.guild_id;
  if (null != guild_id) {
    const substr = voiceStates.slice(0, collapsed(tmp2[16]).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
    let mapped = substr.map((user) => user.user.id);
  } else {
    mapped = closure_9;
  }
  const tmp3Result = channel(guild_id[15])(mapped);
  noop = tmp3Result;
  const items = [guild_id, tmp3Result];
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
  const tmp = channel;
  let tmp3 = channel(guild_id[15]);
  const subscribeGuildMembers = collapsed(guild_id[16]).useSubscribeGuildMembers(memo, "voice_channel_games");
  let tmp10Result = null;
  if (0 !== voiceStates.length) {
    const obj2 = { collapsed, children: null };
    const items1 = [
      voiceStates.map(function renderVoiceState(voiceState, index) {
          return timestampProducer(closure_12, { voiceState, channel, collapsed, isFirst: 0 === index }, "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId);
        }),

    ];
    let tmp12 = null != audienceCount && audienceCount > 0;
    if (tmp12) {
      const obj3 = { audienceCount, collapsed };
      tmp12 = closure_6(AudienceItem, obj3);
    }
    items1[1] = tmp12;
    obj2.children = items1;
    tmp10Result = closure_7(tmp(tmp2[17]), obj2);
    const tmpResult = tmp(tmp2[17]);
  }
  return tmp10Result;
};
export function getAudienceItemHeight(fontScale) {
  return 8 + Math.max(20, useScaledTextLineHeight.scaleTextLineHeight(c10, fontScale));
}