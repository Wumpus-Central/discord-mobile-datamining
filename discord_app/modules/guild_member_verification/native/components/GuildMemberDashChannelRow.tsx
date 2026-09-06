// discord_app/modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import GuildJoinRequestActionCreatorsDefault from "../../GuildJoinRequestActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1074);
({ GuildFeatures: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, badge: null, badgeText: null };
createStyles = {
  marginVertical: fn(10118).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
createStyles.container = createStyles;
createStyles.badge = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
const obj1 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
createStyles.badgeText = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx",
);

export default function GuildMemberDashChannelRow(arg0) {
  ({ guild, selected } = arg0);
  let hasItem;
  const tmp = closure_8();
  const id = guild.id;
  let obj = id(16215);
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
  const ChannelModes = tmp2(12379).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  obj = {
    onPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    name: null,
    icon: null,
    channelInfo: null,
  };
  const intl = tmp2(1114).intl;
  obj.accessibilityLabel = intl.string(id(1114).t["9Oq93m"]);
  obj.accessibilityState = { selected };
  obj.mode = tmp7;
  obj = { name: null, mode: null };
  const intl2 = tmp2(1114).intl;
  obj.name = intl2.string(id(1114).t["9Oq93m"]);
  obj.mode = tmp7;
  obj.name = jsx(id(12379).BaseChannelName, { name: null, mode: null });
  const tmp9 = hasItem(12379);
  obj.icon = jsx(id(12379).BaseChannelIcon, { mode: tmp7, IconComponent: id(5089).GroupIcon });
  let tmp8Result = null;
  if (num > 0) {
    const obj2 = { style: null, textStyle: null, value: null };
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    obj2.value = num;
    tmp8Result = tmp8(tmp2(1178).Badge, obj2);
  }
  obj.channelInfo = tmp8Result;
  return <tmp9 name={null} mode={null} />;
}
