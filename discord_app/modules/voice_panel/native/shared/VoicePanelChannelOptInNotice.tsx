// === Module 16333: ? ===

// Module 16333
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = importAllResult.useCallback(() => {
    channel(dependencyMap[2]);
    const obj = { section: analyticsSection };
    obj.setOptInChannel(channel.guild_id, channel.id, true, obj);
  }, items);
  let obj = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t["9mysCh"]);
  const intl2 = channel(1236).intl;
  obj[1] = intl2.string(channel(1236).t.PDUCIN);
  obj = { IconComponent: channel(13069).ChannelListMagnifyingGlassIcon };
  obj[2] = jsx(channel(6296).TableRowIcon, { IconComponent: channel(13069).ChannelListMagnifyingGlassIcon });
  obj[3] = callback;
  obj[1] = jsx(channel(6291).TableRow, { IconComponent: channel(13069).ChannelListMagnifyingGlassIcon });
  return jsx(analyticsSection(7190), { IconComponent: channel(13069).ChannelListMagnifyingGlassIcon });
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;