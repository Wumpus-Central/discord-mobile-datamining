// discord_app/modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import OptInChannelsActionCreators from "../../../opt_in_channels/OptInChannelsActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (analyticsSection) => {
        let channel;
        let style;
        let obj = channel(576);
        const cResult = obj.c(12);
        ({ style, channel } = analyticsSection);
        analyticsSection = analyticsSection.analyticsSection;
        if (cResult[0] === analyticsSection) {
          if (cResult[1] === channel.guild_id) {
            let tmp4;
            let tmp8;
            let tmp7;
            let tmp6;
            let tmp13;
            if (cResult[2] === channel.id) {
              tmp4 = cResult[3];
            }
            const _Symbol = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = channel(1126).intl;
              const stringResult = intl.string(channel(1126).t["9mysCh"]);
              const intl2 = channel(1126).intl;
              const stringResult1 = intl2.string(channel(1126).t.PDUCIN);
              const TableRowIcon = channel(6006).TableRowIcon;
              const tmp12 = <TableRowIcon IconComponent={channel(13672).ChannelListMagnifyingGlassIcon} />;
              cResult[4] = stringResult;
              cResult[5] = stringResult1;
              cResult[6] = tmp12;
              tmp8 = tmp12;
              tmp7 = stringResult1;
              tmp6 = stringResult;
            } else {
              tmp6 = cResult[4];
              tmp7 = cResult[5];
              tmp8 = cResult[6];
            }
            if (cResult[7] !== tmp4) {
              const tmp15 = jsx(channel(6000).TableRow, {
                label: tmp6,
                subLabel: tmp7,
                icon: tmp8,
                onPress: tmp4,
                start: true,
                end: true,
                arrow: true,
              });
              cResult[7] = tmp4;
              cResult[8] = tmp15;
              tmp13 = tmp15;
            } else {
              tmp13 = cResult[8];
            }
            if (cResult[9] === style) {
              let tmp16;
              if (cResult[10] === tmp13) {
                tmp16 = cResult[11];
              }
              return tmp16;
            }
            const tmp19 = jsx(analyticsSection(5983), { style, children: tmp13 });
            cResult[9] = style;
            cResult[10] = tmp13;
            cResult[11] = tmp19;
            tmp16 = tmp19;
          }
        }
        const fn = function l() {
          const obj = OptInChannelsActionCreators;
          const obj2 = { section: analyticsSection };
          obj.setOptInChannel(channel.guild_id, channel.id, true, obj2);
        };
        cResult[0] = analyticsSection;
        cResult[1] = channel.guild_id;
        cResult[2] = channel.id;
        cResult[3] = fn;
        tmp4 = fn;
      }
    : (channel) => {
        let intl;
        let intl2;
        channel = channel.channel;
        const analyticsSection = channel.analyticsSection;
        const items = [channel, analyticsSection];
        const style = channel.style;
        const callback = react.useCallback(() => {
          const obj = OptInChannelsActionCreators;
          const obj2 = { section: analyticsSection };
          obj.setOptInChannel(channel.guild_id, channel.id, true, obj2);
        }, items);
        let obj2 = {
          label: intl.string(channel(1126).t["9mysCh"]),
          subLabel: intl2.string(channel(1126).t.PDUCIN),
          icon: null,
          onPress: callback,
          start: true,
          end: true,
          arrow: true,
        };
        analyticsSection(5983);
        const TableRow = channel(6000).TableRow;
        intl = channel(1126).intl;
        intl2 = channel(1126).intl;
        ({ IconComponent: channel(13672).ChannelListMagnifyingGlassIcon });
        const TableRowIcon = channel(6006).TableRowIcon;
        return <tmp2 style={style}>{null}</tmp2>;
      },
);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
