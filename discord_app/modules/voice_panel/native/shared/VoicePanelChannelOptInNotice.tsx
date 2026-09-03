// === Module 16951: ? ===

// Module 16951
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
  const intl = channel(1233).intl;
  obj[0] = intl.string(channel(1233).t["9mysCh"]);
  const intl2 = channel(1233).intl;
  obj[1] = intl2.string(channel(1233).t.PDUCIN);
  obj = { IconComponent: channel(13821).ChannelListMagnifyingGlassIcon };
  obj[2] = jsx(channel(5614).TableRowIcon, { IconComponent: channel(13821).ChannelListMagnifyingGlassIcon });
  obj[3] = callback;
  obj[1] = jsx(channel(5608).TableRow, { IconComponent: channel(13821).ChannelListMagnifyingGlassIcon });
  return jsx(analyticsSection(6015), { IconComponent: channel(13821).ChannelListMagnifyingGlassIcon });
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;