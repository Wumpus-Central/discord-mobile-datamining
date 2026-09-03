// === Module 15702: SponsoredContentPreferencesScreen ===

// Module 15702 (SponsoredContentPreferencesScreen)
import combinedDefault from "combined" /* 1994 */;
import _modDef14578 from "module_14578" /* 14578 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7896 */;
import { HelpdeskArticles } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx");

export default function SponsoredContentPreferencesScreen() {
  let obj = { settings: items, subLabel: null };
  items = [MobileUserSettings.USE_DATA_FOR_QUESTS_SPONSORED_CONTENT];
  const intl = items1(1233).intl;
  obj = { helpdeskArticle: combinedDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  obj[1] = intl.format(items1(1233).t.cf9mvV, obj);
  items1 = [obj, , ];
  obj = { settings: items2, subLabel: null };
  items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT];
  const intl2 = items1(1233).intl;
  obj1 = { helpdeskArticle: null };
  const obj3 = combinedDefault;
  obj1[0] = combinedDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj[1] = intl2.format(items1(1233).t["2QFDU/"], obj1);
  items1[1] = obj;
  const items3 = [MobileUserSettings.MANAGE_SPONSORED_CONTENT];
  items1[2] = { settings: items3 };
  const items4 = [items1];
  const node = React.useMemo(() => {
    let obj = items1(closure_1_2[6]);
    obj = { sections: items1 };
    return obj.createList(obj);
  }, items4);
  return jsx(_modDef14578, { node });
};