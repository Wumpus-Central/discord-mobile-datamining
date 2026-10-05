// discord_app/modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function useSponsoredContentSettings() {
  let cf9mvV;
  let format;
  let format2;
  let items;
  let items2;
  let items3;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let prop;
  const obj = { settings: items, subLabel: format(cf9mvV, obj2) };
  items = [MobileUserSettings.USE_DATA_FOR_QUESTS_SPONSORED_CONTENT];
  const intl = intl3.intl;
  format = intl.format;
  obj2 = { helpdeskArticle: obj3.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  cf9mvV = intl3.t.cf9mvV;
  const items1 = [obj, ,];
  obj3 = HelpdeskUtilsDefault;
  const obj4 = { settings: items2, subLabel: format2(prop, obj5) };
  items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT];
  const intl2 = intl3.intl;
  format2 = intl2.format;
  obj5 = { helpdeskArticle: obj6.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  prop = intl3.t["2QFDU/"];
  items1[1] = obj4;
  const obj7 = { settings: items3 };
  items3 = [MobileUserSettings.MANAGE_SPONSORED_CONTENT];
  items1[2] = obj7;
  obj6 = HelpdeskUtilsDefault;
  return items1;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = useSponsoredContentSettings();
      if (cResult[0] !== tmp4) {
        const obj2 = { sections: tmp4 };
        const tmpResult = SettingBuilders;
        const list = tmpResult.createList(obj2);
        cResult[0] = tmp4;
        cResult[1] = list;
        tmp5 = list;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        const tmp10 = jsx(SettingLayoutDefault, { node: tmp5 });
        cResult[2] = tmp5;
        cResult[3] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : () => {
      const tmp = useSponsoredContentSettings();
      const sections = tmp;
      const items = [tmp];
      const node = react.useMemo(() => {
        const obj = SettingBuilders;
        const obj2 = { sections };
        return obj.createList(obj2);
      }, items);
      return jsx(SettingLayoutDefault, { node });
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx",
);

export default tmp2;
