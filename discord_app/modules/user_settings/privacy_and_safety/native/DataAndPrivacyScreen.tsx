// discord_app/modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx
import util from "../../../../intl/index.native.tsx";
import SecureFramesUtils from "../../../rtc/SecureFramesUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConsentStore from "../../../../stores/ConsentStore.tsx";

require = fn;
const MobileUserSettings = fn(8424).MobileUserSettings;
const Constants = fn(1072);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default function DataAndPrivacySettings() {
  stackNavigation = stackNavigation(1498).useStackNavigation();
  closure_129_0 = stackNavigation;
  let obj = stackNavigation(1498);
  const pinotDataPrivacySections = stackNavigation(17842).usePinotDataPrivacySections();
  let obj3 = { settings: null, subLabel: null };
  let items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
  obj3.settings = items;
  let intl = stackNavigation(1114).intl;
  let obj4 = { helpdeskArticle: null };
  let obj2 = stackNavigation(17842);
  obj4.helpdeskArticle = items1(2062).getArticleURL(constants.DATA_PRIVACY_CONTROLS);
  obj3.subLabel = intl.format(stackNavigation(1114).t["igTSG/"], obj4);
  items1 = [obj3, , ,];
  let obj6 = { settings: null, subLabel: null };
  let items2 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
  obj6.settings = items2;
  let intl2 = stackNavigation(1114).intl;
  const obj7 = { helpdeskArticle: null };
  const obj5 = items1(2062);
  obj7.helpdeskArticle = items1(2062).getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
  obj6.subLabel = intl2.format(stackNavigation(1114).t["eQL/Mr"], obj7);
  items1[1] = obj6;
  const obj9 = { settings: null, subLabel: null };
  let items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
  obj9.settings = items3;
  let intl3 = stackNavigation(1114).intl;
  const obj10 = { helpdeskArticle: null };
  const obj8 = items1(2062);
  obj10.helpdeskArticle = items1(2062).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj9.subLabel = intl3.format(stackNavigation(1114).t.cf9mvV, obj10);
  items1[2] = obj9;
  const obj12 = { settings: null, subLabel: null };
  const items4 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
  obj12.settings = items4;
  let intl4 = stackNavigation(1114).intl;
  const obj13 = { helpdeskArticle: null };
  const obj11 = items1(2062);
  obj13.helpdeskArticle = items1(2062).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj12.subLabel = intl4.format(stackNavigation(1114).t["2QFDU/"], obj13);
  items1[3] = obj12;
  HermesBuiltin.arraySpread(pinotDataPrivacySections, 4);
  const obj15 = { label: null, settings: null, subLabel: null };
  const intl5 = stackNavigation(1114).intl;
  obj15.label = intl5.string(stackNavigation(1114).t.BG7QsQ);
  const items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
  obj15.settings = items5;
  const intl6 = stackNavigation(1114).intl;
  const obj16 = { helpdeskArticle: null };
  const obj14 = items1(2062);
  obj16.helpdeskArticle = items1(2062).getArticleURL(constants.GDPR_REQUEST_DATA);
  obj15.subLabel = intl6.format(stackNavigation(1114).t.P3kNfr, obj16);
  items1.push(obj15);
  const obj18 = { settings: null, subLabel: null };
  const items6 = [MobileUserSettings.PROFILE_PRIVACY];
  obj18.settings = items6;
  const intl7 = stackNavigation(1114).intl;
  obj18.subLabel = intl7.format(stackNavigation(1114).t.N1P5gE, {
    onClick() {
      return stackNavigation.navigate(constants2.CONTENT_AND_SOCIAL);
    },
  });
  items1.push(obj18);
  const obj20 = { settings: null };
  const items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
  obj20.settings = items7;
  items1.push(obj20);
  const effect = noop.useEffect(() => {
    if (!fetchedConsents.fetchedConsents) {
      const consents = stackNavigation(16704).fetchConsents();
      const obj = stackNavigation(16704);
    }
    const harvestStatus = stackNavigation(16707).fetchHarvestStatus();
    const obj2 = stackNavigation(16707);
  }, []);
  const items8 = [stackNavigation, items1];
  const obj21 = { children: null };
  const memo = noop.useMemo(() => {
    const obj2 = { sections: null };
    const items = [...items1];
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.Me5lVK);
    items1 = [,];
    ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr2[0], ENCRYPTION_VERIFIED_DEVICES: arr2[1] } =
      MobileUserSettings);
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
    const items2 = [,];
    ({ SAFETY_TERMS_OF_SERVICE: arr3[0], SAFETY_PRIVACY_POLICY: arr3[1] } = MobileUserSettings);
    obj6.settings = items2;
    const intl4 = util.intl;
    obj6.subLabel = intl4.format(util.t.R5N31P, {
      onClick() {
        return navigation.navigate(constants.ACCOUNT);
      },
    });
    const items3 = [obj6];
    HermesBuiltin.arraySpread(items3, tmp + 1);
    obj2.sections = items;
    return obj.createList(obj2);
  }, items8);
  const obj22 = { screen: null };
  const obj17 = items1(2062);
  const obj19 = {
    onClick() {
      return stackNavigation.navigate(constants2.CONTENT_AND_SOCIAL);
    },
  };
  obj22.screen = stackNavigation(16662).SettingsScreen.DATA_AND_PRIVACY;
  const items9 = [closure_8(items1(16662), obj22), closure_8(items1(16533), { node: memo })];
  obj21.children = items9;
  return closure_10(closure_9, obj21);
}
