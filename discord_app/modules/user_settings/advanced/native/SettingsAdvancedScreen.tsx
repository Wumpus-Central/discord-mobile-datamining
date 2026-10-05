// discord_app/modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function getAdvancedSettings() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items2;
  let items3;
  let items4;
  let obj2;
  const obj = {
    label: intl.string(intl5.t["+U02+i"]),
    settings: items,
    subLabel: intl2.format(intl5.t["CY6q/Q"], obj2),
  };
  intl = intl5.intl;
  items = [MobileUserSettings.DEVELOPER_MODE];
  intl2 = intl5.intl;
  const items1 = [obj, , ,];
  obj2 = { apiDocsUrl: MarketingURLs.API_DOCS };
  const obj3 = { settings: items2, subLabel: intl3.string(intl5.t.gI2GEL) };
  items2 = [MobileUserSettings.LAUNCHPAD];
  intl3 = intl5.intl;
  items1[1] = obj3;
  const obj4 = { settings: items3 };
  items3 = [MobileUserSettings.CHANNEL_LIST_LAYOUT];
  items1[2] = obj4;
  const obj5 = { label: intl4.string(intl5.t["jnXV/V"]), settings: items4 };
  intl4 = intl5.intl;
  items4 = [MobileUserSettings.ICYMI_TAB];
  items1[3] = obj5;
  return items1;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const MarketingURLs = Constants.MarketingURLs;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let tmp8;
        const obj = react2;
        const cResult = obj.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { sections: getAdvancedSettings() };
          const createList = SettingBuilders.createList;
          SettingBuilders;
          const list = createList(obj2);
          cResult[0] = list;
          first = list;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = jsx(SettingLayoutDefault, { node: first });
          cResult[1] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[1];
        }
        return tmp8;
      }
    : () => {
        const node = react.useMemo(() => {
          const obj = SettingBuilders;
          const obj2 = { sections: getAdvancedSettings() };
          return obj.createList(obj2);
        }, []);
        return jsx(SettingLayoutDefault, { node });
      },
);
const result = size.fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default memoResult;
