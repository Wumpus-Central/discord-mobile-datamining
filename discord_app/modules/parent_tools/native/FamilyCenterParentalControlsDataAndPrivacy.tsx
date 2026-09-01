// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx
import _modDef14340 from "../../settings/native/renderer/SettingLayout.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import { MobileUserSettings } from "../../user_settings/core/native/SettingsConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx",
);

export default function FamilyCenterParentalControlsDataAndPrivacy() {
  const memo = React.useMemo(() => {
    let obj = { settings: items, subLabel: null };
    items = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
    const intl = memo(1236).intl;
    obj = { helpdeskArticle: null };
    let obj2 = callback(1995);
    obj[0] = obj2.getArticleURL(constants.DATA_PRIVACY_CONTROLS);
    obj[1] = intl.format(callback(2369).Z5yJZy, obj);
    const items1 = [obj, , ,];
    obj = { settings: items2, subLabel: null };
    items2 = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
    const intl2 = memo(1236).intl;
    obj1 = { helpdeskArticle: null };
    let obj5 = callback(1995);
    obj1[0] = obj5.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
    obj[1] = intl2.format(callback(2369).Imp6Ns, obj1);
    items1[1] = obj;
    obj2 = { settings: items3, subLabel: null };
    items3 = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
    const intl3 = memo(1236).intl;
    const obj3 = { helpdeskArticle: callback(1995).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
    obj2[1] = intl3.format(callback(2369).cnCK6b, obj3);
    items1[2] = obj2;
    const obj4 = { settings: items4, subLabel: null };
    items4 = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
    const intl4 = memo(1236).intl;
    obj5 = { helpdeskArticle: null };
    const obj9 = callback(1995);
    obj5[0] = callback(1995).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
    obj4[1] = intl4.format(callback(2369)["6mK5Pz"], obj5);
    items1[3] = obj4;
    return items1;
  }, []);
  let items = [memo];
  const node = React.useMemo(() => {
    let obj = memo(closure_1_2[7]);
    obj = { sections: memo };
    return obj.createList(obj);
  }, items);
  return jsx(_modDef14340, { node });
}
