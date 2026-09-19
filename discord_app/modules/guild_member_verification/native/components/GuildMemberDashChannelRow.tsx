// discord_app/modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import GuildJoinRequestActionCreatorsDefault from "../../GuildJoinRequestActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1074);
({ GuildFeatures: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = fn(2048).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = {
  container: {
    marginVertical: fn(10373).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
  badge: null,
  badgeText: null,
};
let obj3 = {
  marginVertical: fn(10373).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
obj2.badge = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
const obj4 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
obj2.badgeText = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx",
);

export default function GuildMemberDashChannelRow(arg0) {
  ({ guild, selected } = arg0);
  let hasItem;
  const tmp = closure_8();
  const id = guild.id;
  let num = id(16548).useSubmittedGuildJoinRequestTotal({ guildId: id });
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
  const ChannelModes = tmp2(12631).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  let obj2 = {
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
  let obj = id(16548);
  const intl = tmp2(1115).intl;
  obj2.accessibilityLabel = intl.string(id(1115).t["9Oq93m"]);
  obj2.accessibilityState = { selected };
  obj2.mode = tmp7;
  const obj3 = { name: null, mode: null };
  const intl2 = tmp2(1115).intl;
  obj3.name = intl2.string(id(1115).t["9Oq93m"]);
  obj3.mode = tmp7;
  obj2.name = jsx(id(12631).BaseChannelName, { name: null, mode: null });
  const tmp9 = hasItem(12631);
  obj2.icon = jsx(id(12631).BaseChannelIcon, { mode: tmp7, IconComponent: id(5300).GroupIcon });
  let tmp8Result = null;
  if (num > 0) {
    const obj9 = { style: null, textStyle: null, value: null };
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    obj9.value = num;
    tmp8Result = jsx(tmp2(1177).Badge, { style: null, textStyle: null, value: null });
  }
  obj2.channelInfo = tmp8Result;
  return (
    <tmp9
      onPress={callback}
      style={tmp.container}
      accessible
      accessibilityLabel={null}
      accessibilityState={null}
      mode={null}
      name={null}
      icon={null}
      channelInfo={null}
    />
  );
}
