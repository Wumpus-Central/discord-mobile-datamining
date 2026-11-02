// discord_app/modules/conjure/app_channel/native/ConjureChannelRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import BaseChannelItemDefault from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import useConjureGuildUnreadSummaryDefault from "../../chat/useConjureGuildUnreadSummary.tsx";
import ChannelBadgeDefault from "../../../guild_sidebar/native/ChannelBadge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Routes = fn(1072).Routes;
const StaticChannelRoute = fn(4870).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = {
  container: {
    marginVertical: fn(11046).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.md,
  },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default function ConjureChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
  }, items);
  const tmp5 = useConjureGuildUnreadSummaryDefault(id);
  const hasUnread = tmp5.hasUnread;
  if (true === selected) {
    let DEFAULT = id(13937).ChannelModes.SELECTED;
    let tmp7 = id;
  } else {
    const ChannelModes = id(13937).ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp7 = tmp6;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp7 = tmp6;
    }
  }
  const obj = {
    onPress: callback,
    style: closure_7().container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    unread: null,
    name: null,
    icon: null,
    channelInfo: null,
  };
  const tmp = closure_7();
  const intl = tmp7(1113).intl;
  obj.accessibilityLabel = intl.string(_modDef3868.uk6jhJ);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj.unread = hasUnread;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp7(1113).intl;
  obj2.name = intl2.string(_modDef3868.uk6jhJ);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp7(13937).BaseChannelName, { name: null, mode: null });
  const tmp3Result = BaseChannelItemDefault;
  obj.icon = jsx(tmp7(13937).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp7(12123).MagicWandIcon });
  obj.channelInfo = jsx(ChannelBadgeDefault, { mentionCount: tmp5.badgeCount, isNewChannel: false });
  return (
    <tmp3Result
      onPress={callback}
      style={closure_7().container}
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
