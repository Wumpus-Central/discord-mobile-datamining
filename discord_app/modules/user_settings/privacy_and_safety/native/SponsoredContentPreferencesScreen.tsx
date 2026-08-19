// === Module 15002: SponsoredContentPreferencesScreen ===

// Module 15002 (SponsoredContentPreferencesScreen)
import combinedDefault from "combined" /* 1993 */;
import _modDef13991 from "module_13991" /* 13991 */;
import noop from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8198 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx");

export default function SponsoredContentPreferencesScreen() {
  const items = [MobileUserSettings.USE_DATA_FOR_QUESTS_SPONSORED_CONTENT];
  const intl = items1(1236).intl;
  let obj = { helpdeskArticle: combinedDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  obj[1] = intl.format(items1(1236).t.cf9mvV, obj);
  items1 = [obj, , ];
  obj = { settings: items2, subLabel: null };
  items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT];
  const intl2 = items1(1236).intl;
  obj1 = { helpdeskArticle: null };
  obj1[0] = combinedDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj[1] = intl2.format(items1(1236).t["2QFDU/"], obj1);
  items1[1] = obj;
  const items3 = [MobileUserSettings.MANAGE_SPONSORED_CONTENT];
  items1[2] = { settings: items3 };
  const items4 = [items1];
  const node = React.useMemo(() => {
    items1(dependencyMap[6]);
    const obj = { sections: items1 };
    return obj.createList(obj);
  }, items4);
  return jsx(_modDef13991, { node });
};