// discord_app/modules/vibegrations/native/VibegrationsChannelRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../routing/router_utils.tsx";
import _modDef3591 from "../intl/VibegrationsUntranslated.messages.js";
import BaseChannelItemDefault from "../../guild_sidebar/native/BaseChannelItem.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChannelRow.tsx");

export default function VibegrationsChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS));
  }, items);
  if (true === selected) {
    let DEFAULT = id(12514).ChannelModes.SELECTED;
    let tmp5 = id;
  } else {
    DEFAULT = id(12514).ChannelModes.DEFAULT;
    tmp5 = id;
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
  obj.accessibilityLabel = intl.string(_modDef3591.Xmvb23);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp5(1115).intl;
  obj2.name = intl2.string(_modDef3591.Xmvb23);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp5(12514).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp5(12514).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(10283).MagicWandIcon });
  return (
    <tmp8
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
