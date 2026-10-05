// discord_app/modules/notifications/settings/native/routes/RedesignSettingsRealtimeScreen.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import SettingBuilders from "../../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../../settings/native/renderer/SettingLayout.tsx";
import MobileNotifSettingsRouteBuilders from "../MobileNotifSettingsRouteBuilders.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let items;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { sections: items };
          const createList = SettingBuilders.createList;
          SettingBuilders;
          items = [];
          const tmpResult2 = MobileNotifSettingsRouteBuilders;
          items[0] = tmpResult2.buildRealtimeSettingsSection();
          const list = createList(obj2);
          cResult[0] = list;
          first = list;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp10 = jsx(SettingLayoutDefault, { node: first });
          cResult[1] = tmp10;
          tmp7 = tmp10;
        } else {
          tmp7 = cResult[1];
        }
        return tmp7;
      }
    : () => {
        const node = react.useMemo(() => {
          let items;
          const obj = { sections: items };
          const createList = SettingBuilders.createList;
          SettingBuilders;
          items = [];
          const obj2 = MobileNotifSettingsRouteBuilders;
          items[0] = obj2.buildRealtimeSettingsSection();
          return createList(obj);
        }, []);
        return jsx(SettingLayoutDefault, { node });
      },
);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsRealtimeScreen.tsx",
);

export default memoResult;
