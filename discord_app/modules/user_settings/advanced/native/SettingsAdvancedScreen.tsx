// discord_app/modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function getAdvancedSettings() {
  const obj = { label: null, settings: null, subLabel: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["+U02+i"]);
  const items = [MobileUserSettings.DEVELOPER_MODE];
  obj.settings = items;
  const intl2 = util.intl;
  obj.subLabel = intl2.format(util.t["CY6q/Q"], { apiDocsUrl: MarketingURLs.API_DOCS });
  const items1 = [obj, , ,];
  const obj3 = { settings: null, subLabel: null };
  const items2 = [MobileUserSettings.LAUNCHPAD];
  obj3.settings = items2;
  const intl3 = util.intl;
  obj3.subLabel = intl3.string(util.t.gI2GEL);
  items1[1] = obj3;
  const obj4 = { settings: null };
  const items3 = [MobileUserSettings.CHANNEL_LIST_LAYOUT];
  obj4.settings = items3;
  items1[2] = obj4;
  const obj5 = { label: null, settings: null };
  const intl4 = util.intl;
  obj5.label = intl4.string(util.t["jnXV/V"]);
  const items4 = [MobileUserSettings.ICYMI_TAB];
  obj5.settings = items4;
  items1[3] = obj5;
  return items1;
}
const MobileUserSettings = fn(7645).MobileUserSettings;
const MarketingURLs = fn(1085).MarketingURLs;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { sections: getAdvancedSettings() };
          const list = SettingBuilders.createList(obj2);
          cResult[0] = list;
          let first = list;
          const tmpResult = SettingBuilders;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { node: first };
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
          const obj = SettingBuilders;
          return obj.createList({ sections: getAdvancedSettings() });
        }, []);
        return jsx(SettingLayoutDefault, { node });
      },
);
