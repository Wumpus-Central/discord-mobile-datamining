// === Module 15770: DataAndPrivacyScreen ===

// Module 15770 (DataAndPrivacyScreen)
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9364 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import SettingLayoutDefault from "SettingLayout" /* 14495 */;
import SettingsScreenNoticesDefault from "SettingsScreenNotices" /* 14617 */;
import noop from "module_19" /* 19 */;
import ConsentStore from "ConsentStore" /* 6084 */;

require = fn;
function useDataPrivacySettings(stackNavigation) {
  _require = stackNavigation;
  const obj = { settings: null, subLabel: null };
  const items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
  obj.settings = items;
  const intl = require("util").intl;
  const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
  obj.subLabel = intl.format(require("util").t["igTSG/"], obj2);
  const items1 = [obj, , , ];
  const obj4 = { settings: null, subLabel: null };
  const items2 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
  obj4.settings = items2;
  const intl2 = require("util").intl;
  const obj5 = { helpdeskArticle: null };
  obj5.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
  obj4.subLabel = intl2.format(require("util").t["eQL/Mr"], obj5);
  items1[1] = obj4;
  const obj7 = { settings: null, subLabel: null };
  const items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
  obj7.settings = items3;
  const intl3 = require("util").intl;
  const obj8 = { helpdeskArticle: null };
  obj8.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj7.subLabel = intl3.format(require("util").t.cf9mvV, obj8);
  items1[2] = obj7;
  const obj10 = { settings: null, subLabel: null };
  const items4 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
  obj10.settings = items4;
  const intl4 = require("util").intl;
  const obj11 = { helpdeskArticle: null };
  obj11.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
  obj10.subLabel = intl4.format(require("util").t["2QFDU/"], obj11);
  items1[3] = obj10;
  const obj13 = { label: null, settings: null, subLabel: null };
  const intl5 = require("util").intl;
  obj13.label = intl5.string(require("util").t.BG7QsQ);
  const items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
  obj13.settings = items5;
  const intl6 = require("util").intl;
  const obj14 = { helpdeskArticle: null };
  obj14.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.GDPR_REQUEST_DATA);
  obj13.subLabel = intl6.format(require("util").t.P3kNfr, obj14);
  items1.push(obj13);
  const obj16 = { settings: null, subLabel: null };
  const items6 = [MobileUserSettings.PROFILE_PRIVACY];
  obj16.settings = items6;
  const intl7 = require("util").intl;
  obj16.subLabel = intl7.format(require("util").t.N1P5gE, {
    onClick() {
      return stackNavigation.navigate(constants2.CONTENT_AND_SOCIAL);
    }
  });
  items1.push(obj16);
  const obj18 = { settings: null };
  const items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
  obj18.settings = items7;
  items1.push(obj18);
  return items1;
}
const MobileUserSettings = fn(7634).MobileUserSettings;
const Constants = fn(1085);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stackNavigation(576).c(8);
  let obj = stackNavigation(576);
  stackNavigation = stackNavigation(1490).useStackNavigation();
  const tmp5 = useDataPrivacySettings(stackNavigation);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      if (!fetchedConsents.fetchedConsents) {
        const consents = stackNavigation(14659).fetchConsents();
        const obj = stackNavigation(14659);
      }
      const harvestStatus = stackNavigation(14662).fetchHarvestStatus();
      const obj2 = stackNavigation(14662);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp6 = fn;
    tmp7 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[2] === tmp5) {
    if (cResult[3] === stackNavigation) {
      let tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { screen: tmp(14617).SettingsScreen.DATA_AND_PRIVACY };
      const tmp18 = closure_8(SettingsScreenNoticesDefault, obj3);
      cResult[5] = tmp18;
      let tmp14 = tmp18;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] !== tmp9) {
      const obj4 = { children: null };
      const items1 = [tmp14, ];
      const obj5 = { node: tmp9 };
      items1[1] = closure_8(SettingLayoutDefault, obj5);
      obj4.children = items1;
      const tmp24 = closure_10(closure_9, obj4);
      cResult[6] = tmp9;
      cResult[7] = tmp24;
      let tmp19 = tmp24;
    } else {
      tmp19 = cResult[7];
    }
    return tmp19;
  }
  let obj2 = stackNavigation(1490);
  const obj6 = { sections: null };
  const items2 = [...tmp5];
  const obj7 = { label: null, settings: null, subLabel: null };
  const intl = tmp(1126).intl;
  obj7.label = intl.string(stackNavigation(1126).t.Me5lVK);
  const items3 = [, ];
  ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr3[0], ENCRYPTION_VERIFIED_DEVICES: arr3[1] } = MobileUserSettings);
  obj7.settings = items3;
  const intl2 = tmp(1126).intl;
  const obj8 = { helpArticle: null };
  const tmpResult = stackNavigation(11129);
  obj8.helpArticle = stackNavigation(9364).getSecureFramesHelpdeskArticle();
  obj7.subLabel = intl2.format(stackNavigation(1126).t["/6sFWa"], obj8);
  const items4 = [obj7];
  const obj9 = { label: null, settings: null, subLabel: null };
  const tmpResult2 = stackNavigation(9364);
  const intl3 = tmp(1126).intl;
  obj9.label = intl3.string(stackNavigation(1126).t["+uHbqE"]);
  const items5 = [, ];
  ({ SAFETY_TERMS_OF_SERVICE: arr5[0], SAFETY_PRIVACY_POLICY: arr5[1] } = MobileUserSettings);
  obj9.settings = items5;
  const intl4 = tmp(1126).intl;
  obj9.subLabel = intl4.format(stackNavigation(1126).t.R5N31P, {
    onClick() {
      return navigation.navigate(constants.ACCOUNT);
    }
  });
  const items6 = [obj9];
  HermesBuiltin.arraySpread(items6, HermesBuiltin.arraySpread(items4, tmp10));
  obj6.sections = items2;
  const list = tmpResult.createList(obj6);
  cResult[2] = tmp5;
  cResult[3] = stackNavigation;
  cResult[4] = list;
  tmp9 = list;
  const arraySpreadResult = HermesBuiltin.arraySpread(items4, tmp10);
  const obj10 = {
    onClick() {
      return navigation.navigate(constants.ACCOUNT);
    }
  };
}) : (() => {
  stackNavigation = stackNavigation(1490).useStackNavigation();
  const tmp2 = useDataPrivacySettings(stackNavigation);
  importDefault = tmp2;
  const effect = noop.useEffect(() => {
    if (!fetchedConsents.fetchedConsents) {
      const consents = stackNavigation(14659).fetchConsents();
      const obj = stackNavigation(14659);
    }
    const harvestStatus = stackNavigation(14662).fetchHarvestStatus();
    const obj2 = stackNavigation(14662);
  }, []);
  let items = [stackNavigation, tmp2];
  let obj2 = { children: null };
  const memo = noop.useMemo(() => {
    const obj2 = { sections: null };
    const items = [...closure_1];
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.Me5lVK);
    const items1 = [, ];
    ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr2[0], ENCRYPTION_VERIFIED_DEVICES: arr2[1] } = MobileUserSettings);
    obj3.settings = items1;
    const intl2 = util.intl;
    const obj4 = { helpArticle: null };
    const obj = SettingBuilders;
    obj4.helpArticle = SecureFramesUtils.getSecureFramesHelpdeskArticle();
    obj3.subLabel = intl2.format(util.t["/6sFWa"], obj4);
    const items2 = [obj3];
    const navigation = stackNavigation;
    const obj6 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj6.label = intl3.string(util.t["+uHbqE"]);
    const items3 = [, ];
    ({ SAFETY_TERMS_OF_SERVICE: arr4[0], SAFETY_PRIVACY_POLICY: arr4[1] } = MobileUserSettings);
    obj6.settings = items3;
    const intl4 = util.intl;
    obj6.subLabel = intl4.format(util.t.R5N31P, {
      onClick() {
        return navigation.navigate(constants.ACCOUNT);
      }
    });
    const items4 = [obj6];
    HermesBuiltin.arraySpread(items4, HermesBuiltin.arraySpread(items2, tmp));
    obj2.sections = items;
    return obj.createList(obj2);
  }, items);
  let obj3 = { screen: null };
  let obj = stackNavigation(1490);
  obj3.screen = stackNavigation(14617).SettingsScreen.DATA_AND_PRIVACY;
  let items1 = [closure_8(SettingsScreenNoticesDefault, obj3), closure_8(SettingLayoutDefault, { node: memo })];
  obj2.children = items1;
  return closure_10(closure_9, obj2);
});