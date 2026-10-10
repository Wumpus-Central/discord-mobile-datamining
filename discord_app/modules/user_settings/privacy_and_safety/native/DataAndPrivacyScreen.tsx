// discord_app/modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import SecureFramesUtils from "../../../rtc/SecureFramesUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import SettingsScreenNoticesDefault from "SettingsScreenNotices.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConsentStore from "../../../../stores/ConsentStore.tsx";

require = fn;
const MobileUserSettings = fn(7992).MobileUserSettings;
const Constants = fn(1085);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDataPrivacySettings(arg0) {
      _require = arg0;
      const cResult = require("c").c(14);
      const obj = require("c");
      const pinotDataPrivacySections = require("PinotSettingsLazy").usePinotDataPrivacySections();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { settings: null, subLabel: null };
        const items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
        obj3.settings = items;
        const intl = tmp(1126).intl;
        const obj4 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
        obj3.subLabel = intl.format(tmp(1126).t["igTSG/"], obj4);
        const obj6 = { settings: null, subLabel: null };
        const items1 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
        obj6.settings = items1;
        const intl2 = tmp(1126).intl;
        const obj7 = { helpdeskArticle: null };
        obj7.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
        obj6.subLabel = intl2.format(tmp(1126).t["eQL/Mr"], obj7);
        const obj9 = { settings: null, subLabel: null };
        const items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
        obj9.settings = items2;
        const intl3 = tmp(1126).intl;
        const obj10 = { helpdeskArticle: null };
        obj10.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
        obj9.subLabel = intl3.format(tmp(1126).t.cf9mvV, obj10);
        const obj12 = { settings: null, subLabel: null };
        const items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
        obj12.settings = items3;
        const intl4 = tmp(1126).intl;
        const obj13 = { helpdeskArticle: null };
        obj13.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
        obj12.subLabel = intl4.format(tmp(1126).t["2QFDU/"], obj13);
        cResult[0] = obj3;
        cResult[1] = obj6;
        cResult[2] = obj9;
        cResult[3] = obj12;
        tmp5 = obj3;
        tmp6 = obj6;
        tmp7 = obj9;
        tmp8 = obj12;
      } else {
        [tmp5, tmp6, tmp7, tmp8] = cResult;
      }
      if (cResult[4] === arg0) {
        if (cResult[5] === pinotDataPrivacySections) {
          return cResult[6];
        }
      }
      const items4 = [tmp5, tmp6, tmp7, tmp8, ...pinotDataPrivacySections];
      let num5 = 4;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj15 = { label: null, settings: null, subLabel: null };
        const intl5 = tmp(1126).intl;
        obj15.label = intl5.string(tmp(1126).t.BG7QsQ);
        const items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
        obj15.settings = items5;
        const intl6 = tmp(1126).intl;
        const obj16 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.GDPR_REQUEST_DATA) };
        obj15.subLabel = intl6.format(tmp(1126).t.P3kNfr, obj16);
        cResult[7] = obj15;
        let tmp12 = obj15;
      } else {
        tmp12 = cResult[7];
      }
      items4.push(tmp12);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items6 = [MobileUserSettings.PROFILE_PRIVACY];
        cResult[8] = items6;
        let tmp17 = items6;
      } else {
        tmp17 = cResult[8];
      }
      if (cResult[9] !== arg0) {
        const intl7 = tmp(1126).intl;
        const obj18 = {
          onClick() {
            return navigation.navigate(constants2.CONTENT_AND_SOCIAL);
          },
        };
        const formatResult = intl7.format(tmp(1126).t.N1P5gE, obj18);
        cResult[9] = arg0;
        cResult[10] = formatResult;
        let tmp19 = formatResult;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] !== tmp19) {
        const obj19 = { settings: tmp17, subLabel: tmp19 };
        cResult[11] = tmp19;
        cResult[12] = obj19;
        let tmp21 = obj19;
      } else {
        tmp21 = cResult[12];
      }
      items4.push(tmp21);
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj20 = { settings: null };
        const items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
        obj20.settings = items7;
        cResult[13] = obj20;
        let tmp23 = obj20;
      } else {
        tmp23 = cResult[13];
      }
      items4.push(tmp23);
      cResult[num5] = arg0;
      cResult[5] = pinotDataPrivacySections;
      num5 = 6;
      cResult[6] = items4;
      const obj2 = require("PinotSettingsLazy");
    }
  : function useDataPrivacySettings(arg0) {
      _require = arg0;
      const pinotDataPrivacySections = require("PinotSettingsLazy").usePinotDataPrivacySections();
      const obj2 = { settings: null, subLabel: null };
      const items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
      obj2.settings = items;
      const intl = require("util").intl;
      const obj3 = { helpdeskArticle: null };
      const obj = require("PinotSettingsLazy");
      obj3.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.DATA_PRIVACY_CONTROLS);
      obj2.subLabel = intl.format(require("util").t["igTSG/"], obj3);
      const items1 = [obj2, , ,];
      const obj5 = { settings: null, subLabel: null };
      const items2 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
      obj5.settings = items2;
      const intl2 = require("util").intl;
      const obj6 = { helpdeskArticle: null };
      obj6.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
      obj5.subLabel = intl2.format(require("util").t["eQL/Mr"], obj6);
      items1[1] = obj5;
      const obj8 = { settings: null, subLabel: null };
      const items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
      obj8.settings = items3;
      const intl3 = require("util").intl;
      const obj9 = { helpdeskArticle: null };
      obj9.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
      obj8.subLabel = intl3.format(require("util").t.cf9mvV, obj9);
      items1[2] = obj8;
      const obj11 = { settings: null, subLabel: null };
      const items4 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
      obj11.settings = items4;
      const intl4 = require("util").intl;
      const obj12 = { helpdeskArticle: null };
      obj12.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
      obj11.subLabel = intl4.format(require("util").t["2QFDU/"], obj12);
      items1[3] = obj11;
      HermesBuiltin.arraySpread(pinotDataPrivacySections, 4);
      const obj14 = { label: null, settings: null, subLabel: null };
      const intl5 = require("util").intl;
      obj14.label = intl5.string(require("util").t.BG7QsQ);
      const items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
      obj14.settings = items5;
      const intl6 = require("util").intl;
      const obj15 = { helpdeskArticle: null };
      obj15.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.GDPR_REQUEST_DATA);
      obj14.subLabel = intl6.format(require("util").t.P3kNfr, obj15);
      items1.push(obj14);
      const obj17 = { settings: null, subLabel: null };
      const items6 = [MobileUserSettings.PROFILE_PRIVACY];
      obj17.settings = items6;
      const intl7 = require("util").intl;
      obj17.subLabel = intl7.format(require("util").t.N1P5gE, {
        onClick() {
          return navigation.navigate(constants2.CONTENT_AND_SOCIAL);
        },
      });
      items1.push(obj17);
      const obj19 = { settings: null };
      const items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
      obj19.settings = items7;
      items1.push(obj19);
      return items1;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DataAndPrivacySettings() {
      const cResult = stackNavigation(576).c(8);
      let obj = stackNavigation(576);
      stackNavigation = stackNavigation(1503).useStackNavigation();
      const tmp5 = closure_11(stackNavigation);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          if (!fetchedConsents.fetchedConsents) {
            const consents = stackNavigation(15111).fetchConsents();
            const obj = stackNavigation(15111);
          }
          const harvestStatus = stackNavigation(15114).fetchHarvestStatus();
          const obj2 = stackNavigation(15114);
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
          const obj3 = { screen: tmp(15069).SettingsScreen.DATA_AND_PRIVACY };
          const tmp18 = closure_8(SettingsScreenNoticesDefault, obj3);
          cResult[5] = tmp18;
          let tmp14 = tmp18;
        } else {
          tmp14 = cResult[5];
        }
        if (cResult[6] !== tmp9) {
          const obj4 = { children: null };
          const items1 = [tmp14];
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
      let obj2 = stackNavigation(1503);
      const obj6 = { sections: null };
      const items2 = [...tmp5];
      const obj7 = { label: null, settings: null, subLabel: null };
      const intl = tmp(1126).intl;
      obj7.label = intl.string(stackNavigation(1126).t.Me5lVK);
      const items3 = [,];
      ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr3[0], ENCRYPTION_VERIFIED_DEVICES: arr3[1] } =
        MobileUserSettings);
      obj7.settings = items3;
      const intl2 = tmp(1126).intl;
      const obj8 = { helpArticle: null };
      const tmpResult = stackNavigation(10663);
      obj8.helpArticle = stackNavigation(8828).getSecureFramesHelpdeskArticle();
      obj7.subLabel = intl2.format(stackNavigation(1126).t["/6sFWa"], obj8);
      const items4 = [obj7];
      const obj9 = { label: null, settings: null, subLabel: null };
      const tmpResult2 = stackNavigation(8828);
      const intl3 = tmp(1126).intl;
      obj9.label = intl3.string(stackNavigation(1126).t["+uHbqE"]);
      const items5 = [,];
      ({ SAFETY_TERMS_OF_SERVICE: arr5[0], SAFETY_PRIVACY_POLICY: arr5[1] } = MobileUserSettings);
      obj9.settings = items5;
      const intl4 = tmp(1126).intl;
      obj9.subLabel = intl4.format(stackNavigation(1126).t.R5N31P, {
        onClick() {
          return navigation.navigate(constants.ACCOUNT);
        },
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
        },
      };
    }
  : function DataAndPrivacySettings() {
      stackNavigation = stackNavigation(1503).useStackNavigation();
      const tmp2 = closure_11(stackNavigation);
      importDefault = tmp2;
      const effect = noop.useEffect(() => {
        if (!fetchedConsents.fetchedConsents) {
          const consents = stackNavigation(15111).fetchConsents();
          const obj = stackNavigation(15111);
        }
        const harvestStatus = stackNavigation(15114).fetchHarvestStatus();
        const obj2 = stackNavigation(15114);
      }, []);
      let items = [stackNavigation, tmp2];
      let obj2 = { children: null };
      const memo = noop.useMemo(() => {
        const obj2 = { sections: null };
        const items = [...closure_1];
        const obj3 = { label: null, settings: null, subLabel: null };
        const intl = util.intl;
        obj3.label = intl.string(util.t.Me5lVK);
        const items1 = [,];
        ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr2[0], ENCRYPTION_VERIFIED_DEVICES: arr2[1] } =
          MobileUserSettings);
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
        const items3 = [,];
        ({ SAFETY_TERMS_OF_SERVICE: arr4[0], SAFETY_PRIVACY_POLICY: arr4[1] } = MobileUserSettings);
        obj6.settings = items3;
        const intl4 = util.intl;
        obj6.subLabel = intl4.format(util.t.R5N31P, {
          onClick() {
            return navigation.navigate(constants.ACCOUNT);
          },
        });
        const items4 = [obj6];
        HermesBuiltin.arraySpread(items4, HermesBuiltin.arraySpread(items2, tmp));
        obj2.sections = items;
        return obj.createList(obj2);
      }, items);
      let obj3 = { screen: null };
      let obj = stackNavigation(1503);
      obj3.screen = stackNavigation(15069).SettingsScreen.DATA_AND_PRIVACY;
      let items1 = [closure_8(SettingsScreenNoticesDefault, obj3), closure_8(SettingLayoutDefault, { node: memo })];
      obj2.children = items1;
      return closure_10(closure_9, obj2);
    };
