// === Module 16240: GuildHomeChannelRow ===

// Module 16240 (GuildHomeChannelRow)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12409 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
fn(4574);
let createStyles = { container: null };
createStyles = { marginVertical: fn(10150).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
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
  const ChannelModes = id(12409).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  let obj = { onPress: callback, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = closure_7();
  const intl = tmp5(1114).intl;
  obj.accessibilityLabel = intl.string(tmp5(1114).t.VbpLyU);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp5(1114).intl;
  obj.name = intl2.string(tmp5(1114).t.VbpLyU);
  obj.mode = DEFAULT;
  obj.name = jsx(tmp5(12409).BaseChannelName, { name: null, mode: null });
  obj = { mode: DEFAULT, IconComponent: tmp5(13867).SignPostIcon };
  obj.icon = jsx(tmp5(12409).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(13867).SignPostIcon });
  return jsx(BaseChannelItemDefault, { mode: DEFAULT, IconComponent: tmp5(13867).SignPostIcon });
};