// === Module 16543: ? ===

// Module 16543
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = importAllResult.useCallback(() => {
    let obj = channel(closure_1_2[2]);
    obj = { section: analyticsSection };
    obj.setOptInChannel(channel.guild_id, channel.id, true, obj);
  }, items);
  let obj = { style: channel.style, children: null };
  obj = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t["9mysCh"]);
  const intl2 = channel(1236).intl;
  obj[1] = intl2.string(channel(1236).t.PDUCIN);
  obj = { IconComponent: channel(13469).ChannelListMagnifyingGlassIcon };
  obj[2] = jsx(channel(5552).TableRowIcon, { IconComponent: channel(13469).ChannelListMagnifyingGlassIcon });
  obj[3] = callback;
  obj[1] = jsx(channel(5546).TableRow, { IconComponent: channel(13469).ChannelListMagnifyingGlassIcon });
  return jsx(analyticsSection(5953), { IconComponent: channel(13469).ChannelListMagnifyingGlassIcon });
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;