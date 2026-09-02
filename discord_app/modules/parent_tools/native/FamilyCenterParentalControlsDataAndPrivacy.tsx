// === Module 14760: FamilyCenterParentalControlsDataAndPrivacy ===

// Module 14760 (FamilyCenterParentalControlsDataAndPrivacy)
import _modDef14563 from "module_14563" /* 14563 */;
import closure_3 from "noop" /* 19 */;
import { HelpdeskArticles } from "ME" /* 673 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7893 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx");

export default function FamilyCenterParentalControlsDataAndPrivacy() {
  const memo = React.useMemo(() => {
    let obj = { settings: items, subLabel: null };
    items = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
    const intl = memo(1233).intl;
    obj = { helpdeskArticle: null };
    let obj2 = callback(1994);
    obj[0] = obj2.getArticleURL(constants.DATA_PRIVACY_CONTROLS);
    obj[1] = intl.format(callback(2368).Z5yJZy, obj);
    const items1 = [obj, , , ];
    obj = { settings: items2, subLabel: null };
    items2 = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
    const intl2 = memo(1233).intl;
    obj1 = { helpdeskArticle: null };
    let obj5 = callback(1994);
    obj1[0] = obj5.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
    obj[1] = intl2.format(callback(2368).Imp6Ns, obj1);
    items1[1] = obj;
    obj2 = { settings: items3, subLabel: null };
    items3 = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
    const intl3 = memo(1233).intl;
    const obj3 = { helpdeskArticle: callback(1994).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
    obj2[1] = intl3.format(callback(2368).cnCK6b, obj3);
    items1[2] = obj2;
    const obj4 = { settings: items4, subLabel: null };
    items4 = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
    const intl4 = memo(1233).intl;
    obj5 = { helpdeskArticle: null };
    const obj9 = callback(1994);
    obj5[0] = callback(1994).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
    obj4[1] = intl4.format(callback(2368)["6mK5Pz"], obj5);
    items1[3] = obj4;
    return items1;
  }, []);
  let items = [memo];
  const node = React.useMemo(() => {
    let obj = memo(closure_1_2[7]);
    obj = { sections: memo };
    return obj.createList(obj);
  }, items);
  return jsx(_modDef14563, { node });
};