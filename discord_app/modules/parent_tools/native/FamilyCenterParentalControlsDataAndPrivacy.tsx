// === Module 15149: FamilyCenterParentalControlsDataAndPrivacy ===

// Module 15149 (FamilyCenterParentalControlsDataAndPrivacy)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import _modDef2480 from "module_2480" /* 2480 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import SettingLayoutDefault from "SettingLayout" /* 14904 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const MobileUserSettings = fn(8194).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx");

export default function FamilyCenterParentalControlsDataAndPrivacy() {
  const memo = noop.useMemo(() => {
    const obj = { settings: null, subLabel: null };
    const items = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
    obj.settings = items;
    const intl = memo(1115).intl;
    const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
    obj.subLabel = intl.format(_modDef2480.Z5yJZy, obj2);
    const items1 = [obj, , , ];
    const obj4 = { settings: null, subLabel: null };
    const items2 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
    obj4.settings = items2;
    const intl2 = memo(1115).intl;
    const obj5 = { helpdeskArticle: null };
    obj5.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
    obj4.subLabel = intl2.format(_modDef2480.Imp6Ns, obj5);
    items1[1] = obj4;
    const obj7 = { settings: null, subLabel: null };
    const items3 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
    obj7.settings = items3;
    const intl3 = memo(1115).intl;
    const obj8 = { helpdeskArticle: null };
    obj8.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
    obj7.subLabel = intl3.format(_modDef2480.cnCK6b, obj8);
    items1[2] = obj7;
    const obj10 = { settings: null, subLabel: null };
    const items4 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
    obj10.settings = items4;
    const intl4 = memo(1115).intl;
    const obj11 = { helpdeskArticle: null };
    obj11.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
    obj10.subLabel = intl4.format(_modDef2480["6mK5Pz"], obj11);
    items1[3] = obj10;
    return items1;
  }, []);
  let items = [memo];
  const node = noop.useMemo(() => SettingBuilders.createList({ sections: memo }), items);
  return jsx(SettingLayoutDefault, { node });
};