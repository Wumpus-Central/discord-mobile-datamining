// === Module 17284: VoicePanelChannelOptInNotice ===

// Module 17284 (VoicePanelChannelOptInNotice)
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 6615 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsSection) => {
  const cResult = channel(576).c(12);
  ({ style, channel } = analyticsSection);
  analyticsSection = analyticsSection.analyticsSection;
  if (cResult[0] === analyticsSection) {
    if (cResult[1] === channel.guild_id) {
      if (cResult[2] === channel.id) {
        let tmp4 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = channel(1126).intl;
        const stringResult = intl.string(channel(1126).t["9mysCh"]);
        const intl2 = channel(1126).intl;
        const stringResult1 = intl2.string(channel(1126).t.PDUCIN);
        const obj2 = { IconComponent: channel(13672).ChannelListMagnifyingGlassIcon };
        const tmp12 = jsx(channel(6006).TableRowIcon, { IconComponent: channel(13672).ChannelListMagnifyingGlassIcon });
        cResult[4] = stringResult;
        cResult[5] = stringResult1;
        cResult[6] = tmp12;
        let tmp8 = tmp12;
        let tmp7 = stringResult1;
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[4];
        tmp7 = cResult[5];
        tmp8 = cResult[6];
      }
      if (cResult[7] !== tmp4) {
        const obj3 = { label: tmp6, subLabel: tmp7, icon: tmp8, onPress: tmp4, start: true, end: true, arrow: true };
        const tmp15 = jsx(channel(6000).TableRow, { label: tmp6, subLabel: tmp7, icon: tmp8, onPress: tmp4, start: true, end: true, arrow: true });
        cResult[7] = tmp4;
        cResult[8] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === style) {
        if (cResult[10] === tmp13) {
          let tmp16 = cResult[11];
        }
        return tmp16;
      }
      const obj4 = { style, children: tmp13 };
      const tmp19 = jsx(analyticsSection(5983), { style, children: tmp13 });
      cResult[9] = style;
      cResult[10] = tmp13;
      cResult[11] = tmp19;
      tmp16 = tmp19;
    }
  }
  const fn = function l() {
    OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, { section: analyticsSection });
  };
  cResult[0] = analyticsSection;
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp4 = fn;
  const obj = channel(576);
}) : ((channel) => {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = noop.useCallback(() => {
    OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, { section: analyticsSection });
  }, items);
  const obj = { style: channel.style, children: null };
  const obj2 = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1126).intl;
  obj2.label = intl.string(channel(1126).t["9mysCh"]);
  const intl2 = channel(1126).intl;
  obj2.subLabel = intl2.string(channel(1126).t.PDUCIN);
  const tmp2 = analyticsSection(5983);
  obj2.icon = jsx(channel(6006).TableRowIcon, { IconComponent: channel(13672).ChannelListMagnifyingGlassIcon });
  obj2.onPress = callback;
  obj.children = jsx(channel(6000).TableRow, { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true });
  return <tmp2 style={channel.style}>{null}</tmp2>;
}));