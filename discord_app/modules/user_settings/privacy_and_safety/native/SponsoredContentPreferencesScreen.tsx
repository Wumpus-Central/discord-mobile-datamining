// discord_app/modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MobileUserSettings = fn(7975).MobileUserSettings;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx",
);

export default function SponsoredContentPreferencesScreen() {
  let obj = { settings: null, subLabel: null };
  const items = [MobileUserSettings.USE_DATA_FOR_QUESTS_SPONSORED_CONTENT];
  obj.settings = items;
  const intl = items1(1114).intl;
  obj = { helpdeskArticle: null };
  let obj2 = HelpdeskUtilsDefault;
  obj.helpdeskArticle = obj2.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj.subLabel = intl.format(items1(1114).t.cf9mvV, obj);
  items1 = [obj, ,];
  obj = { settings: null, subLabel: null };
  const items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT];
  obj.settings = items2;
  const intl2 = items1(1114).intl;
  const obj1 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  obj.subLabel = intl2.format(items1(1114).t["2QFDU/"], obj1);
  items1[1] = obj;
  obj2 = { settings: null };
  const items3 = [MobileUserSettings.MANAGE_SPONSORED_CONTENT];
  obj2.settings = items3;
  items1[2] = obj2;
  const items4 = [items1];
  const node = noop.useMemo(() => {
    const obj = { sections: items1 };
    return obj.createList(obj);
  }, items4);
  return jsx(SettingLayoutDefault, { node });
}
