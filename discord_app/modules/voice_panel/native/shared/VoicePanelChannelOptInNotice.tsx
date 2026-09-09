// === Module 17149: VoicePanelChannelOptInNotice ===

// Module 17149 (VoicePanelChannelOptInNotice)
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7127 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default noop.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = noop.useCallback(() => {
    const obj = { section: analyticsSection };
    obj.setOptInChannel(channel.guild_id, channel.id, true, obj);
  }, items);
  let obj = { style: channel.style, children: null };
  obj = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1114).intl;
  obj.label = intl.string(channel(1114).t["9mysCh"]);
  const intl2 = channel(1114).intl;
  obj.subLabel = intl2.string(channel(1114).t.PDUCIN);
  obj = { IconComponent: channel(13869).ChannelListMagnifyingGlassIcon };
  obj.icon = jsx(channel(5625).TableRowIcon, { IconComponent: channel(13869).ChannelListMagnifyingGlassIcon });
  obj.onPress = callback;
  obj.children = jsx(channel(5619).TableRow, { IconComponent: channel(13869).ChannelListMagnifyingGlassIcon });
  return jsx(analyticsSection(5603), { IconComponent: channel(13869).ChannelListMagnifyingGlassIcon });
});