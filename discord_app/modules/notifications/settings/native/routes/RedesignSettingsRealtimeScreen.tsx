// discord_app/modules/notifications/settings/native/routes/RedesignSettingsRealtimeScreen.tsx
import c from "../../../../../../_runtime/00576_c.js";
import SettingBuilders from "../../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../../settings/native/renderer/SettingLayout.tsx";
import MobileNotifSettingsRouteBuilders from "../MobileNotifSettingsRouteBuilders.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsRealtimeScreen.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { sections: null };
          const tmpResult = SettingBuilders;
          const items = [MobileNotifSettingsRouteBuilders.buildRealtimeSettingsSection()];
          obj2.sections = items;
          const list = tmpResult.createList(obj2);
          cResult[0] = list;
          let first = list;
          const tmpResult2 = MobileNotifSettingsRouteBuilders;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { node: first };
          const tmp9 = jsx(SettingLayoutDefault, { node: first });
          cResult[1] = tmp9;
          let tmp6 = tmp9;
        } else {
          tmp6 = cResult[1];
        }
        return tmp6;
      }
    : () => {
        const node = noop.useMemo(() => {
          const obj2 = { sections: null };
          const obj = SettingBuilders;
          const items = [MobileNotifSettingsRouteBuilders.buildRealtimeSettingsSection()];
          obj2.sections = items;
          return obj.createList(obj2);
        }, []);
        return jsx(SettingLayoutDefault, { node });
      },
);
