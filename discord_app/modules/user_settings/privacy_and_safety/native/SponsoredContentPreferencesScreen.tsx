// === Module 15450: SponsoredContentPreferencesScreen ===

// Module 15450 (SponsoredContentPreferencesScreen)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2110 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
import SettingLayoutDefault from "SettingLayout" /* 14223 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(7412).MobileUserSettings;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx");

export default function SponsoredContentPreferencesScreen() {
  const obj = { settings: null, subLabel: null };
  const items = [MobileUserSettings.USE_DATA_FOR_QUESTS_SPONSORED_CONTENT];
  obj.settings = items;
  const intl = items1(1115).intl;
  const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  obj.subLabel = intl.format(items1(1115).t.cf9mvV, obj2);
  items1 = [obj, , ];
  const obj4 = { settings: null, subLabel: null };
  const items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT];
  obj4.settings = items2;
  const intl2 = items1(1115).intl;
  const obj5 = { helpdeskArticle: null };
  obj5.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj4.subLabel = intl2.format(items1(1115).t["2QFDU/"], obj5);
  items1[1] = obj4;
  const obj7 = { settings: null };
  const items3 = [MobileUserSettings.MANAGE_SPONSORED_CONTENT];
  obj7.settings = items3;
  items1[2] = obj7;
  const items4 = [items1];
  const node = noop.useMemo(() => SettingBuilders.createList({ sections: items1 }), items4);
  return jsx(SettingLayoutDefault, { node });
};