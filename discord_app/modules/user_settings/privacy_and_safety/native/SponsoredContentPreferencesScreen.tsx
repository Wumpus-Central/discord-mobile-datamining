// === Module 15769: SponsoredContentPreferencesScreen ===

// Module 15769 (SponsoredContentPreferencesScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import SettingLayoutDefault from "SettingLayout" /* 14499 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
  const items1 = [obj, , ];
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const tmp = useSponsoredContentSettings();
  const sections = tmp;
  const items = [tmp];
  const node = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { sections };
    return obj.createList(obj2);
  }, items);
  return jsx(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx");

export default tmp2;