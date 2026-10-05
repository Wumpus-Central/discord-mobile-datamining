// discord_app/modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx
import intl8 from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SecureFramesUtils from "../../../rtc/SecureFramesUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import SettingsScreenNoticesDefault from "SettingsScreenNotices.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ConsentStore from "../../../../stores/ConsentStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function onClick() {
  return navigation.navigate(constants.ACCOUNT);
}
function useDataPrivacySettings(stackNavigation) {
  let P3kNfr;
  let cf9mvV;
  let format;
  let format2;
  let format3;
  let format4;
  let format5;
  let intl5;
  let intl7;
  let items;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj12;
  let obj14;
  let obj15;
  let obj17;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let prop;
  let prop1;
  let prop2;
  _require = stackNavigation;
  const obj = { settings: items, subLabel: format(prop, obj2) };
  items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
  const intl = require("intl").intl;
  format = intl.format;
  obj2 = { helpdeskArticle: obj3.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
  prop = require("intl").t["igTSG/"];
  const items1 = [obj, , ,];
  obj3 = HelpdeskUtilsDefault;
  const obj4 = { settings: items2, subLabel: format2(prop1, obj5) };
  items2 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
  const intl2 = require("intl").intl;
  format2 = intl2.format;
  obj5 = { helpdeskArticle: obj6.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED) };
  prop1 = require("intl").t["eQL/Mr"];
  items1[1] = obj4;
  obj6 = HelpdeskUtilsDefault;
  const obj7 = { settings: items3, subLabel: format3(cf9mvV, obj8) };
  items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
  const intl3 = require("intl").intl;
  format3 = intl3.format;
  obj8 = { helpdeskArticle: obj9.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
  cf9mvV = require("intl").t.cf9mvV;
  items1[2] = obj7;
  obj9 = HelpdeskUtilsDefault;
  const obj10 = { settings: items4, subLabel: format4(prop2, obj11) };
  items4 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
  const intl4 = require("intl").intl;
  format4 = intl4.format;
  obj11 = { helpdeskArticle: obj12.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
  prop2 = require("intl").t["2QFDU/"];
  items1[3] = obj10;
  obj12 = HelpdeskUtilsDefault;
  const push = items1.push;
  const obj13 = { label: intl5.string(require("intl").t.BG7QsQ), settings: items5, subLabel: format5(P3kNfr, obj14) };
  intl5 = require("intl").intl;
  items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
  const intl6 = require("intl").intl;
  format5 = intl6.format;
  obj14 = { helpdeskArticle: obj15.getArticleURL(constants.GDPR_REQUEST_DATA) };
  P3kNfr = require("intl").t.P3kNfr;
  obj15 = HelpdeskUtilsDefault;
  push(obj13);
  const obj16 = { settings: items6, subLabel: intl7.format(require("intl").t.N1P5gE, obj17) };
  items6 = [MobileUserSettings.PROFILE_PRIVACY];
  const push2 = items1.push;
  intl7 = require("intl").intl;
  obj17 = {
    onClick() {
      return stackNavigation.navigate(metroImportDefault.CONTENT_AND_SOCIAL);
    },
  };
  push2(obj16);
  const obj18 = { settings: items7 };
  items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
  items1.push(obj18);
  return items1;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ HelpdeskArticles: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let fetchedConsents;
      let format;
      let intl;
      let intl3;
      let intl4;
      let items1;
      let items2;
      let items3;
      let items5;
      let obj10;
      let obj8;
      let prop;
      let stackNavigation;
      let tmp2Result2;
      let tmp7;
      let tmp8;
      let obj = stackNavigation(576);
      const cResult = obj.c(8);
      let obj2 = stackNavigation(1490);
      stackNavigation = obj2.useStackNavigation();
      const tmp6 = useDataPrivacySettings(stackNavigation);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          if (!fetchedConsents.fetchedConsents) {
            const obj = stackNavigation(dependencyMap[11]);
            const consents = obj.fetchConsents();
          }
          const obj2 = stackNavigation(dependencyMap[12]);
          const harvestStatus = obj2.fetchHarvestStatus();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp7 = fn;
        tmp8 = items;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const effect = react.useEffect(tmp7, tmp8);
      if (cResult[2] === tmp6) {
        let tmp10;
        let tmp17;
        let tmp22;
        if (cResult[3] === stackNavigation) {
          tmp10 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { screen: stackNavigation(14621).SettingsScreen.DATA_AND_PRIVACY };
          const tmp20 = SettingsScreenNoticesDefault;
          const tmp21 = closure_8(tmp20, obj3);
          cResult[5] = tmp21;
          tmp17 = tmp21;
        } else {
          tmp17 = cResult[5];
        }
        if (cResult[6] !== tmp10) {
          const obj4 = { children: items1 };
          items1 = [tmp17];
          const obj5 = { node: tmp10 };
          items1[1] = closure_8(SettingLayoutDefault, obj5);
          const tmp27 = closure_10(closure_9, obj4);
          cResult[6] = tmp10;
          cResult[7] = tmp27;
          tmp22 = tmp27;
        } else {
          tmp22 = cResult[7];
        }
        return tmp22;
      }
      const obj6 = { sections: items2 };
      items2 = [...tmp6];
      const createList = stackNavigation(11129).createList;
      const obj7 = {
        label: intl.string(stackNavigation(1126).t.Me5lVK),
        settings: items3,
        subLabel: format(prop, obj8),
      };
      stackNavigation(11129);
      intl = tmp2(1126).intl;
      items3 = [,];
      ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr3[0], ENCRYPTION_VERIFIED_DEVICES: arr3[1] } =
        MobileUserSettings);
      const intl2 = tmp2(1126).intl;
      format = intl2.format;
      obj8 = { helpArticle: tmp2Result2.getSecureFramesHelpdeskArticle() };
      prop = tmp2(1126).t["/6sFWa"];
      const items4 = [obj7];
      tmp2Result2 = stackNavigation(9364);
      const obj9 = {
        label: intl3.string(stackNavigation(1126).t["+uHbqE"]),
        settings: items5,
        subLabel: intl4.format(stackNavigation(1126).t.R5N31P, obj10),
      };
      const arraySpreadResult = HermesBuiltin.arraySpread(items2, items4, tmp12);
      intl3 = tmp2(1126).intl;
      items5 = [,];
      ({ SAFETY_TERMS_OF_SERVICE: arr5[0], SAFETY_PRIVACY_POLICY: arr5[1] } = MobileUserSettings);
      intl4 = tmp2(1126).intl;
      const items6 = [obj9];
      obj10 = { onClick };
      HermesBuiltin.arraySpread(items2, items6, arraySpreadResult);
      const list = createList(obj6);
      cResult[2] = tmp6;
      cResult[3] = stackNavigation;
      cResult[4] = list;
      tmp10 = list;
    }
  : () => {
      let args;
      let fetchedConsents;
      let items1;
      let stackNavigation;
      let obj = stackNavigation(1490);
      stackNavigation = obj.useStackNavigation();
      const tmp2 = useDataPrivacySettings(stackNavigation);
      importDefault = tmp2;
      const effect = react.useEffect(() => {
        if (!fetchedConsents.fetchedConsents) {
          const obj = stackNavigation(dependencyMap[11]);
          const consents = obj.fetchConsents();
        }
        const obj2 = stackNavigation(dependencyMap[12]);
        const harvestStatus = obj2.fetchHarvestStatus();
      }, []);
      let items = [stackNavigation, tmp2];
      let obj2 = { children: items1 };
      const memo = react.useMemo(() => {
        let format;
        let intl;
        let intl3;
        let intl4;
        let items;
        let items1;
        let items3;
        let obj3;
        let obj4;
        let obj6;
        let prop;
        const obj = { sections: items };
        items = [...closure_1];
        const createList = SettingBuilders.createList;
        const obj2 = { label: intl.string(intl8.t.Me5lVK), settings: items1, subLabel: format(prop, obj3) };
        SettingBuilders;
        intl = intl8.intl;
        items1 = [,];
        ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr2[0], ENCRYPTION_VERIFIED_DEVICES: arr2[1] } =
          MobileUserSettings);
        const intl2 = intl8.intl;
        format = intl2.format;
        obj3 = { helpArticle: obj4.getSecureFramesHelpdeskArticle() };
        prop = intl8.t["/6sFWa"];
        const items2 = [obj2];
        let closure_0 = stackNavigation;
        obj4 = SecureFramesUtils;
        const obj5 = {
          label: intl3.string(intl8.t["+uHbqE"]),
          settings: items3,
          subLabel: intl4.format(intl8.t.R5N31P, obj6),
        };
        const arraySpreadResult = HermesBuiltin.arraySpread(items, items2, tmp3);
        intl3 = intl8.intl;
        items3 = [,];
        ({ SAFETY_TERMS_OF_SERVICE: arr4[0], SAFETY_PRIVACY_POLICY: arr4[1] } = MobileUserSettings);
        intl4 = intl8.intl;
        const items4 = [obj5];
        obj6 = { onClick };
        HermesBuiltin.arraySpread(items, items4, arraySpreadResult);
        return createList(obj);
      }, items);
      let obj3 = { screen: stackNavigation(14621).SettingsScreen.DATA_AND_PRIVACY };
      const tmp5 = SettingsScreenNoticesDefault;
      items1 = [closure_8(tmp5, obj3), closure_8(SettingLayoutDefault, { node: memo })];
      return closure_10(closure_9, obj2);
    };
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default tmp4;
