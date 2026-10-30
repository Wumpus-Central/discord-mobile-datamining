// === Module 18218: GuildMemberDashChannelRow ===

// Module 18218 (GuildMemberDashChannelRow)
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1100 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5043 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6910 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1072);
({ GuildFeatures: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = fn(4865).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { container: { marginVertical: fn(11027).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md }, badge: null, badgeText: null };
let obj3 = { marginVertical: fn(11027).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
obj2.badge = { backgroundColor: nativeDefault.colors.BADGE_SECONDARY_BACKGROUND };
const obj4 = { backgroundColor: nativeDefault.colors.BADGE_SECONDARY_BACKGROUND };
obj2.badgeText = { color: nativeDefault.colors.BADGE_SECONDARY_TEXT };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default function GuildMemberDashChannelRow(arg0) {
  ({ guild, selected } = arg0);
  let hasItem;
  const tmp = closure_8();
  const id = guild.id;
  let num = id(18219).useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  const features = guild.features;
  hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  const items = [guild.features, id, hasItem];
  const effect = noop.useEffect(() => {
    if (hasItem) {
      const obj2 = { guildId: id, status: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
      const guildJoinRequests = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequests(obj2);
    }
  }, items);
  const items1 = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(hasOwnProperty.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = tmp2(13887).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  let obj2 = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null };
  let obj = id(18219);
  const intl = tmp2(1114).intl;
  obj2.accessibilityLabel = intl.string(id(1114).t["9Oq93m"]);
  obj2.accessibilityState = { selected };
  obj2.mode = tmp7;
  const obj3 = { name: null, mode: null };
  const intl2 = tmp2(1114).intl;
  obj3.name = intl2.string(id(1114).t["9Oq93m"]);
  obj3.mode = tmp7;
  obj2.name = jsx(id(13887).BaseChannelName, { name: null, mode: null });
  const tmp9 = hasItem(13887);
  obj2.icon = jsx(id(13887).BaseChannelIcon, { mode: tmp7, IconComponent: id(8653).GroupIcon });
  let tmp8Result = null;
  if (num > 0) {
    const obj9 = { style: null, textStyle: null, value: null };
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    obj9.value = num;
    tmp8Result = jsx(tmp2(1188).Badge, { style: null, textStyle: null, value: null });
  }
  obj2.channelInfo = tmp8Result;
  return <tmp9 onPress={callback} style={tmp.container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} name={null} icon={null} channelInfo={null} />;
};