// discord_app/modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = importAllResult.useCallback(() => {
    let obj = channel(outer1_2[2]);
    obj = { section: analyticsSection };
    obj.setOptInChannel(channel.guild_id, channel.id, true, obj);
  }, items);
  let obj = { style: channel.style, children: null };
  obj = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t["9mysCh"]);
  const intl2 = channel(1236).intl;
  obj[1] = intl2.string(channel(1236).t.PDUCIN);
  obj = { IconComponent: null };
  obj[0] = channel(13003).ChannelListMagnifyingGlassIcon;
  obj[2] = jsx(channel(5230).TableRowIcon, { IconComponent: null });
  obj[3] = callback;
  obj[1] = jsx(channel(5224).TableRow, { IconComponent: null });
  return jsx(analyticsSection(5572), { IconComponent: null });
});
const result = require("_persistOptInChannelUpdates2").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;