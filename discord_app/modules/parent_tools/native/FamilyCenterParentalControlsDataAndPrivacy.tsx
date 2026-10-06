// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import intl5 from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef2521 from "../FamilyCenter.messages.js";
import SettingsConstants from "../../user_settings/core/native/SettingsConstants.tsx";
import SettingBuilders from "../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../settings/native/renderer/SettingLayout.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Imp6Ns;
      let Z5yJZy;
      let cnCK6b;
      let first;
      let format;
      let format2;
      let format3;
      let format4;
      let items;
      let items2;
      let items3;
      let items4;
      let obj10;
      let obj12;
      let obj13;
      let obj3;
      let obj4;
      let obj6;
      let obj7;
      let obj9;
      let tmp11;
      let tmp9;
      let v6mK5Pz;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { settings: items, subLabel: format(Z5yJZy, obj3) };
        items = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
        const intl = intl5.intl;
        format = intl.format;
        obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.DATA_PRIVACY_CONTROLS) };
        Z5yJZy = _modDef2521.Z5yJZy;
        const items1 = [obj2, , ,];
        obj4 = HelpdeskUtilsDefault;
        const obj5 = { settings: items2, subLabel: format2(Imp6Ns, obj6) };
        items2 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
        const intl2 = intl5.intl;
        format2 = intl2.format;
        obj6 = { helpdeskArticle: obj7.getArticleURL(HelpdeskArticles.DATA_USED_FOR_RECOMMENDED) };
        Imp6Ns = _modDef2521.Imp6Ns;
        items1[1] = obj5;
        obj7 = HelpdeskUtilsDefault;
        const obj8 = { settings: items3, subLabel: format3(cnCK6b, obj9) };
        items3 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
        const intl3 = intl5.intl;
        format3 = intl3.format;
        obj9 = { helpdeskArticle: obj10.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
        cnCK6b = _modDef2521.cnCK6b;
        items1[2] = obj8;
        obj10 = HelpdeskUtilsDefault;
        const obj11 = { settings: items4, subLabel: format4(v6mK5Pz, obj12) };
        items4 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
        const intl4 = intl5.intl;
        format4 = intl4.format;
        obj12 = { helpdeskArticle: obj13.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
        v6mK5Pz = _modDef2521["6mK5Pz"];
        items1[3] = obj11;
        cResult[0] = items1;
        first = items1;
        obj13 = HelpdeskUtilsDefault;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj14 = { sections: first };
        const tmpResult = SettingBuilders;
        const list = tmpResult.createList(obj14);
        cResult[1] = list;
        tmp9 = list;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = jsx(SettingLayoutDefault, { node: tmp9 });
        cResult[2] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[2];
      }
      return tmp11;
    }
  : () => {
      const memo = react.useMemo(() => {
        let Imp6Ns;
        let Z5yJZy;
        let cnCK6b;
        let format;
        let format2;
        let format3;
        let format4;
        let items;
        let items2;
        let items3;
        let items4;
        let obj11;
        let obj12;
        let obj2;
        let obj3;
        let obj5;
        let obj6;
        let obj8;
        let obj9;
        let v6mK5Pz;
        const obj = { settings: items, subLabel: format(Z5yJZy, obj2) };
        items = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
        const intl = memo(dependencyMap[6]).intl;
        format = intl.format;
        obj2 = { helpdeskArticle: obj3.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
        Z5yJZy = _modDef2521.Z5yJZy;
        const items1 = [obj, , ,];
        obj3 = HelpdeskUtilsDefault;
        const obj4 = { settings: items2, subLabel: format2(Imp6Ns, obj5) };
        items2 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
        const intl2 = memo(dependencyMap[6]).intl;
        format2 = intl2.format;
        obj5 = { helpdeskArticle: obj6.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED) };
        Imp6Ns = _modDef2521.Imp6Ns;
        items1[1] = obj4;
        obj6 = HelpdeskUtilsDefault;
        const obj7 = { settings: items3, subLabel: format3(cnCK6b, obj8) };
        items3 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
        const intl3 = memo(dependencyMap[6]).intl;
        format3 = intl3.format;
        obj8 = { helpdeskArticle: obj9.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
        cnCK6b = _modDef2521.cnCK6b;
        items1[2] = obj7;
        obj9 = HelpdeskUtilsDefault;
        const obj10 = { settings: items4, subLabel: format4(v6mK5Pz, obj11) };
        items4 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
        const intl4 = memo(dependencyMap[6]).intl;
        format4 = intl4.format;
        obj11 = { helpdeskArticle: obj12.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
        v6mK5Pz = _modDef2521["6mK5Pz"];
        items1[3] = obj10;
        obj12 = HelpdeskUtilsDefault;
        return items1;
      }, []);
      let items = [memo];
      const node = react.useMemo(() => {
        const obj = SettingBuilders;
        const obj2 = { sections: memo };
        return obj.createList(obj2);
      }, items);
      return jsx(SettingLayoutDefault, { node });
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx");

export default tmp2;
