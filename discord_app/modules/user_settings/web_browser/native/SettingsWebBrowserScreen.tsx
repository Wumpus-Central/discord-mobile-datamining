// discord_app/modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MobileUserSettings = fn(7634).MobileUserSettings;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { sections: null };
          const obj3 = { settings: null };
          const items = [MobileUserSettings.SELECT_WEB_BROWSER];
          obj3.settings = items;
          const items1 = [obj3];
          const obj4 = { settings: null };
          const items2 = [MobileUserSettings.CLEAR_WEB_BROWSER_DATA];
          obj4.settings = items2;
          items1[1] = obj4;
          obj2.sections = items1;
          const list = SettingBuilders.createList(obj2);
          cResult[0] = list;
          let first = list;
          const tmpResult = SettingBuilders;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { node: first };
          const tmp10 = jsx(SettingLayoutDefault, { node: first });
          cResult[1] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[1];
        }
        return tmp7;
      }
    : () => {
        const node = noop.useMemo(() => {
          const obj2 = { sections: null };
          const obj3 = { settings: null };
          const items = [constants.SELECT_WEB_BROWSER];
          obj3.settings = items;
          const items1 = [obj3];
          const obj4 = { settings: null };
          const items2 = [constants.CLEAR_WEB_BROWSER_DATA];
          obj4.settings = items2;
          items1[1] = obj4;
          obj2.sections = items1;
          return SettingBuilders.createList(obj2);
        }, []);
        return jsx(SettingLayoutDefault, { node });
      },
);
