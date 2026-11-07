// === Module 19584: VoicePanelChannelOptInNotice ===

// Module 19584 (VoicePanelChannelOptInNotice)
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7345 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default noop.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  items = [channel, analyticsSection];
  const callback = noop.useCallback(() => {
    OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, { section: analyticsSection });
  }, items);
  const obj = { style: channel.style, children: null };
  const obj2 = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1113).intl;
  obj2.label = intl.string(channel(1113).t["9mysCh"]);
  const intl2 = channel(1113).intl;
  obj2.subLabel = intl2.string(channel(1113).t.PDUCIN);
  const tmp2 = analyticsSection(7023);
  obj2.icon = jsx(channel(7046).TableRowIcon, { IconComponent: channel(15965).ChannelListMagnifyingGlassIcon });
  obj2.onPress = callback;
  obj.children = jsx(channel(7038).TableRow, { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true });
  return <tmp2 style={channel.style}>{null}</tmp2>;
});