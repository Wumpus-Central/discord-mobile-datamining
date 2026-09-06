// === Module 14931: FamilyCenterParentalControlsDataAndPrivacy ===

// Module 14931 (FamilyCenterParentalControlsDataAndPrivacy)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef2396 from "module_2396" /* 2396 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import SettingLayoutDefault from "SettingLayout" /* 14689 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const MobileUserSettings = fn(7975).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx");

export default function FamilyCenterParentalControlsDataAndPrivacy() {
  const memo = noop.useMemo(() => {
    let obj = { settings: null, subLabel: null };
    const items = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
    obj.settings = items;
    const intl = memo(1114).intl;
    obj = { helpdeskArticle: null };
    let obj2 = HelpdeskUtilsDefault;
    obj.helpdeskArticle = obj2.getArticleURL(constants.DATA_PRIVACY_CONTROLS);
    obj.subLabel = intl.format(_modDef2396.Z5yJZy, obj);
    const items1 = [obj, , , ];
    obj = { settings: null, subLabel: null };
    const items2 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
    obj.settings = items2;
    const intl2 = memo(1114).intl;
    const obj1 = { helpdeskArticle: null };
    let obj5 = HelpdeskUtilsDefault;
    obj1.helpdeskArticle = obj5.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
    obj.subLabel = intl2.format(_modDef2396.Imp6Ns, obj1);
    items1[1] = obj;
    obj2 = { settings: null, subLabel: null };
    const items3 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
    obj2.settings = items3;
    const intl3 = memo(1114).intl;
    const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
    obj2.subLabel = intl3.format(_modDef2396.cnCK6b, obj3);
    items1[2] = obj2;
    const obj4 = { settings: null, subLabel: null };
    const items4 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
    obj4.settings = items4;
    const intl4 = memo(1114).intl;
    obj5 = { helpdeskArticle: null };
    obj5.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
    obj4.subLabel = intl4.format(_modDef2396["6mK5Pz"], obj5);
    items1[3] = obj4;
    return items1;
  }, []);
  let items = [memo];
  const node = noop.useMemo(() => {
    const obj = { sections: memo };
    return obj.createList(obj);
  }, items);
  return jsx(SettingLayoutDefault, { node });
};