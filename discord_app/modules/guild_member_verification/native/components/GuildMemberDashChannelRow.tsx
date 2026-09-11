// === Module 16285: GuildMemberDashChannelRow ===

// Module 16285 (GuildMemberDashChannelRow)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4431 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5592 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ GuildFeatures: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
fn(4606);
let createStyles = { container: null, badge: null, badgeText: null };
createStyles = { marginVertical: fn(10207).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
createStyles.container = createStyles;
createStyles.badge = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
const obj1 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
createStyles.badgeText = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default function GuildMemberDashChannelRow(arg0) {
  ({ guild, selected } = arg0);
  let hasItem;
  const tmp = closure_8();
  const id = guild.id;
  let obj = id(16286);
  let num = obj.useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  const features = guild.features;
  hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  const items = [guild.features, id, hasItem];
  const effect = noop.useEffect(() => {
    if (hasItem) {
      const obj = { guildId: id, status: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
      const guildJoinRequests = obj.fetchGuildJoinRequests(obj);
    }
  }, items);
  const items1 = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(hasOwnProperty.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = tmp2(12472).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  obj = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null };
  const intl = tmp2(1114).intl;
  obj.accessibilityLabel = intl.string(id(1114).t["9Oq93m"]);
  obj.accessibilityState = { selected };
  obj.mode = tmp7;
  obj = { name: null, mode: null };
  const intl2 = tmp2(1114).intl;
  obj.name = intl2.string(id(1114).t["9Oq93m"]);
  obj.mode = tmp7;
  obj.name = jsx(id(12472).BaseChannelName, { name: null, mode: null });
  const tmp9 = hasItem(12472);
  obj.icon = jsx(id(12472).BaseChannelIcon, { mode: tmp7, IconComponent: id(5140).GroupIcon });
  let tmp8Result = null;
  if (num > 0) {
    const obj2 = { style: null, textStyle: null, value: null };
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    obj2.value = num;
    tmp8Result = jsx(tmp2(1178).Badge, { style: null, textStyle: null, value: null });
  }
  obj.channelInfo = tmp8Result;
  return <tmp9 name={null} mode={null} />;
};