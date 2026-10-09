// === Module 15128: FamilyCenterParentalControlsDataAndPrivacy ===

// Module 15128 (FamilyCenterParentalControlsDataAndPrivacy)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import _modDef2565 from "module_2565" /* 2565 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import SettingLayoutDefault from "SettingLayout" /* 14883 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const MobileUserSettings = fn(7974).MobileUserSettings;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterParentalControlsDataAndPrivacy() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { settings: null, subLabel: null };
    const items = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
    obj2.settings = items;
    const intl = util.intl;
    const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.DATA_PRIVACY_CONTROLS) };
    obj2.subLabel = intl.format(_modDef2565.Z5yJZy, obj3);
    const items1 = [obj2, , , ];
    const obj5 = { settings: null, subLabel: null };
    const items2 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
    obj5.settings = items2;
    const intl2 = util.intl;
    const obj6 = { helpdeskArticle: null };
    obj6.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.DATA_USED_FOR_RECOMMENDED);
    obj5.subLabel = intl2.format(_modDef2565.Imp6Ns, obj6);
    items1[1] = obj5;
    const obj8 = { settings: null, subLabel: null };
    const items3 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
    obj8.settings = items3;
    const intl3 = util.intl;
    const obj9 = { helpdeskArticle: null };
    obj9.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
    obj8.subLabel = intl3.format(_modDef2565.cnCK6b, obj9);
    items1[2] = obj8;
    const obj11 = { settings: null, subLabel: null };
    const items4 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
    obj11.settings = items4;
    const intl4 = util.intl;
    const obj12 = { helpdeskArticle: null };
    obj12.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
    obj11.subLabel = intl4.format(_modDef2565["6mK5Pz"], obj12);
    items1[3] = obj11;
    cResult[0] = items1;
    let first = items1;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj14 = { sections: first };
    const list = SettingBuilders.createList(obj14);
    cResult[1] = list;
    let tmp8 = list;
    const tmpResult = SettingBuilders;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj15 = { node: tmp8 };
    const tmp13 = jsx(SettingLayoutDefault, { node: tmp8 });
    cResult[2] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  return tmp10;
}) : (function FamilyCenterParentalControlsDataAndPrivacy() {
  const memo = noop.useMemo(() => {
    const obj = { settings: null, subLabel: null };
    const items = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
    obj.settings = items;
    const intl = memo(1126).intl;
    const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
    obj.subLabel = intl.format(_modDef2565.Z5yJZy, obj2);
    const items1 = [obj, , , ];
    const obj4 = { settings: null, subLabel: null };
    const items2 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
    obj4.settings = items2;
    const intl2 = memo(1126).intl;
    const obj5 = { helpdeskArticle: null };
    obj5.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
    obj4.subLabel = intl2.format(_modDef2565.Imp6Ns, obj5);
    items1[1] = obj4;
    const obj7 = { settings: null, subLabel: null };
    const items3 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
    obj7.settings = items3;
    const intl3 = memo(1126).intl;
    const obj8 = { helpdeskArticle: null };
    obj8.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
    obj7.subLabel = intl3.format(_modDef2565.cnCK6b, obj8);
    items1[2] = obj7;
    const obj10 = { settings: null, subLabel: null };
    const items4 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
    obj10.settings = items4;
    const intl4 = memo(1126).intl;
    const obj11 = { helpdeskArticle: null };
    obj11.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
    obj10.subLabel = intl4.format(_modDef2565["6mK5Pz"], obj11);
    items1[3] = obj10;
    return items1;
  }, []);
  let items = [memo];
  const node = noop.useMemo(() => SettingBuilders.createList({ sections: memo }), items);
  return jsx(SettingLayoutDefault, { node });
});