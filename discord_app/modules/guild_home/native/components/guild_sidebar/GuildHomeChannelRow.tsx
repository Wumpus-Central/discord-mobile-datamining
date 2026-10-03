// discord_app/modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../../routing/router_utils.tsx";
import BaseChannelItemDefault from "../../../../guild_sidebar/native/BaseChannelItem.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const Routes = fn(1085).Routes;
const StaticChannelRoute = fn(2058).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = {
  container: {
    marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (selected) => {
      const cResult = id(576).c(16);
      selected = selected.selected;
      const tmp4 = closure_7();
      id = selected.guild.id;
      if (cResult[0] !== id) {
        const fn = function s() {
          router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.GUILD_HOME));
        };
        cResult[0] = id;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const ChannelModes = tmp(12016).ChannelModes;
      const tmp6 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.VbpLyU);
        cResult[2] = stringResult;
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== selected) {
        const obj2 = { selected };
        cResult[3] = selected;
        cResult[4] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.VbpLyU);
        cResult[5] = stringResult1;
        let tmp10 = stringResult1;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp6) {
        const obj3 = { name: tmp10, mode: tmp6 };
        const tmp15 = jsx(tmp(12016).BaseChannelName, { name: tmp10, mode: tmp6 });
        const obj4 = { mode: tmp6, IconComponent: tmp(13652).SignPostIcon };
        const tmp16 = jsx(tmp(12016).BaseChannelIcon, { mode: tmp6, IconComponent: tmp(13652).SignPostIcon });
        cResult[6] = tmp6;
        cResult[7] = tmp15;
        cResult[8] = tmp16;
        let tmp13 = tmp16;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp6) {
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp4.container) {
            if (cResult[12] === tmp9) {
              if (cResult[13] === tmp12) {
                if (cResult[14] === tmp13) {
                  let tmp17 = cResult[15];
                }
                return tmp17;
              }
            }
          }
        }
      }
      const tmp18 = jsx(BaseChannelItemDefault, {
        onPress: tmp5,
        style: tmp4.container,
        accessible: true,
        accessibilityLabel: tmp7,
        accessibilityState: tmp9,
        mode: tmp6,
        name: tmp12,
        icon: tmp13,
      });
      cResult[9] = tmp6;
      cResult[10] = tmp5;
      cResult[11] = tmp4.container;
      cResult[12] = tmp9;
      cResult[13] = tmp12;
      cResult[14] = tmp13;
      cResult[15] = tmp18;
      tmp17 = tmp18;
      const obj = id(576);
    }
  : (selected) => {
      selected = selected.selected;
      const id = selected.guild.id;
      const items = [id];
      const callback = noop.useCallback(() => {
        router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.GUILD_HOME));
      }, items);
      const ChannelModes = id(12016).ChannelModes;
      if (selected) {
        let DEFAULT = ChannelModes.SELECTED;
        let tmp5 = tmp3;
      } else {
        DEFAULT = ChannelModes.DEFAULT;
        tmp5 = tmp3;
      }
      const obj = {
        onPress: callback,
        style: closure_7().container,
        accessible: true,
        accessibilityLabel: null,
        accessibilityState: null,
        mode: null,
        name: null,
        icon: null,
      };
      const tmp = closure_7();
      const intl = tmp5(1126).intl;
      obj.accessibilityLabel = intl.string(tmp5(1126).t.VbpLyU);
      obj.accessibilityState = { selected };
      obj.mode = DEFAULT;
      const obj2 = { name: null, mode: null };
      const intl2 = tmp5(1126).intl;
      obj2.name = intl2.string(tmp5(1126).t.VbpLyU);
      obj2.mode = DEFAULT;
      obj.name = jsx(tmp5(12016).BaseChannelName, { name: null, mode: null });
      obj.icon = jsx(tmp5(12016).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(13652).SignPostIcon });
      return (
        <tmp7
          onPress={callback}
          style={closure_7().container}
          accessible
          accessibilityLabel={null}
          accessibilityState={null}
          mode={null}
          name={null}
          icon={null}
        />
      );
    };
