// === Module 15865: DataAndPrivacyScreen ===

// Module 15865 (DataAndPrivacyScreen)
import util from "util" /* 1114 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9150 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import noop from "module_19" /* 19 */;
import ConsentStore from "ConsentStore" /* 6595 */;

require = fn;
const MobileUserSettings = fn(7975).MobileUserSettings;
const Constants = fn(1074);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default function DataAndPrivacySettings() {
  let obj = stackNavigation(1483);
  stackNavigation = obj.useStackNavigation();
  closure_129_0 = stackNavigation;
  obj = { settings: null, subLabel: null };
  let items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
  obj.settings = items;
  let intl = stackNavigation(1114).intl;
  obj = { helpdeskArticle: null };
  let obj3 = items1(2024);
  obj.helpdeskArticle = obj3.getArticleURL(constants.DATA_PRIVACY_CONTROLS);
  obj.subLabel = intl.format(stackNavigation(1114).t["igTSG/"], obj);
  items1 = [obj, , , ];
  let obj1 = { settings: null, subLabel: null };
  let items2 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
  obj1.settings = items2;
  let intl2 = stackNavigation(1114).intl;
  let obj2 = { helpdeskArticle: null };
  let obj6 = items1(2024);
  obj2.helpdeskArticle = obj6.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
  obj1.subLabel = intl2.format(stackNavigation(1114).t["eQL/Mr"], obj2);
  items1[1] = obj1;
  obj3 = { settings: null, subLabel: null };
  let items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
  obj3.settings = items3;
  let intl3 = stackNavigation(1114).intl;
  const obj4 = { helpdeskArticle: null };
  let obj9 = items1(2024);
  obj4.helpdeskArticle = obj9.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj3.subLabel = intl3.format(stackNavigation(1114).t.cf9mvV, obj4);
  items1[2] = obj3;
  const obj5 = { settings: null, subLabel: null };
  const items4 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
  obj5.settings = items4;
  let intl4 = stackNavigation(1114).intl;
  obj6 = { helpdeskArticle: null };
  let obj12 = items1(2024);
  obj6.helpdeskArticle = obj12.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj5.subLabel = intl4.format(stackNavigation(1114).t["2QFDU/"], obj6);
  items1[3] = obj5;
  const obj7 = { label: null, settings: null, subLabel: null };
  const intl5 = stackNavigation(1114).intl;
  obj7.label = intl5.string(stackNavigation(1114).t.BG7QsQ);
  const items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
  obj7.settings = items5;
  const intl6 = stackNavigation(1114).intl;
  const obj8 = { helpdeskArticle: items1(2024).getArticleURL(constants.GDPR_REQUEST_DATA) };
  obj7.subLabel = intl6.format(stackNavigation(1114).t.P3kNfr, obj8);
  items1.push(obj7);
  obj9 = { settings: null, subLabel: null };
  const items6 = [MobileUserSettings.PROFILE_PRIVACY];
  obj9.settings = items6;
  const intl7 = stackNavigation(1114).intl;
  obj9.subLabel = intl7.format(stackNavigation(1114).t.N1P5gE, {
    onClick() {
      return stackNavigation.navigate(constants2.CONTENT_AND_SOCIAL);
    }
  });
  items1.push(obj9);
  const obj11 = { settings: null };
  const items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
  obj11.settings = items7;
  items1.push(obj11);
  const effect = noop.useEffect(() => {
    if (!fetchedConsents.fetchedConsents) {
      const consents = stackNavigation(14855).fetchConsents();
      const obj = stackNavigation(14855);
    }
    const harvestStatus = stackNavigation(14858).fetchHarvestStatus();
  }, []);
  const items8 = [stackNavigation, items1];
  obj12 = { children: null };
  const memo = noop.useMemo(() => {
    let obj = { sections: null };
    const items = [...items1];
    obj = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Me5lVK);
    items1 = [, ];
    ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr2[0], ENCRYPTION_VERIFIED_DEVICES: arr2[1] } = MobileUserSettings);
    obj.settings = items1;
    const intl2 = util.intl;
    const obj1 = { helpArticle: SecureFramesUtils.getSecureFramesHelpdeskArticle() };
    obj.subLabel = intl2.format(util.t["/6sFWa"], obj1);
    items[tmp] = obj;
    const navigation = stackNavigation;
    const obj2 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t["+uHbqE"]);
    const items2 = [, ];
    ({ SAFETY_TERMS_OF_SERVICE: arr3[0], SAFETY_PRIVACY_POLICY: arr3[1] } = MobileUserSettings);
    obj2.settings = items2;
    const intl4 = util.intl;
    obj2.subLabel = intl4.format(util.t.R5N31P, {
      onClick() {
        return navigation.navigate(constants.ACCOUNT);
      }
    });
    const items3 = [obj2];
    HermesBuiltin.arraySpread(items3, tmp + 1);
    obj.sections = items;
    return obj.createList(obj);
  }, items8);
  const obj13 = { screen: null };
  const obj10 = {
    onClick() {
      return stackNavigation.navigate(constants2.CONTENT_AND_SOCIAL);
    }
  };
  const obj16 = items1(2024);
  obj13.screen = stackNavigation(14815).SettingsScreen.DATA_AND_PRIVACY;
  const items9 = [closure_8(items1(14815), obj13), closure_8(items1(14689), { node: memo })];
  obj12.children = items9;
  return closure_10(closure_9, obj12);
};