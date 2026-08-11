// discord_app/modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx
import noop from "noop";
import hasConsented from "hasConsented";
import { MobileSetting } from "MobileSetting";
import ME from "ME";
import jsxProd from "jsxProd";

let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ HelpdeskArticles: closure_6, UserSettingsSections: error } = ME);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default function DataAndPrivacySettings() {
  let obj = stackNavigation(1499);
  stackNavigation = obj.useStackNavigation();
  obj = { settings: items, subLabel: null };
  items = [MobileSetting.USE_DATA_TO_IMPROVE_DISCORD];
  let intl = stackNavigation(1236).intl;
  obj = { helpdeskArticle: null };
  let obj3 = items1(1993);
  obj[0] = obj3.getArticleURL(constants.DATA_PRIVACY_CONTROLS);
  obj[1] = intl.format(stackNavigation(1236).t["igTSG/"], obj);
  items1 = [obj, , , ];
  let obj1 = { settings: items2, subLabel: null };
  items2 = [MobileSetting.USE_DATA_TO_CUSTOMIZE_DISCORD];
  let intl2 = stackNavigation(1236).intl;
  let obj2 = { helpdeskArticle: null };
  let obj6 = items1(1993);
  obj2[0] = obj6.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
  obj1[1] = intl2.format(stackNavigation(1236).t["eQL/Mr"], obj2);
  items1[1] = obj1;
  obj3 = { settings: items3, subLabel: null };
  items3 = [MobileSetting.USE_DATA_FOR_QUESTS];
  let intl3 = stackNavigation(1236).intl;
  const obj4 = { helpdeskArticle: null };
  let obj9 = items1(1993);
  obj4[0] = obj9.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj3[1] = intl3.format(stackNavigation(1236).t.cf9mvV, obj4);
  items1[2] = obj3;
  const obj5 = { settings: items4, subLabel: null };
  items4 = [MobileSetting.USE_DATA_FOR_QUESTS_3P];
  let intl4 = stackNavigation(1236).intl;
  obj6 = { helpdeskArticle: null };
  let obj12 = items1(1993);
  obj6[0] = obj12.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj5[1] = intl4.format(stackNavigation(1236).t["2QFDU/"], obj6);
  items1[3] = obj5;
  const obj7 = { label: null, settings: null, subLabel: null };
  const intl5 = stackNavigation(1236).intl;
  obj7[0] = intl5.string(stackNavigation(1236).t.BG7QsQ);
  const items5 = [MobileSetting.REQUEST_YOUR_DATA];
  obj7[1] = items5;
  const intl6 = stackNavigation(1236).intl;
  const obj8 = { helpdeskArticle: null };
  obj8[0] = items1(1993).getArticleURL(constants.GDPR_REQUEST_DATA);
  obj7[2] = intl6.format(stackNavigation(1236).t.P3kNfr, obj8);
  items1.push(obj7);
  obj9 = { settings: items6, subLabel: null };
  items6 = [MobileSetting.PROFILE_PRIVACY];
  const intl7 = stackNavigation(1236).intl;
  obj9[1] = intl7.format(stackNavigation(1236).t.N1P5gE, {
    onClick() {
      return stackNavigation.navigate(outer1_7.CONTENT_AND_SOCIAL);
    }
  });
  items1.push(obj9);
  const items7 = [MobileSetting.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
  items1.push({ settings: items7 });
  const effect = React.useEffect(() => {
    if (!fetchedConsents.fetchedConsents) {
      const consents = stackNavigation(14110).fetchConsents();
      const obj = stackNavigation(14110);
    }
    const harvestStatus = stackNavigation(14113).fetchHarvestStatus();
  }, []);
  const items8 = [stackNavigation, items1];
  const obj11 = { children: null };
  const memo = React.useMemo(() => {
    let obj = stackNavigation(outer1_2[11]);
    obj = { sections: null };
    const items = [...items1];
    obj = { label: null, settings: null, subLabel: null };
    const intl = stackNavigation(outer1_2[5]).intl;
    obj[0] = intl.string(stackNavigation(outer1_2[5]).t.Me5lVK);
    items1 = [, ];
    ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr2[0], ENCRYPTION_VERIFIED_DEVICES: arr2[1] } = outer1_5);
    obj[1] = items1;
    const intl2 = stackNavigation(outer1_2[5]).intl;
    const obj1 = { helpArticle: null };
    obj1[0] = stackNavigation(outer1_2[7]).getSecureFramesHelpdeskArticle();
    obj[2] = intl2.format(stackNavigation(outer1_2[5]).t["/6sFWa"], obj1);
    items[tmp] = obj;
    const obj2 = { label: null, settings: null, subLabel: null };
    const intl3 = stackNavigation(outer1_2[5]).intl;
    obj2[0] = intl3.string(stackNavigation(outer1_2[5]).t["+uHbqE"]);
    const items2 = [, ];
    ({ SAFETY_TERMS_OF_SERVICE: arr3[0], SAFETY_PRIVACY_POLICY: arr3[1] } = outer1_5);
    obj2[1] = items2;
    const intl4 = stackNavigation(outer1_2[5]).intl;
    obj2[2] = intl4.format(stackNavigation(outer1_2[5]).t.R5N31P, {
      onClick() {
        return navigation.navigate(outer1_7.ACCOUNT);
      }
    });
    const items3 = [obj2];
    HermesBuiltin.arraySpread(items3, tmp + 1);
    obj[0] = items;
    return obj.createList(obj);
  }, items8);
  obj12 = { screen: null };
  const obj10 = {
    onClick() {
      return stackNavigation.navigate(outer1_7.CONTENT_AND_SOCIAL);
    }
  };
  const obj16 = items1(1993);
  obj12[0] = stackNavigation(14070).SettingsScreen.DATA_AND_PRIVACY;
  const items9 = [callback(items1(14070), obj12), callback(items1(13895), { node: memo })];
  obj11[0] = items9;
  return callback2(closure_9, obj11);
};