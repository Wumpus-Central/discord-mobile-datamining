// discord_app/modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx
import OptInChannelsActionCreators from "../../../opt_in_channels/OptInChannelsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default noop.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = noop.useCallback(() => {
    OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, { section: analyticsSection });
  }, items);
  const obj = { style: channel.style, children: null };
  const obj2 = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1114).intl;
  obj2.label = intl.string(channel(1114).t["9mysCh"]);
  const intl2 = channel(1114).intl;
  obj2.subLabel = intl2.string(channel(1114).t.PDUCIN);
  const tmp2 = analyticsSection(5670);
  obj2.icon = jsx(channel(5692).TableRowIcon, { IconComponent: channel(13932).ChannelListMagnifyingGlassIcon });
  obj2.onPress = callback;
  obj.children = jsx(channel(5686).TableRow, {
    label: null,
    subLabel: null,
    icon: null,
    onPress: null,
    start: true,
    end: true,
    arrow: true,
  });
  return <tmp2 style={channel.style}>{null}</tmp2>;
});
