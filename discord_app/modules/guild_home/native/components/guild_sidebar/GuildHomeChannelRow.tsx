// discord_app/modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../../routing/router_utils.tsx";
import BaseChannelItemDefault from "../../../../guild_sidebar/native/BaseChannelItem.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = {
  marginVertical: fn(10118).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
createStyles.container = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default function GuildHomeChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.GUILD_HOME));
  }, items);
  const ChannelModes = id(12379).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  let obj = {
    onPress: callback,
    style: closure_7().container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    name: null,
    icon: null,
  };
  const tmp = closure_7();
  const intl = tmp5(1114).intl;
  obj.accessibilityLabel = intl.string(tmp5(1114).t.VbpLyU);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp5(1114).intl;
  obj.name = intl2.string(tmp5(1114).t.VbpLyU);
  obj.mode = DEFAULT;
  obj.name = jsx(tmp5(12379).BaseChannelName, { name: null, mode: null });
  obj = { mode: DEFAULT, IconComponent: tmp5(13841).SignPostIcon };
  obj.icon = jsx(tmp5(12379).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(13841).SignPostIcon });
  return jsx(BaseChannelItemDefault, { mode: DEFAULT, IconComponent: tmp5(13841).SignPostIcon });
}
