// === Module 16201: DataAndPrivacyScreen ===

// Module 16201 (DataAndPrivacyScreen)
import util from "util" /* 1115 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9976 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import noop from "module_19" /* 19 */;
import ConsentStore from "ConsentStore" /* 6838 */;

require = fn;
const MobileUserSettings = fn(8237).MobileUserSettings;
const Constants = fn(1074);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default function DataAndPrivacySettings() {
  stackNavigation = stackNavigation(1484).useStackNavigation();
  closure_129_0 = stackNavigation;
  let obj2 = { settings: null, subLabel: null };
  let items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
  obj2.settings = items;
  let intl = stackNavigation(1115).intl;
  let obj3 = { helpdeskArticle: null };
  let obj = stackNavigation(1484);
  obj3.helpdeskArticle = items1(2108).getArticleURL(constants.DATA_PRIVACY_CONTROLS);
  obj2.subLabel = intl.format(stackNavigation(1115).t["igTSG/"], obj3);
  items1 = [obj2, , , ];
  const obj5 = { settings: null, subLabel: null };
  let items2 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
  obj5.settings = items2;
  let intl2 = stackNavigation(1115).intl;
  let obj6 = { helpdeskArticle: null };
  let obj4 = items1(2108);
  obj6.helpdeskArticle = items1(2108).getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
  obj5.subLabel = intl2.format(stackNavigation(1115).t["eQL/Mr"], obj6);
  items1[1] = obj5;
  const obj8 = { settings: null, subLabel: null };
  let items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
  obj8.settings = items3;
  let intl3 = stackNavigation(1115).intl;
  const obj9 = { helpdeskArticle: null };
  const obj7 = items1(2108);
  obj9.helpdeskArticle = items1(2108).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj8.subLabel = intl3.format(stackNavigation(1115).t.cf9mvV, obj9);
  items1[2] = obj8;
  const obj11 = { settings: null, subLabel: null };
  const items4 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
  obj11.settings = items4;
  let intl4 = stackNavigation(1115).intl;
  const obj12 = { helpdeskArticle: null };
  const obj10 = items1(2108);
  obj12.helpdeskArticle = items1(2108).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj11.subLabel = intl4.format(stackNavigation(1115).t["2QFDU/"], obj12);
  items1[3] = obj11;
  const obj14 = { label: null, settings: null, subLabel: null };
  const intl5 = stackNavigation(1115).intl;
  obj14.label = intl5.string(stackNavigation(1115).t.BG7QsQ);
  const items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
  obj14.settings = items5;
  const intl6 = stackNavigation(1115).intl;
  const obj15 = { helpdeskArticle: null };
  const obj13 = items1(2108);
  obj15.helpdeskArticle = items1(2108).getArticleURL(constants.GDPR_REQUEST_DATA);
  obj14.subLabel = intl6.format(stackNavigation(1115).t.P3kNfr, obj15);
  items1.push(obj14);
  const obj17 = { settings: null, subLabel: null };
  const items6 = [MobileUserSettings.PROFILE_PRIVACY];
  obj17.settings = items6;
  const intl7 = stackNavigation(1115).intl;
  obj17.subLabel = intl7.format(stackNavigation(1115).t.N1P5gE, {
    onClick() {
      return stackNavigation.navigate(constants2.CONTENT_AND_SOCIAL);
    }
  });
  items1.push(obj17);
  const obj19 = { settings: null };
  const items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
  obj19.settings = items7;
  items1.push(obj19);
  const effect = noop.useEffect(() => {
    if (!fetchedConsents.fetchedConsents) {
      const consents = stackNavigation(15140).fetchConsents();
      const obj = stackNavigation(15140);
    }
    const harvestStatus = stackNavigation(15143).fetchHarvestStatus();
    const obj2 = stackNavigation(15143);
  }, []);
  const items8 = [stackNavigation, items1];
  const obj20 = { children: null };
  const memo = noop.useMemo(() => {
    const obj2 = { sections: null };
    const items = [...items1];
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.Me5lVK);
    items1 = [, ];
    ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr2[0], ENCRYPTION_VERIFIED_DEVICES: arr2[1] } = MobileUserSettings);
    obj3.settings = items1;
    const intl2 = util.intl;
    const obj4 = { helpArticle: null };
    const obj = SettingBuilders;
    obj4.helpArticle = SecureFramesUtils.getSecureFramesHelpdeskArticle();
    obj3.subLabel = intl2.format(util.t["/6sFWa"], obj4);
    items[tmp] = obj3;
    const navigation = stackNavigation;
    const obj6 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj6.label = intl3.string(util.t["+uHbqE"]);
    const items2 = [, ];
    ({ SAFETY_TERMS_OF_SERVICE: arr3[0], SAFETY_PRIVACY_POLICY: arr3[1] } = MobileUserSettings);
    obj6.settings = items2;
    const intl4 = util.intl;
    obj6.subLabel = intl4.format(util.t.R5N31P, {
      onClick() {
        return navigation.navigate(constants.ACCOUNT);
      }
    });
    const items3 = [obj6];
    HermesBuiltin.arraySpread(items3, tmp + 1);
    obj2.sections = items;
    return obj.createList(obj2);
  }, items8);
  const obj21 = { screen: null };
  const obj16 = items1(2108);
  const obj18 = {
    onClick() {
      return stackNavigation.navigate(constants2.CONTENT_AND_SOCIAL);
    }
  };
  obj21.screen = stackNavigation(15099).SettingsScreen.DATA_AND_PRIVACY;
  const items9 = [closure_8(items1(15099), obj21), closure_8(items1(14971), { node: memo })];
  obj20.children = items9;
  return closure_10(closure_9, obj20);
};