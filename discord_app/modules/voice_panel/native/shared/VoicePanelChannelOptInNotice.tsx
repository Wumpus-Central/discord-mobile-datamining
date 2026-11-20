// === Module 17878: VoicePanelChannelOptInNotice ===

// Module 17878 (VoicePanelChannelOptInNotice)
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7359 */;
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
  const intl = channel(1112).intl;
  obj2.label = intl.string(channel(1112).t["9mysCh"]);
  const intl2 = channel(1112).intl;
  obj2.subLabel = intl2.string(channel(1112).t.PDUCIN);
  const tmp2 = analyticsSection(7204);
  obj2.icon = jsx(channel(6937).TableRowIcon, { IconComponent: channel(14931).ChannelListMagnifyingGlassIcon });
  obj2.onPress = callback;
  obj.children = jsx(channel(6925).TableRow, { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true });
  return <tmp2 style={channel.style}>{null}</tmp2>;
});