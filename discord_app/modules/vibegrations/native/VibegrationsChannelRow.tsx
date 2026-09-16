// === Module 16346: VibegrationsChannelRow ===

// Module 16346 (VibegrationsChannelRow)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import _modDef3591 from "module_3591" /* 3591 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12522 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj2 = { container: { marginVertical: fn(10256).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChannelRow.tsx");

export default function VibegrationsChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS));
  }, items);
  if (true === selected) {
    let DEFAULT = id(12522).ChannelModes.SELECTED;
    let tmp5 = id;
  } else {
    DEFAULT = id(12522).ChannelModes.DEFAULT;
    tmp5 = id;
  }
  const obj = { onPress: callback, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = closure_7();
  const intl = tmp5(1115).intl;
  obj.accessibilityLabel = intl.string(_modDef3591.Xmvb23);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp5(1115).intl;
  obj2.name = intl2.string(_modDef3591.Xmvb23);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp5(12522).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp5(12522).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(10291).MagicWandIcon });
  return <tmp8 onPress={callback} style={closure_7().container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} name={null} icon={null} />;
};