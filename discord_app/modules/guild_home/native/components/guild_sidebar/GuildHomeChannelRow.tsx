// discord_app/modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../../routing/router_utils.tsx";
import BaseChannelItemDefault from "../../../../guild_sidebar/native/BaseChannelItem.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = {
  container: {
    marginVertical: fn(10248).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default function GuildHomeChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.GUILD_HOME));
  }, items);
  const ChannelModes = id(12514).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  const obj = {
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
  const intl = tmp5(1115).intl;
  obj.accessibilityLabel = intl.string(tmp5(1115).t.VbpLyU);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp5(1115).intl;
  obj2.name = intl2.string(tmp5(1115).t.VbpLyU);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp5(12514).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp5(12514).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(13935).SignPostIcon });
  return (
    <tmp7
      onPress={callback}
      style={closure_7().container}
      accessible
      accessibilityLabel={null}
      accessibilityState={null}
      mode={null}
      name={null}
      icon={null}
    />
  );
}
