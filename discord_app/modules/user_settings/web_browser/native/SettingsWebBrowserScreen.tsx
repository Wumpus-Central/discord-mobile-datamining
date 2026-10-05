// discord_app/modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let items;
        let items1;
        let items2;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { settings: items };
          items = [MobileUserSettings.SELECT_WEB_BROWSER];
          const obj2 = { sections: items1 };
          items1 = [obj3];
          const obj4 = { settings: items2 };
          items2 = [MobileUserSettings.CLEAR_WEB_BROWSER_DATA];
          items1[1] = obj4;
          const tmpResult = SettingBuilders;
          const list = tmpResult.createList(obj2);
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
          let items1;
          let items2;
          const obj3 = { settings: items };
          items = [constants.SELECT_WEB_BROWSER];
          const obj2 = { sections: items1 };
          items1 = [obj3];
          const obj4 = { settings: items2 };
          items2 = [constants.CLEAR_WEB_BROWSER_DATA];
          items1[1] = obj4;
          const obj = SettingBuilders;
          return obj.createList(obj2);
        }, []);
        return jsx(SettingLayoutDefault, { node });
      },
);
const result = size.fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
