// === Module 17770: GuildHomeChannelRow ===

// Module 17770 (GuildHomeChannelRow)
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1099 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 13158 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1072).Routes;
const StaticChannelRoute = fn(4648).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4792);
let obj2 = { container: { marginVertical: fn(5521).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default function GuildHomeChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.GUILD_HOME));
  }, items);
  const ChannelModes = id(13158).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  const obj = { onPress: callback, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = closure_7();
  const intl = tmp5(1113).intl;
  obj.accessibilityLabel = intl.string(tmp5(1113).t.VbpLyU);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp5(1113).intl;
  obj2.name = intl2.string(tmp5(1113).t.VbpLyU);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp5(13158).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp5(13158).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(14965).SignPostIcon });
  return <tmp7 onPress={callback} style={closure_7().container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} name={null} icon={null} />;
};