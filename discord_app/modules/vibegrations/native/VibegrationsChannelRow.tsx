// === Module 16298: VibegrationsChannelRow ===

// Module 16298 (VibegrationsChannelRow)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import _modDef3590 from "module_3590" /* 3590 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12449 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
fn(4605);
let createStyles = { container: null };
createStyles = { marginVertical: fn(10188).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
createStyles.container = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
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
    let DEFAULT = id(12449).ChannelModes.SELECTED;
    let tmp5 = id;
  } else {
    DEFAULT = id(12449).ChannelModes.DEFAULT;
    tmp5 = id;
  }
  let obj = { onPress: callback, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = closure_7();
  const intl = tmp5(1114).intl;
  obj.accessibilityLabel = intl.string(_modDef3590.Xmvb23);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp5(1114).intl;
  obj.name = intl2.string(_modDef3590.Xmvb23);
  obj.mode = DEFAULT;
  obj.name = jsx(tmp5(12449).BaseChannelName, { name: null, mode: null });
  obj = { mode: DEFAULT, IconComponent: tmp5(10223).MagicWandIcon };
  obj.icon = jsx(tmp5(12449).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(10223).MagicWandIcon });
  return jsx(BaseChannelItemDefault, { mode: DEFAULT, IconComponent: tmp5(10223).MagicWandIcon });
};