// discord_app/modules/vibegrations/native/VibegrationsChannelRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../routing/router_utils.tsx";
import _modDef3714 from "../intl/VibegrationsUntranslated.messages.js";
import BaseChannelItemDefault from "../../guild_sidebar/native/BaseChannelItem.tsx";
import ChannelBadgeDefault from "../../guild_sidebar/native/ChannelBadge.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(2051).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4845);
let obj2 = {
  container: {
    marginVertical: fn(9770).CHANNEL_MARGIN_VERTICAL,
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
  const tmp = closure_7();
  const vibegrationsUnreadSummary = id(16064).useVibegrationsUnreadSummary();
  const hasUnread = vibegrationsUnreadSummary.hasUnread;
  if (true === selected) {
    let SELECTED = tmp3(12081).ChannelModes.SELECTED;
  } else {
    const ChannelModes = tmp3(12081).ChannelModes;
    SELECTED = hasUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
  }
  const obj2 = {
    onPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    unread: null,
    name: null,
    icon: null,
    channelInfo: null,
  };
  const obj = id(16064);
  const intl = tmp3(1115).intl;
  obj2.accessibilityLabel = intl.string(_modDef3714.Xmvb23);
  obj2.accessibilityState = { selected };
  obj2.mode = SELECTED;
  obj2.unread = hasUnread;
  const obj3 = { name: null, mode: null };
  const intl2 = tmp3(1115).intl;
  obj3.name = intl2.string(_modDef3714.Xmvb23);
  obj3.mode = SELECTED;
  obj2.name = jsx(id(12081).BaseChannelName, { name: null, mode: null });
  obj2.icon = jsx(id(12081).BaseChannelIcon, { mode: SELECTED, IconComponent: id(9804).MagicWandIcon });
  obj2.channelInfo = jsx(ChannelBadgeDefault, {
    mentionCount: vibegrationsUnreadSummary.badgeCount,
    isNewChannel: false,
  });
  return (
    <tmp6
      onPress={callback}
      style={tmp.container}
      accessible
      accessibilityLabel={null}
      accessibilityState={null}
      mode={null}
      unread={null}
      name={null}
      icon={null}
      channelInfo={null}
    />
  );
}
